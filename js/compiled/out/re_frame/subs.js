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
re_frame.subs.query__GT_reaction = (function (){var G__14778 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14778) : cljs.core.atom.call(null,G__14778));
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
var seq__14789_14799 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)));
var chunk__14790_14800 = null;
var count__14791_14801 = (0);
var i__14792_14802 = (0);
while(true){
if((i__14792_14802 < count__14791_14801)){
var vec__14793_14803 = chunk__14790_14800.cljs$core$IIndexed$_nth$arity$2(null,i__14792_14802);
var k_14804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793_14803,(0),null);
var rxn_14805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793_14803,(1),null);
re_frame.interop.dispose_BANG_(rxn_14805);

var G__14806 = seq__14789_14799;
var G__14807 = chunk__14790_14800;
var G__14808 = count__14791_14801;
var G__14809 = (i__14792_14802 + (1));
seq__14789_14799 = G__14806;
chunk__14790_14800 = G__14807;
count__14791_14801 = G__14808;
i__14792_14802 = G__14809;
continue;
} else {
var temp__4657__auto___14810 = cljs.core.seq(seq__14789_14799);
if(temp__4657__auto___14810){
var seq__14789_14811__$1 = temp__4657__auto___14810;
if(cljs.core.chunked_seq_QMARK_(seq__14789_14811__$1)){
var c__7845__auto___14812 = cljs.core.chunk_first(seq__14789_14811__$1);
var G__14813 = cljs.core.chunk_rest(seq__14789_14811__$1);
var G__14814 = c__7845__auto___14812;
var G__14815 = cljs.core.count(c__7845__auto___14812);
var G__14816 = (0);
seq__14789_14799 = G__14813;
chunk__14790_14800 = G__14814;
count__14791_14801 = G__14815;
i__14792_14802 = G__14816;
continue;
} else {
var vec__14796_14817 = cljs.core.first(seq__14789_14811__$1);
var k_14818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796_14817,(0),null);
var rxn_14819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796_14817,(1),null);
re_frame.interop.dispose_BANG_(rxn_14819);

var G__14820 = cljs.core.next(seq__14789_14811__$1);
var G__14821 = null;
var G__14822 = (0);
var G__14823 = (0);
seq__14789_14799 = G__14820;
chunk__14790_14800 = G__14821;
count__14791_14801 = G__14822;
i__14792_14802 = G__14823;
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
var _STAR_current_trace_STAR_14839 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14415__auto___14854 = re_frame.interop.now();
var duration__14416__auto___14855 = (end__14415__auto___14854 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14840_14856 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14841_14857 = null;
var count__14842_14858 = (0);
var i__14843_14859 = (0);
while(true){
if((i__14843_14859 < count__14842_14858)){
var vec__14844_14860 = chunk__14841_14857.cljs$core$IIndexed$_nth$arity$2(null,i__14843_14859);
var k__14417__auto___14861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844_14860,(0),null);
var cb__14418__auto___14862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844_14860,(1),null);
try{var G__14848_14863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___14855,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___14862.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___14862.cljs$core$IFn$_invoke$arity$1(G__14848_14863) : cb__14418__auto___14862.call(null,G__14848_14863));
}catch (e14847){if((e14847 instanceof java.lang.Exception)){
var e__14419__auto___14864 = e14847;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___14861,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___14864], 0));
} else {
throw e14847;

}
}
var G__14865 = seq__14840_14856;
var G__14866 = chunk__14841_14857;
var G__14867 = count__14842_14858;
var G__14868 = (i__14843_14859 + (1));
seq__14840_14856 = G__14865;
chunk__14841_14857 = G__14866;
count__14842_14858 = G__14867;
i__14843_14859 = G__14868;
continue;
} else {
var temp__4657__auto___14869 = cljs.core.seq(seq__14840_14856);
if(temp__4657__auto___14869){
var seq__14840_14870__$1 = temp__4657__auto___14869;
if(cljs.core.chunked_seq_QMARK_(seq__14840_14870__$1)){
var c__7845__auto___14871 = cljs.core.chunk_first(seq__14840_14870__$1);
var G__14872 = cljs.core.chunk_rest(seq__14840_14870__$1);
var G__14873 = c__7845__auto___14871;
var G__14874 = cljs.core.count(c__7845__auto___14871);
var G__14875 = (0);
seq__14840_14856 = G__14872;
chunk__14841_14857 = G__14873;
count__14842_14858 = G__14874;
i__14843_14859 = G__14875;
continue;
} else {
var vec__14849_14876 = cljs.core.first(seq__14840_14870__$1);
var k__14417__auto___14877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14849_14876,(0),null);
var cb__14418__auto___14878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14849_14876,(1),null);
try{var G__14853_14879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___14855,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___14878.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___14878.cljs$core$IFn$_invoke$arity$1(G__14853_14879) : cb__14418__auto___14878.call(null,G__14853_14879));
}catch (e14852){if((e14852 instanceof java.lang.Exception)){
var e__14419__auto___14880 = e14852;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___14877,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___14880], 0));
} else {
throw e14852;

}
}
var G__14881 = cljs.core.next(seq__14840_14870__$1);
var G__14882 = null;
var G__14883 = (0);
var G__14884 = (0);
seq__14840_14856 = G__14881;
chunk__14841_14857 = G__14882;
count__14842_14858 = G__14883;
i__14843_14859 = G__14884;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14839;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14885 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14885;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args14886 = [];
var len__8139__auto___14889 = arguments.length;
var i__8140__auto___14890 = (0);
while(true){
if((i__8140__auto___14890 < len__8139__auto___14889)){
args14886.push((arguments[i__8140__auto___14890]));

var G__14891 = (i__8140__auto___14890 + (1));
i__8140__auto___14890 = G__14891;
continue;
} else {
}
break;
}

var G__14888 = args14886.length;
switch (G__14888) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14886.length)].join('')));

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
var args14893 = [];
var len__8139__auto___14934 = arguments.length;
var i__8140__auto___14935 = (0);
while(true){
if((i__8140__auto___14935 < len__8139__auto___14934)){
args14893.push((arguments[i__8140__auto___14935]));

var G__14936 = (i__8140__auto___14935 + (1));
i__8140__auto___14935 = G__14936;
continue;
} else {
}
break;
}

var G__14895 = args14893.length;
switch (G__14895) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14893.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14896 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14938 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14938;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14939 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14939;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14940 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14940;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query_v,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query_v) : handler_fn.call(null,re_frame.db.app_db,query_v)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14415__auto___14941 = re_frame.interop.now();
var duration__14416__auto___14942 = (end__14415__auto___14941 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14897_14943 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14898_14944 = null;
var count__14899_14945 = (0);
var i__14900_14946 = (0);
while(true){
if((i__14900_14946 < count__14899_14945)){
var vec__14901_14947 = chunk__14898_14944.cljs$core$IIndexed$_nth$arity$2(null,i__14900_14946);
var k__14417__auto___14948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901_14947,(0),null);
var cb__14418__auto___14949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901_14947,(1),null);
try{var G__14905_14950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___14942,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___14949.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___14949.cljs$core$IFn$_invoke$arity$1(G__14905_14950) : cb__14418__auto___14949.call(null,G__14905_14950));
}catch (e14904){if((e14904 instanceof java.lang.Exception)){
var e__14419__auto___14951 = e14904;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___14948,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___14951], 0));
} else {
throw e14904;

}
}
var G__14952 = seq__14897_14943;
var G__14953 = chunk__14898_14944;
var G__14954 = count__14899_14945;
var G__14955 = (i__14900_14946 + (1));
seq__14897_14943 = G__14952;
chunk__14898_14944 = G__14953;
count__14899_14945 = G__14954;
i__14900_14946 = G__14955;
continue;
} else {
var temp__4657__auto___14956 = cljs.core.seq(seq__14897_14943);
if(temp__4657__auto___14956){
var seq__14897_14957__$1 = temp__4657__auto___14956;
if(cljs.core.chunked_seq_QMARK_(seq__14897_14957__$1)){
var c__7845__auto___14958 = cljs.core.chunk_first(seq__14897_14957__$1);
var G__14959 = cljs.core.chunk_rest(seq__14897_14957__$1);
var G__14960 = c__7845__auto___14958;
var G__14961 = cljs.core.count(c__7845__auto___14958);
var G__14962 = (0);
seq__14897_14943 = G__14959;
chunk__14898_14944 = G__14960;
count__14899_14945 = G__14961;
i__14900_14946 = G__14962;
continue;
} else {
var vec__14906_14963 = cljs.core.first(seq__14897_14957__$1);
var k__14417__auto___14964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906_14963,(0),null);
var cb__14418__auto___14965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906_14963,(1),null);
try{var G__14910_14966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___14942,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___14965.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___14965.cljs$core$IFn$_invoke$arity$1(G__14910_14966) : cb__14418__auto___14965.call(null,G__14910_14966));
}catch (e14909){if((e14909 instanceof java.lang.Exception)){
var e__14419__auto___14967 = e14909;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___14964,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___14967], 0));
} else {
throw e14909;

}
}
var G__14968 = cljs.core.next(seq__14897_14957__$1);
var G__14969 = null;
var G__14970 = (0);
var G__14971 = (0);
seq__14897_14943 = G__14968;
chunk__14898_14944 = G__14969;
count__14899_14945 = G__14970;
i__14900_14946 = G__14971;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14896;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14972 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14972;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14973 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14973;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14974 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14974;

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
var _STAR_current_trace_STAR_14911 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,v,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14975 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14975;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14976 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14976;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___14977 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___14977)){
var not_reactive_14978 = temp__4657__auto___14977;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_14978], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___14979 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___14979;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14911){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14911))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14911){
return (function (){
var G__14926 = re_frame.db.app_db;
var G__14927 = v;
var G__14928 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__14926,G__14927,G__14928) : handler_fn.call(null,G__14926,G__14927,G__14928));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14911))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14911){
return (function (){
var G__14929 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14929) : cljs.core.deref.call(null,G__14929));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14911))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14415__auto___14980 = re_frame.interop.now();
var duration__14416__auto___14981 = (end__14415__auto___14980 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14912_14982 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14913_14983 = null;
var count__14914_14984 = (0);
var i__14915_14985 = (0);
while(true){
if((i__14915_14985 < count__14914_14984)){
var vec__14916_14986 = chunk__14913_14983.cljs$core$IIndexed$_nth$arity$2(null,i__14915_14985);
var k__14417__auto___14987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916_14986,(0),null);
var cb__14418__auto___14988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916_14986,(1),null);
try{var G__14920_14989 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___14981,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___14988.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___14988.cljs$core$IFn$_invoke$arity$1(G__14920_14989) : cb__14418__auto___14988.call(null,G__14920_14989));
}catch (e14919){if((e14919 instanceof java.lang.Exception)){
var e__14419__auto___14990 = e14919;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___14987,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___14990], 0));
} else {
throw e14919;

}
}
var G__14991 = seq__14912_14982;
var G__14992 = chunk__14913_14983;
var G__14993 = count__14914_14984;
var G__14994 = (i__14915_14985 + (1));
seq__14912_14982 = G__14991;
chunk__14913_14983 = G__14992;
count__14914_14984 = G__14993;
i__14915_14985 = G__14994;
continue;
} else {
var temp__4657__auto___14995 = cljs.core.seq(seq__14912_14982);
if(temp__4657__auto___14995){
var seq__14912_14996__$1 = temp__4657__auto___14995;
if(cljs.core.chunked_seq_QMARK_(seq__14912_14996__$1)){
var c__7845__auto___14997 = cljs.core.chunk_first(seq__14912_14996__$1);
var G__14998 = cljs.core.chunk_rest(seq__14912_14996__$1);
var G__14999 = c__7845__auto___14997;
var G__15000 = cljs.core.count(c__7845__auto___14997);
var G__15001 = (0);
seq__14912_14982 = G__14998;
chunk__14913_14983 = G__14999;
count__14914_14984 = G__15000;
i__14915_14985 = G__15001;
continue;
} else {
var vec__14921_15002 = cljs.core.first(seq__14912_14996__$1);
var k__14417__auto___15003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14921_15002,(0),null);
var cb__14418__auto___15004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14921_15002,(1),null);
try{var G__14925_15005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___14981,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___15004.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___15004.cljs$core$IFn$_invoke$arity$1(G__14925_15005) : cb__14418__auto___15004.call(null,G__14925_15005));
}catch (e14924){if((e14924 instanceof java.lang.Exception)){
var e__14419__auto___15006 = e14924;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___15003,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___15006], 0));
} else {
throw e14924;

}
}
var G__15007 = cljs.core.next(seq__14912_14996__$1);
var G__15008 = null;
var G__15009 = (0);
var G__15010 = (0);
seq__14912_14982 = G__15007;
chunk__14913_14983 = G__15008;
count__14914_14984 = G__15009;
i__14915_14985 = G__15010;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14911;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___15011 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___15011;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___15012 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___15012;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___15013 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___15013)){
var not_reactive_15014 = temp__4657__auto___15013;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_15014], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___15015 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___15015;

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
var G__14930 = re_frame.db.app_db;
var G__14931 = v;
var G__14932 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__14930,G__14931,G__14932) : handler_fn.call(null,G__14930,G__14931,G__14932));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__14933 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14933) : cljs.core.deref.call(null,G__14933));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__15020){
var vec__15021 = p__15020;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15021,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(signals) : cljs.core.deref.call(null,signals)):re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14432__auto___15024 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14432__auto___15024;

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
var len__8139__auto___15116 = arguments.length;
var i__8140__auto___15117 = (0);
while(true){
if((i__8140__auto___15117 < len__8139__auto___15116)){
args__8146__auto__.push((arguments[i__8140__auto___15117]));

var G__15118 = (i__8140__auto___15117 + (1));
i__8140__auto___15117 = G__15118;
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
var inputs_fn = (function (){var G__15027 = cljs.core.count(input_args);
switch (G__15027) {
case (0):
return ((function (G__15027,computation_fn,input_args,err_header){
return (function() {
var G__15120 = null;
var G__15120__1 = (function (_){
return re_frame.db.app_db;
});
var G__15120__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__15120 = function(_,___$1){
switch(arguments.length){
case 1:
return G__15120__1.call(this,_);
case 2:
return G__15120__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15120.cljs$core$IFn$_invoke$arity$1 = G__15120__1;
G__15120.cljs$core$IFn$_invoke$arity$2 = G__15120__2;
return G__15120;
})()
;})(G__15027,computation_fn,input_args,err_header))

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
return ((function (G__15027,computation_fn,input_args,err_header){
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
;})(G__15027,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,vecs,G__15027,computation_fn,input_args,err_header){
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
;})(pairs,vecs,G__15027,computation_fn,input_args,err_header))

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
var _STAR_current_trace_STAR_15072 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__15087 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15088 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__15087,G__15088) : computation_fn.call(null,G__15087,G__15088));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14415__auto___15121 = re_frame.interop.now();
var duration__14416__auto___15122 = (end__14415__auto___15121 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15073_15123 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15074_15124 = null;
var count__15075_15125 = (0);
var i__15076_15126 = (0);
while(true){
if((i__15076_15126 < count__15075_15125)){
var vec__15077_15127 = chunk__15074_15124.cljs$core$IIndexed$_nth$arity$2(null,i__15076_15126);
var k__14417__auto___15128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15077_15127,(0),null);
var cb__14418__auto___15129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15077_15127,(1),null);
try{var G__15081_15130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___15122,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___15129.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___15129.cljs$core$IFn$_invoke$arity$1(G__15081_15130) : cb__14418__auto___15129.call(null,G__15081_15130));
}catch (e15080){if((e15080 instanceof java.lang.Exception)){
var e__14419__auto___15131 = e15080;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___15128,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___15131], 0));
} else {
throw e15080;

}
}
var G__15132 = seq__15073_15123;
var G__15133 = chunk__15074_15124;
var G__15134 = count__15075_15125;
var G__15135 = (i__15076_15126 + (1));
seq__15073_15123 = G__15132;
chunk__15074_15124 = G__15133;
count__15075_15125 = G__15134;
i__15076_15126 = G__15135;
continue;
} else {
var temp__4657__auto___15136 = cljs.core.seq(seq__15073_15123);
if(temp__4657__auto___15136){
var seq__15073_15137__$1 = temp__4657__auto___15136;
if(cljs.core.chunked_seq_QMARK_(seq__15073_15137__$1)){
var c__7845__auto___15138 = cljs.core.chunk_first(seq__15073_15137__$1);
var G__15139 = cljs.core.chunk_rest(seq__15073_15137__$1);
var G__15140 = c__7845__auto___15138;
var G__15141 = cljs.core.count(c__7845__auto___15138);
var G__15142 = (0);
seq__15073_15123 = G__15139;
chunk__15074_15124 = G__15140;
count__15075_15125 = G__15141;
i__15076_15126 = G__15142;
continue;
} else {
var vec__15082_15143 = cljs.core.first(seq__15073_15137__$1);
var k__14417__auto___15144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15082_15143,(0),null);
var cb__14418__auto___15145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15082_15143,(1),null);
try{var G__15086_15146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___15122,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___15145.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___15145.cljs$core$IFn$_invoke$arity$1(G__15086_15146) : cb__14418__auto___15145.call(null,G__15086_15146));
}catch (e15085){if((e15085 instanceof java.lang.Exception)){
var e__14419__auto___15147 = e15085;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___15144,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___15147], 0));
} else {
throw e15085;

}
}
var G__15148 = cljs.core.next(seq__15073_15137__$1);
var G__15149 = null;
var G__15150 = (0);
var G__15151 = (0);
seq__15073_15123 = G__15148;
chunk__15074_15124 = G__15149;
count__15075_15125 = G__15150;
i__15076_15126 = G__15151;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15072;
}} else {
var G__15089 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15090 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__15089,G__15090) : computation_fn.call(null,G__15089,G__15090));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__15091_15152 = reaction_id;
var G__15092_15153 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15091_15152,G__15092_15153) : cljs.core.reset_BANG_.call(null,G__15091_15152,G__15092_15153));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_15093 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__15108 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15109 = query_vec;
var G__15110 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__15108,G__15109,G__15110) : computation_fn.call(null,G__15108,G__15109,G__15110));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14415__auto___15154 = re_frame.interop.now();
var duration__14416__auto___15155 = (end__14415__auto___15154 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15094_15156 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15095_15157 = null;
var count__15096_15158 = (0);
var i__15097_15159 = (0);
while(true){
if((i__15097_15159 < count__15096_15158)){
var vec__15098_15160 = chunk__15095_15157.cljs$core$IIndexed$_nth$arity$2(null,i__15097_15159);
var k__14417__auto___15161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15098_15160,(0),null);
var cb__14418__auto___15162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15098_15160,(1),null);
try{var G__15102_15163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___15155,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___15162.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___15162.cljs$core$IFn$_invoke$arity$1(G__15102_15163) : cb__14418__auto___15162.call(null,G__15102_15163));
}catch (e15101){if((e15101 instanceof java.lang.Exception)){
var e__14419__auto___15164 = e15101;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___15161,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___15164], 0));
} else {
throw e15101;

}
}
var G__15165 = seq__15094_15156;
var G__15166 = chunk__15095_15157;
var G__15167 = count__15096_15158;
var G__15168 = (i__15097_15159 + (1));
seq__15094_15156 = G__15165;
chunk__15095_15157 = G__15166;
count__15096_15158 = G__15167;
i__15097_15159 = G__15168;
continue;
} else {
var temp__4657__auto___15169 = cljs.core.seq(seq__15094_15156);
if(temp__4657__auto___15169){
var seq__15094_15170__$1 = temp__4657__auto___15169;
if(cljs.core.chunked_seq_QMARK_(seq__15094_15170__$1)){
var c__7845__auto___15171 = cljs.core.chunk_first(seq__15094_15170__$1);
var G__15172 = cljs.core.chunk_rest(seq__15094_15170__$1);
var G__15173 = c__7845__auto___15171;
var G__15174 = cljs.core.count(c__7845__auto___15171);
var G__15175 = (0);
seq__15094_15156 = G__15172;
chunk__15095_15157 = G__15173;
count__15096_15158 = G__15174;
i__15097_15159 = G__15175;
continue;
} else {
var vec__15103_15176 = cljs.core.first(seq__15094_15170__$1);
var k__14417__auto___15177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15103_15176,(0),null);
var cb__14418__auto___15178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15103_15176,(1),null);
try{var G__15107_15179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14416__auto___15155,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14418__auto___15178.cljs$core$IFn$_invoke$arity$1 ? cb__14418__auto___15178.cljs$core$IFn$_invoke$arity$1(G__15107_15179) : cb__14418__auto___15178.call(null,G__15107_15179));
}catch (e15106){if((e15106 instanceof java.lang.Exception)){
var e__14419__auto___15180 = e15106;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14417__auto___15177,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14419__auto___15180], 0));
} else {
throw e15106;

}
}
var G__15181 = cljs.core.next(seq__15094_15170__$1);
var G__15182 = null;
var G__15183 = (0);
var G__15184 = (0);
seq__15094_15156 = G__15181;
chunk__15095_15157 = G__15182;
count__15096_15158 = G__15183;
i__15097_15159 = G__15184;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15093;
}} else {
var G__15111 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15112 = query_vec;
var G__15113 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__15111,G__15112,G__15113) : computation_fn.call(null,G__15111,G__15112,G__15113));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__15114_15185 = reaction_id;
var G__15115_15186 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15114_15185,G__15115_15186) : cljs.core.reset_BANG_.call(null,G__15114_15185,G__15115_15186));

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

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq15025){
var G__15026 = cljs.core.first(seq15025);
var seq15025__$1 = cljs.core.next(seq15025);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__15026,seq15025__$1);
});

