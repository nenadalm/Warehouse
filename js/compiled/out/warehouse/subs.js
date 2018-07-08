// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__19547_19549 = cljs.core.cst$kw$components;
var G__19548_19550 = ((function (G__19547_19549){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19547_19549))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19547_19549,G__19548_19550) : re_frame.core.reg_sub.call(null,G__19547_19549,G__19548_19550));
var G__19551_19553 = cljs.core.cst$kw$visible_DASH_components;
var G__19552_19554 = ((function (G__19551_19553){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19551_19553))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19551_19553,G__19552_19554) : re_frame.core.reg_sub.call(null,G__19551_19553,G__19552_19554));
var G__19555_19557 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__19556_19558 = ((function (G__19555_19557){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19555_19557))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19555_19557,G__19556_19558) : re_frame.core.reg_sub.call(null,G__19555_19557,G__19556_19558));
var G__19559_19561 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__19560_19562 = ((function (G__19559_19561){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__19559_19561))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19559_19561,G__19560_19562) : re_frame.core.reg_sub.call(null,G__19559_19561,G__19560_19562));
var G__19563_19572 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__19564_19573 = ((function (G__19563_19572){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19566) : re_frame.core.subscribe.call(null,G__19566));
})(),(function (){var G__19567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19567) : re_frame.core.subscribe.call(null,G__19567));
})()], null);
});})(G__19563_19572))
;
var G__19565_19574 = ((function (G__19563_19572,G__19564_19573){
return (function (p__19568,_){
var vec__19569 = p__19568;
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19569,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19569,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__19563_19572,G__19564_19573))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19563_19572,G__19564_19573,G__19565_19574) : re_frame.core.reg_sub.call(null,G__19563_19572,G__19564_19573,G__19565_19574));
var G__19575_19584 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__19576_19585 = ((function (G__19575_19584){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19578) : re_frame.core.subscribe.call(null,G__19578));
})(),(function (){var G__19579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19579) : re_frame.core.subscribe.call(null,G__19579));
})()], null);
});})(G__19575_19584))
;
var G__19577_19586 = ((function (G__19575_19584,G__19576_19585){
return (function (p__19580,_){
var vec__19581 = p__19580;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19581,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19581,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__19575_19584,G__19576_19585))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19575_19584,G__19576_19585,G__19577_19586) : re_frame.core.reg_sub.call(null,G__19575_19584,G__19576_19585,G__19577_19586));
var G__19587_19589 = cljs.core.cst$kw$active_DASH_tab;
var G__19588_19590 = ((function (G__19587_19589){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19587_19589))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19587_19589,G__19588_19590) : re_frame.core.reg_sub.call(null,G__19587_19589,G__19588_19590));
var G__19591_19593 = cljs.core.cst$kw$state;
var G__19592_19594 = ((function (G__19591_19593){
return (function (db,_){
return db;
});})(G__19591_19593))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19591_19593,G__19592_19594) : re_frame.core.reg_sub.call(null,G__19591_19593,G__19592_19594));
var G__19595_19597 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__19596_19598 = ((function (G__19595_19597){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__19595_19597))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19595_19597,G__19596_19598) : re_frame.core.reg_sub.call(null,G__19595_19597,G__19596_19598));
var G__19599_19601 = cljs.core.cst$kw$change_DASH_sets;
var G__19600_19602 = ((function (G__19599_19601){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19599_19601))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19599_19601,G__19600_19602) : re_frame.core.reg_sub.call(null,G__19599_19601,G__19600_19602));
