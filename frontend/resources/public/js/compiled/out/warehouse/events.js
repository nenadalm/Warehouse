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
var G__19899__delegate = function (args){
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
var G__19899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19900__i = 0, G__19900__a = new Array(arguments.length -  0);
while (G__19900__i < G__19900__a.length) {G__19900__a[G__19900__i] = arguments[G__19900__i + 0]; ++G__19900__i;}
  args = new cljs.core.IndexedSeq(G__19900__a,0,null);
} 
return G__19899__delegate.call(this,args);};
G__19899.cljs$lang$maxFixedArity = 0;
G__19899.cljs$lang$applyTo = (function (arglist__19901){
var args = cljs.core.seq(arglist__19901);
return G__19899__delegate(args);
});
G__19899.cljs$core$IFn$_invoke$arity$variadic = G__19899__delegate;
return G__19899;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__19902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19902) : re_frame.core.dispatch.call(null,G__19902));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
var G__19903_19905 = cljs.core.cst$kw$navigate;
var G__19904_19906 = ((function (G__19903_19905){
return (function (url){
return warehouse.routes.nav_BANG_(url);
});})(G__19903_19905))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19903_19905,G__19904_19906) : re_frame.core.reg_fx.call(null,G__19903_19905,G__19904_19906));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warehouse$events_SLASH_navigate,(function (_,p__19907){
var vec__19908 = p__19907;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19908,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19908,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$navigate,page], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll], null),(function (is){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(is,cljs.core.cst$kw$page,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pages_DASH_count,(function (){var G__19911 = ((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?cljs.core.count(warehouse.search.db.filter_search(db)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null))) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null)));
return Math.ceil(G__19911);
})()], 0));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (p__19912,_){
var map__19913 = p__19912;
var map__19913__$1 = ((((!((map__19913 == null)))?(((((map__19913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19913):map__19913);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19913__$1,cljs.core.cst$kw$db);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__19915){
var vec__19916 = p__19915;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19916,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19916,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__19919){
var vec__19920 = p__19919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__19923){
var vec__19924 = p__19923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__19927_19930 = cljs.core.cst$kw$state;
var G__19928_19931 = ((function (G__19927_19930){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,(function (){var fexpr__19929 = cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__19929.cljs$core$IFn$_invoke$arity$0 ? fexpr__19929.cljs$core$IFn$_invoke$arity$0() : fexpr__19929.call(null));
})());
});})(G__19927_19930))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__19927_19930,G__19928_19931) : re_frame.core.reg_cofx.call(null,G__19927_19930,G__19928_19931));
var G__19932_19934 = cljs.core.cst$kw$change_DASH_sets;
var G__19933_19935 = ((function (G__19932_19934){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,cljs.core.deref(warehouse.change_set.change_sets));
});})(G__19932_19934))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__19932_19934,G__19933_19935) : re_frame.core.reg_cofx.call(null,G__19932_19934,G__19933_19935));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19936 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__19936) : re_frame.core.inject_cofx.call(null,G__19936));
})(),(function (){var G__19937 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__19937) : re_frame.core.inject_cofx.call(null,G__19937));
})()], null),(function (cofx,_){
var db = warehouse.component_import.db.load_providers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$load_DASH_components,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_per_DASH_page], null))], null)], null);
}));
var G__19938_19940 = cljs.core.cst$kw$change_DASH_sets;
var G__19939_19941 = ((function (G__19938_19940){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return cljs.core.reset_BANG_(warehouse.change_set.change_sets,value);
}
});})(G__19938_19940))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19938_19940,G__19939_19941) : re_frame.core.reg_fx.call(null,G__19938_19940,G__19939_19941));
var G__19942_19945 = cljs.core.cst$kw$state;
var G__19943_19946 = ((function (G__19942_19945){
return (function (value){
var fexpr__19944 = cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage);
return (fexpr__19944.cljs$core$IFn$_invoke$arity$1 ? fexpr__19944.cljs$core$IFn$_invoke$arity$1(value) : fexpr__19944.call(null,value));
});})(G__19942_19945))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19942_19945,G__19943_19946) : re_frame.core.reg_fx.call(null,G__19942_19945,G__19943_19946));
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
var G__19947_19974 = cljs.core.cst$kw$load_DASH_components;
var G__19948_19975 = ((function (G__19947_19974){
return (function (p__19949){
var map__19950 = p__19949;
var map__19950__$1 = ((((!((map__19950 == null)))?(((((map__19950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19950):map__19950);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19950__$1,cljs.core.cst$kw$limit);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19950__$1,cljs.core.cst$kw$offset);
var ch = warehouse.storage.indexeddb.load_components(limit,offset);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,ch,map__19950,map__19950__$1,limit,offset,G__19947_19974){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,ch,map__19950,map__19950__$1,limit,offset,G__19947_19974){
return (function (state_19963){
var state_val_19964 = (state_19963[(1)]);
if((state_val_19964 === (1))){
var state_19963__$1 = state_19963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19963__$1,(2),ch);
} else {
if((state_val_19964 === (2))){
var inst_19953 = (state_19963[(7)]);
var inst_19953__$1 = (state_19963[(2)]);
var state_19963__$1 = (function (){var statearr_19965 = state_19963;
(statearr_19965[(7)] = inst_19953__$1);

return statearr_19965;
})();
if(cljs.core.truth_(inst_19953__$1)){
var statearr_19966_19976 = state_19963__$1;
(statearr_19966_19976[(1)] = (3));

} else {
var statearr_19967_19977 = state_19963__$1;
(statearr_19967_19977[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (3))){
var inst_19953 = (state_19963[(7)]);
var inst_19955 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19956 = [cljs.core.cst$kw$components_DASH_loaded,inst_19953,offset];
var inst_19957 = (new cljs.core.PersistentVector(null,3,(5),inst_19955,inst_19956,null));
var inst_19958 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19957) : re_frame.core.dispatch.call(null,inst_19957));
var state_19963__$1 = state_19963;
var statearr_19968_19978 = state_19963__$1;
(statearr_19968_19978[(2)] = inst_19958);

(statearr_19968_19978[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (4))){
var state_19963__$1 = state_19963;
var statearr_19969_19979 = state_19963__$1;
(statearr_19969_19979[(2)] = null);

(statearr_19969_19979[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (5))){
var inst_19961 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19963__$1,inst_19961);
} else {
return null;
}
}
}
}
}
});})(c__13771__auto__,ch,map__19950,map__19950__$1,limit,offset,G__19947_19974))
;
return ((function (switch__13590__auto__,c__13771__auto__,ch,map__19950,map__19950__$1,limit,offset,G__19947_19974){
return (function() {
var warehouse$events$state_machine__13591__auto__ = null;
var warehouse$events$state_machine__13591__auto____0 = (function (){
var statearr_19970 = [null,null,null,null,null,null,null,null];
(statearr_19970[(0)] = warehouse$events$state_machine__13591__auto__);

(statearr_19970[(1)] = (1));

return statearr_19970;
});
var warehouse$events$state_machine__13591__auto____1 = (function (state_19963){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_19963);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e19971){if((e19971 instanceof Object)){
var ex__13594__auto__ = e19971;
var statearr_19972_19980 = state_19963;
(statearr_19972_19980[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19963);

return cljs.core.cst$kw$recur;
} else {
throw e19971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__19981 = state_19963;
state_19963 = G__19981;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$events$state_machine__13591__auto__ = function(state_19963){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__13591__auto____0.call(this);
case 1:
return warehouse$events$state_machine__13591__auto____1.call(this,state_19963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__13591__auto____0;
warehouse$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__13591__auto____1;
return warehouse$events$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,ch,map__19950,map__19950__$1,limit,offset,G__19947_19974))
})();
var state__13773__auto__ = (function (){var statearr_19973 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_19973[(6)] = c__13771__auto__);

return statearr_19973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,ch,map__19950,map__19950__$1,limit,offset,G__19947_19974))
);

return c__13771__auto__;
});})(G__19947_19974))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19947_19974,G__19948_19975) : re_frame.core.reg_fx.call(null,G__19947_19974,G__19948_19975));
var G__19982_20014 = cljs.core.cst$kw$load_DASH_components_DASH_by_DASH_ids;
var G__19983_20015 = ((function (G__19982_20014){
return (function (p__19984){
var vec__19985 = p__19984;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19985,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19985,(1),null);
var ch = warehouse.storage.indexeddb.load_components_by_ids(ids);
cljs.core.reset_BANG_(warehouse.events.loading_components_ch,ch);

var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,ch,vec__19985,ids,offset,G__19982_20014){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,ch,vec__19985,ids,offset,G__19982_20014){
return (function (state_20003){
var state_val_20004 = (state_20003[(1)]);
if((state_val_20004 === (1))){
var state_20003__$1 = state_20003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20003__$1,(2),ch);
} else {
if((state_val_20004 === (2))){
var inst_19989 = (state_20003[(7)]);
var inst_19989__$1 = (state_20003[(2)]);
var state_20003__$1 = (function (){var statearr_20005 = state_20003;
(statearr_20005[(7)] = inst_19989__$1);

return statearr_20005;
})();
if(cljs.core.truth_(inst_19989__$1)){
var statearr_20006_20016 = state_20003__$1;
(statearr_20006_20016[(1)] = (3));

} else {
var statearr_20007_20017 = state_20003__$1;
(statearr_20007_20017[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20004 === (3))){
var inst_19989 = (state_20003[(7)]);
var inst_19991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19992 = [cljs.core.cst$kw$components,cljs.core.cst$kw$count];
var inst_19993 = cljs.core.count(inst_19989);
var inst_19994 = [inst_19989,inst_19993];
var inst_19995 = cljs.core.PersistentHashMap.fromArrays(inst_19992,inst_19994);
var inst_19996 = [cljs.core.cst$kw$components_DASH_loaded,inst_19995,offset];
var inst_19997 = (new cljs.core.PersistentVector(null,3,(5),inst_19991,inst_19996,null));
var inst_19998 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19997) : re_frame.core.dispatch.call(null,inst_19997));
var state_20003__$1 = state_20003;
var statearr_20008_20018 = state_20003__$1;
(statearr_20008_20018[(2)] = inst_19998);

(statearr_20008_20018[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20004 === (4))){
var state_20003__$1 = state_20003;
var statearr_20009_20019 = state_20003__$1;
(statearr_20009_20019[(2)] = null);

(statearr_20009_20019[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20004 === (5))){
var inst_20001 = (state_20003[(2)]);
var state_20003__$1 = state_20003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20003__$1,inst_20001);
} else {
return null;
}
}
}
}
}
});})(c__13771__auto__,ch,vec__19985,ids,offset,G__19982_20014))
;
return ((function (switch__13590__auto__,c__13771__auto__,ch,vec__19985,ids,offset,G__19982_20014){
return (function() {
var warehouse$events$state_machine__13591__auto__ = null;
var warehouse$events$state_machine__13591__auto____0 = (function (){
var statearr_20010 = [null,null,null,null,null,null,null,null];
(statearr_20010[(0)] = warehouse$events$state_machine__13591__auto__);

(statearr_20010[(1)] = (1));

return statearr_20010;
});
var warehouse$events$state_machine__13591__auto____1 = (function (state_20003){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_20003);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e20011){if((e20011 instanceof Object)){
var ex__13594__auto__ = e20011;
var statearr_20012_20020 = state_20003;
(statearr_20012_20020[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20003);

return cljs.core.cst$kw$recur;
} else {
throw e20011;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__20021 = state_20003;
state_20003 = G__20021;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$events$state_machine__13591__auto__ = function(state_20003){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__13591__auto____0.call(this);
case 1:
return warehouse$events$state_machine__13591__auto____1.call(this,state_20003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__13591__auto____0;
warehouse$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__13591__auto____1;
return warehouse$events$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,ch,vec__19985,ids,offset,G__19982_20014))
})();
var state__13773__auto__ = (function (){var statearr_20013 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_20013[(6)] = c__13771__auto__);

return statearr_20013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,ch,vec__19985,ids,offset,G__19982_20014))
);

return c__13771__auto__;
});})(G__19982_20014))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19982_20014,G__19983_20015) : re_frame.core.reg_fx.call(null,G__19982_20014,G__19983_20015));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_loaded,(function (p__20023,p__20024){
var map__20025 = p__20023;
var map__20025__$1 = ((((!((map__20025 == null)))?(((((map__20025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20025):map__20025);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20025__$1,cljs.core.cst$kw$db);
var vec__20026 = p__20024;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(0),null);
var components_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(2),null);
if((offset > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(warehouse.util.document__GT_state(components_data,db)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$page], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in((function (){var fexpr__20030 = ((function (map__20025,map__20025__$1,db,vec__20026,_,components_data,offset){
return (function (p1__20022_SHARP_){
return warehouse.util.document__GT_state(components_data,p1__20022_SHARP_);
});})(map__20025,map__20025__$1,db,vec__20026,_,components_data,offset))
;
return fexpr__20030(db);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(components_data)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null)], null);
}
}));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$amount,window.Number(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item))], 0));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__20031){
var vec__20032 = p__20031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20032,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20032,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20032,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (p__20035,p__20036){
var map__20037 = p__20035;
var map__20037__$1 = ((((!((map__20037 == null)))?(((((map__20037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20037):map__20037);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20037__$1,cljs.core.cst$kw$db);
var vec__20038 = p__20036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038,(2),null);
var old_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,k], null))]);
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,warehouse.events.normalize_item(item)]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,warehouse.events.normalize_item(item),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (p__20042,p__20043){
var map__20044 = p__20042;
var map__20044__$1 = ((((!((map__20044 == null)))?(((((map__20044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20044):map__20044);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20044__$1,cljs.core.cst$kw$db);
var vec__20045 = p__20043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20045,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20045,(1),null);
var component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$records_DASH_count], null)) + (1)));
var old_components = cljs.core.PersistentArrayMap.EMPTY;
var new_components = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),component]);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_component,component,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
var G__20049_20065 = cljs.core.cst$kw$store_DASH_component;
var G__20050_20066 = ((function (G__20049_20065){
return (function (component){
var ch = warehouse.storage.indexeddb.store_component(component);
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,ch,G__20049_20065){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,ch,G__20049_20065){
return (function (state_20058){
var state_val_20059 = (state_20058[(1)]);
if((state_val_20059 === (1))){
var state_20058__$1 = state_20058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20058__$1,(2),ch);
} else {
if((state_val_20059 === (2))){
var inst_20052 = (state_20058[(2)]);
var inst_20053 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20054 = [cljs.core.cst$kw$filter_DASH_refresh];
var inst_20055 = (new cljs.core.PersistentVector(null,1,(5),inst_20053,inst_20054,null));
var inst_20056 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_20055) : re_frame.core.dispatch.call(null,inst_20055));
var state_20058__$1 = (function (){var statearr_20060 = state_20058;
(statearr_20060[(7)] = inst_20052);

return statearr_20060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20058__$1,inst_20056);
} else {
return null;
}
}
});})(c__13771__auto__,ch,G__20049_20065))
;
return ((function (switch__13590__auto__,c__13771__auto__,ch,G__20049_20065){
return (function() {
var warehouse$events$state_machine__13591__auto__ = null;
var warehouse$events$state_machine__13591__auto____0 = (function (){
var statearr_20061 = [null,null,null,null,null,null,null,null];
(statearr_20061[(0)] = warehouse$events$state_machine__13591__auto__);

(statearr_20061[(1)] = (1));

return statearr_20061;
});
var warehouse$events$state_machine__13591__auto____1 = (function (state_20058){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_20058);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e20062){if((e20062 instanceof Object)){
var ex__13594__auto__ = e20062;
var statearr_20063_20067 = state_20058;
(statearr_20063_20067[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20058);

return cljs.core.cst$kw$recur;
} else {
throw e20062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__20068 = state_20058;
state_20058 = G__20068;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$events$state_machine__13591__auto__ = function(state_20058){
switch(arguments.length){
case 0:
return warehouse$events$state_machine__13591__auto____0.call(this);
case 1:
return warehouse$events$state_machine__13591__auto____1.call(this,state_20058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$events$state_machine__13591__auto____0;
warehouse$events$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$events$state_machine__13591__auto____1;
return warehouse$events$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,ch,G__20049_20065))
})();
var state__13773__auto__ = (function (){var statearr_20064 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_20064[(6)] = c__13771__auto__);

return statearr_20064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,ch,G__20049_20065))
);

return c__13771__auto__;
});})(G__20049_20065))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__20049_20065,G__20050_20066) : re_frame.core.reg_fx.call(null,G__20049_20065,G__20050_20066));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__20069){
var vec__20070 = p__20069;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20070,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20070,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20070,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20070,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__20073 = type;
var G__20073__$1 = (((G__20073 instanceof cljs.core.Keyword))?G__20073.fqn:null);
switch (G__20073__$1) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20073__$1)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__20075){
var vec__20076 = p__20075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20076,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20076,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
