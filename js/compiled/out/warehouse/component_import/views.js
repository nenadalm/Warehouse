// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
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
var G__12481_12482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import,provider], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12481_12482) : re_frame.core.dispatch.call(null,G__12481_12482));

return null;
})], null),"From ",cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)], null);
});
warehouse.component_import.views.import_button = (function warehouse$component_import$views$import_button(){
var component_providers = (function (){var G__12484 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$component_DASH_providers], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12484) : re_frame.core.subscribe.call(null,G__12484));
})();
return ((function (component_providers){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$dropdown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (component_providers){
return (function (e){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(e.target.tagName,"INPUT")){
return e.currentTarget.classList.toggle("open");
} else {
return null;
}
});})(component_providers))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,"Import"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.file_input,"From file",((function (component_providers){
return (function (e){
var reader = (new FileReader());
var this$ = (e["currentTarget"]);
(reader["onload"] = ((function (reader,this$,component_providers){
return (function (reader_event){
var G__12485_12492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_document,(function (){var G__12487 = JSON.parse(reader_event.target.result);
var fexpr__12486 = ((function (G__12487,reader,this$,component_providers){
return (function (p1__12483_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__12483_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});})(G__12487,reader,this$,component_providers))
;
return fexpr__12486(G__12487);
})()], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12485_12492) : re_frame.core.dispatch.call(null,G__12485_12492));

return (this$["value"] = "");
});})(reader,this$,component_providers))
);

return reader.readAsText((e["target"]["files"]["0"]));
});})(component_providers))
], null)], null),(function (){var iter__4324__auto__ = ((function (component_providers){
return (function warehouse$component_import$views$import_button_$_iter__12488(s__12489){
return (new cljs.core.LazySeq(null,((function (component_providers){
return (function (){
var s__12489__$1 = s__12489;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12489__$1);
if(temp__5457__auto__){
var s__12489__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12489__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12489__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12491 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12490 = (0);
while(true){
if((i__12490 < size__4323__auto__)){
var provider = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12490);
cljs.core.chunk_append(b__12491,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.component_provider,provider], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)));

var G__12493 = (i__12490 + (1));
i__12490 = G__12493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12491),warehouse$component_import$views$import_button_$_iter__12488(cljs.core.chunk_rest(s__12489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12491),null);
}
} else {
var provider = cljs.core.first(s__12489__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.component_provider,provider], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(provider)], null)),warehouse$component_import$views$import_button_$_iter__12488(cljs.core.rest(s__12489__$2)));
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
return iter__4324__auto__(cljs.core.deref(component_providers));
})()], null)], null);
});
;})(component_providers))
});
warehouse.component_import.views.import_form = (function warehouse$component_import$views$import_form(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$import,(function (){var iter__4324__auto__ = (function warehouse$component_import$views$import_form_$_iter__12494(s__12495){
return (new cljs.core.LazySeq(null,(function (){
var s__12495__$1 = s__12495;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12495__$1);
if(temp__5457__auto__){
var s__12495__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12495__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12495__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12497 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12496 = (0);
while(true){
if((i__12496 < size__4323__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12496);
cljs.core.chunk_append(b__12497,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__12500 = (i__12496 + (1));
i__12496 = G__12500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12497),warehouse$component_import$views$import_form_$_iter__12494(cljs.core.chunk_rest(s__12495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12497),null);
}
} else {
var item = cljs.core.first(s__12495__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)),warehouse$component_import$views$import_form_$_iter__12494(cljs.core.rest(s__12495__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(data));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (e){
var process_data_12501 = warehouse.util.iterator__GT_map((new FormData(document.querySelector("form.import"))));
var G__12498_12502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$xhr,cljs.core.cst$kw$url,cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$title,"Import",cljs.core.cst$kw$name,cljs.core.cst$kw$import,cljs.core.cst$kw$data,process_data_12501], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12498_12502) : re_frame.core.dispatch.call(null,G__12498_12502));

return null;
})], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (e){
var G__12499_12503 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_cancel], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12499_12503) : re_frame.core.dispatch.call(null,G__12499_12503));

return null;
})], null),"Cancel"], null)], null);
});
