// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
var ret__4565__auto___12282 = (function (){
/**
 * Traced defn, this variant compiles down to the standard defn, without tracing.
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12283 = arguments.length;
var i__4532__auto___12284 = (0);
while(true){
if((i__4532__auto___12284 < len__4531__auto___12283)){
args__4534__auto__.push((arguments[i__4532__auto___12284]));

var G__12285 = (i__4532__auto___12284 + (1));
i__4532__auto___12284 = G__12285;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),definition)));
});

day8.re_frame.tracing.defn_traced.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq12279){
var G__12280 = cljs.core.first(seq12279);
var seq12279__$1 = cljs.core.next(seq12279);
var G__12281 = cljs.core.first(seq12279__$1);
var seq12279__$2 = cljs.core.next(seq12279__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12280,G__12281,seq12279__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced.cljs$lang$macro = true;

var ret__4565__auto___12289 = (function (){
/**
 * Traced fn, this variant compiles down to the standard fn, without tracing.
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12290 = arguments.length;
var i__4532__auto___12291 = (0);
while(true){
if((i__4532__auto___12291 < len__4531__auto___12290)){
args__4534__auto__.push((arguments[i__4532__auto___12291]));

var G__12292 = (i__4532__auto___12291 + (1));
i__4532__auto___12291 = G__12292;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),definition)));
});

day8.re_frame.tracing.fn_traced.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq12286){
var G__12287 = cljs.core.first(seq12286);
var seq12286__$1 = cljs.core.next(seq12286);
var G__12288 = cljs.core.first(seq12286__$1);
var seq12286__$2 = cljs.core.next(seq12286__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12287,G__12288,seq12286__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced.cljs$lang$macro = true;

