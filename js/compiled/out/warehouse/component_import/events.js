// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.storage.indexeddb');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__12303){
var map__12304 = p__12303;
var map__12304__$1 = ((((!((map__12304 == null)))?(((((map__12304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12304):map__12304);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12304__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12304__$1,cljs.core.cst$kw$type);
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__12306){
var map__12307 = p__12306;
var map__12307__$1 = ((((!((map__12307 == null)))?(((((map__12307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12307):map__12307);
var handler_item = map__12307__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12307__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__12309,_){
var map__12310 = p__12309;
var map__12310__$1 = ((((!((map__12310 == null)))?(((((map__12310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12310):map__12310);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12310__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),"/handler"].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__12312){
var vec__12313 = p__12312;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12313,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12313,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__12316){
var vec__12317 = p__12316;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12317,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12317,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (_,p__12320){
var vec__12321 = p__12320;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__12324_12352 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__12325_12353 = ((function (G__12324_12352){
return (function (p__12326){
var vec__12327 = p__12326;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12327,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12327,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12327,ids,document,G__12324_12352){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12327,ids,document,G__12324_12352){
return (function (state_12341){
var state_val_12342 = (state_12341[(1)]);
if((state_val_12342 === (1))){
var state_12341__$1 = state_12341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12341__$1,(2),ch);
} else {
if((state_val_12342 === (2))){
var inst_12331 = (state_12341[(7)]);
var inst_12331__$1 = (state_12341[(2)]);
var state_12341__$1 = (function (){var statearr_12343 = state_12341;
(statearr_12343[(7)] = inst_12331__$1);

return statearr_12343;
})();
if(cljs.core.truth_(inst_12331__$1)){
var statearr_12344_12354 = state_12341__$1;
(statearr_12344_12354[(1)] = (3));

} else {
var statearr_12345_12355 = state_12341__$1;
(statearr_12345_12355[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12342 === (3))){
var inst_12331 = (state_12341[(7)]);
var inst_12333 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12334 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_12331,document];
var inst_12335 = (new cljs.core.PersistentVector(null,3,(5),inst_12333,inst_12334,null));
var inst_12336 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12335) : re_frame.core.dispatch.call(null,inst_12335));
var state_12341__$1 = state_12341;
var statearr_12346_12356 = state_12341__$1;
(statearr_12346_12356[(2)] = inst_12336);

(statearr_12346_12356[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12342 === (4))){
var state_12341__$1 = state_12341;
var statearr_12347_12357 = state_12341__$1;
(statearr_12347_12357[(2)] = null);

(statearr_12347_12357[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12342 === (5))){
var inst_12339 = (state_12341[(2)]);
var state_12341__$1 = state_12341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12341__$1,inst_12339);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12327,ids,document,G__12324_12352))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12327,ids,document,G__12324_12352){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12348 = [null,null,null,null,null,null,null,null];
(statearr_12348[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12348[(1)] = (1));

return statearr_12348;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12341){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12341);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12349){if((e12349 instanceof Object)){
var ex__9324__auto__ = e12349;
var statearr_12350_12358 = state_12341;
(statearr_12350_12358[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12341);

return cljs.core.cst$kw$recur;
} else {
throw e12349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12359 = state_12341;
state_12341 = G__12359;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12341){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12327,ids,document,G__12324_12352))
})();
var state__9425__auto__ = (function (){var statearr_12351 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12351[(6)] = c__9423__auto__);

return statearr_12351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12327,ids,document,G__12324_12352))
);

return c__9423__auto__;
});})(G__12324_12352))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12324_12352,G__12325_12353) : re_frame.core.reg_fx.call(null,G__12324_12352,G__12325_12353));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__12360){
var vec__12361 = p__12360;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12361,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12361,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12361,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12364_12380 = cljs.core.cst$kw$store_DASH_components;
var G__12365_12381 = ((function (G__12364_12380){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12364_12380){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12364_12380){
return (function (state_12373){
var state_val_12374 = (state_12373[(1)]);
if((state_val_12374 === (1))){
var state_12373__$1 = state_12373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12373__$1,(2),ch);
} else {
if((state_val_12374 === (2))){
var inst_12367 = (state_12373[(2)]);
var inst_12368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12369 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12370 = (new cljs.core.PersistentVector(null,1,(5),inst_12368,inst_12369,null));
var inst_12371 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12370) : re_frame.core.dispatch.call(null,inst_12370));
var state_12373__$1 = (function (){var statearr_12375 = state_12373;
(statearr_12375[(7)] = inst_12367);

return statearr_12375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12373__$1,inst_12371);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12364_12380))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12364_12380){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12376 = [null,null,null,null,null,null,null,null];
(statearr_12376[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12376[(1)] = (1));

return statearr_12376;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12373){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12373);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12377){if((e12377 instanceof Object)){
var ex__9324__auto__ = e12377;
var statearr_12378_12382 = state_12373;
(statearr_12378_12382[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12373);

return cljs.core.cst$kw$recur;
} else {
throw e12377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12383 = state_12373;
state_12373 = G__12383;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12373){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12364_12380))
})();
var state__9425__auto__ = (function (){var statearr_12379 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12379[(6)] = c__9423__auto__);

return statearr_12379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12364_12380))
);

return c__9423__auto__;
});})(G__12364_12380))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12364_12380,G__12365_12381) : re_frame.core.reg_fx.call(null,G__12364_12380,G__12365_12381));
