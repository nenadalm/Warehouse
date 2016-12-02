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

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k18766,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__18768 = (((k18766 instanceof cljs.core.Keyword))?k18766.fqn:null);
switch (G__18768) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18766,else__7209__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__18769,opts){
var self__ = this;
var map__18770 = p__18769;
var map__18770__$1 = ((((!((map__18770 == null)))?((((map__18770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18770):map__18770);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$request);
var map__18772 = this;
var map__18772__$1 = ((((!((map__18772 == null)))?((((map__18772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18772):map__18772);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18772__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__18774,xhrio){
var self__ = this;
var map__18775 = p__18774;
var map__18775__$1 = ((((!((map__18775 == null)))?((((map__18775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18775):map__18775);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18775__$1,cljs.core.cst$kw$response);
var map__18777 = this;
var map__18777__$1 = ((((!((map__18777 == null)))?((((map__18777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18777):map__18777);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18777__$1,cljs.core.cst$kw$response);
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

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18765){
var self__ = this;
var G__18765__$1 = this;
return (new cljs.core.RecordIter((0),G__18765__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__18765){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__18779 = cljs.core.keyword_identical_QMARK_;
var expr__18780 = k__7214__auto__;
if(cljs.core.truth_((function (){var G__18782 = cljs.core.cst$kw$name;
var G__18783 = expr__18780;
return (pred__18779.cljs$core$IFn$_invoke$arity$2 ? pred__18779.cljs$core$IFn$_invoke$arity$2(G__18782,G__18783) : pred__18779.call(null,G__18782,G__18783));
})())){
return (new ajax.core.StandardInterceptor(G__18765,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18784 = cljs.core.cst$kw$request;
var G__18785 = expr__18780;
return (pred__18779.cljs$core$IFn$_invoke$arity$2 ? pred__18779.cljs$core$IFn$_invoke$arity$2(G__18784,G__18785) : pred__18779.call(null,G__18784,G__18785));
})())){
return (new ajax.core.StandardInterceptor(self__.name,G__18765,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18786 = cljs.core.cst$kw$response;
var G__18787 = expr__18780;
return (pred__18779.cljs$core$IFn$_invoke$arity$2 ? pred__18779.cljs$core$IFn$_invoke$arity$2(G__18786,G__18787) : pred__18779.call(null,G__18786,G__18787));
})())){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__18765,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__18765),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__18765){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__18765,self__.__extmap,self__.__hash));
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

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__18767){
return (new ajax.core.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__18767),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__18767),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__18767),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18767,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0)),null));
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
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__18789,xhrio){
var map__18792 = p__18789;
var map__18792__$1 = ((((!((map__18792 == null)))?((((map__18792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18792):map__18792);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18792__$1,cljs.core.cst$kw$description);
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
var len__7692__auto___18798 = arguments.length;
var i__7693__auto___18799 = (0);
while(true){
if((i__7693__auto___18799 < len__7692__auto___18798)){
args__7699__auto__.push((arguments[i__7693__auto___18799]));

var G__18800 = (i__7693__auto___18799 + (1));
i__7693__auto___18799 = G__18800;
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

ajax.core.fail.cljs$lang$applyTo = (function (seq18794){
var G__18795 = cljs.core.first(seq18794);
var seq18794__$1 = cljs.core.next(seq18794);
var G__18796 = cljs.core.first(seq18794__$1);
var seq18794__$2 = cljs.core.next(seq18794__$1);
var G__18797 = cljs.core.first(seq18794__$2);
var seq18794__$3 = cljs.core.next(seq18794__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__18795,G__18796,G__18797,seq18794__$3);
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

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k18803,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__18805 = (((k18803 instanceof cljs.core.Keyword))?k18803.fqn:null);
switch (G__18805) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18803,else__7209__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__18806,request){
var self__ = this;
var map__18807 = p__18806;
var map__18807__$1 = ((((!((map__18807 == null)))?((((map__18807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18807):map__18807);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18807__$1,cljs.core.cst$kw$content_DASH_type);
var map__18809 = this;
var map__18809__$1 = ((((!((map__18809 == null)))?((((map__18809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18809):map__18809);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18809__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__18809,map__18809__$1,content_type__$2,map__18807,map__18807__$1,content_type__$1){
return (function (p1__18801_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header(content_type__$2)], null),(function (){var or__6584__auto__ = p1__18801_SHARP_;
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__18809,map__18809__$1,content_type__$2,map__18807,map__18807__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__18811,xhrio){
var self__ = this;
var map__18812 = p__18811;
var map__18812__$1 = ((((!((map__18812 == null)))?((((map__18812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18812):map__18812);
var format = map__18812__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18812__$1,cljs.core.cst$kw$read);
var map__18814 = this;
var map__18814__$1 = ((((!((map__18814 == null)))?((((map__18814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18814):map__18814);
var format__$1 = map__18814__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18814__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
var G__18817 = status;
switch (G__18817) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__18818 = "Request failed.";
var G__18819 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__18818,G__18819) : fail.call(null,G__18818,G__18819));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__18820 = "Request aborted by client.";
var G__18821 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__18820,G__18821) : fail.call(null,G__18820,G__18821));
} else {
var G__18822 = "Request timed out.";
var G__18823 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__18822,G__18823) : fail.call(null,G__18822,G__18823));
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
var G__18825 = ajax.protocols._status_text(xhrio);
var G__18826 = cljs.core.cst$kw$error;
var G__18827 = cljs.core.cst$kw$response;
var G__18828 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__18825,G__18826,G__18827,G__18828) : fail.call(null,G__18825,G__18826,G__18827,G__18828));
}
}catch (e18824){if((e18824 instanceof Object)){
var e = e18824;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e18824;

}
}
}
}catch (e18816){if((e18816 instanceof Object)){
var e = e18816;
var message = e.message;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.array_seq([cljs.core.cst$kw$exception,e], 0));
} else {
throw e18816;

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

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18802){
var self__ = this;
var G__18802__$1 = this;
return (new cljs.core.RecordIter((0),G__18802__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__18802){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__18829 = cljs.core.keyword_identical_QMARK_;
var expr__18830 = k__7214__auto__;
if(cljs.core.truth_((function (){var G__18832 = cljs.core.cst$kw$read;
var G__18833 = expr__18830;
return (pred__18829.cljs$core$IFn$_invoke$arity$2 ? pred__18829.cljs$core$IFn$_invoke$arity$2(G__18832,G__18833) : pred__18829.call(null,G__18832,G__18833));
})())){
return (new ajax.core.ResponseFormat(G__18802,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18834 = cljs.core.cst$kw$description;
var G__18835 = expr__18830;
return (pred__18829.cljs$core$IFn$_invoke$arity$2 ? pred__18829.cljs$core$IFn$_invoke$arity$2(G__18834,G__18835) : pred__18829.call(null,G__18834,G__18835));
})())){
return (new ajax.core.ResponseFormat(self__.read,G__18802,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18836 = cljs.core.cst$kw$content_DASH_type;
var G__18837 = expr__18830;
return (pred__18829.cljs$core$IFn$_invoke$arity$2 ? pred__18829.cljs$core$IFn$_invoke$arity$2(G__18836,G__18837) : pred__18829.call(null,G__18836,G__18837));
})())){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__18802,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__18802),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__18802){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__18802,self__.__extmap,self__.__hash));
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

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__18804){
return (new ajax.core.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__18804),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__18804),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__18804),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18804,cljs.core.cst$kw$read,cljs.core.array_seq([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return (function (){var G__18841 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__18841);
})().toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args18842 = [];
var len__7692__auto___18851 = arguments.length;
var i__7693__auto___18852 = (0);
while(true){
if((i__7693__auto___18852 < len__7692__auto___18851)){
args18842.push((arguments[i__7693__auto___18852]));

var G__18853 = (i__7693__auto___18852 + (1));
i__7693__auto___18852 = G__18853;
continue;
} else {
}
break;
}

var G__18844 = args18842.length;
switch (G__18844) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18842.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
var G__18845 = prefix;
var G__18846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__18845,G__18846) : ajax.core.param_to_str.call(null,G__18845,G__18846));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
var G__18847 = prefix;
var G__18848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__18847,G__18848) : ajax.core.param_to_str.call(null,G__18847,G__18848));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
var G__18849 = prefix;
var G__18850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__18849,G__18850) : ajax.core.param_to_str.call(null,G__18849,G__18850));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;

ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args18855 = [];
var len__7692__auto___18866 = arguments.length;
var i__7693__auto___18867 = (0);
while(true){
if((i__7693__auto___18867 < len__7692__auto___18866)){
args18855.push((arguments[i__7693__auto___18867]));

var G__18868 = (i__7693__auto___18867 + (1));
i__7693__auto___18867 = G__18868;
continue;
} else {
}
break;
}

var G__18857 = args18855.length;
switch (G__18857) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18855.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__18858){
var vec__18859 = p__18858;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18859,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18859,(1),null);
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
return (function (p__18862){
var vec__18863 = p__18862;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18863,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18863,(1),null);
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18874){
var vec__18875 = p__18874;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18875,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.array_seq([cljs.core.seq(params)], 0))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args18878 = [];
var len__7692__auto___18881 = arguments.length;
var i__7693__auto___18882 = (0);
while(true){
if((i__7693__auto___18882 < len__7692__auto___18881)){
args18878.push((arguments[i__7693__auto___18882]));

var G__18883 = (i__7693__auto___18882 + (1));
i__7693__auto___18882 = G__18883;
continue;
} else {
}
break;
}

var G__18880 = args18878.length;
switch (G__18880) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18878.length)].join('')));

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

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k18886,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__18888 = (((k18886 instanceof cljs.core.Keyword))?k18886.fqn:null);
switch (G__18888) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18886,else__7209__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__18889){
var self__ = this;
var map__18890 = p__18889;
var map__18890__$1 = ((((!((map__18890 == null)))?((((map__18890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18890):map__18890);
var request = map__18890__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18890__$1,cljs.core.cst$kw$method);
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

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18885){
var self__ = this;
var G__18885__$1 = this;
return (new cljs.core.RecordIter((0),G__18885__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params_DASH_to_DASH_str], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__18885){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__18892 = cljs.core.keyword_identical_QMARK_;
var expr__18893 = k__7214__auto__;
if(cljs.core.truth_((function (){var G__18895 = cljs.core.cst$kw$params_DASH_to_DASH_str;
var G__18896 = expr__18893;
return (pred__18892.cljs$core$IFn$_invoke$arity$2 ? pred__18892.cljs$core$IFn$_invoke$arity$2(G__18895,G__18896) : pred__18892.call(null,G__18895,G__18896));
})())){
return (new ajax.core.ProcessGet(G__18885,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__18885),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_to_DASH_str,self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__18885){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__18885,self__.__extmap,self__.__hash));
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

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__18887){
return (new ajax.core.ProcessGet(cljs.core.cst$kw$params_DASH_to_DASH_str.cljs$core$IFn$_invoke$arity$1(G__18887),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18887,cljs.core.cst$kw$params_DASH_to_DASH_str),null));
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

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k18899,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__18901 = k18899;
switch (G__18901) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18899,else__7209__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__18902){
var self__ = this;
var map__18903 = p__18902;
var map__18903__$1 = ((((!((map__18903 == null)))?((((map__18903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18903):map__18903);
var request = map__18903__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18903__$1,cljs.core.cst$kw$body);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18903__$1,cljs.core.cst$kw$params);
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

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18898){
var self__ = this;
var G__18898__$1 = this;
return (new cljs.core.RecordIter((0),G__18898__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__18898){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__18905 = cljs.core.keyword_identical_QMARK_;
var expr__18906 = k__7214__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__18898),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__18898){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__18898,self__.__extmap,self__.__hash));
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

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__18900){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__18900),null));
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

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7208__auto__,k18910,else__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
var G__18912 = k18910;
switch (G__18912) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18910,else__7209__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__18913){
var self__ = this;
var map__18914 = p__18913;
var map__18914__$1 = ((((!((map__18914 == null)))?((((map__18914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18914):map__18914);
var request = map__18914__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18914__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18914__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18914__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18914__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18914__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__18916 = ajax.core.get_request_format(format);
var map__18916__$1 = ((((!((map__18916 == null)))?((((map__18916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18916):map__18916);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18916__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18916__$1,cljs.core.cst$kw$content_DASH_type);
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

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18909){
var self__ = this;
var G__18909__$1 = this;
return (new cljs.core.RecordIter((0),G__18909__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7213__auto__,k__7214__auto__,G__18909){
var self__ = this;
var this__7213__auto____$1 = this;
var pred__18918 = cljs.core.keyword_identical_QMARK_;
var expr__18919 = k__7214__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7214__auto__,G__18909),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7218__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7205__auto__,G__18909){
var self__ = this;
var this__7205__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__18909,self__.__extmap,self__.__hash));
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

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__18911){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__18911),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__18922){
var map__18925 = p__18922;
var map__18925__$1 = ((((!((map__18925 == null)))?((((map__18925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18925):map__18925);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18925__$1,cljs.core.cst$kw$type);
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
var args18927 = [];
var len__7692__auto___18930 = arguments.length;
var i__7693__auto___18931 = (0);
while(true){
if((i__7693__auto___18931 < len__7692__auto___18930)){
args18927.push((arguments[i__7693__auto___18931]));

var G__18932 = (i__7693__auto___18931 + (1));
i__7693__auto___18931 = G__18932;
continue;
} else {
}
break;
}

var G__18929 = args18927.length;
switch (G__18929) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18927.length)].join('')));

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
var args18934 = [];
var len__7692__auto___18937 = arguments.length;
var i__7693__auto___18938 = (0);
while(true){
if((i__7693__auto___18938 < len__7692__auto___18937)){
args18934.push((arguments[i__7693__auto___18938]));

var G__18939 = (i__7693__auto___18938 + (1));
i__7693__auto___18938 = G__18939;
continue;
} else {
}
break;
}

var G__18936 = args18934.length;
switch (G__18936) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18934.length)].join('')));

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
var args18941 = [];
var len__7692__auto___18944 = arguments.length;
var i__7693__auto___18945 = (0);
while(true){
if((i__7693__auto___18945 < len__7692__auto___18944)){
args18941.push((arguments[i__7693__auto___18945]));

var G__18946 = (i__7693__auto___18945 + (1));
i__7693__auto___18945 = G__18946;
continue;
} else {
}
break;
}

var G__18943 = args18941.length;
switch (G__18943) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18941.length)].join('')));

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
var args18948 = [];
var len__7692__auto___18951 = arguments.length;
var i__7693__auto___18952 = (0);
while(true){
if((i__7693__auto___18952 < len__7692__auto___18951)){
args18948.push((arguments[i__7693__auto___18952]));

var G__18953 = (i__7693__auto___18952 + (1));
i__7693__auto___18952 = G__18953;
continue;
} else {
}
break;
}

var G__18950 = args18948.length;
switch (G__18950) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18948.length)].join('')));

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
var args18955 = [];
var len__7692__auto___18961 = arguments.length;
var i__7693__auto___18962 = (0);
while(true){
if((i__7693__auto___18962 < len__7692__auto___18961)){
args18955.push((arguments[i__7693__auto___18962]));

var G__18963 = (i__7693__auto___18962 + (1));
i__7693__auto___18962 = G__18963;
continue;
} else {
}
break;
}

var G__18957 = args18955.length;
switch (G__18957) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18955.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__18958){
var map__18959 = p__18958;
var map__18959__$1 = ((((!((map__18959 == null)))?((((map__18959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18959):map__18959);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18959__$1,cljs.core.cst$kw$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18959__$1,cljs.core.cst$kw$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18959__$1,cljs.core.cst$kw$raw);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.cst$kw$description,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args18965 = [];
var len__7692__auto___18968 = arguments.length;
var i__7693__auto___18969 = (0);
while(true){
if((i__7693__auto___18969 < len__7692__auto___18968)){
args18965.push((arguments[i__7693__auto___18969]));

var G__18970 = (i__7693__auto___18969 + (1));
i__7693__auto___18969 = G__18970;
continue;
} else {
}
break;
}

var G__18967 = args18965.length;
switch (G__18967) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18965.length)].join('')));

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
var args18972 = [];
var len__7692__auto___18975 = arguments.length;
var i__7693__auto___18976 = (0);
while(true){
if((i__7693__auto___18976 < len__7692__auto___18975)){
args18972.push((arguments[i__7693__auto___18976]));

var G__18977 = (i__7693__auto___18976 + (1));
i__7693__auto___18976 = G__18977;
continue;
} else {
}
break;
}

var G__18974 = args18972.length;
switch (G__18974) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18972.length)].join('')));

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
var args18979 = [];
var len__7692__auto___18982 = arguments.length;
var i__7693__auto___18983 = (0);
while(true){
if((i__7693__auto___18983 < len__7692__auto___18982)){
args18979.push((arguments[i__7693__auto___18983]));

var G__18984 = (i__7693__auto___18983 + (1));
i__7693__auto___18983 = G__18984;
continue;
} else {
}
break;
}

var G__18981 = args18979.length;
switch (G__18981) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18979.length)].join('')));

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
var args18986 = [];
var len__7692__auto___18989 = arguments.length;
var i__7693__auto___18990 = (0);
while(true){
if((i__7693__auto___18990 < len__7692__auto___18989)){
args18986.push((arguments[i__7693__auto___18990]));

var G__18991 = (i__7693__auto___18990 + (1));
i__7693__auto___18990 = G__18991;
continue;
} else {
}
break;
}

var G__18988 = args18986.length;
switch (G__18988) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18986.length)].join('')));

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

ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__18993){
var map__18996 = p__18993;
var map__18996__$1 = ((((!((map__18996 == null)))?((((map__18996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18996):map__18996);
var request = map__18996__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18996__$1,cljs.core.cst$kw$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2(ajax.core.get_content_type(response),request);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args18998 = [];
var len__7692__auto___19001 = arguments.length;
var i__7693__auto___19002 = (0);
while(true){
if((i__7693__auto___19002 < len__7692__auto___19001)){
args18998.push((arguments[i__7693__auto___19002]));

var G__19003 = (i__7693__auto___19002 + (1));
i__7693__auto___19002 = G__19003;
continue;
} else {
}
break;
}

var G__19000 = args18998.length;
switch (G__19000) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18998.length)].join('')));

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

ajax.core.accept_header = (function ajax$core$accept_header(p__19005){
var map__19008 = p__19005;
var map__19008__$1 = ((((!((map__19008 == null)))?((((map__19008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19008):map__19008);
var request = map__19008__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19008__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1(request),cljs.core.array_seq([response_format], 0));
} else {
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args19010 = [];
var len__7692__auto___19013 = arguments.length;
var i__7693__auto___19014 = (0);
while(true){
if((i__7693__auto___19014 < len__7692__auto___19013)){
args19010.push((arguments[i__7693__auto___19014]));

var G__19015 = (i__7693__auto___19014 + (1));
i__7693__auto___19014 = G__19015;
continue;
} else {
}
break;
}

var G__19012 = args19010.length;
switch (G__19012) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19010.length)].join('')));

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

ajax.core.get_response_format = (function ajax$core$get_response_format(p__19017){
var map__19020 = p__19017;
var map__19020__$1 = ((((!((map__19020 == null)))?((((map__19020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19020):map__19020);
var opts = map__19020__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19020__$1,cljs.core.cst$kw$response_DASH_format);
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
var args19022 = [];
var len__7692__auto___19025 = arguments.length;
var i__7693__auto___19026 = (0);
while(true){
if((i__7693__auto___19026 < len__7692__auto___19025)){
args19022.push((arguments[i__7693__auto___19026]));

var G__19027 = (i__7693__auto___19026 + (1));
i__7693__auto___19026 = G__19027;
continue;
} else {
}
break;
}

var G__19024 = args19022.length;
switch (G__19024) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19022.length)].join('')));

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

ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__19029){
var map__19032 = p__19029;
var map__19032__$1 = ((((!((map__19032 == null)))?((((map__19032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19032):map__19032);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19032__$1,cljs.core.cst$kw$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(handler,interceptors);
} else {
return ajax.core.throw_error("No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = (function (){var G__19034 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19034) : cljs.core.atom.call(null,G__19034));
})();
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format(request);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$method,ajax.core.normalize_method),cljs.core.cst$kw$interceptors,((function (response_format){
return (function (p1__19035_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__6584__auto__ = p1__19035_SHARP_;
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
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__19036){
var map__19039 = p__19036;
var map__19039__$1 = ((((!((map__19039 == null)))?((((map__19039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19039):map__19039);
var request = map__19039__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19039__$1,cljs.core.cst$kw$interceptors);
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
var G__19042 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__19042) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),(function (){var G__19047 = cljs.core.second(format);
var G__19048 = format_params;
return (ajax.core.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2 ? ajax.core.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2(G__19047,G__19048) : ajax.core.keyword_response_format_element.call(null,G__19047,G__19048));
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
var G__19049 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__19049) {
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19051_SHARP_){
return ajax.core.keyword_response_format_element(p1__19051_SHARP_,format_params);
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
ajax.core.transform_handler = (function ajax$core$transform_handler(p__19052){
var map__19062 = p__19052;
var map__19062__$1 = ((((!((map__19062 == null)))?((((map__19062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19062):map__19062);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19062__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19062__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19062__$1,cljs.core.cst$kw$finally);
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
return ((function (h,e,map__19062,map__19062__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__19064){
var vec__19068 = p__19064;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19068,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19068,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(h,e,map__19062,map__19062__$1,handler,error_handler,finally$))
});
ajax.core.transform_opts = (function ajax$core$transform_opts(p__19071){
var map__19074 = p__19071;
var map__19074__$1 = ((((!((map__19074 == null)))?((((map__19074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19074):map__19074);
var opts = map__19074__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19074__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19074__$1,cljs.core.cst$kw$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19074__$1,cljs.core.cst$kw$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19074__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19074__$1,cljs.core.cst$kw$body);

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
var len__7692__auto___19078 = arguments.length;
var i__7693__auto___19079 = (0);
while(true){
if((i__7693__auto___19079 < len__7692__auto___19078)){
args__7699__auto__.push((arguments[i__7693__auto___19079]));

var G__19080 = (i__7693__auto___19079 + (1));
i__7693__auto___19079 = G__19080;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18630__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__18630__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18630__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq19076){
var G__19077 = cljs.core.first(seq19076);
var seq19076__$1 = cljs.core.next(seq19076);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__19077,seq19076__$1);
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
var len__7692__auto___19083 = arguments.length;
var i__7693__auto___19084 = (0);
while(true){
if((i__7693__auto___19084 < len__7692__auto___19083)){
args__7699__auto__.push((arguments[i__7693__auto___19084]));

var G__19085 = (i__7693__auto___19084 + (1));
i__7693__auto___19084 = G__19085;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18630__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__18630__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18630__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq19081){
var G__19082 = cljs.core.first(seq19081);
var seq19081__$1 = cljs.core.next(seq19081);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__19082,seq19081__$1);
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
var len__7692__auto___19088 = arguments.length;
var i__7693__auto___19089 = (0);
while(true){
if((i__7693__auto___19089 < len__7692__auto___19088)){
args__7699__auto__.push((arguments[i__7693__auto___19089]));

var G__19090 = (i__7693__auto___19089 + (1));
i__7693__auto___19089 = G__19090;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18630__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__18630__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18630__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq19086){
var G__19087 = cljs.core.first(seq19086);
var seq19086__$1 = cljs.core.next(seq19086);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__19087,seq19086__$1);
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
var len__7692__auto___19093 = arguments.length;
var i__7693__auto___19094 = (0);
while(true){
if((i__7693__auto___19094 < len__7692__auto___19093)){
args__7699__auto__.push((arguments[i__7693__auto___19094]));

var G__19095 = (i__7693__auto___19094 + (1));
i__7693__auto___19094 = G__19095;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18630__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__18630__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18630__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq19091){
var G__19092 = cljs.core.first(seq19091);
var seq19091__$1 = cljs.core.next(seq19091);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__19092,seq19091__$1);
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
var len__7692__auto___19098 = arguments.length;
var i__7693__auto___19099 = (0);
while(true){
if((i__7693__auto___19099 < len__7692__auto___19098)){
args__7699__auto__.push((arguments[i__7693__auto___19099]));

var G__19100 = (i__7693__auto___19099 + (1));
i__7693__auto___19099 = G__19100;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18630__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__18630__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18630__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq19096){
var G__19097 = cljs.core.first(seq19096);
var seq19096__$1 = cljs.core.next(seq19096);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__19097,seq19096__$1);
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
var len__7692__auto___19103 = arguments.length;
var i__7693__auto___19104 = (0);
while(true){
if((i__7693__auto___19104 < len__7692__auto___19103)){
args__7699__auto__.push((arguments[i__7693__auto___19104]));

var G__19105 = (i__7693__auto___19104 + (1));
i__7693__auto___19104 = G__19105;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18630__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__18630__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18630__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq19101){
var G__19102 = cljs.core.first(seq19101);
var seq19101__$1 = cljs.core.next(seq19101);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__19102,seq19101__$1);
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
var len__7692__auto___19108 = arguments.length;
var i__7693__auto___19109 = (0);
while(true){
if((i__7693__auto___19109 < len__7692__auto___19108)){
args__7699__auto__.push((arguments[i__7693__auto___19109]));

var G__19110 = (i__7693__auto___19109 + (1));
i__7693__auto___19109 = G__19110;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18630__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__18630__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18630__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq19106){
var G__19107 = cljs.core.first(seq19106);
var seq19106__$1 = cljs.core.next(seq19106);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__19107,seq19106__$1);
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
var len__7692__auto___19113 = arguments.length;
var i__7693__auto___19114 = (0);
while(true){
if((i__7693__auto___19114 < len__7692__auto___19113)){
args__7699__auto__.push((arguments[i__7693__auto___19114]));

var G__19115 = (i__7693__auto___19114 + (1));
i__7693__auto___19114 = G__19115;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((1) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7700__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18630__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PATCH",(((f__18630__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18630__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq19111){
var G__19112 = cljs.core.first(seq19111);
var seq19111__$1 = cljs.core.next(seq19111);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__19112,seq19111__$1);
});

