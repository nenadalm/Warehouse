// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('re_frame.core');
var G__12813_12815 = cljs.core.cst$kw$components;
var G__12814_12816 = ((function (G__12813_12815){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12813_12815))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12813_12815,G__12814_12816) : re_frame.core.reg_sub.call(null,G__12813_12815,G__12814_12816));
var G__12817_12819 = cljs.core.cst$kw$visible_DASH_components;
var G__12818_12820 = ((function (G__12817_12819){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12817_12819))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12817_12819,G__12818_12820) : re_frame.core.reg_sub.call(null,G__12817_12819,G__12818_12820));
var G__12821_12823 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__12822_12824 = ((function (G__12821_12823){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12821_12823))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12821_12823,G__12822_12824) : re_frame.core.reg_sub.call(null,G__12821_12823,G__12822_12824));
var G__12825_12827 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__12826_12828 = ((function (G__12825_12827){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__12825_12827))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12825_12827,G__12826_12828) : re_frame.core.reg_sub.call(null,G__12825_12827,G__12826_12828));
var G__12829_12838 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__12830_12839 = ((function (G__12829_12838){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12832) : re_frame.core.subscribe.call(null,G__12832));
})(),(function (){var G__12833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12833) : re_frame.core.subscribe.call(null,G__12833));
})()], null);
});})(G__12829_12838))
;
var G__12831_12840 = ((function (G__12829_12838,G__12830_12839){
return (function (p__12834,_){
var vec__12835 = p__12834;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12835,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12835,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__12829_12838,G__12830_12839))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12829_12838,G__12830_12839,G__12831_12840) : re_frame.core.reg_sub.call(null,G__12829_12838,G__12830_12839,G__12831_12840));
var G__12841_12850 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__12842_12851 = ((function (G__12841_12850){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12844) : re_frame.core.subscribe.call(null,G__12844));
})(),(function (){var G__12845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12845) : re_frame.core.subscribe.call(null,G__12845));
})()], null);
});})(G__12841_12850))
;
var G__12843_12852 = ((function (G__12841_12850,G__12842_12851){
return (function (p__12846,_){
var vec__12847 = p__12846;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12847,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12847,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__12841_12850,G__12842_12851))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12841_12850,G__12842_12851,G__12843_12852) : re_frame.core.reg_sub.call(null,G__12841_12850,G__12842_12851,G__12843_12852));
var G__12853_12855 = cljs.core.cst$kw$active_DASH_tab;
var G__12854_12856 = ((function (G__12853_12855){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12853_12855))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12853_12855,G__12854_12856) : re_frame.core.reg_sub.call(null,G__12853_12855,G__12854_12856));
var G__12857_12859 = cljs.core.cst$kw$state;
var G__12858_12860 = ((function (G__12857_12859){
return (function (db,_){
return db;
});})(G__12857_12859))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12857_12859,G__12858_12860) : re_frame.core.reg_sub.call(null,G__12857_12859,G__12858_12860));
var G__12861_12863 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__12862_12864 = ((function (G__12861_12863){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__12861_12863))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12861_12863,G__12862_12864) : re_frame.core.reg_sub.call(null,G__12861_12863,G__12862_12864));
var G__12865_12867 = cljs.core.cst$kw$change_DASH_sets;
var G__12866_12868 = ((function (G__12865_12867){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12865_12867))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12865_12867,G__12866_12868) : re_frame.core.reg_sub.call(null,G__12865_12867,G__12866_12868));
