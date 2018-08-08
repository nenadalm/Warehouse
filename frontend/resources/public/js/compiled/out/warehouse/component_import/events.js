// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.storage.indexeddb');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__12414){
var map__12415 = p__12414;
var map__12415__$1 = ((((!((map__12415 == null)))?(((((map__12415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12415):map__12415);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12415__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12415__$1,cljs.core.cst$kw$type);
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__12417){
var map__12418 = p__12417;
var map__12418__$1 = ((((!((map__12418 == null)))?(((((map__12418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12418):map__12418);
var handler_item = map__12418__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12418__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__12420,_){
var map__12421 = p__12420;
var map__12421__$1 = ((((!((map__12421 == null)))?(((((map__12421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12421):map__12421);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12421__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),"/handler"].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__12423){
var vec__12424 = p__12423;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12424,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12424,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__12427){
var vec__12428 = p__12427;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (_,p__12431){
var vec__12432 = p__12431;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12432,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12432,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__12435_12463 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__12436_12464 = ((function (G__12435_12463){
return (function (p__12437){
var vec__12438 = p__12437;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12438,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12438,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12438,ids,document,G__12435_12463){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12438,ids,document,G__12435_12463){
return (function (state_12452){
var state_val_12453 = (state_12452[(1)]);
if((state_val_12453 === (1))){
var state_12452__$1 = state_12452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12452__$1,(2),ch);
} else {
if((state_val_12453 === (2))){
var inst_12442 = (state_12452[(7)]);
var inst_12442__$1 = (state_12452[(2)]);
var state_12452__$1 = (function (){var statearr_12454 = state_12452;
(statearr_12454[(7)] = inst_12442__$1);

return statearr_12454;
})();
if(cljs.core.truth_(inst_12442__$1)){
var statearr_12455_12465 = state_12452__$1;
(statearr_12455_12465[(1)] = (3));

} else {
var statearr_12456_12466 = state_12452__$1;
(statearr_12456_12466[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12453 === (3))){
var inst_12442 = (state_12452[(7)]);
var inst_12444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12445 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_12442,document];
var inst_12446 = (new cljs.core.PersistentVector(null,3,(5),inst_12444,inst_12445,null));
var inst_12447 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12446) : re_frame.core.dispatch.call(null,inst_12446));
var state_12452__$1 = state_12452;
var statearr_12457_12467 = state_12452__$1;
(statearr_12457_12467[(2)] = inst_12447);

(statearr_12457_12467[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12453 === (4))){
var state_12452__$1 = state_12452;
var statearr_12458_12468 = state_12452__$1;
(statearr_12458_12468[(2)] = null);

(statearr_12458_12468[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12453 === (5))){
var inst_12450 = (state_12452[(2)]);
var state_12452__$1 = state_12452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12452__$1,inst_12450);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12438,ids,document,G__12435_12463))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12438,ids,document,G__12435_12463){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12459 = [null,null,null,null,null,null,null,null];
(statearr_12459[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12459[(1)] = (1));

return statearr_12459;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12452){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12452);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12460){if((e12460 instanceof Object)){
var ex__9324__auto__ = e12460;
var statearr_12461_12469 = state_12452;
(statearr_12461_12469[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12452);

return cljs.core.cst$kw$recur;
} else {
throw e12460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12470 = state_12452;
state_12452 = G__12470;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12452){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12438,ids,document,G__12435_12463))
})();
var state__9425__auto__ = (function (){var statearr_12462 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12462[(6)] = c__9423__auto__);

return statearr_12462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12438,ids,document,G__12435_12463))
);

return c__9423__auto__;
});})(G__12435_12463))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12435_12463,G__12436_12464) : re_frame.core.reg_fx.call(null,G__12435_12463,G__12436_12464));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__12471){
var vec__12472 = p__12471;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12472,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12472,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12472,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12475_12491 = cljs.core.cst$kw$store_DASH_components;
var G__12476_12492 = ((function (G__12475_12491){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12475_12491){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12475_12491){
return (function (state_12484){
var state_val_12485 = (state_12484[(1)]);
if((state_val_12485 === (1))){
var state_12484__$1 = state_12484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12484__$1,(2),ch);
} else {
if((state_val_12485 === (2))){
var inst_12478 = (state_12484[(2)]);
var inst_12479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12480 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12481 = (new cljs.core.PersistentVector(null,1,(5),inst_12479,inst_12480,null));
var inst_12482 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12481) : re_frame.core.dispatch.call(null,inst_12481));
var state_12484__$1 = (function (){var statearr_12486 = state_12484;
(statearr_12486[(7)] = inst_12478);

return statearr_12486;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12484__$1,inst_12482);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12475_12491))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12475_12491){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12487 = [null,null,null,null,null,null,null,null];
(statearr_12487[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12487[(1)] = (1));

return statearr_12487;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12484){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12484);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12488){if((e12488 instanceof Object)){
var ex__9324__auto__ = e12488;
var statearr_12489_12493 = state_12484;
(statearr_12489_12493[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12484);

return cljs.core.cst$kw$recur;
} else {
throw e12488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12494 = state_12484;
state_12484 = G__12494;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12484){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12475_12491))
})();
var state__9425__auto__ = (function (){var statearr_12490 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12490[(6)] = c__9423__auto__);

return statearr_12490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12475_12491))
);

return c__9423__auto__;
});})(G__12475_12491))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12475_12491,G__12476_12492) : re_frame.core.reg_fx.call(null,G__12475_12491,G__12476_12492));
