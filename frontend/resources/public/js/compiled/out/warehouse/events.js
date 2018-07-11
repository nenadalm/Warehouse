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
var G__12517__delegate = function (args){
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
var G__12517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12518__i = 0, G__12518__a = new Array(arguments.length -  0);
while (G__12518__i < G__12518__a.length) {G__12518__a[G__12518__i] = arguments[G__12518__i + 0]; ++G__12518__i;}
  args = new cljs.core.IndexedSeq(G__12518__a,0,null);
} 
return G__12517__delegate.call(this,args);};
G__12517.cljs$lang$maxFixedArity = 0;
G__12517.cljs$lang$applyTo = (function (arglist__12519){
var args = cljs.core.seq(arglist__12519);
return G__12517__delegate(args);
});
G__12517.cljs$core$IFn$_invoke$arity$variadic = G__12517__delegate;
return G__12517;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__12520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12520) : re_frame.core.dispatch.call(null,G__12520));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
var G__12521_12523 = cljs.core.cst$kw$navigate;
var G__12522_12524 = ((function (G__12521_12523){
return (function (url){
return warehouse.routes.nav_BANG_(url);
});})(G__12521_12523))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12521_12523,G__12522_12524) : re_frame.core.reg_fx.call(null,G__12521_12523,G__12522_12524));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warehouse$events_SLASH_navigate,(function (_,p__12525){
var vec__12526 = p__12525;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12526,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12526,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$navigate,page], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__12529 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__12529);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__12530,_){
var map__12531 = p__12530;
var map__12531__$1 = ((((!((map__12531 == null)))?(((((map__12531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12531):map__12531);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12531__$1,cljs.core.cst$kw$db);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__12533){
var vec__12534 = p__12533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__12537){
var vec__12538 = p__12537;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12538,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12538,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__12541){
var vec__12542 = p__12541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__12545_12548 = cljs.core.cst$kw$state;
var G__12546_12549 = ((function (G__12545_12548){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__12547 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12547.cljs$core$IFn$_invoke$arity$0 ? fexpr__12547.cljs$core$IFn$_invoke$arity$0() : fexpr__12547.call(null));
})());
});})(G__12545_12548))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12545_12548,G__12546_12549) : re_frame.core.reg_cofx.call(null,G__12545_12548,G__12546_12549));
var G__12550_12552 = cljs.core.cst$kw$change_DASH_sets;
var G__12551_12553 = ((function (G__12550_12552){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__12550_12552))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12550_12552,G__12551_12553) : re_frame.core.reg_cofx.call(null,G__12550_12552,G__12551_12553));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12554 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12554) : re_frame.core.inject_cofx.call(null,G__12554));
})(),(function (){var G__12555 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12555) : re_frame.core.inject_cofx.call(null,G__12555));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__12556_12558 = cljs.core.cst$kw$change_DASH_sets;
var G__12557_12559 = ((function (G__12556_12558){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__12556_12558))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12556_12558,G__12557_12559) : re_frame.core.reg_fx.call(null,G__12556_12558,G__12557_12559));
var G__12560_12563 = cljs.core.cst$kw$state;
var G__12561_12564 = ((function (G__12560_12563){
return (function (value){
var fexpr__12562 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12562.cljs$core$IFn$_invoke$arity$1 ? fexpr__12562.cljs$core$IFn$_invoke$arity$1(value) : fexpr__12562.call(null,value));
});})(G__12560_12563))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12560_12563,G__12561_12564) : re_frame.core.reg_fx.call(null,G__12560_12563,G__12561_12564));
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
var G__12565_12592 = cljs.core.cst$kw$load_DASH_components;
var G__12566_12593 = ((function (G__12565_12592){
return (function (p__12567){
var map__12568 = p__12567;
var map__12568__$1 = ((((!((map__12568 == null)))?(((((map__12568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12568):map__12568);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12568__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12568__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,map__12568,map__12568__$1,limit,offset,G__12565_12592){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,map__12568,map__12568__$1,limit,offset,G__12565_12592){
return (function (state_12581){
var state_val_12582 = (state_12581[(1)]);
if((state_val_12582 === (1))){
var state_12581__$1 = state_12581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12581__$1,(2),ch);
} else {
if((state_val_12582 === (2))){
var inst_12571 = (state_12581[(7)]);
var inst_12571__$1 = (state_12581[(2)]);
var state_12581__$1 = (function (){var statearr_12583 = state_12581;
(statearr_12583[(7)] = inst_12571__$1);

return statearr_12583;
})();
if(cljs.core.truth_(inst_12571__$1)){
var statearr_12584_12594 = state_12581__$1;
(statearr_12584_12594[(1)] = (3));

} else {
var statearr_12585_12595 = state_12581__$1;
(statearr_12585_12595[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12582 === (3))){
var inst_12571 = (state_12581[(7)]);
var inst_12573 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12574 = [cljs.core.cst$kw$components_DASH_loaded,inst_12571,offset];
var inst_12575 = (new cljs.core.PersistentVector(null,3,(5),inst_12573,inst_12574,null));
var inst_12576 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12575) : re_frame.core.dispatch.call(null,inst_12575));
var state_12581__$1 = state_12581;
var statearr_12586_12596 = state_12581__$1;
(statearr_12586_12596[(2)] = inst_12576);

(statearr_12586_12596[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12582 === (4))){
var state_12581__$1 = state_12581;
var statearr_12587_12597 = state_12581__$1;
(statearr_12587_12597[(2)] = null);

(statearr_12587_12597[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12582 === (5))){
var inst_12579 = (state_12581[(2)]);
var state_12581__$1 = state_12581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12581__$1,inst_12579);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,map__12568,map__12568__$1,limit,offset,G__12565_12592))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,map__12568,map__12568__$1,limit,offset,G__12565_12592){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12588 = [null,null,null,null,null,null,null,null];
(statearr_12588[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12588[(1)] = (1));

return statearr_12588;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12581){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12581);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12589){if((e12589 instanceof Object)){
var ex__9324__auto__ = e12589;
var statearr_12590_12598 = state_12581;
(statearr_12590_12598[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12581);

return cljs.core.cst$kw$recur;
} else {
throw e12589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12599 = state_12581;
state_12581 = G__12599;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12581){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,map__12568,map__12568__$1,limit,offset,G__12565_12592))
})();
var state__9425__auto__ = (function (){var statearr_12591 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12591[(6)] = c__9423__auto__);

return statearr_12591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,map__12568,map__12568__$1,limit,offset,G__12565_12592))
);

return c__9423__auto__;
});})(G__12565_12592))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12565_12592,G__12566_12593) : re_frame.core.reg_fx.call(null,G__12565_12592,G__12566_12593));
var G__12600_12632 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__12601_12633 = ((function (G__12600_12632){
return (function (p__12602){
var vec__12603 = p__12602;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12603,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12603,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12603,ids,offset,G__12600_12632){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12603,ids,offset,G__12600_12632){
return (function (state_12621){
var state_val_12622 = (state_12621[(1)]);
if((state_val_12622 === (1))){
var state_12621__$1 = state_12621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12621__$1,(2),ch);
} else {
if((state_val_12622 === (2))){
var inst_12607 = (state_12621[(7)]);
var inst_12607__$1 = (state_12621[(2)]);
var state_12621__$1 = (function (){var statearr_12623 = state_12621;
(statearr_12623[(7)] = inst_12607__$1);

return statearr_12623;
})();
if(cljs.core.truth_(inst_12607__$1)){
var statearr_12624_12634 = state_12621__$1;
(statearr_12624_12634[(1)] = (3));

} else {
var statearr_12625_12635 = state_12621__$1;
(statearr_12625_12635[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12622 === (3))){
var inst_12607 = (state_12621[(7)]);
var inst_12609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12610 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_12611 = cljs.core.count(inst_12607);
var inst_12612 = [inst_12607,inst_12611];
var inst_12613 = cljs.core.PersistentHashMap.fromArrays(inst_12610,inst_12612);
var inst_12614 = [cljs.core.cst$kw$components_DASH_loaded,inst_12613,offset];
var inst_12615 = (new cljs.core.PersistentVector(null,3,(5),inst_12609,inst_12614,null));
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
});})(c__9423__auto__,ch,vec__12603,ids,offset,G__12600_12632))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12603,ids,offset,G__12600_12632){
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
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12603,ids,offset,G__12600_12632))
})();
var state__9425__auto__ = (function (){var statearr_12631 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12631[(6)] = c__9423__auto__);

return statearr_12631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12603,ids,offset,G__12600_12632))
);

return c__9423__auto__;
});})(G__12600_12632))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12600_12632,G__12601_12633) : re_frame.core.reg_fx.call(null,G__12600_12632,G__12601_12633));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__12641,p__12642){
var map__12643 = p__12641;
var map__12643__$1 = ((((!((map__12643 == null)))?(((((map__12643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12643):map__12643);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12643__$1,cljs.core.cst$kw$db);
var vec__12644 = p__12642;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__12648 = ((function (map__12643,map__12643__$1,db,vec__12644,_,components_data,offset){
return (function (p1__12640_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__12640_SHARP_);
});})(map__12643,map__12643__$1,db,vec__12644,_,components_data,offset))
;
return fexpr__12648(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__12649){
var vec__12650 = p__12649;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__12653,p__12654){
var map__12655 = p__12653;
var map__12655__$1 = ((((!((map__12655 == null)))?(((((map__12655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12655):map__12655);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12655__$1,cljs.core.cst$kw$db);
var vec__12656 = p__12654;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__12660,p__12661){
var map__12662 = p__12660;
var map__12662__$1 = ((((!((map__12662 == null)))?(((((map__12662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12662):map__12662);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12662__$1,cljs.core.cst$kw$db);
var vec__12663 = p__12661;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12667_12683 = cljs.core.cst$kw$store_DASH_component;
var G__12668_12684 = ((function (G__12667_12683){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12667_12683){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12667_12683){
return (function (state_12676){
var state_val_12677 = (state_12676[(1)]);
if((state_val_12677 === (1))){
var state_12676__$1 = state_12676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12676__$1,(2),ch);
} else {
if((state_val_12677 === (2))){
var inst_12670 = (state_12676[(2)]);
var inst_12671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12672 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12673 = (new cljs.core.PersistentVector(null,1,(5),inst_12671,inst_12672,null));
var inst_12674 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12673) : re_frame.core.dispatch.call(null,inst_12673));
var state_12676__$1 = (function (){var statearr_12678 = state_12676;
(statearr_12678[(7)] = inst_12670);

return statearr_12678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12676__$1,inst_12674);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12667_12683))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12667_12683){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12679 = [null,null,null,null,null,null,null,null];
(statearr_12679[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12679[(1)] = (1));

return statearr_12679;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12676){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12676);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12680){if((e12680 instanceof Object)){
var ex__9324__auto__ = e12680;
var statearr_12681_12685 = state_12676;
(statearr_12681_12685[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12676);

return cljs.core.cst$kw$recur;
} else {
throw e12680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12686 = state_12676;
state_12676 = G__12686;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12676){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12667_12683))
})();
var state__9425__auto__ = (function (){var statearr_12682 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12682[(6)] = c__9423__auto__);

return statearr_12682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12667_12683))
);

return c__9423__auto__;
});})(G__12667_12683))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12667_12683,G__12668_12684) : re_frame.core.reg_fx.call(null,G__12667_12683,G__12668_12684));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__12687){
var vec__12688 = p__12687;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__12691 = type;
var G__12691__$1 = (((G__12691 instanceof cljs.core.Keyword))?G__12691.fqn:null);
switch (G__12691__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12691__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__12693){
var vec__12694 = p__12693;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
