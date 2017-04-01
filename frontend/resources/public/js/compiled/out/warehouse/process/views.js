// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.process.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('warehouse.process.events');
goog.require('warehouse.process.subs');
warehouse.process.views.process = (function warehouse$process$views$process(p){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$created_DASH_at.cljs$core$IFn$_invoke$arity$1(p)], null)], null);
});
warehouse.process.views.processes = (function warehouse$process$views$processes(){
var data = (function (){var G__14699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14699) : re_frame.core.subscribe.call(null,G__14699));
})();
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$processes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"State"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Created at"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__7460__auto__ = ((function (data){
return (function warehouse$process$views$processes_$_iter__14700(s__14701){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__14701__$1 = s__14701;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14701__$1);
if(temp__4657__auto__){
var s__14701__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14701__$2)){
var c__7458__auto__ = cljs.core.chunk_first(s__14701__$2);
var size__7459__auto__ = cljs.core.count(c__7458__auto__);
var b__14703 = cljs.core.chunk_buffer(size__7459__auto__);
if((function (){var i__14702 = (0);
while(true){
if((i__14702 < size__7459__auto__)){
var vec__14712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7458__auto__,i__14702);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14712,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14712,(1),null);
cljs.core.chunk_append(b__14703,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__14718 = (i__14702 + (1));
i__14702 = G__14718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14703),warehouse$process$views$processes_$_iter__14700(cljs.core.chunk_rest(s__14701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14703),null);
}
} else {
var vec__14715 = cljs.core.first(s__14701__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14715,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14715,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)),warehouse$process$views$processes_$_iter__14700(cljs.core.rest(s__14701__$2)));
}
} else {
return null;
}
break;
}
});})(data))
,null,null));
});})(data))
;
return iter__7460__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
})()], null)], null);
});
;})(data))
});
