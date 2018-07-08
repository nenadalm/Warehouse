// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.storage.indexeddb');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.storage.local');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
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
var seq__11371_11375 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(warehouse.storage.local.app_state)));
var chunk__11372_11376 = null;
var count__11373_11377 = (0);
var i__11374_11378 = (0);
while(true){
if((i__11374_11378 < count__11373_11377)){
var component_11379 = chunk__11372_11376.cljs$core$IIndexed$_nth$arity$2(null,i__11374_11378);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11379));


var G__11380 = seq__11371_11375;
var G__11381 = chunk__11372_11376;
var G__11382 = count__11373_11377;
var G__11383 = (i__11374_11378 + (1));
seq__11371_11375 = G__11380;
chunk__11372_11376 = G__11381;
count__11373_11377 = G__11382;
i__11374_11378 = G__11383;
continue;
} else {
var temp__5457__auto___11384 = cljs.core.seq(seq__11371_11375);
if(temp__5457__auto___11384){
var seq__11371_11385__$1 = temp__5457__auto___11384;
if(cljs.core.chunked_seq_QMARK_(seq__11371_11385__$1)){
var c__4351__auto___11386 = cljs.core.chunk_first(seq__11371_11385__$1);
var G__11387 = cljs.core.chunk_rest(seq__11371_11385__$1);
var G__11388 = c__4351__auto___11386;
var G__11389 = cljs.core.count(c__4351__auto___11386);
var G__11390 = (0);
seq__11371_11375 = G__11387;
chunk__11372_11376 = G__11388;
count__11373_11377 = G__11389;
i__11374_11378 = G__11390;
continue;
} else {
var component_11391 = cljs.core.first(seq__11371_11385__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11391));


var G__11392 = cljs.core.next(seq__11371_11385__$1);
var G__11393 = null;
var G__11394 = (0);
var G__11395 = (0);
seq__11371_11375 = G__11392;
chunk__11372_11376 = G__11393;
count__11373_11377 = G__11394;
i__11374_11378 = G__11395;
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
var G__11397 = arguments.length;
switch (G__11397) {
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
if(cljs.core.truth_(cursor)){
if(cljs.core.deref(advanced) === true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,warehouse.storage.indexeddb.obj__GT_component(cursor.value));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(components)),n)){
var G__11398 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11398) : f.call(null,G__11398));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return cljs.core.reset_BANG_(advanced,true);
}
} else {
var G__11399 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11399) : f.call(null,G__11399));
}
} else {
var G__11400 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11400) : f.call(null,G__11400));
}
});})(cnt,request__$2,components,advanced,db,tx,store,request__$1))
;
});})(db,tx,store,request__$1))
;
});

warehouse.storage.indexeddb.on_success.cljs$lang$maxFixedArity = 4;

warehouse.storage.indexeddb.on_success_filter = (function warehouse$storage$indexeddb$on_success_filter(var_args){
var G__11403 = arguments.length;
switch (G__11403) {
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
if(cljs.core.truth_(cursor)){
if(cljs.core.deref(advanced) === true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cursor.value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(components)),n)){
var G__11404 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11404) : f.call(null,G__11404));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return cljs.core.reset_BANG_(advanced,true);
}
} else {
var G__11405 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11405) : f.call(null,G__11405));
}
} else {
var G__11406 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11406) : f.call(null,G__11406));
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
if(cljs.core.truth_(cursor)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(keys,cljs.core.conj,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cursor.value.id));

return cursor.continue();
} else {
var G__11408 = cljs.core.deref(keys);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11408) : f.call(null,G__11408));
}
} else {
var G__11409 = cljs.core.deref(keys);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11409) : f.call(null,G__11409));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,warehouse.storage.indexeddb.obj__GT_component(cursor.value));

var current_idx = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prev_idx,cljs.core.inc);
var temp__5455__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(sorted_ids,current_idx,null);
if(cljs.core.truth_(temp__5455__auto____$1)){
var next_id = temp__5455__auto____$1;
return cursor.continue(next_id);
} else {
var G__11410 = cljs.core.deref(components);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11410) : f.call(null,G__11410));
}
} else {
var G__11411 = cljs.core.deref(components);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11411) : f.call(null,G__11411));
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
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_11416){
var state_val_11417 = (state_11416[(1)]);
if((state_val_11417 === (1))){
var state_11416__$1 = state_11416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11416__$1,(2),ch,res);
} else {
if((state_val_11417 === (2))){
var inst_11413 = (state_11416[(2)]);
var inst_11414 = cljs.core.async.close_BANG_(ch);
var state_11416__$1 = (function (){var statearr_11418 = state_11416;
(statearr_11418[(7)] = inst_11413);

return statearr_11418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11416__$1,inst_11414);
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
var statearr_11419 = [null,null,null,null,null,null,null,null];
(statearr_11419[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__);

(statearr_11419[(1)] = (1));

return statearr_11419;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1 = (function (state_11416){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11416);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11420){if((e11420 instanceof Object)){
var ex__9324__auto__ = e11420;
var statearr_11421_11423 = state_11416;
(statearr_11421_11423[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11416);

return cljs.core.cst$kw$recur;
} else {
throw e11420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11424 = state_11416;
state_11416 = G__11424;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__ = function(state_11416){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1.call(this,state_11416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11422 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11422[(6)] = c__9423__auto__);

return statearr_11422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
}),n,request);
}));
});
/**
 * Returns channel receiving components for the page
 */
warehouse.storage.indexeddb.load_components = (function warehouse$storage$indexeddb$load_components(limit,offset){
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$4((function (res){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_11429){
var state_val_11430 = (state_11429[(1)]);
if((state_val_11430 === (1))){
var state_11429__$1 = state_11429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11429__$1,(2),ch,res);
} else {
if((state_val_11430 === (2))){
var inst_11426 = (state_11429[(2)]);
var inst_11427 = cljs.core.async.close_BANG_(ch);
var state_11429__$1 = (function (){var statearr_11431 = state_11429;
(statearr_11431[(7)] = inst_11426);

return statearr_11431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11429__$1,inst_11427);
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
var statearr_11432 = [null,null,null,null,null,null,null,null];
(statearr_11432[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__);

(statearr_11432[(1)] = (1));

return statearr_11432;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1 = (function (state_11429){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11429);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11433){if((e11433 instanceof Object)){
var ex__9324__auto__ = e11433;
var statearr_11434_11436 = state_11429;
(statearr_11434_11436[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11429);

return cljs.core.cst$kw$recur;
} else {
throw e11433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11437 = state_11429;
state_11429 = G__11437;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__ = function(state_11429){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1.call(this,state_11429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11435 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11435[(6)] = c__9423__auto__);

return statearr_11435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
}),limit,request,offset);
}));
});
/**
 * Returns channel receiving components by `ids`
 */
warehouse.storage.indexeddb.load_components_by_ids = (function warehouse$storage$indexeddb$load_components_by_ids(ids){
if(cljs.core.empty_QMARK_(ids)){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__9423__auto___11459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___11459,ch){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___11459,ch){
return (function (state_11442){
var state_val_11443 = (state_11442[(1)]);
if((state_val_11443 === (1))){
var inst_11438 = cljs.core.PersistentVector.EMPTY;
var state_11442__$1 = state_11442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11442__$1,(2),ch,inst_11438);
} else {
if((state_val_11443 === (2))){
var inst_11440 = (state_11442[(2)]);
var state_11442__$1 = state_11442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11442__$1,inst_11440);
} else {
return null;
}
}
});})(c__9423__auto___11459,ch))
;
return ((function (switch__9320__auto__,c__9423__auto___11459,ch){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11444 = [null,null,null,null,null,null,null];
(statearr_11444[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__);

(statearr_11444[(1)] = (1));

return statearr_11444;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1 = (function (state_11442){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11442);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11445){if((e11445 instanceof Object)){
var ex__9324__auto__ = e11445;
var statearr_11446_11460 = state_11442;
(statearr_11446_11460[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11442);

return cljs.core.cst$kw$recur;
} else {
throw e11445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11461 = state_11442;
state_11442 = G__11461;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__ = function(state_11442){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1.call(this,state_11442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___11459,ch))
})();
var state__9425__auto__ = (function (){var statearr_11447 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11447[(6)] = c__9423__auto___11459);

return statearr_11447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___11459,ch))
);


return ch;
} else {
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.filter_components(ids,(function (res){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_11452){
var state_val_11453 = (state_11452[(1)]);
if((state_val_11453 === (1))){
var state_11452__$1 = state_11452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11452__$1,(2),ch,res);
} else {
if((state_val_11453 === (2))){
var inst_11449 = (state_11452[(2)]);
var inst_11450 = cljs.core.async.close_BANG_(ch);
var state_11452__$1 = (function (){var statearr_11454 = state_11452;
(statearr_11454[(7)] = inst_11449);

return statearr_11454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11452__$1,inst_11450);
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
var statearr_11455 = [null,null,null,null,null,null,null,null];
(statearr_11455[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__);

(statearr_11455[(1)] = (1));

return statearr_11455;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1 = (function (state_11452){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11452);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11456){if((e11456 instanceof Object)){
var ex__9324__auto__ = e11456;
var statearr_11457_11462 = state_11452;
(statearr_11457_11462[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11452);

return cljs.core.cst$kw$recur;
} else {
throw e11456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11463 = state_11452;
state_11452 = G__11463;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__ = function(state_11452){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1.call(this,state_11452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11458 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11458[(6)] = c__9423__auto__);

return statearr_11458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
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
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_11468){
var state_val_11469 = (state_11468[(1)]);
if((state_val_11469 === (1))){
var state_11468__$1 = state_11468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11468__$1,(2),ch,res);
} else {
if((state_val_11469 === (2))){
var inst_11465 = (state_11468[(2)]);
var inst_11466 = cljs.core.async.close_BANG_(ch);
var state_11468__$1 = (function (){var statearr_11470 = state_11468;
(statearr_11470[(7)] = inst_11465);

return statearr_11470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11468__$1,inst_11466);
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
var statearr_11471 = [null,null,null,null,null,null,null,null];
(statearr_11471[(0)] = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__);

(statearr_11471[(1)] = (1));

return statearr_11471;
});
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____1 = (function (state_11468){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11468);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11472){if((e11472 instanceof Object)){
var ex__9324__auto__ = e11472;
var statearr_11473_11475 = state_11468;
(statearr_11473_11475[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11468);

return cljs.core.cst$kw$recur;
} else {
throw e11472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11476 = state_11468;
state_11468 = G__11476;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__ = function(state_11468){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____1.call(this,state_11468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11474 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11474[(6)] = c__9423__auto__);

return statearr_11474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
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
var c__9423__auto___11530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___11530,col,n,ch,key_sets,out){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___11530,col,n,ch,key_sets,out){
return (function (state_11509){
var state_val_11510 = (state_11509[(1)]);
if((state_val_11510 === (7))){
var inst_11482 = (state_11509[(7)]);
var inst_11478 = (state_11509[(8)]);
var inst_11484 = (state_11509[(2)]);
var inst_11485 = (inst_11482.cljs$core$IFn$_invoke$arity$1 ? inst_11482.cljs$core$IFn$_invoke$arity$1(inst_11484) : inst_11482.call(null,inst_11484));
var inst_11486 = (inst_11478 + (1));
var inst_11478__$1 = inst_11486;
var state_11509__$1 = (function (){var statearr_11511 = state_11509;
(statearr_11511[(9)] = inst_11485);

(statearr_11511[(8)] = inst_11478__$1);

return statearr_11511;
})();
var statearr_11512_11531 = state_11509__$1;
(statearr_11512_11531[(2)] = null);

(statearr_11512_11531[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11510 === (1))){
var inst_11478 = (0);
var state_11509__$1 = (function (){var statearr_11513 = state_11509;
(statearr_11513[(8)] = inst_11478);

return statearr_11513;
})();
var statearr_11514_11532 = state_11509__$1;
(statearr_11514_11532[(2)] = null);

(statearr_11514_11532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11510 === (4))){
var inst_11478 = (state_11509[(8)]);
var inst_11482 = (function (){var n__4408__auto__ = n;
var i = inst_11478;
return ((function (n__4408__auto__,i,inst_11478,state_val_11510,c__9423__auto___11530,col,n,ch,key_sets,out){
return (function (p1__11477_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_sets,cljs.core.conj,cljs.core.set(p1__11477_SHARP_));
});
;})(n__4408__auto__,i,inst_11478,state_val_11510,c__9423__auto___11530,col,n,ch,key_sets,out))
})();
var state_11509__$1 = (function (){var statearr_11515 = state_11509;
(statearr_11515[(7)] = inst_11482);

return statearr_11515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11509__$1,(7),ch);
} else {
if((state_val_11510 === (6))){
var inst_11490 = (state_11509[(2)]);
var state_11509__$1 = state_11509;
var statearr_11516_11533 = state_11509__$1;
(statearr_11516_11533[(2)] = inst_11490);

(statearr_11516_11533[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11510 === (3))){
var inst_11492 = (state_11509[(2)]);
var inst_11493 = cljs.core.async.close_BANG_(ch);
var inst_11494 = cljs.core.deref(key_sets);
var inst_11495 = cljs.core.empty_QMARK_(inst_11494);
var state_11509__$1 = (function (){var statearr_11517 = state_11509;
(statearr_11517[(10)] = inst_11492);

(statearr_11517[(11)] = inst_11493);

return statearr_11517;
})();
if(inst_11495){
var statearr_11518_11534 = state_11509__$1;
(statearr_11518_11534[(1)] = (8));

} else {
var statearr_11519_11535 = state_11509__$1;
(statearr_11519_11535[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11510 === (2))){
var inst_11478 = (state_11509[(8)]);
var inst_11480 = (inst_11478 < n);
var state_11509__$1 = state_11509;
if(cljs.core.truth_(inst_11480)){
var statearr_11520_11536 = state_11509__$1;
(statearr_11520_11536[(1)] = (4));

} else {
var statearr_11521_11537 = state_11509__$1;
(statearr_11521_11537[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11510 === (11))){
var inst_11506 = (state_11509[(2)]);
var inst_11507 = cljs.core.async.close_BANG_(out);
var state_11509__$1 = (function (){var statearr_11522 = state_11509;
(statearr_11522[(12)] = inst_11506);

return statearr_11522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11509__$1,inst_11507);
} else {
if((state_val_11510 === (9))){
var inst_11499 = cljs.core.PersistentVector.EMPTY;
var inst_11500 = cljs.core.deref(key_sets);
var inst_11501 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,inst_11500);
var inst_11502 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_11499,inst_11501);
var state_11509__$1 = state_11509;
var statearr_11523_11538 = state_11509__$1;
(statearr_11523_11538[(2)] = inst_11502);

(statearr_11523_11538[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11510 === (5))){
var state_11509__$1 = state_11509;
var statearr_11524_11539 = state_11509__$1;
(statearr_11524_11539[(2)] = null);

(statearr_11524_11539[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11510 === (10))){
var inst_11504 = (state_11509[(2)]);
var state_11509__$1 = state_11509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11509__$1,(11),out,inst_11504);
} else {
if((state_val_11510 === (8))){
var inst_11497 = cljs.core.PersistentVector.EMPTY;
var state_11509__$1 = state_11509;
var statearr_11525_11540 = state_11509__$1;
(statearr_11525_11540[(2)] = inst_11497);

(statearr_11525_11540[(1)] = (10));


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
});})(c__9423__auto___11530,col,n,ch,key_sets,out))
;
return ((function (switch__9320__auto__,c__9423__auto___11530,col,n,ch,key_sets,out){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11526 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11526[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__);

(statearr_11526[(1)] = (1));

return statearr_11526;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1 = (function (state_11509){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11509);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11527){if((e11527 instanceof Object)){
var ex__9324__auto__ = e11527;
var statearr_11528_11541 = state_11509;
(statearr_11528_11541[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11509);

return cljs.core.cst$kw$recur;
} else {
throw e11527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11542 = state_11509;
state_11509 = G__11542;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__ = function(state_11509){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1.call(this,state_11509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___11530,col,n,ch,key_sets,out))
})();
var state__9425__auto__ = (function (){var statearr_11529 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11529[(6)] = c__9423__auto___11530);

return statearr_11529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___11530,col,n,ch,key_sets,out))
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
var seq__11543_11556 = cljs.core.seq(components);
var chunk__11544_11557 = null;
var count__11545_11558 = (0);
var i__11546_11559 = (0);
while(true){
if((i__11546_11559 < count__11545_11558)){
var component_11560 = chunk__11544_11557.cljs$core$IIndexed$_nth$arity$2(null,i__11546_11559);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11560));


var G__11561 = seq__11543_11556;
var G__11562 = chunk__11544_11557;
var G__11563 = count__11545_11558;
var G__11564 = (i__11546_11559 + (1));
seq__11543_11556 = G__11561;
chunk__11544_11557 = G__11562;
count__11545_11558 = G__11563;
i__11546_11559 = G__11564;
continue;
} else {
var temp__5457__auto___11565 = cljs.core.seq(seq__11543_11556);
if(temp__5457__auto___11565){
var seq__11543_11566__$1 = temp__5457__auto___11565;
if(cljs.core.chunked_seq_QMARK_(seq__11543_11566__$1)){
var c__4351__auto___11567 = cljs.core.chunk_first(seq__11543_11566__$1);
var G__11568 = cljs.core.chunk_rest(seq__11543_11566__$1);
var G__11569 = c__4351__auto___11567;
var G__11570 = cljs.core.count(c__4351__auto___11567);
var G__11571 = (0);
seq__11543_11556 = G__11568;
chunk__11544_11557 = G__11569;
count__11545_11558 = G__11570;
i__11546_11559 = G__11571;
continue;
} else {
var component_11572 = cljs.core.first(seq__11543_11566__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_11572));


var G__11573 = cljs.core.next(seq__11543_11566__$1);
var G__11574 = null;
var G__11575 = (0);
var G__11576 = (0);
seq__11543_11556 = G__11573;
chunk__11544_11557 = G__11574;
count__11545_11558 = G__11575;
i__11546_11559 = G__11576;
continue;
}
} else {
}
}
break;
}

return tx.oncomplete = ((function (db,tx,store){
return (function (){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,db,tx,store){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,db,tx,store){
return (function (state_11550){
var state_val_11551 = (state_11550[(1)]);
if((state_val_11551 === (1))){
var state_11550__$1 = state_11550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11550__$1,(2),ch,true);
} else {
if((state_val_11551 === (2))){
var inst_11548 = (state_11550[(2)]);
var state_11550__$1 = state_11550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11550__$1,inst_11548);
} else {
return null;
}
}
});})(c__9423__auto__,db,tx,store))
;
return ((function (switch__9320__auto__,c__9423__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto____0 = (function (){
var statearr_11552 = [null,null,null,null,null,null,null];
(statearr_11552[(0)] = warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto__);

(statearr_11552[(1)] = (1));

return statearr_11552;
});
var warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto____1 = (function (state_11550){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11550);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11553){if((e11553 instanceof Object)){
var ex__9324__auto__ = e11553;
var statearr_11554_11577 = state_11550;
(statearr_11554_11577[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11550);

return cljs.core.cst$kw$recur;
} else {
throw e11553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11578 = state_11550;
state_11550 = G__11578;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto__ = function(state_11550){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto____1.call(this,state_11550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$store_components_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,db,tx,store))
})();
var state__9425__auto__ = (function (){var statearr_11555 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11555[(6)] = c__9423__auto__);

return statearr_11555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,db,tx,store))
);

return c__9423__auto__;
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
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,db,tx,store){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,db,tx,store){
return (function (state_11582){
var state_val_11583 = (state_11582[(1)]);
if((state_val_11583 === (1))){
var state_11582__$1 = state_11582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11582__$1,(2),ch,true);
} else {
if((state_val_11583 === (2))){
var inst_11580 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11582__$1,inst_11580);
} else {
return null;
}
}
});})(c__9423__auto__,db,tx,store))
;
return ((function (switch__9320__auto__,c__9423__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto__ = null;
var warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto____0 = (function (){
var statearr_11584 = [null,null,null,null,null,null,null];
(statearr_11584[(0)] = warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto__);

(statearr_11584[(1)] = (1));

return statearr_11584;
});
var warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto____1 = (function (state_11582){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11582);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11585){if((e11585 instanceof Object)){
var ex__9324__auto__ = e11585;
var statearr_11586_11588 = state_11582;
(statearr_11586_11588[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11582);

return cljs.core.cst$kw$recur;
} else {
throw e11585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11589 = state_11582;
state_11582 = G__11589;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto__ = function(state_11582){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto____1.call(this,state_11582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto____0;
warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto____1;
return warehouse$storage$indexeddb$store_component_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,db,tx,store))
})();
var state__9425__auto__ = (function (){var statearr_11587 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11587[(6)] = c__9423__auto__);

return statearr_11587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,db,tx,store))
);

return c__9423__auto__;
});})(db,tx,store))
;
}));
});
