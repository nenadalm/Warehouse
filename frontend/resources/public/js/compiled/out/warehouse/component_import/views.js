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
var G__21151_21152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import,provider], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21151_21152) : re_frame.core.dispatch.call(null,G__21151_21152));

return null;
})], null),"From ",cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)], null);
});
warehouse.component_import.views.import_button = (function warehouse$component_import$views$import_button(){
var component_providers = (function (){var G__21162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$component_DASH_providers], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21162) : re_frame.core.subscribe.call(null,G__21162));
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
var reader_21170 = (new FileReader());
var this_21171 = (e["currentTarget"]);
(reader_21170["onload"] = ((function (reader_21170,this_21171,component_providers){
return (function (reader_event){
var G__21163_21172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_document,((function (reader_21170,this_21171,component_providers){
return (function (p1__21153_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__21153_SHARP_,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});})(reader_21170,this_21171,component_providers))
.call(null,JSON.parse(reader_event.target.result))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21163_21172) : re_frame.core.dispatch.call(null,G__21163_21172));

return (this_21171["value"] = "");
});})(reader_21170,this_21171,component_providers))
);

reader_21170.readAsText((e["target"]["files"]["0"]));

return null;
});})(component_providers))
], null)], null),(function (){var iter__7814__auto__ = ((function (component_providers){
return (function warehouse$component_import$views$import_button_$_iter__21164(s__21165){
return (new cljs.core.LazySeq(null,((function (component_providers){
return (function (){
var s__21165__$1 = s__21165;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21165__$1);
if(temp__4657__auto__){
var s__21165__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21165__$2)){
var c__7812__auto__ = cljs.core.chunk_first(s__21165__$2);
var size__7813__auto__ = cljs.core.count(c__7812__auto__);
var b__21167 = cljs.core.chunk_buffer(size__7813__auto__);
if((function (){var i__21166 = (0);
while(true){
if((i__21166 < size__7813__auto__)){
var provider = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7812__auto__,i__21166);
cljs.core.chunk_append(b__21167,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.component_provider,provider], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)));

var G__21173 = (i__21166 + (1));
i__21166 = G__21173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21167),warehouse$component_import$views$import_button_$_iter__21164(cljs.core.chunk_rest(s__21165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21167),null);
}
} else {
var provider = cljs.core.first(s__21165__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.component_provider,provider], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)),warehouse$component_import$views$import_button_$_iter__21164(cljs.core.rest(s__21165__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$import,(function (){var iter__7814__auto__ = (function warehouse$component_import$views$import_form_$_iter__21182(s__21183){
return (new cljs.core.LazySeq(null,(function (){
var s__21183__$1 = s__21183;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21183__$1);
if(temp__4657__auto__){
var s__21183__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21183__$2)){
var c__7812__auto__ = cljs.core.chunk_first(s__21183__$2);
var size__7813__auto__ = cljs.core.count(c__7812__auto__);
var b__21185 = cljs.core.chunk_buffer(size__7813__auto__);
if((function (){var i__21184 = (0);
while(true){
if((i__21184 < size__7813__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7812__auto__,i__21184);
cljs.core.chunk_append(b__21185,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__21190 = (i__21184 + (1));
i__21184 = G__21190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21185),warehouse$component_import$views$import_form_$_iter__21182(cljs.core.chunk_rest(s__21183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21185),null);
}
} else {
var item = cljs.core.first(s__21183__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)),warehouse$component_import$views$import_form_$_iter__21182(cljs.core.rest(s__21183__$2)));
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
var process_data_21191 = warehouse.util.iterator__GT_map((new FormData(document.querySelector("form.import"))));
var G__21188_21192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$title,"Import",cljs.core.cst$kw$name,cljs.core.cst$kw$import,cljs.core.cst$kw$data,process_data_21191], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21188_21192) : re_frame.core.dispatch.call(null,G__21188_21192));

return null;
})], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (e){
var G__21189_21193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_cancel], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21189_21193) : re_frame.core.dispatch.call(null,G__21189_21193));

return null;
})], null),"Cancel"], null)], null);
});