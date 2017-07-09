// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__16816_16818 = cljs.core.cst$kw$visible_DASH_components;
var G__16817_16819 = ((function (G__16816_16818){
return (function (db,_){
if(cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))){
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16816_16818){
return (function (p1__16815_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16815_SHARP_,"ref");
});})(G__16816_16818))
,warehouse.search.db.filter_search(db)));
} else {
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
}
});})(G__16816_16818))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16816_16818,G__16817_16819) : re_frame.core.reg_sub.call(null,G__16816_16818,G__16817_16819));
var G__16820_16822 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__16821_16823 = ((function (G__16820_16822){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16820_16822))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16820_16822,G__16821_16823) : re_frame.core.reg_sub.call(null,G__16820_16822,G__16821_16823));
var G__16824_16833 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__16825_16834 = ((function (G__16824_16833){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16827) : re_frame.core.subscribe.call(null,G__16827));
})(),(function (){var G__16828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16828) : re_frame.core.subscribe.call(null,G__16828));
})()], null);
});})(G__16824_16833))
;
var G__16826_16835 = ((function (G__16824_16833,G__16825_16834){
return (function (p__16829,_){
var vec__16830 = p__16829;
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16830,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16830,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__16824_16833,G__16825_16834))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__16824_16833,G__16825_16834,G__16826_16835) : re_frame.core.reg_sub.call(null,G__16824_16833,G__16825_16834,G__16826_16835));
var G__16836_16845 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__16837_16846 = ((function (G__16836_16845){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16839) : re_frame.core.subscribe.call(null,G__16839));
})(),(function (){var G__16840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16840) : re_frame.core.subscribe.call(null,G__16840));
})()], null);
});})(G__16836_16845))
;
var G__16838_16847 = ((function (G__16836_16845,G__16837_16846){
return (function (p__16841,_){
var vec__16842 = p__16841;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16842,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16842,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__16836_16845,G__16837_16846))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__16836_16845,G__16837_16846,G__16838_16847) : re_frame.core.reg_sub.call(null,G__16836_16845,G__16837_16846,G__16838_16847));
var G__16848_16850 = cljs.core.cst$kw$active_DASH_tab;
var G__16849_16851 = ((function (G__16848_16850){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16848_16850))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16848_16850,G__16849_16851) : re_frame.core.reg_sub.call(null,G__16848_16850,G__16849_16851));
var G__16852_16854 = cljs.core.cst$kw$state;
var G__16853_16855 = ((function (G__16852_16854){
return (function (db,_){
return db;
});})(G__16852_16854))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16852_16854,G__16853_16855) : re_frame.core.reg_sub.call(null,G__16852_16854,G__16853_16855));
var G__16856_16858 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__16857_16859 = ((function (G__16856_16858){
return (function (db,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("data:text/json;charset=utf-8,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__16856_16858))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16856_16858,G__16857_16859) : re_frame.core.reg_sub.call(null,G__16856_16858,G__16857_16859));
var G__16860_16862 = cljs.core.cst$kw$change_DASH_sets;
var G__16861_16863 = ((function (G__16860_16862){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16860_16862))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16860_16862,G__16861_16863) : re_frame.core.reg_sub.call(null,G__16860_16862,G__16861_16863));
