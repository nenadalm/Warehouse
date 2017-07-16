// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__16819_16821 = cljs.core.cst$kw$components;
var G__16820_16822 = ((function (G__16819_16821){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16819_16821))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16819_16821,G__16820_16822) : re_frame.core.reg_sub.call(null,G__16819_16821,G__16820_16822));
var G__16824_16826 = cljs.core.cst$kw$visible_DASH_components;
var G__16825_16827 = ((function (G__16824_16826){
return (function (db,_){
if(cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))){
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16824_16826){
return (function (p1__16823_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16823_SHARP_,"ref");
});})(G__16824_16826))
,warehouse.search.db.filter_search(db)));
} else {
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
}
});})(G__16824_16826))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16824_16826,G__16825_16827) : re_frame.core.reg_sub.call(null,G__16824_16826,G__16825_16827));
var G__16828_16830 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__16829_16831 = ((function (G__16828_16830){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16828_16830))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16828_16830,G__16829_16831) : re_frame.core.reg_sub.call(null,G__16828_16830,G__16829_16831));
var G__16832_16841 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__16833_16842 = ((function (G__16832_16841){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16835) : re_frame.core.subscribe.call(null,G__16835));
})(),(function (){var G__16836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16836) : re_frame.core.subscribe.call(null,G__16836));
})()], null);
});})(G__16832_16841))
;
var G__16834_16843 = ((function (G__16832_16841,G__16833_16842){
return (function (p__16837,_){
var vec__16838 = p__16837;
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16838,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16838,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__16832_16841,G__16833_16842))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__16832_16841,G__16833_16842,G__16834_16843) : re_frame.core.reg_sub.call(null,G__16832_16841,G__16833_16842,G__16834_16843));
var G__16844_16853 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__16845_16854 = ((function (G__16844_16853){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16847) : re_frame.core.subscribe.call(null,G__16847));
})(),(function (){var G__16848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16848) : re_frame.core.subscribe.call(null,G__16848));
})()], null);
});})(G__16844_16853))
;
var G__16846_16855 = ((function (G__16844_16853,G__16845_16854){
return (function (p__16849,_){
var vec__16850 = p__16849;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__16844_16853,G__16845_16854))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__16844_16853,G__16845_16854,G__16846_16855) : re_frame.core.reg_sub.call(null,G__16844_16853,G__16845_16854,G__16846_16855));
var G__16856_16858 = cljs.core.cst$kw$active_DASH_tab;
var G__16857_16859 = ((function (G__16856_16858){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16856_16858))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16856_16858,G__16857_16859) : re_frame.core.reg_sub.call(null,G__16856_16858,G__16857_16859));
var G__16860_16862 = cljs.core.cst$kw$state;
var G__16861_16863 = ((function (G__16860_16862){
return (function (db,_){
return db;
});})(G__16860_16862))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16860_16862,G__16861_16863) : re_frame.core.reg_sub.call(null,G__16860_16862,G__16861_16863));
var G__16864_16866 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__16865_16867 = ((function (G__16864_16866){
return (function (db,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("data:text/json;charset=utf-8,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__16864_16866))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16864_16866,G__16865_16867) : re_frame.core.reg_sub.call(null,G__16864_16866,G__16865_16867));
var G__16868_16870 = cljs.core.cst$kw$change_DASH_sets;
var G__16869_16871 = ((function (G__16868_16870){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16868_16870))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16868_16870,G__16869_16871) : re_frame.core.reg_sub.call(null,G__16868_16870,G__16869_16871));
