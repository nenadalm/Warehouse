// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8298__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8299__i = 0, G__8299__a = new Array(arguments.length -  0);
while (G__8299__i < G__8299__a.length) {G__8299__a[G__8299__i] = arguments[G__8299__i + 0]; ++G__8299__i;}
  args = new cljs.core.IndexedSeq(G__8299__a,0,null);
} 
return G__8298__delegate.call(this,args);};
G__8298.cljs$lang$maxFixedArity = 0;
G__8298.cljs$lang$applyTo = (function (arglist__8300){
var args = cljs.core.seq(arglist__8300);
return G__8298__delegate(args);
});
G__8298.cljs$core$IFn$_invoke$arity$variadic = G__8298__delegate;
return G__8298;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8301__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8302__i = 0, G__8302__a = new Array(arguments.length -  0);
while (G__8302__i < G__8302__a.length) {G__8302__a[G__8302__i] = arguments[G__8302__i + 0]; ++G__8302__i;}
  args = new cljs.core.IndexedSeq(G__8302__a,0,null);
} 
return G__8301__delegate.call(this,args);};
G__8301.cljs$lang$maxFixedArity = 0;
G__8301.cljs$lang$applyTo = (function (arglist__8303){
var args = cljs.core.seq(arglist__8303);
return G__8301__delegate(args);
});
G__8301.cljs$core$IFn$_invoke$arity$variadic = G__8301__delegate;
return G__8301;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
