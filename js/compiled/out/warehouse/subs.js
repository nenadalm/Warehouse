// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('re_frame.core');
var G__12757_12759 = cljs.core.cst$kw$components;
var G__12758_12760 = ((function (G__12757_12759){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12757_12759))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12757_12759,G__12758_12760) : re_frame.core.reg_sub.call(null,G__12757_12759,G__12758_12760));
var G__12761_12763 = cljs.core.cst$kw$visible_DASH_components;
var G__12762_12764 = ((function (G__12761_12763){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12761_12763))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12761_12763,G__12762_12764) : re_frame.core.reg_sub.call(null,G__12761_12763,G__12762_12764));
var G__12765_12767 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__12766_12768 = ((function (G__12765_12767){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12765_12767))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12765_12767,G__12766_12768) : re_frame.core.reg_sub.call(null,G__12765_12767,G__12766_12768));
var G__12769_12771 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__12770_12772 = ((function (G__12769_12771){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__12769_12771))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12769_12771,G__12770_12772) : re_frame.core.reg_sub.call(null,G__12769_12771,G__12770_12772));
var G__12773_12782 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__12774_12783 = ((function (G__12773_12782){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12776) : re_frame.core.subscribe.call(null,G__12776));
})(),(function (){var G__12777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12777) : re_frame.core.subscribe.call(null,G__12777));
})()], null);
});})(G__12773_12782))
;
var G__12775_12784 = ((function (G__12773_12782,G__12774_12783){
return (function (p__12778,_){
var vec__12779 = p__12778;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12779,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12779,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__12773_12782,G__12774_12783))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12773_12782,G__12774_12783,G__12775_12784) : re_frame.core.reg_sub.call(null,G__12773_12782,G__12774_12783,G__12775_12784));
var G__12785_12794 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__12786_12795 = ((function (G__12785_12794){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12788) : re_frame.core.subscribe.call(null,G__12788));
})(),(function (){var G__12789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12789) : re_frame.core.subscribe.call(null,G__12789));
})()], null);
});})(G__12785_12794))
;
var G__12787_12796 = ((function (G__12785_12794,G__12786_12795){
return (function (p__12790,_){
var vec__12791 = p__12790;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__12785_12794,G__12786_12795))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12785_12794,G__12786_12795,G__12787_12796) : re_frame.core.reg_sub.call(null,G__12785_12794,G__12786_12795,G__12787_12796));
var G__12797_12799 = cljs.core.cst$kw$active_DASH_tab;
var G__12798_12800 = ((function (G__12797_12799){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12797_12799))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12797_12799,G__12798_12800) : re_frame.core.reg_sub.call(null,G__12797_12799,G__12798_12800));
var G__12801_12803 = cljs.core.cst$kw$state;
var G__12802_12804 = ((function (G__12801_12803){
return (function (db,_){
return db;
});})(G__12801_12803))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12801_12803,G__12802_12804) : re_frame.core.reg_sub.call(null,G__12801_12803,G__12802_12804));
var G__12805_12807 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__12806_12808 = ((function (G__12805_12807){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__12805_12807))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12805_12807,G__12806_12808) : re_frame.core.reg_sub.call(null,G__12805_12807,G__12806_12808));
var G__12809_12811 = cljs.core.cst$kw$change_DASH_sets;
var G__12810_12812 = ((function (G__12809_12811){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12809_12811))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12809_12811,G__12810_12812) : re_frame.core.reg_sub.call(null,G__12809_12811,G__12810_12812));
