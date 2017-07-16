// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('clojure.string');
warehouse.util.map_diff = (function warehouse$util$map_diff(m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,k){
var val1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,k);
var val2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m2,k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val1,val2)){
return res;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val1,val2], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(m1),cljs.core.keys(m2))));
});
warehouse.util.revert_set = (function warehouse$util$revert_set(s,p__13311){
var vec__13315 = p__13311;
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13315,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13315,(1),null);
var add = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(n,o);
var remove = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(o,n);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (add,remove,vec__13315,o,n){
return (function (p1__13310_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(s,remove),p1__13310_SHARP_);
});})(add,remove,vec__13315,o,n))
,add);
});
warehouse.util.revert_changes = (function warehouse$util$revert_changes(m,diff){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13322){
var vec__13323 = p__13322;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13323,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13323,(1),null);
if(cljs.core.every_QMARK_(cljs.core.integer_QMARK_,d)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var x__7362__auto__ = (0);
var y__7363__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,d));
return ((x__7362__auto__ > y__7363__auto__) ? x__7362__auto__ : y__7363__auto__);
})()], null);
} else {
if(cljs.core.every_QMARK_(cljs.core.set_QMARK_,d)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,warehouse.util.revert_set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),d)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.first(d)], null);

}
}
}),diff)], 0));
});
warehouse.util.get_change_set = (function warehouse$util$get_change_set(old_col,new_col){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_col,old_col)){
return cljs.core.PersistentVector.EMPTY;
} else {
var same_keys = cljs.core.keys(old_col);
var created_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(new_col)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(old_col)));
var updates = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (same_keys,created_keys){
return (function (res,k){
var new_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_col,k);
var old_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_col,k);
var diff = warehouse.util.map_diff(old_val,new_val);
if(cljs.core.empty_QMARK_(diff)){
return res;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(old_val),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(old_val)], null),cljs.core.cst$kw$data,diff], null));
}
});})(same_keys,created_keys))
,cljs.core.PersistentVector.EMPTY,same_keys);
var creates = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (same_keys,created_keys,updates){
return (function (data){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(data)], null),cljs.core.cst$kw$data,data], null);
});})(same_keys,created_keys,updates))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.select_keys(new_col,created_keys)));
return cljs.core.filterv(cljs.core.complement(((function (same_keys,created_keys,updates,creates){
return (function (p1__13326_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(p1__13326_SHARP_));
});})(same_keys,created_keys,updates,creates))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$create,cljs.core.cst$kw$data,creates], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$update,cljs.core.cst$kw$data,updates], null)], null));
}
});
warehouse.util.array__GT_string = (function warehouse$util$array__GT_string(array){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",array);
});
warehouse.util.string__GT_array = (function warehouse$util$string__GT_array(string){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(string,/,/)));
});
warehouse.util.document__GT_state = (function warehouse$util$document__GT_state(document,current_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_state,cljs.core.cst$kw$components,((cljs.core.empty_QMARK_(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (component){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((cljs.core.vector_QMARK_(v))?cljs.core.set(v):v));
}),cljs.core.PersistentArrayMap.EMPTY,component);
}),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document))))));
});
warehouse.util.state__GT_document = (function warehouse$util$state__GT_document(current_state){
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(current_state))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,cljs.core.PersistentVector.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.vals(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(current_state)))], null);
}
});
warehouse.util.generate_component_id = (function warehouse$util$generate_component_id(existing_components){
if(cljs.core.empty_QMARK_(existing_components)){
return (1);
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,existing_components)) + (1));
}
});
warehouse.util.merge_documents = (function warehouse$util$merge_documents(document,new_items){
var c = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(document,cljs.core.cst$kw$components,(function (){var new_items__$1 = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(new_items);
var components = cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(document);
while(true){
if(cljs.core.empty_QMARK_(new_items__$1)){
return components;
} else {
var item = cljs.core.first(new_items__$1);
var old_item = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (new_items__$1,components,item,c){
return (function (p1__13327_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__13327_SHARP_)));
});})(new_items__$1,components,item,c))
,c));
if(cljs.core.empty_QMARK_(old_item)){
var G__13328 = cljs.core.rest(new_items__$1);
var G__13329 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(components,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,warehouse.util.generate_component_id(components),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$tags,cljs.core.vec(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.cst$kw$amount,cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item)], null));
new_items__$1 = G__13328;
components = G__13329;
continue;
} else {
var G__13330 = cljs.core.rest(new_items__$1);
var G__13331 = cljs.core.assoc_in(components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(old_item),cljs.core.cst$kw$amount], null),(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(item) + cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(cljs.core.second(old_item))));
new_items__$1 = G__13330;
components = G__13331;
continue;
}
}
break;
}
})());
});
/**
 * Returns next numeric index in map `m`
 */
warehouse.util.next_key = (function warehouse$util$next_key(m){
if(cljs.core.empty_QMARK_(m)){
return (1);
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)) + (1));
}
});
/**
 * Converts js iterator i into clojurescript map
 */
warehouse.util.iterator__GT_map = (function warehouse$util$iterator__GT_map(i){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Array.from(i)));
});
