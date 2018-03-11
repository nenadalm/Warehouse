// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_11626 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11627 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11628 = null;
var count__11629 = (0);
var i__11630 = (0);
while(true){
if((i__11630 < count__11629)){
var vec__11631 = chunk__11628.cljs$core$IIndexed$_nth$arity$2(null,i__11630);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11631,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11631,(1),null);
var temp__5455__auto___11647 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11647)){
var effect_fn_11648 = temp__5455__auto___11647;
(effect_fn_11648.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11648.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11648.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11649 = seq__11627;
var G__11650 = chunk__11628;
var G__11651 = count__11629;
var G__11652 = (i__11630 + (1));
seq__11627 = G__11649;
chunk__11628 = G__11650;
count__11629 = G__11651;
i__11630 = G__11652;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11627);
if(temp__5457__auto__){
var seq__11627__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11627__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__11627__$1);
var G__11653 = cljs.core.chunk_rest(seq__11627__$1);
var G__11654 = c__4319__auto__;
var G__11655 = cljs.core.count(c__4319__auto__);
var G__11656 = (0);
seq__11627 = G__11653;
chunk__11628 = G__11654;
count__11629 = G__11655;
i__11630 = G__11656;
continue;
} else {
var vec__11634 = cljs.core.first(seq__11627__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11634,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11634,(1),null);
var temp__5455__auto___11657 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11657)){
var effect_fn_11658 = temp__5455__auto___11657;
(effect_fn_11658.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11658.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11658.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11659 = cljs.core.next(seq__11627__$1);
var G__11660 = null;
var G__11661 = (0);
var G__11662 = (0);
seq__11627 = G__11659;
chunk__11628 = G__11660;
count__11629 = G__11661;
i__11630 = G__11662;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__9724__auto___11663 = re_frame.interop.now();
var duration__9725__auto___11664 = (end__9724__auto___11663 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__9725__auto___11664,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__9724__auto___11663);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11626;
}} else {
var seq__11637 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11638 = null;
var count__11639 = (0);
var i__11640 = (0);
while(true){
if((i__11640 < count__11639)){
var vec__11641 = chunk__11638.cljs$core$IIndexed$_nth$arity$2(null,i__11640);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11641,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11641,(1),null);
var temp__5455__auto___11665 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11665)){
var effect_fn_11666 = temp__5455__auto___11665;
(effect_fn_11666.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11666.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11666.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11667 = seq__11637;
var G__11668 = chunk__11638;
var G__11669 = count__11639;
var G__11670 = (i__11640 + (1));
seq__11637 = G__11667;
chunk__11638 = G__11668;
count__11639 = G__11669;
i__11640 = G__11670;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11637);
if(temp__5457__auto__){
var seq__11637__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11637__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__11637__$1);
var G__11671 = cljs.core.chunk_rest(seq__11637__$1);
var G__11672 = c__4319__auto__;
var G__11673 = cljs.core.count(c__4319__auto__);
var G__11674 = (0);
seq__11637 = G__11671;
chunk__11638 = G__11672;
count__11639 = G__11673;
i__11640 = G__11674;
continue;
} else {
var vec__11644 = cljs.core.first(seq__11637__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11644,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11644,(1),null);
var temp__5455__auto___11675 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11675)){
var effect_fn_11676 = temp__5455__auto___11675;
(effect_fn_11676.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11676.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11676.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11677 = cljs.core.next(seq__11637__$1);
var G__11678 = null;
var G__11679 = (0);
var G__11680 = (0);
seq__11637 = G__11677;
chunk__11638 = G__11678;
count__11639 = G__11679;
i__11640 = G__11680;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__11681 = cljs.core.seq(value);
var chunk__11682 = null;
var count__11683 = (0);
var i__11684 = (0);
while(true){
if((i__11684 < count__11683)){
var map__11685 = chunk__11682.cljs$core$IIndexed$_nth$arity$2(null,i__11684);
var map__11685__$1 = ((((!((map__11685 == null)))?(((((map__11685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11685):map__11685);
var effect = map__11685__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11685__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11685__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11681,chunk__11682,count__11683,i__11684,map__11685,map__11685__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11681,chunk__11682,count__11683,i__11684,map__11685,map__11685__$1,effect,ms,dispatch))
,ms);
}


var G__11689 = seq__11681;
var G__11690 = chunk__11682;
var G__11691 = count__11683;
var G__11692 = (i__11684 + (1));
seq__11681 = G__11689;
chunk__11682 = G__11690;
count__11683 = G__11691;
i__11684 = G__11692;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11681);
if(temp__5457__auto__){
var seq__11681__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11681__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__11681__$1);
var G__11693 = cljs.core.chunk_rest(seq__11681__$1);
var G__11694 = c__4319__auto__;
var G__11695 = cljs.core.count(c__4319__auto__);
var G__11696 = (0);
seq__11681 = G__11693;
chunk__11682 = G__11694;
count__11683 = G__11695;
i__11684 = G__11696;
continue;
} else {
var map__11687 = cljs.core.first(seq__11681__$1);
var map__11687__$1 = ((((!((map__11687 == null)))?(((((map__11687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11687):map__11687);
var effect = map__11687__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11687__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11687__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11681,chunk__11682,count__11683,i__11684,map__11687,map__11687__$1,effect,ms,dispatch,seq__11681__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11681,chunk__11682,count__11683,i__11684,map__11687,map__11687__$1,effect,ms,dispatch,seq__11681__$1,temp__5457__auto__))
,ms);
}


var G__11697 = cljs.core.next(seq__11681__$1);
var G__11698 = null;
var G__11699 = (0);
var G__11700 = (0);
seq__11681 = G__11697;
chunk__11682 = G__11698;
count__11683 = G__11699;
i__11684 = G__11700;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__11701 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11702 = null;
var count__11703 = (0);
var i__11704 = (0);
while(true){
if((i__11704 < count__11703)){
var event = chunk__11702.cljs$core$IIndexed$_nth$arity$2(null,i__11704);
re_frame.router.dispatch(event);


var G__11705 = seq__11701;
var G__11706 = chunk__11702;
var G__11707 = count__11703;
var G__11708 = (i__11704 + (1));
seq__11701 = G__11705;
chunk__11702 = G__11706;
count__11703 = G__11707;
i__11704 = G__11708;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11701);
if(temp__5457__auto__){
var seq__11701__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11701__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__11701__$1);
var G__11709 = cljs.core.chunk_rest(seq__11701__$1);
var G__11710 = c__4319__auto__;
var G__11711 = cljs.core.count(c__4319__auto__);
var G__11712 = (0);
seq__11701 = G__11709;
chunk__11702 = G__11710;
count__11703 = G__11711;
i__11704 = G__11712;
continue;
} else {
var event = cljs.core.first(seq__11701__$1);
re_frame.router.dispatch(event);


var G__11713 = cljs.core.next(seq__11701__$1);
var G__11714 = null;
var G__11715 = (0);
var G__11716 = (0);
seq__11701 = G__11713;
chunk__11702 = G__11714;
count__11703 = G__11715;
i__11704 = G__11716;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__11717 = cljs.core.seq(value);
var chunk__11718 = null;
var count__11719 = (0);
var i__11720 = (0);
while(true){
if((i__11720 < count__11719)){
var event = chunk__11718.cljs$core$IIndexed$_nth$arity$2(null,i__11720);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11721 = seq__11717;
var G__11722 = chunk__11718;
var G__11723 = count__11719;
var G__11724 = (i__11720 + (1));
seq__11717 = G__11721;
chunk__11718 = G__11722;
count__11719 = G__11723;
i__11720 = G__11724;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11717);
if(temp__5457__auto__){
var seq__11717__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11717__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__11717__$1);
var G__11725 = cljs.core.chunk_rest(seq__11717__$1);
var G__11726 = c__4319__auto__;
var G__11727 = cljs.core.count(c__4319__auto__);
var G__11728 = (0);
seq__11717 = G__11725;
chunk__11718 = G__11726;
count__11719 = G__11727;
i__11720 = G__11728;
continue;
} else {
var event = cljs.core.first(seq__11717__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11729 = cljs.core.next(seq__11717__$1);
var G__11730 = null;
var G__11731 = (0);
var G__11732 = (0);
seq__11717 = G__11729;
chunk__11718 = G__11730;
count__11719 = G__11731;
i__11720 = G__11732;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
