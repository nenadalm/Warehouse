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
var G__12612__delegate = function (args){
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
var G__12612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12613__i = 0, G__12613__a = new Array(arguments.length -  0);
while (G__12613__i < G__12613__a.length) {G__12613__a[G__12613__i] = arguments[G__12613__i + 0]; ++G__12613__i;}
  args = new cljs.core.IndexedSeq(G__12613__a,0,null);
} 
return G__12612__delegate.call(this,args);};
G__12612.cljs$lang$maxFixedArity = 0;
G__12612.cljs$lang$applyTo = (function (arglist__12614){
var args = cljs.core.seq(arglist__12614);
return G__12612__delegate(args);
});
G__12612.cljs$core$IFn$_invoke$arity$variadic = G__12612__delegate;
return G__12612;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__12615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12615) : re_frame.core.dispatch.call(null,G__12615));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
var G__12616_12618 = cljs.core.cst$kw$navigate;
var G__12617_12619 = ((function (G__12616_12618){
return (function (url){
return warehouse.routes.nav_BANG_(url);
});})(G__12616_12618))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12616_12618,G__12617_12619) : re_frame.core.reg_fx.call(null,G__12616_12618,G__12617_12619));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warehouse$events_SLASH_navigate,(function (_,p__12620){
var vec__12621 = p__12620;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12621,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12621,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$navigate,page], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__12624 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__12624);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__12625,_){
var map__12626 = p__12625;
var map__12626__$1 = ((((!((map__12626 == null)))?(((((map__12626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12626):map__12626);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12626__$1,cljs.core.cst$kw$db);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__12628){
var vec__12629 = p__12628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__12632){
var vec__12633 = p__12632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__12636){
var vec__12637 = p__12636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12637,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12637,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__12640_12643 = cljs.core.cst$kw$state;
var G__12641_12644 = ((function (G__12640_12643){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__12642 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12642.cljs$core$IFn$_invoke$arity$0 ? fexpr__12642.cljs$core$IFn$_invoke$arity$0() : fexpr__12642.call(null));
})());
});})(G__12640_12643))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12640_12643,G__12641_12644) : re_frame.core.reg_cofx.call(null,G__12640_12643,G__12641_12644));
var G__12645_12647 = cljs.core.cst$kw$change_DASH_sets;
var G__12646_12648 = ((function (G__12645_12647){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__12645_12647))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12645_12647,G__12646_12648) : re_frame.core.reg_cofx.call(null,G__12645_12647,G__12646_12648));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12649 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12649) : re_frame.core.inject_cofx.call(null,G__12649));
})(),(function (){var G__12650 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12650) : re_frame.core.inject_cofx.call(null,G__12650));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__12651_12653 = cljs.core.cst$kw$change_DASH_sets;
var G__12652_12654 = ((function (G__12651_12653){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__12651_12653))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12651_12653,G__12652_12654) : re_frame.core.reg_fx.call(null,G__12651_12653,G__12652_12654));
var G__12655_12658 = cljs.core.cst$kw$state;
var G__12656_12659 = ((function (G__12655_12658){
return (function (value){
var fexpr__12657 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12657.cljs$core$IFn$_invoke$arity$1 ? fexpr__12657.cljs$core$IFn$_invoke$arity$1(value) : fexpr__12657.call(null,value));
});})(G__12655_12658))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12655_12658,G__12656_12659) : re_frame.core.reg_fx.call(null,G__12655_12658,G__12656_12659));
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
var G__12660_12687 = cljs.core.cst$kw$load_DASH_components;
var G__12661_12688 = ((function (G__12660_12687){
return (function (p__12662){
var map__12663 = p__12662;
var map__12663__$1 = ((((!((map__12663 == null)))?(((((map__12663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12663):map__12663);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12663__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12663__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,map__12663,map__12663__$1,limit,offset,G__12660_12687){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,map__12663,map__12663__$1,limit,offset,G__12660_12687){
return (function (state_12676){
var state_val_12677 = (state_12676[(1)]);
if((state_val_12677 === (1))){
var state_12676__$1 = state_12676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12676__$1,(2),ch);
} else {
if((state_val_12677 === (2))){
var inst_12666 = (state_12676[(7)]);
var inst_12666__$1 = (state_12676[(2)]);
var state_12676__$1 = (function (){var statearr_12678 = state_12676;
(statearr_12678[(7)] = inst_12666__$1);

return statearr_12678;
})();
if(cljs.core.truth_(inst_12666__$1)){
var statearr_12679_12689 = state_12676__$1;
(statearr_12679_12689[(1)] = (3));

} else {
var statearr_12680_12690 = state_12676__$1;
(statearr_12680_12690[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12677 === (3))){
var inst_12666 = (state_12676[(7)]);
var inst_12668 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12669 = [cljs.core.cst$kw$components_DASH_loaded,inst_12666,offset];
var inst_12670 = (new cljs.core.PersistentVector(null,3,(5),inst_12668,inst_12669,null));
var inst_12671 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12670) : re_frame.core.dispatch.call(null,inst_12670));
var state_12676__$1 = state_12676;
var statearr_12681_12691 = state_12676__$1;
(statearr_12681_12691[(2)] = inst_12671);

(statearr_12681_12691[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12677 === (4))){
var state_12676__$1 = state_12676;
var statearr_12682_12692 = state_12676__$1;
(statearr_12682_12692[(2)] = null);

(statearr_12682_12692[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12677 === (5))){
var inst_12674 = (state_12676[(2)]);
var state_12676__$1 = state_12676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12676__$1,inst_12674);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,map__12663,map__12663__$1,limit,offset,G__12660_12687))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,map__12663,map__12663__$1,limit,offset,G__12660_12687){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12683 = [null,null,null,null,null,null,null,null];
(statearr_12683[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12683[(1)] = (1));

return statearr_12683;
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
}catch (e12684){if((e12684 instanceof Object)){
var ex__9324__auto__ = e12684;
var statearr_12685_12693 = state_12676;
(statearr_12685_12693[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12676);

return cljs.core.cst$kw$recur;
} else {
throw e12684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12694 = state_12676;
state_12676 = G__12694;
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
;})(switch__9320__auto__,c__9423__auto__,ch,map__12663,map__12663__$1,limit,offset,G__12660_12687))
})();
var state__9425__auto__ = (function (){var statearr_12686 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12686[(6)] = c__9423__auto__);

return statearr_12686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,map__12663,map__12663__$1,limit,offset,G__12660_12687))
);

return c__9423__auto__;
});})(G__12660_12687))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12660_12687,G__12661_12688) : re_frame.core.reg_fx.call(null,G__12660_12687,G__12661_12688));
var G__12695_12727 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__12696_12728 = ((function (G__12695_12727){
return (function (p__12697){
var vec__12698 = p__12697;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12698,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12698,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12698,ids,offset,G__12695_12727){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12698,ids,offset,G__12695_12727){
return (function (state_12716){
var state_val_12717 = (state_12716[(1)]);
if((state_val_12717 === (1))){
var state_12716__$1 = state_12716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12716__$1,(2),ch);
} else {
if((state_val_12717 === (2))){
var inst_12702 = (state_12716[(7)]);
var inst_12702__$1 = (state_12716[(2)]);
var state_12716__$1 = (function (){var statearr_12718 = state_12716;
(statearr_12718[(7)] = inst_12702__$1);

return statearr_12718;
})();
if(cljs.core.truth_(inst_12702__$1)){
var statearr_12719_12729 = state_12716__$1;
(statearr_12719_12729[(1)] = (3));

} else {
var statearr_12720_12730 = state_12716__$1;
(statearr_12720_12730[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12717 === (3))){
var inst_12702 = (state_12716[(7)]);
var inst_12704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12705 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_12706 = cljs.core.count(inst_12702);
var inst_12707 = [inst_12702,inst_12706];
var inst_12708 = cljs.core.PersistentHashMap.fromArrays(inst_12705,inst_12707);
var inst_12709 = [cljs.core.cst$kw$components_DASH_loaded,inst_12708,offset];
var inst_12710 = (new cljs.core.PersistentVector(null,3,(5),inst_12704,inst_12709,null));
var inst_12711 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12710) : re_frame.core.dispatch.call(null,inst_12710));
var state_12716__$1 = state_12716;
var statearr_12721_12731 = state_12716__$1;
(statearr_12721_12731[(2)] = inst_12711);

(statearr_12721_12731[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12717 === (4))){
var state_12716__$1 = state_12716;
var statearr_12722_12732 = state_12716__$1;
(statearr_12722_12732[(2)] = null);

(statearr_12722_12732[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12717 === (5))){
var inst_12714 = (state_12716[(2)]);
var state_12716__$1 = state_12716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12716__$1,inst_12714);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12698,ids,offset,G__12695_12727))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12698,ids,offset,G__12695_12727){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12723 = [null,null,null,null,null,null,null,null];
(statearr_12723[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12723[(1)] = (1));

return statearr_12723;
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
}catch (e12724){if((e12724 instanceof Object)){
var ex__9324__auto__ = e12724;
var statearr_12725_12733 = state_12716;
(statearr_12725_12733[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12716);

return cljs.core.cst$kw$recur;
} else {
throw e12724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12734 = state_12716;
state_12716 = G__12734;
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
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12698,ids,offset,G__12695_12727))
})();
var state__9425__auto__ = (function (){var statearr_12726 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12726[(6)] = c__9423__auto__);

return statearr_12726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12698,ids,offset,G__12695_12727))
);

return c__9423__auto__;
});})(G__12695_12727))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12695_12727,G__12696_12728) : re_frame.core.reg_fx.call(null,G__12695_12727,G__12696_12728));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__12736,p__12737){
var map__12738 = p__12736;
var map__12738__$1 = ((((!((map__12738 == null)))?(((((map__12738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12738):map__12738);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12738__$1,cljs.core.cst$kw$db);
var vec__12739 = p__12737;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__12743 = ((function (map__12738,map__12738__$1,db,vec__12739,_,components_data,offset){
return (function (p1__12735_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__12735_SHARP_);
});})(map__12738,map__12738__$1,db,vec__12739,_,components_data,offset))
;
return fexpr__12743(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__12744){
var vec__12745 = p__12744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__12748,p__12749){
var map__12750 = p__12748;
var map__12750__$1 = ((((!((map__12750 == null)))?(((((map__12750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12750):map__12750);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,cljs.core.cst$kw$db);
var vec__12751 = p__12749;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__12755,p__12756){
var map__12757 = p__12755;
var map__12757__$1 = ((((!((map__12757 == null)))?(((((map__12757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12757):map__12757);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12757__$1,cljs.core.cst$kw$db);
var vec__12758 = p__12756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12758,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12758,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12762_12778 = cljs.core.cst$kw$store_DASH_component;
var G__12763_12779 = ((function (G__12762_12778){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12762_12778){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12762_12778){
return (function (state_12771){
var state_val_12772 = (state_12771[(1)]);
if((state_val_12772 === (1))){
var state_12771__$1 = state_12771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12771__$1,(2),ch);
} else {
if((state_val_12772 === (2))){
var inst_12765 = (state_12771[(2)]);
var inst_12766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12767 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12768 = (new cljs.core.PersistentVector(null,1,(5),inst_12766,inst_12767,null));
var inst_12769 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12768) : re_frame.core.dispatch.call(null,inst_12768));
var state_12771__$1 = (function (){var statearr_12773 = state_12771;
(statearr_12773[(7)] = inst_12765);

return statearr_12773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12771__$1,inst_12769);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12762_12778))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12762_12778){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12774 = [null,null,null,null,null,null,null,null];
(statearr_12774[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12774[(1)] = (1));

return statearr_12774;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12771){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12771);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12775){if((e12775 instanceof Object)){
var ex__9324__auto__ = e12775;
var statearr_12776_12780 = state_12771;
(statearr_12776_12780[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12771);

return cljs.core.cst$kw$recur;
} else {
throw e12775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12781 = state_12771;
state_12771 = G__12781;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12771){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12762_12778))
})();
var state__9425__auto__ = (function (){var statearr_12777 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12777[(6)] = c__9423__auto__);

return statearr_12777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12762_12778))
);

return c__9423__auto__;
});})(G__12762_12778))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12762_12778,G__12763_12779) : re_frame.core.reg_fx.call(null,G__12762_12778,G__12763_12779));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__12782){
var vec__12783 = p__12782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__12786 = type;
var G__12786__$1 = (((G__12786 instanceof cljs.core.Keyword))?G__12786.fqn:null);
switch (G__12786__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12786__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__12788){
var vec__12789 = p__12788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12789,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12789,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
