// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__15492,handler){
var map__15493 = p__15492;
var map__15493__$1 = ((((!((map__15493 == null)))?((((map__15493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15493):map__15493);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15493__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15493__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15493__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15493__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15493__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15493__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15493__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__15493,map__15493__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__15491_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__15491_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__15493,map__15493__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___15505 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___15505)){
var response_type_15506 = temp__4657__auto___15505;
this$__$1.responseType = cljs.core.name(response_type_15506);
} else {
}

var seq__15495_15507 = cljs.core.seq(headers);
var chunk__15496_15508 = null;
var count__15497_15509 = (0);
var i__15498_15510 = (0);
while(true){
if((i__15498_15510 < count__15497_15509)){
var vec__15499_15511 = chunk__15496_15508.cljs$core$IIndexed$_nth$arity$2(null,i__15498_15510);
var k_15512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15499_15511,(0),null);
var v_15513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15499_15511,(1),null);
this$__$1.setRequestHeader(k_15512,v_15513);

var G__15514 = seq__15495_15507;
var G__15515 = chunk__15496_15508;
var G__15516 = count__15497_15509;
var G__15517 = (i__15498_15510 + (1));
seq__15495_15507 = G__15514;
chunk__15496_15508 = G__15515;
count__15497_15509 = G__15516;
i__15498_15510 = G__15517;
continue;
} else {
var temp__4657__auto___15518 = cljs.core.seq(seq__15495_15507);
if(temp__4657__auto___15518){
var seq__15495_15519__$1 = temp__4657__auto___15518;
if(cljs.core.chunked_seq_QMARK_(seq__15495_15519__$1)){
var c__7845__auto___15520 = cljs.core.chunk_first(seq__15495_15519__$1);
var G__15521 = cljs.core.chunk_rest(seq__15495_15519__$1);
var G__15522 = c__7845__auto___15520;
var G__15523 = cljs.core.count(c__7845__auto___15520);
var G__15524 = (0);
seq__15495_15507 = G__15521;
chunk__15496_15508 = G__15522;
count__15497_15509 = G__15523;
i__15498_15510 = G__15524;
continue;
} else {
var vec__15502_15525 = cljs.core.first(seq__15495_15519__$1);
var k_15526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15502_15525,(0),null);
var v_15527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15502_15525,(1),null);
this$__$1.setRequestHeader(k_15526,v_15527);

var G__15528 = cljs.core.next(seq__15495_15519__$1);
var G__15529 = null;
var G__15530 = (0);
var G__15531 = (0);
seq__15495_15507 = G__15528;
chunk__15496_15508 = G__15529;
count__15497_15509 = G__15530;
i__15498_15510 = G__15531;
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
