// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__29073,handler){
var map__29074 = p__29073;
var map__29074__$1 = ((((!((map__29074 == null)))?((((map__29074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29074):map__29074);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29074__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29074__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__29074,map__29074__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__29072_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__29072_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__29074,map__29074__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___29086 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___29086)){
var response_type_29087 = temp__4657__auto___29086;
this$__$1.responseType = cljs.core.name(response_type_29087);
} else {
}

var seq__29076_29088 = cljs.core.seq(headers);
var chunk__29077_29089 = null;
var count__29078_29090 = (0);
var i__29079_29091 = (0);
while(true){
if((i__29079_29091 < count__29078_29090)){
var vec__29080_29092 = chunk__29077_29089.cljs$core$IIndexed$_nth$arity$2(null,i__29079_29091);
var k_29093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080_29092,(0),null);
var v_29094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080_29092,(1),null);
this$__$1.setRequestHeader(k_29093,v_29094);

var G__29095 = seq__29076_29088;
var G__29096 = chunk__29077_29089;
var G__29097 = count__29078_29090;
var G__29098 = (i__29079_29091 + (1));
seq__29076_29088 = G__29095;
chunk__29077_29089 = G__29096;
count__29078_29090 = G__29097;
i__29079_29091 = G__29098;
continue;
} else {
var temp__4657__auto___29099 = cljs.core.seq(seq__29076_29088);
if(temp__4657__auto___29099){
var seq__29076_29100__$1 = temp__4657__auto___29099;
if(cljs.core.chunked_seq_QMARK_(seq__29076_29100__$1)){
var c__7398__auto___29101 = cljs.core.chunk_first(seq__29076_29100__$1);
var G__29102 = cljs.core.chunk_rest(seq__29076_29100__$1);
var G__29103 = c__7398__auto___29101;
var G__29104 = cljs.core.count(c__7398__auto___29101);
var G__29105 = (0);
seq__29076_29088 = G__29102;
chunk__29077_29089 = G__29103;
count__29078_29090 = G__29104;
i__29079_29091 = G__29105;
continue;
} else {
var vec__29083_29106 = cljs.core.first(seq__29076_29100__$1);
var k_29107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29083_29106,(0),null);
var v_29108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29083_29106,(1),null);
this$__$1.setRequestHeader(k_29107,v_29108);

var G__29109 = cljs.core.next(seq__29076_29100__$1);
var G__29110 = null;
var G__29111 = (0);
var G__29112 = (0);
seq__29076_29088 = G__29109;
chunk__29077_29089 = G__29110;
count__29078_29090 = G__29111;
i__29079_29091 = G__29112;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6584__auto__ = body;
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
