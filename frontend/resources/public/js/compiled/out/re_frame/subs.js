// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = cljs.core.cst$kw$sub;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind) : re_frame.registrar.kinds.call(null,re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = (function (){var G__14764 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14764) : cljs.core.atom.call(null,G__14764));
})();
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__14775_14785 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)));
var chunk__14776_14786 = null;
var count__14777_14787 = (0);
var i__14778_14788 = (0);
while(true){
if((i__14778_14788 < count__14777_14787)){
var vec__14779_14789 = chunk__14776_14786.cljs$core$IIndexed$_nth$arity$2(null,i__14778_14788);
var k_14790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14779_14789,(0),null);
var rxn_14791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14779_14789,(1),null);
re_frame.interop.dispose_BANG_(rxn_14791);

var G__14792 = seq__14775_14785;
var G__14793 = chunk__14776_14786;
var G__14794 = count__14777_14787;
var G__14795 = (i__14778_14788 + (1));
seq__14775_14785 = G__14792;
chunk__14776_14786 = G__14793;
count__14777_14787 = G__14794;
i__14778_14788 = G__14795;
continue;
} else {
var temp__4657__auto___14796 = cljs.core.seq(seq__14775_14785);
if(temp__4657__auto___14796){
var seq__14775_14797__$1 = temp__4657__auto___14796;
if(cljs.core.chunked_seq_QMARK_(seq__14775_14797__$1)){
var c__7845__auto___14798 = cljs.core.chunk_first(seq__14775_14797__$1);
var G__14799 = cljs.core.chunk_rest(seq__14775_14797__$1);
var G__14800 = c__7845__auto___14798;
var G__14801 = cljs.core.count(c__7845__auto___14798);
var G__14802 = (0);
seq__14775_14785 = G__14799;
chunk__14776_14786 = G__14800;
count__14777_14787 = G__14801;
i__14778_14788 = G__14802;
continue;
} else {
var vec__14782_14803 = cljs.core.first(seq__14775_14797__$1);
var k_14804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782_14803,(0),null);
var rxn_14805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782_14803,(1),null);
re_frame.interop.dispose_BANG_(rxn_14805);

var G__14806 = cljs.core.next(seq__14775_14797__$1);
var G__14807 = null;
var G__14808 = (0);
var G__14809 = (0);
seq__14775_14785 = G__14806;
chunk__14776_14786 = G__14807;
count__14777_14787 = G__14808;
i__14778_14788 = G__14809;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14825 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14401__auto___14840 = re_frame.interop.now();
var duration__14402__auto___14841 = (end__14401__auto___14840 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14826_14842 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14827_14843 = null;
var count__14828_14844 = (0);
var i__14829_14845 = (0);
while(true){
if((i__14829_14845 < count__14828_14844)){
var vec__14830_14846 = chunk__14827_14843.cljs$core$IIndexed$_nth$arity$2(null,i__14829_14845);
var k__14403__auto___14847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830_14846,(0),null);
var cb__14404__auto___14848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830_14846,(1),null);
try{var G__14834_14849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___14841,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___14848.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___14848.cljs$core$IFn$_invoke$arity$1(G__14834_14849) : cb__14404__auto___14848.call(null,G__14834_14849));
}catch (e14833){if((e14833 instanceof java.lang.Exception)){
var e__14405__auto___14850 = e14833;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___14847,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___14850], 0));
} else {
throw e14833;

}
}
var G__14851 = seq__14826_14842;
var G__14852 = chunk__14827_14843;
var G__14853 = count__14828_14844;
var G__14854 = (i__14829_14845 + (1));
seq__14826_14842 = G__14851;
chunk__14827_14843 = G__14852;
count__14828_14844 = G__14853;
i__14829_14845 = G__14854;
continue;
} else {
var temp__4657__auto___14855 = cljs.core.seq(seq__14826_14842);
if(temp__4657__auto___14855){
var seq__14826_14856__$1 = temp__4657__auto___14855;
if(cljs.core.chunked_seq_QMARK_(seq__14826_14856__$1)){
var c__7845__auto___14857 = cljs.core.chunk_first(seq__14826_14856__$1);
var G__14858 = cljs.core.chunk_rest(seq__14826_14856__$1);
var G__14859 = c__7845__auto___14857;
var G__14860 = cljs.core.count(c__7845__auto___14857);
var G__14861 = (0);
seq__14826_14842 = G__14858;
chunk__14827_14843 = G__14859;
count__14828_14844 = G__14860;
i__14829_14845 = G__14861;
continue;
} else {
var vec__14835_14862 = cljs.core.first(seq__14826_14856__$1);
var k__14403__auto___14863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14835_14862,(0),null);
var cb__14404__auto___14864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14835_14862,(1),null);
try{var G__14839_14865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___14841,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___14864.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___14864.cljs$core$IFn$_invoke$arity$1(G__14839_14865) : cb__14404__auto___14864.call(null,G__14839_14865));
}catch (e14838){if((e14838 instanceof java.lang.Exception)){
var e__14405__auto___14866 = e14838;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___14863,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___14866], 0));
} else {
throw e14838;

}
}
var G__14867 = cljs.core.next(seq__14826_14856__$1);
var G__14868 = null;
var G__14869 = (0);
var G__14870 = (0);
seq__14826_14842 = G__14867;
chunk__14827_14843 = G__14868;
count__14828_14844 = G__14869;
i__14829_14845 = G__14870;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14825;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14871 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14871;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args14872 = [];
var len__8139__auto___14875 = arguments.length;
var i__8140__auto___14876 = (0);
while(true){
if((i__8140__auto___14876 < len__8139__auto___14875)){
args14872.push((arguments[i__8140__auto___14876]));

var G__14877 = (i__8140__auto___14876 + (1));
i__8140__auto___14876 = G__14877;
continue;
} else {
}
break;
}

var G__14874 = args14872.length;
switch (G__14874) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14872.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args14879 = [];
var len__8139__auto___14920 = arguments.length;
var i__8140__auto___14921 = (0);
while(true){
if((i__8140__auto___14921 < len__8139__auto___14920)){
args14879.push((arguments[i__8140__auto___14921]));

var G__14922 = (i__8140__auto___14921 + (1));
i__8140__auto___14921 = G__14922;
continue;
} else {
}
break;
}

var G__14881 = args14879.length;
switch (G__14881) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14879.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14882 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14924 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14924;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14925 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14925;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14926 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14926;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query_v,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query_v) : handler_fn.call(null,re_frame.db.app_db,query_v)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14401__auto___14927 = re_frame.interop.now();
var duration__14402__auto___14928 = (end__14401__auto___14927 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14883_14929 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14884_14930 = null;
var count__14885_14931 = (0);
var i__14886_14932 = (0);
while(true){
if((i__14886_14932 < count__14885_14931)){
var vec__14887_14933 = chunk__14884_14930.cljs$core$IIndexed$_nth$arity$2(null,i__14886_14932);
var k__14403__auto___14934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14887_14933,(0),null);
var cb__14404__auto___14935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14887_14933,(1),null);
try{var G__14891_14936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___14928,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___14935.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___14935.cljs$core$IFn$_invoke$arity$1(G__14891_14936) : cb__14404__auto___14935.call(null,G__14891_14936));
}catch (e14890){if((e14890 instanceof java.lang.Exception)){
var e__14405__auto___14937 = e14890;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___14934,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___14937], 0));
} else {
throw e14890;

}
}
var G__14938 = seq__14883_14929;
var G__14939 = chunk__14884_14930;
var G__14940 = count__14885_14931;
var G__14941 = (i__14886_14932 + (1));
seq__14883_14929 = G__14938;
chunk__14884_14930 = G__14939;
count__14885_14931 = G__14940;
i__14886_14932 = G__14941;
continue;
} else {
var temp__4657__auto___14942 = cljs.core.seq(seq__14883_14929);
if(temp__4657__auto___14942){
var seq__14883_14943__$1 = temp__4657__auto___14942;
if(cljs.core.chunked_seq_QMARK_(seq__14883_14943__$1)){
var c__7845__auto___14944 = cljs.core.chunk_first(seq__14883_14943__$1);
var G__14945 = cljs.core.chunk_rest(seq__14883_14943__$1);
var G__14946 = c__7845__auto___14944;
var G__14947 = cljs.core.count(c__7845__auto___14944);
var G__14948 = (0);
seq__14883_14929 = G__14945;
chunk__14884_14930 = G__14946;
count__14885_14931 = G__14947;
i__14886_14932 = G__14948;
continue;
} else {
var vec__14892_14949 = cljs.core.first(seq__14883_14943__$1);
var k__14403__auto___14950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14892_14949,(0),null);
var cb__14404__auto___14951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14892_14949,(1),null);
try{var G__14896_14952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___14928,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___14951.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___14951.cljs$core$IFn$_invoke$arity$1(G__14896_14952) : cb__14404__auto___14951.call(null,G__14896_14952));
}catch (e14895){if((e14895 instanceof java.lang.Exception)){
var e__14405__auto___14953 = e14895;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___14950,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___14953], 0));
} else {
throw e14895;

}
}
var G__14954 = cljs.core.next(seq__14883_14943__$1);
var G__14955 = null;
var G__14956 = (0);
var G__14957 = (0);
seq__14883_14929 = G__14954;
chunk__14884_14930 = G__14955;
count__14885_14931 = G__14956;
i__14886_14932 = G__14957;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14882;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14958 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14958;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14959 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14959;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14960 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14960;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query_v,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query_v) : handler_fn.call(null,re_frame.db.app_db,query_v)));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14897 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,v,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14961 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14961;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14962 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14962;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___14963 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___14963)){
var not_reactive_14964 = temp__4657__auto___14963;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_14964], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14965 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14965;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14897){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14897))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14897){
return (function (){
var G__14912 = re_frame.db.app_db;
var G__14913 = v;
var G__14914 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__14912,G__14913,G__14914) : handler_fn.call(null,G__14912,G__14913,G__14914));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14897))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14897){
return (function (){
var G__14915 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14915) : cljs.core.deref.call(null,G__14915));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14897))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14401__auto___14966 = re_frame.interop.now();
var duration__14402__auto___14967 = (end__14401__auto___14966 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14898_14968 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14899_14969 = null;
var count__14900_14970 = (0);
var i__14901_14971 = (0);
while(true){
if((i__14901_14971 < count__14900_14970)){
var vec__14902_14972 = chunk__14899_14969.cljs$core$IIndexed$_nth$arity$2(null,i__14901_14971);
var k__14403__auto___14973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902_14972,(0),null);
var cb__14404__auto___14974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902_14972,(1),null);
try{var G__14906_14975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___14967,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___14974.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___14974.cljs$core$IFn$_invoke$arity$1(G__14906_14975) : cb__14404__auto___14974.call(null,G__14906_14975));
}catch (e14905){if((e14905 instanceof java.lang.Exception)){
var e__14405__auto___14976 = e14905;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___14973,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___14976], 0));
} else {
throw e14905;

}
}
var G__14977 = seq__14898_14968;
var G__14978 = chunk__14899_14969;
var G__14979 = count__14900_14970;
var G__14980 = (i__14901_14971 + (1));
seq__14898_14968 = G__14977;
chunk__14899_14969 = G__14978;
count__14900_14970 = G__14979;
i__14901_14971 = G__14980;
continue;
} else {
var temp__4657__auto___14981 = cljs.core.seq(seq__14898_14968);
if(temp__4657__auto___14981){
var seq__14898_14982__$1 = temp__4657__auto___14981;
if(cljs.core.chunked_seq_QMARK_(seq__14898_14982__$1)){
var c__7845__auto___14983 = cljs.core.chunk_first(seq__14898_14982__$1);
var G__14984 = cljs.core.chunk_rest(seq__14898_14982__$1);
var G__14985 = c__7845__auto___14983;
var G__14986 = cljs.core.count(c__7845__auto___14983);
var G__14987 = (0);
seq__14898_14968 = G__14984;
chunk__14899_14969 = G__14985;
count__14900_14970 = G__14986;
i__14901_14971 = G__14987;
continue;
} else {
var vec__14907_14988 = cljs.core.first(seq__14898_14982__$1);
var k__14403__auto___14989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907_14988,(0),null);
var cb__14404__auto___14990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907_14988,(1),null);
try{var G__14911_14991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___14967,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___14990.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___14990.cljs$core$IFn$_invoke$arity$1(G__14911_14991) : cb__14404__auto___14990.call(null,G__14911_14991));
}catch (e14910){if((e14910 instanceof java.lang.Exception)){
var e__14405__auto___14992 = e14910;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___14989,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___14992], 0));
} else {
throw e14910;

}
}
var G__14993 = cljs.core.next(seq__14898_14982__$1);
var G__14994 = null;
var G__14995 = (0);
var G__14996 = (0);
seq__14898_14968 = G__14993;
chunk__14899_14969 = G__14994;
count__14900_14970 = G__14995;
i__14901_14971 = G__14996;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14897;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14997 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14997;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___14998 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___14998;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___14999 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___14999)){
var not_reactive_15000 = temp__4657__auto___14999;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_15000], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___15001 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___15001;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__14916 = re_frame.db.app_db;
var G__14917 = v;
var G__14918 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__14916,G__14917,G__14918) : handler_fn.call(null,G__14916,G__14917,G__14918));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__14919 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14919) : cljs.core.deref.call(null,G__14919));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__15006){
var vec__15007 = p__15006;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15007,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(signals) : cljs.core.deref.call(null,signals)):re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14418__auto___15010 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14418__auto___15010;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__8146__auto__ = [];
var len__8139__auto___15102 = arguments.length;
var i__8140__auto___15103 = (0);
while(true){
if((i__8140__auto___15103 < len__8139__auto___15102)){
args__8146__auto__.push((arguments[i__8140__auto___15103]));

var G__15104 = (i__8140__auto___15103 + (1));
i__8140__auto___15103 = G__15104;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((1) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8147__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__15013 = cljs.core.count(input_args);
switch (G__15013) {
case (0):
return ((function (G__15013,computation_fn,input_args,err_header){
return (function() {
var G__15106 = null;
var G__15106__1 = (function (_){
return re_frame.db.app_db;
});
var G__15106__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__15106 = function(_,___$1){
switch(arguments.length){
case 1:
return G__15106__1.call(this,_);
case 2:
return G__15106__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15106.cljs$core$IFn$_invoke$arity$1 = G__15106__1;
G__15106.cljs$core$IFn$_invoke$arity$2 = G__15106__2;
return G__15106;
})()
;})(G__15013,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
return ((function (G__15013,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.second(input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.second(input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__15013,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,vecs,G__15013,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__15013,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_15058 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__15073 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15074 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__15073,G__15074) : computation_fn.call(null,G__15073,G__15074));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14401__auto___15107 = re_frame.interop.now();
var duration__14402__auto___15108 = (end__14401__auto___15107 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15059_15109 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15060_15110 = null;
var count__15061_15111 = (0);
var i__15062_15112 = (0);
while(true){
if((i__15062_15112 < count__15061_15111)){
var vec__15063_15113 = chunk__15060_15110.cljs$core$IIndexed$_nth$arity$2(null,i__15062_15112);
var k__14403__auto___15114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15063_15113,(0),null);
var cb__14404__auto___15115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15063_15113,(1),null);
try{var G__15067_15116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___15108,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___15115.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___15115.cljs$core$IFn$_invoke$arity$1(G__15067_15116) : cb__14404__auto___15115.call(null,G__15067_15116));
}catch (e15066){if((e15066 instanceof java.lang.Exception)){
var e__14405__auto___15117 = e15066;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___15114,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___15117], 0));
} else {
throw e15066;

}
}
var G__15118 = seq__15059_15109;
var G__15119 = chunk__15060_15110;
var G__15120 = count__15061_15111;
var G__15121 = (i__15062_15112 + (1));
seq__15059_15109 = G__15118;
chunk__15060_15110 = G__15119;
count__15061_15111 = G__15120;
i__15062_15112 = G__15121;
continue;
} else {
var temp__4657__auto___15122 = cljs.core.seq(seq__15059_15109);
if(temp__4657__auto___15122){
var seq__15059_15123__$1 = temp__4657__auto___15122;
if(cljs.core.chunked_seq_QMARK_(seq__15059_15123__$1)){
var c__7845__auto___15124 = cljs.core.chunk_first(seq__15059_15123__$1);
var G__15125 = cljs.core.chunk_rest(seq__15059_15123__$1);
var G__15126 = c__7845__auto___15124;
var G__15127 = cljs.core.count(c__7845__auto___15124);
var G__15128 = (0);
seq__15059_15109 = G__15125;
chunk__15060_15110 = G__15126;
count__15061_15111 = G__15127;
i__15062_15112 = G__15128;
continue;
} else {
var vec__15068_15129 = cljs.core.first(seq__15059_15123__$1);
var k__14403__auto___15130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15068_15129,(0),null);
var cb__14404__auto___15131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15068_15129,(1),null);
try{var G__15072_15132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___15108,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___15131.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___15131.cljs$core$IFn$_invoke$arity$1(G__15072_15132) : cb__14404__auto___15131.call(null,G__15072_15132));
}catch (e15071){if((e15071 instanceof java.lang.Exception)){
var e__14405__auto___15133 = e15071;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___15130,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___15133], 0));
} else {
throw e15071;

}
}
var G__15134 = cljs.core.next(seq__15059_15123__$1);
var G__15135 = null;
var G__15136 = (0);
var G__15137 = (0);
seq__15059_15109 = G__15134;
chunk__15060_15110 = G__15135;
count__15061_15111 = G__15136;
i__15062_15112 = G__15137;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15058;
}} else {
var G__15075 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15076 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__15075,G__15076) : computation_fn.call(null,G__15075,G__15076));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__15077_15138 = reaction_id;
var G__15078_15139 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15077_15138,G__15078_15139) : cljs.core.reset_BANG_.call(null,G__15077_15138,G__15078_15139));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_15079 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__15094 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15095 = query_vec;
var G__15096 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__15094,G__15095,G__15096) : computation_fn.call(null,G__15094,G__15095,G__15096));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14401__auto___15140 = re_frame.interop.now();
var duration__14402__auto___15141 = (end__14401__auto___15140 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15080_15142 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15081_15143 = null;
var count__15082_15144 = (0);
var i__15083_15145 = (0);
while(true){
if((i__15083_15145 < count__15082_15144)){
var vec__15084_15146 = chunk__15081_15143.cljs$core$IIndexed$_nth$arity$2(null,i__15083_15145);
var k__14403__auto___15147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15084_15146,(0),null);
var cb__14404__auto___15148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15084_15146,(1),null);
try{var G__15088_15149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___15141,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___15148.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___15148.cljs$core$IFn$_invoke$arity$1(G__15088_15149) : cb__14404__auto___15148.call(null,G__15088_15149));
}catch (e15087){if((e15087 instanceof java.lang.Exception)){
var e__14405__auto___15150 = e15087;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___15147,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___15150], 0));
} else {
throw e15087;

}
}
var G__15151 = seq__15080_15142;
var G__15152 = chunk__15081_15143;
var G__15153 = count__15082_15144;
var G__15154 = (i__15083_15145 + (1));
seq__15080_15142 = G__15151;
chunk__15081_15143 = G__15152;
count__15082_15144 = G__15153;
i__15083_15145 = G__15154;
continue;
} else {
var temp__4657__auto___15155 = cljs.core.seq(seq__15080_15142);
if(temp__4657__auto___15155){
var seq__15080_15156__$1 = temp__4657__auto___15155;
if(cljs.core.chunked_seq_QMARK_(seq__15080_15156__$1)){
var c__7845__auto___15157 = cljs.core.chunk_first(seq__15080_15156__$1);
var G__15158 = cljs.core.chunk_rest(seq__15080_15156__$1);
var G__15159 = c__7845__auto___15157;
var G__15160 = cljs.core.count(c__7845__auto___15157);
var G__15161 = (0);
seq__15080_15142 = G__15158;
chunk__15081_15143 = G__15159;
count__15082_15144 = G__15160;
i__15083_15145 = G__15161;
continue;
} else {
var vec__15089_15162 = cljs.core.first(seq__15080_15156__$1);
var k__14403__auto___15163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15089_15162,(0),null);
var cb__14404__auto___15164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15089_15162,(1),null);
try{var G__15093_15165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14402__auto___15141,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14404__auto___15164.cljs$core$IFn$_invoke$arity$1 ? cb__14404__auto___15164.cljs$core$IFn$_invoke$arity$1(G__15093_15165) : cb__14404__auto___15164.call(null,G__15093_15165));
}catch (e15092){if((e15092 instanceof java.lang.Exception)){
var e__14405__auto___15166 = e15092;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14403__auto___15163,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14405__auto___15166], 0));
} else {
throw e15092;

}
}
var G__15167 = cljs.core.next(seq__15080_15156__$1);
var G__15168 = null;
var G__15169 = (0);
var G__15170 = (0);
seq__15080_15142 = G__15167;
chunk__15081_15143 = G__15168;
count__15082_15144 = G__15169;
i__15083_15145 = G__15170;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15079;
}} else {
var G__15097 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15098 = query_vec;
var G__15099 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__15097,G__15098,G__15099) : computation_fn.call(null,G__15097,G__15098,G__15099));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__15100_15171 = reaction_id;
var G__15101_15172 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15100_15171,G__15101_15172) : cljs.core.reset_BANG_.call(null,G__15100_15171,G__15101_15172));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq15011){
var G__15012 = cljs.core.first(seq15011);
var seq15011__$1 = cljs.core.next(seq15011);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__15012,seq15011__$1);
});

