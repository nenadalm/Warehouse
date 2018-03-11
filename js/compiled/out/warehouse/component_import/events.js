// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.storage.indexeddb');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__18361){
var map__18362 = p__18361;
var map__18362__$1 = ((((!((map__18362 == null)))?(((((map__18362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18362):map__18362);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18362__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18362__$1,cljs.core.cst$kw$type);
if(cljs.core.truth_((function (){var and__3911__auto__ = secret;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",type);
} else {
return and__3911__auto__;
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__18364){
var map__18365 = p__18364;
var map__18365__$1 = ((((!((map__18365 == null)))?(((((map__18365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18365):map__18365);
var handler_item = map__18365__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18365__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__18367,_){
var map__18368 = p__18367;
var map__18368__$1 = ((((!((map__18368 == null)))?(((((map__18368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18368):map__18368);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18368__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),"/handler"].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__18370){
var vec__18371 = p__18370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18371,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18371,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__18374){
var vec__18375 = p__18374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18375,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18375,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (p__18378,p__18379){
var map__18380 = p__18378;
var map__18380__$1 = ((((!((map__18380 == null)))?(((((map__18380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18380):map__18380);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18380__$1,cljs.core.cst$kw$db);
var vec__18381 = p__18379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18381,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18381,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__18385_18413 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__18386_18414 = ((function (G__18385_18413){
return (function (p__18387){
var vec__18388 = p__18387;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18388,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18388,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,ch,vec__18388,ids,document,G__18385_18413){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,ch,vec__18388,ids,document,G__18385_18413){
return (function (state_18402){
var state_val_18403 = (state_18402[(1)]);
if((state_val_18403 === (1))){
var state_18402__$1 = state_18402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18402__$1,(2),ch);
} else {
if((state_val_18403 === (2))){
var inst_18392 = (state_18402[(7)]);
var inst_18392__$1 = (state_18402[(2)]);
var state_18402__$1 = (function (){var statearr_18404 = state_18402;
(statearr_18404[(7)] = inst_18392__$1);

return statearr_18404;
})();
if(cljs.core.truth_(inst_18392__$1)){
var statearr_18405_18415 = state_18402__$1;
(statearr_18405_18415[(1)] = (3));

} else {
var statearr_18406_18416 = state_18402__$1;
(statearr_18406_18416[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18403 === (3))){
var inst_18392 = (state_18402[(7)]);
var inst_18394 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18395 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_18392,document];
var inst_18396 = (new cljs.core.PersistentVector(null,3,(5),inst_18394,inst_18395,null));
var inst_18397 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18396) : re_frame.core.dispatch.call(null,inst_18396));
var state_18402__$1 = state_18402;
var statearr_18407_18417 = state_18402__$1;
(statearr_18407_18417[(2)] = inst_18397);

(statearr_18407_18417[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18403 === (4))){
var state_18402__$1 = state_18402;
var statearr_18408_18418 = state_18402__$1;
(statearr_18408_18418[(2)] = null);

(statearr_18408_18418[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18403 === (5))){
var inst_18400 = (state_18402[(2)]);
var state_18402__$1 = state_18402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18402__$1,inst_18400);
} else {
return null;
}
}
}
}
}
});})(c__14229__auto__,ch,vec__18388,ids,document,G__18385_18413))
;
return ((function (switch__14048__auto__,c__14229__auto__,ch,vec__18388,ids,document,G__18385_18413){
return (function() {
var warehouse$component_import$events$state_machine__14049__auto__ = null;
var warehouse$component_import$events$state_machine__14049__auto____0 = (function (){
var statearr_18409 = [null,null,null,null,null,null,null,null];
(statearr_18409[(0)] = warehouse$component_import$events$state_machine__14049__auto__);

(statearr_18409[(1)] = (1));

return statearr_18409;
});
var warehouse$component_import$events$state_machine__14049__auto____1 = (function (state_18402){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18402);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18410){if((e18410 instanceof Object)){
var ex__14052__auto__ = e18410;
var statearr_18411_18419 = state_18402;
(statearr_18411_18419[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18402);

return cljs.core.cst$kw$recur;
} else {
throw e18410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18420 = state_18402;
state_18402 = G__18420;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__14049__auto__ = function(state_18402){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__14049__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__14049__auto____1.call(this,state_18402);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$component_import$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__14049__auto____0;
warehouse$component_import$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__14049__auto____1;
return warehouse$component_import$events$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,ch,vec__18388,ids,document,G__18385_18413))
})();
var state__14231__auto__ = (function (){var statearr_18412 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18412[(6)] = c__14229__auto__);

return statearr_18412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,ch,vec__18388,ids,document,G__18385_18413))
);

return c__14229__auto__;
});})(G__18385_18413))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18385_18413,G__18386_18414) : re_frame.core.reg_fx.call(null,G__18385_18413,G__18386_18414));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__18421){
var vec__18422 = p__18421;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18422,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18422,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18422,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__18425_18441 = cljs.core.cst$kw$store_DASH_components;
var G__18426_18442 = ((function (G__18425_18441){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,ch,G__18425_18441){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,ch,G__18425_18441){
return (function (state_18434){
var state_val_18435 = (state_18434[(1)]);
if((state_val_18435 === (1))){
var state_18434__$1 = state_18434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18434__$1,(2),ch);
} else {
if((state_val_18435 === (2))){
var inst_18428 = (state_18434[(2)]);
var inst_18429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18430 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_18431 = (new cljs.core.PersistentVector(null,1,(5),inst_18429,inst_18430,null));
var inst_18432 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18431) : re_frame.core.dispatch.call(null,inst_18431));
var state_18434__$1 = (function (){var statearr_18436 = state_18434;
(statearr_18436[(7)] = inst_18428);

return statearr_18436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18434__$1,inst_18432);
} else {
return null;
}
}
});})(c__14229__auto__,ch,G__18425_18441))
;
return ((function (switch__14048__auto__,c__14229__auto__,ch,G__18425_18441){
return (function() {
var warehouse$component_import$events$state_machine__14049__auto__ = null;
var warehouse$component_import$events$state_machine__14049__auto____0 = (function (){
var statearr_18437 = [null,null,null,null,null,null,null,null];
(statearr_18437[(0)] = warehouse$component_import$events$state_machine__14049__auto__);

(statearr_18437[(1)] = (1));

return statearr_18437;
});
var warehouse$component_import$events$state_machine__14049__auto____1 = (function (state_18434){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18434);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18438){if((e18438 instanceof Object)){
var ex__14052__auto__ = e18438;
var statearr_18439_18443 = state_18434;
(statearr_18439_18443[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18434);

return cljs.core.cst$kw$recur;
} else {
throw e18438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18444 = state_18434;
state_18434 = G__18444;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__14049__auto__ = function(state_18434){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__14049__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__14049__auto____1.call(this,state_18434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$component_import$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__14049__auto____0;
warehouse$component_import$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__14049__auto____1;
return warehouse$component_import$events$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,ch,G__18425_18441))
})();
var state__14231__auto__ = (function (){var statearr_18440 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18440[(6)] = c__14229__auto__);

return statearr_18440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,ch,G__18425_18441))
);

return c__14229__auto__;
});})(G__18425_18441))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18425_18441,G__18426_18442) : re_frame.core.reg_fx.call(null,G__18425_18441,G__18426_18442));
