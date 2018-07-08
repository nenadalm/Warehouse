// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15703 = arguments.length;
switch (G__15703) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15704 = (function (f,blockable,meta15705){
this.f = f;
this.blockable = blockable;
this.meta15705 = meta15705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15706,meta15705__$1){
var self__ = this;
var _15706__$1 = this;
return (new cljs.core.async.t_cljs$core$async15704(self__.f,self__.blockable,meta15705__$1));
});

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15706){
var self__ = this;
var _15706__$1 = this;
return self__.meta15705;
});

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15705], null);
});

cljs.core.async.t_cljs$core$async15704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15704";

cljs.core.async.t_cljs$core$async15704.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async15704");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15704.
 */
cljs.core.async.__GT_t_cljs$core$async15704 = (function cljs$core$async$__GT_t_cljs$core$async15704(f__$1,blockable__$1,meta15705){
return (new cljs.core.async.t_cljs$core$async15704(f__$1,blockable__$1,meta15705));
});

}

return (new cljs.core.async.t_cljs$core$async15704(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15710 = arguments.length;
switch (G__15710) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15713 = arguments.length;
switch (G__15713) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15716 = arguments.length;
switch (G__15716) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15718 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15718) : fn1.call(null,val_15718));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15718,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15718) : fn1.call(null,val_15718));
});})(val_15718,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15720 = arguments.length;
switch (G__15720) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___15722 = n;
var x_15723 = (0);
while(true){
if((x_15723 < n__4376__auto___15722)){
(a[x_15723] = (0));

var G__15724 = (x_15723 + (1));
x_15723 = G__15724;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15725 = (i + (1));
i = G__15725;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async15726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15726 = (function (flag,meta15727){
this.flag = flag;
this.meta15727 = meta15727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15728,meta15727__$1){
var self__ = this;
var _15728__$1 = this;
return (new cljs.core.async.t_cljs$core$async15726(self__.flag,meta15727__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15728){
var self__ = this;
var _15728__$1 = this;
return self__.meta15727;
});})(flag))
;

cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15726.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15727], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15726";

cljs.core.async.t_cljs$core$async15726.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async15726");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15726.
 */
cljs.core.async.__GT_t_cljs$core$async15726 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15726(flag__$1,meta15727){
return (new cljs.core.async.t_cljs$core$async15726(flag__$1,meta15727));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15726(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15729 = (function (flag,cb,meta15730){
this.flag = flag;
this.cb = cb;
this.meta15730 = meta15730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15731,meta15730__$1){
var self__ = this;
var _15731__$1 = this;
return (new cljs.core.async.t_cljs$core$async15729(self__.flag,self__.cb,meta15730__$1));
});

cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15731){
var self__ = this;
var _15731__$1 = this;
return self__.meta15730;
});

cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15730], null);
});

cljs.core.async.t_cljs$core$async15729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15729";

cljs.core.async.t_cljs$core$async15729.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async15729");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15729.
 */
cljs.core.async.__GT_t_cljs$core$async15729 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15729(flag__$1,cb__$1,meta15730){
return (new cljs.core.async.t_cljs$core$async15729(flag__$1,cb__$1,meta15730));
});

}

return (new cljs.core.async.t_cljs$core$async15729(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15732_SHARP_){
var G__15734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15732_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15734) : fret.call(null,G__15734));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15733_SHARP_){
var G__15735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15733_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15735) : fret.call(null,G__15735));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15736 = (i + (1));
i = G__15736;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___15742 = arguments.length;
var i__4498__auto___15743 = (0);
while(true){
if((i__4498__auto___15743 < len__4497__auto___15742)){
args__4500__auto__.push((arguments[i__4498__auto___15743]));

var G__15744 = (i__4498__auto___15743 + (1));
i__4498__auto___15743 = G__15744;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15739){
var map__15740 = p__15739;
var map__15740__$1 = ((((!((map__15740 == null)))?(((((map__15740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15740):map__15740);
var opts = map__15740__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15737){
var G__15738 = cljs.core.first(seq15737);
var seq15737__$1 = cljs.core.next(seq15737);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15738,seq15737__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15746 = arguments.length;
switch (G__15746) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13775__auto___15792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___15792){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___15792){
return (function (state_15770){
var state_val_15771 = (state_15770[(1)]);
if((state_val_15771 === (7))){
var inst_15766 = (state_15770[(2)]);
var state_15770__$1 = state_15770;
var statearr_15772_15793 = state_15770__$1;
(statearr_15772_15793[(2)] = inst_15766);

(statearr_15772_15793[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (1))){
var state_15770__$1 = state_15770;
var statearr_15773_15794 = state_15770__$1;
(statearr_15773_15794[(2)] = null);

(statearr_15773_15794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (4))){
var inst_15749 = (state_15770[(7)]);
var inst_15749__$1 = (state_15770[(2)]);
var inst_15750 = (inst_15749__$1 == null);
var state_15770__$1 = (function (){var statearr_15774 = state_15770;
(statearr_15774[(7)] = inst_15749__$1);

return statearr_15774;
})();
if(cljs.core.truth_(inst_15750)){
var statearr_15775_15795 = state_15770__$1;
(statearr_15775_15795[(1)] = (5));

} else {
var statearr_15776_15796 = state_15770__$1;
(statearr_15776_15796[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (13))){
var state_15770__$1 = state_15770;
var statearr_15777_15797 = state_15770__$1;
(statearr_15777_15797[(2)] = null);

(statearr_15777_15797[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (6))){
var inst_15749 = (state_15770[(7)]);
var state_15770__$1 = state_15770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15770__$1,(11),to,inst_15749);
} else {
if((state_val_15771 === (3))){
var inst_15768 = (state_15770[(2)]);
var state_15770__$1 = state_15770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15770__$1,inst_15768);
} else {
if((state_val_15771 === (12))){
var state_15770__$1 = state_15770;
var statearr_15778_15798 = state_15770__$1;
(statearr_15778_15798[(2)] = null);

(statearr_15778_15798[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (2))){
var state_15770__$1 = state_15770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15770__$1,(4),from);
} else {
if((state_val_15771 === (11))){
var inst_15759 = (state_15770[(2)]);
var state_15770__$1 = state_15770;
if(cljs.core.truth_(inst_15759)){
var statearr_15779_15799 = state_15770__$1;
(statearr_15779_15799[(1)] = (12));

} else {
var statearr_15780_15800 = state_15770__$1;
(statearr_15780_15800[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (9))){
var state_15770__$1 = state_15770;
var statearr_15781_15801 = state_15770__$1;
(statearr_15781_15801[(2)] = null);

(statearr_15781_15801[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (5))){
var state_15770__$1 = state_15770;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15782_15802 = state_15770__$1;
(statearr_15782_15802[(1)] = (8));

} else {
var statearr_15783_15803 = state_15770__$1;
(statearr_15783_15803[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (14))){
var inst_15764 = (state_15770[(2)]);
var state_15770__$1 = state_15770;
var statearr_15784_15804 = state_15770__$1;
(statearr_15784_15804[(2)] = inst_15764);

(statearr_15784_15804[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (10))){
var inst_15756 = (state_15770[(2)]);
var state_15770__$1 = state_15770;
var statearr_15785_15805 = state_15770__$1;
(statearr_15785_15805[(2)] = inst_15756);

(statearr_15785_15805[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (8))){
var inst_15753 = cljs.core.async.close_BANG_(to);
var state_15770__$1 = state_15770;
var statearr_15786_15806 = state_15770__$1;
(statearr_15786_15806[(2)] = inst_15753);

(statearr_15786_15806[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___15792))
;
return ((function (switch__13594__auto__,c__13775__auto___15792){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_15787 = [null,null,null,null,null,null,null,null];
(statearr_15787[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_15787[(1)] = (1));

return statearr_15787;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_15770){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_15770);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e15788){if((e15788 instanceof Object)){
var ex__13598__auto__ = e15788;
var statearr_15789_15807 = state_15770;
(statearr_15789_15807[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15770);

return cljs.core.cst$kw$recur;
} else {
throw e15788;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__15808 = state_15770;
state_15770 = G__15808;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_15770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_15770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___15792))
})();
var state__13777__auto__ = (function (){var statearr_15790 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_15790[(6)] = c__13775__auto___15792);

return statearr_15790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___15792))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15809){
var vec__15810 = p__15809;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15810,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15810,(1),null);
var job = vec__15810;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13775__auto___15981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___15981,res,vec__15810,v,p,job,jobs,results){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___15981,res,vec__15810,v,p,job,jobs,results){
return (function (state_15817){
var state_val_15818 = (state_15817[(1)]);
if((state_val_15818 === (1))){
var state_15817__$1 = state_15817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15817__$1,(2),res,v);
} else {
if((state_val_15818 === (2))){
var inst_15814 = (state_15817[(2)]);
var inst_15815 = cljs.core.async.close_BANG_(res);
var state_15817__$1 = (function (){var statearr_15819 = state_15817;
(statearr_15819[(7)] = inst_15814);

return statearr_15819;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15817__$1,inst_15815);
} else {
return null;
}
}
});})(c__13775__auto___15981,res,vec__15810,v,p,job,jobs,results))
;
return ((function (switch__13594__auto__,c__13775__auto___15981,res,vec__15810,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0 = (function (){
var statearr_15820 = [null,null,null,null,null,null,null,null];
(statearr_15820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__);

(statearr_15820[(1)] = (1));

return statearr_15820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1 = (function (state_15817){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_15817);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e15821){if((e15821 instanceof Object)){
var ex__13598__auto__ = e15821;
var statearr_15822_15982 = state_15817;
(statearr_15822_15982[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15817);

return cljs.core.cst$kw$recur;
} else {
throw e15821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__15983 = state_15817;
state_15817 = G__15983;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = function(state_15817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1.call(this,state_15817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___15981,res,vec__15810,v,p,job,jobs,results))
})();
var state__13777__auto__ = (function (){var statearr_15823 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_15823[(6)] = c__13775__auto___15981);

return statearr_15823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___15981,res,vec__15810,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15824){
var vec__15825 = p__15824;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15825,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15825,(1),null);
var job = vec__15825;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___15984 = n;
var __15985 = (0);
while(true){
if((__15985 < n__4376__auto___15984)){
var G__15828_15986 = type;
var G__15828_15987__$1 = (((G__15828_15986 instanceof cljs.core.Keyword))?G__15828_15986.fqn:null);
switch (G__15828_15987__$1) {
case "compute":
var c__13775__auto___15989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15985,c__13775__auto___15989,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (__15985,c__13775__auto___15989,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async){
return (function (state_15841){
var state_val_15842 = (state_15841[(1)]);
if((state_val_15842 === (1))){
var state_15841__$1 = state_15841;
var statearr_15843_15990 = state_15841__$1;
(statearr_15843_15990[(2)] = null);

(statearr_15843_15990[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15842 === (2))){
var state_15841__$1 = state_15841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15841__$1,(4),jobs);
} else {
if((state_val_15842 === (3))){
var inst_15839 = (state_15841[(2)]);
var state_15841__$1 = state_15841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15841__$1,inst_15839);
} else {
if((state_val_15842 === (4))){
var inst_15831 = (state_15841[(2)]);
var inst_15832 = process(inst_15831);
var state_15841__$1 = state_15841;
if(cljs.core.truth_(inst_15832)){
var statearr_15844_15991 = state_15841__$1;
(statearr_15844_15991[(1)] = (5));

} else {
var statearr_15845_15992 = state_15841__$1;
(statearr_15845_15992[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15842 === (5))){
var state_15841__$1 = state_15841;
var statearr_15846_15993 = state_15841__$1;
(statearr_15846_15993[(2)] = null);

(statearr_15846_15993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15842 === (6))){
var state_15841__$1 = state_15841;
var statearr_15847_15994 = state_15841__$1;
(statearr_15847_15994[(2)] = null);

(statearr_15847_15994[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15842 === (7))){
var inst_15837 = (state_15841[(2)]);
var state_15841__$1 = state_15841;
var statearr_15848_15995 = state_15841__$1;
(statearr_15848_15995[(2)] = inst_15837);

(statearr_15848_15995[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15985,c__13775__auto___15989,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async))
;
return ((function (__15985,switch__13594__auto__,c__13775__auto___15989,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0 = (function (){
var statearr_15849 = [null,null,null,null,null,null,null];
(statearr_15849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__);

(statearr_15849[(1)] = (1));

return statearr_15849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1 = (function (state_15841){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_15841);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e15850){if((e15850 instanceof Object)){
var ex__13598__auto__ = e15850;
var statearr_15851_15996 = state_15841;
(statearr_15851_15996[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15841);

return cljs.core.cst$kw$recur;
} else {
throw e15850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__15997 = state_15841;
state_15841 = G__15997;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = function(state_15841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1.call(this,state_15841);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__;
})()
;})(__15985,switch__13594__auto__,c__13775__auto___15989,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async))
})();
var state__13777__auto__ = (function (){var statearr_15852 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_15852[(6)] = c__13775__auto___15989);

return statearr_15852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(__15985,c__13775__auto___15989,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async))
);


break;
case "async":
var c__13775__auto___15998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15985,c__13775__auto___15998,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (__15985,c__13775__auto___15998,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async){
return (function (state_15865){
var state_val_15866 = (state_15865[(1)]);
if((state_val_15866 === (1))){
var state_15865__$1 = state_15865;
var statearr_15867_15999 = state_15865__$1;
(statearr_15867_15999[(2)] = null);

(statearr_15867_15999[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15866 === (2))){
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15865__$1,(4),jobs);
} else {
if((state_val_15866 === (3))){
var inst_15863 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15865__$1,inst_15863);
} else {
if((state_val_15866 === (4))){
var inst_15855 = (state_15865[(2)]);
var inst_15856 = async(inst_15855);
var state_15865__$1 = state_15865;
if(cljs.core.truth_(inst_15856)){
var statearr_15868_16000 = state_15865__$1;
(statearr_15868_16000[(1)] = (5));

} else {
var statearr_15869_16001 = state_15865__$1;
(statearr_15869_16001[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15866 === (5))){
var state_15865__$1 = state_15865;
var statearr_15870_16002 = state_15865__$1;
(statearr_15870_16002[(2)] = null);

(statearr_15870_16002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15866 === (6))){
var state_15865__$1 = state_15865;
var statearr_15871_16003 = state_15865__$1;
(statearr_15871_16003[(2)] = null);

(statearr_15871_16003[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15866 === (7))){
var inst_15861 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
var statearr_15872_16004 = state_15865__$1;
(statearr_15872_16004[(2)] = inst_15861);

(statearr_15872_16004[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15985,c__13775__auto___15998,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async))
;
return ((function (__15985,switch__13594__auto__,c__13775__auto___15998,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0 = (function (){
var statearr_15873 = [null,null,null,null,null,null,null];
(statearr_15873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__);

(statearr_15873[(1)] = (1));

return statearr_15873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1 = (function (state_15865){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_15865);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e15874){if((e15874 instanceof Object)){
var ex__13598__auto__ = e15874;
var statearr_15875_16005 = state_15865;
(statearr_15875_16005[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15865);

return cljs.core.cst$kw$recur;
} else {
throw e15874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16006 = state_15865;
state_15865 = G__16006;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = function(state_15865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1.call(this,state_15865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__;
})()
;})(__15985,switch__13594__auto__,c__13775__auto___15998,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async))
})();
var state__13777__auto__ = (function (){var statearr_15876 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_15876[(6)] = c__13775__auto___15998);

return statearr_15876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(__15985,c__13775__auto___15998,G__15828_15986,G__15828_15987__$1,n__4376__auto___15984,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15828_15987__$1)].join('')));

}

var G__16007 = (__15985 + (1));
__15985 = G__16007;
continue;
} else {
}
break;
}

var c__13775__auto___16008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___16008,jobs,results,process,async){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___16008,jobs,results,process,async){
return (function (state_15898){
var state_val_15899 = (state_15898[(1)]);
if((state_val_15899 === (1))){
var state_15898__$1 = state_15898;
var statearr_15900_16009 = state_15898__$1;
(statearr_15900_16009[(2)] = null);

(statearr_15900_16009[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15899 === (2))){
var state_15898__$1 = state_15898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15898__$1,(4),from);
} else {
if((state_val_15899 === (3))){
var inst_15896 = (state_15898[(2)]);
var state_15898__$1 = state_15898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15898__$1,inst_15896);
} else {
if((state_val_15899 === (4))){
var inst_15879 = (state_15898[(7)]);
var inst_15879__$1 = (state_15898[(2)]);
var inst_15880 = (inst_15879__$1 == null);
var state_15898__$1 = (function (){var statearr_15901 = state_15898;
(statearr_15901[(7)] = inst_15879__$1);

return statearr_15901;
})();
if(cljs.core.truth_(inst_15880)){
var statearr_15902_16010 = state_15898__$1;
(statearr_15902_16010[(1)] = (5));

} else {
var statearr_15903_16011 = state_15898__$1;
(statearr_15903_16011[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15899 === (5))){
var inst_15882 = cljs.core.async.close_BANG_(jobs);
var state_15898__$1 = state_15898;
var statearr_15904_16012 = state_15898__$1;
(statearr_15904_16012[(2)] = inst_15882);

(statearr_15904_16012[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15899 === (6))){
var inst_15884 = (state_15898[(8)]);
var inst_15879 = (state_15898[(7)]);
var inst_15884__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15886 = [inst_15879,inst_15884__$1];
var inst_15887 = (new cljs.core.PersistentVector(null,2,(5),inst_15885,inst_15886,null));
var state_15898__$1 = (function (){var statearr_15905 = state_15898;
(statearr_15905[(8)] = inst_15884__$1);

return statearr_15905;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15898__$1,(8),jobs,inst_15887);
} else {
if((state_val_15899 === (7))){
var inst_15894 = (state_15898[(2)]);
var state_15898__$1 = state_15898;
var statearr_15906_16013 = state_15898__$1;
(statearr_15906_16013[(2)] = inst_15894);

(statearr_15906_16013[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15899 === (8))){
var inst_15884 = (state_15898[(8)]);
var inst_15889 = (state_15898[(2)]);
var state_15898__$1 = (function (){var statearr_15907 = state_15898;
(statearr_15907[(9)] = inst_15889);

return statearr_15907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15898__$1,(9),results,inst_15884);
} else {
if((state_val_15899 === (9))){
var inst_15891 = (state_15898[(2)]);
var state_15898__$1 = (function (){var statearr_15908 = state_15898;
(statearr_15908[(10)] = inst_15891);

return statearr_15908;
})();
var statearr_15909_16014 = state_15898__$1;
(statearr_15909_16014[(2)] = null);

(statearr_15909_16014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___16008,jobs,results,process,async))
;
return ((function (switch__13594__auto__,c__13775__auto___16008,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0 = (function (){
var statearr_15910 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__);

(statearr_15910[(1)] = (1));

return statearr_15910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1 = (function (state_15898){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_15898);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e15911){if((e15911 instanceof Object)){
var ex__13598__auto__ = e15911;
var statearr_15912_16015 = state_15898;
(statearr_15912_16015[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15898);

return cljs.core.cst$kw$recur;
} else {
throw e15911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16016 = state_15898;
state_15898 = G__16016;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = function(state_15898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1.call(this,state_15898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___16008,jobs,results,process,async))
})();
var state__13777__auto__ = (function (){var statearr_15913 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_15913[(6)] = c__13775__auto___16008);

return statearr_15913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___16008,jobs,results,process,async))
);


var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,jobs,results,process,async){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,jobs,results,process,async){
return (function (state_15951){
var state_val_15952 = (state_15951[(1)]);
if((state_val_15952 === (7))){
var inst_15947 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15953_16017 = state_15951__$1;
(statearr_15953_16017[(2)] = inst_15947);

(statearr_15953_16017[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (20))){
var state_15951__$1 = state_15951;
var statearr_15954_16018 = state_15951__$1;
(statearr_15954_16018[(2)] = null);

(statearr_15954_16018[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (1))){
var state_15951__$1 = state_15951;
var statearr_15955_16019 = state_15951__$1;
(statearr_15955_16019[(2)] = null);

(statearr_15955_16019[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (4))){
var inst_15916 = (state_15951[(7)]);
var inst_15916__$1 = (state_15951[(2)]);
var inst_15917 = (inst_15916__$1 == null);
var state_15951__$1 = (function (){var statearr_15956 = state_15951;
(statearr_15956[(7)] = inst_15916__$1);

return statearr_15956;
})();
if(cljs.core.truth_(inst_15917)){
var statearr_15957_16020 = state_15951__$1;
(statearr_15957_16020[(1)] = (5));

} else {
var statearr_15958_16021 = state_15951__$1;
(statearr_15958_16021[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (15))){
var inst_15929 = (state_15951[(8)]);
var state_15951__$1 = state_15951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15951__$1,(18),to,inst_15929);
} else {
if((state_val_15952 === (21))){
var inst_15942 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15959_16022 = state_15951__$1;
(statearr_15959_16022[(2)] = inst_15942);

(statearr_15959_16022[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (13))){
var inst_15944 = (state_15951[(2)]);
var state_15951__$1 = (function (){var statearr_15960 = state_15951;
(statearr_15960[(9)] = inst_15944);

return statearr_15960;
})();
var statearr_15961_16023 = state_15951__$1;
(statearr_15961_16023[(2)] = null);

(statearr_15961_16023[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (6))){
var inst_15916 = (state_15951[(7)]);
var state_15951__$1 = state_15951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15951__$1,(11),inst_15916);
} else {
if((state_val_15952 === (17))){
var inst_15937 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
if(cljs.core.truth_(inst_15937)){
var statearr_15962_16024 = state_15951__$1;
(statearr_15962_16024[(1)] = (19));

} else {
var statearr_15963_16025 = state_15951__$1;
(statearr_15963_16025[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (3))){
var inst_15949 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15951__$1,inst_15949);
} else {
if((state_val_15952 === (12))){
var inst_15926 = (state_15951[(10)]);
var state_15951__$1 = state_15951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15951__$1,(14),inst_15926);
} else {
if((state_val_15952 === (2))){
var state_15951__$1 = state_15951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15951__$1,(4),results);
} else {
if((state_val_15952 === (19))){
var state_15951__$1 = state_15951;
var statearr_15964_16026 = state_15951__$1;
(statearr_15964_16026[(2)] = null);

(statearr_15964_16026[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (11))){
var inst_15926 = (state_15951[(2)]);
var state_15951__$1 = (function (){var statearr_15965 = state_15951;
(statearr_15965[(10)] = inst_15926);

return statearr_15965;
})();
var statearr_15966_16027 = state_15951__$1;
(statearr_15966_16027[(2)] = null);

(statearr_15966_16027[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (9))){
var state_15951__$1 = state_15951;
var statearr_15967_16028 = state_15951__$1;
(statearr_15967_16028[(2)] = null);

(statearr_15967_16028[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (5))){
var state_15951__$1 = state_15951;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15968_16029 = state_15951__$1;
(statearr_15968_16029[(1)] = (8));

} else {
var statearr_15969_16030 = state_15951__$1;
(statearr_15969_16030[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (14))){
var inst_15929 = (state_15951[(8)]);
var inst_15931 = (state_15951[(11)]);
var inst_15929__$1 = (state_15951[(2)]);
var inst_15930 = (inst_15929__$1 == null);
var inst_15931__$1 = cljs.core.not(inst_15930);
var state_15951__$1 = (function (){var statearr_15970 = state_15951;
(statearr_15970[(8)] = inst_15929__$1);

(statearr_15970[(11)] = inst_15931__$1);

return statearr_15970;
})();
if(inst_15931__$1){
var statearr_15971_16031 = state_15951__$1;
(statearr_15971_16031[(1)] = (15));

} else {
var statearr_15972_16032 = state_15951__$1;
(statearr_15972_16032[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (16))){
var inst_15931 = (state_15951[(11)]);
var state_15951__$1 = state_15951;
var statearr_15973_16033 = state_15951__$1;
(statearr_15973_16033[(2)] = inst_15931);

(statearr_15973_16033[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (10))){
var inst_15923 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15974_16034 = state_15951__$1;
(statearr_15974_16034[(2)] = inst_15923);

(statearr_15974_16034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (18))){
var inst_15934 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15975_16035 = state_15951__$1;
(statearr_15975_16035[(2)] = inst_15934);

(statearr_15975_16035[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15952 === (8))){
var inst_15920 = cljs.core.async.close_BANG_(to);
var state_15951__$1 = state_15951;
var statearr_15976_16036 = state_15951__$1;
(statearr_15976_16036[(2)] = inst_15920);

(statearr_15976_16036[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto__,jobs,results,process,async))
;
return ((function (switch__13594__auto__,c__13775__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0 = (function (){
var statearr_15977 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__);

(statearr_15977[(1)] = (1));

return statearr_15977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1 = (function (state_15951){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_15951);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e15978){if((e15978 instanceof Object)){
var ex__13598__auto__ = e15978;
var statearr_15979_16037 = state_15951;
(statearr_15979_16037[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15951);

return cljs.core.cst$kw$recur;
} else {
throw e15978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16038 = state_15951;
state_15951 = G__16038;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__ = function(state_15951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1.call(this,state_15951);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,jobs,results,process,async))
})();
var state__13777__auto__ = (function (){var statearr_15980 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_15980[(6)] = c__13775__auto__);

return statearr_15980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,jobs,results,process,async))
);

return c__13775__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16040 = arguments.length;
switch (G__16040) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16043 = arguments.length;
switch (G__16043) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16046 = arguments.length;
switch (G__16046) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13775__auto___16095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___16095,tc,fc){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___16095,tc,fc){
return (function (state_16072){
var state_val_16073 = (state_16072[(1)]);
if((state_val_16073 === (7))){
var inst_16068 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
var statearr_16074_16096 = state_16072__$1;
(statearr_16074_16096[(2)] = inst_16068);

(statearr_16074_16096[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (1))){
var state_16072__$1 = state_16072;
var statearr_16075_16097 = state_16072__$1;
(statearr_16075_16097[(2)] = null);

(statearr_16075_16097[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (4))){
var inst_16049 = (state_16072[(7)]);
var inst_16049__$1 = (state_16072[(2)]);
var inst_16050 = (inst_16049__$1 == null);
var state_16072__$1 = (function (){var statearr_16076 = state_16072;
(statearr_16076[(7)] = inst_16049__$1);

return statearr_16076;
})();
if(cljs.core.truth_(inst_16050)){
var statearr_16077_16098 = state_16072__$1;
(statearr_16077_16098[(1)] = (5));

} else {
var statearr_16078_16099 = state_16072__$1;
(statearr_16078_16099[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (13))){
var state_16072__$1 = state_16072;
var statearr_16079_16100 = state_16072__$1;
(statearr_16079_16100[(2)] = null);

(statearr_16079_16100[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (6))){
var inst_16049 = (state_16072[(7)]);
var inst_16055 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16049) : p.call(null,inst_16049));
var state_16072__$1 = state_16072;
if(cljs.core.truth_(inst_16055)){
var statearr_16080_16101 = state_16072__$1;
(statearr_16080_16101[(1)] = (9));

} else {
var statearr_16081_16102 = state_16072__$1;
(statearr_16081_16102[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (3))){
var inst_16070 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16072__$1,inst_16070);
} else {
if((state_val_16073 === (12))){
var state_16072__$1 = state_16072;
var statearr_16082_16103 = state_16072__$1;
(statearr_16082_16103[(2)] = null);

(statearr_16082_16103[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (2))){
var state_16072__$1 = state_16072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16072__$1,(4),ch);
} else {
if((state_val_16073 === (11))){
var inst_16049 = (state_16072[(7)]);
var inst_16059 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16072__$1,(8),inst_16059,inst_16049);
} else {
if((state_val_16073 === (9))){
var state_16072__$1 = state_16072;
var statearr_16083_16104 = state_16072__$1;
(statearr_16083_16104[(2)] = tc);

(statearr_16083_16104[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (5))){
var inst_16052 = cljs.core.async.close_BANG_(tc);
var inst_16053 = cljs.core.async.close_BANG_(fc);
var state_16072__$1 = (function (){var statearr_16084 = state_16072;
(statearr_16084[(8)] = inst_16052);

return statearr_16084;
})();
var statearr_16085_16105 = state_16072__$1;
(statearr_16085_16105[(2)] = inst_16053);

(statearr_16085_16105[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (14))){
var inst_16066 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
var statearr_16086_16106 = state_16072__$1;
(statearr_16086_16106[(2)] = inst_16066);

(statearr_16086_16106[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (10))){
var state_16072__$1 = state_16072;
var statearr_16087_16107 = state_16072__$1;
(statearr_16087_16107[(2)] = fc);

(statearr_16087_16107[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (8))){
var inst_16061 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
if(cljs.core.truth_(inst_16061)){
var statearr_16088_16108 = state_16072__$1;
(statearr_16088_16108[(1)] = (12));

} else {
var statearr_16089_16109 = state_16072__$1;
(statearr_16089_16109[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___16095,tc,fc))
;
return ((function (switch__13594__auto__,c__13775__auto___16095,tc,fc){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_16090 = [null,null,null,null,null,null,null,null,null];
(statearr_16090[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_16090[(1)] = (1));

return statearr_16090;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_16072){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_16072);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e16091){if((e16091 instanceof Object)){
var ex__13598__auto__ = e16091;
var statearr_16092_16110 = state_16072;
(statearr_16092_16110[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16072);

return cljs.core.cst$kw$recur;
} else {
throw e16091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16111 = state_16072;
state_16072 = G__16111;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_16072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_16072);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___16095,tc,fc))
})();
var state__13777__auto__ = (function (){var statearr_16093 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_16093[(6)] = c__13775__auto___16095);

return statearr_16093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___16095,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__){
return (function (state_16132){
var state_val_16133 = (state_16132[(1)]);
if((state_val_16133 === (7))){
var inst_16128 = (state_16132[(2)]);
var state_16132__$1 = state_16132;
var statearr_16134_16152 = state_16132__$1;
(statearr_16134_16152[(2)] = inst_16128);

(statearr_16134_16152[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16133 === (1))){
var inst_16112 = init;
var state_16132__$1 = (function (){var statearr_16135 = state_16132;
(statearr_16135[(7)] = inst_16112);

return statearr_16135;
})();
var statearr_16136_16153 = state_16132__$1;
(statearr_16136_16153[(2)] = null);

(statearr_16136_16153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16133 === (4))){
var inst_16115 = (state_16132[(8)]);
var inst_16115__$1 = (state_16132[(2)]);
var inst_16116 = (inst_16115__$1 == null);
var state_16132__$1 = (function (){var statearr_16137 = state_16132;
(statearr_16137[(8)] = inst_16115__$1);

return statearr_16137;
})();
if(cljs.core.truth_(inst_16116)){
var statearr_16138_16154 = state_16132__$1;
(statearr_16138_16154[(1)] = (5));

} else {
var statearr_16139_16155 = state_16132__$1;
(statearr_16139_16155[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16133 === (6))){
var inst_16112 = (state_16132[(7)]);
var inst_16119 = (state_16132[(9)]);
var inst_16115 = (state_16132[(8)]);
var inst_16119__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16112,inst_16115) : f.call(null,inst_16112,inst_16115));
var inst_16120 = cljs.core.reduced_QMARK_(inst_16119__$1);
var state_16132__$1 = (function (){var statearr_16140 = state_16132;
(statearr_16140[(9)] = inst_16119__$1);

return statearr_16140;
})();
if(inst_16120){
var statearr_16141_16156 = state_16132__$1;
(statearr_16141_16156[(1)] = (8));

} else {
var statearr_16142_16157 = state_16132__$1;
(statearr_16142_16157[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16133 === (3))){
var inst_16130 = (state_16132[(2)]);
var state_16132__$1 = state_16132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16132__$1,inst_16130);
} else {
if((state_val_16133 === (2))){
var state_16132__$1 = state_16132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16132__$1,(4),ch);
} else {
if((state_val_16133 === (9))){
var inst_16119 = (state_16132[(9)]);
var inst_16112 = inst_16119;
var state_16132__$1 = (function (){var statearr_16143 = state_16132;
(statearr_16143[(7)] = inst_16112);

return statearr_16143;
})();
var statearr_16144_16158 = state_16132__$1;
(statearr_16144_16158[(2)] = null);

(statearr_16144_16158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16133 === (5))){
var inst_16112 = (state_16132[(7)]);
var state_16132__$1 = state_16132;
var statearr_16145_16159 = state_16132__$1;
(statearr_16145_16159[(2)] = inst_16112);

(statearr_16145_16159[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16133 === (10))){
var inst_16126 = (state_16132[(2)]);
var state_16132__$1 = state_16132;
var statearr_16146_16160 = state_16132__$1;
(statearr_16146_16160[(2)] = inst_16126);

(statearr_16146_16160[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16133 === (8))){
var inst_16119 = (state_16132[(9)]);
var inst_16122 = cljs.core.deref(inst_16119);
var state_16132__$1 = state_16132;
var statearr_16147_16161 = state_16132__$1;
(statearr_16147_16161[(2)] = inst_16122);

(statearr_16147_16161[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto__))
;
return ((function (switch__13594__auto__,c__13775__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13595__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13595__auto____0 = (function (){
var statearr_16148 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16148[(0)] = cljs$core$async$reduce_$_state_machine__13595__auto__);

(statearr_16148[(1)] = (1));

return statearr_16148;
});
var cljs$core$async$reduce_$_state_machine__13595__auto____1 = (function (state_16132){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_16132);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e16149){if((e16149 instanceof Object)){
var ex__13598__auto__ = e16149;
var statearr_16150_16162 = state_16132;
(statearr_16150_16162[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16132);

return cljs.core.cst$kw$recur;
} else {
throw e16149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16163 = state_16132;
state_16132 = G__16163;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13595__auto__ = function(state_16132){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13595__auto____1.call(this,state_16132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13595__auto____0;
cljs$core$async$reduce_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13595__auto____1;
return cljs$core$async$reduce_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__))
})();
var state__13777__auto__ = (function (){var statearr_16151 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_16151[(6)] = c__13775__auto__);

return statearr_16151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__))
);

return c__13775__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__,f__$1){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__,f__$1){
return (function (state_16169){
var state_val_16170 = (state_16169[(1)]);
if((state_val_16170 === (1))){
var inst_16164 = cljs.core.async.reduce(f__$1,init,ch);
var state_16169__$1 = state_16169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16169__$1,(2),inst_16164);
} else {
if((state_val_16170 === (2))){
var inst_16166 = (state_16169[(2)]);
var inst_16167 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16166) : f__$1.call(null,inst_16166));
var state_16169__$1 = state_16169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16169__$1,inst_16167);
} else {
return null;
}
}
});})(c__13775__auto__,f__$1))
;
return ((function (switch__13594__auto__,c__13775__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13595__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13595__auto____0 = (function (){
var statearr_16171 = [null,null,null,null,null,null,null];
(statearr_16171[(0)] = cljs$core$async$transduce_$_state_machine__13595__auto__);

(statearr_16171[(1)] = (1));

return statearr_16171;
});
var cljs$core$async$transduce_$_state_machine__13595__auto____1 = (function (state_16169){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_16169);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e16172){if((e16172 instanceof Object)){
var ex__13598__auto__ = e16172;
var statearr_16173_16175 = state_16169;
(statearr_16173_16175[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16169);

return cljs.core.cst$kw$recur;
} else {
throw e16172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16176 = state_16169;
state_16169 = G__16176;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13595__auto__ = function(state_16169){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13595__auto____1.call(this,state_16169);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13595__auto____0;
cljs$core$async$transduce_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13595__auto____1;
return cljs$core$async$transduce_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__,f__$1))
})();
var state__13777__auto__ = (function (){var statearr_16174 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_16174[(6)] = c__13775__auto__);

return statearr_16174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__,f__$1))
);

return c__13775__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16178 = arguments.length;
switch (G__16178) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__){
return (function (state_16203){
var state_val_16204 = (state_16203[(1)]);
if((state_val_16204 === (7))){
var inst_16185 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16205_16226 = state_16203__$1;
(statearr_16205_16226[(2)] = inst_16185);

(statearr_16205_16226[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (1))){
var inst_16179 = cljs.core.seq(coll);
var inst_16180 = inst_16179;
var state_16203__$1 = (function (){var statearr_16206 = state_16203;
(statearr_16206[(7)] = inst_16180);

return statearr_16206;
})();
var statearr_16207_16227 = state_16203__$1;
(statearr_16207_16227[(2)] = null);

(statearr_16207_16227[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (4))){
var inst_16180 = (state_16203[(7)]);
var inst_16183 = cljs.core.first(inst_16180);
var state_16203__$1 = state_16203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16203__$1,(7),ch,inst_16183);
} else {
if((state_val_16204 === (13))){
var inst_16197 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16208_16228 = state_16203__$1;
(statearr_16208_16228[(2)] = inst_16197);

(statearr_16208_16228[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (6))){
var inst_16188 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
if(cljs.core.truth_(inst_16188)){
var statearr_16209_16229 = state_16203__$1;
(statearr_16209_16229[(1)] = (8));

} else {
var statearr_16210_16230 = state_16203__$1;
(statearr_16210_16230[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (3))){
var inst_16201 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16203__$1,inst_16201);
} else {
if((state_val_16204 === (12))){
var state_16203__$1 = state_16203;
var statearr_16211_16231 = state_16203__$1;
(statearr_16211_16231[(2)] = null);

(statearr_16211_16231[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (2))){
var inst_16180 = (state_16203[(7)]);
var state_16203__$1 = state_16203;
if(cljs.core.truth_(inst_16180)){
var statearr_16212_16232 = state_16203__$1;
(statearr_16212_16232[(1)] = (4));

} else {
var statearr_16213_16233 = state_16203__$1;
(statearr_16213_16233[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (11))){
var inst_16194 = cljs.core.async.close_BANG_(ch);
var state_16203__$1 = state_16203;
var statearr_16214_16234 = state_16203__$1;
(statearr_16214_16234[(2)] = inst_16194);

(statearr_16214_16234[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (9))){
var state_16203__$1 = state_16203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16215_16235 = state_16203__$1;
(statearr_16215_16235[(1)] = (11));

} else {
var statearr_16216_16236 = state_16203__$1;
(statearr_16216_16236[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (5))){
var inst_16180 = (state_16203[(7)]);
var state_16203__$1 = state_16203;
var statearr_16217_16237 = state_16203__$1;
(statearr_16217_16237[(2)] = inst_16180);

(statearr_16217_16237[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (10))){
var inst_16199 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16218_16238 = state_16203__$1;
(statearr_16218_16238[(2)] = inst_16199);

(statearr_16218_16238[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16204 === (8))){
var inst_16180 = (state_16203[(7)]);
var inst_16190 = cljs.core.next(inst_16180);
var inst_16180__$1 = inst_16190;
var state_16203__$1 = (function (){var statearr_16219 = state_16203;
(statearr_16219[(7)] = inst_16180__$1);

return statearr_16219;
})();
var statearr_16220_16239 = state_16203__$1;
(statearr_16220_16239[(2)] = null);

(statearr_16220_16239[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto__))
;
return ((function (switch__13594__auto__,c__13775__auto__){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_16221 = [null,null,null,null,null,null,null,null];
(statearr_16221[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_16221[(1)] = (1));

return statearr_16221;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_16203){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_16203);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e16222){if((e16222 instanceof Object)){
var ex__13598__auto__ = e16222;
var statearr_16223_16240 = state_16203;
(statearr_16223_16240[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16203);

return cljs.core.cst$kw$recur;
} else {
throw e16222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16241 = state_16203;
state_16203 = G__16241;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_16203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_16203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__))
})();
var state__13777__auto__ = (function (){var statearr_16224 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_16224[(6)] = c__13775__auto__);

return statearr_16224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__))
);

return c__13775__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16242 = (function (ch,cs,meta16243){
this.ch = ch;
this.cs = cs;
this.meta16243 = meta16243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16244,meta16243__$1){
var self__ = this;
var _16244__$1 = this;
return (new cljs.core.async.t_cljs$core$async16242(self__.ch,self__.cs,meta16243__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16244){
var self__ = this;
var _16244__$1 = this;
return self__.meta16243;
});})(cs))
;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16242.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16243], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16242";

cljs.core.async.t_cljs$core$async16242.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16242");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16242.
 */
cljs.core.async.__GT_t_cljs$core$async16242 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16242(ch__$1,cs__$1,meta16243){
return (new cljs.core.async.t_cljs$core$async16242(ch__$1,cs__$1,meta16243));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16242(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13775__auto___16464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___16464,cs,m,dchan,dctr,done){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___16464,cs,m,dchan,dctr,done){
return (function (state_16379){
var state_val_16380 = (state_16379[(1)]);
if((state_val_16380 === (7))){
var inst_16375 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
var statearr_16381_16465 = state_16379__$1;
(statearr_16381_16465[(2)] = inst_16375);

(statearr_16381_16465[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (20))){
var inst_16278 = (state_16379[(7)]);
var inst_16290 = cljs.core.first(inst_16278);
var inst_16291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16290,(0),null);
var inst_16292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16290,(1),null);
var state_16379__$1 = (function (){var statearr_16382 = state_16379;
(statearr_16382[(8)] = inst_16291);

return statearr_16382;
})();
if(cljs.core.truth_(inst_16292)){
var statearr_16383_16466 = state_16379__$1;
(statearr_16383_16466[(1)] = (22));

} else {
var statearr_16384_16467 = state_16379__$1;
(statearr_16384_16467[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (27))){
var inst_16322 = (state_16379[(9)]);
var inst_16247 = (state_16379[(10)]);
var inst_16327 = (state_16379[(11)]);
var inst_16320 = (state_16379[(12)]);
var inst_16327__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16320,inst_16322);
var inst_16328 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16327__$1,inst_16247,done);
var state_16379__$1 = (function (){var statearr_16385 = state_16379;
(statearr_16385[(11)] = inst_16327__$1);

return statearr_16385;
})();
if(cljs.core.truth_(inst_16328)){
var statearr_16386_16468 = state_16379__$1;
(statearr_16386_16468[(1)] = (30));

} else {
var statearr_16387_16469 = state_16379__$1;
(statearr_16387_16469[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (1))){
var state_16379__$1 = state_16379;
var statearr_16388_16470 = state_16379__$1;
(statearr_16388_16470[(2)] = null);

(statearr_16388_16470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (24))){
var inst_16278 = (state_16379[(7)]);
var inst_16297 = (state_16379[(2)]);
var inst_16298 = cljs.core.next(inst_16278);
var inst_16256 = inst_16298;
var inst_16257 = null;
var inst_16258 = (0);
var inst_16259 = (0);
var state_16379__$1 = (function (){var statearr_16389 = state_16379;
(statearr_16389[(13)] = inst_16259);

(statearr_16389[(14)] = inst_16297);

(statearr_16389[(15)] = inst_16257);

(statearr_16389[(16)] = inst_16258);

(statearr_16389[(17)] = inst_16256);

return statearr_16389;
})();
var statearr_16390_16471 = state_16379__$1;
(statearr_16390_16471[(2)] = null);

(statearr_16390_16471[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (39))){
var state_16379__$1 = state_16379;
var statearr_16394_16472 = state_16379__$1;
(statearr_16394_16472[(2)] = null);

(statearr_16394_16472[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (4))){
var inst_16247 = (state_16379[(10)]);
var inst_16247__$1 = (state_16379[(2)]);
var inst_16248 = (inst_16247__$1 == null);
var state_16379__$1 = (function (){var statearr_16395 = state_16379;
(statearr_16395[(10)] = inst_16247__$1);

return statearr_16395;
})();
if(cljs.core.truth_(inst_16248)){
var statearr_16396_16473 = state_16379__$1;
(statearr_16396_16473[(1)] = (5));

} else {
var statearr_16397_16474 = state_16379__$1;
(statearr_16397_16474[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (15))){
var inst_16259 = (state_16379[(13)]);
var inst_16257 = (state_16379[(15)]);
var inst_16258 = (state_16379[(16)]);
var inst_16256 = (state_16379[(17)]);
var inst_16274 = (state_16379[(2)]);
var inst_16275 = (inst_16259 + (1));
var tmp16391 = inst_16257;
var tmp16392 = inst_16258;
var tmp16393 = inst_16256;
var inst_16256__$1 = tmp16393;
var inst_16257__$1 = tmp16391;
var inst_16258__$1 = tmp16392;
var inst_16259__$1 = inst_16275;
var state_16379__$1 = (function (){var statearr_16398 = state_16379;
(statearr_16398[(13)] = inst_16259__$1);

(statearr_16398[(15)] = inst_16257__$1);

(statearr_16398[(16)] = inst_16258__$1);

(statearr_16398[(18)] = inst_16274);

(statearr_16398[(17)] = inst_16256__$1);

return statearr_16398;
})();
var statearr_16399_16475 = state_16379__$1;
(statearr_16399_16475[(2)] = null);

(statearr_16399_16475[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (21))){
var inst_16301 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
var statearr_16403_16476 = state_16379__$1;
(statearr_16403_16476[(2)] = inst_16301);

(statearr_16403_16476[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (31))){
var inst_16327 = (state_16379[(11)]);
var inst_16331 = done(null);
var inst_16332 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16327);
var state_16379__$1 = (function (){var statearr_16404 = state_16379;
(statearr_16404[(19)] = inst_16331);

return statearr_16404;
})();
var statearr_16405_16477 = state_16379__$1;
(statearr_16405_16477[(2)] = inst_16332);

(statearr_16405_16477[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (32))){
var inst_16321 = (state_16379[(20)]);
var inst_16322 = (state_16379[(9)]);
var inst_16319 = (state_16379[(21)]);
var inst_16320 = (state_16379[(12)]);
var inst_16334 = (state_16379[(2)]);
var inst_16335 = (inst_16322 + (1));
var tmp16400 = inst_16321;
var tmp16401 = inst_16319;
var tmp16402 = inst_16320;
var inst_16319__$1 = tmp16401;
var inst_16320__$1 = tmp16402;
var inst_16321__$1 = tmp16400;
var inst_16322__$1 = inst_16335;
var state_16379__$1 = (function (){var statearr_16406 = state_16379;
(statearr_16406[(20)] = inst_16321__$1);

(statearr_16406[(9)] = inst_16322__$1);

(statearr_16406[(22)] = inst_16334);

(statearr_16406[(21)] = inst_16319__$1);

(statearr_16406[(12)] = inst_16320__$1);

return statearr_16406;
})();
var statearr_16407_16478 = state_16379__$1;
(statearr_16407_16478[(2)] = null);

(statearr_16407_16478[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (40))){
var inst_16347 = (state_16379[(23)]);
var inst_16351 = done(null);
var inst_16352 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16347);
var state_16379__$1 = (function (){var statearr_16408 = state_16379;
(statearr_16408[(24)] = inst_16351);

return statearr_16408;
})();
var statearr_16409_16479 = state_16379__$1;
(statearr_16409_16479[(2)] = inst_16352);

(statearr_16409_16479[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (33))){
var inst_16338 = (state_16379[(25)]);
var inst_16340 = cljs.core.chunked_seq_QMARK_(inst_16338);
var state_16379__$1 = state_16379;
if(inst_16340){
var statearr_16410_16480 = state_16379__$1;
(statearr_16410_16480[(1)] = (36));

} else {
var statearr_16411_16481 = state_16379__$1;
(statearr_16411_16481[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (13))){
var inst_16268 = (state_16379[(26)]);
var inst_16271 = cljs.core.async.close_BANG_(inst_16268);
var state_16379__$1 = state_16379;
var statearr_16412_16482 = state_16379__$1;
(statearr_16412_16482[(2)] = inst_16271);

(statearr_16412_16482[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (22))){
var inst_16291 = (state_16379[(8)]);
var inst_16294 = cljs.core.async.close_BANG_(inst_16291);
var state_16379__$1 = state_16379;
var statearr_16413_16483 = state_16379__$1;
(statearr_16413_16483[(2)] = inst_16294);

(statearr_16413_16483[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (36))){
var inst_16338 = (state_16379[(25)]);
var inst_16342 = cljs.core.chunk_first(inst_16338);
var inst_16343 = cljs.core.chunk_rest(inst_16338);
var inst_16344 = cljs.core.count(inst_16342);
var inst_16319 = inst_16343;
var inst_16320 = inst_16342;
var inst_16321 = inst_16344;
var inst_16322 = (0);
var state_16379__$1 = (function (){var statearr_16414 = state_16379;
(statearr_16414[(20)] = inst_16321);

(statearr_16414[(9)] = inst_16322);

(statearr_16414[(21)] = inst_16319);

(statearr_16414[(12)] = inst_16320);

return statearr_16414;
})();
var statearr_16415_16484 = state_16379__$1;
(statearr_16415_16484[(2)] = null);

(statearr_16415_16484[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (41))){
var inst_16338 = (state_16379[(25)]);
var inst_16354 = (state_16379[(2)]);
var inst_16355 = cljs.core.next(inst_16338);
var inst_16319 = inst_16355;
var inst_16320 = null;
var inst_16321 = (0);
var inst_16322 = (0);
var state_16379__$1 = (function (){var statearr_16416 = state_16379;
(statearr_16416[(27)] = inst_16354);

(statearr_16416[(20)] = inst_16321);

(statearr_16416[(9)] = inst_16322);

(statearr_16416[(21)] = inst_16319);

(statearr_16416[(12)] = inst_16320);

return statearr_16416;
})();
var statearr_16417_16485 = state_16379__$1;
(statearr_16417_16485[(2)] = null);

(statearr_16417_16485[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (43))){
var state_16379__$1 = state_16379;
var statearr_16418_16486 = state_16379__$1;
(statearr_16418_16486[(2)] = null);

(statearr_16418_16486[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (29))){
var inst_16363 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
var statearr_16419_16487 = state_16379__$1;
(statearr_16419_16487[(2)] = inst_16363);

(statearr_16419_16487[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (44))){
var inst_16372 = (state_16379[(2)]);
var state_16379__$1 = (function (){var statearr_16420 = state_16379;
(statearr_16420[(28)] = inst_16372);

return statearr_16420;
})();
var statearr_16421_16488 = state_16379__$1;
(statearr_16421_16488[(2)] = null);

(statearr_16421_16488[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (6))){
var inst_16311 = (state_16379[(29)]);
var inst_16310 = cljs.core.deref(cs);
var inst_16311__$1 = cljs.core.keys(inst_16310);
var inst_16312 = cljs.core.count(inst_16311__$1);
var inst_16313 = cljs.core.reset_BANG_(dctr,inst_16312);
var inst_16318 = cljs.core.seq(inst_16311__$1);
var inst_16319 = inst_16318;
var inst_16320 = null;
var inst_16321 = (0);
var inst_16322 = (0);
var state_16379__$1 = (function (){var statearr_16422 = state_16379;
(statearr_16422[(20)] = inst_16321);

(statearr_16422[(9)] = inst_16322);

(statearr_16422[(29)] = inst_16311__$1);

(statearr_16422[(21)] = inst_16319);

(statearr_16422[(12)] = inst_16320);

(statearr_16422[(30)] = inst_16313);

return statearr_16422;
})();
var statearr_16423_16489 = state_16379__$1;
(statearr_16423_16489[(2)] = null);

(statearr_16423_16489[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (28))){
var inst_16338 = (state_16379[(25)]);
var inst_16319 = (state_16379[(21)]);
var inst_16338__$1 = cljs.core.seq(inst_16319);
var state_16379__$1 = (function (){var statearr_16424 = state_16379;
(statearr_16424[(25)] = inst_16338__$1);

return statearr_16424;
})();
if(inst_16338__$1){
var statearr_16425_16490 = state_16379__$1;
(statearr_16425_16490[(1)] = (33));

} else {
var statearr_16426_16491 = state_16379__$1;
(statearr_16426_16491[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (25))){
var inst_16321 = (state_16379[(20)]);
var inst_16322 = (state_16379[(9)]);
var inst_16324 = (inst_16322 < inst_16321);
var inst_16325 = inst_16324;
var state_16379__$1 = state_16379;
if(cljs.core.truth_(inst_16325)){
var statearr_16427_16492 = state_16379__$1;
(statearr_16427_16492[(1)] = (27));

} else {
var statearr_16428_16493 = state_16379__$1;
(statearr_16428_16493[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (34))){
var state_16379__$1 = state_16379;
var statearr_16429_16494 = state_16379__$1;
(statearr_16429_16494[(2)] = null);

(statearr_16429_16494[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (17))){
var state_16379__$1 = state_16379;
var statearr_16430_16495 = state_16379__$1;
(statearr_16430_16495[(2)] = null);

(statearr_16430_16495[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (3))){
var inst_16377 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16379__$1,inst_16377);
} else {
if((state_val_16380 === (12))){
var inst_16306 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
var statearr_16431_16496 = state_16379__$1;
(statearr_16431_16496[(2)] = inst_16306);

(statearr_16431_16496[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (2))){
var state_16379__$1 = state_16379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16379__$1,(4),ch);
} else {
if((state_val_16380 === (23))){
var state_16379__$1 = state_16379;
var statearr_16432_16497 = state_16379__$1;
(statearr_16432_16497[(2)] = null);

(statearr_16432_16497[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (35))){
var inst_16361 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
var statearr_16433_16498 = state_16379__$1;
(statearr_16433_16498[(2)] = inst_16361);

(statearr_16433_16498[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (19))){
var inst_16278 = (state_16379[(7)]);
var inst_16282 = cljs.core.chunk_first(inst_16278);
var inst_16283 = cljs.core.chunk_rest(inst_16278);
var inst_16284 = cljs.core.count(inst_16282);
var inst_16256 = inst_16283;
var inst_16257 = inst_16282;
var inst_16258 = inst_16284;
var inst_16259 = (0);
var state_16379__$1 = (function (){var statearr_16434 = state_16379;
(statearr_16434[(13)] = inst_16259);

(statearr_16434[(15)] = inst_16257);

(statearr_16434[(16)] = inst_16258);

(statearr_16434[(17)] = inst_16256);

return statearr_16434;
})();
var statearr_16435_16499 = state_16379__$1;
(statearr_16435_16499[(2)] = null);

(statearr_16435_16499[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (11))){
var inst_16256 = (state_16379[(17)]);
var inst_16278 = (state_16379[(7)]);
var inst_16278__$1 = cljs.core.seq(inst_16256);
var state_16379__$1 = (function (){var statearr_16436 = state_16379;
(statearr_16436[(7)] = inst_16278__$1);

return statearr_16436;
})();
if(inst_16278__$1){
var statearr_16437_16500 = state_16379__$1;
(statearr_16437_16500[(1)] = (16));

} else {
var statearr_16438_16501 = state_16379__$1;
(statearr_16438_16501[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (9))){
var inst_16308 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
var statearr_16439_16502 = state_16379__$1;
(statearr_16439_16502[(2)] = inst_16308);

(statearr_16439_16502[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (5))){
var inst_16254 = cljs.core.deref(cs);
var inst_16255 = cljs.core.seq(inst_16254);
var inst_16256 = inst_16255;
var inst_16257 = null;
var inst_16258 = (0);
var inst_16259 = (0);
var state_16379__$1 = (function (){var statearr_16440 = state_16379;
(statearr_16440[(13)] = inst_16259);

(statearr_16440[(15)] = inst_16257);

(statearr_16440[(16)] = inst_16258);

(statearr_16440[(17)] = inst_16256);

return statearr_16440;
})();
var statearr_16441_16503 = state_16379__$1;
(statearr_16441_16503[(2)] = null);

(statearr_16441_16503[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (14))){
var state_16379__$1 = state_16379;
var statearr_16442_16504 = state_16379__$1;
(statearr_16442_16504[(2)] = null);

(statearr_16442_16504[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (45))){
var inst_16369 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
var statearr_16443_16505 = state_16379__$1;
(statearr_16443_16505[(2)] = inst_16369);

(statearr_16443_16505[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (26))){
var inst_16311 = (state_16379[(29)]);
var inst_16365 = (state_16379[(2)]);
var inst_16366 = cljs.core.seq(inst_16311);
var state_16379__$1 = (function (){var statearr_16444 = state_16379;
(statearr_16444[(31)] = inst_16365);

return statearr_16444;
})();
if(inst_16366){
var statearr_16445_16506 = state_16379__$1;
(statearr_16445_16506[(1)] = (42));

} else {
var statearr_16446_16507 = state_16379__$1;
(statearr_16446_16507[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (16))){
var inst_16278 = (state_16379[(7)]);
var inst_16280 = cljs.core.chunked_seq_QMARK_(inst_16278);
var state_16379__$1 = state_16379;
if(inst_16280){
var statearr_16447_16508 = state_16379__$1;
(statearr_16447_16508[(1)] = (19));

} else {
var statearr_16448_16509 = state_16379__$1;
(statearr_16448_16509[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (38))){
var inst_16358 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
var statearr_16449_16510 = state_16379__$1;
(statearr_16449_16510[(2)] = inst_16358);

(statearr_16449_16510[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (30))){
var state_16379__$1 = state_16379;
var statearr_16450_16511 = state_16379__$1;
(statearr_16450_16511[(2)] = null);

(statearr_16450_16511[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (10))){
var inst_16259 = (state_16379[(13)]);
var inst_16257 = (state_16379[(15)]);
var inst_16267 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16257,inst_16259);
var inst_16268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16267,(0),null);
var inst_16269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16267,(1),null);
var state_16379__$1 = (function (){var statearr_16451 = state_16379;
(statearr_16451[(26)] = inst_16268);

return statearr_16451;
})();
if(cljs.core.truth_(inst_16269)){
var statearr_16452_16512 = state_16379__$1;
(statearr_16452_16512[(1)] = (13));

} else {
var statearr_16453_16513 = state_16379__$1;
(statearr_16453_16513[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (18))){
var inst_16304 = (state_16379[(2)]);
var state_16379__$1 = state_16379;
var statearr_16454_16514 = state_16379__$1;
(statearr_16454_16514[(2)] = inst_16304);

(statearr_16454_16514[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (42))){
var state_16379__$1 = state_16379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16379__$1,(45),dchan);
} else {
if((state_val_16380 === (37))){
var inst_16338 = (state_16379[(25)]);
var inst_16347 = (state_16379[(23)]);
var inst_16247 = (state_16379[(10)]);
var inst_16347__$1 = cljs.core.first(inst_16338);
var inst_16348 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16347__$1,inst_16247,done);
var state_16379__$1 = (function (){var statearr_16455 = state_16379;
(statearr_16455[(23)] = inst_16347__$1);

return statearr_16455;
})();
if(cljs.core.truth_(inst_16348)){
var statearr_16456_16515 = state_16379__$1;
(statearr_16456_16515[(1)] = (39));

} else {
var statearr_16457_16516 = state_16379__$1;
(statearr_16457_16516[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16380 === (8))){
var inst_16259 = (state_16379[(13)]);
var inst_16258 = (state_16379[(16)]);
var inst_16261 = (inst_16259 < inst_16258);
var inst_16262 = inst_16261;
var state_16379__$1 = state_16379;
if(cljs.core.truth_(inst_16262)){
var statearr_16458_16517 = state_16379__$1;
(statearr_16458_16517[(1)] = (10));

} else {
var statearr_16459_16518 = state_16379__$1;
(statearr_16459_16518[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___16464,cs,m,dchan,dctr,done))
;
return ((function (switch__13594__auto__,c__13775__auto___16464,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13595__auto__ = null;
var cljs$core$async$mult_$_state_machine__13595__auto____0 = (function (){
var statearr_16460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16460[(0)] = cljs$core$async$mult_$_state_machine__13595__auto__);

(statearr_16460[(1)] = (1));

return statearr_16460;
});
var cljs$core$async$mult_$_state_machine__13595__auto____1 = (function (state_16379){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_16379);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e16461){if((e16461 instanceof Object)){
var ex__13598__auto__ = e16461;
var statearr_16462_16519 = state_16379;
(statearr_16462_16519[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16379);

return cljs.core.cst$kw$recur;
} else {
throw e16461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16520 = state_16379;
state_16379 = G__16520;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13595__auto__ = function(state_16379){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13595__auto____1.call(this,state_16379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13595__auto____0;
cljs$core$async$mult_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13595__auto____1;
return cljs$core$async$mult_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___16464,cs,m,dchan,dctr,done))
})();
var state__13777__auto__ = (function (){var statearr_16463 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_16463[(6)] = c__13775__auto___16464);

return statearr_16463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___16464,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16522 = arguments.length;
switch (G__16522) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___16534 = arguments.length;
var i__4498__auto___16535 = (0);
while(true){
if((i__4498__auto___16535 < len__4497__auto___16534)){
args__4500__auto__.push((arguments[i__4498__auto___16535]));

var G__16536 = (i__4498__auto___16535 + (1));
i__4498__auto___16535 = G__16536;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16528){
var map__16529 = p__16528;
var map__16529__$1 = ((((!((map__16529 == null)))?(((((map__16529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16529):map__16529);
var opts = map__16529__$1;
var statearr_16531_16537 = state;
(statearr_16531_16537[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__16529,map__16529__$1,opts){
return (function (val){
var statearr_16532_16538 = state;
(statearr_16532_16538[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16529,map__16529__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_16533_16539 = state;
(statearr_16533_16539[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16524){
var G__16525 = cljs.core.first(seq16524);
var seq16524__$1 = cljs.core.next(seq16524);
var G__16526 = cljs.core.first(seq16524__$1);
var seq16524__$2 = cljs.core.next(seq16524__$1);
var G__16527 = cljs.core.first(seq16524__$2);
var seq16524__$3 = cljs.core.next(seq16524__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16525,G__16526,G__16527,seq16524__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16540 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16541){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16541 = meta16541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16542,meta16541__$1){
var self__ = this;
var _16542__$1 = this;
return (new cljs.core.async.t_cljs$core$async16540(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16541__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16542){
var self__ = this;
var _16542__$1 = this;
return self__.meta16541;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16540.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16541], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16540";

cljs.core.async.t_cljs$core$async16540.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16540");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16540.
 */
cljs.core.async.__GT_t_cljs$core$async16540 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16540(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16541){
return (new cljs.core.async.t_cljs$core$async16540(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16541));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16540(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13775__auto___16704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___16704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___16704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16644){
var state_val_16645 = (state_16644[(1)]);
if((state_val_16645 === (7))){
var inst_16559 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
var statearr_16646_16705 = state_16644__$1;
(statearr_16646_16705[(2)] = inst_16559);

(statearr_16646_16705[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (20))){
var inst_16571 = (state_16644[(7)]);
var state_16644__$1 = state_16644;
var statearr_16647_16706 = state_16644__$1;
(statearr_16647_16706[(2)] = inst_16571);

(statearr_16647_16706[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (27))){
var state_16644__$1 = state_16644;
var statearr_16648_16707 = state_16644__$1;
(statearr_16648_16707[(2)] = null);

(statearr_16648_16707[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (1))){
var inst_16546 = (state_16644[(8)]);
var inst_16546__$1 = calc_state();
var inst_16548 = (inst_16546__$1 == null);
var inst_16549 = cljs.core.not(inst_16548);
var state_16644__$1 = (function (){var statearr_16649 = state_16644;
(statearr_16649[(8)] = inst_16546__$1);

return statearr_16649;
})();
if(inst_16549){
var statearr_16650_16708 = state_16644__$1;
(statearr_16650_16708[(1)] = (2));

} else {
var statearr_16651_16709 = state_16644__$1;
(statearr_16651_16709[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (24))){
var inst_16604 = (state_16644[(9)]);
var inst_16595 = (state_16644[(10)]);
var inst_16618 = (state_16644[(11)]);
var inst_16618__$1 = (inst_16595.cljs$core$IFn$_invoke$arity$1 ? inst_16595.cljs$core$IFn$_invoke$arity$1(inst_16604) : inst_16595.call(null,inst_16604));
var state_16644__$1 = (function (){var statearr_16652 = state_16644;
(statearr_16652[(11)] = inst_16618__$1);

return statearr_16652;
})();
if(cljs.core.truth_(inst_16618__$1)){
var statearr_16653_16710 = state_16644__$1;
(statearr_16653_16710[(1)] = (29));

} else {
var statearr_16654_16711 = state_16644__$1;
(statearr_16654_16711[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (4))){
var inst_16562 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
if(cljs.core.truth_(inst_16562)){
var statearr_16655_16712 = state_16644__$1;
(statearr_16655_16712[(1)] = (8));

} else {
var statearr_16656_16713 = state_16644__$1;
(statearr_16656_16713[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (15))){
var inst_16589 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
if(cljs.core.truth_(inst_16589)){
var statearr_16657_16714 = state_16644__$1;
(statearr_16657_16714[(1)] = (19));

} else {
var statearr_16658_16715 = state_16644__$1;
(statearr_16658_16715[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (21))){
var inst_16594 = (state_16644[(12)]);
var inst_16594__$1 = (state_16644[(2)]);
var inst_16595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16594__$1,cljs.core.cst$kw$solos);
var inst_16596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16594__$1,cljs.core.cst$kw$mutes);
var inst_16597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16594__$1,cljs.core.cst$kw$reads);
var state_16644__$1 = (function (){var statearr_16659 = state_16644;
(statearr_16659[(10)] = inst_16595);

(statearr_16659[(12)] = inst_16594__$1);

(statearr_16659[(13)] = inst_16596);

return statearr_16659;
})();
return cljs.core.async.ioc_alts_BANG_(state_16644__$1,(22),inst_16597);
} else {
if((state_val_16645 === (31))){
var inst_16626 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
if(cljs.core.truth_(inst_16626)){
var statearr_16660_16716 = state_16644__$1;
(statearr_16660_16716[(1)] = (32));

} else {
var statearr_16661_16717 = state_16644__$1;
(statearr_16661_16717[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (32))){
var inst_16603 = (state_16644[(14)]);
var state_16644__$1 = state_16644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16644__$1,(35),out,inst_16603);
} else {
if((state_val_16645 === (33))){
var inst_16594 = (state_16644[(12)]);
var inst_16571 = inst_16594;
var state_16644__$1 = (function (){var statearr_16662 = state_16644;
(statearr_16662[(7)] = inst_16571);

return statearr_16662;
})();
var statearr_16663_16718 = state_16644__$1;
(statearr_16663_16718[(2)] = null);

(statearr_16663_16718[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (13))){
var inst_16571 = (state_16644[(7)]);
var inst_16578 = inst_16571.cljs$lang$protocol_mask$partition0$;
var inst_16579 = (inst_16578 & (64));
var inst_16580 = inst_16571.cljs$core$ISeq$;
var inst_16581 = (cljs.core.PROTOCOL_SENTINEL === inst_16580);
var inst_16582 = ((inst_16579) || (inst_16581));
var state_16644__$1 = state_16644;
if(cljs.core.truth_(inst_16582)){
var statearr_16664_16719 = state_16644__$1;
(statearr_16664_16719[(1)] = (16));

} else {
var statearr_16665_16720 = state_16644__$1;
(statearr_16665_16720[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (22))){
var inst_16604 = (state_16644[(9)]);
var inst_16603 = (state_16644[(14)]);
var inst_16602 = (state_16644[(2)]);
var inst_16603__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16602,(0),null);
var inst_16604__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16602,(1),null);
var inst_16605 = (inst_16603__$1 == null);
var inst_16606 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16604__$1,change);
var inst_16607 = ((inst_16605) || (inst_16606));
var state_16644__$1 = (function (){var statearr_16666 = state_16644;
(statearr_16666[(9)] = inst_16604__$1);

(statearr_16666[(14)] = inst_16603__$1);

return statearr_16666;
})();
if(cljs.core.truth_(inst_16607)){
var statearr_16667_16721 = state_16644__$1;
(statearr_16667_16721[(1)] = (23));

} else {
var statearr_16668_16722 = state_16644__$1;
(statearr_16668_16722[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (36))){
var inst_16594 = (state_16644[(12)]);
var inst_16571 = inst_16594;
var state_16644__$1 = (function (){var statearr_16669 = state_16644;
(statearr_16669[(7)] = inst_16571);

return statearr_16669;
})();
var statearr_16670_16723 = state_16644__$1;
(statearr_16670_16723[(2)] = null);

(statearr_16670_16723[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (29))){
var inst_16618 = (state_16644[(11)]);
var state_16644__$1 = state_16644;
var statearr_16671_16724 = state_16644__$1;
(statearr_16671_16724[(2)] = inst_16618);

(statearr_16671_16724[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (6))){
var state_16644__$1 = state_16644;
var statearr_16672_16725 = state_16644__$1;
(statearr_16672_16725[(2)] = false);

(statearr_16672_16725[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (28))){
var inst_16614 = (state_16644[(2)]);
var inst_16615 = calc_state();
var inst_16571 = inst_16615;
var state_16644__$1 = (function (){var statearr_16673 = state_16644;
(statearr_16673[(15)] = inst_16614);

(statearr_16673[(7)] = inst_16571);

return statearr_16673;
})();
var statearr_16674_16726 = state_16644__$1;
(statearr_16674_16726[(2)] = null);

(statearr_16674_16726[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (25))){
var inst_16640 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
var statearr_16675_16727 = state_16644__$1;
(statearr_16675_16727[(2)] = inst_16640);

(statearr_16675_16727[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (34))){
var inst_16638 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
var statearr_16676_16728 = state_16644__$1;
(statearr_16676_16728[(2)] = inst_16638);

(statearr_16676_16728[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (17))){
var state_16644__$1 = state_16644;
var statearr_16677_16729 = state_16644__$1;
(statearr_16677_16729[(2)] = false);

(statearr_16677_16729[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (3))){
var state_16644__$1 = state_16644;
var statearr_16678_16730 = state_16644__$1;
(statearr_16678_16730[(2)] = false);

(statearr_16678_16730[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (12))){
var inst_16642 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16644__$1,inst_16642);
} else {
if((state_val_16645 === (2))){
var inst_16546 = (state_16644[(8)]);
var inst_16551 = inst_16546.cljs$lang$protocol_mask$partition0$;
var inst_16552 = (inst_16551 & (64));
var inst_16553 = inst_16546.cljs$core$ISeq$;
var inst_16554 = (cljs.core.PROTOCOL_SENTINEL === inst_16553);
var inst_16555 = ((inst_16552) || (inst_16554));
var state_16644__$1 = state_16644;
if(cljs.core.truth_(inst_16555)){
var statearr_16679_16731 = state_16644__$1;
(statearr_16679_16731[(1)] = (5));

} else {
var statearr_16680_16732 = state_16644__$1;
(statearr_16680_16732[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (23))){
var inst_16603 = (state_16644[(14)]);
var inst_16609 = (inst_16603 == null);
var state_16644__$1 = state_16644;
if(cljs.core.truth_(inst_16609)){
var statearr_16681_16733 = state_16644__$1;
(statearr_16681_16733[(1)] = (26));

} else {
var statearr_16682_16734 = state_16644__$1;
(statearr_16682_16734[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (35))){
var inst_16629 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
if(cljs.core.truth_(inst_16629)){
var statearr_16683_16735 = state_16644__$1;
(statearr_16683_16735[(1)] = (36));

} else {
var statearr_16684_16736 = state_16644__$1;
(statearr_16684_16736[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (19))){
var inst_16571 = (state_16644[(7)]);
var inst_16591 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16571);
var state_16644__$1 = state_16644;
var statearr_16685_16737 = state_16644__$1;
(statearr_16685_16737[(2)] = inst_16591);

(statearr_16685_16737[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (11))){
var inst_16571 = (state_16644[(7)]);
var inst_16575 = (inst_16571 == null);
var inst_16576 = cljs.core.not(inst_16575);
var state_16644__$1 = state_16644;
if(inst_16576){
var statearr_16686_16738 = state_16644__$1;
(statearr_16686_16738[(1)] = (13));

} else {
var statearr_16687_16739 = state_16644__$1;
(statearr_16687_16739[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (9))){
var inst_16546 = (state_16644[(8)]);
var state_16644__$1 = state_16644;
var statearr_16688_16740 = state_16644__$1;
(statearr_16688_16740[(2)] = inst_16546);

(statearr_16688_16740[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (5))){
var state_16644__$1 = state_16644;
var statearr_16689_16741 = state_16644__$1;
(statearr_16689_16741[(2)] = true);

(statearr_16689_16741[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (14))){
var state_16644__$1 = state_16644;
var statearr_16690_16742 = state_16644__$1;
(statearr_16690_16742[(2)] = false);

(statearr_16690_16742[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (26))){
var inst_16604 = (state_16644[(9)]);
var inst_16611 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16604);
var state_16644__$1 = state_16644;
var statearr_16691_16743 = state_16644__$1;
(statearr_16691_16743[(2)] = inst_16611);

(statearr_16691_16743[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (16))){
var state_16644__$1 = state_16644;
var statearr_16692_16744 = state_16644__$1;
(statearr_16692_16744[(2)] = true);

(statearr_16692_16744[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (38))){
var inst_16634 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
var statearr_16693_16745 = state_16644__$1;
(statearr_16693_16745[(2)] = inst_16634);

(statearr_16693_16745[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (30))){
var inst_16604 = (state_16644[(9)]);
var inst_16595 = (state_16644[(10)]);
var inst_16596 = (state_16644[(13)]);
var inst_16621 = cljs.core.empty_QMARK_(inst_16595);
var inst_16622 = (inst_16596.cljs$core$IFn$_invoke$arity$1 ? inst_16596.cljs$core$IFn$_invoke$arity$1(inst_16604) : inst_16596.call(null,inst_16604));
var inst_16623 = cljs.core.not(inst_16622);
var inst_16624 = ((inst_16621) && (inst_16623));
var state_16644__$1 = state_16644;
var statearr_16694_16746 = state_16644__$1;
(statearr_16694_16746[(2)] = inst_16624);

(statearr_16694_16746[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (10))){
var inst_16546 = (state_16644[(8)]);
var inst_16567 = (state_16644[(2)]);
var inst_16568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16567,cljs.core.cst$kw$solos);
var inst_16569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16567,cljs.core.cst$kw$mutes);
var inst_16570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16567,cljs.core.cst$kw$reads);
var inst_16571 = inst_16546;
var state_16644__$1 = (function (){var statearr_16695 = state_16644;
(statearr_16695[(16)] = inst_16570);

(statearr_16695[(17)] = inst_16569);

(statearr_16695[(18)] = inst_16568);

(statearr_16695[(7)] = inst_16571);

return statearr_16695;
})();
var statearr_16696_16747 = state_16644__$1;
(statearr_16696_16747[(2)] = null);

(statearr_16696_16747[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (18))){
var inst_16586 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
var statearr_16697_16748 = state_16644__$1;
(statearr_16697_16748[(2)] = inst_16586);

(statearr_16697_16748[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (37))){
var state_16644__$1 = state_16644;
var statearr_16698_16749 = state_16644__$1;
(statearr_16698_16749[(2)] = null);

(statearr_16698_16749[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16645 === (8))){
var inst_16546 = (state_16644[(8)]);
var inst_16564 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16546);
var state_16644__$1 = state_16644;
var statearr_16699_16750 = state_16644__$1;
(statearr_16699_16750[(2)] = inst_16564);

(statearr_16699_16750[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___16704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13594__auto__,c__13775__auto___16704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13595__auto__ = null;
var cljs$core$async$mix_$_state_machine__13595__auto____0 = (function (){
var statearr_16700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16700[(0)] = cljs$core$async$mix_$_state_machine__13595__auto__);

(statearr_16700[(1)] = (1));

return statearr_16700;
});
var cljs$core$async$mix_$_state_machine__13595__auto____1 = (function (state_16644){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_16644);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e16701){if((e16701 instanceof Object)){
var ex__13598__auto__ = e16701;
var statearr_16702_16751 = state_16644;
(statearr_16702_16751[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16644);

return cljs.core.cst$kw$recur;
} else {
throw e16701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16752 = state_16644;
state_16644 = G__16752;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13595__auto__ = function(state_16644){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13595__auto____1.call(this,state_16644);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13595__auto____0;
cljs$core$async$mix_$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13595__auto____1;
return cljs$core$async$mix_$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___16704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13777__auto__ = (function (){var statearr_16703 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_16703[(6)] = c__13775__auto___16704);

return statearr_16703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___16704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16754 = arguments.length;
switch (G__16754) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16758 = arguments.length;
switch (G__16758) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__16756_SHARP_){
if(cljs.core.truth_((p1__16756_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16756_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16756_SHARP_.call(null,topic)))){
return p1__16756_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16756_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16759 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16760){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16760 = meta16760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16761,meta16760__$1){
var self__ = this;
var _16761__$1 = this;
return (new cljs.core.async.t_cljs$core$async16759(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16760__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16761){
var self__ = this;
var _16761__$1 = this;
return self__.meta16760;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16759.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16759.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16759.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16759.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16759.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16759.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16759.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16760], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16759";

cljs.core.async.t_cljs$core$async16759.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16759");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16759.
 */
cljs.core.async.__GT_t_cljs$core$async16759 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16759(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16760){
return (new cljs.core.async.t_cljs$core$async16759(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16760));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16759(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13775__auto___16879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___16879,mults,ensure_mult,p){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___16879,mults,ensure_mult,p){
return (function (state_16833){
var state_val_16834 = (state_16833[(1)]);
if((state_val_16834 === (7))){
var inst_16829 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16835_16880 = state_16833__$1;
(statearr_16835_16880[(2)] = inst_16829);

(statearr_16835_16880[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (20))){
var state_16833__$1 = state_16833;
var statearr_16836_16881 = state_16833__$1;
(statearr_16836_16881[(2)] = null);

(statearr_16836_16881[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (1))){
var state_16833__$1 = state_16833;
var statearr_16837_16882 = state_16833__$1;
(statearr_16837_16882[(2)] = null);

(statearr_16837_16882[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (24))){
var inst_16812 = (state_16833[(7)]);
var inst_16821 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16812);
var state_16833__$1 = state_16833;
var statearr_16838_16883 = state_16833__$1;
(statearr_16838_16883[(2)] = inst_16821);

(statearr_16838_16883[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (4))){
var inst_16764 = (state_16833[(8)]);
var inst_16764__$1 = (state_16833[(2)]);
var inst_16765 = (inst_16764__$1 == null);
var state_16833__$1 = (function (){var statearr_16839 = state_16833;
(statearr_16839[(8)] = inst_16764__$1);

return statearr_16839;
})();
if(cljs.core.truth_(inst_16765)){
var statearr_16840_16884 = state_16833__$1;
(statearr_16840_16884[(1)] = (5));

} else {
var statearr_16841_16885 = state_16833__$1;
(statearr_16841_16885[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (15))){
var inst_16806 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16842_16886 = state_16833__$1;
(statearr_16842_16886[(2)] = inst_16806);

(statearr_16842_16886[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (21))){
var inst_16826 = (state_16833[(2)]);
var state_16833__$1 = (function (){var statearr_16843 = state_16833;
(statearr_16843[(9)] = inst_16826);

return statearr_16843;
})();
var statearr_16844_16887 = state_16833__$1;
(statearr_16844_16887[(2)] = null);

(statearr_16844_16887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (13))){
var inst_16788 = (state_16833[(10)]);
var inst_16790 = cljs.core.chunked_seq_QMARK_(inst_16788);
var state_16833__$1 = state_16833;
if(inst_16790){
var statearr_16845_16888 = state_16833__$1;
(statearr_16845_16888[(1)] = (16));

} else {
var statearr_16846_16889 = state_16833__$1;
(statearr_16846_16889[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (22))){
var inst_16818 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
if(cljs.core.truth_(inst_16818)){
var statearr_16847_16890 = state_16833__$1;
(statearr_16847_16890[(1)] = (23));

} else {
var statearr_16848_16891 = state_16833__$1;
(statearr_16848_16891[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (6))){
var inst_16764 = (state_16833[(8)]);
var inst_16814 = (state_16833[(11)]);
var inst_16812 = (state_16833[(7)]);
var inst_16812__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16764) : topic_fn.call(null,inst_16764));
var inst_16813 = cljs.core.deref(mults);
var inst_16814__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16813,inst_16812__$1);
var state_16833__$1 = (function (){var statearr_16849 = state_16833;
(statearr_16849[(11)] = inst_16814__$1);

(statearr_16849[(7)] = inst_16812__$1);

return statearr_16849;
})();
if(cljs.core.truth_(inst_16814__$1)){
var statearr_16850_16892 = state_16833__$1;
(statearr_16850_16892[(1)] = (19));

} else {
var statearr_16851_16893 = state_16833__$1;
(statearr_16851_16893[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (25))){
var inst_16823 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16852_16894 = state_16833__$1;
(statearr_16852_16894[(2)] = inst_16823);

(statearr_16852_16894[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (17))){
var inst_16788 = (state_16833[(10)]);
var inst_16797 = cljs.core.first(inst_16788);
var inst_16798 = cljs.core.async.muxch_STAR_(inst_16797);
var inst_16799 = cljs.core.async.close_BANG_(inst_16798);
var inst_16800 = cljs.core.next(inst_16788);
var inst_16774 = inst_16800;
var inst_16775 = null;
var inst_16776 = (0);
var inst_16777 = (0);
var state_16833__$1 = (function (){var statearr_16853 = state_16833;
(statearr_16853[(12)] = inst_16799);

(statearr_16853[(13)] = inst_16774);

(statearr_16853[(14)] = inst_16777);

(statearr_16853[(15)] = inst_16775);

(statearr_16853[(16)] = inst_16776);

return statearr_16853;
})();
var statearr_16854_16895 = state_16833__$1;
(statearr_16854_16895[(2)] = null);

(statearr_16854_16895[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (3))){
var inst_16831 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16833__$1,inst_16831);
} else {
if((state_val_16834 === (12))){
var inst_16808 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16855_16896 = state_16833__$1;
(statearr_16855_16896[(2)] = inst_16808);

(statearr_16855_16896[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (2))){
var state_16833__$1 = state_16833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16833__$1,(4),ch);
} else {
if((state_val_16834 === (23))){
var state_16833__$1 = state_16833;
var statearr_16856_16897 = state_16833__$1;
(statearr_16856_16897[(2)] = null);

(statearr_16856_16897[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (19))){
var inst_16764 = (state_16833[(8)]);
var inst_16814 = (state_16833[(11)]);
var inst_16816 = cljs.core.async.muxch_STAR_(inst_16814);
var state_16833__$1 = state_16833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16833__$1,(22),inst_16816,inst_16764);
} else {
if((state_val_16834 === (11))){
var inst_16788 = (state_16833[(10)]);
var inst_16774 = (state_16833[(13)]);
var inst_16788__$1 = cljs.core.seq(inst_16774);
var state_16833__$1 = (function (){var statearr_16857 = state_16833;
(statearr_16857[(10)] = inst_16788__$1);

return statearr_16857;
})();
if(inst_16788__$1){
var statearr_16858_16898 = state_16833__$1;
(statearr_16858_16898[(1)] = (13));

} else {
var statearr_16859_16899 = state_16833__$1;
(statearr_16859_16899[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (9))){
var inst_16810 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16860_16900 = state_16833__$1;
(statearr_16860_16900[(2)] = inst_16810);

(statearr_16860_16900[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (5))){
var inst_16771 = cljs.core.deref(mults);
var inst_16772 = cljs.core.vals(inst_16771);
var inst_16773 = cljs.core.seq(inst_16772);
var inst_16774 = inst_16773;
var inst_16775 = null;
var inst_16776 = (0);
var inst_16777 = (0);
var state_16833__$1 = (function (){var statearr_16861 = state_16833;
(statearr_16861[(13)] = inst_16774);

(statearr_16861[(14)] = inst_16777);

(statearr_16861[(15)] = inst_16775);

(statearr_16861[(16)] = inst_16776);

return statearr_16861;
})();
var statearr_16862_16901 = state_16833__$1;
(statearr_16862_16901[(2)] = null);

(statearr_16862_16901[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (14))){
var state_16833__$1 = state_16833;
var statearr_16866_16902 = state_16833__$1;
(statearr_16866_16902[(2)] = null);

(statearr_16866_16902[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (16))){
var inst_16788 = (state_16833[(10)]);
var inst_16792 = cljs.core.chunk_first(inst_16788);
var inst_16793 = cljs.core.chunk_rest(inst_16788);
var inst_16794 = cljs.core.count(inst_16792);
var inst_16774 = inst_16793;
var inst_16775 = inst_16792;
var inst_16776 = inst_16794;
var inst_16777 = (0);
var state_16833__$1 = (function (){var statearr_16867 = state_16833;
(statearr_16867[(13)] = inst_16774);

(statearr_16867[(14)] = inst_16777);

(statearr_16867[(15)] = inst_16775);

(statearr_16867[(16)] = inst_16776);

return statearr_16867;
})();
var statearr_16868_16903 = state_16833__$1;
(statearr_16868_16903[(2)] = null);

(statearr_16868_16903[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (10))){
var inst_16774 = (state_16833[(13)]);
var inst_16777 = (state_16833[(14)]);
var inst_16775 = (state_16833[(15)]);
var inst_16776 = (state_16833[(16)]);
var inst_16782 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16775,inst_16777);
var inst_16783 = cljs.core.async.muxch_STAR_(inst_16782);
var inst_16784 = cljs.core.async.close_BANG_(inst_16783);
var inst_16785 = (inst_16777 + (1));
var tmp16863 = inst_16774;
var tmp16864 = inst_16775;
var tmp16865 = inst_16776;
var inst_16774__$1 = tmp16863;
var inst_16775__$1 = tmp16864;
var inst_16776__$1 = tmp16865;
var inst_16777__$1 = inst_16785;
var state_16833__$1 = (function (){var statearr_16869 = state_16833;
(statearr_16869[(13)] = inst_16774__$1);

(statearr_16869[(14)] = inst_16777__$1);

(statearr_16869[(15)] = inst_16775__$1);

(statearr_16869[(17)] = inst_16784);

(statearr_16869[(16)] = inst_16776__$1);

return statearr_16869;
})();
var statearr_16870_16904 = state_16833__$1;
(statearr_16870_16904[(2)] = null);

(statearr_16870_16904[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (18))){
var inst_16803 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16871_16905 = state_16833__$1;
(statearr_16871_16905[(2)] = inst_16803);

(statearr_16871_16905[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (8))){
var inst_16777 = (state_16833[(14)]);
var inst_16776 = (state_16833[(16)]);
var inst_16779 = (inst_16777 < inst_16776);
var inst_16780 = inst_16779;
var state_16833__$1 = state_16833;
if(cljs.core.truth_(inst_16780)){
var statearr_16872_16906 = state_16833__$1;
(statearr_16872_16906[(1)] = (10));

} else {
var statearr_16873_16907 = state_16833__$1;
(statearr_16873_16907[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___16879,mults,ensure_mult,p))
;
return ((function (switch__13594__auto__,c__13775__auto___16879,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_16874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16874[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_16874[(1)] = (1));

return statearr_16874;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_16833){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_16833);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e16875){if((e16875 instanceof Object)){
var ex__13598__auto__ = e16875;
var statearr_16876_16908 = state_16833;
(statearr_16876_16908[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16833);

return cljs.core.cst$kw$recur;
} else {
throw e16875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__16909 = state_16833;
state_16833 = G__16909;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_16833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_16833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___16879,mults,ensure_mult,p))
})();
var state__13777__auto__ = (function (){var statearr_16877 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_16877[(6)] = c__13775__auto___16879);

return statearr_16877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___16879,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16911 = arguments.length;
switch (G__16911) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16914 = arguments.length;
switch (G__16914) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16917 = arguments.length;
switch (G__16917) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13775__auto___16984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___16984,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___16984,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16956){
var state_val_16957 = (state_16956[(1)]);
if((state_val_16957 === (7))){
var state_16956__$1 = state_16956;
var statearr_16958_16985 = state_16956__$1;
(statearr_16958_16985[(2)] = null);

(statearr_16958_16985[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (1))){
var state_16956__$1 = state_16956;
var statearr_16959_16986 = state_16956__$1;
(statearr_16959_16986[(2)] = null);

(statearr_16959_16986[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (4))){
var inst_16920 = (state_16956[(7)]);
var inst_16922 = (inst_16920 < cnt);
var state_16956__$1 = state_16956;
if(cljs.core.truth_(inst_16922)){
var statearr_16960_16987 = state_16956__$1;
(statearr_16960_16987[(1)] = (6));

} else {
var statearr_16961_16988 = state_16956__$1;
(statearr_16961_16988[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (15))){
var inst_16952 = (state_16956[(2)]);
var state_16956__$1 = state_16956;
var statearr_16962_16989 = state_16956__$1;
(statearr_16962_16989[(2)] = inst_16952);

(statearr_16962_16989[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (13))){
var inst_16945 = cljs.core.async.close_BANG_(out);
var state_16956__$1 = state_16956;
var statearr_16963_16990 = state_16956__$1;
(statearr_16963_16990[(2)] = inst_16945);

(statearr_16963_16990[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (6))){
var state_16956__$1 = state_16956;
var statearr_16964_16991 = state_16956__$1;
(statearr_16964_16991[(2)] = null);

(statearr_16964_16991[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (3))){
var inst_16954 = (state_16956[(2)]);
var state_16956__$1 = state_16956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16956__$1,inst_16954);
} else {
if((state_val_16957 === (12))){
var inst_16942 = (state_16956[(8)]);
var inst_16942__$1 = (state_16956[(2)]);
var inst_16943 = cljs.core.some(cljs.core.nil_QMARK_,inst_16942__$1);
var state_16956__$1 = (function (){var statearr_16965 = state_16956;
(statearr_16965[(8)] = inst_16942__$1);

return statearr_16965;
})();
if(cljs.core.truth_(inst_16943)){
var statearr_16966_16992 = state_16956__$1;
(statearr_16966_16992[(1)] = (13));

} else {
var statearr_16967_16993 = state_16956__$1;
(statearr_16967_16993[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (2))){
var inst_16919 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16920 = (0);
var state_16956__$1 = (function (){var statearr_16968 = state_16956;
(statearr_16968[(9)] = inst_16919);

(statearr_16968[(7)] = inst_16920);

return statearr_16968;
})();
var statearr_16969_16994 = state_16956__$1;
(statearr_16969_16994[(2)] = null);

(statearr_16969_16994[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (11))){
var inst_16920 = (state_16956[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16956,(10),Object,null,(9));
var inst_16929 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16920) : chs__$1.call(null,inst_16920));
var inst_16930 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16920) : done.call(null,inst_16920));
var inst_16931 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16929,inst_16930);
var state_16956__$1 = state_16956;
var statearr_16970_16995 = state_16956__$1;
(statearr_16970_16995[(2)] = inst_16931);


cljs.core.async.impl.ioc_helpers.process_exception(state_16956__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (9))){
var inst_16920 = (state_16956[(7)]);
var inst_16933 = (state_16956[(2)]);
var inst_16934 = (inst_16920 + (1));
var inst_16920__$1 = inst_16934;
var state_16956__$1 = (function (){var statearr_16971 = state_16956;
(statearr_16971[(10)] = inst_16933);

(statearr_16971[(7)] = inst_16920__$1);

return statearr_16971;
})();
var statearr_16972_16996 = state_16956__$1;
(statearr_16972_16996[(2)] = null);

(statearr_16972_16996[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (5))){
var inst_16940 = (state_16956[(2)]);
var state_16956__$1 = (function (){var statearr_16973 = state_16956;
(statearr_16973[(11)] = inst_16940);

return statearr_16973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16956__$1,(12),dchan);
} else {
if((state_val_16957 === (14))){
var inst_16942 = (state_16956[(8)]);
var inst_16947 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16942);
var state_16956__$1 = state_16956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16956__$1,(16),out,inst_16947);
} else {
if((state_val_16957 === (16))){
var inst_16949 = (state_16956[(2)]);
var state_16956__$1 = (function (){var statearr_16974 = state_16956;
(statearr_16974[(12)] = inst_16949);

return statearr_16974;
})();
var statearr_16975_16997 = state_16956__$1;
(statearr_16975_16997[(2)] = null);

(statearr_16975_16997[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (10))){
var inst_16924 = (state_16956[(2)]);
var inst_16925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16956__$1 = (function (){var statearr_16976 = state_16956;
(statearr_16976[(13)] = inst_16924);

return statearr_16976;
})();
var statearr_16977_16998 = state_16956__$1;
(statearr_16977_16998[(2)] = inst_16925);


cljs.core.async.impl.ioc_helpers.process_exception(state_16956__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16957 === (8))){
var inst_16938 = (state_16956[(2)]);
var state_16956__$1 = state_16956;
var statearr_16978_16999 = state_16956__$1;
(statearr_16978_16999[(2)] = inst_16938);

(statearr_16978_16999[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___16984,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13594__auto__,c__13775__auto___16984,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_16979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16979[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_16979[(1)] = (1));

return statearr_16979;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_16956){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_16956);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e16980){if((e16980 instanceof Object)){
var ex__13598__auto__ = e16980;
var statearr_16981_17000 = state_16956;
(statearr_16981_17000[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16956);

return cljs.core.cst$kw$recur;
} else {
throw e16980;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__17001 = state_16956;
state_16956 = G__17001;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_16956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_16956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___16984,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13777__auto__ = (function (){var statearr_16982 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_16982[(6)] = c__13775__auto___16984);

return statearr_16982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___16984,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17004 = arguments.length;
switch (G__17004) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13775__auto___17058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___17058,out){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___17058,out){
return (function (state_17036){
var state_val_17037 = (state_17036[(1)]);
if((state_val_17037 === (7))){
var inst_17015 = (state_17036[(7)]);
var inst_17016 = (state_17036[(8)]);
var inst_17015__$1 = (state_17036[(2)]);
var inst_17016__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17015__$1,(0),null);
var inst_17017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17015__$1,(1),null);
var inst_17018 = (inst_17016__$1 == null);
var state_17036__$1 = (function (){var statearr_17038 = state_17036;
(statearr_17038[(7)] = inst_17015__$1);

(statearr_17038[(9)] = inst_17017);

(statearr_17038[(8)] = inst_17016__$1);

return statearr_17038;
})();
if(cljs.core.truth_(inst_17018)){
var statearr_17039_17059 = state_17036__$1;
(statearr_17039_17059[(1)] = (8));

} else {
var statearr_17040_17060 = state_17036__$1;
(statearr_17040_17060[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (1))){
var inst_17005 = cljs.core.vec(chs);
var inst_17006 = inst_17005;
var state_17036__$1 = (function (){var statearr_17041 = state_17036;
(statearr_17041[(10)] = inst_17006);

return statearr_17041;
})();
var statearr_17042_17061 = state_17036__$1;
(statearr_17042_17061[(2)] = null);

(statearr_17042_17061[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (4))){
var inst_17006 = (state_17036[(10)]);
var state_17036__$1 = state_17036;
return cljs.core.async.ioc_alts_BANG_(state_17036__$1,(7),inst_17006);
} else {
if((state_val_17037 === (6))){
var inst_17032 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17043_17062 = state_17036__$1;
(statearr_17043_17062[(2)] = inst_17032);

(statearr_17043_17062[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (3))){
var inst_17034 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17036__$1,inst_17034);
} else {
if((state_val_17037 === (2))){
var inst_17006 = (state_17036[(10)]);
var inst_17008 = cljs.core.count(inst_17006);
var inst_17009 = (inst_17008 > (0));
var state_17036__$1 = state_17036;
if(cljs.core.truth_(inst_17009)){
var statearr_17045_17063 = state_17036__$1;
(statearr_17045_17063[(1)] = (4));

} else {
var statearr_17046_17064 = state_17036__$1;
(statearr_17046_17064[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (11))){
var inst_17006 = (state_17036[(10)]);
var inst_17025 = (state_17036[(2)]);
var tmp17044 = inst_17006;
var inst_17006__$1 = tmp17044;
var state_17036__$1 = (function (){var statearr_17047 = state_17036;
(statearr_17047[(10)] = inst_17006__$1);

(statearr_17047[(11)] = inst_17025);

return statearr_17047;
})();
var statearr_17048_17065 = state_17036__$1;
(statearr_17048_17065[(2)] = null);

(statearr_17048_17065[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (9))){
var inst_17016 = (state_17036[(8)]);
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17036__$1,(11),out,inst_17016);
} else {
if((state_val_17037 === (5))){
var inst_17030 = cljs.core.async.close_BANG_(out);
var state_17036__$1 = state_17036;
var statearr_17049_17066 = state_17036__$1;
(statearr_17049_17066[(2)] = inst_17030);

(statearr_17049_17066[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (10))){
var inst_17028 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17050_17067 = state_17036__$1;
(statearr_17050_17067[(2)] = inst_17028);

(statearr_17050_17067[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (8))){
var inst_17006 = (state_17036[(10)]);
var inst_17015 = (state_17036[(7)]);
var inst_17017 = (state_17036[(9)]);
var inst_17016 = (state_17036[(8)]);
var inst_17020 = (function (){var cs = inst_17006;
var vec__17011 = inst_17015;
var v = inst_17016;
var c = inst_17017;
return ((function (cs,vec__17011,v,c,inst_17006,inst_17015,inst_17017,inst_17016,state_val_17037,c__13775__auto___17058,out){
return (function (p1__17002_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17002_SHARP_);
});
;})(cs,vec__17011,v,c,inst_17006,inst_17015,inst_17017,inst_17016,state_val_17037,c__13775__auto___17058,out))
})();
var inst_17021 = cljs.core.filterv(inst_17020,inst_17006);
var inst_17006__$1 = inst_17021;
var state_17036__$1 = (function (){var statearr_17051 = state_17036;
(statearr_17051[(10)] = inst_17006__$1);

return statearr_17051;
})();
var statearr_17052_17068 = state_17036__$1;
(statearr_17052_17068[(2)] = null);

(statearr_17052_17068[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___17058,out))
;
return ((function (switch__13594__auto__,c__13775__auto___17058,out){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_17053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17053[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_17053[(1)] = (1));

return statearr_17053;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_17036){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_17036);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e17054){if((e17054 instanceof Object)){
var ex__13598__auto__ = e17054;
var statearr_17055_17069 = state_17036;
(statearr_17055_17069[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17036);

return cljs.core.cst$kw$recur;
} else {
throw e17054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__17070 = state_17036;
state_17036 = G__17070;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_17036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_17036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___17058,out))
})();
var state__13777__auto__ = (function (){var statearr_17056 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_17056[(6)] = c__13775__auto___17058);

return statearr_17056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___17058,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17072 = arguments.length;
switch (G__17072) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13775__auto___17117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___17117,out){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___17117,out){
return (function (state_17096){
var state_val_17097 = (state_17096[(1)]);
if((state_val_17097 === (7))){
var inst_17078 = (state_17096[(7)]);
var inst_17078__$1 = (state_17096[(2)]);
var inst_17079 = (inst_17078__$1 == null);
var inst_17080 = cljs.core.not(inst_17079);
var state_17096__$1 = (function (){var statearr_17098 = state_17096;
(statearr_17098[(7)] = inst_17078__$1);

return statearr_17098;
})();
if(inst_17080){
var statearr_17099_17118 = state_17096__$1;
(statearr_17099_17118[(1)] = (8));

} else {
var statearr_17100_17119 = state_17096__$1;
(statearr_17100_17119[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (1))){
var inst_17073 = (0);
var state_17096__$1 = (function (){var statearr_17101 = state_17096;
(statearr_17101[(8)] = inst_17073);

return statearr_17101;
})();
var statearr_17102_17120 = state_17096__$1;
(statearr_17102_17120[(2)] = null);

(statearr_17102_17120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (4))){
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17096__$1,(7),ch);
} else {
if((state_val_17097 === (6))){
var inst_17091 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
var statearr_17103_17121 = state_17096__$1;
(statearr_17103_17121[(2)] = inst_17091);

(statearr_17103_17121[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (3))){
var inst_17093 = (state_17096[(2)]);
var inst_17094 = cljs.core.async.close_BANG_(out);
var state_17096__$1 = (function (){var statearr_17104 = state_17096;
(statearr_17104[(9)] = inst_17093);

return statearr_17104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17096__$1,inst_17094);
} else {
if((state_val_17097 === (2))){
var inst_17073 = (state_17096[(8)]);
var inst_17075 = (inst_17073 < n);
var state_17096__$1 = state_17096;
if(cljs.core.truth_(inst_17075)){
var statearr_17105_17122 = state_17096__$1;
(statearr_17105_17122[(1)] = (4));

} else {
var statearr_17106_17123 = state_17096__$1;
(statearr_17106_17123[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (11))){
var inst_17073 = (state_17096[(8)]);
var inst_17083 = (state_17096[(2)]);
var inst_17084 = (inst_17073 + (1));
var inst_17073__$1 = inst_17084;
var state_17096__$1 = (function (){var statearr_17107 = state_17096;
(statearr_17107[(10)] = inst_17083);

(statearr_17107[(8)] = inst_17073__$1);

return statearr_17107;
})();
var statearr_17108_17124 = state_17096__$1;
(statearr_17108_17124[(2)] = null);

(statearr_17108_17124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (9))){
var state_17096__$1 = state_17096;
var statearr_17109_17125 = state_17096__$1;
(statearr_17109_17125[(2)] = null);

(statearr_17109_17125[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (5))){
var state_17096__$1 = state_17096;
var statearr_17110_17126 = state_17096__$1;
(statearr_17110_17126[(2)] = null);

(statearr_17110_17126[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (10))){
var inst_17088 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
var statearr_17111_17127 = state_17096__$1;
(statearr_17111_17127[(2)] = inst_17088);

(statearr_17111_17127[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (8))){
var inst_17078 = (state_17096[(7)]);
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17096__$1,(11),out,inst_17078);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___17117,out))
;
return ((function (switch__13594__auto__,c__13775__auto___17117,out){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_17112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17112[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_17112[(1)] = (1));

return statearr_17112;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_17096){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_17096);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e17113){if((e17113 instanceof Object)){
var ex__13598__auto__ = e17113;
var statearr_17114_17128 = state_17096;
(statearr_17114_17128[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17096);

return cljs.core.cst$kw$recur;
} else {
throw e17113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__17129 = state_17096;
state_17096 = G__17129;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_17096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_17096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___17117,out))
})();
var state__13777__auto__ = (function (){var statearr_17115 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_17115[(6)] = c__13775__auto___17117);

return statearr_17115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___17117,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17131 = (function (f,ch,meta17132){
this.f = f;
this.ch = ch;
this.meta17132 = meta17132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17133,meta17132__$1){
var self__ = this;
var _17133__$1 = this;
return (new cljs.core.async.t_cljs$core$async17131(self__.f,self__.ch,meta17132__$1));
});

cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17133){
var self__ = this;
var _17133__$1 = this;
return self__.meta17132;
});

cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17134 = (function (f,ch,meta17132,_,fn1,meta17135){
this.f = f;
this.ch = ch;
this.meta17132 = meta17132;
this._ = _;
this.fn1 = fn1;
this.meta17135 = meta17135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17136,meta17135__$1){
var self__ = this;
var _17136__$1 = this;
return (new cljs.core.async.t_cljs$core$async17134(self__.f,self__.ch,self__.meta17132,self__._,self__.fn1,meta17135__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17136){
var self__ = this;
var _17136__$1 = this;
return self__.meta17135;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17134.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17130_SHARP_){
var G__17137 = (((p1__17130_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17130_SHARP_) : self__.f.call(null,p1__17130_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17137) : f1.call(null,G__17137));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17134.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17132,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17131], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17135], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17134";

cljs.core.async.t_cljs$core$async17134.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17134");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17134.
 */
cljs.core.async.__GT_t_cljs$core$async17134 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17134(f__$1,ch__$1,meta17132__$1,___$2,fn1__$1,meta17135){
return (new cljs.core.async.t_cljs$core$async17134(f__$1,ch__$1,meta17132__$1,___$2,fn1__$1,meta17135));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17134(self__.f,self__.ch,self__.meta17132,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17138 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17138) : self__.f.call(null,G__17138));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17132], null);
});

cljs.core.async.t_cljs$core$async17131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17131";

cljs.core.async.t_cljs$core$async17131.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17131");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17131.
 */
cljs.core.async.__GT_t_cljs$core$async17131 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17131(f__$1,ch__$1,meta17132){
return (new cljs.core.async.t_cljs$core$async17131(f__$1,ch__$1,meta17132));
});

}

return (new cljs.core.async.t_cljs$core$async17131(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17139 = (function (f,ch,meta17140){
this.f = f;
this.ch = ch;
this.meta17140 = meta17140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17141,meta17140__$1){
var self__ = this;
var _17141__$1 = this;
return (new cljs.core.async.t_cljs$core$async17139(self__.f,self__.ch,meta17140__$1));
});

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17141){
var self__ = this;
var _17141__$1 = this;
return self__.meta17140;
});

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17140], null);
});

cljs.core.async.t_cljs$core$async17139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17139";

cljs.core.async.t_cljs$core$async17139.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17139");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17139.
 */
cljs.core.async.__GT_t_cljs$core$async17139 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17139(f__$1,ch__$1,meta17140){
return (new cljs.core.async.t_cljs$core$async17139(f__$1,ch__$1,meta17140));
});

}

return (new cljs.core.async.t_cljs$core$async17139(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17142 = (function (p,ch,meta17143){
this.p = p;
this.ch = ch;
this.meta17143 = meta17143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17144,meta17143__$1){
var self__ = this;
var _17144__$1 = this;
return (new cljs.core.async.t_cljs$core$async17142(self__.p,self__.ch,meta17143__$1));
});

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17144){
var self__ = this;
var _17144__$1 = this;
return self__.meta17143;
});

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17143], null);
});

cljs.core.async.t_cljs$core$async17142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17142";

cljs.core.async.t_cljs$core$async17142.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17142");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17142.
 */
cljs.core.async.__GT_t_cljs$core$async17142 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17142(p__$1,ch__$1,meta17143){
return (new cljs.core.async.t_cljs$core$async17142(p__$1,ch__$1,meta17143));
});

}

return (new cljs.core.async.t_cljs$core$async17142(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17146 = arguments.length;
switch (G__17146) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13775__auto___17186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___17186,out){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___17186,out){
return (function (state_17167){
var state_val_17168 = (state_17167[(1)]);
if((state_val_17168 === (7))){
var inst_17163 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
var statearr_17169_17187 = state_17167__$1;
(statearr_17169_17187[(2)] = inst_17163);

(statearr_17169_17187[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17168 === (1))){
var state_17167__$1 = state_17167;
var statearr_17170_17188 = state_17167__$1;
(statearr_17170_17188[(2)] = null);

(statearr_17170_17188[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17168 === (4))){
var inst_17149 = (state_17167[(7)]);
var inst_17149__$1 = (state_17167[(2)]);
var inst_17150 = (inst_17149__$1 == null);
var state_17167__$1 = (function (){var statearr_17171 = state_17167;
(statearr_17171[(7)] = inst_17149__$1);

return statearr_17171;
})();
if(cljs.core.truth_(inst_17150)){
var statearr_17172_17189 = state_17167__$1;
(statearr_17172_17189[(1)] = (5));

} else {
var statearr_17173_17190 = state_17167__$1;
(statearr_17173_17190[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17168 === (6))){
var inst_17149 = (state_17167[(7)]);
var inst_17154 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17149) : p.call(null,inst_17149));
var state_17167__$1 = state_17167;
if(cljs.core.truth_(inst_17154)){
var statearr_17174_17191 = state_17167__$1;
(statearr_17174_17191[(1)] = (8));

} else {
var statearr_17175_17192 = state_17167__$1;
(statearr_17175_17192[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17168 === (3))){
var inst_17165 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17167__$1,inst_17165);
} else {
if((state_val_17168 === (2))){
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17167__$1,(4),ch);
} else {
if((state_val_17168 === (11))){
var inst_17157 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
var statearr_17176_17193 = state_17167__$1;
(statearr_17176_17193[(2)] = inst_17157);

(statearr_17176_17193[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17168 === (9))){
var state_17167__$1 = state_17167;
var statearr_17177_17194 = state_17167__$1;
(statearr_17177_17194[(2)] = null);

(statearr_17177_17194[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17168 === (5))){
var inst_17152 = cljs.core.async.close_BANG_(out);
var state_17167__$1 = state_17167;
var statearr_17178_17195 = state_17167__$1;
(statearr_17178_17195[(2)] = inst_17152);

(statearr_17178_17195[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17168 === (10))){
var inst_17160 = (state_17167[(2)]);
var state_17167__$1 = (function (){var statearr_17179 = state_17167;
(statearr_17179[(8)] = inst_17160);

return statearr_17179;
})();
var statearr_17180_17196 = state_17167__$1;
(statearr_17180_17196[(2)] = null);

(statearr_17180_17196[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17168 === (8))){
var inst_17149 = (state_17167[(7)]);
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17167__$1,(11),out,inst_17149);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___17186,out))
;
return ((function (switch__13594__auto__,c__13775__auto___17186,out){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_17181 = [null,null,null,null,null,null,null,null,null];
(statearr_17181[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_17181[(1)] = (1));

return statearr_17181;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_17167){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_17167);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e17182){if((e17182 instanceof Object)){
var ex__13598__auto__ = e17182;
var statearr_17183_17197 = state_17167;
(statearr_17183_17197[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17167);

return cljs.core.cst$kw$recur;
} else {
throw e17182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__17198 = state_17167;
state_17167 = G__17198;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_17167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_17167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___17186,out))
})();
var state__13777__auto__ = (function (){var statearr_17184 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_17184[(6)] = c__13775__auto___17186);

return statearr_17184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___17186,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17200 = arguments.length;
switch (G__17200) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto__){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto__){
return (function (state_17263){
var state_val_17264 = (state_17263[(1)]);
if((state_val_17264 === (7))){
var inst_17259 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17265_17303 = state_17263__$1;
(statearr_17265_17303[(2)] = inst_17259);

(statearr_17265_17303[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (20))){
var inst_17229 = (state_17263[(7)]);
var inst_17240 = (state_17263[(2)]);
var inst_17241 = cljs.core.next(inst_17229);
var inst_17215 = inst_17241;
var inst_17216 = null;
var inst_17217 = (0);
var inst_17218 = (0);
var state_17263__$1 = (function (){var statearr_17266 = state_17263;
(statearr_17266[(8)] = inst_17218);

(statearr_17266[(9)] = inst_17215);

(statearr_17266[(10)] = inst_17217);

(statearr_17266[(11)] = inst_17240);

(statearr_17266[(12)] = inst_17216);

return statearr_17266;
})();
var statearr_17267_17304 = state_17263__$1;
(statearr_17267_17304[(2)] = null);

(statearr_17267_17304[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (1))){
var state_17263__$1 = state_17263;
var statearr_17268_17305 = state_17263__$1;
(statearr_17268_17305[(2)] = null);

(statearr_17268_17305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (4))){
var inst_17204 = (state_17263[(13)]);
var inst_17204__$1 = (state_17263[(2)]);
var inst_17205 = (inst_17204__$1 == null);
var state_17263__$1 = (function (){var statearr_17269 = state_17263;
(statearr_17269[(13)] = inst_17204__$1);

return statearr_17269;
})();
if(cljs.core.truth_(inst_17205)){
var statearr_17270_17306 = state_17263__$1;
(statearr_17270_17306[(1)] = (5));

} else {
var statearr_17271_17307 = state_17263__$1;
(statearr_17271_17307[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (15))){
var state_17263__$1 = state_17263;
var statearr_17275_17308 = state_17263__$1;
(statearr_17275_17308[(2)] = null);

(statearr_17275_17308[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (21))){
var state_17263__$1 = state_17263;
var statearr_17276_17309 = state_17263__$1;
(statearr_17276_17309[(2)] = null);

(statearr_17276_17309[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (13))){
var inst_17218 = (state_17263[(8)]);
var inst_17215 = (state_17263[(9)]);
var inst_17217 = (state_17263[(10)]);
var inst_17216 = (state_17263[(12)]);
var inst_17225 = (state_17263[(2)]);
var inst_17226 = (inst_17218 + (1));
var tmp17272 = inst_17215;
var tmp17273 = inst_17217;
var tmp17274 = inst_17216;
var inst_17215__$1 = tmp17272;
var inst_17216__$1 = tmp17274;
var inst_17217__$1 = tmp17273;
var inst_17218__$1 = inst_17226;
var state_17263__$1 = (function (){var statearr_17277 = state_17263;
(statearr_17277[(8)] = inst_17218__$1);

(statearr_17277[(14)] = inst_17225);

(statearr_17277[(9)] = inst_17215__$1);

(statearr_17277[(10)] = inst_17217__$1);

(statearr_17277[(12)] = inst_17216__$1);

return statearr_17277;
})();
var statearr_17278_17310 = state_17263__$1;
(statearr_17278_17310[(2)] = null);

(statearr_17278_17310[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (22))){
var state_17263__$1 = state_17263;
var statearr_17279_17311 = state_17263__$1;
(statearr_17279_17311[(2)] = null);

(statearr_17279_17311[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (6))){
var inst_17204 = (state_17263[(13)]);
var inst_17213 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17204) : f.call(null,inst_17204));
var inst_17214 = cljs.core.seq(inst_17213);
var inst_17215 = inst_17214;
var inst_17216 = null;
var inst_17217 = (0);
var inst_17218 = (0);
var state_17263__$1 = (function (){var statearr_17280 = state_17263;
(statearr_17280[(8)] = inst_17218);

(statearr_17280[(9)] = inst_17215);

(statearr_17280[(10)] = inst_17217);

(statearr_17280[(12)] = inst_17216);

return statearr_17280;
})();
var statearr_17281_17312 = state_17263__$1;
(statearr_17281_17312[(2)] = null);

(statearr_17281_17312[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (17))){
var inst_17229 = (state_17263[(7)]);
var inst_17233 = cljs.core.chunk_first(inst_17229);
var inst_17234 = cljs.core.chunk_rest(inst_17229);
var inst_17235 = cljs.core.count(inst_17233);
var inst_17215 = inst_17234;
var inst_17216 = inst_17233;
var inst_17217 = inst_17235;
var inst_17218 = (0);
var state_17263__$1 = (function (){var statearr_17282 = state_17263;
(statearr_17282[(8)] = inst_17218);

(statearr_17282[(9)] = inst_17215);

(statearr_17282[(10)] = inst_17217);

(statearr_17282[(12)] = inst_17216);

return statearr_17282;
})();
var statearr_17283_17313 = state_17263__$1;
(statearr_17283_17313[(2)] = null);

(statearr_17283_17313[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (3))){
var inst_17261 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17263__$1,inst_17261);
} else {
if((state_val_17264 === (12))){
var inst_17249 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17284_17314 = state_17263__$1;
(statearr_17284_17314[(2)] = inst_17249);

(statearr_17284_17314[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (2))){
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17263__$1,(4),in$);
} else {
if((state_val_17264 === (23))){
var inst_17257 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17285_17315 = state_17263__$1;
(statearr_17285_17315[(2)] = inst_17257);

(statearr_17285_17315[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (19))){
var inst_17244 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17286_17316 = state_17263__$1;
(statearr_17286_17316[(2)] = inst_17244);

(statearr_17286_17316[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (11))){
var inst_17229 = (state_17263[(7)]);
var inst_17215 = (state_17263[(9)]);
var inst_17229__$1 = cljs.core.seq(inst_17215);
var state_17263__$1 = (function (){var statearr_17287 = state_17263;
(statearr_17287[(7)] = inst_17229__$1);

return statearr_17287;
})();
if(inst_17229__$1){
var statearr_17288_17317 = state_17263__$1;
(statearr_17288_17317[(1)] = (14));

} else {
var statearr_17289_17318 = state_17263__$1;
(statearr_17289_17318[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (9))){
var inst_17251 = (state_17263[(2)]);
var inst_17252 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17263__$1 = (function (){var statearr_17290 = state_17263;
(statearr_17290[(15)] = inst_17251);

return statearr_17290;
})();
if(cljs.core.truth_(inst_17252)){
var statearr_17291_17319 = state_17263__$1;
(statearr_17291_17319[(1)] = (21));

} else {
var statearr_17292_17320 = state_17263__$1;
(statearr_17292_17320[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (5))){
var inst_17207 = cljs.core.async.close_BANG_(out);
var state_17263__$1 = state_17263;
var statearr_17293_17321 = state_17263__$1;
(statearr_17293_17321[(2)] = inst_17207);

(statearr_17293_17321[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (14))){
var inst_17229 = (state_17263[(7)]);
var inst_17231 = cljs.core.chunked_seq_QMARK_(inst_17229);
var state_17263__$1 = state_17263;
if(inst_17231){
var statearr_17294_17322 = state_17263__$1;
(statearr_17294_17322[(1)] = (17));

} else {
var statearr_17295_17323 = state_17263__$1;
(statearr_17295_17323[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (16))){
var inst_17247 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17296_17324 = state_17263__$1;
(statearr_17296_17324[(2)] = inst_17247);

(statearr_17296_17324[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17264 === (10))){
var inst_17218 = (state_17263[(8)]);
var inst_17216 = (state_17263[(12)]);
var inst_17223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17216,inst_17218);
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17263__$1,(13),out,inst_17223);
} else {
if((state_val_17264 === (18))){
var inst_17229 = (state_17263[(7)]);
var inst_17238 = cljs.core.first(inst_17229);
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17263__$1,(20),out,inst_17238);
} else {
if((state_val_17264 === (8))){
var inst_17218 = (state_17263[(8)]);
var inst_17217 = (state_17263[(10)]);
var inst_17220 = (inst_17218 < inst_17217);
var inst_17221 = inst_17220;
var state_17263__$1 = state_17263;
if(cljs.core.truth_(inst_17221)){
var statearr_17297_17325 = state_17263__$1;
(statearr_17297_17325[(1)] = (10));

} else {
var statearr_17298_17326 = state_17263__$1;
(statearr_17298_17326[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto__))
;
return ((function (switch__13594__auto__,c__13775__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13595__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13595__auto____0 = (function (){
var statearr_17299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17299[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13595__auto__);

(statearr_17299[(1)] = (1));

return statearr_17299;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13595__auto____1 = (function (state_17263){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_17263);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e17300){if((e17300 instanceof Object)){
var ex__13598__auto__ = e17300;
var statearr_17301_17327 = state_17263;
(statearr_17301_17327[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17263);

return cljs.core.cst$kw$recur;
} else {
throw e17300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__17328 = state_17263;
state_17263 = G__17328;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13595__auto__ = function(state_17263){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13595__auto____1.call(this,state_17263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13595__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13595__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto__))
})();
var state__13777__auto__ = (function (){var statearr_17302 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_17302[(6)] = c__13775__auto__);

return statearr_17302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto__))
);

return c__13775__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17330 = arguments.length;
switch (G__17330) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17333 = arguments.length;
switch (G__17333) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17336 = arguments.length;
switch (G__17336) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13775__auto___17383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___17383,out){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___17383,out){
return (function (state_17360){
var state_val_17361 = (state_17360[(1)]);
if((state_val_17361 === (7))){
var inst_17355 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
var statearr_17362_17384 = state_17360__$1;
(statearr_17362_17384[(2)] = inst_17355);

(statearr_17362_17384[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17361 === (1))){
var inst_17337 = null;
var state_17360__$1 = (function (){var statearr_17363 = state_17360;
(statearr_17363[(7)] = inst_17337);

return statearr_17363;
})();
var statearr_17364_17385 = state_17360__$1;
(statearr_17364_17385[(2)] = null);

(statearr_17364_17385[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17361 === (4))){
var inst_17340 = (state_17360[(8)]);
var inst_17340__$1 = (state_17360[(2)]);
var inst_17341 = (inst_17340__$1 == null);
var inst_17342 = cljs.core.not(inst_17341);
var state_17360__$1 = (function (){var statearr_17365 = state_17360;
(statearr_17365[(8)] = inst_17340__$1);

return statearr_17365;
})();
if(inst_17342){
var statearr_17366_17386 = state_17360__$1;
(statearr_17366_17386[(1)] = (5));

} else {
var statearr_17367_17387 = state_17360__$1;
(statearr_17367_17387[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17361 === (6))){
var state_17360__$1 = state_17360;
var statearr_17368_17388 = state_17360__$1;
(statearr_17368_17388[(2)] = null);

(statearr_17368_17388[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17361 === (3))){
var inst_17357 = (state_17360[(2)]);
var inst_17358 = cljs.core.async.close_BANG_(out);
var state_17360__$1 = (function (){var statearr_17369 = state_17360;
(statearr_17369[(9)] = inst_17357);

return statearr_17369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17360__$1,inst_17358);
} else {
if((state_val_17361 === (2))){
var state_17360__$1 = state_17360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17360__$1,(4),ch);
} else {
if((state_val_17361 === (11))){
var inst_17340 = (state_17360[(8)]);
var inst_17349 = (state_17360[(2)]);
var inst_17337 = inst_17340;
var state_17360__$1 = (function (){var statearr_17370 = state_17360;
(statearr_17370[(10)] = inst_17349);

(statearr_17370[(7)] = inst_17337);

return statearr_17370;
})();
var statearr_17371_17389 = state_17360__$1;
(statearr_17371_17389[(2)] = null);

(statearr_17371_17389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17361 === (9))){
var inst_17340 = (state_17360[(8)]);
var state_17360__$1 = state_17360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17360__$1,(11),out,inst_17340);
} else {
if((state_val_17361 === (5))){
var inst_17337 = (state_17360[(7)]);
var inst_17340 = (state_17360[(8)]);
var inst_17344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17340,inst_17337);
var state_17360__$1 = state_17360;
if(inst_17344){
var statearr_17373_17390 = state_17360__$1;
(statearr_17373_17390[(1)] = (8));

} else {
var statearr_17374_17391 = state_17360__$1;
(statearr_17374_17391[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17361 === (10))){
var inst_17352 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
var statearr_17375_17392 = state_17360__$1;
(statearr_17375_17392[(2)] = inst_17352);

(statearr_17375_17392[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17361 === (8))){
var inst_17337 = (state_17360[(7)]);
var tmp17372 = inst_17337;
var inst_17337__$1 = tmp17372;
var state_17360__$1 = (function (){var statearr_17376 = state_17360;
(statearr_17376[(7)] = inst_17337__$1);

return statearr_17376;
})();
var statearr_17377_17393 = state_17360__$1;
(statearr_17377_17393[(2)] = null);

(statearr_17377_17393[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___17383,out))
;
return ((function (switch__13594__auto__,c__13775__auto___17383,out){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_17378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17378[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_17378[(1)] = (1));

return statearr_17378;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_17360){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_17360);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e17379){if((e17379 instanceof Object)){
var ex__13598__auto__ = e17379;
var statearr_17380_17394 = state_17360;
(statearr_17380_17394[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17360);

return cljs.core.cst$kw$recur;
} else {
throw e17379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__17395 = state_17360;
state_17360 = G__17395;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_17360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_17360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___17383,out))
})();
var state__13777__auto__ = (function (){var statearr_17381 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_17381[(6)] = c__13775__auto___17383);

return statearr_17381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___17383,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17397 = arguments.length;
switch (G__17397) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13775__auto___17463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___17463,out){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___17463,out){
return (function (state_17435){
var state_val_17436 = (state_17435[(1)]);
if((state_val_17436 === (7))){
var inst_17431 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17437_17464 = state_17435__$1;
(statearr_17437_17464[(2)] = inst_17431);

(statearr_17437_17464[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (1))){
var inst_17398 = (new Array(n));
var inst_17399 = inst_17398;
var inst_17400 = (0);
var state_17435__$1 = (function (){var statearr_17438 = state_17435;
(statearr_17438[(7)] = inst_17400);

(statearr_17438[(8)] = inst_17399);

return statearr_17438;
})();
var statearr_17439_17465 = state_17435__$1;
(statearr_17439_17465[(2)] = null);

(statearr_17439_17465[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (4))){
var inst_17403 = (state_17435[(9)]);
var inst_17403__$1 = (state_17435[(2)]);
var inst_17404 = (inst_17403__$1 == null);
var inst_17405 = cljs.core.not(inst_17404);
var state_17435__$1 = (function (){var statearr_17440 = state_17435;
(statearr_17440[(9)] = inst_17403__$1);

return statearr_17440;
})();
if(inst_17405){
var statearr_17441_17466 = state_17435__$1;
(statearr_17441_17466[(1)] = (5));

} else {
var statearr_17442_17467 = state_17435__$1;
(statearr_17442_17467[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (15))){
var inst_17425 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17443_17468 = state_17435__$1;
(statearr_17443_17468[(2)] = inst_17425);

(statearr_17443_17468[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (13))){
var state_17435__$1 = state_17435;
var statearr_17444_17469 = state_17435__$1;
(statearr_17444_17469[(2)] = null);

(statearr_17444_17469[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (6))){
var inst_17400 = (state_17435[(7)]);
var inst_17421 = (inst_17400 > (0));
var state_17435__$1 = state_17435;
if(cljs.core.truth_(inst_17421)){
var statearr_17445_17470 = state_17435__$1;
(statearr_17445_17470[(1)] = (12));

} else {
var statearr_17446_17471 = state_17435__$1;
(statearr_17446_17471[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (3))){
var inst_17433 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17435__$1,inst_17433);
} else {
if((state_val_17436 === (12))){
var inst_17399 = (state_17435[(8)]);
var inst_17423 = cljs.core.vec(inst_17399);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17435__$1,(15),out,inst_17423);
} else {
if((state_val_17436 === (2))){
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17435__$1,(4),ch);
} else {
if((state_val_17436 === (11))){
var inst_17415 = (state_17435[(2)]);
var inst_17416 = (new Array(n));
var inst_17399 = inst_17416;
var inst_17400 = (0);
var state_17435__$1 = (function (){var statearr_17447 = state_17435;
(statearr_17447[(10)] = inst_17415);

(statearr_17447[(7)] = inst_17400);

(statearr_17447[(8)] = inst_17399);

return statearr_17447;
})();
var statearr_17448_17472 = state_17435__$1;
(statearr_17448_17472[(2)] = null);

(statearr_17448_17472[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (9))){
var inst_17399 = (state_17435[(8)]);
var inst_17413 = cljs.core.vec(inst_17399);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17435__$1,(11),out,inst_17413);
} else {
if((state_val_17436 === (5))){
var inst_17408 = (state_17435[(11)]);
var inst_17400 = (state_17435[(7)]);
var inst_17403 = (state_17435[(9)]);
var inst_17399 = (state_17435[(8)]);
var inst_17407 = (inst_17399[inst_17400] = inst_17403);
var inst_17408__$1 = (inst_17400 + (1));
var inst_17409 = (inst_17408__$1 < n);
var state_17435__$1 = (function (){var statearr_17449 = state_17435;
(statearr_17449[(12)] = inst_17407);

(statearr_17449[(11)] = inst_17408__$1);

return statearr_17449;
})();
if(cljs.core.truth_(inst_17409)){
var statearr_17450_17473 = state_17435__$1;
(statearr_17450_17473[(1)] = (8));

} else {
var statearr_17451_17474 = state_17435__$1;
(statearr_17451_17474[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (14))){
var inst_17428 = (state_17435[(2)]);
var inst_17429 = cljs.core.async.close_BANG_(out);
var state_17435__$1 = (function (){var statearr_17453 = state_17435;
(statearr_17453[(13)] = inst_17428);

return statearr_17453;
})();
var statearr_17454_17475 = state_17435__$1;
(statearr_17454_17475[(2)] = inst_17429);

(statearr_17454_17475[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (10))){
var inst_17419 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17455_17476 = state_17435__$1;
(statearr_17455_17476[(2)] = inst_17419);

(statearr_17455_17476[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17436 === (8))){
var inst_17408 = (state_17435[(11)]);
var inst_17399 = (state_17435[(8)]);
var tmp17452 = inst_17399;
var inst_17399__$1 = tmp17452;
var inst_17400 = inst_17408;
var state_17435__$1 = (function (){var statearr_17456 = state_17435;
(statearr_17456[(7)] = inst_17400);

(statearr_17456[(8)] = inst_17399__$1);

return statearr_17456;
})();
var statearr_17457_17477 = state_17435__$1;
(statearr_17457_17477[(2)] = null);

(statearr_17457_17477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___17463,out))
;
return ((function (switch__13594__auto__,c__13775__auto___17463,out){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_17458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17458[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_17458[(1)] = (1));

return statearr_17458;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_17435){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_17435);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e17459){if((e17459 instanceof Object)){
var ex__13598__auto__ = e17459;
var statearr_17460_17478 = state_17435;
(statearr_17460_17478[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17435);

return cljs.core.cst$kw$recur;
} else {
throw e17459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__17479 = state_17435;
state_17435 = G__17479;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_17435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_17435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___17463,out))
})();
var state__13777__auto__ = (function (){var statearr_17461 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_17461[(6)] = c__13775__auto___17463);

return statearr_17461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___17463,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17481 = arguments.length;
switch (G__17481) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13775__auto___17551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13775__auto___17551,out){
return (function (){
var f__13776__auto__ = (function (){var switch__13594__auto__ = ((function (c__13775__auto___17551,out){
return (function (state_17523){
var state_val_17524 = (state_17523[(1)]);
if((state_val_17524 === (7))){
var inst_17519 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
var statearr_17525_17552 = state_17523__$1;
(statearr_17525_17552[(2)] = inst_17519);

(statearr_17525_17552[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (1))){
var inst_17482 = [];
var inst_17483 = inst_17482;
var inst_17484 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17523__$1 = (function (){var statearr_17526 = state_17523;
(statearr_17526[(7)] = inst_17484);

(statearr_17526[(8)] = inst_17483);

return statearr_17526;
})();
var statearr_17527_17553 = state_17523__$1;
(statearr_17527_17553[(2)] = null);

(statearr_17527_17553[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (4))){
var inst_17487 = (state_17523[(9)]);
var inst_17487__$1 = (state_17523[(2)]);
var inst_17488 = (inst_17487__$1 == null);
var inst_17489 = cljs.core.not(inst_17488);
var state_17523__$1 = (function (){var statearr_17528 = state_17523;
(statearr_17528[(9)] = inst_17487__$1);

return statearr_17528;
})();
if(inst_17489){
var statearr_17529_17554 = state_17523__$1;
(statearr_17529_17554[(1)] = (5));

} else {
var statearr_17530_17555 = state_17523__$1;
(statearr_17530_17555[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (15))){
var inst_17513 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
var statearr_17531_17556 = state_17523__$1;
(statearr_17531_17556[(2)] = inst_17513);

(statearr_17531_17556[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (13))){
var state_17523__$1 = state_17523;
var statearr_17532_17557 = state_17523__$1;
(statearr_17532_17557[(2)] = null);

(statearr_17532_17557[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (6))){
var inst_17483 = (state_17523[(8)]);
var inst_17508 = inst_17483.length;
var inst_17509 = (inst_17508 > (0));
var state_17523__$1 = state_17523;
if(cljs.core.truth_(inst_17509)){
var statearr_17533_17558 = state_17523__$1;
(statearr_17533_17558[(1)] = (12));

} else {
var statearr_17534_17559 = state_17523__$1;
(statearr_17534_17559[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (3))){
var inst_17521 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17523__$1,inst_17521);
} else {
if((state_val_17524 === (12))){
var inst_17483 = (state_17523[(8)]);
var inst_17511 = cljs.core.vec(inst_17483);
var state_17523__$1 = state_17523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17523__$1,(15),out,inst_17511);
} else {
if((state_val_17524 === (2))){
var state_17523__$1 = state_17523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17523__$1,(4),ch);
} else {
if((state_val_17524 === (11))){
var inst_17487 = (state_17523[(9)]);
var inst_17491 = (state_17523[(10)]);
var inst_17501 = (state_17523[(2)]);
var inst_17502 = [];
var inst_17503 = inst_17502.push(inst_17487);
var inst_17483 = inst_17502;
var inst_17484 = inst_17491;
var state_17523__$1 = (function (){var statearr_17535 = state_17523;
(statearr_17535[(7)] = inst_17484);

(statearr_17535[(11)] = inst_17501);

(statearr_17535[(8)] = inst_17483);

(statearr_17535[(12)] = inst_17503);

return statearr_17535;
})();
var statearr_17536_17560 = state_17523__$1;
(statearr_17536_17560[(2)] = null);

(statearr_17536_17560[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (9))){
var inst_17483 = (state_17523[(8)]);
var inst_17499 = cljs.core.vec(inst_17483);
var state_17523__$1 = state_17523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17523__$1,(11),out,inst_17499);
} else {
if((state_val_17524 === (5))){
var inst_17487 = (state_17523[(9)]);
var inst_17484 = (state_17523[(7)]);
var inst_17491 = (state_17523[(10)]);
var inst_17491__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17487) : f.call(null,inst_17487));
var inst_17492 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17491__$1,inst_17484);
var inst_17493 = cljs.core.keyword_identical_QMARK_(inst_17484,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17494 = ((inst_17492) || (inst_17493));
var state_17523__$1 = (function (){var statearr_17537 = state_17523;
(statearr_17537[(10)] = inst_17491__$1);

return statearr_17537;
})();
if(cljs.core.truth_(inst_17494)){
var statearr_17538_17561 = state_17523__$1;
(statearr_17538_17561[(1)] = (8));

} else {
var statearr_17539_17562 = state_17523__$1;
(statearr_17539_17562[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (14))){
var inst_17516 = (state_17523[(2)]);
var inst_17517 = cljs.core.async.close_BANG_(out);
var state_17523__$1 = (function (){var statearr_17541 = state_17523;
(statearr_17541[(13)] = inst_17516);

return statearr_17541;
})();
var statearr_17542_17563 = state_17523__$1;
(statearr_17542_17563[(2)] = inst_17517);

(statearr_17542_17563[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (10))){
var inst_17506 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
var statearr_17543_17564 = state_17523__$1;
(statearr_17543_17564[(2)] = inst_17506);

(statearr_17543_17564[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17524 === (8))){
var inst_17487 = (state_17523[(9)]);
var inst_17491 = (state_17523[(10)]);
var inst_17483 = (state_17523[(8)]);
var inst_17496 = inst_17483.push(inst_17487);
var tmp17540 = inst_17483;
var inst_17483__$1 = tmp17540;
var inst_17484 = inst_17491;
var state_17523__$1 = (function (){var statearr_17544 = state_17523;
(statearr_17544[(7)] = inst_17484);

(statearr_17544[(8)] = inst_17483__$1);

(statearr_17544[(14)] = inst_17496);

return statearr_17544;
})();
var statearr_17545_17565 = state_17523__$1;
(statearr_17545_17565[(2)] = null);

(statearr_17545_17565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13775__auto___17551,out))
;
return ((function (switch__13594__auto__,c__13775__auto___17551,out){
return (function() {
var cljs$core$async$state_machine__13595__auto__ = null;
var cljs$core$async$state_machine__13595__auto____0 = (function (){
var statearr_17546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17546[(0)] = cljs$core$async$state_machine__13595__auto__);

(statearr_17546[(1)] = (1));

return statearr_17546;
});
var cljs$core$async$state_machine__13595__auto____1 = (function (state_17523){
while(true){
var ret_value__13596__auto__ = (function (){try{while(true){
var result__13597__auto__ = switch__13594__auto__(state_17523);
if(cljs.core.keyword_identical_QMARK_(result__13597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13597__auto__;
}
break;
}
}catch (e17547){if((e17547 instanceof Object)){
var ex__13598__auto__ = e17547;
var statearr_17548_17566 = state_17523;
(statearr_17548_17566[(5)] = ex__13598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17523);

return cljs.core.cst$kw$recur;
} else {
throw e17547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13596__auto__,cljs.core.cst$kw$recur)){
var G__17567 = state_17523;
state_17523 = G__17567;
continue;
} else {
return ret_value__13596__auto__;
}
break;
}
});
cljs$core$async$state_machine__13595__auto__ = function(state_17523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13595__auto____1.call(this,state_17523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13595__auto____0;
cljs$core$async$state_machine__13595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13595__auto____1;
return cljs$core$async$state_machine__13595__auto__;
})()
;})(switch__13594__auto__,c__13775__auto___17551,out))
})();
var state__13777__auto__ = (function (){var statearr_17549 = (f__13776__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13776__auto__.cljs$core$IFn$_invoke$arity$0() : f__13776__auto__.call(null));
(statearr_17549[(6)] = c__13775__auto___17551);

return statearr_17549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13777__auto__);
});})(c__13775__auto___17551,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

