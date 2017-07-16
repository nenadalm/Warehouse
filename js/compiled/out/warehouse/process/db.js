// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.process.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('re_frame.core');
if(typeof warehouse.process.db.run_process !== 'undefined'){
} else {
warehouse.process.db.run_process = (function (){var method_table__7959__auto__ = (function (){var G__16054 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16054) : cljs.core.atom.call(null,G__16054));
})();
var prefer_table__7960__auto__ = (function (){var G__16055 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16055) : cljs.core.atom.call(null,G__16055));
})();
var method_cache__7961__auto__ = (function (){var G__16056 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16056) : cljs.core.atom.call(null,G__16056));
})();
var cached_hierarchy__7962__auto__ = (function (){var G__16057 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16057) : cljs.core.atom.call(null,G__16057));
})();
var hierarchy__7963__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("warehouse.process.db","run-process"),((function (method_table__7959__auto__,prefer_table__7960__auto__,method_cache__7961__auto__,cached_hierarchy__7962__auto__,hierarchy__7963__auto__){
return (function (p1__16053_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__16053_SHARP_),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__16053_SHARP_)],null));
});})(method_table__7959__auto__,prefer_table__7960__auto__,method_cache__7961__auto__,cached_hierarchy__7962__auto__,hierarchy__7963__auto__))
,cljs.core.cst$kw$default,hierarchy__7963__auto__,method_table__7959__auto__,prefer_table__7960__auto__,method_cache__7961__auto__,cached_hierarchy__7962__auto__));
})();
}
warehouse.process.db.run_process.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$import], null),(function (process){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(process),cljs.core.array_seq([cljs.core.cst$kw$params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),cljs.core.cst$kw$handler,(function (response){
var G__16058_16063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_finished,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$success], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16058_16063) : re_frame.core.dispatch.call(null,G__16058_16063));

var G__16059_16064 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,"Import succeeded"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16059_16064) : re_frame.core.dispatch.call(null,G__16059_16064));

var G__16060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_document,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,response], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16060) : re_frame.core.dispatch.call(null,G__16060));
}),cljs.core.cst$kw$error_DASH_handler,(function (){
var G__16061_16065 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_finished,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$error], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16061_16065) : re_frame.core.dispatch.call(null,G__16061_16065));

var G__16062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"Import failed"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16062) : re_frame.core.dispatch.call(null,G__16062));
})], 0));
}));
warehouse.process.db.run_process.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$import_DASH_handlers], null),(function (process){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(process),cljs.core.array_seq([cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),cljs.core.cst$kw$handler,(function (response){
var G__16066_16071 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_finished,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$success], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16066_16071) : re_frame.core.dispatch.call(null,G__16066_16071));

var G__16067_16072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,"Loading of import providers succeeded"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16067_16072) : re_frame.core.dispatch.call(null,G__16067_16072));

var G__16068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_providers,response], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16068) : re_frame.core.dispatch.call(null,G__16068));
}),cljs.core.cst$kw$error_DASH_handler,(function (){
var G__16069_16073 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_finished,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$error], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16069_16073) : re_frame.core.dispatch.call(null,G__16069_16073));

var G__16070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"Loading of import providers failed"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16070) : re_frame.core.dispatch.call(null,G__16070));
})], 0));
}));
