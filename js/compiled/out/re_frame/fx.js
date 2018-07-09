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
var _STAR_current_trace_STAR_11684 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11685 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11686 = null;
var count__11687 = (0);
var i__11688 = (0);
while(true){
if((i__11688 < count__11687)){
var vec__11689 = chunk__11686.cljs$core$IIndexed$_nth$arity$2(null,i__11688);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11689,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11689,(1),null);
var temp__5455__auto___11705 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11705)){
var effect_fn_11706 = temp__5455__auto___11705;
(effect_fn_11706.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11706.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11706.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11707 = seq__11685;
var G__11708 = chunk__11686;
var G__11709 = count__11687;
var G__11710 = (i__11688 + (1));
seq__11685 = G__11707;
chunk__11686 = G__11708;
count__11687 = G__11709;
i__11688 = G__11710;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11685);
if(temp__5457__auto__){
var seq__11685__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11685__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11685__$1);
var G__11711 = cljs.core.chunk_rest(seq__11685__$1);
var G__11712 = c__4351__auto__;
var G__11713 = cljs.core.count(c__4351__auto__);
var G__11714 = (0);
seq__11685 = G__11711;
chunk__11686 = G__11712;
count__11687 = G__11713;
i__11688 = G__11714;
continue;
} else {
var vec__11692 = cljs.core.first(seq__11685__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11692,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11692,(1),null);
var temp__5455__auto___11715 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11715)){
var effect_fn_11716 = temp__5455__auto___11715;
(effect_fn_11716.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11716.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11716.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11717 = cljs.core.next(seq__11685__$1);
var G__11718 = null;
var G__11719 = (0);
var G__11720 = (0);
seq__11685 = G__11717;
chunk__11686 = G__11718;
count__11687 = G__11719;
i__11688 = G__11720;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6492__auto___11721 = re_frame.interop.now();
var duration__6493__auto___11722 = (end__6492__auto___11721 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6493__auto___11722,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6492__auto___11721);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11684;
}} else {
var seq__11695 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11696 = null;
var count__11697 = (0);
var i__11698 = (0);
while(true){
if((i__11698 < count__11697)){
var vec__11699 = chunk__11696.cljs$core$IIndexed$_nth$arity$2(null,i__11698);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11699,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11699,(1),null);
var temp__5455__auto___11723 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11723)){
var effect_fn_11724 = temp__5455__auto___11723;
(effect_fn_11724.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11724.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11724.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11725 = seq__11695;
var G__11726 = chunk__11696;
var G__11727 = count__11697;
var G__11728 = (i__11698 + (1));
seq__11695 = G__11725;
chunk__11696 = G__11726;
count__11697 = G__11727;
i__11698 = G__11728;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11695);
if(temp__5457__auto__){
var seq__11695__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11695__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11695__$1);
var G__11729 = cljs.core.chunk_rest(seq__11695__$1);
var G__11730 = c__4351__auto__;
var G__11731 = cljs.core.count(c__4351__auto__);
var G__11732 = (0);
seq__11695 = G__11729;
chunk__11696 = G__11730;
count__11697 = G__11731;
i__11698 = G__11732;
continue;
} else {
var vec__11702 = cljs.core.first(seq__11695__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11702,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11702,(1),null);
var temp__5455__auto___11733 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11733)){
var effect_fn_11734 = temp__5455__auto___11733;
(effect_fn_11734.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11734.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11734.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11735 = cljs.core.next(seq__11695__$1);
var G__11736 = null;
var G__11737 = (0);
var G__11738 = (0);
seq__11695 = G__11735;
chunk__11696 = G__11736;
count__11697 = G__11737;
i__11698 = G__11738;
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
var seq__11739 = cljs.core.seq(value);
var chunk__11740 = null;
var count__11741 = (0);
var i__11742 = (0);
while(true){
if((i__11742 < count__11741)){
var map__11743 = chunk__11740.cljs$core$IIndexed$_nth$arity$2(null,i__11742);
var map__11743__$1 = ((((!((map__11743 == null)))?(((((map__11743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11743):map__11743);
var effect = map__11743__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11743__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11743__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11739,chunk__11740,count__11741,i__11742,map__11743,map__11743__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11739,chunk__11740,count__11741,i__11742,map__11743,map__11743__$1,effect,ms,dispatch))
,ms);
}


var G__11747 = seq__11739;
var G__11748 = chunk__11740;
var G__11749 = count__11741;
var G__11750 = (i__11742 + (1));
seq__11739 = G__11747;
chunk__11740 = G__11748;
count__11741 = G__11749;
i__11742 = G__11750;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11739);
if(temp__5457__auto__){
var seq__11739__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11739__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11739__$1);
var G__11751 = cljs.core.chunk_rest(seq__11739__$1);
var G__11752 = c__4351__auto__;
var G__11753 = cljs.core.count(c__4351__auto__);
var G__11754 = (0);
seq__11739 = G__11751;
chunk__11740 = G__11752;
count__11741 = G__11753;
i__11742 = G__11754;
continue;
} else {
var map__11745 = cljs.core.first(seq__11739__$1);
var map__11745__$1 = ((((!((map__11745 == null)))?(((((map__11745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11745):map__11745);
var effect = map__11745__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11745__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11745__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11739,chunk__11740,count__11741,i__11742,map__11745,map__11745__$1,effect,ms,dispatch,seq__11739__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11739,chunk__11740,count__11741,i__11742,map__11745,map__11745__$1,effect,ms,dispatch,seq__11739__$1,temp__5457__auto__))
,ms);
}


var G__11755 = cljs.core.next(seq__11739__$1);
var G__11756 = null;
var G__11757 = (0);
var G__11758 = (0);
seq__11739 = G__11755;
chunk__11740 = G__11756;
count__11741 = G__11757;
i__11742 = G__11758;
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
var seq__11759 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11760 = null;
var count__11761 = (0);
var i__11762 = (0);
while(true){
if((i__11762 < count__11761)){
var event = chunk__11760.cljs$core$IIndexed$_nth$arity$2(null,i__11762);
re_frame.router.dispatch(event);


var G__11763 = seq__11759;
var G__11764 = chunk__11760;
var G__11765 = count__11761;
var G__11766 = (i__11762 + (1));
seq__11759 = G__11763;
chunk__11760 = G__11764;
count__11761 = G__11765;
i__11762 = G__11766;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11759);
if(temp__5457__auto__){
var seq__11759__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11759__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11759__$1);
var G__11767 = cljs.core.chunk_rest(seq__11759__$1);
var G__11768 = c__4351__auto__;
var G__11769 = cljs.core.count(c__4351__auto__);
var G__11770 = (0);
seq__11759 = G__11767;
chunk__11760 = G__11768;
count__11761 = G__11769;
i__11762 = G__11770;
continue;
} else {
var event = cljs.core.first(seq__11759__$1);
re_frame.router.dispatch(event);


var G__11771 = cljs.core.next(seq__11759__$1);
var G__11772 = null;
var G__11773 = (0);
var G__11774 = (0);
seq__11759 = G__11771;
chunk__11760 = G__11772;
count__11761 = G__11773;
i__11762 = G__11774;
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
var seq__11775 = cljs.core.seq(value);
var chunk__11776 = null;
var count__11777 = (0);
var i__11778 = (0);
while(true){
if((i__11778 < count__11777)){
var event = chunk__11776.cljs$core$IIndexed$_nth$arity$2(null,i__11778);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11779 = seq__11775;
var G__11780 = chunk__11776;
var G__11781 = count__11777;
var G__11782 = (i__11778 + (1));
seq__11775 = G__11779;
chunk__11776 = G__11780;
count__11777 = G__11781;
i__11778 = G__11782;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11775);
if(temp__5457__auto__){
var seq__11775__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11775__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11775__$1);
var G__11783 = cljs.core.chunk_rest(seq__11775__$1);
var G__11784 = c__4351__auto__;
var G__11785 = cljs.core.count(c__4351__auto__);
var G__11786 = (0);
seq__11775 = G__11783;
chunk__11776 = G__11784;
count__11777 = G__11785;
i__11778 = G__11786;
continue;
} else {
var event = cljs.core.first(seq__11775__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11787 = cljs.core.next(seq__11775__$1);
var G__11788 = null;
var G__11789 = (0);
var G__11790 = (0);
seq__11775 = G__11787;
chunk__11776 = G__11788;
count__11777 = G__11789;
i__11778 = G__11790;
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
