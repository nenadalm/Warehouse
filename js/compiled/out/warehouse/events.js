// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.change_set');
goog.require('warehouse.storage.storage');
goog.require('warehouse.notifications.db');
goog.require('warehouse.search.db');
goog.require('warehouse.component_import.db');
goog.require('re_frame.core');
goog.require('warehouse.infinite_scroll.db');
goog.require('cljs.core.async');
goog.require('warehouse.storage.indexeddb');
warehouse.events.default_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$change_DASH_sets,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$backend_DASH_url,"https://warehouse-backend-warehouse-backend.1d35.starter-us-east-1.openshiftapps.com",cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,"",cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$processes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$page,"index",cljs.core.cst$kw$infinite_DASH_scroll,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$page,(1),cljs.core.cst$kw$records_DASH_per_DASH_page,(100),cljs.core.cst$kw$records_DASH_count,(0),cljs.core.cst$kw$pages_DASH_count,(0),cljs.core.cst$kw$loading_DASH_next,false], null)], null);
warehouse.events.debounce = (function warehouse$events$debounce(timeout,f){
var t = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
return ((function (t){
return (function() { 
var G__21549__delegate = function (args){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(t) : cljs.core.deref.call(null,t)))){
var G__21544_21550 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(t) : cljs.core.deref.call(null,t));
clearTimeout(G__21544_21550);
} else {
}

var G__21545 = t;
var G__21546 = (function (){var G__21547 = ((function (G__21545,t){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(t,null) : cljs.core.reset_BANG_.call(null,t,null));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(G__21545,t))
;
var G__21548 = (200);
return setTimeout(G__21547,G__21548);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21545,G__21546) : cljs.core.reset_BANG_.call(null,G__21545,G__21546));
};
var G__21549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21551__i = 0, G__21551__a = new Array(arguments.length -  0);
while (G__21551__i < G__21551__a.length) {G__21551__a[G__21551__i] = arguments[G__21551__i + 0]; ++G__21551__i;}
  args = new cljs.core.IndexedSeq(G__21551__a,0);
} 
return G__21549__delegate.call(this,args);};
G__21549.cljs$lang$maxFixedArity = 0;
G__21549.cljs$lang$applyTo = (function (arglist__21552){
var args = cljs.core.seq(arglist__21552);
return G__21549__delegate(args);
});
G__21549.cljs$core$IFn$_invoke$arity$variadic = G__21549__delegate;
return G__21549;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__21553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21553) : re_frame.core.dispatch.call(null,G__21553));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.array_seq([cljs.core.cst$kw$pages_DASH_count,(function (){var G__21554 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__21554);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__21555,_){
var map__21556 = p__21555;
var map__21556__$1 = ((((!((map__21556 == null)))?((((map__21556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21556):map__21556);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$db);
var sd = cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
var q = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null));
var page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(sd);
if(cljs.core.truth_((function (){var and__7014__auto__ = (cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(sd) < cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(sd));
if(and__7014__auto__){
var and__7014__auto____$1 = warehouse.infinite_scroll.db.should_load_next_page();
if(cljs.core.truth_(and__7014__auto____$1)){
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null)));
} else {
return and__7014__auto____$1;
}
} else {
return and__7014__auto__;
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__21558){
var vec__21559 = p__21558;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21559,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21559,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__21562){
var vec__21563 = p__21562;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21563,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21563,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__21566){
var vec__21567 = p__21566;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21567,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21567,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__21570_21572 = cljs.core.cst$kw$state;
var G__21571_21573 = ((function (G__21570_21572){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null));
});})(G__21570_21572))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__21570_21572,G__21571_21573) : re_frame.core.reg_cofx.call(null,G__21570_21572,G__21571_21573));
var G__21574_21576 = cljs.core.cst$kw$change_DASH_sets;
var G__21575_21577 = ((function (G__21574_21576){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(warehouse.change_set.change_sets) : cljs.core.deref.call(null,warehouse.change_set.change_sets)));
});})(G__21574_21576))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__21574_21576,G__21575_21577) : re_frame.core.reg_cofx.call(null,G__21574_21576,G__21575_21577));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21578 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__21578) : re_frame.core.inject_cofx.call(null,G__21578));
})(),(function (){var G__21579 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__21579) : re_frame.core.inject_cofx.call(null,G__21579));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__21580_21582 = cljs.core.cst$kw$change_DASH_sets;
var G__21581_21583 = ((function (G__21580_21582){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.change_set.change_sets,value) : cljs.core.reset_BANG_.call(null,warehouse.change_set.change_sets,value));
}
});})(G__21580_21582))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21580_21582,G__21581_21583) : re_frame.core.reg_fx.call(null,G__21580_21582,G__21581_21583));
var G__21584_21586 = cljs.core.cst$kw$state;
var G__21585_21587 = ((function (G__21584_21586){
return (function (value){
return cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null,value);
});})(G__21584_21586))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21584_21586,G__21585_21587) : re_frame.core.reg_fx.call(null,G__21584_21586,G__21585_21587));
/**
 * Atom holding reference to last channel used for loading of components.
 * Channel is automatically closed when new value is set via `:close-previous-ch` watch.
 */
warehouse.events.loading_components_ch = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
cljs.core.add_watch(warehouse.events.loading_components_ch,cljs.core.cst$kw$close_DASH_previous_DASH_ch,(function (_,___$1,os,___$2){
if(!((os == null))){
return cljs.core.async.close_BANG_(os);
} else {
return null;
}
}));
var G__21588_21618 = cljs.core.cst$kw$load_DASH_components;
var G__21589_21619 = ((function (G__21588_21618){
return (function (p__21590){
var map__21591 = p__21590;
var map__21591__$1 = ((((!((map__21591 == null)))?((((map__21591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21591):map__21591);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21591__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21591__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.events.loading_components_ch,ch) : cljs.core.reset_BANG_.call(null,warehouse.events.loading_components_ch,ch));

var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,ch,map__21591,map__21591__$1,limit,offset,G__21588_21618){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,ch,map__21591,map__21591__$1,limit,offset,G__21588_21618){
return (function (state_21604){
var state_val_21605 = (state_21604[(1)]);
if((state_val_21605 === (1))){
var state_21604__$1 = state_21604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21604__$1,(2),ch);
} else {
if((state_val_21605 === (2))){
var inst_21594 = (state_21604[(7)]);
var inst_21594__$1 = (state_21604[(2)]);
var state_21604__$1 = (function (){var statearr_21606 = state_21604;
(statearr_21606[(7)] = inst_21594__$1);

return statearr_21606;
})();
if(cljs.core.truth_(inst_21594__$1)){
var statearr_21607_21620 = state_21604__$1;
(statearr_21607_21620[(1)] = (3));

} else {
var statearr_21608_21621 = state_21604__$1;
(statearr_21608_21621[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21605 === (3))){
var inst_21594 = (state_21604[(7)]);
var inst_21596 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21597 = [cljs.core.cst$kw$components_DASH_loaded,inst_21594,offset];
var inst_21598 = (new cljs.core.PersistentVector(null,3,(5),inst_21596,inst_21597,null));
var inst_21599 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_21598) : re_frame.core.dispatch.call(null,inst_21598));
var state_21604__$1 = state_21604;
var statearr_21609_21622 = state_21604__$1;
(statearr_21609_21622[(2)] = inst_21599);

(statearr_21609_21622[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21605 === (4))){
var state_21604__$1 = state_21604;
var statearr_21610_21623 = state_21604__$1;
(statearr_21610_21623[(2)] = null);

(statearr_21610_21623[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21605 === (5))){
var inst_21602 = (state_21604[(2)]);
var state_21604__$1 = state_21604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21604__$1,inst_21602);
} else {
return null;
}
}
}
}
}
});})(c__17637__auto__,ch,map__21591,map__21591__$1,limit,offset,G__21588_21618))
;
return ((function (switch__17513__auto__,c__17637__auto__,ch,map__21591,map__21591__$1,limit,offset,G__21588_21618){
return (function() {
var warehouse$events$state_machine__17514__auto__ = null;
var warehouse$events$state_machine__17514__auto____0 = (function (){
var statearr_21614 = [null,null,null,null,null,null,null,null];
(statearr_21614[(0)] = warehouse$events$state_machine__17514__auto__);

(statearr_21614[(1)] = (1));

return statearr_21614;
});
var warehouse$events$state_machine__17514__auto____1 = (function (state_21604){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_21604);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e21615){if((e21615 instanceof Object)){
var ex__17517__auto__ = e21615;
var statearr_21616_21624 = state_21604;
(statearr_21616_21624[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21604);

return cljs.core.cst$kw$recur;
} else {
throw e21615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__21625 = state_21604;
state_21604 = G__21625;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$events$state_machine__17514__auto__ = function(state_21604){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__17514__auto____0.call(this);
case 1:
return warehouse$events$state_machine__17514__auto____1.call(this,state_21604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__17514__auto____0;
warehouse$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__17514__auto____1;
return warehouse$events$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,ch,map__21591,map__21591__$1,limit,offset,G__21588_21618))
})();
var state__17639__auto__ = (function (){var statearr_21617 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_21617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_21617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,ch,map__21591,map__21591__$1,limit,offset,G__21588_21618))
);

return c__17637__auto__;
});})(G__21588_21618))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21588_21618,G__21589_21619) : re_frame.core.reg_fx.call(null,G__21588_21618,G__21589_21619));
var G__21626_21661 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__21627_21662 = ((function (G__21626_21661){
return (function (p__21628){
var vec__21629 = p__21628;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21629,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21629,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.events.loading_components_ch,ch) : cljs.core.reset_BANG_.call(null,warehouse.events.loading_components_ch,ch));

var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,ch,vec__21629,ids,offset,G__21626_21661){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,ch,vec__21629,ids,offset,G__21626_21661){
return (function (state_21647){
var state_val_21648 = (state_21647[(1)]);
if((state_val_21648 === (1))){
var state_21647__$1 = state_21647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21647__$1,(2),ch);
} else {
if((state_val_21648 === (2))){
var inst_21633 = (state_21647[(7)]);
var inst_21633__$1 = (state_21647[(2)]);
var state_21647__$1 = (function (){var statearr_21649 = state_21647;
(statearr_21649[(7)] = inst_21633__$1);

return statearr_21649;
})();
if(cljs.core.truth_(inst_21633__$1)){
var statearr_21650_21663 = state_21647__$1;
(statearr_21650_21663[(1)] = (3));

} else {
var statearr_21651_21664 = state_21647__$1;
(statearr_21651_21664[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21648 === (3))){
var inst_21633 = (state_21647[(7)]);
var inst_21635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21636 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_21637 = cljs.core.count(inst_21633);
var inst_21638 = [inst_21633,inst_21637];
var inst_21639 = cljs.core.PersistentHashMap.fromArrays(inst_21636,inst_21638);
var inst_21640 = [cljs.core.cst$kw$components_DASH_loaded,inst_21639,offset];
var inst_21641 = (new cljs.core.PersistentVector(null,3,(5),inst_21635,inst_21640,null));
var inst_21642 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_21641) : re_frame.core.dispatch.call(null,inst_21641));
var state_21647__$1 = state_21647;
var statearr_21652_21665 = state_21647__$1;
(statearr_21652_21665[(2)] = inst_21642);

(statearr_21652_21665[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21648 === (4))){
var state_21647__$1 = state_21647;
var statearr_21653_21666 = state_21647__$1;
(statearr_21653_21666[(2)] = null);

(statearr_21653_21666[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21648 === (5))){
var inst_21645 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21647__$1,inst_21645);
} else {
return null;
}
}
}
}
}
});})(c__17637__auto__,ch,vec__21629,ids,offset,G__21626_21661))
;
return ((function (switch__17513__auto__,c__17637__auto__,ch,vec__21629,ids,offset,G__21626_21661){
return (function() {
var warehouse$events$state_machine__17514__auto__ = null;
var warehouse$events$state_machine__17514__auto____0 = (function (){
var statearr_21657 = [null,null,null,null,null,null,null,null];
(statearr_21657[(0)] = warehouse$events$state_machine__17514__auto__);

(statearr_21657[(1)] = (1));

return statearr_21657;
});
var warehouse$events$state_machine__17514__auto____1 = (function (state_21647){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_21647);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e21658){if((e21658 instanceof Object)){
var ex__17517__auto__ = e21658;
var statearr_21659_21667 = state_21647;
(statearr_21659_21667[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21647);

return cljs.core.cst$kw$recur;
} else {
throw e21658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__21668 = state_21647;
state_21647 = G__21668;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$events$state_machine__17514__auto__ = function(state_21647){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__17514__auto____0.call(this);
case 1:
return warehouse$events$state_machine__17514__auto____1.call(this,state_21647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__17514__auto____0;
warehouse$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__17514__auto____1;
return warehouse$events$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,ch,vec__21629,ids,offset,G__21626_21661))
})();
var state__17639__auto__ = (function (){var statearr_21660 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_21660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_21660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,ch,vec__21629,ids,offset,G__21626_21661))
);

return c__17637__auto__;
});})(G__21626_21661))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21626_21661,G__21627_21662) : re_frame.core.reg_fx.call(null,G__21626_21661,G__21627_21662));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__21670,p__21671){
var map__21672 = p__21670;
var map__21672__$1 = ((((!((map__21672 == null)))?((((map__21672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21672):map__21672);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21672__$1,cljs.core.cst$kw$db);
var vec__21673 = p__21671;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21673,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21673,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21673,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(((function (map__21672,map__21672__$1,db,vec__21673,_,components_data,offset){
return (function (p1__21669_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__21669_SHARP_);
});})(map__21672,map__21672__$1,db,vec__21673,_,components_data,offset))
.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.array_seq([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__21677){
var vec__21678 = p__21677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21678,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21678,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21678,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__21681,p__21682){
var map__21683 = p__21681;
var map__21683__$1 = ((((!((map__21683 == null)))?((((map__21683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21683):map__21683);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,cljs.core.cst$kw$db);
var vec__21684 = p__21682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21684,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21684,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21684,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__21688,p__21689){
var map__21690 = p__21688;
var map__21690__$1 = ((((!((map__21690 == null)))?((((map__21690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21690):map__21690);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21690__$1,cljs.core.cst$kw$db);
var vec__21691 = p__21689;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21691,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21691,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__21695_21714 = cljs.core.cst$kw$store_DASH_component;
var G__21696_21715 = ((function (G__21695_21714){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,ch,G__21695_21714){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,ch,G__21695_21714){
return (function (state_21704){
var state_val_21705 = (state_21704[(1)]);
if((state_val_21705 === (1))){
var state_21704__$1 = state_21704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21704__$1,(2),ch);
} else {
if((state_val_21705 === (2))){
var inst_21698 = (state_21704[(2)]);
var inst_21699 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21700 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_21701 = (new cljs.core.PersistentVector(null,1,(5),inst_21699,inst_21700,null));
var inst_21702 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_21701) : re_frame.core.dispatch.call(null,inst_21701));
var state_21704__$1 = (function (){var statearr_21706 = state_21704;
(statearr_21706[(7)] = inst_21698);

return statearr_21706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21704__$1,inst_21702);
} else {
return null;
}
}
});})(c__17637__auto__,ch,G__21695_21714))
;
return ((function (switch__17513__auto__,c__17637__auto__,ch,G__21695_21714){
return (function() {
var warehouse$events$state_machine__17514__auto__ = null;
var warehouse$events$state_machine__17514__auto____0 = (function (){
var statearr_21710 = [null,null,null,null,null,null,null,null];
(statearr_21710[(0)] = warehouse$events$state_machine__17514__auto__);

(statearr_21710[(1)] = (1));

return statearr_21710;
});
var warehouse$events$state_machine__17514__auto____1 = (function (state_21704){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_21704);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e21711){if((e21711 instanceof Object)){
var ex__17517__auto__ = e21711;
var statearr_21712_21716 = state_21704;
(statearr_21712_21716[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21704);

return cljs.core.cst$kw$recur;
} else {
throw e21711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__21717 = state_21704;
state_21704 = G__21717;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$events$state_machine__17514__auto__ = function(state_21704){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__17514__auto____0.call(this);
case 1:
return warehouse$events$state_machine__17514__auto____1.call(this,state_21704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__17514__auto____0;
warehouse$events$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__17514__auto____1;
return warehouse$events$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,ch,G__21695_21714))
})();
var state__17639__auto__ = (function (){var statearr_21713 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_21713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_21713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,ch,G__21695_21714))
);

return c__17637__auto__;
});})(G__21695_21714))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21695_21714,G__21696_21715) : re_frame.core.reg_fx.call(null,G__21695_21714,G__21696_21715));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__21718){
var vec__21719 = p__21718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21719,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21719,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21719,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21719,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__21722 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21722) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__21724){
var vec__21725 = p__21724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21725,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21725,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
