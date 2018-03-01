// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__21730_21732 = cljs.core.cst$kw$components;
var G__21731_21733 = ((function (G__21730_21732){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__21730_21732))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21730_21732,G__21731_21733) : re_frame.core.reg_sub.call(null,G__21730_21732,G__21731_21733));
var G__21734_21736 = cljs.core.cst$kw$visible_DASH_components;
var G__21735_21737 = ((function (G__21734_21736){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__21734_21736))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21734_21736,G__21735_21737) : re_frame.core.reg_sub.call(null,G__21734_21736,G__21735_21737));
var G__21738_21740 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__21739_21741 = ((function (G__21738_21740){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__21738_21740))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21738_21740,G__21739_21741) : re_frame.core.reg_sub.call(null,G__21738_21740,G__21739_21741));
var G__21742_21744 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__21743_21745 = ((function (G__21742_21744){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__21742_21744))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21742_21744,G__21743_21745) : re_frame.core.reg_sub.call(null,G__21742_21744,G__21743_21745));
var G__21746_21755 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__21747_21756 = ((function (G__21746_21755){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21749) : re_frame.core.subscribe.call(null,G__21749));
})(),(function (){var G__21750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21750) : re_frame.core.subscribe.call(null,G__21750));
})()], null);
});})(G__21746_21755))
;
var G__21748_21757 = ((function (G__21746_21755,G__21747_21756){
return (function (p__21751,_){
var vec__21752 = p__21751;
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21752,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21752,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__21746_21755,G__21747_21756))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__21746_21755,G__21747_21756,G__21748_21757) : re_frame.core.reg_sub.call(null,G__21746_21755,G__21747_21756,G__21748_21757));
var G__21758_21767 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__21759_21768 = ((function (G__21758_21767){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21761) : re_frame.core.subscribe.call(null,G__21761));
})(),(function (){var G__21762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21762) : re_frame.core.subscribe.call(null,G__21762));
})()], null);
});})(G__21758_21767))
;
var G__21760_21769 = ((function (G__21758_21767,G__21759_21768){
return (function (p__21763,_){
var vec__21764 = p__21763;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21764,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21764,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__21758_21767,G__21759_21768))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__21758_21767,G__21759_21768,G__21760_21769) : re_frame.core.reg_sub.call(null,G__21758_21767,G__21759_21768,G__21760_21769));
var G__21770_21772 = cljs.core.cst$kw$active_DASH_tab;
var G__21771_21773 = ((function (G__21770_21772){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__21770_21772))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21770_21772,G__21771_21773) : re_frame.core.reg_sub.call(null,G__21770_21772,G__21771_21773));
var G__21774_21776 = cljs.core.cst$kw$state;
var G__21775_21777 = ((function (G__21774_21776){
return (function (db,_){
return db;
});})(G__21774_21776))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21774_21776,G__21775_21777) : re_frame.core.reg_sub.call(null,G__21774_21776,G__21775_21777));
var G__21778_21780 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__21779_21781 = ((function (G__21778_21780){
return (function (db,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("data:text/json;charset=utf-8,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__21778_21780))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21778_21780,G__21779_21781) : re_frame.core.reg_sub.call(null,G__21778_21780,G__21779_21781));
var G__21782_21784 = cljs.core.cst$kw$change_DASH_sets;
var G__21783_21785 = ((function (G__21782_21784){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__21782_21784))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21782_21784,G__21783_21785) : re_frame.core.reg_sub.call(null,G__21782_21784,G__21783_21785));
