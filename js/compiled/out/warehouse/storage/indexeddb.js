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
var seq__11630_11634 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(warehouse.storage.local.app_state)));
var chunk__11631_11635 = null;
var count__11632_11636 = (0);
var i__11633_11637 = (0);
while(true){
if((i__11633_11637 < count__11632_11636)){
var component_11638 = chunk__11631_11635.cljs$core$IIndexed$_nth$arity$2(null,i__11633_11637);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11638));


var G__11639 = seq__11630_11634;
var G__11640 = chunk__11631_11635;
var G__11641 = count__11632_11636;
var G__11642 = (i__11633_11637 + (1));
seq__11630_11634 = G__11639;
chunk__11631_11635 = G__11640;
count__11632_11636 = G__11641;
i__11633_11637 = G__11642;
continue;
} else {
var temp__5457__auto___11643 = cljs.core.seq(seq__11630_11634);
if(temp__5457__auto___11643){
var seq__11630_11644__$1 = temp__5457__auto___11643;
if(cljs.core.chunked_seq_QMARK_(seq__11630_11644__$1)){
var c__4351__auto___11645 = cljs.core.chunk_first(seq__11630_11644__$1);
var G__11646 = cljs.core.chunk_rest(seq__11630_11644__$1);
var G__11647 = c__4351__auto___11645;
var G__11648 = cljs.core.count(c__4351__auto___11645);
var G__11649 = (0);
seq__11630_11634 = G__11646;
chunk__11631_11635 = G__11647;
count__11632_11636 = G__11648;
i__11633_11637 = G__11649;
continue;
} else {
var component_11650 = cljs.core.first(seq__11630_11644__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11650));


var G__11651 = cljs.core.next(seq__11630_11644__$1);
var G__11652 = null;
var G__11653 = (0);
var G__11654 = (0);
seq__11630_11634 = G__11651;
chunk__11631_11635 = G__11652;
count__11632_11636 = G__11653;
i__11633_11637 = G__11654;
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
return (function (state_11668){
var state_val_11669 = (state_11668[(1)]);
if((state_val_11669 === (1))){
var inst_11655 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$limit,cljs.core.cst$kw$offset];
var inst_11656 = [cljs.core.cst$kw$idb_SLASH_value,cljs.core.cst$kw$components,n,(0)];
var inst_11657 = cljs.core.PersistentHashMap.fromArrays(inst_11655,inst_11656);
var inst_11658 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11657);
var state_11668__$1 = state_11668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11668__$1,(2),inst_11658);
} else {
if((state_val_11669 === (2))){
var inst_11660 = (state_11668[(2)]);
var inst_11661 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11662 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11660);
var inst_11663 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11660);
var inst_11664 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11663);
var inst_11665 = [inst_11662,inst_11664];
var inst_11666 = cljs.core.PersistentHashMap.fromArrays(inst_11661,inst_11665);
var state_11668__$1 = state_11668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11668__$1,inst_11666);
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
var statearr_11670 = [null,null,null,null,null,null,null];
(statearr_11670[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__);

(statearr_11670[(1)] = (1));

return statearr_11670;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1 = (function (state_11668){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11668);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11671){if((e11671 instanceof Object)){
var ex__9324__auto__ = e11671;
var statearr_11672_11674 = state_11668;
(statearr_11672_11674[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11668);

return cljs.core.cst$kw$recur;
} else {
throw e11671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11675 = state_11668;
state_11668 = G__11675;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__ = function(state_11668){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1.call(this,state_11668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11673 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11673[(6)] = c__9423__auto__);

return statearr_11673;
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
return (function (state_11689){
var state_val_11690 = (state_11689[(1)]);
if((state_val_11690 === (1))){
var inst_11676 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$limit,cljs.core.cst$kw$offset];
var inst_11677 = [cljs.core.cst$kw$idb_SLASH_value,cljs.core.cst$kw$components,limit,offset];
var inst_11678 = cljs.core.PersistentHashMap.fromArrays(inst_11676,inst_11677);
var inst_11679 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11678);
var state_11689__$1 = state_11689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11689__$1,(2),inst_11679);
} else {
if((state_val_11690 === (2))){
var inst_11681 = (state_11689[(2)]);
var inst_11682 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11683 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11681);
var inst_11684 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11681);
var inst_11685 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11684);
var inst_11686 = [inst_11683,inst_11685];
var inst_11687 = cljs.core.PersistentHashMap.fromArrays(inst_11682,inst_11686);
var state_11689__$1 = state_11689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11689__$1,inst_11687);
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
var statearr_11691 = [null,null,null,null,null,null,null];
(statearr_11691[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__);

(statearr_11691[(1)] = (1));

return statearr_11691;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1 = (function (state_11689){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11689);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11692){if((e11692 instanceof Object)){
var ex__9324__auto__ = e11692;
var statearr_11693_11695 = state_11689;
(statearr_11693_11695[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11689);

return cljs.core.cst$kw$recur;
} else {
throw e11692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11696 = state_11689;
state_11689 = G__11696;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__ = function(state_11689){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1.call(this,state_11689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11694 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11694[(6)] = c__9423__auto__);

return statearr_11694;
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
return (function (state_11716){
var state_val_11717 = (state_11716[(1)]);
if((state_val_11717 === (1))){
var inst_11698 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$where];
var inst_11699 = cljs.core.cst$sym$in;
var inst_11700 = (new cljs.core.List(null,inst_11699,null,(1),null));
var inst_11701 = (new cljs.core.List(null,cljs.core.cst$kw$idb_SLASH_key,null,(1),null));
var inst_11702 = (new cljs.core.List(null,ids,null,(1),null));
var inst_11703 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_11700,inst_11701,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_11702], 0));
var inst_11704 = cljs.core.seq(inst_11703);
var inst_11705 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_11704);
var inst_11706 = [cljs.core.cst$kw$idb_SLASH_value,cljs.core.cst$kw$components,inst_11705];
var inst_11707 = cljs.core.PersistentHashMap.fromArrays(inst_11698,inst_11706);
var inst_11708 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11707);
var state_11716__$1 = state_11716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11716__$1,(2),inst_11708);
} else {
if((state_val_11717 === (2))){
var inst_11710 = (state_11716[(2)]);
var inst_11711 = (function (){var res = inst_11710;
return ((function (res,inst_11710,state_val_11717,c__9423__auto__){
return (function (p1__11697_SHARP_){
return p1__11697_SHARP_.id;
});
;})(res,inst_11710,state_val_11717,c__9423__auto__))
})();
var inst_11712 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11710);
var inst_11713 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_11711,inst_11712);
var inst_11714 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11713);
var state_11716__$1 = state_11716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11716__$1,inst_11714);
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
var statearr_11718 = [null,null,null,null,null,null,null];
(statearr_11718[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__);

(statearr_11718[(1)] = (1));

return statearr_11718;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1 = (function (state_11716){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11716);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11719){if((e11719 instanceof Object)){
var ex__9324__auto__ = e11719;
var statearr_11720_11722 = state_11716;
(statearr_11720_11722[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11716);

return cljs.core.cst$kw$recur;
} else {
throw e11719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11723 = state_11716;
state_11716 = G__11723;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__ = function(state_11716){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1.call(this,state_11716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11721 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11721[(6)] = c__9423__auto__);

return statearr_11721;
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
return (function (state_11740){
var state_val_11741 = (state_11740[(1)]);
if((state_val_11741 === (1))){
var inst_11724 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$where];
var inst_11725 = cljs.core.cst$sym$_EQ_;
var inst_11726 = (new cljs.core.List(null,inst_11725,null,(1),null));
var inst_11727 = (new cljs.core.List(null,cljs.core.cst$kw$by_keyword,null,(1),null));
var inst_11728 = warehouse.storage.indexeddb.normalize_keyword(keyword);
var inst_11729 = (new cljs.core.List(null,inst_11728,null,(1),null));
var inst_11730 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_11726,inst_11727,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_11729], 0));
var inst_11731 = cljs.core.seq(inst_11730);
var inst_11732 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_11731);
var inst_11733 = [cljs.core.cst$kw$idb_SLASH_key,cljs.core.cst$kw$components,inst_11732];
var inst_11734 = cljs.core.PersistentHashMap.fromArrays(inst_11724,inst_11733);
var inst_11735 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11734);
var state_11740__$1 = state_11740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11740__$1,(2),inst_11735);
} else {
if((state_val_11741 === (2))){
var inst_11737 = (state_11740[(2)]);
var inst_11738 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11737);
var state_11740__$1 = state_11740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11740__$1,inst_11738);
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
var statearr_11742 = [null,null,null,null,null,null,null];
(statearr_11742[(0)] = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__);

(statearr_11742[(1)] = (1));

return statearr_11742;
});
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____1 = (function (state_11740){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11740);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11743){if((e11743 instanceof Object)){
var ex__9324__auto__ = e11743;
var statearr_11744_11746 = state_11740;
(statearr_11744_11746[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11740);

return cljs.core.cst$kw$recur;
} else {
throw e11743;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11747 = state_11740;
state_11740 = G__11747;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__ = function(state_11740){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____1.call(this,state_11740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11745 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11745[(6)] = c__9423__auto__);

return statearr_11745;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$_EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$by_keyword,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,warehouse.storage.indexeddb.normalize_keyword(kw),null,(1),null))], 0))));
});})(col))
,col);
if(cljs.core.seq(conds)){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,col,conds){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,col,conds){
return (function (state_11761){
var state_val_11762 = (state_11761[(1)]);
if((state_val_11762 === (1))){
var inst_11748 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$where];
var inst_11749 = cljs.core.cst$sym$and;
var inst_11750 = (new cljs.core.List(null,inst_11749,null,(1),null));
var inst_11751 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_11750,conds);
var inst_11752 = cljs.core.seq(inst_11751);
var inst_11753 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_11752);
var inst_11754 = [cljs.core.cst$kw$idb_SLASH_key,cljs.core.cst$kw$components,inst_11753];
var inst_11755 = cljs.core.PersistentHashMap.fromArrays(inst_11748,inst_11754);
var inst_11756 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11755);
var state_11761__$1 = state_11761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11761__$1,(2),inst_11756);
} else {
if((state_val_11762 === (2))){
var inst_11758 = (state_11761[(2)]);
var inst_11759 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11758);
var state_11761__$1 = state_11761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11761__$1,inst_11759);
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
var statearr_11763 = [null,null,null,null,null,null,null];
(statearr_11763[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__);

(statearr_11763[(1)] = (1));

return statearr_11763;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1 = (function (state_11761){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11761);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11764){if((e11764 instanceof Object)){
var ex__9324__auto__ = e11764;
var statearr_11765_11775 = state_11761;
(statearr_11765_11775[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11761);

return cljs.core.cst$kw$recur;
} else {
throw e11764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11776 = state_11761;
state_11761 = G__11776;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = function(state_11761){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1.call(this,state_11761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,col,conds))
})();
var state__9425__auto__ = (function (){var statearr_11766 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11766[(6)] = c__9423__auto__);

return statearr_11766;
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
return (function (state_11769){
var state_val_11770 = (state_11769[(1)]);
if((state_val_11770 === (1))){
var inst_11767 = cljs.core.PersistentVector.EMPTY;
var state_11769__$1 = state_11769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11769__$1,inst_11767);
} else {
return null;
}
});})(c__9423__auto__,col,conds))
;
return ((function (switch__9320__auto__,c__9423__auto__,col,conds){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11771 = [null,null,null,null,null,null,null];
(statearr_11771[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__);

(statearr_11771[(1)] = (1));

return statearr_11771;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1 = (function (state_11769){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11769);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11772){if((e11772 instanceof Object)){
var ex__9324__auto__ = e11772;
var statearr_11773_11777 = state_11769;
(statearr_11773_11777[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11769);

return cljs.core.cst$kw$recur;
} else {
throw e11772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11778 = state_11769;
state_11769 = G__11778;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = function(state_11769){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1.call(this,state_11769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,col,conds))
})();
var state__9425__auto__ = (function (){var statearr_11774 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11774[(6)] = c__9423__auto__);

return statearr_11774;
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
