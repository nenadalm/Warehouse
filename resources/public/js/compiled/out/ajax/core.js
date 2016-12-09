// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('clojure.string');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response(interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request(interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7206__auto__,k__7207__auto__){
var self__ = this;
var this__7206__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7206__auto____$1,k__7207__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k29290,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__29292 = (((k29290 instanceof cljs.core.Keyword))?k29290.fqn:null);
switch (G__29292) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29290,else__7209__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__29293,opts){
var self__ = this;
var map__29294 = p__29293;
var map__29294__$1 = ((((!((map__29294 == null)))?((((map__29294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29294):map__29294);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29294__$1,cljs.core.cst$kw$request);
var map__29296 = this;
var map__29296__$1 = ((((!((map__29296 == null)))?((((map__29296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29296):map__29296);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29296__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__29298,xhrio){
var self__ = this;
var map__29299 = p__29298;
var map__29299__$1 = ((((!((map__29299 == null)))?((((map__29299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29299):map__29299);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29299__$1,cljs.core.cst$kw$response);
var map__29301 = this;
var map__29301__$1 = ((((!((map__29301 == null)))?((((map__29301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29301):map__29301);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29301__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7220__auto__,writer__7221__auto__,opts__7222__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
var pr_pair__7223__auto__ = ((function (this__7220__auto____$1){
return (function (keyval__7224__auto__){
return cljs.core.pr_sequential_writer(writer__7221__auto__,cljs.core.pr_writer,""," ","",opts__7222__auto__,keyval__7224__auto__);
});})(this__7220__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7221__auto__,pr_pair__7223__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__7222__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29289){
var self__ = this;
var G__29289__$1 = this;
return (new cljs.core.RecordIter((0),G__29289__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7204__auto__){
var self__ = this;
var this__7204__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7200__auto__){
var self__ = this;
var this__7200__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7201__auto__){
var self__ = this;
var this__7201__auto____$1 = this;
var h__7019__auto__ = self__.__hash;
if(!((h__7019__auto__ == null))){
return h__7019__auto__;
} else {
var h__7019__auto____$1 = cljs.core.hash_imap(this__7201__auto____$1);
self__.__hash = h__7019__auto____$1;

return h__7019__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7202__auto__,other__7203__auto__){
var self__ = this;
var this__7202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6572__auto__ = other__7203__auto__;
if(cljs.core.truth_(and__6572__auto__)){
var and__6572__auto____$1 = (this__7202__auto____$1.constructor === other__7203__auto__.constructor);
if(and__6572__auto____$1){
return cljs.core.equiv_map(this__7202__auto____$1,other__7203__auto__);
} else {
return and__6572__auto____$1;
}
} else {
return and__6572__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7215__auto__,k__7216__auto__){
var self__ = this;
var this__7215__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__7216__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7215__auto____$1),self__.__meta),k__7216__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7216__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__29289){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__29303 = cljs.core.keyword_identical_QMARK_;
var expr__29304 = k__7214__auto__;
if(cljs.core.truth_((function (){var G__29306 = cljs.core.cst$kw$name;
var G__29307 = expr__29304;
return (pred__29303.cljs$core$IFn$_invoke$arity$2 ? pred__29303.cljs$core$IFn$_invoke$arity$2(G__29306,G__29307) : pred__29303.call(null,G__29306,G__29307));
})())){
return (new ajax.core.StandardInterceptor(G__29289,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29308 = cljs.core.cst$kw$request;
var G__29309 = expr__29304;
return (pred__29303.cljs$core$IFn$_invoke$arity$2 ? pred__29303.cljs$core$IFn$_invoke$arity$2(G__29308,G__29309) : pred__29303.call(null,G__29308,G__29309));
})())){
return (new ajax.core.StandardInterceptor(self__.name,G__29289,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29310 = cljs.core.cst$kw$response;
var G__29311 = expr__29304;
return (pred__29303.cljs$core$IFn$_invoke$arity$2 ? pred__29303.cljs$core$IFn$_invoke$arity$2(G__29310,G__29311) : pred__29303.call(null,G__29310,G__29311));
})())){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__29289,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__29289),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__29289){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__29289,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7211__auto__,entry__7212__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7212__auto__)){
return cljs.core._assoc(this__7211__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7211__auto____$1,entry__7212__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__7240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__7240__auto__,writer__7241__auto__){
return cljs.core._write(writer__7241__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__29291){
return (new ajax.core.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__29291),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__29291),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__29291),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29291,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__6584__auto__ = ajax.protocols._get_response_header(response,"Content-Type");
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort(this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__29313,xhrio){
var map__29316 = p__29313;
var map__29316__$1 = ((((!((map__29316 == null)))?((((map__29316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29316):map__29316);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29316__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str(ajax.core.exception_message(e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.array_seq([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.array_seq([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29322 = arguments.length;
var i__7693__auto___29323 = (0);
while(true){
if((i__7693__auto___29323 < len__7692__auto___29322)){
args__7699__auto__.push((arguments[i__7693__auto___29323]));

var G__29324 = (i__7693__auto___29323 + (1));
i__7693__auto___29323 = G__29324;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((3) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7700__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq29318){
var G__29319 = cljs.core.first(seq29318);
var seq29318__$1 = cljs.core.next(seq29318);
var G__29320 = cljs.core.first(seq29318__$1);
var seq29318__$2 = cljs.core.next(seq29318__$1);
var G__29321 = cljs.core.first(seq29318__$2);
var seq29318__$3 = cljs.core.next(seq29318__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__29319,G__29320,G__29321,seq29318__$3);
});

ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7206__auto__,k__7207__auto__){
var self__ = this;
var this__7206__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7206__auto____$1,k__7207__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k29327,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__29329 = (((k29327 instanceof cljs.core.Keyword))?k29327.fqn:null);
switch (G__29329) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29327,else__7209__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__29330,request){
var self__ = this;
var map__29331 = p__29330;
var map__29331__$1 = ((((!((map__29331 == null)))?((((map__29331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29331):map__29331);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29331__$1,cljs.core.cst$kw$content_DASH_type);
var map__29333 = this;
var map__29333__$1 = ((((!((map__29333 == null)))?((((map__29333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29333):map__29333);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29333__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__29333,map__29333__$1,content_type__$2,map__29331,map__29331__$1,content_type__$1){
return (function (p1__29325_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header(content_type__$2)], null),(function (){var or__6584__auto__ = p1__29325_SHARP_;
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__29333,map__29333__$1,content_type__$2,map__29331,map__29331__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__29335,xhrio){
var self__ = this;
var map__29336 = p__29335;
var map__29336__$1 = ((((!((map__29336 == null)))?((((map__29336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29336):map__29336);
var format = map__29336__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29336__$1,cljs.core.cst$kw$read);
var map__29338 = this;
var map__29338__$1 = ((((!((map__29338 == null)))?((((map__29338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29338):map__29338);
var format__$1 = map__29338__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29338__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
var G__29341 = status;
switch (G__29341) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__29342 = "Request failed.";
var G__29343 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__29342,G__29343) : fail.call(null,G__29342,G__29343));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__29344 = "Request aborted by client.";
var G__29345 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__29344,G__29345) : fail.call(null,G__29344,G__29345));
} else {
var G__29346 = "Request timed out.";
var G__29347 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__29346,G__29347) : fail.call(null,G__29346,G__29347));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__29349 = ajax.protocols._status_text(xhrio);
var G__29350 = cljs.core.cst$kw$error;
var G__29351 = cljs.core.cst$kw$response;
var G__29352 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__29349,G__29350,G__29351,G__29352) : fail.call(null,G__29349,G__29350,G__29351,G__29352));
}
}catch (e29348){if((e29348 instanceof Object)){
var e = e29348;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e29348;

}
}
}
}catch (e29340){if((e29340 instanceof Object)){
var e = e29340;
var message = e.message;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.array_seq([cljs.core.cst$kw$exception,e], 0));
} else {
throw e29340;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7220__auto__,writer__7221__auto__,opts__7222__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
var pr_pair__7223__auto__ = ((function (this__7220__auto____$1){
return (function (keyval__7224__auto__){
return cljs.core.pr_sequential_writer(writer__7221__auto__,cljs.core.pr_writer,""," ","",opts__7222__auto__,keyval__7224__auto__);
});})(this__7220__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7221__auto__,pr_pair__7223__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__7222__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29326){
var self__ = this;
var G__29326__$1 = this;
return (new cljs.core.RecordIter((0),G__29326__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7204__auto__){
var self__ = this;
var this__7204__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7200__auto__){
var self__ = this;
var this__7200__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7201__auto__){
var self__ = this;
var this__7201__auto____$1 = this;
var h__7019__auto__ = self__.__hash;
if(!((h__7019__auto__ == null))){
return h__7019__auto__;
} else {
var h__7019__auto____$1 = cljs.core.hash_imap(this__7201__auto____$1);
self__.__hash = h__7019__auto____$1;

return h__7019__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7202__auto__,other__7203__auto__){
var self__ = this;
var this__7202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6572__auto__ = other__7203__auto__;
if(cljs.core.truth_(and__6572__auto__)){
var and__6572__auto____$1 = (this__7202__auto____$1.constructor === other__7203__auto__.constructor);
if(and__6572__auto____$1){
return cljs.core.equiv_map(this__7202__auto____$1,other__7203__auto__);
} else {
return and__6572__auto____$1;
}
} else {
return and__6572__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7215__auto__,k__7216__auto__){
var self__ = this;
var this__7215__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__7216__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7215__auto____$1),self__.__meta),k__7216__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7216__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__29326){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__29353 = cljs.core.keyword_identical_QMARK_;
var expr__29354 = k__7214__auto__;
if(cljs.core.truth_((function (){var G__29356 = cljs.core.cst$kw$read;
var G__29357 = expr__29354;
return (pred__29353.cljs$core$IFn$_invoke$arity$2 ? pred__29353.cljs$core$IFn$_invoke$arity$2(G__29356,G__29357) : pred__29353.call(null,G__29356,G__29357));
})())){
return (new ajax.core.ResponseFormat(G__29326,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29358 = cljs.core.cst$kw$description;
var G__29359 = expr__29354;
return (pred__29353.cljs$core$IFn$_invoke$arity$2 ? pred__29353.cljs$core$IFn$_invoke$arity$2(G__29358,G__29359) : pred__29353.call(null,G__29358,G__29359));
})())){
return (new ajax.core.ResponseFormat(self__.read,G__29326,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29360 = cljs.core.cst$kw$content_DASH_type;
var G__29361 = expr__29354;
return (pred__29353.cljs$core$IFn$_invoke$arity$2 ? pred__29353.cljs$core$IFn$_invoke$arity$2(G__29360,G__29361) : pred__29353.call(null,G__29360,G__29361));
})())){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__29326,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__29326),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__29326){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__29326,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7211__auto__,entry__7212__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7212__auto__)){
return cljs.core._assoc(this__7211__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7211__auto____$1,entry__7212__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__7240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__7240__auto__,writer__7241__auto__){
return cljs.core._write(writer__7241__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__29328){
return (new ajax.core.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__29328),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__29328),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__29328),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29328,cljs.core.cst$kw$read,cljs.core.array_seq([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return (function (){var G__29365 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__29365);
})().toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args29366 = [];
var len__7692__auto___29375 = arguments.length;
var i__7693__auto___29376 = (0);
while(true){
if((i__7693__auto___29376 < len__7692__auto___29375)){
args29366.push((arguments[i__7693__auto___29376]));

var G__29377 = (i__7693__auto___29376 + (1));
i__7693__auto___29376 = G__29377;
continue;
} else {
}
break;
}

var G__29368 = args29366.length;
switch (G__29368) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29366.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
var G__29369 = prefix;
var G__29370 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__29369,G__29370) : ajax.core.param_to_str.call(null,G__29369,G__29370));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
var G__29371 = prefix;
var G__29372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__29371,G__29372) : ajax.core.param_to_str.call(null,G__29371,G__29372));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
var G__29373 = prefix;
var G__29374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__29373,G__29374) : ajax.core.param_to_str.call(null,G__29373,G__29374));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;

ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args29379 = [];
var len__7692__auto___29390 = arguments.length;
var i__7693__auto___29391 = (0);
while(true){
if((i__7693__auto___29391 < len__7692__auto___29390)){
args29379.push((arguments[i__7693__auto___29391]));

var G__29392 = (i__7693__auto___29391 + (1));
i__7693__auto___29391 = G__29392;
continue;
} else {
}
break;
}

var G__29381 = args29379.length;
switch (G__29381) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29379.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__29382){
var vec__29383 = p__29382;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29383,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29383,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__29386){
var vec__29387 = p__29386;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;

ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29398){
var vec__29399 = p__29398;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29399,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29399,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.array_seq([cljs.core.seq(params)], 0))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args29402 = [];
var len__7692__auto___29405 = arguments.length;
var i__7693__auto___29406 = (0);
while(true){
if((i__7693__auto___29406 < len__7692__auto___29405)){
args29402.push((arguments[i__7693__auto___29406]));

var G__29407 = (i__7693__auto___29406 + (1));
i__7693__auto___29406 = G__29407;
continue;
} else {
}
break;
}

var G__29404 = args29402.length;
switch (G__29404) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29402.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;

ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7206__auto__,k__7207__auto__){
var self__ = this;
var this__7206__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7206__auto____$1,k__7207__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k29410,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__29412 = (((k29410 instanceof cljs.core.Keyword))?k29410.fqn:null);
switch (G__29412) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29410,else__7209__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__29413){
var self__ = this;
var map__29414 = p__29413;
var map__29414__$1 = ((((!((map__29414 == null)))?((((map__29414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29414):map__29414);
var request = map__29414__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29414__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7220__auto__,writer__7221__auto__,opts__7222__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
var pr_pair__7223__auto__ = ((function (this__7220__auto____$1){
return (function (keyval__7224__auto__){
return cljs.core.pr_sequential_writer(writer__7221__auto__,cljs.core.pr_writer,""," ","",opts__7222__auto__,keyval__7224__auto__);
});})(this__7220__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7221__auto__,pr_pair__7223__auto__,"#ajax.core.ProcessGet{",", ","}",opts__7222__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_to_DASH_str,self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29409){
var self__ = this;
var G__29409__$1 = this;
return (new cljs.core.RecordIter((0),G__29409__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params_DASH_to_DASH_str], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7204__auto__){
var self__ = this;
var this__7204__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7200__auto__){
var self__ = this;
var this__7200__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7201__auto__){
var self__ = this;
var this__7201__auto____$1 = this;
var h__7019__auto__ = self__.__hash;
if(!((h__7019__auto__ == null))){
return h__7019__auto__;
} else {
var h__7019__auto____$1 = cljs.core.hash_imap(this__7201__auto____$1);
self__.__hash = h__7019__auto____$1;

return h__7019__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7202__auto__,other__7203__auto__){
var self__ = this;
var this__7202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6572__auto__ = other__7203__auto__;
if(cljs.core.truth_(and__6572__auto__)){
var and__6572__auto____$1 = (this__7202__auto____$1.constructor === other__7203__auto__.constructor);
if(and__6572__auto____$1){
return cljs.core.equiv_map(this__7202__auto____$1,other__7203__auto__);
} else {
return and__6572__auto____$1;
}
} else {
return and__6572__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7215__auto__,k__7216__auto__){
var self__ = this;
var this__7215__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params_DASH_to_DASH_str,null], null), null),k__7216__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7215__auto____$1),self__.__meta),k__7216__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7216__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__29409){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__29416 = cljs.core.keyword_identical_QMARK_;
var expr__29417 = k__7214__auto__;
if(cljs.core.truth_((function (){var G__29419 = cljs.core.cst$kw$params_DASH_to_DASH_str;
var G__29420 = expr__29417;
return (pred__29416.cljs$core$IFn$_invoke$arity$2 ? pred__29416.cljs$core$IFn$_invoke$arity$2(G__29419,G__29420) : pred__29416.call(null,G__29419,G__29420));
})())){
return (new ajax.core.ProcessGet(G__29409,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__29409),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_to_DASH_str,self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__29409){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__29409,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7211__auto__,entry__7212__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7212__auto__)){
return cljs.core._assoc(this__7211__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7211__auto____$1,entry__7212__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params_DASH_to_DASH_str], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__7240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__7240__auto__,writer__7241__auto__){
return cljs.core._write(writer__7241__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__29411){
return (new ajax.core.ProcessGet(cljs.core.cst$kw$params_DASH_to_DASH_str.cljs$core$IFn$_invoke$arity$1(G__29411),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29411,cljs.core.cst$kw$params_DASH_to_DASH_str),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7206__auto__,k__7207__auto__){
var self__ = this;
var this__7206__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7206__auto____$1,k__7207__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k29423,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__29425 = k29423;
switch (G__29425) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29423,else__7209__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__29426){
var self__ = this;
var map__29427 = p__29426;
var map__29427__$1 = ((((!((map__29427 == null)))?((((map__29427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29427):map__29427);
var request = map__29427__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29427__$1,cljs.core.cst$kw$body);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29427__$1,cljs.core.cst$kw$params);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7220__auto__,writer__7221__auto__,opts__7222__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
var pr_pair__7223__auto__ = ((function (this__7220__auto____$1){
return (function (keyval__7224__auto__){
return cljs.core.pr_sequential_writer(writer__7221__auto__,cljs.core.pr_writer,""," ","",opts__7222__auto__,keyval__7224__auto__);
});})(this__7220__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7221__auto__,pr_pair__7223__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__7222__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29422){
var self__ = this;
var G__29422__$1 = this;
return (new cljs.core.RecordIter((0),G__29422__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7204__auto__){
var self__ = this;
var this__7204__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7200__auto__){
var self__ = this;
var this__7200__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7201__auto__){
var self__ = this;
var this__7201__auto____$1 = this;
var h__7019__auto__ = self__.__hash;
if(!((h__7019__auto__ == null))){
return h__7019__auto__;
} else {
var h__7019__auto____$1 = cljs.core.hash_imap(this__7201__auto____$1);
self__.__hash = h__7019__auto____$1;

return h__7019__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7202__auto__,other__7203__auto__){
var self__ = this;
var this__7202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6572__auto__ = other__7203__auto__;
if(cljs.core.truth_(and__6572__auto__)){
var and__6572__auto____$1 = (this__7202__auto____$1.constructor === other__7203__auto__.constructor);
if(and__6572__auto____$1){
return cljs.core.equiv_map(this__7202__auto____$1,other__7203__auto__);
} else {
return and__6572__auto____$1;
}
} else {
return and__6572__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7215__auto__,k__7216__auto__){
var self__ = this;
var this__7215__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7216__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7215__auto____$1),self__.__meta),k__7216__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7216__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__29422){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__29429 = cljs.core.keyword_identical_QMARK_;
var expr__29430 = k__7214__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__29422),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__29422){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__29422,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7211__auto__,entry__7212__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7212__auto__)){
return cljs.core._assoc(this__7211__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7211__auto____$1,entry__7212__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__7240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__7240__auto__,writer__7241__auto__){
return cljs.core._write(writer__7241__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__29424){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__29424),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7206__auto__,k__7207__auto__){
var self__ = this;
var this__7206__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7206__auto____$1,k__7207__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k29434,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__29436 = k29434;
switch (G__29436) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29434,else__7209__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__29437){
var self__ = this;
var map__29438 = p__29437;
var map__29438__$1 = ((((!((map__29438 == null)))?((((map__29438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29438):map__29438);
var request = map__29438__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__29440 = ajax.core.get_request_format(format);
var map__29440__$1 = ((((!((map__29440 == null)))?((((map__29440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29440):map__29440);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29440__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29440__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.core.apply_request_format(write,params):ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__6584__auto__ = headers;
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.array_seq([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.core.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7220__auto__,writer__7221__auto__,opts__7222__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
var pr_pair__7223__auto__ = ((function (this__7220__auto____$1){
return (function (keyval__7224__auto__){
return cljs.core.pr_sequential_writer(writer__7221__auto__,cljs.core.pr_writer,""," ","",opts__7222__auto__,keyval__7224__auto__);
});})(this__7220__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7221__auto__,pr_pair__7223__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__7222__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29433){
var self__ = this;
var G__29433__$1 = this;
return (new cljs.core.RecordIter((0),G__29433__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7204__auto__){
var self__ = this;
var this__7204__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7200__auto__){
var self__ = this;
var this__7200__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7201__auto__){
var self__ = this;
var this__7201__auto____$1 = this;
var h__7019__auto__ = self__.__hash;
if(!((h__7019__auto__ == null))){
return h__7019__auto__;
} else {
var h__7019__auto____$1 = cljs.core.hash_imap(this__7201__auto____$1);
self__.__hash = h__7019__auto____$1;

return h__7019__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7202__auto__,other__7203__auto__){
var self__ = this;
var this__7202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6572__auto__ = other__7203__auto__;
if(cljs.core.truth_(and__6572__auto__)){
var and__6572__auto____$1 = (this__7202__auto____$1.constructor === other__7203__auto__.constructor);
if(and__6572__auto____$1){
return cljs.core.equiv_map(this__7202__auto____$1,other__7203__auto__);
} else {
return and__6572__auto____$1;
}
} else {
return and__6572__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7215__auto__,k__7216__auto__){
var self__ = this;
var this__7215__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7216__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7215__auto____$1),self__.__meta),k__7216__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7216__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__29433){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__29442 = cljs.core.keyword_identical_QMARK_;
var expr__29443 = k__7214__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__29433),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__29433){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__29433,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7211__auto__,entry__7212__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7212__auto__)){
return cljs.core._assoc(this__7211__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7212__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7211__auto____$1,entry__7212__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__7240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__7240__auto__,writer__7241__auto__){
return cljs.core._write(writer__7241__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__29435){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__29435),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__29446){
var map__29449 = p__29446;
var map__29449__$1 = ((((!((map__29449 == null)))?((((map__29449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29449):map__29449);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29449__$1,cljs.core.cst$kw$type);
var or__6584__auto__ = type;
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return cljs.core.cst$kw$json;
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__6584__auto__ = cljs.core.cst$kw$writer.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write(writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args29451 = [];
var len__7692__auto___29454 = arguments.length;
var i__7693__auto___29455 = (0);
while(true){
if((i__7693__auto___29455 < len__7692__auto___29454)){
args29451.push((arguments[i__7693__auto___29455]));

var G__29456 = (i__7693__auto___29455 + (1));
i__7693__auto___29455 = G__29456;
continue;
} else {
}
break;
}

var G__29453 = args29451.length;
switch (G__29453) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29451.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type(request);
var mime_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.transit_write_fn(type,request),cljs.core.cst$kw$content_DASH_type,[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__6584__auto__ = cljs.core.cst$kw$reader.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read(reader,ajax.protocols._body(response));
if(cljs.core.truth_(cljs.core.cst$kw$raw.cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args29458 = [];
var len__7692__auto___29461 = arguments.length;
var i__7693__auto___29462 = (0);
while(true){
if((i__7693__auto___29462 < len__7692__auto___29461)){
args29458.push((arguments[i__7693__auto___29462]));

var G__29463 = (i__7693__auto___29462 + (1));
i__7693__auto___29462 = G__29463;
continue;
} else {
}
break;
}

var G__29460 = args29458.length;
switch (G__29460) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29458.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2(ajax.core.transit_type(request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.transit_read_fn(request),cljs.core.cst$kw$description,"Transit",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;

ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(ajax.core.params_to_str),cljs.core.cst$kw$content_DASH_type,"application/x-www-form-urlencoded; charset=utf-8"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args29465 = [];
var len__7692__auto___29468 = arguments.length;
var i__7693__auto___29469 = (0);
while(true){
if((i__7693__auto___29469 < len__7692__auto___29468)){
args29465.push((arguments[i__7693__auto___29469]));

var G__29470 = (i__7693__auto___29469 + (1));
i__7693__auto___29469 = G__29470;
continue;
} else {
}
break;
}

var G__29467 = args29465.length;
switch (G__29467) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29465.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"raw text",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(cljs.core.identity),cljs.core.cst$kw$content_DASH_type,"text/plain; charset=utf-8"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.write_json,cljs.core.cst$kw$content_DASH_type,"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__6572__auto__ = prefix;
if(cljs.core.truth_(and__6572__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__6572__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args29472 = [];
var len__7692__auto___29475 = arguments.length;
var i__7693__auto___29476 = (0);
while(true){
if((i__7693__auto___29476 < len__7692__auto___29475)){
args29472.push((arguments[i__7693__auto___29476]));

var G__29477 = (i__7693__auto___29476 + (1));
i__7693__auto___29476 = G__29477;
continue;
} else {
}
break;
}

var G__29474 = args29472.length;
switch (G__29474) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29472.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;

/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args29479 = [];
var len__7692__auto___29485 = arguments.length;
var i__7693__auto___29486 = (0);
while(true){
if((i__7693__auto___29486 < len__7692__auto___29485)){
args29479.push((arguments[i__7693__auto___29486]));

var G__29487 = (i__7693__auto___29486 + (1));
i__7693__auto___29486 = G__29487;
continue;
} else {
}
break;
}

var G__29481 = args29479.length;
switch (G__29481) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29479.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__29482){
var map__29483 = p__29482;
var map__29483__$1 = ((((!((map__29483 == null)))?((((map__29483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29483):map__29483);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29483__$1,cljs.core.cst$kw$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29483__$1,cljs.core.cst$kw$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29483__$1,cljs.core.cst$kw$raw);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.cst$kw$description,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args29489 = [];
var len__7692__auto___29492 = arguments.length;
var i__7693__auto___29493 = (0);
while(true){
if((i__7693__auto___29493 < len__7692__auto___29492)){
args29489.push((arguments[i__7693__auto___29493]));

var G__29494 = (i__7693__auto___29493 + (1));
i__7693__auto___29493 = G__29494;
continue;
} else {
}
break;
}

var G__29491 = args29489.length;
switch (G__29491) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29489.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;

ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args29496 = [];
var len__7692__auto___29499 = arguments.length;
var i__7693__auto___29500 = (0);
while(true){
if((i__7693__auto___29500 < len__7692__auto___29499)){
args29496.push((arguments[i__7693__auto___29500]));

var G__29501 = (i__7693__auto___29500 + (1));
i__7693__auto___29500 = G__29501;
continue;
} else {
}
break;
}

var G__29498 = args29496.length;
switch (G__29498) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29496.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args29503 = [];
var len__7692__auto___29506 = arguments.length;
var i__7693__auto___29507 = (0);
while(true){
if((i__7693__auto___29507 < len__7692__auto___29506)){
args29503.push((arguments[i__7693__auto___29507]));

var G__29508 = (i__7693__auto___29507 + (1));
i__7693__auto___29507 = G__29508;
continue;
} else {
}
break;
}

var G__29505 = args29503.length;
switch (G__29505) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29503.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args29510 = [];
var len__7692__auto___29513 = arguments.length;
var i__7693__auto___29514 = (0);
while(true){
if((i__7693__auto___29514 < len__7692__auto___29513)){
args29510.push((arguments[i__7693__auto___29514]));

var G__29515 = (i__7693__auto___29514 + (1));
i__7693__auto___29514 = G__29515;
continue;
} else {
}
break;
}

var G__29512 = args29510.length;
switch (G__29512) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29510.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__29517){
var map__29520 = p__29517;
var map__29520__$1 = ((((!((map__29520 == null)))?((((map__29520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29520):map__29520);
var request = map__29520__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29520__$1,cljs.core.cst$kw$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2(ajax.core.get_content_type(response),request);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args29522 = [];
var len__7692__auto___29525 = arguments.length;
var i__7693__auto___29526 = (0);
while(true){
if((i__7693__auto___29526 < len__7692__auto___29525)){
args29522.push((arguments[i__7693__auto___29526]));

var G__29527 = (i__7693__auto___29526 + (1));
i__7693__auto___29526 = G__29527;
continue;
} else {
}
break;
}

var G__29524 = args29522.length;
switch (G__29524) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29522.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.core.accept_header = (function ajax$core$accept_header(p__29529){
var map__29532 = p__29529;
var map__29532__$1 = ((((!((map__29532 == null)))?((((map__29532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29532):map__29532);
var request = map__29532__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29532__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1(request),cljs.core.array_seq([response_format], 0));
} else {
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args29534 = [];
var len__7692__auto___29537 = arguments.length;
var i__7693__auto___29538 = (0);
while(true){
if((i__7693__auto___29538 < len__7692__auto___29537)){
args29534.push((arguments[i__7693__auto___29538]));

var G__29539 = (i__7693__auto___29538 + (1));
i__7693__auto___29538 = G__29539;
continue;
} else {
}
break;
}

var G__29536 = args29534.length;
switch (G__29536) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29534.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$response_DASH_format,ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$format,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.cst$kw$content_DASH_type,accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.get_response_format = (function ajax$core$get_response_format(p__29541){
var map__29544 = p__29541;
var map__29544__$1 = ((((!((map__29544 == null)))?((((map__29544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29544):map__29544);
var opts = map__29544__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29544__$1,cljs.core.cst$kw$response_DASH_format);
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(response_format);
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args29546 = [];
var len__7692__auto___29549 = arguments.length;
var i__7693__auto___29550 = (0);
while(true){
if((i__7693__auto___29550 < len__7692__auto___29549)){
args29546.push((arguments[i__7693__auto___29550]));

var G__29551 = (i__7693__auto___29550 + (1));
i__7693__auto___29550 = G__29551;
continue;
} else {
}
break;
}

var G__29548 = args29546.length;
switch (G__29548) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29546.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;

ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__29553){
var map__29556 = p__29553;
var map__29556__$1 = ((((!((map__29556 == null)))?((((map__29556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29556):map__29556);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29556__$1,cljs.core.cst$kw$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(handler,interceptors);
} else {
return ajax.core.throw_error("No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = (function (){var G__29558 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29558) : cljs.core.atom.call(null,G__29558));
})();
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format(request);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$method,ajax.core.normalize_method),cljs.core.cst$kw$interceptors,((function (response_format){
return (function (p1__29559_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__6584__auto__ = p1__29559_SHARP_;
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.core.default_interceptors) : cljs.core.deref.call(null,ajax.core.default_interceptors));
}
})(),cljs.core.array_seq([ajax.core.request_interceptors], 0));
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__29560){
var map__29563 = p__29560;
var map__29563__$1 = ((((!((map__29563 == null)))?((((map__29563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29563):map__29563);
var request = map__29563__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29563__$1,cljs.core.cst$kw$interceptors);
var request__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler(cljs.core.reverse(interceptors),request__$1);
var api = (function (){var or__6584__auto__ = cljs.core.cst$kw$api.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return ajax.core.new_default_api();
}
})();
return ajax.protocols._js_ajax_request(api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request(ajax.core.normalize_request(request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$write,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__29566 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__29566) {
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_request_format();

break;
case "text":
return ajax.core.text_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "url":
return ajax.core.url_request_format();

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),(function (){var G__29571 = cljs.core.second(format);
var G__29572 = format_params;
return (ajax.core.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2 ? ajax.core.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2(G__29571,G__29572) : ajax.core.keyword_response_format_element.call(null,G__29571,G__29572));
})()], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,format,cljs.core.cst$kw$description,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__29573 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__29573) {
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "text":
return (ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null));

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29575_SHARP_){
return ajax.core.keyword_response_format_element(p1__29575_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element(format,format_params);
}
});
ajax.core.print_response = (function ajax$core$print_response(response){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["CLJS-AJAX response:",response], 0));
});
ajax.core.default_handler = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.core.print_response) : cljs.core.atom.call(null,ajax.core.print_response));
ajax.core.print_error_response = (function ajax$core$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str(response)].join(''));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["CLJS-AJAX ERROR:",response], 0));

}
}
});
ajax.core.default_error_handler = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.core.print_error_response) : cljs.core.atom.call(null,ajax.core.print_error_response));
ajax.core.transform_handler = (function ajax$core$transform_handler(p__29576){
var map__29586 = p__29576;
var map__29586__$1 = ((((!((map__29586 == null)))?((((map__29586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29586):map__29586);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29586__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29586__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29586__$1,cljs.core.cst$kw$finally);
var h = (function (){var or__6584__auto__ = handler;
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.core.default_handler) : cljs.core.deref.call(null,ajax.core.default_handler));
}
})();
var e = (function (){var or__6584__auto__ = error_handler;
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.core.default_error_handler) : cljs.core.deref.call(null,ajax.core.default_error_handler));
}
})();
return ((function (h,e,map__29586,map__29586__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__29588){
var vec__29592 = p__29588;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29592,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29592,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(h,e,map__29586,map__29586__$1,handler,error_handler,finally$))
});
ajax.core.transform_opts = (function ajax$core$transform_opts(p__29595){
var map__29598 = p__29595;
var map__29598__$1 = ((((!((map__29598 == null)))?((((map__29598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29598):map__29598);
var opts = map__29598__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29598__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29598__$1,cljs.core.cst$kw$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29598__$1,cljs.core.cst$kw$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29598__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29598__$1,cljs.core.cst$kw$body);

var needs_format = ((body == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"));
var rf = (cljs.core.truth_((function (){var or__6584__auto__ = format;
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$handler,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.cst$kw$format,rf,cljs.core.cst$kw$response_DASH_format,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$uri,uri,cljs.core.array_seq([cljs.core.cst$kw$method,method], 0))));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29602 = arguments.length;
var i__7693__auto___29603 = (0);
while(true){
if((i__7693__auto___29603 < len__7692__auto___29602)){
args__7699__auto__.push((arguments[i__7693__auto___29603]));

var G__29604 = (i__7693__auto___29603 + (1));
i__7693__auto___29603 = G__29604;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29154__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__29154__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__29154__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq29600){
var G__29601 = cljs.core.first(seq29600);
var seq29600__$1 = cljs.core.next(seq29600);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__29601,seq29600__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29607 = arguments.length;
var i__7693__auto___29608 = (0);
while(true){
if((i__7693__auto___29608 < len__7692__auto___29607)){
args__7699__auto__.push((arguments[i__7693__auto___29608]));

var G__29609 = (i__7693__auto___29608 + (1));
i__7693__auto___29608 = G__29609;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29154__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__29154__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__29154__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq29605){
var G__29606 = cljs.core.first(seq29605);
var seq29605__$1 = cljs.core.next(seq29605);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__29606,seq29605__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29612 = arguments.length;
var i__7693__auto___29613 = (0);
while(true){
if((i__7693__auto___29613 < len__7692__auto___29612)){
args__7699__auto__.push((arguments[i__7693__auto___29613]));

var G__29614 = (i__7693__auto___29613 + (1));
i__7693__auto___29613 = G__29614;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29154__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__29154__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__29154__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq29610){
var G__29611 = cljs.core.first(seq29610);
var seq29610__$1 = cljs.core.next(seq29610);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__29611,seq29610__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29617 = arguments.length;
var i__7693__auto___29618 = (0);
while(true){
if((i__7693__auto___29618 < len__7692__auto___29617)){
args__7699__auto__.push((arguments[i__7693__auto___29618]));

var G__29619 = (i__7693__auto___29618 + (1));
i__7693__auto___29618 = G__29619;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29154__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__29154__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__29154__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq29615){
var G__29616 = cljs.core.first(seq29615);
var seq29615__$1 = cljs.core.next(seq29615);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__29616,seq29615__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29622 = arguments.length;
var i__7693__auto___29623 = (0);
while(true){
if((i__7693__auto___29623 < len__7692__auto___29622)){
args__7699__auto__.push((arguments[i__7693__auto___29623]));

var G__29624 = (i__7693__auto___29623 + (1));
i__7693__auto___29623 = G__29624;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29154__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__29154__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__29154__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq29620){
var G__29621 = cljs.core.first(seq29620);
var seq29620__$1 = cljs.core.next(seq29620);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__29621,seq29620__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29627 = arguments.length;
var i__7693__auto___29628 = (0);
while(true){
if((i__7693__auto___29628 < len__7692__auto___29627)){
args__7699__auto__.push((arguments[i__7693__auto___29628]));

var G__29629 = (i__7693__auto___29628 + (1));
i__7693__auto___29628 = G__29629;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29154__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__29154__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__29154__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq29625){
var G__29626 = cljs.core.first(seq29625);
var seq29625__$1 = cljs.core.next(seq29625);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__29626,seq29625__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29632 = arguments.length;
var i__7693__auto___29633 = (0);
while(true){
if((i__7693__auto___29633 < len__7692__auto___29632)){
args__7699__auto__.push((arguments[i__7693__auto___29633]));

var G__29634 = (i__7693__auto___29633 + (1));
i__7693__auto___29633 = G__29634;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29154__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__29154__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__29154__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq29630){
var G__29631 = cljs.core.first(seq29630);
var seq29630__$1 = cljs.core.next(seq29630);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__29631,seq29630__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__7699__auto__ = [];
var len__7692__auto___29637 = arguments.length;
var i__7693__auto___29638 = (0);
while(true){
if((i__7693__auto___29638 < len__7692__auto___29637)){
args__7699__auto__.push((arguments[i__7693__auto___29638]));

var G__29639 = (i__7693__auto___29638 + (1));
i__7693__auto___29638 = G__29639;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29154__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PATCH",(((f__29154__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__29154__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq29635){
var G__29636 = cljs.core.first(seq29635);
var seq29635__$1 = cljs.core.next(seq29635);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__29636,seq29635__$1);
});

