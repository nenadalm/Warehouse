// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.storage.indexeddb');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__21050){
var map__21053 = p__21050;
var map__21053__$1 = ((((!((map__21053 == null)))?((((map__21053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21053):map__21053);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,cljs.core.cst$kw$type);
if(cljs.core.truth_((function (){var and__7014__auto__ = secret;
if(cljs.core.truth_(and__7014__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",type);
} else {
return and__7014__auto__;
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__21055){
var map__21058 = p__21055;
var map__21058__$1 = ((((!((map__21058 == null)))?((((map__21058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21058):map__21058);
var handler_item = map__21058__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21058__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__21060,_){
var map__21061 = p__21060;
var map__21061__$1 = ((((!((map__21061 == null)))?((((map__21061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21061):map__21061);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/handler")].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__21063){
var vec__21064 = p__21063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21064,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21064,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__21067){
var vec__21068 = p__21067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21068,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21068,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (p__21071,p__21072){
var map__21073 = p__21071;
var map__21073__$1 = ((((!((map__21073 == null)))?((((map__21073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21073):map__21073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073__$1,cljs.core.cst$kw$db);
var vec__21074 = p__21072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21074,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21074,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__21078_21109 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__21079_21110 = ((function (G__21078_21109){
return (function (p__21080){
var vec__21081 = p__21080;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21081,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21081,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,ch,vec__21081,ids,document,G__21078_21109){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,ch,vec__21081,ids,document,G__21078_21109){
return (function (state_21095){
var state_val_21096 = (state_21095[(1)]);
if((state_val_21096 === (1))){
var state_21095__$1 = state_21095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21095__$1,(2),ch);
} else {
if((state_val_21096 === (2))){
var inst_21085 = (state_21095[(7)]);
var inst_21085__$1 = (state_21095[(2)]);
var state_21095__$1 = (function (){var statearr_21097 = state_21095;
(statearr_21097[(7)] = inst_21085__$1);

return statearr_21097;
})();
if(cljs.core.truth_(inst_21085__$1)){
var statearr_21098_21111 = state_21095__$1;
(statearr_21098_21111[(1)] = (3));

} else {
var statearr_21099_21112 = state_21095__$1;
(statearr_21099_21112[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21096 === (3))){
var inst_21085 = (state_21095[(7)]);
var inst_21087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21088 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_21085,document];
var inst_21089 = (new cljs.core.PersistentVector(null,3,(5),inst_21087,inst_21088,null));
var inst_21090 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_21089) : re_frame.core.dispatch.call(null,inst_21089));
var state_21095__$1 = state_21095;
var statearr_21100_21113 = state_21095__$1;
(statearr_21100_21113[(2)] = inst_21090);

(statearr_21100_21113[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21096 === (4))){
var state_21095__$1 = state_21095;
var statearr_21101_21114 = state_21095__$1;
(statearr_21101_21114[(2)] = null);

(statearr_21101_21114[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21096 === (5))){
var inst_21093 = (state_21095[(2)]);
var state_21095__$1 = state_21095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21095__$1,inst_21093);
} else {
return null;
}
}
}
}
}
});})(c__17637__auto__,ch,vec__21081,ids,document,G__21078_21109))
;
return ((function (switch__17513__auto__,c__17637__auto__,ch,vec__21081,ids,document,G__21078_21109){
return (function() {
var warehouse$component_import$events$state_machine__17514__auto__ = null;
var warehouse$component_import$events$state_machine__17514__auto____0 = (function (){
var statearr_21105 = [null,null,null,null,null,null,null,null];
(statearr_21105[(0)] = warehouse$component_import$events$state_machine__17514__auto__);

(statearr_21105[(1)] = (1));

return statearr_21105;
});
var warehouse$component_import$events$state_machine__17514__auto____1 = (function (state_21095){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_21095);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e21106){if((e21106 instanceof Object)){
var ex__17517__auto__ = e21106;
var statearr_21107_21115 = state_21095;
(statearr_21107_21115[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21095);

return cljs.core.cst$kw$recur;
} else {
throw e21106;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__21116 = state_21095;
state_21095 = G__21116;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__17514__auto__ = function(state_21095){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__17514__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__17514__auto____1.call(this,state_21095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$component_import$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__17514__auto____0;
warehouse$component_import$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__17514__auto____1;
return warehouse$component_import$events$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,ch,vec__21081,ids,document,G__21078_21109))
})();
var state__17639__auto__ = (function (){var statearr_21108 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_21108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_21108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,ch,vec__21081,ids,document,G__21078_21109))
);

return c__17637__auto__;
});})(G__21078_21109))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21078_21109,G__21079_21110) : re_frame.core.reg_fx.call(null,G__21078_21109,G__21079_21110));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__21117){
var vec__21118 = p__21117;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21118,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21118,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21118,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__21121_21140 = cljs.core.cst$kw$store_DASH_components;
var G__21122_21141 = ((function (G__21121_21140){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,ch,G__21121_21140){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,ch,G__21121_21140){
return (function (state_21130){
var state_val_21131 = (state_21130[(1)]);
if((state_val_21131 === (1))){
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21130__$1,(2),ch);
} else {
if((state_val_21131 === (2))){
var inst_21124 = (state_21130[(2)]);
var inst_21125 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21126 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_21127 = (new cljs.core.PersistentVector(null,1,(5),inst_21125,inst_21126,null));
var inst_21128 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_21127) : re_frame.core.dispatch.call(null,inst_21127));
var state_21130__$1 = (function (){var statearr_21132 = state_21130;
(statearr_21132[(7)] = inst_21124);

return statearr_21132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21130__$1,inst_21128);
} else {
return null;
}
}
});})(c__17637__auto__,ch,G__21121_21140))
;
return ((function (switch__17513__auto__,c__17637__auto__,ch,G__21121_21140){
return (function() {
var warehouse$component_import$events$state_machine__17514__auto__ = null;
var warehouse$component_import$events$state_machine__17514__auto____0 = (function (){
var statearr_21136 = [null,null,null,null,null,null,null,null];
(statearr_21136[(0)] = warehouse$component_import$events$state_machine__17514__auto__);

(statearr_21136[(1)] = (1));

return statearr_21136;
});
var warehouse$component_import$events$state_machine__17514__auto____1 = (function (state_21130){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_21130);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e21137){if((e21137 instanceof Object)){
var ex__17517__auto__ = e21137;
var statearr_21138_21142 = state_21130;
(statearr_21138_21142[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21130);

return cljs.core.cst$kw$recur;
} else {
throw e21137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__21143 = state_21130;
state_21130 = G__21143;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__17514__auto__ = function(state_21130){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__17514__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__17514__auto____1.call(this,state_21130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$component_import$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__17514__auto____0;
warehouse$component_import$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__17514__auto____1;
return warehouse$component_import$events$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,ch,G__21121_21140))
})();
var state__17639__auto__ = (function (){var statearr_21139 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_21139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_21139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,ch,G__21121_21140))
);

return c__17637__auto__;
});})(G__21121_21140))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21121_21140,G__21122_21141) : re_frame.core.reg_fx.call(null,G__21121_21140,G__21122_21141));
