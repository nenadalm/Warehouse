// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__16817_16819 = cljs.core.cst$kw$components;
var G__16818_16820 = ((function (G__16817_16819){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16817_16819))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16817_16819,G__16818_16820) : re_frame.core.reg_sub.call(null,G__16817_16819,G__16818_16820));
var G__16822_16824 = cljs.core.cst$kw$visible_DASH_components;
var G__16823_16825 = ((function (G__16822_16824){
return (function (db,_){
if(cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))){
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16822_16824){
return (function (p1__16821_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16821_SHARP_,"ref");
});})(G__16822_16824))
,warehouse.search.db.filter_search(db)));
} else {
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
}
});})(G__16822_16824))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16822_16824,G__16823_16825) : re_frame.core.reg_sub.call(null,G__16822_16824,G__16823_16825));
var G__16826_16828 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__16827_16829 = ((function (G__16826_16828){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16826_16828))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16826_16828,G__16827_16829) : re_frame.core.reg_sub.call(null,G__16826_16828,G__16827_16829));
var G__16830_16839 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__16831_16840 = ((function (G__16830_16839){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16833) : re_frame.core.subscribe.call(null,G__16833));
})(),(function (){var G__16834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16834) : re_frame.core.subscribe.call(null,G__16834));
})()], null);
});})(G__16830_16839))
;
var G__16832_16841 = ((function (G__16830_16839,G__16831_16840){
return (function (p__16835,_){
var vec__16836 = p__16835;
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16836,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16836,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__16830_16839,G__16831_16840))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__16830_16839,G__16831_16840,G__16832_16841) : re_frame.core.reg_sub.call(null,G__16830_16839,G__16831_16840,G__16832_16841));
var G__16842_16851 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__16843_16852 = ((function (G__16842_16851){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16845) : re_frame.core.subscribe.call(null,G__16845));
})(),(function (){var G__16846 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16846) : re_frame.core.subscribe.call(null,G__16846));
})()], null);
});})(G__16842_16851))
;
var G__16844_16853 = ((function (G__16842_16851,G__16843_16852){
return (function (p__16847,_){
var vec__16848 = p__16847;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16848,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16848,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__16842_16851,G__16843_16852))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__16842_16851,G__16843_16852,G__16844_16853) : re_frame.core.reg_sub.call(null,G__16842_16851,G__16843_16852,G__16844_16853));
var G__16854_16856 = cljs.core.cst$kw$active_DASH_tab;
var G__16855_16857 = ((function (G__16854_16856){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16854_16856))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16854_16856,G__16855_16857) : re_frame.core.reg_sub.call(null,G__16854_16856,G__16855_16857));
var G__16858_16860 = cljs.core.cst$kw$state;
var G__16859_16861 = ((function (G__16858_16860){
return (function (db,_){
return db;
});})(G__16858_16860))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16858_16860,G__16859_16861) : re_frame.core.reg_sub.call(null,G__16858_16860,G__16859_16861));
var G__16862_16864 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__16863_16865 = ((function (G__16862_16864){
return (function (db,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("data:text/json;charset=utf-8,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__16862_16864))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16862_16864,G__16863_16865) : re_frame.core.reg_sub.call(null,G__16862_16864,G__16863_16865));
var G__16866_16868 = cljs.core.cst$kw$change_DASH_sets;
var G__16867_16869 = ((function (G__16866_16868){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16866_16868))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16866_16868,G__16867_16869) : re_frame.core.reg_sub.call(null,G__16866_16868,G__16867_16869));
