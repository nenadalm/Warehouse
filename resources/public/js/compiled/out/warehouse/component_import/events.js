// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__30193){
var vec__30194 = p__30193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30194,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30194,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"username",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$label,"Username"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"password",cljs.core.cst$kw$type,"password",cljs.core.cst$kw$label,"Password"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"url",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$label,"Url"], null)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (cofx,p__30197){
var vec__30198 = p__30197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30198,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30198,(1),null);
var db = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx);
var new_db = warehouse.util.document__GT_state(warehouse.util.merge_documents(warehouse.util.state__GT_document(db),document),db);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(new_db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
