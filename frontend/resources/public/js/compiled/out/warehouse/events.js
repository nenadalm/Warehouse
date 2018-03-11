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
var G__18851__delegate = function (args){
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
var G__18851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18852__i = 0, G__18852__a = new Array(arguments.length -  0);
while (G__18852__i < G__18852__a.length) {G__18852__a[G__18852__i] = arguments[G__18852__i + 0]; ++G__18852__i;}
  args = new cljs.core.IndexedSeq(G__18852__a,0,null);
} 
return G__18851__delegate.call(this,args);};
G__18851.cljs$lang$maxFixedArity = 0;
G__18851.cljs$lang$applyTo = (function (arglist__18853){
var args = cljs.core.seq(arglist__18853);
return G__18851__delegate(args);
});
G__18851.cljs$core$IFn$_invoke$arity$variadic = G__18851__delegate;
return G__18851;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__18854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18854) : re_frame.core.dispatch.call(null,G__18854));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__18855 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__18855);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__18856,_){
var map__18857 = p__18856;
var map__18857__$1 = ((((!((map__18857 == null)))?(((((map__18857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18857):map__18857);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18857__$1,cljs.core.cst$kw$db);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__18859){
var vec__18860 = p__18859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18860,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18860,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__18863){
var vec__18864 = p__18863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18864,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18864,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__18867){
var vec__18868 = p__18867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18868,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18868,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__18871_18874 = cljs.core.cst$kw$state;
var G__18872_18875 = ((function (G__18871_18874){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__18873 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__18873.cljs$core$IFn$_invoke$arity$0 ? fexpr__18873.cljs$core$IFn$_invoke$arity$0() : fexpr__18873.call(null));
})());
});})(G__18871_18874))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__18871_18874,G__18872_18875) : re_frame.core.reg_cofx.call(null,G__18871_18874,G__18872_18875));
var G__18876_18878 = cljs.core.cst$kw$change_DASH_sets;
var G__18877_18879 = ((function (G__18876_18878){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__18876_18878))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__18876_18878,G__18877_18879) : re_frame.core.reg_cofx.call(null,G__18876_18878,G__18877_18879));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18880 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__18880) : re_frame.core.inject_cofx.call(null,G__18880));
})(),(function (){var G__18881 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__18881) : re_frame.core.inject_cofx.call(null,G__18881));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__18882_18884 = cljs.core.cst$kw$change_DASH_sets;
var G__18883_18885 = ((function (G__18882_18884){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__18882_18884))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18882_18884,G__18883_18885) : re_frame.core.reg_fx.call(null,G__18882_18884,G__18883_18885));
var G__18886_18889 = cljs.core.cst$kw$state;
var G__18887_18890 = ((function (G__18886_18889){
return (function (value){
var fexpr__18888 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__18888.cljs$core$IFn$_invoke$arity$1 ? fexpr__18888.cljs$core$IFn$_invoke$arity$1(value) : fexpr__18888.call(null,value));
});})(G__18886_18889))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18886_18889,G__18887_18890) : re_frame.core.reg_fx.call(null,G__18886_18889,G__18887_18890));
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
var G__18891_18918 = cljs.core.cst$kw$load_DASH_components;
var G__18892_18919 = ((function (G__18891_18918){
return (function (p__18893){
var map__18894 = p__18893;
var map__18894__$1 = ((((!((map__18894 == null)))?(((((map__18894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18894):map__18894);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18894__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18894__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,ch,map__18894,map__18894__$1,limit,offset,G__18891_18918){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,ch,map__18894,map__18894__$1,limit,offset,G__18891_18918){
return (function (state_18907){
var state_val_18908 = (state_18907[(1)]);
if((state_val_18908 === (1))){
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18907__$1,(2),ch);
} else {
if((state_val_18908 === (2))){
var inst_18897 = (state_18907[(7)]);
var inst_18897__$1 = (state_18907[(2)]);
var state_18907__$1 = (function (){var statearr_18909 = state_18907;
(statearr_18909[(7)] = inst_18897__$1);

return statearr_18909;
})();
if(cljs.core.truth_(inst_18897__$1)){
var statearr_18910_18920 = state_18907__$1;
(statearr_18910_18920[(1)] = (3));

} else {
var statearr_18911_18921 = state_18907__$1;
(statearr_18911_18921[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (3))){
var inst_18897 = (state_18907[(7)]);
var inst_18899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18900 = [cljs.core.cst$kw$components_DASH_loaded,inst_18897,offset];
var inst_18901 = (new cljs.core.PersistentVector(null,3,(5),inst_18899,inst_18900,null));
var inst_18902 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18901) : re_frame.core.dispatch.call(null,inst_18901));
var state_18907__$1 = state_18907;
var statearr_18912_18922 = state_18907__$1;
(statearr_18912_18922[(2)] = inst_18902);

(statearr_18912_18922[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (4))){
var state_18907__$1 = state_18907;
var statearr_18913_18923 = state_18907__$1;
(statearr_18913_18923[(2)] = null);

(statearr_18913_18923[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (5))){
var inst_18905 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18907__$1,inst_18905);
} else {
return null;
}
}
}
}
}
});})(c__14229__auto__,ch,map__18894,map__18894__$1,limit,offset,G__18891_18918))
;
return ((function (switch__14048__auto__,c__14229__auto__,ch,map__18894,map__18894__$1,limit,offset,G__18891_18918){
return (function() {
var warehouse$events$state_machine__14049__auto__ = null;
var warehouse$events$state_machine__14049__auto____0 = (function (){
var statearr_18914 = [null,null,null,null,null,null,null,null];
(statearr_18914[(0)] = warehouse$events$state_machine__14049__auto__);

(statearr_18914[(1)] = (1));

return statearr_18914;
});
var warehouse$events$state_machine__14049__auto____1 = (function (state_18907){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18907);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18915){if((e18915 instanceof Object)){
var ex__14052__auto__ = e18915;
var statearr_18916_18924 = state_18907;
(statearr_18916_18924[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18907);

return cljs.core.cst$kw$recur;
} else {
throw e18915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18925 = state_18907;
state_18907 = G__18925;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$events$state_machine__14049__auto__ = function(state_18907){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__14049__auto____0.call(this);
case 1:
return warehouse$events$state_machine__14049__auto____1.call(this,state_18907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__14049__auto____0;
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__14049__auto____1;
return warehouse$events$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,ch,map__18894,map__18894__$1,limit,offset,G__18891_18918))
})();
var state__14231__auto__ = (function (){var statearr_18917 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18917[(6)] = c__14229__auto__);

return statearr_18917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,ch,map__18894,map__18894__$1,limit,offset,G__18891_18918))
);

return c__14229__auto__;
});})(G__18891_18918))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18891_18918,G__18892_18919) : re_frame.core.reg_fx.call(null,G__18891_18918,G__18892_18919));
var G__18926_18958 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__18927_18959 = ((function (G__18926_18958){
return (function (p__18928){
var vec__18929 = p__18928;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,ch,vec__18929,ids,offset,G__18926_18958){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,ch,vec__18929,ids,offset,G__18926_18958){
return (function (state_18947){
var state_val_18948 = (state_18947[(1)]);
if((state_val_18948 === (1))){
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18947__$1,(2),ch);
} else {
if((state_val_18948 === (2))){
var inst_18933 = (state_18947[(7)]);
var inst_18933__$1 = (state_18947[(2)]);
var state_18947__$1 = (function (){var statearr_18949 = state_18947;
(statearr_18949[(7)] = inst_18933__$1);

return statearr_18949;
})();
if(cljs.core.truth_(inst_18933__$1)){
var statearr_18950_18960 = state_18947__$1;
(statearr_18950_18960[(1)] = (3));

} else {
var statearr_18951_18961 = state_18947__$1;
(statearr_18951_18961[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18948 === (3))){
var inst_18933 = (state_18947[(7)]);
var inst_18935 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18936 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_18937 = cljs.core.count(inst_18933);
var inst_18938 = [inst_18933,inst_18937];
var inst_18939 = cljs.core.PersistentHashMap.fromArrays(inst_18936,inst_18938);
var inst_18940 = [cljs.core.cst$kw$components_DASH_loaded,inst_18939,offset];
var inst_18941 = (new cljs.core.PersistentVector(null,3,(5),inst_18935,inst_18940,null));
var inst_18942 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18941) : re_frame.core.dispatch.call(null,inst_18941));
var state_18947__$1 = state_18947;
var statearr_18952_18962 = state_18947__$1;
(statearr_18952_18962[(2)] = inst_18942);

(statearr_18952_18962[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18948 === (4))){
var state_18947__$1 = state_18947;
var statearr_18953_18963 = state_18947__$1;
(statearr_18953_18963[(2)] = null);

(statearr_18953_18963[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18948 === (5))){
var inst_18945 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18947__$1,inst_18945);
} else {
return null;
}
}
}
}
}
});})(c__14229__auto__,ch,vec__18929,ids,offset,G__18926_18958))
;
return ((function (switch__14048__auto__,c__14229__auto__,ch,vec__18929,ids,offset,G__18926_18958){
return (function() {
var warehouse$events$state_machine__14049__auto__ = null;
var warehouse$events$state_machine__14049__auto____0 = (function (){
var statearr_18954 = [null,null,null,null,null,null,null,null];
(statearr_18954[(0)] = warehouse$events$state_machine__14049__auto__);

(statearr_18954[(1)] = (1));

return statearr_18954;
});
var warehouse$events$state_machine__14049__auto____1 = (function (state_18947){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18947);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18955){if((e18955 instanceof Object)){
var ex__14052__auto__ = e18955;
var statearr_18956_18964 = state_18947;
(statearr_18956_18964[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18947);

return cljs.core.cst$kw$recur;
} else {
throw e18955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18965 = state_18947;
state_18947 = G__18965;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$events$state_machine__14049__auto__ = function(state_18947){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__14049__auto____0.call(this);
case 1:
return warehouse$events$state_machine__14049__auto____1.call(this,state_18947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__14049__auto____0;
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__14049__auto____1;
return warehouse$events$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,ch,vec__18929,ids,offset,G__18926_18958))
})();
var state__14231__auto__ = (function (){var statearr_18957 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18957[(6)] = c__14229__auto__);

return statearr_18957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,ch,vec__18929,ids,offset,G__18926_18958))
);

return c__14229__auto__;
});})(G__18926_18958))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18926_18958,G__18927_18959) : re_frame.core.reg_fx.call(null,G__18926_18958,G__18927_18959));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__18967,p__18968){
var map__18969 = p__18967;
var map__18969__$1 = ((((!((map__18969 == null)))?(((((map__18969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18969):map__18969);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18969__$1,cljs.core.cst$kw$db);
var vec__18970 = p__18968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__18974 = ((function (map__18969,map__18969__$1,db,vec__18970,_,components_data,offset){
return (function (p1__18966_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__18966_SHARP_);
});})(map__18969,map__18969__$1,db,vec__18970,_,components_data,offset))
;
return fexpr__18974(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__18975){
var vec__18976 = p__18975;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__18979,p__18980){
var map__18981 = p__18979;
var map__18981__$1 = ((((!((map__18981 == null)))?(((((map__18981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18981):map__18981);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,cljs.core.cst$kw$db);
var vec__18982 = p__18980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18982,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18982,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18982,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__18986,p__18987){
var map__18988 = p__18986;
var map__18988__$1 = ((((!((map__18988 == null)))?(((((map__18988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18988):map__18988);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18988__$1,cljs.core.cst$kw$db);
var vec__18989 = p__18987;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18989,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18989,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__18993_19009 = cljs.core.cst$kw$store_DASH_component;
var G__18994_19010 = ((function (G__18993_19009){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,ch,G__18993_19009){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,ch,G__18993_19009){
return (function (state_19002){
var state_val_19003 = (state_19002[(1)]);
if((state_val_19003 === (1))){
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19002__$1,(2),ch);
} else {
if((state_val_19003 === (2))){
var inst_18996 = (state_19002[(2)]);
var inst_18997 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18998 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_18999 = (new cljs.core.PersistentVector(null,1,(5),inst_18997,inst_18998,null));
var inst_19000 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18999) : re_frame.core.dispatch.call(null,inst_18999));
var state_19002__$1 = (function (){var statearr_19004 = state_19002;
(statearr_19004[(7)] = inst_18996);

return statearr_19004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19002__$1,inst_19000);
} else {
return null;
}
}
});})(c__14229__auto__,ch,G__18993_19009))
;
return ((function (switch__14048__auto__,c__14229__auto__,ch,G__18993_19009){
return (function() {
var warehouse$events$state_machine__14049__auto__ = null;
var warehouse$events$state_machine__14049__auto____0 = (function (){
var statearr_19005 = [null,null,null,null,null,null,null,null];
(statearr_19005[(0)] = warehouse$events$state_machine__14049__auto__);

(statearr_19005[(1)] = (1));

return statearr_19005;
});
var warehouse$events$state_machine__14049__auto____1 = (function (state_19002){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_19002);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e19006){if((e19006 instanceof Object)){
var ex__14052__auto__ = e19006;
var statearr_19007_19011 = state_19002;
(statearr_19007_19011[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19002);

return cljs.core.cst$kw$recur;
} else {
throw e19006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__19012 = state_19002;
state_19002 = G__19012;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$events$state_machine__14049__auto__ = function(state_19002){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__14049__auto____0.call(this);
case 1:
return warehouse$events$state_machine__14049__auto____1.call(this,state_19002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__14049__auto____0;
warehouse$events$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__14049__auto____1;
return warehouse$events$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,ch,G__18993_19009))
})();
var state__14231__auto__ = (function (){var statearr_19008 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_19008[(6)] = c__14229__auto__);

return statearr_19008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,ch,G__18993_19009))
);

return c__14229__auto__;
});})(G__18993_19009))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18993_19009,G__18994_19010) : re_frame.core.reg_fx.call(null,G__18993_19009,G__18994_19010));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__19013){
var vec__19014 = p__19013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19014,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19014,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19014,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19014,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__19017 = type;
var G__19017__$1 = (((G__19017 instanceof cljs.core.Keyword))?G__19017.fqn:null);
switch (G__19017__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19017__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__19019){
var vec__19020 = p__19019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19020,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19020,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
