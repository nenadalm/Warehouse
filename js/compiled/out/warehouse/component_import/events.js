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
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__18950){
var map__18951 = p__18950;
var map__18951__$1 = ((((!((map__18951 == null)))?(((((map__18951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18951):map__18951);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18951__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18951__$1,cljs.core.cst$kw$type);
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__18953){
var map__18954 = p__18953;
var map__18954__$1 = ((((!((map__18954 == null)))?(((((map__18954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18954):map__18954);
var handler_item = map__18954__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18954__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__18956,_){
var map__18957 = p__18956;
var map__18957__$1 = ((((!((map__18957 == null)))?(((((map__18957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18957):map__18957);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18957__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),"/handler"].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__18959){
var vec__18960 = p__18959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18960,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18960,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__18963){
var vec__18964 = p__18963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18964,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18964,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (p__18967,p__18968){
var map__18969 = p__18967;
var map__18969__$1 = ((((!((map__18969 == null)))?(((((map__18969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18969):map__18969);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18969__$1,cljs.core.cst$kw$db);
var vec__18970 = p__18968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__18974_19002 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__18975_19003 = ((function (G__18974_19002){
return (function (p__18976){
var vec__18977 = p__18976;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18977,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18977,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,ch,vec__18977,ids,document,G__18974_19002){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,ch,vec__18977,ids,document,G__18974_19002){
return (function (state_18991){
var state_val_18992 = (state_18991[(1)]);
if((state_val_18992 === (1))){
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18991__$1,(2),ch);
} else {
if((state_val_18992 === (2))){
var inst_18981 = (state_18991[(7)]);
var inst_18981__$1 = (state_18991[(2)]);
var state_18991__$1 = (function (){var statearr_18993 = state_18991;
(statearr_18993[(7)] = inst_18981__$1);

return statearr_18993;
})();
if(cljs.core.truth_(inst_18981__$1)){
var statearr_18994_19004 = state_18991__$1;
(statearr_18994_19004[(1)] = (3));

} else {
var statearr_18995_19005 = state_18991__$1;
(statearr_18995_19005[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18992 === (3))){
var inst_18981 = (state_18991[(7)]);
var inst_18983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18984 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_18981,document];
var inst_18985 = (new cljs.core.PersistentVector(null,3,(5),inst_18983,inst_18984,null));
var inst_18986 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18985) : re_frame.core.dispatch.call(null,inst_18985));
var state_18991__$1 = state_18991;
var statearr_18996_19006 = state_18991__$1;
(statearr_18996_19006[(2)] = inst_18986);

(statearr_18996_19006[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18992 === (4))){
var state_18991__$1 = state_18991;
var statearr_18997_19007 = state_18991__$1;
(statearr_18997_19007[(2)] = null);

(statearr_18997_19007[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18992 === (5))){
var inst_18989 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18991__$1,inst_18989);
} else {
return null;
}
}
}
}
}
});})(c__13775__auto__,ch,vec__18977,ids,document,G__18974_19002))
;
return ((function (switch__13594__auto__,c__13775__auto__,ch,vec__18977,ids,document,G__18974_19002){
return (function() {
var warehouse$component_import$events$state_machine__13595__auto__ = null;
var warehouse$component_import$events$state_machine__13595__auto____0 = (function (){
var statearr_18998 = [null,null,null,null,null,null,null,null];
(statearr_18998[(0)] = warehouse$component_import$events$state_machine__13595__auto__);

(statearr_18998[(1)] = (1));

return statearr_18998;
});
var warehouse$component_import$events$state_machine__13595__auto____1 = (function (state_18991){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18991);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18999){if((e18999 instanceof Object)){
var ex__13598__auto__ = e18999;
var statearr_19000_19008 = state_18991;
(statearr_19000_19008[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18991);

return cljs.core.cst$kw$recur;
} else {
throw e18999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__19009 = state_18991;
state_18991 = G__19009;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__13595__auto__ = function(state_18991){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__13595__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__13595__auto____1.call(this,state_18991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$component_import$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__13595__auto____0;
warehouse$component_import$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__13595__auto____1;
return warehouse$component_import$events$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,ch,vec__18977,ids,document,G__18974_19002))
})();
var state__13777__auto__ = (function (){var statearr_19001 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_19001[(6)] = c__13775__auto__);

return statearr_19001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,ch,vec__18977,ids,document,G__18974_19002))
);

return c__13775__auto__;
});})(G__18974_19002))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18974_19002,G__18975_19003) : re_frame.core.reg_fx.call(null,G__18974_19002,G__18975_19003));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__19010){
var vec__19011 = p__19010;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19011,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19011,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19011,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__19014_19030 = cljs.core.cst$kw$store_DASH_components;
var G__19015_19031 = ((function (G__19014_19030){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,ch,G__19014_19030){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,ch,G__19014_19030){
return (function (state_19023){
var state_val_19024 = (state_19023[(1)]);
if((state_val_19024 === (1))){
var state_19023__$1 = state_19023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19023__$1,(2),ch);
} else {
if((state_val_19024 === (2))){
var inst_19017 = (state_19023[(2)]);
var inst_19018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19019 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_19020 = (new cljs.core.PersistentVector(null,1,(5),inst_19018,inst_19019,null));
var inst_19021 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19020) : re_frame.core.dispatch.call(null,inst_19020));
var state_19023__$1 = (function (){var statearr_19025 = state_19023;
(statearr_19025[(7)] = inst_19017);

return statearr_19025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19023__$1,inst_19021);
} else {
return null;
}
}
});})(c__13775__auto__,ch,G__19014_19030))
;
return ((function (switch__13594__auto__,c__13775__auto__,ch,G__19014_19030){
return (function() {
var warehouse$component_import$events$state_machine__13595__auto__ = null;
var warehouse$component_import$events$state_machine__13595__auto____0 = (function (){
var statearr_19026 = [null,null,null,null,null,null,null,null];
(statearr_19026[(0)] = warehouse$component_import$events$state_machine__13595__auto__);

(statearr_19026[(1)] = (1));

return statearr_19026;
});
var warehouse$component_import$events$state_machine__13595__auto____1 = (function (state_19023){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_19023);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e19027){if((e19027 instanceof Object)){
var ex__13598__auto__ = e19027;
var statearr_19028_19032 = state_19023;
(statearr_19028_19032[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19023);

return cljs.core.cst$kw$recur;
} else {
throw e19027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__19033 = state_19023;
state_19023 = G__19033;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__13595__auto__ = function(state_19023){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__13595__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__13595__auto____1.call(this,state_19023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$component_import$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__13595__auto____0;
warehouse$component_import$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__13595__auto____1;
return warehouse$component_import$events$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,ch,G__19014_19030))
})();
var state__13777__auto__ = (function (){var statearr_19029 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_19029[(6)] = c__13775__auto__);

return statearr_19029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,ch,G__19014_19030))
);

return c__13775__auto__;
});})(G__19014_19030))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19014_19030,G__19015_19031) : re_frame.core.reg_fx.call(null,G__19014_19030,G__19015_19031));
