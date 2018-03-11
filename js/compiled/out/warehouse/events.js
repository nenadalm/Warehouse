// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
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
var t = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (t){
return (function() { 
var G__19761__delegate = function (args){
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
var G__19761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19762__i = 0, G__19762__a = new Array(arguments.length -  0);
while (G__19762__i < G__19762__a.length) {G__19762__a[G__19762__i] = arguments[G__19762__i + 0]; ++G__19762__i;}
  args = new cljs.core.IndexedSeq(G__19762__a,0,null);
} 
return G__19761__delegate.call(this,args);};
G__19761.cljs$lang$maxFixedArity = 0;
G__19761.cljs$lang$applyTo = (function (arglist__19763){
var args = cljs.core.seq(arglist__19763);
return G__19761__delegate(args);
});
G__19761.cljs$core$IFn$_invoke$arity$variadic = G__19761__delegate;
return G__19761;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__19764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19764) : re_frame.core.dispatch.call(null,G__19764));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__19765 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__19765);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__19766,_){
var map__19767 = p__19766;
var map__19767__$1 = ((((!((map__19767 == null)))?(((((map__19767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19767):map__19767);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19767__$1,cljs.core.cst$kw$db);
var sd = cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
var q = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null));
var page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(sd);
if(cljs.core.truth_((function (){var and__3911__auto__ = (cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(sd) < cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(sd));
if(and__3911__auto__){
var and__3911__auto____$1 = warehouse.infinite_scroll.db.should_load_next_page();
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null)));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__19769){
var vec__19770 = p__19769;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19770,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19770,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__19773){
var vec__19774 = p__19773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19774,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19774,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__19777){
var vec__19778 = p__19777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19778,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19778,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__19781_19784 = cljs.core.cst$kw$state;
var G__19782_19785 = ((function (G__19781_19784){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__19783 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__19783.cljs$core$IFn$_invoke$arity$0 ? fexpr__19783.cljs$core$IFn$_invoke$arity$0() : fexpr__19783.call(null));
})());
});})(G__19781_19784))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__19781_19784,G__19782_19785) : re_frame.core.reg_cofx.call(null,G__19781_19784,G__19782_19785));
var G__19786_19788 = cljs.core.cst$kw$change_DASH_sets;
var G__19787_19789 = ((function (G__19786_19788){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__19786_19788))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__19786_19788,G__19787_19789) : re_frame.core.reg_cofx.call(null,G__19786_19788,G__19787_19789));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19790 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__19790) : re_frame.core.inject_cofx.call(null,G__19790));
})(),(function (){var G__19791 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__19791) : re_frame.core.inject_cofx.call(null,G__19791));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__19792_19794 = cljs.core.cst$kw$change_DASH_sets;
var G__19793_19795 = ((function (G__19792_19794){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__19792_19794))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19792_19794,G__19793_19795) : re_frame.core.reg_fx.call(null,G__19792_19794,G__19793_19795));
var G__19796_19799 = cljs.core.cst$kw$state;
var G__19797_19800 = ((function (G__19796_19799){
return (function (value){
var fexpr__19798 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__19798.cljs$core$IFn$_invoke$arity$1 ? fexpr__19798.cljs$core$IFn$_invoke$arity$1(value) : fexpr__19798.call(null,value));
});})(G__19796_19799))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19796_19799,G__19797_19800) : re_frame.core.reg_fx.call(null,G__19796_19799,G__19797_19800));
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
var G__19801_19828 = cljs.core.cst$kw$load_DASH_components;
var G__19802_19829 = ((function (G__19801_19828){
return (function (p__19803){
var map__19804 = p__19803;
var map__19804__$1 = ((((!((map__19804 == null)))?(((((map__19804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19804):map__19804);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19804__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19804__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,ch,map__19804,map__19804__$1,limit,offset,G__19801_19828){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,ch,map__19804,map__19804__$1,limit,offset,G__19801_19828){
return (function (state_19817){
var state_val_19818 = (state_19817[(1)]);
if((state_val_19818 === (1))){
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19817__$1,(2),ch);
} else {
if((state_val_19818 === (2))){
var inst_19807 = (state_19817[(7)]);
var inst_19807__$1 = (state_19817[(2)]);
var state_19817__$1 = (function (){var statearr_19819 = state_19817;
(statearr_19819[(7)] = inst_19807__$1);

return statearr_19819;
})();
if(cljs.core.truth_(inst_19807__$1)){
var statearr_19820_19830 = state_19817__$1;
(statearr_19820_19830[(1)] = (3));

} else {
var statearr_19821_19831 = state_19817__$1;
(statearr_19821_19831[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19818 === (3))){
var inst_19807 = (state_19817[(7)]);
var inst_19809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19810 = [cljs.core.cst$kw$components_DASH_loaded,inst_19807,offset];
var inst_19811 = (new cljs.core.PersistentVector(null,3,(5),inst_19809,inst_19810,null));
var inst_19812 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19811) : re_frame.core.dispatch.call(null,inst_19811));
var state_19817__$1 = state_19817;
var statearr_19822_19832 = state_19817__$1;
(statearr_19822_19832[(2)] = inst_19812);

(statearr_19822_19832[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19818 === (4))){
var state_19817__$1 = state_19817;
var statearr_19823_19833 = state_19817__$1;
(statearr_19823_19833[(2)] = null);

(statearr_19823_19833[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19818 === (5))){
var inst_19815 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19817__$1,inst_19815);
} else {
return null;
}
}
}
}
}
});})(c__14229__auto__,ch,map__19804,map__19804__$1,limit,offset,G__19801_19828))
;
return ((function (switch__14048__auto__,c__14229__auto__,ch,map__19804,map__19804__$1,limit,offset,G__19801_19828){
return (function() {
var warehouse$events$state_machine__14049__auto__ = null;
var warehouse$events$state_machine__14049__auto____0 = (function (){
var statearr_19824 = [null,null,null,null,null,null,null,null];
(statearr_19824[(0)] = warehouse$events$state_machine__14049__auto__);

(statearr_19824[(1)] = (1));

return statearr_19824;
});
var warehouse$events$state_machine__14049__auto____1 = (function (state_19817){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_19817);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e19825){if((e19825 instanceof Object)){
var ex__14052__auto__ = e19825;
var statearr_19826_19834 = state_19817;
(statearr_19826_19834[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19817);

return cljs.core.cst$kw$recur;
} else {
throw e19825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__19835 = state_19817;
state_19817 = G__19835;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$events$state_machine__14049__auto__ = function(state_19817){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__14049__auto____0.call(this);
case 1:
return warehouse$events$state_machine__14049__auto____1.call(this,state_19817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__14049__auto____0;
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__14049__auto____1;
return warehouse$events$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,ch,map__19804,map__19804__$1,limit,offset,G__19801_19828))
})();
var state__14231__auto__ = (function (){var statearr_19827 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_19827[(6)] = c__14229__auto__);

return statearr_19827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,ch,map__19804,map__19804__$1,limit,offset,G__19801_19828))
);

return c__14229__auto__;
});})(G__19801_19828))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19801_19828,G__19802_19829) : re_frame.core.reg_fx.call(null,G__19801_19828,G__19802_19829));
var G__19836_19868 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__19837_19869 = ((function (G__19836_19868){
return (function (p__19838){
var vec__19839 = p__19838;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19839,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19839,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,ch,vec__19839,ids,offset,G__19836_19868){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,ch,vec__19839,ids,offset,G__19836_19868){
return (function (state_19857){
var state_val_19858 = (state_19857[(1)]);
if((state_val_19858 === (1))){
var state_19857__$1 = state_19857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19857__$1,(2),ch);
} else {
if((state_val_19858 === (2))){
var inst_19843 = (state_19857[(7)]);
var inst_19843__$1 = (state_19857[(2)]);
var state_19857__$1 = (function (){var statearr_19859 = state_19857;
(statearr_19859[(7)] = inst_19843__$1);

return statearr_19859;
})();
if(cljs.core.truth_(inst_19843__$1)){
var statearr_19860_19870 = state_19857__$1;
(statearr_19860_19870[(1)] = (3));

} else {
var statearr_19861_19871 = state_19857__$1;
(statearr_19861_19871[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19858 === (3))){
var inst_19843 = (state_19857[(7)]);
var inst_19845 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19846 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_19847 = cljs.core.count(inst_19843);
var inst_19848 = [inst_19843,inst_19847];
var inst_19849 = cljs.core.PersistentHashMap.fromArrays(inst_19846,inst_19848);
var inst_19850 = [cljs.core.cst$kw$components_DASH_loaded,inst_19849,offset];
var inst_19851 = (new cljs.core.PersistentVector(null,3,(5),inst_19845,inst_19850,null));
var inst_19852 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19851) : re_frame.core.dispatch.call(null,inst_19851));
var state_19857__$1 = state_19857;
var statearr_19862_19872 = state_19857__$1;
(statearr_19862_19872[(2)] = inst_19852);

(statearr_19862_19872[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19858 === (4))){
var state_19857__$1 = state_19857;
var statearr_19863_19873 = state_19857__$1;
(statearr_19863_19873[(2)] = null);

(statearr_19863_19873[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19858 === (5))){
var inst_19855 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19857__$1,inst_19855);
} else {
return null;
}
}
}
}
}
});})(c__14229__auto__,ch,vec__19839,ids,offset,G__19836_19868))
;
return ((function (switch__14048__auto__,c__14229__auto__,ch,vec__19839,ids,offset,G__19836_19868){
return (function() {
var warehouse$events$state_machine__14049__auto__ = null;
var warehouse$events$state_machine__14049__auto____0 = (function (){
var statearr_19864 = [null,null,null,null,null,null,null,null];
(statearr_19864[(0)] = warehouse$events$state_machine__14049__auto__);

(statearr_19864[(1)] = (1));

return statearr_19864;
});
var warehouse$events$state_machine__14049__auto____1 = (function (state_19857){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_19857);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e19865){if((e19865 instanceof Object)){
var ex__14052__auto__ = e19865;
var statearr_19866_19874 = state_19857;
(statearr_19866_19874[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19857);

return cljs.core.cst$kw$recur;
} else {
throw e19865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__19875 = state_19857;
state_19857 = G__19875;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$events$state_machine__14049__auto__ = function(state_19857){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__14049__auto____0.call(this);
case 1:
return warehouse$events$state_machine__14049__auto____1.call(this,state_19857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__14049__auto____0;
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__14049__auto____1;
return warehouse$events$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,ch,vec__19839,ids,offset,G__19836_19868))
})();
var state__14231__auto__ = (function (){var statearr_19867 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_19867[(6)] = c__14229__auto__);

return statearr_19867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,ch,vec__19839,ids,offset,G__19836_19868))
);

return c__14229__auto__;
});})(G__19836_19868))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19836_19868,G__19837_19869) : re_frame.core.reg_fx.call(null,G__19836_19868,G__19837_19869));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__19877,p__19878){
var map__19879 = p__19877;
var map__19879__$1 = ((((!((map__19879 == null)))?(((((map__19879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19879):map__19879);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,cljs.core.cst$kw$db);
var vec__19880 = p__19878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19880,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19880,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19880,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__19884 = ((function (map__19879,map__19879__$1,db,vec__19880,_,components_data,offset){
return (function (p1__19876_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__19876_SHARP_);
});})(map__19879,map__19879__$1,db,vec__19880,_,components_data,offset))
;
return fexpr__19884(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__19885){
var vec__19886 = p__19885;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19886,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19886,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19886,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__19889,p__19890){
var map__19891 = p__19889;
var map__19891__$1 = ((((!((map__19891 == null)))?(((((map__19891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19891):map__19891);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19891__$1,cljs.core.cst$kw$db);
var vec__19892 = p__19890;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19892,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19892,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19892,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__19896,p__19897){
var map__19898 = p__19896;
var map__19898__$1 = ((((!((map__19898 == null)))?(((((map__19898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19898):map__19898);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19898__$1,cljs.core.cst$kw$db);
var vec__19899 = p__19897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19899,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19899,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__19903_19919 = cljs.core.cst$kw$store_DASH_component;
var G__19904_19920 = ((function (G__19903_19919){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,ch,G__19903_19919){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,ch,G__19903_19919){
return (function (state_19912){
var state_val_19913 = (state_19912[(1)]);
if((state_val_19913 === (1))){
var state_19912__$1 = state_19912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19912__$1,(2),ch);
} else {
if((state_val_19913 === (2))){
var inst_19906 = (state_19912[(2)]);
var inst_19907 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19908 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_19909 = (new cljs.core.PersistentVector(null,1,(5),inst_19907,inst_19908,null));
var inst_19910 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19909) : re_frame.core.dispatch.call(null,inst_19909));
var state_19912__$1 = (function (){var statearr_19914 = state_19912;
(statearr_19914[(7)] = inst_19906);

return statearr_19914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19912__$1,inst_19910);
} else {
return null;
}
}
});})(c__14229__auto__,ch,G__19903_19919))
;
return ((function (switch__14048__auto__,c__14229__auto__,ch,G__19903_19919){
return (function() {
var warehouse$events$state_machine__14049__auto__ = null;
var warehouse$events$state_machine__14049__auto____0 = (function (){
var statearr_19915 = [null,null,null,null,null,null,null,null];
(statearr_19915[(0)] = warehouse$events$state_machine__14049__auto__);

(statearr_19915[(1)] = (1));

return statearr_19915;
});
var warehouse$events$state_machine__14049__auto____1 = (function (state_19912){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_19912);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e19916){if((e19916 instanceof Object)){
var ex__14052__auto__ = e19916;
var statearr_19917_19921 = state_19912;
(statearr_19917_19921[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19912);

return cljs.core.cst$kw$recur;
} else {
throw e19916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__19922 = state_19912;
state_19912 = G__19922;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$events$state_machine__14049__auto__ = function(state_19912){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__14049__auto____0.call(this);
case 1:
return warehouse$events$state_machine__14049__auto____1.call(this,state_19912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__14049__auto____0;
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__14049__auto____1;
return warehouse$events$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,ch,G__19903_19919))
})();
var state__14231__auto__ = (function (){var statearr_19918 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_19918[(6)] = c__14229__auto__);

return statearr_19918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,ch,G__19903_19919))
);

return c__14229__auto__;
});})(G__19903_19919))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19903_19919,G__19904_19920) : re_frame.core.reg_fx.call(null,G__19903_19919,G__19904_19920));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__19923){
var vec__19924 = p__19923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__19927 = type;
var G__19927__$1 = (((G__19927 instanceof cljs.core.Keyword))?G__19927.fqn:null);
switch (G__19927__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19927__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__19929){
var vec__19930 = p__19929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19930,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19930,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
