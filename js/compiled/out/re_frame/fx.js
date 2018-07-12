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
var _STAR_current_trace_STAR_11746 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11747 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11748 = null;
var count__11749 = (0);
var i__11750 = (0);
while(true){
if((i__11750 < count__11749)){
var vec__11751 = chunk__11748.cljs$core$IIndexed$_nth$arity$2(null,i__11750);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11751,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11751,(1),null);
var temp__5455__auto___11767 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11767)){
var effect_fn_11768 = temp__5455__auto___11767;
(effect_fn_11768.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11768.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11768.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11769 = seq__11747;
var G__11770 = chunk__11748;
var G__11771 = count__11749;
var G__11772 = (i__11750 + (1));
seq__11747 = G__11769;
chunk__11748 = G__11770;
count__11749 = G__11771;
i__11750 = G__11772;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11747);
if(temp__5457__auto__){
var seq__11747__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11747__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11747__$1);
var G__11773 = cljs.core.chunk_rest(seq__11747__$1);
var G__11774 = c__4351__auto__;
var G__11775 = cljs.core.count(c__4351__auto__);
var G__11776 = (0);
seq__11747 = G__11773;
chunk__11748 = G__11774;
count__11749 = G__11775;
i__11750 = G__11776;
continue;
} else {
var vec__11754 = cljs.core.first(seq__11747__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11754,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11754,(1),null);
var temp__5455__auto___11777 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11777)){
var effect_fn_11778 = temp__5455__auto___11777;
(effect_fn_11778.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11778.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11778.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11779 = cljs.core.next(seq__11747__$1);
var G__11780 = null;
var G__11781 = (0);
var G__11782 = (0);
seq__11747 = G__11779;
chunk__11748 = G__11780;
count__11749 = G__11781;
i__11750 = G__11782;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6492__auto___11783 = re_frame.interop.now();
var duration__6493__auto___11784 = (end__6492__auto___11783 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6493__auto___11784,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6492__auto___11783);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11746;
}} else {
var seq__11757 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11758 = null;
var count__11759 = (0);
var i__11760 = (0);
while(true){
if((i__11760 < count__11759)){
var vec__11761 = chunk__11758.cljs$core$IIndexed$_nth$arity$2(null,i__11760);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11761,(1),null);
var temp__5455__auto___11785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11785)){
var effect_fn_11786 = temp__5455__auto___11785;
(effect_fn_11786.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11786.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11786.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11787 = seq__11757;
var G__11788 = chunk__11758;
var G__11789 = count__11759;
var G__11790 = (i__11760 + (1));
seq__11757 = G__11787;
chunk__11758 = G__11788;
count__11759 = G__11789;
i__11760 = G__11790;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11757);
if(temp__5457__auto__){
var seq__11757__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11757__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11757__$1);
var G__11791 = cljs.core.chunk_rest(seq__11757__$1);
var G__11792 = c__4351__auto__;
var G__11793 = cljs.core.count(c__4351__auto__);
var G__11794 = (0);
seq__11757 = G__11791;
chunk__11758 = G__11792;
count__11759 = G__11793;
i__11760 = G__11794;
continue;
} else {
var vec__11764 = cljs.core.first(seq__11757__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11764,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11764,(1),null);
var temp__5455__auto___11795 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11795)){
var effect_fn_11796 = temp__5455__auto___11795;
(effect_fn_11796.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11796.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11796.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11797 = cljs.core.next(seq__11757__$1);
var G__11798 = null;
var G__11799 = (0);
var G__11800 = (0);
seq__11757 = G__11797;
chunk__11758 = G__11798;
count__11759 = G__11799;
i__11760 = G__11800;
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
var seq__11801 = cljs.core.seq(value);
var chunk__11802 = null;
var count__11803 = (0);
var i__11804 = (0);
while(true){
if((i__11804 < count__11803)){
var map__11805 = chunk__11802.cljs$core$IIndexed$_nth$arity$2(null,i__11804);
var map__11805__$1 = ((((!((map__11805 == null)))?(((((map__11805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11805):map__11805);
var effect = map__11805__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11805__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11805__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11801,chunk__11802,count__11803,i__11804,map__11805,map__11805__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11801,chunk__11802,count__11803,i__11804,map__11805,map__11805__$1,effect,ms,dispatch))
,ms);
}


var G__11809 = seq__11801;
var G__11810 = chunk__11802;
var G__11811 = count__11803;
var G__11812 = (i__11804 + (1));
seq__11801 = G__11809;
chunk__11802 = G__11810;
count__11803 = G__11811;
i__11804 = G__11812;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11801);
if(temp__5457__auto__){
var seq__11801__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11801__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11801__$1);
var G__11813 = cljs.core.chunk_rest(seq__11801__$1);
var G__11814 = c__4351__auto__;
var G__11815 = cljs.core.count(c__4351__auto__);
var G__11816 = (0);
seq__11801 = G__11813;
chunk__11802 = G__11814;
count__11803 = G__11815;
i__11804 = G__11816;
continue;
} else {
var map__11807 = cljs.core.first(seq__11801__$1);
var map__11807__$1 = ((((!((map__11807 == null)))?(((((map__11807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11807):map__11807);
var effect = map__11807__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11807__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11807__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11801,chunk__11802,count__11803,i__11804,map__11807,map__11807__$1,effect,ms,dispatch,seq__11801__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11801,chunk__11802,count__11803,i__11804,map__11807,map__11807__$1,effect,ms,dispatch,seq__11801__$1,temp__5457__auto__))
,ms);
}


var G__11817 = cljs.core.next(seq__11801__$1);
var G__11818 = null;
var G__11819 = (0);
var G__11820 = (0);
seq__11801 = G__11817;
chunk__11802 = G__11818;
count__11803 = G__11819;
i__11804 = G__11820;
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
var seq__11821 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11822 = null;
var count__11823 = (0);
var i__11824 = (0);
while(true){
if((i__11824 < count__11823)){
var event = chunk__11822.cljs$core$IIndexed$_nth$arity$2(null,i__11824);
re_frame.router.dispatch(event);


var G__11825 = seq__11821;
var G__11826 = chunk__11822;
var G__11827 = count__11823;
var G__11828 = (i__11824 + (1));
seq__11821 = G__11825;
chunk__11822 = G__11826;
count__11823 = G__11827;
i__11824 = G__11828;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11821);
if(temp__5457__auto__){
var seq__11821__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11821__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11821__$1);
var G__11829 = cljs.core.chunk_rest(seq__11821__$1);
var G__11830 = c__4351__auto__;
var G__11831 = cljs.core.count(c__4351__auto__);
var G__11832 = (0);
seq__11821 = G__11829;
chunk__11822 = G__11830;
count__11823 = G__11831;
i__11824 = G__11832;
continue;
} else {
var event = cljs.core.first(seq__11821__$1);
re_frame.router.dispatch(event);


var G__11833 = cljs.core.next(seq__11821__$1);
var G__11834 = null;
var G__11835 = (0);
var G__11836 = (0);
seq__11821 = G__11833;
chunk__11822 = G__11834;
count__11823 = G__11835;
i__11824 = G__11836;
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
var seq__11837 = cljs.core.seq(value);
var chunk__11838 = null;
var count__11839 = (0);
var i__11840 = (0);
while(true){
if((i__11840 < count__11839)){
var event = chunk__11838.cljs$core$IIndexed$_nth$arity$2(null,i__11840);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11841 = seq__11837;
var G__11842 = chunk__11838;
var G__11843 = count__11839;
var G__11844 = (i__11840 + (1));
seq__11837 = G__11841;
chunk__11838 = G__11842;
count__11839 = G__11843;
i__11840 = G__11844;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11837);
if(temp__5457__auto__){
var seq__11837__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11837__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11837__$1);
var G__11845 = cljs.core.chunk_rest(seq__11837__$1);
var G__11846 = c__4351__auto__;
var G__11847 = cljs.core.count(c__4351__auto__);
var G__11848 = (0);
seq__11837 = G__11845;
chunk__11838 = G__11846;
count__11839 = G__11847;
i__11840 = G__11848;
continue;
} else {
var event = cljs.core.first(seq__11837__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11849 = cljs.core.next(seq__11837__$1);
var G__11850 = null;
var G__11851 = (0);
var G__11852 = (0);
seq__11837 = G__11849;
chunk__11838 = G__11850;
count__11839 = G__11851;
i__11840 = G__11852;
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
