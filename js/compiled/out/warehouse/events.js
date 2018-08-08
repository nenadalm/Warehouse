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
var G__12628__delegate = function (args){
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
var G__12628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12629__i = 0, G__12629__a = new Array(arguments.length -  0);
while (G__12629__i < G__12629__a.length) {G__12629__a[G__12629__i] = arguments[G__12629__i + 0]; ++G__12629__i;}
  args = new cljs.core.IndexedSeq(G__12629__a,0,null);
} 
return G__12628__delegate.call(this,args);};
G__12628.cljs$lang$maxFixedArity = 0;
G__12628.cljs$lang$applyTo = (function (arglist__12630){
var args = cljs.core.seq(arglist__12630);
return G__12628__delegate(args);
});
G__12628.cljs$core$IFn$_invoke$arity$variadic = G__12628__delegate;
return G__12628;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__12631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12631) : re_frame.core.dispatch.call(null,G__12631));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
var G__12632_12634 = cljs.core.cst$kw$navigate;
var G__12633_12635 = ((function (G__12632_12634){
return (function (url){
return warehouse.routes.nav_BANG_(url);
});})(G__12632_12634))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12632_12634,G__12633_12635) : re_frame.core.reg_fx.call(null,G__12632_12634,G__12633_12635));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warehouse$events_SLASH_navigate,(function (_,p__12636){
var vec__12637 = p__12636;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12637,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12637,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$navigate,page], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__12640 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__12640);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__12641,_){
var map__12642 = p__12641;
var map__12642__$1 = ((((!((map__12642 == null)))?(((((map__12642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12642):map__12642);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12642__$1,cljs.core.cst$kw$db);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__12644){
var vec__12645 = p__12644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__12648){
var vec__12649 = p__12648;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12649,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12649,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__12652){
var vec__12653 = p__12652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12653,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12653,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__12656_12659 = cljs.core.cst$kw$state;
var G__12657_12660 = ((function (G__12656_12659){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__12658 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12658.cljs$core$IFn$_invoke$arity$0 ? fexpr__12658.cljs$core$IFn$_invoke$arity$0() : fexpr__12658.call(null));
})());
});})(G__12656_12659))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12656_12659,G__12657_12660) : re_frame.core.reg_cofx.call(null,G__12656_12659,G__12657_12660));
var G__12661_12663 = cljs.core.cst$kw$change_DASH_sets;
var G__12662_12664 = ((function (G__12661_12663){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__12661_12663))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12661_12663,G__12662_12664) : re_frame.core.reg_cofx.call(null,G__12661_12663,G__12662_12664));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12665 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12665) : re_frame.core.inject_cofx.call(null,G__12665));
})(),(function (){var G__12666 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12666) : re_frame.core.inject_cofx.call(null,G__12666));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__12667_12669 = cljs.core.cst$kw$change_DASH_sets;
var G__12668_12670 = ((function (G__12667_12669){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__12667_12669))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12667_12669,G__12668_12670) : re_frame.core.reg_fx.call(null,G__12667_12669,G__12668_12670));
var G__12671_12674 = cljs.core.cst$kw$state;
var G__12672_12675 = ((function (G__12671_12674){
return (function (value){
var fexpr__12673 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12673.cljs$core$IFn$_invoke$arity$1 ? fexpr__12673.cljs$core$IFn$_invoke$arity$1(value) : fexpr__12673.call(null,value));
});})(G__12671_12674))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12671_12674,G__12672_12675) : re_frame.core.reg_fx.call(null,G__12671_12674,G__12672_12675));
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
var G__12676_12703 = cljs.core.cst$kw$load_DASH_components;
var G__12677_12704 = ((function (G__12676_12703){
return (function (p__12678){
var map__12679 = p__12678;
var map__12679__$1 = ((((!((map__12679 == null)))?(((((map__12679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12679):map__12679);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12679__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12679__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,map__12679,map__12679__$1,limit,offset,G__12676_12703){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,map__12679,map__12679__$1,limit,offset,G__12676_12703){
return (function (state_12692){
var state_val_12693 = (state_12692[(1)]);
if((state_val_12693 === (1))){
var state_12692__$1 = state_12692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12692__$1,(2),ch);
} else {
if((state_val_12693 === (2))){
var inst_12682 = (state_12692[(7)]);
var inst_12682__$1 = (state_12692[(2)]);
var state_12692__$1 = (function (){var statearr_12694 = state_12692;
(statearr_12694[(7)] = inst_12682__$1);

return statearr_12694;
})();
if(cljs.core.truth_(inst_12682__$1)){
var statearr_12695_12705 = state_12692__$1;
(statearr_12695_12705[(1)] = (3));

} else {
var statearr_12696_12706 = state_12692__$1;
(statearr_12696_12706[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12693 === (3))){
var inst_12682 = (state_12692[(7)]);
var inst_12684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12685 = [cljs.core.cst$kw$components_DASH_loaded,inst_12682,offset];
var inst_12686 = (new cljs.core.PersistentVector(null,3,(5),inst_12684,inst_12685,null));
var inst_12687 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12686) : re_frame.core.dispatch.call(null,inst_12686));
var state_12692__$1 = state_12692;
var statearr_12697_12707 = state_12692__$1;
(statearr_12697_12707[(2)] = inst_12687);

(statearr_12697_12707[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12693 === (4))){
var state_12692__$1 = state_12692;
var statearr_12698_12708 = state_12692__$1;
(statearr_12698_12708[(2)] = null);

(statearr_12698_12708[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12693 === (5))){
var inst_12690 = (state_12692[(2)]);
var state_12692__$1 = state_12692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12692__$1,inst_12690);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,map__12679,map__12679__$1,limit,offset,G__12676_12703))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,map__12679,map__12679__$1,limit,offset,G__12676_12703){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12699 = [null,null,null,null,null,null,null,null];
(statearr_12699[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12699[(1)] = (1));

return statearr_12699;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12692){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12692);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12700){if((e12700 instanceof Object)){
var ex__9324__auto__ = e12700;
var statearr_12701_12709 = state_12692;
(statearr_12701_12709[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12692);

return cljs.core.cst$kw$recur;
} else {
throw e12700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12710 = state_12692;
state_12692 = G__12710;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12692){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,map__12679,map__12679__$1,limit,offset,G__12676_12703))
})();
var state__9425__auto__ = (function (){var statearr_12702 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12702[(6)] = c__9423__auto__);

return statearr_12702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,map__12679,map__12679__$1,limit,offset,G__12676_12703))
);

return c__9423__auto__;
});})(G__12676_12703))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12676_12703,G__12677_12704) : re_frame.core.reg_fx.call(null,G__12676_12703,G__12677_12704));
var G__12711_12743 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__12712_12744 = ((function (G__12711_12743){
return (function (p__12713){
var vec__12714 = p__12713;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12714,ids,offset,G__12711_12743){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12714,ids,offset,G__12711_12743){
return (function (state_12732){
var state_val_12733 = (state_12732[(1)]);
if((state_val_12733 === (1))){
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12732__$1,(2),ch);
} else {
if((state_val_12733 === (2))){
var inst_12718 = (state_12732[(7)]);
var inst_12718__$1 = (state_12732[(2)]);
var state_12732__$1 = (function (){var statearr_12734 = state_12732;
(statearr_12734[(7)] = inst_12718__$1);

return statearr_12734;
})();
if(cljs.core.truth_(inst_12718__$1)){
var statearr_12735_12745 = state_12732__$1;
(statearr_12735_12745[(1)] = (3));

} else {
var statearr_12736_12746 = state_12732__$1;
(statearr_12736_12746[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12733 === (3))){
var inst_12718 = (state_12732[(7)]);
var inst_12720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12721 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_12722 = cljs.core.count(inst_12718);
var inst_12723 = [inst_12718,inst_12722];
var inst_12724 = cljs.core.PersistentHashMap.fromArrays(inst_12721,inst_12723);
var inst_12725 = [cljs.core.cst$kw$components_DASH_loaded,inst_12724,offset];
var inst_12726 = (new cljs.core.PersistentVector(null,3,(5),inst_12720,inst_12725,null));
var inst_12727 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12726) : re_frame.core.dispatch.call(null,inst_12726));
var state_12732__$1 = state_12732;
var statearr_12737_12747 = state_12732__$1;
(statearr_12737_12747[(2)] = inst_12727);

(statearr_12737_12747[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12733 === (4))){
var state_12732__$1 = state_12732;
var statearr_12738_12748 = state_12732__$1;
(statearr_12738_12748[(2)] = null);

(statearr_12738_12748[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12733 === (5))){
var inst_12730 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12732__$1,inst_12730);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12714,ids,offset,G__12711_12743))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12714,ids,offset,G__12711_12743){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12739 = [null,null,null,null,null,null,null,null];
(statearr_12739[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12739[(1)] = (1));

return statearr_12739;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12732){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12732);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12740){if((e12740 instanceof Object)){
var ex__9324__auto__ = e12740;
var statearr_12741_12749 = state_12732;
(statearr_12741_12749[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12732);

return cljs.core.cst$kw$recur;
} else {
throw e12740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12750 = state_12732;
state_12732 = G__12750;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12732){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12714,ids,offset,G__12711_12743))
})();
var state__9425__auto__ = (function (){var statearr_12742 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12742[(6)] = c__9423__auto__);

return statearr_12742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12714,ids,offset,G__12711_12743))
);

return c__9423__auto__;
});})(G__12711_12743))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12711_12743,G__12712_12744) : re_frame.core.reg_fx.call(null,G__12711_12743,G__12712_12744));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__12752,p__12753){
var map__12754 = p__12752;
var map__12754__$1 = ((((!((map__12754 == null)))?(((((map__12754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12754):map__12754);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12754__$1,cljs.core.cst$kw$db);
var vec__12755 = p__12753;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12755,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12755,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12755,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__12759 = ((function (map__12754,map__12754__$1,db,vec__12755,_,components_data,offset){
return (function (p1__12751_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__12751_SHARP_);
});})(map__12754,map__12754__$1,db,vec__12755,_,components_data,offset))
;
return fexpr__12759(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__12760){
var vec__12761 = p__12760;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__12764,p__12765){
var map__12766 = p__12764;
var map__12766__$1 = ((((!((map__12766 == null)))?(((((map__12766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12766):map__12766);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12766__$1,cljs.core.cst$kw$db);
var vec__12767 = p__12765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12767,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12767,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12767,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__12771,p__12772){
var map__12773 = p__12771;
var map__12773__$1 = ((((!((map__12773 == null)))?(((((map__12773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12773):map__12773);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12773__$1,cljs.core.cst$kw$db);
var vec__12774 = p__12772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12774,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12774,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12778_12794 = cljs.core.cst$kw$store_DASH_component;
var G__12779_12795 = ((function (G__12778_12794){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12778_12794){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12778_12794){
return (function (state_12787){
var state_val_12788 = (state_12787[(1)]);
if((state_val_12788 === (1))){
var state_12787__$1 = state_12787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12787__$1,(2),ch);
} else {
if((state_val_12788 === (2))){
var inst_12781 = (state_12787[(2)]);
var inst_12782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12783 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12784 = (new cljs.core.PersistentVector(null,1,(5),inst_12782,inst_12783,null));
var inst_12785 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12784) : re_frame.core.dispatch.call(null,inst_12784));
var state_12787__$1 = (function (){var statearr_12789 = state_12787;
(statearr_12789[(7)] = inst_12781);

return statearr_12789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12787__$1,inst_12785);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12778_12794))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12778_12794){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12790 = [null,null,null,null,null,null,null,null];
(statearr_12790[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12790[(1)] = (1));

return statearr_12790;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12787){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12787);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12791){if((e12791 instanceof Object)){
var ex__9324__auto__ = e12791;
var statearr_12792_12796 = state_12787;
(statearr_12792_12796[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12787);

return cljs.core.cst$kw$recur;
} else {
throw e12791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12797 = state_12787;
state_12787 = G__12797;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12787){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12778_12794))
})();
var state__9425__auto__ = (function (){var statearr_12793 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12793[(6)] = c__9423__auto__);

return statearr_12793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12778_12794))
);

return c__9423__auto__;
});})(G__12778_12794))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12778_12794,G__12779_12795) : re_frame.core.reg_fx.call(null,G__12778_12794,G__12779_12795));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__12798){
var vec__12799 = p__12798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12799,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12799,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12799,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12799,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__12802 = type;
var G__12802__$1 = (((G__12802 instanceof cljs.core.Keyword))?G__12802.fqn:null);
switch (G__12802__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12802__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__12804){
var vec__12805 = p__12804;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12805,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12805,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
