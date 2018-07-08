// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('imatic.re_frame.form.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.model');
goog.require('imatic.re_frame.form.events');
re_frame.core.reg_sub_raw(cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,(function (db,p__19122){
var vec__19123 = p__19122;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19123,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19123,(1),null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (vec__19123,_,id){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,id], null));
});})(vec__19123,_,id))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_dispose,((function (vec__19123,_,id){
return (function (){
var G__19126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_clear_DASH_form,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19126) : re_frame.core.dispatch.call(null,G__19126));
});})(vec__19123,_,id))
], 0));
}));
var G__19127_19139 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_error;
var G__19128_19140 = ((function (G__19127_19139){
return (function (p__19130){
var vec__19131 = p__19130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131,(1),null);
var G__19134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19134) : re_frame.core.subscribe.call(null,G__19134));
});})(G__19127_19139))
;
var G__19129_19141 = ((function (G__19127_19139,G__19128_19140){
return (function (form,p__19135){
var vec__19136 = p__19135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19136,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19136,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19136,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,path], null)));
});})(G__19127_19139,G__19128_19140))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19127_19139,G__19128_19140,G__19129_19141) : re_frame.core.reg_sub.call(null,G__19127_19139,G__19128_19140,G__19129_19141));
var G__19142_19154 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_value;
var G__19143_19155 = ((function (G__19142_19154){
return (function (p__19145){
var vec__19146 = p__19145;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19146,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19146,(1),null);
var G__19149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19149) : re_frame.core.subscribe.call(null,G__19149));
});})(G__19142_19154))
;
var G__19144_19156 = ((function (G__19142_19154,G__19143_19155){
return (function (form,p__19150){
var vec__19151 = p__19150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19151,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19151,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19151,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,path], null)));
});})(G__19142_19154,G__19143_19155))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19142_19154,G__19143_19155,G__19144_19156) : re_frame.core.reg_sub.call(null,G__19142_19154,G__19143_19155,G__19144_19156));
var G__19157_19165 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_values;
var G__19158_19166 = ((function (G__19157_19165){
return (function (p__19160){
var vec__19161 = p__19160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19161,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19161,(1),null);
var G__19164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19164) : re_frame.core.subscribe.call(null,G__19164));
});})(G__19157_19165))
;
var G__19159_19167 = ((function (G__19157_19165,G__19158_19166){
return (function (form,_){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form);
});})(G__19157_19165,G__19158_19166))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19157_19165,G__19158_19166,G__19159_19167) : re_frame.core.reg_sub.call(null,G__19157_19165,G__19158_19166,G__19159_19167));
var G__19168_19176 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_initialized_QMARK_;
var G__19169_19177 = ((function (G__19168_19176){
return (function (p__19171){
var vec__19172 = p__19171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19172,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19172,(1),null);
var G__19175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19175) : re_frame.core.subscribe.call(null,G__19175));
});})(G__19168_19176))
;
var G__19170_19178 = ((function (G__19168_19176,G__19169_19177){
return (function (form,_){
return !((form == null));
});})(G__19168_19176,G__19169_19177))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19168_19176,G__19169_19177,G__19170_19178) : re_frame.core.reg_sub.call(null,G__19168_19176,G__19169_19177,G__19170_19178));
