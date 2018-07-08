// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
var ret__4531__auto___18812 = (function (){
/**
 * Traced defn, this variant compiles down to the standard defn, without tracing.
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4500__auto__ = [];
var len__4497__auto___18813 = arguments.length;
var i__4498__auto___18814 = (0);
while(true){
if((i__4498__auto___18814 < len__4497__auto___18813)){
args__4500__auto__.push((arguments[i__4498__auto___18814]));

var G__18815 = (i__4498__auto___18814 + (1));
i__4498__auto___18814 = G__18815;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),definition)));
});

day8.re_frame.tracing.defn_traced.cljs$lang$maxFixedArity = (2);

day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq18809){
var G__18810 = cljs.core.first(seq18809);
var seq18809__$1 = cljs.core.next(seq18809);
var G__18811 = cljs.core.first(seq18809__$1);
var seq18809__$2 = cljs.core.next(seq18809__$1);
return day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic(G__18810,G__18811,seq18809__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced.cljs$lang$macro = true;

var ret__4531__auto___18819 = (function (){
/**
 * Traced fn, this variant compiles down to the standard fn, without tracing.
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4500__auto__ = [];
var len__4497__auto___18820 = arguments.length;
var i__4498__auto___18821 = (0);
while(true){
if((i__4498__auto___18821 < len__4497__auto___18820)){
args__4500__auto__.push((arguments[i__4498__auto___18821]));

var G__18822 = (i__4498__auto___18821 + (1));
i__4498__auto___18821 = G__18822;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),definition)));
});

day8.re_frame.tracing.fn_traced.cljs$lang$maxFixedArity = (2);

day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq18816){
var G__18817 = cljs.core.first(seq18816);
var seq18816__$1 = cljs.core.next(seq18816);
var G__18818 = cljs.core.first(seq18816__$1);
var seq18816__$2 = cljs.core.next(seq18816__$1);
return day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic(G__18817,G__18818,seq18816__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced.cljs$lang$macro = true;

