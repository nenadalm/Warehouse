// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.db');
goog.require('cljs.core');
goog.require('lunr');
warehouse.search.db.index = window.lunr((function (){
return null;
}));
warehouse.search.db.initialize = (function warehouse$search$db$initialize(properties){
var seq__15515 = cljs.core.seq(properties);
var chunk__15516 = null;
var count__15517 = (0);
var i__15518 = (0);
while(true){
if((i__15518 < count__15517)){
var property = chunk__15516.cljs$core$IIndexed$_nth$arity$2(null,i__15518);
warehouse.search.db.index.field(property);

var G__15519 = seq__15515;
var G__15520 = chunk__15516;
var G__15521 = count__15517;
var G__15522 = (i__15518 + (1));
seq__15515 = G__15519;
chunk__15516 = G__15520;
count__15517 = G__15521;
i__15518 = G__15522;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15515);
if(temp__4657__auto__){
var seq__15515__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15515__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__15515__$1);
var G__15523 = cljs.core.chunk_rest(seq__15515__$1);
var G__15524 = c__7398__auto__;
var G__15525 = cljs.core.count(c__7398__auto__);
var G__15526 = (0);
seq__15515 = G__15523;
chunk__15516 = G__15524;
count__15517 = G__15525;
i__15518 = G__15526;
continue;
} else {
var property = cljs.core.first(seq__15515__$1);
warehouse.search.db.index.field(property);

var G__15527 = cljs.core.next(seq__15515__$1);
var G__15528 = null;
var G__15529 = (0);
var G__15530 = (0);
seq__15515 = G__15527;
chunk__15516 = G__15528;
count__15517 = G__15529;
i__15518 = G__15530;
continue;
}
} else {
return null;
}
}
break;
}
});
warehouse.search.db.update_index = (function warehouse$search$db$update_index(documents){
var seq__15535 = cljs.core.seq(documents);
var chunk__15536 = null;
var count__15537 = (0);
var i__15538 = (0);
while(true){
if((i__15538 < count__15537)){
var document = chunk__15536.cljs$core$IIndexed$_nth$arity$2(null,i__15538);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__15539 = seq__15535;
var G__15540 = chunk__15536;
var G__15541 = count__15537;
var G__15542 = (i__15538 + (1));
seq__15535 = G__15539;
chunk__15536 = G__15540;
count__15537 = G__15541;
i__15538 = G__15542;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15535);
if(temp__4657__auto__){
var seq__15535__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15535__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__15535__$1);
var G__15543 = cljs.core.chunk_rest(seq__15535__$1);
var G__15544 = c__7398__auto__;
var G__15545 = cljs.core.count(c__7398__auto__);
var G__15546 = (0);
seq__15535 = G__15543;
chunk__15536 = G__15544;
count__15537 = G__15545;
i__15538 = G__15546;
continue;
} else {
var document = cljs.core.first(seq__15535__$1);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__15547 = cljs.core.next(seq__15535__$1);
var G__15548 = null;
var G__15549 = (0);
var G__15550 = (0);
seq__15535 = G__15547;
chunk__15536 = G__15548;
count__15537 = G__15549;
i__15538 = G__15550;
continue;
}
} else {
return null;
}
}
break;
}
});
