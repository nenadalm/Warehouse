// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('lunr');
warehouse.search.db.index = window.lunr((function (){
return null;
}));
warehouse.search.db.initialize = (function warehouse$search$db$initialize(properties){
var seq__16188 = cljs.core.seq(properties);
var chunk__16189 = null;
var count__16190 = (0);
var i__16191 = (0);
while(true){
if((i__16191 < count__16190)){
var property = chunk__16189.cljs$core$IIndexed$_nth$arity$2(null,i__16191);
warehouse.search.db.index.field(property);

var G__16192 = seq__16188;
var G__16193 = chunk__16189;
var G__16194 = count__16190;
var G__16195 = (i__16191 + (1));
seq__16188 = G__16192;
chunk__16189 = G__16193;
count__16190 = G__16194;
i__16191 = G__16195;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16188);
if(temp__4657__auto__){
var seq__16188__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16188__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__16188__$1);
var G__16196 = cljs.core.chunk_rest(seq__16188__$1);
var G__16197 = c__7845__auto__;
var G__16198 = cljs.core.count(c__7845__auto__);
var G__16199 = (0);
seq__16188 = G__16196;
chunk__16189 = G__16197;
count__16190 = G__16198;
i__16191 = G__16199;
continue;
} else {
var property = cljs.core.first(seq__16188__$1);
warehouse.search.db.index.field(property);

var G__16200 = cljs.core.next(seq__16188__$1);
var G__16201 = null;
var G__16202 = (0);
var G__16203 = (0);
seq__16188 = G__16200;
chunk__16189 = G__16201;
count__16190 = G__16202;
i__16191 = G__16203;
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
var seq__16208 = cljs.core.seq(documents);
var chunk__16209 = null;
var count__16210 = (0);
var i__16211 = (0);
while(true){
if((i__16211 < count__16210)){
var document = chunk__16209.cljs$core$IIndexed$_nth$arity$2(null,i__16211);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__16212 = seq__16208;
var G__16213 = chunk__16209;
var G__16214 = count__16210;
var G__16215 = (i__16211 + (1));
seq__16208 = G__16212;
chunk__16209 = G__16213;
count__16210 = G__16214;
i__16211 = G__16215;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16208);
if(temp__4657__auto__){
var seq__16208__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16208__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__16208__$1);
var G__16216 = cljs.core.chunk_rest(seq__16208__$1);
var G__16217 = c__7845__auto__;
var G__16218 = cljs.core.count(c__7845__auto__);
var G__16219 = (0);
seq__16208 = G__16216;
chunk__16209 = G__16217;
count__16210 = G__16218;
i__16211 = G__16219;
continue;
} else {
var document = cljs.core.first(seq__16208__$1);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__16220 = cljs.core.next(seq__16208__$1);
var G__16221 = null;
var G__16222 = (0);
var G__16223 = (0);
seq__16208 = G__16220;
chunk__16209 = G__16221;
count__16210 = G__16222;
i__16211 = G__16223;
continue;
}
} else {
return null;
}
}
break;
}
});
