// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
warehouse.search.db.index = window.lunr((function (){
return null;
}));
warehouse.search.db.initialize = (function warehouse$search$db$initialize(properties){
var seq__16180 = cljs.core.seq(properties);
var chunk__16181 = null;
var count__16182 = (0);
var i__16183 = (0);
while(true){
if((i__16183 < count__16182)){
var property = chunk__16181.cljs$core$IIndexed$_nth$arity$2(null,i__16183);
warehouse.search.db.index.field(property);

var G__16184 = seq__16180;
var G__16185 = chunk__16181;
var G__16186 = count__16182;
var G__16187 = (i__16183 + (1));
seq__16180 = G__16184;
chunk__16181 = G__16185;
count__16182 = G__16186;
i__16183 = G__16187;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16180);
if(temp__4657__auto__){
var seq__16180__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16180__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__16180__$1);
var G__16188 = cljs.core.chunk_rest(seq__16180__$1);
var G__16189 = c__7845__auto__;
var G__16190 = cljs.core.count(c__7845__auto__);
var G__16191 = (0);
seq__16180 = G__16188;
chunk__16181 = G__16189;
count__16182 = G__16190;
i__16183 = G__16191;
continue;
} else {
var property = cljs.core.first(seq__16180__$1);
warehouse.search.db.index.field(property);

var G__16192 = cljs.core.next(seq__16180__$1);
var G__16193 = null;
var G__16194 = (0);
var G__16195 = (0);
seq__16180 = G__16192;
chunk__16181 = G__16193;
count__16182 = G__16194;
i__16183 = G__16195;
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
var seq__16200 = cljs.core.seq(documents);
var chunk__16201 = null;
var count__16202 = (0);
var i__16203 = (0);
while(true){
if((i__16203 < count__16202)){
var document = chunk__16201.cljs$core$IIndexed$_nth$arity$2(null,i__16203);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__16204 = seq__16200;
var G__16205 = chunk__16201;
var G__16206 = count__16202;
var G__16207 = (i__16203 + (1));
seq__16200 = G__16204;
chunk__16201 = G__16205;
count__16202 = G__16206;
i__16203 = G__16207;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16200);
if(temp__4657__auto__){
var seq__16200__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16200__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__16200__$1);
var G__16208 = cljs.core.chunk_rest(seq__16200__$1);
var G__16209 = c__7845__auto__;
var G__16210 = cljs.core.count(c__7845__auto__);
var G__16211 = (0);
seq__16200 = G__16208;
chunk__16201 = G__16209;
count__16202 = G__16210;
i__16203 = G__16211;
continue;
} else {
var document = cljs.core.first(seq__16200__$1);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__16212 = cljs.core.next(seq__16200__$1);
var G__16213 = null;
var G__16214 = (0);
var G__16215 = (0);
seq__16200 = G__16212;
chunk__16201 = G__16213;
count__16202 = G__16214;
i__16203 = G__16215;
continue;
}
} else {
return null;
}
}
break;
}
});
warehouse.search.db.filter_active_QMARK_ = (function warehouse$search$db$filter_active_QMARK_(db){
return !(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))));
});
warehouse.search.db.filter_search = (function warehouse$search$db$filter_search(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null));
});
