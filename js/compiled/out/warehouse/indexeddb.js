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
var store = cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db);
var request = store.count();
return request.onsuccess = ((function (store,request){
return (function (e){
var cnt = e.target.result;
var q = cljs.core.cst$kw$idb_SLASH_q.cljs$core$IFn$_invoke$arity$1(db);
var result = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var advanced = cljs.core.volatile_BANG_(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(q)));
var request__$1 = store.openCursor();
return request__$1.onsuccess = ((function (cnt,q,result,advanced,request__$1,store,request){
return (function (e__$1){
var temp__5455__auto__ = e__$1.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
if(cljs.core.truth_(cljs.core.deref(advanced))){
cljs.core._vreset_BANG_(result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(result),cursor.value));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(result)),cljs.core.cst$kw$limit.cljs$core$IFn$_invoke$arity$1(q))){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,cursor,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,cursor,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request){
return (function (state_11415){
var state_val_11416 = (state_11415[(1)]);
if((state_val_11416 === (1))){
var inst_11407 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11408 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11409 = cljs.core.deref(result);
var inst_11410 = [cnt,inst_11409];
var inst_11411 = cljs.core.PersistentHashMap.fromArrays(inst_11408,inst_11410);
var state_11415__$1 = state_11415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11415__$1,(2),inst_11407,inst_11411);
} else {
if((state_val_11416 === (2))){
var inst_11413 = (state_11415[(2)]);
var state_11415__$1 = state_11415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11415__$1,inst_11413);
} else {
return null;
}
}
});})(c__9423__auto__,cursor,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request))
;
return ((function (switch__9320__auto__,c__9423__auto__,cursor,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11417 = [null,null,null,null,null,null,null];
(statearr_11417[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11417[(1)] = (1));

return statearr_11417;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11415){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11415);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11418){if((e11418 instanceof Object)){
var ex__9324__auto__ = e11418;
var statearr_11419_11435 = state_11415;
(statearr_11419_11435[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11415);

return cljs.core.cst$kw$recur;
} else {
throw e11418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11436 = state_11415;
state_11415 = G__11436;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11415){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,cursor,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request))
})();
var state__9425__auto__ = (function (){var statearr_11420 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11420[(6)] = c__9423__auto__);

return statearr_11420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,cursor,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request))
);

return c__9423__auto__;
} else {
return cursor.continue();
}
} else {
cursor.advance(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(q));

return cljs.core.vreset_BANG_(advanced,true);
}
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request){
return (function (state_11429){
var state_val_11430 = (state_11429[(1)]);
if((state_val_11430 === (1))){
var inst_11421 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11422 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11423 = cljs.core.deref(result);
var inst_11424 = [cnt,inst_11423];
var inst_11425 = cljs.core.PersistentHashMap.fromArrays(inst_11422,inst_11424);
var state_11429__$1 = state_11429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11429__$1,(2),inst_11421,inst_11425);
} else {
if((state_val_11430 === (2))){
var inst_11427 = (state_11429[(2)]);
var state_11429__$1 = state_11429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11429__$1,inst_11427);
} else {
return null;
}
}
});})(c__9423__auto__,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request))
;
return ((function (switch__9320__auto__,c__9423__auto__,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11431 = [null,null,null,null,null,null,null];
(statearr_11431[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11431[(1)] = (1));

return statearr_11431;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11429){
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
}catch (e11432){if((e11432 instanceof Object)){
var ex__9324__auto__ = e11432;
var statearr_11433_11437 = state_11429;
(statearr_11433_11437[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11429);

return cljs.core.cst$kw$recur;
} else {
throw e11432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11438 = state_11429;
state_11429 = G__11438;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11429){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request))
})();
var state__9425__auto__ = (function (){var statearr_11434 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11434[(6)] = c__9423__auto__);

return statearr_11434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,temp__5455__auto__,cnt,q,result,advanced,request__$1,store,request))
);

return c__9423__auto__;
}
});})(cnt,q,result,advanced,request__$1,store,request))
;
});})(store,request))
;
}));
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$in,(function (db,v){
var vec__11439 = v;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11439,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11439,(1),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11439,(2),null);
if(cljs.core.seq(values)){
var store = cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db);
var result = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var remaining = cljs.core.volatile_BANG_(cljs.core.count(values));
var seq__11442 = cljs.core.seq(values);
var chunk__11443 = null;
var count__11444 = (0);
var i__11445 = (0);
while(true){
if((i__11445 < count__11444)){
var value = chunk__11443.cljs$core$IIndexed$_nth$arity$2(null,i__11445);
var request_11479 = store.get(value);
request_11479.onsuccess = ((function (seq__11442,chunk__11443,count__11444,i__11445,request_11479,value,store,result,remaining,vec__11439,_,___$1,values){
return (function (e){
var temp__5457__auto___11480 = e.target.result;
if(cljs.core.truth_(temp__5457__auto___11480)){
var res_11481 = temp__5457__auto___11480;
cljs.core._vreset_BANG_(result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(result),res_11481));
} else {
}

cljs.core._vreset_BANG_(remaining,(cljs.core._deref(remaining) - (1)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(remaining))){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__11442,chunk__11443,count__11444,i__11445,c__9423__auto__,request_11479,value,store,result,remaining,vec__11439,_,___$1,values){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (seq__11442,chunk__11443,count__11444,i__11445,c__9423__auto__,request_11479,value,store,result,remaining,vec__11439,_,___$1,values){
return (function (state_11451){
var state_val_11452 = (state_11451[(1)]);
if((state_val_11452 === (1))){
var inst_11446 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11447 = cljs.core.deref(result);
var state_11451__$1 = state_11451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11451__$1,(2),inst_11446,inst_11447);
} else {
if((state_val_11452 === (2))){
var inst_11449 = (state_11451[(2)]);
var state_11451__$1 = state_11451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11451__$1,inst_11449);
} else {
return null;
}
}
});})(seq__11442,chunk__11443,count__11444,i__11445,c__9423__auto__,request_11479,value,store,result,remaining,vec__11439,_,___$1,values))
;
return ((function (seq__11442,chunk__11443,count__11444,i__11445,switch__9320__auto__,c__9423__auto__,request_11479,value,store,result,remaining,vec__11439,_,___$1,values){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11453 = [null,null,null,null,null,null,null];
(statearr_11453[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11453[(1)] = (1));

return statearr_11453;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11451){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11451);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11454){if((e11454 instanceof Object)){
var ex__9324__auto__ = e11454;
var statearr_11455_11482 = state_11451;
(statearr_11455_11482[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11451);

return cljs.core.cst$kw$recur;
} else {
throw e11454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11483 = state_11451;
state_11451 = G__11483;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11451){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(seq__11442,chunk__11443,count__11444,i__11445,switch__9320__auto__,c__9423__auto__,request_11479,value,store,result,remaining,vec__11439,_,___$1,values))
})();
var state__9425__auto__ = (function (){var statearr_11456 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11456[(6)] = c__9423__auto__);

return statearr_11456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(seq__11442,chunk__11443,count__11444,i__11445,c__9423__auto__,request_11479,value,store,result,remaining,vec__11439,_,___$1,values))
);

return c__9423__auto__;
} else {
return null;
}
});})(seq__11442,chunk__11443,count__11444,i__11445,request_11479,value,store,result,remaining,vec__11439,_,___$1,values))
;


var G__11484 = seq__11442;
var G__11485 = chunk__11443;
var G__11486 = count__11444;
var G__11487 = (i__11445 + (1));
seq__11442 = G__11484;
chunk__11443 = G__11485;
count__11444 = G__11486;
i__11445 = G__11487;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11442);
if(temp__5457__auto__){
var seq__11442__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11442__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11442__$1);
var G__11488 = cljs.core.chunk_rest(seq__11442__$1);
var G__11489 = c__4351__auto__;
var G__11490 = cljs.core.count(c__4351__auto__);
var G__11491 = (0);
seq__11442 = G__11488;
chunk__11443 = G__11489;
count__11444 = G__11490;
i__11445 = G__11491;
continue;
} else {
var value = cljs.core.first(seq__11442__$1);
var request_11492 = store.get(value);
request_11492.onsuccess = ((function (seq__11442,chunk__11443,count__11444,i__11445,request_11492,value,seq__11442__$1,temp__5457__auto__,store,result,remaining,vec__11439,_,___$1,values){
return (function (e){
var temp__5457__auto___11493__$1 = e.target.result;
if(cljs.core.truth_(temp__5457__auto___11493__$1)){
var res_11494 = temp__5457__auto___11493__$1;
cljs.core._vreset_BANG_(result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(result),res_11494));
} else {
}

cljs.core._vreset_BANG_(remaining,(cljs.core._deref(remaining) - (1)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(remaining))){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__11442,chunk__11443,count__11444,i__11445,c__9423__auto__,request_11492,value,seq__11442__$1,temp__5457__auto__,store,result,remaining,vec__11439,_,___$1,values){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (seq__11442,chunk__11443,count__11444,i__11445,c__9423__auto__,request_11492,value,seq__11442__$1,temp__5457__auto__,store,result,remaining,vec__11439,_,___$1,values){
return (function (state_11462){
var state_val_11463 = (state_11462[(1)]);
if((state_val_11463 === (1))){
var inst_11457 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11458 = cljs.core.deref(result);
var state_11462__$1 = state_11462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11462__$1,(2),inst_11457,inst_11458);
} else {
if((state_val_11463 === (2))){
var inst_11460 = (state_11462[(2)]);
var state_11462__$1 = state_11462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11462__$1,inst_11460);
} else {
return null;
}
}
});})(seq__11442,chunk__11443,count__11444,i__11445,c__9423__auto__,request_11492,value,seq__11442__$1,temp__5457__auto__,store,result,remaining,vec__11439,_,___$1,values))
;
return ((function (seq__11442,chunk__11443,count__11444,i__11445,switch__9320__auto__,c__9423__auto__,request_11492,value,seq__11442__$1,temp__5457__auto__,store,result,remaining,vec__11439,_,___$1,values){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11464 = [null,null,null,null,null,null,null];
(statearr_11464[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11464[(1)] = (1));

return statearr_11464;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11462){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11462);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11465){if((e11465 instanceof Object)){
var ex__9324__auto__ = e11465;
var statearr_11466_11495 = state_11462;
(statearr_11466_11495[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11462);

return cljs.core.cst$kw$recur;
} else {
throw e11465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11496 = state_11462;
state_11462 = G__11496;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11462){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(seq__11442,chunk__11443,count__11444,i__11445,switch__9320__auto__,c__9423__auto__,request_11492,value,seq__11442__$1,temp__5457__auto__,store,result,remaining,vec__11439,_,___$1,values))
})();
var state__9425__auto__ = (function (){var statearr_11467 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11467[(6)] = c__9423__auto__);

return statearr_11467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(seq__11442,chunk__11443,count__11444,i__11445,c__9423__auto__,request_11492,value,seq__11442__$1,temp__5457__auto__,store,result,remaining,vec__11439,_,___$1,values))
);

return c__9423__auto__;
} else {
return null;
}
});})(seq__11442,chunk__11443,count__11444,i__11445,request_11492,value,seq__11442__$1,temp__5457__auto__,store,result,remaining,vec__11439,_,___$1,values))
;


var G__11497 = cljs.core.next(seq__11442__$1);
var G__11498 = null;
var G__11499 = (0);
var G__11500 = (0);
seq__11442 = G__11497;
chunk__11443 = G__11498;
count__11444 = G__11499;
i__11445 = G__11500;
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
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,vec__11439,_,___$1,values){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,vec__11439,_,___$1,values){
return (function (state_11473){
var state_val_11474 = (state_11473[(1)]);
if((state_val_11474 === (1))){
var inst_11468 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11469 = cljs.core.PersistentVector.EMPTY;
var state_11473__$1 = state_11473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11473__$1,(2),inst_11468,inst_11469);
} else {
if((state_val_11474 === (2))){
var inst_11471 = (state_11473[(2)]);
var state_11473__$1 = state_11473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11473__$1,inst_11471);
} else {
return null;
}
}
});})(c__9423__auto__,vec__11439,_,___$1,values))
;
return ((function (switch__9320__auto__,c__9423__auto__,vec__11439,_,___$1,values){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11475 = [null,null,null,null,null,null,null];
(statearr_11475[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11475[(1)] = (1));

return statearr_11475;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11473){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11473);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11476){if((e11476 instanceof Object)){
var ex__9324__auto__ = e11476;
var statearr_11477_11501 = state_11473;
(statearr_11477_11501[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11473);

return cljs.core.cst$kw$recur;
} else {
throw e11476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11502 = state_11473;
state_11473 = G__11502;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11473){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,vec__11439,_,___$1,values))
})();
var state__9425__auto__ = (function (){var statearr_11478 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11478[(6)] = c__9423__auto__);

return statearr_11478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,vec__11439,_,___$1,values))
);

return c__9423__auto__;
}
}));
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$_EQ_,(function (db,v){
var vec__11503 = v;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11503,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11503,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11503,(2),null);
var vec__11506 = (((x instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11506,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11506,(1),null);
var index = cljs.core.cst$kw$idb_SLASH_store.cljs$core$IFn$_invoke$arity$1(db).index(cljs.core.name(column));
var key_range = IDBKeyRange.bound(value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"z"].join(''));
var result = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var request = index.openCursor(key_range);
return request.onsuccess = ((function (vec__11503,_,x,y,vec__11506,column,value,index,key_range,result,request){
return (function (e){
var temp__5455__auto__ = e.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
cljs.core._vreset_BANG_(result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(result),cursor.value.id));

return cursor.continue();
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,temp__5455__auto__,vec__11503,_,x,y,vec__11506,column,value,index,key_range,result,request){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,temp__5455__auto__,vec__11503,_,x,y,vec__11506,column,value,index,key_range,result,request){
return (function (state_11514){
var state_val_11515 = (state_11514[(1)]);
if((state_val_11515 === (1))){
var inst_11509 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var inst_11510 = cljs.core.deref(result);
var state_11514__$1 = state_11514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11514__$1,(2),inst_11509,inst_11510);
} else {
if((state_val_11515 === (2))){
var inst_11512 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11514__$1,inst_11512);
} else {
return null;
}
}
});})(c__9423__auto__,temp__5455__auto__,vec__11503,_,x,y,vec__11506,column,value,index,key_range,result,request))
;
return ((function (switch__9320__auto__,c__9423__auto__,temp__5455__auto__,vec__11503,_,x,y,vec__11506,column,value,index,key_range,result,request){
return (function() {
var warehouse$indexeddb$state_machine__9321__auto__ = null;
var warehouse$indexeddb$state_machine__9321__auto____0 = (function (){
var statearr_11516 = [null,null,null,null,null,null,null];
(statearr_11516[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11516[(1)] = (1));

return statearr_11516;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11514){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11514);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11517){if((e11517 instanceof Object)){
var ex__9324__auto__ = e11517;
var statearr_11518_11520 = state_11514;
(statearr_11518_11520[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11514);

return cljs.core.cst$kw$recur;
} else {
throw e11517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11521 = state_11514;
state_11514 = G__11521;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11514){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,temp__5455__auto__,vec__11503,_,x,y,vec__11506,column,value,index,key_range,result,request))
})();
var state__9425__auto__ = (function (){var statearr_11519 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11519[(6)] = c__9423__auto__);

return statearr_11519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,temp__5455__auto__,vec__11503,_,x,y,vec__11506,column,value,index,key_range,result,request))
);

return c__9423__auto__;
}
});})(vec__11503,_,x,y,vec__11506,column,value,index,key_range,result,request))
;
}));
warehouse.indexeddb.where_cond.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$and,(function (db,v){
var conds = cljs.core.rest(v);
var n = cljs.core.count(conds);
var results = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var seq__11522_11568 = cljs.core.seq(conds);
var chunk__11523_11569 = null;
var count__11524_11570 = (0);
var i__11525_11571 = (0);
while(true){
if((i__11525_11571 < count__11524_11570)){
var cond_11572 = chunk__11523_11569.cljs$core$IIndexed$_nth$arity$2(null,i__11525_11571);
var G__11526_11573 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$idb_SLASH_ch,ch);
var G__11527_11574 = cond_11572;
(warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11526_11573,G__11527_11574) : warehouse.indexeddb.where_cond.call(null,G__11526_11573,G__11527_11574));


var G__11575 = seq__11522_11568;
var G__11576 = chunk__11523_11569;
var G__11577 = count__11524_11570;
var G__11578 = (i__11525_11571 + (1));
seq__11522_11568 = G__11575;
chunk__11523_11569 = G__11576;
count__11524_11570 = G__11577;
i__11525_11571 = G__11578;
continue;
} else {
var temp__5457__auto___11579 = cljs.core.seq(seq__11522_11568);
if(temp__5457__auto___11579){
var seq__11522_11580__$1 = temp__5457__auto___11579;
if(cljs.core.chunked_seq_QMARK_(seq__11522_11580__$1)){
var c__4351__auto___11581 = cljs.core.chunk_first(seq__11522_11580__$1);
var G__11582 = cljs.core.chunk_rest(seq__11522_11580__$1);
var G__11583 = c__4351__auto___11581;
var G__11584 = cljs.core.count(c__4351__auto___11581);
var G__11585 = (0);
seq__11522_11568 = G__11582;
chunk__11523_11569 = G__11583;
count__11524_11570 = G__11584;
i__11525_11571 = G__11585;
continue;
} else {
var cond_11586 = cljs.core.first(seq__11522_11580__$1);
var G__11528_11587 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$idb_SLASH_ch,ch);
var G__11529_11588 = cond_11586;
(warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11528_11587,G__11529_11588) : warehouse.indexeddb.where_cond.call(null,G__11528_11587,G__11529_11588));


var G__11589 = cljs.core.next(seq__11522_11580__$1);
var G__11590 = null;
var G__11591 = (0);
var G__11592 = (0);
seq__11522_11568 = G__11589;
chunk__11523_11569 = G__11590;
count__11524_11570 = G__11591;
i__11525_11571 = G__11592;
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
return (function (state_11554){
var state_val_11555 = (state_11554[(1)]);
if((state_val_11555 === (1))){
var state_11554__$1 = state_11554;
var statearr_11556_11593 = state_11554__$1;
(statearr_11556_11593[(2)] = null);

(statearr_11556_11593[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11555 === (2))){
var inst_11531 = cljs.core._deref(results);
var state_11554__$1 = (function (){var statearr_11557 = state_11554;
(statearr_11557[(7)] = inst_11531);

return statearr_11557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11554__$1,(4),ch);
} else {
if((state_val_11555 === (3))){
var inst_11552 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11554__$1,inst_11552);
} else {
if((state_val_11555 === (4))){
var inst_11531 = (state_11554[(7)]);
var inst_11533 = (state_11554[(2)]);
var inst_11534 = cljs.core.set(inst_11533);
var inst_11535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_11531,inst_11534);
var inst_11536 = cljs.core._vreset_BANG_(results,inst_11535);
var inst_11537 = cljs.core.deref(results);
var inst_11538 = cljs.core.count(inst_11537);
var inst_11539 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,inst_11538);
var state_11554__$1 = (function (){var statearr_11558 = state_11554;
(statearr_11558[(8)] = inst_11536);

return statearr_11558;
})();
if(inst_11539){
var statearr_11559_11594 = state_11554__$1;
(statearr_11559_11594[(1)] = (5));

} else {
var statearr_11560_11595 = state_11554__$1;
(statearr_11560_11595[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11555 === (5))){
var inst_11541 = cljs.core.deref(results);
var inst_11542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,inst_11541);
var inst_11543 = cljs.core.vec(inst_11542);
var inst_11544 = cljs.core.cst$kw$idb_SLASH_ch.cljs$core$IFn$_invoke$arity$1(db);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11554__$1,(8),inst_11544,inst_11543);
} else {
if((state_val_11555 === (6))){
var state_11554__$1 = state_11554;
var statearr_11561_11596 = state_11554__$1;
(statearr_11561_11596[(2)] = null);

(statearr_11561_11596[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11555 === (7))){
var inst_11550 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11562_11597 = state_11554__$1;
(statearr_11562_11597[(2)] = inst_11550);

(statearr_11562_11597[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11555 === (8))){
var inst_11546 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11563_11598 = state_11554__$1;
(statearr_11563_11598[(2)] = inst_11546);

(statearr_11563_11598[(1)] = (7));


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
var statearr_11564 = [null,null,null,null,null,null,null,null,null];
(statearr_11564[(0)] = warehouse$indexeddb$state_machine__9321__auto__);

(statearr_11564[(1)] = (1));

return statearr_11564;
});
var warehouse$indexeddb$state_machine__9321__auto____1 = (function (state_11554){
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
}catch (e11565){if((e11565 instanceof Object)){
var ex__9324__auto__ = e11565;
var statearr_11566_11599 = state_11554;
(statearr_11566_11599[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11554);

return cljs.core.cst$kw$recur;
} else {
throw e11565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11600 = state_11554;
state_11554 = G__11600;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$state_machine__9321__auto__ = function(state_11554){
switch(arguments.length){
case 0:
return warehouse$indexeddb$state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$state_machine__9321__auto____1.call(this,state_11554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$state_machine__9321__auto____0;
warehouse$indexeddb$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$state_machine__9321__auto____1;
return warehouse$indexeddb$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,conds,n,results,ch))
})();
var state__9425__auto__ = (function (){var statearr_11567 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11567[(6)] = c__9423__auto__);

return statearr_11567;
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
var G__11601 = cond_db;
var G__11602 = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q);
return (warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2 ? warehouse.indexeddb.where_cond.cljs$core$IFn$_invoke$arity$2(G__11601,G__11602) : warehouse.indexeddb.where_cond.call(null,G__11601,G__11602));
}));
});
