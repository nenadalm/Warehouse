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
var G__12439__delegate = function (args){
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
var G__12439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12440__i = 0, G__12440__a = new Array(arguments.length -  0);
while (G__12440__i < G__12440__a.length) {G__12440__a[G__12440__i] = arguments[G__12440__i + 0]; ++G__12440__i;}
  args = new cljs.core.IndexedSeq(G__12440__a,0,null);
} 
return G__12439__delegate.call(this,args);};
G__12439.cljs$lang$maxFixedArity = 0;
G__12439.cljs$lang$applyTo = (function (arglist__12441){
var args = cljs.core.seq(arglist__12441);
return G__12439__delegate(args);
});
G__12439.cljs$core$IFn$_invoke$arity$variadic = G__12439__delegate;
return G__12439;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__12442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12442) : re_frame.core.dispatch.call(null,G__12442));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
var G__12443_12445 = cljs.core.cst$kw$navigate;
var G__12444_12446 = ((function (G__12443_12445){
return (function (url){
return warehouse.routes.nav_BANG_(url);
});})(G__12443_12445))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12443_12445,G__12444_12446) : re_frame.core.reg_fx.call(null,G__12443_12445,G__12444_12446));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warehouse$events_SLASH_navigate,(function (_,p__12447){
var vec__12448 = p__12447;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12448,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12448,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$navigate,page], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__12451 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__12451);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__12452,_){
var map__12453 = p__12452;
var map__12453__$1 = ((((!((map__12453 == null)))?(((((map__12453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12453):map__12453);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12453__$1,cljs.core.cst$kw$db);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__12455){
var vec__12456 = p__12455;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12456,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12456,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__12459){
var vec__12460 = p__12459;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12460,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12460,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__12463){
var vec__12464 = p__12463;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12464,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12464,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__12467_12470 = cljs.core.cst$kw$state;
var G__12468_12471 = ((function (G__12467_12470){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__12469 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12469.cljs$core$IFn$_invoke$arity$0 ? fexpr__12469.cljs$core$IFn$_invoke$arity$0() : fexpr__12469.call(null));
})());
});})(G__12467_12470))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12467_12470,G__12468_12471) : re_frame.core.reg_cofx.call(null,G__12467_12470,G__12468_12471));
var G__12472_12474 = cljs.core.cst$kw$change_DASH_sets;
var G__12473_12475 = ((function (G__12472_12474){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__12472_12474))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12472_12474,G__12473_12475) : re_frame.core.reg_cofx.call(null,G__12472_12474,G__12473_12475));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12476 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12476) : re_frame.core.inject_cofx.call(null,G__12476));
})(),(function (){var G__12477 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12477) : re_frame.core.inject_cofx.call(null,G__12477));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__12478_12480 = cljs.core.cst$kw$change_DASH_sets;
var G__12479_12481 = ((function (G__12478_12480){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__12478_12480))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12478_12480,G__12479_12481) : re_frame.core.reg_fx.call(null,G__12478_12480,G__12479_12481));
var G__12482_12485 = cljs.core.cst$kw$state;
var G__12483_12486 = ((function (G__12482_12485){
return (function (value){
var fexpr__12484 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__12484.cljs$core$IFn$_invoke$arity$1 ? fexpr__12484.cljs$core$IFn$_invoke$arity$1(value) : fexpr__12484.call(null,value));
});})(G__12482_12485))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12482_12485,G__12483_12486) : re_frame.core.reg_fx.call(null,G__12482_12485,G__12483_12486));
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
var G__12487_12514 = cljs.core.cst$kw$load_DASH_components;
var G__12488_12515 = ((function (G__12487_12514){
return (function (p__12489){
var map__12490 = p__12489;
var map__12490__$1 = ((((!((map__12490 == null)))?(((((map__12490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12490):map__12490);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12490__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12490__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,map__12490,map__12490__$1,limit,offset,G__12487_12514){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,map__12490,map__12490__$1,limit,offset,G__12487_12514){
return (function (state_12503){
var state_val_12504 = (state_12503[(1)]);
if((state_val_12504 === (1))){
var state_12503__$1 = state_12503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12503__$1,(2),ch);
} else {
if((state_val_12504 === (2))){
var inst_12493 = (state_12503[(7)]);
var inst_12493__$1 = (state_12503[(2)]);
var state_12503__$1 = (function (){var statearr_12505 = state_12503;
(statearr_12505[(7)] = inst_12493__$1);

return statearr_12505;
})();
if(cljs.core.truth_(inst_12493__$1)){
var statearr_12506_12516 = state_12503__$1;
(statearr_12506_12516[(1)] = (3));

} else {
var statearr_12507_12517 = state_12503__$1;
(statearr_12507_12517[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12504 === (3))){
var inst_12493 = (state_12503[(7)]);
var inst_12495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12496 = [cljs.core.cst$kw$components_DASH_loaded,inst_12493,offset];
var inst_12497 = (new cljs.core.PersistentVector(null,3,(5),inst_12495,inst_12496,null));
var inst_12498 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12497) : re_frame.core.dispatch.call(null,inst_12497));
var state_12503__$1 = state_12503;
var statearr_12508_12518 = state_12503__$1;
(statearr_12508_12518[(2)] = inst_12498);

(statearr_12508_12518[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12504 === (4))){
var state_12503__$1 = state_12503;
var statearr_12509_12519 = state_12503__$1;
(statearr_12509_12519[(2)] = null);

(statearr_12509_12519[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12504 === (5))){
var inst_12501 = (state_12503[(2)]);
var state_12503__$1 = state_12503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12503__$1,inst_12501);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,map__12490,map__12490__$1,limit,offset,G__12487_12514))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,map__12490,map__12490__$1,limit,offset,G__12487_12514){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12510 = [null,null,null,null,null,null,null,null];
(statearr_12510[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12510[(1)] = (1));

return statearr_12510;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12503){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12503);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12511){if((e12511 instanceof Object)){
var ex__9324__auto__ = e12511;
var statearr_12512_12520 = state_12503;
(statearr_12512_12520[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12503);

return cljs.core.cst$kw$recur;
} else {
throw e12511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12521 = state_12503;
state_12503 = G__12521;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12503){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,map__12490,map__12490__$1,limit,offset,G__12487_12514))
})();
var state__9425__auto__ = (function (){var statearr_12513 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12513[(6)] = c__9423__auto__);

return statearr_12513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,map__12490,map__12490__$1,limit,offset,G__12487_12514))
);

return c__9423__auto__;
});})(G__12487_12514))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12487_12514,G__12488_12515) : re_frame.core.reg_fx.call(null,G__12487_12514,G__12488_12515));
var G__12522_12554 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__12523_12555 = ((function (G__12522_12554){
return (function (p__12524){
var vec__12525 = p__12524;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12525,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12525,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,vec__12525,ids,offset,G__12522_12554){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,vec__12525,ids,offset,G__12522_12554){
return (function (state_12543){
var state_val_12544 = (state_12543[(1)]);
if((state_val_12544 === (1))){
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12543__$1,(2),ch);
} else {
if((state_val_12544 === (2))){
var inst_12529 = (state_12543[(7)]);
var inst_12529__$1 = (state_12543[(2)]);
var state_12543__$1 = (function (){var statearr_12545 = state_12543;
(statearr_12545[(7)] = inst_12529__$1);

return statearr_12545;
})();
if(cljs.core.truth_(inst_12529__$1)){
var statearr_12546_12556 = state_12543__$1;
(statearr_12546_12556[(1)] = (3));

} else {
var statearr_12547_12557 = state_12543__$1;
(statearr_12547_12557[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12544 === (3))){
var inst_12529 = (state_12543[(7)]);
var inst_12531 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12532 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_12533 = cljs.core.count(inst_12529);
var inst_12534 = [inst_12529,inst_12533];
var inst_12535 = cljs.core.PersistentHashMap.fromArrays(inst_12532,inst_12534);
var inst_12536 = [cljs.core.cst$kw$components_DASH_loaded,inst_12535,offset];
var inst_12537 = (new cljs.core.PersistentVector(null,3,(5),inst_12531,inst_12536,null));
var inst_12538 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12537) : re_frame.core.dispatch.call(null,inst_12537));
var state_12543__$1 = state_12543;
var statearr_12548_12558 = state_12543__$1;
(statearr_12548_12558[(2)] = inst_12538);

(statearr_12548_12558[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12544 === (4))){
var state_12543__$1 = state_12543;
var statearr_12549_12559 = state_12543__$1;
(statearr_12549_12559[(2)] = null);

(statearr_12549_12559[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12544 === (5))){
var inst_12541 = (state_12543[(2)]);
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12543__$1,inst_12541);
} else {
return null;
}
}
}
}
}
});})(c__9423__auto__,ch,vec__12525,ids,offset,G__12522_12554))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,vec__12525,ids,offset,G__12522_12554){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12550 = [null,null,null,null,null,null,null,null];
(statearr_12550[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12550[(1)] = (1));

return statearr_12550;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12543){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12543);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12551){if((e12551 instanceof Object)){
var ex__9324__auto__ = e12551;
var statearr_12552_12560 = state_12543;
(statearr_12552_12560[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12543);

return cljs.core.cst$kw$recur;
} else {
throw e12551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12561 = state_12543;
state_12543 = G__12561;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12543){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,vec__12525,ids,offset,G__12522_12554))
})();
var state__9425__auto__ = (function (){var statearr_12553 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12553[(6)] = c__9423__auto__);

return statearr_12553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,vec__12525,ids,offset,G__12522_12554))
);

return c__9423__auto__;
});})(G__12522_12554))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12522_12554,G__12523_12555) : re_frame.core.reg_fx.call(null,G__12522_12554,G__12523_12555));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__12563,p__12564){
var map__12565 = p__12563;
var map__12565__$1 = ((((!((map__12565 == null)))?(((((map__12565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12565):map__12565);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12565__$1,cljs.core.cst$kw$db);
var vec__12566 = p__12564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__12570 = ((function (map__12565,map__12565__$1,db,vec__12566,_,components_data,offset){
return (function (p1__12562_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__12562_SHARP_);
});})(map__12565,map__12565__$1,db,vec__12566,_,components_data,offset))
;
return fexpr__12570(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__12571){
var vec__12572 = p__12571;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12572,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12572,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12572,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__12575,p__12576){
var map__12577 = p__12575;
var map__12577__$1 = ((((!((map__12577 == null)))?(((((map__12577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12577):map__12577);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12577__$1,cljs.core.cst$kw$db);
var vec__12578 = p__12576;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__12582,p__12583){
var map__12584 = p__12582;
var map__12584__$1 = ((((!((map__12584 == null)))?(((((map__12584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12584):map__12584);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12584__$1,cljs.core.cst$kw$db);
var vec__12585 = p__12583;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12585,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12585,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__12589_12605 = cljs.core.cst$kw$store_DASH_component;
var G__12590_12606 = ((function (G__12589_12605){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,ch,G__12589_12605){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,ch,G__12589_12605){
return (function (state_12598){
var state_val_12599 = (state_12598[(1)]);
if((state_val_12599 === (1))){
var state_12598__$1 = state_12598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12598__$1,(2),ch);
} else {
if((state_val_12599 === (2))){
var inst_12592 = (state_12598[(2)]);
var inst_12593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12594 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_12595 = (new cljs.core.PersistentVector(null,1,(5),inst_12593,inst_12594,null));
var inst_12596 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_12595) : re_frame.core.dispatch.call(null,inst_12595));
var state_12598__$1 = (function (){var statearr_12600 = state_12598;
(statearr_12600[(7)] = inst_12592);

return statearr_12600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12598__$1,inst_12596);
} else {
return null;
}
}
});})(c__9423__auto__,ch,G__12589_12605))
;
return ((function (switch__9320__auto__,c__9423__auto__,ch,G__12589_12605){
return (function() {
var warehouse$events$state_machine__9321__auto__ = null;
var warehouse$events$state_machine__9321__auto____0 = (function (){
var statearr_12601 = [null,null,null,null,null,null,null,null];
(statearr_12601[(0)] = warehouse$events$state_machine__9321__auto__);

(statearr_12601[(1)] = (1));

return statearr_12601;
});
var warehouse$events$state_machine__9321__auto____1 = (function (state_12598){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_12598);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e12602){if((e12602 instanceof Object)){
var ex__9324__auto__ = e12602;
var statearr_12603_12607 = state_12598;
(statearr_12603_12607[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12598);

return cljs.core.cst$kw$recur;
} else {
throw e12602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__12608 = state_12598;
state_12598 = G__12608;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$events$state_machine__9321__auto__ = function(state_12598){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$events$state_machine__9321__auto____1.call(this,state_12598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__9321__auto____0;
warehouse$events$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__9321__auto____1;
return warehouse$events$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,ch,G__12589_12605))
})();
var state__9425__auto__ = (function (){var statearr_12604 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_12604[(6)] = c__9423__auto__);

return statearr_12604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,ch,G__12589_12605))
);

return c__9423__auto__;
});})(G__12589_12605))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12589_12605,G__12590_12606) : re_frame.core.reg_fx.call(null,G__12589_12605,G__12590_12606));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__12609){
var vec__12610 = p__12609;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12610,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12610,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12610,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12610,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__12613 = type;
var G__12613__$1 = (((G__12613 instanceof cljs.core.Keyword))?G__12613.fqn:null);
switch (G__12613__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12613__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__12615){
var vec__12616 = p__12615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12616,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12616,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
