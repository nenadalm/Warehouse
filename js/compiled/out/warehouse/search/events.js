// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.index');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__18270,p__18271){
var map__18272 = p__18270;
var map__18272__$1 = ((((!((map__18272 == null)))?(((((map__18272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18272):map__18272);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18272__$1,cljs.core.cst$kw$db);
var vec__18273 = p__18271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18273,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18273,(1),null);
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
var G__18277_18301 = cljs.core.cst$kw$update_DASH_filter;
var G__18278_18302 = ((function (G__18277_18301){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
cljs.core.reset_BANG_(warehouse.search.events.update_filter_ch,ch);

var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,ch,G__18277_18301){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,ch,G__18277_18301){
return (function (state_18290){
var state_val_18291 = (state_18290[(1)]);
if((state_val_18291 === (1))){
var state_18290__$1 = state_18290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18290__$1,(2),ch);
} else {
if((state_val_18291 === (2))){
var inst_18280 = (state_18290[(7)]);
var inst_18280__$1 = (state_18290[(2)]);
var state_18290__$1 = (function (){var statearr_18292 = state_18290;
(statearr_18292[(7)] = inst_18280__$1);

return statearr_18292;
})();
if(cljs.core.truth_(inst_18280__$1)){
var statearr_18293_18303 = state_18290__$1;
(statearr_18293_18303[(1)] = (3));

} else {
var statearr_18294_18304 = state_18290__$1;
(statearr_18294_18304[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18291 === (3))){
var inst_18280 = (state_18290[(7)]);
var inst_18282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18283 = [cljs.core.cst$kw$filter_DASH_updated,inst_18280];
var inst_18284 = (new cljs.core.PersistentVector(null,2,(5),inst_18282,inst_18283,null));
var inst_18285 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18284) : re_frame.core.dispatch.call(null,inst_18284));
var state_18290__$1 = state_18290;
var statearr_18295_18305 = state_18290__$1;
(statearr_18295_18305[(2)] = inst_18285);

(statearr_18295_18305[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18291 === (4))){
var state_18290__$1 = state_18290;
var statearr_18296_18306 = state_18290__$1;
(statearr_18296_18306[(2)] = null);

(statearr_18296_18306[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18291 === (5))){
var inst_18288 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18290__$1,inst_18288);
} else {
return null;
}
}
}
}
}
});})(c__14229__auto__,ch,G__18277_18301))
;
return ((function (switch__14048__auto__,c__14229__auto__,ch,G__18277_18301){
return (function() {
var warehouse$search$events$state_machine__14049__auto__ = null;
var warehouse$search$events$state_machine__14049__auto____0 = (function (){
var statearr_18297 = [null,null,null,null,null,null,null,null];
(statearr_18297[(0)] = warehouse$search$events$state_machine__14049__auto__);

(statearr_18297[(1)] = (1));

return statearr_18297;
});
var warehouse$search$events$state_machine__14049__auto____1 = (function (state_18290){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18290);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18298){if((e18298 instanceof Object)){
var ex__14052__auto__ = e18298;
var statearr_18299_18307 = state_18290;
(statearr_18299_18307[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18290);

return cljs.core.cst$kw$recur;
} else {
throw e18298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18308 = state_18290;
state_18290 = G__18308;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$search$events$state_machine__14049__auto__ = function(state_18290){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__14049__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__14049__auto____1.call(this,state_18290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$search$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__14049__auto____0;
warehouse$search$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__14049__auto____1;
return warehouse$search$events$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,ch,G__18277_18301))
})();
var state__14231__auto__ = (function (){var statearr_18300 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18300[(6)] = c__14229__auto__);

return statearr_18300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,ch,G__18277_18301))
);

return c__14229__auto__;
});})(G__18277_18301))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18277_18301,G__18278_18302) : re_frame.core.reg_fx.call(null,G__18277_18301,G__18278_18302));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__18309,p__18310){
var map__18311 = p__18309;
var map__18311__$1 = ((((!((map__18311 == null)))?(((((map__18311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18311):map__18311);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18311__$1,cljs.core.cst$kw$db);
var vec__18312 = p__18310;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__18316,_){
var map__18317 = p__18316;
var map__18317__$1 = ((((!((map__18317 == null)))?(((((map__18317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18317):map__18317);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18317__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
