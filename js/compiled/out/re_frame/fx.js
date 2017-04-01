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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14332){
var vec__14333 = p__14332;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14333,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14333,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__14336_14346 = cljs.core.cst$kw$dispatch_DASH_later;
var G__14337_14347 = ((function (G__14336_14346){
return (function (value){
var seq__14338 = cljs.core.seq(value);
var chunk__14339 = null;
var count__14340 = (0);
var i__14341 = (0);
while(true){
if((i__14341 < count__14340)){
var map__14342 = chunk__14339.cljs$core$IIndexed$_nth$arity$2(null,i__14341);
var map__14342__$1 = ((((!((map__14342 == null)))?((((map__14342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14342):map__14342);
var effect = map__14342__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14342__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14342__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14338,chunk__14339,count__14340,i__14341,map__14342,map__14342__$1,effect,ms,dispatch,G__14336_14346){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14338,chunk__14339,count__14340,i__14341,map__14342,map__14342__$1,effect,ms,dispatch,G__14336_14346))
,ms);
}

var G__14348 = seq__14338;
var G__14349 = chunk__14339;
var G__14350 = count__14340;
var G__14351 = (i__14341 + (1));
seq__14338 = G__14348;
chunk__14339 = G__14349;
count__14340 = G__14350;
i__14341 = G__14351;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14338);
if(temp__4657__auto__){
var seq__14338__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14338__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14338__$1);
var G__14352 = cljs.core.chunk_rest(seq__14338__$1);
var G__14353 = c__7491__auto__;
var G__14354 = cljs.core.count(c__7491__auto__);
var G__14355 = (0);
seq__14338 = G__14352;
chunk__14339 = G__14353;
count__14340 = G__14354;
i__14341 = G__14355;
continue;
} else {
var map__14344 = cljs.core.first(seq__14338__$1);
var map__14344__$1 = ((((!((map__14344 == null)))?((((map__14344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14344):map__14344);
var effect = map__14344__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14344__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14344__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14338,chunk__14339,count__14340,i__14341,map__14344,map__14344__$1,effect,ms,dispatch,seq__14338__$1,temp__4657__auto__,G__14336_14346){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14338,chunk__14339,count__14340,i__14341,map__14344,map__14344__$1,effect,ms,dispatch,seq__14338__$1,temp__4657__auto__,G__14336_14346))
,ms);
}

var G__14356 = cljs.core.next(seq__14338__$1);
var G__14357 = null;
var G__14358 = (0);
var G__14359 = (0);
seq__14338 = G__14356;
chunk__14339 = G__14357;
count__14340 = G__14358;
i__14341 = G__14359;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14336_14346))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14336_14346,G__14337_14347) : re_frame.fx.register.call(null,G__14336_14346,G__14337_14347));
var G__14360_14362 = cljs.core.cst$kw$dispatch;
var G__14361_14363 = ((function (G__14360_14362){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__14360_14362))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14360_14362,G__14361_14363) : re_frame.fx.register.call(null,G__14360_14362,G__14361_14363));
var G__14364_14370 = cljs.core.cst$kw$dispatch_DASH_n;
var G__14365_14371 = ((function (G__14364_14370){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__14366 = cljs.core.seq(value);
var chunk__14367 = null;
var count__14368 = (0);
var i__14369 = (0);
while(true){
if((i__14369 < count__14368)){
var event = chunk__14367.cljs$core$IIndexed$_nth$arity$2(null,i__14369);
re_frame.router.dispatch(event);

var G__14372 = seq__14366;
var G__14373 = chunk__14367;
var G__14374 = count__14368;
var G__14375 = (i__14369 + (1));
seq__14366 = G__14372;
chunk__14367 = G__14373;
count__14368 = G__14374;
i__14369 = G__14375;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14366);
if(temp__4657__auto__){
var seq__14366__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14366__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14366__$1);
var G__14376 = cljs.core.chunk_rest(seq__14366__$1);
var G__14377 = c__7491__auto__;
var G__14378 = cljs.core.count(c__7491__auto__);
var G__14379 = (0);
seq__14366 = G__14376;
chunk__14367 = G__14377;
count__14368 = G__14378;
i__14369 = G__14379;
continue;
} else {
var event = cljs.core.first(seq__14366__$1);
re_frame.router.dispatch(event);

var G__14380 = cljs.core.next(seq__14366__$1);
var G__14381 = null;
var G__14382 = (0);
var G__14383 = (0);
seq__14366 = G__14380;
chunk__14367 = G__14381;
count__14368 = G__14382;
i__14369 = G__14383;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14364_14370))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14364_14370,G__14365_14371) : re_frame.fx.register.call(null,G__14364_14370,G__14365_14371));
var G__14384_14386 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__14385_14387 = ((function (G__14384_14386){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__14384_14386))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14384_14386,G__14385_14387) : re_frame.fx.register.call(null,G__14384_14386,G__14385_14387));
var G__14388_14390 = cljs.core.cst$kw$db;
var G__14389_14391 = ((function (G__14388_14390){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__14388_14390))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14388_14390,G__14389_14391) : re_frame.fx.register.call(null,G__14388_14390,G__14389_14391));
