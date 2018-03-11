// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.process.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.process.db');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__12407_12409 = cljs.core.cst$kw$current_DASH_datetime;
var G__12408_12410 = ((function (G__12407_12409){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$current_DASH_datetime,(new Date()).toLocaleString());
});})(G__12407_12409))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12407_12409,G__12408_12410) : re_frame.core.reg_cofx.call(null,G__12407_12409,G__12408_12410));
/**
 * Create process model. Process is a map with keys: :title, :url, :type, :data, :name
 */
warehouse.process.events.create_process = (function warehouse$process$events$create_process(p__12411,p__12412){
var map__12413 = p__12411;
var map__12413__$1 = ((((!((map__12413 == null)))?(((((map__12413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12413):map__12413);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12413__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12413__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__12414 = p__12412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,cljs.core.cst$kw$pending,cljs.core.cst$kw$created_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
var G__12418_12420 = cljs.core.cst$kw$process;
var G__12419_12421 = ((function (G__12418_12420){
return (function (process){
return (warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.process.db.run_process.call(null,process));
});})(G__12418_12420))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12418_12420,G__12419_12421) : re_frame.core.reg_fx.call(null,G__12418_12420,G__12419_12421));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12422 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12422) : re_frame.core.inject_cofx.call(null,G__12422));
})()], null),warehouse.process.events.create_process);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_finished,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12423 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12423) : re_frame.core.inject_cofx.call(null,G__12423));
})()], null),(function (p__12424,p__12425){
var map__12426 = p__12424;
var map__12426__$1 = ((((!((map__12426 == null)))?(((((map__12426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12426):map__12426);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12426__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12426__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__12427 = p__12425;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12427,(0),null);
var process_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12427,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12427,(2),null);
var process = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null));
var updated_process = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$state,new_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$finished_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null),updated_process)], null);
}));
