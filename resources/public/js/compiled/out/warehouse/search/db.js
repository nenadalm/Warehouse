// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.db');
goog.require('cljs.core');
goog.require('lunr');
warehouse.search.db.index = window.lunr((function (){
return null;
}));
warehouse.search.db.initialize = (function warehouse$search$db$initialize(properties){
var seq__19194 = cljs.core.seq(properties);
var chunk__19195 = null;
var count__19196 = (0);
var i__19197 = (0);
while(true){
if((i__19197 < count__19196)){
var property = chunk__19195.cljs$core$IIndexed$_nth$arity$2(null,i__19197);
warehouse.search.db.index.field(property);

var G__19198 = seq__19194;
var G__19199 = chunk__19195;
var G__19200 = count__19196;
var G__19201 = (i__19197 + (1));
seq__19194 = G__19198;
chunk__19195 = G__19199;
count__19196 = G__19200;
i__19197 = G__19201;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19194);
if(temp__4657__auto__){
var seq__19194__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19194__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__19194__$1);
var G__19202 = cljs.core.chunk_rest(seq__19194__$1);
var G__19203 = c__7398__auto__;
var G__19204 = cljs.core.count(c__7398__auto__);
var G__19205 = (0);
seq__19194 = G__19202;
chunk__19195 = G__19203;
count__19196 = G__19204;
i__19197 = G__19205;
continue;
} else {
var property = cljs.core.first(seq__19194__$1);
warehouse.search.db.index.field(property);

var G__19206 = cljs.core.next(seq__19194__$1);
var G__19207 = null;
var G__19208 = (0);
var G__19209 = (0);
seq__19194 = G__19206;
chunk__19195 = G__19207;
count__19196 = G__19208;
i__19197 = G__19209;
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
var seq__19214 = cljs.core.seq(documents);
var chunk__19215 = null;
var count__19216 = (0);
var i__19217 = (0);
while(true){
if((i__19217 < count__19216)){
var document = chunk__19215.cljs$core$IIndexed$_nth$arity$2(null,i__19217);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__19218 = seq__19214;
var G__19219 = chunk__19215;
var G__19220 = count__19216;
var G__19221 = (i__19217 + (1));
seq__19214 = G__19218;
chunk__19215 = G__19219;
count__19216 = G__19220;
i__19217 = G__19221;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19214);
if(temp__4657__auto__){
var seq__19214__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19214__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__19214__$1);
var G__19222 = cljs.core.chunk_rest(seq__19214__$1);
var G__19223 = c__7398__auto__;
var G__19224 = cljs.core.count(c__7398__auto__);
var G__19225 = (0);
seq__19214 = G__19222;
chunk__19215 = G__19223;
count__19216 = G__19224;
i__19217 = G__19225;
continue;
} else {
var document = cljs.core.first(seq__19214__$1);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__19226 = cljs.core.next(seq__19214__$1);
var G__19227 = null;
var G__19228 = (0);
var G__19229 = (0);
seq__19214 = G__19226;
chunk__19215 = G__19227;
count__19216 = G__19228;
i__19217 = G__19229;
continue;
}
} else {
return null;
}
}
break;
}
});
