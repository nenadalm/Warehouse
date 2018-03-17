// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.index');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__18738,p__18739){
var map__18740 = p__18738;
var map__18740__$1 = ((((!((map__18740 == null)))?(((((map__18740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18740):map__18740);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18740__$1,cljs.core.cst$kw$db);
var vec__18741 = p__18739;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18741,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18741,(1),null);
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
var G__18745_18769 = cljs.core.cst$kw$update_DASH_filter;
var G__18746_18770 = ((function (G__18745_18769){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
cljs.core.reset_BANG_(warehouse.search.events.update_filter_ch,ch);

var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,ch,G__18745_18769){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,ch,G__18745_18769){
return (function (state_18758){
var state_val_18759 = (state_18758[(1)]);
if((state_val_18759 === (1))){
var state_18758__$1 = state_18758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18758__$1,(2),ch);
} else {
if((state_val_18759 === (2))){
var inst_18748 = (state_18758[(7)]);
var inst_18748__$1 = (state_18758[(2)]);
var state_18758__$1 = (function (){var statearr_18760 = state_18758;
(statearr_18760[(7)] = inst_18748__$1);

return statearr_18760;
})();
if(cljs.core.truth_(inst_18748__$1)){
var statearr_18761_18771 = state_18758__$1;
(statearr_18761_18771[(1)] = (3));

} else {
var statearr_18762_18772 = state_18758__$1;
(statearr_18762_18772[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (3))){
var inst_18748 = (state_18758[(7)]);
var inst_18750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18751 = [cljs.core.cst$kw$filter_DASH_updated,inst_18748];
var inst_18752 = (new cljs.core.PersistentVector(null,2,(5),inst_18750,inst_18751,null));
var inst_18753 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18752) : re_frame.core.dispatch.call(null,inst_18752));
var state_18758__$1 = state_18758;
var statearr_18763_18773 = state_18758__$1;
(statearr_18763_18773[(2)] = inst_18753);

(statearr_18763_18773[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (4))){
var state_18758__$1 = state_18758;
var statearr_18764_18774 = state_18758__$1;
(statearr_18764_18774[(2)] = null);

(statearr_18764_18774[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (5))){
var inst_18756 = (state_18758[(2)]);
var state_18758__$1 = state_18758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18758__$1,inst_18756);
} else {
return null;
}
}
}
}
}
});})(c__13771__auto__,ch,G__18745_18769))
;
return ((function (switch__13590__auto__,c__13771__auto__,ch,G__18745_18769){
return (function() {
var warehouse$search$events$state_machine__13591__auto__ = null;
var warehouse$search$events$state_machine__13591__auto____0 = (function (){
var statearr_18765 = [null,null,null,null,null,null,null,null];
(statearr_18765[(0)] = warehouse$search$events$state_machine__13591__auto__);

(statearr_18765[(1)] = (1));

return statearr_18765;
});
var warehouse$search$events$state_machine__13591__auto____1 = (function (state_18758){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18758);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18766){if((e18766 instanceof Object)){
var ex__13594__auto__ = e18766;
var statearr_18767_18775 = state_18758;
(statearr_18767_18775[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18758);

return cljs.core.cst$kw$recur;
} else {
throw e18766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18776 = state_18758;
state_18758 = G__18776;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$search$events$state_machine__13591__auto__ = function(state_18758){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__13591__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__13591__auto____1.call(this,state_18758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$search$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__13591__auto____0;
warehouse$search$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__13591__auto____1;
return warehouse$search$events$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,ch,G__18745_18769))
})();
var state__13773__auto__ = (function (){var statearr_18768 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18768[(6)] = c__13771__auto__);

return statearr_18768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,ch,G__18745_18769))
);

return c__13771__auto__;
});})(G__18745_18769))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18745_18769,G__18746_18770) : re_frame.core.reg_fx.call(null,G__18745_18769,G__18746_18770));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__18777,p__18778){
var map__18779 = p__18777;
var map__18779__$1 = ((((!((map__18779 == null)))?(((((map__18779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18779):map__18779);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18779__$1,cljs.core.cst$kw$db);
var vec__18780 = p__18778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18780,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18780,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__18784,_){
var map__18785 = p__18784;
var map__18785__$1 = ((((!((map__18785 == null)))?(((((map__18785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18785):map__18785);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18785__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
