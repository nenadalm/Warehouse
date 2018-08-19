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
return cursor.primaryKey;
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
warehouse.indexeddb.open_cursor_fn = (function warehouse$indexeddb$open_cursor_fn(select,store){
return (function (){var pred__11414 = cljs.core._EQ_;
var expr__11415 = select;
if(cljs.core.truth_((function (){var G__11417 = cljs.core.cst$kw$idb_SLASH_key;
var G__11418 = expr__11415;
return (pred__11414.cljs$core$IFn$_invoke$arity$2 ? pred__11414.cljs$core$IFn$_invoke$arity$2(G__11417,G__11418) : pred__11414.call(null,G__11417,G__11418));
})())){
return store.openKeyCursor;
} else {
if(cljs.core.truth_((function (){var G__11419 = cljs.core.cst$kw$idb_SLASH_value;
var G__11420 = expr__11415;
return (pred__11414.cljs$core$IFn$_invoke$arity$2 ? pred__11414.cljs$core$IFn$_invoke$arity$2(G__11419,G__11420) : pred__11414.call(null,G__11419,G__11420));
})())){
return store.openCursor;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11415)].join('')));
}
}
})().bind(store);
});
warehouse.indexeddb.count_records = (function warehouse$indexeddb$count_records(source,query,f){
var request = source.count(query);
return request.onsuccess = ((function (request){
return (function (e){
var G__11421 = e.target.result;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11421) : f.call(null,G__11421));
});})(request))
;
});
warehouse.indexeddb.send_cursor_result = (function warehouse$indexeddb$send_cursor_result(var_args){
var G__11423 = arguments.length;
switch (G__11423) {
case 3:
return warehouse.indexeddb.send_cursor_result.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return warehouse.indexeddb.send_cursor_result.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

warehouse.indexeddb.send_cursor_result.cljs$core$IFn$_invoke$arity$3 = (function (db,request,source){
return warehouse.indexeddb.send_cursor_result.cljs$core$IFn$_invoke$arity$4(db,request,source,null);
});

warehouse.indexeddb.send_cursor_result.cljs$core$IFn$_invoke$arity$4 = (function (db,request,source,query){
var q = cljs.core.cst$kw$idb_SLASH_q.cljs$core$IFn$_invoke$arity$1(db);
var result = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var advanced = cljs.core.volatile_BANG_(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$2(q,(0))));
var cursor__GT_value = warehouse.indexeddb.cursor__GT_value_fn(cljs.core.cst$kw$select.cljs$core$IFn$_invoke$arity$1(q));
var complete_result = ((function (q,result,advanced,cursor__GT_value){
return (function (result__$1){
return warehouse.indexeddb.count_records(source,query,((function (q,result,advanced,cursor__GT_value){
return (function (cnt){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,q,result,advanced,cursor__GT_value){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,q,result,advanced,cursor__GT_value){
return (function (state_11431){
var state_val_11432 = (state_11431[(1)]);
if((state_val_11432 === (1))){
var inst_11424 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11425 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11426 = [cnt,result__$1];
var inst_11427 = cljs.core.PersistentHashMap.fromArrays(inst_11425,inst_11426);
var state_11431__$1 = state_11431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11431__$1,(2),inst_11424,inst_11427);
} else {
if((state_val_11432 === (2))){
var inst_11429 = (state_11431[(2)]);
var state_11431__$1 = state_11431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11431__$1,inst_11429);
} else {
return null;
}
}
});})(c__9423__auto__,q,result,advanced,cursor__GT_value))
;
return ((function (switch__9320__auto__,c__9423__auto__,q,result,advanced,cursor__GT_value){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11433 = [null,null,null,null,null,null,null];
(statearr_11433[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11433[(1)] = (1));

return statearr_11433;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11431){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11431);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11434){if((e11434 instanceof Object)){
var ex__9324__auto__ = e11434;
var statearr_11435_11438 = state_11431;
(statearr_11435_11438[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11431);

return cljs.core.cst$kw$recur;
} else {
throw e11434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11439 = state_11431;
state_11431 = G__11439;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11431){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,q,result,advanced,cursor__GT_value))
})();
var state__9425__auto__ = (function (){var statearr_11436 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11436[(6)] = c__9423__auto__);

return statearr_11436;
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

warehouse.indexeddb.send_cursor_result.cljs$lang$maxFixedArity = 4;

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
return warehouse.indexeddb.send_cursor_result.cljs$core$IFn$_invoke$arity$3(db,request,store);
}));
/**
 * Returns channel that will return, at most, `n` items from `ch`.
 */
warehouse.indexeddb.take_n = (function warehouse$indexeddb$take_n(ch,n){
var results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,results){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,results){
return (function (state_11456){
var state_val_11457 = (state_11456[(1)]);
if((state_val_11457 === (1))){
var state_11456__$1 = state_11456;
var statearr_11458_11469 = state_11456__$1;
(statearr_11458_11469[(2)] = null);

(statearr_11458_11469[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11457 === (2))){
var inst_11441 = cljs.core.deref(results);
var inst_11442 = cljs.core.count(inst_11441);
var inst_11443 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,inst_11442);
var state_11456__$1 = state_11456;
if(inst_11443){
var statearr_11459_11470 = state_11456__$1;
(statearr_11459_11470[(1)] = (4));

} else {
var statearr_11460_11471 = state_11456__$1;
(statearr_11460_11471[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11457 === (3))){
var inst_11454 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11456__$1,inst_11454);
} else {
if((state_val_11457 === (4))){
var inst_11445 = cljs.core.deref(results);
var state_11456__$1 = state_11456;
var statearr_11461_11472 = state_11456__$1;
(statearr_11461_11472[(2)] = inst_11445);

(statearr_11461_11472[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11457 === (5))){
var state_11456__$1 = state_11456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11456__$1,(7),ch);
} else {
if((state_val_11457 === (6))){
var inst_11452 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11462_11473 = state_11456__$1;
(statearr_11462_11473[(2)] = inst_11452);

(statearr_11462_11473[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11457 === (7))){
var inst_11448 = (state_11456[(2)]);
var inst_11449 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,inst_11448);
var state_11456__$1 = (function (){var statearr_11463 = state_11456;
(statearr_11463[(7)] = inst_11449);

return statearr_11463;
})();
var statearr_11464_11474 = state_11456__$1;
(statearr_11464_11474[(2)] = null);

(statearr_11464_11474[(1)] = (2));


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
});})(c__9423__auto__,results))
;
return ((function (switch__9320__auto__,c__9423__auto__,results){
return (function() {
var warehouse$indexeddb$take_n_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$take_n_$_state_machine__9321__auto____0 = (function (){
var statearr_11465 = [null,null,null,null,null,null,null,null];
(statearr_11465[(0)] = warehouse$indexeddb$take_n_$_state_machine__9321__auto__);

(statearr_11465[(1)] = (1));

return statearr_11465;
});
var warehouse$indexeddb$take_n_$_state_machine__9321__auto____1 = (function (state_11456){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11456);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11466){if((e11466 instanceof Object)){
var ex__9324__auto__ = e11466;
var statearr_11467_11475 = state_11456;
(statearr_11467_11475[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11456);

return cljs.core.cst$kw$recur;
} else {
throw e11466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11476 = state_11456;
state_11456 = G__11476;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$take_n_$_state_machine__9321__auto__ = function(state_11456){
switch(arguments.length){
case 0:
return warehouse$indexeddb$take_n_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$take_n_$_state_machine__9321__auto____1.call(this,state_11456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$take_n_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$take_n_$_state_machine__9321__auto____0;
warehouse$indexeddb$take_n_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$take_n_$_state_machine__9321__auto____1;
return warehouse$indexeddb$take_n_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,results))
})();
var state__9425__auto__ = (function (){var statearr_11468 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11468[(6)] = c__9423__auto__);

return statearr_11468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,results))
);

return c__9423__auto__;
});
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$in,(function (db,v){
var vec__11478 = v;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11478,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11478,(1),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11478,(2),null);
var n = cljs.core.count(values);
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var seq__11481_11510 = cljs.core.seq(values);
var chunk__11482_11511 = null;
var count__11483_11512 = (0);
var i__11484_11513 = (0);
while(true){
if((i__11484_11513 < count__11483_11512)){
var value_11514 = chunk__11482_11511.cljs$core$IIndexed$_nth$arity$2(null,i__11484_11513);
var G__11485_11515 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$idb_SLASH_ch,ch);
var G__11486_11516 = (new cljs.core.List(null,cljs.core.cst$sym$_EQ_,(new cljs.core.List(null,col,(new cljs.core.List(null,value_11514,null,(1),null)),(2),null)),(3),null));
(warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11485_11515,G__11486_11516) : warehouse.indexeddb.where_cond.call(null,G__11485_11515,G__11486_11516));


var G__11517 = seq__11481_11510;
var G__11518 = chunk__11482_11511;
var G__11519 = count__11483_11512;
var G__11520 = (i__11484_11513 + (1));
seq__11481_11510 = G__11517;
chunk__11482_11511 = G__11518;
count__11483_11512 = G__11519;
i__11484_11513 = G__11520;
continue;
} else {
var temp__5457__auto___11521 = cljs.core.seq(seq__11481_11510);
if(temp__5457__auto___11521){
var seq__11481_11522__$1 = temp__5457__auto___11521;
if(cljs.core.chunked_seq_QMARK_(seq__11481_11522__$1)){
var c__4351__auto___11523 = cljs.core.chunk_first(seq__11481_11522__$1);
var G__11524 = cljs.core.chunk_rest(seq__11481_11522__$1);
var G__11525 = c__4351__auto___11523;
var G__11526 = cljs.core.count(c__4351__auto___11523);
var G__11527 = (0);
seq__11481_11510 = G__11524;
chunk__11482_11511 = G__11525;
count__11483_11512 = G__11526;
i__11484_11513 = G__11527;
continue;
} else {
var value_11528 = cljs.core.first(seq__11481_11522__$1);
var G__11487_11529 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$idb_SLASH_ch,ch);
var G__11488_11530 = (new cljs.core.List(null,cljs.core.cst$sym$_EQ_,(new cljs.core.List(null,col,(new cljs.core.List(null,value_11528,null,(1),null)),(2),null)),(3),null));
(warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11487_11529,G__11488_11530) : warehouse.indexeddb.where_cond.call(null,G__11487_11529,G__11488_11530));


var G__11531 = cljs.core.next(seq__11481_11522__$1);
var G__11532 = null;
var G__11533 = (0);
var G__11534 = (0);
seq__11481_11510 = G__11531;
chunk__11482_11511 = G__11532;
count__11483_11512 = G__11533;
i__11484_11513 = G__11534;
continue;
}
} else {
}
}
break;
}

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,vec__11478,_,col,values,n,ch){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,vec__11478,_,col,values,n,ch){
return (function (state_11504){
var state_val_11505 = (state_11504[(1)]);
if((state_val_11505 === (1))){
var inst_11489 = warehouse.indexeddb.take_n(ch,n);
var state_11504__$1 = state_11504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11504__$1,(2),inst_11489);
} else {
if((state_val_11505 === (2))){
var inst_11491 = (state_11504[(2)]);
var inst_11492 = (function (){var results = inst_11491;
return ((function (results,inst_11491,state_val_11505,c__9423__auto__,vec__11478,_,col,values,n,ch){
return (function (p1__11477_SHARP_){
return cljs.core.set(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(p1__11477_SHARP_));
});
;})(results,inst_11491,state_val_11505,c__9423__auto__,vec__11478,_,col,values,n,ch))
})();
var inst_11493 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_11492,inst_11491);
var inst_11494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,inst_11493);
var inst_11495 = cljs.core.vec(inst_11494);
var inst_11496 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11497 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11498 = cljs.core.count(inst_11495);
var inst_11499 = [inst_11498,inst_11495];
var inst_11500 = cljs.core.PersistentHashMap.fromArrays(inst_11497,inst_11499);
var state_11504__$1 = state_11504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11504__$1,(3),inst_11496,inst_11500);
} else {
if((state_val_11505 === (3))){
var inst_11502 = (state_11504[(2)]);
var state_11504__$1 = state_11504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11504__$1,inst_11502);
} else {
return null;
}
}
}
});})(c__9423__auto__,vec__11478,_,col,values,n,ch))
;
return ((function (switch__9320__auto__,c__9423__auto__,vec__11478,_,col,values,n,ch){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11506 = [null,null,null,null,null,null,null];
(statearr_11506[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11506[(1)] = (1));

return statearr_11506;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11504){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11504);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11507){if((e11507 instanceof Object)){
var ex__9324__auto__ = e11507;
var statearr_11508_11535 = state_11504;
(statearr_11508_11535[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11504);

return cljs.core.cst$kw$recur;
} else {
throw e11507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11536 = state_11504;
state_11504 = G__11536;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11504){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,vec__11478,_,col,values,n,ch))
})();
var state__9425__auto__ = (function (){var statearr_11509 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11509[(6)] = c__9423__auto__);

return statearr_11509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,vec__11478,_,col,values,n,ch))
);

return c__9423__auto__;
}));
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$_EQ_,(function (db,v){
var vec__11537 = v;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11537,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11537,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11537,(2),null);
var vec__11540 = (((x instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11540,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11540,(1),null);
var q = cljs.core.cst$kw$idb_SLASH_q.cljs$core$IFn$_invoke$arity$1(db);
var store = cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db);
var index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$idb_SLASH_key,column))?store:cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db).index(cljs.core.name(column)));
var key_range = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$idb_SLASH_key,column))?value:IDBKeyRange.only(value));
var open_cursor = warehouse.indexeddb.open_cursor_fn(cljs.core.cst$kw$select.cljs$core$IFn$_invoke$arity$1(q),index);
var request = (open_cursor.cljs$core$IFn$_invoke$arity$1 ? open_cursor.cljs$core$IFn$_invoke$arity$1(key_range) : open_cursor.call(null,key_range));
return warehouse.indexeddb.send_cursor_result.cljs$core$IFn$_invoke$arity$4(db,request,index,key_range);
}));
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$starts_DASH_with,(function (db,v){
var vec__11543 = v;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11543,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11543,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11543,(2),null);
var vec__11546 = (((x instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11546,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11546,(1),null);
var q = cljs.core.cst$kw$idb_SLASH_q.cljs$core$IFn$_invoke$arity$1(db);
var store = cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db);
var index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$idb_SLASH_key,column))?store:cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db).index(cljs.core.name(column)));
var key_range = IDBKeyRange.bound(value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"z"].join(''));
var open_cursor = warehouse.indexeddb.open_cursor_fn(cljs.core.cst$kw$select.cljs$core$IFn$_invoke$arity$1(q),index);
var request = (open_cursor.cljs$core$IFn$_invoke$arity$1 ? open_cursor.cljs$core$IFn$_invoke$arity$1(key_range) : open_cursor.call(null,key_range));
return warehouse.indexeddb.send_cursor_result.cljs$core$IFn$_invoke$arity$4(db,request,index,key_range);
}));
/**
 * Returns intersection of given records from indexeddb.
 */
warehouse.indexeddb.intersection = (function warehouse$indexeddb$intersection(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11552 = arguments.length;
var i__4532__auto___11553 = (0);
while(true){
if((i__4532__auto___11553 < len__4531__auto___11552)){
args__4534__auto__.push((arguments[i__4532__auto___11553]));

var G__11554 = (i__4532__auto___11553 + (1));
i__4532__auto___11553 = G__11554;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return warehouse.indexeddb.intersection.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

warehouse.indexeddb.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (records){
var record__GT_record_id = ((cljs.core.object_QMARK_(cljs.core.ffirst(records)))?(function (p1__11549_SHARP_){
return p1__11549_SHARP_.id;
}):cljs.core.identity);
var record_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (record__GT_record_id){
return (function (rows){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(record__GT_record_id,rows));
});})(record__GT_record_id))
,records);
var common_ids = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,record_ids);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (record__GT_record_id,record_ids,common_ids){
return (function (p1__11550_SHARP_){
return cljs.core.contains_QMARK_(common_ids,(record__GT_record_id.cljs$core$IFn$_invoke$arity$1 ? record__GT_record_id.cljs$core$IFn$_invoke$arity$1(p1__11550_SHARP_) : record__GT_record_id.call(null,p1__11550_SHARP_)));
});})(record__GT_record_id,record_ids,common_ids))
,cljs.core.first(records));
});

warehouse.indexeddb.intersection.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
warehouse.indexeddb.intersection.cljs$lang$applyTo = (function (seq11551){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11551));
});

warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$and,(function (db,v){
var conds = cljs.core.rest(v);
var n = cljs.core.count(conds);
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var seq__11555_11583 = cljs.core.seq(conds);
var chunk__11556_11584 = null;
var count__11557_11585 = (0);
var i__11558_11586 = (0);
while(true){
if((i__11558_11586 < count__11557_11585)){
var cond_11587 = chunk__11556_11584.cljs$core$IIndexed$_nth$arity$2(null,i__11558_11586);
var G__11559_11588 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$idb_SLASH_ch,ch);
var G__11560_11589 = cond_11587;
(warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11559_11588,G__11560_11589) : warehouse.indexeddb.where_cond.call(null,G__11559_11588,G__11560_11589));


var G__11590 = seq__11555_11583;
var G__11591 = chunk__11556_11584;
var G__11592 = count__11557_11585;
var G__11593 = (i__11558_11586 + (1));
seq__11555_11583 = G__11590;
chunk__11556_11584 = G__11591;
count__11557_11585 = G__11592;
i__11558_11586 = G__11593;
continue;
} else {
var temp__5457__auto___11594 = cljs.core.seq(seq__11555_11583);
if(temp__5457__auto___11594){
var seq__11555_11595__$1 = temp__5457__auto___11594;
if(cljs.core.chunked_seq_QMARK_(seq__11555_11595__$1)){
var c__4351__auto___11596 = cljs.core.chunk_first(seq__11555_11595__$1);
var G__11597 = cljs.core.chunk_rest(seq__11555_11595__$1);
var G__11598 = c__4351__auto___11596;
var G__11599 = cljs.core.count(c__4351__auto___11596);
var G__11600 = (0);
seq__11555_11583 = G__11597;
chunk__11556_11584 = G__11598;
count__11557_11585 = G__11599;
i__11558_11586 = G__11600;
continue;
} else {
var cond_11601 = cljs.core.first(seq__11555_11595__$1);
var G__11561_11602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$idb_SLASH_ch,ch);
var G__11562_11603 = cond_11601;
(warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11561_11602,G__11562_11603) : warehouse.indexeddb.where_cond.call(null,G__11561_11602,G__11562_11603));


var G__11604 = cljs.core.next(seq__11555_11595__$1);
var G__11605 = null;
var G__11606 = (0);
var G__11607 = (0);
seq__11555_11583 = G__11604;
chunk__11556_11584 = G__11605;
count__11557_11585 = G__11606;
i__11558_11586 = G__11607;
continue;
}
} else {
}
}
break;
}

var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,conds,n,ch){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,conds,n,ch){
return (function (state_11577){
var state_val_11578 = (state_11577[(1)]);
if((state_val_11578 === (1))){
var inst_11563 = warehouse.indexeddb.take_n(ch,n);
var state_11577__$1 = state_11577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11577__$1,(2),inst_11563);
} else {
if((state_val_11578 === (2))){
var inst_11565 = (state_11577[(2)]);
var inst_11566 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data,inst_11565);
var inst_11567 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(warehouse.indexeddb.intersection,inst_11566);
var inst_11568 = cljs.core.vec(inst_11567);
var inst_11569 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11570 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11571 = cljs.core.count(inst_11568);
var inst_11572 = [inst_11571,inst_11568];
var inst_11573 = cljs.core.PersistentHashMap.fromArrays(inst_11570,inst_11572);
var state_11577__$1 = state_11577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11577__$1,(3),inst_11569,inst_11573);
} else {
if((state_val_11578 === (3))){
var inst_11575 = (state_11577[(2)]);
var state_11577__$1 = state_11577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11577__$1,inst_11575);
} else {
return null;
}
}
}
});})(c__9423__auto__,conds,n,ch))
;
return ((function (switch__9320__auto__,c__9423__auto__,conds,n,ch){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11579 = [null,null,null,null,null,null,null];
(statearr_11579[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11579[(1)] = (1));

return statearr_11579;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11577){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11577);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11580){if((e11580 instanceof Object)){
var ex__9324__auto__ = e11580;
var statearr_11581_11608 = state_11577;
(statearr_11581_11608[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11577);

return cljs.core.cst$kw$recur;
} else {
throw e11580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11609 = state_11577;
state_11577 = G__11609;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11577){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,conds,n,ch))
})();
var state__9425__auto__ = (function (){var statearr_11582 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11582[(6)] = c__9423__auto__);

return statearr_11582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,conds,n,ch))
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
var G__11610 = cond_db;
var G__11611 = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q);
return (warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11610,G__11611) : warehouse.indexeddb.where_cond.call(null,G__11610,G__11611));
}));
});
