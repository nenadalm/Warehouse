// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
var ret__4565__auto___12298 = (function (){
/**
 * Traced defn, this variant compiles down to the standard defn, without tracing.
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12299 = arguments.length;
var i__4532__auto___12300 = (0);
while(true){
if((i__4532__auto___12300 < len__4531__auto___12299)){
args__4534__auto__.push((arguments[i__4532__auto___12300]));

var G__12301 = (i__4532__auto___12300 + (1));
i__4532__auto___12300 = G__12301;
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
day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq12295){
var G__12296 = cljs.core.first(seq12295);
var seq12295__$1 = cljs.core.next(seq12295);
var G__12297 = cljs.core.first(seq12295__$1);
var seq12295__$2 = cljs.core.next(seq12295__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12296,G__12297,seq12295__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced.cljs$lang$macro = true;

var ret__4565__auto___12305 = (function (){
/**
 * Traced fn, this variant compiles down to the standard fn, without tracing.
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12306 = arguments.length;
var i__4532__auto___12307 = (0);
while(true){
if((i__4532__auto___12307 < len__4531__auto___12306)){
args__4534__auto__.push((arguments[i__4532__auto___12307]));

var G__12308 = (i__4532__auto___12307 + (1));
i__4532__auto___12307 = G__12308;
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
day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq12302){
var G__12303 = cljs.core.first(seq12302);
var seq12302__$1 = cljs.core.next(seq12302);
var G__12304 = cljs.core.first(seq12302__$1);
var seq12302__$2 = cljs.core.next(seq12302__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12303,G__12304,seq12302__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced.cljs$lang$macro = true;

