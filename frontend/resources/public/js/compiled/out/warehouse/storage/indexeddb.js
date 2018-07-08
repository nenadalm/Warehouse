// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.storage.indexeddb');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.storage.local');
goog.require('cljs.core.async');
goog.require('clojure.set');
warehouse.storage.indexeddb.db_name = "app-state";
warehouse.storage.indexeddb.db_version = (1);
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
var seq__18521_18525 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(warehouse.storage.local.app_state)));
var chunk__18522_18526 = null;
var count__18523_18527 = (0);
var i__18524_18528 = (0);
while(true){
if((i__18524_18528 < count__18523_18527)){
var component_18529 = chunk__18522_18526.cljs$core$IIndexed$_nth$arity$2(null,i__18524_18528);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18529));


var G__18530 = seq__18521_18525;
var G__18531 = chunk__18522_18526;
var G__18532 = count__18523_18527;
var G__18533 = (i__18524_18528 + (1));
seq__18521_18525 = G__18530;
chunk__18522_18526 = G__18531;
count__18523_18527 = G__18532;
i__18524_18528 = G__18533;
continue;
} else {
var temp__5457__auto___18534 = cljs.core.seq(seq__18521_18525);
if(temp__5457__auto___18534){
var seq__18521_18535__$1 = temp__5457__auto___18534;
if(cljs.core.chunked_seq_QMARK_(seq__18521_18535__$1)){
var c__4319__auto___18536 = cljs.core.chunk_first(seq__18521_18535__$1);
var G__18537 = cljs.core.chunk_rest(seq__18521_18535__$1);
var G__18538 = c__4319__auto___18536;
var G__18539 = cljs.core.count(c__4319__auto___18536);
var G__18540 = (0);
seq__18521_18525 = G__18537;
chunk__18522_18526 = G__18538;
count__18523_18527 = G__18539;
i__18524_18528 = G__18540;
continue;
} else {
var component_18541 = cljs.core.first(seq__18521_18535__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18541));


var G__18542 = cljs.core.next(seq__18521_18535__$1);
var G__18543 = null;
var G__18544 = (0);
var G__18545 = (0);
seq__18521_18525 = G__18542;
chunk__18522_18526 = G__18543;
count__18523_18527 = G__18544;
i__18524_18528 = G__18545;
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
warehouse.storage.indexeddb.on_success = (function warehouse$storage$indexeddb$on_success(var_args){
var G__18547 = arguments.length;
switch (G__18547) {
case 3:
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$3 = (function (f,n,request){
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$4(f,n,request,(0));
});

warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$4 = (function (f,n,request,offset){
var db = request.result;
var tx = db.transaction("components","readonly");
var store = tx.objectStore("components");
var request__$1 = store.count();
return request__$1.onsuccess = ((function (db,tx,store,request__$1){
return (function (e){
var cnt = e.target.result;
var request__$2 = store.openCursor();
var components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var advanced = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset));
return request__$2.onsuccess = ((function (cnt,request__$2,components,advanced,db,tx,store,request__$1){
return (function (e__$1){
var temp__5455__auto__ = e__$1.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
var component = cursor.value;
if(cljs.core.truth_(cursor)){
if(cljs.core.deref(advanced) === true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,warehouse.storage.indexeddb.obj__GT_component(cursor.value));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(components)),n)){
var G__18548 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18548) : f.call(null,G__18548));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return cljs.core.reset_BANG_(advanced,true);
}
} else {
var G__18549 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18549) : f.call(null,G__18549));
}
} else {
var G__18550 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18550) : f.call(null,G__18550));
}
});})(cnt,request__$2,components,advanced,db,tx,store,request__$1))
;
});})(db,tx,store,request__$1))
;
});

warehouse.storage.indexeddb.on_success.cljs$lang$maxFixedArity = 4;

warehouse.storage.indexeddb.on_success_filter = (function warehouse$storage$indexeddb$on_success_filter(var_args){
var G__18553 = arguments.length;
switch (G__18553) {
case 4:
return warehouse.storage.indexeddb.on_success_filter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return warehouse.storage.indexeddb.on_success_filter.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

warehouse.storage.indexeddb.on_success_filter.cljs$core$IFn$_invoke$arity$4 = (function (f,n,q,e){
return warehouse.storage.indexeddb.on_success_filter.cljs$core$IFn$_invoke$arity$5(f,n,e,(0),q);
});

warehouse.storage.indexeddb.on_success_filter.cljs$core$IFn$_invoke$arity$5 = (function (f,n,e,offset,q){
var db = e.target.result;
var tx = db.transaction("components","readonly");
var store = tx.objectStore("components");
var index = store.index("by_keyword");
var keyRange = IDBKeyRange.bound(cljs.core.clj__GT_js("component1"),cljs.core.clj__GT_js("component1"));
var request = index.count(keyRange);
return request.onsuccess = ((function (db,tx,store,index,keyRange,request){
return (function (e__$1){
var cnt = e__$1.target.result;
var components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var advanced = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset));
var request__$1 = index.openCursor(keyRange);
return request__$1.onsuccess = ((function (cnt,components,advanced,request__$1,db,tx,store,index,keyRange,request){
return (function (e__$2){
var temp__5455__auto__ = e__$2.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
var component = cursor.value;
if(cljs.core.truth_(cursor)){
if(cljs.core.deref(advanced) === true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cursor.value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(components)),n)){
var G__18554 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18554) : f.call(null,G__18554));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return cljs.core.reset_BANG_(advanced,true);
}
} else {
var G__18555 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18555) : f.call(null,G__18555));
}
} else {
var G__18556 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18556) : f.call(null,G__18556));
}
});})(cnt,components,advanced,request__$1,db,tx,store,index,keyRange,request))
;
});})(db,tx,store,index,keyRange,request))
;
});

warehouse.storage.indexeddb.on_success_filter.cljs$lang$maxFixedArity = 5;

warehouse.storage.indexeddb.filter_keys = (function warehouse$storage$indexeddb$filter_keys(f,q,request){
var db = request.result;
var tx = db.transaction("components","readonly");
var store = tx.objectStore("components");
var index = store.index("by_keyword");
var keyRange = IDBKeyRange.bound(q,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),"z"].join(''));
var keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var request__$1 = index.openCursor(keyRange);
return request__$1.onsuccess = ((function (db,tx,store,index,keyRange,keys,request__$1){
return (function (e){
var temp__5455__auto__ = e.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
var component = cursor.value;
if(cljs.core.truth_(cursor)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(keys,cljs.core.conj,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cursor.value.id));

return cursor.continue();
} else {
var G__18558 = cljs.core.deref(keys);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18558) : f.call(null,G__18558));
}
} else {
var G__18559 = cljs.core.deref(keys);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18559) : f.call(null,G__18559));
}
});})(db,tx,store,index,keyRange,keys,request__$1))
;
});
warehouse.storage.indexeddb.filter_components = (function warehouse$storage$indexeddb$filter_components(ids,f,request){
var db = request.result;
var tx = db.transaction("components","readonly");
var store = tx.objectStore("components");
var components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var prev_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sorted_ids = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(ids);
var keyRange = IDBKeyRange.bound(cljs.core.first(sorted_ids),cljs.core.last(sorted_ids));
var request__$1 = store.openCursor(keyRange);
return request__$1.onsuccess = ((function (db,tx,store,components,prev_idx,sorted_ids,keyRange,request__$1){
return (function (e){
var temp__5455__auto__ = e.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
var component = cursor.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,warehouse.storage.indexeddb.obj__GT_component(cursor.value));

var current_idx = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prev_idx,cljs.core.inc);
var temp__5455__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(sorted_ids,current_idx,null);
if(cljs.core.truth_(temp__5455__auto____$1)){
var next_id = temp__5455__auto____$1;
return cursor.continue(next_id);
} else {
var G__18560 = cljs.core.deref(components);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18560) : f.call(null,G__18560));
}
} else {
var G__18561 = cljs.core.deref(components);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18561) : f.call(null,G__18561));
}
});})(db,tx,store,components,prev_idx,sorted_ids,keyRange,request__$1))
;
});
warehouse.storage.indexeddb.open_request = (function warehouse$storage$indexeddb$open_request(f){

var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var request = window.indexedDB.open(warehouse.storage.indexeddb.db_name,warehouse.storage.indexeddb.db_version);
request.onupgradeneeded = warehouse.storage.indexeddb.on_upgrade;

request.onsuccess = ((function (ch,request){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(request,ch) : f.call(null,request,ch));
});})(ch,request))
;

return ch;
});
/**
 * Returns channel receiving first `n` components
 */
warehouse.storage.indexeddb.load_initial_data = (function warehouse$storage$indexeddb$load_initial_data(n){
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$3((function (res){
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__){
return (function (state_18566){
var state_val_18567 = (state_18566[(1)]);
if((state_val_18567 === (1))){
var state_18566__$1 = state_18566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18566__$1,(2),ch,res);
} else {
if((state_val_18567 === (2))){
var inst_18563 = (state_18566[(2)]);
var inst_18564 = cljs.core.async.close_BANG_(ch);
var state_18566__$1 = (function (){var statearr_18568 = state_18566;
(statearr_18568[(7)] = inst_18563);

return statearr_18568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18566__$1,inst_18564);
} else {
return null;
}
}
});})(c__13775__auto__))
;
return ((function (switch__13594__auto__,c__13775__auto__){
return (function() {
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto__ = null;
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto____0 = (function (){
var statearr_18569 = [null,null,null,null,null,null,null,null];
(statearr_18569[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto__);

(statearr_18569[(1)] = (1));

return statearr_18569;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto____1 = (function (state_18566){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18566);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18570){if((e18570 instanceof Object)){
var ex__13598__auto__ = e18570;
var statearr_18571_18573 = state_18566;
(statearr_18571_18573[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18566);

return cljs.core.cst$kw$recur;
} else {
throw e18570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__18574 = state_18566;
state_18566 = G__18574;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto__ = function(state_18566){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto____1.call(this,state_18566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__))
})();
var state__13777__auto__ = (function (){var statearr_18572 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_18572[(6)] = c__13775__auto__);

return statearr_18572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__))
);

return c__13775__auto__;
}),n,request);
}));
});
/**
 * Returns channel receiving components for the page
 */
warehouse.storage.indexeddb.load_components = (function warehouse$storage$indexeddb$load_components(limit,offset){
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$4((function (res){
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__){
return (function (state_18579){
var state_val_18580 = (state_18579[(1)]);
if((state_val_18580 === (1))){
var state_18579__$1 = state_18579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18579__$1,(2),ch,res);
} else {
if((state_val_18580 === (2))){
var inst_18576 = (state_18579[(2)]);
var inst_18577 = cljs.core.async.close_BANG_(ch);
var state_18579__$1 = (function (){var statearr_18581 = state_18579;
(statearr_18581[(7)] = inst_18576);

return statearr_18581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18579__$1,inst_18577);
} else {
return null;
}
}
});})(c__13775__auto__))
;
return ((function (switch__13594__auto__,c__13775__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto__ = null;
var warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto____0 = (function (){
var statearr_18582 = [null,null,null,null,null,null,null,null];
(statearr_18582[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto__);

(statearr_18582[(1)] = (1));

return statearr_18582;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto____1 = (function (state_18579){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18579);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18583){if((e18583 instanceof Object)){
var ex__13598__auto__ = e18583;
var statearr_18584_18586 = state_18579;
(statearr_18584_18586[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18579);

return cljs.core.cst$kw$recur;
} else {
throw e18583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__18587 = state_18579;
state_18579 = G__18587;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto__ = function(state_18579){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto____1.call(this,state_18579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__))
})();
var state__13777__auto__ = (function (){var statearr_18585 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_18585[(6)] = c__13775__auto__);

return statearr_18585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__))
);

return c__13775__auto__;
}),limit,request,offset);
}));
});
/**
 * Returns channel receiving components by `ids`
 */
warehouse.storage.indexeddb.load_components_by_ids = (function warehouse$storage$indexeddb$load_components_by_ids(ids){
if(cljs.core.empty_QMARK_(ids)){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__13775__auto___18609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___18609,ch){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___18609,ch){
return (function (state_18592){
var state_val_18593 = (state_18592[(1)]);
if((state_val_18593 === (1))){
var inst_18588 = cljs.core.PersistentVector.EMPTY;
var state_18592__$1 = state_18592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18592__$1,(2),ch,inst_18588);
} else {
if((state_val_18593 === (2))){
var inst_18590 = (state_18592[(2)]);
var state_18592__$1 = state_18592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18592__$1,inst_18590);
} else {
return null;
}
}
});})(c__13775__auto___18609,ch))
;
return ((function (switch__13594__auto__,c__13775__auto___18609,ch){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____0 = (function (){
var statearr_18594 = [null,null,null,null,null,null,null];
(statearr_18594[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__);

(statearr_18594[(1)] = (1));

return statearr_18594;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____1 = (function (state_18592){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18592);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18595){if((e18595 instanceof Object)){
var ex__13598__auto__ = e18595;
var statearr_18596_18610 = state_18592;
(statearr_18596_18610[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18592);

return cljs.core.cst$kw$recur;
} else {
throw e18595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__18611 = state_18592;
state_18592 = G__18611;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__ = function(state_18592){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____1.call(this,state_18592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___18609,ch))
})();
var state__13777__auto__ = (function (){var statearr_18597 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_18597[(6)] = c__13775__auto___18609);

return statearr_18597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___18609,ch))
);


return ch;
} else {
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.filter_components(ids,(function (res){
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__){
return (function (state_18602){
var state_val_18603 = (state_18602[(1)]);
if((state_val_18603 === (1))){
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18602__$1,(2),ch,res);
} else {
if((state_val_18603 === (2))){
var inst_18599 = (state_18602[(2)]);
var inst_18600 = cljs.core.async.close_BANG_(ch);
var state_18602__$1 = (function (){var statearr_18604 = state_18602;
(statearr_18604[(7)] = inst_18599);

return statearr_18604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18602__$1,inst_18600);
} else {
return null;
}
}
});})(c__13775__auto__))
;
return ((function (switch__13594__auto__,c__13775__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____0 = (function (){
var statearr_18605 = [null,null,null,null,null,null,null,null];
(statearr_18605[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__);

(statearr_18605[(1)] = (1));

return statearr_18605;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____1 = (function (state_18602){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18602);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18606){if((e18606 instanceof Object)){
var ex__13598__auto__ = e18606;
var statearr_18607_18612 = state_18602;
(statearr_18607_18612[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18602);

return cljs.core.cst$kw$recur;
} else {
throw e18606;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__18613 = state_18602;
state_18602 = G__18613;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__ = function(state_18602){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____1.call(this,state_18602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__))
})();
var state__13777__auto__ = (function (){var statearr_18608 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_18608[(6)] = c__13775__auto__);

return statearr_18608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__))
);

return c__13775__auto__;
}),request);
}));
}
});
/**
 * Returns channel receiving ids of components filtered by `keyword`
 */
warehouse.storage.indexeddb.filter_ids_by_keyword = (function warehouse$storage$indexeddb$filter_ids_by_keyword(keyword){
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.filter_keys((function (res){
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__){
return (function (state_18618){
var state_val_18619 = (state_18618[(1)]);
if((state_val_18619 === (1))){
var state_18618__$1 = state_18618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18618__$1,(2),ch,res);
} else {
if((state_val_18619 === (2))){
var inst_18615 = (state_18618[(2)]);
var inst_18616 = cljs.core.async.close_BANG_(ch);
var state_18618__$1 = (function (){var statearr_18620 = state_18618;
(statearr_18620[(7)] = inst_18615);

return statearr_18620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18618__$1,inst_18616);
} else {
return null;
}
}
});})(c__13775__auto__))
;
return ((function (switch__13594__auto__,c__13775__auto__){
return (function() {
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto____0 = (function (){
var statearr_18621 = [null,null,null,null,null,null,null,null];
(statearr_18621[(0)] = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto__);

(statearr_18621[(1)] = (1));

return statearr_18621;
});
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto____1 = (function (state_18618){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18618);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18622){if((e18622 instanceof Object)){
var ex__13598__auto__ = e18622;
var statearr_18623_18625 = state_18618;
(statearr_18623_18625[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18618);

return cljs.core.cst$kw$recur;
} else {
throw e18622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__18626 = state_18618;
state_18618 = G__18626;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto__ = function(state_18618){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto____1.call(this,state_18618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto____0;
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto____1;
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__))
})();
var state__13777__auto__ = (function (){var statearr_18624 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_18624[(6)] = c__13775__auto__);

return statearr_18624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__))
);

return c__13775__auto__;
}),warehouse.storage.indexeddb.normalize_keyword(keyword),request);
}));
});
/**
 * Takes query `q` and returns channel receiving ids of components
 * matching the `q`
 */
warehouse.storage.indexeddb.filter_ids = (function warehouse$storage$indexeddb$filter_ids(q){
var col = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.empty_QMARK_),clojure.string.split.cljs$core$IFn$_invoke$arity$2(q," "));
var n = cljs.core.count(col);
var ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(warehouse.storage.indexeddb.filter_ids_by_keyword,col));
var key_sets = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__13775__auto___18680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___18680,col,n,ch,key_sets,out){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___18680,col,n,ch,key_sets,out){
return (function (state_18659){
var state_val_18660 = (state_18659[(1)]);
if((state_val_18660 === (7))){
var inst_18628 = (state_18659[(7)]);
var inst_18632 = (state_18659[(8)]);
var inst_18634 = (state_18659[(2)]);
var inst_18635 = (inst_18632.cljs$core$IFn$_invoke$arity$1 ? inst_18632.cljs$core$IFn$_invoke$arity$1(inst_18634) : inst_18632.call(null,inst_18634));
var inst_18636 = (inst_18628 + (1));
var inst_18628__$1 = inst_18636;
var state_18659__$1 = (function (){var statearr_18661 = state_18659;
(statearr_18661[(7)] = inst_18628__$1);

(statearr_18661[(9)] = inst_18635);

return statearr_18661;
})();
var statearr_18662_18681 = state_18659__$1;
(statearr_18662_18681[(2)] = null);

(statearr_18662_18681[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18660 === (1))){
var inst_18628 = (0);
var state_18659__$1 = (function (){var statearr_18663 = state_18659;
(statearr_18663[(7)] = inst_18628);

return statearr_18663;
})();
var statearr_18664_18682 = state_18659__$1;
(statearr_18664_18682[(2)] = null);

(statearr_18664_18682[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18660 === (4))){
var inst_18628 = (state_18659[(7)]);
var inst_18632 = (function (){var n__4376__auto__ = n;
var i = inst_18628;
return ((function (n__4376__auto__,i,inst_18628,state_val_18660,c__13775__auto___18680,col,n,ch,key_sets,out){
return (function (p1__18627_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_sets,cljs.core.conj,cljs.core.set(p1__18627_SHARP_));
});
;})(n__4376__auto__,i,inst_18628,state_val_18660,c__13775__auto___18680,col,n,ch,key_sets,out))
})();
var state_18659__$1 = (function (){var statearr_18665 = state_18659;
(statearr_18665[(8)] = inst_18632);

return statearr_18665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18659__$1,(7),ch);
} else {
if((state_val_18660 === (6))){
var inst_18640 = (state_18659[(2)]);
var state_18659__$1 = state_18659;
var statearr_18666_18683 = state_18659__$1;
(statearr_18666_18683[(2)] = inst_18640);

(statearr_18666_18683[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18660 === (3))){
var inst_18642 = (state_18659[(2)]);
var inst_18643 = cljs.core.async.close_BANG_(ch);
var inst_18644 = cljs.core.deref(key_sets);
var inst_18645 = cljs.core.empty_QMARK_(inst_18644);
var state_18659__$1 = (function (){var statearr_18667 = state_18659;
(statearr_18667[(10)] = inst_18643);

(statearr_18667[(11)] = inst_18642);

return statearr_18667;
})();
if(inst_18645){
var statearr_18668_18684 = state_18659__$1;
(statearr_18668_18684[(1)] = (8));

} else {
var statearr_18669_18685 = state_18659__$1;
(statearr_18669_18685[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18660 === (2))){
var inst_18628 = (state_18659[(7)]);
var inst_18630 = (inst_18628 < n);
var state_18659__$1 = state_18659;
if(cljs.core.truth_(inst_18630)){
var statearr_18670_18686 = state_18659__$1;
(statearr_18670_18686[(1)] = (4));

} else {
var statearr_18671_18687 = state_18659__$1;
(statearr_18671_18687[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18660 === (11))){
var inst_18656 = (state_18659[(2)]);
var inst_18657 = cljs.core.async.close_BANG_(out);
var state_18659__$1 = (function (){var statearr_18672 = state_18659;
(statearr_18672[(12)] = inst_18656);

return statearr_18672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18659__$1,inst_18657);
} else {
if((state_val_18660 === (9))){
var inst_18649 = cljs.core.PersistentVector.EMPTY;
var inst_18650 = cljs.core.deref(key_sets);
var inst_18651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,inst_18650);
var inst_18652 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_18649,inst_18651);
var state_18659__$1 = state_18659;
var statearr_18673_18688 = state_18659__$1;
(statearr_18673_18688[(2)] = inst_18652);

(statearr_18673_18688[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18660 === (5))){
var state_18659__$1 = state_18659;
var statearr_18674_18689 = state_18659__$1;
(statearr_18674_18689[(2)] = null);

(statearr_18674_18689[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18660 === (10))){
var inst_18654 = (state_18659[(2)]);
var state_18659__$1 = state_18659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18659__$1,(11),out,inst_18654);
} else {
if((state_val_18660 === (8))){
var inst_18647 = cljs.core.PersistentVector.EMPTY;
var state_18659__$1 = state_18659;
var statearr_18675_18690 = state_18659__$1;
(statearr_18675_18690[(2)] = inst_18647);

(statearr_18675_18690[(1)] = (10));


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
});})(c__13775__auto___18680,col,n,ch,key_sets,out))
;
return ((function (switch__13594__auto__,c__13775__auto___18680,col,n,ch,key_sets,out){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto____0 = (function (){
var statearr_18676 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18676[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto__);

(statearr_18676[(1)] = (1));

return statearr_18676;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto____1 = (function (state_18659){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18659);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18677){if((e18677 instanceof Object)){
var ex__13598__auto__ = e18677;
var statearr_18678_18691 = state_18659;
(statearr_18678_18691[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18659);

return cljs.core.cst$kw$recur;
} else {
throw e18677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__18692 = state_18659;
state_18659 = G__18692;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto__ = function(state_18659){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto____1.call(this,state_18659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___18680,col,n,ch,key_sets,out))
})();
var state__13777__auto__ = (function (){var statearr_18679 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_18679[(6)] = c__13775__auto___18680);

return statearr_18679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___18680,col,n,ch,key_sets,out))
);


return out;
});
/**
 * Returns channel receiving `true` once update completed.
 */
warehouse.storage.indexeddb.store_components = (function warehouse$storage$indexeddb$store_components(components){
return warehouse.storage.indexeddb.open_request((function (request,ch){
var db = request.result;
var tx = db.transaction("components","readwrite");
var store = tx.objectStore("components");
var seq__18693_18706 = cljs.core.seq(components);
var chunk__18694_18707 = null;
var count__18695_18708 = (0);
var i__18696_18709 = (0);
while(true){
if((i__18696_18709 < count__18695_18708)){
var component_18710 = chunk__18694_18707.cljs$core$IIndexed$_nth$arity$2(null,i__18696_18709);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18710));


var G__18711 = seq__18693_18706;
var G__18712 = chunk__18694_18707;
var G__18713 = count__18695_18708;
var G__18714 = (i__18696_18709 + (1));
seq__18693_18706 = G__18711;
chunk__18694_18707 = G__18712;
count__18695_18708 = G__18713;
i__18696_18709 = G__18714;
continue;
} else {
var temp__5457__auto___18715 = cljs.core.seq(seq__18693_18706);
if(temp__5457__auto___18715){
var seq__18693_18716__$1 = temp__5457__auto___18715;
if(cljs.core.chunked_seq_QMARK_(seq__18693_18716__$1)){
var c__4319__auto___18717 = cljs.core.chunk_first(seq__18693_18716__$1);
var G__18718 = cljs.core.chunk_rest(seq__18693_18716__$1);
var G__18719 = c__4319__auto___18717;
var G__18720 = cljs.core.count(c__4319__auto___18717);
var G__18721 = (0);
seq__18693_18706 = G__18718;
chunk__18694_18707 = G__18719;
count__18695_18708 = G__18720;
i__18696_18709 = G__18721;
continue;
} else {
var component_18722 = cljs.core.first(seq__18693_18716__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18722));


var G__18723 = cljs.core.next(seq__18693_18716__$1);
var G__18724 = null;
var G__18725 = (0);
var G__18726 = (0);
seq__18693_18706 = G__18723;
chunk__18694_18707 = G__18724;
count__18695_18708 = G__18725;
i__18696_18709 = G__18726;
continue;
}
} else {
}
}
break;
}

return tx.oncomplete = ((function (db,tx,store){
return (function (){
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,db,tx,store){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,db,tx,store){
return (function (state_18700){
var state_val_18701 = (state_18700[(1)]);
if((state_val_18701 === (1))){
var state_18700__$1 = state_18700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18700__$1,(2),ch,true);
} else {
if((state_val_18701 === (2))){
var inst_18698 = (state_18700[(2)]);
var state_18700__$1 = state_18700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18700__$1,inst_18698);
} else {
return null;
}
}
});})(c__13775__auto__,db,tx,store))
;
return ((function (switch__13594__auto__,c__13775__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto__ = null;
var warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto____0 = (function (){
var statearr_18702 = [null,null,null,null,null,null,null];
(statearr_18702[(0)] = warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto__);

(statearr_18702[(1)] = (1));

return statearr_18702;
});
var warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto____1 = (function (state_18700){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18700);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18703){if((e18703 instanceof Object)){
var ex__13598__auto__ = e18703;
var statearr_18704_18727 = state_18700;
(statearr_18704_18727[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18700);

return cljs.core.cst$kw$recur;
} else {
throw e18703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__18728 = state_18700;
state_18700 = G__18728;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto__ = function(state_18700){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto____1.call(this,state_18700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto____0;
warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto____1;
return warehouse$storage$indexeddb$store_components_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,db,tx,store))
})();
var state__13777__auto__ = (function (){var statearr_18705 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_18705[(6)] = c__13775__auto__);

return statearr_18705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,db,tx,store))
);

return c__13775__auto__;
});})(db,tx,store))
;
}));
});
/**
 * Returns channel receiving `true` once update completed.
 */
warehouse.storage.indexeddb.store_component = (function warehouse$storage$indexeddb$store_component(component){
return warehouse.storage.indexeddb.open_request((function (request,ch){
var db = request.result;
var tx = db.transaction("components","readwrite");
var store = tx.objectStore("components");
store.put(warehouse.storage.indexeddb.component__GT_obj(component));

return tx.oncomplete = ((function (db,tx,store){
return (function (){
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,db,tx,store){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,db,tx,store){
return (function (state_18732){
var state_val_18733 = (state_18732[(1)]);
if((state_val_18733 === (1))){
var state_18732__$1 = state_18732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18732__$1,(2),ch,true);
} else {
if((state_val_18733 === (2))){
var inst_18730 = (state_18732[(2)]);
var state_18732__$1 = state_18732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18732__$1,inst_18730);
} else {
return null;
}
}
});})(c__13775__auto__,db,tx,store))
;
return ((function (switch__13594__auto__,c__13775__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto__ = null;
var warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto____0 = (function (){
var statearr_18734 = [null,null,null,null,null,null,null];
(statearr_18734[(0)] = warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto__);

(statearr_18734[(1)] = (1));

return statearr_18734;
});
var warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto____1 = (function (state_18732){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_18732);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e18735){if((e18735 instanceof Object)){
var ex__13598__auto__ = e18735;
var statearr_18736_18738 = state_18732;
(statearr_18736_18738[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18732);

return cljs.core.cst$kw$recur;
} else {
throw e18735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__18739 = state_18732;
state_18732 = G__18739;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto__ = function(state_18732){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto____1.call(this,state_18732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto____0;
warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto____1;
return warehouse$storage$indexeddb$store_component_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,db,tx,store))
})();
var state__13777__auto__ = (function (){var statearr_18737 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_18737[(6)] = c__13775__auto__);

return statearr_18737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,db,tx,store))
);

return c__13775__auto__;
});})(db,tx,store))
;
}));
});
