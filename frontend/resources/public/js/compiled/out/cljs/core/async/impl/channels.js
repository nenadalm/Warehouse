// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499 = (function (val,meta15500){
this.val = val;
this.meta15500 = meta15500;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15501,meta15500__$1){
var self__ = this;
var _15501__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499(self__.val,meta15500__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15501){
var self__ = this;
var _15501__$1 = this;
return self__.meta15500;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta15500], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels15499";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499.cljs$lang$ctorPrWriter = (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels15499");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels15499 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels15499(val__$1,meta15500){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499(val__$1,meta15500));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels15499(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$val], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__7694__auto__ = (((this$ == null))?null:this$);
var m__7695__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7695__auto__.call(null,this$));
} else {
var m__7695__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7695__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_15513 = self__.puts.pop();
if((putter_15513 == null)){
} else {
var put_handler_15514 = putter_15513.handler;
var val_15515 = putter_15513.val;
if(put_handler_15514.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_15516 = put_handler_15514.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_15516,put_handler_15514,val_15515,putter_15513,this$__$1){
return (function (){
return (put_cb_15516.cljs$core$IFn$_invoke$arity$1 ? put_cb_15516.cljs$core$IFn$_invoke$arity$1(true) : put_cb_15516.call(null,true));
});})(put_cb_15516,put_handler_15514,val_15515,putter_15513,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't put nil in on a channel"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__7014__auto__ = self__.buf;
if(cljs.core.truth_(and__7014__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__7014__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__15517 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__15517;
continue;
} else {
var G__15518 = takers;
takers = G__15518;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__15502_15519 = cljs.core.seq(take_cbs);
var chunk__15503_15520 = null;
var count__15504_15521 = (0);
var i__15505_15522 = (0);
while(true){
if((i__15505_15522 < count__15504_15521)){
var f_15523 = chunk__15503_15520.cljs$core$IIndexed$_nth$arity$2(null,i__15505_15522);
cljs.core.async.impl.dispatch.run(f_15523);

var G__15524 = seq__15502_15519;
var G__15525 = chunk__15503_15520;
var G__15526 = count__15504_15521;
var G__15527 = (i__15505_15522 + (1));
seq__15502_15519 = G__15524;
chunk__15503_15520 = G__15525;
count__15504_15521 = G__15526;
i__15505_15522 = G__15527;
continue;
} else {
var temp__4657__auto___15528 = cljs.core.seq(seq__15502_15519);
if(temp__4657__auto___15528){
var seq__15502_15529__$1 = temp__4657__auto___15528;
if(cljs.core.chunked_seq_QMARK_(seq__15502_15529__$1)){
var c__7845__auto___15530 = cljs.core.chunk_first(seq__15502_15529__$1);
var G__15531 = cljs.core.chunk_rest(seq__15502_15529__$1);
var G__15532 = c__7845__auto___15530;
var G__15533 = cljs.core.count(c__7845__auto___15530);
var G__15534 = (0);
seq__15502_15519 = G__15531;
chunk__15503_15520 = G__15532;
count__15504_15521 = G__15533;
i__15505_15522 = G__15534;
continue;
} else {
var f_15535 = cljs.core.first(seq__15502_15529__$1);
cljs.core.async.impl.dispatch.run(f_15535);

var G__15536 = cljs.core.next(seq__15502_15529__$1);
var G__15537 = null;
var G__15538 = (0);
var G__15539 = (0);
seq__15502_15519 = G__15536;
chunk__15503_15520 = G__15537;
count__15504_15521 = G__15538;
i__15505_15522 = G__15539;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending puts are allowed on a single channel."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Consider using a windowed buffer.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var temp__4655__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__4655__auto__)){
var take_cb = temp__4655__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__15506 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__7014__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__7014__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__7014__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))){
var G__15540 = cbs__$1;
cbs = G__15540;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15506,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15506,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__15509_15541 = cljs.core.seq(cbs);
var chunk__15510_15542 = null;
var count__15511_15543 = (0);
var i__15512_15544 = (0);
while(true){
if((i__15512_15544 < count__15511_15543)){
var cb_15545 = chunk__15510_15542.cljs$core$IIndexed$_nth$arity$2(null,i__15512_15544);
cljs.core.async.impl.dispatch.run(((function (seq__15509_15541,chunk__15510_15542,count__15511_15543,i__15512_15544,cb_15545,val,vec__15506,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return (cb_15545.cljs$core$IFn$_invoke$arity$1 ? cb_15545.cljs$core$IFn$_invoke$arity$1(true) : cb_15545.call(null,true));
});})(seq__15509_15541,chunk__15510_15542,count__15511_15543,i__15512_15544,cb_15545,val,vec__15506,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__15546 = seq__15509_15541;
var G__15547 = chunk__15510_15542;
var G__15548 = count__15511_15543;
var G__15549 = (i__15512_15544 + (1));
seq__15509_15541 = G__15546;
chunk__15510_15542 = G__15547;
count__15511_15543 = G__15548;
i__15512_15544 = G__15549;
continue;
} else {
var temp__4657__auto___15550 = cljs.core.seq(seq__15509_15541);
if(temp__4657__auto___15550){
var seq__15509_15551__$1 = temp__4657__auto___15550;
if(cljs.core.chunked_seq_QMARK_(seq__15509_15551__$1)){
var c__7845__auto___15552 = cljs.core.chunk_first(seq__15509_15551__$1);
var G__15553 = cljs.core.chunk_rest(seq__15509_15551__$1);
var G__15554 = c__7845__auto___15552;
var G__15555 = cljs.core.count(c__7845__auto___15552);
var G__15556 = (0);
seq__15509_15541 = G__15553;
chunk__15510_15542 = G__15554;
count__15511_15543 = G__15555;
i__15512_15544 = G__15556;
continue;
} else {
var cb_15557 = cljs.core.first(seq__15509_15551__$1);
cljs.core.async.impl.dispatch.run(((function (seq__15509_15541,chunk__15510_15542,count__15511_15543,i__15512_15544,cb_15557,seq__15509_15551__$1,temp__4657__auto___15550,val,vec__15506,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return (cb_15557.cljs$core$IFn$_invoke$arity$1 ? cb_15557.cljs$core$IFn$_invoke$arity$1(true) : cb_15557.call(null,true));
});})(seq__15509_15541,chunk__15510_15542,count__15511_15543,i__15512_15544,cb_15557,seq__15509_15551__$1,temp__4657__auto___15550,val,vec__15506,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__15558 = cljs.core.next(seq__15509_15551__$1);
var G__15559 = null;
var G__15560 = (0);
var G__15561 = (0);
seq__15509_15541 = G__15558;
chunk__15510_15542 = G__15559;
count__15511_15543 = G__15560;
i__15512_15544 = G__15561;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__7014__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__7014__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__7014__auto__;
}
})())){
var has_val = (function (){var and__7014__auto__ = self__.buf;
if(cljs.core.truth_(and__7014__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__7014__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending takes are allowed on a single channel.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__7014__auto__ = self__.buf;
if(cljs.core.truth_(and__7014__auto__)){
return (self__.puts.length === (0));
} else {
return and__7014__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_15562 = self__.takes.pop();
if((taker_15562 == null)){
} else {
if(taker_15562.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_15563 = taker_15562.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_15564 = (cljs.core.truth_((function (){var and__7014__auto__ = self__.buf;
if(cljs.core.truth_(and__7014__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__7014__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_15563,val_15564,taker_15562,this$__$1){
return (function (){
return (take_cb_15563.cljs$core$IFn$_invoke$arity$1 ? take_cb_15563.cljs$core$IFn$_invoke$arity$1(val_15564) : take_cb_15563.call(null,val_15564));
});})(take_cb_15563,val_15564,taker_15562,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$takes,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_takes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$puts,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_puts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.with_meta(cljs.core.cst$sym$closed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$add_BANG_], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__7026__auto__ = exh;
if(cljs.core.truth_(or__7026__auto__)){
return or__7026__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var args15565 = [];
var len__8139__auto___15570 = arguments.length;
var i__8140__auto___15571 = (0);
while(true){
if((i__8140__auto___15571 < len__8139__auto___15570)){
args15565.push((arguments[i__8140__auto___15571]));

var G__15572 = (i__8140__auto___15571 + (1));
i__8140__auto___15571 = G__15572;
continue;
} else {
}
break;
}

var G__15567 = args15565.length;
switch (G__15567) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15565.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__15574 = null;
var G__15574__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e15568){var t = e15568;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__15574__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e15569){var t = e15569;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__15574 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__15574__1.call(this,buf__$1);
case 2:
return G__15574__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15574.cljs$core$IFn$_invoke$arity$1 = G__15574__1;
G__15574.cljs$core$IFn$_invoke$arity$2 = G__15574__2;
return G__15574;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

