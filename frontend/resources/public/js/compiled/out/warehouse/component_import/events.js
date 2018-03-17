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
warehouse.component_import.events.handler_item__GT_form_type = (function warehouse$component_import$events$handler_item__GT_form_type(p__18846){
var map__18847 = p__18846;
var map__18847__$1 = ((((!((map__18847 == null)))?(((((map__18847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18847):map__18847);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18847__$1,cljs.core.cst$kw$secret);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18847__$1,cljs.core.cst$kw$type);
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
warehouse.component_import.events.handler_item__GT_form_item = (function warehouse$component_import$events$handler_item__GT_form_item(p__18849){
var map__18850 = p__18849;
var map__18850__$1 = ((((!((map__18850 == null)))?(((((map__18850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18850):map__18850);
var handler_item = map__18850__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18850__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$type,warehouse.component_import.events.handler_item__GT_form_type(handler_item),cljs.core.cst$kw$label,clojure.string.capitalize(name)], null);
});
warehouse.component_import.events.handler__GT_form = (function warehouse$component_import$events$handler__GT_form(provider){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(provider),cljs.core.cst$kw$fields,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.component_import.events.handler_item__GT_form_item,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(provider))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_providers,(function (p__18852,_){
var map__18853 = p__18852;
var map__18853__$1 = ((((!((map__18853 == null)))?(((((map__18853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18853):map__18853);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18853__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backend_DASH_url.cljs$core$IFn$_invoke$arity$1(db)),"/handler"].join(''),cljs.core.cst$kw$title,"Getting list of import handlers",cljs.core.cst$kw$name,cljs.core.cst$kw$import_DASH_handlers], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_providers,(function (db,p__18855){
var vec__18856 = p__18855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18856,(0),null);
var providers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18856,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$component_DASH_providers,providers);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,(function (db,p__18859){
var vec__18860 = p__18859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18860,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18860,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$import_DASH_form,warehouse.component_import.events.handler__GT_form(provider));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_cancel,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$import_DASH_form);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import_DASH_document,(function (p__18863,p__18864){
var map__18865 = p__18863;
var map__18865__$1 = ((((!((map__18865 == null)))?(((((map__18865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18865):map__18865);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18865__$1,cljs.core.cst$kw$db);
var vec__18866 = p__18864;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18866,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18866,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),document], null)], null);
}));
var G__18870_18898 = cljs.core.cst$kw$component_DASH_import_SLASH_load_DASH_components_DASH_by_DASH_ids;
var G__18871_18899 = ((function (G__18870_18898){
return (function (p__18872){
var vec__18873 = p__18872;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18873,(0),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18873,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,ch,vec__18873,ids,document,G__18870_18898){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,ch,vec__18873,ids,document,G__18870_18898){
return (function (state_18887){
var state_val_18888 = (state_18887[(1)]);
if((state_val_18888 === (1))){
var state_18887__$1 = state_18887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18887__$1,(2),ch);
} else {
if((state_val_18888 === (2))){
var inst_18877 = (state_18887[(7)]);
var inst_18877__$1 = (state_18887[(2)]);
var state_18887__$1 = (function (){var statearr_18889 = state_18887;
(statearr_18889[(7)] = inst_18877__$1);

return statearr_18889;
})();
if(cljs.core.truth_(inst_18877__$1)){
var statearr_18890_18900 = state_18887__$1;
(statearr_18890_18900[(1)] = (3));

} else {
var statearr_18891_18901 = state_18887__$1;
(statearr_18891_18901[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18888 === (3))){
var inst_18877 = (state_18887[(7)]);
var inst_18879 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18880 = [cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,inst_18877,document];
var inst_18881 = (new cljs.core.PersistentVector(null,3,(5),inst_18879,inst_18880,null));
var inst_18882 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18881) : re_frame.core.dispatch.call(null,inst_18881));
var state_18887__$1 = state_18887;
var statearr_18892_18902 = state_18887__$1;
(statearr_18892_18902[(2)] = inst_18882);

(statearr_18892_18902[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18888 === (4))){
var state_18887__$1 = state_18887;
var statearr_18893_18903 = state_18887__$1;
(statearr_18893_18903[(2)] = null);

(statearr_18893_18903[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18888 === (5))){
var inst_18885 = (state_18887[(2)]);
var state_18887__$1 = state_18887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18887__$1,inst_18885);
} else {
return null;
}
}
}
}
}
});})(c__13771__auto__,ch,vec__18873,ids,document,G__18870_18898))
;
return ((function (switch__13590__auto__,c__13771__auto__,ch,vec__18873,ids,document,G__18870_18898){
return (function() {
var warehouse$component_import$events$state_machine__13591__auto__ = null;
var warehouse$component_import$events$state_machine__13591__auto____0 = (function (){
var statearr_18894 = [null,null,null,null,null,null,null,null];
(statearr_18894[(0)] = warehouse$component_import$events$state_machine__13591__auto__);

(statearr_18894[(1)] = (1));

return statearr_18894;
});
var warehouse$component_import$events$state_machine__13591__auto____1 = (function (state_18887){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18887);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18895){if((e18895 instanceof Object)){
var ex__13594__auto__ = e18895;
var statearr_18896_18904 = state_18887;
(statearr_18896_18904[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18887);

return cljs.core.cst$kw$recur;
} else {
throw e18895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18905 = state_18887;
state_18887 = G__18905;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__13591__auto__ = function(state_18887){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__13591__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__13591__auto____1.call(this,state_18887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$component_import$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__13591__auto____0;
warehouse$component_import$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__13591__auto____1;
return warehouse$component_import$events$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,ch,vec__18873,ids,document,G__18870_18898))
})();
var state__13773__auto__ = (function (){var statearr_18897 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18897[(6)] = c__13771__auto__);

return statearr_18897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,ch,vec__18873,ids,document,G__18870_18898))
);

return c__13771__auto__;
});})(G__18870_18898))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18870_18898,G__18871_18899) : re_frame.core.reg_fx.call(null,G__18870_18898,G__18871_18899));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component_DASH_import_SLASH_components_DASH_loaded,(function (_,p__18906){
var vec__18907 = p__18906;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18907,(0),null);
var existing_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18907,(1),null);
var document = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18907,(2),null);
var merged = warehouse.util.merge_documents(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),document);
var old_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,existing_components], null),cljs.core.PersistentArrayMap.EMPTY));
var new_components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(merged,cljs.core.PersistentArrayMap.EMPTY));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_components,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(merged),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__18910_18926 = cljs.core.cst$kw$store_DASH_components;
var G__18911_18927 = ((function (G__18910_18926){
return (function (components){
var ch = warehouse.storage.indexeddb.store_components(components);
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,ch,G__18910_18926){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,ch,G__18910_18926){
return (function (state_18919){
var state_val_18920 = (state_18919[(1)]);
if((state_val_18920 === (1))){
var state_18919__$1 = state_18919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18919__$1,(2),ch);
} else {
if((state_val_18920 === (2))){
var inst_18913 = (state_18919[(2)]);
var inst_18914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18915 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_18916 = (new cljs.core.PersistentVector(null,1,(5),inst_18914,inst_18915,null));
var inst_18917 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18916) : re_frame.core.dispatch.call(null,inst_18916));
var state_18919__$1 = (function (){var statearr_18921 = state_18919;
(statearr_18921[(7)] = inst_18913);

return statearr_18921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18919__$1,inst_18917);
} else {
return null;
}
}
});})(c__13771__auto__,ch,G__18910_18926))
;
return ((function (switch__13590__auto__,c__13771__auto__,ch,G__18910_18926){
return (function() {
var warehouse$component_import$events$state_machine__13591__auto__ = null;
var warehouse$component_import$events$state_machine__13591__auto____0 = (function (){
var statearr_18922 = [null,null,null,null,null,null,null,null];
(statearr_18922[(0)] = warehouse$component_import$events$state_machine__13591__auto__);

(statearr_18922[(1)] = (1));

return statearr_18922;
});
var warehouse$component_import$events$state_machine__13591__auto____1 = (function (state_18919){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18919);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18923){if((e18923 instanceof Object)){
var ex__13594__auto__ = e18923;
var statearr_18924_18928 = state_18919;
(statearr_18924_18928[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18919);

return cljs.core.cst$kw$recur;
} else {
throw e18923;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18929 = state_18919;
state_18919 = G__18929;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$component_import$events$state_machine__13591__auto__ = function(state_18919){
switch(arguments.length){
case 0:
return warehouse$component_import$events$state_machine__13591__auto____0.call(this);
case 1:
return warehouse$component_import$events$state_machine__13591__auto____1.call(this,state_18919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$component_import$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$component_import$events$state_machine__13591__auto____0;
warehouse$component_import$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$component_import$events$state_machine__13591__auto____1;
return warehouse$component_import$events$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,ch,G__18910_18926))
})();
var state__13773__auto__ = (function (){var statearr_18925 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18925[(6)] = c__13771__auto__);

return statearr_18925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,ch,G__18910_18926))
);

return c__13771__auto__;
});})(G__18910_18926))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18910_18926,G__18911_18927) : re_frame.core.reg_fx.call(null,G__18910_18926,G__18911_18927));
