// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.storage.indexeddb');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__12281){
var map__12282 = p__12281;
var map__12282__$1 = ((((!((map__12282 == null)))?(((((map__12282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12282):map__12282);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12282__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12282__$1,cljs.core.cst$kw$type);
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__12284){
var map__12285 = p__12284;
var map__12285__$1 = ((((!((map__12285 == null)))?(((((map__12285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12285):map__12285);
var handler_item = map__12285__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12285__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__12287,_){
var map__12288 = p__12287;
var map__12288__$1 = ((((!((map__12288 == null)))?(((((map__12288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12288):map__12288);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12288__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),"/handler"].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__12290){
var vec__12291 = p__12290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__12294){
var vec__12295 = p__12294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12295,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12295,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (_,p__12298){
var vec__12299 = p__12298;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12299,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12299,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__12302_12330 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__12303_12331 = ((function (G__12302_12330){
return (function (p__12304){
var vec__12305 = p__12304;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12305,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12305,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12305,ids,document,G__12302_12330){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12305,ids,document,G__12302_12330){
return (function (state_12319){
var state_val_12320 = (state_12319[(1)]);
if((state_val_12320 === (1))){
var state_12319__$1 = state_12319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12319__$1,(2),ch);
} else {
if((state_val_12320 === (2))){
var inst_12309 = (state_12319[(7)]);
var inst_12309__$1 = (state_12319[(2)]);
var state_12319__$1 = (function (){var statearr_12321 = state_12319;
(statearr_12321[(7)] = inst_12309__$1);

return statearr_12321;
})();
if(cljs.core.truth_(inst_12309__$1)){
var statearr_12322_12332 = state_12319__$1;
(statearr_12322_12332[(1)] = (3));

} else {
var statearr_12323_12333 = state_12319__$1;
(statearr_12323_12333[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12320 === (3))){
var inst_12309 = (state_12319[(7)]);
var inst_12311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12312 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_12309,document];
var inst_12313 = (new cljs.core.PersistentVector(null,3,(5),inst_12311,inst_12312,null));
var inst_12314 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12313) : re_frame.core.dispatch.call(null,inst_12313));
var state_12319__$1 = state_12319;
var statearr_12324_12334 = state_12319__$1;
(statearr_12324_12334[(2)] = inst_12314);

(statearr_12324_12334[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12320 === (4))){
var state_12319__$1 = state_12319;
var statearr_12325_12335 = state_12319__$1;
(statearr_12325_12335[(2)] = null);

(statearr_12325_12335[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12320 === (5))){
var inst_12317 = (state_12319[(2)]);
var state_12319__$1 = state_12319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12319__$1,inst_12317);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12305,ids,document,G__12302_12330))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12305,ids,document,G__12302_12330){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12326 = [null,null,null,null,null,null,null,null];
(statearr_12326[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12326[(1)] = (1));

return statearr_12326;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12319){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12319);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12327){if((e12327 instanceof Object)){
var ex__9324__auto__ = e12327;
var statearr_12328_12336 = state_12319;
(statearr_12328_12336[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12319);

return cljs.core.cst$kw$recur;
} else {
throw e12327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12337 = state_12319;
state_12319 = G__12337;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12319){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12305,ids,document,G__12302_12330))
})();
var state__9425__auto__ = (function (){var statearr_12329 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12329[(6)] = c__9423__auto__);

return statearr_12329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12305,ids,document,G__12302_12330))
);

return c__9423__auto__;
});})(G__12302_12330))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12302_12330,G__12303_12331) : re_frame.core.reg_fx.call(null,G__12302_12330,G__12303_12331));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__12338){
var vec__12339 = p__12338;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12339,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12339,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12339,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12342_12358 = cljs.core.cst$kw$store_DASH_components;
var G__12343_12359 = ((function (G__12342_12358){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12342_12358){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12342_12358){
return (function (state_12351){
var state_val_12352 = (state_12351[(1)]);
if((state_val_12352 === (1))){
var state_12351__$1 = state_12351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12351__$1,(2),ch);
} else {
if((state_val_12352 === (2))){
var inst_12345 = (state_12351[(2)]);
var inst_12346 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12347 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12348 = (new cljs.core.PersistentVector(null,1,(5),inst_12346,inst_12347,null));
var inst_12349 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12348) : re_frame.core.dispatch.call(null,inst_12348));
var state_12351__$1 = (function (){var statearr_12353 = state_12351;
(statearr_12353[(7)] = inst_12345);

return statearr_12353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12351__$1,inst_12349);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12342_12358))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12342_12358){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12354 = [null,null,null,null,null,null,null,null];
(statearr_12354[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12354[(1)] = (1));

return statearr_12354;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12351){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12351);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12355){if((e12355 instanceof Object)){
var ex__9324__auto__ = e12355;
var statearr_12356_12360 = state_12351;
(statearr_12356_12360[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12351);

return cljs.core.cst$kw$recur;
} else {
throw e12355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12361 = state_12351;
state_12351 = G__12361;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12351){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12342_12358))
})();
var state__9425__auto__ = (function (){var statearr_12357 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12357[(6)] = c__9423__auto__);

return statearr_12357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12342_12358))
);

return c__9423__auto__;
});})(G__12342_12358))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12342_12358,G__12343_12359) : re_frame.core.reg_fx.call(null,G__12342_12358,G__12343_12359));
