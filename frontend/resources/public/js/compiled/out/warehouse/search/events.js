// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__12055,p__12056){
var map__12057 = p__12055;
var map__12057__$1 = ((((!((map__12057 == null)))?(((((map__12057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12057):map__12057);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12057__$1,cljs.core.cst$kw$db);
var vec__12058 = p__12056;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12058,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12058,(1),null);
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
var G__12062_12086 = cljs.core.cst$kw$update_DASH_filter;
var G__12063_12087 = ((function (G__12062_12086){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
cljs.core.reset_BANG_(warehouse.search.events.update_filter_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12062_12086){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12062_12086){
return (function (state_12075){
var state_val_12076 = (state_12075[(1)]);
if((state_val_12076 === (1))){
var state_12075__$1 = state_12075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12075__$1,(2),ch);
} else {
if((state_val_12076 === (2))){
var inst_12065 = (state_12075[(7)]);
var inst_12065__$1 = (state_12075[(2)]);
var state_12075__$1 = (function (){var statearr_12077 = state_12075;
(statearr_12077[(7)] = inst_12065__$1);

return statearr_12077;
})();
if(cljs.core.truth_(inst_12065__$1)){
var statearr_12078_12088 = state_12075__$1;
(statearr_12078_12088[(1)] = (3));

} else {
var statearr_12079_12089 = state_12075__$1;
(statearr_12079_12089[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12076 === (3))){
var inst_12065 = (state_12075[(7)]);
var inst_12067 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12068 = [cljs.core.cst$kw$filter_DASH_updated,inst_12065];
var inst_12069 = (new cljs.core.PersistentVector(null,2,(5),inst_12067,inst_12068,null));
var inst_12070 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12069) : re_frame.core.dispatch.call(null,inst_12069));
var state_12075__$1 = state_12075;
var statearr_12080_12090 = state_12075__$1;
(statearr_12080_12090[(2)] = inst_12070);

(statearr_12080_12090[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12076 === (4))){
var state_12075__$1 = state_12075;
var statearr_12081_12091 = state_12075__$1;
(statearr_12081_12091[(2)] = null);

(statearr_12081_12091[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12076 === (5))){
var inst_12073 = (state_12075[(2)]);
var state_12075__$1 = state_12075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12075__$1,inst_12073);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,G__12062_12086))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12062_12086){
return (function() {
var warehouse$search$events$state_machine__9321__auto__ = null;
var warehouse$search$events$state_machine__9321__auto____0 = (function (){
var statearr_12082 = [null,null,null,null,null,null,null,null];
(statearr_12082[(0)] = warehouse$search$events$state_machine__9321__auto__);

(statearr_12082[(1)] = (1));

return statearr_12082;
});
var warehouse$search$events$state_machine__9321__auto____1 = (function (state_12075){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12075);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12083){if((e12083 instanceof Object)){
var ex__9324__auto__ = e12083;
var statearr_12084_12092 = state_12075;
(statearr_12084_12092[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12075);

return cljs.core.cst$kw$recur;
} else {
throw e12083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12093 = state_12075;
state_12075 = G__12093;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$search$events$state_machine__9321__auto__ = function(state_12075){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__9321__auto____1.call(this,state_12075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__9321__auto____0;
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__9321__auto____1;
return warehouse$search$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12062_12086))
})();
var state__9425__auto__ = (function (){var statearr_12085 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12085[(6)] = c__9423__auto__);

return statearr_12085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12062_12086))
);

return c__9423__auto__;
});})(G__12062_12086))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12062_12086,G__12063_12087) : re_frame.core.reg_fx.call(null,G__12062_12086,G__12063_12087));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__12094,p__12095){
var map__12096 = p__12094;
var map__12096__$1 = ((((!((map__12096 == null)))?(((((map__12096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12096):map__12096);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12096__$1,cljs.core.cst$kw$db);
var vec__12097 = p__12095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12097,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12097,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__12101,_){
var map__12102 = p__12101;
var map__12102__$1 = ((((!((map__12102 == null)))?(((((map__12102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12102):map__12102);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12102__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
