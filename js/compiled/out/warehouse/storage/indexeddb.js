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
var seq__11605_11609 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(warehouse.storage.local.app_state)));
var chunk__11606_11610 = null;
var count__11607_11611 = (0);
var i__11608_11612 = (0);
while(true){
if((i__11608_11612 < count__11607_11611)){
var component_11613 = chunk__11606_11610.cljs$core$IIndexed$_nth$arity$2(null,i__11608_11612);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11613));


var G__11614 = seq__11605_11609;
var G__11615 = chunk__11606_11610;
var G__11616 = count__11607_11611;
var G__11617 = (i__11608_11612 + (1));
seq__11605_11609 = G__11614;
chunk__11606_11610 = G__11615;
count__11607_11611 = G__11616;
i__11608_11612 = G__11617;
continue;
} else {
var temp__5457__auto___11618 = cljs.core.seq(seq__11605_11609);
if(temp__5457__auto___11618){
var seq__11605_11619__$1 = temp__5457__auto___11618;
if(cljs.core.chunked_seq_QMARK_(seq__11605_11619__$1)){
var c__4351__auto___11620 = cljs.core.chunk_first(seq__11605_11619__$1);
var G__11621 = cljs.core.chunk_rest(seq__11605_11619__$1);
var G__11622 = c__4351__auto___11620;
var G__11623 = cljs.core.count(c__4351__auto___11620);
var G__11624 = (0);
seq__11605_11609 = G__11621;
chunk__11606_11610 = G__11622;
count__11607_11611 = G__11623;
i__11608_11612 = G__11624;
continue;
} else {
var component_11625 = cljs.core.first(seq__11605_11619__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11625));


var G__11626 = cljs.core.next(seq__11605_11619__$1);
var G__11627 = null;
var G__11628 = (0);
var G__11629 = (0);
seq__11605_11609 = G__11626;
chunk__11606_11610 = G__11627;
count__11607_11611 = G__11628;
i__11608_11612 = G__11629;
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
return (function (state_11643){
var state_val_11644 = (state_11643[(1)]);
if((state_val_11644 === (1))){
var inst_11630 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$limit,cljs.core.cst$kw$offset];
var inst_11631 = [cljs.core.cst$kw$idb_SLASH_value,cljs.core.cst$kw$components,n,(0)];
var inst_11632 = cljs.core.PersistentHashMap.fromArrays(inst_11630,inst_11631);
var inst_11633 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11632);
var state_11643__$1 = state_11643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11643__$1,(2),inst_11633);
} else {
if((state_val_11644 === (2))){
var inst_11635 = (state_11643[(2)]);
var inst_11636 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11637 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11635);
var inst_11638 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11635);
var inst_11639 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11638);
var inst_11640 = [inst_11637,inst_11639];
var inst_11641 = cljs.core.PersistentHashMap.fromArrays(inst_11636,inst_11640);
var state_11643__$1 = state_11643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11643__$1,inst_11641);
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
var statearr_11645 = [null,null,null,null,null,null,null];
(statearr_11645[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__);

(statearr_11645[(1)] = (1));

return statearr_11645;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1 = (function (state_11643){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11643);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11646){if((e11646 instanceof Object)){
var ex__9324__auto__ = e11646;
var statearr_11647_11649 = state_11643;
(statearr_11647_11649[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11643);

return cljs.core.cst$kw$recur;
} else {
throw e11646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11650 = state_11643;
state_11643 = G__11650;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__ = function(state_11643){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1.call(this,state_11643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11648 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11648[(6)] = c__9423__auto__);

return statearr_11648;
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
return (function (state_11664){
var state_val_11665 = (state_11664[(1)]);
if((state_val_11665 === (1))){
var inst_11651 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$limit,cljs.core.cst$kw$offset];
var inst_11652 = [cljs.core.cst$kw$idb_SLASH_value,cljs.core.cst$kw$components,limit,offset];
var inst_11653 = cljs.core.PersistentHashMap.fromArrays(inst_11651,inst_11652);
var inst_11654 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11653);
var state_11664__$1 = state_11664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11664__$1,(2),inst_11654);
} else {
if((state_val_11665 === (2))){
var inst_11656 = (state_11664[(2)]);
var inst_11657 = [cljs.core.cst$kw$count,cljs.core.cst$kw$components];
var inst_11658 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(inst_11656);
var inst_11659 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11656);
var inst_11660 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11659);
var inst_11661 = [inst_11658,inst_11660];
var inst_11662 = cljs.core.PersistentHashMap.fromArrays(inst_11657,inst_11661);
var state_11664__$1 = state_11664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11664__$1,inst_11662);
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
var statearr_11666 = [null,null,null,null,null,null,null];
(statearr_11666[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__);

(statearr_11666[(1)] = (1));

return statearr_11666;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1 = (function (state_11664){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11664);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11667){if((e11667 instanceof Object)){
var ex__9324__auto__ = e11667;
var statearr_11668_11670 = state_11664;
(statearr_11668_11670[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11664);

return cljs.core.cst$kw$recur;
} else {
throw e11667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11671 = state_11664;
state_11664 = G__11671;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__ = function(state_11664){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1.call(this,state_11664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11669 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11669[(6)] = c__9423__auto__);

return statearr_11669;
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
return (function (state_11690){
var state_val_11691 = (state_11690[(1)]);
if((state_val_11691 === (1))){
var inst_11673 = [cljs.core.cst$kw$select,cljs.core.cst$kw$from,cljs.core.cst$kw$where];
var inst_11674 = cljs.core.cst$sym$in;
var inst_11675 = (new cljs.core.List(null,inst_11674,null,(1),null));
var inst_11676 = (new cljs.core.List(null,cljs.core.cst$kw$idb_SLASH_key,null,(1),null));
var inst_11677 = (new cljs.core.List(null,ids,null,(1),null));
var inst_11678 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_11675,inst_11676,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_11677], 0));
var inst_11679 = cljs.core.seq(inst_11678);
var inst_11680 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_11679);
var inst_11681 = [cljs.core.cst$kw$idb_SLASH_value,cljs.core.cst$kw$components,inst_11680];
var inst_11682 = cljs.core.PersistentHashMap.fromArrays(inst_11673,inst_11681);
var inst_11683 = warehouse.indexeddb.query(warehouse.storage.indexeddb.db,inst_11682);
var state_11690__$1 = state_11690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11690__$1,(2),inst_11683);
} else {
if((state_val_11691 === (2))){
var inst_11685 = (state_11690[(2)]);
var inst_11686 = (function (){var res = inst_11685;
return ((function (res,inst_11685,state_val_11691,c__9423__auto__){
return (function (p1__11672_SHARP_){
return p1__11672_SHARP_.id;
});
;})(res,inst_11685,state_val_11691,c__9423__auto__))
})();
var inst_11687 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_11686,inst_11685);
var inst_11688 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.obj__GT_component,inst_11687);
var state_11690__$1 = state_11690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11690__$1,inst_11688);
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
var statearr_11692 = [null,null,null,null,null,null,null];
(statearr_11692[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__);

(statearr_11692[(1)] = (1));

return statearr_11692;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1 = (function (state_11690){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11690);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11693){if((e11693 instanceof Object)){
var ex__9324__auto__ = e11693;
var statearr_11694_11696 = state_11690;
(statearr_11694_11696[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11690);

return cljs.core.cst$kw$recur;
} else {
throw e11693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11697 = state_11690;
state_11690 = G__11697;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__ = function(state_11690){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1.call(this,state_11690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11695 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11695[(6)] = c__9423__auto__);

return statearr_11695;
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
return warehouse.indexeddb.query(warehouse.storage.indexeddb.db,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$select,cljs.core.cst$kw$idb_SLASH_key,cljs.core.cst$kw$from,cljs.core.cst$kw$components,cljs.core.cst$kw$where,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$_EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$by_keyword,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,warehouse.storage.indexeddb.normalize_keyword(keyword),null,(1),null))], 0))))], null));
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
return warehouse.indexeddb.query(warehouse.storage.indexeddb.db,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$select,cljs.core.cst$kw$idb_SLASH_key,cljs.core.cst$kw$from,cljs.core.cst$kw$components,cljs.core.cst$kw$where,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$and,null,(1),null)),conds)))], null));
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,col,conds){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,col,conds){
return (function (state_11700){
var state_val_11701 = (state_11700[(1)]);
if((state_val_11701 === (1))){
var inst_11698 = cljs.core.PersistentVector.EMPTY;
var state_11700__$1 = state_11700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11700__$1,inst_11698);
} else {
return null;
}
});})(c__9423__auto__,col,conds))
;
return ((function (switch__9320__auto__,c__9423__auto__,col,conds){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11702 = [null,null,null,null,null,null,null];
(statearr_11702[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__);

(statearr_11702[(1)] = (1));

return statearr_11702;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1 = (function (state_11700){
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
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = function(state_11700){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1.call(this,state_11700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,col,conds))
})();
var state__9425__auto__ = (function (){var statearr_11705 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11705[(6)] = c__9423__auto__);

return statearr_11705;
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
