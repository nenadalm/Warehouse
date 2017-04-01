// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('warehouse.notifications.views');
goog.require('warehouse.component_import.views');
goog.require('warehouse.routes');
goog.require('warehouse.search.views');
goog.require('warehouse.util');
goog.require('re_frame.core');
warehouse.views.form = (function warehouse$views$form(item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"name",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(item) : cljs.core.deref.call(null,item))),cljs.core.cst$kw$on_DASH_change,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(item,cljs.core.assoc,cljs.core.cst$kw$name,e.target.value);

return null;
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Tags: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"tags",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(item) : cljs.core.deref.call(null,item))),cljs.core.cst$kw$on_DASH_change,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(item,cljs.core.assoc,cljs.core.cst$kw$tags,e.target.value);

return null;
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Amount: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"amount",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(item) : cljs.core.deref.call(null,item))),cljs.core.cst$kw$on_DASH_change,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(item,cljs.core.assoc,cljs.core.cst$kw$amount,e.target.value);

return null;
})], null)], null)], null)], null)], null);
});
warehouse.views.key__GT_label = (function warehouse$views$key__GT_label(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Name",cljs.core.cst$kw$tags,"Tags",cljs.core.cst$kw$amount,"Amount"], null),key);
});
warehouse.views.key__GT_transformer = (function warehouse$views$key__GT_transformer(key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$tags)){
return (function (p1__15102_SHARP_){
return warehouse.util.array__GT_string(p1__15102_SHARP_);
});
} else {
return cljs.core.identity;
}
});
warehouse.views.property_view = (function warehouse$views$property_view(data,property){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label,[cljs.core.str(warehouse.views.key__GT_label(property)),cljs.core.str(": ")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,warehouse.views.key__GT_transformer(property).call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,property))], null)], null);
});
warehouse.views.item_view = (function warehouse$views$item_view(data,editing){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,warehouse.views.property_view(data,cljs.core.cst$kw$name),warehouse.views.property_view(data,cljs.core.cst$kw$tags),warehouse.views.property_view(data,cljs.core.cst$kw$amount),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,true) : cljs.core.reset_BANG_.call(null,editing,true));

return null;
})], null),"Edit"], null)], null);
});
warehouse.views.item_edit_view = (function warehouse$views$item_edit_view(data,editing,k){
var edited_item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$tags,warehouse.util.array__GT_string(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(data))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.form,edited_item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (edited_item){
return (function (e){
var G__15104_15105 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_save,k,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(edited_item) : cljs.core.deref.call(null,edited_item))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15104_15105) : re_frame.core.dispatch.call(null,G__15104_15105));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,false) : cljs.core.reset_BANG_.call(null,editing,false));

return null;
});})(edited_item))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (edited_item){
return (function (e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,false) : cljs.core.reset_BANG_.call(null,editing,false));

return null;
});})(edited_item))
], null),"Cancel"], null)], null);
});
warehouse.views.item = (function warehouse$views$item(data,k){
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (editing){
return (function (data__$1,k__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing) : cljs.core.deref.call(null,editing)) === false)?warehouse.views.item_view(data__$1,editing):warehouse.views.item_edit_view(data__$1,editing,k__$1))], null);
});
;})(editing))
});
warehouse.views.raw_property_view = (function warehouse$views$raw_property_view(value,property){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label,[cljs.core.str(warehouse.views.key__GT_label(property)),cljs.core.str(": ")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,warehouse.views.key__GT_transformer(property).call(null,value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,property], null));
});
warehouse.views.model__GT_view = (function warehouse$views$model__GT_view(value){
if(cljs.core.set_QMARK_(value)){
return warehouse.util.array__GT_string(value);
} else {
return value;

}
});
warehouse.views.raw_property_changeset_view = (function warehouse$views$raw_property_changeset_view(values,property){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label,[cljs.core.str(warehouse.views.key__GT_label(property)),cljs.core.str(": ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$old,warehouse.views.model__GT_view(cljs.core.first(values))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$new,warehouse.views.model__GT_view(cljs.core.second(values))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,property], null));
});
if(typeof warehouse.views.show_change_set !== 'undefined'){
} else {
warehouse.views.show_change_set = (function (){var method_table__7605__auto__ = (function (){var G__15106 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15106) : cljs.core.atom.call(null,G__15106));
})();
var prefer_table__7606__auto__ = (function (){var G__15107 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15107) : cljs.core.atom.call(null,G__15107));
})();
var method_cache__7607__auto__ = (function (){var G__15108 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15108) : cljs.core.atom.call(null,G__15108));
})();
var cached_hierarchy__7608__auto__ = (function (){var G__15109 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15109) : cljs.core.atom.call(null,G__15109));
})();
var hierarchy__7609__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("warehouse.views","show-change-set"),((function (method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__,hierarchy__7609__auto__){
return (function (change_set){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(change_set);
});})(method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__,hierarchy__7609__auto__))
,cljs.core.cst$kw$default,hierarchy__7609__auto__,method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__));
})();
}
warehouse.views.show_change_set.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$create,(function (p__15110,k){
var map__15111 = p__15110;
var map__15111__$1 = ((((!((map__15111 == null)))?((((map__15111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15111):map__15111);
var change_set_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15111__$1,cljs.core.cst$kw$data);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$change_DASH_set,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__15111,map__15111__$1,change_set_data){
return (function (component,k__$1){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$component,(function (){var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(component);
var metadata = cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(component);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str("Name: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(metadata))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Data:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,metadata,map__15111,map__15111__$1,change_set_data){
return (function (p__15113,kvs){
var vec__15114 = p__15113;
var k__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15114,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15114,(1),null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$2,cljs.core.cst$kw$id))){
return warehouse.views.raw_property_view(v,k__$2);
} else {
return null;
}
});})(data,metadata,map__15111,map__15111__$1,change_set_data))
,data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (data,metadata,map__15111,map__15111__$1,change_set_data){
return (function (e){
var G__15117_15118 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$revert_DASH_change,cljs.core.cst$kw$create,metadata], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15117_15118) : re_frame.core.dispatch.call(null,G__15117_15118));

return null;
});})(data,metadata,map__15111,map__15111__$1,change_set_data))
], null),"Revert"], null)], null);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k__$1], null));
});})(map__15111,map__15111__$1,change_set_data))
,change_set_data,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(change_set_data),(0),(-1)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null));
}));
warehouse.views.show_change_set.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$update,(function (p__15119,k){
var map__15120 = p__15119;
var map__15120__$1 = ((((!((map__15120 == null)))?((((map__15120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15120):map__15120);
var change_set_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15120__$1,cljs.core.cst$kw$data);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$change_DASH_set,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__15120,map__15120__$1,change_set_data){
return (function (component,k__$1){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$component,(function (){var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(component);
var metadata = cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(component);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str("Name: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(metadata))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Data:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,metadata,map__15120,map__15120__$1,change_set_data){
return (function (p__15122,kvs){
var vec__15123 = p__15122;
var k__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15123,(1),null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$2,cljs.core.cst$kw$id))){
return warehouse.views.raw_property_changeset_view(v,k__$2);
} else {
return null;
}
});})(data,metadata,map__15120,map__15120__$1,change_set_data))
,data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (data,metadata,map__15120,map__15120__$1,change_set_data){
return (function (e){
var G__15126_15127 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$revert_DASH_change,cljs.core.cst$kw$update,metadata,data], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15126_15127) : re_frame.core.dispatch.call(null,G__15126_15127));

return null;
});})(data,metadata,map__15120,map__15120__$1,change_set_data))
], null),"Revert"], null)], null);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k__$1], null));
});})(map__15120,map__15120__$1,change_set_data))
,change_set_data,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(change_set_data),(0),(-1)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null));
}));
warehouse.views.export$ = (function warehouse$views$export(){
var state_data_uri = (function (){var G__15129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_data_DASH_uri], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15129) : re_frame.core.subscribe.call(null,G__15129));
})();
return ((function (state_data_uri){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_data_uri) : cljs.core.deref.call(null,state_data_uri)),cljs.core.cst$kw$download,"warehouse_components.json"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,"Export"], null)], null);
});
;})(state_data_uri))
});
warehouse.views.component_list = (function warehouse$views$component_list(){
var adding = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var showing_changeset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var new_item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$tags,"",cljs.core.cst$kw$amount,(1)], null));
var visible_components = (function (){var G__15157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15157) : re_frame.core.subscribe.call(null,G__15157));
})();
var change_sets = (function (){var G__15158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_sets], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15158) : re_frame.core.subscribe.call(null,G__15158));
})();
var import_form_data = (function (){var G__15159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_form], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15159) : re_frame.core.subscribe.call(null,G__15159));
})();
return ((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.search.views.search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.export$], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.import_button], null),(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(adding) : cljs.core.deref.call(null,adding)) === false)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(adding,true) : cljs.core.reset_BANG_.call(null,adding,true));

return null;
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
], null),"Add new"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (e){
var G__15160_15183 = showing_changeset;
var G__15161_15184 = (((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(showing_changeset) : cljs.core.deref.call(null,showing_changeset)) === true)?false:true);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15160_15183,G__15161_15184) : cljs.core.reset_BANG_.call(null,G__15160_15183,G__15161_15184));

return null;
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
], null),(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(showing_changeset) : cljs.core.deref.call(null,showing_changeset)) === true)?"Hide changes":"Show changes")], null),(cljs.core.truth_(cljs.core.not_empty((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(import_form_data) : cljs.core.deref.call(null,import_form_data))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.import_form,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(import_form_data) : cljs.core.deref.call(null,import_form_data))], null):null),(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(adding) : cljs.core.deref.call(null,adding)) === true)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.form,new_item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (e){
var G__15162_15185 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_create,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(new_item) : cljs.core.deref.call(null,new_item))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15162_15185) : re_frame.core.dispatch.call(null,G__15162_15185));

var G__15163_15186 = new_item;
var G__15164_15187 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$tags,"",cljs.core.cst$kw$amount,(1)], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15163_15186,G__15164_15187) : cljs.core.reset_BANG_.call(null,G__15163_15186,G__15164_15187));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(adding,false) : cljs.core.reset_BANG_.call(null,adding,false));

return null;
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(adding,false) : cljs.core.reset_BANG_.call(null,adding,false));

return null;
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
], null),"Cancel"], null)], null):null),(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(showing_changeset) : cljs.core.deref.call(null,showing_changeset)) === true)?(function (){var cs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(change_sets) : cljs.core.deref.call(null,change_sets));
var k1 = cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(cs),(0),(-1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (cs,k1,adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (change_set_col,k2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(warehouse.views.show_change_set,change_set_col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cs,k1,adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (p1__15130_SHARP_){
return [cljs.core.str(k2),cljs.core.str("."),cljs.core.str(p1__15130_SHARP_)].join('');
});})(cs,k1,adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(change_set_col),(0),(-1))));
});})(cs,k1,adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
,cs,k1);
})():null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"components-list"], null),(function (){var iter__7460__auto__ = ((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function warehouse$views$component_list_$_iter__15165(s__15166){
return (new cljs.core.LazySeq(null,((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (){
var s__15166__$1 = s__15166;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15166__$1);
if(temp__4657__auto__){
var s__15166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15166__$2)){
var c__7458__auto__ = cljs.core.chunk_first(s__15166__$2);
var size__7459__auto__ = cljs.core.count(c__7458__auto__);
var b__15168 = cljs.core.chunk_buffer(size__7459__auto__);
if((function (){var i__15167 = (0);
while(true){
if((i__15167 < size__7459__auto__)){
var vec__15177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7458__auto__,i__15167);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177,(1),null);
cljs.core.chunk_append(b__15168,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"component"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.item,v,k], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null)));

var G__15188 = (i__15167 + (1));
i__15167 = G__15188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15168),warehouse$views$component_list_$_iter__15165(cljs.core.chunk_rest(s__15166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15168),null);
}
} else {
var vec__15180 = cljs.core.first(s__15166__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"component"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.item,v,k], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null)),warehouse$views$component_list_$_iter__15165(cljs.core.rest(s__15166__$2)));
}
} else {
return null;
}
break;
}
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
,null,null));
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
;
return iter__7460__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(visible_components) : cljs.core.deref.call(null,visible_components)));
})()], null)], null);
});
;})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
});
warehouse.views.process = (function warehouse$views$process(p){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$created_DASH_at.cljs$core$IFn$_invoke$arity$1(p)], null)], null);
});
warehouse.views.processes = (function warehouse$views$processes(){
var data = (function (){var G__15208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15208) : re_frame.core.subscribe.call(null,G__15208));
})();
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$processes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"State"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Created at"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__7460__auto__ = ((function (data){
return (function warehouse$views$processes_$_iter__15209(s__15210){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__15210__$1 = s__15210;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15210__$1);
if(temp__4657__auto__){
var s__15210__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15210__$2)){
var c__7458__auto__ = cljs.core.chunk_first(s__15210__$2);
var size__7459__auto__ = cljs.core.count(c__7458__auto__);
var b__15212 = cljs.core.chunk_buffer(size__7459__auto__);
if((function (){var i__15211 = (0);
while(true){
if((i__15211 < size__7459__auto__)){
var vec__15221 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7458__auto__,i__15211);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15221,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15221,(1),null);
cljs.core.chunk_append(b__15212,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__15227 = (i__15211 + (1));
i__15211 = G__15227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15212),warehouse$views$processes_$_iter__15209(cljs.core.chunk_rest(s__15210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15212),null);
}
} else {
var vec__15224 = cljs.core.first(s__15210__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)),warehouse$views$processes_$_iter__15209(cljs.core.rest(s__15210__$2)));
}
} else {
return null;
}
break;
}
});})(data))
,null,null));
});})(data))
;
return iter__7460__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
})()], null)], null);
});
;})(data))
});
warehouse.views.nav = (function warehouse$views$nav(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$menu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,warehouse.routes.homepage()], null),"List"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,warehouse.routes.processes()], null),"Processes"], null)], null)], null);
});
warehouse.views.page = (function warehouse$views$page(){
var active_tab = (function (){var G__15231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_tab], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15231) : re_frame.core.subscribe.call(null,G__15231));
})();
var show_nav = (function (){var G__15232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_nav], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15232) : re_frame.core.subscribe.call(null,G__15232));
})();
return ((function (active_tab,show_nav){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.notifications.views.notifications], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(show_nav) : cljs.core.deref.call(null,show_nav)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.nav], null):null),(function (){var G__15233 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_tab) : cljs.core.deref.call(null,active_tab));
switch (G__15233) {
case "index":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.component_list], null);

break;
case "processes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.processes], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_tab) : cljs.core.deref.call(null,active_tab)))].join('')));

}
})()], null);
});
;})(active_tab,show_nav))
});
