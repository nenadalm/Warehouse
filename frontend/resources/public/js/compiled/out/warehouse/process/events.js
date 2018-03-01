// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.process.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.process.db');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__16190_16192 = cljs.core.cst$kw$current_DASH_datetime;
var G__16191_16193 = ((function (G__16190_16192){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$current_DASH_datetime,(new Date()).toLocaleString());
});})(G__16190_16192))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__16190_16192,G__16191_16193) : re_frame.core.reg_cofx.call(null,G__16190_16192,G__16191_16193));
/**
 * Create process model. Process is a map with keys: :title, :url, :type, :data, :name
 */
warehouse.process.events.create_process = (function warehouse$process$events$create_process(p__16194,p__16195){
var map__16201 = p__16194;
var map__16201__$1 = ((((!((map__16201 == null)))?((((map__16201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16201):map__16201);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16201__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16201__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__16202 = p__16195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$pending,cljs.core.cst$kw$created_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
var G__16206_16208 = cljs.core.cst$kw$process;
var G__16207_16209 = ((function (G__16206_16208){
return (function (process){
return (warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.process.db.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.process.db.run_process.call(null,process));
});})(G__16206_16208))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__16206_16208,G__16207_16209) : re_frame.core.reg_fx.call(null,G__16206_16208,G__16207_16209));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16210 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__16210) : re_frame.core.inject_cofx.call(null,G__16210));
})()], null),warehouse.process.events.create_process);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_finished,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16211 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__16211) : re_frame.core.inject_cofx.call(null,G__16211));
})()], null),(function (p__16212,p__16213){
var map__16214 = p__16212;
var map__16214__$1 = ((((!((map__16214 == null)))?((((map__16214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16214):map__16214);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16214__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16214__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__16215 = p__16213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16215,(0),null);
var process_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16215,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16215,(2),null);
var process = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null));
var updated_process = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$state,new_state,cljs.core.array_seq([cljs.core.cst$kw$finished_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null),updated_process)], null);
}));
