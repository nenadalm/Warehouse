// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.process.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.process.db');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__16076_16078 = cljs.core.cst$kw$current_DASH_datetime;
var G__16077_16079 = ((function (G__16076_16078){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$current_DASH_datetime,(new Date()).toLocaleString());
});})(G__16076_16078))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__16076_16078,G__16077_16079) : re_frame.core.reg_cofx.call(null,G__16076_16078,G__16077_16079));
/**
 * Create process model. Process is a map with keys: :title, :url, :type, :data, :name
 */
warehouse.process.events.create_process = (function warehouse$process$events$create_process(p__16080,p__16081){
var map__16087 = p__16080;
var map__16087__$1 = ((((!((map__16087 == null)))?((((map__16087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16087):map__16087);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16087__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16087__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__16088 = p__16081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16088,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16088,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$pending,cljs.core.cst$kw$created_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
var G__16092_16094 = cljs.core.cst$kw$process;
var G__16093_16095 = ((function (G__16092_16094){
return (function (process){
return (warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.process.db.run_process.call(null,process));
});})(G__16092_16094))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__16092_16094,G__16093_16095) : re_frame.core.reg_fx.call(null,G__16092_16094,G__16093_16095));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16096 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__16096) : re_frame.core.inject_cofx.call(null,G__16096));
})()], null),warehouse.process.events.create_process);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_finished,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16097 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__16097) : re_frame.core.inject_cofx.call(null,G__16097));
})()], null),(function (p__16098,p__16099){
var map__16100 = p__16098;
var map__16100__$1 = ((((!((map__16100 == null)))?((((map__16100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16100):map__16100);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16100__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16100__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__16101 = p__16099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101,(0),null);
var process_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101,(2),null);
var process = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null));
var updated_process = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$state,new_state,cljs.core.array_seq([cljs.core.cst$kw$finished_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null),updated_process)], null);
}));
