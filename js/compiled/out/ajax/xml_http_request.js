// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13660,handler){
var map__13661 = p__13660;
var map__13661__$1 = ((((!((map__13661 == null)))?((((map__13661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13661):map__13661);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13661__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13661__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__13661,map__13661__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__13659_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__13659_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__13661,map__13661__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___13673 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___13673)){
var response_type_13674 = temp__4657__auto___13673;
this$__$1.responseType = cljs.core.name(response_type_13674);
} else {
}

var seq__13663_13675 = cljs.core.seq(headers);
var chunk__13664_13676 = null;
var count__13665_13677 = (0);
var i__13666_13678 = (0);
while(true){
if((i__13666_13678 < count__13665_13677)){
var vec__13667_13679 = chunk__13664_13676.cljs$core$IIndexed$_nth$arity$2(null,i__13666_13678);
var k_13680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13667_13679,(0),null);
var v_13681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13667_13679,(1),null);
this$__$1.setRequestHeader(k_13680,v_13681);

var G__13682 = seq__13663_13675;
var G__13683 = chunk__13664_13676;
var G__13684 = count__13665_13677;
var G__13685 = (i__13666_13678 + (1));
seq__13663_13675 = G__13682;
chunk__13664_13676 = G__13683;
count__13665_13677 = G__13684;
i__13666_13678 = G__13685;
continue;
} else {
var temp__4657__auto___13686 = cljs.core.seq(seq__13663_13675);
if(temp__4657__auto___13686){
var seq__13663_13687__$1 = temp__4657__auto___13686;
if(cljs.core.chunked_seq_QMARK_(seq__13663_13687__$1)){
var c__7491__auto___13688 = cljs.core.chunk_first(seq__13663_13687__$1);
var G__13689 = cljs.core.chunk_rest(seq__13663_13687__$1);
var G__13690 = c__7491__auto___13688;
var G__13691 = cljs.core.count(c__7491__auto___13688);
var G__13692 = (0);
seq__13663_13675 = G__13689;
chunk__13664_13676 = G__13690;
count__13665_13677 = G__13691;
i__13666_13678 = G__13692;
continue;
} else {
var vec__13670_13693 = cljs.core.first(seq__13663_13687__$1);
var k_13694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670_13693,(0),null);
var v_13695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670_13693,(1),null);
this$__$1.setRequestHeader(k_13694,v_13695);

var G__13696 = cljs.core.next(seq__13663_13687__$1);
var G__13697 = null;
var G__13698 = (0);
var G__13699 = (0);
seq__13663_13675 = G__13696;
chunk__13664_13676 = G__13697;
count__13665_13677 = G__13698;
i__13666_13678 = G__13699;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6677__auto__ = body;
if(cljs.core.truth_(or__6677__auto__)){
return or__6677__auto__;
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
