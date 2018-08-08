// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__12244,p__12245){
var map__12246 = p__12244;
var map__12246__$1 = ((((!((map__12246 == null)))?(((((map__12246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12246):map__12246);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12246__$1,cljs.core.cst$kw$db);
var vec__12247 = p__12245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12247,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12247,(1),null);
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
var G__12251_12275 = cljs.core.cst$kw$update_DASH_filter;
var G__12252_12276 = ((function (G__12251_12275){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
cljs.core.reset_BANG_(warehouse.search.events.update_filter_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12251_12275){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12251_12275){
return (function (state_12264){
var state_val_12265 = (state_12264[(1)]);
if((state_val_12265 === (1))){
var state_12264__$1 = state_12264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12264__$1,(2),ch);
} else {
if((state_val_12265 === (2))){
var inst_12254 = (state_12264[(7)]);
var inst_12254__$1 = (state_12264[(2)]);
var state_12264__$1 = (function (){var statearr_12266 = state_12264;
(statearr_12266[(7)] = inst_12254__$1);

return statearr_12266;
})();
if(cljs.core.truth_(inst_12254__$1)){
var statearr_12267_12277 = state_12264__$1;
(statearr_12267_12277[(1)] = (3));

} else {
var statearr_12268_12278 = state_12264__$1;
(statearr_12268_12278[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12265 === (3))){
var inst_12254 = (state_12264[(7)]);
var inst_12256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12257 = [cljs.core.cst$kw$filter_DASH_updated,inst_12254];
var inst_12258 = (new cljs.core.PersistentVector(null,2,(5),inst_12256,inst_12257,null));
var inst_12259 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12258) : re_frame.core.dispatch.call(null,inst_12258));
var state_12264__$1 = state_12264;
var statearr_12269_12279 = state_12264__$1;
(statearr_12269_12279[(2)] = inst_12259);

(statearr_12269_12279[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12265 === (4))){
var state_12264__$1 = state_12264;
var statearr_12270_12280 = state_12264__$1;
(statearr_12270_12280[(2)] = null);

(statearr_12270_12280[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12265 === (5))){
var inst_12262 = (state_12264[(2)]);
var state_12264__$1 = state_12264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12264__$1,inst_12262);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,G__12251_12275))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12251_12275){
return (function() {
var warehouse$search$events$state_machine__9321__auto__ = null;
var warehouse$search$events$state_machine__9321__auto____0 = (function (){
var statearr_12271 = [null,null,null,null,null,null,null,null];
(statearr_12271[(0)] = warehouse$search$events$state_machine__9321__auto__);

(statearr_12271[(1)] = (1));

return statearr_12271;
});
var warehouse$search$events$state_machine__9321__auto____1 = (function (state_12264){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12264);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12272){if((e12272 instanceof Object)){
var ex__9324__auto__ = e12272;
var statearr_12273_12281 = state_12264;
(statearr_12273_12281[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12264);

return cljs.core.cst$kw$recur;
} else {
throw e12272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12282 = state_12264;
state_12264 = G__12282;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$search$events$state_machine__9321__auto__ = function(state_12264){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__9321__auto____1.call(this,state_12264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__9321__auto____0;
warehouse$search$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__9321__auto____1;
return warehouse$search$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12251_12275))
})();
var state__9425__auto__ = (function (){var statearr_12274 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12274[(6)] = c__9423__auto__);

return statearr_12274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12251_12275))
);

return c__9423__auto__;
});})(G__12251_12275))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12251_12275,G__12252_12276) : re_frame.core.reg_fx.call(null,G__12251_12275,G__12252_12276));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__12283,p__12284){
var map__12285 = p__12283;
var map__12285__$1 = ((((!((map__12285 == null)))?(((((map__12285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12285):map__12285);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12285__$1,cljs.core.cst$kw$db);
var vec__12286 = p__12284;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12286,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12286,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__12290,_){
var map__12291 = p__12290;
var map__12291__$1 = ((((!((map__12291 == null)))?(((((map__12291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12291):map__12291);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12291__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
