// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('imatic.re_frame.form.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.model');
goog.require('imatic.re_frame.form.events');
re_frame.core.reg_sub_raw(cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,(function (db,p__12333){
var vec__12334 = p__12333;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334,(1),null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (vec__12334,_,id){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,id], null));
});})(vec__12334,_,id))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_dispose,((function (vec__12334,_,id){
return (function (){
var G__12337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_clear_DASH_form,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12337) : re_frame.core.dispatch.call(null,G__12337));
});})(vec__12334,_,id))
], 0));
}));
var G__12338_12350 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_error;
var G__12339_12351 = ((function (G__12338_12350){
return (function (p__12341){
var vec__12342 = p__12341;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12342,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12342,(1),null);
var G__12345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12345) : re_frame.core.subscribe.call(null,G__12345));
});})(G__12338_12350))
;
var G__12340_12352 = ((function (G__12338_12350,G__12339_12351){
return (function (form,p__12346){
var vec__12347 = p__12346;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12347,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12347,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12347,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,path], null)));
});})(G__12338_12350,G__12339_12351))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12338_12350,G__12339_12351,G__12340_12352) : re_frame.core.reg_sub.call(null,G__12338_12350,G__12339_12351,G__12340_12352));
var G__12353_12365 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_value;
var G__12354_12366 = ((function (G__12353_12365){
return (function (p__12356){
var vec__12357 = p__12356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12357,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12357,(1),null);
var G__12360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12360) : re_frame.core.subscribe.call(null,G__12360));
});})(G__12353_12365))
;
var G__12355_12367 = ((function (G__12353_12365,G__12354_12366){
return (function (form,p__12361){
var vec__12362 = p__12361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12362,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12362,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12362,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,path], null)));
});})(G__12353_12365,G__12354_12366))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12353_12365,G__12354_12366,G__12355_12367) : re_frame.core.reg_sub.call(null,G__12353_12365,G__12354_12366,G__12355_12367));
var G__12368_12376 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_values;
var G__12369_12377 = ((function (G__12368_12376){
return (function (p__12371){
var vec__12372 = p__12371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12372,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12372,(1),null);
var G__12375 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12375) : re_frame.core.subscribe.call(null,G__12375));
});})(G__12368_12376))
;
var G__12370_12378 = ((function (G__12368_12376,G__12369_12377){
return (function (form,_){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form);
});})(G__12368_12376,G__12369_12377))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12368_12376,G__12369_12377,G__12370_12378) : re_frame.core.reg_sub.call(null,G__12368_12376,G__12369_12377,G__12370_12378));
var G__12379_12387 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_initialized_QMARK_;
var G__12380_12388 = ((function (G__12379_12387){
return (function (p__12382){
var vec__12383 = p__12382;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12383,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12383,(1),null);
var G__12386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12386) : re_frame.core.subscribe.call(null,G__12386));
});})(G__12379_12387))
;
var G__12381_12389 = ((function (G__12379_12387,G__12380_12388){
return (function (form,_){
return !((form == null));
});})(G__12379_12387,G__12380_12388))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12379_12387,G__12380_12388,G__12381_12389) : re_frame.core.reg_sub.call(null,G__12379_12387,G__12380_12388,G__12381_12389));
