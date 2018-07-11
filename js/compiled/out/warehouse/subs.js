// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('re_frame.core');
var G__12835_12837 = cljs.core.cst$kw$components;
var G__12836_12838 = ((function (G__12835_12837){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12835_12837))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12835_12837,G__12836_12838) : re_frame.core.reg_sub.call(null,G__12835_12837,G__12836_12838));
var G__12839_12841 = cljs.core.cst$kw$visible_DASH_components;
var G__12840_12842 = ((function (G__12839_12841){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12839_12841))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12839_12841,G__12840_12842) : re_frame.core.reg_sub.call(null,G__12839_12841,G__12840_12842));
var G__12843_12845 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__12844_12846 = ((function (G__12843_12845){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12843_12845))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12843_12845,G__12844_12846) : re_frame.core.reg_sub.call(null,G__12843_12845,G__12844_12846));
var G__12847_12849 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__12848_12850 = ((function (G__12847_12849){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__12847_12849))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12847_12849,G__12848_12850) : re_frame.core.reg_sub.call(null,G__12847_12849,G__12848_12850));
var G__12851_12860 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__12852_12861 = ((function (G__12851_12860){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12854) : re_frame.core.subscribe.call(null,G__12854));
})(),(function (){var G__12855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12855) : re_frame.core.subscribe.call(null,G__12855));
})()], null);
});})(G__12851_12860))
;
var G__12853_12862 = ((function (G__12851_12860,G__12852_12861){
return (function (p__12856,_){
var vec__12857 = p__12856;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12857,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12857,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__12851_12860,G__12852_12861))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12851_12860,G__12852_12861,G__12853_12862) : re_frame.core.reg_sub.call(null,G__12851_12860,G__12852_12861,G__12853_12862));
var G__12863_12872 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__12864_12873 = ((function (G__12863_12872){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12866 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12866) : re_frame.core.subscribe.call(null,G__12866));
})(),(function (){var G__12867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12867) : re_frame.core.subscribe.call(null,G__12867));
})()], null);
});})(G__12863_12872))
;
var G__12865_12874 = ((function (G__12863_12872,G__12864_12873){
return (function (p__12868,_){
var vec__12869 = p__12868;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12869,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12869,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__12863_12872,G__12864_12873))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12863_12872,G__12864_12873,G__12865_12874) : re_frame.core.reg_sub.call(null,G__12863_12872,G__12864_12873,G__12865_12874));
var G__12875_12877 = cljs.core.cst$kw$active_DASH_tab;
var G__12876_12878 = ((function (G__12875_12877){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12875_12877))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12875_12877,G__12876_12878) : re_frame.core.reg_sub.call(null,G__12875_12877,G__12876_12878));
var G__12879_12881 = cljs.core.cst$kw$state;
var G__12880_12882 = ((function (G__12879_12881){
return (function (db,_){
return db;
});})(G__12879_12881))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12879_12881,G__12880_12882) : re_frame.core.reg_sub.call(null,G__12879_12881,G__12880_12882));
var G__12883_12885 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__12884_12886 = ((function (G__12883_12885){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__12883_12885))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12883_12885,G__12884_12886) : re_frame.core.reg_sub.call(null,G__12883_12885,G__12884_12886));
var G__12887_12889 = cljs.core.cst$kw$change_DASH_sets;
var G__12888_12890 = ((function (G__12887_12889){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12887_12889))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12887_12889,G__12888_12890) : re_frame.core.reg_sub.call(null,G__12887_12889,G__12888_12890));
