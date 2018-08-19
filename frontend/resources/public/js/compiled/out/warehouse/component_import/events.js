// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.storage.indexeddb');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__12398){
var map__12399 = p__12398;
var map__12399__$1 = ((((!((map__12399 == null)))?(((((map__12399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12399):map__12399);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12399__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12399__$1,cljs.core.cst$kw$type);
if(cljs.core.truth_((function (){var and__3938__auto__ = secret;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",type);
} else {
return and__3938__auto__;
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__12401){
var map__12402 = p__12401;
var map__12402__$1 = ((((!((map__12402 == null)))?(((((map__12402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12402):map__12402);
var handler_item = map__12402__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12402__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__12404,_){
var map__12405 = p__12404;
var map__12405__$1 = ((((!((map__12405 == null)))?(((((map__12405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12405):map__12405);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12405__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),"/handler"].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__12407){
var vec__12408 = p__12407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__12411){
var vec__12412 = p__12411;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (_,p__12415){
var vec__12416 = p__12415;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12416,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12416,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__12419_12447 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__12420_12448 = ((function (G__12419_12447){
return (function (p__12421){
var vec__12422 = p__12421;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12422,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12422,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12422,ids,document,G__12419_12447){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12422,ids,document,G__12419_12447){
return (function (state_12436){
var state_val_12437 = (state_12436[(1)]);
if((state_val_12437 === (1))){
var state_12436__$1 = state_12436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12436__$1,(2),ch);
} else {
if((state_val_12437 === (2))){
var inst_12426 = (state_12436[(7)]);
var inst_12426__$1 = (state_12436[(2)]);
var state_12436__$1 = (function (){var statearr_12438 = state_12436;
(statearr_12438[(7)] = inst_12426__$1);

return statearr_12438;
})();
if(cljs.core.truth_(inst_12426__$1)){
var statearr_12439_12449 = state_12436__$1;
(statearr_12439_12449[(1)] = (3));

} else {
var statearr_12440_12450 = state_12436__$1;
(statearr_12440_12450[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12437 === (3))){
var inst_12426 = (state_12436[(7)]);
var inst_12428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12429 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_12426,document];
var inst_12430 = (new cljs.core.PersistentVector(null,3,(5),inst_12428,inst_12429,null));
var inst_12431 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12430) : re_frame.core.dispatch.call(null,inst_12430));
var state_12436__$1 = state_12436;
var statearr_12441_12451 = state_12436__$1;
(statearr_12441_12451[(2)] = inst_12431);

(statearr_12441_12451[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12437 === (4))){
var state_12436__$1 = state_12436;
var statearr_12442_12452 = state_12436__$1;
(statearr_12442_12452[(2)] = null);

(statearr_12442_12452[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12437 === (5))){
var inst_12434 = (state_12436[(2)]);
var state_12436__$1 = state_12436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12436__$1,inst_12434);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12422,ids,document,G__12419_12447))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12422,ids,document,G__12419_12447){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12443 = [null,null,null,null,null,null,null,null];
(statearr_12443[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12443[(1)] = (1));

return statearr_12443;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12436){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12436);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12444){if((e12444 instanceof Object)){
var ex__9324__auto__ = e12444;
var statearr_12445_12453 = state_12436;
(statearr_12445_12453[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12436);

return cljs.core.cst$kw$recur;
} else {
throw e12444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12454 = state_12436;
state_12436 = G__12454;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12436){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12422,ids,document,G__12419_12447))
})();
var state__9425__auto__ = (function (){var statearr_12446 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12446[(6)] = c__9423__auto__);

return statearr_12446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12422,ids,document,G__12419_12447))
);

return c__9423__auto__;
});})(G__12419_12447))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12419_12447,G__12420_12448) : re_frame.core.reg_fx.call(null,G__12419_12447,G__12420_12448));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__12455){
var vec__12456 = p__12455;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12456,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12456,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12456,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12459_12475 = cljs.core.cst$kw$store_DASH_components;
var G__12460_12476 = ((function (G__12459_12475){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12459_12475){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12459_12475){
return (function (state_12468){
var state_val_12469 = (state_12468[(1)]);
if((state_val_12469 === (1))){
var state_12468__$1 = state_12468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12468__$1,(2),ch);
} else {
if((state_val_12469 === (2))){
var inst_12462 = (state_12468[(2)]);
var inst_12463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12464 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12465 = (new cljs.core.PersistentVector(null,1,(5),inst_12463,inst_12464,null));
var inst_12466 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12465) : re_frame.core.dispatch.call(null,inst_12465));
var state_12468__$1 = (function (){var statearr_12470 = state_12468;
(statearr_12470[(7)] = inst_12462);

return statearr_12470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12468__$1,inst_12466);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12459_12475))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12459_12475){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12471 = [null,null,null,null,null,null,null,null];
(statearr_12471[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12471[(1)] = (1));

return statearr_12471;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12468){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12468);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12472){if((e12472 instanceof Object)){
var ex__9324__auto__ = e12472;
var statearr_12473_12477 = state_12468;
(statearr_12473_12477[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12468);

return cljs.core.cst$kw$recur;
} else {
throw e12472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12478 = state_12468;
state_12468 = G__12478;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12468){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12459_12475))
})();
var state__9425__auto__ = (function (){var statearr_12474 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12474[(6)] = c__9423__auto__);

return statearr_12474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12459_12475))
);

return c__9423__auto__;
});})(G__12459_12475))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12459_12475,G__12460_12476) : re_frame.core.reg_fx.call(null,G__12459_12475,G__12460_12476));
