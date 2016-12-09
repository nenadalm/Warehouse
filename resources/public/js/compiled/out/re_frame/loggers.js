// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
re_frame.loggers.loggers = (function (){var G__29642 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$log,console.log.bind(console),cljs.core.cst$kw$warn,console.warn.bind(console),cljs.core.cst$kw$error,console.error.bind(console),cljs.core.cst$kw$group,(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),cljs.core.cst$kw$groupEnd,(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29642) : cljs.core.atom.call(null,G__29642));
})();
re_frame.loggers.console = (function re_frame$loggers$console(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29646 = arguments.length;
var i__7693__auto___29647 = (0);
while(true){
if((i__7693__auto___29647 < len__7692__auto___29646)){
args__7699__auto__.push((arguments[i__7693__auto___29647]));

var G__29648 = (i__7693__auto___29647 + (1));
i__7693__auto___29647 = G__29648;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.loggers.loggers) : cljs.core.deref.call(null,re_frame.loggers.loggers)),level)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("re-frame: log called with unknown level: "),cljs.core.str(level)].join('')),cljs.core.str("\n"),cljs.core.str("(contains? (clojure.core/deref loggers) level)")].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__29645 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.loggers.loggers) : cljs.core.deref.call(null,re_frame.loggers.loggers));
return (level.cljs$core$IFn$_invoke$arity$1 ? level.cljs$core$IFn$_invoke$arity$1(G__29645) : level.call(null,G__29645));
})(),args);
});

re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

re_frame.loggers.console.cljs$lang$applyTo = (function (seq29643){
var G__29644 = cljs.core.first(seq29643);
var seq29643__$1 = cljs.core.next(seq29643);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(G__29644,seq29643__$1);
});

/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
re_frame.loggers.set_loggers_BANG_ = (function re_frame$loggers$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.loggers.loggers) : cljs.core.deref.call(null,re_frame.loggers.loggers))))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (-> (clojure.core/deref loggers) keys set)))")].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
