:-include('DCGDict.pl').

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