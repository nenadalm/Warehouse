// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.db');
goog.require('cljs.core');
goog.require('lunr');
warehouse.search.db.index = window.lunr((function (){
return null;
}));
warehouse.search.db.initialize = (function warehouse$search$db$initialize(properties){
var seq__14305 = cljs.core.seq(properties);
var chunk__14306 = null;
var count__14307 = (0);
var i__14308 = (0);
while(true){
if((i__14308 < count__14307)){
var property = chunk__14306.cljs$core$IIndexed$_nth$arity$2(null,i__14308);
warehouse.search.db.index.field(property);

var G__14309 = seq__14305;
var G__14310 = chunk__14306;
var G__14311 = count__14307;
var G__14312 = (i__14308 + (1));
seq__14305 = G__14309;
chunk__14306 = G__14310;
count__14307 = G__14311;
i__14308 = G__14312;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14305);
if(temp__4657__auto__){
var seq__14305__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14305__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14305__$1);
var G__14313 = cljs.core.chunk_rest(seq__14305__$1);
var G__14314 = c__7491__auto__;
var G__14315 = cljs.core.count(c__7491__auto__);
var G__14316 = (0);
seq__14305 = G__14313;
chunk__14306 = G__14314;
count__14307 = G__14315;
i__14308 = G__14316;
continue;
} else {
var property = cljs.core.first(seq__14305__$1);
warehouse.search.db.index.field(property);

var G__14317 = cljs.core.next(seq__14305__$1);
var G__14318 = null;
var G__14319 = (0);
var G__14320 = (0);
seq__14305 = G__14317;
chunk__14306 = G__14318;
count__14307 = G__14319;
i__14308 = G__14320;
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
var seq__14325 = cljs.core.seq(documents);
var chunk__14326 = null;
var count__14327 = (0);
var i__14328 = (0);
while(true){
if((i__14328 < count__14327)){
var document = chunk__14326.cljs$core$IIndexed$_nth$arity$2(null,i__14328);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__14329 = seq__14325;
var G__14330 = chunk__14326;
var G__14331 = count__14327;
var G__14332 = (i__14328 + (1));
seq__14325 = G__14329;
chunk__14326 = G__14330;
count__14327 = G__14331;
i__14328 = G__14332;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14325);
if(temp__4657__auto__){
var seq__14325__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14325__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14325__$1);
var G__14333 = cljs.core.chunk_rest(seq__14325__$1);
var G__14334 = c__7491__auto__;
var G__14335 = cljs.core.count(c__7491__auto__);
var G__14336 = (0);
seq__14325 = G__14333;
chunk__14326 = G__14334;
count__14327 = G__14335;
i__14328 = G__14336;
continue;
} else {
var document = cljs.core.first(seq__14325__$1);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__14337 = cljs.core.next(seq__14325__$1);
var G__14338 = null;
var G__14339 = (0);
var G__14340 = (0);
seq__14325 = G__14337;
chunk__14326 = G__14338;
count__14327 = G__14339;
i__14328 = G__14340;
continue;
}
} else {
return null;
}
}
break;
}
});
