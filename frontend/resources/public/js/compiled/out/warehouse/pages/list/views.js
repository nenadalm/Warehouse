// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.pages.list.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent_forms.core');
goog.require('re_frame.core');
goog.require('warehouse.util');
goog.require('warehouse.search.views');
goog.require('warehouse.component_import.views');
warehouse.pages.list.views.form_template = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"name",cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$name], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Tags: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"tags",cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$tags], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Amount: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"amount",cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$field,cljs.core.cst$kw$numeric,cljs.core.cst$kw$id,cljs.core.cst$kw$amount], null)], null)], null)], null)], null);
warehouse.pages.list.views.export$ = (function warehouse$pages$list$views$export(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$download,"warehouse_components.json",cljs.core.cst$kw$on_DASH_click,(function (e){
e.currentTarget.href = cljs.core.deref((function (){var G__20081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_data_DASH_uri], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20081) : re_frame.core.subscribe.call(null,G__20081));
})());

return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,"Export visible"], null)], null);
});
warehouse.pages.list.views.key__GT_label = (function warehouse$pages$list$views$key__GT_label(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Name",cljs.core.cst$kw$tags,"Tags",cljs.core.cst$kw$amount,"Amount"], null),key);
});
warehouse.pages.list.views.key__GT_transformer = (function warehouse$pages$list$views$key__GT_transformer(key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$tags)){
return (function (p1__20082_SHARP_){
return warehouse.util.array__GT_string(p1__20082_SHARP_);
});
} else {
return cljs.core.identity;
}
});
warehouse.pages.list.views.raw_property_view = (function warehouse$pages$list$views$raw_property_view(value,property){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(warehouse.pages.list.views.key__GT_label(property)),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,(function (){var fexpr__20083 = warehouse.pages.list.views.key__GT_transformer(property);
return (fexpr__20083.cljs$core$IFn$_invoke$arity$1 ? fexpr__20083.cljs$core$IFn$_invoke$arity$1(value) : fexpr__20083.call(null,value));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,property], null));
});
warehouse.pages.list.views.model__GT_view = (function warehouse$pages$list$views$model__GT_view(value){
if(cljs.core.set_QMARK_(value)){
return warehouse.util.array__GT_string(value);
} else {
return value;

}
});
warehouse.pages.list.views.raw_property_changeset_view = (function warehouse$pages$list$views$raw_property_changeset_view(values,property){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(warehouse.pages.list.views.key__GT_label(property)),": "].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$old,warehouse.pages.list.views.model__GT_view(cljs.core.first(values))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$new,warehouse.pages.list.views.model__GT_view(cljs.core.second(values))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,property], null));
});
warehouse.pages.list.views.property_view = (function warehouse$pages$list$views$property_view(data,property){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(warehouse.pages.list.views.key__GT_label(property)),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,(function (){var G__20085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,property);
var fexpr__20084 = warehouse.pages.list.views.key__GT_transformer(property);
return (fexpr__20084.cljs$core$IFn$_invoke$arity$1 ? fexpr__20084.cljs$core$IFn$_invoke$arity$1(G__20085) : fexpr__20084.call(null,G__20085));
})()], null)], null);
});
warehouse.pages.list.views.item_view = (function warehouse$pages$list$views$item_view(data,editing){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,warehouse.pages.list.views.property_view(data,cljs.core.cst$kw$name),warehouse.pages.list.views.property_view(data,cljs.core.cst$kw$tags),warehouse.pages.list.views.property_view(data,cljs.core.cst$kw$amount),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
cljs.core.reset_BANG_(editing,true);

return null;
})], null),"Edit"], null)], null);
});
warehouse.pages.list.views.item_edit_view = (function warehouse$pages$list$views$item_edit_view(data,editing,k){
var edited_item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$tags,warehouse.util.array__GT_string(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(data))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,warehouse.pages.list.views.form_template,edited_item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (edited_item){
return (function (e){
var G__20086_20087 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_save,k,cljs.core.deref(edited_item)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20086_20087) : re_frame.core.dispatch.call(null,G__20086_20087));

cljs.core.reset_BANG_(editing,false);

return null;
});})(edited_item))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (edited_item){
return (function (e){
cljs.core.reset_BANG_(editing,false);

return null;
});})(edited_item))
], null),"Cancel"], null)], null);
});
warehouse.pages.list.views.item = (function warehouse$pages$list$views$item(data,k){
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (editing){
return (function (data__$1,k__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((cljs.core.deref(editing) === false)?warehouse.pages.list.views.item_view(data__$1,editing):warehouse.pages.list.views.item_edit_view(data__$1,editing,k__$1))], null);
});
;})(editing))
});
warehouse.pages.list.views.selected_components = (function warehouse$pages$list$views$selected_components(components){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"components-list"], null),(function (){var iter__4292__auto__ = (function warehouse$pages$list$views$selected_components_$_iter__20088(s__20089){
return (new cljs.core.LazySeq(null,(function (){
var s__20089__$1 = s__20089;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20089__$1);
if(temp__5457__auto__){
var s__20089__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20089__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__20089__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__20091 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__20090 = (0);
while(true){
if((i__20090 < size__4291__auto__)){
var vec__20092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__20090);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20092,(1),null);
cljs.core.chunk_append(b__20091,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"component"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.list.views.item,v,k], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null)));

var G__20099 = (i__20090 + (1));
i__20090 = G__20099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20091),warehouse$pages$list$views$selected_components_$_iter__20088(cljs.core.chunk_rest(s__20089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20091),null);
}
} else {
var vec__20095 = cljs.core.first(s__20089__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20095,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"component"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.list.views.item,v,k], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null)),warehouse$pages$list$views$selected_components_$_iter__20088(cljs.core.rest(s__20089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(components);
})(),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.deref((function (){var G__20098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_DASH_next_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20098) : re_frame.core.subscribe.call(null,G__20098));
})()))?"visible":"hidden")], null)], null),"Loading..."], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"loading"], null))], null);
});
if(typeof warehouse.pages.list.views.show_change_set !== 'undefined'){
} else {
warehouse.pages.list.views.show_change_set = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("warehouse.pages.list.views","show-change-set"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (change_set){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(change_set);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
warehouse.pages.list.views.show_change_set.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$create,(function (p__20100,k){
var map__20101 = p__20100;
var map__20101__$1 = ((((!((map__20101 == null)))?(((((map__20101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20101):map__20101);
var change_set_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20101__$1,cljs.core.cst$kw$data);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$change_DASH_set,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__20101,map__20101__$1,change_set_data){
return (function (component,k__$1){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$component,(function (){var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(component);
var metadata = cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(component);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,["Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(metadata))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Data:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,metadata,map__20101,map__20101__$1,change_set_data){
return (function (p__20103,kvs){
var vec__20104 = p__20103;
var k__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20104,(1),null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$2,cljs.core.cst$kw$id))){
return warehouse.pages.list.views.raw_property_view(v,k__$2);
} else {
return null;
}
});})(data,metadata,map__20101,map__20101__$1,change_set_data))
,data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (data,metadata,map__20101,map__20101__$1,change_set_data){
return (function (e){
var G__20107_20108 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$revert_DASH_change,cljs.core.cst$kw$create,metadata], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20107_20108) : re_frame.core.dispatch.call(null,G__20107_20108));

return null;
});})(data,metadata,map__20101,map__20101__$1,change_set_data))
], null),"Revert"], null)], null);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k__$1], null));
});})(map__20101,map__20101__$1,change_set_data))
,change_set_data,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(change_set_data),(0),(-1)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null));
}));
warehouse.pages.list.views.show_change_set.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$update,(function (p__20109,k){
var map__20110 = p__20109;
var map__20110__$1 = ((((!((map__20110 == null)))?(((((map__20110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20110):map__20110);
var change_set_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20110__$1,cljs.core.cst$kw$data);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$change_DASH_set,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__20110,map__20110__$1,change_set_data){
return (function (component,k__$1){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$component,(function (){var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(component);
var metadata = cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(component);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,["Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(metadata))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Data:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,metadata,map__20110,map__20110__$1,change_set_data){
return (function (p__20112,kvs){
var vec__20113 = p__20112;
var k__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20113,(1),null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$2,cljs.core.cst$kw$id))){
return warehouse.pages.list.views.raw_property_changeset_view(v,k__$2);
} else {
return null;
}
});})(data,metadata,map__20110,map__20110__$1,change_set_data))
,data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (data,metadata,map__20110,map__20110__$1,change_set_data){
return (function (e){
var G__20116_20117 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$revert_DASH_change,cljs.core.cst$kw$update,metadata,data], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20116_20117) : re_frame.core.dispatch.call(null,G__20116_20117));

return null;
});})(data,metadata,map__20110,map__20110__$1,change_set_data))
], null),"Revert"], null)], null);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k__$1], null));
});})(map__20110,map__20110__$1,change_set_data))
,change_set_data,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(change_set_data),(0),(-1)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null));
}));
warehouse.pages.list.views.component_list = (function warehouse$pages$list$views$component_list(){
var adding = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var showing_changeset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var new_item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$tags,"",cljs.core.cst$kw$amount,(1)], null));
var visible_components = (function (){var G__20119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20119) : re_frame.core.subscribe.call(null,G__20119));
})();
var change_sets = (function (){var G__20120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_sets], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20120) : re_frame.core.subscribe.call(null,G__20120));
})();
var import_form_data = (function (){var G__20121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_form], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20121) : re_frame.core.subscribe.call(null,G__20121));
})();
return ((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.search.views.search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.list.views.export$], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.import_button], null),((cljs.core.deref(adding) === false)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (e){
cljs.core.reset_BANG_(adding,true);

return null;
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
], null),"Add new"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (e){
cljs.core.reset_BANG_(showing_changeset,((cljs.core.deref(showing_changeset) === true)?false:true));

return null;
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
], null),((cljs.core.deref(showing_changeset) === true)?"Hide changes":"Show changes")], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(import_form_data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.import_form,cljs.core.deref(import_form_data)], null):null),((cljs.core.deref(adding) === true)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,warehouse.pages.list.views.form_template,new_item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (e){
var G__20122_20123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_create,cljs.core.deref(new_item)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20122_20123) : re_frame.core.dispatch.call(null,G__20122_20123));

cljs.core.reset_BANG_(new_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$tags,"",cljs.core.cst$kw$amount,(1)], null));

cljs.core.reset_BANG_(adding,false);

return null;
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (e){
cljs.core.reset_BANG_(adding,false);

return null;
});})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
], null),"Cancel"], null)], null):null),((cljs.core.deref(showing_changeset) === true)?(function (){var cs = cljs.core.deref(change_sets);
var k1 = cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(cs),(0),(-1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (cs,k1,adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (change_set_col,k2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(warehouse.pages.list.views.show_change_set,change_set_col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cs,k1,adding,showing_changeset,new_item,visible_components,change_sets,import_form_data){
return (function (p1__20118_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k2),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20118_SHARP_)].join('');
});})(cs,k1,adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(change_set_col),(0),(-1))));
});})(cs,k1,adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
,cs,k1);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.list.views.selected_components,cljs.core.deref(visible_components)], null)], null);
});
;})(adding,showing_changeset,new_item,visible_components,change_sets,import_form_data))
});
