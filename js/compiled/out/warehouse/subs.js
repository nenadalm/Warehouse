// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('re_frame.core');
var G__12930_12932 = cljs.core.cst$kw$components;
var G__12931_12933 = ((function (G__12930_12932){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12930_12932))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12930_12932,G__12931_12933) : re_frame.core.reg_sub.call(null,G__12930_12932,G__12931_12933));
var G__12934_12936 = cljs.core.cst$kw$visible_DASH_components;
var G__12935_12937 = ((function (G__12934_12936){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12934_12936))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12934_12936,G__12935_12937) : re_frame.core.reg_sub.call(null,G__12934_12936,G__12935_12937));
var G__12938_12940 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__12939_12941 = ((function (G__12938_12940){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12938_12940))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12938_12940,G__12939_12941) : re_frame.core.reg_sub.call(null,G__12938_12940,G__12939_12941));
var G__12942_12944 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__12943_12945 = ((function (G__12942_12944){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__12942_12944))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12942_12944,G__12943_12945) : re_frame.core.reg_sub.call(null,G__12942_12944,G__12943_12945));
var G__12946_12955 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__12947_12956 = ((function (G__12946_12955){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12949) : re_frame.core.subscribe.call(null,G__12949));
})(),(function (){var G__12950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12950) : re_frame.core.subscribe.call(null,G__12950));
})()], null);
});})(G__12946_12955))
;
var G__12948_12957 = ((function (G__12946_12955,G__12947_12956){
return (function (p__12951,_){
var vec__12952 = p__12951;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12952,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12952,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__12946_12955,G__12947_12956))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12946_12955,G__12947_12956,G__12948_12957) : re_frame.core.reg_sub.call(null,G__12946_12955,G__12947_12956,G__12948_12957));
var G__12958_12967 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__12959_12968 = ((function (G__12958_12967){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12961) : re_frame.core.subscribe.call(null,G__12961));
})(),(function (){var G__12962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12962) : re_frame.core.subscribe.call(null,G__12962));
})()], null);
});})(G__12958_12967))
;
var G__12960_12969 = ((function (G__12958_12967,G__12959_12968){
return (function (p__12963,_){
var vec__12964 = p__12963;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12964,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12964,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__12958_12967,G__12959_12968))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12958_12967,G__12959_12968,G__12960_12969) : re_frame.core.reg_sub.call(null,G__12958_12967,G__12959_12968,G__12960_12969));
var G__12970_12972 = cljs.core.cst$kw$active_DASH_tab;
var G__12971_12973 = ((function (G__12970_12972){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12970_12972))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12970_12972,G__12971_12973) : re_frame.core.reg_sub.call(null,G__12970_12972,G__12971_12973));
var G__12974_12976 = cljs.core.cst$kw$state;
var G__12975_12977 = ((function (G__12974_12976){
return (function (db,_){
return db;
});})(G__12974_12976))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12974_12976,G__12975_12977) : re_frame.core.reg_sub.call(null,G__12974_12976,G__12975_12977));
var G__12978_12980 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__12979_12981 = ((function (G__12978_12980){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__12978_12980))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12978_12980,G__12979_12981) : re_frame.core.reg_sub.call(null,G__12978_12980,G__12979_12981));
var G__12982_12984 = cljs.core.cst$kw$change_DASH_sets;
var G__12983_12985 = ((function (G__12982_12984){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12982_12984))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12982_12984,G__12983_12985) : re_frame.core.reg_sub.call(null,G__12982_12984,G__12983_12985));
