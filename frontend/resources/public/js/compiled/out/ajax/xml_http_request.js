// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__15598,handler){
var map__15599 = p__15598;
var map__15599__$1 = ((((!((map__15599 == null)))?((((map__15599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15599):map__15599);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15599__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15599__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15599__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15599__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15599__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15599__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15599__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__15599,map__15599__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__15597_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__15597_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__15599,map__15599__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___15611 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___15611)){
var response_type_15612 = temp__4657__auto___15611;
this$__$1.responseType = cljs.core.name(response_type_15612);
} else {
}

var seq__15601_15613 = cljs.core.seq(headers);
var chunk__15602_15614 = null;
var count__15603_15615 = (0);
var i__15604_15616 = (0);
while(true){
if((i__15604_15616 < count__15603_15615)){
var vec__15605_15617 = chunk__15602_15614.cljs$core$IIndexed$_nth$arity$2(null,i__15604_15616);
var k_15618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15605_15617,(0),null);
var v_15619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15605_15617,(1),null);
this$__$1.setRequestHeader(k_15618,v_15619);

var G__15620 = seq__15601_15613;
var G__15621 = chunk__15602_15614;
var G__15622 = count__15603_15615;
var G__15623 = (i__15604_15616 + (1));
seq__15601_15613 = G__15620;
chunk__15602_15614 = G__15621;
count__15603_15615 = G__15622;
i__15604_15616 = G__15623;
continue;
} else {
var temp__4657__auto___15624 = cljs.core.seq(seq__15601_15613);
if(temp__4657__auto___15624){
var seq__15601_15625__$1 = temp__4657__auto___15624;
if(cljs.core.chunked_seq_QMARK_(seq__15601_15625__$1)){
var c__7845__auto___15626 = cljs.core.chunk_first(seq__15601_15625__$1);
var G__15627 = cljs.core.chunk_rest(seq__15601_15625__$1);
var G__15628 = c__7845__auto___15626;
var G__15629 = cljs.core.count(c__7845__auto___15626);
var G__15630 = (0);
seq__15601_15613 = G__15627;
chunk__15602_15614 = G__15628;
count__15603_15615 = G__15629;
i__15604_15616 = G__15630;
continue;
} else {
var vec__15608_15631 = cljs.core.first(seq__15601_15625__$1);
var k_15632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15608_15631,(0),null);
var v_15633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15608_15631,(1),null);
this$__$1.setRequestHeader(k_15632,v_15633);

var G__15634 = cljs.core.next(seq__15601_15625__$1);
var G__15635 = null;
var G__15636 = (0);
var G__15637 = (0);
seq__15601_15613 = G__15634;
chunk__15602_15614 = G__15635;
count__15603_15615 = G__15636;
i__15604_15616 = G__15637;
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
