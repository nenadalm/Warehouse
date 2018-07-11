// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('imatic.re_frame.form.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.model');
goog.require('imatic.re_frame.form.events');
re_frame.core.reg_sub_raw(cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,(function (db,p__12411){
var vec__12412 = p__12411;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(1),null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (vec__12412,_,id){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,id], null));
});})(vec__12412,_,id))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_dispose,((function (vec__12412,_,id){
return (function (){
var G__12415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_clear_DASH_form,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12415) : re_frame.core.dispatch.call(null,G__12415));
});})(vec__12412,_,id))
], 0));
}));
var G__12416_12428 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_error;
var G__12417_12429 = ((function (G__12416_12428){
return (function (p__12419){
var vec__12420 = p__12419;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(1),null);
var G__12423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12423) : re_frame.core.subscribe.call(null,G__12423));
});})(G__12416_12428))
;
var G__12418_12430 = ((function (G__12416_12428,G__12417_12429){
return (function (form,p__12424){
var vec__12425 = p__12424;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12425,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12425,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12425,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,path], null)));
});})(G__12416_12428,G__12417_12429))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12416_12428,G__12417_12429,G__12418_12430) : re_frame.core.reg_sub.call(null,G__12416_12428,G__12417_12429,G__12418_12430));
var G__12431_12443 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_value;
var G__12432_12444 = ((function (G__12431_12443){
return (function (p__12434){
var vec__12435 = p__12434;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435,(1),null);
var G__12438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12438) : re_frame.core.subscribe.call(null,G__12438));
});})(G__12431_12443))
;
var G__12433_12445 = ((function (G__12431_12443,G__12432_12444){
return (function (form,p__12439){
var vec__12440 = p__12439;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12440,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12440,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12440,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,path], null)));
});})(G__12431_12443,G__12432_12444))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12431_12443,G__12432_12444,G__12433_12445) : re_frame.core.reg_sub.call(null,G__12431_12443,G__12432_12444,G__12433_12445));
var G__12446_12454 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_values;
var G__12447_12455 = ((function (G__12446_12454){
return (function (p__12449){
var vec__12450 = p__12449;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12450,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12450,(1),null);
var G__12453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12453) : re_frame.core.subscribe.call(null,G__12453));
});})(G__12446_12454))
;
var G__12448_12456 = ((function (G__12446_12454,G__12447_12455){
return (function (form,_){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form);
});})(G__12446_12454,G__12447_12455))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12446_12454,G__12447_12455,G__12448_12456) : re_frame.core.reg_sub.call(null,G__12446_12454,G__12447_12455,G__12448_12456));
var G__12457_12465 = cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_initialized_QMARK_;
var G__12458_12466 = ((function (G__12457_12465){
return (function (p__12460){
var vec__12461 = p__12460;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12461,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12461,(1),null);
var G__12464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_form,id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12464) : re_frame.core.subscribe.call(null,G__12464));
});})(G__12457_12465))
;
var G__12459_12467 = ((function (G__12457_12465,G__12458_12466){
return (function (form,_){
return !((form == null));
});})(G__12457_12465,G__12458_12466))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12457_12465,G__12458_12466,G__12459_12467) : re_frame.core.reg_sub.call(null,G__12457_12465,G__12458_12466,G__12459_12467));
