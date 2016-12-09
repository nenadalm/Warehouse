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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29787){
var vec__29788 = p__29787;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29788,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29788,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__29791_29801 = cljs.core.cst$kw$dispatch_DASH_later;
var G__29792_29802 = ((function (G__29791_29801){
return (function (value){
var seq__29793 = cljs.core.seq(value);
var chunk__29794 = null;
var count__29795 = (0);
var i__29796 = (0);
while(true){
if((i__29796 < count__29795)){
var map__29797 = chunk__29794.cljs$core$IIndexed$_nth$arity$2(null,i__29796);
var map__29797__$1 = ((((!((map__29797 == null)))?((((map__29797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29797):map__29797);
var effect = map__29797__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29797__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29797__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__29793,chunk__29794,count__29795,i__29796,map__29797,map__29797__$1,effect,ms,dispatch,G__29791_29801){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__29793,chunk__29794,count__29795,i__29796,map__29797,map__29797__$1,effect,ms,dispatch,G__29791_29801))
,ms);
}

var G__29803 = seq__29793;
var G__29804 = chunk__29794;
var G__29805 = count__29795;
var G__29806 = (i__29796 + (1));
seq__29793 = G__29803;
chunk__29794 = G__29804;
count__29795 = G__29805;
i__29796 = G__29806;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__29793);
if(temp__4657__auto__){
var seq__29793__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29793__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__29793__$1);
var G__29807 = cljs.core.chunk_rest(seq__29793__$1);
var G__29808 = c__7398__auto__;
var G__29809 = cljs.core.count(c__7398__auto__);
var G__29810 = (0);
seq__29793 = G__29807;
chunk__29794 = G__29808;
count__29795 = G__29809;
i__29796 = G__29810;
continue;
} else {
var map__29799 = cljs.core.first(seq__29793__$1);
var map__29799__$1 = ((((!((map__29799 == null)))?((((map__29799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29799):map__29799);
var effect = map__29799__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29799__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29799__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__29793,chunk__29794,count__29795,i__29796,map__29799,map__29799__$1,effect,ms,dispatch,seq__29793__$1,temp__4657__auto__,G__29791_29801){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__29793,chunk__29794,count__29795,i__29796,map__29799,map__29799__$1,effect,ms,dispatch,seq__29793__$1,temp__4657__auto__,G__29791_29801))
,ms);
}

var G__29811 = cljs.core.next(seq__29793__$1);
var G__29812 = null;
var G__29813 = (0);
var G__29814 = (0);
seq__29793 = G__29811;
chunk__29794 = G__29812;
count__29795 = G__29813;
i__29796 = G__29814;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__29791_29801))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__29791_29801,G__29792_29802) : re_frame.fx.register.call(null,G__29791_29801,G__29792_29802));
var G__29815_29817 = cljs.core.cst$kw$dispatch;
var G__29816_29818 = ((function (G__29815_29817){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__29815_29817))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__29815_29817,G__29816_29818) : re_frame.fx.register.call(null,G__29815_29817,G__29816_29818));
var G__29819_29825 = cljs.core.cst$kw$dispatch_DASH_n;
var G__29820_29826 = ((function (G__29819_29825){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__29821 = cljs.core.seq(value);
var chunk__29822 = null;
var count__29823 = (0);
var i__29824 = (0);
while(true){
if((i__29824 < count__29823)){
var event = chunk__29822.cljs$core$IIndexed$_nth$arity$2(null,i__29824);
re_frame.router.dispatch(event);

var G__29827 = seq__29821;
var G__29828 = chunk__29822;
var G__29829 = count__29823;
var G__29830 = (i__29824 + (1));
seq__29821 = G__29827;
chunk__29822 = G__29828;
count__29823 = G__29829;
i__29824 = G__29830;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__29821);
if(temp__4657__auto__){
var seq__29821__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29821__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__29821__$1);
var G__29831 = cljs.core.chunk_rest(seq__29821__$1);
var G__29832 = c__7398__auto__;
var G__29833 = cljs.core.count(c__7398__auto__);
var G__29834 = (0);
seq__29821 = G__29831;
chunk__29822 = G__29832;
count__29823 = G__29833;
i__29824 = G__29834;
continue;
} else {
var event = cljs.core.first(seq__29821__$1);
re_frame.router.dispatch(event);

var G__29835 = cljs.core.next(seq__29821__$1);
var G__29836 = null;
var G__29837 = (0);
var G__29838 = (0);
seq__29821 = G__29835;
chunk__29822 = G__29836;
count__29823 = G__29837;
i__29824 = G__29838;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__29819_29825))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__29819_29825,G__29820_29826) : re_frame.fx.register.call(null,G__29819_29825,G__29820_29826));
var G__29839_29841 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__29840_29842 = ((function (G__29839_29841){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__29839_29841))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__29839_29841,G__29840_29842) : re_frame.fx.register.call(null,G__29839_29841,G__29840_29842));
var G__29843_29845 = cljs.core.cst$kw$db;
var G__29844_29846 = ((function (G__29843_29845){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__29843_29845))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__29843_29845,G__29844_29846) : re_frame.fx.register.call(null,G__29843_29845,G__29844_29846));
