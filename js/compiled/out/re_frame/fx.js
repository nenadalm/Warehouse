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
var _STAR_current_trace_STAR_11706 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11707 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11708 = null;
var count__11709 = (0);
var i__11710 = (0);
while(true){
if((i__11710 < count__11709)){
var vec__11711 = chunk__11708.cljs$core$IIndexed$_nth$arity$2(null,i__11710);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11711,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11711,(1),null);
var temp__5455__auto___11727 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11727)){
var effect_fn_11728 = temp__5455__auto___11727;
(effect_fn_11728.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11728.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11728.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11729 = seq__11707;
var G__11730 = chunk__11708;
var G__11731 = count__11709;
var G__11732 = (i__11710 + (1));
seq__11707 = G__11729;
chunk__11708 = G__11730;
count__11709 = G__11731;
i__11710 = G__11732;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11707);
if(temp__5457__auto__){
var seq__11707__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11707__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11707__$1);
var G__11733 = cljs.core.chunk_rest(seq__11707__$1);
var G__11734 = c__4351__auto__;
var G__11735 = cljs.core.count(c__4351__auto__);
var G__11736 = (0);
seq__11707 = G__11733;
chunk__11708 = G__11734;
count__11709 = G__11735;
i__11710 = G__11736;
continue;
} else {
var vec__11714 = cljs.core.first(seq__11707__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11714,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11714,(1),null);
var temp__5455__auto___11737 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11737)){
var effect_fn_11738 = temp__5455__auto___11737;
(effect_fn_11738.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11738.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11738.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11739 = cljs.core.next(seq__11707__$1);
var G__11740 = null;
var G__11741 = (0);
var G__11742 = (0);
seq__11707 = G__11739;
chunk__11708 = G__11740;
count__11709 = G__11741;
i__11710 = G__11742;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6492__auto___11743 = re_frame.interop.now();
var duration__6493__auto___11744 = (end__6492__auto___11743 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6493__auto___11744,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6492__auto___11743);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11706;
}} else {
var seq__11717 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11718 = null;
var count__11719 = (0);
var i__11720 = (0);
while(true){
if((i__11720 < count__11719)){
var vec__11721 = chunk__11718.cljs$core$IIndexed$_nth$arity$2(null,i__11720);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11721,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11721,(1),null);
var temp__5455__auto___11745 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11745)){
var effect_fn_11746 = temp__5455__auto___11745;
(effect_fn_11746.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11746.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11746.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11747 = seq__11717;
var G__11748 = chunk__11718;
var G__11749 = count__11719;
var G__11750 = (i__11720 + (1));
seq__11717 = G__11747;
chunk__11718 = G__11748;
count__11719 = G__11749;
i__11720 = G__11750;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11717);
if(temp__5457__auto__){
var seq__11717__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11717__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11717__$1);
var G__11751 = cljs.core.chunk_rest(seq__11717__$1);
var G__11752 = c__4351__auto__;
var G__11753 = cljs.core.count(c__4351__auto__);
var G__11754 = (0);
seq__11717 = G__11751;
chunk__11718 = G__11752;
count__11719 = G__11753;
i__11720 = G__11754;
continue;
} else {
var vec__11724 = cljs.core.first(seq__11717__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11724,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11724,(1),null);
var temp__5455__auto___11755 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11755)){
var effect_fn_11756 = temp__5455__auto___11755;
(effect_fn_11756.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11756.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11756.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11757 = cljs.core.next(seq__11717__$1);
var G__11758 = null;
var G__11759 = (0);
var G__11760 = (0);
seq__11717 = G__11757;
chunk__11718 = G__11758;
count__11719 = G__11759;
i__11720 = G__11760;
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
var seq__11761 = cljs.core.seq(value);
var chunk__11762 = null;
var count__11763 = (0);
var i__11764 = (0);
while(true){
if((i__11764 < count__11763)){
var map__11765 = chunk__11762.cljs$core$IIndexed$_nth$arity$2(null,i__11764);
var map__11765__$1 = ((((!((map__11765 == null)))?(((((map__11765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11765):map__11765);
var effect = map__11765__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11765__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11765__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11761,chunk__11762,count__11763,i__11764,map__11765,map__11765__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11761,chunk__11762,count__11763,i__11764,map__11765,map__11765__$1,effect,ms,dispatch))
,ms);
}


var G__11769 = seq__11761;
var G__11770 = chunk__11762;
var G__11771 = count__11763;
var G__11772 = (i__11764 + (1));
seq__11761 = G__11769;
chunk__11762 = G__11770;
count__11763 = G__11771;
i__11764 = G__11772;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11761);
if(temp__5457__auto__){
var seq__11761__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11761__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11761__$1);
var G__11773 = cljs.core.chunk_rest(seq__11761__$1);
var G__11774 = c__4351__auto__;
var G__11775 = cljs.core.count(c__4351__auto__);
var G__11776 = (0);
seq__11761 = G__11773;
chunk__11762 = G__11774;
count__11763 = G__11775;
i__11764 = G__11776;
continue;
} else {
var map__11767 = cljs.core.first(seq__11761__$1);
var map__11767__$1 = ((((!((map__11767 == null)))?(((((map__11767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11767):map__11767);
var effect = map__11767__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11767__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11767__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11761,chunk__11762,count__11763,i__11764,map__11767,map__11767__$1,effect,ms,dispatch,seq__11761__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11761,chunk__11762,count__11763,i__11764,map__11767,map__11767__$1,effect,ms,dispatch,seq__11761__$1,temp__5457__auto__))
,ms);
}


var G__11777 = cljs.core.next(seq__11761__$1);
var G__11778 = null;
var G__11779 = (0);
var G__11780 = (0);
seq__11761 = G__11777;
chunk__11762 = G__11778;
count__11763 = G__11779;
i__11764 = G__11780;
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
var seq__11781 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11782 = null;
var count__11783 = (0);
var i__11784 = (0);
while(true){
if((i__11784 < count__11783)){
var event = chunk__11782.cljs$core$IIndexed$_nth$arity$2(null,i__11784);
re_frame.router.dispatch(event);


var G__11785 = seq__11781;
var G__11786 = chunk__11782;
var G__11787 = count__11783;
var G__11788 = (i__11784 + (1));
seq__11781 = G__11785;
chunk__11782 = G__11786;
count__11783 = G__11787;
i__11784 = G__11788;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11781);
if(temp__5457__auto__){
var seq__11781__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11781__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11781__$1);
var G__11789 = cljs.core.chunk_rest(seq__11781__$1);
var G__11790 = c__4351__auto__;
var G__11791 = cljs.core.count(c__4351__auto__);
var G__11792 = (0);
seq__11781 = G__11789;
chunk__11782 = G__11790;
count__11783 = G__11791;
i__11784 = G__11792;
continue;
} else {
var event = cljs.core.first(seq__11781__$1);
re_frame.router.dispatch(event);


var G__11793 = cljs.core.next(seq__11781__$1);
var G__11794 = null;
var G__11795 = (0);
var G__11796 = (0);
seq__11781 = G__11793;
chunk__11782 = G__11794;
count__11783 = G__11795;
i__11784 = G__11796;
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
var seq__11797 = cljs.core.seq(value);
var chunk__11798 = null;
var count__11799 = (0);
var i__11800 = (0);
while(true){
if((i__11800 < count__11799)){
var event = chunk__11798.cljs$core$IIndexed$_nth$arity$2(null,i__11800);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11801 = seq__11797;
var G__11802 = chunk__11798;
var G__11803 = count__11799;
var G__11804 = (i__11800 + (1));
seq__11797 = G__11801;
chunk__11798 = G__11802;
count__11799 = G__11803;
i__11800 = G__11804;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11797);
if(temp__5457__auto__){
var seq__11797__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11797__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11797__$1);
var G__11805 = cljs.core.chunk_rest(seq__11797__$1);
var G__11806 = c__4351__auto__;
var G__11807 = cljs.core.count(c__4351__auto__);
var G__11808 = (0);
seq__11797 = G__11805;
chunk__11798 = G__11806;
count__11799 = G__11807;
i__11800 = G__11808;
continue;
} else {
var event = cljs.core.first(seq__11797__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11809 = cljs.core.next(seq__11797__$1);
var G__11810 = null;
var G__11811 = (0);
var G__11812 = (0);
seq__11797 = G__11809;
chunk__11798 = G__11810;
count__11799 = G__11811;
i__11800 = G__11812;
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
