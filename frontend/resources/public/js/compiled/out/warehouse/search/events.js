// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.index');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__18742,p__18743){
var map__18744 = p__18742;
var map__18744__$1 = ((((!((map__18744 == null)))?(((((map__18744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18744):map__18744);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18744__$1,cljs.core.cst$kw$db);
var vec__18745 = p__18743;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18745,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18745,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null),val),cljs.core.cst$kw$update_DASH_filter,val], null);
}));
/**
 * Atom holding reference to last channel used for updating filter.
 * Channel is automatically closed when new value is set via `:close-previous-ch` watch.
 */
warehouse.search.events.update_filter_ch = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.add_watch(warehouse.search.events.update_filter_ch,cljs.core.cst$kw$close_DASH_previous_DASH_ch,(function (_,___$1,os,___$2){
if(!((os == null))){
return cljs.core.async.close_BANG_(os);
} else {
return null;
}
}));
var G__18749_18773 = cljs.core.cst$kw$update_DASH_filter;
var G__18750_18774 = ((function (G__18749_18773){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
cljs.core.reset_BANG_(warehouse.search.events.update_filter_ch,ch);

var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,ch,G__18749_18773){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,ch,G__18749_18773){
return (function (state_18762){
var state_val_18763 = (state_18762[(1)]);
if((state_val_18763 === (1))){
var state_18762__$1 = state_18762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18762__$1,(2),ch);
} else {
if((state_val_18763 === (2))){
var inst_18752 = (state_18762[(7)]);
var inst_18752__$1 = (state_18762[(2)]);
var state_18762__$1 = (function (){var statearr_18764 = state_18762;
(statearr_18764[(7)] = inst_18752__$1);

return statearr_18764;
})();
if(cljs.core.truth_(inst_18752__$1)){
var statearr_18765_18775 = state_18762__$1;
(statearr_18765_18775[(1)] = (3));

} else {
var statearr_18766_18776 = state_18762__$1;
(statearr_18766_18776[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (3))){
var inst_18752 = (state_18762[(7)]);
var inst_18754 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18755 = [cljs.core.cst$kw$filter_DASH_updated,inst_18752];
var inst_18756 = (new cljs.core.PersistentVector(null,2,(5),inst_18754,inst_18755,null));
var inst_18757 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18756) : re_frame.core.dispatch.call(null,inst_18756));
var state_18762__$1 = state_18762;
var statearr_18767_18777 = state_18762__$1;
(statearr_18767_18777[(2)] = inst_18757);

(statearr_18767_18777[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (4))){
var state_18762__$1 = state_18762;
var statearr_18768_18778 = state_18762__$1;
(statearr_18768_18778[(2)] = null);

(statearr_18768_18778[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (5))){
var inst_18760 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18762__$1,inst_18760);
} else {
return null;
}
}
}
}
}
});})(c__13775__auto__,ch,G__18749_18773))
;
return ((function (switch__13594__auto__,c__13775__auto__,ch,G__18749_18773){
return (function() {
var warehouse$search$events$state_machine__13595__auto__ = null;
var warehouse$search$events$state_machine__13595__auto____0 = (function (){
var statearr_18769 = [null,null,null,null,null,null,null,null];
(statearr_18769[(0)] = warehouse$search$events$state_machine__13595__auto__);

(statearr_18769[(1)] = (1));

return statearr_18769;
});
var warehouse$search$events$state_machine__13595__auto____1 = (function (state_18762){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18762);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18770){if((e18770 instanceof Object)){
var ex__13598__auto__ = e18770;
var statearr_18771_18779 = state_18762;
(statearr_18771_18779[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18762);

return cljs.core.cst$kw$recur;
} else {
throw e18770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__18780 = state_18762;
state_18762 = G__18780;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$search$events$state_machine__13595__auto__ = function(state_18762){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__13595__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__13595__auto____1.call(this,state_18762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$search$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__13595__auto____0;
warehouse$search$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__13595__auto____1;
return warehouse$search$events$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,ch,G__18749_18773))
})();
var state__13777__auto__ = (function (){var statearr_18772 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_18772[(6)] = c__13775__auto__);

return statearr_18772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,ch,G__18749_18773))
);

return c__13775__auto__;
});})(G__18749_18773))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18749_18773,G__18750_18774) : re_frame.core.reg_fx.call(null,G__18749_18773,G__18750_18774));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__18781,p__18782){
var map__18783 = p__18781;
var map__18783__$1 = ((((!((map__18783 == null)))?(((((map__18783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18783):map__18783);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18783__$1,cljs.core.cst$kw$db);
var vec__18784 = p__18782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18784,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18784,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__18788,_){
var map__18789 = p__18788;
var map__18789__$1 = ((((!((map__18789 == null)))?(((((map__18789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18789):map__18789);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18789__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
