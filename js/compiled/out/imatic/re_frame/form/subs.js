// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('imatic.re_frame.form.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.model');
goog.require('imatic.re_frame.form.events');
re_frame.core.reg_sub_raw(cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,(function (db,p__12389){
var vec__12390 = p__12389;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12390,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12390,(1),null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (vec__12390,_,id){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,id], null));
});})(vec__12390,_,id))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_dispose,((function (vec__12390,_,id){
return (function (){
var G__12393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_clear_DASH_form,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12393) : re_frame.core.dispatch.call(null,G__12393));
});})(vec__12390,_,id))
], 0));
}));
var G__12394_12406 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_error;
var G__12395_12407 = ((function (G__12394_12406){
return (function (p__12397){
var vec__12398 = p__12397;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12398,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12398,(1),null);
var G__12401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12401) : re_frame.core.subscribe.call(null,G__12401));
});})(G__12394_12406))
;
var G__12396_12408 = ((function (G__12394_12406,G__12395_12407){
return (function (form,p__12402){
var vec__12403 = p__12402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12403,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12403,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12403,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,path], null)));
});})(G__12394_12406,G__12395_12407))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12394_12406,G__12395_12407,G__12396_12408) : re_frame.core.reg_sub.call(null,G__12394_12406,G__12395_12407,G__12396_12408));
var G__12409_12421 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_value;
var G__12410_12422 = ((function (G__12409_12421){
return (function (p__12412){
var vec__12413 = p__12412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12413,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12413,(1),null);
var G__12416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12416) : re_frame.core.subscribe.call(null,G__12416));
});})(G__12409_12421))
;
var G__12411_12423 = ((function (G__12409_12421,G__12410_12422){
return (function (form,p__12417){
var vec__12418 = p__12417;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,path], null)));
});})(G__12409_12421,G__12410_12422))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12409_12421,G__12410_12422,G__12411_12423) : re_frame.core.reg_sub.call(null,G__12409_12421,G__12410_12422,G__12411_12423));
var G__12424_12432 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_values;
var G__12425_12433 = ((function (G__12424_12432){
return (function (p__12427){
var vec__12428 = p__12427;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428,(1),null);
var G__12431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12431) : re_frame.core.subscribe.call(null,G__12431));
});})(G__12424_12432))
;
var G__12426_12434 = ((function (G__12424_12432,G__12425_12433){
return (function (form,_){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form);
});})(G__12424_12432,G__12425_12433))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12424_12432,G__12425_12433,G__12426_12434) : re_frame.core.reg_sub.call(null,G__12424_12432,G__12425_12433,G__12426_12434));
var G__12435_12443 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_initialized_QMARK_;
var G__12436_12444 = ((function (G__12435_12443){
return (function (p__12438){
var vec__12439 = p__12438;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(1),null);
var G__12442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12442) : re_frame.core.subscribe.call(null,G__12442));
});})(G__12435_12443))
;
var G__12437_12445 = ((function (G__12435_12443,G__12436_12444){
return (function (form,_){
return !((form == null));
});})(G__12435_12443,G__12436_12444))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12435_12443,G__12436_12444,G__12437_12445) : re_frame.core.reg_sub.call(null,G__12435_12443,G__12436_12444,G__12437_12445));
