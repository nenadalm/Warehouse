// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.storage.indexeddb');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__12343){
var map__12344 = p__12343;
var map__12344__$1 = ((((!((map__12344 == null)))?(((((map__12344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12344):map__12344);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12344__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12344__$1,cljs.core.cst$kw$type);
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__12346){
var map__12347 = p__12346;
var map__12347__$1 = ((((!((map__12347 == null)))?(((((map__12347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12347):map__12347);
var handler_item = map__12347__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12347__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__12349,_){
var map__12350 = p__12349;
var map__12350__$1 = ((((!((map__12350 == null)))?(((((map__12350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12350):map__12350);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12350__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),"/handler"].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__12352){
var vec__12353 = p__12352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12353,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12353,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__12356){
var vec__12357 = p__12356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12357,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12357,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (_,p__12360){
var vec__12361 = p__12360;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12361,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12361,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__12364_12392 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__12365_12393 = ((function (G__12364_12392){
return (function (p__12366){
var vec__12367 = p__12366;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12367,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12367,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12367,ids,document,G__12364_12392){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12367,ids,document,G__12364_12392){
return (function (state_12381){
var state_val_12382 = (state_12381[(1)]);
if((state_val_12382 === (1))){
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12381__$1,(2),ch);
} else {
if((state_val_12382 === (2))){
var inst_12371 = (state_12381[(7)]);
var inst_12371__$1 = (state_12381[(2)]);
var state_12381__$1 = (function (){var statearr_12383 = state_12381;
(statearr_12383[(7)] = inst_12371__$1);

return statearr_12383;
})();
if(cljs.core.truth_(inst_12371__$1)){
var statearr_12384_12394 = state_12381__$1;
(statearr_12384_12394[(1)] = (3));

} else {
var statearr_12385_12395 = state_12381__$1;
(statearr_12385_12395[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12382 === (3))){
var inst_12371 = (state_12381[(7)]);
var inst_12373 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12374 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_12371,document];
var inst_12375 = (new cljs.core.PersistentVector(null,3,(5),inst_12373,inst_12374,null));
var inst_12376 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12375) : re_frame.core.dispatch.call(null,inst_12375));
var state_12381__$1 = state_12381;
var statearr_12386_12396 = state_12381__$1;
(statearr_12386_12396[(2)] = inst_12376);

(statearr_12386_12396[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12382 === (4))){
var state_12381__$1 = state_12381;
var statearr_12387_12397 = state_12381__$1;
(statearr_12387_12397[(2)] = null);

(statearr_12387_12397[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12382 === (5))){
var inst_12379 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12381__$1,inst_12379);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12367,ids,document,G__12364_12392))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12367,ids,document,G__12364_12392){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12388 = [null,null,null,null,null,null,null,null];
(statearr_12388[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12388[(1)] = (1));

return statearr_12388;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12381){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12381);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12389){if((e12389 instanceof Object)){
var ex__9324__auto__ = e12389;
var statearr_12390_12398 = state_12381;
(statearr_12390_12398[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12381);

return cljs.core.cst$kw$recur;
} else {
throw e12389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12399 = state_12381;
state_12381 = G__12399;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12381){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12367,ids,document,G__12364_12392))
})();
var state__9425__auto__ = (function (){var statearr_12391 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12391[(6)] = c__9423__auto__);

return statearr_12391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12367,ids,document,G__12364_12392))
);

return c__9423__auto__;
});})(G__12364_12392))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12364_12392,G__12365_12393) : re_frame.core.reg_fx.call(null,G__12364_12392,G__12365_12393));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__12400){
var vec__12401 = p__12400;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12404_12420 = cljs.core.cst$kw$store_DASH_components;
var G__12405_12421 = ((function (G__12404_12420){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12404_12420){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12404_12420){
return (function (state_12413){
var state_val_12414 = (state_12413[(1)]);
if((state_val_12414 === (1))){
var state_12413__$1 = state_12413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12413__$1,(2),ch);
} else {
if((state_val_12414 === (2))){
var inst_12407 = (state_12413[(2)]);
var inst_12408 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12409 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12410 = (new cljs.core.PersistentVector(null,1,(5),inst_12408,inst_12409,null));
var inst_12411 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12410) : re_frame.core.dispatch.call(null,inst_12410));
var state_12413__$1 = (function (){var statearr_12415 = state_12413;
(statearr_12415[(7)] = inst_12407);

return statearr_12415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12413__$1,inst_12411);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12404_12420))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12404_12420){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12416 = [null,null,null,null,null,null,null,null];
(statearr_12416[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12416[(1)] = (1));

return statearr_12416;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12413){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12413);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12417){if((e12417 instanceof Object)){
var ex__9324__auto__ = e12417;
var statearr_12418_12422 = state_12413;
(statearr_12418_12422[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12413);

return cljs.core.cst$kw$recur;
} else {
throw e12417;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12423 = state_12413;
state_12413 = G__12423;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12413){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12404_12420))
})();
var state__9425__auto__ = (function (){var statearr_12419 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12419[(6)] = c__9423__auto__);

return statearr_12419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12404_12420))
);

return c__9423__auto__;
});})(G__12404_12420))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12404_12420,G__12405_12421) : re_frame.core.reg_fx.call(null,G__12404_12420,G__12405_12421));
