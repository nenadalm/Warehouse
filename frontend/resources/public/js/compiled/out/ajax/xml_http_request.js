// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__11101 = e.target.readyState;
var fexpr__11100 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__11100.cljs$core$IFn$_invoke$arity$1 ? fexpr__11100.cljs$core$IFn$_invoke$arity$1(G__11101) : fexpr__11100.call(null,G__11101));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11103,handler){
var map__11104 = p__11103;
var map__11104__$1 = ((((!((map__11104 == null)))?(((((map__11104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11104):map__11104);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11104__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11104__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11104__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11104__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11104__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11104__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11104__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11104,map__11104__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11102_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__11102_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__11104,map__11104__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___11116 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___11116)){
var response_type_11117 = temp__5457__auto___11116;
this$__$1.responseType = cljs.core.name(response_type_11117);
} else {
}

var seq__11106_11118 = cljs.core.seq(headers);
var chunk__11107_11119 = null;
var count__11108_11120 = (0);
var i__11109_11121 = (0);
while(true){
if((i__11109_11121 < count__11108_11120)){
var vec__11110_11122 = chunk__11107_11119.cljs$core$IIndexed$_nth$arity$2(null,i__11109_11121);
var k_11123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110_11122,(0),null);
var v_11124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110_11122,(1),null);
this$__$1.setRequestHeader(k_11123,v_11124);


var G__11125 = seq__11106_11118;
var G__11126 = chunk__11107_11119;
var G__11127 = count__11108_11120;
var G__11128 = (i__11109_11121 + (1));
seq__11106_11118 = G__11125;
chunk__11107_11119 = G__11126;
count__11108_11120 = G__11127;
i__11109_11121 = G__11128;
continue;
} else {
var temp__5457__auto___11129 = cljs.core.seq(seq__11106_11118);
if(temp__5457__auto___11129){
var seq__11106_11130__$1 = temp__5457__auto___11129;
if(cljs.core.chunked_seq_QMARK_(seq__11106_11130__$1)){
var c__4319__auto___11131 = cljs.core.chunk_first(seq__11106_11130__$1);
var G__11132 = cljs.core.chunk_rest(seq__11106_11130__$1);
var G__11133 = c__4319__auto___11131;
var G__11134 = cljs.core.count(c__4319__auto___11131);
var G__11135 = (0);
seq__11106_11118 = G__11132;
chunk__11107_11119 = G__11133;
count__11108_11120 = G__11134;
i__11109_11121 = G__11135;
continue;
} else {
var vec__11113_11136 = cljs.core.first(seq__11106_11130__$1);
var k_11137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11113_11136,(0),null);
var v_11138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11113_11136,(1),null);
this$__$1.setRequestHeader(k_11137,v_11138);


var G__11139 = cljs.core.next(seq__11106_11130__$1);
var G__11140 = null;
var G__11141 = (0);
var G__11142 = (0);
seq__11106_11118 = G__11139;
chunk__11107_11119 = G__11140;
count__11108_11120 = G__11141;
i__11109_11121 = G__11142;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
