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
var make_chain = (function (p1__14440_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__14440_SHARP_));
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

var temp__4657__auto___14441 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___14441)){
var not_i_14442 = temp__4657__auto___14441;
if(cljs.core.fn_QMARK_(not_i_14442)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_14442], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_14442], 0));
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
var _STAR_handling_STAR_14459 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14460 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14415__auto___14475 = re_frame.interop.now();
var duration__14416__auto___14476 = (end__14415__auto___14475 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14461_14477 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14462_14478 = null;
var count__14463_14479 = (0);
var i__14464_14480 = (0);
while(true){
if((i__14464_14480 < count__14463_14479)){
var vec__14465_14481 = chunk__14462_14478.cljs$core$IIndexed$_nth$arity$2(null,i__14464_14480);
var k__14417__auto___14482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465_14481,(0),null);
var cb__14418__auto___14483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465_14481,(1),null);
try{var G__14469_14484 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___14476,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___14483.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___14483.cljs$core$IFn$_invoke$arity$1(G__14469_14484) : cb__14418__auto___14483.call(null,G__14469_14484));
}catch (e14468){if((e14468 instanceof java.lang.Exception)){
var e__14419__auto___14485 = e14468;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___14482,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___14485], 0));
} else {
throw e14468;

}
}
var G__14486 = seq__14461_14477;
var G__14487 = chunk__14462_14478;
var G__14488 = count__14463_14479;
var G__14489 = (i__14464_14480 + (1));
seq__14461_14477 = G__14486;
chunk__14462_14478 = G__14487;
count__14463_14479 = G__14488;
i__14464_14480 = G__14489;
continue;
} else {
var temp__4657__auto___14490 = cljs.core.seq(seq__14461_14477);
if(temp__4657__auto___14490){
var seq__14461_14491__$1 = temp__4657__auto___14490;
if(cljs.core.chunked_seq_QMARK_(seq__14461_14491__$1)){
var c__7845__auto___14492 = cljs.core.chunk_first(seq__14461_14491__$1);
var G__14493 = cljs.core.chunk_rest(seq__14461_14491__$1);
var G__14494 = c__7845__auto___14492;
var G__14495 = cljs.core.count(c__7845__auto___14492);
var G__14496 = (0);
seq__14461_14477 = G__14493;
chunk__14462_14478 = G__14494;
count__14463_14479 = G__14495;
i__14464_14480 = G__14496;
continue;
} else {
var vec__14470_14497 = cljs.core.first(seq__14461_14491__$1);
var k__14417__auto___14498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14470_14497,(0),null);
var cb__14418__auto___14499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14470_14497,(1),null);
try{var G__14474_14500 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___14476,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___14499.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___14499.cljs$core$IFn$_invoke$arity$1(G__14474_14500) : cb__14418__auto___14499.call(null,G__14474_14500));
}catch (e14473){if((e14473 instanceof java.lang.Exception)){
var e__14419__auto___14501 = e14473;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___14498,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___14501], 0));
} else {
throw e14473;

}
}
var G__14502 = cljs.core.next(seq__14461_14491__$1);
var G__14503 = null;
var G__14504 = (0);
var G__14505 = (0);
seq__14461_14477 = G__14502;
chunk__14462_14478 = G__14503;
count__14463_14479 = G__14504;
i__14464_14480 = G__14505;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14460;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_14459;
}}
} else {
return null;
}
});
