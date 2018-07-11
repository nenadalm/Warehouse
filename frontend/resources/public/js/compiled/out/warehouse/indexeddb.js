// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.indexeddb');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
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
var tx = db__$1.transaction(store,"readwrite");
var store__$1 = tx.objectStore(store);
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

return tx.oncomplete = ((function (db__$1,tx,store__$1){
return (function (){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,db__$1,tx,store__$1){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,db__$1,tx,store__$1){
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
});})(c__9423__auto__,db__$1,tx,store__$1))
;
return ((function (switch__9320__auto__,c__9423__auto__,db__$1,tx,store__$1){
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
;})(switch__9320__auto__,c__9423__auto__,db__$1,tx,store__$1))
})();
var state__9425__auto__ = (function (){var statearr_11383 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11383[(6)] = c__9423__auto__);

return statearr_11383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,db__$1,tx,store__$1))
);

return c__9423__auto__;
});})(db__$1,tx,store__$1))
;
}));
});
warehouse.indexeddb.load_page = (function warehouse$indexeddb$load_page(db,store,p__11407){
var map__11408 = p__11407;
var map__11408__$1 = ((((!((map__11408 == null)))?(((((map__11408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11408):map__11408);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11408__$1,cljs.core.cst$kw$offset);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11408__$1,cljs.core.cst$kw$limit);
return warehouse.indexeddb.open_request(db,((function (map__11408,map__11408__$1,offset,limit){
return (function (request,ch){
var db__$1 = request.result;
var tx = db__$1.transaction(store,"readonly");
var store__$1 = tx.objectStore(store);
var request__$1 = store__$1.count();
return request__$1.onsuccess = ((function (db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit){
return (function (e){
var cnt = e.target.result;
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var advanced = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset));
var request__$2 = store__$1.openCursor();
return request__$2.onsuccess = ((function (cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit){
return (function (e__$1){
var temp__5455__auto__ = e__$1.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
if(cljs.core.deref(advanced) === true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.conj,cursor.value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(result)),limit)){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,cursor,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,cursor,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit){
return (function (state_11417){
var state_val_11418 = (state_11417[(1)]);
if((state_val_11418 === (1))){
var inst_11410 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11411 = cljs.core.deref(result);
var inst_11412 = [cnt,inst_11411];
var inst_11413 = cljs.core.PersistentHashMap.fromArrays(inst_11410,inst_11412);
var state_11417__$1 = state_11417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11417__$1,(2),ch,inst_11413);
} else {
if((state_val_11418 === (2))){
var inst_11415 = (state_11417[(2)]);
var state_11417__$1 = state_11417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11417__$1,inst_11415);
} else {
return null;
}
}
});})(c__9423__auto__,cursor,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit))
;
return ((function (switch__9320__auto__,c__9423__auto__,cursor,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit){
return (function() {
var warehouse$indexeddb$load_page_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_page_$_state_machine__9321__auto____0 = (function (){
var statearr_11419 = [null,null,null,null,null,null,null];
(statearr_11419[(0)] = warehouse$indexeddb$load_page_$_state_machine__9321__auto__);

(statearr_11419[(1)] = (1));

return statearr_11419;
});
var warehouse$indexeddb$load_page_$_state_machine__9321__auto____1 = (function (state_11417){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11417);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11420){if((e11420 instanceof Object)){
var ex__9324__auto__ = e11420;
var statearr_11421_11436 = state_11417;
(statearr_11421_11436[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11417);

return cljs.core.cst$kw$recur;
} else {
throw e11420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11437 = state_11417;
state_11417 = G__11437;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_page_$_state_machine__9321__auto__ = function(state_11417){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_page_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_page_$_state_machine__9321__auto____1.call(this,state_11417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_page_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_page_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_page_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_page_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_page_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,cursor,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit))
})();
var state__9425__auto__ = (function (){var statearr_11422 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11422[(6)] = c__9423__auto__);

return statearr_11422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,cursor,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit))
);

return c__9423__auto__;
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return cljs.core.reset_BANG_(advanced,true);
}
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit){
return (function (state_11430){
var state_val_11431 = (state_11430[(1)]);
if((state_val_11431 === (1))){
var inst_11423 = [cljs.core.cst$kw$count,cljs.core.cst$kw$data];
var inst_11424 = cljs.core.deref(result);
var inst_11425 = [cnt,inst_11424];
var inst_11426 = cljs.core.PersistentHashMap.fromArrays(inst_11423,inst_11425);
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11430__$1,(2),ch,inst_11426);
} else {
if((state_val_11431 === (2))){
var inst_11428 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11430__$1,inst_11428);
} else {
return null;
}
}
});})(c__9423__auto__,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit))
;
return ((function (switch__9320__auto__,c__9423__auto__,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit){
return (function() {
var warehouse$indexeddb$load_page_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_page_$_state_machine__9321__auto____0 = (function (){
var statearr_11432 = [null,null,null,null,null,null,null];
(statearr_11432[(0)] = warehouse$indexeddb$load_page_$_state_machine__9321__auto__);

(statearr_11432[(1)] = (1));

return statearr_11432;
});
var warehouse$indexeddb$load_page_$_state_machine__9321__auto____1 = (function (state_11430){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11430);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11433){if((e11433 instanceof Object)){
var ex__9324__auto__ = e11433;
var statearr_11434_11438 = state_11430;
(statearr_11434_11438[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11430);

return cljs.core.cst$kw$recur;
} else {
throw e11433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11439 = state_11430;
state_11430 = G__11439;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_page_$_state_machine__9321__auto__ = function(state_11430){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_page_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_page_$_state_machine__9321__auto____1.call(this,state_11430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_page_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_page_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_page_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_page_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_page_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit))
})();
var state__9425__auto__ = (function (){var statearr_11435 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11435[(6)] = c__9423__auto__);

return statearr_11435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,temp__5455__auto__,cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit))
);

return c__9423__auto__;
}
});})(cnt,result,advanced,request__$2,db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit))
;
});})(db__$1,tx,store__$1,request__$1,map__11408,map__11408__$1,offset,limit))
;
});})(map__11408,map__11408__$1,offset,limit))
);
});
warehouse.indexeddb.load_by_ids = (function warehouse$indexeddb$load_by_ids(db,store,p__11440){
var map__11441 = p__11440;
var map__11441__$1 = ((((!((map__11441 == null)))?(((((map__11441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11441):map__11441);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11441__$1,cljs.core.cst$kw$ids);
if(cljs.core.empty_QMARK_(ids)){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,map__11441,map__11441__$1,ids){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,map__11441,map__11441__$1,ids){
return (function (state_11445){
var state_val_11446 = (state_11445[(1)]);
if((state_val_11446 === (1))){
var inst_11443 = cljs.core.PersistentVector.EMPTY;
var state_11445__$1 = state_11445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11445__$1,inst_11443);
} else {
return null;
}
});})(c__9423__auto__,map__11441,map__11441__$1,ids))
;
return ((function (switch__9320__auto__,c__9423__auto__,map__11441,map__11441__$1,ids){
return (function() {
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11447 = [null,null,null,null,null,null,null];
(statearr_11447[(0)] = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__);

(statearr_11447[(1)] = (1));

return statearr_11447;
});
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1 = (function (state_11445){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11445);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11448){if((e11448 instanceof Object)){
var ex__9324__auto__ = e11448;
var statearr_11449_11475 = state_11445;
(statearr_11449_11475[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11445);

return cljs.core.cst$kw$recur;
} else {
throw e11448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11476 = state_11445;
state_11445 = G__11476;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = function(state_11445){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1.call(this,state_11445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,map__11441,map__11441__$1,ids))
})();
var state__9425__auto__ = (function (){var statearr_11450 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11450[(6)] = c__9423__auto__);

return statearr_11450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,map__11441,map__11441__$1,ids))
);

return c__9423__auto__;
} else {
return warehouse.indexeddb.open_request(db,((function (map__11441,map__11441__$1,ids){
return (function (request,ch){
var db__$1 = request.result;
var tx = db__$1.transaction(store,"readonly");
var store__$1 = tx.objectStore(store);
var components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var remaining = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ids));
var seq__11451 = cljs.core.seq(ids);
var chunk__11452 = null;
var count__11453 = (0);
var i__11454 = (0);
while(true){
if((i__11454 < count__11453)){
var id = chunk__11452.cljs$core$IIndexed$_nth$arity$2(null,i__11454);
var request_11477__$1 = store__$1.get(id);
request_11477__$1.onsuccess = ((function (seq__11451,chunk__11452,count__11453,i__11454,request_11477__$1,id,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids){
return (function (e){
var temp__5457__auto___11478 = e.target.result;
if(cljs.core.truth_(temp__5457__auto___11478)){
var value_11479 = temp__5457__auto___11478;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,value_11479);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(remaining,cljs.core.dec);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(remaining))){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__11451,chunk__11452,count__11453,i__11454,c__9423__auto__,request_11477__$1,id,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (seq__11451,chunk__11452,count__11453,i__11454,c__9423__auto__,request_11477__$1,id,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids){
return (function (state_11459){
var state_val_11460 = (state_11459[(1)]);
if((state_val_11460 === (1))){
var inst_11455 = cljs.core.deref(components);
var state_11459__$1 = state_11459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11459__$1,(2),ch,inst_11455);
} else {
if((state_val_11460 === (2))){
var inst_11457 = (state_11459[(2)]);
var state_11459__$1 = state_11459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11459__$1,inst_11457);
} else {
return null;
}
}
});})(seq__11451,chunk__11452,count__11453,i__11454,c__9423__auto__,request_11477__$1,id,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids))
;
return ((function (seq__11451,chunk__11452,count__11453,i__11454,switch__9320__auto__,c__9423__auto__,request_11477__$1,id,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids){
return (function() {
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11461 = [null,null,null,null,null,null,null];
(statearr_11461[(0)] = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__);

(statearr_11461[(1)] = (1));

return statearr_11461;
});
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1 = (function (state_11459){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11459);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11462){if((e11462 instanceof Object)){
var ex__9324__auto__ = e11462;
var statearr_11463_11480 = state_11459;
(statearr_11463_11480[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11459);

return cljs.core.cst$kw$recur;
} else {
throw e11462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11481 = state_11459;
state_11459 = G__11481;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = function(state_11459){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1.call(this,state_11459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__;
})()
;})(seq__11451,chunk__11452,count__11453,i__11454,switch__9320__auto__,c__9423__auto__,request_11477__$1,id,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids))
})();
var state__9425__auto__ = (function (){var statearr_11464 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11464[(6)] = c__9423__auto__);

return statearr_11464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(seq__11451,chunk__11452,count__11453,i__11454,c__9423__auto__,request_11477__$1,id,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids))
);

return c__9423__auto__;
} else {
return null;
}
});})(seq__11451,chunk__11452,count__11453,i__11454,request_11477__$1,id,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids))
;


var G__11482 = seq__11451;
var G__11483 = chunk__11452;
var G__11484 = count__11453;
var G__11485 = (i__11454 + (1));
seq__11451 = G__11482;
chunk__11452 = G__11483;
count__11453 = G__11484;
i__11454 = G__11485;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11451);
if(temp__5457__auto__){
var seq__11451__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11451__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11451__$1);
var G__11486 = cljs.core.chunk_rest(seq__11451__$1);
var G__11487 = c__4351__auto__;
var G__11488 = cljs.core.count(c__4351__auto__);
var G__11489 = (0);
seq__11451 = G__11486;
chunk__11452 = G__11487;
count__11453 = G__11488;
i__11454 = G__11489;
continue;
} else {
var id = cljs.core.first(seq__11451__$1);
var request_11490__$1 = store__$1.get(id);
request_11490__$1.onsuccess = ((function (seq__11451,chunk__11452,count__11453,i__11454,request_11490__$1,id,seq__11451__$1,temp__5457__auto__,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids){
return (function (e){
var temp__5457__auto___11491__$1 = e.target.result;
if(cljs.core.truth_(temp__5457__auto___11491__$1)){
var value_11492 = temp__5457__auto___11491__$1;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,value_11492);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(remaining,cljs.core.dec);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(remaining))){
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__11451,chunk__11452,count__11453,i__11454,c__9423__auto__,request_11490__$1,id,seq__11451__$1,temp__5457__auto__,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (seq__11451,chunk__11452,count__11453,i__11454,c__9423__auto__,request_11490__$1,id,seq__11451__$1,temp__5457__auto__,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids){
return (function (state_11469){
var state_val_11470 = (state_11469[(1)]);
if((state_val_11470 === (1))){
var inst_11465 = cljs.core.deref(components);
var state_11469__$1 = state_11469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11469__$1,(2),ch,inst_11465);
} else {
if((state_val_11470 === (2))){
var inst_11467 = (state_11469[(2)]);
var state_11469__$1 = state_11469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11469__$1,inst_11467);
} else {
return null;
}
}
});})(seq__11451,chunk__11452,count__11453,i__11454,c__9423__auto__,request_11490__$1,id,seq__11451__$1,temp__5457__auto__,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids))
;
return ((function (seq__11451,chunk__11452,count__11453,i__11454,switch__9320__auto__,c__9423__auto__,request_11490__$1,id,seq__11451__$1,temp__5457__auto__,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids){
return (function() {
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11471 = [null,null,null,null,null,null,null];
(statearr_11471[(0)] = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__);

(statearr_11471[(1)] = (1));

return statearr_11471;
});
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1 = (function (state_11469){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11469);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11472){if((e11472 instanceof Object)){
var ex__9324__auto__ = e11472;
var statearr_11473_11493 = state_11469;
(statearr_11473_11493[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11469);

return cljs.core.cst$kw$recur;
} else {
throw e11472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11494 = state_11469;
state_11469 = G__11494;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = function(state_11469){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1.call(this,state_11469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__;
})()
;})(seq__11451,chunk__11452,count__11453,i__11454,switch__9320__auto__,c__9423__auto__,request_11490__$1,id,seq__11451__$1,temp__5457__auto__,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids))
})();
var state__9425__auto__ = (function (){var statearr_11474 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11474[(6)] = c__9423__auto__);

return statearr_11474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(seq__11451,chunk__11452,count__11453,i__11454,c__9423__auto__,request_11490__$1,id,seq__11451__$1,temp__5457__auto__,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids))
);

return c__9423__auto__;
} else {
return null;
}
});})(seq__11451,chunk__11452,count__11453,i__11454,request_11490__$1,id,seq__11451__$1,temp__5457__auto__,db__$1,tx,store__$1,components,remaining,map__11441,map__11441__$1,ids))
;


var G__11495 = cljs.core.next(seq__11451__$1);
var G__11496 = null;
var G__11497 = (0);
var G__11498 = (0);
seq__11451 = G__11495;
chunk__11452 = G__11496;
count__11453 = G__11497;
i__11454 = G__11498;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__11441,map__11441__$1,ids))
);
}
});
warehouse.indexeddb.load_ids_by_string_index = (function warehouse$indexeddb$load_ids_by_string_index(db,store,p__11499){
var map__11500 = p__11499;
var map__11500__$1 = ((((!((map__11500 == null)))?(((((map__11500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11500):map__11500);
var index_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11500__$1,cljs.core.cst$kw$index_DASH_name);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11500__$1,cljs.core.cst$kw$q);
return warehouse.indexeddb.open_request(db,((function (map__11500,map__11500__$1,index_name,q){
return (function (request,ch){
var db__$1 = request.result;
var tx = db__$1.transaction(store,"readonly");
var store__$1 = tx.objectStore(store);
var index = store__$1.index(index_name);
var keyRange = IDBKeyRange.bound(q,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),"z"].join(''));
var keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var request__$1 = index.openCursor(keyRange);
return request__$1.onsuccess = ((function (db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11500,map__11500__$1,index_name,q){
return (function (e){
var temp__5455__auto__ = e.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(keys,cljs.core.conj,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cursor.value.id));

return cursor.continue();
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11500,map__11500__$1,index_name,q){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11500,map__11500__$1,index_name,q){
return (function (state_11506){
var state_val_11507 = (state_11506[(1)]);
if((state_val_11507 === (1))){
var inst_11502 = cljs.core.deref(keys);
var state_11506__$1 = state_11506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11506__$1,(2),ch,inst_11502);
} else {
if((state_val_11507 === (2))){
var inst_11504 = (state_11506[(2)]);
var state_11506__$1 = state_11506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11506__$1,inst_11504);
} else {
return null;
}
}
});})(c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11500,map__11500__$1,index_name,q))
;
return ((function (switch__9320__auto__,c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11500,map__11500__$1,index_name,q){
return (function() {
var warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____0 = (function (){
var statearr_11508 = [null,null,null,null,null,null,null];
(statearr_11508[(0)] = warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__);

(statearr_11508[(1)] = (1));

return statearr_11508;
});
var warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____1 = (function (state_11506){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11506);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11509){if((e11509 instanceof Object)){
var ex__9324__auto__ = e11509;
var statearr_11510_11512 = state_11506;
(statearr_11510_11512[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11506);

return cljs.core.cst$kw$recur;
} else {
throw e11509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11513 = state_11506;
state_11506 = G__11513;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__ = function(state_11506){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____1.call(this,state_11506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11500,map__11500__$1,index_name,q))
})();
var state__9425__auto__ = (function (){var statearr_11511 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11511[(6)] = c__9423__auto__);

return statearr_11511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11500,map__11500__$1,index_name,q))
);

return c__9423__auto__;
}
});})(db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11500,map__11500__$1,index_name,q))
;
});})(map__11500,map__11500__$1,index_name,q))
);
});
