// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
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
var G__9483 = arguments.length;
switch (G__9483) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9484 = (function (f,blockable,meta9485){
this.f = f;
this.blockable = blockable;
this.meta9485 = meta9485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9486,meta9485__$1){
var self__ = this;
var _9486__$1 = this;
return (new cljs.core.async.t_cljs$core$async9484(self__.f,self__.blockable,meta9485__$1));
});

cljs.core.async.t_cljs$core$async9484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9486){
var self__ = this;
var _9486__$1 = this;
return self__.meta9485;
});

cljs.core.async.t_cljs$core$async9484.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta9485], null);
});

cljs.core.async.t_cljs$core$async9484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9484";

cljs.core.async.t_cljs$core$async9484.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async9484");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9484.
 */
cljs.core.async.__GT_t_cljs$core$async9484 = (function cljs$core$async$__GT_t_cljs$core$async9484(f__$1,blockable__$1,meta9485){
return (new cljs.core.async.t_cljs$core$async9484(f__$1,blockable__$1,meta9485));
});

}

return (new cljs.core.async.t_cljs$core$async9484(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__9490 = arguments.length;
switch (G__9490) {
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
var G__9493 = arguments.length;
switch (G__9493) {
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
var G__9496 = arguments.length;
switch (G__9496) {
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
var val_9498 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_9498) : fn1.call(null,val_9498));
} else {
cljs.core.async.impl.dispatch.run(((function (val_9498,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_9498) : fn1.call(null,val_9498));
});})(val_9498,ret))
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
var G__9500 = arguments.length;
switch (G__9500) {
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
var n__4408__auto___9502 = n;
var x_9503 = (0);
while(true){
if((x_9503 < n__4408__auto___9502)){
(a[x_9503] = (0));

var G__9504 = (x_9503 + (1));
x_9503 = G__9504;
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

var G__9505 = (i + (1));
i = G__9505;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9506 = (function (flag,meta9507){
this.flag = flag;
this.meta9507 = meta9507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9508,meta9507__$1){
var self__ = this;
var _9508__$1 = this;
return (new cljs.core.async.t_cljs$core$async9506(self__.flag,meta9507__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9508){
var self__ = this;
var _9508__$1 = this;
return self__.meta9507;
});})(flag))
;

cljs.core.async.t_cljs$core$async9506.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9506.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta9507], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9506";

cljs.core.async.t_cljs$core$async9506.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async9506");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9506.
 */
cljs.core.async.__GT_t_cljs$core$async9506 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9506(flag__$1,meta9507){
return (new cljs.core.async.t_cljs$core$async9506(flag__$1,meta9507));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9506(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9509 = (function (flag,cb,meta9510){
this.flag = flag;
this.cb = cb;
this.meta9510 = meta9510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9511,meta9510__$1){
var self__ = this;
var _9511__$1 = this;
return (new cljs.core.async.t_cljs$core$async9509(self__.flag,self__.cb,meta9510__$1));
});

cljs.core.async.t_cljs$core$async9509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9511){
var self__ = this;
var _9511__$1 = this;
return self__.meta9510;
});

cljs.core.async.t_cljs$core$async9509.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async9509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta9510], null);
});

cljs.core.async.t_cljs$core$async9509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9509";

cljs.core.async.t_cljs$core$async9509.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async9509");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9509.
 */
cljs.core.async.__GT_t_cljs$core$async9509 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9509(flag__$1,cb__$1,meta9510){
return (new cljs.core.async.t_cljs$core$async9509(flag__$1,cb__$1,meta9510));
});

}

return (new cljs.core.async.t_cljs$core$async9509(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9512_SHARP_){
var G__9514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9512_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__9514) : fret.call(null,G__9514));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9513_SHARP_){
var G__9515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9513_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__9515) : fret.call(null,G__9515));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9516 = (i + (1));
i = G__9516;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
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
var args__4534__auto__ = [];
var len__4531__auto___9522 = arguments.length;
var i__4532__auto___9523 = (0);
while(true){
if((i__4532__auto___9523 < len__4531__auto___9522)){
args__4534__auto__.push((arguments[i__4532__auto___9523]));

var G__9524 = (i__4532__auto___9523 + (1));
i__4532__auto___9523 = G__9524;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9519){
var map__9520 = p__9519;
var map__9520__$1 = ((((!((map__9520 == null)))?(((((map__9520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9520):map__9520);
var opts = map__9520__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9517){
var G__9518 = cljs.core.first(seq9517);
var seq9517__$1 = cljs.core.next(seq9517);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9518,seq9517__$1);
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
var G__9526 = arguments.length;
switch (G__9526) {
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
var c__9423__auto___9572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___9572){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___9572){
return (function (state_9550){
var state_val_9551 = (state_9550[(1)]);
if((state_val_9551 === (7))){
var inst_9546 = (state_9550[(2)]);
var state_9550__$1 = state_9550;
var statearr_9552_9573 = state_9550__$1;
(statearr_9552_9573[(2)] = inst_9546);

(statearr_9552_9573[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (1))){
var state_9550__$1 = state_9550;
var statearr_9553_9574 = state_9550__$1;
(statearr_9553_9574[(2)] = null);

(statearr_9553_9574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (4))){
var inst_9529 = (state_9550[(7)]);
var inst_9529__$1 = (state_9550[(2)]);
var inst_9530 = (inst_9529__$1 == null);
var state_9550__$1 = (function (){var statearr_9554 = state_9550;
(statearr_9554[(7)] = inst_9529__$1);

return statearr_9554;
})();
if(cljs.core.truth_(inst_9530)){
var statearr_9555_9575 = state_9550__$1;
(statearr_9555_9575[(1)] = (5));

} else {
var statearr_9556_9576 = state_9550__$1;
(statearr_9556_9576[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (13))){
var state_9550__$1 = state_9550;
var statearr_9557_9577 = state_9550__$1;
(statearr_9557_9577[(2)] = null);

(statearr_9557_9577[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (6))){
var inst_9529 = (state_9550[(7)]);
var state_9550__$1 = state_9550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9550__$1,(11),to,inst_9529);
} else {
if((state_val_9551 === (3))){
var inst_9548 = (state_9550[(2)]);
var state_9550__$1 = state_9550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9550__$1,inst_9548);
} else {
if((state_val_9551 === (12))){
var state_9550__$1 = state_9550;
var statearr_9558_9578 = state_9550__$1;
(statearr_9558_9578[(2)] = null);

(statearr_9558_9578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (2))){
var state_9550__$1 = state_9550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9550__$1,(4),from);
} else {
if((state_val_9551 === (11))){
var inst_9539 = (state_9550[(2)]);
var state_9550__$1 = state_9550;
if(cljs.core.truth_(inst_9539)){
var statearr_9559_9579 = state_9550__$1;
(statearr_9559_9579[(1)] = (12));

} else {
var statearr_9560_9580 = state_9550__$1;
(statearr_9560_9580[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (9))){
var state_9550__$1 = state_9550;
var statearr_9561_9581 = state_9550__$1;
(statearr_9561_9581[(2)] = null);

(statearr_9561_9581[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (5))){
var state_9550__$1 = state_9550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9562_9582 = state_9550__$1;
(statearr_9562_9582[(1)] = (8));

} else {
var statearr_9563_9583 = state_9550__$1;
(statearr_9563_9583[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (14))){
var inst_9544 = (state_9550[(2)]);
var state_9550__$1 = state_9550;
var statearr_9564_9584 = state_9550__$1;
(statearr_9564_9584[(2)] = inst_9544);

(statearr_9564_9584[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (10))){
var inst_9536 = (state_9550[(2)]);
var state_9550__$1 = state_9550;
var statearr_9565_9585 = state_9550__$1;
(statearr_9565_9585[(2)] = inst_9536);

(statearr_9565_9585[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9551 === (8))){
var inst_9533 = cljs.core.async.close_BANG_(to);
var state_9550__$1 = state_9550;
var statearr_9566_9586 = state_9550__$1;
(statearr_9566_9586[(2)] = inst_9533);

(statearr_9566_9586[(1)] = (10));


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
});})(c__9423__auto___9572))
;
return ((function (switch__9320__auto__,c__9423__auto___9572){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_9567 = [null,null,null,null,null,null,null,null];
(statearr_9567[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_9567[(1)] = (1));

return statearr_9567;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_9550){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9550);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e9568){if((e9568 instanceof Object)){
var ex__9324__auto__ = e9568;
var statearr_9569_9587 = state_9550;
(statearr_9569_9587[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9550);

return cljs.core.cst$kw$recur;
} else {
throw e9568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__9588 = state_9550;
state_9550 = G__9588;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_9550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_9550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___9572))
})();
var state__9425__auto__ = (function (){var statearr_9570 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_9570[(6)] = c__9423__auto___9572);

return statearr_9570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___9572))
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
return (function (p__9589){
var vec__9590 = p__9589;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9590,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9590,(1),null);
var job = vec__9590;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__9423__auto___9761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___9761,res,vec__9590,v,p,job,jobs,results){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___9761,res,vec__9590,v,p,job,jobs,results){
return (function (state_9597){
var state_val_9598 = (state_9597[(1)]);
if((state_val_9598 === (1))){
var state_9597__$1 = state_9597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9597__$1,(2),res,v);
} else {
if((state_val_9598 === (2))){
var inst_9594 = (state_9597[(2)]);
var inst_9595 = cljs.core.async.close_BANG_(res);
var state_9597__$1 = (function (){var statearr_9599 = state_9597;
(statearr_9599[(7)] = inst_9594);

return statearr_9599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9597__$1,inst_9595);
} else {
return null;
}
}
});})(c__9423__auto___9761,res,vec__9590,v,p,job,jobs,results))
;
return ((function (switch__9320__auto__,c__9423__auto___9761,res,vec__9590,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0 = (function (){
var statearr_9600 = [null,null,null,null,null,null,null,null];
(statearr_9600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__);

(statearr_9600[(1)] = (1));

return statearr_9600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1 = (function (state_9597){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9597);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e9601){if((e9601 instanceof Object)){
var ex__9324__auto__ = e9601;
var statearr_9602_9762 = state_9597;
(statearr_9602_9762[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9597);

return cljs.core.cst$kw$recur;
} else {
throw e9601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__9763 = state_9597;
state_9597 = G__9763;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = function(state_9597){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1.call(this,state_9597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___9761,res,vec__9590,v,p,job,jobs,results))
})();
var state__9425__auto__ = (function (){var statearr_9603 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_9603[(6)] = c__9423__auto___9761);

return statearr_9603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___9761,res,vec__9590,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9604){
var vec__9605 = p__9604;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9605,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9605,(1),null);
var job = vec__9605;
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
var n__4408__auto___9764 = n;
var __9765 = (0);
while(true){
if((__9765 < n__4408__auto___9764)){
var G__9608_9766 = type;
var G__9608_9767__$1 = (((G__9608_9766 instanceof cljs.core.Keyword))?G__9608_9766.fqn:null);
switch (G__9608_9767__$1) {
case "compute":
var c__9423__auto___9769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9765,c__9423__auto___9769,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (__9765,c__9423__auto___9769,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async){
return (function (state_9621){
var state_val_9622 = (state_9621[(1)]);
if((state_val_9622 === (1))){
var state_9621__$1 = state_9621;
var statearr_9623_9770 = state_9621__$1;
(statearr_9623_9770[(2)] = null);

(statearr_9623_9770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9622 === (2))){
var state_9621__$1 = state_9621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9621__$1,(4),jobs);
} else {
if((state_val_9622 === (3))){
var inst_9619 = (state_9621[(2)]);
var state_9621__$1 = state_9621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9621__$1,inst_9619);
} else {
if((state_val_9622 === (4))){
var inst_9611 = (state_9621[(2)]);
var inst_9612 = process(inst_9611);
var state_9621__$1 = state_9621;
if(cljs.core.truth_(inst_9612)){
var statearr_9624_9771 = state_9621__$1;
(statearr_9624_9771[(1)] = (5));

} else {
var statearr_9625_9772 = state_9621__$1;
(statearr_9625_9772[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9622 === (5))){
var state_9621__$1 = state_9621;
var statearr_9626_9773 = state_9621__$1;
(statearr_9626_9773[(2)] = null);

(statearr_9626_9773[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9622 === (6))){
var state_9621__$1 = state_9621;
var statearr_9627_9774 = state_9621__$1;
(statearr_9627_9774[(2)] = null);

(statearr_9627_9774[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9622 === (7))){
var inst_9617 = (state_9621[(2)]);
var state_9621__$1 = state_9621;
var statearr_9628_9775 = state_9621__$1;
(statearr_9628_9775[(2)] = inst_9617);

(statearr_9628_9775[(1)] = (3));


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
});})(__9765,c__9423__auto___9769,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async))
;
return ((function (__9765,switch__9320__auto__,c__9423__auto___9769,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0 = (function (){
var statearr_9629 = [null,null,null,null,null,null,null];
(statearr_9629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__);

(statearr_9629[(1)] = (1));

return statearr_9629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1 = (function (state_9621){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9621);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e9630){if((e9630 instanceof Object)){
var ex__9324__auto__ = e9630;
var statearr_9631_9776 = state_9621;
(statearr_9631_9776[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9621);

return cljs.core.cst$kw$recur;
} else {
throw e9630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__9777 = state_9621;
state_9621 = G__9777;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = function(state_9621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1.call(this,state_9621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__;
})()
;})(__9765,switch__9320__auto__,c__9423__auto___9769,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async))
})();
var state__9425__auto__ = (function (){var statearr_9632 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_9632[(6)] = c__9423__auto___9769);

return statearr_9632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(__9765,c__9423__auto___9769,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async))
);


break;
case "async":
var c__9423__auto___9778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9765,c__9423__auto___9778,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (__9765,c__9423__auto___9778,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async){
return (function (state_9645){
var state_val_9646 = (state_9645[(1)]);
if((state_val_9646 === (1))){
var state_9645__$1 = state_9645;
var statearr_9647_9779 = state_9645__$1;
(statearr_9647_9779[(2)] = null);

(statearr_9647_9779[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9646 === (2))){
var state_9645__$1 = state_9645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9645__$1,(4),jobs);
} else {
if((state_val_9646 === (3))){
var inst_9643 = (state_9645[(2)]);
var state_9645__$1 = state_9645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9645__$1,inst_9643);
} else {
if((state_val_9646 === (4))){
var inst_9635 = (state_9645[(2)]);
var inst_9636 = async(inst_9635);
var state_9645__$1 = state_9645;
if(cljs.core.truth_(inst_9636)){
var statearr_9648_9780 = state_9645__$1;
(statearr_9648_9780[(1)] = (5));

} else {
var statearr_9649_9781 = state_9645__$1;
(statearr_9649_9781[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9646 === (5))){
var state_9645__$1 = state_9645;
var statearr_9650_9782 = state_9645__$1;
(statearr_9650_9782[(2)] = null);

(statearr_9650_9782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9646 === (6))){
var state_9645__$1 = state_9645;
var statearr_9651_9783 = state_9645__$1;
(statearr_9651_9783[(2)] = null);

(statearr_9651_9783[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9646 === (7))){
var inst_9641 = (state_9645[(2)]);
var state_9645__$1 = state_9645;
var statearr_9652_9784 = state_9645__$1;
(statearr_9652_9784[(2)] = inst_9641);

(statearr_9652_9784[(1)] = (3));


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
});})(__9765,c__9423__auto___9778,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async))
;
return ((function (__9765,switch__9320__auto__,c__9423__auto___9778,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0 = (function (){
var statearr_9653 = [null,null,null,null,null,null,null];
(statearr_9653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__);

(statearr_9653[(1)] = (1));

return statearr_9653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1 = (function (state_9645){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9645);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e9654){if((e9654 instanceof Object)){
var ex__9324__auto__ = e9654;
var statearr_9655_9785 = state_9645;
(statearr_9655_9785[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9645);

return cljs.core.cst$kw$recur;
} else {
throw e9654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__9786 = state_9645;
state_9645 = G__9786;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = function(state_9645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1.call(this,state_9645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__;
})()
;})(__9765,switch__9320__auto__,c__9423__auto___9778,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async))
})();
var state__9425__auto__ = (function (){var statearr_9656 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_9656[(6)] = c__9423__auto___9778);

return statearr_9656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(__9765,c__9423__auto___9778,G__9608_9766,G__9608_9767__$1,n__4408__auto___9764,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9608_9767__$1)].join('')));

}

var G__9787 = (__9765 + (1));
__9765 = G__9787;
continue;
} else {
}
break;
}

var c__9423__auto___9788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___9788,jobs,results,process,async){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___9788,jobs,results,process,async){
return (function (state_9678){
var state_val_9679 = (state_9678[(1)]);
if((state_val_9679 === (1))){
var state_9678__$1 = state_9678;
var statearr_9680_9789 = state_9678__$1;
(statearr_9680_9789[(2)] = null);

(statearr_9680_9789[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9679 === (2))){
var state_9678__$1 = state_9678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9678__$1,(4),from);
} else {
if((state_val_9679 === (3))){
var inst_9676 = (state_9678[(2)]);
var state_9678__$1 = state_9678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9678__$1,inst_9676);
} else {
if((state_val_9679 === (4))){
var inst_9659 = (state_9678[(7)]);
var inst_9659__$1 = (state_9678[(2)]);
var inst_9660 = (inst_9659__$1 == null);
var state_9678__$1 = (function (){var statearr_9681 = state_9678;
(statearr_9681[(7)] = inst_9659__$1);

return statearr_9681;
})();
if(cljs.core.truth_(inst_9660)){
var statearr_9682_9790 = state_9678__$1;
(statearr_9682_9790[(1)] = (5));

} else {
var statearr_9683_9791 = state_9678__$1;
(statearr_9683_9791[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9679 === (5))){
var inst_9662 = cljs.core.async.close_BANG_(jobs);
var state_9678__$1 = state_9678;
var statearr_9684_9792 = state_9678__$1;
(statearr_9684_9792[(2)] = inst_9662);

(statearr_9684_9792[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9679 === (6))){
var inst_9659 = (state_9678[(7)]);
var inst_9664 = (state_9678[(8)]);
var inst_9664__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_9665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9666 = [inst_9659,inst_9664__$1];
var inst_9667 = (new cljs.core.PersistentVector(null,2,(5),inst_9665,inst_9666,null));
var state_9678__$1 = (function (){var statearr_9685 = state_9678;
(statearr_9685[(8)] = inst_9664__$1);

return statearr_9685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9678__$1,(8),jobs,inst_9667);
} else {
if((state_val_9679 === (7))){
var inst_9674 = (state_9678[(2)]);
var state_9678__$1 = state_9678;
var statearr_9686_9793 = state_9678__$1;
(statearr_9686_9793[(2)] = inst_9674);

(statearr_9686_9793[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9679 === (8))){
var inst_9664 = (state_9678[(8)]);
var inst_9669 = (state_9678[(2)]);
var state_9678__$1 = (function (){var statearr_9687 = state_9678;
(statearr_9687[(9)] = inst_9669);

return statearr_9687;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9678__$1,(9),results,inst_9664);
} else {
if((state_val_9679 === (9))){
var inst_9671 = (state_9678[(2)]);
var state_9678__$1 = (function (){var statearr_9688 = state_9678;
(statearr_9688[(10)] = inst_9671);

return statearr_9688;
})();
var statearr_9689_9794 = state_9678__$1;
(statearr_9689_9794[(2)] = null);

(statearr_9689_9794[(1)] = (2));


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
});})(c__9423__auto___9788,jobs,results,process,async))
;
return ((function (switch__9320__auto__,c__9423__auto___9788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0 = (function (){
var statearr_9690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__);

(statearr_9690[(1)] = (1));

return statearr_9690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1 = (function (state_9678){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9678);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e9691){if((e9691 instanceof Object)){
var ex__9324__auto__ = e9691;
var statearr_9692_9795 = state_9678;
(statearr_9692_9795[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9678);

return cljs.core.cst$kw$recur;
} else {
throw e9691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__9796 = state_9678;
state_9678 = G__9796;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = function(state_9678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1.call(this,state_9678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___9788,jobs,results,process,async))
})();
var state__9425__auto__ = (function (){var statearr_9693 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_9693[(6)] = c__9423__auto___9788);

return statearr_9693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___9788,jobs,results,process,async))
);


var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,jobs,results,process,async){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,jobs,results,process,async){
return (function (state_9731){
var state_val_9732 = (state_9731[(1)]);
if((state_val_9732 === (7))){
var inst_9727 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
var statearr_9733_9797 = state_9731__$1;
(statearr_9733_9797[(2)] = inst_9727);

(statearr_9733_9797[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (20))){
var state_9731__$1 = state_9731;
var statearr_9734_9798 = state_9731__$1;
(statearr_9734_9798[(2)] = null);

(statearr_9734_9798[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (1))){
var state_9731__$1 = state_9731;
var statearr_9735_9799 = state_9731__$1;
(statearr_9735_9799[(2)] = null);

(statearr_9735_9799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (4))){
var inst_9696 = (state_9731[(7)]);
var inst_9696__$1 = (state_9731[(2)]);
var inst_9697 = (inst_9696__$1 == null);
var state_9731__$1 = (function (){var statearr_9736 = state_9731;
(statearr_9736[(7)] = inst_9696__$1);

return statearr_9736;
})();
if(cljs.core.truth_(inst_9697)){
var statearr_9737_9800 = state_9731__$1;
(statearr_9737_9800[(1)] = (5));

} else {
var statearr_9738_9801 = state_9731__$1;
(statearr_9738_9801[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (15))){
var inst_9709 = (state_9731[(8)]);
var state_9731__$1 = state_9731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9731__$1,(18),to,inst_9709);
} else {
if((state_val_9732 === (21))){
var inst_9722 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
var statearr_9739_9802 = state_9731__$1;
(statearr_9739_9802[(2)] = inst_9722);

(statearr_9739_9802[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (13))){
var inst_9724 = (state_9731[(2)]);
var state_9731__$1 = (function (){var statearr_9740 = state_9731;
(statearr_9740[(9)] = inst_9724);

return statearr_9740;
})();
var statearr_9741_9803 = state_9731__$1;
(statearr_9741_9803[(2)] = null);

(statearr_9741_9803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (6))){
var inst_9696 = (state_9731[(7)]);
var state_9731__$1 = state_9731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9731__$1,(11),inst_9696);
} else {
if((state_val_9732 === (17))){
var inst_9717 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
if(cljs.core.truth_(inst_9717)){
var statearr_9742_9804 = state_9731__$1;
(statearr_9742_9804[(1)] = (19));

} else {
var statearr_9743_9805 = state_9731__$1;
(statearr_9743_9805[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (3))){
var inst_9729 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9731__$1,inst_9729);
} else {
if((state_val_9732 === (12))){
var inst_9706 = (state_9731[(10)]);
var state_9731__$1 = state_9731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9731__$1,(14),inst_9706);
} else {
if((state_val_9732 === (2))){
var state_9731__$1 = state_9731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9731__$1,(4),results);
} else {
if((state_val_9732 === (19))){
var state_9731__$1 = state_9731;
var statearr_9744_9806 = state_9731__$1;
(statearr_9744_9806[(2)] = null);

(statearr_9744_9806[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (11))){
var inst_9706 = (state_9731[(2)]);
var state_9731__$1 = (function (){var statearr_9745 = state_9731;
(statearr_9745[(10)] = inst_9706);

return statearr_9745;
})();
var statearr_9746_9807 = state_9731__$1;
(statearr_9746_9807[(2)] = null);

(statearr_9746_9807[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (9))){
var state_9731__$1 = state_9731;
var statearr_9747_9808 = state_9731__$1;
(statearr_9747_9808[(2)] = null);

(statearr_9747_9808[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (5))){
var state_9731__$1 = state_9731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9748_9809 = state_9731__$1;
(statearr_9748_9809[(1)] = (8));

} else {
var statearr_9749_9810 = state_9731__$1;
(statearr_9749_9810[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (14))){
var inst_9709 = (state_9731[(8)]);
var inst_9711 = (state_9731[(11)]);
var inst_9709__$1 = (state_9731[(2)]);
var inst_9710 = (inst_9709__$1 == null);
var inst_9711__$1 = cljs.core.not(inst_9710);
var state_9731__$1 = (function (){var statearr_9750 = state_9731;
(statearr_9750[(8)] = inst_9709__$1);

(statearr_9750[(11)] = inst_9711__$1);

return statearr_9750;
})();
if(inst_9711__$1){
var statearr_9751_9811 = state_9731__$1;
(statearr_9751_9811[(1)] = (15));

} else {
var statearr_9752_9812 = state_9731__$1;
(statearr_9752_9812[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (16))){
var inst_9711 = (state_9731[(11)]);
var state_9731__$1 = state_9731;
var statearr_9753_9813 = state_9731__$1;
(statearr_9753_9813[(2)] = inst_9711);

(statearr_9753_9813[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (10))){
var inst_9703 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
var statearr_9754_9814 = state_9731__$1;
(statearr_9754_9814[(2)] = inst_9703);

(statearr_9754_9814[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (18))){
var inst_9714 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
var statearr_9755_9815 = state_9731__$1;
(statearr_9755_9815[(2)] = inst_9714);

(statearr_9755_9815[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (8))){
var inst_9700 = cljs.core.async.close_BANG_(to);
var state_9731__$1 = state_9731;
var statearr_9756_9816 = state_9731__$1;
(statearr_9756_9816[(2)] = inst_9700);

(statearr_9756_9816[(1)] = (10));


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
});})(c__9423__auto__,jobs,results,process,async))
;
return ((function (switch__9320__auto__,c__9423__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0 = (function (){
var statearr_9757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__);

(statearr_9757[(1)] = (1));

return statearr_9757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1 = (function (state_9731){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9731);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e9758){if((e9758 instanceof Object)){
var ex__9324__auto__ = e9758;
var statearr_9759_9817 = state_9731;
(statearr_9759_9817[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9731);

return cljs.core.cst$kw$recur;
} else {
throw e9758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__9818 = state_9731;
state_9731 = G__9818;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__ = function(state_9731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1.call(this,state_9731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,jobs,results,process,async))
})();
var state__9425__auto__ = (function (){var statearr_9760 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_9760[(6)] = c__9423__auto__);

return statearr_9760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,jobs,results,process,async))
);

return c__9423__auto__;
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
var G__9820 = arguments.length;
switch (G__9820) {
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
var G__9823 = arguments.length;
switch (G__9823) {
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
var G__9826 = arguments.length;
switch (G__9826) {
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
var c__9423__auto___9875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___9875,tc,fc){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___9875,tc,fc){
return (function (state_9852){
var state_val_9853 = (state_9852[(1)]);
if((state_val_9853 === (7))){
var inst_9848 = (state_9852[(2)]);
var state_9852__$1 = state_9852;
var statearr_9854_9876 = state_9852__$1;
(statearr_9854_9876[(2)] = inst_9848);

(statearr_9854_9876[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (1))){
var state_9852__$1 = state_9852;
var statearr_9855_9877 = state_9852__$1;
(statearr_9855_9877[(2)] = null);

(statearr_9855_9877[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (4))){
var inst_9829 = (state_9852[(7)]);
var inst_9829__$1 = (state_9852[(2)]);
var inst_9830 = (inst_9829__$1 == null);
var state_9852__$1 = (function (){var statearr_9856 = state_9852;
(statearr_9856[(7)] = inst_9829__$1);

return statearr_9856;
})();
if(cljs.core.truth_(inst_9830)){
var statearr_9857_9878 = state_9852__$1;
(statearr_9857_9878[(1)] = (5));

} else {
var statearr_9858_9879 = state_9852__$1;
(statearr_9858_9879[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (13))){
var state_9852__$1 = state_9852;
var statearr_9859_9880 = state_9852__$1;
(statearr_9859_9880[(2)] = null);

(statearr_9859_9880[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (6))){
var inst_9829 = (state_9852[(7)]);
var inst_9835 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9829) : p.call(null,inst_9829));
var state_9852__$1 = state_9852;
if(cljs.core.truth_(inst_9835)){
var statearr_9860_9881 = state_9852__$1;
(statearr_9860_9881[(1)] = (9));

} else {
var statearr_9861_9882 = state_9852__$1;
(statearr_9861_9882[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (3))){
var inst_9850 = (state_9852[(2)]);
var state_9852__$1 = state_9852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9852__$1,inst_9850);
} else {
if((state_val_9853 === (12))){
var state_9852__$1 = state_9852;
var statearr_9862_9883 = state_9852__$1;
(statearr_9862_9883[(2)] = null);

(statearr_9862_9883[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (2))){
var state_9852__$1 = state_9852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9852__$1,(4),ch);
} else {
if((state_val_9853 === (11))){
var inst_9829 = (state_9852[(7)]);
var inst_9839 = (state_9852[(2)]);
var state_9852__$1 = state_9852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9852__$1,(8),inst_9839,inst_9829);
} else {
if((state_val_9853 === (9))){
var state_9852__$1 = state_9852;
var statearr_9863_9884 = state_9852__$1;
(statearr_9863_9884[(2)] = tc);

(statearr_9863_9884[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (5))){
var inst_9832 = cljs.core.async.close_BANG_(tc);
var inst_9833 = cljs.core.async.close_BANG_(fc);
var state_9852__$1 = (function (){var statearr_9864 = state_9852;
(statearr_9864[(8)] = inst_9832);

return statearr_9864;
})();
var statearr_9865_9885 = state_9852__$1;
(statearr_9865_9885[(2)] = inst_9833);

(statearr_9865_9885[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (14))){
var inst_9846 = (state_9852[(2)]);
var state_9852__$1 = state_9852;
var statearr_9866_9886 = state_9852__$1;
(statearr_9866_9886[(2)] = inst_9846);

(statearr_9866_9886[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (10))){
var state_9852__$1 = state_9852;
var statearr_9867_9887 = state_9852__$1;
(statearr_9867_9887[(2)] = fc);

(statearr_9867_9887[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9853 === (8))){
var inst_9841 = (state_9852[(2)]);
var state_9852__$1 = state_9852;
if(cljs.core.truth_(inst_9841)){
var statearr_9868_9888 = state_9852__$1;
(statearr_9868_9888[(1)] = (12));

} else {
var statearr_9869_9889 = state_9852__$1;
(statearr_9869_9889[(1)] = (13));

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
});})(c__9423__auto___9875,tc,fc))
;
return ((function (switch__9320__auto__,c__9423__auto___9875,tc,fc){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_9870 = [null,null,null,null,null,null,null,null,null];
(statearr_9870[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_9870[(1)] = (1));

return statearr_9870;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_9852){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9852);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e9871){if((e9871 instanceof Object)){
var ex__9324__auto__ = e9871;
var statearr_9872_9890 = state_9852;
(statearr_9872_9890[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9852);

return cljs.core.cst$kw$recur;
} else {
throw e9871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__9891 = state_9852;
state_9852 = G__9891;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_9852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_9852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___9875,tc,fc))
})();
var state__9425__auto__ = (function (){var statearr_9873 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_9873[(6)] = c__9423__auto___9875);

return statearr_9873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___9875,tc,fc))
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
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_9912){
var state_val_9913 = (state_9912[(1)]);
if((state_val_9913 === (7))){
var inst_9908 = (state_9912[(2)]);
var state_9912__$1 = state_9912;
var statearr_9914_9932 = state_9912__$1;
(statearr_9914_9932[(2)] = inst_9908);

(statearr_9914_9932[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9913 === (1))){
var inst_9892 = init;
var state_9912__$1 = (function (){var statearr_9915 = state_9912;
(statearr_9915[(7)] = inst_9892);

return statearr_9915;
})();
var statearr_9916_9933 = state_9912__$1;
(statearr_9916_9933[(2)] = null);

(statearr_9916_9933[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9913 === (4))){
var inst_9895 = (state_9912[(8)]);
var inst_9895__$1 = (state_9912[(2)]);
var inst_9896 = (inst_9895__$1 == null);
var state_9912__$1 = (function (){var statearr_9917 = state_9912;
(statearr_9917[(8)] = inst_9895__$1);

return statearr_9917;
})();
if(cljs.core.truth_(inst_9896)){
var statearr_9918_9934 = state_9912__$1;
(statearr_9918_9934[(1)] = (5));

} else {
var statearr_9919_9935 = state_9912__$1;
(statearr_9919_9935[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9913 === (6))){
var inst_9899 = (state_9912[(9)]);
var inst_9892 = (state_9912[(7)]);
var inst_9895 = (state_9912[(8)]);
var inst_9899__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_9892,inst_9895) : f.call(null,inst_9892,inst_9895));
var inst_9900 = cljs.core.reduced_QMARK_(inst_9899__$1);
var state_9912__$1 = (function (){var statearr_9920 = state_9912;
(statearr_9920[(9)] = inst_9899__$1);

return statearr_9920;
})();
if(inst_9900){
var statearr_9921_9936 = state_9912__$1;
(statearr_9921_9936[(1)] = (8));

} else {
var statearr_9922_9937 = state_9912__$1;
(statearr_9922_9937[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9913 === (3))){
var inst_9910 = (state_9912[(2)]);
var state_9912__$1 = state_9912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9912__$1,inst_9910);
} else {
if((state_val_9913 === (2))){
var state_9912__$1 = state_9912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9912__$1,(4),ch);
} else {
if((state_val_9913 === (9))){
var inst_9899 = (state_9912[(9)]);
var inst_9892 = inst_9899;
var state_9912__$1 = (function (){var statearr_9923 = state_9912;
(statearr_9923[(7)] = inst_9892);

return statearr_9923;
})();
var statearr_9924_9938 = state_9912__$1;
(statearr_9924_9938[(2)] = null);

(statearr_9924_9938[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9913 === (5))){
var inst_9892 = (state_9912[(7)]);
var state_9912__$1 = state_9912;
var statearr_9925_9939 = state_9912__$1;
(statearr_9925_9939[(2)] = inst_9892);

(statearr_9925_9939[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9913 === (10))){
var inst_9906 = (state_9912[(2)]);
var state_9912__$1 = state_9912;
var statearr_9926_9940 = state_9912__$1;
(statearr_9926_9940[(2)] = inst_9906);

(statearr_9926_9940[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9913 === (8))){
var inst_9899 = (state_9912[(9)]);
var inst_9902 = cljs.core.deref(inst_9899);
var state_9912__$1 = state_9912;
var statearr_9927_9941 = state_9912__$1;
(statearr_9927_9941[(2)] = inst_9902);

(statearr_9927_9941[(1)] = (10));


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
});})(c__9423__auto__))
;
return ((function (switch__9320__auto__,c__9423__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9321__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9321__auto____0 = (function (){
var statearr_9928 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9928[(0)] = cljs$core$async$reduce_$_state_machine__9321__auto__);

(statearr_9928[(1)] = (1));

return statearr_9928;
});
var cljs$core$async$reduce_$_state_machine__9321__auto____1 = (function (state_9912){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9912);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e9929){if((e9929 instanceof Object)){
var ex__9324__auto__ = e9929;
var statearr_9930_9942 = state_9912;
(statearr_9930_9942[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9912);

return cljs.core.cst$kw$recur;
} else {
throw e9929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__9943 = state_9912;
state_9912 = G__9943;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9321__auto__ = function(state_9912){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9321__auto____1.call(this,state_9912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9321__auto____0;
cljs$core$async$reduce_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9321__auto____1;
return cljs$core$async$reduce_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_9931 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_9931[(6)] = c__9423__auto__);

return statearr_9931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__,f__$1){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__,f__$1){
return (function (state_9949){
var state_val_9950 = (state_9949[(1)]);
if((state_val_9950 === (1))){
var inst_9944 = cljs.core.async.reduce(f__$1,init,ch);
var state_9949__$1 = state_9949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9949__$1,(2),inst_9944);
} else {
if((state_val_9950 === (2))){
var inst_9946 = (state_9949[(2)]);
var inst_9947 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_9946) : f__$1.call(null,inst_9946));
var state_9949__$1 = state_9949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9949__$1,inst_9947);
} else {
return null;
}
}
});})(c__9423__auto__,f__$1))
;
return ((function (switch__9320__auto__,c__9423__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9321__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9321__auto____0 = (function (){
var statearr_9951 = [null,null,null,null,null,null,null];
(statearr_9951[(0)] = cljs$core$async$transduce_$_state_machine__9321__auto__);

(statearr_9951[(1)] = (1));

return statearr_9951;
});
var cljs$core$async$transduce_$_state_machine__9321__auto____1 = (function (state_9949){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9949);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e9952){if((e9952 instanceof Object)){
var ex__9324__auto__ = e9952;
var statearr_9953_9955 = state_9949;
(statearr_9953_9955[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9949);

return cljs.core.cst$kw$recur;
} else {
throw e9952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__9956 = state_9949;
state_9949 = G__9956;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9321__auto__ = function(state_9949){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9321__auto____1.call(this,state_9949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9321__auto____0;
cljs$core$async$transduce_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9321__auto____1;
return cljs$core$async$transduce_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__,f__$1))
})();
var state__9425__auto__ = (function (){var statearr_9954 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_9954[(6)] = c__9423__auto__);

return statearr_9954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__,f__$1))
);

return c__9423__auto__;
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
var G__9958 = arguments.length;
switch (G__9958) {
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
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_9983){
var state_val_9984 = (state_9983[(1)]);
if((state_val_9984 === (7))){
var inst_9965 = (state_9983[(2)]);
var state_9983__$1 = state_9983;
var statearr_9985_10006 = state_9983__$1;
(statearr_9985_10006[(2)] = inst_9965);

(statearr_9985_10006[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (1))){
var inst_9959 = cljs.core.seq(coll);
var inst_9960 = inst_9959;
var state_9983__$1 = (function (){var statearr_9986 = state_9983;
(statearr_9986[(7)] = inst_9960);

return statearr_9986;
})();
var statearr_9987_10007 = state_9983__$1;
(statearr_9987_10007[(2)] = null);

(statearr_9987_10007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (4))){
var inst_9960 = (state_9983[(7)]);
var inst_9963 = cljs.core.first(inst_9960);
var state_9983__$1 = state_9983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9983__$1,(7),ch,inst_9963);
} else {
if((state_val_9984 === (13))){
var inst_9977 = (state_9983[(2)]);
var state_9983__$1 = state_9983;
var statearr_9988_10008 = state_9983__$1;
(statearr_9988_10008[(2)] = inst_9977);

(statearr_9988_10008[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (6))){
var inst_9968 = (state_9983[(2)]);
var state_9983__$1 = state_9983;
if(cljs.core.truth_(inst_9968)){
var statearr_9989_10009 = state_9983__$1;
(statearr_9989_10009[(1)] = (8));

} else {
var statearr_9990_10010 = state_9983__$1;
(statearr_9990_10010[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (3))){
var inst_9981 = (state_9983[(2)]);
var state_9983__$1 = state_9983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9983__$1,inst_9981);
} else {
if((state_val_9984 === (12))){
var state_9983__$1 = state_9983;
var statearr_9991_10011 = state_9983__$1;
(statearr_9991_10011[(2)] = null);

(statearr_9991_10011[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (2))){
var inst_9960 = (state_9983[(7)]);
var state_9983__$1 = state_9983;
if(cljs.core.truth_(inst_9960)){
var statearr_9992_10012 = state_9983__$1;
(statearr_9992_10012[(1)] = (4));

} else {
var statearr_9993_10013 = state_9983__$1;
(statearr_9993_10013[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (11))){
var inst_9974 = cljs.core.async.close_BANG_(ch);
var state_9983__$1 = state_9983;
var statearr_9994_10014 = state_9983__$1;
(statearr_9994_10014[(2)] = inst_9974);

(statearr_9994_10014[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (9))){
var state_9983__$1 = state_9983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9995_10015 = state_9983__$1;
(statearr_9995_10015[(1)] = (11));

} else {
var statearr_9996_10016 = state_9983__$1;
(statearr_9996_10016[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (5))){
var inst_9960 = (state_9983[(7)]);
var state_9983__$1 = state_9983;
var statearr_9997_10017 = state_9983__$1;
(statearr_9997_10017[(2)] = inst_9960);

(statearr_9997_10017[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (10))){
var inst_9979 = (state_9983[(2)]);
var state_9983__$1 = state_9983;
var statearr_9998_10018 = state_9983__$1;
(statearr_9998_10018[(2)] = inst_9979);

(statearr_9998_10018[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9984 === (8))){
var inst_9960 = (state_9983[(7)]);
var inst_9970 = cljs.core.next(inst_9960);
var inst_9960__$1 = inst_9970;
var state_9983__$1 = (function (){var statearr_9999 = state_9983;
(statearr_9999[(7)] = inst_9960__$1);

return statearr_9999;
})();
var statearr_10000_10019 = state_9983__$1;
(statearr_10000_10019[(2)] = null);

(statearr_10000_10019[(1)] = (2));


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
});})(c__9423__auto__))
;
return ((function (switch__9320__auto__,c__9423__auto__){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_10001 = [null,null,null,null,null,null,null,null];
(statearr_10001[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_10001[(1)] = (1));

return statearr_10001;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_9983){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_9983);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e10002){if((e10002 instanceof Object)){
var ex__9324__auto__ = e10002;
var statearr_10003_10020 = state_9983;
(statearr_10003_10020[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9983);

return cljs.core.cst$kw$recur;
} else {
throw e10002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__10021 = state_9983;
state_9983 = G__10021;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_9983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_9983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_10004 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_10004[(6)] = c__9423__auto__);

return statearr_10004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
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
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
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
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
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
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10022 = (function (ch,cs,meta10023){
this.ch = ch;
this.cs = cs;
this.meta10023 = meta10023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10024,meta10023__$1){
var self__ = this;
var _10024__$1 = this;
return (new cljs.core.async.t_cljs$core$async10022(self__.ch,self__.cs,meta10023__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10024){
var self__ = this;
var _10024__$1 = this;
return self__.meta10023;
});})(cs))
;

cljs.core.async.t_cljs$core$async10022.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10022.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10022.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10022.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10022.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10022.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta10023], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10022";

cljs.core.async.t_cljs$core$async10022.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10022");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10022.
 */
cljs.core.async.__GT_t_cljs$core$async10022 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10022(ch__$1,cs__$1,meta10023){
return (new cljs.core.async.t_cljs$core$async10022(ch__$1,cs__$1,meta10023));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10022(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9423__auto___10244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___10244,cs,m,dchan,dctr,done){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___10244,cs,m,dchan,dctr,done){
return (function (state_10159){
var state_val_10160 = (state_10159[(1)]);
if((state_val_10160 === (7))){
var inst_10155 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10161_10245 = state_10159__$1;
(statearr_10161_10245[(2)] = inst_10155);

(statearr_10161_10245[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (20))){
var inst_10058 = (state_10159[(7)]);
var inst_10070 = cljs.core.first(inst_10058);
var inst_10071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10070,(0),null);
var inst_10072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10070,(1),null);
var state_10159__$1 = (function (){var statearr_10162 = state_10159;
(statearr_10162[(8)] = inst_10071);

return statearr_10162;
})();
if(cljs.core.truth_(inst_10072)){
var statearr_10163_10246 = state_10159__$1;
(statearr_10163_10246[(1)] = (22));

} else {
var statearr_10164_10247 = state_10159__$1;
(statearr_10164_10247[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (27))){
var inst_10027 = (state_10159[(9)]);
var inst_10102 = (state_10159[(10)]);
var inst_10107 = (state_10159[(11)]);
var inst_10100 = (state_10159[(12)]);
var inst_10107__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10100,inst_10102);
var inst_10108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10107__$1,inst_10027,done);
var state_10159__$1 = (function (){var statearr_10165 = state_10159;
(statearr_10165[(11)] = inst_10107__$1);

return statearr_10165;
})();
if(cljs.core.truth_(inst_10108)){
var statearr_10166_10248 = state_10159__$1;
(statearr_10166_10248[(1)] = (30));

} else {
var statearr_10167_10249 = state_10159__$1;
(statearr_10167_10249[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (1))){
var state_10159__$1 = state_10159;
var statearr_10168_10250 = state_10159__$1;
(statearr_10168_10250[(2)] = null);

(statearr_10168_10250[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (24))){
var inst_10058 = (state_10159[(7)]);
var inst_10077 = (state_10159[(2)]);
var inst_10078 = cljs.core.next(inst_10058);
var inst_10036 = inst_10078;
var inst_10037 = null;
var inst_10038 = (0);
var inst_10039 = (0);
var state_10159__$1 = (function (){var statearr_10169 = state_10159;
(statearr_10169[(13)] = inst_10036);

(statearr_10169[(14)] = inst_10039);

(statearr_10169[(15)] = inst_10077);

(statearr_10169[(16)] = inst_10038);

(statearr_10169[(17)] = inst_10037);

return statearr_10169;
})();
var statearr_10170_10251 = state_10159__$1;
(statearr_10170_10251[(2)] = null);

(statearr_10170_10251[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (39))){
var state_10159__$1 = state_10159;
var statearr_10174_10252 = state_10159__$1;
(statearr_10174_10252[(2)] = null);

(statearr_10174_10252[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (4))){
var inst_10027 = (state_10159[(9)]);
var inst_10027__$1 = (state_10159[(2)]);
var inst_10028 = (inst_10027__$1 == null);
var state_10159__$1 = (function (){var statearr_10175 = state_10159;
(statearr_10175[(9)] = inst_10027__$1);

return statearr_10175;
})();
if(cljs.core.truth_(inst_10028)){
var statearr_10176_10253 = state_10159__$1;
(statearr_10176_10253[(1)] = (5));

} else {
var statearr_10177_10254 = state_10159__$1;
(statearr_10177_10254[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (15))){
var inst_10036 = (state_10159[(13)]);
var inst_10039 = (state_10159[(14)]);
var inst_10038 = (state_10159[(16)]);
var inst_10037 = (state_10159[(17)]);
var inst_10054 = (state_10159[(2)]);
var inst_10055 = (inst_10039 + (1));
var tmp10171 = inst_10036;
var tmp10172 = inst_10038;
var tmp10173 = inst_10037;
var inst_10036__$1 = tmp10171;
var inst_10037__$1 = tmp10173;
var inst_10038__$1 = tmp10172;
var inst_10039__$1 = inst_10055;
var state_10159__$1 = (function (){var statearr_10178 = state_10159;
(statearr_10178[(18)] = inst_10054);

(statearr_10178[(13)] = inst_10036__$1);

(statearr_10178[(14)] = inst_10039__$1);

(statearr_10178[(16)] = inst_10038__$1);

(statearr_10178[(17)] = inst_10037__$1);

return statearr_10178;
})();
var statearr_10179_10255 = state_10159__$1;
(statearr_10179_10255[(2)] = null);

(statearr_10179_10255[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (21))){
var inst_10081 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10183_10256 = state_10159__$1;
(statearr_10183_10256[(2)] = inst_10081);

(statearr_10183_10256[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (31))){
var inst_10107 = (state_10159[(11)]);
var inst_10111 = done(null);
var inst_10112 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10107);
var state_10159__$1 = (function (){var statearr_10184 = state_10159;
(statearr_10184[(19)] = inst_10111);

return statearr_10184;
})();
var statearr_10185_10257 = state_10159__$1;
(statearr_10185_10257[(2)] = inst_10112);

(statearr_10185_10257[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (32))){
var inst_10102 = (state_10159[(10)]);
var inst_10099 = (state_10159[(20)]);
var inst_10101 = (state_10159[(21)]);
var inst_10100 = (state_10159[(12)]);
var inst_10114 = (state_10159[(2)]);
var inst_10115 = (inst_10102 + (1));
var tmp10180 = inst_10099;
var tmp10181 = inst_10101;
var tmp10182 = inst_10100;
var inst_10099__$1 = tmp10180;
var inst_10100__$1 = tmp10182;
var inst_10101__$1 = tmp10181;
var inst_10102__$1 = inst_10115;
var state_10159__$1 = (function (){var statearr_10186 = state_10159;
(statearr_10186[(10)] = inst_10102__$1);

(statearr_10186[(20)] = inst_10099__$1);

(statearr_10186[(21)] = inst_10101__$1);

(statearr_10186[(22)] = inst_10114);

(statearr_10186[(12)] = inst_10100__$1);

return statearr_10186;
})();
var statearr_10187_10258 = state_10159__$1;
(statearr_10187_10258[(2)] = null);

(statearr_10187_10258[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (40))){
var inst_10127 = (state_10159[(23)]);
var inst_10131 = done(null);
var inst_10132 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10127);
var state_10159__$1 = (function (){var statearr_10188 = state_10159;
(statearr_10188[(24)] = inst_10131);

return statearr_10188;
})();
var statearr_10189_10259 = state_10159__$1;
(statearr_10189_10259[(2)] = inst_10132);

(statearr_10189_10259[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (33))){
var inst_10118 = (state_10159[(25)]);
var inst_10120 = cljs.core.chunked_seq_QMARK_(inst_10118);
var state_10159__$1 = state_10159;
if(inst_10120){
var statearr_10190_10260 = state_10159__$1;
(statearr_10190_10260[(1)] = (36));

} else {
var statearr_10191_10261 = state_10159__$1;
(statearr_10191_10261[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (13))){
var inst_10048 = (state_10159[(26)]);
var inst_10051 = cljs.core.async.close_BANG_(inst_10048);
var state_10159__$1 = state_10159;
var statearr_10192_10262 = state_10159__$1;
(statearr_10192_10262[(2)] = inst_10051);

(statearr_10192_10262[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (22))){
var inst_10071 = (state_10159[(8)]);
var inst_10074 = cljs.core.async.close_BANG_(inst_10071);
var state_10159__$1 = state_10159;
var statearr_10193_10263 = state_10159__$1;
(statearr_10193_10263[(2)] = inst_10074);

(statearr_10193_10263[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (36))){
var inst_10118 = (state_10159[(25)]);
var inst_10122 = cljs.core.chunk_first(inst_10118);
var inst_10123 = cljs.core.chunk_rest(inst_10118);
var inst_10124 = cljs.core.count(inst_10122);
var inst_10099 = inst_10123;
var inst_10100 = inst_10122;
var inst_10101 = inst_10124;
var inst_10102 = (0);
var state_10159__$1 = (function (){var statearr_10194 = state_10159;
(statearr_10194[(10)] = inst_10102);

(statearr_10194[(20)] = inst_10099);

(statearr_10194[(21)] = inst_10101);

(statearr_10194[(12)] = inst_10100);

return statearr_10194;
})();
var statearr_10195_10264 = state_10159__$1;
(statearr_10195_10264[(2)] = null);

(statearr_10195_10264[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (41))){
var inst_10118 = (state_10159[(25)]);
var inst_10134 = (state_10159[(2)]);
var inst_10135 = cljs.core.next(inst_10118);
var inst_10099 = inst_10135;
var inst_10100 = null;
var inst_10101 = (0);
var inst_10102 = (0);
var state_10159__$1 = (function (){var statearr_10196 = state_10159;
(statearr_10196[(10)] = inst_10102);

(statearr_10196[(20)] = inst_10099);

(statearr_10196[(21)] = inst_10101);

(statearr_10196[(12)] = inst_10100);

(statearr_10196[(27)] = inst_10134);

return statearr_10196;
})();
var statearr_10197_10265 = state_10159__$1;
(statearr_10197_10265[(2)] = null);

(statearr_10197_10265[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (43))){
var state_10159__$1 = state_10159;
var statearr_10198_10266 = state_10159__$1;
(statearr_10198_10266[(2)] = null);

(statearr_10198_10266[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (29))){
var inst_10143 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10199_10267 = state_10159__$1;
(statearr_10199_10267[(2)] = inst_10143);

(statearr_10199_10267[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (44))){
var inst_10152 = (state_10159[(2)]);
var state_10159__$1 = (function (){var statearr_10200 = state_10159;
(statearr_10200[(28)] = inst_10152);

return statearr_10200;
})();
var statearr_10201_10268 = state_10159__$1;
(statearr_10201_10268[(2)] = null);

(statearr_10201_10268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (6))){
var inst_10091 = (state_10159[(29)]);
var inst_10090 = cljs.core.deref(cs);
var inst_10091__$1 = cljs.core.keys(inst_10090);
var inst_10092 = cljs.core.count(inst_10091__$1);
var inst_10093 = cljs.core.reset_BANG_(dctr,inst_10092);
var inst_10098 = cljs.core.seq(inst_10091__$1);
var inst_10099 = inst_10098;
var inst_10100 = null;
var inst_10101 = (0);
var inst_10102 = (0);
var state_10159__$1 = (function (){var statearr_10202 = state_10159;
(statearr_10202[(10)] = inst_10102);

(statearr_10202[(30)] = inst_10093);

(statearr_10202[(20)] = inst_10099);

(statearr_10202[(21)] = inst_10101);

(statearr_10202[(29)] = inst_10091__$1);

(statearr_10202[(12)] = inst_10100);

return statearr_10202;
})();
var statearr_10203_10269 = state_10159__$1;
(statearr_10203_10269[(2)] = null);

(statearr_10203_10269[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (28))){
var inst_10099 = (state_10159[(20)]);
var inst_10118 = (state_10159[(25)]);
var inst_10118__$1 = cljs.core.seq(inst_10099);
var state_10159__$1 = (function (){var statearr_10204 = state_10159;
(statearr_10204[(25)] = inst_10118__$1);

return statearr_10204;
})();
if(inst_10118__$1){
var statearr_10205_10270 = state_10159__$1;
(statearr_10205_10270[(1)] = (33));

} else {
var statearr_10206_10271 = state_10159__$1;
(statearr_10206_10271[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (25))){
var inst_10102 = (state_10159[(10)]);
var inst_10101 = (state_10159[(21)]);
var inst_10104 = (inst_10102 < inst_10101);
var inst_10105 = inst_10104;
var state_10159__$1 = state_10159;
if(cljs.core.truth_(inst_10105)){
var statearr_10207_10272 = state_10159__$1;
(statearr_10207_10272[(1)] = (27));

} else {
var statearr_10208_10273 = state_10159__$1;
(statearr_10208_10273[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (34))){
var state_10159__$1 = state_10159;
var statearr_10209_10274 = state_10159__$1;
(statearr_10209_10274[(2)] = null);

(statearr_10209_10274[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (17))){
var state_10159__$1 = state_10159;
var statearr_10210_10275 = state_10159__$1;
(statearr_10210_10275[(2)] = null);

(statearr_10210_10275[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (3))){
var inst_10157 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10159__$1,inst_10157);
} else {
if((state_val_10160 === (12))){
var inst_10086 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10211_10276 = state_10159__$1;
(statearr_10211_10276[(2)] = inst_10086);

(statearr_10211_10276[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (2))){
var state_10159__$1 = state_10159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10159__$1,(4),ch);
} else {
if((state_val_10160 === (23))){
var state_10159__$1 = state_10159;
var statearr_10212_10277 = state_10159__$1;
(statearr_10212_10277[(2)] = null);

(statearr_10212_10277[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (35))){
var inst_10141 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10213_10278 = state_10159__$1;
(statearr_10213_10278[(2)] = inst_10141);

(statearr_10213_10278[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (19))){
var inst_10058 = (state_10159[(7)]);
var inst_10062 = cljs.core.chunk_first(inst_10058);
var inst_10063 = cljs.core.chunk_rest(inst_10058);
var inst_10064 = cljs.core.count(inst_10062);
var inst_10036 = inst_10063;
var inst_10037 = inst_10062;
var inst_10038 = inst_10064;
var inst_10039 = (0);
var state_10159__$1 = (function (){var statearr_10214 = state_10159;
(statearr_10214[(13)] = inst_10036);

(statearr_10214[(14)] = inst_10039);

(statearr_10214[(16)] = inst_10038);

(statearr_10214[(17)] = inst_10037);

return statearr_10214;
})();
var statearr_10215_10279 = state_10159__$1;
(statearr_10215_10279[(2)] = null);

(statearr_10215_10279[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (11))){
var inst_10036 = (state_10159[(13)]);
var inst_10058 = (state_10159[(7)]);
var inst_10058__$1 = cljs.core.seq(inst_10036);
var state_10159__$1 = (function (){var statearr_10216 = state_10159;
(statearr_10216[(7)] = inst_10058__$1);

return statearr_10216;
})();
if(inst_10058__$1){
var statearr_10217_10280 = state_10159__$1;
(statearr_10217_10280[(1)] = (16));

} else {
var statearr_10218_10281 = state_10159__$1;
(statearr_10218_10281[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (9))){
var inst_10088 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10219_10282 = state_10159__$1;
(statearr_10219_10282[(2)] = inst_10088);

(statearr_10219_10282[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (5))){
var inst_10034 = cljs.core.deref(cs);
var inst_10035 = cljs.core.seq(inst_10034);
var inst_10036 = inst_10035;
var inst_10037 = null;
var inst_10038 = (0);
var inst_10039 = (0);
var state_10159__$1 = (function (){var statearr_10220 = state_10159;
(statearr_10220[(13)] = inst_10036);

(statearr_10220[(14)] = inst_10039);

(statearr_10220[(16)] = inst_10038);

(statearr_10220[(17)] = inst_10037);

return statearr_10220;
})();
var statearr_10221_10283 = state_10159__$1;
(statearr_10221_10283[(2)] = null);

(statearr_10221_10283[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (14))){
var state_10159__$1 = state_10159;
var statearr_10222_10284 = state_10159__$1;
(statearr_10222_10284[(2)] = null);

(statearr_10222_10284[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (45))){
var inst_10149 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10223_10285 = state_10159__$1;
(statearr_10223_10285[(2)] = inst_10149);

(statearr_10223_10285[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (26))){
var inst_10091 = (state_10159[(29)]);
var inst_10145 = (state_10159[(2)]);
var inst_10146 = cljs.core.seq(inst_10091);
var state_10159__$1 = (function (){var statearr_10224 = state_10159;
(statearr_10224[(31)] = inst_10145);

return statearr_10224;
})();
if(inst_10146){
var statearr_10225_10286 = state_10159__$1;
(statearr_10225_10286[(1)] = (42));

} else {
var statearr_10226_10287 = state_10159__$1;
(statearr_10226_10287[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (16))){
var inst_10058 = (state_10159[(7)]);
var inst_10060 = cljs.core.chunked_seq_QMARK_(inst_10058);
var state_10159__$1 = state_10159;
if(inst_10060){
var statearr_10227_10288 = state_10159__$1;
(statearr_10227_10288[(1)] = (19));

} else {
var statearr_10228_10289 = state_10159__$1;
(statearr_10228_10289[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (38))){
var inst_10138 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10229_10290 = state_10159__$1;
(statearr_10229_10290[(2)] = inst_10138);

(statearr_10229_10290[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (30))){
var state_10159__$1 = state_10159;
var statearr_10230_10291 = state_10159__$1;
(statearr_10230_10291[(2)] = null);

(statearr_10230_10291[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (10))){
var inst_10039 = (state_10159[(14)]);
var inst_10037 = (state_10159[(17)]);
var inst_10047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10037,inst_10039);
var inst_10048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10047,(0),null);
var inst_10049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10047,(1),null);
var state_10159__$1 = (function (){var statearr_10231 = state_10159;
(statearr_10231[(26)] = inst_10048);

return statearr_10231;
})();
if(cljs.core.truth_(inst_10049)){
var statearr_10232_10292 = state_10159__$1;
(statearr_10232_10292[(1)] = (13));

} else {
var statearr_10233_10293 = state_10159__$1;
(statearr_10233_10293[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (18))){
var inst_10084 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10234_10294 = state_10159__$1;
(statearr_10234_10294[(2)] = inst_10084);

(statearr_10234_10294[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (42))){
var state_10159__$1 = state_10159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10159__$1,(45),dchan);
} else {
if((state_val_10160 === (37))){
var inst_10027 = (state_10159[(9)]);
var inst_10127 = (state_10159[(23)]);
var inst_10118 = (state_10159[(25)]);
var inst_10127__$1 = cljs.core.first(inst_10118);
var inst_10128 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10127__$1,inst_10027,done);
var state_10159__$1 = (function (){var statearr_10235 = state_10159;
(statearr_10235[(23)] = inst_10127__$1);

return statearr_10235;
})();
if(cljs.core.truth_(inst_10128)){
var statearr_10236_10295 = state_10159__$1;
(statearr_10236_10295[(1)] = (39));

} else {
var statearr_10237_10296 = state_10159__$1;
(statearr_10237_10296[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10160 === (8))){
var inst_10039 = (state_10159[(14)]);
var inst_10038 = (state_10159[(16)]);
var inst_10041 = (inst_10039 < inst_10038);
var inst_10042 = inst_10041;
var state_10159__$1 = state_10159;
if(cljs.core.truth_(inst_10042)){
var statearr_10238_10297 = state_10159__$1;
(statearr_10238_10297[(1)] = (10));

} else {
var statearr_10239_10298 = state_10159__$1;
(statearr_10239_10298[(1)] = (11));

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
});})(c__9423__auto___10244,cs,m,dchan,dctr,done))
;
return ((function (switch__9320__auto__,c__9423__auto___10244,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9321__auto__ = null;
var cljs$core$async$mult_$_state_machine__9321__auto____0 = (function (){
var statearr_10240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10240[(0)] = cljs$core$async$mult_$_state_machine__9321__auto__);

(statearr_10240[(1)] = (1));

return statearr_10240;
});
var cljs$core$async$mult_$_state_machine__9321__auto____1 = (function (state_10159){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_10159);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e10241){if((e10241 instanceof Object)){
var ex__9324__auto__ = e10241;
var statearr_10242_10299 = state_10159;
(statearr_10242_10299[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10159);

return cljs.core.cst$kw$recur;
} else {
throw e10241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__10300 = state_10159;
state_10159 = G__10300;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9321__auto__ = function(state_10159){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9321__auto____1.call(this,state_10159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9321__auto____0;
cljs$core$async$mult_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9321__auto____1;
return cljs$core$async$mult_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___10244,cs,m,dchan,dctr,done))
})();
var state__9425__auto__ = (function (){var statearr_10243 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_10243[(6)] = c__9423__auto___10244);

return statearr_10243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___10244,cs,m,dchan,dctr,done))
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
var G__10302 = arguments.length;
switch (G__10302) {
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
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
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
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
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
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
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
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
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
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10314 = arguments.length;
var i__4532__auto___10315 = (0);
while(true){
if((i__4532__auto___10315 < len__4531__auto___10314)){
args__4534__auto__.push((arguments[i__4532__auto___10315]));

var G__10316 = (i__4532__auto___10315 + (1));
i__4532__auto___10315 = G__10316;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10308){
var map__10309 = p__10308;
var map__10309__$1 = ((((!((map__10309 == null)))?(((((map__10309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10309):map__10309);
var opts = map__10309__$1;
var statearr_10311_10317 = state;
(statearr_10311_10317[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__10309,map__10309__$1,opts){
return (function (val){
var statearr_10312_10318 = state;
(statearr_10312_10318[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__10309,map__10309__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_10313_10319 = state;
(statearr_10313_10319[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10304){
var G__10305 = cljs.core.first(seq10304);
var seq10304__$1 = cljs.core.next(seq10304);
var G__10306 = cljs.core.first(seq10304__$1);
var seq10304__$2 = cljs.core.next(seq10304__$1);
var G__10307 = cljs.core.first(seq10304__$2);
var seq10304__$3 = cljs.core.next(seq10304__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10305,G__10306,G__10307,seq10304__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10320 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta10321){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta10321 = meta10321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10322,meta10321__$1){
var self__ = this;
var _10322__$1 = this;
return (new cljs.core.async.t_cljs$core$async10320(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta10321__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10322){
var self__ = this;
var _10322__$1 = this;
return self__.meta10321;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10320.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta10321], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10320";

cljs.core.async.t_cljs$core$async10320.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10320");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10320.
 */
cljs.core.async.__GT_t_cljs$core$async10320 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10320(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10321){
return (new cljs.core.async.t_cljs$core$async10320(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10321));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10320(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9423__auto___10484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___10484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___10484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10424){
var state_val_10425 = (state_10424[(1)]);
if((state_val_10425 === (7))){
var inst_10339 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
var statearr_10426_10485 = state_10424__$1;
(statearr_10426_10485[(2)] = inst_10339);

(statearr_10426_10485[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (20))){
var inst_10351 = (state_10424[(7)]);
var state_10424__$1 = state_10424;
var statearr_10427_10486 = state_10424__$1;
(statearr_10427_10486[(2)] = inst_10351);

(statearr_10427_10486[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (27))){
var state_10424__$1 = state_10424;
var statearr_10428_10487 = state_10424__$1;
(statearr_10428_10487[(2)] = null);

(statearr_10428_10487[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (1))){
var inst_10326 = (state_10424[(8)]);
var inst_10326__$1 = calc_state();
var inst_10328 = (inst_10326__$1 == null);
var inst_10329 = cljs.core.not(inst_10328);
var state_10424__$1 = (function (){var statearr_10429 = state_10424;
(statearr_10429[(8)] = inst_10326__$1);

return statearr_10429;
})();
if(inst_10329){
var statearr_10430_10488 = state_10424__$1;
(statearr_10430_10488[(1)] = (2));

} else {
var statearr_10431_10489 = state_10424__$1;
(statearr_10431_10489[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (24))){
var inst_10375 = (state_10424[(9)]);
var inst_10398 = (state_10424[(10)]);
var inst_10384 = (state_10424[(11)]);
var inst_10398__$1 = (inst_10375.cljs$core$IFn$_invoke$arity$1 ? inst_10375.cljs$core$IFn$_invoke$arity$1(inst_10384) : inst_10375.call(null,inst_10384));
var state_10424__$1 = (function (){var statearr_10432 = state_10424;
(statearr_10432[(10)] = inst_10398__$1);

return statearr_10432;
})();
if(cljs.core.truth_(inst_10398__$1)){
var statearr_10433_10490 = state_10424__$1;
(statearr_10433_10490[(1)] = (29));

} else {
var statearr_10434_10491 = state_10424__$1;
(statearr_10434_10491[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (4))){
var inst_10342 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
if(cljs.core.truth_(inst_10342)){
var statearr_10435_10492 = state_10424__$1;
(statearr_10435_10492[(1)] = (8));

} else {
var statearr_10436_10493 = state_10424__$1;
(statearr_10436_10493[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (15))){
var inst_10369 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
if(cljs.core.truth_(inst_10369)){
var statearr_10437_10494 = state_10424__$1;
(statearr_10437_10494[(1)] = (19));

} else {
var statearr_10438_10495 = state_10424__$1;
(statearr_10438_10495[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (21))){
var inst_10374 = (state_10424[(12)]);
var inst_10374__$1 = (state_10424[(2)]);
var inst_10375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10374__$1,cljs.core.cst$kw$solos);
var inst_10376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10374__$1,cljs.core.cst$kw$mutes);
var inst_10377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10374__$1,cljs.core.cst$kw$reads);
var state_10424__$1 = (function (){var statearr_10439 = state_10424;
(statearr_10439[(9)] = inst_10375);

(statearr_10439[(13)] = inst_10376);

(statearr_10439[(12)] = inst_10374__$1);

return statearr_10439;
})();
return cljs.core.async.ioc_alts_BANG_(state_10424__$1,(22),inst_10377);
} else {
if((state_val_10425 === (31))){
var inst_10406 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
if(cljs.core.truth_(inst_10406)){
var statearr_10440_10496 = state_10424__$1;
(statearr_10440_10496[(1)] = (32));

} else {
var statearr_10441_10497 = state_10424__$1;
(statearr_10441_10497[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (32))){
var inst_10383 = (state_10424[(14)]);
var state_10424__$1 = state_10424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10424__$1,(35),out,inst_10383);
} else {
if((state_val_10425 === (33))){
var inst_10374 = (state_10424[(12)]);
var inst_10351 = inst_10374;
var state_10424__$1 = (function (){var statearr_10442 = state_10424;
(statearr_10442[(7)] = inst_10351);

return statearr_10442;
})();
var statearr_10443_10498 = state_10424__$1;
(statearr_10443_10498[(2)] = null);

(statearr_10443_10498[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (13))){
var inst_10351 = (state_10424[(7)]);
var inst_10358 = inst_10351.cljs$lang$protocol_mask$partition0$;
var inst_10359 = (inst_10358 & (64));
var inst_10360 = inst_10351.cljs$core$ISeq$;
var inst_10361 = (cljs.core.PROTOCOL_SENTINEL === inst_10360);
var inst_10362 = ((inst_10359) || (inst_10361));
var state_10424__$1 = state_10424;
if(cljs.core.truth_(inst_10362)){
var statearr_10444_10499 = state_10424__$1;
(statearr_10444_10499[(1)] = (16));

} else {
var statearr_10445_10500 = state_10424__$1;
(statearr_10445_10500[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (22))){
var inst_10383 = (state_10424[(14)]);
var inst_10384 = (state_10424[(11)]);
var inst_10382 = (state_10424[(2)]);
var inst_10383__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10382,(0),null);
var inst_10384__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10382,(1),null);
var inst_10385 = (inst_10383__$1 == null);
var inst_10386 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10384__$1,change);
var inst_10387 = ((inst_10385) || (inst_10386));
var state_10424__$1 = (function (){var statearr_10446 = state_10424;
(statearr_10446[(14)] = inst_10383__$1);

(statearr_10446[(11)] = inst_10384__$1);

return statearr_10446;
})();
if(cljs.core.truth_(inst_10387)){
var statearr_10447_10501 = state_10424__$1;
(statearr_10447_10501[(1)] = (23));

} else {
var statearr_10448_10502 = state_10424__$1;
(statearr_10448_10502[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (36))){
var inst_10374 = (state_10424[(12)]);
var inst_10351 = inst_10374;
var state_10424__$1 = (function (){var statearr_10449 = state_10424;
(statearr_10449[(7)] = inst_10351);

return statearr_10449;
})();
var statearr_10450_10503 = state_10424__$1;
(statearr_10450_10503[(2)] = null);

(statearr_10450_10503[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (29))){
var inst_10398 = (state_10424[(10)]);
var state_10424__$1 = state_10424;
var statearr_10451_10504 = state_10424__$1;
(statearr_10451_10504[(2)] = inst_10398);

(statearr_10451_10504[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (6))){
var state_10424__$1 = state_10424;
var statearr_10452_10505 = state_10424__$1;
(statearr_10452_10505[(2)] = false);

(statearr_10452_10505[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (28))){
var inst_10394 = (state_10424[(2)]);
var inst_10395 = calc_state();
var inst_10351 = inst_10395;
var state_10424__$1 = (function (){var statearr_10453 = state_10424;
(statearr_10453[(7)] = inst_10351);

(statearr_10453[(15)] = inst_10394);

return statearr_10453;
})();
var statearr_10454_10506 = state_10424__$1;
(statearr_10454_10506[(2)] = null);

(statearr_10454_10506[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (25))){
var inst_10420 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
var statearr_10455_10507 = state_10424__$1;
(statearr_10455_10507[(2)] = inst_10420);

(statearr_10455_10507[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (34))){
var inst_10418 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
var statearr_10456_10508 = state_10424__$1;
(statearr_10456_10508[(2)] = inst_10418);

(statearr_10456_10508[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (17))){
var state_10424__$1 = state_10424;
var statearr_10457_10509 = state_10424__$1;
(statearr_10457_10509[(2)] = false);

(statearr_10457_10509[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (3))){
var state_10424__$1 = state_10424;
var statearr_10458_10510 = state_10424__$1;
(statearr_10458_10510[(2)] = false);

(statearr_10458_10510[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (12))){
var inst_10422 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10424__$1,inst_10422);
} else {
if((state_val_10425 === (2))){
var inst_10326 = (state_10424[(8)]);
var inst_10331 = inst_10326.cljs$lang$protocol_mask$partition0$;
var inst_10332 = (inst_10331 & (64));
var inst_10333 = inst_10326.cljs$core$ISeq$;
var inst_10334 = (cljs.core.PROTOCOL_SENTINEL === inst_10333);
var inst_10335 = ((inst_10332) || (inst_10334));
var state_10424__$1 = state_10424;
if(cljs.core.truth_(inst_10335)){
var statearr_10459_10511 = state_10424__$1;
(statearr_10459_10511[(1)] = (5));

} else {
var statearr_10460_10512 = state_10424__$1;
(statearr_10460_10512[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (23))){
var inst_10383 = (state_10424[(14)]);
var inst_10389 = (inst_10383 == null);
var state_10424__$1 = state_10424;
if(cljs.core.truth_(inst_10389)){
var statearr_10461_10513 = state_10424__$1;
(statearr_10461_10513[(1)] = (26));

} else {
var statearr_10462_10514 = state_10424__$1;
(statearr_10462_10514[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (35))){
var inst_10409 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
if(cljs.core.truth_(inst_10409)){
var statearr_10463_10515 = state_10424__$1;
(statearr_10463_10515[(1)] = (36));

} else {
var statearr_10464_10516 = state_10424__$1;
(statearr_10464_10516[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (19))){
var inst_10351 = (state_10424[(7)]);
var inst_10371 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_10351);
var state_10424__$1 = state_10424;
var statearr_10465_10517 = state_10424__$1;
(statearr_10465_10517[(2)] = inst_10371);

(statearr_10465_10517[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (11))){
var inst_10351 = (state_10424[(7)]);
var inst_10355 = (inst_10351 == null);
var inst_10356 = cljs.core.not(inst_10355);
var state_10424__$1 = state_10424;
if(inst_10356){
var statearr_10466_10518 = state_10424__$1;
(statearr_10466_10518[(1)] = (13));

} else {
var statearr_10467_10519 = state_10424__$1;
(statearr_10467_10519[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (9))){
var inst_10326 = (state_10424[(8)]);
var state_10424__$1 = state_10424;
var statearr_10468_10520 = state_10424__$1;
(statearr_10468_10520[(2)] = inst_10326);

(statearr_10468_10520[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (5))){
var state_10424__$1 = state_10424;
var statearr_10469_10521 = state_10424__$1;
(statearr_10469_10521[(2)] = true);

(statearr_10469_10521[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (14))){
var state_10424__$1 = state_10424;
var statearr_10470_10522 = state_10424__$1;
(statearr_10470_10522[(2)] = false);

(statearr_10470_10522[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (26))){
var inst_10384 = (state_10424[(11)]);
var inst_10391 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_10384);
var state_10424__$1 = state_10424;
var statearr_10471_10523 = state_10424__$1;
(statearr_10471_10523[(2)] = inst_10391);

(statearr_10471_10523[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (16))){
var state_10424__$1 = state_10424;
var statearr_10472_10524 = state_10424__$1;
(statearr_10472_10524[(2)] = true);

(statearr_10472_10524[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (38))){
var inst_10414 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
var statearr_10473_10525 = state_10424__$1;
(statearr_10473_10525[(2)] = inst_10414);

(statearr_10473_10525[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (30))){
var inst_10375 = (state_10424[(9)]);
var inst_10376 = (state_10424[(13)]);
var inst_10384 = (state_10424[(11)]);
var inst_10401 = cljs.core.empty_QMARK_(inst_10375);
var inst_10402 = (inst_10376.cljs$core$IFn$_invoke$arity$1 ? inst_10376.cljs$core$IFn$_invoke$arity$1(inst_10384) : inst_10376.call(null,inst_10384));
var inst_10403 = cljs.core.not(inst_10402);
var inst_10404 = ((inst_10401) && (inst_10403));
var state_10424__$1 = state_10424;
var statearr_10474_10526 = state_10424__$1;
(statearr_10474_10526[(2)] = inst_10404);

(statearr_10474_10526[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (10))){
var inst_10326 = (state_10424[(8)]);
var inst_10347 = (state_10424[(2)]);
var inst_10348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10347,cljs.core.cst$kw$solos);
var inst_10349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10347,cljs.core.cst$kw$mutes);
var inst_10350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10347,cljs.core.cst$kw$reads);
var inst_10351 = inst_10326;
var state_10424__$1 = (function (){var statearr_10475 = state_10424;
(statearr_10475[(16)] = inst_10350);

(statearr_10475[(7)] = inst_10351);

(statearr_10475[(17)] = inst_10348);

(statearr_10475[(18)] = inst_10349);

return statearr_10475;
})();
var statearr_10476_10527 = state_10424__$1;
(statearr_10476_10527[(2)] = null);

(statearr_10476_10527[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (18))){
var inst_10366 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
var statearr_10477_10528 = state_10424__$1;
(statearr_10477_10528[(2)] = inst_10366);

(statearr_10477_10528[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (37))){
var state_10424__$1 = state_10424;
var statearr_10478_10529 = state_10424__$1;
(statearr_10478_10529[(2)] = null);

(statearr_10478_10529[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10425 === (8))){
var inst_10326 = (state_10424[(8)]);
var inst_10344 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_10326);
var state_10424__$1 = state_10424;
var statearr_10479_10530 = state_10424__$1;
(statearr_10479_10530[(2)] = inst_10344);

(statearr_10479_10530[(1)] = (10));


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
});})(c__9423__auto___10484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9320__auto__,c__9423__auto___10484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9321__auto__ = null;
var cljs$core$async$mix_$_state_machine__9321__auto____0 = (function (){
var statearr_10480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10480[(0)] = cljs$core$async$mix_$_state_machine__9321__auto__);

(statearr_10480[(1)] = (1));

return statearr_10480;
});
var cljs$core$async$mix_$_state_machine__9321__auto____1 = (function (state_10424){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_10424);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e10481){if((e10481 instanceof Object)){
var ex__9324__auto__ = e10481;
var statearr_10482_10531 = state_10424;
(statearr_10482_10531[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10424);

return cljs.core.cst$kw$recur;
} else {
throw e10481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__10532 = state_10424;
state_10424 = G__10532;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9321__auto__ = function(state_10424){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9321__auto____1.call(this,state_10424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9321__auto____0;
cljs$core$async$mix_$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9321__auto____1;
return cljs$core$async$mix_$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___10484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9425__auto__ = (function (){var statearr_10483 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_10483[(6)] = c__9423__auto___10484);

return statearr_10483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___10484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__10534 = arguments.length;
switch (G__10534) {
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
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
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
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
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
var G__10538 = arguments.length;
switch (G__10538) {
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
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__10536_SHARP_){
if(cljs.core.truth_((p1__10536_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__10536_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__10536_SHARP_.call(null,topic)))){
return p1__10536_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10536_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10539 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10540){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10540 = meta10540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10541,meta10540__$1){
var self__ = this;
var _10541__$1 = this;
return (new cljs.core.async.t_cljs$core$async10539(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10540__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10541){
var self__ = this;
var _10541__$1 = this;
return self__.meta10540;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10539.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10539.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10539.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10539.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async10539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10539.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta10540], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10539";

cljs.core.async.t_cljs$core$async10539.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10539");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10539.
 */
cljs.core.async.__GT_t_cljs$core$async10539 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10540){
return (new cljs.core.async.t_cljs$core$async10539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10540));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10539(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9423__auto___10659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___10659,mults,ensure_mult,p){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___10659,mults,ensure_mult,p){
return (function (state_10613){
var state_val_10614 = (state_10613[(1)]);
if((state_val_10614 === (7))){
var inst_10609 = (state_10613[(2)]);
var state_10613__$1 = state_10613;
var statearr_10615_10660 = state_10613__$1;
(statearr_10615_10660[(2)] = inst_10609);

(statearr_10615_10660[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (20))){
var state_10613__$1 = state_10613;
var statearr_10616_10661 = state_10613__$1;
(statearr_10616_10661[(2)] = null);

(statearr_10616_10661[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (1))){
var state_10613__$1 = state_10613;
var statearr_10617_10662 = state_10613__$1;
(statearr_10617_10662[(2)] = null);

(statearr_10617_10662[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (24))){
var inst_10592 = (state_10613[(7)]);
var inst_10601 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_10592);
var state_10613__$1 = state_10613;
var statearr_10618_10663 = state_10613__$1;
(statearr_10618_10663[(2)] = inst_10601);

(statearr_10618_10663[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (4))){
var inst_10544 = (state_10613[(8)]);
var inst_10544__$1 = (state_10613[(2)]);
var inst_10545 = (inst_10544__$1 == null);
var state_10613__$1 = (function (){var statearr_10619 = state_10613;
(statearr_10619[(8)] = inst_10544__$1);

return statearr_10619;
})();
if(cljs.core.truth_(inst_10545)){
var statearr_10620_10664 = state_10613__$1;
(statearr_10620_10664[(1)] = (5));

} else {
var statearr_10621_10665 = state_10613__$1;
(statearr_10621_10665[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (15))){
var inst_10586 = (state_10613[(2)]);
var state_10613__$1 = state_10613;
var statearr_10622_10666 = state_10613__$1;
(statearr_10622_10666[(2)] = inst_10586);

(statearr_10622_10666[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (21))){
var inst_10606 = (state_10613[(2)]);
var state_10613__$1 = (function (){var statearr_10623 = state_10613;
(statearr_10623[(9)] = inst_10606);

return statearr_10623;
})();
var statearr_10624_10667 = state_10613__$1;
(statearr_10624_10667[(2)] = null);

(statearr_10624_10667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (13))){
var inst_10568 = (state_10613[(10)]);
var inst_10570 = cljs.core.chunked_seq_QMARK_(inst_10568);
var state_10613__$1 = state_10613;
if(inst_10570){
var statearr_10625_10668 = state_10613__$1;
(statearr_10625_10668[(1)] = (16));

} else {
var statearr_10626_10669 = state_10613__$1;
(statearr_10626_10669[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (22))){
var inst_10598 = (state_10613[(2)]);
var state_10613__$1 = state_10613;
if(cljs.core.truth_(inst_10598)){
var statearr_10627_10670 = state_10613__$1;
(statearr_10627_10670[(1)] = (23));

} else {
var statearr_10628_10671 = state_10613__$1;
(statearr_10628_10671[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (6))){
var inst_10544 = (state_10613[(8)]);
var inst_10592 = (state_10613[(7)]);
var inst_10594 = (state_10613[(11)]);
var inst_10592__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_10544) : topic_fn.call(null,inst_10544));
var inst_10593 = cljs.core.deref(mults);
var inst_10594__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10593,inst_10592__$1);
var state_10613__$1 = (function (){var statearr_10629 = state_10613;
(statearr_10629[(7)] = inst_10592__$1);

(statearr_10629[(11)] = inst_10594__$1);

return statearr_10629;
})();
if(cljs.core.truth_(inst_10594__$1)){
var statearr_10630_10672 = state_10613__$1;
(statearr_10630_10672[(1)] = (19));

} else {
var statearr_10631_10673 = state_10613__$1;
(statearr_10631_10673[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (25))){
var inst_10603 = (state_10613[(2)]);
var state_10613__$1 = state_10613;
var statearr_10632_10674 = state_10613__$1;
(statearr_10632_10674[(2)] = inst_10603);

(statearr_10632_10674[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (17))){
var inst_10568 = (state_10613[(10)]);
var inst_10577 = cljs.core.first(inst_10568);
var inst_10578 = cljs.core.async.muxch_STAR_(inst_10577);
var inst_10579 = cljs.core.async.close_BANG_(inst_10578);
var inst_10580 = cljs.core.next(inst_10568);
var inst_10554 = inst_10580;
var inst_10555 = null;
var inst_10556 = (0);
var inst_10557 = (0);
var state_10613__$1 = (function (){var statearr_10633 = state_10613;
(statearr_10633[(12)] = inst_10556);

(statearr_10633[(13)] = inst_10579);

(statearr_10633[(14)] = inst_10557);

(statearr_10633[(15)] = inst_10555);

(statearr_10633[(16)] = inst_10554);

return statearr_10633;
})();
var statearr_10634_10675 = state_10613__$1;
(statearr_10634_10675[(2)] = null);

(statearr_10634_10675[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (3))){
var inst_10611 = (state_10613[(2)]);
var state_10613__$1 = state_10613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10613__$1,inst_10611);
} else {
if((state_val_10614 === (12))){
var inst_10588 = (state_10613[(2)]);
var state_10613__$1 = state_10613;
var statearr_10635_10676 = state_10613__$1;
(statearr_10635_10676[(2)] = inst_10588);

(statearr_10635_10676[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (2))){
var state_10613__$1 = state_10613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10613__$1,(4),ch);
} else {
if((state_val_10614 === (23))){
var state_10613__$1 = state_10613;
var statearr_10636_10677 = state_10613__$1;
(statearr_10636_10677[(2)] = null);

(statearr_10636_10677[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (19))){
var inst_10544 = (state_10613[(8)]);
var inst_10594 = (state_10613[(11)]);
var inst_10596 = cljs.core.async.muxch_STAR_(inst_10594);
var state_10613__$1 = state_10613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10613__$1,(22),inst_10596,inst_10544);
} else {
if((state_val_10614 === (11))){
var inst_10568 = (state_10613[(10)]);
var inst_10554 = (state_10613[(16)]);
var inst_10568__$1 = cljs.core.seq(inst_10554);
var state_10613__$1 = (function (){var statearr_10637 = state_10613;
(statearr_10637[(10)] = inst_10568__$1);

return statearr_10637;
})();
if(inst_10568__$1){
var statearr_10638_10678 = state_10613__$1;
(statearr_10638_10678[(1)] = (13));

} else {
var statearr_10639_10679 = state_10613__$1;
(statearr_10639_10679[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (9))){
var inst_10590 = (state_10613[(2)]);
var state_10613__$1 = state_10613;
var statearr_10640_10680 = state_10613__$1;
(statearr_10640_10680[(2)] = inst_10590);

(statearr_10640_10680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (5))){
var inst_10551 = cljs.core.deref(mults);
var inst_10552 = cljs.core.vals(inst_10551);
var inst_10553 = cljs.core.seq(inst_10552);
var inst_10554 = inst_10553;
var inst_10555 = null;
var inst_10556 = (0);
var inst_10557 = (0);
var state_10613__$1 = (function (){var statearr_10641 = state_10613;
(statearr_10641[(12)] = inst_10556);

(statearr_10641[(14)] = inst_10557);

(statearr_10641[(15)] = inst_10555);

(statearr_10641[(16)] = inst_10554);

return statearr_10641;
})();
var statearr_10642_10681 = state_10613__$1;
(statearr_10642_10681[(2)] = null);

(statearr_10642_10681[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (14))){
var state_10613__$1 = state_10613;
var statearr_10646_10682 = state_10613__$1;
(statearr_10646_10682[(2)] = null);

(statearr_10646_10682[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (16))){
var inst_10568 = (state_10613[(10)]);
var inst_10572 = cljs.core.chunk_first(inst_10568);
var inst_10573 = cljs.core.chunk_rest(inst_10568);
var inst_10574 = cljs.core.count(inst_10572);
var inst_10554 = inst_10573;
var inst_10555 = inst_10572;
var inst_10556 = inst_10574;
var inst_10557 = (0);
var state_10613__$1 = (function (){var statearr_10647 = state_10613;
(statearr_10647[(12)] = inst_10556);

(statearr_10647[(14)] = inst_10557);

(statearr_10647[(15)] = inst_10555);

(statearr_10647[(16)] = inst_10554);

return statearr_10647;
})();
var statearr_10648_10683 = state_10613__$1;
(statearr_10648_10683[(2)] = null);

(statearr_10648_10683[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (10))){
var inst_10556 = (state_10613[(12)]);
var inst_10557 = (state_10613[(14)]);
var inst_10555 = (state_10613[(15)]);
var inst_10554 = (state_10613[(16)]);
var inst_10562 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10555,inst_10557);
var inst_10563 = cljs.core.async.muxch_STAR_(inst_10562);
var inst_10564 = cljs.core.async.close_BANG_(inst_10563);
var inst_10565 = (inst_10557 + (1));
var tmp10643 = inst_10556;
var tmp10644 = inst_10555;
var tmp10645 = inst_10554;
var inst_10554__$1 = tmp10645;
var inst_10555__$1 = tmp10644;
var inst_10556__$1 = tmp10643;
var inst_10557__$1 = inst_10565;
var state_10613__$1 = (function (){var statearr_10649 = state_10613;
(statearr_10649[(12)] = inst_10556__$1);

(statearr_10649[(17)] = inst_10564);

(statearr_10649[(14)] = inst_10557__$1);

(statearr_10649[(15)] = inst_10555__$1);

(statearr_10649[(16)] = inst_10554__$1);

return statearr_10649;
})();
var statearr_10650_10684 = state_10613__$1;
(statearr_10650_10684[(2)] = null);

(statearr_10650_10684[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (18))){
var inst_10583 = (state_10613[(2)]);
var state_10613__$1 = state_10613;
var statearr_10651_10685 = state_10613__$1;
(statearr_10651_10685[(2)] = inst_10583);

(statearr_10651_10685[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10614 === (8))){
var inst_10556 = (state_10613[(12)]);
var inst_10557 = (state_10613[(14)]);
var inst_10559 = (inst_10557 < inst_10556);
var inst_10560 = inst_10559;
var state_10613__$1 = state_10613;
if(cljs.core.truth_(inst_10560)){
var statearr_10652_10686 = state_10613__$1;
(statearr_10652_10686[(1)] = (10));

} else {
var statearr_10653_10687 = state_10613__$1;
(statearr_10653_10687[(1)] = (11));

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
});})(c__9423__auto___10659,mults,ensure_mult,p))
;
return ((function (switch__9320__auto__,c__9423__auto___10659,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_10654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10654[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_10654[(1)] = (1));

return statearr_10654;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_10613){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_10613);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e10655){if((e10655 instanceof Object)){
var ex__9324__auto__ = e10655;
var statearr_10656_10688 = state_10613;
(statearr_10656_10688[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10613);

return cljs.core.cst$kw$recur;
} else {
throw e10655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__10689 = state_10613;
state_10613 = G__10689;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_10613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_10613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___10659,mults,ensure_mult,p))
})();
var state__9425__auto__ = (function (){var statearr_10657 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_10657[(6)] = c__9423__auto___10659);

return statearr_10657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___10659,mults,ensure_mult,p))
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
var G__10691 = arguments.length;
switch (G__10691) {
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
var G__10694 = arguments.length;
switch (G__10694) {
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
var G__10697 = arguments.length;
switch (G__10697) {
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
var c__9423__auto___10764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___10764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___10764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10736){
var state_val_10737 = (state_10736[(1)]);
if((state_val_10737 === (7))){
var state_10736__$1 = state_10736;
var statearr_10738_10765 = state_10736__$1;
(statearr_10738_10765[(2)] = null);

(statearr_10738_10765[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (1))){
var state_10736__$1 = state_10736;
var statearr_10739_10766 = state_10736__$1;
(statearr_10739_10766[(2)] = null);

(statearr_10739_10766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (4))){
var inst_10700 = (state_10736[(7)]);
var inst_10702 = (inst_10700 < cnt);
var state_10736__$1 = state_10736;
if(cljs.core.truth_(inst_10702)){
var statearr_10740_10767 = state_10736__$1;
(statearr_10740_10767[(1)] = (6));

} else {
var statearr_10741_10768 = state_10736__$1;
(statearr_10741_10768[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (15))){
var inst_10732 = (state_10736[(2)]);
var state_10736__$1 = state_10736;
var statearr_10742_10769 = state_10736__$1;
(statearr_10742_10769[(2)] = inst_10732);

(statearr_10742_10769[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (13))){
var inst_10725 = cljs.core.async.close_BANG_(out);
var state_10736__$1 = state_10736;
var statearr_10743_10770 = state_10736__$1;
(statearr_10743_10770[(2)] = inst_10725);

(statearr_10743_10770[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (6))){
var state_10736__$1 = state_10736;
var statearr_10744_10771 = state_10736__$1;
(statearr_10744_10771[(2)] = null);

(statearr_10744_10771[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (3))){
var inst_10734 = (state_10736[(2)]);
var state_10736__$1 = state_10736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10736__$1,inst_10734);
} else {
if((state_val_10737 === (12))){
var inst_10722 = (state_10736[(8)]);
var inst_10722__$1 = (state_10736[(2)]);
var inst_10723 = cljs.core.some(cljs.core.nil_QMARK_,inst_10722__$1);
var state_10736__$1 = (function (){var statearr_10745 = state_10736;
(statearr_10745[(8)] = inst_10722__$1);

return statearr_10745;
})();
if(cljs.core.truth_(inst_10723)){
var statearr_10746_10772 = state_10736__$1;
(statearr_10746_10772[(1)] = (13));

} else {
var statearr_10747_10773 = state_10736__$1;
(statearr_10747_10773[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (2))){
var inst_10699 = cljs.core.reset_BANG_(dctr,cnt);
var inst_10700 = (0);
var state_10736__$1 = (function (){var statearr_10748 = state_10736;
(statearr_10748[(9)] = inst_10699);

(statearr_10748[(7)] = inst_10700);

return statearr_10748;
})();
var statearr_10749_10774 = state_10736__$1;
(statearr_10749_10774[(2)] = null);

(statearr_10749_10774[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (11))){
var inst_10700 = (state_10736[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_10736,(10),Object,null,(9));
var inst_10709 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_10700) : chs__$1.call(null,inst_10700));
var inst_10710 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_10700) : done.call(null,inst_10700));
var inst_10711 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_10709,inst_10710);
var state_10736__$1 = state_10736;
var statearr_10750_10775 = state_10736__$1;
(statearr_10750_10775[(2)] = inst_10711);


cljs.core.async.impl.ioc_helpers.process_exception(state_10736__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (9))){
var inst_10700 = (state_10736[(7)]);
var inst_10713 = (state_10736[(2)]);
var inst_10714 = (inst_10700 + (1));
var inst_10700__$1 = inst_10714;
var state_10736__$1 = (function (){var statearr_10751 = state_10736;
(statearr_10751[(10)] = inst_10713);

(statearr_10751[(7)] = inst_10700__$1);

return statearr_10751;
})();
var statearr_10752_10776 = state_10736__$1;
(statearr_10752_10776[(2)] = null);

(statearr_10752_10776[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (5))){
var inst_10720 = (state_10736[(2)]);
var state_10736__$1 = (function (){var statearr_10753 = state_10736;
(statearr_10753[(11)] = inst_10720);

return statearr_10753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10736__$1,(12),dchan);
} else {
if((state_val_10737 === (14))){
var inst_10722 = (state_10736[(8)]);
var inst_10727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_10722);
var state_10736__$1 = state_10736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10736__$1,(16),out,inst_10727);
} else {
if((state_val_10737 === (16))){
var inst_10729 = (state_10736[(2)]);
var state_10736__$1 = (function (){var statearr_10754 = state_10736;
(statearr_10754[(12)] = inst_10729);

return statearr_10754;
})();
var statearr_10755_10777 = state_10736__$1;
(statearr_10755_10777[(2)] = null);

(statearr_10755_10777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (10))){
var inst_10704 = (state_10736[(2)]);
var inst_10705 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_10736__$1 = (function (){var statearr_10756 = state_10736;
(statearr_10756[(13)] = inst_10704);

return statearr_10756;
})();
var statearr_10757_10778 = state_10736__$1;
(statearr_10757_10778[(2)] = inst_10705);


cljs.core.async.impl.ioc_helpers.process_exception(state_10736__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_10737 === (8))){
var inst_10718 = (state_10736[(2)]);
var state_10736__$1 = state_10736;
var statearr_10758_10779 = state_10736__$1;
(statearr_10758_10779[(2)] = inst_10718);

(statearr_10758_10779[(1)] = (5));


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
});})(c__9423__auto___10764,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9320__auto__,c__9423__auto___10764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_10759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10759[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_10759[(1)] = (1));

return statearr_10759;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_10736){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_10736);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e10760){if((e10760 instanceof Object)){
var ex__9324__auto__ = e10760;
var statearr_10761_10780 = state_10736;
(statearr_10761_10780[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10736);

return cljs.core.cst$kw$recur;
} else {
throw e10760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__10781 = state_10736;
state_10736 = G__10781;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_10736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_10736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___10764,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9425__auto__ = (function (){var statearr_10762 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_10762[(6)] = c__9423__auto___10764);

return statearr_10762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___10764,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__10784 = arguments.length;
switch (G__10784) {
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
var c__9423__auto___10838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___10838,out){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___10838,out){
return (function (state_10816){
var state_val_10817 = (state_10816[(1)]);
if((state_val_10817 === (7))){
var inst_10795 = (state_10816[(7)]);
var inst_10796 = (state_10816[(8)]);
var inst_10795__$1 = (state_10816[(2)]);
var inst_10796__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10795__$1,(0),null);
var inst_10797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10795__$1,(1),null);
var inst_10798 = (inst_10796__$1 == null);
var state_10816__$1 = (function (){var statearr_10818 = state_10816;
(statearr_10818[(9)] = inst_10797);

(statearr_10818[(7)] = inst_10795__$1);

(statearr_10818[(8)] = inst_10796__$1);

return statearr_10818;
})();
if(cljs.core.truth_(inst_10798)){
var statearr_10819_10839 = state_10816__$1;
(statearr_10819_10839[(1)] = (8));

} else {
var statearr_10820_10840 = state_10816__$1;
(statearr_10820_10840[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10817 === (1))){
var inst_10785 = cljs.core.vec(chs);
var inst_10786 = inst_10785;
var state_10816__$1 = (function (){var statearr_10821 = state_10816;
(statearr_10821[(10)] = inst_10786);

return statearr_10821;
})();
var statearr_10822_10841 = state_10816__$1;
(statearr_10822_10841[(2)] = null);

(statearr_10822_10841[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10817 === (4))){
var inst_10786 = (state_10816[(10)]);
var state_10816__$1 = state_10816;
return cljs.core.async.ioc_alts_BANG_(state_10816__$1,(7),inst_10786);
} else {
if((state_val_10817 === (6))){
var inst_10812 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
var statearr_10823_10842 = state_10816__$1;
(statearr_10823_10842[(2)] = inst_10812);

(statearr_10823_10842[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10817 === (3))){
var inst_10814 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10816__$1,inst_10814);
} else {
if((state_val_10817 === (2))){
var inst_10786 = (state_10816[(10)]);
var inst_10788 = cljs.core.count(inst_10786);
var inst_10789 = (inst_10788 > (0));
var state_10816__$1 = state_10816;
if(cljs.core.truth_(inst_10789)){
var statearr_10825_10843 = state_10816__$1;
(statearr_10825_10843[(1)] = (4));

} else {
var statearr_10826_10844 = state_10816__$1;
(statearr_10826_10844[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10817 === (11))){
var inst_10786 = (state_10816[(10)]);
var inst_10805 = (state_10816[(2)]);
var tmp10824 = inst_10786;
var inst_10786__$1 = tmp10824;
var state_10816__$1 = (function (){var statearr_10827 = state_10816;
(statearr_10827[(10)] = inst_10786__$1);

(statearr_10827[(11)] = inst_10805);

return statearr_10827;
})();
var statearr_10828_10845 = state_10816__$1;
(statearr_10828_10845[(2)] = null);

(statearr_10828_10845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10817 === (9))){
var inst_10796 = (state_10816[(8)]);
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10816__$1,(11),out,inst_10796);
} else {
if((state_val_10817 === (5))){
var inst_10810 = cljs.core.async.close_BANG_(out);
var state_10816__$1 = state_10816;
var statearr_10829_10846 = state_10816__$1;
(statearr_10829_10846[(2)] = inst_10810);

(statearr_10829_10846[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10817 === (10))){
var inst_10808 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
var statearr_10830_10847 = state_10816__$1;
(statearr_10830_10847[(2)] = inst_10808);

(statearr_10830_10847[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10817 === (8))){
var inst_10786 = (state_10816[(10)]);
var inst_10797 = (state_10816[(9)]);
var inst_10795 = (state_10816[(7)]);
var inst_10796 = (state_10816[(8)]);
var inst_10800 = (function (){var cs = inst_10786;
var vec__10791 = inst_10795;
var v = inst_10796;
var c = inst_10797;
return ((function (cs,vec__10791,v,c,inst_10786,inst_10797,inst_10795,inst_10796,state_val_10817,c__9423__auto___10838,out){
return (function (p1__10782_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__10782_SHARP_);
});
;})(cs,vec__10791,v,c,inst_10786,inst_10797,inst_10795,inst_10796,state_val_10817,c__9423__auto___10838,out))
})();
var inst_10801 = cljs.core.filterv(inst_10800,inst_10786);
var inst_10786__$1 = inst_10801;
var state_10816__$1 = (function (){var statearr_10831 = state_10816;
(statearr_10831[(10)] = inst_10786__$1);

return statearr_10831;
})();
var statearr_10832_10848 = state_10816__$1;
(statearr_10832_10848[(2)] = null);

(statearr_10832_10848[(1)] = (2));


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
});})(c__9423__auto___10838,out))
;
return ((function (switch__9320__auto__,c__9423__auto___10838,out){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_10833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10833[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_10833[(1)] = (1));

return statearr_10833;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_10816){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_10816);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e10834){if((e10834 instanceof Object)){
var ex__9324__auto__ = e10834;
var statearr_10835_10849 = state_10816;
(statearr_10835_10849[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10816);

return cljs.core.cst$kw$recur;
} else {
throw e10834;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__10850 = state_10816;
state_10816 = G__10850;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_10816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_10816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___10838,out))
})();
var state__9425__auto__ = (function (){var statearr_10836 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_10836[(6)] = c__9423__auto___10838);

return statearr_10836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___10838,out))
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
var G__10852 = arguments.length;
switch (G__10852) {
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
var c__9423__auto___10897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___10897,out){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___10897,out){
return (function (state_10876){
var state_val_10877 = (state_10876[(1)]);
if((state_val_10877 === (7))){
var inst_10858 = (state_10876[(7)]);
var inst_10858__$1 = (state_10876[(2)]);
var inst_10859 = (inst_10858__$1 == null);
var inst_10860 = cljs.core.not(inst_10859);
var state_10876__$1 = (function (){var statearr_10878 = state_10876;
(statearr_10878[(7)] = inst_10858__$1);

return statearr_10878;
})();
if(inst_10860){
var statearr_10879_10898 = state_10876__$1;
(statearr_10879_10898[(1)] = (8));

} else {
var statearr_10880_10899 = state_10876__$1;
(statearr_10880_10899[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10877 === (1))){
var inst_10853 = (0);
var state_10876__$1 = (function (){var statearr_10881 = state_10876;
(statearr_10881[(8)] = inst_10853);

return statearr_10881;
})();
var statearr_10882_10900 = state_10876__$1;
(statearr_10882_10900[(2)] = null);

(statearr_10882_10900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10877 === (4))){
var state_10876__$1 = state_10876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10876__$1,(7),ch);
} else {
if((state_val_10877 === (6))){
var inst_10871 = (state_10876[(2)]);
var state_10876__$1 = state_10876;
var statearr_10883_10901 = state_10876__$1;
(statearr_10883_10901[(2)] = inst_10871);

(statearr_10883_10901[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10877 === (3))){
var inst_10873 = (state_10876[(2)]);
var inst_10874 = cljs.core.async.close_BANG_(out);
var state_10876__$1 = (function (){var statearr_10884 = state_10876;
(statearr_10884[(9)] = inst_10873);

return statearr_10884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10876__$1,inst_10874);
} else {
if((state_val_10877 === (2))){
var inst_10853 = (state_10876[(8)]);
var inst_10855 = (inst_10853 < n);
var state_10876__$1 = state_10876;
if(cljs.core.truth_(inst_10855)){
var statearr_10885_10902 = state_10876__$1;
(statearr_10885_10902[(1)] = (4));

} else {
var statearr_10886_10903 = state_10876__$1;
(statearr_10886_10903[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10877 === (11))){
var inst_10853 = (state_10876[(8)]);
var inst_10863 = (state_10876[(2)]);
var inst_10864 = (inst_10853 + (1));
var inst_10853__$1 = inst_10864;
var state_10876__$1 = (function (){var statearr_10887 = state_10876;
(statearr_10887[(8)] = inst_10853__$1);

(statearr_10887[(10)] = inst_10863);

return statearr_10887;
})();
var statearr_10888_10904 = state_10876__$1;
(statearr_10888_10904[(2)] = null);

(statearr_10888_10904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10877 === (9))){
var state_10876__$1 = state_10876;
var statearr_10889_10905 = state_10876__$1;
(statearr_10889_10905[(2)] = null);

(statearr_10889_10905[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10877 === (5))){
var state_10876__$1 = state_10876;
var statearr_10890_10906 = state_10876__$1;
(statearr_10890_10906[(2)] = null);

(statearr_10890_10906[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10877 === (10))){
var inst_10868 = (state_10876[(2)]);
var state_10876__$1 = state_10876;
var statearr_10891_10907 = state_10876__$1;
(statearr_10891_10907[(2)] = inst_10868);

(statearr_10891_10907[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10877 === (8))){
var inst_10858 = (state_10876[(7)]);
var state_10876__$1 = state_10876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10876__$1,(11),out,inst_10858);
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
});})(c__9423__auto___10897,out))
;
return ((function (switch__9320__auto__,c__9423__auto___10897,out){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_10892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10892[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_10892[(1)] = (1));

return statearr_10892;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_10876){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_10876);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e10893){if((e10893 instanceof Object)){
var ex__9324__auto__ = e10893;
var statearr_10894_10908 = state_10876;
(statearr_10894_10908[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10876);

return cljs.core.cst$kw$recur;
} else {
throw e10893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__10909 = state_10876;
state_10876 = G__10909;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_10876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_10876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___10897,out))
})();
var state__9425__auto__ = (function (){var statearr_10895 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_10895[(6)] = c__9423__auto___10897);

return statearr_10895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___10897,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10911 = (function (f,ch,meta10912){
this.f = f;
this.ch = ch;
this.meta10912 = meta10912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10913,meta10912__$1){
var self__ = this;
var _10913__$1 = this;
return (new cljs.core.async.t_cljs$core$async10911(self__.f,self__.ch,meta10912__$1));
});

cljs.core.async.t_cljs$core$async10911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10913){
var self__ = this;
var _10913__$1 = this;
return self__.meta10912;
});

cljs.core.async.t_cljs$core$async10911.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10911.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async10911.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10914 = (function (f,ch,meta10912,_,fn1,meta10915){
this.f = f;
this.ch = ch;
this.meta10912 = meta10912;
this._ = _;
this.fn1 = fn1;
this.meta10915 = meta10915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10916,meta10915__$1){
var self__ = this;
var _10916__$1 = this;
return (new cljs.core.async.t_cljs$core$async10914(self__.f,self__.ch,self__.meta10912,self__._,self__.fn1,meta10915__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10916){
var self__ = this;
var _10916__$1 = this;
return self__.meta10915;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10914.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10914.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10910_SHARP_){
var G__10917 = (((p1__10910_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10910_SHARP_) : self__.f.call(null,p1__10910_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__10917) : f1.call(null,G__10917));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10914.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10912,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async10911], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta10915], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10914";

cljs.core.async.t_cljs$core$async10914.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10914");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10914.
 */
cljs.core.async.__GT_t_cljs$core$async10914 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10914(f__$1,ch__$1,meta10912__$1,___$2,fn1__$1,meta10915){
return (new cljs.core.async.t_cljs$core$async10914(f__$1,ch__$1,meta10912__$1,___$2,fn1__$1,meta10915));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10914(self__.f,self__.ch,self__.meta10912,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__10918 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__10918) : self__.f.call(null,G__10918));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10911.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10912], null);
});

cljs.core.async.t_cljs$core$async10911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10911";

cljs.core.async.t_cljs$core$async10911.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10911");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10911.
 */
cljs.core.async.__GT_t_cljs$core$async10911 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10911(f__$1,ch__$1,meta10912){
return (new cljs.core.async.t_cljs$core$async10911(f__$1,ch__$1,meta10912));
});

}

return (new cljs.core.async.t_cljs$core$async10911(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10919 = (function (f,ch,meta10920){
this.f = f;
this.ch = ch;
this.meta10920 = meta10920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10921,meta10920__$1){
var self__ = this;
var _10921__$1 = this;
return (new cljs.core.async.t_cljs$core$async10919(self__.f,self__.ch,meta10920__$1));
});

cljs.core.async.t_cljs$core$async10919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10921){
var self__ = this;
var _10921__$1 = this;
return self__.meta10920;
});

cljs.core.async.t_cljs$core$async10919.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10919.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10919.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async10919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10920], null);
});

cljs.core.async.t_cljs$core$async10919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10919";

cljs.core.async.t_cljs$core$async10919.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10919");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10919.
 */
cljs.core.async.__GT_t_cljs$core$async10919 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10919(f__$1,ch__$1,meta10920){
return (new cljs.core.async.t_cljs$core$async10919(f__$1,ch__$1,meta10920));
});

}

return (new cljs.core.async.t_cljs$core$async10919(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10922 = (function (p,ch,meta10923){
this.p = p;
this.ch = ch;
this.meta10923 = meta10923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10924,meta10923__$1){
var self__ = this;
var _10924__$1 = this;
return (new cljs.core.async.t_cljs$core$async10922(self__.p,self__.ch,meta10923__$1));
});

cljs.core.async.t_cljs$core$async10922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10924){
var self__ = this;
var _10924__$1 = this;
return self__.meta10923;
});

cljs.core.async.t_cljs$core$async10922.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10922.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async10922.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10922.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10923], null);
});

cljs.core.async.t_cljs$core$async10922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10922";

cljs.core.async.t_cljs$core$async10922.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10922");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10922.
 */
cljs.core.async.__GT_t_cljs$core$async10922 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10922(p__$1,ch__$1,meta10923){
return (new cljs.core.async.t_cljs$core$async10922(p__$1,ch__$1,meta10923));
});

}

return (new cljs.core.async.t_cljs$core$async10922(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10926 = arguments.length;
switch (G__10926) {
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
var c__9423__auto___10966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___10966,out){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___10966,out){
return (function (state_10947){
var state_val_10948 = (state_10947[(1)]);
if((state_val_10948 === (7))){
var inst_10943 = (state_10947[(2)]);
var state_10947__$1 = state_10947;
var statearr_10949_10967 = state_10947__$1;
(statearr_10949_10967[(2)] = inst_10943);

(statearr_10949_10967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10948 === (1))){
var state_10947__$1 = state_10947;
var statearr_10950_10968 = state_10947__$1;
(statearr_10950_10968[(2)] = null);

(statearr_10950_10968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10948 === (4))){
var inst_10929 = (state_10947[(7)]);
var inst_10929__$1 = (state_10947[(2)]);
var inst_10930 = (inst_10929__$1 == null);
var state_10947__$1 = (function (){var statearr_10951 = state_10947;
(statearr_10951[(7)] = inst_10929__$1);

return statearr_10951;
})();
if(cljs.core.truth_(inst_10930)){
var statearr_10952_10969 = state_10947__$1;
(statearr_10952_10969[(1)] = (5));

} else {
var statearr_10953_10970 = state_10947__$1;
(statearr_10953_10970[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10948 === (6))){
var inst_10929 = (state_10947[(7)]);
var inst_10934 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10929) : p.call(null,inst_10929));
var state_10947__$1 = state_10947;
if(cljs.core.truth_(inst_10934)){
var statearr_10954_10971 = state_10947__$1;
(statearr_10954_10971[(1)] = (8));

} else {
var statearr_10955_10972 = state_10947__$1;
(statearr_10955_10972[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10948 === (3))){
var inst_10945 = (state_10947[(2)]);
var state_10947__$1 = state_10947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10947__$1,inst_10945);
} else {
if((state_val_10948 === (2))){
var state_10947__$1 = state_10947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10947__$1,(4),ch);
} else {
if((state_val_10948 === (11))){
var inst_10937 = (state_10947[(2)]);
var state_10947__$1 = state_10947;
var statearr_10956_10973 = state_10947__$1;
(statearr_10956_10973[(2)] = inst_10937);

(statearr_10956_10973[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10948 === (9))){
var state_10947__$1 = state_10947;
var statearr_10957_10974 = state_10947__$1;
(statearr_10957_10974[(2)] = null);

(statearr_10957_10974[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10948 === (5))){
var inst_10932 = cljs.core.async.close_BANG_(out);
var state_10947__$1 = state_10947;
var statearr_10958_10975 = state_10947__$1;
(statearr_10958_10975[(2)] = inst_10932);

(statearr_10958_10975[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10948 === (10))){
var inst_10940 = (state_10947[(2)]);
var state_10947__$1 = (function (){var statearr_10959 = state_10947;
(statearr_10959[(8)] = inst_10940);

return statearr_10959;
})();
var statearr_10960_10976 = state_10947__$1;
(statearr_10960_10976[(2)] = null);

(statearr_10960_10976[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10948 === (8))){
var inst_10929 = (state_10947[(7)]);
var state_10947__$1 = state_10947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10947__$1,(11),out,inst_10929);
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
});})(c__9423__auto___10966,out))
;
return ((function (switch__9320__auto__,c__9423__auto___10966,out){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_10961 = [null,null,null,null,null,null,null,null,null];
(statearr_10961[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_10961[(1)] = (1));

return statearr_10961;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_10947){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_10947);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e10962){if((e10962 instanceof Object)){
var ex__9324__auto__ = e10962;
var statearr_10963_10977 = state_10947;
(statearr_10963_10977[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10947);

return cljs.core.cst$kw$recur;
} else {
throw e10962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__10978 = state_10947;
state_10947 = G__10978;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_10947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_10947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___10966,out))
})();
var state__9425__auto__ = (function (){var statearr_10964 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_10964[(6)] = c__9423__auto___10966);

return statearr_10964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___10966,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__10980 = arguments.length;
switch (G__10980) {
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
var c__9423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto__){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto__){
return (function (state_11043){
var state_val_11044 = (state_11043[(1)]);
if((state_val_11044 === (7))){
var inst_11039 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11045_11083 = state_11043__$1;
(statearr_11045_11083[(2)] = inst_11039);

(statearr_11045_11083[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (20))){
var inst_11009 = (state_11043[(7)]);
var inst_11020 = (state_11043[(2)]);
var inst_11021 = cljs.core.next(inst_11009);
var inst_10995 = inst_11021;
var inst_10996 = null;
var inst_10997 = (0);
var inst_10998 = (0);
var state_11043__$1 = (function (){var statearr_11046 = state_11043;
(statearr_11046[(8)] = inst_10997);

(statearr_11046[(9)] = inst_10996);

(statearr_11046[(10)] = inst_10998);

(statearr_11046[(11)] = inst_11020);

(statearr_11046[(12)] = inst_10995);

return statearr_11046;
})();
var statearr_11047_11084 = state_11043__$1;
(statearr_11047_11084[(2)] = null);

(statearr_11047_11084[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (1))){
var state_11043__$1 = state_11043;
var statearr_11048_11085 = state_11043__$1;
(statearr_11048_11085[(2)] = null);

(statearr_11048_11085[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (4))){
var inst_10984 = (state_11043[(13)]);
var inst_10984__$1 = (state_11043[(2)]);
var inst_10985 = (inst_10984__$1 == null);
var state_11043__$1 = (function (){var statearr_11049 = state_11043;
(statearr_11049[(13)] = inst_10984__$1);

return statearr_11049;
})();
if(cljs.core.truth_(inst_10985)){
var statearr_11050_11086 = state_11043__$1;
(statearr_11050_11086[(1)] = (5));

} else {
var statearr_11051_11087 = state_11043__$1;
(statearr_11051_11087[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (15))){
var state_11043__$1 = state_11043;
var statearr_11055_11088 = state_11043__$1;
(statearr_11055_11088[(2)] = null);

(statearr_11055_11088[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (21))){
var state_11043__$1 = state_11043;
var statearr_11056_11089 = state_11043__$1;
(statearr_11056_11089[(2)] = null);

(statearr_11056_11089[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (13))){
var inst_10997 = (state_11043[(8)]);
var inst_10996 = (state_11043[(9)]);
var inst_10998 = (state_11043[(10)]);
var inst_10995 = (state_11043[(12)]);
var inst_11005 = (state_11043[(2)]);
var inst_11006 = (inst_10998 + (1));
var tmp11052 = inst_10997;
var tmp11053 = inst_10996;
var tmp11054 = inst_10995;
var inst_10995__$1 = tmp11054;
var inst_10996__$1 = tmp11053;
var inst_10997__$1 = tmp11052;
var inst_10998__$1 = inst_11006;
var state_11043__$1 = (function (){var statearr_11057 = state_11043;
(statearr_11057[(8)] = inst_10997__$1);

(statearr_11057[(9)] = inst_10996__$1);

(statearr_11057[(10)] = inst_10998__$1);

(statearr_11057[(12)] = inst_10995__$1);

(statearr_11057[(14)] = inst_11005);

return statearr_11057;
})();
var statearr_11058_11090 = state_11043__$1;
(statearr_11058_11090[(2)] = null);

(statearr_11058_11090[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (22))){
var state_11043__$1 = state_11043;
var statearr_11059_11091 = state_11043__$1;
(statearr_11059_11091[(2)] = null);

(statearr_11059_11091[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (6))){
var inst_10984 = (state_11043[(13)]);
var inst_10993 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10984) : f.call(null,inst_10984));
var inst_10994 = cljs.core.seq(inst_10993);
var inst_10995 = inst_10994;
var inst_10996 = null;
var inst_10997 = (0);
var inst_10998 = (0);
var state_11043__$1 = (function (){var statearr_11060 = state_11043;
(statearr_11060[(8)] = inst_10997);

(statearr_11060[(9)] = inst_10996);

(statearr_11060[(10)] = inst_10998);

(statearr_11060[(12)] = inst_10995);

return statearr_11060;
})();
var statearr_11061_11092 = state_11043__$1;
(statearr_11061_11092[(2)] = null);

(statearr_11061_11092[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (17))){
var inst_11009 = (state_11043[(7)]);
var inst_11013 = cljs.core.chunk_first(inst_11009);
var inst_11014 = cljs.core.chunk_rest(inst_11009);
var inst_11015 = cljs.core.count(inst_11013);
var inst_10995 = inst_11014;
var inst_10996 = inst_11013;
var inst_10997 = inst_11015;
var inst_10998 = (0);
var state_11043__$1 = (function (){var statearr_11062 = state_11043;
(statearr_11062[(8)] = inst_10997);

(statearr_11062[(9)] = inst_10996);

(statearr_11062[(10)] = inst_10998);

(statearr_11062[(12)] = inst_10995);

return statearr_11062;
})();
var statearr_11063_11093 = state_11043__$1;
(statearr_11063_11093[(2)] = null);

(statearr_11063_11093[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (3))){
var inst_11041 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11043__$1,inst_11041);
} else {
if((state_val_11044 === (12))){
var inst_11029 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11064_11094 = state_11043__$1;
(statearr_11064_11094[(2)] = inst_11029);

(statearr_11064_11094[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (2))){
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11043__$1,(4),in$);
} else {
if((state_val_11044 === (23))){
var inst_11037 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11065_11095 = state_11043__$1;
(statearr_11065_11095[(2)] = inst_11037);

(statearr_11065_11095[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (19))){
var inst_11024 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11066_11096 = state_11043__$1;
(statearr_11066_11096[(2)] = inst_11024);

(statearr_11066_11096[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (11))){
var inst_11009 = (state_11043[(7)]);
var inst_10995 = (state_11043[(12)]);
var inst_11009__$1 = cljs.core.seq(inst_10995);
var state_11043__$1 = (function (){var statearr_11067 = state_11043;
(statearr_11067[(7)] = inst_11009__$1);

return statearr_11067;
})();
if(inst_11009__$1){
var statearr_11068_11097 = state_11043__$1;
(statearr_11068_11097[(1)] = (14));

} else {
var statearr_11069_11098 = state_11043__$1;
(statearr_11069_11098[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (9))){
var inst_11031 = (state_11043[(2)]);
var inst_11032 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_11043__$1 = (function (){var statearr_11070 = state_11043;
(statearr_11070[(15)] = inst_11031);

return statearr_11070;
})();
if(cljs.core.truth_(inst_11032)){
var statearr_11071_11099 = state_11043__$1;
(statearr_11071_11099[(1)] = (21));

} else {
var statearr_11072_11100 = state_11043__$1;
(statearr_11072_11100[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (5))){
var inst_10987 = cljs.core.async.close_BANG_(out);
var state_11043__$1 = state_11043;
var statearr_11073_11101 = state_11043__$1;
(statearr_11073_11101[(2)] = inst_10987);

(statearr_11073_11101[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (14))){
var inst_11009 = (state_11043[(7)]);
var inst_11011 = cljs.core.chunked_seq_QMARK_(inst_11009);
var state_11043__$1 = state_11043;
if(inst_11011){
var statearr_11074_11102 = state_11043__$1;
(statearr_11074_11102[(1)] = (17));

} else {
var statearr_11075_11103 = state_11043__$1;
(statearr_11075_11103[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (16))){
var inst_11027 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11076_11104 = state_11043__$1;
(statearr_11076_11104[(2)] = inst_11027);

(statearr_11076_11104[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11044 === (10))){
var inst_10996 = (state_11043[(9)]);
var inst_10998 = (state_11043[(10)]);
var inst_11003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10996,inst_10998);
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11043__$1,(13),out,inst_11003);
} else {
if((state_val_11044 === (18))){
var inst_11009 = (state_11043[(7)]);
var inst_11018 = cljs.core.first(inst_11009);
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11043__$1,(20),out,inst_11018);
} else {
if((state_val_11044 === (8))){
var inst_10997 = (state_11043[(8)]);
var inst_10998 = (state_11043[(10)]);
var inst_11000 = (inst_10998 < inst_10997);
var inst_11001 = inst_11000;
var state_11043__$1 = state_11043;
if(cljs.core.truth_(inst_11001)){
var statearr_11077_11105 = state_11043__$1;
(statearr_11077_11105[(1)] = (10));

} else {
var statearr_11078_11106 = state_11043__$1;
(statearr_11078_11106[(1)] = (11));

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
});})(c__9423__auto__))
;
return ((function (switch__9320__auto__,c__9423__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9321__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9321__auto____0 = (function (){
var statearr_11079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11079[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9321__auto__);

(statearr_11079[(1)] = (1));

return statearr_11079;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9321__auto____1 = (function (state_11043){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11043);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11080){if((e11080 instanceof Object)){
var ex__9324__auto__ = e11080;
var statearr_11081_11107 = state_11043;
(statearr_11081_11107[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11043);

return cljs.core.cst$kw$recur;
} else {
throw e11080;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11108 = state_11043;
state_11043 = G__11108;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9321__auto__ = function(state_11043){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9321__auto____1.call(this,state_11043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9321__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9321__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto__))
})();
var state__9425__auto__ = (function (){var statearr_11082 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11082[(6)] = c__9423__auto__);

return statearr_11082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto__))
);

return c__9423__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11110 = arguments.length;
switch (G__11110) {
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
var G__11113 = arguments.length;
switch (G__11113) {
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
var G__11116 = arguments.length;
switch (G__11116) {
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
var c__9423__auto___11163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___11163,out){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___11163,out){
return (function (state_11140){
var state_val_11141 = (state_11140[(1)]);
if((state_val_11141 === (7))){
var inst_11135 = (state_11140[(2)]);
var state_11140__$1 = state_11140;
var statearr_11142_11164 = state_11140__$1;
(statearr_11142_11164[(2)] = inst_11135);

(statearr_11142_11164[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11141 === (1))){
var inst_11117 = null;
var state_11140__$1 = (function (){var statearr_11143 = state_11140;
(statearr_11143[(7)] = inst_11117);

return statearr_11143;
})();
var statearr_11144_11165 = state_11140__$1;
(statearr_11144_11165[(2)] = null);

(statearr_11144_11165[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11141 === (4))){
var inst_11120 = (state_11140[(8)]);
var inst_11120__$1 = (state_11140[(2)]);
var inst_11121 = (inst_11120__$1 == null);
var inst_11122 = cljs.core.not(inst_11121);
var state_11140__$1 = (function (){var statearr_11145 = state_11140;
(statearr_11145[(8)] = inst_11120__$1);

return statearr_11145;
})();
if(inst_11122){
var statearr_11146_11166 = state_11140__$1;
(statearr_11146_11166[(1)] = (5));

} else {
var statearr_11147_11167 = state_11140__$1;
(statearr_11147_11167[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11141 === (6))){
var state_11140__$1 = state_11140;
var statearr_11148_11168 = state_11140__$1;
(statearr_11148_11168[(2)] = null);

(statearr_11148_11168[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11141 === (3))){
var inst_11137 = (state_11140[(2)]);
var inst_11138 = cljs.core.async.close_BANG_(out);
var state_11140__$1 = (function (){var statearr_11149 = state_11140;
(statearr_11149[(9)] = inst_11137);

return statearr_11149;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11140__$1,inst_11138);
} else {
if((state_val_11141 === (2))){
var state_11140__$1 = state_11140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11140__$1,(4),ch);
} else {
if((state_val_11141 === (11))){
var inst_11120 = (state_11140[(8)]);
var inst_11129 = (state_11140[(2)]);
var inst_11117 = inst_11120;
var state_11140__$1 = (function (){var statearr_11150 = state_11140;
(statearr_11150[(10)] = inst_11129);

(statearr_11150[(7)] = inst_11117);

return statearr_11150;
})();
var statearr_11151_11169 = state_11140__$1;
(statearr_11151_11169[(2)] = null);

(statearr_11151_11169[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11141 === (9))){
var inst_11120 = (state_11140[(8)]);
var state_11140__$1 = state_11140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11140__$1,(11),out,inst_11120);
} else {
if((state_val_11141 === (5))){
var inst_11117 = (state_11140[(7)]);
var inst_11120 = (state_11140[(8)]);
var inst_11124 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11120,inst_11117);
var state_11140__$1 = state_11140;
if(inst_11124){
var statearr_11153_11170 = state_11140__$1;
(statearr_11153_11170[(1)] = (8));

} else {
var statearr_11154_11171 = state_11140__$1;
(statearr_11154_11171[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11141 === (10))){
var inst_11132 = (state_11140[(2)]);
var state_11140__$1 = state_11140;
var statearr_11155_11172 = state_11140__$1;
(statearr_11155_11172[(2)] = inst_11132);

(statearr_11155_11172[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11141 === (8))){
var inst_11117 = (state_11140[(7)]);
var tmp11152 = inst_11117;
var inst_11117__$1 = tmp11152;
var state_11140__$1 = (function (){var statearr_11156 = state_11140;
(statearr_11156[(7)] = inst_11117__$1);

return statearr_11156;
})();
var statearr_11157_11173 = state_11140__$1;
(statearr_11157_11173[(2)] = null);

(statearr_11157_11173[(1)] = (2));


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
});})(c__9423__auto___11163,out))
;
return ((function (switch__9320__auto__,c__9423__auto___11163,out){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_11158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11158[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_11158[(1)] = (1));

return statearr_11158;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_11140){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11140);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11159){if((e11159 instanceof Object)){
var ex__9324__auto__ = e11159;
var statearr_11160_11174 = state_11140;
(statearr_11160_11174[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11140);

return cljs.core.cst$kw$recur;
} else {
throw e11159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11175 = state_11140;
state_11140 = G__11175;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_11140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_11140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___11163,out))
})();
var state__9425__auto__ = (function (){var statearr_11161 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11161[(6)] = c__9423__auto___11163);

return statearr_11161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___11163,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11177 = arguments.length;
switch (G__11177) {
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
var c__9423__auto___11243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___11243,out){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___11243,out){
return (function (state_11215){
var state_val_11216 = (state_11215[(1)]);
if((state_val_11216 === (7))){
var inst_11211 = (state_11215[(2)]);
var state_11215__$1 = state_11215;
var statearr_11217_11244 = state_11215__$1;
(statearr_11217_11244[(2)] = inst_11211);

(statearr_11217_11244[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (1))){
var inst_11178 = (new Array(n));
var inst_11179 = inst_11178;
var inst_11180 = (0);
var state_11215__$1 = (function (){var statearr_11218 = state_11215;
(statearr_11218[(7)] = inst_11179);

(statearr_11218[(8)] = inst_11180);

return statearr_11218;
})();
var statearr_11219_11245 = state_11215__$1;
(statearr_11219_11245[(2)] = null);

(statearr_11219_11245[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (4))){
var inst_11183 = (state_11215[(9)]);
var inst_11183__$1 = (state_11215[(2)]);
var inst_11184 = (inst_11183__$1 == null);
var inst_11185 = cljs.core.not(inst_11184);
var state_11215__$1 = (function (){var statearr_11220 = state_11215;
(statearr_11220[(9)] = inst_11183__$1);

return statearr_11220;
})();
if(inst_11185){
var statearr_11221_11246 = state_11215__$1;
(statearr_11221_11246[(1)] = (5));

} else {
var statearr_11222_11247 = state_11215__$1;
(statearr_11222_11247[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (15))){
var inst_11205 = (state_11215[(2)]);
var state_11215__$1 = state_11215;
var statearr_11223_11248 = state_11215__$1;
(statearr_11223_11248[(2)] = inst_11205);

(statearr_11223_11248[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (13))){
var state_11215__$1 = state_11215;
var statearr_11224_11249 = state_11215__$1;
(statearr_11224_11249[(2)] = null);

(statearr_11224_11249[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (6))){
var inst_11180 = (state_11215[(8)]);
var inst_11201 = (inst_11180 > (0));
var state_11215__$1 = state_11215;
if(cljs.core.truth_(inst_11201)){
var statearr_11225_11250 = state_11215__$1;
(statearr_11225_11250[(1)] = (12));

} else {
var statearr_11226_11251 = state_11215__$1;
(statearr_11226_11251[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (3))){
var inst_11213 = (state_11215[(2)]);
var state_11215__$1 = state_11215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11215__$1,inst_11213);
} else {
if((state_val_11216 === (12))){
var inst_11179 = (state_11215[(7)]);
var inst_11203 = cljs.core.vec(inst_11179);
var state_11215__$1 = state_11215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11215__$1,(15),out,inst_11203);
} else {
if((state_val_11216 === (2))){
var state_11215__$1 = state_11215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11215__$1,(4),ch);
} else {
if((state_val_11216 === (11))){
var inst_11195 = (state_11215[(2)]);
var inst_11196 = (new Array(n));
var inst_11179 = inst_11196;
var inst_11180 = (0);
var state_11215__$1 = (function (){var statearr_11227 = state_11215;
(statearr_11227[(7)] = inst_11179);

(statearr_11227[(8)] = inst_11180);

(statearr_11227[(10)] = inst_11195);

return statearr_11227;
})();
var statearr_11228_11252 = state_11215__$1;
(statearr_11228_11252[(2)] = null);

(statearr_11228_11252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (9))){
var inst_11179 = (state_11215[(7)]);
var inst_11193 = cljs.core.vec(inst_11179);
var state_11215__$1 = state_11215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11215__$1,(11),out,inst_11193);
} else {
if((state_val_11216 === (5))){
var inst_11188 = (state_11215[(11)]);
var inst_11179 = (state_11215[(7)]);
var inst_11180 = (state_11215[(8)]);
var inst_11183 = (state_11215[(9)]);
var inst_11187 = (inst_11179[inst_11180] = inst_11183);
var inst_11188__$1 = (inst_11180 + (1));
var inst_11189 = (inst_11188__$1 < n);
var state_11215__$1 = (function (){var statearr_11229 = state_11215;
(statearr_11229[(11)] = inst_11188__$1);

(statearr_11229[(12)] = inst_11187);

return statearr_11229;
})();
if(cljs.core.truth_(inst_11189)){
var statearr_11230_11253 = state_11215__$1;
(statearr_11230_11253[(1)] = (8));

} else {
var statearr_11231_11254 = state_11215__$1;
(statearr_11231_11254[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (14))){
var inst_11208 = (state_11215[(2)]);
var inst_11209 = cljs.core.async.close_BANG_(out);
var state_11215__$1 = (function (){var statearr_11233 = state_11215;
(statearr_11233[(13)] = inst_11208);

return statearr_11233;
})();
var statearr_11234_11255 = state_11215__$1;
(statearr_11234_11255[(2)] = inst_11209);

(statearr_11234_11255[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (10))){
var inst_11199 = (state_11215[(2)]);
var state_11215__$1 = state_11215;
var statearr_11235_11256 = state_11215__$1;
(statearr_11235_11256[(2)] = inst_11199);

(statearr_11235_11256[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11216 === (8))){
var inst_11188 = (state_11215[(11)]);
var inst_11179 = (state_11215[(7)]);
var tmp11232 = inst_11179;
var inst_11179__$1 = tmp11232;
var inst_11180 = inst_11188;
var state_11215__$1 = (function (){var statearr_11236 = state_11215;
(statearr_11236[(7)] = inst_11179__$1);

(statearr_11236[(8)] = inst_11180);

return statearr_11236;
})();
var statearr_11237_11257 = state_11215__$1;
(statearr_11237_11257[(2)] = null);

(statearr_11237_11257[(1)] = (2));


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
});})(c__9423__auto___11243,out))
;
return ((function (switch__9320__auto__,c__9423__auto___11243,out){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_11238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11238[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_11238[(1)] = (1));

return statearr_11238;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_11215){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11215);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11239){if((e11239 instanceof Object)){
var ex__9324__auto__ = e11239;
var statearr_11240_11258 = state_11215;
(statearr_11240_11258[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11215);

return cljs.core.cst$kw$recur;
} else {
throw e11239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11259 = state_11215;
state_11215 = G__11259;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_11215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_11215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___11243,out))
})();
var state__9425__auto__ = (function (){var statearr_11241 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11241[(6)] = c__9423__auto___11243);

return statearr_11241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___11243,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11261 = arguments.length;
switch (G__11261) {
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
var c__9423__auto___11331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9423__auto___11331,out){
return (function (){
var f__9424__auto__ = (function (){var switch__9320__auto__ = ((function (c__9423__auto___11331,out){
return (function (state_11303){
var state_val_11304 = (state_11303[(1)]);
if((state_val_11304 === (7))){
var inst_11299 = (state_11303[(2)]);
var state_11303__$1 = state_11303;
var statearr_11305_11332 = state_11303__$1;
(statearr_11305_11332[(2)] = inst_11299);

(statearr_11305_11332[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (1))){
var inst_11262 = [];
var inst_11263 = inst_11262;
var inst_11264 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_11303__$1 = (function (){var statearr_11306 = state_11303;
(statearr_11306[(7)] = inst_11263);

(statearr_11306[(8)] = inst_11264);

return statearr_11306;
})();
var statearr_11307_11333 = state_11303__$1;
(statearr_11307_11333[(2)] = null);

(statearr_11307_11333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (4))){
var inst_11267 = (state_11303[(9)]);
var inst_11267__$1 = (state_11303[(2)]);
var inst_11268 = (inst_11267__$1 == null);
var inst_11269 = cljs.core.not(inst_11268);
var state_11303__$1 = (function (){var statearr_11308 = state_11303;
(statearr_11308[(9)] = inst_11267__$1);

return statearr_11308;
})();
if(inst_11269){
var statearr_11309_11334 = state_11303__$1;
(statearr_11309_11334[(1)] = (5));

} else {
var statearr_11310_11335 = state_11303__$1;
(statearr_11310_11335[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (15))){
var inst_11293 = (state_11303[(2)]);
var state_11303__$1 = state_11303;
var statearr_11311_11336 = state_11303__$1;
(statearr_11311_11336[(2)] = inst_11293);

(statearr_11311_11336[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (13))){
var state_11303__$1 = state_11303;
var statearr_11312_11337 = state_11303__$1;
(statearr_11312_11337[(2)] = null);

(statearr_11312_11337[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (6))){
var inst_11263 = (state_11303[(7)]);
var inst_11288 = inst_11263.length;
var inst_11289 = (inst_11288 > (0));
var state_11303__$1 = state_11303;
if(cljs.core.truth_(inst_11289)){
var statearr_11313_11338 = state_11303__$1;
(statearr_11313_11338[(1)] = (12));

} else {
var statearr_11314_11339 = state_11303__$1;
(statearr_11314_11339[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (3))){
var inst_11301 = (state_11303[(2)]);
var state_11303__$1 = state_11303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11303__$1,inst_11301);
} else {
if((state_val_11304 === (12))){
var inst_11263 = (state_11303[(7)]);
var inst_11291 = cljs.core.vec(inst_11263);
var state_11303__$1 = state_11303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11303__$1,(15),out,inst_11291);
} else {
if((state_val_11304 === (2))){
var state_11303__$1 = state_11303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11303__$1,(4),ch);
} else {
if((state_val_11304 === (11))){
var inst_11267 = (state_11303[(9)]);
var inst_11271 = (state_11303[(10)]);
var inst_11281 = (state_11303[(2)]);
var inst_11282 = [];
var inst_11283 = inst_11282.push(inst_11267);
var inst_11263 = inst_11282;
var inst_11264 = inst_11271;
var state_11303__$1 = (function (){var statearr_11315 = state_11303;
(statearr_11315[(11)] = inst_11281);

(statearr_11315[(7)] = inst_11263);

(statearr_11315[(12)] = inst_11283);

(statearr_11315[(8)] = inst_11264);

return statearr_11315;
})();
var statearr_11316_11340 = state_11303__$1;
(statearr_11316_11340[(2)] = null);

(statearr_11316_11340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (9))){
var inst_11263 = (state_11303[(7)]);
var inst_11279 = cljs.core.vec(inst_11263);
var state_11303__$1 = state_11303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11303__$1,(11),out,inst_11279);
} else {
if((state_val_11304 === (5))){
var inst_11267 = (state_11303[(9)]);
var inst_11271 = (state_11303[(10)]);
var inst_11264 = (state_11303[(8)]);
var inst_11271__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11267) : f.call(null,inst_11267));
var inst_11272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11271__$1,inst_11264);
var inst_11273 = cljs.core.keyword_identical_QMARK_(inst_11264,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_11274 = ((inst_11272) || (inst_11273));
var state_11303__$1 = (function (){var statearr_11317 = state_11303;
(statearr_11317[(10)] = inst_11271__$1);

return statearr_11317;
})();
if(cljs.core.truth_(inst_11274)){
var statearr_11318_11341 = state_11303__$1;
(statearr_11318_11341[(1)] = (8));

} else {
var statearr_11319_11342 = state_11303__$1;
(statearr_11319_11342[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (14))){
var inst_11296 = (state_11303[(2)]);
var inst_11297 = cljs.core.async.close_BANG_(out);
var state_11303__$1 = (function (){var statearr_11321 = state_11303;
(statearr_11321[(13)] = inst_11296);

return statearr_11321;
})();
var statearr_11322_11343 = state_11303__$1;
(statearr_11322_11343[(2)] = inst_11297);

(statearr_11322_11343[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (10))){
var inst_11286 = (state_11303[(2)]);
var state_11303__$1 = state_11303;
var statearr_11323_11344 = state_11303__$1;
(statearr_11323_11344[(2)] = inst_11286);

(statearr_11323_11344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11304 === (8))){
var inst_11267 = (state_11303[(9)]);
var inst_11263 = (state_11303[(7)]);
var inst_11271 = (state_11303[(10)]);
var inst_11276 = inst_11263.push(inst_11267);
var tmp11320 = inst_11263;
var inst_11263__$1 = tmp11320;
var inst_11264 = inst_11271;
var state_11303__$1 = (function (){var statearr_11324 = state_11303;
(statearr_11324[(7)] = inst_11263__$1);

(statearr_11324[(14)] = inst_11276);

(statearr_11324[(8)] = inst_11264);

return statearr_11324;
})();
var statearr_11325_11345 = state_11303__$1;
(statearr_11325_11345[(2)] = null);

(statearr_11325_11345[(1)] = (2));


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
});})(c__9423__auto___11331,out))
;
return ((function (switch__9320__auto__,c__9423__auto___11331,out){
return (function() {
var cljs$core$async$state_machine__9321__auto__ = null;
var cljs$core$async$state_machine__9321__auto____0 = (function (){
var statearr_11326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11326[(0)] = cljs$core$async$state_machine__9321__auto__);

(statearr_11326[(1)] = (1));

return statearr_11326;
});
var cljs$core$async$state_machine__9321__auto____1 = (function (state_11303){
while(true){
var ret_value__9322__auto__ = (function (){try{while(true){
var result__9323__auto__ = switch__9320__auto__(state_11303);
if(cljs.core.keyword_identical_QMARK_(result__9323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9323__auto__;
}
break;
}
}catch (e11327){if((e11327 instanceof Object)){
var ex__9324__auto__ = e11327;
var statearr_11328_11346 = state_11303;
(statearr_11328_11346[(5)] = ex__9324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11303);

return cljs.core.cst$kw$recur;
} else {
throw e11327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9322__auto__,cljs.core.cst$kw$recur)){
var G__11347 = state_11303;
state_11303 = G__11347;
continue;
} else {
return ret_value__9322__auto__;
}
break;
}
});
cljs$core$async$state_machine__9321__auto__ = function(state_11303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9321__auto____1.call(this,state_11303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9321__auto____0;
cljs$core$async$state_machine__9321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9321__auto____1;
return cljs$core$async$state_machine__9321__auto__;
})()
;})(switch__9320__auto__,c__9423__auto___11331,out))
})();
var state__9425__auto__ = (function (){var statearr_11329 = (f__9424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9424__auto__.cljs$core$IFn$_invoke$arity$0() : f__9424__auto__.call(null));
(statearr_11329[(6)] = c__9423__auto___11331);

return statearr_11329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9425__auto__);
});})(c__9423__auto___11331,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

