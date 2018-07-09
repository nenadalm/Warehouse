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
var G__12495__delegate = function (args){
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
var G__12495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12496__i = 0, G__12496__a = new Array(arguments.length -  0);
while (G__12496__i < G__12496__a.length) {G__12496__a[G__12496__i] = arguments[G__12496__i + 0]; ++G__12496__i;}
  args = new cljs.core.IndexedSeq(G__12496__a,0,null);
} 
return G__12495__delegate.call(this,args);};
G__12495.cljs$lang$maxFixedArity = 0;
G__12495.cljs$lang$applyTo = (function (arglist__12497){
var args = cljs.core.seq(arglist__12497);
return G__12495__delegate(args);
});
G__12495.cljs$core$IFn$_invoke$arity$variadic = G__12495__delegate;
return G__12495;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__12498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12498) : re_frame.core.dispatch.call(null,G__12498));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
var G__12499_12501 = cljs.core.cst$kw$navigate;
var G__12500_12502 = ((function (G__12499_12501){
return (function (url){
return warehouse.routes.nav_BANG_(url);
});})(G__12499_12501))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12499_12501,G__12500_12502) : re_frame.core.reg_fx.call(null,G__12499_12501,G__12500_12502));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warehouse$events_SLASH_navigate,(function (_,p__12503){
var vec__12504 = p__12503;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$navigate,page], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__12507 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__12507);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__12508,_){
var map__12509 = p__12508;
var map__12509__$1 = ((((!((map__12509 == null)))?(((((map__12509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12509):map__12509);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12509__$1,cljs.core.cst$kw$db);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__12511){
var vec__12512 = p__12511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12512,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12512,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__12515){
var vec__12516 = p__12515;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12516,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12516,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__12519){
var vec__12520 = p__12519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12520,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12520,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__12523_12526 = cljs.core.cst$kw$state;
var G__12524_12527 = ((function (G__12523_12526){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__12525 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12525.cljs$core$IFn$_invoke$arity$0 ? fexpr__12525.cljs$core$IFn$_invoke$arity$0() : fexpr__12525.call(null));
})());
});})(G__12523_12526))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12523_12526,G__12524_12527) : re_frame.core.reg_cofx.call(null,G__12523_12526,G__12524_12527));
var G__12528_12530 = cljs.core.cst$kw$change_DASH_sets;
var G__12529_12531 = ((function (G__12528_12530){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__12528_12530))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12528_12530,G__12529_12531) : re_frame.core.reg_cofx.call(null,G__12528_12530,G__12529_12531));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12532 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12532) : re_frame.core.inject_cofx.call(null,G__12532));
})(),(function (){var G__12533 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12533) : re_frame.core.inject_cofx.call(null,G__12533));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__12534_12536 = cljs.core.cst$kw$change_DASH_sets;
var G__12535_12537 = ((function (G__12534_12536){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__12534_12536))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12534_12536,G__12535_12537) : re_frame.core.reg_fx.call(null,G__12534_12536,G__12535_12537));
var G__12538_12541 = cljs.core.cst$kw$state;
var G__12539_12542 = ((function (G__12538_12541){
return (function (value){
var fexpr__12540 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12540.cljs$core$IFn$_invoke$arity$1 ? fexpr__12540.cljs$core$IFn$_invoke$arity$1(value) : fexpr__12540.call(null,value));
});})(G__12538_12541))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12538_12541,G__12539_12542) : re_frame.core.reg_fx.call(null,G__12538_12541,G__12539_12542));
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
var G__12543_12570 = cljs.core.cst$kw$load_DASH_components;
var G__12544_12571 = ((function (G__12543_12570){
return (function (p__12545){
var map__12546 = p__12545;
var map__12546__$1 = ((((!((map__12546 == null)))?(((((map__12546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12546):map__12546);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12546__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12546__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,map__12546,map__12546__$1,limit,offset,G__12543_12570){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,map__12546,map__12546__$1,limit,offset,G__12543_12570){
return (function (state_12559){
var state_val_12560 = (state_12559[(1)]);
if((state_val_12560 === (1))){
var state_12559__$1 = state_12559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12559__$1,(2),ch);
} else {
if((state_val_12560 === (2))){
var inst_12549 = (state_12559[(7)]);
var inst_12549__$1 = (state_12559[(2)]);
var state_12559__$1 = (function (){var statearr_12561 = state_12559;
(statearr_12561[(7)] = inst_12549__$1);

return statearr_12561;
})();
if(cljs.core.truth_(inst_12549__$1)){
var statearr_12562_12572 = state_12559__$1;
(statearr_12562_12572[(1)] = (3));

} else {
var statearr_12563_12573 = state_12559__$1;
(statearr_12563_12573[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12560 === (3))){
var inst_12549 = (state_12559[(7)]);
var inst_12551 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12552 = [cljs.core.cst$kw$components_DASH_loaded,inst_12549,offset];
var inst_12553 = (new cljs.core.PersistentVector(null,3,(5),inst_12551,inst_12552,null));
var inst_12554 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12553) : re_frame.core.dispatch.call(null,inst_12553));
var state_12559__$1 = state_12559;
var statearr_12564_12574 = state_12559__$1;
(statearr_12564_12574[(2)] = inst_12554);

(statearr_12564_12574[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12560 === (4))){
var state_12559__$1 = state_12559;
var statearr_12565_12575 = state_12559__$1;
(statearr_12565_12575[(2)] = null);

(statearr_12565_12575[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12560 === (5))){
var inst_12557 = (state_12559[(2)]);
var state_12559__$1 = state_12559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12559__$1,inst_12557);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,map__12546,map__12546__$1,limit,offset,G__12543_12570))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,map__12546,map__12546__$1,limit,offset,G__12543_12570){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12566 = [null,null,null,null,null,null,null,null];
(statearr_12566[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12566[(1)] = (1));

return statearr_12566;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12559){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12559);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12567){if((e12567 instanceof Object)){
var ex__9324__auto__ = e12567;
var statearr_12568_12576 = state_12559;
(statearr_12568_12576[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12559);

return cljs.core.cst$kw$recur;
} else {
throw e12567;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12577 = state_12559;
state_12559 = G__12577;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12559){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,map__12546,map__12546__$1,limit,offset,G__12543_12570))
})();
var state__9425__auto__ = (function (){var statearr_12569 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12569[(6)] = c__9423__auto__);

return statearr_12569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,map__12546,map__12546__$1,limit,offset,G__12543_12570))
);

return c__9423__auto__;
});})(G__12543_12570))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12543_12570,G__12544_12571) : re_frame.core.reg_fx.call(null,G__12543_12570,G__12544_12571));
var G__12578_12610 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__12579_12611 = ((function (G__12578_12610){
return (function (p__12580){
var vec__12581 = p__12580;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12581,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12581,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12581,ids,offset,G__12578_12610){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12581,ids,offset,G__12578_12610){
return (function (state_12599){
var state_val_12600 = (state_12599[(1)]);
if((state_val_12600 === (1))){
var state_12599__$1 = state_12599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12599__$1,(2),ch);
} else {
if((state_val_12600 === (2))){
var inst_12585 = (state_12599[(7)]);
var inst_12585__$1 = (state_12599[(2)]);
var state_12599__$1 = (function (){var statearr_12601 = state_12599;
(statearr_12601[(7)] = inst_12585__$1);

return statearr_12601;
})();
if(cljs.core.truth_(inst_12585__$1)){
var statearr_12602_12612 = state_12599__$1;
(statearr_12602_12612[(1)] = (3));

} else {
var statearr_12603_12613 = state_12599__$1;
(statearr_12603_12613[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12600 === (3))){
var inst_12585 = (state_12599[(7)]);
var inst_12587 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12588 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_12589 = cljs.core.count(inst_12585);
var inst_12590 = [inst_12585,inst_12589];
var inst_12591 = cljs.core.PersistentHashMap.fromArrays(inst_12588,inst_12590);
var inst_12592 = [cljs.core.cst$kw$components_DASH_loaded,inst_12591,offset];
var inst_12593 = (new cljs.core.PersistentVector(null,3,(5),inst_12587,inst_12592,null));
var inst_12594 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12593) : re_frame.core.dispatch.call(null,inst_12593));
var state_12599__$1 = state_12599;
var statearr_12604_12614 = state_12599__$1;
(statearr_12604_12614[(2)] = inst_12594);

(statearr_12604_12614[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12600 === (4))){
var state_12599__$1 = state_12599;
var statearr_12605_12615 = state_12599__$1;
(statearr_12605_12615[(2)] = null);

(statearr_12605_12615[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12600 === (5))){
var inst_12597 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12599__$1,inst_12597);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12581,ids,offset,G__12578_12610))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12581,ids,offset,G__12578_12610){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12606 = [null,null,null,null,null,null,null,null];
(statearr_12606[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12606[(1)] = (1));

return statearr_12606;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12599){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12599);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12607){if((e12607 instanceof Object)){
var ex__9324__auto__ = e12607;
var statearr_12608_12616 = state_12599;
(statearr_12608_12616[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12599);

return cljs.core.cst$kw$recur;
} else {
throw e12607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12617 = state_12599;
state_12599 = G__12617;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12599){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12581,ids,offset,G__12578_12610))
})();
var state__9425__auto__ = (function (){var statearr_12609 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12609[(6)] = c__9423__auto__);

return statearr_12609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12581,ids,offset,G__12578_12610))
);

return c__9423__auto__;
});})(G__12578_12610))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12578_12610,G__12579_12611) : re_frame.core.reg_fx.call(null,G__12578_12610,G__12579_12611));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__12619,p__12620){
var map__12621 = p__12619;
var map__12621__$1 = ((((!((map__12621 == null)))?(((((map__12621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12621):map__12621);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12621__$1,cljs.core.cst$kw$db);
var vec__12622 = p__12620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12622,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12622,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12622,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__12626 = ((function (map__12621,map__12621__$1,db,vec__12622,_,components_data,offset){
return (function (p1__12618_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__12618_SHARP_);
});})(map__12621,map__12621__$1,db,vec__12622,_,components_data,offset))
;
return fexpr__12626(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__12627){
var vec__12628 = p__12627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12628,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12628,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12628,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__12631,p__12632){
var map__12633 = p__12631;
var map__12633__$1 = ((((!((map__12633 == null)))?(((((map__12633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12633):map__12633);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12633__$1,cljs.core.cst$kw$db);
var vec__12634 = p__12632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__12638,p__12639){
var map__12640 = p__12638;
var map__12640__$1 = ((((!((map__12640 == null)))?(((((map__12640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12640):map__12640);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12640__$1,cljs.core.cst$kw$db);
var vec__12641 = p__12639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12641,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12641,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12645_12661 = cljs.core.cst$kw$store_DASH_component;
var G__12646_12662 = ((function (G__12645_12661){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12645_12661){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12645_12661){
return (function (state_12654){
var state_val_12655 = (state_12654[(1)]);
if((state_val_12655 === (1))){
var state_12654__$1 = state_12654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12654__$1,(2),ch);
} else {
if((state_val_12655 === (2))){
var inst_12648 = (state_12654[(2)]);
var inst_12649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12650 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12651 = (new cljs.core.PersistentVector(null,1,(5),inst_12649,inst_12650,null));
var inst_12652 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12651) : re_frame.core.dispatch.call(null,inst_12651));
var state_12654__$1 = (function (){var statearr_12656 = state_12654;
(statearr_12656[(7)] = inst_12648);

return statearr_12656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12654__$1,inst_12652);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12645_12661))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12645_12661){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12657 = [null,null,null,null,null,null,null,null];
(statearr_12657[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12657[(1)] = (1));

return statearr_12657;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12654){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12654);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12658){if((e12658 instanceof Object)){
var ex__9324__auto__ = e12658;
var statearr_12659_12663 = state_12654;
(statearr_12659_12663[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12654);

return cljs.core.cst$kw$recur;
} else {
throw e12658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12664 = state_12654;
state_12654 = G__12664;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12654){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12645_12661))
})();
var state__9425__auto__ = (function (){var statearr_12660 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12660[(6)] = c__9423__auto__);

return statearr_12660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12645_12661))
);

return c__9423__auto__;
});})(G__12645_12661))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12645_12661,G__12646_12662) : re_frame.core.reg_fx.call(null,G__12645_12661,G__12646_12662));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__12665){
var vec__12666 = p__12665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12666,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12666,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12666,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12666,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__12669 = type;
var G__12669__$1 = (((G__12669 instanceof cljs.core.Keyword))?G__12669.fqn:null);
switch (G__12669__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12669__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__12671){
var vec__12672 = p__12671;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12672,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12672,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
