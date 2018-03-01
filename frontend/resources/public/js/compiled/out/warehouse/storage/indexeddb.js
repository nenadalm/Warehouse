// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
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
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)),cljs.core.cst$kw$keywords);
});
warehouse.storage.indexeddb.on_upgrade = (function warehouse$storage$indexeddb$on_upgrade(e){
var db = e.target.result;
if((e.oldVersion < (1))){
var store = db.createObjectStore("components",({"keyPath": "id"}));
var seq__20511_20515 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(warehouse.storage.local.app_state) : cljs.core.deref.call(null,warehouse.storage.local.app_state))));
var chunk__20512_20516 = null;
var count__20513_20517 = (0);
var i__20514_20518 = (0);
while(true){
if((i__20514_20518 < count__20513_20517)){
var component_20519 = chunk__20512_20516.cljs$core$IIndexed$_nth$arity$2(null,i__20514_20518);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_20519));

var G__20520 = seq__20511_20515;
var G__20521 = chunk__20512_20516;
var G__20522 = count__20513_20517;
var G__20523 = (i__20514_20518 + (1));
seq__20511_20515 = G__20520;
chunk__20512_20516 = G__20521;
count__20513_20517 = G__20522;
i__20514_20518 = G__20523;
continue;
} else {
var temp__4657__auto___20524 = cljs.core.seq(seq__20511_20515);
if(temp__4657__auto___20524){
var seq__20511_20525__$1 = temp__4657__auto___20524;
if(cljs.core.chunked_seq_QMARK_(seq__20511_20525__$1)){
var c__7845__auto___20526 = cljs.core.chunk_first(seq__20511_20525__$1);
var G__20527 = cljs.core.chunk_rest(seq__20511_20525__$1);
var G__20528 = c__7845__auto___20526;
var G__20529 = cljs.core.count(c__7845__auto___20526);
var G__20530 = (0);
seq__20511_20515 = G__20527;
chunk__20512_20516 = G__20528;
count__20513_20517 = G__20529;
i__20514_20518 = G__20530;
continue;
} else {
var component_20531 = cljs.core.first(seq__20511_20525__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_20531));

var G__20532 = cljs.core.next(seq__20511_20525__$1);
var G__20533 = null;
var G__20534 = (0);
var G__20535 = (0);
seq__20511_20515 = G__20532;
chunk__20512_20516 = G__20533;
count__20513_20517 = G__20534;
i__20514_20518 = G__20535;
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
var args20536 = [];
var len__8139__auto___20544 = arguments.length;
var i__8140__auto___20545 = (0);
while(true){
if((i__8140__auto___20545 < len__8139__auto___20544)){
args20536.push((arguments[i__8140__auto___20545]));

var G__20546 = (i__8140__auto___20545 + (1));
i__8140__auto___20545 = G__20546;
continue;
} else {
}
break;
}

var G__20538 = args20536.length;
switch (G__20538) {
case 3:
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20536.length)].join('')));

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
var components = (function (){var G__20539 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20539) : cljs.core.atom.call(null,G__20539));
})();
var advanced = (function (){var G__20540 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20540) : cljs.core.atom.call(null,G__20540));
})();
return request__$2.onsuccess = ((function (cnt,request__$2,components,advanced,db,tx,store,request__$1){
return (function (e__$1){
var temp__4655__auto__ = e__$1.target.result;
if(cljs.core.truth_(temp__4655__auto__)){
var cursor = temp__4655__auto__;
var component = cursor.value;
if(cljs.core.truth_(cursor)){
if((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(advanced) : cljs.core.deref.call(null,advanced)) === true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,warehouse.storage.indexeddb.obj__GT_component(cursor.value));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components))),n)){
var G__20541 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components))], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20541) : f.call(null,G__20541));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(advanced,true) : cljs.core.reset_BANG_.call(null,advanced,true));
}
} else {
var G__20542 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components))], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20542) : f.call(null,G__20542));
}
} else {
var G__20543 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components))], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20543) : f.call(null,G__20543));
}
});})(cnt,request__$2,components,advanced,db,tx,store,request__$1))
;
});})(db,tx,store,request__$1))
;
});

warehouse.storage.indexeddb.on_success.cljs$lang$maxFixedArity = 4;

warehouse.storage.indexeddb.on_success_filter = (function warehouse$storage$indexeddb$on_success_filter(var_args){
var args20548 = [];
var len__8139__auto___20556 = arguments.length;
var i__8140__auto___20557 = (0);
while(true){
if((i__8140__auto___20557 < len__8139__auto___20556)){
args20548.push((arguments[i__8140__auto___20557]));

var G__20558 = (i__8140__auto___20557 + (1));
i__8140__auto___20557 = G__20558;
continue;
} else {
}
break;
}

var G__20550 = args20548.length;
switch (G__20550) {
case 4:
return warehouse.storage.indexeddb.on_success_filter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return warehouse.storage.indexeddb.on_success_filter.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20548.length)].join('')));

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
var components = (function (){var G__20551 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20551) : cljs.core.atom.call(null,G__20551));
})();
var advanced = (function (){var G__20552 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20552) : cljs.core.atom.call(null,G__20552));
})();
var request__$1 = index.openCursor(keyRange);
return request__$1.onsuccess = ((function (cnt,components,advanced,request__$1,db,tx,store,index,keyRange,request){
return (function (e__$2){
var temp__4655__auto__ = e__$2.target.result;
if(cljs.core.truth_(temp__4655__auto__)){
var cursor = temp__4655__auto__;
var component = cursor.value;
if(cljs.core.truth_(cursor)){
if((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(advanced) : cljs.core.deref.call(null,advanced)) === true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cursor.value,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components))),n)){
var G__20553 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components))], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20553) : f.call(null,G__20553));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(advanced,true) : cljs.core.reset_BANG_.call(null,advanced,true));
}
} else {
var G__20554 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components))], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20554) : f.call(null,G__20554));
}
} else {
var G__20555 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components))], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20555) : f.call(null,G__20555));
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
var keyRange = IDBKeyRange.bound(q,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z")].join(''));
var keys = (function (){var G__20563 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20563) : cljs.core.atom.call(null,G__20563));
})();
var request__$1 = index.openCursor(keyRange);
return request__$1.onsuccess = ((function (db,tx,store,index,keyRange,keys,request__$1){
return (function (e){
var temp__4655__auto__ = e.target.result;
if(cljs.core.truth_(temp__4655__auto__)){
var cursor = temp__4655__auto__;
var component = cursor.value;
if(cljs.core.truth_(cursor)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(keys,cljs.core.conj,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cursor.value.id));

return cursor.continue();
} else {
var G__20564 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(keys) : cljs.core.deref.call(null,keys));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20564) : f.call(null,G__20564));
}
} else {
var G__20565 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(keys) : cljs.core.deref.call(null,keys));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20565) : f.call(null,G__20565));
}
});})(db,tx,store,index,keyRange,keys,request__$1))
;
});
warehouse.storage.indexeddb.filter_components = (function warehouse$storage$indexeddb$filter_components(ids,f,request){
var db = request.result;
var tx = db.transaction("components","readonly");
var store = tx.objectStore("components");
var components = (function (){var G__20569 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20569) : cljs.core.atom.call(null,G__20569));
})();
var prev_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var sorted_ids = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(ids);
var keyRange = IDBKeyRange.bound(cljs.core.first(sorted_ids),cljs.core.last(sorted_ids));
var request__$1 = store.openCursor(keyRange);
return request__$1.onsuccess = ((function (db,tx,store,components,prev_idx,sorted_ids,keyRange,request__$1){
return (function (e){
var temp__4655__auto__ = e.target.result;
if(cljs.core.truth_(temp__4655__auto__)){
var cursor = temp__4655__auto__;
var component = cursor.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(components,cljs.core.conj,warehouse.storage.indexeddb.obj__GT_component(cursor.value));

var current_idx = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prev_idx,cljs.core.inc);
var temp__4655__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(sorted_ids,current_idx,null);
if(cljs.core.truth_(temp__4655__auto____$1)){
var next_id = temp__4655__auto____$1;
return cursor.continue(next_id);
} else {
var G__20570 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20570) : f.call(null,G__20570));
}
} else {
var G__20571 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(components) : cljs.core.deref.call(null,components));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20571) : f.call(null,G__20571));
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
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__){
return (function (state_20590){
var state_val_20591 = (state_20590[(1)]);
if((state_val_20591 === (1))){
var state_20590__$1 = state_20590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20590__$1,(2),ch,res);
} else {
if((state_val_20591 === (2))){
var inst_20587 = (state_20590[(2)]);
var inst_20588 = cljs.core.async.close_BANG_(ch);
var state_20590__$1 = (function (){var statearr_20592 = state_20590;
(statearr_20592[(7)] = inst_20587);

return statearr_20592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20590__$1,inst_20588);
} else {
return null;
}
}
});})(c__17637__auto__))
;
return ((function (switch__17513__auto__,c__17637__auto__){
return (function() {
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto__ = null;
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto____0 = (function (){
var statearr_20596 = [null,null,null,null,null,null,null,null];
(statearr_20596[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto__);

(statearr_20596[(1)] = (1));

return statearr_20596;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto____1 = (function (state_20590){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20590);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20597){if((e20597 instanceof Object)){
var ex__17517__auto__ = e20597;
var statearr_20598_20600 = state_20590;
(statearr_20598_20600[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20590);

return cljs.core.cst$kw$recur;
} else {
throw e20597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20601 = state_20590;
state_20590 = G__20601;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto__ = function(state_20590){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto____1.call(this,state_20590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__))
})();
var state__17639__auto__ = (function (){var statearr_20599 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_20599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__))
);

return c__17637__auto__;
}),n,request);
}));
});
/**
 * Returns channel receiving components for the page
 */
warehouse.storage.indexeddb.load_components = (function warehouse$storage$indexeddb$load_components(limit,offset){
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$4((function (res){
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__){
return (function (state_20620){
var state_val_20621 = (state_20620[(1)]);
if((state_val_20621 === (1))){
var state_20620__$1 = state_20620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20620__$1,(2),ch,res);
} else {
if((state_val_20621 === (2))){
var inst_20617 = (state_20620[(2)]);
var inst_20618 = cljs.core.async.close_BANG_(ch);
var state_20620__$1 = (function (){var statearr_20622 = state_20620;
(statearr_20622[(7)] = inst_20617);

return statearr_20622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20620__$1,inst_20618);
} else {
return null;
}
}
});})(c__17637__auto__))
;
return ((function (switch__17513__auto__,c__17637__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto__ = null;
var warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto____0 = (function (){
var statearr_20626 = [null,null,null,null,null,null,null,null];
(statearr_20626[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto__);

(statearr_20626[(1)] = (1));

return statearr_20626;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto____1 = (function (state_20620){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20620);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20627){if((e20627 instanceof Object)){
var ex__17517__auto__ = e20627;
var statearr_20628_20630 = state_20620;
(statearr_20628_20630[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20620);

return cljs.core.cst$kw$recur;
} else {
throw e20627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20631 = state_20620;
state_20620 = G__20631;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto__ = function(state_20620){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto____1.call(this,state_20620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__))
})();
var state__17639__auto__ = (function (){var statearr_20629 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_20629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__))
);

return c__17637__auto__;
}),limit,request,offset);
}));
});
/**
 * Returns channel receiving components by `ids`
 */
warehouse.storage.indexeddb.load_components_by_ids = (function warehouse$storage$indexeddb$load_components_by_ids(ids){
if(cljs.core.empty_QMARK_(ids)){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__17637__auto___20686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___20686,ch){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___20686,ch){
return (function (state_20663){
var state_val_20664 = (state_20663[(1)]);
if((state_val_20664 === (1))){
var inst_20659 = cljs.core.PersistentVector.EMPTY;
var state_20663__$1 = state_20663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20663__$1,(2),ch,inst_20659);
} else {
if((state_val_20664 === (2))){
var inst_20661 = (state_20663[(2)]);
var state_20663__$1 = state_20663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20663__$1,inst_20661);
} else {
return null;
}
}
});})(c__17637__auto___20686,ch))
;
return ((function (switch__17513__auto__,c__17637__auto___20686,ch){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____0 = (function (){
var statearr_20668 = [null,null,null,null,null,null,null];
(statearr_20668[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__);

(statearr_20668[(1)] = (1));

return statearr_20668;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____1 = (function (state_20663){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20663);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20669){if((e20669 instanceof Object)){
var ex__17517__auto__ = e20669;
var statearr_20670_20687 = state_20663;
(statearr_20670_20687[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20663);

return cljs.core.cst$kw$recur;
} else {
throw e20669;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20688 = state_20663;
state_20663 = G__20688;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__ = function(state_20663){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____1.call(this,state_20663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___20686,ch))
})();
var state__17639__auto__ = (function (){var statearr_20671 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___20686);

return statearr_20671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___20686,ch))
);


return ch;
} else {
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.filter_components(ids,(function (res){
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__){
return (function (state_20676){
var state_val_20677 = (state_20676[(1)]);
if((state_val_20677 === (1))){
var state_20676__$1 = state_20676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20676__$1,(2),ch,res);
} else {
if((state_val_20677 === (2))){
var inst_20673 = (state_20676[(2)]);
var inst_20674 = cljs.core.async.close_BANG_(ch);
var state_20676__$1 = (function (){var statearr_20678 = state_20676;
(statearr_20678[(7)] = inst_20673);

return statearr_20678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20676__$1,inst_20674);
} else {
return null;
}
}
});})(c__17637__auto__))
;
return ((function (switch__17513__auto__,c__17637__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____0 = (function (){
var statearr_20682 = [null,null,null,null,null,null,null,null];
(statearr_20682[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__);

(statearr_20682[(1)] = (1));

return statearr_20682;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____1 = (function (state_20676){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20676);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20683){if((e20683 instanceof Object)){
var ex__17517__auto__ = e20683;
var statearr_20684_20689 = state_20676;
(statearr_20684_20689[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20676);

return cljs.core.cst$kw$recur;
} else {
throw e20683;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20690 = state_20676;
state_20676 = G__20690;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__ = function(state_20676){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____1.call(this,state_20676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__))
})();
var state__17639__auto__ = (function (){var statearr_20685 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_20685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__))
);

return c__17637__auto__;
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
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__){
return (function (state_20709){
var state_val_20710 = (state_20709[(1)]);
if((state_val_20710 === (1))){
var state_20709__$1 = state_20709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20709__$1,(2),ch,res);
} else {
if((state_val_20710 === (2))){
var inst_20706 = (state_20709[(2)]);
var inst_20707 = cljs.core.async.close_BANG_(ch);
var state_20709__$1 = (function (){var statearr_20711 = state_20709;
(statearr_20711[(7)] = inst_20706);

return statearr_20711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20709__$1,inst_20707);
} else {
return null;
}
}
});})(c__17637__auto__))
;
return ((function (switch__17513__auto__,c__17637__auto__){
return (function() {
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto____0 = (function (){
var statearr_20715 = [null,null,null,null,null,null,null,null];
(statearr_20715[(0)] = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto__);

(statearr_20715[(1)] = (1));

return statearr_20715;
});
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto____1 = (function (state_20709){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20709);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20716){if((e20716 instanceof Object)){
var ex__17517__auto__ = e20716;
var statearr_20717_20719 = state_20709;
(statearr_20717_20719[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20709);

return cljs.core.cst$kw$recur;
} else {
throw e20716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20720 = state_20709;
state_20709 = G__20720;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto__ = function(state_20709){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto____1.call(this,state_20709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto____0;
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto____1;
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__))
})();
var state__17639__auto__ = (function (){var statearr_20718 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_20718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__))
);

return c__17637__auto__;
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
var key_sets = (function (){var G__20778 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20778) : cljs.core.atom.call(null,G__20778));
})();
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__17637__auto___20834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___20834,col,n,ch,key_sets,out){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___20834,col,n,ch,key_sets,out){
return (function (state_20810){
var state_val_20811 = (state_20810[(1)]);
if((state_val_20811 === (7))){
var inst_20783 = (state_20810[(7)]);
var inst_20779 = (state_20810[(8)]);
var inst_20785 = (state_20810[(2)]);
var inst_20786 = (inst_20783.cljs$core$IFn$_invoke$arity$1 ? inst_20783.cljs$core$IFn$_invoke$arity$1(inst_20785) : inst_20783.call(null,inst_20785));
var inst_20787 = (inst_20779 + (1));
var inst_20779__$1 = inst_20787;
var state_20810__$1 = (function (){var statearr_20812 = state_20810;
(statearr_20812[(8)] = inst_20779__$1);

(statearr_20812[(9)] = inst_20786);

return statearr_20812;
})();
var statearr_20813_20835 = state_20810__$1;
(statearr_20813_20835[(2)] = null);

(statearr_20813_20835[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20811 === (1))){
var inst_20779 = (0);
var state_20810__$1 = (function (){var statearr_20814 = state_20810;
(statearr_20814[(8)] = inst_20779);

return statearr_20814;
})();
var statearr_20815_20836 = state_20810__$1;
(statearr_20815_20836[(2)] = null);

(statearr_20815_20836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20811 === (4))){
var inst_20779 = (state_20810[(8)]);
var inst_20783 = (function (){var n__7949__auto__ = n;
var i = inst_20779;
return ((function (n__7949__auto__,i,inst_20779,state_val_20811,c__17637__auto___20834,col,n,ch,key_sets,out){
return (function (p1__20721_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_sets,cljs.core.conj,cljs.core.set(p1__20721_SHARP_));
});
;})(n__7949__auto__,i,inst_20779,state_val_20811,c__17637__auto___20834,col,n,ch,key_sets,out))
})();
var state_20810__$1 = (function (){var statearr_20816 = state_20810;
(statearr_20816[(7)] = inst_20783);

return statearr_20816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20810__$1,(7),ch);
} else {
if((state_val_20811 === (6))){
var inst_20791 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
var statearr_20817_20837 = state_20810__$1;
(statearr_20817_20837[(2)] = inst_20791);

(statearr_20817_20837[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20811 === (3))){
var inst_20793 = (state_20810[(2)]);
var inst_20794 = cljs.core.async.close_BANG_(ch);
var inst_20795 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(key_sets) : cljs.core.deref.call(null,key_sets));
var inst_20796 = cljs.core.empty_QMARK_(inst_20795);
var state_20810__$1 = (function (){var statearr_20818 = state_20810;
(statearr_20818[(10)] = inst_20794);

(statearr_20818[(11)] = inst_20793);

return statearr_20818;
})();
if(inst_20796){
var statearr_20819_20838 = state_20810__$1;
(statearr_20819_20838[(1)] = (8));

} else {
var statearr_20820_20839 = state_20810__$1;
(statearr_20820_20839[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20811 === (2))){
var inst_20779 = (state_20810[(8)]);
var inst_20781 = (inst_20779 < n);
var state_20810__$1 = state_20810;
if(cljs.core.truth_(inst_20781)){
var statearr_20821_20840 = state_20810__$1;
(statearr_20821_20840[(1)] = (4));

} else {
var statearr_20822_20841 = state_20810__$1;
(statearr_20822_20841[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20811 === (11))){
var inst_20807 = (state_20810[(2)]);
var inst_20808 = cljs.core.async.close_BANG_(out);
var state_20810__$1 = (function (){var statearr_20823 = state_20810;
(statearr_20823[(12)] = inst_20807);

return statearr_20823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20810__$1,inst_20808);
} else {
if((state_val_20811 === (9))){
var inst_20800 = cljs.core.PersistentVector.EMPTY;
var inst_20801 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(key_sets) : cljs.core.deref.call(null,key_sets));
var inst_20802 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,inst_20801);
var inst_20803 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_20800,inst_20802);
var state_20810__$1 = state_20810;
var statearr_20824_20842 = state_20810__$1;
(statearr_20824_20842[(2)] = inst_20803);

(statearr_20824_20842[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20811 === (5))){
var state_20810__$1 = state_20810;
var statearr_20825_20843 = state_20810__$1;
(statearr_20825_20843[(2)] = null);

(statearr_20825_20843[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20811 === (10))){
var inst_20805 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20810__$1,(11),out,inst_20805);
} else {
if((state_val_20811 === (8))){
var inst_20798 = cljs.core.PersistentVector.EMPTY;
var state_20810__$1 = state_20810;
var statearr_20826_20844 = state_20810__$1;
(statearr_20826_20844[(2)] = inst_20798);

(statearr_20826_20844[(1)] = (10));


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
});})(c__17637__auto___20834,col,n,ch,key_sets,out))
;
return ((function (switch__17513__auto__,c__17637__auto___20834,col,n,ch,key_sets,out){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto____0 = (function (){
var statearr_20830 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20830[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto__);

(statearr_20830[(1)] = (1));

return statearr_20830;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto____1 = (function (state_20810){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20810);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20831){if((e20831 instanceof Object)){
var ex__17517__auto__ = e20831;
var statearr_20832_20845 = state_20810;
(statearr_20832_20845[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20810);

return cljs.core.cst$kw$recur;
} else {
throw e20831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20846 = state_20810;
state_20810 = G__20846;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto__ = function(state_20810){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto____1.call(this,state_20810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___20834,col,n,ch,key_sets,out))
})();
var state__17639__auto__ = (function (){var statearr_20833 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___20834);

return statearr_20833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___20834,col,n,ch,key_sets,out))
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
var seq__20863_20879 = cljs.core.seq(components);
var chunk__20864_20880 = null;
var count__20865_20881 = (0);
var i__20866_20882 = (0);
while(true){
if((i__20866_20882 < count__20865_20881)){
var component_20883 = chunk__20864_20880.cljs$core$IIndexed$_nth$arity$2(null,i__20866_20882);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_20883));

var G__20884 = seq__20863_20879;
var G__20885 = chunk__20864_20880;
var G__20886 = count__20865_20881;
var G__20887 = (i__20866_20882 + (1));
seq__20863_20879 = G__20884;
chunk__20864_20880 = G__20885;
count__20865_20881 = G__20886;
i__20866_20882 = G__20887;
continue;
} else {
var temp__4657__auto___20888 = cljs.core.seq(seq__20863_20879);
if(temp__4657__auto___20888){
var seq__20863_20889__$1 = temp__4657__auto___20888;
if(cljs.core.chunked_seq_QMARK_(seq__20863_20889__$1)){
var c__7845__auto___20890 = cljs.core.chunk_first(seq__20863_20889__$1);
var G__20891 = cljs.core.chunk_rest(seq__20863_20889__$1);
var G__20892 = c__7845__auto___20890;
var G__20893 = cljs.core.count(c__7845__auto___20890);
var G__20894 = (0);
seq__20863_20879 = G__20891;
chunk__20864_20880 = G__20892;
count__20865_20881 = G__20893;
i__20866_20882 = G__20894;
continue;
} else {
var component_20895 = cljs.core.first(seq__20863_20889__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_20895));

var G__20896 = cljs.core.next(seq__20863_20889__$1);
var G__20897 = null;
var G__20898 = (0);
var G__20899 = (0);
seq__20863_20879 = G__20896;
chunk__20864_20880 = G__20897;
count__20865_20881 = G__20898;
i__20866_20882 = G__20899;
continue;
}
} else {
}
}
break;
}

return tx.oncomplete = ((function (db,tx,store){
return (function (){
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,db,tx,store){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,db,tx,store){
return (function (state_20870){
var state_val_20871 = (state_20870[(1)]);
if((state_val_20871 === (1))){
var state_20870__$1 = state_20870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20870__$1,(2),ch,true);
} else {
if((state_val_20871 === (2))){
var inst_20868 = (state_20870[(2)]);
var state_20870__$1 = state_20870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20870__$1,inst_20868);
} else {
return null;
}
}
});})(c__17637__auto__,db,tx,store))
;
return ((function (switch__17513__auto__,c__17637__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto__ = null;
var warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto____0 = (function (){
var statearr_20875 = [null,null,null,null,null,null,null];
(statearr_20875[(0)] = warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto__);

(statearr_20875[(1)] = (1));

return statearr_20875;
});
var warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto____1 = (function (state_20870){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20870);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20876){if((e20876 instanceof Object)){
var ex__17517__auto__ = e20876;
var statearr_20877_20900 = state_20870;
(statearr_20877_20900[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20870);

return cljs.core.cst$kw$recur;
} else {
throw e20876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20901 = state_20870;
state_20870 = G__20901;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto__ = function(state_20870){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto____1.call(this,state_20870);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto____0;
warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto____1;
return warehouse$storage$indexeddb$store_components_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,db,tx,store))
})();
var state__17639__auto__ = (function (){var statearr_20878 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_20878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,db,tx,store))
);

return c__17637__auto__;
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
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,db,tx,store){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,db,tx,store){
return (function (state_20917){
var state_val_20918 = (state_20917[(1)]);
if((state_val_20918 === (1))){
var state_20917__$1 = state_20917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20917__$1,(2),ch,true);
} else {
if((state_val_20918 === (2))){
var inst_20915 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20917__$1,inst_20915);
} else {
return null;
}
}
});})(c__17637__auto__,db,tx,store))
;
return ((function (switch__17513__auto__,c__17637__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto__ = null;
var warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto____0 = (function (){
var statearr_20922 = [null,null,null,null,null,null,null];
(statearr_20922[(0)] = warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto__);

(statearr_20922[(1)] = (1));

return statearr_20922;
});
var warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto____1 = (function (state_20917){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20917);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20923){if((e20923 instanceof Object)){
var ex__17517__auto__ = e20923;
var statearr_20924_20926 = state_20917;
(statearr_20924_20926[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20917);

return cljs.core.cst$kw$recur;
} else {
throw e20923;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20927 = state_20917;
state_20917 = G__20927;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto__ = function(state_20917){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto____1.call(this,state_20917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto____0;
warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto____1;
return warehouse$storage$indexeddb$store_component_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,db,tx,store))
})();
var state__17639__auto__ = (function (){var statearr_20925 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_20925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,db,tx,store))
);

return c__17637__auto__;
});})(db,tx,store))
;
}));
});
