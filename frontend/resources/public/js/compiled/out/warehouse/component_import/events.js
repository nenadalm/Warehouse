// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.storage.indexeddb');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__12225){
var map__12226 = p__12225;
var map__12226__$1 = ((((!((map__12226 == null)))?(((((map__12226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12226):map__12226);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12226__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12226__$1,cljs.core.cst$kw$type);
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__12228){
var map__12229 = p__12228;
var map__12229__$1 = ((((!((map__12229 == null)))?(((((map__12229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12229):map__12229);
var handler_item = map__12229__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12229__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__12231,_){
var map__12232 = p__12231;
var map__12232__$1 = ((((!((map__12232 == null)))?(((((map__12232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12232):map__12232);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12232__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),"/handler"].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__12234){
var vec__12235 = p__12234;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__12238){
var vec__12239 = p__12238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12239,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12239,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (_,p__12242){
var vec__12243 = p__12242;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12243,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12243,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__12246_12274 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__12247_12275 = ((function (G__12246_12274){
return (function (p__12248){
var vec__12249 = p__12248;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12249,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12249,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12249,ids,document,G__12246_12274){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12249,ids,document,G__12246_12274){
return (function (state_12263){
var state_val_12264 = (state_12263[(1)]);
if((state_val_12264 === (1))){
var state_12263__$1 = state_12263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12263__$1,(2),ch);
} else {
if((state_val_12264 === (2))){
var inst_12253 = (state_12263[(7)]);
var inst_12253__$1 = (state_12263[(2)]);
var state_12263__$1 = (function (){var statearr_12265 = state_12263;
(statearr_12265[(7)] = inst_12253__$1);

return statearr_12265;
})();
if(cljs.core.truth_(inst_12253__$1)){
var statearr_12266_12276 = state_12263__$1;
(statearr_12266_12276[(1)] = (3));

} else {
var statearr_12267_12277 = state_12263__$1;
(statearr_12267_12277[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12264 === (3))){
var inst_12253 = (state_12263[(7)]);
var inst_12255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12256 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_12253,document];
var inst_12257 = (new cljs.core.PersistentVector(null,3,(5),inst_12255,inst_12256,null));
var inst_12258 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12257) : re_frame.core.dispatch.call(null,inst_12257));
var state_12263__$1 = state_12263;
var statearr_12268_12278 = state_12263__$1;
(statearr_12268_12278[(2)] = inst_12258);

(statearr_12268_12278[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12264 === (4))){
var state_12263__$1 = state_12263;
var statearr_12269_12279 = state_12263__$1;
(statearr_12269_12279[(2)] = null);

(statearr_12269_12279[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12264 === (5))){
var inst_12261 = (state_12263[(2)]);
var state_12263__$1 = state_12263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12263__$1,inst_12261);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12249,ids,document,G__12246_12274))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12249,ids,document,G__12246_12274){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12270 = [null,null,null,null,null,null,null,null];
(statearr_12270[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12270[(1)] = (1));

return statearr_12270;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12263){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12263);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12271){if((e12271 instanceof Object)){
var ex__9324__auto__ = e12271;
var statearr_12272_12280 = state_12263;
(statearr_12272_12280[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12263);

return cljs.core.cst$kw$recur;
} else {
throw e12271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12281 = state_12263;
state_12263 = G__12281;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12263){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12249,ids,document,G__12246_12274))
})();
var state__9425__auto__ = (function (){var statearr_12273 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12273[(6)] = c__9423__auto__);

return statearr_12273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12249,ids,document,G__12246_12274))
);

return c__9423__auto__;
});})(G__12246_12274))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12246_12274,G__12247_12275) : re_frame.core.reg_fx.call(null,G__12246_12274,G__12247_12275));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__12282){
var vec__12283 = p__12282;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12283,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12283,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12283,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12286_12302 = cljs.core.cst$kw$store_DASH_components;
var G__12287_12303 = ((function (G__12286_12302){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12286_12302){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12286_12302){
return (function (state_12295){
var state_val_12296 = (state_12295[(1)]);
if((state_val_12296 === (1))){
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12295__$1,(2),ch);
} else {
if((state_val_12296 === (2))){
var inst_12289 = (state_12295[(2)]);
var inst_12290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12291 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12292 = (new cljs.core.PersistentVector(null,1,(5),inst_12290,inst_12291,null));
var inst_12293 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12292) : re_frame.core.dispatch.call(null,inst_12292));
var state_12295__$1 = (function (){var statearr_12297 = state_12295;
(statearr_12297[(7)] = inst_12289);

return statearr_12297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12295__$1,inst_12293);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12286_12302))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12286_12302){
return (function() {
var warehouse$component_import$events$state_machine__9321__auto__ = null;
var warehouse$component_import$events$state_machine__9321__auto____0 = (function (){
var statearr_12298 = [null,null,null,null,null,null,null,null];
(statearr_12298[(0)] = warehouse$component_import$events$state_machine__9321__auto__);

(statearr_12298[(1)] = (1));

return statearr_12298;
});
var warehouse$component_import$events$state_machine__9321__auto____1 = (function (state_12295){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12295);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12299){if((e12299 instanceof Object)){
var ex__9324__auto__ = e12299;
var statearr_12300_12304 = state_12295;
(statearr_12300_12304[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12295);

return cljs.core.cst$kw$recur;
} else {
throw e12299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12305 = state_12295;
state_12295 = G__12305;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__9321__auto__ = function(state_12295){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__9321__auto____1.call(this,state_12295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__9321__auto____0;
warehouse$component_import$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__9321__auto____1;
return warehouse$component_import$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12286_12302))
})();
var state__9425__auto__ = (function (){var statearr_12301 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12301[(6)] = c__9423__auto__);

return statearr_12301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12286_12302))
);

return c__9423__auto__;
});})(G__12286_12302))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12286_12302,G__12287_12303) : re_frame.core.reg_fx.call(null,G__12286_12302,G__12287_12303));
