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
var _STAR_current_trace_STAR_11801 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11802 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11803 = null;
var count__11804 = (0);
var i__11805 = (0);
while(true){
if((i__11805 < count__11804)){
var vec__11806 = chunk__11803.cljs$core$IIndexed$_nth$arity$2(null,i__11805);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11806,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11806,(1),null);
var temp__5455__auto___11822 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11822)){
var effect_fn_11823 = temp__5455__auto___11822;
(effect_fn_11823.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11823.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11823.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11824 = seq__11802;
var G__11825 = chunk__11803;
var G__11826 = count__11804;
var G__11827 = (i__11805 + (1));
seq__11802 = G__11824;
chunk__11803 = G__11825;
count__11804 = G__11826;
i__11805 = G__11827;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11802);
if(temp__5457__auto__){
var seq__11802__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11802__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11802__$1);
var G__11828 = cljs.core.chunk_rest(seq__11802__$1);
var G__11829 = c__4351__auto__;
var G__11830 = cljs.core.count(c__4351__auto__);
var G__11831 = (0);
seq__11802 = G__11828;
chunk__11803 = G__11829;
count__11804 = G__11830;
i__11805 = G__11831;
continue;
} else {
var vec__11809 = cljs.core.first(seq__11802__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11809,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11809,(1),null);
var temp__5455__auto___11832 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11832)){
var effect_fn_11833 = temp__5455__auto___11832;
(effect_fn_11833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11833.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11834 = cljs.core.next(seq__11802__$1);
var G__11835 = null;
var G__11836 = (0);
var G__11837 = (0);
seq__11802 = G__11834;
chunk__11803 = G__11835;
count__11804 = G__11836;
i__11805 = G__11837;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6492__auto___11838 = re_frame.interop.now();
var duration__6493__auto___11839 = (end__6492__auto___11838 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6493__auto___11839,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6492__auto___11838);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11801;
}} else {
var seq__11812 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11813 = null;
var count__11814 = (0);
var i__11815 = (0);
while(true){
if((i__11815 < count__11814)){
var vec__11816 = chunk__11813.cljs$core$IIndexed$_nth$arity$2(null,i__11815);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11816,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11816,(1),null);
var temp__5455__auto___11840 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11840)){
var effect_fn_11841 = temp__5455__auto___11840;
(effect_fn_11841.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11841.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11841.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11842 = seq__11812;
var G__11843 = chunk__11813;
var G__11844 = count__11814;
var G__11845 = (i__11815 + (1));
seq__11812 = G__11842;
chunk__11813 = G__11843;
count__11814 = G__11844;
i__11815 = G__11845;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11812);
if(temp__5457__auto__){
var seq__11812__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11812__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11812__$1);
var G__11846 = cljs.core.chunk_rest(seq__11812__$1);
var G__11847 = c__4351__auto__;
var G__11848 = cljs.core.count(c__4351__auto__);
var G__11849 = (0);
seq__11812 = G__11846;
chunk__11813 = G__11847;
count__11814 = G__11848;
i__11815 = G__11849;
continue;
} else {
var vec__11819 = cljs.core.first(seq__11812__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819,(1),null);
var temp__5455__auto___11850 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11850)){
var effect_fn_11851 = temp__5455__auto___11850;
(effect_fn_11851.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11851.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11851.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11852 = cljs.core.next(seq__11812__$1);
var G__11853 = null;
var G__11854 = (0);
var G__11855 = (0);
seq__11812 = G__11852;
chunk__11813 = G__11853;
count__11814 = G__11854;
i__11815 = G__11855;
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
var seq__11856 = cljs.core.seq(value);
var chunk__11857 = null;
var count__11858 = (0);
var i__11859 = (0);
while(true){
if((i__11859 < count__11858)){
var map__11860 = chunk__11857.cljs$core$IIndexed$_nth$arity$2(null,i__11859);
var map__11860__$1 = ((((!((map__11860 == null)))?(((((map__11860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11860):map__11860);
var effect = map__11860__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11860__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11860__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11856,chunk__11857,count__11858,i__11859,map__11860,map__11860__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11856,chunk__11857,count__11858,i__11859,map__11860,map__11860__$1,effect,ms,dispatch))
,ms);
}


var G__11864 = seq__11856;
var G__11865 = chunk__11857;
var G__11866 = count__11858;
var G__11867 = (i__11859 + (1));
seq__11856 = G__11864;
chunk__11857 = G__11865;
count__11858 = G__11866;
i__11859 = G__11867;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11856);
if(temp__5457__auto__){
var seq__11856__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11856__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11856__$1);
var G__11868 = cljs.core.chunk_rest(seq__11856__$1);
var G__11869 = c__4351__auto__;
var G__11870 = cljs.core.count(c__4351__auto__);
var G__11871 = (0);
seq__11856 = G__11868;
chunk__11857 = G__11869;
count__11858 = G__11870;
i__11859 = G__11871;
continue;
} else {
var map__11862 = cljs.core.first(seq__11856__$1);
var map__11862__$1 = ((((!((map__11862 == null)))?(((((map__11862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11862):map__11862);
var effect = map__11862__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11862__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11862__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11856,chunk__11857,count__11858,i__11859,map__11862,map__11862__$1,effect,ms,dispatch,seq__11856__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11856,chunk__11857,count__11858,i__11859,map__11862,map__11862__$1,effect,ms,dispatch,seq__11856__$1,temp__5457__auto__))
,ms);
}


var G__11872 = cljs.core.next(seq__11856__$1);
var G__11873 = null;
var G__11874 = (0);
var G__11875 = (0);
seq__11856 = G__11872;
chunk__11857 = G__11873;
count__11858 = G__11874;
i__11859 = G__11875;
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
var seq__11876 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11877 = null;
var count__11878 = (0);
var i__11879 = (0);
while(true){
if((i__11879 < count__11878)){
var event = chunk__11877.cljs$core$IIndexed$_nth$arity$2(null,i__11879);
re_frame.router.dispatch(event);


var G__11880 = seq__11876;
var G__11881 = chunk__11877;
var G__11882 = count__11878;
var G__11883 = (i__11879 + (1));
seq__11876 = G__11880;
chunk__11877 = G__11881;
count__11878 = G__11882;
i__11879 = G__11883;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11876);
if(temp__5457__auto__){
var seq__11876__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11876__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11876__$1);
var G__11884 = cljs.core.chunk_rest(seq__11876__$1);
var G__11885 = c__4351__auto__;
var G__11886 = cljs.core.count(c__4351__auto__);
var G__11887 = (0);
seq__11876 = G__11884;
chunk__11877 = G__11885;
count__11878 = G__11886;
i__11879 = G__11887;
continue;
} else {
var event = cljs.core.first(seq__11876__$1);
re_frame.router.dispatch(event);


var G__11888 = cljs.core.next(seq__11876__$1);
var G__11889 = null;
var G__11890 = (0);
var G__11891 = (0);
seq__11876 = G__11888;
chunk__11877 = G__11889;
count__11878 = G__11890;
i__11879 = G__11891;
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
var seq__11892 = cljs.core.seq(value);
var chunk__11893 = null;
var count__11894 = (0);
var i__11895 = (0);
while(true){
if((i__11895 < count__11894)){
var event = chunk__11893.cljs$core$IIndexed$_nth$arity$2(null,i__11895);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11896 = seq__11892;
var G__11897 = chunk__11893;
var G__11898 = count__11894;
var G__11899 = (i__11895 + (1));
seq__11892 = G__11896;
chunk__11893 = G__11897;
count__11894 = G__11898;
i__11895 = G__11899;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11892);
if(temp__5457__auto__){
var seq__11892__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11892__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11892__$1);
var G__11900 = cljs.core.chunk_rest(seq__11892__$1);
var G__11901 = c__4351__auto__;
var G__11902 = cljs.core.count(c__4351__auto__);
var G__11903 = (0);
seq__11892 = G__11900;
chunk__11893 = G__11901;
count__11894 = G__11902;
i__11895 = G__11903;
continue;
} else {
var event = cljs.core.first(seq__11892__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11904 = cljs.core.next(seq__11892__$1);
var G__11905 = null;
var G__11906 = (0);
var G__11907 = (0);
seq__11892 = G__11904;
chunk__11893 = G__11905;
count__11894 = G__11906;
i__11895 = G__11907;
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
