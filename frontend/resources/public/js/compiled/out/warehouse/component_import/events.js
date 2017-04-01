// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
goog.require('ajax.core');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__14858){
var map__14861 = p__14858;
var map__14861__$1 = ((((!((map__14861 == null)))?((((map__14861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14861):map__14861);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14861__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14861__$1,cljs.core.cst$kw$type);
if(cljs.core.truth_((function (){var and__6665__auto__ = secret;
if(cljs.core.truth_(and__6665__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",type);
} else {
return and__6665__auto__;
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__14863){
var map__14866 = p__14863;
var map__14866__$1 = ((((!((map__14866 == null)))?((((map__14866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14866):map__14866);
var handler_item = map__14866__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14866__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (db,_){
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/handler",cljs.core.array_seq([cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),cljs.core.cst$kw$handler,(function (response){
var G__14868_14871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,"Loading of import providers succeeded"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14868_14871) : re_frame.core.dispatch.call(null,G__14868_14871));

var G__14869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_providers,response], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14869) : re_frame.core.dispatch.call(null,G__14869));
}),cljs.core.cst$kw$error_DASH_handler,(function (){
var G__14870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"Loading of import providers failed"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14870) : re_frame.core.dispatch.call(null,G__14870));
})], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__14872){
var vec__14873 = p__14872;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14873,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14873,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__14876){
var vec__14877 = p__14876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (cofx,p__14880){
var vec__14881 = p__14880;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14881,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14881,(1),null);
var db = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx);
var new_db = warehouse.util.document__GT_state(warehouse.util.merge_documents(warehouse.util.state__GT_document(db),document),db);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(new_db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
