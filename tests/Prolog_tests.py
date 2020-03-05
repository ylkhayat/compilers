from pyswip import Prolog
import argparse
import functools 

class Cell:
    def __init__(self, parent, ben, string):  
        self.parent = parent
        self.start = ben 
        self.end = None
        self.arr = []
        self.last_unfilled = []
        self.string = string

    def open(self, ben, string):
        lu_length = len(self.last_unfilled)
        if(lu_length == 0):
            length = len(self.arr)
            self.arr.append(Cell(self, ben, string))
            self.last_unfilled.append(length)
        else:
            self.arr[self.last_unfilled[-1]].open(ben, string)
       

    def close(self, last):
        lu_length = len(self.last_unfilled)
        if(lu_length == 0):
            self.end = last
            if(not self.parent == None):
                self.parent.popParent()
        else:
            self.arr[self.last_unfilled[-1]].close(last)

    def popParent(self):
        self.last_unfilled.pop()
    
    def print(self, colors_list, index):
        color_size = len(colors_list)
        chosen_color = colors_list[index % color_size]
        for cell in self.arr:
            cell.directly_print(colors_list, index + 1)
    def directly_print(self, colors_list, index):
        color_size = len(colors_list)
        chosen_color = colors_list[index % color_size]
        print(f"{chosen_color}{self.string[self.start:self.end]}{bcolors.ENDC}")



class LinkedList:  
    controller = None

    def add(self, ben, string):
        if(self.controller == None):
            self.controller = Cell(None, ben, string)
        else:
            self.controller.open(ben, string)
    
    def close(self, last):
        self.controller.close(last)
    
    def print(self, colors_list):
        self.controller.print(colors_list, 0)


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


PROLOG_FILE = "DCG.pl"

parser = argparse.ArgumentParser(description='Automate prolog testing')
parser.add_argument('--accepted',
                    default=False,
                    action='store_true',
                    help='test only accepted queries')
parser.add_argument('--rejected',
                    default=False,
                    action='store_true',
                    help='test only rejected queries')
parser.add_argument('--display',
                    default=False,
                    action='store_true',
                    help='display')

args = parser.parse_args()

queries = open('./tests/queries.txt', 'r')

prolog = Prolog()
prolog.consult(PROLOG_FILE)

def smoothen_print(str):
    return str["PT"]+'\n'

def color_output(str, step):
    linked_list = LinkedList()
    for i in range(len(str)):
        charac = str[i]
        if(charac == "("):
            linked_list.add(i, str)
        elif(charac == ")"):
            linked_list.close(i)
    linked_list.print(colors_list)
    return

colors_list = [bcolors.OKGREEN, bcolors.OKBLUE, bcolors.WARNING]


errors = 0
passed_accept = 0
passed_reject = 0
total_accept = 0
total_reject = 0
for query in queries.readlines():
    answer = query[:6]
    prolog_query = query[7:]
    
    if(answer == "accept"):
        total_accept += 1
    elif(args.accepted):
        continue

    if(answer == "reject"):
        total_reject += 1
    elif(args.rejected):
        continue

    result = list(prolog.query(prolog_query))
    if not result and answer == "accept":
        errors += 1
        print(prolog_query, "Error!")
        continue
    elif args.display and len(result) > 0:
        print(f"{bcolors.OKBLUE}{bcolors.UNDERLINE}Prolog Query{bcolors.ENDC}\n", f"{bcolors.WARNING}{prolog_query}{bcolors.ENDC}")
        for text in set(list(map(smoothen_print, result))):
            # print(f"{text}")
            color_output(text, 0)


    if result and answer == "reject":
        errors += 1
        print(f"{bcolors.FAIL}Expected False got True!{bcolors.ENDC}")
        print(f"{bcolors.BOLD}{prolog_query}{bcolors.ENDC}")
        print(f"{bcolors.FAIL}-----------------------------{bcolors.ENDC}")
    
    if(answer == "accept"):
        passed_accept += 1
    elif(answer == "reject"):
        passed_reject += 1

if not errors:
    print(f"{bcolors.OKGREEN}All Tests Passed!{bcolors.ENDC} Accepted {passed_accept}/{total_accept} | Rejected {passed_reject}/{total_reject}")
else:
    print(f"{bcolors.OKGREEN}{passed_accept}/{total_accept} tests passed.{bcolors.ENDC}\n{bcolors.FAIL}You have {errors}/{total_reject} errors{bcolors.ENDC}")
