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
var _STAR_current_trace_STAR_17751 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__17752 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__17753 = null;
var count__17754 = (0);
var i__17755 = (0);
while(true){
if((i__17755 < count__17754)){
var vec__17756 = chunk__17753.cljs$core$IIndexed$_nth$arity$2(null,i__17755);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17756,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17756,(1),null);
var temp__5455__auto___17772 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17772)){
var effect_fn_17773 = temp__5455__auto___17772;
(effect_fn_17773.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17773.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17773.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17774 = seq__17752;
var G__17775 = chunk__17753;
var G__17776 = count__17754;
var G__17777 = (i__17755 + (1));
seq__17752 = G__17774;
chunk__17753 = G__17775;
count__17754 = G__17776;
i__17755 = G__17777;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17752);
if(temp__5457__auto__){
var seq__17752__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17752__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17752__$1);
var G__17778 = cljs.core.chunk_rest(seq__17752__$1);
var G__17779 = c__4319__auto__;
var G__17780 = cljs.core.count(c__4319__auto__);
var G__17781 = (0);
seq__17752 = G__17778;
chunk__17753 = G__17779;
count__17754 = G__17780;
i__17755 = G__17781;
continue;
} else {
var vec__17759 = cljs.core.first(seq__17752__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17759,(1),null);
var temp__5455__auto___17782 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17782)){
var effect_fn_17783 = temp__5455__auto___17782;
(effect_fn_17783.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17783.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17783.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17784 = cljs.core.next(seq__17752__$1);
var G__17785 = null;
var G__17786 = (0);
var G__17787 = (0);
seq__17752 = G__17784;
chunk__17753 = G__17785;
count__17754 = G__17786;
i__17755 = G__17787;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__9724__auto___17788 = re_frame.interop.now();
var duration__9725__auto___17789 = (end__9724__auto___17788 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__9725__auto___17789,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__9724__auto___17788);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17751;
}} else {
var seq__17762 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__17763 = null;
var count__17764 = (0);
var i__17765 = (0);
while(true){
if((i__17765 < count__17764)){
var vec__17766 = chunk__17763.cljs$core$IIndexed$_nth$arity$2(null,i__17765);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17766,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17766,(1),null);
var temp__5455__auto___17790 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17790)){
var effect_fn_17791 = temp__5455__auto___17790;
(effect_fn_17791.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17791.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17791.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17792 = seq__17762;
var G__17793 = chunk__17763;
var G__17794 = count__17764;
var G__17795 = (i__17765 + (1));
seq__17762 = G__17792;
chunk__17763 = G__17793;
count__17764 = G__17794;
i__17765 = G__17795;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17762);
if(temp__5457__auto__){
var seq__17762__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17762__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17762__$1);
var G__17796 = cljs.core.chunk_rest(seq__17762__$1);
var G__17797 = c__4319__auto__;
var G__17798 = cljs.core.count(c__4319__auto__);
var G__17799 = (0);
seq__17762 = G__17796;
chunk__17763 = G__17797;
count__17764 = G__17798;
i__17765 = G__17799;
continue;
} else {
var vec__17769 = cljs.core.first(seq__17762__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17769,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17769,(1),null);
var temp__5455__auto___17800 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17800)){
var effect_fn_17801 = temp__5455__auto___17800;
(effect_fn_17801.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17801.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17801.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17802 = cljs.core.next(seq__17762__$1);
var G__17803 = null;
var G__17804 = (0);
var G__17805 = (0);
seq__17762 = G__17802;
chunk__17763 = G__17803;
count__17764 = G__17804;
i__17765 = G__17805;
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
var seq__17806 = cljs.core.seq(value);
var chunk__17807 = null;
var count__17808 = (0);
var i__17809 = (0);
while(true){
if((i__17809 < count__17808)){
var map__17810 = chunk__17807.cljs$core$IIndexed$_nth$arity$2(null,i__17809);
var map__17810__$1 = ((((!((map__17810 == null)))?(((((map__17810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17810):map__17810);
var effect = map__17810__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17810__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17810__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__17806,chunk__17807,count__17808,i__17809,map__17810,map__17810__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__17806,chunk__17807,count__17808,i__17809,map__17810,map__17810__$1,effect,ms,dispatch))
,ms);
}


var G__17814 = seq__17806;
var G__17815 = chunk__17807;
var G__17816 = count__17808;
var G__17817 = (i__17809 + (1));
seq__17806 = G__17814;
chunk__17807 = G__17815;
count__17808 = G__17816;
i__17809 = G__17817;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17806);
if(temp__5457__auto__){
var seq__17806__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17806__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17806__$1);
var G__17818 = cljs.core.chunk_rest(seq__17806__$1);
var G__17819 = c__4319__auto__;
var G__17820 = cljs.core.count(c__4319__auto__);
var G__17821 = (0);
seq__17806 = G__17818;
chunk__17807 = G__17819;
count__17808 = G__17820;
i__17809 = G__17821;
continue;
} else {
var map__17812 = cljs.core.first(seq__17806__$1);
var map__17812__$1 = ((((!((map__17812 == null)))?(((((map__17812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17812):map__17812);
var effect = map__17812__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17812__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17812__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__17806,chunk__17807,count__17808,i__17809,map__17812,map__17812__$1,effect,ms,dispatch,seq__17806__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__17806,chunk__17807,count__17808,i__17809,map__17812,map__17812__$1,effect,ms,dispatch,seq__17806__$1,temp__5457__auto__))
,ms);
}


var G__17822 = cljs.core.next(seq__17806__$1);
var G__17823 = null;
var G__17824 = (0);
var G__17825 = (0);
seq__17806 = G__17822;
chunk__17807 = G__17823;
count__17808 = G__17824;
i__17809 = G__17825;
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
var seq__17826 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17827 = null;
var count__17828 = (0);
var i__17829 = (0);
while(true){
if((i__17829 < count__17828)){
var event = chunk__17827.cljs$core$IIndexed$_nth$arity$2(null,i__17829);
re_frame.router.dispatch(event);


var G__17830 = seq__17826;
var G__17831 = chunk__17827;
var G__17832 = count__17828;
var G__17833 = (i__17829 + (1));
seq__17826 = G__17830;
chunk__17827 = G__17831;
count__17828 = G__17832;
i__17829 = G__17833;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17826);
if(temp__5457__auto__){
var seq__17826__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17826__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17826__$1);
var G__17834 = cljs.core.chunk_rest(seq__17826__$1);
var G__17835 = c__4319__auto__;
var G__17836 = cljs.core.count(c__4319__auto__);
var G__17837 = (0);
seq__17826 = G__17834;
chunk__17827 = G__17835;
count__17828 = G__17836;
i__17829 = G__17837;
continue;
} else {
var event = cljs.core.first(seq__17826__$1);
re_frame.router.dispatch(event);


var G__17838 = cljs.core.next(seq__17826__$1);
var G__17839 = null;
var G__17840 = (0);
var G__17841 = (0);
seq__17826 = G__17838;
chunk__17827 = G__17839;
count__17828 = G__17840;
i__17829 = G__17841;
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
var seq__17842 = cljs.core.seq(value);
var chunk__17843 = null;
var count__17844 = (0);
var i__17845 = (0);
while(true){
if((i__17845 < count__17844)){
var event = chunk__17843.cljs$core$IIndexed$_nth$arity$2(null,i__17845);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17846 = seq__17842;
var G__17847 = chunk__17843;
var G__17848 = count__17844;
var G__17849 = (i__17845 + (1));
seq__17842 = G__17846;
chunk__17843 = G__17847;
count__17844 = G__17848;
i__17845 = G__17849;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17842);
if(temp__5457__auto__){
var seq__17842__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17842__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__17842__$1);
var G__17850 = cljs.core.chunk_rest(seq__17842__$1);
var G__17851 = c__4319__auto__;
var G__17852 = cljs.core.count(c__4319__auto__);
var G__17853 = (0);
seq__17842 = G__17850;
chunk__17843 = G__17851;
count__17844 = G__17852;
i__17845 = G__17853;
continue;
} else {
var event = cljs.core.first(seq__17842__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17854 = cljs.core.next(seq__17842__$1);
var G__17855 = null;
var G__17856 = (0);
var G__17857 = (0);
seq__17842 = G__17854;
chunk__17843 = G__17855;
count__17844 = G__17856;
i__17845 = G__17857;
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
