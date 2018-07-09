// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
var ret__4565__auto___12165 = (function (){
/**
 * Traced defn, this variant compiles down to the standard defn, without tracing.
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12166 = arguments.length;
var i__4532__auto___12167 = (0);
while(true){
if((i__4532__auto___12167 < len__4531__auto___12166)){
args__4534__auto__.push((arguments[i__4532__auto___12167]));

var G__12168 = (i__4532__auto___12167 + (1));
i__4532__auto___12167 = G__12168;
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
day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq12162){
var G__12163 = cljs.core.first(seq12162);
var seq12162__$1 = cljs.core.next(seq12162);
var G__12164 = cljs.core.first(seq12162__$1);
var seq12162__$2 = cljs.core.next(seq12162__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12163,G__12164,seq12162__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced.cljs$lang$macro = true;

var ret__4565__auto___12172 = (function (){
/**
 * Traced fn, this variant compiles down to the standard fn, without tracing.
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12173 = arguments.length;
var i__4532__auto___12174 = (0);
while(true){
if((i__4532__auto___12174 < len__4531__auto___12173)){
args__4534__auto__.push((arguments[i__4532__auto___12174]));

var G__12175 = (i__4532__auto___12174 + (1));
i__4532__auto___12174 = G__12175;
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
day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq12169){
var G__12170 = cljs.core.first(seq12169);
var seq12169__$1 = cljs.core.next(seq12169);
var G__12171 = cljs.core.first(seq12169__$1);
var seq12169__$2 = cljs.core.next(seq12169__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12170,G__12171,seq12169__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced.cljs$lang$macro = true;

