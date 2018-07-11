// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.storage.indexeddb');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.storage.local');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('warehouse.indexeddb');
warehouse.storage.indexeddb.normalize_keyword = (function warehouse$storage$indexeddb$normalize_keyword(keyword){
return clojure.string.lower_case(keyword);
});
warehouse.storage.indexeddb.component__GT_obj = (function warehouse$storage$indexeddb$component__GT_obj(c){
var keywords = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.normalize_keyword,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(c),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(c))));
return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,cljs.core.cst$kw$keywords,keywords));
});
warehouse.storage.indexeddb.obj__GT_component = (function warehouse$storage$indexeddb$obj__GT_component(o){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)),cljs.core.cst$kw$keywords);
});
warehouse.storage.indexeddb.on_upgrade = (function warehouse$storage$indexeddb$on_upgrade(e){
var db = e.target.result;
if((e.oldVersion < (1))){
var store = db.createObjectStore("components",({"keyPath": "id"}));
var seq__11516_11520 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(warehouse.storage.local.app_state)));
var chunk__11517_11521 = null;
var count__11518_11522 = (0);
var i__11519_11523 = (0);
while(true){
if((i__11519_11523 < count__11518_11522)){
var component_11524 = chunk__11517_11521.cljs$core$IIndexed$_nth$arity$2(null,i__11519_11523);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11524));


var G__11525 = seq__11516_11520;
var G__11526 = chunk__11517_11521;
var G__11527 = count__11518_11522;
var G__11528 = (i__11519_11523 + (1));
seq__11516_11520 = G__11525;
chunk__11517_11521 = G__11526;
count__11518_11522 = G__11527;
i__11519_11523 = G__11528;
continue;
} else {
var temp__5457__auto___11529 = cljs.core.seq(seq__11516_11520);
if(temp__5457__auto___11529){
var seq__11516_11530__$1 = temp__5457__auto___11529;
if(cljs.core.chunked_seq_QMARK_(seq__11516_11530__$1)){
var c__4351__auto___11531 = cljs.core.chunk_first(seq__11516_11530__$1);
var G__11532 = cljs.core.chunk_rest(seq__11516_11530__$1);
var G__11533 = c__4351__auto___11531;
var G__11534 = cljs.core.count(c__4351__auto___11531);
var G__11535 = (0);
seq__11516_11520 = G__11532;
chunk__11517_11521 = G__11533;
count__11518_11522 = G__11534;
i__11519_11523 = G__11535;
continue;
} else {
var component_11536 = cljs.core.first(seq__11516_11530__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11536));


var G__11537 = cljs.core.next(seq__11516_11530__$1);
var G__11538 = null;
var G__11539 = (0);
var G__11540 = (0);
seq__11516_11520 = G__11537;
chunk__11517_11521 = G__11538;
count__11518_11522 = G__11539;
i__11519_11523 = G__11540;
continue;
}
} else {
}
}
break;
}

return store.createIndex("by_keyword","keywords",({"multiEntry": true}));
} else {
return null;
}
});
warehouse.storage.indexeddb.db = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"app-state",cljs.core.cst$kw$version,(1),cljs.core.cst$kw$on_DASH_upgrade,warehouse.storage.indexeddb.on_upgrade], null);
/**
 * Returns channel receiving first `n` components
 */
warehouse.storage.indexeddb.load_initial_data = (function warehouse$storage$indexeddb$load_initial_data(n){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_11554){
var state_val_11555 = (state_11554[(1)]);
if((state_val_11555 === (1))){
var inst_11541 = [cljs.core.cst$kw$offset,cljs.core.cst$kw$limit];
var inst_11542 = [(0),n];
var inst_11543 = cljs.core.PersistentHashMap.fromArrays(inst_11541,inst_11542);
var inst_11544 = warehouse.indexeddb.load_page(warehouse.storage.indexeddb.db,"components",inst_11543);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11554__$1,(2),inst_11544);
} else {
if((state_val_11555 === (2))){
var inst_11546 = (state_11554[(2)]);
var inst_11547 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11548 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11546);
var inst_11549 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11546);
var inst_11550 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11549);
var inst_11551 = [inst_11548,inst_11550];
var inst_11552 = cljs.core.PersistentHashMap.fromArrays(inst_11547,inst_11551);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11554__$1,inst_11552);
} else {
return null;
}
}
});})(c__9423__auto__))
;
return ((function (switch__9320__auto__,c__9423__auto__){
return (function() {
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0 = (function (){
var statearr_11556 = [null,null,null,null,null,null,null];
(statearr_11556[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__);

(statearr_11556[(1)] = (1));

return statearr_11556;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1 = (function (state_11554){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11554);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11557){if((e11557 instanceof Object)){
var ex__9324__auto__ = e11557;
var statearr_11558_11560 = state_11554;
(statearr_11558_11560[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11554);

return cljs.core.cst$kw$recur;
} else {
throw e11557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11561 = state_11554;
state_11554 = G__11561;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__ = function(state_11554){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1.call(this,state_11554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11559 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11559[(6)] = c__9423__auto__);

return statearr_11559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
});
/**
 * Returns channel receiving components for the page
 */
warehouse.storage.indexeddb.load_components = (function warehouse$storage$indexeddb$load_components(limit,offset){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_11575){
var state_val_11576 = (state_11575[(1)]);
if((state_val_11576 === (1))){
var inst_11562 = [cljs.core.cst$kw$offset,cljs.core.cst$kw$limit];
var inst_11563 = [offset,limit];
var inst_11564 = cljs.core.PersistentHashMap.fromArrays(inst_11562,inst_11563);
var inst_11565 = warehouse.indexeddb.load_page(warehouse.storage.indexeddb.db,"components",inst_11564);
var state_11575__$1 = state_11575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11575__$1,(2),inst_11565);
} else {
if((state_val_11576 === (2))){
var inst_11567 = (state_11575[(2)]);
var inst_11568 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11569 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11567);
var inst_11570 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11567);
var inst_11571 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11570);
var inst_11572 = [inst_11569,inst_11571];
var inst_11573 = cljs.core.PersistentHashMap.fromArrays(inst_11568,inst_11572);
var state_11575__$1 = state_11575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11575__$1,inst_11573);
} else {
return null;
}
}
});})(c__9423__auto__))
;
return ((function (switch__9320__auto__,c__9423__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0 = (function (){
var statearr_11577 = [null,null,null,null,null,null,null];
(statearr_11577[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__);

(statearr_11577[(1)] = (1));

return statearr_11577;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1 = (function (state_11575){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11575);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11578){if((e11578 instanceof Object)){
var ex__9324__auto__ = e11578;
var statearr_11579_11581 = state_11575;
(statearr_11579_11581[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11575);

return cljs.core.cst$kw$recur;
} else {
throw e11578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11582 = state_11575;
state_11575 = G__11582;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__ = function(state_11575){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1.call(this,state_11575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11580 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11580[(6)] = c__9423__auto__);

return statearr_11580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
});
/**
 * Returns channel receiving components by `ids`
 */
warehouse.storage.indexeddb.load_components_by_ids = (function warehouse$storage$indexeddb$load_components_by_ids(ids){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_11594){
var state_val_11595 = (state_11594[(1)]);
if((state_val_11595 === (1))){
var inst_11584 = [cljs.core.cst$kw$ids];
var inst_11585 = [ids];
var inst_11586 = cljs.core.PersistentHashMap.fromArrays(inst_11584,inst_11585);
var inst_11587 = warehouse.indexeddb.load_by_ids(warehouse.storage.indexeddb.db,"components",inst_11586);
var state_11594__$1 = state_11594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11594__$1,(2),inst_11587);
} else {
if((state_val_11595 === (2))){
var inst_11589 = (state_11594[(2)]);
var inst_11590 = (function (){var res = inst_11589;
return ((function (res,inst_11589,state_val_11595,c__9423__auto__){
return (function (p1__11583_SHARP_){
return p1__11583_SHARP_.id;
});
;})(res,inst_11589,state_val_11595,c__9423__auto__))
})();
var inst_11591 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_11590,inst_11589);
var inst_11592 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11591);
var state_11594__$1 = state_11594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11594__$1,inst_11592);
} else {
return null;
}
}
});})(c__9423__auto__))
;
return ((function (switch__9320__auto__,c__9423__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11596 = [null,null,null,null,null,null,null];
(statearr_11596[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__);

(statearr_11596[(1)] = (1));

return statearr_11596;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1 = (function (state_11594){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11594);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11597){if((e11597 instanceof Object)){
var ex__9324__auto__ = e11597;
var statearr_11598_11600 = state_11594;
(statearr_11598_11600[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11594);

return cljs.core.cst$kw$recur;
} else {
throw e11597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11601 = state_11594;
state_11594 = G__11601;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__ = function(state_11594){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1.call(this,state_11594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11599 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11599[(6)] = c__9423__auto__);

return statearr_11599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
});
/**
 * Returns channel receiving ids of components filtered by `keyword`
 */
warehouse.storage.indexeddb.filter_ids_by_keyword = (function warehouse$storage$indexeddb$filter_ids_by_keyword(keyword){
return warehouse.indexeddb.load_ids_by_string_index(warehouse.storage.indexeddb.db,"components",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$index_DASH_name,"by_keyword",cljs.core.cst$kw$q,warehouse.storage.indexeddb.normalize_keyword(keyword)], null));
});
/**
 * Takes query `q` and returns channel receiving ids of components
 *   matching the `q`
 */
warehouse.storage.indexeddb.filter_ids = (function warehouse$storage$indexeddb$filter_ids(q){
var col = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.empty_QMARK_),clojure.string.split.cljs$core$IFn$_invoke$arity$2(q," "));
var n = cljs.core.count(col);
var ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.filter_ids_by_keyword,col));
var key_sets = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__9423__auto___11655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___11655,col,n,ch,key_sets,out){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___11655,col,n,ch,key_sets,out){
return (function (state_11634){
var state_val_11635 = (state_11634[(1)]);
if((state_val_11635 === (7))){
var inst_11603 = (state_11634[(7)]);
var inst_11607 = (state_11634[(8)]);
var inst_11609 = (state_11634[(2)]);
var inst_11610 = (inst_11607.cljs$core$IFn$_invoke$arity$1 ? inst_11607.cljs$core$IFn$_invoke$arity$1(inst_11609) : inst_11607.call(null,inst_11609));
var inst_11611 = (inst_11603 + (1));
var inst_11603__$1 = inst_11611;
var state_11634__$1 = (function (){var statearr_11636 = state_11634;
(statearr_11636[(9)] = inst_11610);

(statearr_11636[(7)] = inst_11603__$1);

return statearr_11636;
})();
var statearr_11637_11656 = state_11634__$1;
(statearr_11637_11656[(2)] = null);

(statearr_11637_11656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11635 === (1))){
var inst_11603 = (0);
var state_11634__$1 = (function (){var statearr_11638 = state_11634;
(statearr_11638[(7)] = inst_11603);

return statearr_11638;
})();
var statearr_11639_11657 = state_11634__$1;
(statearr_11639_11657[(2)] = null);

(statearr_11639_11657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11635 === (4))){
var inst_11603 = (state_11634[(7)]);
var inst_11607 = (function (){var n__4408__auto__ = n;
var i = inst_11603;
return ((function (n__4408__auto__,i,inst_11603,state_val_11635,c__9423__auto___11655,col,n,ch,key_sets,out){
return (function (p1__11602_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_sets,cljs.core.conj,cljs.core.set(p1__11602_SHARP_));
});
;})(n__4408__auto__,i,inst_11603,state_val_11635,c__9423__auto___11655,col,n,ch,key_sets,out))
})();
var state_11634__$1 = (function (){var statearr_11640 = state_11634;
(statearr_11640[(8)] = inst_11607);

return statearr_11640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11634__$1,(7),ch);
} else {
if((state_val_11635 === (6))){
var inst_11615 = (state_11634[(2)]);
var state_11634__$1 = state_11634;
var statearr_11641_11658 = state_11634__$1;
(statearr_11641_11658[(2)] = inst_11615);

(statearr_11641_11658[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11635 === (3))){
var inst_11617 = (state_11634[(2)]);
var inst_11618 = cljs.core.async.close_BANG_(ch);
var inst_11619 = cljs.core.deref(key_sets);
var inst_11620 = cljs.core.empty_QMARK_(inst_11619);
var state_11634__$1 = (function (){var statearr_11642 = state_11634;
(statearr_11642[(10)] = inst_11617);

(statearr_11642[(11)] = inst_11618);

return statearr_11642;
})();
if(inst_11620){
var statearr_11643_11659 = state_11634__$1;
(statearr_11643_11659[(1)] = (8));

} else {
var statearr_11644_11660 = state_11634__$1;
(statearr_11644_11660[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11635 === (2))){
var inst_11603 = (state_11634[(7)]);
var inst_11605 = (inst_11603 < n);
var state_11634__$1 = state_11634;
if(cljs.core.truth_(inst_11605)){
var statearr_11645_11661 = state_11634__$1;
(statearr_11645_11661[(1)] = (4));

} else {
var statearr_11646_11662 = state_11634__$1;
(statearr_11646_11662[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11635 === (11))){
var inst_11631 = (state_11634[(2)]);
var inst_11632 = cljs.core.async.close_BANG_(out);
var state_11634__$1 = (function (){var statearr_11647 = state_11634;
(statearr_11647[(12)] = inst_11631);

return statearr_11647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11634__$1,inst_11632);
} else {
if((state_val_11635 === (9))){
var inst_11624 = cljs.core.PersistentVector.EMPTY;
var inst_11625 = cljs.core.deref(key_sets);
var inst_11626 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,inst_11625);
var inst_11627 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_11624,inst_11626);
var state_11634__$1 = state_11634;
var statearr_11648_11663 = state_11634__$1;
(statearr_11648_11663[(2)] = inst_11627);

(statearr_11648_11663[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11635 === (5))){
var state_11634__$1 = state_11634;
var statearr_11649_11664 = state_11634__$1;
(statearr_11649_11664[(2)] = null);

(statearr_11649_11664[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11635 === (10))){
var inst_11629 = (state_11634[(2)]);
var state_11634__$1 = state_11634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11634__$1,(11),out,inst_11629);
} else {
if((state_val_11635 === (8))){
var inst_11622 = cljs.core.PersistentVector.EMPTY;
var state_11634__$1 = state_11634;
var statearr_11650_11665 = state_11634__$1;
(statearr_11650_11665[(2)] = inst_11622);

(statearr_11650_11665[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9423__auto___11655,col,n,ch,key_sets,out))
;
return ((function (switch__9320__auto__,c__9423__auto___11655,col,n,ch,key_sets,out){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11651 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11651[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__);

(statearr_11651[(1)] = (1));

return statearr_11651;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1 = (function (state_11634){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11634);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11652){if((e11652 instanceof Object)){
var ex__9324__auto__ = e11652;
var statearr_11653_11666 = state_11634;
(statearr_11653_11666[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11634);

return cljs.core.cst$kw$recur;
} else {
throw e11652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11667 = state_11634;
state_11634 = G__11667;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = function(state_11634){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1.call(this,state_11634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___11655,col,n,ch,key_sets,out))
})();
var state__9425__auto__ = (function (){var statearr_11654 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11654[(6)] = c__9423__auto___11655);

return statearr_11654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___11655,col,n,ch,key_sets,out))
);


return out;
});
/**
 * Returns channel receiving `true` once update completed.
 */
warehouse.storage.indexeddb.store_components = (function warehouse$storage$indexeddb$store_components(components){
return warehouse.indexeddb.store(warehouse.storage.indexeddb.db,"components",cljs.core.map.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.component__GT_obj,components));
});
/**
 * Returns channel receiving `true` once update completed.
 */
warehouse.storage.indexeddb.store_component = (function warehouse$storage$indexeddb$store_component(component){
return warehouse.indexeddb.store(warehouse.storage.indexeddb.db,"components",warehouse.storage.indexeddb.component__GT_obj(component));
});
