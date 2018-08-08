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
var _STAR_current_trace_STAR_11817 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11818 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11819 = null;
var count__11820 = (0);
var i__11821 = (0);
while(true){
if((i__11821 < count__11820)){
var vec__11822 = chunk__11819.cljs$core$IIndexed$_nth$arity$2(null,i__11821);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11822,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11822,(1),null);
var temp__5455__auto___11838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11838)){
var effect_fn_11839 = temp__5455__auto___11838;
(effect_fn_11839.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11839.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11839.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11840 = seq__11818;
var G__11841 = chunk__11819;
var G__11842 = count__11820;
var G__11843 = (i__11821 + (1));
seq__11818 = G__11840;
chunk__11819 = G__11841;
count__11820 = G__11842;
i__11821 = G__11843;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11818);
if(temp__5457__auto__){
var seq__11818__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11818__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11818__$1);
var G__11844 = cljs.core.chunk_rest(seq__11818__$1);
var G__11845 = c__4351__auto__;
var G__11846 = cljs.core.count(c__4351__auto__);
var G__11847 = (0);
seq__11818 = G__11844;
chunk__11819 = G__11845;
count__11820 = G__11846;
i__11821 = G__11847;
continue;
} else {
var vec__11825 = cljs.core.first(seq__11818__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11825,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11825,(1),null);
var temp__5455__auto___11848 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11848)){
var effect_fn_11849 = temp__5455__auto___11848;
(effect_fn_11849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11849.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11850 = cljs.core.next(seq__11818__$1);
var G__11851 = null;
var G__11852 = (0);
var G__11853 = (0);
seq__11818 = G__11850;
chunk__11819 = G__11851;
count__11820 = G__11852;
i__11821 = G__11853;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6492__auto___11854 = re_frame.interop.now();
var duration__6493__auto___11855 = (end__6492__auto___11854 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6493__auto___11855,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6492__auto___11854);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11817;
}} else {
var seq__11828 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11829 = null;
var count__11830 = (0);
var i__11831 = (0);
while(true){
if((i__11831 < count__11830)){
var vec__11832 = chunk__11829.cljs$core$IIndexed$_nth$arity$2(null,i__11831);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,(1),null);
var temp__5455__auto___11856 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11856)){
var effect_fn_11857 = temp__5455__auto___11856;
(effect_fn_11857.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11857.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11857.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11858 = seq__11828;
var G__11859 = chunk__11829;
var G__11860 = count__11830;
var G__11861 = (i__11831 + (1));
seq__11828 = G__11858;
chunk__11829 = G__11859;
count__11830 = G__11860;
i__11831 = G__11861;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11828);
if(temp__5457__auto__){
var seq__11828__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11828__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11828__$1);
var G__11862 = cljs.core.chunk_rest(seq__11828__$1);
var G__11863 = c__4351__auto__;
var G__11864 = cljs.core.count(c__4351__auto__);
var G__11865 = (0);
seq__11828 = G__11862;
chunk__11829 = G__11863;
count__11830 = G__11864;
i__11831 = G__11865;
continue;
} else {
var vec__11835 = cljs.core.first(seq__11828__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11835,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11835,(1),null);
var temp__5455__auto___11866 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11866)){
var effect_fn_11867 = temp__5455__auto___11866;
(effect_fn_11867.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11867.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11867.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11868 = cljs.core.next(seq__11828__$1);
var G__11869 = null;
var G__11870 = (0);
var G__11871 = (0);
seq__11828 = G__11868;
chunk__11829 = G__11869;
count__11830 = G__11870;
i__11831 = G__11871;
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
var seq__11872 = cljs.core.seq(value);
var chunk__11873 = null;
var count__11874 = (0);
var i__11875 = (0);
while(true){
if((i__11875 < count__11874)){
var map__11876 = chunk__11873.cljs$core$IIndexed$_nth$arity$2(null,i__11875);
var map__11876__$1 = ((((!((map__11876 == null)))?(((((map__11876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11876):map__11876);
var effect = map__11876__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11876__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11876__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11872,chunk__11873,count__11874,i__11875,map__11876,map__11876__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11872,chunk__11873,count__11874,i__11875,map__11876,map__11876__$1,effect,ms,dispatch))
,ms);
}


var G__11880 = seq__11872;
var G__11881 = chunk__11873;
var G__11882 = count__11874;
var G__11883 = (i__11875 + (1));
seq__11872 = G__11880;
chunk__11873 = G__11881;
count__11874 = G__11882;
i__11875 = G__11883;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11872);
if(temp__5457__auto__){
var seq__11872__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11872__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11872__$1);
var G__11884 = cljs.core.chunk_rest(seq__11872__$1);
var G__11885 = c__4351__auto__;
var G__11886 = cljs.core.count(c__4351__auto__);
var G__11887 = (0);
seq__11872 = G__11884;
chunk__11873 = G__11885;
count__11874 = G__11886;
i__11875 = G__11887;
continue;
} else {
var map__11878 = cljs.core.first(seq__11872__$1);
var map__11878__$1 = ((((!((map__11878 == null)))?(((((map__11878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11878):map__11878);
var effect = map__11878__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11878__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11878__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11872,chunk__11873,count__11874,i__11875,map__11878,map__11878__$1,effect,ms,dispatch,seq__11872__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11872,chunk__11873,count__11874,i__11875,map__11878,map__11878__$1,effect,ms,dispatch,seq__11872__$1,temp__5457__auto__))
,ms);
}


var G__11888 = cljs.core.next(seq__11872__$1);
var G__11889 = null;
var G__11890 = (0);
var G__11891 = (0);
seq__11872 = G__11888;
chunk__11873 = G__11889;
count__11874 = G__11890;
i__11875 = G__11891;
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
var seq__11892 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11893 = null;
var count__11894 = (0);
var i__11895 = (0);
while(true){
if((i__11895 < count__11894)){
var event = chunk__11893.cljs$core$IIndexed$_nth$arity$2(null,i__11895);
re_frame.router.dispatch(event);


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
re_frame.router.dispatch(event);


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
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__11908 = cljs.core.seq(value);
var chunk__11909 = null;
var count__11910 = (0);
var i__11911 = (0);
while(true){
if((i__11911 < count__11910)){
var event = chunk__11909.cljs$core$IIndexed$_nth$arity$2(null,i__11911);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11912 = seq__11908;
var G__11913 = chunk__11909;
var G__11914 = count__11910;
var G__11915 = (i__11911 + (1));
seq__11908 = G__11912;
chunk__11909 = G__11913;
count__11910 = G__11914;
i__11911 = G__11915;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11908);
if(temp__5457__auto__){
var seq__11908__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11908__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11908__$1);
var G__11916 = cljs.core.chunk_rest(seq__11908__$1);
var G__11917 = c__4351__auto__;
var G__11918 = cljs.core.count(c__4351__auto__);
var G__11919 = (0);
seq__11908 = G__11916;
chunk__11909 = G__11917;
count__11910 = G__11918;
i__11911 = G__11919;
continue;
} else {
var event = cljs.core.first(seq__11908__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11920 = cljs.core.next(seq__11908__$1);
var G__11921 = null;
var G__11922 = (0);
var G__11923 = (0);
seq__11908 = G__11920;
chunk__11909 = G__11921;
count__11910 = G__11922;
i__11911 = G__11923;
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
