// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('imatic.re_frame.form.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.model');
goog.require('imatic.re_frame.form.events');
re_frame.core.reg_sub_raw(cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,(function (db,p__12522){
var vec__12523 = p__12522;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12523,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12523,(1),null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (vec__12523,_,id){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,id], null));
});})(vec__12523,_,id))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_dispose,((function (vec__12523,_,id){
return (function (){
var G__12526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_clear_DASH_form,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12526) : re_frame.core.dispatch.call(null,G__12526));
});})(vec__12523,_,id))
], 0));
}));
var G__12527_12539 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_error;
var G__12528_12540 = ((function (G__12527_12539){
return (function (p__12530){
var vec__12531 = p__12530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(1),null);
var G__12534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12534) : re_frame.core.subscribe.call(null,G__12534));
});})(G__12527_12539))
;
var G__12529_12541 = ((function (G__12527_12539,G__12528_12540){
return (function (form,p__12535){
var vec__12536 = p__12535;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12536,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12536,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12536,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,path], null)));
});})(G__12527_12539,G__12528_12540))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12527_12539,G__12528_12540,G__12529_12541) : re_frame.core.reg_sub.call(null,G__12527_12539,G__12528_12540,G__12529_12541));
var G__12542_12554 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_value;
var G__12543_12555 = ((function (G__12542_12554){
return (function (p__12545){
var vec__12546 = p__12545;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546,(1),null);
var G__12549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12549) : re_frame.core.subscribe.call(null,G__12549));
});})(G__12542_12554))
;
var G__12544_12556 = ((function (G__12542_12554,G__12543_12555){
return (function (form,p__12550){
var vec__12551 = p__12550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,path], null)));
});})(G__12542_12554,G__12543_12555))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12542_12554,G__12543_12555,G__12544_12556) : re_frame.core.reg_sub.call(null,G__12542_12554,G__12543_12555,G__12544_12556));
var G__12557_12565 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_values;
var G__12558_12566 = ((function (G__12557_12565){
return (function (p__12560){
var vec__12561 = p__12560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(1),null);
var G__12564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12564) : re_frame.core.subscribe.call(null,G__12564));
});})(G__12557_12565))
;
var G__12559_12567 = ((function (G__12557_12565,G__12558_12566){
return (function (form,_){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form);
});})(G__12557_12565,G__12558_12566))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12557_12565,G__12558_12566,G__12559_12567) : re_frame.core.reg_sub.call(null,G__12557_12565,G__12558_12566,G__12559_12567));
var G__12568_12576 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_initialized_QMARK_;
var G__12569_12577 = ((function (G__12568_12576){
return (function (p__12571){
var vec__12572 = p__12571;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12572,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12572,(1),null);
var G__12575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12575) : re_frame.core.subscribe.call(null,G__12575));
});})(G__12568_12576))
;
var G__12570_12578 = ((function (G__12568_12576,G__12569_12577){
return (function (form,_){
return !((form == null));
});})(G__12568_12576,G__12569_12577))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12568_12576,G__12569_12577,G__12570_12578) : re_frame.core.reg_sub.call(null,G__12568_12576,G__12569_12577,G__12570_12578));
