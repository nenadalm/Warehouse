// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__12111,p__12112){
var map__12113 = p__12111;
var map__12113__$1 = ((((!((map__12113 == null)))?(((((map__12113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12113):map__12113);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12113__$1,cljs.core.cst$kw$db);
var vec__12114 = p__12112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12114,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12114,(1),null);
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
var G__12118_12142 = cljs.core.cst$kw$update_DASH_filter;
var G__12119_12143 = ((function (G__12118_12142){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
cljs.core.reset_BANG_(warehouse.search.events.update_filter_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12118_12142){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12118_12142){
return (function (state_12131){
var state_val_12132 = (state_12131[(1)]);
if((state_val_12132 === (1))){
var state_12131__$1 = state_12131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12131__$1,(2),ch);
} else {
if((state_val_12132 === (2))){
var inst_12121 = (state_12131[(7)]);
var inst_12121__$1 = (state_12131[(2)]);
var state_12131__$1 = (function (){var statearr_12133 = state_12131;
(statearr_12133[(7)] = inst_12121__$1);

return statearr_12133;
})();
if(cljs.core.truth_(inst_12121__$1)){
var statearr_12134_12144 = state_12131__$1;
(statearr_12134_12144[(1)] = (3));

} else {
var statearr_12135_12145 = state_12131__$1;
(statearr_12135_12145[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12132 === (3))){
var inst_12121 = (state_12131[(7)]);
var inst_12123 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12124 = [cljs.core.cst$kw$filter_DASH_updated,inst_12121];
var inst_12125 = (new cljs.core.PersistentVector(null,2,(5),inst_12123,inst_12124,null));
var inst_12126 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12125) : re_frame.core.dispatch.call(null,inst_12125));
var state_12131__$1 = state_12131;
var statearr_12136_12146 = state_12131__$1;
(statearr_12136_12146[(2)] = inst_12126);

(statearr_12136_12146[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12132 === (4))){
var state_12131__$1 = state_12131;
var statearr_12137_12147 = state_12131__$1;
(statearr_12137_12147[(2)] = null);

(statearr_12137_12147[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12132 === (5))){
var inst_12129 = (state_12131[(2)]);
var state_12131__$1 = state_12131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12131__$1,inst_12129);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,G__12118_12142))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12118_12142){
return (function() {
var warehouse$search$events$state_machine__9321__auto__ = null;
var warehouse$search$events$state_machine__9321__auto____0 = (function (){
var statearr_12138 = [null,null,null,null,null,null,null,null];
(statearr_12138[(0)] = warehouse$search$events$state_machine__9321__auto__);

(statearr_12138[(1)] = (1));

return statearr_12138;
});
var warehouse$search$events$state_machine__9321__auto____1 = (function (state_12131){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12131);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12139){if((e12139 instanceof Object)){
var ex__9324__auto__ = e12139;
var statearr_12140_12148 = state_12131;
(statearr_12140_12148[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12131);

return cljs.core.cst$kw$recur;
} else {
throw e12139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12149 = state_12131;
state_12131 = G__12149;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$search$events$state_machine__9321__auto__ = function(state_12131){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__9321__auto____1.call(this,state_12131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__9321__auto____0;
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__9321__auto____1;
return warehouse$search$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12118_12142))
})();
var state__9425__auto__ = (function (){var statearr_12141 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12141[(6)] = c__9423__auto__);

return statearr_12141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12118_12142))
);

return c__9423__auto__;
});})(G__12118_12142))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12118_12142,G__12119_12143) : re_frame.core.reg_fx.call(null,G__12118_12142,G__12119_12143));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__12150,p__12151){
var map__12152 = p__12150;
var map__12152__$1 = ((((!((map__12152 == null)))?(((((map__12152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12152):map__12152);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12152__$1,cljs.core.cst$kw$db);
var vec__12153 = p__12151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12153,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12153,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__12157,_){
var map__12158 = p__12157;
var map__12158__$1 = ((((!((map__12158 == null)))?(((((map__12158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12158):map__12158);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12158__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
