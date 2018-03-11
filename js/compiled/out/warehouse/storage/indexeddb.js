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
var seq__18049_18053 = cljs.core.seq(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(warehouse.storage.local.app_state)));
var chunk__18050_18054 = null;
var count__18051_18055 = (0);
var i__18052_18056 = (0);
while(true){
if((i__18052_18056 < count__18051_18055)){
var component_18057 = chunk__18050_18054.cljs$core$IIndexed$_nth$arity$2(null,i__18052_18056);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18057));


var G__18058 = seq__18049_18053;
var G__18059 = chunk__18050_18054;
var G__18060 = count__18051_18055;
var G__18061 = (i__18052_18056 + (1));
seq__18049_18053 = G__18058;
chunk__18050_18054 = G__18059;
count__18051_18055 = G__18060;
i__18052_18056 = G__18061;
continue;
} else {
var temp__5457__auto___18062 = cljs.core.seq(seq__18049_18053);
if(temp__5457__auto___18062){
var seq__18049_18063__$1 = temp__5457__auto___18062;
if(cljs.core.chunked_seq_QMARK_(seq__18049_18063__$1)){
var c__4319__auto___18064 = cljs.core.chunk_first(seq__18049_18063__$1);
var G__18065 = cljs.core.chunk_rest(seq__18049_18063__$1);
var G__18066 = c__4319__auto___18064;
var G__18067 = cljs.core.count(c__4319__auto___18064);
var G__18068 = (0);
seq__18049_18053 = G__18065;
chunk__18050_18054 = G__18066;
count__18051_18055 = G__18067;
i__18052_18056 = G__18068;
continue;
} else {
var component_18069 = cljs.core.first(seq__18049_18063__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18069));


var G__18070 = cljs.core.next(seq__18049_18063__$1);
var G__18071 = null;
var G__18072 = (0);
var G__18073 = (0);
seq__18049_18053 = G__18070;
chunk__18050_18054 = G__18071;
count__18051_18055 = G__18072;
i__18052_18056 = G__18073;
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
var G__18075 = arguments.length;
switch (G__18075) {
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
var G__18076 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18076) : f.call(null,G__18076));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return cljs.core.reset_BANG_(advanced,true);
}
} else {
var G__18077 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18077) : f.call(null,G__18077));
}
} else {
var G__18078 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18078) : f.call(null,G__18078));
}
});})(cnt,request__$2,components,advanced,db,tx,store,request__$1))
;
});})(db,tx,store,request__$1))
;
});

warehouse.storage.indexeddb.on_success.cljs$lang$maxFixedArity = 4;

warehouse.storage.indexeddb.on_success_filter = (function warehouse$storage$indexeddb$on_success_filter(var_args){
var G__18081 = arguments.length;
switch (G__18081) {
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
var G__18082 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18082) : f.call(null,G__18082));
} else {
return cursor.continue();
}
} else {
cursor.advance(offset);

return cljs.core.reset_BANG_(advanced,true);
}
} else {
var G__18083 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18083) : f.call(null,G__18083));
}
} else {
var G__18084 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,cnt,cljs.core.cst$kw$components,cljs.core.deref(components)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18084) : f.call(null,G__18084));
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
var G__18086 = cljs.core.deref(keys);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18086) : f.call(null,G__18086));
}
} else {
var G__18087 = cljs.core.deref(keys);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18087) : f.call(null,G__18087));
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
var G__18088 = cljs.core.deref(components);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18088) : f.call(null,G__18088));
}
} else {
var G__18089 = cljs.core.deref(components);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18089) : f.call(null,G__18089));
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
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__){
return (function (state_18094){
var state_val_18095 = (state_18094[(1)]);
if((state_val_18095 === (1))){
var state_18094__$1 = state_18094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18094__$1,(2),ch,res);
} else {
if((state_val_18095 === (2))){
var inst_18091 = (state_18094[(2)]);
var inst_18092 = cljs.core.async.close_BANG_(ch);
var state_18094__$1 = (function (){var statearr_18096 = state_18094;
(statearr_18096[(7)] = inst_18091);

return statearr_18096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18094__$1,inst_18092);
} else {
return null;
}
}
});})(c__14229__auto__))
;
return ((function (switch__14048__auto__,c__14229__auto__){
return (function() {
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto__ = null;
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto____0 = (function (){
var statearr_18097 = [null,null,null,null,null,null,null,null];
(statearr_18097[(0)] = warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto__);

(statearr_18097[(1)] = (1));

return statearr_18097;
});
var warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto____1 = (function (state_18094){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18094);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18098){if((e18098 instanceof Object)){
var ex__14052__auto__ = e18098;
var statearr_18099_18101 = state_18094;
(statearr_18099_18101[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18094);

return cljs.core.cst$kw$recur;
} else {
throw e18098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18102 = state_18094;
state_18094 = G__18102;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto__ = function(state_18094){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto____1.call(this,state_18094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto____0;
warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto____1;
return warehouse$storage$indexeddb$load_initial_data_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__))
})();
var state__14231__auto__ = (function (){var statearr_18100 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18100[(6)] = c__14229__auto__);

return statearr_18100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__))
);

return c__14229__auto__;
}),n,request);
}));
});
/**
 * Returns channel receiving components for the page
 */
warehouse.storage.indexeddb.load_components = (function warehouse$storage$indexeddb$load_components(limit,offset){
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.on_success.cljs$core$IFn$_invoke$arity$4((function (res){
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__){
return (function (state_18107){
var state_val_18108 = (state_18107[(1)]);
if((state_val_18108 === (1))){
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18107__$1,(2),ch,res);
} else {
if((state_val_18108 === (2))){
var inst_18104 = (state_18107[(2)]);
var inst_18105 = cljs.core.async.close_BANG_(ch);
var state_18107__$1 = (function (){var statearr_18109 = state_18107;
(statearr_18109[(7)] = inst_18104);

return statearr_18109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18107__$1,inst_18105);
} else {
return null;
}
}
});})(c__14229__auto__))
;
return ((function (switch__14048__auto__,c__14229__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto__ = null;
var warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto____0 = (function (){
var statearr_18110 = [null,null,null,null,null,null,null,null];
(statearr_18110[(0)] = warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto__);

(statearr_18110[(1)] = (1));

return statearr_18110;
});
var warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto____1 = (function (state_18107){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18107);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18111){if((e18111 instanceof Object)){
var ex__14052__auto__ = e18111;
var statearr_18112_18114 = state_18107;
(statearr_18112_18114[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18107);

return cljs.core.cst$kw$recur;
} else {
throw e18111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18115 = state_18107;
state_18107 = G__18115;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto__ = function(state_18107){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto____1.call(this,state_18107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto____0;
warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto____1;
return warehouse$storage$indexeddb$load_components_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__))
})();
var state__14231__auto__ = (function (){var statearr_18113 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18113[(6)] = c__14229__auto__);

return statearr_18113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__))
);

return c__14229__auto__;
}),limit,request,offset);
}));
});
/**
 * Returns channel receiving components by `ids`
 */
warehouse.storage.indexeddb.load_components_by_ids = (function warehouse$storage$indexeddb$load_components_by_ids(ids){
if(cljs.core.empty_QMARK_(ids)){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__14229__auto___18137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___18137,ch){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___18137,ch){
return (function (state_18120){
var state_val_18121 = (state_18120[(1)]);
if((state_val_18121 === (1))){
var inst_18116 = cljs.core.PersistentVector.EMPTY;
var state_18120__$1 = state_18120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18120__$1,(2),ch,inst_18116);
} else {
if((state_val_18121 === (2))){
var inst_18118 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18120__$1,inst_18118);
} else {
return null;
}
}
});})(c__14229__auto___18137,ch))
;
return ((function (switch__14048__auto__,c__14229__auto___18137,ch){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____0 = (function (){
var statearr_18122 = [null,null,null,null,null,null,null];
(statearr_18122[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__);

(statearr_18122[(1)] = (1));

return statearr_18122;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____1 = (function (state_18120){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18120);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18123){if((e18123 instanceof Object)){
var ex__14052__auto__ = e18123;
var statearr_18124_18138 = state_18120;
(statearr_18124_18138[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18120);

return cljs.core.cst$kw$recur;
} else {
throw e18123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18139 = state_18120;
state_18120 = G__18139;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__ = function(state_18120){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____1.call(this,state_18120);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___18137,ch))
})();
var state__14231__auto__ = (function (){var statearr_18125 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18125[(6)] = c__14229__auto___18137);

return statearr_18125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___18137,ch))
);


return ch;
} else {
return warehouse.storage.indexeddb.open_request((function (request,ch){
return warehouse.storage.indexeddb.filter_components(ids,(function (res){
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__){
return (function (state_18130){
var state_val_18131 = (state_18130[(1)]);
if((state_val_18131 === (1))){
var state_18130__$1 = state_18130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18130__$1,(2),ch,res);
} else {
if((state_val_18131 === (2))){
var inst_18127 = (state_18130[(2)]);
var inst_18128 = cljs.core.async.close_BANG_(ch);
var state_18130__$1 = (function (){var statearr_18132 = state_18130;
(statearr_18132[(7)] = inst_18127);

return statearr_18132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18130__$1,inst_18128);
} else {
return null;
}
}
});})(c__14229__auto__))
;
return ((function (switch__14048__auto__,c__14229__auto__){
return (function() {
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__ = null;
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____0 = (function (){
var statearr_18133 = [null,null,null,null,null,null,null,null];
(statearr_18133[(0)] = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__);

(statearr_18133[(1)] = (1));

return statearr_18133;
});
var warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____1 = (function (state_18130){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18130);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18134){if((e18134 instanceof Object)){
var ex__14052__auto__ = e18134;
var statearr_18135_18140 = state_18130;
(statearr_18135_18140[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18130);

return cljs.core.cst$kw$recur;
} else {
throw e18134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18141 = state_18130;
state_18130 = G__18141;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__ = function(state_18130){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____1.call(this,state_18130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____0;
warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto____1;
return warehouse$storage$indexeddb$load_components_by_ids_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__))
})();
var state__14231__auto__ = (function (){var statearr_18136 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18136[(6)] = c__14229__auto__);

return statearr_18136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__))
);

return c__14229__auto__;
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
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__){
return (function (state_18146){
var state_val_18147 = (state_18146[(1)]);
if((state_val_18147 === (1))){
var state_18146__$1 = state_18146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18146__$1,(2),ch,res);
} else {
if((state_val_18147 === (2))){
var inst_18143 = (state_18146[(2)]);
var inst_18144 = cljs.core.async.close_BANG_(ch);
var state_18146__$1 = (function (){var statearr_18148 = state_18146;
(statearr_18148[(7)] = inst_18143);

return statearr_18148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18146__$1,inst_18144);
} else {
return null;
}
}
});})(c__14229__auto__))
;
return ((function (switch__14048__auto__,c__14229__auto__){
return (function() {
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto____0 = (function (){
var statearr_18149 = [null,null,null,null,null,null,null,null];
(statearr_18149[(0)] = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto__);

(statearr_18149[(1)] = (1));

return statearr_18149;
});
var warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto____1 = (function (state_18146){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18146);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18150){if((e18150 instanceof Object)){
var ex__14052__auto__ = e18150;
var statearr_18151_18153 = state_18146;
(statearr_18151_18153[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18146);

return cljs.core.cst$kw$recur;
} else {
throw e18150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18154 = state_18146;
state_18146 = G__18154;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto__ = function(state_18146){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto____1.call(this,state_18146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto____0;
warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto____1;
return warehouse$storage$indexeddb$filter_ids_by_keyword_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__))
})();
var state__14231__auto__ = (function (){var statearr_18152 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18152[(6)] = c__14229__auto__);

return statearr_18152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__))
);

return c__14229__auto__;
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
var c__14229__auto___18208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___18208,col,n,ch,key_sets,out){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___18208,col,n,ch,key_sets,out){
return (function (state_18187){
var state_val_18188 = (state_18187[(1)]);
if((state_val_18188 === (7))){
var inst_18156 = (state_18187[(7)]);
var inst_18160 = (state_18187[(8)]);
var inst_18162 = (state_18187[(2)]);
var inst_18163 = (inst_18160.cljs$core$IFn$_invoke$arity$1 ? inst_18160.cljs$core$IFn$_invoke$arity$1(inst_18162) : inst_18160.call(null,inst_18162));
var inst_18164 = (inst_18156 + (1));
var inst_18156__$1 = inst_18164;
var state_18187__$1 = (function (){var statearr_18189 = state_18187;
(statearr_18189[(7)] = inst_18156__$1);

(statearr_18189[(9)] = inst_18163);

return statearr_18189;
})();
var statearr_18190_18209 = state_18187__$1;
(statearr_18190_18209[(2)] = null);

(statearr_18190_18209[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (1))){
var inst_18156 = (0);
var state_18187__$1 = (function (){var statearr_18191 = state_18187;
(statearr_18191[(7)] = inst_18156);

return statearr_18191;
})();
var statearr_18192_18210 = state_18187__$1;
(statearr_18192_18210[(2)] = null);

(statearr_18192_18210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (4))){
var inst_18156 = (state_18187[(7)]);
var inst_18160 = (function (){var n__4376__auto__ = n;
var i = inst_18156;
return ((function (n__4376__auto__,i,inst_18156,state_val_18188,c__14229__auto___18208,col,n,ch,key_sets,out){
return (function (p1__18155_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_sets,cljs.core.conj,cljs.core.set(p1__18155_SHARP_));
});
;})(n__4376__auto__,i,inst_18156,state_val_18188,c__14229__auto___18208,col,n,ch,key_sets,out))
})();
var state_18187__$1 = (function (){var statearr_18193 = state_18187;
(statearr_18193[(8)] = inst_18160);

return statearr_18193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18187__$1,(7),ch);
} else {
if((state_val_18188 === (6))){
var inst_18168 = (state_18187[(2)]);
var state_18187__$1 = state_18187;
var statearr_18194_18211 = state_18187__$1;
(statearr_18194_18211[(2)] = inst_18168);

(statearr_18194_18211[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (3))){
var inst_18170 = (state_18187[(2)]);
var inst_18171 = cljs.core.async.close_BANG_(ch);
var inst_18172 = cljs.core.deref(key_sets);
var inst_18173 = cljs.core.empty_QMARK_(inst_18172);
var state_18187__$1 = (function (){var statearr_18195 = state_18187;
(statearr_18195[(10)] = inst_18171);

(statearr_18195[(11)] = inst_18170);

return statearr_18195;
})();
if(inst_18173){
var statearr_18196_18212 = state_18187__$1;
(statearr_18196_18212[(1)] = (8));

} else {
var statearr_18197_18213 = state_18187__$1;
(statearr_18197_18213[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (2))){
var inst_18156 = (state_18187[(7)]);
var inst_18158 = (inst_18156 < n);
var state_18187__$1 = state_18187;
if(cljs.core.truth_(inst_18158)){
var statearr_18198_18214 = state_18187__$1;
(statearr_18198_18214[(1)] = (4));

} else {
var statearr_18199_18215 = state_18187__$1;
(statearr_18199_18215[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (11))){
var inst_18184 = (state_18187[(2)]);
var inst_18185 = cljs.core.async.close_BANG_(out);
var state_18187__$1 = (function (){var statearr_18200 = state_18187;
(statearr_18200[(12)] = inst_18184);

return statearr_18200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18187__$1,inst_18185);
} else {
if((state_val_18188 === (9))){
var inst_18177 = cljs.core.PersistentVector.EMPTY;
var inst_18178 = cljs.core.deref(key_sets);
var inst_18179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,inst_18178);
var inst_18180 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_18177,inst_18179);
var state_18187__$1 = state_18187;
var statearr_18201_18216 = state_18187__$1;
(statearr_18201_18216[(2)] = inst_18180);

(statearr_18201_18216[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (5))){
var state_18187__$1 = state_18187;
var statearr_18202_18217 = state_18187__$1;
(statearr_18202_18217[(2)] = null);

(statearr_18202_18217[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (10))){
var inst_18182 = (state_18187[(2)]);
var state_18187__$1 = state_18187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18187__$1,(11),out,inst_18182);
} else {
if((state_val_18188 === (8))){
var inst_18175 = cljs.core.PersistentVector.EMPTY;
var state_18187__$1 = state_18187;
var statearr_18203_18218 = state_18187__$1;
(statearr_18203_18218[(2)] = inst_18175);

(statearr_18203_18218[(1)] = (10));


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
});})(c__14229__auto___18208,col,n,ch,key_sets,out))
;
return ((function (switch__14048__auto__,c__14229__auto___18208,col,n,ch,key_sets,out){
return (function() {
var warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto__ = null;
var warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto____0 = (function (){
var statearr_18204 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18204[(0)] = warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto__);

(statearr_18204[(1)] = (1));

return statearr_18204;
});
var warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto____1 = (function (state_18187){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18187);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18205){if((e18205 instanceof Object)){
var ex__14052__auto__ = e18205;
var statearr_18206_18219 = state_18187;
(statearr_18206_18219[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18187);

return cljs.core.cst$kw$recur;
} else {
throw e18205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18220 = state_18187;
state_18187 = G__18220;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto__ = function(state_18187){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto____1.call(this,state_18187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto____0;
warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto____1;
return warehouse$storage$indexeddb$filter_ids_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___18208,col,n,ch,key_sets,out))
})();
var state__14231__auto__ = (function (){var statearr_18207 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18207[(6)] = c__14229__auto___18208);

return statearr_18207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___18208,col,n,ch,key_sets,out))
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
var seq__18221_18234 = cljs.core.seq(components);
var chunk__18222_18235 = null;
var count__18223_18236 = (0);
var i__18224_18237 = (0);
while(true){
if((i__18224_18237 < count__18223_18236)){
var component_18238 = chunk__18222_18235.cljs$core$IIndexed$_nth$arity$2(null,i__18224_18237);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18238));


var G__18239 = seq__18221_18234;
var G__18240 = chunk__18222_18235;
var G__18241 = count__18223_18236;
var G__18242 = (i__18224_18237 + (1));
seq__18221_18234 = G__18239;
chunk__18222_18235 = G__18240;
count__18223_18236 = G__18241;
i__18224_18237 = G__18242;
continue;
} else {
var temp__5457__auto___18243 = cljs.core.seq(seq__18221_18234);
if(temp__5457__auto___18243){
var seq__18221_18244__$1 = temp__5457__auto___18243;
if(cljs.core.chunked_seq_QMARK_(seq__18221_18244__$1)){
var c__4319__auto___18245 = cljs.core.chunk_first(seq__18221_18244__$1);
var G__18246 = cljs.core.chunk_rest(seq__18221_18244__$1);
var G__18247 = c__4319__auto___18245;
var G__18248 = cljs.core.count(c__4319__auto___18245);
var G__18249 = (0);
seq__18221_18234 = G__18246;
chunk__18222_18235 = G__18247;
count__18223_18236 = G__18248;
i__18224_18237 = G__18249;
continue;
} else {
var component_18250 = cljs.core.first(seq__18221_18244__$1);
store.put(warehouse.storage.indexeddb.component__GT_obj(component_18250));


var G__18251 = cljs.core.next(seq__18221_18244__$1);
var G__18252 = null;
var G__18253 = (0);
var G__18254 = (0);
seq__18221_18234 = G__18251;
chunk__18222_18235 = G__18252;
count__18223_18236 = G__18253;
i__18224_18237 = G__18254;
continue;
}
} else {
}
}
break;
}

return tx.oncomplete = ((function (db,tx,store){
return (function (){
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,db,tx,store){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,db,tx,store){
return (function (state_18228){
var state_val_18229 = (state_18228[(1)]);
if((state_val_18229 === (1))){
var state_18228__$1 = state_18228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18228__$1,(2),ch,true);
} else {
if((state_val_18229 === (2))){
var inst_18226 = (state_18228[(2)]);
var state_18228__$1 = state_18228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18228__$1,inst_18226);
} else {
return null;
}
}
});})(c__14229__auto__,db,tx,store))
;
return ((function (switch__14048__auto__,c__14229__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto__ = null;
var warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto____0 = (function (){
var statearr_18230 = [null,null,null,null,null,null,null];
(statearr_18230[(0)] = warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto__);

(statearr_18230[(1)] = (1));

return statearr_18230;
});
var warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto____1 = (function (state_18228){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18228);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18231){if((e18231 instanceof Object)){
var ex__14052__auto__ = e18231;
var statearr_18232_18255 = state_18228;
(statearr_18232_18255[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18228);

return cljs.core.cst$kw$recur;
} else {
throw e18231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18256 = state_18228;
state_18228 = G__18256;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto__ = function(state_18228){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto____1.call(this,state_18228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto____0;
warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto____1;
return warehouse$storage$indexeddb$store_components_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,db,tx,store))
})();
var state__14231__auto__ = (function (){var statearr_18233 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18233[(6)] = c__14229__auto__);

return statearr_18233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,db,tx,store))
);

return c__14229__auto__;
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
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,db,tx,store){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,db,tx,store){
return (function (state_18260){
var state_val_18261 = (state_18260[(1)]);
if((state_val_18261 === (1))){
var state_18260__$1 = state_18260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18260__$1,(2),ch,true);
} else {
if((state_val_18261 === (2))){
var inst_18258 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18260__$1,inst_18258);
} else {
return null;
}
}
});})(c__14229__auto__,db,tx,store))
;
return ((function (switch__14048__auto__,c__14229__auto__,db,tx,store){
return (function() {
var warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto__ = null;
var warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto____0 = (function (){
var statearr_18262 = [null,null,null,null,null,null,null];
(statearr_18262[(0)] = warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto__);

(statearr_18262[(1)] = (1));

return statearr_18262;
});
var warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto____1 = (function (state_18260){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_18260);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18263){if((e18263 instanceof Object)){
var ex__14052__auto__ = e18263;
var statearr_18264_18266 = state_18260;
(statearr_18264_18266[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18260);

return cljs.core.cst$kw$recur;
} else {
throw e18263;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18267 = state_18260;
state_18260 = G__18267;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto__ = function(state_18260){
switch(arguments.length){
case 0:
return warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto____0.call(this);
case 1:
return warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto____1.call(this,state_18260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto____0;
warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto____1;
return warehouse$storage$indexeddb$store_component_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,db,tx,store))
})();
var state__14231__auto__ = (function (){var statearr_18265 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18265[(6)] = c__14229__auto__);

return statearr_18265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,db,tx,store))
);

return c__14229__auto__;
});})(db,tx,store))
;
}));
});
