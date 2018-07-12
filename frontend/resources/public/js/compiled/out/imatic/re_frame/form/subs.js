// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('imatic.re_frame.form.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.model');
goog.require('imatic.re_frame.form.events');
re_frame.core.reg_sub_raw(cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,(function (db,p__12451){
var vec__12452 = p__12451;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(1),null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (vec__12452,_,id){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,id], null));
});})(vec__12452,_,id))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_dispose,((function (vec__12452,_,id){
return (function (){
var G__12455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_clear_DASH_form,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12455) : re_frame.core.dispatch.call(null,G__12455));
});})(vec__12452,_,id))
], 0));
}));
var G__12456_12468 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_error;
var G__12457_12469 = ((function (G__12456_12468){
return (function (p__12459){
var vec__12460 = p__12459;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12460,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12460,(1),null);
var G__12463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12463) : re_frame.core.subscribe.call(null,G__12463));
});})(G__12456_12468))
;
var G__12458_12470 = ((function (G__12456_12468,G__12457_12469){
return (function (form,p__12464){
var vec__12465 = p__12464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,path], null)));
});})(G__12456_12468,G__12457_12469))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12456_12468,G__12457_12469,G__12458_12470) : re_frame.core.reg_sub.call(null,G__12456_12468,G__12457_12469,G__12458_12470));
var G__12471_12483 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_value;
var G__12472_12484 = ((function (G__12471_12483){
return (function (p__12474){
var vec__12475 = p__12474;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12475,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12475,(1),null);
var G__12478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12478) : re_frame.core.subscribe.call(null,G__12478));
});})(G__12471_12483))
;
var G__12473_12485 = ((function (G__12471_12483,G__12472_12484){
return (function (form,p__12479){
var vec__12480 = p__12479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12480,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12480,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12480,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,path], null)));
});})(G__12471_12483,G__12472_12484))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12471_12483,G__12472_12484,G__12473_12485) : re_frame.core.reg_sub.call(null,G__12471_12483,G__12472_12484,G__12473_12485));
var G__12486_12494 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_values;
var G__12487_12495 = ((function (G__12486_12494){
return (function (p__12489){
var vec__12490 = p__12489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12490,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12490,(1),null);
var G__12493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12493) : re_frame.core.subscribe.call(null,G__12493));
});})(G__12486_12494))
;
var G__12488_12496 = ((function (G__12486_12494,G__12487_12495){
return (function (form,_){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form);
});})(G__12486_12494,G__12487_12495))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12486_12494,G__12487_12495,G__12488_12496) : re_frame.core.reg_sub.call(null,G__12486_12494,G__12487_12495,G__12488_12496));
var G__12497_12505 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_initialized_QMARK_;
var G__12498_12506 = ((function (G__12497_12505){
return (function (p__12500){
var vec__12501 = p__12500;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12501,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12501,(1),null);
var G__12504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12504) : re_frame.core.subscribe.call(null,G__12504));
});})(G__12497_12505))
;
var G__12499_12507 = ((function (G__12497_12505,G__12498_12506){
return (function (form,_){
return !((form == null));
});})(G__12497_12505,G__12498_12506))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12497_12505,G__12498_12506,G__12499_12507) : re_frame.core.reg_sub.call(null,G__12497_12505,G__12498_12506,G__12499_12507));
