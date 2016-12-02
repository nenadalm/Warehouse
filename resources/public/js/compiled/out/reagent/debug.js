// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
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
var G__17677__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17678__i = 0, G__17678__a = new Array(arguments.length -  0);
while (G__17678__i < G__17678__a.length) {G__17678__a[G__17678__i] = arguments[G__17678__i + 0]; ++G__17678__i;}
  args = new cljs.core.IndexedSeq(G__17678__a,0);
} 
return G__17677__delegate.call(this,args);};
G__17677.cljs$lang$maxFixedArity = 0;
G__17677.cljs$lang$applyTo = (function (arglist__17679){
var args = cljs.core.seq(arglist__17679);
return G__17677__delegate(args);
});
G__17677.cljs$core$IFn$_invoke$arity$variadic = G__17677__delegate;
return G__17677;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__17680__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17681__i = 0, G__17681__a = new Array(arguments.length -  0);
while (G__17681__i < G__17681__a.length) {G__17681__a[G__17681__i] = arguments[G__17681__i + 0]; ++G__17681__i;}
  args = new cljs.core.IndexedSeq(G__17681__a,0);
} 
return G__17680__delegate.call(this,args);};
G__17680.cljs$lang$maxFixedArity = 0;
G__17680.cljs$lang$applyTo = (function (arglist__17682){
var args = cljs.core.seq(arglist__17682);
return G__17680__delegate(args);
});
G__17680.cljs$core$IFn$_invoke$arity$variadic = G__17680__delegate;
return G__17680;
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
