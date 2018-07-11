// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__12133,p__12134){
var map__12135 = p__12133;
var map__12135__$1 = ((((!((map__12135 == null)))?(((((map__12135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12135):map__12135);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12135__$1,cljs.core.cst$kw$db);
var vec__12136 = p__12134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12136,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12136,(1),null);
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
var G__12140_12164 = cljs.core.cst$kw$update_DASH_filter;
var G__12141_12165 = ((function (G__12140_12164){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
cljs.core.reset_BANG_(warehouse.search.events.update_filter_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12140_12164){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12140_12164){
return (function (state_12153){
var state_val_12154 = (state_12153[(1)]);
if((state_val_12154 === (1))){
var state_12153__$1 = state_12153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12153__$1,(2),ch);
} else {
if((state_val_12154 === (2))){
var inst_12143 = (state_12153[(7)]);
var inst_12143__$1 = (state_12153[(2)]);
var state_12153__$1 = (function (){var statearr_12155 = state_12153;
(statearr_12155[(7)] = inst_12143__$1);

return statearr_12155;
})();
if(cljs.core.truth_(inst_12143__$1)){
var statearr_12156_12166 = state_12153__$1;
(statearr_12156_12166[(1)] = (3));

} else {
var statearr_12157_12167 = state_12153__$1;
(statearr_12157_12167[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12154 === (3))){
var inst_12143 = (state_12153[(7)]);
var inst_12145 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12146 = [cljs.core.cst$kw$filter_DASH_updated,inst_12143];
var inst_12147 = (new cljs.core.PersistentVector(null,2,(5),inst_12145,inst_12146,null));
var inst_12148 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12147) : re_frame.core.dispatch.call(null,inst_12147));
var state_12153__$1 = state_12153;
var statearr_12158_12168 = state_12153__$1;
(statearr_12158_12168[(2)] = inst_12148);

(statearr_12158_12168[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12154 === (4))){
var state_12153__$1 = state_12153;
var statearr_12159_12169 = state_12153__$1;
(statearr_12159_12169[(2)] = null);

(statearr_12159_12169[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12154 === (5))){
var inst_12151 = (state_12153[(2)]);
var state_12153__$1 = state_12153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12153__$1,inst_12151);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,G__12140_12164))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12140_12164){
return (function() {
var warehouse$search$events$state_machine__9321__auto__ = null;
var warehouse$search$events$state_machine__9321__auto____0 = (function (){
var statearr_12160 = [null,null,null,null,null,null,null,null];
(statearr_12160[(0)] = warehouse$search$events$state_machine__9321__auto__);

(statearr_12160[(1)] = (1));

return statearr_12160;
});
var warehouse$search$events$state_machine__9321__auto____1 = (function (state_12153){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12153);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12161){if((e12161 instanceof Object)){
var ex__9324__auto__ = e12161;
var statearr_12162_12170 = state_12153;
(statearr_12162_12170[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12153);

return cljs.core.cst$kw$recur;
} else {
throw e12161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12171 = state_12153;
state_12153 = G__12171;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$search$events$state_machine__9321__auto__ = function(state_12153){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__9321__auto____1.call(this,state_12153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__9321__auto____0;
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__9321__auto____1;
return warehouse$search$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12140_12164))
})();
var state__9425__auto__ = (function (){var statearr_12163 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12163[(6)] = c__9423__auto__);

return statearr_12163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12140_12164))
);

return c__9423__auto__;
});})(G__12140_12164))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12140_12164,G__12141_12165) : re_frame.core.reg_fx.call(null,G__12140_12164,G__12141_12165));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__12172,p__12173){
var map__12174 = p__12172;
var map__12174__$1 = ((((!((map__12174 == null)))?(((((map__12174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12174):map__12174);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12174__$1,cljs.core.cst$kw$db);
var vec__12175 = p__12173;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12175,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12175,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__12179,_){
var map__12180 = p__12179;
var map__12180__$1 = ((((!((map__12180 == null)))?(((((map__12180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12180):map__12180);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12180__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
