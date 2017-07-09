// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__16825_16827 = cljs.core.cst$kw$components;
var G__16826_16828 = ((function (G__16825_16827){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16825_16827))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16825_16827,G__16826_16828) : re_frame.core.reg_sub.call(null,G__16825_16827,G__16826_16828));
var G__16830_16832 = cljs.core.cst$kw$visible_DASH_components;
var G__16831_16833 = ((function (G__16830_16832){
return (function (db,_){
if(cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))){
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16830_16832){
return (function (p1__16829_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16829_SHARP_,"ref");
});})(G__16830_16832))
,warehouse.search.db.filter_search(db)));
} else {
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
}
});})(G__16830_16832))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16830_16832,G__16831_16833) : re_frame.core.reg_sub.call(null,G__16830_16832,G__16831_16833));
var G__16834_16836 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__16835_16837 = ((function (G__16834_16836){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16834_16836))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16834_16836,G__16835_16837) : re_frame.core.reg_sub.call(null,G__16834_16836,G__16835_16837));
var G__16838_16847 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__16839_16848 = ((function (G__16838_16847){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16841 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16841) : re_frame.core.subscribe.call(null,G__16841));
})(),(function (){var G__16842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16842) : re_frame.core.subscribe.call(null,G__16842));
})()], null);
});})(G__16838_16847))
;
var G__16840_16849 = ((function (G__16838_16847,G__16839_16848){
return (function (p__16843,_){
var vec__16844 = p__16843;
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16844,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16844,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__16838_16847,G__16839_16848))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__16838_16847,G__16839_16848,G__16840_16849) : re_frame.core.reg_sub.call(null,G__16838_16847,G__16839_16848,G__16840_16849));
var G__16850_16859 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__16851_16860 = ((function (G__16850_16859){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16853) : re_frame.core.subscribe.call(null,G__16853));
})(),(function (){var G__16854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16854) : re_frame.core.subscribe.call(null,G__16854));
})()], null);
});})(G__16850_16859))
;
var G__16852_16861 = ((function (G__16850_16859,G__16851_16860){
return (function (p__16855,_){
var vec__16856 = p__16855;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16856,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16856,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__16850_16859,G__16851_16860))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__16850_16859,G__16851_16860,G__16852_16861) : re_frame.core.reg_sub.call(null,G__16850_16859,G__16851_16860,G__16852_16861));
var G__16862_16864 = cljs.core.cst$kw$active_DASH_tab;
var G__16863_16865 = ((function (G__16862_16864){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16862_16864))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16862_16864,G__16863_16865) : re_frame.core.reg_sub.call(null,G__16862_16864,G__16863_16865));
var G__16866_16868 = cljs.core.cst$kw$state;
var G__16867_16869 = ((function (G__16866_16868){
return (function (db,_){
return db;
});})(G__16866_16868))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16866_16868,G__16867_16869) : re_frame.core.reg_sub.call(null,G__16866_16868,G__16867_16869));
var G__16870_16872 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__16871_16873 = ((function (G__16870_16872){
return (function (db,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("data:text/json;charset=utf-8,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__16870_16872))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16870_16872,G__16871_16873) : re_frame.core.reg_sub.call(null,G__16870_16872,G__16871_16873));
var G__16874_16876 = cljs.core.cst$kw$change_DASH_sets;
var G__16875_16877 = ((function (G__16874_16876){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16874_16876))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16874_16876,G__16875_16877) : re_frame.core.reg_sub.call(null,G__16874_16876,G__16875_16877));
