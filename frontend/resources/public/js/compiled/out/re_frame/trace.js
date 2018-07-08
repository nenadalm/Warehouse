// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__6514){
var map__6515 = p__6514;
var map__6515__$1 = ((((!((map__6515 == null)))?(((((map__6515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6515):map__6515);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6515__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6515__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6515__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6515__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__6517_6531 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__6518_6532 = null;
var count__6519_6533 = (0);
var i__6520_6534 = (0);
while(true){
if((i__6520_6534 < count__6519_6533)){
var vec__6521_6535 = chunk__6518_6532.cljs$core$IIndexed$_nth$arity$2(null,i__6520_6534);
var k_6536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6521_6535,(0),null);
var cb_6537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6521_6535,(1),null);
try{var G__6525_6538 = cljs.core.deref(re_frame.trace.traces);
(cb_6537.cljs$core$IFn$_invoke$arity$1 ? cb_6537.cljs$core$IFn$_invoke$arity$1(G__6525_6538) : cb_6537.call(null,G__6525_6538));
}catch (e6524){var e_6539 = e6524;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6536,"while storing",cljs.core.deref(re_frame.trace.traces),e_6539], 0));
}

var G__6540 = seq__6517_6531;
var G__6541 = chunk__6518_6532;
var G__6542 = count__6519_6533;
var G__6543 = (i__6520_6534 + (1));
seq__6517_6531 = G__6540;
chunk__6518_6532 = G__6541;
count__6519_6533 = G__6542;
i__6520_6534 = G__6543;
continue;
} else {
var temp__5457__auto___6544 = cljs.core.seq(seq__6517_6531);
if(temp__5457__auto___6544){
var seq__6517_6545__$1 = temp__5457__auto___6544;
if(cljs.core.chunked_seq_QMARK_(seq__6517_6545__$1)){
var c__4351__auto___6546 = cljs.core.chunk_first(seq__6517_6545__$1);
var G__6547 = cljs.core.chunk_rest(seq__6517_6545__$1);
var G__6548 = c__4351__auto___6546;
var G__6549 = cljs.core.count(c__4351__auto___6546);
var G__6550 = (0);
seq__6517_6531 = G__6547;
chunk__6518_6532 = G__6548;
count__6519_6533 = G__6549;
i__6520_6534 = G__6550;
continue;
} else {
var vec__6526_6551 = cljs.core.first(seq__6517_6545__$1);
var k_6552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6526_6551,(0),null);
var cb_6553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6526_6551,(1),null);
try{var G__6530_6554 = cljs.core.deref(re_frame.trace.traces);
(cb_6553.cljs$core$IFn$_invoke$arity$1 ? cb_6553.cljs$core$IFn$_invoke$arity$1(G__6530_6554) : cb_6553.call(null,G__6530_6554));
}catch (e6529){var e_6555 = e6529;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6552,"while storing",cljs.core.deref(re_frame.trace.traces),e_6555], 0));
}

var G__6556 = cljs.core.next(seq__6517_6545__$1);
var G__6557 = null;
var G__6558 = (0);
var G__6559 = (0);
seq__6517_6531 = G__6556;
chunk__6518_6532 = G__6557;
count__6519_6533 = G__6558;
i__6520_6534 = G__6559;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
