// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__15484,handler){
var map__15485 = p__15484;
var map__15485__$1 = ((((!((map__15485 == null)))?((((map__15485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15485):map__15485);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15485__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15485__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__15485,map__15485__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__15483_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__15483_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__15485,map__15485__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___15497 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___15497)){
var response_type_15498 = temp__4657__auto___15497;
this$__$1.responseType = cljs.core.name(response_type_15498);
} else {
}

var seq__15487_15499 = cljs.core.seq(headers);
var chunk__15488_15500 = null;
var count__15489_15501 = (0);
var i__15490_15502 = (0);
while(true){
if((i__15490_15502 < count__15489_15501)){
var vec__15491_15503 = chunk__15488_15500.cljs$core$IIndexed$_nth$arity$2(null,i__15490_15502);
var k_15504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15491_15503,(0),null);
var v_15505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15491_15503,(1),null);
this$__$1.setRequestHeader(k_15504,v_15505);

var G__15506 = seq__15487_15499;
var G__15507 = chunk__15488_15500;
var G__15508 = count__15489_15501;
var G__15509 = (i__15490_15502 + (1));
seq__15487_15499 = G__15506;
chunk__15488_15500 = G__15507;
count__15489_15501 = G__15508;
i__15490_15502 = G__15509;
continue;
} else {
var temp__4657__auto___15510 = cljs.core.seq(seq__15487_15499);
if(temp__4657__auto___15510){
var seq__15487_15511__$1 = temp__4657__auto___15510;
if(cljs.core.chunked_seq_QMARK_(seq__15487_15511__$1)){
var c__7845__auto___15512 = cljs.core.chunk_first(seq__15487_15511__$1);
var G__15513 = cljs.core.chunk_rest(seq__15487_15511__$1);
var G__15514 = c__7845__auto___15512;
var G__15515 = cljs.core.count(c__7845__auto___15512);
var G__15516 = (0);
seq__15487_15499 = G__15513;
chunk__15488_15500 = G__15514;
count__15489_15501 = G__15515;
i__15490_15502 = G__15516;
continue;
} else {
var vec__15494_15517 = cljs.core.first(seq__15487_15511__$1);
var k_15518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494_15517,(0),null);
var v_15519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494_15517,(1),null);
this$__$1.setRequestHeader(k_15518,v_15519);

var G__15520 = cljs.core.next(seq__15487_15511__$1);
var G__15521 = null;
var G__15522 = (0);
var G__15523 = (0);
seq__15487_15499 = G__15520;
chunk__15488_15500 = G__15521;
count__15489_15501 = G__15522;
i__15490_15502 = G__15523;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__7026__auto__ = body;
if(cljs.core.truth_(or__7026__auto__)){
return or__7026__auto__;
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
