// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.index');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
goog.require('warehouse.storage.indexeddb');
goog.require('cljs.core.async');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_update,(function (p__20930,p__20931){
var map__20932 = p__20930;
var map__20932__$1 = ((((!((map__20932 == null)))?((((map__20932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20932):map__20932);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20932__$1,cljs.core.cst$kw$db);
var vec__20933 = p__20931;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20933,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20933,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null),val),cljs.core.cst$kw$update_DASH_filter,val], null);
}));
/**
 * Atom holding reference to last channel used for updating filter.
 * Channel is automatically closed when new value is set via `:close-previous-ch` watch.
 */
warehouse.search.events.update_filter_ch = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
cljs.core.add_watch(warehouse.search.events.update_filter_ch,cljs.core.cst$kw$close_DASH_previous_DASH_ch,(function (_,___$1,os,___$2){
if(!((os == null))){
return cljs.core.async.close_BANG_(os);
} else {
return null;
}
}));
var G__20937_20964 = cljs.core.cst$kw$update_DASH_filter;
var G__20938_20965 = ((function (G__20937_20964){
return (function (q){
var ch = warehouse.storage.indexeddb.filter_ids(q);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.search.events.update_filter_ch,ch) : cljs.core.reset_BANG_.call(null,warehouse.search.events.update_filter_ch,ch));

var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,ch,G__20937_20964){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,ch,G__20937_20964){
return (function (state_20950){
var state_val_20951 = (state_20950[(1)]);
if((state_val_20951 === (1))){
var state_20950__$1 = state_20950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20950__$1,(2),ch);
} else {
if((state_val_20951 === (2))){
var inst_20940 = (state_20950[(7)]);
var inst_20940__$1 = (state_20950[(2)]);
var state_20950__$1 = (function (){var statearr_20952 = state_20950;
(statearr_20952[(7)] = inst_20940__$1);

return statearr_20952;
})();
if(cljs.core.truth_(inst_20940__$1)){
var statearr_20953_20966 = state_20950__$1;
(statearr_20953_20966[(1)] = (3));

} else {
var statearr_20954_20967 = state_20950__$1;
(statearr_20954_20967[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20951 === (3))){
var inst_20940 = (state_20950[(7)]);
var inst_20942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20943 = [cljs.core.cst$kw$filter_DASH_updated,inst_20940];
var inst_20944 = (new cljs.core.PersistentVector(null,2,(5),inst_20942,inst_20943,null));
var inst_20945 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_20944) : re_frame.core.dispatch.call(null,inst_20944));
var state_20950__$1 = state_20950;
var statearr_20955_20968 = state_20950__$1;
(statearr_20955_20968[(2)] = inst_20945);

(statearr_20955_20968[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20951 === (4))){
var state_20950__$1 = state_20950;
var statearr_20956_20969 = state_20950__$1;
(statearr_20956_20969[(2)] = null);

(statearr_20956_20969[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20951 === (5))){
var inst_20948 = (state_20950[(2)]);
var state_20950__$1 = state_20950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20950__$1,inst_20948);
} else {
return null;
}
}
}
}
}
});})(c__17637__auto__,ch,G__20937_20964))
;
return ((function (switch__17513__auto__,c__17637__auto__,ch,G__20937_20964){
return (function() {
var warehouse$search$events$state_machine__17514__auto__ = null;
var warehouse$search$events$state_machine__17514__auto____0 = (function (){
var statearr_20960 = [null,null,null,null,null,null,null,null];
(statearr_20960[(0)] = warehouse$search$events$state_machine__17514__auto__);

(statearr_20960[(1)] = (1));

return statearr_20960;
});
var warehouse$search$events$state_machine__17514__auto____1 = (function (state_20950){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20950);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20961){if((e20961 instanceof Object)){
var ex__17517__auto__ = e20961;
var statearr_20962_20970 = state_20950;
(statearr_20962_20970[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20950);

return cljs.core.cst$kw$recur;
} else {
throw e20961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20971 = state_20950;
state_20950 = G__20971;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$search$events$state_machine__17514__auto__ = function(state_20950){
switch(arguments.length){
case 0:
return warehouse$search$events$state_machine__17514__auto____0.call(this);
case 1:
return warehouse$search$events$state_machine__17514__auto____1.call(this,state_20950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$search$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$search$events$state_machine__17514__auto____0;
warehouse$search$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$search$events$state_machine__17514__auto____1;
return warehouse$search$events$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,ch,G__20937_20964))
})();
var state__17639__auto__ = (function (){var statearr_20963 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_20963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,ch,G__20937_20964))
);

return c__17637__auto__;
});})(G__20937_20964))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__20937_20964,G__20938_20965) : re_frame.core.reg_fx.call(null,G__20937_20964,G__20938_20965));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_updated,(function (p__20972,p__20973){
var map__20974 = p__20972;
var map__20974__$1 = ((((!((map__20974 == null)))?((((map__20974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20974):map__20974);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,cljs.core.cst$kw$db);
var vec__20975 = p__20973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20975,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20975,(1),null);
var eff = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null),ids)], null);
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),cljs.core.cst$kw$offset,(0)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(eff,cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)),ids),(0)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__20979,_){
var map__20980 = p__20979;
var map__20980__$1 = ((((!((map__20980 == null)))?((((map__20980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20980):map__20980);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20980__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
