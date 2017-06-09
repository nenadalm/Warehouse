// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.component_import.subs');
goog.require('warehouse.component_import.events');
goog.require('warehouse.util');
goog.require('re_frame.core');
warehouse.component_import.views.file_input = (function warehouse$component_import$views$file_input(name,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,f], null)], null),name], null)], null);
});
warehouse.component_import.views.component_provider = (function warehouse$component_import$views$component_provider(provider){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
var G__16347_16348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import,provider], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16347_16348) : re_frame.core.dispatch.call(null,G__16347_16348));

return null;
})], null),"From ",cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)], null);
});
warehouse.component_import.views.import_button = (function warehouse$component_import$views$import_button(){
var component_providers = (function (){var G__16358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$component_DASH_providers], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16358) : re_frame.core.subscribe.call(null,G__16358));
})();
return ((function (component_providers){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$dropdown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (component_providers){
return (function (e){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(e.target.tagName,"INPUT")){
e.currentTarget.classList.toggle("open");
} else {
}

return null;
});})(component_providers))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,"Import"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.file_input,"From file",((function (component_providers){
return (function (e){
var reader_16366 = (new FileReader());
var this_16367 = (e["currentTarget"]);
(reader_16366["onload"] = ((function (reader_16366,this_16367,component_providers){
return (function (reader_event){
var G__16359_16368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_document,((function (reader_16366,this_16367,component_providers){
return (function (p1__16349_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__16349_SHARP_,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});})(reader_16366,this_16367,component_providers))
.call(null,JSON.parse(reader_event.target.result))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16359_16368) : re_frame.core.dispatch.call(null,G__16359_16368));

return (this_16367["value"] = "");
});})(reader_16366,this_16367,component_providers))
);

reader_16366.readAsText((e["target"]["files"]["0"]));

return null;
});})(component_providers))
], null)], null),(function (){var iter__7814__auto__ = ((function (component_providers){
return (function warehouse$component_import$views$import_button_$_iter__16360(s__16361){
return (new cljs.core.LazySeq(null,((function (component_providers){
return (function (){
var s__16361__$1 = s__16361;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16361__$1);
if(temp__4657__auto__){
var s__16361__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16361__$2)){
var c__7812__auto__ = cljs.core.chunk_first(s__16361__$2);
var size__7813__auto__ = cljs.core.count(c__7812__auto__);
var b__16363 = cljs.core.chunk_buffer(size__7813__auto__);
if((function (){var i__16362 = (0);
while(true){
if((i__16362 < size__7813__auto__)){
var provider = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7812__auto__,i__16362);
cljs.core.chunk_append(b__16363,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.component_provider,provider], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)));

var G__16369 = (i__16362 + (1));
i__16362 = G__16369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16363),warehouse$component_import$views$import_button_$_iter__16360(cljs.core.chunk_rest(s__16361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16363),null);
}
} else {
var provider = cljs.core.first(s__16361__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.component_provider,provider], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)),warehouse$component_import$views$import_button_$_iter__16360(cljs.core.rest(s__16361__$2)));
}
} else {
return null;
}
break;
}
});})(component_providers))
,null,null));
});})(component_providers))
;
return iter__7814__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(component_providers) : cljs.core.deref.call(null,component_providers)));
})()], null)], null);
});
;})(component_providers))
});
warehouse.component_import.views.import_form = (function warehouse$component_import$views$import_form(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$import,(function (){var iter__7814__auto__ = (function warehouse$component_import$views$import_form_$_iter__16378(s__16379){
return (new cljs.core.LazySeq(null,(function (){
var s__16379__$1 = s__16379;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16379__$1);
if(temp__4657__auto__){
var s__16379__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16379__$2)){
var c__7812__auto__ = cljs.core.chunk_first(s__16379__$2);
var size__7813__auto__ = cljs.core.count(c__7812__auto__);
var b__16381 = cljs.core.chunk_buffer(size__7813__auto__);
if((function (){var i__16380 = (0);
while(true){
if((i__16380 < size__7813__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7812__auto__,i__16380);
cljs.core.chunk_append(b__16381,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__16386 = (i__16380 + (1));
i__16380 = G__16386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16381),warehouse$component_import$views$import_form_$_iter__16378(cljs.core.chunk_rest(s__16379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16381),null);
}
} else {
var item = cljs.core.first(s__16379__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)),warehouse$component_import$views$import_form_$_iter__16378(cljs.core.rest(s__16379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7814__auto__(cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(data));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (e){
var process_data_16387 = warehouse.util.iterator__GT_map((new FormData(document.querySelector("form.import"))));
var G__16384_16388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$title,"Import",cljs.core.cst$kw$name,cljs.core.cst$kw$import,cljs.core.cst$kw$data,process_data_16387], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16384_16388) : re_frame.core.dispatch.call(null,G__16384_16388));

return null;
})], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (e){
var G__16385_16389 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_cancel], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16385_16389) : re_frame.core.dispatch.call(null,G__16385_16389));

return null;
})], null),"Cancel"], null)], null);
});
