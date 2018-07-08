// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.pages.process.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('re_frame.core');
if(typeof warehouse.pages.process.db.run_process !== 'undefined'){
} else {
warehouse.pages.process.db.run_process = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("warehouse.pages.process.db","run-process"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p1__19464_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__19464_SHARP_),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__19464_SHARP_)],null));
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
warehouse.pages.process.db.run_process.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$import], null),(function (process){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(process),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),cljs.core.cst$kw$handler,(function (response){
var G__19465_19470 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_finished,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$success], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19465_19470) : re_frame.core.dispatch.call(null,G__19465_19470));

var G__19466_19471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,"Import succeeded"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19466_19471) : re_frame.core.dispatch.call(null,G__19466_19471));

var G__19467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_document,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,response], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19467) : re_frame.core.dispatch.call(null,G__19467));
}),cljs.core.cst$kw$error_DASH_handler,(function (){
var G__19468_19472 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_finished,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$error], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19468_19472) : re_frame.core.dispatch.call(null,G__19468_19472));

var G__19469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"Import failed"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19469) : re_frame.core.dispatch.call(null,G__19469));
})], 0));
}));
warehouse.pages.process.db.run_process.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$import_DASH_handlers], null),(function (process){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(process),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),cljs.core.cst$kw$handler,(function (response){
var G__19473_19478 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_finished,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$success], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19473_19478) : re_frame.core.dispatch.call(null,G__19473_19478));

var G__19474_19479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,"Loading of import providers succeeded"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19474_19479) : re_frame.core.dispatch.call(null,G__19474_19479));

var G__19475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_providers,response], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19475) : re_frame.core.dispatch.call(null,G__19475));
}),cljs.core.cst$kw$error_DASH_handler,(function (){
var G__19476_19480 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_finished,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(process),cljs.core.cst$kw$error], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19476_19480) : re_frame.core.dispatch.call(null,G__19476_19480));

var G__19477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"Loading of import providers failed"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19477) : re_frame.core.dispatch.call(null,G__19477));
})], 0));
}));
