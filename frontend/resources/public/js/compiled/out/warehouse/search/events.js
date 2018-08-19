// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__12228,p__12229){
var map__12230 = p__12228;
var map__12230__$1 = ((((!((map__12230 == null)))?(((((map__12230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12230):map__12230);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12230__$1,cljs.core.cst$kw$db);
var vec__12231 = p__12229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12231,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12231,(1),null);
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
var G__12235_12259 = cljs.core.cst$kw$update_DASH_filter;
var G__12236_12260 = ((function (G__12235_12259){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
cljs.core.reset_BANG_(warehouse.search.events.update_filter_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12235_12259){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12235_12259){
return (function (state_12248){
var state_val_12249 = (state_12248[(1)]);
if((state_val_12249 === (1))){
var state_12248__$1 = state_12248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12248__$1,(2),ch);
} else {
if((state_val_12249 === (2))){
var inst_12238 = (state_12248[(7)]);
var inst_12238__$1 = (state_12248[(2)]);
var state_12248__$1 = (function (){var statearr_12250 = state_12248;
(statearr_12250[(7)] = inst_12238__$1);

return statearr_12250;
})();
if(cljs.core.truth_(inst_12238__$1)){
var statearr_12251_12261 = state_12248__$1;
(statearr_12251_12261[(1)] = (3));

} else {
var statearr_12252_12262 = state_12248__$1;
(statearr_12252_12262[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12249 === (3))){
var inst_12238 = (state_12248[(7)]);
var inst_12240 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12241 = [cljs.core.cst$kw$filter_DASH_updated,inst_12238];
var inst_12242 = (new cljs.core.PersistentVector(null,2,(5),inst_12240,inst_12241,null));
var inst_12243 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12242) : re_frame.core.dispatch.call(null,inst_12242));
var state_12248__$1 = state_12248;
var statearr_12253_12263 = state_12248__$1;
(statearr_12253_12263[(2)] = inst_12243);

(statearr_12253_12263[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12249 === (4))){
var state_12248__$1 = state_12248;
var statearr_12254_12264 = state_12248__$1;
(statearr_12254_12264[(2)] = null);

(statearr_12254_12264[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12249 === (5))){
var inst_12246 = (state_12248[(2)]);
var state_12248__$1 = state_12248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12248__$1,inst_12246);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,G__12235_12259))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12235_12259){
return (function() {
var warehouse$search$events$state_machine__9321__auto__ = null;
var warehouse$search$events$state_machine__9321__auto____0 = (function (){
var statearr_12255 = [null,null,null,null,null,null,null,null];
(statearr_12255[(0)] = warehouse$search$events$state_machine__9321__auto__);

(statearr_12255[(1)] = (1));

return statearr_12255;
});
var warehouse$search$events$state_machine__9321__auto____1 = (function (state_12248){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12248);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12256){if((e12256 instanceof Object)){
var ex__9324__auto__ = e12256;
var statearr_12257_12265 = state_12248;
(statearr_12257_12265[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12248);

return cljs.core.cst$kw$recur;
} else {
throw e12256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12266 = state_12248;
state_12248 = G__12266;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$search$events$state_machine__9321__auto__ = function(state_12248){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__9321__auto____1.call(this,state_12248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__9321__auto____0;
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__9321__auto____1;
return warehouse$search$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12235_12259))
})();
var state__9425__auto__ = (function (){var statearr_12258 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12258[(6)] = c__9423__auto__);

return statearr_12258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12235_12259))
);

return c__9423__auto__;
});})(G__12235_12259))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12235_12259,G__12236_12260) : re_frame.core.reg_fx.call(null,G__12235_12259,G__12236_12260));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__12267,p__12268){
var map__12269 = p__12267;
var map__12269__$1 = ((((!((map__12269 == null)))?(((((map__12269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12269):map__12269);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12269__$1,cljs.core.cst$kw$db);
var vec__12270 = p__12268;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12270,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12270,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__12274,_){
var map__12275 = p__12274;
var map__12275__$1 = ((((!((map__12275 == null)))?(((((map__12275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12275):map__12275);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12275__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
