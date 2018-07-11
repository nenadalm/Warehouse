// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
var ret__4565__auto___12187 = (function (){
/**
 * Traced defn, this variant compiles down to the standard defn, without tracing.
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12188 = arguments.length;
var i__4532__auto___12189 = (0);
while(true){
if((i__4532__auto___12189 < len__4531__auto___12188)){
args__4534__auto__.push((arguments[i__4532__auto___12189]));

var G__12190 = (i__4532__auto___12189 + (1));
i__4532__auto___12189 = G__12190;
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
day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq12184){
var G__12185 = cljs.core.first(seq12184);
var seq12184__$1 = cljs.core.next(seq12184);
var G__12186 = cljs.core.first(seq12184__$1);
var seq12184__$2 = cljs.core.next(seq12184__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12185,G__12186,seq12184__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced.cljs$lang$macro = true;

var ret__4565__auto___12194 = (function (){
/**
 * Traced fn, this variant compiles down to the standard fn, without tracing.
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12195 = arguments.length;
var i__4532__auto___12196 = (0);
while(true){
if((i__4532__auto___12196 < len__4531__auto___12195)){
args__4534__auto__.push((arguments[i__4532__auto___12196]));

var G__12197 = (i__4532__auto___12196 + (1));
i__4532__auto___12196 = G__12197;
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
day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq12191){
var G__12192 = cljs.core.first(seq12191);
var seq12191__$1 = cljs.core.next(seq12191);
var G__12193 = cljs.core.first(seq12191__$1);
var seq12191__$2 = cljs.core.next(seq12191__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12192,G__12193,seq12191__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced.cljs$lang$macro = true;

