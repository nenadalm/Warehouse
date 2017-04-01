// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.component_import.views');
goog.require('cljs.core');
goog.require('warehouse.component_import.subs');
goog.require('warehouse.component_import.events');
goog.require('warehouse.util');
goog.require('re_frame.core');
warehouse.component_import.views.file_input = (function warehouse$component_import$views$file_input(name,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,f], null)], null),name], null)], null);
});
warehouse.component_import.views.component_provider = (function warehouse$component_import$views$component_provider(provider){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
var G__14813_14814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import,provider], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14813_14814) : re_frame.core.dispatch.call(null,G__14813_14814));

return null;
})], null),"From ",cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)], null);
});
warehouse.component_import.views.import_button = (function warehouse$component_import$views$import_button(){
var component_providers = (function (){var G__14824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$component_DASH_providers], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14824) : re_frame.core.subscribe.call(null,G__14824));
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
var reader_14832 = (new FileReader());
var this_14833 = (e["currentTarget"]);
(reader_14832["onload"] = ((function (reader_14832,this_14833,component_providers){
return (function (reader_event){
var G__14825_14834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_document,((function (reader_14832,this_14833,component_providers){
return (function (p1__14815_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__14815_SHARP_,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});})(reader_14832,this_14833,component_providers))
.call(null,JSON.parse(reader_event.target.result))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14825_14834) : re_frame.core.dispatch.call(null,G__14825_14834));

return (this_14833["value"] = "");
});})(reader_14832,this_14833,component_providers))
);

reader_14832.readAsText((e["target"]["files"]["0"]));

return null;
});})(component_providers))
], null)], null),(function (){var iter__7460__auto__ = ((function (component_providers){
return (function warehouse$component_import$views$import_button_$_iter__14826(s__14827){
return (new cljs.core.LazySeq(null,((function (component_providers){
return (function (){
var s__14827__$1 = s__14827;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14827__$1);
if(temp__4657__auto__){
var s__14827__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14827__$2)){
var c__7458__auto__ = cljs.core.chunk_first(s__14827__$2);
var size__7459__auto__ = cljs.core.count(c__7458__auto__);
var b__14829 = cljs.core.chunk_buffer(size__7459__auto__);
if((function (){var i__14828 = (0);
while(true){
if((i__14828 < size__7459__auto__)){
var provider = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7458__auto__,i__14828);
cljs.core.chunk_append(b__14829,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.component_provider,provider], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)));

var G__14835 = (i__14828 + (1));
i__14828 = G__14835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14829),warehouse$component_import$views$import_button_$_iter__14826(cljs.core.chunk_rest(s__14827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14829),null);
}
} else {
var provider = cljs.core.first(s__14827__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.component_provider,provider], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)),warehouse$component_import$views$import_button_$_iter__14826(cljs.core.rest(s__14827__$2)));
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
return iter__7460__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(component_providers) : cljs.core.deref.call(null,component_providers)));
})()], null)], null);
});
;})(component_providers))
});
warehouse.component_import.views.import_form = (function warehouse$component_import$views$import_form(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$import,(function (){var iter__7460__auto__ = (function warehouse$component_import$views$import_form_$_iter__14844(s__14845){
return (new cljs.core.LazySeq(null,(function (){
var s__14845__$1 = s__14845;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14845__$1);
if(temp__4657__auto__){
var s__14845__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14845__$2)){
var c__7458__auto__ = cljs.core.chunk_first(s__14845__$2);
var size__7459__auto__ = cljs.core.count(c__7458__auto__);
var b__14847 = cljs.core.chunk_buffer(size__7459__auto__);
if((function (){var i__14846 = (0);
while(true){
if((i__14846 < size__7459__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7458__auto__,i__14846);
cljs.core.chunk_append(b__14847,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__14852 = (i__14846 + (1));
i__14846 = G__14852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14847),warehouse$component_import$views$import_form_$_iter__14844(cljs.core.chunk_rest(s__14845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14847),null);
}
} else {
var item = cljs.core.first(s__14845__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)),warehouse$component_import$views$import_form_$_iter__14844(cljs.core.rest(s__14845__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7460__auto__(cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(data));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (e){
var process_data_14853 = warehouse.util.iterator__GT_map((new FormData(document.querySelector("form.import"))));
var G__14850_14854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$title,"Import",cljs.core.cst$kw$data,process_data_14853], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14850_14854) : re_frame.core.dispatch.call(null,G__14850_14854));

return null;
})], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (e){
var G__14851_14855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_cancel], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14851_14855) : re_frame.core.dispatch.call(null,G__14851_14855));

return null;
})], null),"Cancel"], null)], null);
});
