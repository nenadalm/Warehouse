// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.events');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('warehouse.change_set');
goog.require('warehouse.storage.storage');
goog.require('warehouse.notifications.db');
goog.require('ajax.core');
goog.require('re_frame.core');
warehouse.events.default_state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$change_DASH_sets,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,"",cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$processes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$show_DASH_nav,false,cljs.core.cst$kw$page,"index"], null);
warehouse.events.process_create = (function warehouse$events$process_create(p__15227,p__15228){
var map__15234 = p__15227;
var map__15234__$1 = ((((!((map__15234 == null)))?((((map__15234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15234):map__15234);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15234__$1,cljs.core.cst$kw$db);
var vec__15235 = p__15228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15235,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15235,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$pending], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
if(typeof warehouse.events.run_process !== 'undefined'){
} else {
warehouse.events.run_process = (function (){var method_table__7605__auto__ = (function (){var G__15240 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15240) : cljs.core.atom.call(null,G__15240));
})();
var prefer_table__7606__auto__ = (function (){var G__15241 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15241) : cljs.core.atom.call(null,G__15241));
})();
var method_cache__7607__auto__ = (function (){var G__15242 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15242) : cljs.core.atom.call(null,G__15242));
})();
var cached_hierarchy__7608__auto__ = (function (){var G__15243 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15243) : cljs.core.atom.call(null,G__15243));
})();
var hierarchy__7609__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("warehouse.events","run-process"),((function (method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__,hierarchy__7609__auto__){
return (function (p1__15239_SHARP_){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__15239_SHARP_);
});})(method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__,hierarchy__7609__auto__))
,cljs.core.cst$kw$default,hierarchy__7609__auto__,method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__));
})();
}
warehouse.events.run_process.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$xhr,(function (process){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(process),cljs.core.array_seq([cljs.core.cst$kw$params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),cljs.core.cst$kw$handler,(function (response){
var G__15244_15247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,"Import succeeded"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15244_15247) : re_frame.core.dispatch.call(null,G__15244_15247));

var G__15245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_document,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,response], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15245) : re_frame.core.dispatch.call(null,G__15245));
}),cljs.core.cst$kw$error_DASH_handler,(function (){
var G__15246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"Import failed"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15246) : re_frame.core.dispatch.call(null,G__15246));
})], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__15248){
var vec__15249 = p__15248;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15249,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15249,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__15252){
var vec__15253 = p__15252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15253,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15253,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
var G__15256_15258 = cljs.core.cst$kw$process;
var G__15257_15259 = ((function (G__15256_15258){
return (function (process){
return (warehouse.events.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.events.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.events.run_process.call(null,process));
});})(G__15256_15258))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15256_15258,G__15257_15259) : re_frame.core.reg_fx.call(null,G__15256_15258,G__15257_15259));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_create,warehouse.events.process_create);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__15260){
var vec__15261 = p__15260;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15261,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15261,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__15264_15266 = cljs.core.cst$kw$state;
var G__15265_15267 = ((function (G__15264_15266){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null));
});})(G__15264_15266))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__15264_15266,G__15265_15267) : re_frame.core.reg_cofx.call(null,G__15264_15266,G__15265_15267));
var G__15268_15270 = cljs.core.cst$kw$change_DASH_sets;
var G__15269_15271 = ((function (G__15268_15270){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(warehouse.change_set.change_sets) : cljs.core.deref.call(null,warehouse.change_set.change_sets)));
});})(G__15268_15270))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__15268_15270,G__15269_15271) : re_frame.core.reg_cofx.call(null,G__15268_15270,G__15269_15271));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15272 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__15272) : re_frame.core.inject_cofx.call(null,G__15272));
})(),(function (){var G__15273 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__15273) : re_frame.core.inject_cofx.call(null,G__15273));
})()], null),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,warehouse.util.document__GT_state(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)))], null);
}));
var G__15274_15276 = cljs.core.cst$kw$change_DASH_sets;
var G__15275_15277 = ((function (G__15274_15276){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.change_set.change_sets,value) : cljs.core.reset_BANG_.call(null,warehouse.change_set.change_sets,value));
}
});})(G__15274_15276))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15274_15276,G__15275_15277) : re_frame.core.reg_fx.call(null,G__15274_15276,G__15275_15277));
var G__15278_15280 = cljs.core.cst$kw$state;
var G__15279_15281 = ((function (G__15278_15280){
return (function (value){
return cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null,value);
});})(G__15278_15280))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15278_15280,G__15279_15281) : re_frame.core.reg_fx.call(null,G__15278_15280,G__15279_15281));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__15282){
var vec__15283 = p__15282;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15283,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15283,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15283,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (cofx,p__15286){
var vec__15287 = p__15286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15287,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15287,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15287,(2),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,warehouse.events.normalize_item(item));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (cofx,p__15290){
var vec__15291 = p__15290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15291,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15291,(1),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var k = warehouse.util.next_key(old_components);
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,k));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__15294){
var vec__15295 = p__15294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__15298 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15298) {
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__15300){
var vec__15301 = p__15300;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
