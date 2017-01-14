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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14374){
var vec__14375 = p__14374;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14375,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14375,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__14378_14388 = cljs.core.cst$kw$dispatch_DASH_later;
var G__14379_14389 = ((function (G__14378_14388){
return (function (value){
var seq__14380 = cljs.core.seq(value);
var chunk__14381 = null;
var count__14382 = (0);
var i__14383 = (0);
while(true){
if((i__14383 < count__14382)){
var map__14384 = chunk__14381.cljs$core$IIndexed$_nth$arity$2(null,i__14383);
var map__14384__$1 = ((((!((map__14384 == null)))?((((map__14384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14384):map__14384);
var effect = map__14384__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14384__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14384__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14380,chunk__14381,count__14382,i__14383,map__14384,map__14384__$1,effect,ms,dispatch,G__14378_14388){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14380,chunk__14381,count__14382,i__14383,map__14384,map__14384__$1,effect,ms,dispatch,G__14378_14388))
,ms);
}

var G__14390 = seq__14380;
var G__14391 = chunk__14381;
var G__14392 = count__14382;
var G__14393 = (i__14383 + (1));
seq__14380 = G__14390;
chunk__14381 = G__14391;
count__14382 = G__14392;
i__14383 = G__14393;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14380);
if(temp__4657__auto__){
var seq__14380__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14380__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14380__$1);
var G__14394 = cljs.core.chunk_rest(seq__14380__$1);
var G__14395 = c__7491__auto__;
var G__14396 = cljs.core.count(c__7491__auto__);
var G__14397 = (0);
seq__14380 = G__14394;
chunk__14381 = G__14395;
count__14382 = G__14396;
i__14383 = G__14397;
continue;
} else {
var map__14386 = cljs.core.first(seq__14380__$1);
var map__14386__$1 = ((((!((map__14386 == null)))?((((map__14386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14386):map__14386);
var effect = map__14386__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14386__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14386__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14380,chunk__14381,count__14382,i__14383,map__14386,map__14386__$1,effect,ms,dispatch,seq__14380__$1,temp__4657__auto__,G__14378_14388){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14380,chunk__14381,count__14382,i__14383,map__14386,map__14386__$1,effect,ms,dispatch,seq__14380__$1,temp__4657__auto__,G__14378_14388))
,ms);
}

var G__14398 = cljs.core.next(seq__14380__$1);
var G__14399 = null;
var G__14400 = (0);
var G__14401 = (0);
seq__14380 = G__14398;
chunk__14381 = G__14399;
count__14382 = G__14400;
i__14383 = G__14401;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14378_14388))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14378_14388,G__14379_14389) : re_frame.fx.register.call(null,G__14378_14388,G__14379_14389));
var G__14402_14404 = cljs.core.cst$kw$dispatch;
var G__14403_14405 = ((function (G__14402_14404){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__14402_14404))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14402_14404,G__14403_14405) : re_frame.fx.register.call(null,G__14402_14404,G__14403_14405));
var G__14406_14412 = cljs.core.cst$kw$dispatch_DASH_n;
var G__14407_14413 = ((function (G__14406_14412){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__14408 = cljs.core.seq(value);
var chunk__14409 = null;
var count__14410 = (0);
var i__14411 = (0);
while(true){
if((i__14411 < count__14410)){
var event = chunk__14409.cljs$core$IIndexed$_nth$arity$2(null,i__14411);
re_frame.router.dispatch(event);

var G__14414 = seq__14408;
var G__14415 = chunk__14409;
var G__14416 = count__14410;
var G__14417 = (i__14411 + (1));
seq__14408 = G__14414;
chunk__14409 = G__14415;
count__14410 = G__14416;
i__14411 = G__14417;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14408);
if(temp__4657__auto__){
var seq__14408__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14408__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14408__$1);
var G__14418 = cljs.core.chunk_rest(seq__14408__$1);
var G__14419 = c__7491__auto__;
var G__14420 = cljs.core.count(c__7491__auto__);
var G__14421 = (0);
seq__14408 = G__14418;
chunk__14409 = G__14419;
count__14410 = G__14420;
i__14411 = G__14421;
continue;
} else {
var event = cljs.core.first(seq__14408__$1);
re_frame.router.dispatch(event);

var G__14422 = cljs.core.next(seq__14408__$1);
var G__14423 = null;
var G__14424 = (0);
var G__14425 = (0);
seq__14408 = G__14422;
chunk__14409 = G__14423;
count__14410 = G__14424;
i__14411 = G__14425;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14406_14412))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14406_14412,G__14407_14413) : re_frame.fx.register.call(null,G__14406_14412,G__14407_14413));
var G__14426_14428 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__14427_14429 = ((function (G__14426_14428){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__14426_14428))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14426_14428,G__14427_14429) : re_frame.fx.register.call(null,G__14426_14428,G__14427_14429));
var G__14430_14432 = cljs.core.cst$kw$db;
var G__14431_14433 = ((function (G__14430_14432){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__14430_14432))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14430_14432,G__14431_14433) : re_frame.fx.register.call(null,G__14430_14432,G__14431_14433));
