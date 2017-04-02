// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.process.events');
goog.require('cljs.core');
goog.require('warehouse.process.db');
goog.require('warehouse.util');
goog.require('re_frame.core');
warehouse.process.events.get_current_datetime = (function warehouse$process$events$get_current_datetime(){
return (new Date()).toLocaleString();
});
/**
 * Create process model. Process is a map with keys: :title, :url, :type, :data, :name
 */
warehouse.process.events.create_process = (function warehouse$process$events$create_process(p__14666,p__14667){
var map__14673 = p__14666;
var map__14673__$1 = ((((!((map__14673 == null)))?((((map__14673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14673):map__14673);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14673__$1,cljs.core.cst$kw$db);
var vec__14674 = p__14667;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$pending,cljs.core.cst$kw$created_DASH_at,warehouse.process.events.get_current_datetime()], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
var G__14678_14680 = cljs.core.cst$kw$process;
var G__14679_14681 = ((function (G__14678_14680){
return (function (process){
return (warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.process.db.run_process.call(null,process));
});})(G__14678_14680))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__14678_14680,G__14679_14681) : re_frame.core.reg_fx.call(null,G__14678_14680,G__14679_14681));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_create,warehouse.process.events.create_process);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_finished,(function (db,p__14682){
var vec__14683 = p__14682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14683,(0),null);
var process_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14683,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14683,(2),null);
var process = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null));
var updated_process = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$state,new_state,cljs.core.array_seq([cljs.core.cst$kw$finished_DASH_at,warehouse.process.events.get_current_datetime()], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null),updated_process);
}));
