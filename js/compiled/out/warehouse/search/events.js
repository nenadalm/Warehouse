// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__12173,p__12174){
var map__12175 = p__12173;
var map__12175__$1 = ((((!((map__12175 == null)))?(((((map__12175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12175):map__12175);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12175__$1,cljs.core.cst$kw$db);
var vec__12176 = p__12174;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12176,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12176,(1),null);
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
var G__12180_12204 = cljs.core.cst$kw$update_DASH_filter;
var G__12181_12205 = ((function (G__12180_12204){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
cljs.core.reset_BANG_(warehouse.search.events.update_filter_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12180_12204){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12180_12204){
return (function (state_12193){
var state_val_12194 = (state_12193[(1)]);
if((state_val_12194 === (1))){
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12193__$1,(2),ch);
} else {
if((state_val_12194 === (2))){
var inst_12183 = (state_12193[(7)]);
var inst_12183__$1 = (state_12193[(2)]);
var state_12193__$1 = (function (){var statearr_12195 = state_12193;
(statearr_12195[(7)] = inst_12183__$1);

return statearr_12195;
})();
if(cljs.core.truth_(inst_12183__$1)){
var statearr_12196_12206 = state_12193__$1;
(statearr_12196_12206[(1)] = (3));

} else {
var statearr_12197_12207 = state_12193__$1;
(statearr_12197_12207[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12194 === (3))){
var inst_12183 = (state_12193[(7)]);
var inst_12185 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12186 = [cljs.core.cst$kw$filter_DASH_updated,inst_12183];
var inst_12187 = (new cljs.core.PersistentVector(null,2,(5),inst_12185,inst_12186,null));
var inst_12188 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12187) : re_frame.core.dispatch.call(null,inst_12187));
var state_12193__$1 = state_12193;
var statearr_12198_12208 = state_12193__$1;
(statearr_12198_12208[(2)] = inst_12188);

(statearr_12198_12208[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12194 === (4))){
var state_12193__$1 = state_12193;
var statearr_12199_12209 = state_12193__$1;
(statearr_12199_12209[(2)] = null);

(statearr_12199_12209[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12194 === (5))){
var inst_12191 = (state_12193[(2)]);
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12193__$1,inst_12191);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,G__12180_12204))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12180_12204){
return (function() {
var warehouse$search$events$state_machine__9321__auto__ = null;
var warehouse$search$events$state_machine__9321__auto____0 = (function (){
var statearr_12200 = [null,null,null,null,null,null,null,null];
(statearr_12200[(0)] = warehouse$search$events$state_machine__9321__auto__);

(statearr_12200[(1)] = (1));

return statearr_12200;
});
var warehouse$search$events$state_machine__9321__auto____1 = (function (state_12193){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12193);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12201){if((e12201 instanceof Object)){
var ex__9324__auto__ = e12201;
var statearr_12202_12210 = state_12193;
(statearr_12202_12210[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12193);

return cljs.core.cst$kw$recur;
} else {
throw e12201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12211 = state_12193;
state_12193 = G__12211;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$search$events$state_machine__9321__auto__ = function(state_12193){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__9321__auto____1.call(this,state_12193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__9321__auto____0;
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__9321__auto____1;
return warehouse$search$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12180_12204))
})();
var state__9425__auto__ = (function (){var statearr_12203 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12203[(6)] = c__9423__auto__);

return statearr_12203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12180_12204))
);

return c__9423__auto__;
});})(G__12180_12204))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12180_12204,G__12181_12205) : re_frame.core.reg_fx.call(null,G__12180_12204,G__12181_12205));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__12212,p__12213){
var map__12214 = p__12212;
var map__12214__$1 = ((((!((map__12214 == null)))?(((((map__12214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12214):map__12214);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12214__$1,cljs.core.cst$kw$db);
var vec__12215 = p__12213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12215,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12215,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__12219,_){
var map__12220 = p__12219;
var map__12220__$1 = ((((!((map__12220 == null)))?(((((map__12220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12220):map__12220);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12220__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
