// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.pages.process.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('warehouse.pages.process.events');
goog.require('warehouse.pages.process.subs');
warehouse.pages.process.views.process_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title",(function (p1__12775_SHARP_){
return cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(p1__12775_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["State",(function (p1__12776_SHARP_){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__12776_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Created at",(function (p1__12777_SHARP_){
return cljs.core.cst$kw$created_DASH_at.cljs$core$IFn$_invoke$arity$1(p1__12777_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Finished at",(function (p1__12778_SHARP_){
return cljs.core.cst$kw$finished_DASH_at.cljs$core$IFn$_invoke$arity$1(p1__12778_SHARP_);
})], null)], null);
warehouse.pages.process.views.process = (function warehouse$pages$process$views$process(p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__12779){
var vec__12780 = p__12779;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12780,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12780,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p) : f.call(null,p))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
}),warehouse.pages.process.views.process_data)], null);
});
warehouse.pages.process.views.processes = (function warehouse$pages$process$views$processes(){
var data = (function (){var G__12783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12783) : re_frame.core.subscribe.call(null,G__12783));
})();
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$processes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (i,p__12784){
var vec__12785 = p__12784;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12785,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12785,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,title], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(data))
,warehouse.pages.process.views.process_data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4324__auto__ = ((function (data){
return (function warehouse$pages$process$views$processes_$_iter__12788(s__12789){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__12789__$1 = s__12789;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12789__$1);
if(temp__5457__auto__){
var s__12789__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12789__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12789__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12791 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12790 = (0);
while(true){
if((i__12790 < size__4323__auto__)){
var vec__12792 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12790);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,(1),null);
cljs.core.chunk_append(b__12791,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__12798 = (i__12790 + (1));
i__12790 = G__12798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12791),warehouse$pages$process$views$processes_$_iter__12788(cljs.core.chunk_rest(s__12789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12791),null);
}
} else {
var vec__12795 = cljs.core.first(s__12789__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12795,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12795,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)),warehouse$pages$process$views$processes_$_iter__12788(cljs.core.rest(s__12789__$2)));
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
return iter__4324__auto__(cljs.core.deref(data));
})()], null)], null);
});
;})(data))
});
