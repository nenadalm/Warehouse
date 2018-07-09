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
var seq__11497_11501 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(warehouse.storage.local.app_state)));
var chunk__11498_11502 = null;
var count__11499_11503 = (0);
var i__11500_11504 = (0);
while(true){
if((i__11500_11504 < count__11499_11503)){
var component_11505 = chunk__11498_11502.cljs$core$IIndexed$_nth$arity$2(null,i__11500_11504);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11505));


var G__11506 = seq__11497_11501;
var G__11507 = chunk__11498_11502;
var G__11508 = count__11499_11503;
var G__11509 = (i__11500_11504 + (1));
seq__11497_11501 = G__11506;
chunk__11498_11502 = G__11507;
count__11499_11503 = G__11508;
i__11500_11504 = G__11509;
continue;
} else {
var temp__5457__auto___11510 = cljs.core.seq(seq__11497_11501);
if(temp__5457__auto___11510){
var seq__11497_11511__$1 = temp__5457__auto___11510;
if(cljs.core.chunked_seq_QMARK_(seq__11497_11511__$1)){
var c__4351__auto___11512 = cljs.core.chunk_first(seq__11497_11511__$1);
var G__11513 = cljs.core.chunk_rest(seq__11497_11511__$1);
var G__11514 = c__4351__auto___11512;
var G__11515 = cljs.core.count(c__4351__auto___11512);
var G__11516 = (0);
seq__11497_11501 = G__11513;
chunk__11498_11502 = G__11514;
count__11499_11503 = G__11515;
i__11500_11504 = G__11516;
continue;
} else {
var component_11517 = cljs.core.first(seq__11497_11511__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11517));


var G__11518 = cljs.core.next(seq__11497_11511__$1);
var G__11519 = null;
var G__11520 = (0);
var G__11521 = (0);
seq__11497_11501 = G__11518;
chunk__11498_11502 = G__11519;
count__11499_11503 = G__11520;
i__11500_11504 = G__11521;
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
return (function (state_11535){
var state_val_11536 = (state_11535[(1)]);
if((state_val_11536 === (1))){
var inst_11522 = [cljs.core.cst$kw$offset,cljs.core.cst$kw$limit];
var inst_11523 = [(0),n];
var inst_11524 = cljs.core.PersistentHashMap.fromArrays(inst_11522,inst_11523);
var inst_11525 = warehouse.indexeddb.load_page(warehouse.storage.indexeddb.db,"components",inst_11524);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11535__$1,(2),inst_11525);
} else {
if((state_val_11536 === (2))){
var inst_11527 = (state_11535[(2)]);
var inst_11528 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11529 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11527);
var inst_11530 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11527);
var inst_11531 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11530);
var inst_11532 = [inst_11529,inst_11531];
var inst_11533 = cljs.core.PersistentHashMap.fromArrays(inst_11528,inst_11532);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11535__$1,inst_11533);
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
var statearr_11537 = [null,null,null,null,null,null,null];
(statearr_11537[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__);

(statearr_11537[(1)] = (1));

return statearr_11537;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1 = (function (state_11535){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11535);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11538){if((e11538 instanceof Object)){
var ex__9324__auto__ = e11538;
var statearr_11539_11541 = state_11535;
(statearr_11539_11541[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11535);

return cljs.core.cst$kw$recur;
} else {
throw e11538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11542 = state_11535;
state_11535 = G__11542;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__ = function(state_11535){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1.call(this,state_11535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11540 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11540[(6)] = c__9423__auto__);

return statearr_11540;
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
return (function (state_11556){
var state_val_11557 = (state_11556[(1)]);
if((state_val_11557 === (1))){
var inst_11543 = [cljs.core.cst$kw$offset,cljs.core.cst$kw$limit];
var inst_11544 = [offset,limit];
var inst_11545 = cljs.core.PersistentHashMap.fromArrays(inst_11543,inst_11544);
var inst_11546 = warehouse.indexeddb.load_page(warehouse.storage.indexeddb.db,"components",inst_11545);
var state_11556__$1 = state_11556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11556__$1,(2),inst_11546);
} else {
if((state_val_11557 === (2))){
var inst_11548 = (state_11556[(2)]);
var inst_11549 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11550 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11548);
var inst_11551 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11548);
var inst_11552 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11551);
var inst_11553 = [inst_11550,inst_11552];
var inst_11554 = cljs.core.PersistentHashMap.fromArrays(inst_11549,inst_11553);
var state_11556__$1 = state_11556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11556__$1,inst_11554);
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
var statearr_11558 = [null,null,null,null,null,null,null];
(statearr_11558[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__);

(statearr_11558[(1)] = (1));

return statearr_11558;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1 = (function (state_11556){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11556);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11559){if((e11559 instanceof Object)){
var ex__9324__auto__ = e11559;
var statearr_11560_11562 = state_11556;
(statearr_11560_11562[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11556);

return cljs.core.cst$kw$recur;
} else {
throw e11559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11563 = state_11556;
state_11556 = G__11563;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__ = function(state_11556){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1.call(this,state_11556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11561 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11561[(6)] = c__9423__auto__);

return statearr_11561;
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
return (function (state_11572){
var state_val_11573 = (state_11572[(1)]);
if((state_val_11573 === (1))){
var inst_11564 = [cljs.core.cst$kw$ids];
var inst_11565 = [ids];
var inst_11566 = cljs.core.PersistentHashMap.fromArrays(inst_11564,inst_11565);
var inst_11567 = warehouse.indexeddb.load_by_ids(warehouse.storage.indexeddb.db,"components",inst_11566);
var state_11572__$1 = state_11572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11572__$1,(2),inst_11567);
} else {
if((state_val_11573 === (2))){
var inst_11569 = (state_11572[(2)]);
var inst_11570 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11569);
var state_11572__$1 = state_11572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11572__$1,inst_11570);
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
var statearr_11574 = [null,null,null,null,null,null,null];
(statearr_11574[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__);

(statearr_11574[(1)] = (1));

return statearr_11574;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1 = (function (state_11572){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11572);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11575){if((e11575 instanceof Object)){
var ex__9324__auto__ = e11575;
var statearr_11576_11578 = state_11572;
(statearr_11576_11578[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11572);

return cljs.core.cst$kw$recur;
} else {
throw e11575;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11579 = state_11572;
state_11572 = G__11579;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__ = function(state_11572){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1.call(this,state_11572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11577 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11577[(6)] = c__9423__auto__);

return statearr_11577;
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
var c__9423__auto___11633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___11633,col,n,ch,key_sets,out){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___11633,col,n,ch,key_sets,out){
return (function (state_11612){
var state_val_11613 = (state_11612[(1)]);
if((state_val_11613 === (7))){
var inst_11585 = (state_11612[(7)]);
var inst_11581 = (state_11612[(8)]);
var inst_11587 = (state_11612[(2)]);
var inst_11588 = (inst_11585.cljs$core$IFn$_invoke$arity$1 ? inst_11585.cljs$core$IFn$_invoke$arity$1(inst_11587) : inst_11585.call(null,inst_11587));
var inst_11589 = (inst_11581 + (1));
var inst_11581__$1 = inst_11589;
var state_11612__$1 = (function (){var statearr_11614 = state_11612;
(statearr_11614[(8)] = inst_11581__$1);

(statearr_11614[(9)] = inst_11588);

return statearr_11614;
})();
var statearr_11615_11634 = state_11612__$1;
(statearr_11615_11634[(2)] = null);

(statearr_11615_11634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11613 === (1))){
var inst_11581 = (0);
var state_11612__$1 = (function (){var statearr_11616 = state_11612;
(statearr_11616[(8)] = inst_11581);

return statearr_11616;
})();
var statearr_11617_11635 = state_11612__$1;
(statearr_11617_11635[(2)] = null);

(statearr_11617_11635[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11613 === (4))){
var inst_11581 = (state_11612[(8)]);
var inst_11585 = (function (){var n__4408__auto__ = n;
var i = inst_11581;
return ((function (n__4408__auto__,i,inst_11581,state_val_11613,c__9423__auto___11633,col,n,ch,key_sets,out){
return (function (p1__11580_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_sets,cljs.core.conj,cljs.core.set(p1__11580_SHARP_));
});
;})(n__4408__auto__,i,inst_11581,state_val_11613,c__9423__auto___11633,col,n,ch,key_sets,out))
})();
var state_11612__$1 = (function (){var statearr_11618 = state_11612;
(statearr_11618[(7)] = inst_11585);

return statearr_11618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11612__$1,(7),ch);
} else {
if((state_val_11613 === (6))){
var inst_11593 = (state_11612[(2)]);
var state_11612__$1 = state_11612;
var statearr_11619_11636 = state_11612__$1;
(statearr_11619_11636[(2)] = inst_11593);

(statearr_11619_11636[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11613 === (3))){
var inst_11595 = (state_11612[(2)]);
var inst_11596 = cljs.core.async.close_BANG_(ch);
var inst_11597 = cljs.core.deref(key_sets);
var inst_11598 = cljs.core.empty_QMARK_(inst_11597);
var state_11612__$1 = (function (){var statearr_11620 = state_11612;
(statearr_11620[(10)] = inst_11595);

(statearr_11620[(11)] = inst_11596);

return statearr_11620;
})();
if(inst_11598){
var statearr_11621_11637 = state_11612__$1;
(statearr_11621_11637[(1)] = (8));

} else {
var statearr_11622_11638 = state_11612__$1;
(statearr_11622_11638[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11613 === (2))){
var inst_11581 = (state_11612[(8)]);
var inst_11583 = (inst_11581 < n);
var state_11612__$1 = state_11612;
if(cljs.core.truth_(inst_11583)){
var statearr_11623_11639 = state_11612__$1;
(statearr_11623_11639[(1)] = (4));

} else {
var statearr_11624_11640 = state_11612__$1;
(statearr_11624_11640[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11613 === (11))){
var inst_11609 = (state_11612[(2)]);
var inst_11610 = cljs.core.async.close_BANG_(out);
var state_11612__$1 = (function (){var statearr_11625 = state_11612;
(statearr_11625[(12)] = inst_11609);

return statearr_11625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11612__$1,inst_11610);
} else {
if((state_val_11613 === (9))){
var inst_11602 = cljs.core.PersistentVector.EMPTY;
var inst_11603 = cljs.core.deref(key_sets);
var inst_11604 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,inst_11603);
var inst_11605 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_11602,inst_11604);
var state_11612__$1 = state_11612;
var statearr_11626_11641 = state_11612__$1;
(statearr_11626_11641[(2)] = inst_11605);

(statearr_11626_11641[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11613 === (5))){
var state_11612__$1 = state_11612;
var statearr_11627_11642 = state_11612__$1;
(statearr_11627_11642[(2)] = null);

(statearr_11627_11642[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11613 === (10))){
var inst_11607 = (state_11612[(2)]);
var state_11612__$1 = state_11612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11612__$1,(11),out,inst_11607);
} else {
if((state_val_11613 === (8))){
var inst_11600 = cljs.core.PersistentVector.EMPTY;
var state_11612__$1 = state_11612;
var statearr_11628_11643 = state_11612__$1;
(statearr_11628_11643[(2)] = inst_11600);

(statearr_11628_11643[(1)] = (10));


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
});})(c__9423__auto___11633,col,n,ch,key_sets,out))
;
return ((function (switch__9320__auto__,c__9423__auto___11633,col,n,ch,key_sets,out){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11629 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11629[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__);

(statearr_11629[(1)] = (1));

return statearr_11629;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1 = (function (state_11612){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11612);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11630){if((e11630 instanceof Object)){
var ex__9324__auto__ = e11630;
var statearr_11631_11644 = state_11612;
(statearr_11631_11644[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11612);

return cljs.core.cst$kw$recur;
} else {
throw e11630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11645 = state_11612;
state_11612 = G__11645;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = function(state_11612){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1.call(this,state_11612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___11633,col,n,ch,key_sets,out))
})();
var state__9425__auto__ = (function (){var statearr_11632 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11632[(6)] = c__9423__auto___11633);

return statearr_11632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___11633,col,n,ch,key_sets,out))
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
