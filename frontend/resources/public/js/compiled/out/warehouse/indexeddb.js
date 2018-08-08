// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.indexeddb');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.set');
warehouse.indexeddb.open_request = (function warehouse$indexeddb$open_request(db,f){

var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var request = window.indexedDB.open(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(db));
request.onupgradeneeded = cljs.core.cst$kw$on_DASH_upgrade.cljs$core$IFn$_invoke$arity$1(db);

request.onsuccess = ((function (ch,request){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(request,ch) : f.call(null,request,ch));
});})(ch,request))
;

return ch;
});
warehouse.indexeddb.store = (function warehouse$indexeddb$store(db,store,data){

return warehouse.indexeddb.open_request(db,(function (request,ch){
var db__$1 = request.result;
var store_name = cljs.core.name(store);
var tx = db__$1.transaction(store_name,"readwrite");
var store__$1 = tx.objectStore(store_name);
if(cljs.core.coll_QMARK_(data)){
var seq__11371_11384 = cljs.core.seq(data);
var chunk__11372_11385 = null;
var count__11373_11386 = (0);
var i__11374_11387 = (0);
while(true){
if((i__11374_11387 < count__11373_11386)){
var v_11388 = chunk__11372_11385.cljs$core$IIndexed$_nth$arity$2(null,i__11374_11387);
store__$1.put(v_11388);


var G__11389 = seq__11371_11384;
var G__11390 = chunk__11372_11385;
var G__11391 = count__11373_11386;
var G__11392 = (i__11374_11387 + (1));
seq__11371_11384 = G__11389;
chunk__11372_11385 = G__11390;
count__11373_11386 = G__11391;
i__11374_11387 = G__11392;
continue;
} else {
var temp__5457__auto___11393 = cljs.core.seq(seq__11371_11384);
if(temp__5457__auto___11393){
var seq__11371_11394__$1 = temp__5457__auto___11393;
if(cljs.core.chunked_seq_QMARK_(seq__11371_11394__$1)){
var c__4351__auto___11395 = cljs.core.chunk_first(seq__11371_11394__$1);
var G__11396 = cljs.core.chunk_rest(seq__11371_11394__$1);
var G__11397 = c__4351__auto___11395;
var G__11398 = cljs.core.count(c__4351__auto___11395);
var G__11399 = (0);
seq__11371_11384 = G__11396;
chunk__11372_11385 = G__11397;
count__11373_11386 = G__11398;
i__11374_11387 = G__11399;
continue;
} else {
var v_11400 = cljs.core.first(seq__11371_11394__$1);
store__$1.put(v_11400);


var G__11401 = cljs.core.next(seq__11371_11394__$1);
var G__11402 = null;
var G__11403 = (0);
var G__11404 = (0);
seq__11371_11384 = G__11401;
chunk__11372_11385 = G__11402;
count__11373_11386 = G__11403;
i__11374_11387 = G__11404;
continue;
}
} else {
}
}
break;
}
} else {
store__$1.put(data);
}

return tx.oncomplete = ((function (db__$1,store_name,tx,store__$1){
return (function (){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,db__$1,store_name,tx,store__$1){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,db__$1,store_name,tx,store__$1){
return (function (state_11378){
var state_val_11379 = (state_11378[(1)]);
if((state_val_11379 === (1))){
var state_11378__$1 = state_11378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11378__$1,(2),ch,true);
} else {
if((state_val_11379 === (2))){
var inst_11376 = (state_11378[(2)]);
var state_11378__$1 = state_11378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11378__$1,inst_11376);
} else {
return null;
}
}
});})(c__9423__auto__,db__$1,store_name,tx,store__$1))
;
return ((function (switch__9320__auto__,c__9423__auto__,db__$1,store_name,tx,store__$1){
return (function() {
var warehouse$indexeddb$store_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$store_$_state_machine__9321__auto____0 = (function (){
var statearr_11380 = [null,null,null,null,null,null,null];
(statearr_11380[(0)] = warehouse$indexeddb$store_$_state_machine__9321__auto__);

(statearr_11380[(1)] = (1));

return statearr_11380;
});
var warehouse$indexeddb$store_$_state_machine__9321__auto____1 = (function (state_11378){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11378);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11381){if((e11381 instanceof Object)){
var ex__9324__auto__ = e11381;
var statearr_11382_11405 = state_11378;
(statearr_11382_11405[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11378);

return cljs.core.cst$kw$recur;
} else {
throw e11381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11406 = state_11378;
state_11378 = G__11406;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$store_$_state_machine__9321__auto__ = function(state_11378){
switch(arguments.length){
case 0:
return warehouse$indexeddb$store_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$store_$_state_machine__9321__auto____1.call(this,state_11378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$store_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$store_$_state_machine__9321__auto____0;
warehouse$indexeddb$store_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$store_$_state_machine__9321__auto____1;
return warehouse$indexeddb$store_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,db__$1,store_name,tx,store__$1))
})();
var state__9425__auto__ = (function (){var statearr_11383 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11383[(6)] = c__9423__auto__);

return statearr_11383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,db__$1,store_name,tx,store__$1))
);

return c__9423__auto__;
});})(db__$1,store_name,tx,store__$1))
;
}));
});
warehouse.indexeddb.cursor__GT_value_fn = (function warehouse$indexeddb$cursor__GT_value_fn(select){
var pred__11407 = cljs.core._EQ_;
var expr__11408 = select;
if(cljs.core.truth_((function (){var G__11410 = cljs.core.cst$kw$idb_SLASH_key;
var G__11411 = expr__11408;
return (pred__11407.cljs$core$IFn$_invoke$arity$2 ? pred__11407.cljs$core$IFn$_invoke$arity$2(G__11410,G__11411) : pred__11407.call(null,G__11410,G__11411));
})())){
return ((function (pred__11407,expr__11408){
return (function (cursor){
return cursor.key;
});
;})(pred__11407,expr__11408))
} else {
if(cljs.core.truth_((function (){var G__11412 = cljs.core.cst$kw$idb_SLASH_value;
var G__11413 = expr__11408;
return (pred__11407.cljs$core$IFn$_invoke$arity$2 ? pred__11407.cljs$core$IFn$_invoke$arity$2(G__11412,G__11413) : pred__11407.call(null,G__11412,G__11413));
})())){
return ((function (pred__11407,expr__11408){
return (function (cursor){
return cursor.value;
});
;})(pred__11407,expr__11408))
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11408)].join('')));
}
}
});
warehouse.indexeddb.store_get_fn = (function warehouse$indexeddb$store_get_fn(select,store){
return (function (){var pred__11414 = cljs.core._EQ_;
var expr__11415 = select;
if(cljs.core.truth_((function (){var G__11417 = cljs.core.cst$kw$idb_SLASH_key;
var G__11418 = expr__11415;
return (pred__11414.cljs$core$IFn$_invoke$arity$2 ? pred__11414.cljs$core$IFn$_invoke$arity$2(G__11417,G__11418) : pred__11414.call(null,G__11417,G__11418));
})())){
return store.getKey;
} else {
if(cljs.core.truth_((function (){var G__11419 = cljs.core.cst$kw$idb_SLASH_value;
var G__11420 = expr__11415;
return (pred__11414.cljs$core$IFn$_invoke$arity$2 ? pred__11414.cljs$core$IFn$_invoke$arity$2(G__11419,G__11420) : pred__11414.call(null,G__11419,G__11420));
})())){
return store.get;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11415)].join('')));
}
}
})().bind(store);
});
warehouse.indexeddb.open_cursor_fn = (function warehouse$indexeddb$open_cursor_fn(select,store){
return (function (){var pred__11421 = cljs.core._EQ_;
var expr__11422 = select;
if(cljs.core.truth_((function (){var G__11424 = cljs.core.cst$kw$idb_SLASH_key;
var G__11425 = expr__11422;
return (pred__11421.cljs$core$IFn$_invoke$arity$2 ? pred__11421.cljs$core$IFn$_invoke$arity$2(G__11424,G__11425) : pred__11421.call(null,G__11424,G__11425));
})())){
return store.openKeyCursor;
} else {
if(cljs.core.truth_((function (){var G__11426 = cljs.core.cst$kw$idb_SLASH_value;
var G__11427 = expr__11422;
return (pred__11421.cljs$core$IFn$_invoke$arity$2 ? pred__11421.cljs$core$IFn$_invoke$arity$2(G__11426,G__11427) : pred__11421.call(null,G__11426,G__11427));
})())){
return store.openCursor;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11422)].join('')));
}
}
})().bind(store);
});
warehouse.indexeddb.count_records = (function warehouse$indexeddb$count_records(source,f){
var request = source.count();
return request.onsuccess = ((function (request){
return (function (e){
var G__11428 = e.target.result;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11428) : f.call(null,G__11428));
});})(request))
;
});
warehouse.indexeddb.send_cursor_result = (function warehouse$indexeddb$send_cursor_result(db,request,source){
var q = cljs.core.cst$kw$idb_SLASH_q.cljs$core$IFn$_invoke$arity$1(db);
var result = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var advanced = cljs.core.volatile_BANG_(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$2(q,(0))));
var cursor__GT_value = warehouse.indexeddb.cursor__GT_value_fn(cljs.core.cst$kw$select.cljs$core$IFn$_invoke$arity$1(q));
var complete_result = ((function (q,result,advanced,cursor__GT_value){
return (function (result__$1){
return warehouse.indexeddb.count_records(source,((function (q,result,advanced,cursor__GT_value){
return (function (cnt){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,q,result,advanced,cursor__GT_value){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,q,result,advanced,cursor__GT_value){
return (function (state_11436){
var state_val_11437 = (state_11436[(1)]);
if((state_val_11437 === (1))){
var inst_11429 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11430 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11431 = [cnt,result__$1];
var inst_11432 = cljs.core.PersistentHashMap.fromArrays(inst_11430,inst_11431);
var state_11436__$1 = state_11436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11436__$1,(2),inst_11429,inst_11432);
} else {
if((state_val_11437 === (2))){
var inst_11434 = (state_11436[(2)]);
var state_11436__$1 = state_11436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11436__$1,inst_11434);
} else {
return null;
}
}
});})(c__9423__auto__,q,result,advanced,cursor__GT_value))
;
return ((function (switch__9320__auto__,c__9423__auto__,q,result,advanced,cursor__GT_value){
return (function() {
var warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto____0 = (function (){
var statearr_11438 = [null,null,null,null,null,null,null];
(statearr_11438[(0)] = warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto__);

(statearr_11438[(1)] = (1));

return statearr_11438;
});
var warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto____1 = (function (state_11436){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11436);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11439){if((e11439 instanceof Object)){
var ex__9324__auto__ = e11439;
var statearr_11440_11442 = state_11436;
(statearr_11440_11442[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11436);

return cljs.core.cst$kw$recur;
} else {
throw e11439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11443 = state_11436;
state_11436 = G__11443;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto__ = function(state_11436){
switch(arguments.length){
case 0:
return warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto____1.call(this,state_11436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto____0;
warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto____1;
return warehouse$indexeddb$send_cursor_result_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,q,result,advanced,cursor__GT_value))
})();
var state__9425__auto__ = (function (){var statearr_11441 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11441[(6)] = c__9423__auto__);

return statearr_11441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,q,result,advanced,cursor__GT_value))
);

return c__9423__auto__;
});})(q,result,advanced,cursor__GT_value))
);
});})(q,result,advanced,cursor__GT_value))
;
return request.onsuccess = ((function (q,result,advanced,cursor__GT_value,complete_result){
return (function (e){
var temp__5455__auto__ = e.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
if(cljs.core.truth_(cljs.core.deref(advanced))){
cljs.core._vreset_BANG_(result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(result),(cursor__GT_value.cljs$core$IFn$_invoke$arity$1 ? cursor__GT_value.cljs$core$IFn$_invoke$arity$1(cursor) : cursor__GT_value.call(null,cursor))));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(result)),cljs.core.cst$kw$limit.cljs$core$IFn$_invoke$arity$1(q))){
return complete_result(cljs.core.deref(result));
} else {
return cursor.continue();
}
} else {
cursor.advance(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(q));

return cljs.core.vreset_BANG_(advanced,true);
}
} else {
return complete_result(cljs.core.deref(result));
}
});})(q,result,advanced,cursor__GT_value,complete_result))
;
});
if((typeof warehouse !== 'undefined') && (typeof warehouse.indexeddb !== 'undefined') && (typeof warehouse.indexeddb.where_cond !== 'undefined')){
} else {
warehouse.indexeddb.where_cond = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("warehouse.indexeddb","where-cond"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (db,v){
return cljs.core.first(v);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (db,v){
var q = cljs.core.cst$kw$idb_SLASH_q.cljs$core$IFn$_invoke$arity$1(db);
var store = cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db);
var open_cursor = warehouse.indexeddb.open_cursor_fn(cljs.core.cst$kw$select.cljs$core$IFn$_invoke$arity$1(q),store);
var request = (open_cursor.cljs$core$IFn$_invoke$arity$0 ? open_cursor.cljs$core$IFn$_invoke$arity$0() : open_cursor.call(null));
return warehouse.indexeddb.send_cursor_result(db,request,store);
}));
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$in,(function (db,v){
var vec__11444 = v;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11444,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11444,(1),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11444,(2),null);
if(cljs.core.seq(values)){
var q = cljs.core.cst$kw$idb_SLASH_q.cljs$core$IFn$_invoke$arity$1(db);
var store = cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db);
var store_get = warehouse.indexeddb.store_get_fn(cljs.core.cst$kw$select.cljs$core$IFn$_invoke$arity$1(q),store);
var result = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var remaining = cljs.core.volatile_BANG_(cljs.core.count(values));
var seq__11447 = cljs.core.seq(values);
var chunk__11448 = null;
var count__11449 = (0);
var i__11450 = (0);
while(true){
if((i__11450 < count__11449)){
var value = chunk__11448.cljs$core$IIndexed$_nth$arity$2(null,i__11450);
var request_11497 = (store_get.cljs$core$IFn$_invoke$arity$1 ? store_get.cljs$core$IFn$_invoke$arity$1(value) : store_get.call(null,value));
request_11497.onsuccess = ((function (seq__11447,chunk__11448,count__11449,i__11450,request_11497,value,q,store,store_get,result,remaining,vec__11444,_,___$1,values){
return (function (e){
var temp__5457__auto___11498 = e.target.result;
if(cljs.core.truth_(temp__5457__auto___11498)){
var res_11499 = temp__5457__auto___11498;
cljs.core._vreset_BANG_(result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(result),res_11499));
} else {
}

cljs.core._vreset_BANG_(remaining,(cljs.core._deref(remaining) - (1)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(remaining))){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__11447,chunk__11448,count__11449,i__11450,c__9423__auto__,request_11497,value,q,store,store_get,result,remaining,vec__11444,_,___$1,values){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (seq__11447,chunk__11448,count__11449,i__11450,c__9423__auto__,request_11497,value,q,store,store_get,result,remaining,vec__11444,_,___$1,values){
return (function (state_11461){
var state_val_11462 = (state_11461[(1)]);
if((state_val_11462 === (1))){
var inst_11451 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11452 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11453 = cljs.core.deref(result);
var inst_11454 = cljs.core.count(inst_11453);
var inst_11455 = cljs.core.deref(result);
var inst_11456 = [inst_11454,inst_11455];
var inst_11457 = cljs.core.PersistentHashMap.fromArrays(inst_11452,inst_11456);
var state_11461__$1 = state_11461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11461__$1,(2),inst_11451,inst_11457);
} else {
if((state_val_11462 === (2))){
var inst_11459 = (state_11461[(2)]);
var state_11461__$1 = state_11461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11461__$1,inst_11459);
} else {
return null;
}
}
});})(seq__11447,chunk__11448,count__11449,i__11450,c__9423__auto__,request_11497,value,q,store,store_get,result,remaining,vec__11444,_,___$1,values))
;
return ((function (seq__11447,chunk__11448,count__11449,i__11450,switch__9320__auto__,c__9423__auto__,request_11497,value,q,store,store_get,result,remaining,vec__11444,_,___$1,values){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11463 = [null,null,null,null,null,null,null];
(statearr_11463[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11463[(1)] = (1));

return statearr_11463;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11461){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11461);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11464){if((e11464 instanceof Object)){
var ex__9324__auto__ = e11464;
var statearr_11465_11500 = state_11461;
(statearr_11465_11500[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11461);

return cljs.core.cst$kw$recur;
} else {
throw e11464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11501 = state_11461;
state_11461 = G__11501;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11461){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(seq__11447,chunk__11448,count__11449,i__11450,switch__9320__auto__,c__9423__auto__,request_11497,value,q,store,store_get,result,remaining,vec__11444,_,___$1,values))
})();
var state__9425__auto__ = (function (){var statearr_11466 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11466[(6)] = c__9423__auto__);

return statearr_11466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(seq__11447,chunk__11448,count__11449,i__11450,c__9423__auto__,request_11497,value,q,store,store_get,result,remaining,vec__11444,_,___$1,values))
);

return c__9423__auto__;
} else {
return null;
}
});})(seq__11447,chunk__11448,count__11449,i__11450,request_11497,value,q,store,store_get,result,remaining,vec__11444,_,___$1,values))
;


var G__11502 = seq__11447;
var G__11503 = chunk__11448;
var G__11504 = count__11449;
var G__11505 = (i__11450 + (1));
seq__11447 = G__11502;
chunk__11448 = G__11503;
count__11449 = G__11504;
i__11450 = G__11505;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11447);
if(temp__5457__auto__){
var seq__11447__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11447__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11447__$1);
var G__11506 = cljs.core.chunk_rest(seq__11447__$1);
var G__11507 = c__4351__auto__;
var G__11508 = cljs.core.count(c__4351__auto__);
var G__11509 = (0);
seq__11447 = G__11506;
chunk__11448 = G__11507;
count__11449 = G__11508;
i__11450 = G__11509;
continue;
} else {
var value = cljs.core.first(seq__11447__$1);
var request_11510 = (store_get.cljs$core$IFn$_invoke$arity$1 ? store_get.cljs$core$IFn$_invoke$arity$1(value) : store_get.call(null,value));
request_11510.onsuccess = ((function (seq__11447,chunk__11448,count__11449,i__11450,request_11510,value,seq__11447__$1,temp__5457__auto__,q,store,store_get,result,remaining,vec__11444,_,___$1,values){
return (function (e){
var temp__5457__auto___11511__$1 = e.target.result;
if(cljs.core.truth_(temp__5457__auto___11511__$1)){
var res_11512 = temp__5457__auto___11511__$1;
cljs.core._vreset_BANG_(result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(result),res_11512));
} else {
}

cljs.core._vreset_BANG_(remaining,(cljs.core._deref(remaining) - (1)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(remaining))){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__11447,chunk__11448,count__11449,i__11450,c__9423__auto__,request_11510,value,seq__11447__$1,temp__5457__auto__,q,store,store_get,result,remaining,vec__11444,_,___$1,values){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (seq__11447,chunk__11448,count__11449,i__11450,c__9423__auto__,request_11510,value,seq__11447__$1,temp__5457__auto__,q,store,store_get,result,remaining,vec__11444,_,___$1,values){
return (function (state_11477){
var state_val_11478 = (state_11477[(1)]);
if((state_val_11478 === (1))){
var inst_11467 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11468 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11469 = cljs.core.deref(result);
var inst_11470 = cljs.core.count(inst_11469);
var inst_11471 = cljs.core.deref(result);
var inst_11472 = [inst_11470,inst_11471];
var inst_11473 = cljs.core.PersistentHashMap.fromArrays(inst_11468,inst_11472);
var state_11477__$1 = state_11477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11477__$1,(2),inst_11467,inst_11473);
} else {
if((state_val_11478 === (2))){
var inst_11475 = (state_11477[(2)]);
var state_11477__$1 = state_11477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11477__$1,inst_11475);
} else {
return null;
}
}
});})(seq__11447,chunk__11448,count__11449,i__11450,c__9423__auto__,request_11510,value,seq__11447__$1,temp__5457__auto__,q,store,store_get,result,remaining,vec__11444,_,___$1,values))
;
return ((function (seq__11447,chunk__11448,count__11449,i__11450,switch__9320__auto__,c__9423__auto__,request_11510,value,seq__11447__$1,temp__5457__auto__,q,store,store_get,result,remaining,vec__11444,_,___$1,values){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11479 = [null,null,null,null,null,null,null];
(statearr_11479[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11479[(1)] = (1));

return statearr_11479;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11477){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11477);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11480){if((e11480 instanceof Object)){
var ex__9324__auto__ = e11480;
var statearr_11481_11513 = state_11477;
(statearr_11481_11513[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11477);

return cljs.core.cst$kw$recur;
} else {
throw e11480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11514 = state_11477;
state_11477 = G__11514;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11477){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(seq__11447,chunk__11448,count__11449,i__11450,switch__9320__auto__,c__9423__auto__,request_11510,value,seq__11447__$1,temp__5457__auto__,q,store,store_get,result,remaining,vec__11444,_,___$1,values))
})();
var state__9425__auto__ = (function (){var statearr_11482 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11482[(6)] = c__9423__auto__);

return statearr_11482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(seq__11447,chunk__11448,count__11449,i__11450,c__9423__auto__,request_11510,value,seq__11447__$1,temp__5457__auto__,q,store,store_get,result,remaining,vec__11444,_,___$1,values))
);

return c__9423__auto__;
} else {
return null;
}
});})(seq__11447,chunk__11448,count__11449,i__11450,request_11510,value,seq__11447__$1,temp__5457__auto__,q,store,store_get,result,remaining,vec__11444,_,___$1,values))
;


var G__11515 = cljs.core.next(seq__11447__$1);
var G__11516 = null;
var G__11517 = (0);
var G__11518 = (0);
seq__11447 = G__11515;
chunk__11448 = G__11516;
count__11449 = G__11517;
i__11450 = G__11518;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,vec__11444,_,___$1,values){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,vec__11444,_,___$1,values){
return (function (state_11491){
var state_val_11492 = (state_11491[(1)]);
if((state_val_11492 === (1))){
var inst_11483 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11484 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11485 = cljs.core.PersistentVector.EMPTY;
var inst_11486 = [(0),inst_11485];
var inst_11487 = cljs.core.PersistentHashMap.fromArrays(inst_11484,inst_11486);
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11491__$1,(2),inst_11483,inst_11487);
} else {
if((state_val_11492 === (2))){
var inst_11489 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11491__$1,inst_11489);
} else {
return null;
}
}
});})(c__9423__auto__,vec__11444,_,___$1,values))
;
return ((function (switch__9320__auto__,c__9423__auto__,vec__11444,_,___$1,values){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11493 = [null,null,null,null,null,null,null];
(statearr_11493[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11493[(1)] = (1));

return statearr_11493;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11491){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11491);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11494){if((e11494 instanceof Object)){
var ex__9324__auto__ = e11494;
var statearr_11495_11519 = state_11491;
(statearr_11495_11519[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11491);

return cljs.core.cst$kw$recur;
} else {
throw e11494;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11520 = state_11491;
state_11491 = G__11520;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11491){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,vec__11444,_,___$1,values))
})();
var state__9425__auto__ = (function (){var statearr_11496 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11496[(6)] = c__9423__auto__);

return statearr_11496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,vec__11444,_,___$1,values))
);

return c__9423__auto__;
}
}));
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$_EQ_,(function (db,v){
var vec__11521 = v;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11521,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11521,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11521,(2),null);
var vec__11524 = (((x instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11524,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11524,(1),null);
var index = cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db).index(cljs.core.name(column));
var key_range = IDBKeyRange.bound(value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"z"].join(''));
var result = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var request = index.openCursor(key_range);
return request.onsuccess = ((function (vec__11521,_,x,y,vec__11524,column,value,index,key_range,result,request){
return (function (e){
var temp__5455__auto__ = e.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
cljs.core._vreset_BANG_(result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(result),cursor.value.id));

return cursor.continue();
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,temp__5455__auto__,vec__11521,_,x,y,vec__11524,column,value,index,key_range,result,request){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,temp__5455__auto__,vec__11521,_,x,y,vec__11524,column,value,index,key_range,result,request){
return (function (state_11535){
var state_val_11536 = (state_11535[(1)]);
if((state_val_11536 === (1))){
var inst_11527 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11528 = [cljs.core.cst$kw$data];
var inst_11529 = cljs.core.deref(result);
var inst_11530 = [inst_11529];
var inst_11531 = cljs.core.PersistentHashMap.fromArrays(inst_11528,inst_11530);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11535__$1,(2),inst_11527,inst_11531);
} else {
if((state_val_11536 === (2))){
var inst_11533 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11535__$1,inst_11533);
} else {
return null;
}
}
});})(c__9423__auto__,temp__5455__auto__,vec__11521,_,x,y,vec__11524,column,value,index,key_range,result,request))
;
return ((function (switch__9320__auto__,c__9423__auto__,temp__5455__auto__,vec__11521,_,x,y,vec__11524,column,value,index,key_range,result,request){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11537 = [null,null,null,null,null,null,null];
(statearr_11537[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11537[(1)] = (1));

return statearr_11537;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11535){
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
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11535){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,temp__5455__auto__,vec__11521,_,x,y,vec__11524,column,value,index,key_range,result,request))
})();
var state__9425__auto__ = (function (){var statearr_11540 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11540[(6)] = c__9423__auto__);

return statearr_11540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,temp__5455__auto__,vec__11521,_,x,y,vec__11524,column,value,index,key_range,result,request))
);

return c__9423__auto__;
}
});})(vec__11521,_,x,y,vec__11524,column,value,index,key_range,result,request))
;
}));
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$and,(function (db,v){
var conds = cljs.core.rest(v);
var n = cljs.core.count(conds);
var results = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var seq__11543_11593 = cljs.core.seq(conds);
var chunk__11544_11594 = null;
var count__11545_11595 = (0);
var i__11546_11596 = (0);
while(true){
if((i__11546_11596 < count__11545_11595)){
var cond_11597 = chunk__11544_11594.cljs$core$IIndexed$_nth$arity$2(null,i__11546_11596);
var G__11547_11598 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$idb_SLASH_ch,ch);
var G__11548_11599 = cond_11597;
(warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11547_11598,G__11548_11599) : warehouse.indexeddb.where_cond.call(null,G__11547_11598,G__11548_11599));


var G__11600 = seq__11543_11593;
var G__11601 = chunk__11544_11594;
var G__11602 = count__11545_11595;
var G__11603 = (i__11546_11596 + (1));
seq__11543_11593 = G__11600;
chunk__11544_11594 = G__11601;
count__11545_11595 = G__11602;
i__11546_11596 = G__11603;
continue;
} else {
var temp__5457__auto___11604 = cljs.core.seq(seq__11543_11593);
if(temp__5457__auto___11604){
var seq__11543_11605__$1 = temp__5457__auto___11604;
if(cljs.core.chunked_seq_QMARK_(seq__11543_11605__$1)){
var c__4351__auto___11606 = cljs.core.chunk_first(seq__11543_11605__$1);
var G__11607 = cljs.core.chunk_rest(seq__11543_11605__$1);
var G__11608 = c__4351__auto___11606;
var G__11609 = cljs.core.count(c__4351__auto___11606);
var G__11610 = (0);
seq__11543_11593 = G__11607;
chunk__11544_11594 = G__11608;
count__11545_11595 = G__11609;
i__11546_11596 = G__11610;
continue;
} else {
var cond_11611 = cljs.core.first(seq__11543_11605__$1);
var G__11549_11612 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$idb_SLASH_ch,ch);
var G__11550_11613 = cond_11611;
(warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11549_11612,G__11550_11613) : warehouse.indexeddb.where_cond.call(null,G__11549_11612,G__11550_11613));


var G__11614 = cljs.core.next(seq__11543_11605__$1);
var G__11615 = null;
var G__11616 = (0);
var G__11617 = (0);
seq__11543_11593 = G__11614;
chunk__11544_11594 = G__11615;
count__11545_11595 = G__11616;
i__11546_11596 = G__11617;
continue;
}
} else {
}
}
break;
}

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,conds,n,results,ch){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,conds,n,results,ch){
return (function (state_11579){
var state_val_11580 = (state_11579[(1)]);
if((state_val_11580 === (1))){
var state_11579__$1 = state_11579;
var statearr_11581_11618 = state_11579__$1;
(statearr_11581_11618[(2)] = null);

(statearr_11581_11618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11580 === (2))){
var inst_11552 = cljs.core._deref(results);
var state_11579__$1 = (function (){var statearr_11582 = state_11579;
(statearr_11582[(7)] = inst_11552);

return statearr_11582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11579__$1,(4),ch);
} else {
if((state_val_11580 === (3))){
var inst_11577 = (state_11579[(2)]);
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11579__$1,inst_11577);
} else {
if((state_val_11580 === (4))){
var inst_11552 = (state_11579[(7)]);
var inst_11554 = (state_11579[(2)]);
var inst_11555 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_11554);
var inst_11556 = cljs.core.set(inst_11555);
var inst_11557 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_11552,inst_11556);
var inst_11558 = cljs.core._vreset_BANG_(results,inst_11557);
var inst_11559 = cljs.core.deref(results);
var inst_11560 = cljs.core.count(inst_11559);
var inst_11561 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,inst_11560);
var state_11579__$1 = (function (){var statearr_11583 = state_11579;
(statearr_11583[(8)] = inst_11558);

return statearr_11583;
})();
if(inst_11561){
var statearr_11584_11619 = state_11579__$1;
(statearr_11584_11619[(1)] = (5));

} else {
var statearr_11585_11620 = state_11579__$1;
(statearr_11585_11620[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11580 === (5))){
var inst_11563 = cljs.core.deref(results);
var inst_11564 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,inst_11563);
var inst_11565 = cljs.core.vec(inst_11564);
var inst_11566 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11567 = [cljs.core.cst$kw$data];
var inst_11568 = [inst_11565];
var inst_11569 = cljs.core.PersistentHashMap.fromArrays(inst_11567,inst_11568);
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11579__$1,(8),inst_11566,inst_11569);
} else {
if((state_val_11580 === (6))){
var state_11579__$1 = state_11579;
var statearr_11586_11621 = state_11579__$1;
(statearr_11586_11621[(2)] = null);

(statearr_11586_11621[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11580 === (7))){
var inst_11575 = (state_11579[(2)]);
var state_11579__$1 = state_11579;
var statearr_11587_11622 = state_11579__$1;
(statearr_11587_11622[(2)] = inst_11575);

(statearr_11587_11622[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11580 === (8))){
var inst_11571 = (state_11579[(2)]);
var state_11579__$1 = state_11579;
var statearr_11588_11623 = state_11579__$1;
(statearr_11588_11623[(2)] = inst_11571);

(statearr_11588_11623[(1)] = (7));


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
});})(c__9423__auto__,conds,n,results,ch))
;
return ((function (switch__9320__auto__,c__9423__auto__,conds,n,results,ch){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11589 = [null,null,null,null,null,null,null,null,null];
(statearr_11589[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11589[(1)] = (1));

return statearr_11589;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11579){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11579);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11590){if((e11590 instanceof Object)){
var ex__9324__auto__ = e11590;
var statearr_11591_11624 = state_11579;
(statearr_11591_11624[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11579);

return cljs.core.cst$kw$recur;
} else {
throw e11590;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11625 = state_11579;
state_11579 = G__11625;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11579){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,conds,n,results,ch))
})();
var state__9425__auto__ = (function (){var statearr_11592 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11592[(6)] = c__9423__auto__);

return statearr_11592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,conds,n,results,ch))
);

return c__9423__auto__;
}));
warehouse.indexeddb.query = (function warehouse$indexeddb$query(db,q){
return warehouse.indexeddb.open_request(db,(function (request,ch){
var store_name = cljs.core.name(cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(q));
var idb = request.result;
var tx = idb.transaction(store_name,"readonly");
var store = tx.objectStore(store_name);
var cond_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$idb_SLASH_store,store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$idb_SLASH_ch,ch,cljs.core.cst$kw$idb_SLASH_q,q], 0));
var G__11626 = cond_db;
var G__11627 = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q);
return (warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11626,G__11627) : warehouse.indexeddb.where_cond.call(null,G__11626,G__11627));
}));
});
