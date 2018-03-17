// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.pages.process.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.pages.process.db');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__20145_20147 = cljs.core.cst$kw$current_DASH_datetime;
var G__20146_20148 = ((function (G__20145_20147){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$current_DASH_datetime,(new Date()).toLocaleString());
});})(G__20145_20147))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__20145_20147,G__20146_20148) : re_frame.core.reg_cofx.call(null,G__20145_20147,G__20146_20148));
/**
 * Create process model. Process is a map with keys: :title, :url, :type, :data, :name
 */
warehouse.pages.process.events.create_process = (function warehouse$pages$process$events$create_process(p__20149,p__20150){
var map__20151 = p__20149;
var map__20151__$1 = ((((!((map__20151 == null)))?(((((map__20151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20151):map__20151);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__20152 = p__20150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,cljs.core.cst$kw$pending,cljs.core.cst$kw$created_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
var G__20156_20158 = cljs.core.cst$kw$process;
var G__20157_20159 = ((function (G__20156_20158){
return (function (process){
return (warehouse.pages.process.db.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.pages.process.db.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.pages.process.db.run_process.call(null,process));
});})(G__20156_20158))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__20156_20158,G__20157_20159) : re_frame.core.reg_fx.call(null,G__20156_20158,G__20157_20159));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20160 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__20160) : re_frame.core.inject_cofx.call(null,G__20160));
})()], null),warehouse.pages.process.events.create_process);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_finished,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20161 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__20161) : re_frame.core.inject_cofx.call(null,G__20161));
})()], null),(function (p__20162,p__20163){
var map__20164 = p__20162;
var map__20164__$1 = ((((!((map__20164 == null)))?(((((map__20164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20164):map__20164);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20164__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20164__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__20165 = p__20163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20165,(0),null);
var process_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20165,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20165,(2),null);
var process = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null));
var updated_process = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$state,new_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$finished_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null),updated_process)], null);
}));
