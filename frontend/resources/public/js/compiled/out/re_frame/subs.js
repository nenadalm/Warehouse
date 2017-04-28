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
re_frame.subs.query__GT_reaction = (function (){var G__14772 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14772) : cljs.core.atom.call(null,G__14772));
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
var seq__14783_14793 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)));
var chunk__14784_14794 = null;
var count__14785_14795 = (0);
var i__14786_14796 = (0);
while(true){
if((i__14786_14796 < count__14785_14795)){
var vec__14787_14797 = chunk__14784_14794.cljs$core$IIndexed$_nth$arity$2(null,i__14786_14796);
var k_14798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14787_14797,(0),null);
var rxn_14799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14787_14797,(1),null);
re_frame.interop.dispose_BANG_(rxn_14799);

var G__14800 = seq__14783_14793;
var G__14801 = chunk__14784_14794;
var G__14802 = count__14785_14795;
var G__14803 = (i__14786_14796 + (1));
seq__14783_14793 = G__14800;
chunk__14784_14794 = G__14801;
count__14785_14795 = G__14802;
i__14786_14796 = G__14803;
continue;
} else {
var temp__4657__auto___14804 = cljs.core.seq(seq__14783_14793);
if(temp__4657__auto___14804){
var seq__14783_14805__$1 = temp__4657__auto___14804;
if(cljs.core.chunked_seq_QMARK_(seq__14783_14805__$1)){
var c__7845__auto___14806 = cljs.core.chunk_first(seq__14783_14805__$1);
var G__14807 = cljs.core.chunk_rest(seq__14783_14805__$1);
var G__14808 = c__7845__auto___14806;
var G__14809 = cljs.core.count(c__7845__auto___14806);
var G__14810 = (0);
seq__14783_14793 = G__14807;
chunk__14784_14794 = G__14808;
count__14785_14795 = G__14809;
i__14786_14796 = G__14810;
continue;
} else {
var vec__14790_14811 = cljs.core.first(seq__14783_14805__$1);
var k_14812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790_14811,(0),null);
var rxn_14813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790_14811,(1),null);
re_frame.interop.dispose_BANG_(rxn_14813);

var G__14814 = cljs.core.next(seq__14783_14805__$1);
var G__14815 = null;
var G__14816 = (0);
var G__14817 = (0);
seq__14783_14793 = G__14814;
chunk__14784_14794 = G__14815;
count__14785_14795 = G__14816;
i__14786_14796 = G__14817;
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
var _STAR_current_trace_STAR_14833 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14409__auto___14848 = re_frame.interop.now();
var duration__14410__auto___14849 = (end__14409__auto___14848 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14834_14850 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14835_14851 = null;
var count__14836_14852 = (0);
var i__14837_14853 = (0);
while(true){
if((i__14837_14853 < count__14836_14852)){
var vec__14838_14854 = chunk__14835_14851.cljs$core$IIndexed$_nth$arity$2(null,i__14837_14853);
var k__14411__auto___14855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838_14854,(0),null);
var cb__14412__auto___14856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838_14854,(1),null);
try{var G__14842_14857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___14849,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___14856.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___14856.cljs$core$IFn$_invoke$arity$1(G__14842_14857) : cb__14412__auto___14856.call(null,G__14842_14857));
}catch (e14841){if((e14841 instanceof java.lang.Exception)){
var e__14413__auto___14858 = e14841;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___14855,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___14858], 0));
} else {
throw e14841;

}
}
var G__14859 = seq__14834_14850;
var G__14860 = chunk__14835_14851;
var G__14861 = count__14836_14852;
var G__14862 = (i__14837_14853 + (1));
seq__14834_14850 = G__14859;
chunk__14835_14851 = G__14860;
count__14836_14852 = G__14861;
i__14837_14853 = G__14862;
continue;
} else {
var temp__4657__auto___14863 = cljs.core.seq(seq__14834_14850);
if(temp__4657__auto___14863){
var seq__14834_14864__$1 = temp__4657__auto___14863;
if(cljs.core.chunked_seq_QMARK_(seq__14834_14864__$1)){
var c__7845__auto___14865 = cljs.core.chunk_first(seq__14834_14864__$1);
var G__14866 = cljs.core.chunk_rest(seq__14834_14864__$1);
var G__14867 = c__7845__auto___14865;
var G__14868 = cljs.core.count(c__7845__auto___14865);
var G__14869 = (0);
seq__14834_14850 = G__14866;
chunk__14835_14851 = G__14867;
count__14836_14852 = G__14868;
i__14837_14853 = G__14869;
continue;
} else {
var vec__14843_14870 = cljs.core.first(seq__14834_14864__$1);
var k__14411__auto___14871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14843_14870,(0),null);
var cb__14412__auto___14872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14843_14870,(1),null);
try{var G__14847_14873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___14849,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___14872.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___14872.cljs$core$IFn$_invoke$arity$1(G__14847_14873) : cb__14412__auto___14872.call(null,G__14847_14873));
}catch (e14846){if((e14846 instanceof java.lang.Exception)){
var e__14413__auto___14874 = e14846;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___14871,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___14874], 0));
} else {
throw e14846;

}
}
var G__14875 = cljs.core.next(seq__14834_14864__$1);
var G__14876 = null;
var G__14877 = (0);
var G__14878 = (0);
seq__14834_14850 = G__14875;
chunk__14835_14851 = G__14876;
count__14836_14852 = G__14877;
i__14837_14853 = G__14878;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14833;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14879 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14879;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args14880 = [];
var len__8139__auto___14883 = arguments.length;
var i__8140__auto___14884 = (0);
while(true){
if((i__8140__auto___14884 < len__8139__auto___14883)){
args14880.push((arguments[i__8140__auto___14884]));

var G__14885 = (i__8140__auto___14884 + (1));
i__8140__auto___14884 = G__14885;
continue;
} else {
}
break;
}

var G__14882 = args14880.length;
switch (G__14882) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14880.length)].join('')));

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
var args14887 = [];
var len__8139__auto___14928 = arguments.length;
var i__8140__auto___14929 = (0);
while(true){
if((i__8140__auto___14929 < len__8139__auto___14928)){
args14887.push((arguments[i__8140__auto___14929]));

var G__14930 = (i__8140__auto___14929 + (1));
i__8140__auto___14929 = G__14930;
continue;
} else {
}
break;
}

var G__14889 = args14887.length;
switch (G__14889) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14887.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14890 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14932 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14932;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14933 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14933;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14934 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14934;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query_v,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query_v) : handler_fn.call(null,re_frame.db.app_db,query_v)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14409__auto___14935 = re_frame.interop.now();
var duration__14410__auto___14936 = (end__14409__auto___14935 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14891_14937 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14892_14938 = null;
var count__14893_14939 = (0);
var i__14894_14940 = (0);
while(true){
if((i__14894_14940 < count__14893_14939)){
var vec__14895_14941 = chunk__14892_14938.cljs$core$IIndexed$_nth$arity$2(null,i__14894_14940);
var k__14411__auto___14942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14895_14941,(0),null);
var cb__14412__auto___14943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14895_14941,(1),null);
try{var G__14899_14944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___14936,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___14943.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___14943.cljs$core$IFn$_invoke$arity$1(G__14899_14944) : cb__14412__auto___14943.call(null,G__14899_14944));
}catch (e14898){if((e14898 instanceof java.lang.Exception)){
var e__14413__auto___14945 = e14898;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___14942,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___14945], 0));
} else {
throw e14898;

}
}
var G__14946 = seq__14891_14937;
var G__14947 = chunk__14892_14938;
var G__14948 = count__14893_14939;
var G__14949 = (i__14894_14940 + (1));
seq__14891_14937 = G__14946;
chunk__14892_14938 = G__14947;
count__14893_14939 = G__14948;
i__14894_14940 = G__14949;
continue;
} else {
var temp__4657__auto___14950 = cljs.core.seq(seq__14891_14937);
if(temp__4657__auto___14950){
var seq__14891_14951__$1 = temp__4657__auto___14950;
if(cljs.core.chunked_seq_QMARK_(seq__14891_14951__$1)){
var c__7845__auto___14952 = cljs.core.chunk_first(seq__14891_14951__$1);
var G__14953 = cljs.core.chunk_rest(seq__14891_14951__$1);
var G__14954 = c__7845__auto___14952;
var G__14955 = cljs.core.count(c__7845__auto___14952);
var G__14956 = (0);
seq__14891_14937 = G__14953;
chunk__14892_14938 = G__14954;
count__14893_14939 = G__14955;
i__14894_14940 = G__14956;
continue;
} else {
var vec__14900_14957 = cljs.core.first(seq__14891_14951__$1);
var k__14411__auto___14958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900_14957,(0),null);
var cb__14412__auto___14959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900_14957,(1),null);
try{var G__14904_14960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___14936,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___14959.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___14959.cljs$core$IFn$_invoke$arity$1(G__14904_14960) : cb__14412__auto___14959.call(null,G__14904_14960));
}catch (e14903){if((e14903 instanceof java.lang.Exception)){
var e__14413__auto___14961 = e14903;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___14958,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___14961], 0));
} else {
throw e14903;

}
}
var G__14962 = cljs.core.next(seq__14891_14951__$1);
var G__14963 = null;
var G__14964 = (0);
var G__14965 = (0);
seq__14891_14937 = G__14962;
chunk__14892_14938 = G__14963;
count__14893_14939 = G__14964;
i__14894_14940 = G__14965;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14890;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14966 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14966;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14967 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14967;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14968 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14968;

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
var _STAR_current_trace_STAR_14905 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,v,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14969 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14969;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14970 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14970;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___14971 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___14971)){
var not_reactive_14972 = temp__4657__auto___14971;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_14972], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___14973 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___14973;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14905){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14905))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14905){
return (function (){
var G__14920 = re_frame.db.app_db;
var G__14921 = v;
var G__14922 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__14920,G__14921,G__14922) : handler_fn.call(null,G__14920,G__14921,G__14922));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14905))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14905){
return (function (){
var G__14923 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14923) : cljs.core.deref.call(null,G__14923));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14905))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14409__auto___14974 = re_frame.interop.now();
var duration__14410__auto___14975 = (end__14409__auto___14974 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14906_14976 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14907_14977 = null;
var count__14908_14978 = (0);
var i__14909_14979 = (0);
while(true){
if((i__14909_14979 < count__14908_14978)){
var vec__14910_14980 = chunk__14907_14977.cljs$core$IIndexed$_nth$arity$2(null,i__14909_14979);
var k__14411__auto___14981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910_14980,(0),null);
var cb__14412__auto___14982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910_14980,(1),null);
try{var G__14914_14983 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___14975,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___14982.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___14982.cljs$core$IFn$_invoke$arity$1(G__14914_14983) : cb__14412__auto___14982.call(null,G__14914_14983));
}catch (e14913){if((e14913 instanceof java.lang.Exception)){
var e__14413__auto___14984 = e14913;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___14981,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___14984], 0));
} else {
throw e14913;

}
}
var G__14985 = seq__14906_14976;
var G__14986 = chunk__14907_14977;
var G__14987 = count__14908_14978;
var G__14988 = (i__14909_14979 + (1));
seq__14906_14976 = G__14985;
chunk__14907_14977 = G__14986;
count__14908_14978 = G__14987;
i__14909_14979 = G__14988;
continue;
} else {
var temp__4657__auto___14989 = cljs.core.seq(seq__14906_14976);
if(temp__4657__auto___14989){
var seq__14906_14990__$1 = temp__4657__auto___14989;
if(cljs.core.chunked_seq_QMARK_(seq__14906_14990__$1)){
var c__7845__auto___14991 = cljs.core.chunk_first(seq__14906_14990__$1);
var G__14992 = cljs.core.chunk_rest(seq__14906_14990__$1);
var G__14993 = c__7845__auto___14991;
var G__14994 = cljs.core.count(c__7845__auto___14991);
var G__14995 = (0);
seq__14906_14976 = G__14992;
chunk__14907_14977 = G__14993;
count__14908_14978 = G__14994;
i__14909_14979 = G__14995;
continue;
} else {
var vec__14915_14996 = cljs.core.first(seq__14906_14990__$1);
var k__14411__auto___14997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14915_14996,(0),null);
var cb__14412__auto___14998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14915_14996,(1),null);
try{var G__14919_14999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___14975,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___14998.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___14998.cljs$core$IFn$_invoke$arity$1(G__14919_14999) : cb__14412__auto___14998.call(null,G__14919_14999));
}catch (e14918){if((e14918 instanceof java.lang.Exception)){
var e__14413__auto___15000 = e14918;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___14997,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___15000], 0));
} else {
throw e14918;

}
}
var G__15001 = cljs.core.next(seq__14906_14990__$1);
var G__15002 = null;
var G__15003 = (0);
var G__15004 = (0);
seq__14906_14976 = G__15001;
chunk__14907_14977 = G__15002;
count__14908_14978 = G__15003;
i__14909_14979 = G__15004;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14905;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___15005 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___15005;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___15006 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___15006;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___15007 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___15007)){
var not_reactive_15008 = temp__4657__auto___15007;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_15008], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___15009 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___15009;

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
var G__14924 = re_frame.db.app_db;
var G__14925 = v;
var G__14926 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__14924,G__14925,G__14926) : handler_fn.call(null,G__14924,G__14925,G__14926));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__14927 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14927) : cljs.core.deref.call(null,G__14927));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__15014){
var vec__15015 = p__15014;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15015,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(signals) : cljs.core.deref.call(null,signals)):re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14426__auto___15018 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14426__auto___15018;

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
var len__8139__auto___15110 = arguments.length;
var i__8140__auto___15111 = (0);
while(true){
if((i__8140__auto___15111 < len__8139__auto___15110)){
args__8146__auto__.push((arguments[i__8140__auto___15111]));

var G__15112 = (i__8140__auto___15111 + (1));
i__8140__auto___15111 = G__15112;
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
var inputs_fn = (function (){var G__15021 = cljs.core.count(input_args);
switch (G__15021) {
case (0):
return ((function (G__15021,computation_fn,input_args,err_header){
return (function() {
var G__15114 = null;
var G__15114__1 = (function (_){
return re_frame.db.app_db;
});
var G__15114__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__15114 = function(_,___$1){
switch(arguments.length){
case 1:
return G__15114__1.call(this,_);
case 2:
return G__15114__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15114.cljs$core$IFn$_invoke$arity$1 = G__15114__1;
G__15114.cljs$core$IFn$_invoke$arity$2 = G__15114__2;
return G__15114;
})()
;})(G__15021,computation_fn,input_args,err_header))

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
return ((function (G__15021,computation_fn,input_args,err_header){
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
;})(G__15021,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,vecs,G__15021,computation_fn,input_args,err_header){
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
;})(pairs,vecs,G__15021,computation_fn,input_args,err_header))

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
var _STAR_current_trace_STAR_15066 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__15081 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15082 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__15081,G__15082) : computation_fn.call(null,G__15081,G__15082));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14409__auto___15115 = re_frame.interop.now();
var duration__14410__auto___15116 = (end__14409__auto___15115 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15067_15117 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15068_15118 = null;
var count__15069_15119 = (0);
var i__15070_15120 = (0);
while(true){
if((i__15070_15120 < count__15069_15119)){
var vec__15071_15121 = chunk__15068_15118.cljs$core$IIndexed$_nth$arity$2(null,i__15070_15120);
var k__14411__auto___15122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15071_15121,(0),null);
var cb__14412__auto___15123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15071_15121,(1),null);
try{var G__15075_15124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___15116,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___15123.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___15123.cljs$core$IFn$_invoke$arity$1(G__15075_15124) : cb__14412__auto___15123.call(null,G__15075_15124));
}catch (e15074){if((e15074 instanceof java.lang.Exception)){
var e__14413__auto___15125 = e15074;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___15122,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___15125], 0));
} else {
throw e15074;

}
}
var G__15126 = seq__15067_15117;
var G__15127 = chunk__15068_15118;
var G__15128 = count__15069_15119;
var G__15129 = (i__15070_15120 + (1));
seq__15067_15117 = G__15126;
chunk__15068_15118 = G__15127;
count__15069_15119 = G__15128;
i__15070_15120 = G__15129;
continue;
} else {
var temp__4657__auto___15130 = cljs.core.seq(seq__15067_15117);
if(temp__4657__auto___15130){
var seq__15067_15131__$1 = temp__4657__auto___15130;
if(cljs.core.chunked_seq_QMARK_(seq__15067_15131__$1)){
var c__7845__auto___15132 = cljs.core.chunk_first(seq__15067_15131__$1);
var G__15133 = cljs.core.chunk_rest(seq__15067_15131__$1);
var G__15134 = c__7845__auto___15132;
var G__15135 = cljs.core.count(c__7845__auto___15132);
var G__15136 = (0);
seq__15067_15117 = G__15133;
chunk__15068_15118 = G__15134;
count__15069_15119 = G__15135;
i__15070_15120 = G__15136;
continue;
} else {
var vec__15076_15137 = cljs.core.first(seq__15067_15131__$1);
var k__14411__auto___15138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15076_15137,(0),null);
var cb__14412__auto___15139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15076_15137,(1),null);
try{var G__15080_15140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___15116,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___15139.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___15139.cljs$core$IFn$_invoke$arity$1(G__15080_15140) : cb__14412__auto___15139.call(null,G__15080_15140));
}catch (e15079){if((e15079 instanceof java.lang.Exception)){
var e__14413__auto___15141 = e15079;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___15138,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___15141], 0));
} else {
throw e15079;

}
}
var G__15142 = cljs.core.next(seq__15067_15131__$1);
var G__15143 = null;
var G__15144 = (0);
var G__15145 = (0);
seq__15067_15117 = G__15142;
chunk__15068_15118 = G__15143;
count__15069_15119 = G__15144;
i__15070_15120 = G__15145;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15066;
}} else {
var G__15083 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15084 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__15083,G__15084) : computation_fn.call(null,G__15083,G__15084));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__15085_15146 = reaction_id;
var G__15086_15147 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15085_15146,G__15086_15147) : cljs.core.reset_BANG_.call(null,G__15085_15146,G__15086_15147));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_15087 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__15102 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15103 = query_vec;
var G__15104 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__15102,G__15103,G__15104) : computation_fn.call(null,G__15102,G__15103,G__15104));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14409__auto___15148 = re_frame.interop.now();
var duration__14410__auto___15149 = (end__14409__auto___15148 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15088_15150 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15089_15151 = null;
var count__15090_15152 = (0);
var i__15091_15153 = (0);
while(true){
if((i__15091_15153 < count__15090_15152)){
var vec__15092_15154 = chunk__15089_15151.cljs$core$IIndexed$_nth$arity$2(null,i__15091_15153);
var k__14411__auto___15155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15092_15154,(0),null);
var cb__14412__auto___15156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15092_15154,(1),null);
try{var G__15096_15157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___15149,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___15156.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___15156.cljs$core$IFn$_invoke$arity$1(G__15096_15157) : cb__14412__auto___15156.call(null,G__15096_15157));
}catch (e15095){if((e15095 instanceof java.lang.Exception)){
var e__14413__auto___15158 = e15095;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___15155,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___15158], 0));
} else {
throw e15095;

}
}
var G__15159 = seq__15088_15150;
var G__15160 = chunk__15089_15151;
var G__15161 = count__15090_15152;
var G__15162 = (i__15091_15153 + (1));
seq__15088_15150 = G__15159;
chunk__15089_15151 = G__15160;
count__15090_15152 = G__15161;
i__15091_15153 = G__15162;
continue;
} else {
var temp__4657__auto___15163 = cljs.core.seq(seq__15088_15150);
if(temp__4657__auto___15163){
var seq__15088_15164__$1 = temp__4657__auto___15163;
if(cljs.core.chunked_seq_QMARK_(seq__15088_15164__$1)){
var c__7845__auto___15165 = cljs.core.chunk_first(seq__15088_15164__$1);
var G__15166 = cljs.core.chunk_rest(seq__15088_15164__$1);
var G__15167 = c__7845__auto___15165;
var G__15168 = cljs.core.count(c__7845__auto___15165);
var G__15169 = (0);
seq__15088_15150 = G__15166;
chunk__15089_15151 = G__15167;
count__15090_15152 = G__15168;
i__15091_15153 = G__15169;
continue;
} else {
var vec__15097_15170 = cljs.core.first(seq__15088_15164__$1);
var k__14411__auto___15171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15097_15170,(0),null);
var cb__14412__auto___15172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15097_15170,(1),null);
try{var G__15101_15173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14410__auto___15149,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14412__auto___15172.cljs$core$IFn$_invoke$arity$1 ? cb__14412__auto___15172.cljs$core$IFn$_invoke$arity$1(G__15101_15173) : cb__14412__auto___15172.call(null,G__15101_15173));
}catch (e15100){if((e15100 instanceof java.lang.Exception)){
var e__14413__auto___15174 = e15100;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14411__auto___15171,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14413__auto___15174], 0));
} else {
throw e15100;

}
}
var G__15175 = cljs.core.next(seq__15088_15164__$1);
var G__15176 = null;
var G__15177 = (0);
var G__15178 = (0);
seq__15088_15150 = G__15175;
chunk__15089_15151 = G__15176;
count__15090_15152 = G__15177;
i__15091_15153 = G__15178;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15087;
}} else {
var G__15105 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15106 = query_vec;
var G__15107 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__15105,G__15106,G__15107) : computation_fn.call(null,G__15105,G__15106,G__15107));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__15108_15179 = reaction_id;
var G__15109_15180 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15108_15179,G__15109_15180) : cljs.core.reset_BANG_.call(null,G__15108_15179,G__15109_15180));

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

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq15019){
var G__15020 = cljs.core.first(seq15019);
var seq15019__$1 = cljs.core.next(seq15019);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__15020,seq15019__$1);
});

