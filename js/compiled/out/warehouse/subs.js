// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__20209_20211 = cljs.core.cst$kw$components;
var G__20210_20212 = ((function (G__20209_20211){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20209_20211))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20209_20211,G__20210_20212) : re_frame.core.reg_sub.call(null,G__20209_20211,G__20210_20212));
var G__20213_20215 = cljs.core.cst$kw$visible_DASH_components;
var G__20214_20216 = ((function (G__20213_20215){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20213_20215))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20213_20215,G__20214_20216) : re_frame.core.reg_sub.call(null,G__20213_20215,G__20214_20216));
var G__20217_20219 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__20218_20220 = ((function (G__20217_20219){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20217_20219))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20217_20219,G__20218_20220) : re_frame.core.reg_sub.call(null,G__20217_20219,G__20218_20220));
var G__20221_20223 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__20222_20224 = ((function (G__20221_20223){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__20221_20223))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20221_20223,G__20222_20224) : re_frame.core.reg_sub.call(null,G__20221_20223,G__20222_20224));
var G__20225_20234 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__20226_20235 = ((function (G__20225_20234){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20228) : re_frame.core.subscribe.call(null,G__20228));
})(),(function (){var G__20229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20229) : re_frame.core.subscribe.call(null,G__20229));
})()], null);
});})(G__20225_20234))
;
var G__20227_20236 = ((function (G__20225_20234,G__20226_20235){
return (function (p__20230,_){
var vec__20231 = p__20230;
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20231,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20231,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__20225_20234,G__20226_20235))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__20225_20234,G__20226_20235,G__20227_20236) : re_frame.core.reg_sub.call(null,G__20225_20234,G__20226_20235,G__20227_20236));
var G__20237_20246 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__20238_20247 = ((function (G__20237_20246){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20240) : re_frame.core.subscribe.call(null,G__20240));
})(),(function (){var G__20241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20241) : re_frame.core.subscribe.call(null,G__20241));
})()], null);
});})(G__20237_20246))
;
var G__20239_20248 = ((function (G__20237_20246,G__20238_20247){
return (function (p__20242,_){
var vec__20243 = p__20242;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20243,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20243,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__20237_20246,G__20238_20247))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__20237_20246,G__20238_20247,G__20239_20248) : re_frame.core.reg_sub.call(null,G__20237_20246,G__20238_20247,G__20239_20248));
var G__20249_20251 = cljs.core.cst$kw$active_DASH_tab;
var G__20250_20252 = ((function (G__20249_20251){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20249_20251))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20249_20251,G__20250_20252) : re_frame.core.reg_sub.call(null,G__20249_20251,G__20250_20252));
var G__20253_20255 = cljs.core.cst$kw$state;
var G__20254_20256 = ((function (G__20253_20255){
return (function (db,_){
return db;
});})(G__20253_20255))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20253_20255,G__20254_20256) : re_frame.core.reg_sub.call(null,G__20253_20255,G__20254_20256));
var G__20257_20259 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__20258_20260 = ((function (G__20257_20259){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__20257_20259))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20257_20259,G__20258_20260) : re_frame.core.reg_sub.call(null,G__20257_20259,G__20258_20260));
var G__20261_20263 = cljs.core.cst$kw$change_DASH_sets;
var G__20262_20264 = ((function (G__20261_20263){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20261_20263))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20261_20263,G__20262_20264) : re_frame.core.reg_sub.call(null,G__20261_20263,G__20262_20264));
