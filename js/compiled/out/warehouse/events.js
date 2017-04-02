// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.events');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('warehouse.change_set');
goog.require('warehouse.storage.storage');
goog.require('warehouse.notifications.db');
goog.require('warehouse.component_import.db');
goog.require('re_frame.core');
warehouse.events.default_state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$change_DASH_sets,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,"",cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$processes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$show_DASH_nav,false,cljs.core.cst$kw$page,"index"], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__15315){
var vec__15316 = p__15315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__15319){
var vec__15320 = p__15319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15320,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15320,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__15323){
var vec__15324 = p__15323;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__15327_15329 = cljs.core.cst$kw$state;
var G__15328_15330 = ((function (G__15327_15329){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null));
});})(G__15327_15329))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__15327_15329,G__15328_15330) : re_frame.core.reg_cofx.call(null,G__15327_15329,G__15328_15330));
var G__15331_15333 = cljs.core.cst$kw$change_DASH_sets;
var G__15332_15334 = ((function (G__15331_15333){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(warehouse.change_set.change_sets) : cljs.core.deref.call(null,warehouse.change_set.change_sets)));
});})(G__15331_15333))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__15331_15333,G__15332_15334) : re_frame.core.reg_cofx.call(null,G__15331_15333,G__15332_15334));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15335 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__15335) : re_frame.core.inject_cofx.call(null,G__15335));
})(),(function (){var G__15336 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__15336) : re_frame.core.inject_cofx.call(null,G__15336));
})()], null),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,warehouse.component_import.db.load_providers(warehouse.util.document__GT_state(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx))))], null);
}));
var G__15337_15339 = cljs.core.cst$kw$change_DASH_sets;
var G__15338_15340 = ((function (G__15337_15339){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.change_set.change_sets,value) : cljs.core.reset_BANG_.call(null,warehouse.change_set.change_sets,value));
}
});})(G__15337_15339))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15337_15339,G__15338_15340) : re_frame.core.reg_fx.call(null,G__15337_15339,G__15338_15340));
var G__15341_15343 = cljs.core.cst$kw$state;
var G__15342_15344 = ((function (G__15341_15343){
return (function (value){
return cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null,value);
});})(G__15341_15343))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15341_15343,G__15342_15344) : re_frame.core.reg_fx.call(null,G__15341_15343,G__15342_15344));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__15345){
var vec__15346 = p__15345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15346,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15346,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15346,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (cofx,p__15349){
var vec__15350 = p__15349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15350,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15350,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15350,(2),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,warehouse.events.normalize_item(item));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (cofx,p__15353){
var vec__15354 = p__15353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15354,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15354,(1),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var k = warehouse.util.next_key(old_components);
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,k));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__15357){
var vec__15358 = p__15357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15358,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15358,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15358,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15358,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__15361 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15361) {
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__15363){
var vec__15364 = p__15363;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
