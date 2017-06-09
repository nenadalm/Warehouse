// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('clojure.string');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__16315){
var map__16318 = p__16315;
var map__16318__$1 = ((((!((map__16318 == null)))?((((map__16318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16318):map__16318);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16318__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16318__$1,cljs.core.cst$kw$type);
if(cljs.core.truth_((function (){var and__7014__auto__ = secret;
if(cljs.core.truth_(and__7014__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",type);
} else {
return and__7014__auto__;
}
})())){
return "password";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",type)){
return "text";
} else {
return null;
}
}
});
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__16320){
var map__16323 = p__16320;
var map__16323__$1 = ((((!((map__16323 == null)))?((((map__16323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16323):map__16323);
var handler_item = map__16323__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16323__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__16325,_){
var map__16326 = p__16325;
var map__16326__$1 = ((((!((map__16326 == null)))?((((map__16326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16326):map__16326);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16326__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/handler")].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__16328){
var vec__16329 = p__16328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16329,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16329,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__16332){
var vec__16333 = p__16332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16333,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16333,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (cofx,p__16336){
var vec__16337 = p__16336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(1),null);
var db = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx);
var new_db = warehouse.util.document__GT_state(warehouse.util.merge_documents(warehouse.util.state__GT_document(db),document),db);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(new_db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
