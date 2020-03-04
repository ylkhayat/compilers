:-include('DCGDict.pl').

sentence(s(NP, VP)) --> noun_phrase(NP), verb_phrase(VP).

% >>> Noun Phrases >>> %
noun_phrase(np(P)) --> pron(P).
noun_phrase(np(P, AP)) --> pron(P), adverb_phrase(AP).
noun_phrase(np(DP)) --> det_phrase(DP).
noun_phrase(np(DP, PP)) --> det_phrase(DP), prep_phrase(PP).
noun_phrase(np(DP, AP)) --> det_phrase(DP), adject_phrase(AP).
noun_phrase(np(DP, AP, PP)) --> det_phrase(DP), adject_phrase(AP), prep_phrase(PP).
% <<< Noun Phrases <<< %

% >>> Prepositional Phrases >>> %
noun_prep_phrase(prepp(P, NP)) --> start_prep(P), noun_phrase(NP).
verb_prep_phrase(prepp(P, A)) --> start_prep(P), adjc(A).
prep_phrase(PP) --> noun_prep_phrase(PP); verb_prep_phrase(PP).
% <<< Prepositional Phrases <<< %

% >>> Determiner Phrases >>> %
det_phrase(DP) --> inf_def_det_phrase(DP); poss_det_phrase(DP); demon_det_phrase(DP); quant_det_phrase(DP). 
inf_def_det_phrase(dp(D, N)) --> article(D), noun(N).
inf_def_det_phrase(dp(D, AP, N)) --> article(D), adject_phrase(AP), noun(N).
poss_det_phrase(dp(D, N)) --> poss_det(D), noun(N).
poss_det_phrase(dp(D, AP, N)) --> poss_det(D), adject_phrase(AP), noun(N).
demon_det_phrase(dp(D, N)) --> demon_det(D), noun(N).
demon_det_phrase(dp(D, AP, N)) --> demon_det(D), adject_phrase(AP), noun(N).
quant_det_phrase(dp(D, N)) --> quant_det(D), noun(N).
quant_det_phrase(dp(D, AP, N)) --> quant_det(D), adject_phrase(AP), noun(N).
% <<< Determiner Phrases <<< %

% >>> Verb Phrases >>> %
verb_phrase(vp(V)) --> verb(V).
verb_phrase(vp(V1, V2)) --> verb(V1), verb_phrase(V2).
verb_phrase(vp(V1, C, V2)) --> verb(V1), conj_phrase(C), verb_phrase(V2).
verb_phrase(vp(V, A)) --> verb(V), adverb_phrase(A).
verb_phrase(vp(V, NP)) --> verb(V), noun_phrase(NP).
verb_phrase(vp(A, V, NP)) --> adv(A), verb(V), noun_phrase(NP).
% <<< Adjectif Phrases <<< %

% >>> Adjectif Phrases >>> %
adject_phrase(ajp(A)) --> adjc(A).
adject_phrase(ajp(A1, A2)) --> adjc(A1), adject_phrase(A2).
adject_phrase(ajp(A1, C, A2)) --> adjc(A1), conj_phrase(C), adject_phrase(A2).
adject_phrase(ajp(A1, A2)) --> adv(A1), adject_phrase(A2). 
adject_phrase(ajp(V, P, NP)) --> verb(V), prep(P), noun_phrase(NP). 
adject_phrase(ajp(A, V, P, NP)) --> adjc(A), verb(V), prep(P), noun_phrase(NP). 
adject_phrase(ajp(P, V)) --> pron(P), verb(V). 
adject_phrase(ajp(P, V, CP)) --> pron(P), verb(V), conj_phrase(CP).
% <<< Adjectif Phrases <<< %

% >>> Conjunctive Phrases >>> %
conj_phrase(cp(C)) --> conj(C).
conj_phrase(cp(C, NP)) --> conj(C), noun_phrase(NP).
% <<< Conjunctive Phrases <<< %


adverb_phrase(abp(A)) --> adv(A).
