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
var seq__18517_18521 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(warehouse.storage.local.app_state)));
var chunk__18518_18522 = null;
var count__18519_18523 = (0);
var i__18520_18524 = (0);
while(true){
if((i__18520_18524 < count__18519_18523)){
var component_18525 = chunk__18518_18522.cljs$core$IIndexed$_nth$arity$2(null,i__18520_18524);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18525));


var G__18526 = seq__18517_18521;
var G__18527 = chunk__18518_18522;
var G__18528 = count__18519_18523;
var G__18529 = (i__18520_18524 + (1));
seq__18517_18521 = G__18526;
chunk__18518_18522 = G__18527;
count__18519_18523 = G__18528;
i__18520_18524 = G__18529;
continue;
} else {
var temp__5457__auto___18530 = cljs.core.seq(seq__18517_18521);
if(temp__5457__auto___18530){
var seq__18517_18531__$1 = temp__5457__auto___18530;
if(cljs.core.chunked_seq_QMARK_(seq__18517_18531__$1)){
var c__4319__auto___18532 = cljs.core.chunk_first(seq__18517_18531__$1);
var G__18533 = cljs.core.chunk_rest(seq__18517_18531__$1);
var G__18534 = c__4319__auto___18532;
var G__18535 = cljs.core.count(c__4319__auto___18532);
var G__18536 = (0);
seq__18517_18521 = G__18533;
chunk__18518_18522 = G__18534;
count__18519_18523 = G__18535;
i__18520_18524 = G__18536;
continue;
} else {
var component_18537 = cljs.core.first(seq__18517_18531__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18537));


var G__18538 = cljs.core.next(seq__18517_18531__$1);
var G__18539 = null;
var G__18540 = (0);
var G__18541 = (0);
seq__18517_18521 = G__18538;
chunk__18518_18522 = G__18539;
count__18519_18523 = G__18540;
i__18520_18524 = G__18541;
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
var G__18543 = arguments.length;
switch (G__18543) {
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
var G__18544 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18544) : f.call(null,G__18544));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return cljs.core.reset_BANG_(advanced,true);
}
} else {
var G__18545 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18545) : f.call(null,G__18545));
}
} else {
var G__18546 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18546) : f.call(null,G__18546));
}
});})(cnt,request__$2,components,advanced,db,tx,store,request__$1))
;
});})(db,tx,store,request__$1))
;
});

warehouse.storage.indexeddb.on_success.cljs$lang$maxFixedArity = 4;

warehouse.storage.indexeddb.on_success_filter = (function warehouse$storage$indexeddb$on_success_filter(var_args){
var G__18549 = arguments.length;
switch (G__18549) {
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
var G__18550 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18550) : f.call(null,G__18550));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return cljs.core.reset_BANG_(advanced,true);
}
} else {
var G__18551 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18551) : f.call(null,G__18551));
}
} else {
var G__18552 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18552) : f.call(null,G__18552));
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
var G__18554 = cljs.core.deref(keys);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18554) : f.call(null,G__18554));
}
} else {
var G__18555 = cljs.core.deref(keys);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18555) : f.call(null,G__18555));
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
var G__18556 = cljs.core.deref(components);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18556) : f.call(null,G__18556));
}
} else {
var G__18557 = cljs.core.deref(components);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18557) : f.call(null,G__18557));
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
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__){
return (function (state_18562){
var state_val_18563 = (state_18562[(1)]);
if((state_val_18563 === (1))){
var state_18562__$1 = state_18562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18562__$1,(2),ch,res);
} else {
if((state_val_18563 === (2))){
var inst_18559 = (state_18562[(2)]);
var inst_18560 = cljs.core.async.close_BANG_(ch);
var state_18562__$1 = (function (){var statearr_18564 = state_18562;
(statearr_18564[(7)] = inst_18559);

return statearr_18564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18562__$1,inst_18560);
} else {
return null;
}
}
});})(c__13771__auto__))
;
return ((function (switch__13590__auto__,c__13771__auto__){
return (function() {
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto__ = null;
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto____0 = (function (){
var statearr_18565 = [null,null,null,null,null,null,null,null];
(statearr_18565[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto__);

(statearr_18565[(1)] = (1));

return statearr_18565;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto____1 = (function (state_18562){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18562);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18566){if((e18566 instanceof Object)){
var ex__13594__auto__ = e18566;
var statearr_18567_18569 = state_18562;
(statearr_18567_18569[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18562);

return cljs.core.cst$kw$recur;
} else {
throw e18566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18570 = state_18562;
state_18562 = G__18570;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto__ = function(state_18562){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto____1.call(this,state_18562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_18568 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18568[(6)] = c__13771__auto__);

return statearr_18568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
}),n,request);
}));
});
/**
 * Returns channel receiving components for the page
 */
warehouse.storage.indexeddb.load_components = (function warehouse$storage$indexeddb$load_components(limit,offset){
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$4((function (res){
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__){
return (function (state_18575){
var state_val_18576 = (state_18575[(1)]);
if((state_val_18576 === (1))){
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18575__$1,(2),ch,res);
} else {
if((state_val_18576 === (2))){
var inst_18572 = (state_18575[(2)]);
var inst_18573 = cljs.core.async.close_BANG_(ch);
var state_18575__$1 = (function (){var statearr_18577 = state_18575;
(statearr_18577[(7)] = inst_18572);

return statearr_18577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18575__$1,inst_18573);
} else {
return null;
}
}
});})(c__13771__auto__))
;
return ((function (switch__13590__auto__,c__13771__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto__ = null;
var warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto____0 = (function (){
var statearr_18578 = [null,null,null,null,null,null,null,null];
(statearr_18578[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto__);

(statearr_18578[(1)] = (1));

return statearr_18578;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto____1 = (function (state_18575){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18575);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18579){if((e18579 instanceof Object)){
var ex__13594__auto__ = e18579;
var statearr_18580_18582 = state_18575;
(statearr_18580_18582[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18575);

return cljs.core.cst$kw$recur;
} else {
throw e18579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18583 = state_18575;
state_18575 = G__18583;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto__ = function(state_18575){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto____1.call(this,state_18575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_18581 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18581[(6)] = c__13771__auto__);

return statearr_18581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
}),limit,request,offset);
}));
});
/**
 * Returns channel receiving components by `ids`
 */
warehouse.storage.indexeddb.load_components_by_ids = (function warehouse$storage$indexeddb$load_components_by_ids(ids){
if(cljs.core.empty_QMARK_(ids)){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__13771__auto___18605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___18605,ch){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___18605,ch){
return (function (state_18588){
var state_val_18589 = (state_18588[(1)]);
if((state_val_18589 === (1))){
var inst_18584 = cljs.core.PersistentVector.EMPTY;
var state_18588__$1 = state_18588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18588__$1,(2),ch,inst_18584);
} else {
if((state_val_18589 === (2))){
var inst_18586 = (state_18588[(2)]);
var state_18588__$1 = state_18588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18588__$1,inst_18586);
} else {
return null;
}
}
});})(c__13771__auto___18605,ch))
;
return ((function (switch__13590__auto__,c__13771__auto___18605,ch){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____0 = (function (){
var statearr_18590 = [null,null,null,null,null,null,null];
(statearr_18590[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__);

(statearr_18590[(1)] = (1));

return statearr_18590;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____1 = (function (state_18588){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18588);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18591){if((e18591 instanceof Object)){
var ex__13594__auto__ = e18591;
var statearr_18592_18606 = state_18588;
(statearr_18592_18606[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18588);

return cljs.core.cst$kw$recur;
} else {
throw e18591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18607 = state_18588;
state_18588 = G__18607;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__ = function(state_18588){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____1.call(this,state_18588);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___18605,ch))
})();
var state__13773__auto__ = (function (){var statearr_18593 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18593[(6)] = c__13771__auto___18605);

return statearr_18593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___18605,ch))
);


return ch;
} else {
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.filter_components(ids,(function (res){
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__){
return (function (state_18598){
var state_val_18599 = (state_18598[(1)]);
if((state_val_18599 === (1))){
var state_18598__$1 = state_18598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18598__$1,(2),ch,res);
} else {
if((state_val_18599 === (2))){
var inst_18595 = (state_18598[(2)]);
var inst_18596 = cljs.core.async.close_BANG_(ch);
var state_18598__$1 = (function (){var statearr_18600 = state_18598;
(statearr_18600[(7)] = inst_18595);

return statearr_18600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18598__$1,inst_18596);
} else {
return null;
}
}
});})(c__13771__auto__))
;
return ((function (switch__13590__auto__,c__13771__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____0 = (function (){
var statearr_18601 = [null,null,null,null,null,null,null,null];
(statearr_18601[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__);

(statearr_18601[(1)] = (1));

return statearr_18601;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____1 = (function (state_18598){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18598);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18602){if((e18602 instanceof Object)){
var ex__13594__auto__ = e18602;
var statearr_18603_18608 = state_18598;
(statearr_18603_18608[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18598);

return cljs.core.cst$kw$recur;
} else {
throw e18602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18609 = state_18598;
state_18598 = G__18609;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__ = function(state_18598){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____1.call(this,state_18598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_18604 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18604[(6)] = c__13771__auto__);

return statearr_18604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
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
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__){
return (function (state_18614){
var state_val_18615 = (state_18614[(1)]);
if((state_val_18615 === (1))){
var state_18614__$1 = state_18614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18614__$1,(2),ch,res);
} else {
if((state_val_18615 === (2))){
var inst_18611 = (state_18614[(2)]);
var inst_18612 = cljs.core.async.close_BANG_(ch);
var state_18614__$1 = (function (){var statearr_18616 = state_18614;
(statearr_18616[(7)] = inst_18611);

return statearr_18616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18614__$1,inst_18612);
} else {
return null;
}
}
});})(c__13771__auto__))
;
return ((function (switch__13590__auto__,c__13771__auto__){
return (function() {
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto____0 = (function (){
var statearr_18617 = [null,null,null,null,null,null,null,null];
(statearr_18617[(0)] = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto__);

(statearr_18617[(1)] = (1));

return statearr_18617;
});
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto____1 = (function (state_18614){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18614);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18618){if((e18618 instanceof Object)){
var ex__13594__auto__ = e18618;
var statearr_18619_18621 = state_18614;
(statearr_18619_18621[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18614);

return cljs.core.cst$kw$recur;
} else {
throw e18618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18622 = state_18614;
state_18614 = G__18622;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto__ = function(state_18614){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto____1.call(this,state_18614);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto____0;
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto____1;
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_18620 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18620[(6)] = c__13771__auto__);

return statearr_18620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
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
var c__13771__auto___18676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___18676,col,n,ch,key_sets,out){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___18676,col,n,ch,key_sets,out){
return (function (state_18655){
var state_val_18656 = (state_18655[(1)]);
if((state_val_18656 === (7))){
var inst_18628 = (state_18655[(7)]);
var inst_18624 = (state_18655[(8)]);
var inst_18630 = (state_18655[(2)]);
var inst_18631 = (inst_18628.cljs$core$IFn$_invoke$arity$1 ? inst_18628.cljs$core$IFn$_invoke$arity$1(inst_18630) : inst_18628.call(null,inst_18630));
var inst_18632 = (inst_18624 + (1));
var inst_18624__$1 = inst_18632;
var state_18655__$1 = (function (){var statearr_18657 = state_18655;
(statearr_18657[(9)] = inst_18631);

(statearr_18657[(8)] = inst_18624__$1);

return statearr_18657;
})();
var statearr_18658_18677 = state_18655__$1;
(statearr_18658_18677[(2)] = null);

(statearr_18658_18677[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (1))){
var inst_18624 = (0);
var state_18655__$1 = (function (){var statearr_18659 = state_18655;
(statearr_18659[(8)] = inst_18624);

return statearr_18659;
})();
var statearr_18660_18678 = state_18655__$1;
(statearr_18660_18678[(2)] = null);

(statearr_18660_18678[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (4))){
var inst_18624 = (state_18655[(8)]);
var inst_18628 = (function (){var n__4376__auto__ = n;
var i = inst_18624;
return ((function (n__4376__auto__,i,inst_18624,state_val_18656,c__13771__auto___18676,col,n,ch,key_sets,out){
return (function (p1__18623_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_sets,cljs.core.conj,cljs.core.set(p1__18623_SHARP_));
});
;})(n__4376__auto__,i,inst_18624,state_val_18656,c__13771__auto___18676,col,n,ch,key_sets,out))
})();
var state_18655__$1 = (function (){var statearr_18661 = state_18655;
(statearr_18661[(7)] = inst_18628);

return statearr_18661;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18655__$1,(7),ch);
} else {
if((state_val_18656 === (6))){
var inst_18636 = (state_18655[(2)]);
var state_18655__$1 = state_18655;
var statearr_18662_18679 = state_18655__$1;
(statearr_18662_18679[(2)] = inst_18636);

(statearr_18662_18679[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (3))){
var inst_18638 = (state_18655[(2)]);
var inst_18639 = cljs.core.async.close_BANG_(ch);
var inst_18640 = cljs.core.deref(key_sets);
var inst_18641 = cljs.core.empty_QMARK_(inst_18640);
var state_18655__$1 = (function (){var statearr_18663 = state_18655;
(statearr_18663[(10)] = inst_18639);

(statearr_18663[(11)] = inst_18638);

return statearr_18663;
})();
if(inst_18641){
var statearr_18664_18680 = state_18655__$1;
(statearr_18664_18680[(1)] = (8));

} else {
var statearr_18665_18681 = state_18655__$1;
(statearr_18665_18681[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (2))){
var inst_18624 = (state_18655[(8)]);
var inst_18626 = (inst_18624 < n);
var state_18655__$1 = state_18655;
if(cljs.core.truth_(inst_18626)){
var statearr_18666_18682 = state_18655__$1;
(statearr_18666_18682[(1)] = (4));

} else {
var statearr_18667_18683 = state_18655__$1;
(statearr_18667_18683[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (11))){
var inst_18652 = (state_18655[(2)]);
var inst_18653 = cljs.core.async.close_BANG_(out);
var state_18655__$1 = (function (){var statearr_18668 = state_18655;
(statearr_18668[(12)] = inst_18652);

return statearr_18668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18655__$1,inst_18653);
} else {
if((state_val_18656 === (9))){
var inst_18645 = cljs.core.PersistentVector.EMPTY;
var inst_18646 = cljs.core.deref(key_sets);
var inst_18647 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,inst_18646);
var inst_18648 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_18645,inst_18647);
var state_18655__$1 = state_18655;
var statearr_18669_18684 = state_18655__$1;
(statearr_18669_18684[(2)] = inst_18648);

(statearr_18669_18684[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (5))){
var state_18655__$1 = state_18655;
var statearr_18670_18685 = state_18655__$1;
(statearr_18670_18685[(2)] = null);

(statearr_18670_18685[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (10))){
var inst_18650 = (state_18655[(2)]);
var state_18655__$1 = state_18655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18655__$1,(11),out,inst_18650);
} else {
if((state_val_18656 === (8))){
var inst_18643 = cljs.core.PersistentVector.EMPTY;
var state_18655__$1 = state_18655;
var statearr_18671_18686 = state_18655__$1;
(statearr_18671_18686[(2)] = inst_18643);

(statearr_18671_18686[(1)] = (10));


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
});})(c__13771__auto___18676,col,n,ch,key_sets,out))
;
return ((function (switch__13590__auto__,c__13771__auto___18676,col,n,ch,key_sets,out){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto____0 = (function (){
var statearr_18672 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18672[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto__);

(statearr_18672[(1)] = (1));

return statearr_18672;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto____1 = (function (state_18655){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18655);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18673){if((e18673 instanceof Object)){
var ex__13594__auto__ = e18673;
var statearr_18674_18687 = state_18655;
(statearr_18674_18687[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18655);

return cljs.core.cst$kw$recur;
} else {
throw e18673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18688 = state_18655;
state_18655 = G__18688;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto__ = function(state_18655){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto____1.call(this,state_18655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___18676,col,n,ch,key_sets,out))
})();
var state__13773__auto__ = (function (){var statearr_18675 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18675[(6)] = c__13771__auto___18676);

return statearr_18675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___18676,col,n,ch,key_sets,out))
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
var seq__18689_18702 = cljs.core.seq(components);
var chunk__18690_18703 = null;
var count__18691_18704 = (0);
var i__18692_18705 = (0);
while(true){
if((i__18692_18705 < count__18691_18704)){
var component_18706 = chunk__18690_18703.cljs$core$IIndexed$_nth$arity$2(null,i__18692_18705);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18706));


var G__18707 = seq__18689_18702;
var G__18708 = chunk__18690_18703;
var G__18709 = count__18691_18704;
var G__18710 = (i__18692_18705 + (1));
seq__18689_18702 = G__18707;
chunk__18690_18703 = G__18708;
count__18691_18704 = G__18709;
i__18692_18705 = G__18710;
continue;
} else {
var temp__5457__auto___18711 = cljs.core.seq(seq__18689_18702);
if(temp__5457__auto___18711){
var seq__18689_18712__$1 = temp__5457__auto___18711;
if(cljs.core.chunked_seq_QMARK_(seq__18689_18712__$1)){
var c__4319__auto___18713 = cljs.core.chunk_first(seq__18689_18712__$1);
var G__18714 = cljs.core.chunk_rest(seq__18689_18712__$1);
var G__18715 = c__4319__auto___18713;
var G__18716 = cljs.core.count(c__4319__auto___18713);
var G__18717 = (0);
seq__18689_18702 = G__18714;
chunk__18690_18703 = G__18715;
count__18691_18704 = G__18716;
i__18692_18705 = G__18717;
continue;
} else {
var component_18718 = cljs.core.first(seq__18689_18712__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18718));


var G__18719 = cljs.core.next(seq__18689_18712__$1);
var G__18720 = null;
var G__18721 = (0);
var G__18722 = (0);
seq__18689_18702 = G__18719;
chunk__18690_18703 = G__18720;
count__18691_18704 = G__18721;
i__18692_18705 = G__18722;
continue;
}
} else {
}
}
break;
}

return tx.oncomplete = ((function (db,tx,store){
return (function (){
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,db,tx,store){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,db,tx,store){
return (function (state_18696){
var state_val_18697 = (state_18696[(1)]);
if((state_val_18697 === (1))){
var state_18696__$1 = state_18696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18696__$1,(2),ch,true);
} else {
if((state_val_18697 === (2))){
var inst_18694 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18696__$1,inst_18694);
} else {
return null;
}
}
});})(c__13771__auto__,db,tx,store))
;
return ((function (switch__13590__auto__,c__13771__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto__ = null;
var warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto____0 = (function (){
var statearr_18698 = [null,null,null,null,null,null,null];
(statearr_18698[(0)] = warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto__);

(statearr_18698[(1)] = (1));

return statearr_18698;
});
var warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto____1 = (function (state_18696){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18696);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18699){if((e18699 instanceof Object)){
var ex__13594__auto__ = e18699;
var statearr_18700_18723 = state_18696;
(statearr_18700_18723[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18696);

return cljs.core.cst$kw$recur;
} else {
throw e18699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18724 = state_18696;
state_18696 = G__18724;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto__ = function(state_18696){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto____1.call(this,state_18696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto____0;
warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto____1;
return warehouse$storage$indexeddb$store_components_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,db,tx,store))
})();
var state__13773__auto__ = (function (){var statearr_18701 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18701[(6)] = c__13771__auto__);

return statearr_18701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,db,tx,store))
);

return c__13771__auto__;
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
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,db,tx,store){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,db,tx,store){
return (function (state_18728){
var state_val_18729 = (state_18728[(1)]);
if((state_val_18729 === (1))){
var state_18728__$1 = state_18728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18728__$1,(2),ch,true);
} else {
if((state_val_18729 === (2))){
var inst_18726 = (state_18728[(2)]);
var state_18728__$1 = state_18728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18728__$1,inst_18726);
} else {
return null;
}
}
});})(c__13771__auto__,db,tx,store))
;
return ((function (switch__13590__auto__,c__13771__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto__ = null;
var warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto____0 = (function (){
var statearr_18730 = [null,null,null,null,null,null,null];
(statearr_18730[(0)] = warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto__);

(statearr_18730[(1)] = (1));

return statearr_18730;
});
var warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto____1 = (function (state_18728){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_18728);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e18731){if((e18731 instanceof Object)){
var ex__13594__auto__ = e18731;
var statearr_18732_18734 = state_18728;
(statearr_18732_18734[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18728);

return cljs.core.cst$kw$recur;
} else {
throw e18731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__18735 = state_18728;
state_18728 = G__18735;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto__ = function(state_18728){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto____1.call(this,state_18728);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto____0;
warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto____1;
return warehouse$storage$indexeddb$store_component_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,db,tx,store))
})();
var state__13773__auto__ = (function (){var statearr_18733 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_18733[(6)] = c__13771__auto__);

return statearr_18733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,db,tx,store))
);

return c__13771__auto__;
});})(db,tx,store))
;
}));
});
