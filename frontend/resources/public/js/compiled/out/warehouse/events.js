// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.events');
goog.require('cljs.core');
goog.require('warehouse.change_set');
goog.require('ajax.core');
goog.require('warehouse.component_import.db');
goog.require('warehouse.util');
goog.require('warehouse.notifications.db');
goog.require('warehouse.storage.storage');
goog.require('re_frame.core');
warehouse.events.default_state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$change_DASH_sets,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,"",cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$processes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$show_DASH_nav,false,cljs.core.cst$kw$page,"index"], null);
warehouse.events.process_create = (function warehouse$events$process_create(p__15244,p__15245){
var map__15251 = p__15244;
var map__15251__$1 = ((((!((map__15251 == null)))?((((map__15251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15251):map__15251);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15251__$1,cljs.core.cst$kw$db);
var vec__15252 = p__15245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$pending], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
if(typeof warehouse.events.run_process !== 'undefined'){
} else {
warehouse.events.run_process = (function (){var method_table__7605__auto__ = (function (){var G__15257 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15257) : cljs.core.atom.call(null,G__15257));
})();
var prefer_table__7606__auto__ = (function (){var G__15258 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15258) : cljs.core.atom.call(null,G__15258));
})();
var method_cache__7607__auto__ = (function (){var G__15259 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15259) : cljs.core.atom.call(null,G__15259));
})();
var cached_hierarchy__7608__auto__ = (function (){var G__15260 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15260) : cljs.core.atom.call(null,G__15260));
})();
var hierarchy__7609__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("warehouse.events","run-process"),((function (method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__,hierarchy__7609__auto__){
return (function (p1__15256_SHARP_){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__15256_SHARP_);
});})(method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__,hierarchy__7609__auto__))
,cljs.core.cst$kw$default,hierarchy__7609__auto__,method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__));
})();
}
warehouse.events.run_process.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$xhr,(function (process){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(process),cljs.core.array_seq([cljs.core.cst$kw$params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),cljs.core.cst$kw$handler,(function (response){
var G__15261_15264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,"Import succeeded"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15261_15264) : re_frame.core.dispatch.call(null,G__15261_15264));

var G__15262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_document,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,response], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15262) : re_frame.core.dispatch.call(null,G__15262));
}),cljs.core.cst$kw$error_DASH_handler,(function (){
var G__15263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"Import failed"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15263) : re_frame.core.dispatch.call(null,G__15263));
})], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__15265){
var vec__15266 = p__15265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15266,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15266,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__15269){
var vec__15270 = p__15269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15270,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15270,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
var G__15273_15275 = cljs.core.cst$kw$process;
var G__15274_15276 = ((function (G__15273_15275){
return (function (process){
return (warehouse.events.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.events.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.events.run_process.call(null,process));
});})(G__15273_15275))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15273_15275,G__15274_15276) : re_frame.core.reg_fx.call(null,G__15273_15275,G__15274_15276));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_create,warehouse.events.process_create);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__15277){
var vec__15278 = p__15277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__15281_15283 = cljs.core.cst$kw$state;
var G__15282_15284 = ((function (G__15281_15283){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null));
});})(G__15281_15283))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__15281_15283,G__15282_15284) : re_frame.core.reg_cofx.call(null,G__15281_15283,G__15282_15284));
var G__15285_15287 = cljs.core.cst$kw$change_DASH_sets;
var G__15286_15288 = ((function (G__15285_15287){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(warehouse.change_set.change_sets) : cljs.core.deref.call(null,warehouse.change_set.change_sets)));
});})(G__15285_15287))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__15285_15287,G__15286_15288) : re_frame.core.reg_cofx.call(null,G__15285_15287,G__15286_15288));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15289 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__15289) : re_frame.core.inject_cofx.call(null,G__15289));
})(),(function (){var G__15290 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__15290) : re_frame.core.inject_cofx.call(null,G__15290));
})()], null),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,warehouse.component_import.db.load_providers(warehouse.util.document__GT_state(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx))))], null);
}));
var G__15291_15293 = cljs.core.cst$kw$change_DASH_sets;
var G__15292_15294 = ((function (G__15291_15293){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.change_set.change_sets,value) : cljs.core.reset_BANG_.call(null,warehouse.change_set.change_sets,value));
}
});})(G__15291_15293))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15291_15293,G__15292_15294) : re_frame.core.reg_fx.call(null,G__15291_15293,G__15292_15294));
var G__15295_15297 = cljs.core.cst$kw$state;
var G__15296_15298 = ((function (G__15295_15297){
return (function (value){
return cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null,value);
});})(G__15295_15297))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15295_15297,G__15296_15298) : re_frame.core.reg_fx.call(null,G__15295_15297,G__15296_15298));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__15299){
var vec__15300 = p__15299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15300,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15300,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15300,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (cofx,p__15303){
var vec__15304 = p__15303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15304,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15304,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15304,(2),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,warehouse.events.normalize_item(item));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (cofx,p__15307){
var vec__15308 = p__15307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(1),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var k = warehouse.util.next_key(old_components);
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,k));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__15311){
var vec__15312 = p__15311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15312,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15312,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15312,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15312,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__15315 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15315) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__15317){
var vec__15318 = p__15317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
