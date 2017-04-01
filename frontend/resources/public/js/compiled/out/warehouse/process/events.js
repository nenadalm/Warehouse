// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.process.events');
goog.require('cljs.core');
goog.require('warehouse.process.db');
goog.require('warehouse.util');
goog.require('re_frame.core');
/**
 * Create process model. Process is a map with keys: :title, :url, :type, :data, :name
 */
warehouse.process.events.create_process = (function warehouse$process$events$create_process(p__14654,p__14655){
var map__14661 = p__14654;
var map__14661__$1 = ((((!((map__14661 == null)))?((((map__14661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14661):map__14661);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14661__$1,cljs.core.cst$kw$db);
var vec__14662 = p__14655;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14662,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14662,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$pending], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
var G__14666_14668 = cljs.core.cst$kw$process;
var G__14667_14669 = ((function (G__14666_14668){
return (function (process){
return (warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.process.db.run_process.call(null,process));
});})(G__14666_14668))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__14666_14668,G__14667_14669) : re_frame.core.reg_fx.call(null,G__14666_14668,G__14667_14669));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_create,warehouse.process.events.create_process);
