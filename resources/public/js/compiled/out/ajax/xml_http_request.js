// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18549,handler){
var map__18550 = p__18549;
var map__18550__$1 = ((((!((map__18550 == null)))?((((map__18550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18550):map__18550);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18550__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18550__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18550,map__18550__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18548_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__18548_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__18550,map__18550__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___18562 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___18562)){
var response_type_18563 = temp__4657__auto___18562;
this$__$1.responseType = cljs.core.name(response_type_18563);
} else {
}

var seq__18552_18564 = cljs.core.seq(headers);
var chunk__18553_18565 = null;
var count__18554_18566 = (0);
var i__18555_18567 = (0);
while(true){
if((i__18555_18567 < count__18554_18566)){
var vec__18556_18568 = chunk__18553_18565.cljs$core$IIndexed$_nth$arity$2(null,i__18555_18567);
var k_18569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18556_18568,(0),null);
var v_18570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18556_18568,(1),null);
this$__$1.setRequestHeader(k_18569,v_18570);

var G__18571 = seq__18552_18564;
var G__18572 = chunk__18553_18565;
var G__18573 = count__18554_18566;
var G__18574 = (i__18555_18567 + (1));
seq__18552_18564 = G__18571;
chunk__18553_18565 = G__18572;
count__18554_18566 = G__18573;
i__18555_18567 = G__18574;
continue;
} else {
var temp__4657__auto___18575 = cljs.core.seq(seq__18552_18564);
if(temp__4657__auto___18575){
var seq__18552_18576__$1 = temp__4657__auto___18575;
if(cljs.core.chunked_seq_QMARK_(seq__18552_18576__$1)){
var c__7398__auto___18577 = cljs.core.chunk_first(seq__18552_18576__$1);
var G__18578 = cljs.core.chunk_rest(seq__18552_18576__$1);
var G__18579 = c__7398__auto___18577;
var G__18580 = cljs.core.count(c__7398__auto___18577);
var G__18581 = (0);
seq__18552_18564 = G__18578;
chunk__18553_18565 = G__18579;
count__18554_18566 = G__18580;
i__18555_18567 = G__18581;
continue;
} else {
var vec__18559_18582 = cljs.core.first(seq__18552_18576__$1);
var k_18583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18559_18582,(0),null);
var v_18584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18559_18582,(1),null);
this$__$1.setRequestHeader(k_18583,v_18584);

var G__18585 = cljs.core.next(seq__18552_18576__$1);
var G__18586 = null;
var G__18587 = (0);
var G__18588 = (0);
seq__18552_18564 = G__18585;
chunk__18553_18565 = G__18586;
count__18554_18566 = G__18587;
i__18555_18567 = G__18588;
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
