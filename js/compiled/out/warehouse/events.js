// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.change_set');
goog.require('warehouse.storage.storage');
goog.require('warehouse.notifications.db');
goog.require('warehouse.search.db');
goog.require('warehouse.component_import.db');
goog.require('warehouse.routes');
goog.require('re_frame.core');
goog.require('warehouse.infinite_scroll.db');
goog.require('cljs.core.async');
goog.require('warehouse.storage.indexeddb');
warehouse.events.default_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$change_DASH_sets,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$backend_DASH_url,"https://warehouse-backend-warehouse-backend.1d35.starter-us-east-1.openshiftapps.com",cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,"",cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$processes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$page,cljs.core.cst$kw$index,cljs.core.cst$kw$infinite_DASH_scroll,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$page,(1),cljs.core.cst$kw$records_DASH_per_DASH_page,(100),cljs.core.cst$kw$records_DASH_count,(0),cljs.core.cst$kw$pages_DASH_count,(0),cljs.core.cst$kw$loading_DASH_next,false], null)], null);
warehouse.events.debounce = (function warehouse$events$debounce(timeout,f){
var t = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (t){
return (function() { 
var G__12557__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref(t))){
clearTimeout(cljs.core.deref(t));
} else {
}

return cljs.core.reset_BANG_(t,setTimeout(((function (t){
return (function (){
cljs.core.reset_BANG_(t,null);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(t))
,(200)));
};
var G__12557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12558__i = 0, G__12558__a = new Array(arguments.length -  0);
while (G__12558__i < G__12558__a.length) {G__12558__a[G__12558__i] = arguments[G__12558__i + 0]; ++G__12558__i;}
  args = new cljs.core.IndexedSeq(G__12558__a,0,null);
} 
return G__12557__delegate.call(this,args);};
G__12557.cljs$lang$maxFixedArity = 0;
G__12557.cljs$lang$applyTo = (function (arglist__12559){
var args = cljs.core.seq(arglist__12559);
return G__12557__delegate(args);
});
G__12557.cljs$core$IFn$_invoke$arity$variadic = G__12557__delegate;
return G__12557;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__12560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12560) : re_frame.core.dispatch.call(null,G__12560));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
var G__12561_12563 = cljs.core.cst$kw$navigate;
var G__12562_12564 = ((function (G__12561_12563){
return (function (url){
return warehouse.routes.nav_BANG_(url);
});})(G__12561_12563))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12561_12563,G__12562_12564) : re_frame.core.reg_fx.call(null,G__12561_12563,G__12562_12564));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warehouse$events_SLASH_navigate,(function (_,p__12565){
var vec__12566 = p__12565;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$navigate,page], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__12569 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__12569);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__12570,_){
var map__12571 = p__12570;
var map__12571__$1 = ((((!((map__12571 == null)))?(((((map__12571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12571):map__12571);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12571__$1,cljs.core.cst$kw$db);
var sd = cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
var q = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null));
var page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(sd);
if(cljs.core.truth_((function (){var and__3938__auto__ = (cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(sd) < cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(sd));
if(and__3938__auto__){
var and__3938__auto____$1 = warehouse.infinite_scroll.db.should_load_next_page();
if(cljs.core.truth_(and__3938__auto____$1)){
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null)));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sd,cljs.core.cst$kw$records_DASH_per_DASH_page);
var offset = (page * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
if(cljs.core.empty_QMARK_(q)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),true),cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,limit,cljs.core.cst$kw$offset,offset], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),true),cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null)),offset,(limit + offset)),offset], null)], null);
}
} else {
return null;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__12573){
var vec__12574 = p__12573;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12574,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12574,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__12577){
var vec__12578 = p__12577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__12581){
var vec__12582 = p__12581;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__12585_12588 = cljs.core.cst$kw$state;
var G__12586_12589 = ((function (G__12585_12588){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__12587 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12587.cljs$core$IFn$_invoke$arity$0 ? fexpr__12587.cljs$core$IFn$_invoke$arity$0() : fexpr__12587.call(null));
})());
});})(G__12585_12588))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12585_12588,G__12586_12589) : re_frame.core.reg_cofx.call(null,G__12585_12588,G__12586_12589));
var G__12590_12592 = cljs.core.cst$kw$change_DASH_sets;
var G__12591_12593 = ((function (G__12590_12592){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__12590_12592))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12590_12592,G__12591_12593) : re_frame.core.reg_cofx.call(null,G__12590_12592,G__12591_12593));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12594 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12594) : re_frame.core.inject_cofx.call(null,G__12594));
})(),(function (){var G__12595 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12595) : re_frame.core.inject_cofx.call(null,G__12595));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__12596_12598 = cljs.core.cst$kw$change_DASH_sets;
var G__12597_12599 = ((function (G__12596_12598){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__12596_12598))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12596_12598,G__12597_12599) : re_frame.core.reg_fx.call(null,G__12596_12598,G__12597_12599));
var G__12600_12603 = cljs.core.cst$kw$state;
var G__12601_12604 = ((function (G__12600_12603){
return (function (value){
var fexpr__12602 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12602.cljs$core$IFn$_invoke$arity$1 ? fexpr__12602.cljs$core$IFn$_invoke$arity$1(value) : fexpr__12602.call(null,value));
});})(G__12600_12603))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12600_12603,G__12601_12604) : re_frame.core.reg_fx.call(null,G__12600_12603,G__12601_12604));
/**
 * Atom holding reference to last channel used for loading of components.
 * Channel is automatically closed when new value is set via `:close-previous-ch` watch.
 */
warehouse.events.loading_components_ch = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.add_watch(warehouse.events.loading_components_ch,cljs.core.cst$kw$close_DASH_previous_DASH_ch,(function (_,___$1,os,___$2){
if(!((os == null))){
return cljs.core.async.close_BANG_(os);
} else {
return null;
}
}));
var G__12605_12632 = cljs.core.cst$kw$load_DASH_components;
var G__12606_12633 = ((function (G__12605_12632){
return (function (p__12607){
var map__12608 = p__12607;
var map__12608__$1 = ((((!((map__12608 == null)))?(((((map__12608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12608):map__12608);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12608__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12608__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,map__12608,map__12608__$1,limit,offset,G__12605_12632){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,map__12608,map__12608__$1,limit,offset,G__12605_12632){
return (function (state_12621){
var state_val_12622 = (state_12621[(1)]);
if((state_val_12622 === (1))){
var state_12621__$1 = state_12621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12621__$1,(2),ch);
} else {
if((state_val_12622 === (2))){
var inst_12611 = (state_12621[(7)]);
var inst_12611__$1 = (state_12621[(2)]);
var state_12621__$1 = (function (){var statearr_12623 = state_12621;
(statearr_12623[(7)] = inst_12611__$1);

return statearr_12623;
})();
if(cljs.core.truth_(inst_12611__$1)){
var statearr_12624_12634 = state_12621__$1;
(statearr_12624_12634[(1)] = (3));

} else {
var statearr_12625_12635 = state_12621__$1;
(statearr_12625_12635[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12622 === (3))){
var inst_12611 = (state_12621[(7)]);
var inst_12613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12614 = [cljs.core.cst$kw$components_DASH_loaded,inst_12611,offset];
var inst_12615 = (new cljs.core.PersistentVector(null,3,(5),inst_12613,inst_12614,null));
var inst_12616 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12615) : re_frame.core.dispatch.call(null,inst_12615));
var state_12621__$1 = state_12621;
var statearr_12626_12636 = state_12621__$1;
(statearr_12626_12636[(2)] = inst_12616);

(statearr_12626_12636[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12622 === (4))){
var state_12621__$1 = state_12621;
var statearr_12627_12637 = state_12621__$1;
(statearr_12627_12637[(2)] = null);

(statearr_12627_12637[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12622 === (5))){
var inst_12619 = (state_12621[(2)]);
var state_12621__$1 = state_12621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12621__$1,inst_12619);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,map__12608,map__12608__$1,limit,offset,G__12605_12632))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,map__12608,map__12608__$1,limit,offset,G__12605_12632){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12628 = [null,null,null,null,null,null,null,null];
(statearr_12628[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12628[(1)] = (1));

return statearr_12628;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12621){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12621);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12629){if((e12629 instanceof Object)){
var ex__9324__auto__ = e12629;
var statearr_12630_12638 = state_12621;
(statearr_12630_12638[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12621);

return cljs.core.cst$kw$recur;
} else {
throw e12629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12639 = state_12621;
state_12621 = G__12639;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12621){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,map__12608,map__12608__$1,limit,offset,G__12605_12632))
})();
var state__9425__auto__ = (function (){var statearr_12631 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12631[(6)] = c__9423__auto__);

return statearr_12631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,map__12608,map__12608__$1,limit,offset,G__12605_12632))
);

return c__9423__auto__;
});})(G__12605_12632))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12605_12632,G__12606_12633) : re_frame.core.reg_fx.call(null,G__12605_12632,G__12606_12633));
var G__12640_12672 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__12641_12673 = ((function (G__12640_12672){
return (function (p__12642){
var vec__12643 = p__12642;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12643,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12643,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12643,ids,offset,G__12640_12672){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12643,ids,offset,G__12640_12672){
return (function (state_12661){
var state_val_12662 = (state_12661[(1)]);
if((state_val_12662 === (1))){
var state_12661__$1 = state_12661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12661__$1,(2),ch);
} else {
if((state_val_12662 === (2))){
var inst_12647 = (state_12661[(7)]);
var inst_12647__$1 = (state_12661[(2)]);
var state_12661__$1 = (function (){var statearr_12663 = state_12661;
(statearr_12663[(7)] = inst_12647__$1);

return statearr_12663;
})();
if(cljs.core.truth_(inst_12647__$1)){
var statearr_12664_12674 = state_12661__$1;
(statearr_12664_12674[(1)] = (3));

} else {
var statearr_12665_12675 = state_12661__$1;
(statearr_12665_12675[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12662 === (3))){
var inst_12647 = (state_12661[(7)]);
var inst_12649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12650 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_12651 = cljs.core.count(inst_12647);
var inst_12652 = [inst_12647,inst_12651];
var inst_12653 = cljs.core.PersistentHashMap.fromArrays(inst_12650,inst_12652);
var inst_12654 = [cljs.core.cst$kw$components_DASH_loaded,inst_12653,offset];
var inst_12655 = (new cljs.core.PersistentVector(null,3,(5),inst_12649,inst_12654,null));
var inst_12656 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12655) : re_frame.core.dispatch.call(null,inst_12655));
var state_12661__$1 = state_12661;
var statearr_12666_12676 = state_12661__$1;
(statearr_12666_12676[(2)] = inst_12656);

(statearr_12666_12676[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12662 === (4))){
var state_12661__$1 = state_12661;
var statearr_12667_12677 = state_12661__$1;
(statearr_12667_12677[(2)] = null);

(statearr_12667_12677[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12662 === (5))){
var inst_12659 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12661__$1,inst_12659);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12643,ids,offset,G__12640_12672))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12643,ids,offset,G__12640_12672){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12668 = [null,null,null,null,null,null,null,null];
(statearr_12668[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12668[(1)] = (1));

return statearr_12668;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12661){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12661);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12669){if((e12669 instanceof Object)){
var ex__9324__auto__ = e12669;
var statearr_12670_12678 = state_12661;
(statearr_12670_12678[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12661);

return cljs.core.cst$kw$recur;
} else {
throw e12669;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12679 = state_12661;
state_12661 = G__12679;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12661){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12643,ids,offset,G__12640_12672))
})();
var state__9425__auto__ = (function (){var statearr_12671 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12671[(6)] = c__9423__auto__);

return statearr_12671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12643,ids,offset,G__12640_12672))
);

return c__9423__auto__;
});})(G__12640_12672))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12640_12672,G__12641_12673) : re_frame.core.reg_fx.call(null,G__12640_12672,G__12641_12673));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__12681,p__12682){
var map__12683 = p__12681;
var map__12683__$1 = ((((!((map__12683 == null)))?(((((map__12683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12683):map__12683);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12683__$1,cljs.core.cst$kw$db);
var vec__12684 = p__12682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12684,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12684,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12684,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__12688 = ((function (map__12683,map__12683__$1,db,vec__12684,_,components_data,offset){
return (function (p1__12680_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__12680_SHARP_);
});})(map__12683,map__12683__$1,db,vec__12684,_,components_data,offset))
;
return fexpr__12688(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__12689){
var vec__12690 = p__12689;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12690,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12690,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12690,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__12693,p__12694){
var map__12695 = p__12693;
var map__12695__$1 = ((((!((map__12695 == null)))?(((((map__12695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12695):map__12695);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12695__$1,cljs.core.cst$kw$db);
var vec__12696 = p__12694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12696,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12696,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12696,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__12700,p__12701){
var map__12702 = p__12700;
var map__12702__$1 = ((((!((map__12702 == null)))?(((((map__12702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12702):map__12702);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12702__$1,cljs.core.cst$kw$db);
var vec__12703 = p__12701;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12703,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12703,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12707_12723 = cljs.core.cst$kw$store_DASH_component;
var G__12708_12724 = ((function (G__12707_12723){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12707_12723){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12707_12723){
return (function (state_12716){
var state_val_12717 = (state_12716[(1)]);
if((state_val_12717 === (1))){
var state_12716__$1 = state_12716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12716__$1,(2),ch);
} else {
if((state_val_12717 === (2))){
var inst_12710 = (state_12716[(2)]);
var inst_12711 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12712 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12713 = (new cljs.core.PersistentVector(null,1,(5),inst_12711,inst_12712,null));
var inst_12714 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12713) : re_frame.core.dispatch.call(null,inst_12713));
var state_12716__$1 = (function (){var statearr_12718 = state_12716;
(statearr_12718[(7)] = inst_12710);

return statearr_12718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12716__$1,inst_12714);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12707_12723))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12707_12723){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12719 = [null,null,null,null,null,null,null,null];
(statearr_12719[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12719[(1)] = (1));

return statearr_12719;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12716){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12716);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12720){if((e12720 instanceof Object)){
var ex__9324__auto__ = e12720;
var statearr_12721_12725 = state_12716;
(statearr_12721_12725[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12716);

return cljs.core.cst$kw$recur;
} else {
throw e12720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12726 = state_12716;
state_12716 = G__12726;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12716){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12707_12723))
})();
var state__9425__auto__ = (function (){var statearr_12722 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12722[(6)] = c__9423__auto__);

return statearr_12722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12707_12723))
);

return c__9423__auto__;
});})(G__12707_12723))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12707_12723,G__12708_12724) : re_frame.core.reg_fx.call(null,G__12707_12723,G__12708_12724));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__12727){
var vec__12728 = p__12727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12728,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12728,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12728,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12728,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__12731 = type;
var G__12731__$1 = (((G__12731 instanceof cljs.core.Keyword))?G__12731.fqn:null);
switch (G__12731__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12731__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__12733){
var vec__12734 = p__12733;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12734,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12734,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
