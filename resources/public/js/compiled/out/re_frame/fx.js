// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15584){
var vec__15585 = p__15584;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__15588_15598 = cljs.core.cst$kw$dispatch_DASH_later;
var G__15589_15599 = ((function (G__15588_15598){
return (function (value){
var seq__15590 = cljs.core.seq(value);
var chunk__15591 = null;
var count__15592 = (0);
var i__15593 = (0);
while(true){
if((i__15593 < count__15592)){
var map__15594 = chunk__15591.cljs$core$IIndexed$_nth$arity$2(null,i__15593);
var map__15594__$1 = ((((!((map__15594 == null)))?((((map__15594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15594):map__15594);
var effect = map__15594__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15594__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15594__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__15590,chunk__15591,count__15592,i__15593,map__15594,map__15594__$1,effect,ms,dispatch,G__15588_15598){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__15590,chunk__15591,count__15592,i__15593,map__15594,map__15594__$1,effect,ms,dispatch,G__15588_15598))
,ms);
}

var G__15600 = seq__15590;
var G__15601 = chunk__15591;
var G__15602 = count__15592;
var G__15603 = (i__15593 + (1));
seq__15590 = G__15600;
chunk__15591 = G__15601;
count__15592 = G__15602;
i__15593 = G__15603;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15590);
if(temp__4657__auto__){
var seq__15590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15590__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__15590__$1);
var G__15604 = cljs.core.chunk_rest(seq__15590__$1);
var G__15605 = c__7398__auto__;
var G__15606 = cljs.core.count(c__7398__auto__);
var G__15607 = (0);
seq__15590 = G__15604;
chunk__15591 = G__15605;
count__15592 = G__15606;
i__15593 = G__15607;
continue;
} else {
var map__15596 = cljs.core.first(seq__15590__$1);
var map__15596__$1 = ((((!((map__15596 == null)))?((((map__15596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15596):map__15596);
var effect = map__15596__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__15590,chunk__15591,count__15592,i__15593,map__15596,map__15596__$1,effect,ms,dispatch,seq__15590__$1,temp__4657__auto__,G__15588_15598){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__15590,chunk__15591,count__15592,i__15593,map__15596,map__15596__$1,effect,ms,dispatch,seq__15590__$1,temp__4657__auto__,G__15588_15598))
,ms);
}

var G__15608 = cljs.core.next(seq__15590__$1);
var G__15609 = null;
var G__15610 = (0);
var G__15611 = (0);
seq__15590 = G__15608;
chunk__15591 = G__15609;
count__15592 = G__15610;
i__15593 = G__15611;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__15588_15598))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__15588_15598,G__15589_15599) : re_frame.fx.register.call(null,G__15588_15598,G__15589_15599));
var G__15612_15614 = cljs.core.cst$kw$dispatch;
var G__15613_15615 = ((function (G__15612_15614){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__15612_15614))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__15612_15614,G__15613_15615) : re_frame.fx.register.call(null,G__15612_15614,G__15613_15615));
var G__15616_15622 = cljs.core.cst$kw$dispatch_DASH_n;
var G__15617_15623 = ((function (G__15616_15622){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__15618 = cljs.core.seq(value);
var chunk__15619 = null;
var count__15620 = (0);
var i__15621 = (0);
while(true){
if((i__15621 < count__15620)){
var event = chunk__15619.cljs$core$IIndexed$_nth$arity$2(null,i__15621);
re_frame.router.dispatch(event);

var G__15624 = seq__15618;
var G__15625 = chunk__15619;
var G__15626 = count__15620;
var G__15627 = (i__15621 + (1));
seq__15618 = G__15624;
chunk__15619 = G__15625;
count__15620 = G__15626;
i__15621 = G__15627;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15618);
if(temp__4657__auto__){
var seq__15618__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15618__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__15618__$1);
var G__15628 = cljs.core.chunk_rest(seq__15618__$1);
var G__15629 = c__7398__auto__;
var G__15630 = cljs.core.count(c__7398__auto__);
var G__15631 = (0);
seq__15618 = G__15628;
chunk__15619 = G__15629;
count__15620 = G__15630;
i__15621 = G__15631;
continue;
} else {
var event = cljs.core.first(seq__15618__$1);
re_frame.router.dispatch(event);

var G__15632 = cljs.core.next(seq__15618__$1);
var G__15633 = null;
var G__15634 = (0);
var G__15635 = (0);
seq__15618 = G__15632;
chunk__15619 = G__15633;
count__15620 = G__15634;
i__15621 = G__15635;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__15616_15622))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__15616_15622,G__15617_15623) : re_frame.fx.register.call(null,G__15616_15622,G__15617_15623));
var G__15636_15638 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__15637_15639 = ((function (G__15636_15638){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__15636_15638))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__15636_15638,G__15637_15639) : re_frame.fx.register.call(null,G__15636_15638,G__15637_15639));
var G__15640_15642 = cljs.core.cst$kw$db;
var G__15641_15643 = ((function (G__15640_15642){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__15640_15642))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__15640_15642,G__15641_15643) : re_frame.fx.register.call(null,G__15640_15642,G__15641_15643));
