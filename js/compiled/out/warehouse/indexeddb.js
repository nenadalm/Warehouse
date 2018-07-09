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
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__9423__auto___11473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___11473,ch,map__11441,map__11441__$1,ids){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___11473,ch,map__11441,map__11441__$1,ids){
return (function (state_11447){
var state_val_11448 = (state_11447[(1)]);
if((state_val_11448 === (1))){
var inst_11443 = cljs.core.PersistentVector.EMPTY;
var state_11447__$1 = state_11447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11447__$1,(2),ch,inst_11443);
} else {
if((state_val_11448 === (2))){
var inst_11445 = (state_11447[(2)]);
var state_11447__$1 = state_11447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11447__$1,inst_11445);
} else {
return null;
}
}
});})(c__9423__auto___11473,ch,map__11441,map__11441__$1,ids))
;
return ((function (switch__9320__auto__,c__9423__auto___11473,ch,map__11441,map__11441__$1,ids){
return (function() {
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11449 = [null,null,null,null,null,null,null];
(statearr_11449[(0)] = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__);

(statearr_11449[(1)] = (1));

return statearr_11449;
});
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1 = (function (state_11447){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11447);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11450){if((e11450 instanceof Object)){
var ex__9324__auto__ = e11450;
var statearr_11451_11474 = state_11447;
(statearr_11451_11474[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11447);

return cljs.core.cst$kw$recur;
} else {
throw e11450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11475 = state_11447;
state_11447 = G__11475;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = function(state_11447){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1.call(this,state_11447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___11473,ch,map__11441,map__11441__$1,ids))
})();
var state__9425__auto__ = (function (){var statearr_11452 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11452[(6)] = c__9423__auto___11473);

return statearr_11452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___11473,ch,map__11441,map__11441__$1,ids))
);


return ch;
} else {
return warehouse.indexeddb.open_request(db,((function (map__11441,map__11441__$1,ids){
return (function (request,ch){
var db__$1 = request.result;
var tx = db__$1.transaction(store,"readonly");
var store__$1 = tx.objectStore(store);
var components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var prev_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sorted_ids = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(ids);
var keyRange = IDBKeyRange.bound(cljs.core.first(sorted_ids),cljs.core.last(sorted_ids));
var request__$1 = store__$1.openCursor(keyRange);
return request__$1.onsuccess = ((function (db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids){
return (function (e){
var temp__5455__auto__ = e.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,cursor.value);

var current_idx = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prev_idx,cljs.core.inc);
var temp__5455__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(sorted_ids,current_idx,null);
if(cljs.core.truth_(temp__5455__auto____$1)){
var next_id = temp__5455__auto____$1;
return cursor.continue(next_id);
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,temp__5455__auto____$1,current_idx,cursor,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,temp__5455__auto____$1,current_idx,cursor,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids){
return (function (state_11457){
var state_val_11458 = (state_11457[(1)]);
if((state_val_11458 === (1))){
var inst_11453 = cljs.core.deref(components);
var state_11457__$1 = state_11457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11457__$1,(2),ch,inst_11453);
} else {
if((state_val_11458 === (2))){
var inst_11455 = (state_11457[(2)]);
var state_11457__$1 = state_11457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11457__$1,inst_11455);
} else {
return null;
}
}
});})(c__9423__auto__,temp__5455__auto____$1,current_idx,cursor,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids))
;
return ((function (switch__9320__auto__,c__9423__auto__,temp__5455__auto____$1,current_idx,cursor,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids){
return (function() {
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11459 = [null,null,null,null,null,null,null];
(statearr_11459[(0)] = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__);

(statearr_11459[(1)] = (1));

return statearr_11459;
});
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1 = (function (state_11457){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11457);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11460){if((e11460 instanceof Object)){
var ex__9324__auto__ = e11460;
var statearr_11461_11476 = state_11457;
(statearr_11461_11476[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11457);

return cljs.core.cst$kw$recur;
} else {
throw e11460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11477 = state_11457;
state_11457 = G__11477;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = function(state_11457){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1.call(this,state_11457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,temp__5455__auto____$1,current_idx,cursor,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids))
})();
var state__9425__auto__ = (function (){var statearr_11462 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11462[(6)] = c__9423__auto__);

return statearr_11462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,temp__5455__auto____$1,current_idx,cursor,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids))
);

return c__9423__auto__;
}
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids){
return (function (state_11467){
var state_val_11468 = (state_11467[(1)]);
if((state_val_11468 === (1))){
var inst_11463 = cljs.core.deref(components);
var state_11467__$1 = state_11467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11467__$1,(2),ch,inst_11463);
} else {
if((state_val_11468 === (2))){
var inst_11465 = (state_11467[(2)]);
var state_11467__$1 = state_11467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11467__$1,inst_11465);
} else {
return null;
}
}
});})(c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids))
;
return ((function (switch__9320__auto__,c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids){
return (function() {
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0 = (function (){
var statearr_11469 = [null,null,null,null,null,null,null];
(statearr_11469[(0)] = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__);

(statearr_11469[(1)] = (1));

return statearr_11469;
});
var warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1 = (function (state_11467){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11467);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11470){if((e11470 instanceof Object)){
var ex__9324__auto__ = e11470;
var statearr_11471_11478 = state_11467;
(statearr_11471_11478[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11467);

return cljs.core.cst$kw$recur;
} else {
throw e11470;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11479 = state_11467;
state_11467 = G__11479;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__ = function(state_11467){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1.call(this,state_11467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_by_ids_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids))
})();
var state__9425__auto__ = (function (){var statearr_11472 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11472[(6)] = c__9423__auto__);

return statearr_11472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids))
);

return c__9423__auto__;
}
});})(db__$1,tx,store__$1,components,prev_idx,sorted_ids,keyRange,request__$1,map__11441,map__11441__$1,ids))
;
});})(map__11441,map__11441__$1,ids))
);
}
});
warehouse.indexeddb.load_ids_by_string_index = (function warehouse$indexeddb$load_ids_by_string_index(db,store,p__11480){
var map__11481 = p__11480;
var map__11481__$1 = ((((!((map__11481 == null)))?(((((map__11481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11481):map__11481);
var index_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11481__$1,cljs.core.cst$kw$index_DASH_name);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11481__$1,cljs.core.cst$kw$q);
return warehouse.indexeddb.open_request(db,((function (map__11481,map__11481__$1,index_name,q){
return (function (request,ch){
var db__$1 = request.result;
var tx = db__$1.transaction(store,"readonly");
var store__$1 = tx.objectStore(store);
var index = store__$1.index(index_name);
var keyRange = IDBKeyRange.bound(q,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),"z"].join(''));
var keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var request__$1 = index.openCursor(keyRange);
return request__$1.onsuccess = ((function (db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11481,map__11481__$1,index_name,q){
return (function (e){
var temp__5455__auto__ = e.target.result;
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(keys,cljs.core.conj,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cursor.value.id));

return cursor.continue();
} else {
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11481,map__11481__$1,index_name,q){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11481,map__11481__$1,index_name,q){
return (function (state_11487){
var state_val_11488 = (state_11487[(1)]);
if((state_val_11488 === (1))){
var inst_11483 = cljs.core.deref(keys);
var state_11487__$1 = state_11487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11487__$1,(2),ch,inst_11483);
} else {
if((state_val_11488 === (2))){
var inst_11485 = (state_11487[(2)]);
var state_11487__$1 = state_11487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11487__$1,inst_11485);
} else {
return null;
}
}
});})(c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11481,map__11481__$1,index_name,q))
;
return ((function (switch__9320__auto__,c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11481,map__11481__$1,index_name,q){
return (function() {
var warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__ = null;
var warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____0 = (function (){
var statearr_11489 = [null,null,null,null,null,null,null];
(statearr_11489[(0)] = warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__);

(statearr_11489[(1)] = (1));

return statearr_11489;
});
var warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____1 = (function (state_11487){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11487);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11490){if((e11490 instanceof Object)){
var ex__9324__auto__ = e11490;
var statearr_11491_11493 = state_11487;
(statearr_11491_11493[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11487);

return cljs.core.cst$kw$recur;
} else {
throw e11490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11494 = state_11487;
state_11487 = G__11494;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__ = function(state_11487){
switch(arguments.length){
case 0:
return warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____0.call(this);
case 1:
return warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____1.call(this,state_11487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____0;
warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto____1;
return warehouse$indexeddb$load_ids_by_string_index_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11481,map__11481__$1,index_name,q))
})();
var state__9425__auto__ = (function (){var statearr_11492 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11492[(6)] = c__9423__auto__);

return statearr_11492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,temp__5455__auto__,db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11481,map__11481__$1,index_name,q))
);

return c__9423__auto__;
}
});})(db__$1,tx,store__$1,index,keyRange,keys,request__$1,map__11481,map__11481__$1,index_name,q))
;
});})(map__11481,map__11481__$1,index_name,q))
);
});
