// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.storage.indexeddb');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.storage.local');
goog.require('cljs.core.async');
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
var seq__11614_11618 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(warehouse.storage.local.app_state)));
var chunk__11615_11619 = null;
var count__11616_11620 = (0);
var i__11617_11621 = (0);
while(true){
if((i__11617_11621 < count__11616_11620)){
var component_11622 = chunk__11615_11619.cljs$core$IIndexed$_nth$arity$2(null,i__11617_11621);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11622));


var G__11623 = seq__11614_11618;
var G__11624 = chunk__11615_11619;
var G__11625 = count__11616_11620;
var G__11626 = (i__11617_11621 + (1));
seq__11614_11618 = G__11623;
chunk__11615_11619 = G__11624;
count__11616_11620 = G__11625;
i__11617_11621 = G__11626;
continue;
} else {
var temp__5457__auto___11627 = cljs.core.seq(seq__11614_11618);
if(temp__5457__auto___11627){
var seq__11614_11628__$1 = temp__5457__auto___11627;
if(cljs.core.chunked_seq_QMARK_(seq__11614_11628__$1)){
var c__4351__auto___11629 = cljs.core.chunk_first(seq__11614_11628__$1);
var G__11630 = cljs.core.chunk_rest(seq__11614_11628__$1);
var G__11631 = c__4351__auto___11629;
var G__11632 = cljs.core.count(c__4351__auto___11629);
var G__11633 = (0);
seq__11614_11618 = G__11630;
chunk__11615_11619 = G__11631;
count__11616_11620 = G__11632;
i__11617_11621 = G__11633;
continue;
} else {
var component_11634 = cljs.core.first(seq__11614_11628__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11634));


var G__11635 = cljs.core.next(seq__11614_11628__$1);
var G__11636 = null;
var G__11637 = (0);
var G__11638 = (0);
seq__11614_11618 = G__11635;
chunk__11615_11619 = G__11636;
count__11616_11620 = G__11637;
i__11617_11621 = G__11638;
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
return (function (state_11652){
var state_val_11653 = (state_11652[(1)]);
if((state_val_11653 === (1))){
var inst_11639 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$limit,cljs.core.cst$kw$offset];
var inst_11640 = [cljs.core.cst$kw$idb_SLASH_value,cljs.core.cst$kw$components,n,(0)];
var inst_11641 = cljs.core.PersistentHashMap.fromArrays(inst_11639,inst_11640);
var inst_11642 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11641);
var state_11652__$1 = state_11652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11652__$1,(2),inst_11642);
} else {
if((state_val_11653 === (2))){
var inst_11644 = (state_11652[(2)]);
var inst_11645 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11646 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11644);
var inst_11647 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11644);
var inst_11648 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11647);
var inst_11649 = [inst_11646,inst_11648];
var inst_11650 = cljs.core.PersistentHashMap.fromArrays(inst_11645,inst_11649);
var state_11652__$1 = state_11652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11652__$1,inst_11650);
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
var statearr_11654 = [null,null,null,null,null,null,null];
(statearr_11654[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__);

(statearr_11654[(1)] = (1));

return statearr_11654;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1 = (function (state_11652){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11652);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11655){if((e11655 instanceof Object)){
var ex__9324__auto__ = e11655;
var statearr_11656_11658 = state_11652;
(statearr_11656_11658[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11652);

return cljs.core.cst$kw$recur;
} else {
throw e11655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11659 = state_11652;
state_11652 = G__11659;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__ = function(state_11652){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1.call(this,state_11652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11657 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11657[(6)] = c__9423__auto__);

return statearr_11657;
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
return (function (state_11673){
var state_val_11674 = (state_11673[(1)]);
if((state_val_11674 === (1))){
var inst_11660 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$limit,cljs.core.cst$kw$offset];
var inst_11661 = [cljs.core.cst$kw$idb_SLASH_value,cljs.core.cst$kw$components,limit,offset];
var inst_11662 = cljs.core.PersistentHashMap.fromArrays(inst_11660,inst_11661);
var inst_11663 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11662);
var state_11673__$1 = state_11673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11673__$1,(2),inst_11663);
} else {
if((state_val_11674 === (2))){
var inst_11665 = (state_11673[(2)]);
var inst_11666 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11667 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11665);
var inst_11668 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11665);
var inst_11669 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11668);
var inst_11670 = [inst_11667,inst_11669];
var inst_11671 = cljs.core.PersistentHashMap.fromArrays(inst_11666,inst_11670);
var state_11673__$1 = state_11673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11673__$1,inst_11671);
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
var statearr_11675 = [null,null,null,null,null,null,null];
(statearr_11675[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__);

(statearr_11675[(1)] = (1));

return statearr_11675;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1 = (function (state_11673){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11673);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11676){if((e11676 instanceof Object)){
var ex__9324__auto__ = e11676;
var statearr_11677_11679 = state_11673;
(statearr_11677_11679[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11673);

return cljs.core.cst$kw$recur;
} else {
throw e11676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11680 = state_11673;
state_11673 = G__11680;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__ = function(state_11673){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1.call(this,state_11673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11678 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11678[(6)] = c__9423__auto__);

return statearr_11678;
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
return (function (state_11700){
var state_val_11701 = (state_11700[(1)]);
if((state_val_11701 === (1))){
var inst_11682 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$where];
var inst_11683 = cljs.core.cst$sym$in;
var inst_11684 = (new cljs.core.List(null,inst_11683,null,(1),null));
var inst_11685 = (new cljs.core.List(null,cljs.core.cst$kw$idb_SLASH_key,null,(1),null));
var inst_11686 = (new cljs.core.List(null,ids,null,(1),null));
var inst_11687 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_11684,inst_11685,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_11686], 0));
var inst_11688 = cljs.core.seq(inst_11687);
var inst_11689 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_11688);
var inst_11690 = [cljs.core.cst$kw$idb_SLASH_value,cljs.core.cst$kw$components,inst_11689];
var inst_11691 = cljs.core.PersistentHashMap.fromArrays(inst_11682,inst_11690);
var inst_11692 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11691);
var state_11700__$1 = state_11700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11700__$1,(2),inst_11692);
} else {
if((state_val_11701 === (2))){
var inst_11694 = (state_11700[(2)]);
var inst_11695 = (function (){var res = inst_11694;
return ((function (res,inst_11694,state_val_11701,c__9423__auto__){
return (function (p1__11681_SHARP_){
return p1__11681_SHARP_.id;
});
;})(res,inst_11694,state_val_11701,c__9423__auto__))
})();
var inst_11696 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11694);
var inst_11697 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_11695,inst_11696);
var inst_11698 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11697);
var state_11700__$1 = state_11700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11700__$1,inst_11698);
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
var statearr_11702 = [null,null,null,null,null,null,null];
(statearr_11702[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__);

(statearr_11702[(1)] = (1));

return statearr_11702;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1 = (function (state_11700){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11700);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11703){if((e11703 instanceof Object)){
var ex__9324__auto__ = e11703;
var statearr_11704_11706 = state_11700;
(statearr_11704_11706[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11700);

return cljs.core.cst$kw$recur;
} else {
throw e11703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11707 = state_11700;
state_11700 = G__11707;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__ = function(state_11700){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1.call(this,state_11700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11705 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11705[(6)] = c__9423__auto__);

return statearr_11705;
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
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_11724){
var state_val_11725 = (state_11724[(1)]);
if((state_val_11725 === (1))){
var inst_11708 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$where];
var inst_11709 = cljs.core.cst$sym$starts_DASH_with;
var inst_11710 = (new cljs.core.List(null,inst_11709,null,(1),null));
var inst_11711 = (new cljs.core.List(null,cljs.core.cst$kw$by_keyword,null,(1),null));
var inst_11712 = warehouse.storage.indexeddb.normalize_keyword(keyword);
var inst_11713 = (new cljs.core.List(null,inst_11712,null,(1),null));
var inst_11714 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_11710,inst_11711,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_11713], 0));
var inst_11715 = cljs.core.seq(inst_11714);
var inst_11716 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_11715);
var inst_11717 = [cljs.core.cst$kw$idb_SLASH_key,cljs.core.cst$kw$components,inst_11716];
var inst_11718 = cljs.core.PersistentHashMap.fromArrays(inst_11708,inst_11717);
var inst_11719 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11718);
var state_11724__$1 = state_11724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11724__$1,(2),inst_11719);
} else {
if((state_val_11725 === (2))){
var inst_11721 = (state_11724[(2)]);
var inst_11722 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11721);
var state_11724__$1 = state_11724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11724__$1,inst_11722);
} else {
return null;
}
}
});})(c__9423__auto__))
;
return ((function (switch__9320__auto__,c__9423__auto__){
return (function() {
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____0 = (function (){
var statearr_11726 = [null,null,null,null,null,null,null];
(statearr_11726[(0)] = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__);

(statearr_11726[(1)] = (1));

return statearr_11726;
});
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____1 = (function (state_11724){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11724);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11727){if((e11727 instanceof Object)){
var ex__9324__auto__ = e11727;
var statearr_11728_11730 = state_11724;
(statearr_11728_11730[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11724);

return cljs.core.cst$kw$recur;
} else {
throw e11727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11731 = state_11724;
state_11724 = G__11731;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__ = function(state_11724){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____1.call(this,state_11724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11729 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11729[(6)] = c__9423__auto__);

return statearr_11729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
});
/**
 * Takes query `q` and returns channel receiving ids of components
 *   matching the `q`
 */
warehouse.storage.indexeddb.filter_ids = (function warehouse$storage$indexeddb$filter_ids(q){
var col = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.empty_QMARK_),clojure.string.split.cljs$core$IFn$_invoke$arity$2(q," "));
var conds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (col){
return (function (kw){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$starts_DASH_with,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$by_keyword,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,warehouse.storage.indexeddb.normalize_keyword(kw),null,(1),null))], 0))));
});})(col))
,col);
if(cljs.core.seq(conds)){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,col,conds){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,col,conds){
return (function (state_11745){
var state_val_11746 = (state_11745[(1)]);
if((state_val_11746 === (1))){
var inst_11732 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$where];
var inst_11733 = cljs.core.cst$sym$and;
var inst_11734 = (new cljs.core.List(null,inst_11733,null,(1),null));
var inst_11735 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_11734,conds);
var inst_11736 = cljs.core.seq(inst_11735);
var inst_11737 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_11736);
var inst_11738 = [cljs.core.cst$kw$idb_SLASH_key,cljs.core.cst$kw$components,inst_11737];
var inst_11739 = cljs.core.PersistentHashMap.fromArrays(inst_11732,inst_11738);
var inst_11740 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11739);
var state_11745__$1 = state_11745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11745__$1,(2),inst_11740);
} else {
if((state_val_11746 === (2))){
var inst_11742 = (state_11745[(2)]);
var inst_11743 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11742);
var state_11745__$1 = state_11745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11745__$1,inst_11743);
} else {
return null;
}
}
});})(c__9423__auto__,col,conds))
;
return ((function (switch__9320__auto__,c__9423__auto__,col,conds){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11747 = [null,null,null,null,null,null,null];
(statearr_11747[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__);

(statearr_11747[(1)] = (1));

return statearr_11747;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1 = (function (state_11745){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11745);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11748){if((e11748 instanceof Object)){
var ex__9324__auto__ = e11748;
var statearr_11749_11759 = state_11745;
(statearr_11749_11759[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11745);

return cljs.core.cst$kw$recur;
} else {
throw e11748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11760 = state_11745;
state_11745 = G__11760;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = function(state_11745){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1.call(this,state_11745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,col,conds))
})();
var state__9425__auto__ = (function (){var statearr_11750 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11750[(6)] = c__9423__auto__);

return statearr_11750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,col,conds))
);

return c__9423__auto__;
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,col,conds){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,col,conds){
return (function (state_11753){
var state_val_11754 = (state_11753[(1)]);
if((state_val_11754 === (1))){
var inst_11751 = cljs.core.PersistentVector.EMPTY;
var state_11753__$1 = state_11753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11753__$1,inst_11751);
} else {
return null;
}
});})(c__9423__auto__,col,conds))
;
return ((function (switch__9320__auto__,c__9423__auto__,col,conds){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11755 = [null,null,null,null,null,null,null];
(statearr_11755[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__);

(statearr_11755[(1)] = (1));

return statearr_11755;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1 = (function (state_11753){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11753);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11756){if((e11756 instanceof Object)){
var ex__9324__auto__ = e11756;
var statearr_11757_11761 = state_11753;
(statearr_11757_11761[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11753);

return cljs.core.cst$kw$recur;
} else {
throw e11756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11762 = state_11753;
state_11753 = G__11762;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = function(state_11753){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1.call(this,state_11753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,col,conds))
})();
var state__9425__auto__ = (function (){var statearr_11758 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11758[(6)] = c__9423__auto__);

return statearr_11758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,col,conds))
);

return c__9423__auto__;
}
});
/**
 * Returns channel receiving `true` once update completed.
 */
warehouse.storage.indexeddb.store_components = (function warehouse$storage$indexeddb$store_components(components){
return warehouse.indexeddb.store(warehouse.storage.indexeddb.db,cljs.core.cst$kw$components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.component__GT_obj,components));
});
/**
 * Returns channel receiving `true` once update completed.
 */
warehouse.storage.indexeddb.store_component = (function warehouse$storage$indexeddb$store_component(component){
return warehouse.indexeddb.store(warehouse.storage.indexeddb.db,cljs.core.cst$kw$components,warehouse.storage.indexeddb.component__GT_obj(component));
});
