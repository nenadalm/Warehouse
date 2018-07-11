// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.pages.process.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('warehouse.pages.process.events');
goog.require('warehouse.pages.process.subs');
warehouse.pages.process.views.process_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title",(function (p1__12797_SHARP_){
return cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(p1__12797_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["State",(function (p1__12798_SHARP_){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__12798_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Created at",(function (p1__12799_SHARP_){
return cljs.core.cst$kw$created_DASH_at.cljs$core$IFn$_invoke$arity$1(p1__12799_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Finished at",(function (p1__12800_SHARP_){
return cljs.core.cst$kw$finished_DASH_at.cljs$core$IFn$_invoke$arity$1(p1__12800_SHARP_);
})], null)], null);
warehouse.pages.process.views.process = (function warehouse$pages$process$views$process(p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__12801){
var vec__12802 = p__12801;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p) : f.call(null,p))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
}),warehouse.pages.process.views.process_data)], null);
});
warehouse.pages.process.views.processes = (function warehouse$pages$process$views$processes(){
var data = (function (){var G__12805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12805) : re_frame.core.subscribe.call(null,G__12805));
})();
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$processes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (i,p__12806){
var vec__12807 = p__12806;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12807,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12807,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,title], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(data))
,warehouse.pages.process.views.process_data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4324__auto__ = ((function (data){
return (function warehouse$pages$process$views$processes_$_iter__12810(s__12811){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__12811__$1 = s__12811;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12811__$1);
if(temp__5457__auto__){
var s__12811__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12811__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12811__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12813 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12812 = (0);
while(true){
if((i__12812 < size__4323__auto__)){
var vec__12814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12812);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12814,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12814,(1),null);
cljs.core.chunk_append(b__12813,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__12820 = (i__12812 + (1));
i__12812 = G__12820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12813),warehouse$pages$process$views$processes_$_iter__12810(cljs.core.chunk_rest(s__12811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12813),null);
}
} else {
var vec__12817 = cljs.core.first(s__12811__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12817,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12817,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)),warehouse$pages$process$views$processes_$_iter__12810(cljs.core.rest(s__12811__$2)));
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
