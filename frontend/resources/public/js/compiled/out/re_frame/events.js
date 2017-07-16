// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = cljs.core.cst$kw$event;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind) : re_frame.registrar.kinds.call(null,re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__14426_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__14426_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join('')], 0));
} else {
}

var temp__4657__auto___14427 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___14427)){
var not_i_14428 = temp__4657__auto___14427;
if(cljs.core.fn_QMARK_(not_i_14428)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_14428], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_14428], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler(re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils(id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join('')], 0));
} else {
var _STAR_handling_STAR_14445 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14446 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14401__auto___14461 = re_frame.interop.now();
var duration__14402__auto___14462 = (end__14401__auto___14461 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14447_14463 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14448_14464 = null;
var count__14449_14465 = (0);
var i__14450_14466 = (0);
while(true){
if((i__14450_14466 < count__14449_14465)){
var vec__14451_14467 = chunk__14448_14464.cljs$core$IIndexed$_nth$arity$2(null,i__14450_14466);
var k__14403__auto___14468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14451_14467,(0),null);
var cb__14404__auto___14469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14451_14467,(1),null);
try{var G__14455_14470 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___14462,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___14469.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___14469.cljs$core$IFn$_invoke$arity$1(G__14455_14470) : cb__14404__auto___14469.call(null,G__14455_14470));
}catch (e14454){if((e14454 instanceof java.lang.Exception)){
var e__14405__auto___14471 = e14454;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___14468,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___14471], 0));
} else {
throw e14454;

}
}
var G__14472 = seq__14447_14463;
var G__14473 = chunk__14448_14464;
var G__14474 = count__14449_14465;
var G__14475 = (i__14450_14466 + (1));
seq__14447_14463 = G__14472;
chunk__14448_14464 = G__14473;
count__14449_14465 = G__14474;
i__14450_14466 = G__14475;
continue;
} else {
var temp__4657__auto___14476 = cljs.core.seq(seq__14447_14463);
if(temp__4657__auto___14476){
var seq__14447_14477__$1 = temp__4657__auto___14476;
if(cljs.core.chunked_seq_QMARK_(seq__14447_14477__$1)){
var c__7845__auto___14478 = cljs.core.chunk_first(seq__14447_14477__$1);
var G__14479 = cljs.core.chunk_rest(seq__14447_14477__$1);
var G__14480 = c__7845__auto___14478;
var G__14481 = cljs.core.count(c__7845__auto___14478);
var G__14482 = (0);
seq__14447_14463 = G__14479;
chunk__14448_14464 = G__14480;
count__14449_14465 = G__14481;
i__14450_14466 = G__14482;
continue;
} else {
var vec__14456_14483 = cljs.core.first(seq__14447_14477__$1);
var k__14403__auto___14484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456_14483,(0),null);
var cb__14404__auto___14485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456_14483,(1),null);
try{var G__14460_14486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___14462,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___14485.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___14485.cljs$core$IFn$_invoke$arity$1(G__14460_14486) : cb__14404__auto___14485.call(null,G__14460_14486));
}catch (e14459){if((e14459 instanceof java.lang.Exception)){
var e__14405__auto___14487 = e14459;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___14484,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___14487], 0));
} else {
throw e14459;

}
}
var G__14488 = cljs.core.next(seq__14447_14477__$1);
var G__14489 = null;
var G__14490 = (0);
var G__14491 = (0);
seq__14447_14463 = G__14488;
chunk__14448_14464 = G__14489;
count__14449_14465 = G__14490;
i__14450_14466 = G__14491;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14446;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_14445;
}}
} else {
return null;
}
});
