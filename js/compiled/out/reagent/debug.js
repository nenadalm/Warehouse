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
var G__13445__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13446__i = 0, G__13446__a = new Array(arguments.length -  0);
while (G__13446__i < G__13446__a.length) {G__13446__a[G__13446__i] = arguments[G__13446__i + 0]; ++G__13446__i;}
  args = new cljs.core.IndexedSeq(G__13446__a,0);
} 
return G__13445__delegate.call(this,args);};
G__13445.cljs$lang$maxFixedArity = 0;
G__13445.cljs$lang$applyTo = (function (arglist__13447){
var args = cljs.core.seq(arglist__13447);
return G__13445__delegate(args);
});
G__13445.cljs$core$IFn$_invoke$arity$variadic = G__13445__delegate;
return G__13445;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13448__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13449__i = 0, G__13449__a = new Array(arguments.length -  0);
while (G__13449__i < G__13449__a.length) {G__13449__a[G__13449__i] = arguments[G__13449__i + 0]; ++G__13449__i;}
  args = new cljs.core.IndexedSeq(G__13449__a,0);
} 
return G__13448__delegate.call(this,args);};
G__13448.cljs$lang$maxFixedArity = 0;
G__13448.cljs$lang$applyTo = (function (arglist__13450){
var args = cljs.core.seq(arglist__13450);
return G__13448__delegate(args);
});
G__13448.cljs$core$IFn$_invoke$arity$variadic = G__13448__delegate;
return G__13448;
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
