// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__18335_18339 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__18336_18340 = null;
var count__18337_18341 = (0);
var i__18338_18342 = (0);
while(true){
if((i__18338_18342 < count__18337_18341)){
var k_18343 = chunk__18336_18340.cljs$core$IIndexed$_nth$arity$2(null,i__18338_18342);
var v_18344 = (b[k_18343]);
(a[k_18343] = v_18344);

var G__18345 = seq__18335_18339;
var G__18346 = chunk__18336_18340;
var G__18347 = count__18337_18341;
var G__18348 = (i__18338_18342 + (1));
seq__18335_18339 = G__18345;
chunk__18336_18340 = G__18346;
count__18337_18341 = G__18347;
i__18338_18342 = G__18348;
continue;
} else {
var temp__4657__auto___18349 = cljs.core.seq(seq__18335_18339);
if(temp__4657__auto___18349){
var seq__18335_18350__$1 = temp__4657__auto___18349;
if(cljs.core.chunked_seq_QMARK_(seq__18335_18350__$1)){
var c__7398__auto___18351 = cljs.core.chunk_first(seq__18335_18350__$1);
var G__18352 = cljs.core.chunk_rest(seq__18335_18350__$1);
var G__18353 = c__7398__auto___18351;
var G__18354 = cljs.core.count(c__7398__auto___18351);
var G__18355 = (0);
seq__18335_18339 = G__18352;
chunk__18336_18340 = G__18353;
count__18337_18341 = G__18354;
i__18338_18342 = G__18355;
continue;
} else {
var k_18356 = cljs.core.first(seq__18335_18350__$1);
var v_18357 = (b[k_18356]);
(a[k_18356] = v_18357);

var G__18358 = cljs.core.next(seq__18335_18350__$1);
var G__18359 = null;
var G__18360 = (0);
var G__18361 = (0);
seq__18335_18339 = G__18358;
chunk__18336_18340 = G__18359;
count__18337_18341 = G__18360;
i__18338_18342 = G__18361;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args18362 = [];
var len__7692__auto___18367 = arguments.length;
var i__7693__auto___18368 = (0);
while(true){
if((i__7693__auto___18368 < len__7692__auto___18367)){
args18362.push((arguments[i__7693__auto___18368]));

var G__18369 = (i__7693__auto___18368 + (1));
i__7693__auto___18368 = G__18369;
continue;
} else {
}
break;
}

var G__18364 = args18362.length;
switch (G__18364) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18362.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var G__18365 = cljs.core.name(type);
var G__18366 = cognitect.transit.opts_merge(({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__18365){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__18365))
,":",((function (G__18365){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__18365))
,"set",((function (G__18365){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__18365))
,"list",((function (G__18365){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__18365))
,"cmap",((function (G__18365){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__18371 = (i + (2));
var G__18372 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__18371;
ret = G__18372;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__18365))
], null),cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$handlers)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__18365,G__18366) : com.cognitect.transit.reader.call(null,G__18365,G__18366));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18373_18377 = cljs.core.seq(v);
var chunk__18374_18378 = null;
var count__18375_18379 = (0);
var i__18376_18380 = (0);
while(true){
if((i__18376_18380 < count__18375_18379)){
var x_18381 = chunk__18374_18378.cljs$core$IIndexed$_nth$arity$2(null,i__18376_18380);
ret.push(x_18381);

var G__18382 = seq__18373_18377;
var G__18383 = chunk__18374_18378;
var G__18384 = count__18375_18379;
var G__18385 = (i__18376_18380 + (1));
seq__18373_18377 = G__18382;
chunk__18374_18378 = G__18383;
count__18375_18379 = G__18384;
i__18376_18380 = G__18385;
continue;
} else {
var temp__4657__auto___18386 = cljs.core.seq(seq__18373_18377);
if(temp__4657__auto___18386){
var seq__18373_18387__$1 = temp__4657__auto___18386;
if(cljs.core.chunked_seq_QMARK_(seq__18373_18387__$1)){
var c__7398__auto___18388 = cljs.core.chunk_first(seq__18373_18387__$1);
var G__18389 = cljs.core.chunk_rest(seq__18373_18387__$1);
var G__18390 = c__7398__auto___18388;
var G__18391 = cljs.core.count(c__7398__auto___18388);
var G__18392 = (0);
seq__18373_18377 = G__18389;
chunk__18374_18378 = G__18390;
count__18375_18379 = G__18391;
i__18376_18380 = G__18392;
continue;
} else {
var x_18393 = cljs.core.first(seq__18373_18387__$1);
ret.push(x_18393);

var G__18394 = cljs.core.next(seq__18373_18387__$1);
var G__18395 = null;
var G__18396 = (0);
var G__18397 = (0);
seq__18373_18377 = G__18394;
chunk__18374_18378 = G__18395;
count__18375_18379 = G__18396;
i__18376_18380 = G__18397;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18398_18402 = cljs.core.seq(v);
var chunk__18399_18403 = null;
var count__18400_18404 = (0);
var i__18401_18405 = (0);
while(true){
if((i__18401_18405 < count__18400_18404)){
var x_18406 = chunk__18399_18403.cljs$core$IIndexed$_nth$arity$2(null,i__18401_18405);
ret.push(x_18406);

var G__18407 = seq__18398_18402;
var G__18408 = chunk__18399_18403;
var G__18409 = count__18400_18404;
var G__18410 = (i__18401_18405 + (1));
seq__18398_18402 = G__18407;
chunk__18399_18403 = G__18408;
count__18400_18404 = G__18409;
i__18401_18405 = G__18410;
continue;
} else {
var temp__4657__auto___18411 = cljs.core.seq(seq__18398_18402);
if(temp__4657__auto___18411){
var seq__18398_18412__$1 = temp__4657__auto___18411;
if(cljs.core.chunked_seq_QMARK_(seq__18398_18412__$1)){
var c__7398__auto___18413 = cljs.core.chunk_first(seq__18398_18412__$1);
var G__18414 = cljs.core.chunk_rest(seq__18398_18412__$1);
var G__18415 = c__7398__auto___18413;
var G__18416 = cljs.core.count(c__7398__auto___18413);
var G__18417 = (0);
seq__18398_18402 = G__18414;
chunk__18399_18403 = G__18415;
count__18400_18404 = G__18416;
i__18401_18405 = G__18417;
continue;
} else {
var x_18418 = cljs.core.first(seq__18398_18412__$1);
ret.push(x_18418);

var G__18419 = cljs.core.next(seq__18398_18412__$1);
var G__18420 = null;
var G__18421 = (0);
var G__18422 = (0);
seq__18398_18402 = G__18419;
chunk__18399_18403 = G__18420;
count__18400_18404 = G__18421;
i__18401_18405 = G__18422;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18423_18427 = cljs.core.seq(v);
var chunk__18424_18428 = null;
var count__18425_18429 = (0);
var i__18426_18430 = (0);
while(true){
if((i__18426_18430 < count__18425_18429)){
var x_18431 = chunk__18424_18428.cljs$core$IIndexed$_nth$arity$2(null,i__18426_18430);
ret.push(x_18431);

var G__18432 = seq__18423_18427;
var G__18433 = chunk__18424_18428;
var G__18434 = count__18425_18429;
var G__18435 = (i__18426_18430 + (1));
seq__18423_18427 = G__18432;
chunk__18424_18428 = G__18433;
count__18425_18429 = G__18434;
i__18426_18430 = G__18435;
continue;
} else {
var temp__4657__auto___18436 = cljs.core.seq(seq__18423_18427);
if(temp__4657__auto___18436){
var seq__18423_18437__$1 = temp__4657__auto___18436;
if(cljs.core.chunked_seq_QMARK_(seq__18423_18437__$1)){
var c__7398__auto___18438 = cljs.core.chunk_first(seq__18423_18437__$1);
var G__18439 = cljs.core.chunk_rest(seq__18423_18437__$1);
var G__18440 = c__7398__auto___18438;
var G__18441 = cljs.core.count(c__7398__auto___18438);
var G__18442 = (0);
seq__18423_18427 = G__18439;
chunk__18424_18428 = G__18440;
count__18425_18429 = G__18441;
i__18426_18430 = G__18442;
continue;
} else {
var x_18443 = cljs.core.first(seq__18423_18437__$1);
ret.push(x_18443);

var G__18444 = cljs.core.next(seq__18423_18437__$1);
var G__18445 = null;
var G__18446 = (0);
var G__18447 = (0);
seq__18423_18427 = G__18444;
chunk__18424_18428 = G__18445;
count__18425_18429 = G__18446;
i__18426_18430 = G__18447;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args18448 = [];
var len__7692__auto___18465 = arguments.length;
var i__7693__auto___18466 = (0);
while(true){
if((i__7693__auto___18466 < len__7692__auto___18465)){
args18448.push((arguments[i__7693__auto___18466]));

var G__18467 = (i__7693__auto___18466 + (1));
i__7693__auto___18466 = G__18467;
continue;
} else {
}
break;
}

var G__18450 = args18448.length;
switch (G__18450) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18448.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__18451 = cljs.core.name(type);
var G__18452 = cognitect.transit.opts_merge(({"objectBuilder": ((function (G__18451,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__18451,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__18453 = obj;
G__18453.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__18453;
});})(G__18451,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__18451,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18454 = cljs.core.clone(handlers);
x18454.forEach = ((function (x18454,G__18451,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18455 = cljs.core.seq(coll);
var chunk__18456 = null;
var count__18457 = (0);
var i__18458 = (0);
while(true){
if((i__18458 < count__18457)){
var vec__18459 = chunk__18456.cljs$core$IIndexed$_nth$arity$2(null,i__18458);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__18469 = seq__18455;
var G__18470 = chunk__18456;
var G__18471 = count__18457;
var G__18472 = (i__18458 + (1));
seq__18455 = G__18469;
chunk__18456 = G__18470;
count__18457 = G__18471;
i__18458 = G__18472;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18455);
if(temp__4657__auto__){
var seq__18455__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18455__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__18455__$1);
var G__18473 = cljs.core.chunk_rest(seq__18455__$1);
var G__18474 = c__7398__auto__;
var G__18475 = cljs.core.count(c__7398__auto__);
var G__18476 = (0);
seq__18455 = G__18473;
chunk__18456 = G__18474;
count__18457 = G__18475;
i__18458 = G__18476;
continue;
} else {
var vec__18462 = cljs.core.first(seq__18455__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18462,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18462,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__18477 = cljs.core.next(seq__18455__$1);
var G__18478 = null;
var G__18479 = (0);
var G__18480 = (0);
seq__18455 = G__18477;
chunk__18456 = G__18478;
count__18457 = G__18479;
i__18458 = G__18480;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18454,G__18451,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18454;
})(), "unpack": ((function (G__18451,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__18451,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$handlers)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__18451,G__18452) : com.cognitect.transit.writer.call(null,G__18451,G__18452));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args18481 = [];
var len__7692__auto___18487 = arguments.length;
var i__7693__auto___18488 = (0);
while(true){
if((i__7693__auto___18488 < len__7692__auto___18487)){
args18481.push((arguments[i__7693__auto___18488]));

var G__18489 = (i__7693__auto___18488 + (1));
i__7693__auto___18488 = G__18489;
continue;
} else {
}
break;
}

var G__18483 = args18481.length;
switch (G__18483) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18481.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18484 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18485){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18485 = meta18485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18486,meta18485__$1){
var self__ = this;
var _18486__$1 = this;
return (new cognitect.transit.t_cognitect$transit18484(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18485__$1));
});

cognitect.transit.t_cognitect$transit18484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18486){
var self__ = this;
var _18486__$1 = this;
return self__.meta18485;
});

cognitect.transit.t_cognitect$transit18484.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit18484.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit18484.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18484.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag_DASH_fn,cljs.core.cst$sym$rep_DASH_fn,cljs.core.cst$sym$str_DASH_rep_DASH_fn,cljs.core.cst$sym$verbose_DASH_handler_DASH_fn,cljs.core.cst$sym$meta18485], null);
});

cognitect.transit.t_cognitect$transit18484.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18484.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18484";

cognitect.transit.t_cognitect$transit18484.cljs$lang$ctorPrWriter = (function (this__7190__auto__,writer__7191__auto__,opt__7192__auto__){
return cljs.core._write(writer__7191__auto__,"cognitect.transit/t_cognitect$transit18484");
});

cognitect.transit.__GT_t_cognitect$transit18484 = (function cognitect$transit$__GT_t_cognitect$transit18484(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18485){
return (new cognitect.transit.t_cognitect$transit18484(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18485));
});

}

return (new cognitect.transit.t_cognitect$transit18484(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(tag,rep) : com.cognitect.transit.types.taggedValue.call(null,tag,rep));
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isTaggedValue.call(null,x));
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return (com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.intValue.call(null,s));
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isInteger.call(null,x));
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigInteger.call(null,s));
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigInteger.call(null,x));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigDecimalValue.call(null,s));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigDecimal.call(null,x));
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uri.call(null,s));
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isURI.call(null,x));
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uuid.call(null,s));
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6584__auto__ = (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isUUID.call(null,x));
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.binary.call(null,s));
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBinary.call(null,x));
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.quoted.call(null,x));
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isQuoted.call(null,x));
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.link.call(null,x));
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isLink.call(null,x));
});
