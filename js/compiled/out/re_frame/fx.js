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
var _STAR_current_trace_STAR_17747 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__17748 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__17749 = null;
var count__17750 = (0);
var i__17751 = (0);
while(true){
if((i__17751 < count__17750)){
var vec__17752 = chunk__17749.cljs$core$IIndexed$_nth$arity$2(null,i__17751);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17752,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17752,(1),null);
var temp__5455__auto___17768 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17768)){
var effect_fn_17769 = temp__5455__auto___17768;
(effect_fn_17769.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17769.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17769.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17770 = seq__17748;
var G__17771 = chunk__17749;
var G__17772 = count__17750;
var G__17773 = (i__17751 + (1));
seq__17748 = G__17770;
chunk__17749 = G__17771;
count__17750 = G__17772;
i__17751 = G__17773;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17748);
if(temp__5457__auto__){
var seq__17748__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17748__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17748__$1);
var G__17774 = cljs.core.chunk_rest(seq__17748__$1);
var G__17775 = c__4319__auto__;
var G__17776 = cljs.core.count(c__4319__auto__);
var G__17777 = (0);
seq__17748 = G__17774;
chunk__17749 = G__17775;
count__17750 = G__17776;
i__17751 = G__17777;
continue;
} else {
var vec__17755 = cljs.core.first(seq__17748__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17755,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17755,(1),null);
var temp__5455__auto___17778 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17778)){
var effect_fn_17779 = temp__5455__auto___17778;
(effect_fn_17779.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17779.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17779.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17780 = cljs.core.next(seq__17748__$1);
var G__17781 = null;
var G__17782 = (0);
var G__17783 = (0);
seq__17748 = G__17780;
chunk__17749 = G__17781;
count__17750 = G__17782;
i__17751 = G__17783;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__9724__auto___17784 = re_frame.interop.now();
var duration__9725__auto___17785 = (end__9724__auto___17784 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__9725__auto___17785,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__9724__auto___17784);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17747;
}} else {
var seq__17758 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__17759 = null;
var count__17760 = (0);
var i__17761 = (0);
while(true){
if((i__17761 < count__17760)){
var vec__17762 = chunk__17759.cljs$core$IIndexed$_nth$arity$2(null,i__17761);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17762,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17762,(1),null);
var temp__5455__auto___17786 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17786)){
var effect_fn_17787 = temp__5455__auto___17786;
(effect_fn_17787.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17787.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17787.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17788 = seq__17758;
var G__17789 = chunk__17759;
var G__17790 = count__17760;
var G__17791 = (i__17761 + (1));
seq__17758 = G__17788;
chunk__17759 = G__17789;
count__17760 = G__17790;
i__17761 = G__17791;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17758);
if(temp__5457__auto__){
var seq__17758__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17758__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17758__$1);
var G__17792 = cljs.core.chunk_rest(seq__17758__$1);
var G__17793 = c__4319__auto__;
var G__17794 = cljs.core.count(c__4319__auto__);
var G__17795 = (0);
seq__17758 = G__17792;
chunk__17759 = G__17793;
count__17760 = G__17794;
i__17761 = G__17795;
continue;
} else {
var vec__17765 = cljs.core.first(seq__17758__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17765,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17765,(1),null);
var temp__5455__auto___17796 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17796)){
var effect_fn_17797 = temp__5455__auto___17796;
(effect_fn_17797.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17797.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17797.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17798 = cljs.core.next(seq__17758__$1);
var G__17799 = null;
var G__17800 = (0);
var G__17801 = (0);
seq__17758 = G__17798;
chunk__17759 = G__17799;
count__17760 = G__17800;
i__17761 = G__17801;
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
var seq__17802 = cljs.core.seq(value);
var chunk__17803 = null;
var count__17804 = (0);
var i__17805 = (0);
while(true){
if((i__17805 < count__17804)){
var map__17806 = chunk__17803.cljs$core$IIndexed$_nth$arity$2(null,i__17805);
var map__17806__$1 = ((((!((map__17806 == null)))?(((((map__17806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17806):map__17806);
var effect = map__17806__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17806__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17806__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__17802,chunk__17803,count__17804,i__17805,map__17806,map__17806__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__17802,chunk__17803,count__17804,i__17805,map__17806,map__17806__$1,effect,ms,dispatch))
,ms);
}


var G__17810 = seq__17802;
var G__17811 = chunk__17803;
var G__17812 = count__17804;
var G__17813 = (i__17805 + (1));
seq__17802 = G__17810;
chunk__17803 = G__17811;
count__17804 = G__17812;
i__17805 = G__17813;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17802);
if(temp__5457__auto__){
var seq__17802__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17802__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17802__$1);
var G__17814 = cljs.core.chunk_rest(seq__17802__$1);
var G__17815 = c__4319__auto__;
var G__17816 = cljs.core.count(c__4319__auto__);
var G__17817 = (0);
seq__17802 = G__17814;
chunk__17803 = G__17815;
count__17804 = G__17816;
i__17805 = G__17817;
continue;
} else {
var map__17808 = cljs.core.first(seq__17802__$1);
var map__17808__$1 = ((((!((map__17808 == null)))?(((((map__17808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17808):map__17808);
var effect = map__17808__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17808__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17808__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__17802,chunk__17803,count__17804,i__17805,map__17808,map__17808__$1,effect,ms,dispatch,seq__17802__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__17802,chunk__17803,count__17804,i__17805,map__17808,map__17808__$1,effect,ms,dispatch,seq__17802__$1,temp__5457__auto__))
,ms);
}


var G__17818 = cljs.core.next(seq__17802__$1);
var G__17819 = null;
var G__17820 = (0);
var G__17821 = (0);
seq__17802 = G__17818;
chunk__17803 = G__17819;
count__17804 = G__17820;
i__17805 = G__17821;
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
var seq__17822 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17823 = null;
var count__17824 = (0);
var i__17825 = (0);
while(true){
if((i__17825 < count__17824)){
var event = chunk__17823.cljs$core$IIndexed$_nth$arity$2(null,i__17825);
re_frame.router.dispatch(event);


var G__17826 = seq__17822;
var G__17827 = chunk__17823;
var G__17828 = count__17824;
var G__17829 = (i__17825 + (1));
seq__17822 = G__17826;
chunk__17823 = G__17827;
count__17824 = G__17828;
i__17825 = G__17829;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17822);
if(temp__5457__auto__){
var seq__17822__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17822__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17822__$1);
var G__17830 = cljs.core.chunk_rest(seq__17822__$1);
var G__17831 = c__4319__auto__;
var G__17832 = cljs.core.count(c__4319__auto__);
var G__17833 = (0);
seq__17822 = G__17830;
chunk__17823 = G__17831;
count__17824 = G__17832;
i__17825 = G__17833;
continue;
} else {
var event = cljs.core.first(seq__17822__$1);
re_frame.router.dispatch(event);


var G__17834 = cljs.core.next(seq__17822__$1);
var G__17835 = null;
var G__17836 = (0);
var G__17837 = (0);
seq__17822 = G__17834;
chunk__17823 = G__17835;
count__17824 = G__17836;
i__17825 = G__17837;
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
var seq__17838 = cljs.core.seq(value);
var chunk__17839 = null;
var count__17840 = (0);
var i__17841 = (0);
while(true){
if((i__17841 < count__17840)){
var event = chunk__17839.cljs$core$IIndexed$_nth$arity$2(null,i__17841);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17842 = seq__17838;
var G__17843 = chunk__17839;
var G__17844 = count__17840;
var G__17845 = (i__17841 + (1));
seq__17838 = G__17842;
chunk__17839 = G__17843;
count__17840 = G__17844;
i__17841 = G__17845;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17838);
if(temp__5457__auto__){
var seq__17838__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17838__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17838__$1);
var G__17846 = cljs.core.chunk_rest(seq__17838__$1);
var G__17847 = c__4319__auto__;
var G__17848 = cljs.core.count(c__4319__auto__);
var G__17849 = (0);
seq__17838 = G__17846;
chunk__17839 = G__17847;
count__17840 = G__17848;
i__17841 = G__17849;
continue;
} else {
var event = cljs.core.first(seq__17838__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17850 = cljs.core.next(seq__17838__$1);
var G__17851 = null;
var G__17852 = (0);
var G__17853 = (0);
seq__17838 = G__17850;
chunk__17839 = G__17851;
count__17840 = G__17852;
i__17841 = G__17853;
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
