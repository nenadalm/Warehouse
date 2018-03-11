// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__19025_19027 = cljs.core.cst$kw$components;
var G__19026_19028 = ((function (G__19025_19027){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19025_19027))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19025_19027,G__19026_19028) : re_frame.core.reg_sub.call(null,G__19025_19027,G__19026_19028));
var G__19029_19031 = cljs.core.cst$kw$visible_DASH_components;
var G__19030_19032 = ((function (G__19029_19031){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19029_19031))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19029_19031,G__19030_19032) : re_frame.core.reg_sub.call(null,G__19029_19031,G__19030_19032));
var G__19033_19035 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__19034_19036 = ((function (G__19033_19035){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19033_19035))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19033_19035,G__19034_19036) : re_frame.core.reg_sub.call(null,G__19033_19035,G__19034_19036));
var G__19037_19039 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__19038_19040 = ((function (G__19037_19039){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__19037_19039))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19037_19039,G__19038_19040) : re_frame.core.reg_sub.call(null,G__19037_19039,G__19038_19040));
var G__19041_19050 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__19042_19051 = ((function (G__19041_19050){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19044) : re_frame.core.subscribe.call(null,G__19044));
})(),(function (){var G__19045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19045) : re_frame.core.subscribe.call(null,G__19045));
})()], null);
});})(G__19041_19050))
;
var G__19043_19052 = ((function (G__19041_19050,G__19042_19051){
return (function (p__19046,_){
var vec__19047 = p__19046;
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__19041_19050,G__19042_19051))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19041_19050,G__19042_19051,G__19043_19052) : re_frame.core.reg_sub.call(null,G__19041_19050,G__19042_19051,G__19043_19052));
var G__19053_19062 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__19054_19063 = ((function (G__19053_19062){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19056) : re_frame.core.subscribe.call(null,G__19056));
})(),(function (){var G__19057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19057) : re_frame.core.subscribe.call(null,G__19057));
})()], null);
});})(G__19053_19062))
;
var G__19055_19064 = ((function (G__19053_19062,G__19054_19063){
return (function (p__19058,_){
var vec__19059 = p__19058;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19059,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19059,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__19053_19062,G__19054_19063))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19053_19062,G__19054_19063,G__19055_19064) : re_frame.core.reg_sub.call(null,G__19053_19062,G__19054_19063,G__19055_19064));
var G__19065_19067 = cljs.core.cst$kw$active_DASH_tab;
var G__19066_19068 = ((function (G__19065_19067){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19065_19067))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19065_19067,G__19066_19068) : re_frame.core.reg_sub.call(null,G__19065_19067,G__19066_19068));
var G__19069_19071 = cljs.core.cst$kw$state;
var G__19070_19072 = ((function (G__19069_19071){
return (function (db,_){
return db;
});})(G__19069_19071))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19069_19071,G__19070_19072) : re_frame.core.reg_sub.call(null,G__19069_19071,G__19070_19072));
var G__19073_19075 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__19074_19076 = ((function (G__19073_19075){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__19073_19075))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19073_19075,G__19074_19076) : re_frame.core.reg_sub.call(null,G__19073_19075,G__19074_19076));
var G__19077_19079 = cljs.core.cst$kw$change_DASH_sets;
var G__19078_19080 = ((function (G__19077_19079){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19077_19079))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19077_19079,G__19078_19080) : re_frame.core.reg_sub.call(null,G__19077_19079,G__19078_19080));
