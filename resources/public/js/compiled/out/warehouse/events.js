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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__30595){
var vec__30596 = p__30595;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"username",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$label,"Username"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"password",cljs.core.cst$kw$type,"password",cljs.core.cst$kw$label,"Password"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"url",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$label,"Url"], null)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
warehouse.events.process_create = (function warehouse$events$process_create(p__30599,p__30600){
var map__30606 = p__30599;
var map__30606__$1 = ((((!((map__30606 == null)))?((((map__30606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30606):map__30606);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30606__$1,cljs.core.cst$kw$db);
var vec__30607 = p__30600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$pending], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
if(typeof warehouse.events.run_process !== 'undefined'){
} else {
warehouse.events.run_process = (function (){var method_table__7512__auto__ = (function (){var G__30612 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30612) : cljs.core.atom.call(null,G__30612));
})();
var prefer_table__7513__auto__ = (function (){var G__30613 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30613) : cljs.core.atom.call(null,G__30613));
})();
var method_cache__7514__auto__ = (function (){var G__30614 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30614) : cljs.core.atom.call(null,G__30614));
})();
var cached_hierarchy__7515__auto__ = (function (){var G__30615 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30615) : cljs.core.atom.call(null,G__30615));
})();
var hierarchy__7516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("warehouse.events","run-process"),((function (method_table__7512__auto__,prefer_table__7513__auto__,method_cache__7514__auto__,cached_hierarchy__7515__auto__,hierarchy__7516__auto__){
return (function (p1__30611_SHARP_){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__30611_SHARP_);
});})(method_table__7512__auto__,prefer_table__7513__auto__,method_cache__7514__auto__,cached_hierarchy__7515__auto__,hierarchy__7516__auto__))
,cljs.core.cst$kw$default,hierarchy__7516__auto__,method_table__7512__auto__,prefer_table__7513__auto__,method_cache__7514__auto__,cached_hierarchy__7515__auto__));
})();
}
warehouse.events.run_process.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$xhr,(function (process){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(process),cljs.core.array_seq([cljs.core.cst$kw$params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),cljs.core.cst$kw$handler,(function (response){
var G__30616_30619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,"Import succeeded"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30616_30619) : re_frame.core.dispatch.call(null,G__30616_30619));

var G__30617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_document,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,response], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30617) : re_frame.core.dispatch.call(null,G__30617));
}),cljs.core.cst$kw$error_DASH_handler,(function (){
var G__30618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"Import failed"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30618) : re_frame.core.dispatch.call(null,G__30618));
})], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__30620){
var vec__30621 = p__30620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__30624){
var vec__30625 = p__30624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30625,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30625,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
var G__30628_30630 = cljs.core.cst$kw$process;
var G__30629_30631 = ((function (G__30628_30630){
return (function (process){
return (warehouse.events.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.events.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.events.run_process.call(null,process));
});})(G__30628_30630))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__30628_30630,G__30629_30631) : re_frame.core.reg_fx.call(null,G__30628_30630,G__30629_30631));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_create,warehouse.events.process_create);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__30632){
var vec__30633 = p__30632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30633,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30633,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (cofx,p__30636){
var vec__30637 = p__30636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30637,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30637,(1),null);
var db = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx);
var new_db = warehouse.util.document__GT_state(warehouse.util.merge_documents(warehouse.util.state__GT_document(db),document),db);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(new_db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__30640_30642 = cljs.core.cst$kw$state;
var G__30641_30643 = ((function (G__30640_30642){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null));
});})(G__30640_30642))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__30640_30642,G__30641_30643) : re_frame.core.reg_cofx.call(null,G__30640_30642,G__30641_30643));
var G__30644_30646 = cljs.core.cst$kw$change_DASH_sets;
var G__30645_30647 = ((function (G__30644_30646){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(warehouse.change_set.change_sets) : cljs.core.deref.call(null,warehouse.change_set.change_sets)));
});})(G__30644_30646))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__30644_30646,G__30645_30647) : re_frame.core.reg_cofx.call(null,G__30644_30646,G__30645_30647));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30648 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__30648) : re_frame.core.inject_cofx.call(null,G__30648));
})(),(function (){var G__30649 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__30649) : re_frame.core.inject_cofx.call(null,G__30649));
})()], null),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,warehouse.util.document__GT_state(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)))], null);
}));
var G__30650_30652 = cljs.core.cst$kw$change_DASH_sets;
var G__30651_30653 = ((function (G__30650_30652){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.change_set.change_sets,value) : cljs.core.reset_BANG_.call(null,warehouse.change_set.change_sets,value));
}
});})(G__30650_30652))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__30650_30652,G__30651_30653) : re_frame.core.reg_fx.call(null,G__30650_30652,G__30651_30653));
var G__30654_30656 = cljs.core.cst$kw$state;
var G__30655_30657 = ((function (G__30654_30656){
return (function (value){
return cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null,value);
});})(G__30654_30656))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__30654_30656,G__30655_30657) : re_frame.core.reg_fx.call(null,G__30654_30656,G__30655_30657));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__30658){
var vec__30659 = p__30658;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30659,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30659,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30659,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (cofx,p__30662){
var vec__30663 = p__30662;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30663,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30663,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30663,(2),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,warehouse.events.normalize_item(item));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (cofx,p__30666){
var vec__30667 = p__30666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30667,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30667,(1),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var k = warehouse.util.next_key(old_components);
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,k));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__30670){
var vec__30671 = p__30670;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30671,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30671,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30671,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30671,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__30674 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30674) {
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__30676){
var vec__30677 = p__30676;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30677,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30677,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
