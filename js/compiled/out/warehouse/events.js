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
var G__19229__delegate = function (args){
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
var G__19229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19230__i = 0, G__19230__a = new Array(arguments.length -  0);
while (G__19230__i < G__19230__a.length) {G__19230__a[G__19230__i] = arguments[G__19230__i + 0]; ++G__19230__i;}
  args = new cljs.core.IndexedSeq(G__19230__a,0,null);
} 
return G__19229__delegate.call(this,args);};
G__19229.cljs$lang$maxFixedArity = 0;
G__19229.cljs$lang$applyTo = (function (arglist__19231){
var args = cljs.core.seq(arglist__19231);
return G__19229__delegate(args);
});
G__19229.cljs$core$IFn$_invoke$arity$variadic = G__19229__delegate;
return G__19229;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__19232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19232) : re_frame.core.dispatch.call(null,G__19232));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
var G__19233_19235 = cljs.core.cst$kw$navigate;
var G__19234_19236 = ((function (G__19233_19235){
return (function (url){
return warehouse.routes.nav_BANG_(url);
});})(G__19233_19235))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19233_19235,G__19234_19236) : re_frame.core.reg_fx.call(null,G__19233_19235,G__19234_19236));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warehouse$events_SLASH_navigate,(function (_,p__19237){
var vec__19238 = p__19237;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19238,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19238,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$navigate,page], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__19241 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__19241);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__19242,_){
var map__19243 = p__19242;
var map__19243__$1 = ((((!((map__19243 == null)))?(((((map__19243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19243):map__19243);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19243__$1,cljs.core.cst$kw$db);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__19245){
var vec__19246 = p__19245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__19249){
var vec__19250 = p__19249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19250,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19250,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__19253){
var vec__19254 = p__19253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19254,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19254,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__19257_19260 = cljs.core.cst$kw$state;
var G__19258_19261 = ((function (G__19257_19260){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__19259 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__19259.cljs$core$IFn$_invoke$arity$0 ? fexpr__19259.cljs$core$IFn$_invoke$arity$0() : fexpr__19259.call(null));
})());
});})(G__19257_19260))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__19257_19260,G__19258_19261) : re_frame.core.reg_cofx.call(null,G__19257_19260,G__19258_19261));
var G__19262_19264 = cljs.core.cst$kw$change_DASH_sets;
var G__19263_19265 = ((function (G__19262_19264){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__19262_19264))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__19262_19264,G__19263_19265) : re_frame.core.reg_cofx.call(null,G__19262_19264,G__19263_19265));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19266 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__19266) : re_frame.core.inject_cofx.call(null,G__19266));
})(),(function (){var G__19267 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__19267) : re_frame.core.inject_cofx.call(null,G__19267));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__19268_19270 = cljs.core.cst$kw$change_DASH_sets;
var G__19269_19271 = ((function (G__19268_19270){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__19268_19270))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19268_19270,G__19269_19271) : re_frame.core.reg_fx.call(null,G__19268_19270,G__19269_19271));
var G__19272_19275 = cljs.core.cst$kw$state;
var G__19273_19276 = ((function (G__19272_19275){
return (function (value){
var fexpr__19274 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__19274.cljs$core$IFn$_invoke$arity$1 ? fexpr__19274.cljs$core$IFn$_invoke$arity$1(value) : fexpr__19274.call(null,value));
});})(G__19272_19275))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19272_19275,G__19273_19276) : re_frame.core.reg_fx.call(null,G__19272_19275,G__19273_19276));
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
var G__19277_19304 = cljs.core.cst$kw$load_DASH_components;
var G__19278_19305 = ((function (G__19277_19304){
return (function (p__19279){
var map__19280 = p__19279;
var map__19280__$1 = ((((!((map__19280 == null)))?(((((map__19280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19280):map__19280);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19280__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19280__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,ch,map__19280,map__19280__$1,limit,offset,G__19277_19304){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,ch,map__19280,map__19280__$1,limit,offset,G__19277_19304){
return (function (state_19293){
var state_val_19294 = (state_19293[(1)]);
if((state_val_19294 === (1))){
var state_19293__$1 = state_19293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19293__$1,(2),ch);
} else {
if((state_val_19294 === (2))){
var inst_19283 = (state_19293[(7)]);
var inst_19283__$1 = (state_19293[(2)]);
var state_19293__$1 = (function (){var statearr_19295 = state_19293;
(statearr_19295[(7)] = inst_19283__$1);

return statearr_19295;
})();
if(cljs.core.truth_(inst_19283__$1)){
var statearr_19296_19306 = state_19293__$1;
(statearr_19296_19306[(1)] = (3));

} else {
var statearr_19297_19307 = state_19293__$1;
(statearr_19297_19307[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19294 === (3))){
var inst_19283 = (state_19293[(7)]);
var inst_19285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19286 = [cljs.core.cst$kw$components_DASH_loaded,inst_19283,offset];
var inst_19287 = (new cljs.core.PersistentVector(null,3,(5),inst_19285,inst_19286,null));
var inst_19288 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19287) : re_frame.core.dispatch.call(null,inst_19287));
var state_19293__$1 = state_19293;
var statearr_19298_19308 = state_19293__$1;
(statearr_19298_19308[(2)] = inst_19288);

(statearr_19298_19308[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19294 === (4))){
var state_19293__$1 = state_19293;
var statearr_19299_19309 = state_19293__$1;
(statearr_19299_19309[(2)] = null);

(statearr_19299_19309[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19294 === (5))){
var inst_19291 = (state_19293[(2)]);
var state_19293__$1 = state_19293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19293__$1,inst_19291);
} else {
return null;
}
}
}
}
}
});})(c__13775__auto__,ch,map__19280,map__19280__$1,limit,offset,G__19277_19304))
;
return ((function (switch__13594__auto__,c__13775__auto__,ch,map__19280,map__19280__$1,limit,offset,G__19277_19304){
return (function() {
var warehouse$events$state_machine__13595__auto__ = null;
var warehouse$events$state_machine__13595__auto____0 = (function (){
var statearr_19300 = [null,null,null,null,null,null,null,null];
(statearr_19300[(0)] = warehouse$events$state_machine__13595__auto__);

(statearr_19300[(1)] = (1));

return statearr_19300;
});
var warehouse$events$state_machine__13595__auto____1 = (function (state_19293){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_19293);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e19301){if((e19301 instanceof Object)){
var ex__13598__auto__ = e19301;
var statearr_19302_19310 = state_19293;
(statearr_19302_19310[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19293);

return cljs.core.cst$kw$recur;
} else {
throw e19301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__19311 = state_19293;
state_19293 = G__19311;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$events$state_machine__13595__auto__ = function(state_19293){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__13595__auto____0.call(this);
case 1:
return warehouse$events$state_machine__13595__auto____1.call(this,state_19293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__13595__auto____0;
warehouse$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__13595__auto____1;
return warehouse$events$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,ch,map__19280,map__19280__$1,limit,offset,G__19277_19304))
})();
var state__13777__auto__ = (function (){var statearr_19303 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_19303[(6)] = c__13775__auto__);

return statearr_19303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,ch,map__19280,map__19280__$1,limit,offset,G__19277_19304))
);

return c__13775__auto__;
});})(G__19277_19304))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19277_19304,G__19278_19305) : re_frame.core.reg_fx.call(null,G__19277_19304,G__19278_19305));
var G__19312_19344 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__19313_19345 = ((function (G__19312_19344){
return (function (p__19314){
var vec__19315 = p__19314;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19315,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19315,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,ch,vec__19315,ids,offset,G__19312_19344){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,ch,vec__19315,ids,offset,G__19312_19344){
return (function (state_19333){
var state_val_19334 = (state_19333[(1)]);
if((state_val_19334 === (1))){
var state_19333__$1 = state_19333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19333__$1,(2),ch);
} else {
if((state_val_19334 === (2))){
var inst_19319 = (state_19333[(7)]);
var inst_19319__$1 = (state_19333[(2)]);
var state_19333__$1 = (function (){var statearr_19335 = state_19333;
(statearr_19335[(7)] = inst_19319__$1);

return statearr_19335;
})();
if(cljs.core.truth_(inst_19319__$1)){
var statearr_19336_19346 = state_19333__$1;
(statearr_19336_19346[(1)] = (3));

} else {
var statearr_19337_19347 = state_19333__$1;
(statearr_19337_19347[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19334 === (3))){
var inst_19319 = (state_19333[(7)]);
var inst_19321 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19322 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_19323 = cljs.core.count(inst_19319);
var inst_19324 = [inst_19319,inst_19323];
var inst_19325 = cljs.core.PersistentHashMap.fromArrays(inst_19322,inst_19324);
var inst_19326 = [cljs.core.cst$kw$components_DASH_loaded,inst_19325,offset];
var inst_19327 = (new cljs.core.PersistentVector(null,3,(5),inst_19321,inst_19326,null));
var inst_19328 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19327) : re_frame.core.dispatch.call(null,inst_19327));
var state_19333__$1 = state_19333;
var statearr_19338_19348 = state_19333__$1;
(statearr_19338_19348[(2)] = inst_19328);

(statearr_19338_19348[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19334 === (4))){
var state_19333__$1 = state_19333;
var statearr_19339_19349 = state_19333__$1;
(statearr_19339_19349[(2)] = null);

(statearr_19339_19349[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19334 === (5))){
var inst_19331 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19333__$1,inst_19331);
} else {
return null;
}
}
}
}
}
});})(c__13775__auto__,ch,vec__19315,ids,offset,G__19312_19344))
;
return ((function (switch__13594__auto__,c__13775__auto__,ch,vec__19315,ids,offset,G__19312_19344){
return (function() {
var warehouse$events$state_machine__13595__auto__ = null;
var warehouse$events$state_machine__13595__auto____0 = (function (){
var statearr_19340 = [null,null,null,null,null,null,null,null];
(statearr_19340[(0)] = warehouse$events$state_machine__13595__auto__);

(statearr_19340[(1)] = (1));

return statearr_19340;
});
var warehouse$events$state_machine__13595__auto____1 = (function (state_19333){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_19333);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e19341){if((e19341 instanceof Object)){
var ex__13598__auto__ = e19341;
var statearr_19342_19350 = state_19333;
(statearr_19342_19350[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19333);

return cljs.core.cst$kw$recur;
} else {
throw e19341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__19351 = state_19333;
state_19333 = G__19351;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$events$state_machine__13595__auto__ = function(state_19333){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__13595__auto____0.call(this);
case 1:
return warehouse$events$state_machine__13595__auto____1.call(this,state_19333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__13595__auto____0;
warehouse$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__13595__auto____1;
return warehouse$events$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,ch,vec__19315,ids,offset,G__19312_19344))
})();
var state__13777__auto__ = (function (){var statearr_19343 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_19343[(6)] = c__13775__auto__);

return statearr_19343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,ch,vec__19315,ids,offset,G__19312_19344))
);

return c__13775__auto__;
});})(G__19312_19344))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19312_19344,G__19313_19345) : re_frame.core.reg_fx.call(null,G__19312_19344,G__19313_19345));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__19353,p__19354){
var map__19355 = p__19353;
var map__19355__$1 = ((((!((map__19355 == null)))?(((((map__19355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19355):map__19355);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19355__$1,cljs.core.cst$kw$db);
var vec__19356 = p__19354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__19360 = ((function (map__19355,map__19355__$1,db,vec__19356,_,components_data,offset){
return (function (p1__19352_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__19352_SHARP_);
});})(map__19355,map__19355__$1,db,vec__19356,_,components_data,offset))
;
return fexpr__19360(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__19361){
var vec__19362 = p__19361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19362,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19362,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19362,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__19365,p__19366){
var map__19367 = p__19365;
var map__19367__$1 = ((((!((map__19367 == null)))?(((((map__19367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19367):map__19367);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19367__$1,cljs.core.cst$kw$db);
var vec__19368 = p__19366;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19368,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19368,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19368,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__19372,p__19373){
var map__19374 = p__19372;
var map__19374__$1 = ((((!((map__19374 == null)))?(((((map__19374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19374):map__19374);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19374__$1,cljs.core.cst$kw$db);
var vec__19375 = p__19373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19375,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19375,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__19379_19395 = cljs.core.cst$kw$store_DASH_component;
var G__19380_19396 = ((function (G__19379_19395){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,ch,G__19379_19395){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,ch,G__19379_19395){
return (function (state_19388){
var state_val_19389 = (state_19388[(1)]);
if((state_val_19389 === (1))){
var state_19388__$1 = state_19388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19388__$1,(2),ch);
} else {
if((state_val_19389 === (2))){
var inst_19382 = (state_19388[(2)]);
var inst_19383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19384 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_19385 = (new cljs.core.PersistentVector(null,1,(5),inst_19383,inst_19384,null));
var inst_19386 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19385) : re_frame.core.dispatch.call(null,inst_19385));
var state_19388__$1 = (function (){var statearr_19390 = state_19388;
(statearr_19390[(7)] = inst_19382);

return statearr_19390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19388__$1,inst_19386);
} else {
return null;
}
}
});})(c__13775__auto__,ch,G__19379_19395))
;
return ((function (switch__13594__auto__,c__13775__auto__,ch,G__19379_19395){
return (function() {
var warehouse$events$state_machine__13595__auto__ = null;
var warehouse$events$state_machine__13595__auto____0 = (function (){
var statearr_19391 = [null,null,null,null,null,null,null,null];
(statearr_19391[(0)] = warehouse$events$state_machine__13595__auto__);

(statearr_19391[(1)] = (1));

return statearr_19391;
});
var warehouse$events$state_machine__13595__auto____1 = (function (state_19388){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_19388);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e19392){if((e19392 instanceof Object)){
var ex__13598__auto__ = e19392;
var statearr_19393_19397 = state_19388;
(statearr_19393_19397[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19388);

return cljs.core.cst$kw$recur;
} else {
throw e19392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__19398 = state_19388;
state_19388 = G__19398;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$events$state_machine__13595__auto__ = function(state_19388){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__13595__auto____0.call(this);
case 1:
return warehouse$events$state_machine__13595__auto____1.call(this,state_19388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__13595__auto____0;
warehouse$events$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__13595__auto____1;
return warehouse$events$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,ch,G__19379_19395))
})();
var state__13777__auto__ = (function (){var statearr_19394 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_19394[(6)] = c__13775__auto__);

return statearr_19394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,ch,G__19379_19395))
);

return c__13775__auto__;
});})(G__19379_19395))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19379_19395,G__19380_19396) : re_frame.core.reg_fx.call(null,G__19379_19395,G__19380_19396));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__19399){
var vec__19400 = p__19399;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19400,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19400,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19400,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19400,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__19403 = type;
var G__19403__$1 = (((G__19403 instanceof cljs.core.Keyword))?G__19403.fqn:null);
switch (G__19403__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19403__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__19405){
var vec__19406 = p__19405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19406,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19406,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
