// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('imatic.re_frame.form.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.model');
goog.require('imatic.re_frame.form.events');
re_frame.core.reg_sub_raw(cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,(function (db,p__12506){
var vec__12507 = p__12506;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12507,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12507,(1),null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (vec__12507,_,id){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,id], null));
});})(vec__12507,_,id))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_dispose,((function (vec__12507,_,id){
return (function (){
var G__12510 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_clear_DASH_form,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12510) : re_frame.core.dispatch.call(null,G__12510));
});})(vec__12507,_,id))
], 0));
}));
var G__12511_12523 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_error;
var G__12512_12524 = ((function (G__12511_12523){
return (function (p__12514){
var vec__12515 = p__12514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12515,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12515,(1),null);
var G__12518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12518) : re_frame.core.subscribe.call(null,G__12518));
});})(G__12511_12523))
;
var G__12513_12525 = ((function (G__12511_12523,G__12512_12524){
return (function (form,p__12519){
var vec__12520 = p__12519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12520,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12520,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12520,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,path], null)));
});})(G__12511_12523,G__12512_12524))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12511_12523,G__12512_12524,G__12513_12525) : re_frame.core.reg_sub.call(null,G__12511_12523,G__12512_12524,G__12513_12525));
var G__12526_12538 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_value;
var G__12527_12539 = ((function (G__12526_12538){
return (function (p__12529){
var vec__12530 = p__12529;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12530,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12530,(1),null);
var G__12533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12533) : re_frame.core.subscribe.call(null,G__12533));
});})(G__12526_12538))
;
var G__12528_12540 = ((function (G__12526_12538,G__12527_12539){
return (function (form,p__12534){
var vec__12535 = p__12534;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,path], null)));
});})(G__12526_12538,G__12527_12539))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12526_12538,G__12527_12539,G__12528_12540) : re_frame.core.reg_sub.call(null,G__12526_12538,G__12527_12539,G__12528_12540));
var G__12541_12549 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_values;
var G__12542_12550 = ((function (G__12541_12549){
return (function (p__12544){
var vec__12545 = p__12544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(1),null);
var G__12548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12548) : re_frame.core.subscribe.call(null,G__12548));
});})(G__12541_12549))
;
var G__12543_12551 = ((function (G__12541_12549,G__12542_12550){
return (function (form,_){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form);
});})(G__12541_12549,G__12542_12550))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12541_12549,G__12542_12550,G__12543_12551) : re_frame.core.reg_sub.call(null,G__12541_12549,G__12542_12550,G__12543_12551));
var G__12552_12560 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_initialized_QMARK_;
var G__12553_12561 = ((function (G__12552_12560){
return (function (p__12555){
var vec__12556 = p__12555;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(1),null);
var G__12559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12559) : re_frame.core.subscribe.call(null,G__12559));
});})(G__12552_12560))
;
var G__12554_12562 = ((function (G__12552_12560,G__12553_12561){
return (function (form,_){
return !((form == null));
});})(G__12552_12560,G__12553_12561))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12552_12560,G__12553_12561,G__12554_12562) : re_frame.core.reg_sub.call(null,G__12552_12560,G__12553_12561,G__12554_12562));
