% ["the", "young", "boy", "who", "worked", "for", "old", "man", "pushed", "and", "stored", "a", "big", "box", "in", "large", "empty", "room", "after", "school", "woman", "gave", "poor", "whom", "they", "liked", "white", "envelope", "shed", "behind", "building", "every", "quickly", "climbed", "some", "tree", "while", "girl", "secretly", "watched", "brilliant", "students", "many", "professors", "admired", "talented", "lecturers", "appreciated", "bright", "scientists", "researchers"]

% the, young, boy, who, worked, for, the, old, man, pushed, and, stored, a, big, box, in, the, large, empty, room, after, school
noun(n(man)) --> [man].
noun(n(men)) --> [men].
noun(n(boy)) --> [boy].
noun(n(boys)) --> [boys].
noun(n(box)) --> [box].
noun(n(boxes)) --> [boxes].
noun(n(room)) --> [room].
noun(n(rooms)) --> [rooms].
noun(n(school)) --> [school].
noun(n(schools)) --> [schools].
noun(n(woman)) --> [woman].
noun(n(envelope)) --> [envelope].
noun(n(envelopes)) --> [envelopes].
noun(n(building)) --> [building].
noun(n(buildings)) --> [buildings].
noun(n(tree)) --> [tree].
noun(n(trees)) --> [trees].
noun(n(girl)) --> [girl].
noun(n(girls)) --> [girls].
noun(n(student)) --> [student].
noun(n(students)) --> [students].
noun(n(professor)) --> [professor].
noun(n(professors)) --> [professors].
noun(n(lecture)) --> [lecture].
noun(n(lecturers)) --> [lecturers].
noun(n(scientist)) --> [scientist].
noun(n(scientists)) --> [scientists].
noun(n(researcher)) --> [researcher].
noun(n(researchers)) --> [researchers].
noun(n(shed)) --> [shed].
noun(n(teachers)) --> [teachers].

comp_verb(v(gave)) --> [gave].
sing_verb(v(worked)) --> [worked].
sing_verb(v(pushed)) --> [pushed].
sing_verb(v(stored)) --> [stored].
sing_verb(v(shed)) --> [shed].
sing_verb(v(liked)) --> [liked].
sing_verb(v(climbed)) --> [climbed].
sing_verb(v(watched)) --> [watched].
sing_verb(v(admired)) --> [admired].
sing_verb(v(appreciated)) --> [appreciated].
sing_verb(v(accepted)) --> [accepted].
sing_verb(v(added)) --> [added].
sing_verb(v(admired)) --> [admired].
sing_verb(v(admited)) --> [admited].
sing_verb(v(advised)) --> [advised].
sing_verb(v(afforded)) --> [afforded].
sing_verb(v(agreed)) --> [agreed].
sing_verb(v(alerted)) --> [alerted].
sing_verb(v(allowed)) --> [allowed].
sing_verb(v(amused)) --> [amused].
sing_verb(v(analysed)) --> [analysed].
sing_verb(v(announced)) --> [announced].
sing_verb(v(annoyed)) --> [annoyed].
sing_verb(v(answered)) --> [answered].
sing_verb(v(apologised)) --> [apologised].
sing_verb(v(appeared)) --> [appeared].
sing_verb(v(applauded)) --> [applauded].
sing_verb(v(appreciated)) --> [appreciated].
sing_verb(v(approved)) --> [approved].
sing_verb(v(argued)) --> [argued].
sing_verb(v(arranged)) --> [arranged].
sing_verb(v(arrested)) --> [arrested].
sing_verb(v(arrived)) --> [arrived].
sing_verb(v(asked)) --> [asked].
sing_verb(v(attached)) --> [attached].
sing_verb(v(attacked)) --> [attacked].
sing_verb(v(attempted)) --> [attempted].
sing_verb(v(attended)) --> [attended].
sing_verb(v(attracted)) --> [attracted].
sing_verb(v(avoided)) --> [avoided].
sing_verb(v(worked)) --> [worked].
verb(V) --> sing_verb(V); comp_verb(V).


adjc(aj(young)) --> [young].
adjc(aj(poor)) --> [poor].
adjc(aj(old)) --> [old].
adjc(aj(big)) --> [big].
adjc(aj(large)) --> [large].
adjc(aj(empty)) --> [empty].
adjc(aj(white)) --> [white].
adjc(aj(wooden)) --> [wooden].
adjc(aj(broken)) --> [broken].
adjc(aj(round)) --> [round].
adjc(aj(brilliant)) --> [brilliant].
adjc(aj(talented)) --> [talented].
adjc(aj(many)) --> [many].
adjc(aj(bright)) --> [bright].
adjc(aj(smart)) --> [smart].
adjc(aj(dumb)) --> [dumb].
adjc(aj(thrilled)) --> [thrilled].
adjc(aj(sad)) --> [sad].
adjc(aj(attractive)) --> [attractive].
adjc(aj(bald)) --> [bald].
adjc(aj(beautiful)) --> [beautiful].
adjc(aj(chubby)) --> [chubby].
adjc(aj(clean)) --> [clean].
adjc(aj(dazzling)) --> [dazzling].
adjc(aj(drab)) --> [drab].
adjc(aj(elegant)) --> [elegant].
adjc(aj(fancy)) --> [fancy].
adjc(aj(fit)) --> [fit].
adjc(aj(flabby)) --> [flabby].
adjc(aj(glamorous)) --> [glamorous].
adjc(aj(gorgeous)) --> [gorgeous].
adjc(aj(handsome)) --> [handsome].
adjc(aj(long)) --> [long].
adjc(aj(magnificent)) --> [magnificent].
adjc(aj(muscular)) --> [muscular].
adjc(aj(plain)) --> [plain].
adjc(aj(plump)) --> [plump].

c_pron(pr(they)) --> [they].
c_pron(pr(he)) --> [he].
c_pron(pr(she)) --> [she].
c_pron(pr(it)) --> [it].
c_pron(pr(who)) --> [who].
c_pron(pr(many)) --> [many].
dep_pron(pr(whom)) --> [whom].
pron(P) --> dep_pron(P); c_pron(P).

conj(c(and)) --> [and].
conj(c(nor)) --> [nor].
conj(c(but)) --> [but].
conj(c(or)) --> [or].
conj(c(yet)) --> [yet].
conj(c(so)) --> [so].

adv(ab(secretly)) --> [secretly].
adv(ab(quickly)) --> [quickly].
adv(ab(oddly)) --> [oddly].
adv(ab(offensively)) --> [offensively].
adv(ab(officially)) --> [officially].
adv(ab(often)) --> [often].
adv(ab(only)) --> [only].
adv(ab(openly)) --> [openly].
adv(ab(optimistically)) --> [optimistically].
adv(ab(overconfidently)) --> [overconfidently].
adv(ab(painfully)) --> [painfully].
adv(ab(partially)) --> [partially].
adv(ab(patiently)) --> [patiently].
adv(ab(perfectly)) --> [perfectly].
adv(ab(physically)) --> [physically].
adv(ab(playfully)) --> [playfully].
adv(ab(politely)) --> [politely].
adv(ab(poorly)) --> [poorly].
adv(ab(positively)) --> [positively].
adv(ab(potentially)) --> [potentially].
adv(ab(powerfully)) --> [powerfully].
adv(ab(promptly)) --> [promptly].
adv(ab(properly)) --> [properly].
adv(ab(punctually)) --> [punctually].
adv(ab(quaintly)) --> [quaintly].
adv(ab(queasily)) --> [queasily].
adv(ab(queerly)) --> [queerly].
adv(ab(questionably)) --> [questionably].
adv(ab(quicker)) --> [quicker].
adv(ab(quickly)) --> [quickly].
adv(ab(quietly)) --> [quietly].
adv(ab(quirkily)) --> [quirkily].
adv(ab(quizzically)) --> [quizzically].
adv(ab(randomly)) --> [randomly].
adv(ab(rapidly)) --> [rapidly].
adv(ab(rarely)) --> [rarely].
adv(ab(readily)) --> [readily].
adv(ab(gently)) --> [gently].


% # Prepositions # %

% ## Start Preposition ## %
start_prep(sp(to)) --> [to].
start_prep(sp(of)) --> [of].
start_prep(sp(about)) --> [about].
start_prep(sp(at)) --> [at].
start_prep(sp(before)) --> [before].
start_prep(sp(after)) --> [after].
start_prep(sp(by)) --> [by].
start_prep(sp(behind)) --> [behind].
start_prep(sp(during)) --> [during].
start_prep(sp(for)) --> [for].
start_prep(sp(from)) --> [from].
start_prep(sp(in)) --> [in].
start_prep(sp(over)) --> [over].
start_prep(sp(under)) --> [under].
start_prep(sp(with)) --> [with].
verb_start_prep(sp(while)) --> [while].

% ## Careless Preposition ## %
c_prep(prp(into)) --> [into].
c_prep(prp(including)) --> [including].
c_prep(prp(until)) --> [until].
c_prep(prp(against)) --> [against].
c_prep(prp(among)) --> [among].
c_prep(prp(throughout)) --> [throughout].
c_prep(prp(despite)) --> [despite].
c_prep(prp(towards)) --> [towards].
c_prep(prp(upon)) --> [upon].
c_prep(prp(concerning)) --> [concerning].
c_prep(prp(on)) --> [on].
c_prep(prp(like)) --> [like].

prep(P) --> start_prep(P); c_prep(P); verb_start_prep(P).


% # Determiners # %

% ## Possessive Determiners ## %
poss_det(d(my)) --> [my].
poss_det(d(your)) --> [your].
poss_det(d(their)) --> [their].
poss_det(d(our)) --> [our].
poss_det(d(his)) --> [his].
poss_det(d(her)) --> [her].
poss_det(d(its)) --> [its].
poss_det(d(her)) --> [her].

% ## Demonstrative Determiners ## %
demon_det(d(this)) --> [this].
demon_det(d(that)) --> [that].
demon_det(d(these)) --> [these].
demon_det(d(those)) --> [those].

% ## Articles ## %
article(a(a)) --> [a].
article(a(an)) --> [an].
article(a(the)) --> [the].

% ## Quantifiers ## %
quant_det(qd(every)) --> [every].
quant_det(qd(many)) --> [many].
quant_det(qd(no)) --> [no].
quant_det(qd(some)) --> [some].

det(D) --> poss_det(D); demon_det(D); article(D); quant_det(D).



s(S) --> sentence(S).

sentence(s(NP, VP)) --> noun_phrase(NP), verb_phrase(VP).
sentence(s(NP, VP, PP)) --> noun_phrase(NP), verb_phrase(VP), prep_phrase(PP).

% >>> Noun Phrases >>> %
noun_phrase(np(N)) --> noun(N).
noun_phrase(np(N1, C, N2)) --> adject_phrase(N1), conj_phrase(C), noun_phrase(N2).
noun_phrase(np(AP)) --> adject_phrase(AP).
noun_phrase(np(P, AP)) --> pron(P), adverb_phrase(AP).
noun_phrase(np(DP)) --> det_phrase(DP).
noun_phrase(np(DP1, C, DP2)) --> det_phrase(DP1), conj_phrase(C), det_phrase(DP2).
noun_phrase(np(DP, PP)) --> det_phrase(DP), prep_phrase(PP).
% <<< Noun Phrases <<< %

% >>> Prepositional Phrases >>> %
prep_phrase(PP) --> noun_prep_phrase(PP); verb_prep_phrase(PP).
noun_prep_phrase(pp(P, NP)) --> start_prep(P), noun_phrase(NP).
verb_prep_phrase(pp(P, NP)) --> verb_start_prep(P), sentence(NP).
verb_prep_phrase(pp(P, AP)) --> start_prep(P), adject_phrase(AP).
% <<< Prepositional Phrases <<< %

% >>> Determiner Phrases >>> %
det_phrase(DP) --> inf_def_det_phrase(DP); poss_det_phrase(DP); demon_det_phrase(DP); quant_det_phrase(DP). 
inf_def_det_phrase(dp(D, N)) --> article(D), noun(N).
inf_def_det_phrase(dp(D, AP, N)) --> article(D), adject_phrase(AP), noun(N).
inf_def_det_phrase(dp(D, AP1, N, AP2)) --> article(D), adject_phrase(AP1), noun(N), adject_phrase(AP2).
poss_det_phrase(dp(D, N)) --> poss_det(D), noun(N).
poss_det_phrase(dp(D, AP, N)) --> poss_det(D), adject_phrase(AP), noun(N).
demon_det_phrase(dp(D, N)) --> demon_det(D), noun(N).
demon_det_phrase(dp(D, AP, N)) --> demon_det(D), adject_phrase(AP), noun(N).
quant_det_phrase(dp(D, N)) --> quant_det(D), noun(N).
quant_det_phrase(dp(D, AP, N)) --> quant_det(D), adject_phrase(AP), noun(N).
% <<< Determiner Phrases <<< %


% >>> Verb Phrases >>> %
verb_phrase(vp(V)) --> verb(V).
verb_phrase(vp(V1, C, V2)) --> verb(V1), conj_phrase(C), verb_phrase(V2).
verb_phrase(vp(V1, NP, C, V2)) --> verb(V1), noun_phrase(NP), conj_phrase(C), verb_phrase(V2).
verb_phrase(vp(V, A)) --> verb(V), adverb_phrase(A).
verb_phrase(vp(V, A, PP)) --> verb(V), adverb_phrase(A), prep_phrase(PP).
verb_phrase(vp(V, NP)) --> sing_verb(V), noun_phrase(NP).
verb_phrase(vp(V, NP, PP)) --> sing_verb(V), noun_phrase(NP), prep_phrase(PP).
verb_phrase(vp(V, NP1, NP2)) --> comp_verb(V), noun_phrase(NP1), noun_phrase(NP2).
verb_phrase(vp(V, NP1, NP2, PP)) --> comp_verb(V), noun_phrase(NP1), noun_phrase(NP2), prep_phrase(PP).
verb_phrase(vp(A, V)) --> adv(A), verb(V).
verb_phrase(vp(A, V, NP)) --> adv(A), verb(V), noun_phrase(NP).
verb_phrase(vp(A, V, NP, PP)) --> adv(A), verb(V), noun_phrase(NP), prep_phrase(PP).
% <<< Adjectif Phrases <<< %


% >>> Adjectif Phrases >>> %
adject_phrase(ajp(A)) --> adjc(A).
adject_phrase(ajp(A, N)) --> adjc(A), noun(N).
adject_phrase(ajp(A1, A2)) --> adjc(A1), adject_phrase(A2).
adject_phrase(ajp(A1, C, A2)) --> adjc(A1), conj_phrase(C), adject_phrase(A2).
adject_phrase(ajp(A1, A2)) --> adv(A1), adject_phrase(A2). 
adject_phrase(ajp(V, P, NP)) --> verb(V), prep(P), noun_phrase(NP). 
adject_phrase(ajp(A, V, P, NP)) --> adjc(A), verb(V), prep(P), noun_phrase(NP). 
adject_phrase(ajp(P, V)) --> c_pron(P), verb(V). 
adject_phrase(ajp(P1, P2, V)) --> dep_pron(P1), c_pron(P2), verb(V). 
adject_phrase(ajp(P, V, CP)) --> pron(P), verb(V), conj_phrase(CP).
% <<< Adjectif Phrases <<< %

% >>> Conjunctive Phrases >>> %
conj_phrase(cp(C)) --> conj(C).
conj_phrase(cp(C, NP)) --> conj(C), noun_phrase(NP).
% <<< Conjunctive Phrases <<< %


adverb_phrase(abp(A)) --> adv(A).

% Test 1 - sentence(PT, [the, young, boy, who, worked, for, the, old, man, pushed, and, stored, a, big, box, in, the, large, empty, room, after, school], []).
% Test 2 - sentence(PT, [the, old, woman, and, the, old, man, gave, the, poor, young, man, whom, they, liked, a, white, envelope, in, the, shed, behind, the, building], []).
% Test 3 - sentence(PT, [every, boy, quickly, climbed, some, big, tree, while, every, girl, secretly, watched, some, boy], []).
% Test 4 - sentence(PT, [some, brilliant, students, and, many, professors, watched, and, admired, talented, lecturers, and, appreciated, bright, scientists, and, researchers], []).