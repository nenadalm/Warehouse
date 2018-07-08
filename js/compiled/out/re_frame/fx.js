// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
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
var _STAR_current_trace_STAR_11628 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11629 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11630 = null;
var count__11631 = (0);
var i__11632 = (0);
while(true){
if((i__11632 < count__11631)){
var vec__11633 = chunk__11630.cljs$core$IIndexed$_nth$arity$2(null,i__11632);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11633,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11633,(1),null);
var temp__5455__auto___11649 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11649)){
var effect_fn_11650 = temp__5455__auto___11649;
(effect_fn_11650.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11650.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11650.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11651 = seq__11629;
var G__11652 = chunk__11630;
var G__11653 = count__11631;
var G__11654 = (i__11632 + (1));
seq__11629 = G__11651;
chunk__11630 = G__11652;
count__11631 = G__11653;
i__11632 = G__11654;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11629);
if(temp__5457__auto__){
var seq__11629__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11629__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11629__$1);
var G__11655 = cljs.core.chunk_rest(seq__11629__$1);
var G__11656 = c__4351__auto__;
var G__11657 = cljs.core.count(c__4351__auto__);
var G__11658 = (0);
seq__11629 = G__11655;
chunk__11630 = G__11656;
count__11631 = G__11657;
i__11632 = G__11658;
continue;
} else {
var vec__11636 = cljs.core.first(seq__11629__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11636,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11636,(1),null);
var temp__5455__auto___11659 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11659)){
var effect_fn_11660 = temp__5455__auto___11659;
(effect_fn_11660.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11660.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11660.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11661 = cljs.core.next(seq__11629__$1);
var G__11662 = null;
var G__11663 = (0);
var G__11664 = (0);
seq__11629 = G__11661;
chunk__11630 = G__11662;
count__11631 = G__11663;
i__11632 = G__11664;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6492__auto___11665 = re_frame.interop.now();
var duration__6493__auto___11666 = (end__6492__auto___11665 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6493__auto___11666,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6492__auto___11665);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11628;
}} else {
var seq__11639 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11640 = null;
var count__11641 = (0);
var i__11642 = (0);
while(true){
if((i__11642 < count__11641)){
var vec__11643 = chunk__11640.cljs$core$IIndexed$_nth$arity$2(null,i__11642);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11643,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11643,(1),null);
var temp__5455__auto___11667 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11667)){
var effect_fn_11668 = temp__5455__auto___11667;
(effect_fn_11668.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11668.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11668.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11669 = seq__11639;
var G__11670 = chunk__11640;
var G__11671 = count__11641;
var G__11672 = (i__11642 + (1));
seq__11639 = G__11669;
chunk__11640 = G__11670;
count__11641 = G__11671;
i__11642 = G__11672;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11639);
if(temp__5457__auto__){
var seq__11639__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11639__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11639__$1);
var G__11673 = cljs.core.chunk_rest(seq__11639__$1);
var G__11674 = c__4351__auto__;
var G__11675 = cljs.core.count(c__4351__auto__);
var G__11676 = (0);
seq__11639 = G__11673;
chunk__11640 = G__11674;
count__11641 = G__11675;
i__11642 = G__11676;
continue;
} else {
var vec__11646 = cljs.core.first(seq__11639__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11646,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11646,(1),null);
var temp__5455__auto___11677 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11677)){
var effect_fn_11678 = temp__5455__auto___11677;
(effect_fn_11678.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11678.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11678.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11679 = cljs.core.next(seq__11639__$1);
var G__11680 = null;
var G__11681 = (0);
var G__11682 = (0);
seq__11639 = G__11679;
chunk__11640 = G__11680;
count__11641 = G__11681;
i__11642 = G__11682;
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
var seq__11683 = cljs.core.seq(value);
var chunk__11684 = null;
var count__11685 = (0);
var i__11686 = (0);
while(true){
if((i__11686 < count__11685)){
var map__11687 = chunk__11684.cljs$core$IIndexed$_nth$arity$2(null,i__11686);
var map__11687__$1 = ((((!((map__11687 == null)))?(((((map__11687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11687):map__11687);
var effect = map__11687__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11687__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11687__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11683,chunk__11684,count__11685,i__11686,map__11687,map__11687__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11683,chunk__11684,count__11685,i__11686,map__11687,map__11687__$1,effect,ms,dispatch))
,ms);
}


var G__11691 = seq__11683;
var G__11692 = chunk__11684;
var G__11693 = count__11685;
var G__11694 = (i__11686 + (1));
seq__11683 = G__11691;
chunk__11684 = G__11692;
count__11685 = G__11693;
i__11686 = G__11694;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11683);
if(temp__5457__auto__){
var seq__11683__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11683__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11683__$1);
var G__11695 = cljs.core.chunk_rest(seq__11683__$1);
var G__11696 = c__4351__auto__;
var G__11697 = cljs.core.count(c__4351__auto__);
var G__11698 = (0);
seq__11683 = G__11695;
chunk__11684 = G__11696;
count__11685 = G__11697;
i__11686 = G__11698;
continue;
} else {
var map__11689 = cljs.core.first(seq__11683__$1);
var map__11689__$1 = ((((!((map__11689 == null)))?(((((map__11689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11689):map__11689);
var effect = map__11689__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11689__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11689__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11683,chunk__11684,count__11685,i__11686,map__11689,map__11689__$1,effect,ms,dispatch,seq__11683__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11683,chunk__11684,count__11685,i__11686,map__11689,map__11689__$1,effect,ms,dispatch,seq__11683__$1,temp__5457__auto__))
,ms);
}


var G__11699 = cljs.core.next(seq__11683__$1);
var G__11700 = null;
var G__11701 = (0);
var G__11702 = (0);
seq__11683 = G__11699;
chunk__11684 = G__11700;
count__11685 = G__11701;
i__11686 = G__11702;
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
var seq__11703 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11704 = null;
var count__11705 = (0);
var i__11706 = (0);
while(true){
if((i__11706 < count__11705)){
var event = chunk__11704.cljs$core$IIndexed$_nth$arity$2(null,i__11706);
re_frame.router.dispatch(event);


var G__11707 = seq__11703;
var G__11708 = chunk__11704;
var G__11709 = count__11705;
var G__11710 = (i__11706 + (1));
seq__11703 = G__11707;
chunk__11704 = G__11708;
count__11705 = G__11709;
i__11706 = G__11710;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11703);
if(temp__5457__auto__){
var seq__11703__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11703__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11703__$1);
var G__11711 = cljs.core.chunk_rest(seq__11703__$1);
var G__11712 = c__4351__auto__;
var G__11713 = cljs.core.count(c__4351__auto__);
var G__11714 = (0);
seq__11703 = G__11711;
chunk__11704 = G__11712;
count__11705 = G__11713;
i__11706 = G__11714;
continue;
} else {
var event = cljs.core.first(seq__11703__$1);
re_frame.router.dispatch(event);


var G__11715 = cljs.core.next(seq__11703__$1);
var G__11716 = null;
var G__11717 = (0);
var G__11718 = (0);
seq__11703 = G__11715;
chunk__11704 = G__11716;
count__11705 = G__11717;
i__11706 = G__11718;
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
var seq__11719 = cljs.core.seq(value);
var chunk__11720 = null;
var count__11721 = (0);
var i__11722 = (0);
while(true){
if((i__11722 < count__11721)){
var event = chunk__11720.cljs$core$IIndexed$_nth$arity$2(null,i__11722);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11723 = seq__11719;
var G__11724 = chunk__11720;
var G__11725 = count__11721;
var G__11726 = (i__11722 + (1));
seq__11719 = G__11723;
chunk__11720 = G__11724;
count__11721 = G__11725;
i__11722 = G__11726;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11719);
if(temp__5457__auto__){
var seq__11719__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11719__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11719__$1);
var G__11727 = cljs.core.chunk_rest(seq__11719__$1);
var G__11728 = c__4351__auto__;
var G__11729 = cljs.core.count(c__4351__auto__);
var G__11730 = (0);
seq__11719 = G__11727;
chunk__11720 = G__11728;
count__11721 = G__11729;
i__11722 = G__11730;
continue;
} else {
var event = cljs.core.first(seq__11719__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11731 = cljs.core.next(seq__11719__$1);
var G__11732 = null;
var G__11733 = (0);
var G__11734 = (0);
seq__11719 = G__11731;
chunk__11720 = G__11732;
count__11721 = G__11733;
i__11722 = G__11734;
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
