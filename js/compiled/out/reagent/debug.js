// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13437__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13438__i = 0, G__13438__a = new Array(arguments.length -  0);
while (G__13438__i < G__13438__a.length) {G__13438__a[G__13438__i] = arguments[G__13438__i + 0]; ++G__13438__i;}
  args = new cljs.core.IndexedSeq(G__13438__a,0);
} 
return G__13437__delegate.call(this,args);};
G__13437.cljs$lang$maxFixedArity = 0;
G__13437.cljs$lang$applyTo = (function (arglist__13439){
var args = cljs.core.seq(arglist__13439);
return G__13437__delegate(args);
});
G__13437.cljs$core$IFn$_invoke$arity$variadic = G__13437__delegate;
return G__13437;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13440__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13441__i = 0, G__13441__a = new Array(arguments.length -  0);
while (G__13441__i < G__13441__a.length) {G__13441__a[G__13441__i] = arguments[G__13441__i + 0]; ++G__13441__i;}
  args = new cljs.core.IndexedSeq(G__13441__a,0);
} 
return G__13440__delegate.call(this,args);};
G__13440.cljs$lang$maxFixedArity = 0;
G__13440.cljs$lang$applyTo = (function (arglist__13442){
var args = cljs.core.seq(arglist__13442);
return G__13440__delegate(args);
});
G__13440.cljs$core$IFn$_invoke$arity$variadic = G__13440__delegate;
return G__13440;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
