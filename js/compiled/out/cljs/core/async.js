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
var G__16157 = arguments.length;
switch (G__16157) {
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
if(typeof cljs.core.async.t_cljs$core$async16158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16158 = (function (f,blockable,meta16159){
this.f = f;
this.blockable = blockable;
this.meta16159 = meta16159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16160,meta16159__$1){
var self__ = this;
var _16160__$1 = this;
return (new cljs.core.async.t_cljs$core$async16158(self__.f,self__.blockable,meta16159__$1));
});

cljs.core.async.t_cljs$core$async16158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16160){
var self__ = this;
var _16160__$1 = this;
return self__.meta16159;
});

cljs.core.async.t_cljs$core$async16158.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16159], null);
});

cljs.core.async.t_cljs$core$async16158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16158";

cljs.core.async.t_cljs$core$async16158.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16158");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16158.
 */
cljs.core.async.__GT_t_cljs$core$async16158 = (function cljs$core$async$__GT_t_cljs$core$async16158(f__$1,blockable__$1,meta16159){
return (new cljs.core.async.t_cljs$core$async16158(f__$1,blockable__$1,meta16159));
});

}

return (new cljs.core.async.t_cljs$core$async16158(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16164 = arguments.length;
switch (G__16164) {
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
var G__16167 = arguments.length;
switch (G__16167) {
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
var G__16170 = arguments.length;
switch (G__16170) {
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
var val_16172 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16172) : fn1.call(null,val_16172));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16172,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16172) : fn1.call(null,val_16172));
});})(val_16172,ret))
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
var G__16174 = arguments.length;
switch (G__16174) {
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
var n__4376__auto___16176 = n;
var x_16177 = (0);
while(true){
if((x_16177 < n__4376__auto___16176)){
(a[x_16177] = (0));

var G__16178 = (x_16177 + (1));
x_16177 = G__16178;
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

var G__16179 = (i + (1));
i = G__16179;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async16180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16180 = (function (flag,meta16181){
this.flag = flag;
this.meta16181 = meta16181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16182,meta16181__$1){
var self__ = this;
var _16182__$1 = this;
return (new cljs.core.async.t_cljs$core$async16180(self__.flag,meta16181__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16182){
var self__ = this;
var _16182__$1 = this;
return self__.meta16181;
});})(flag))
;

cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16180.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16181], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16180";

cljs.core.async.t_cljs$core$async16180.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16180");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16180.
 */
cljs.core.async.__GT_t_cljs$core$async16180 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16180(flag__$1,meta16181){
return (new cljs.core.async.t_cljs$core$async16180(flag__$1,meta16181));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16180(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16183 = (function (flag,cb,meta16184){
this.flag = flag;
this.cb = cb;
this.meta16184 = meta16184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16185,meta16184__$1){
var self__ = this;
var _16185__$1 = this;
return (new cljs.core.async.t_cljs$core$async16183(self__.flag,self__.cb,meta16184__$1));
});

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16185){
var self__ = this;
var _16185__$1 = this;
return self__.meta16184;
});

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16184], null);
});

cljs.core.async.t_cljs$core$async16183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16183";

cljs.core.async.t_cljs$core$async16183.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16183");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16183.
 */
cljs.core.async.__GT_t_cljs$core$async16183 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16183(flag__$1,cb__$1,meta16184){
return (new cljs.core.async.t_cljs$core$async16183(flag__$1,cb__$1,meta16184));
});

}

return (new cljs.core.async.t_cljs$core$async16183(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16186_SHARP_){
var G__16188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16186_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16188) : fret.call(null,G__16188));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16187_SHARP_){
var G__16189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16187_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16189) : fret.call(null,G__16189));
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
var G__16190 = (i + (1));
i = G__16190;
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
var len__4497__auto___16196 = arguments.length;
var i__4498__auto___16197 = (0);
while(true){
if((i__4498__auto___16197 < len__4497__auto___16196)){
args__4500__auto__.push((arguments[i__4498__auto___16197]));

var G__16198 = (i__4498__auto___16197 + (1));
i__4498__auto___16197 = G__16198;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16193){
var map__16194 = p__16193;
var map__16194__$1 = ((((!((map__16194 == null)))?(((((map__16194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16194):map__16194);
var opts = map__16194__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16191){
var G__16192 = cljs.core.first(seq16191);
var seq16191__$1 = cljs.core.next(seq16191);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16192,seq16191__$1);
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
var G__16200 = arguments.length;
switch (G__16200) {
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
var c__14229__auto___16246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___16246){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___16246){
return (function (state_16224){
var state_val_16225 = (state_16224[(1)]);
if((state_val_16225 === (7))){
var inst_16220 = (state_16224[(2)]);
var state_16224__$1 = state_16224;
var statearr_16226_16247 = state_16224__$1;
(statearr_16226_16247[(2)] = inst_16220);

(statearr_16226_16247[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (1))){
var state_16224__$1 = state_16224;
var statearr_16227_16248 = state_16224__$1;
(statearr_16227_16248[(2)] = null);

(statearr_16227_16248[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (4))){
var inst_16203 = (state_16224[(7)]);
var inst_16203__$1 = (state_16224[(2)]);
var inst_16204 = (inst_16203__$1 == null);
var state_16224__$1 = (function (){var statearr_16228 = state_16224;
(statearr_16228[(7)] = inst_16203__$1);

return statearr_16228;
})();
if(cljs.core.truth_(inst_16204)){
var statearr_16229_16249 = state_16224__$1;
(statearr_16229_16249[(1)] = (5));

} else {
var statearr_16230_16250 = state_16224__$1;
(statearr_16230_16250[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (13))){
var state_16224__$1 = state_16224;
var statearr_16231_16251 = state_16224__$1;
(statearr_16231_16251[(2)] = null);

(statearr_16231_16251[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (6))){
var inst_16203 = (state_16224[(7)]);
var state_16224__$1 = state_16224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16224__$1,(11),to,inst_16203);
} else {
if((state_val_16225 === (3))){
var inst_16222 = (state_16224[(2)]);
var state_16224__$1 = state_16224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16224__$1,inst_16222);
} else {
if((state_val_16225 === (12))){
var state_16224__$1 = state_16224;
var statearr_16232_16252 = state_16224__$1;
(statearr_16232_16252[(2)] = null);

(statearr_16232_16252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (2))){
var state_16224__$1 = state_16224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16224__$1,(4),from);
} else {
if((state_val_16225 === (11))){
var inst_16213 = (state_16224[(2)]);
var state_16224__$1 = state_16224;
if(cljs.core.truth_(inst_16213)){
var statearr_16233_16253 = state_16224__$1;
(statearr_16233_16253[(1)] = (12));

} else {
var statearr_16234_16254 = state_16224__$1;
(statearr_16234_16254[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (9))){
var state_16224__$1 = state_16224;
var statearr_16235_16255 = state_16224__$1;
(statearr_16235_16255[(2)] = null);

(statearr_16235_16255[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (5))){
var state_16224__$1 = state_16224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16236_16256 = state_16224__$1;
(statearr_16236_16256[(1)] = (8));

} else {
var statearr_16237_16257 = state_16224__$1;
(statearr_16237_16257[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (14))){
var inst_16218 = (state_16224[(2)]);
var state_16224__$1 = state_16224;
var statearr_16238_16258 = state_16224__$1;
(statearr_16238_16258[(2)] = inst_16218);

(statearr_16238_16258[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (10))){
var inst_16210 = (state_16224[(2)]);
var state_16224__$1 = state_16224;
var statearr_16239_16259 = state_16224__$1;
(statearr_16239_16259[(2)] = inst_16210);

(statearr_16239_16259[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16225 === (8))){
var inst_16207 = cljs.core.async.close_BANG_(to);
var state_16224__$1 = state_16224;
var statearr_16240_16260 = state_16224__$1;
(statearr_16240_16260[(2)] = inst_16207);

(statearr_16240_16260[(1)] = (10));


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
});})(c__14229__auto___16246))
;
return ((function (switch__14048__auto__,c__14229__auto___16246){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_16241 = [null,null,null,null,null,null,null,null];
(statearr_16241[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_16241[(1)] = (1));

return statearr_16241;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_16224){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16224);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16242){if((e16242 instanceof Object)){
var ex__14052__auto__ = e16242;
var statearr_16243_16261 = state_16224;
(statearr_16243_16261[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16224);

return cljs.core.cst$kw$recur;
} else {
throw e16242;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16262 = state_16224;
state_16224 = G__16262;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_16224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_16224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___16246))
})();
var state__14231__auto__ = (function (){var statearr_16244 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16244[(6)] = c__14229__auto___16246);

return statearr_16244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___16246))
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
return (function (p__16263){
var vec__16264 = p__16263;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16264,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16264,(1),null);
var job = vec__16264;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14229__auto___16435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___16435,res,vec__16264,v,p,job,jobs,results){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___16435,res,vec__16264,v,p,job,jobs,results){
return (function (state_16271){
var state_val_16272 = (state_16271[(1)]);
if((state_val_16272 === (1))){
var state_16271__$1 = state_16271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16271__$1,(2),res,v);
} else {
if((state_val_16272 === (2))){
var inst_16268 = (state_16271[(2)]);
var inst_16269 = cljs.core.async.close_BANG_(res);
var state_16271__$1 = (function (){var statearr_16273 = state_16271;
(statearr_16273[(7)] = inst_16268);

return statearr_16273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16271__$1,inst_16269);
} else {
return null;
}
}
});})(c__14229__auto___16435,res,vec__16264,v,p,job,jobs,results))
;
return ((function (switch__14048__auto__,c__14229__auto___16435,res,vec__16264,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0 = (function (){
var statearr_16274 = [null,null,null,null,null,null,null,null];
(statearr_16274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__);

(statearr_16274[(1)] = (1));

return statearr_16274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1 = (function (state_16271){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16271);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16275){if((e16275 instanceof Object)){
var ex__14052__auto__ = e16275;
var statearr_16276_16436 = state_16271;
(statearr_16276_16436[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16271);

return cljs.core.cst$kw$recur;
} else {
throw e16275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16437 = state_16271;
state_16271 = G__16437;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = function(state_16271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1.call(this,state_16271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___16435,res,vec__16264,v,p,job,jobs,results))
})();
var state__14231__auto__ = (function (){var statearr_16277 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16277[(6)] = c__14229__auto___16435);

return statearr_16277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___16435,res,vec__16264,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16278){
var vec__16279 = p__16278;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16279,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16279,(1),null);
var job = vec__16279;
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
var n__4376__auto___16438 = n;
var __16439 = (0);
while(true){
if((__16439 < n__4376__auto___16438)){
var G__16282_16440 = type;
var G__16282_16441__$1 = (((G__16282_16440 instanceof cljs.core.Keyword))?G__16282_16440.fqn:null);
switch (G__16282_16441__$1) {
case "compute":
var c__14229__auto___16443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16439,c__14229__auto___16443,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (__16439,c__14229__auto___16443,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async){
return (function (state_16295){
var state_val_16296 = (state_16295[(1)]);
if((state_val_16296 === (1))){
var state_16295__$1 = state_16295;
var statearr_16297_16444 = state_16295__$1;
(statearr_16297_16444[(2)] = null);

(statearr_16297_16444[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16296 === (2))){
var state_16295__$1 = state_16295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16295__$1,(4),jobs);
} else {
if((state_val_16296 === (3))){
var inst_16293 = (state_16295[(2)]);
var state_16295__$1 = state_16295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16295__$1,inst_16293);
} else {
if((state_val_16296 === (4))){
var inst_16285 = (state_16295[(2)]);
var inst_16286 = process(inst_16285);
var state_16295__$1 = state_16295;
if(cljs.core.truth_(inst_16286)){
var statearr_16298_16445 = state_16295__$1;
(statearr_16298_16445[(1)] = (5));

} else {
var statearr_16299_16446 = state_16295__$1;
(statearr_16299_16446[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16296 === (5))){
var state_16295__$1 = state_16295;
var statearr_16300_16447 = state_16295__$1;
(statearr_16300_16447[(2)] = null);

(statearr_16300_16447[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16296 === (6))){
var state_16295__$1 = state_16295;
var statearr_16301_16448 = state_16295__$1;
(statearr_16301_16448[(2)] = null);

(statearr_16301_16448[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16296 === (7))){
var inst_16291 = (state_16295[(2)]);
var state_16295__$1 = state_16295;
var statearr_16302_16449 = state_16295__$1;
(statearr_16302_16449[(2)] = inst_16291);

(statearr_16302_16449[(1)] = (3));


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
});})(__16439,c__14229__auto___16443,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async))
;
return ((function (__16439,switch__14048__auto__,c__14229__auto___16443,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0 = (function (){
var statearr_16303 = [null,null,null,null,null,null,null];
(statearr_16303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__);

(statearr_16303[(1)] = (1));

return statearr_16303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1 = (function (state_16295){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16295);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16304){if((e16304 instanceof Object)){
var ex__14052__auto__ = e16304;
var statearr_16305_16450 = state_16295;
(statearr_16305_16450[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16295);

return cljs.core.cst$kw$recur;
} else {
throw e16304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16451 = state_16295;
state_16295 = G__16451;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = function(state_16295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1.call(this,state_16295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__;
})()
;})(__16439,switch__14048__auto__,c__14229__auto___16443,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async))
})();
var state__14231__auto__ = (function (){var statearr_16306 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16306[(6)] = c__14229__auto___16443);

return statearr_16306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(__16439,c__14229__auto___16443,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async))
);


break;
case "async":
var c__14229__auto___16452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16439,c__14229__auto___16452,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (__16439,c__14229__auto___16452,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async){
return (function (state_16319){
var state_val_16320 = (state_16319[(1)]);
if((state_val_16320 === (1))){
var state_16319__$1 = state_16319;
var statearr_16321_16453 = state_16319__$1;
(statearr_16321_16453[(2)] = null);

(statearr_16321_16453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16320 === (2))){
var state_16319__$1 = state_16319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16319__$1,(4),jobs);
} else {
if((state_val_16320 === (3))){
var inst_16317 = (state_16319[(2)]);
var state_16319__$1 = state_16319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16319__$1,inst_16317);
} else {
if((state_val_16320 === (4))){
var inst_16309 = (state_16319[(2)]);
var inst_16310 = async(inst_16309);
var state_16319__$1 = state_16319;
if(cljs.core.truth_(inst_16310)){
var statearr_16322_16454 = state_16319__$1;
(statearr_16322_16454[(1)] = (5));

} else {
var statearr_16323_16455 = state_16319__$1;
(statearr_16323_16455[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16320 === (5))){
var state_16319__$1 = state_16319;
var statearr_16324_16456 = state_16319__$1;
(statearr_16324_16456[(2)] = null);

(statearr_16324_16456[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16320 === (6))){
var state_16319__$1 = state_16319;
var statearr_16325_16457 = state_16319__$1;
(statearr_16325_16457[(2)] = null);

(statearr_16325_16457[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16320 === (7))){
var inst_16315 = (state_16319[(2)]);
var state_16319__$1 = state_16319;
var statearr_16326_16458 = state_16319__$1;
(statearr_16326_16458[(2)] = inst_16315);

(statearr_16326_16458[(1)] = (3));


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
});})(__16439,c__14229__auto___16452,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async))
;
return ((function (__16439,switch__14048__auto__,c__14229__auto___16452,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0 = (function (){
var statearr_16327 = [null,null,null,null,null,null,null];
(statearr_16327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__);

(statearr_16327[(1)] = (1));

return statearr_16327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1 = (function (state_16319){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16319);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16328){if((e16328 instanceof Object)){
var ex__14052__auto__ = e16328;
var statearr_16329_16459 = state_16319;
(statearr_16329_16459[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16319);

return cljs.core.cst$kw$recur;
} else {
throw e16328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16460 = state_16319;
state_16319 = G__16460;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = function(state_16319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1.call(this,state_16319);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__;
})()
;})(__16439,switch__14048__auto__,c__14229__auto___16452,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async))
})();
var state__14231__auto__ = (function (){var statearr_16330 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16330[(6)] = c__14229__auto___16452);

return statearr_16330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(__16439,c__14229__auto___16452,G__16282_16440,G__16282_16441__$1,n__4376__auto___16438,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16282_16441__$1)].join('')));

}

var G__16461 = (__16439 + (1));
__16439 = G__16461;
continue;
} else {
}
break;
}

var c__14229__auto___16462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___16462,jobs,results,process,async){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___16462,jobs,results,process,async){
return (function (state_16352){
var state_val_16353 = (state_16352[(1)]);
if((state_val_16353 === (1))){
var state_16352__$1 = state_16352;
var statearr_16354_16463 = state_16352__$1;
(statearr_16354_16463[(2)] = null);

(statearr_16354_16463[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (2))){
var state_16352__$1 = state_16352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16352__$1,(4),from);
} else {
if((state_val_16353 === (3))){
var inst_16350 = (state_16352[(2)]);
var state_16352__$1 = state_16352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16352__$1,inst_16350);
} else {
if((state_val_16353 === (4))){
var inst_16333 = (state_16352[(7)]);
var inst_16333__$1 = (state_16352[(2)]);
var inst_16334 = (inst_16333__$1 == null);
var state_16352__$1 = (function (){var statearr_16355 = state_16352;
(statearr_16355[(7)] = inst_16333__$1);

return statearr_16355;
})();
if(cljs.core.truth_(inst_16334)){
var statearr_16356_16464 = state_16352__$1;
(statearr_16356_16464[(1)] = (5));

} else {
var statearr_16357_16465 = state_16352__$1;
(statearr_16357_16465[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (5))){
var inst_16336 = cljs.core.async.close_BANG_(jobs);
var state_16352__$1 = state_16352;
var statearr_16358_16466 = state_16352__$1;
(statearr_16358_16466[(2)] = inst_16336);

(statearr_16358_16466[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (6))){
var inst_16338 = (state_16352[(8)]);
var inst_16333 = (state_16352[(7)]);
var inst_16338__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16340 = [inst_16333,inst_16338__$1];
var inst_16341 = (new cljs.core.PersistentVector(null,2,(5),inst_16339,inst_16340,null));
var state_16352__$1 = (function (){var statearr_16359 = state_16352;
(statearr_16359[(8)] = inst_16338__$1);

return statearr_16359;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16352__$1,(8),jobs,inst_16341);
} else {
if((state_val_16353 === (7))){
var inst_16348 = (state_16352[(2)]);
var state_16352__$1 = state_16352;
var statearr_16360_16467 = state_16352__$1;
(statearr_16360_16467[(2)] = inst_16348);

(statearr_16360_16467[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (8))){
var inst_16338 = (state_16352[(8)]);
var inst_16343 = (state_16352[(2)]);
var state_16352__$1 = (function (){var statearr_16361 = state_16352;
(statearr_16361[(9)] = inst_16343);

return statearr_16361;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16352__$1,(9),results,inst_16338);
} else {
if((state_val_16353 === (9))){
var inst_16345 = (state_16352[(2)]);
var state_16352__$1 = (function (){var statearr_16362 = state_16352;
(statearr_16362[(10)] = inst_16345);

return statearr_16362;
})();
var statearr_16363_16468 = state_16352__$1;
(statearr_16363_16468[(2)] = null);

(statearr_16363_16468[(1)] = (2));


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
});})(c__14229__auto___16462,jobs,results,process,async))
;
return ((function (switch__14048__auto__,c__14229__auto___16462,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0 = (function (){
var statearr_16364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__);

(statearr_16364[(1)] = (1));

return statearr_16364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1 = (function (state_16352){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16352);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16365){if((e16365 instanceof Object)){
var ex__14052__auto__ = e16365;
var statearr_16366_16469 = state_16352;
(statearr_16366_16469[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16352);

return cljs.core.cst$kw$recur;
} else {
throw e16365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16470 = state_16352;
state_16352 = G__16470;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = function(state_16352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1.call(this,state_16352);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___16462,jobs,results,process,async))
})();
var state__14231__auto__ = (function (){var statearr_16367 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16367[(6)] = c__14229__auto___16462);

return statearr_16367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___16462,jobs,results,process,async))
);


var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,jobs,results,process,async){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,jobs,results,process,async){
return (function (state_16405){
var state_val_16406 = (state_16405[(1)]);
if((state_val_16406 === (7))){
var inst_16401 = (state_16405[(2)]);
var state_16405__$1 = state_16405;
var statearr_16407_16471 = state_16405__$1;
(statearr_16407_16471[(2)] = inst_16401);

(statearr_16407_16471[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (20))){
var state_16405__$1 = state_16405;
var statearr_16408_16472 = state_16405__$1;
(statearr_16408_16472[(2)] = null);

(statearr_16408_16472[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (1))){
var state_16405__$1 = state_16405;
var statearr_16409_16473 = state_16405__$1;
(statearr_16409_16473[(2)] = null);

(statearr_16409_16473[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (4))){
var inst_16370 = (state_16405[(7)]);
var inst_16370__$1 = (state_16405[(2)]);
var inst_16371 = (inst_16370__$1 == null);
var state_16405__$1 = (function (){var statearr_16410 = state_16405;
(statearr_16410[(7)] = inst_16370__$1);

return statearr_16410;
})();
if(cljs.core.truth_(inst_16371)){
var statearr_16411_16474 = state_16405__$1;
(statearr_16411_16474[(1)] = (5));

} else {
var statearr_16412_16475 = state_16405__$1;
(statearr_16412_16475[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (15))){
var inst_16383 = (state_16405[(8)]);
var state_16405__$1 = state_16405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16405__$1,(18),to,inst_16383);
} else {
if((state_val_16406 === (21))){
var inst_16396 = (state_16405[(2)]);
var state_16405__$1 = state_16405;
var statearr_16413_16476 = state_16405__$1;
(statearr_16413_16476[(2)] = inst_16396);

(statearr_16413_16476[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (13))){
var inst_16398 = (state_16405[(2)]);
var state_16405__$1 = (function (){var statearr_16414 = state_16405;
(statearr_16414[(9)] = inst_16398);

return statearr_16414;
})();
var statearr_16415_16477 = state_16405__$1;
(statearr_16415_16477[(2)] = null);

(statearr_16415_16477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (6))){
var inst_16370 = (state_16405[(7)]);
var state_16405__$1 = state_16405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16405__$1,(11),inst_16370);
} else {
if((state_val_16406 === (17))){
var inst_16391 = (state_16405[(2)]);
var state_16405__$1 = state_16405;
if(cljs.core.truth_(inst_16391)){
var statearr_16416_16478 = state_16405__$1;
(statearr_16416_16478[(1)] = (19));

} else {
var statearr_16417_16479 = state_16405__$1;
(statearr_16417_16479[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (3))){
var inst_16403 = (state_16405[(2)]);
var state_16405__$1 = state_16405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16405__$1,inst_16403);
} else {
if((state_val_16406 === (12))){
var inst_16380 = (state_16405[(10)]);
var state_16405__$1 = state_16405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16405__$1,(14),inst_16380);
} else {
if((state_val_16406 === (2))){
var state_16405__$1 = state_16405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16405__$1,(4),results);
} else {
if((state_val_16406 === (19))){
var state_16405__$1 = state_16405;
var statearr_16418_16480 = state_16405__$1;
(statearr_16418_16480[(2)] = null);

(statearr_16418_16480[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (11))){
var inst_16380 = (state_16405[(2)]);
var state_16405__$1 = (function (){var statearr_16419 = state_16405;
(statearr_16419[(10)] = inst_16380);

return statearr_16419;
})();
var statearr_16420_16481 = state_16405__$1;
(statearr_16420_16481[(2)] = null);

(statearr_16420_16481[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (9))){
var state_16405__$1 = state_16405;
var statearr_16421_16482 = state_16405__$1;
(statearr_16421_16482[(2)] = null);

(statearr_16421_16482[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (5))){
var state_16405__$1 = state_16405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16422_16483 = state_16405__$1;
(statearr_16422_16483[(1)] = (8));

} else {
var statearr_16423_16484 = state_16405__$1;
(statearr_16423_16484[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (14))){
var inst_16383 = (state_16405[(8)]);
var inst_16385 = (state_16405[(11)]);
var inst_16383__$1 = (state_16405[(2)]);
var inst_16384 = (inst_16383__$1 == null);
var inst_16385__$1 = cljs.core.not(inst_16384);
var state_16405__$1 = (function (){var statearr_16424 = state_16405;
(statearr_16424[(8)] = inst_16383__$1);

(statearr_16424[(11)] = inst_16385__$1);

return statearr_16424;
})();
if(inst_16385__$1){
var statearr_16425_16485 = state_16405__$1;
(statearr_16425_16485[(1)] = (15));

} else {
var statearr_16426_16486 = state_16405__$1;
(statearr_16426_16486[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (16))){
var inst_16385 = (state_16405[(11)]);
var state_16405__$1 = state_16405;
var statearr_16427_16487 = state_16405__$1;
(statearr_16427_16487[(2)] = inst_16385);

(statearr_16427_16487[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (10))){
var inst_16377 = (state_16405[(2)]);
var state_16405__$1 = state_16405;
var statearr_16428_16488 = state_16405__$1;
(statearr_16428_16488[(2)] = inst_16377);

(statearr_16428_16488[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (18))){
var inst_16388 = (state_16405[(2)]);
var state_16405__$1 = state_16405;
var statearr_16429_16489 = state_16405__$1;
(statearr_16429_16489[(2)] = inst_16388);

(statearr_16429_16489[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16406 === (8))){
var inst_16374 = cljs.core.async.close_BANG_(to);
var state_16405__$1 = state_16405;
var statearr_16430_16490 = state_16405__$1;
(statearr_16430_16490[(2)] = inst_16374);

(statearr_16430_16490[(1)] = (10));


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
});})(c__14229__auto__,jobs,results,process,async))
;
return ((function (switch__14048__auto__,c__14229__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0 = (function (){
var statearr_16431 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__);

(statearr_16431[(1)] = (1));

return statearr_16431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1 = (function (state_16405){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16405);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16432){if((e16432 instanceof Object)){
var ex__14052__auto__ = e16432;
var statearr_16433_16491 = state_16405;
(statearr_16433_16491[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16405);

return cljs.core.cst$kw$recur;
} else {
throw e16432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16492 = state_16405;
state_16405 = G__16492;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__ = function(state_16405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1.call(this,state_16405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,jobs,results,process,async))
})();
var state__14231__auto__ = (function (){var statearr_16434 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16434[(6)] = c__14229__auto__);

return statearr_16434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,jobs,results,process,async))
);

return c__14229__auto__;
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
var G__16494 = arguments.length;
switch (G__16494) {
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
var G__16497 = arguments.length;
switch (G__16497) {
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
var G__16500 = arguments.length;
switch (G__16500) {
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
var c__14229__auto___16549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___16549,tc,fc){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___16549,tc,fc){
return (function (state_16526){
var state_val_16527 = (state_16526[(1)]);
if((state_val_16527 === (7))){
var inst_16522 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
var statearr_16528_16550 = state_16526__$1;
(statearr_16528_16550[(2)] = inst_16522);

(statearr_16528_16550[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (1))){
var state_16526__$1 = state_16526;
var statearr_16529_16551 = state_16526__$1;
(statearr_16529_16551[(2)] = null);

(statearr_16529_16551[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (4))){
var inst_16503 = (state_16526[(7)]);
var inst_16503__$1 = (state_16526[(2)]);
var inst_16504 = (inst_16503__$1 == null);
var state_16526__$1 = (function (){var statearr_16530 = state_16526;
(statearr_16530[(7)] = inst_16503__$1);

return statearr_16530;
})();
if(cljs.core.truth_(inst_16504)){
var statearr_16531_16552 = state_16526__$1;
(statearr_16531_16552[(1)] = (5));

} else {
var statearr_16532_16553 = state_16526__$1;
(statearr_16532_16553[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (13))){
var state_16526__$1 = state_16526;
var statearr_16533_16554 = state_16526__$1;
(statearr_16533_16554[(2)] = null);

(statearr_16533_16554[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (6))){
var inst_16503 = (state_16526[(7)]);
var inst_16509 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16503) : p.call(null,inst_16503));
var state_16526__$1 = state_16526;
if(cljs.core.truth_(inst_16509)){
var statearr_16534_16555 = state_16526__$1;
(statearr_16534_16555[(1)] = (9));

} else {
var statearr_16535_16556 = state_16526__$1;
(statearr_16535_16556[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (3))){
var inst_16524 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16526__$1,inst_16524);
} else {
if((state_val_16527 === (12))){
var state_16526__$1 = state_16526;
var statearr_16536_16557 = state_16526__$1;
(statearr_16536_16557[(2)] = null);

(statearr_16536_16557[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (2))){
var state_16526__$1 = state_16526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16526__$1,(4),ch);
} else {
if((state_val_16527 === (11))){
var inst_16503 = (state_16526[(7)]);
var inst_16513 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16526__$1,(8),inst_16513,inst_16503);
} else {
if((state_val_16527 === (9))){
var state_16526__$1 = state_16526;
var statearr_16537_16558 = state_16526__$1;
(statearr_16537_16558[(2)] = tc);

(statearr_16537_16558[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (5))){
var inst_16506 = cljs.core.async.close_BANG_(tc);
var inst_16507 = cljs.core.async.close_BANG_(fc);
var state_16526__$1 = (function (){var statearr_16538 = state_16526;
(statearr_16538[(8)] = inst_16506);

return statearr_16538;
})();
var statearr_16539_16559 = state_16526__$1;
(statearr_16539_16559[(2)] = inst_16507);

(statearr_16539_16559[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (14))){
var inst_16520 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
var statearr_16540_16560 = state_16526__$1;
(statearr_16540_16560[(2)] = inst_16520);

(statearr_16540_16560[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (10))){
var state_16526__$1 = state_16526;
var statearr_16541_16561 = state_16526__$1;
(statearr_16541_16561[(2)] = fc);

(statearr_16541_16561[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (8))){
var inst_16515 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
if(cljs.core.truth_(inst_16515)){
var statearr_16542_16562 = state_16526__$1;
(statearr_16542_16562[(1)] = (12));

} else {
var statearr_16543_16563 = state_16526__$1;
(statearr_16543_16563[(1)] = (13));

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
});})(c__14229__auto___16549,tc,fc))
;
return ((function (switch__14048__auto__,c__14229__auto___16549,tc,fc){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_16544 = [null,null,null,null,null,null,null,null,null];
(statearr_16544[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_16544[(1)] = (1));

return statearr_16544;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_16526){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16526);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16545){if((e16545 instanceof Object)){
var ex__14052__auto__ = e16545;
var statearr_16546_16564 = state_16526;
(statearr_16546_16564[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16526);

return cljs.core.cst$kw$recur;
} else {
throw e16545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16565 = state_16526;
state_16526 = G__16565;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_16526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_16526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___16549,tc,fc))
})();
var state__14231__auto__ = (function (){var statearr_16547 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16547[(6)] = c__14229__auto___16549);

return statearr_16547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___16549,tc,fc))
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
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__){
return (function (state_16586){
var state_val_16587 = (state_16586[(1)]);
if((state_val_16587 === (7))){
var inst_16582 = (state_16586[(2)]);
var state_16586__$1 = state_16586;
var statearr_16588_16606 = state_16586__$1;
(statearr_16588_16606[(2)] = inst_16582);

(statearr_16588_16606[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16587 === (1))){
var inst_16566 = init;
var state_16586__$1 = (function (){var statearr_16589 = state_16586;
(statearr_16589[(7)] = inst_16566);

return statearr_16589;
})();
var statearr_16590_16607 = state_16586__$1;
(statearr_16590_16607[(2)] = null);

(statearr_16590_16607[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16587 === (4))){
var inst_16569 = (state_16586[(8)]);
var inst_16569__$1 = (state_16586[(2)]);
var inst_16570 = (inst_16569__$1 == null);
var state_16586__$1 = (function (){var statearr_16591 = state_16586;
(statearr_16591[(8)] = inst_16569__$1);

return statearr_16591;
})();
if(cljs.core.truth_(inst_16570)){
var statearr_16592_16608 = state_16586__$1;
(statearr_16592_16608[(1)] = (5));

} else {
var statearr_16593_16609 = state_16586__$1;
(statearr_16593_16609[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16587 === (6))){
var inst_16569 = (state_16586[(8)]);
var inst_16566 = (state_16586[(7)]);
var inst_16573 = (state_16586[(9)]);
var inst_16573__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16566,inst_16569) : f.call(null,inst_16566,inst_16569));
var inst_16574 = cljs.core.reduced_QMARK_(inst_16573__$1);
var state_16586__$1 = (function (){var statearr_16594 = state_16586;
(statearr_16594[(9)] = inst_16573__$1);

return statearr_16594;
})();
if(inst_16574){
var statearr_16595_16610 = state_16586__$1;
(statearr_16595_16610[(1)] = (8));

} else {
var statearr_16596_16611 = state_16586__$1;
(statearr_16596_16611[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16587 === (3))){
var inst_16584 = (state_16586[(2)]);
var state_16586__$1 = state_16586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16586__$1,inst_16584);
} else {
if((state_val_16587 === (2))){
var state_16586__$1 = state_16586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16586__$1,(4),ch);
} else {
if((state_val_16587 === (9))){
var inst_16573 = (state_16586[(9)]);
var inst_16566 = inst_16573;
var state_16586__$1 = (function (){var statearr_16597 = state_16586;
(statearr_16597[(7)] = inst_16566);

return statearr_16597;
})();
var statearr_16598_16612 = state_16586__$1;
(statearr_16598_16612[(2)] = null);

(statearr_16598_16612[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16587 === (5))){
var inst_16566 = (state_16586[(7)]);
var state_16586__$1 = state_16586;
var statearr_16599_16613 = state_16586__$1;
(statearr_16599_16613[(2)] = inst_16566);

(statearr_16599_16613[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16587 === (10))){
var inst_16580 = (state_16586[(2)]);
var state_16586__$1 = state_16586;
var statearr_16600_16614 = state_16586__$1;
(statearr_16600_16614[(2)] = inst_16580);

(statearr_16600_16614[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16587 === (8))){
var inst_16573 = (state_16586[(9)]);
var inst_16576 = cljs.core.deref(inst_16573);
var state_16586__$1 = state_16586;
var statearr_16601_16615 = state_16586__$1;
(statearr_16601_16615[(2)] = inst_16576);

(statearr_16601_16615[(1)] = (10));


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
});})(c__14229__auto__))
;
return ((function (switch__14048__auto__,c__14229__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14049__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14049__auto____0 = (function (){
var statearr_16602 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16602[(0)] = cljs$core$async$reduce_$_state_machine__14049__auto__);

(statearr_16602[(1)] = (1));

return statearr_16602;
});
var cljs$core$async$reduce_$_state_machine__14049__auto____1 = (function (state_16586){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16586);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16603){if((e16603 instanceof Object)){
var ex__14052__auto__ = e16603;
var statearr_16604_16616 = state_16586;
(statearr_16604_16616[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16586);

return cljs.core.cst$kw$recur;
} else {
throw e16603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16617 = state_16586;
state_16586 = G__16617;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14049__auto__ = function(state_16586){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14049__auto____1.call(this,state_16586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14049__auto____0;
cljs$core$async$reduce_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14049__auto____1;
return cljs$core$async$reduce_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__))
})();
var state__14231__auto__ = (function (){var statearr_16605 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16605[(6)] = c__14229__auto__);

return statearr_16605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__))
);

return c__14229__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__,f__$1){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__,f__$1){
return (function (state_16623){
var state_val_16624 = (state_16623[(1)]);
if((state_val_16624 === (1))){
var inst_16618 = cljs.core.async.reduce(f__$1,init,ch);
var state_16623__$1 = state_16623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16623__$1,(2),inst_16618);
} else {
if((state_val_16624 === (2))){
var inst_16620 = (state_16623[(2)]);
var inst_16621 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16620) : f__$1.call(null,inst_16620));
var state_16623__$1 = state_16623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16623__$1,inst_16621);
} else {
return null;
}
}
});})(c__14229__auto__,f__$1))
;
return ((function (switch__14048__auto__,c__14229__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14049__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14049__auto____0 = (function (){
var statearr_16625 = [null,null,null,null,null,null,null];
(statearr_16625[(0)] = cljs$core$async$transduce_$_state_machine__14049__auto__);

(statearr_16625[(1)] = (1));

return statearr_16625;
});
var cljs$core$async$transduce_$_state_machine__14049__auto____1 = (function (state_16623){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16623);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16626){if((e16626 instanceof Object)){
var ex__14052__auto__ = e16626;
var statearr_16627_16629 = state_16623;
(statearr_16627_16629[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16623);

return cljs.core.cst$kw$recur;
} else {
throw e16626;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16630 = state_16623;
state_16623 = G__16630;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14049__auto__ = function(state_16623){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14049__auto____1.call(this,state_16623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14049__auto____0;
cljs$core$async$transduce_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14049__auto____1;
return cljs$core$async$transduce_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__,f__$1))
})();
var state__14231__auto__ = (function (){var statearr_16628 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16628[(6)] = c__14229__auto__);

return statearr_16628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__,f__$1))
);

return c__14229__auto__;
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
var G__16632 = arguments.length;
switch (G__16632) {
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
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__){
return (function (state_16657){
var state_val_16658 = (state_16657[(1)]);
if((state_val_16658 === (7))){
var inst_16639 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16659_16680 = state_16657__$1;
(statearr_16659_16680[(2)] = inst_16639);

(statearr_16659_16680[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (1))){
var inst_16633 = cljs.core.seq(coll);
var inst_16634 = inst_16633;
var state_16657__$1 = (function (){var statearr_16660 = state_16657;
(statearr_16660[(7)] = inst_16634);

return statearr_16660;
})();
var statearr_16661_16681 = state_16657__$1;
(statearr_16661_16681[(2)] = null);

(statearr_16661_16681[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (4))){
var inst_16634 = (state_16657[(7)]);
var inst_16637 = cljs.core.first(inst_16634);
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16657__$1,(7),ch,inst_16637);
} else {
if((state_val_16658 === (13))){
var inst_16651 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16662_16682 = state_16657__$1;
(statearr_16662_16682[(2)] = inst_16651);

(statearr_16662_16682[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (6))){
var inst_16642 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16642)){
var statearr_16663_16683 = state_16657__$1;
(statearr_16663_16683[(1)] = (8));

} else {
var statearr_16664_16684 = state_16657__$1;
(statearr_16664_16684[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (3))){
var inst_16655 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16657__$1,inst_16655);
} else {
if((state_val_16658 === (12))){
var state_16657__$1 = state_16657;
var statearr_16665_16685 = state_16657__$1;
(statearr_16665_16685[(2)] = null);

(statearr_16665_16685[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (2))){
var inst_16634 = (state_16657[(7)]);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16634)){
var statearr_16666_16686 = state_16657__$1;
(statearr_16666_16686[(1)] = (4));

} else {
var statearr_16667_16687 = state_16657__$1;
(statearr_16667_16687[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (11))){
var inst_16648 = cljs.core.async.close_BANG_(ch);
var state_16657__$1 = state_16657;
var statearr_16668_16688 = state_16657__$1;
(statearr_16668_16688[(2)] = inst_16648);

(statearr_16668_16688[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (9))){
var state_16657__$1 = state_16657;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16669_16689 = state_16657__$1;
(statearr_16669_16689[(1)] = (11));

} else {
var statearr_16670_16690 = state_16657__$1;
(statearr_16670_16690[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (5))){
var inst_16634 = (state_16657[(7)]);
var state_16657__$1 = state_16657;
var statearr_16671_16691 = state_16657__$1;
(statearr_16671_16691[(2)] = inst_16634);

(statearr_16671_16691[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (10))){
var inst_16653 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16672_16692 = state_16657__$1;
(statearr_16672_16692[(2)] = inst_16653);

(statearr_16672_16692[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (8))){
var inst_16634 = (state_16657[(7)]);
var inst_16644 = cljs.core.next(inst_16634);
var inst_16634__$1 = inst_16644;
var state_16657__$1 = (function (){var statearr_16673 = state_16657;
(statearr_16673[(7)] = inst_16634__$1);

return statearr_16673;
})();
var statearr_16674_16693 = state_16657__$1;
(statearr_16674_16693[(2)] = null);

(statearr_16674_16693[(1)] = (2));


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
});})(c__14229__auto__))
;
return ((function (switch__14048__auto__,c__14229__auto__){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_16675 = [null,null,null,null,null,null,null,null];
(statearr_16675[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_16675[(1)] = (1));

return statearr_16675;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_16657){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16657);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16676){if((e16676 instanceof Object)){
var ex__14052__auto__ = e16676;
var statearr_16677_16694 = state_16657;
(statearr_16677_16694[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16657);

return cljs.core.cst$kw$recur;
} else {
throw e16676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16695 = state_16657;
state_16657 = G__16695;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_16657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_16657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__))
})();
var state__14231__auto__ = (function (){var statearr_16678 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16678[(6)] = c__14229__auto__);

return statearr_16678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__))
);

return c__14229__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async16696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16696 = (function (ch,cs,meta16697){
this.ch = ch;
this.cs = cs;
this.meta16697 = meta16697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16698,meta16697__$1){
var self__ = this;
var _16698__$1 = this;
return (new cljs.core.async.t_cljs$core$async16696(self__.ch,self__.cs,meta16697__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16698){
var self__ = this;
var _16698__$1 = this;
return self__.meta16697;
});})(cs))
;

cljs.core.async.t_cljs$core$async16696.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16696.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16696.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16696.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16696.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16696.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16697], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16696";

cljs.core.async.t_cljs$core$async16696.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16696");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16696.
 */
cljs.core.async.__GT_t_cljs$core$async16696 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16696(ch__$1,cs__$1,meta16697){
return (new cljs.core.async.t_cljs$core$async16696(ch__$1,cs__$1,meta16697));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16696(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14229__auto___16918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___16918,cs,m,dchan,dctr,done){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___16918,cs,m,dchan,dctr,done){
return (function (state_16833){
var state_val_16834 = (state_16833[(1)]);
if((state_val_16834 === (7))){
var inst_16829 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16835_16919 = state_16833__$1;
(statearr_16835_16919[(2)] = inst_16829);

(statearr_16835_16919[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (20))){
var inst_16732 = (state_16833[(7)]);
var inst_16744 = cljs.core.first(inst_16732);
var inst_16745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16744,(0),null);
var inst_16746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16744,(1),null);
var state_16833__$1 = (function (){var statearr_16836 = state_16833;
(statearr_16836[(8)] = inst_16745);

return statearr_16836;
})();
if(cljs.core.truth_(inst_16746)){
var statearr_16837_16920 = state_16833__$1;
(statearr_16837_16920[(1)] = (22));

} else {
var statearr_16838_16921 = state_16833__$1;
(statearr_16838_16921[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (27))){
var inst_16701 = (state_16833[(9)]);
var inst_16774 = (state_16833[(10)]);
var inst_16781 = (state_16833[(11)]);
var inst_16776 = (state_16833[(12)]);
var inst_16781__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16774,inst_16776);
var inst_16782 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16781__$1,inst_16701,done);
var state_16833__$1 = (function (){var statearr_16839 = state_16833;
(statearr_16839[(11)] = inst_16781__$1);

return statearr_16839;
})();
if(cljs.core.truth_(inst_16782)){
var statearr_16840_16922 = state_16833__$1;
(statearr_16840_16922[(1)] = (30));

} else {
var statearr_16841_16923 = state_16833__$1;
(statearr_16841_16923[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (1))){
var state_16833__$1 = state_16833;
var statearr_16842_16924 = state_16833__$1;
(statearr_16842_16924[(2)] = null);

(statearr_16842_16924[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (24))){
var inst_16732 = (state_16833[(7)]);
var inst_16751 = (state_16833[(2)]);
var inst_16752 = cljs.core.next(inst_16732);
var inst_16710 = inst_16752;
var inst_16711 = null;
var inst_16712 = (0);
var inst_16713 = (0);
var state_16833__$1 = (function (){var statearr_16843 = state_16833;
(statearr_16843[(13)] = inst_16712);

(statearr_16843[(14)] = inst_16751);

(statearr_16843[(15)] = inst_16713);

(statearr_16843[(16)] = inst_16710);

(statearr_16843[(17)] = inst_16711);

return statearr_16843;
})();
var statearr_16844_16925 = state_16833__$1;
(statearr_16844_16925[(2)] = null);

(statearr_16844_16925[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (39))){
var state_16833__$1 = state_16833;
var statearr_16848_16926 = state_16833__$1;
(statearr_16848_16926[(2)] = null);

(statearr_16848_16926[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (4))){
var inst_16701 = (state_16833[(9)]);
var inst_16701__$1 = (state_16833[(2)]);
var inst_16702 = (inst_16701__$1 == null);
var state_16833__$1 = (function (){var statearr_16849 = state_16833;
(statearr_16849[(9)] = inst_16701__$1);

return statearr_16849;
})();
if(cljs.core.truth_(inst_16702)){
var statearr_16850_16927 = state_16833__$1;
(statearr_16850_16927[(1)] = (5));

} else {
var statearr_16851_16928 = state_16833__$1;
(statearr_16851_16928[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (15))){
var inst_16712 = (state_16833[(13)]);
var inst_16713 = (state_16833[(15)]);
var inst_16710 = (state_16833[(16)]);
var inst_16711 = (state_16833[(17)]);
var inst_16728 = (state_16833[(2)]);
var inst_16729 = (inst_16713 + (1));
var tmp16845 = inst_16712;
var tmp16846 = inst_16710;
var tmp16847 = inst_16711;
var inst_16710__$1 = tmp16846;
var inst_16711__$1 = tmp16847;
var inst_16712__$1 = tmp16845;
var inst_16713__$1 = inst_16729;
var state_16833__$1 = (function (){var statearr_16852 = state_16833;
(statearr_16852[(13)] = inst_16712__$1);

(statearr_16852[(15)] = inst_16713__$1);

(statearr_16852[(16)] = inst_16710__$1);

(statearr_16852[(17)] = inst_16711__$1);

(statearr_16852[(18)] = inst_16728);

return statearr_16852;
})();
var statearr_16853_16929 = state_16833__$1;
(statearr_16853_16929[(2)] = null);

(statearr_16853_16929[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (21))){
var inst_16755 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16857_16930 = state_16833__$1;
(statearr_16857_16930[(2)] = inst_16755);

(statearr_16857_16930[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (31))){
var inst_16781 = (state_16833[(11)]);
var inst_16785 = done(null);
var inst_16786 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16781);
var state_16833__$1 = (function (){var statearr_16858 = state_16833;
(statearr_16858[(19)] = inst_16785);

return statearr_16858;
})();
var statearr_16859_16931 = state_16833__$1;
(statearr_16859_16931[(2)] = inst_16786);

(statearr_16859_16931[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (32))){
var inst_16773 = (state_16833[(20)]);
var inst_16774 = (state_16833[(10)]);
var inst_16775 = (state_16833[(21)]);
var inst_16776 = (state_16833[(12)]);
var inst_16788 = (state_16833[(2)]);
var inst_16789 = (inst_16776 + (1));
var tmp16854 = inst_16773;
var tmp16855 = inst_16774;
var tmp16856 = inst_16775;
var inst_16773__$1 = tmp16854;
var inst_16774__$1 = tmp16855;
var inst_16775__$1 = tmp16856;
var inst_16776__$1 = inst_16789;
var state_16833__$1 = (function (){var statearr_16860 = state_16833;
(statearr_16860[(22)] = inst_16788);

(statearr_16860[(20)] = inst_16773__$1);

(statearr_16860[(10)] = inst_16774__$1);

(statearr_16860[(21)] = inst_16775__$1);

(statearr_16860[(12)] = inst_16776__$1);

return statearr_16860;
})();
var statearr_16861_16932 = state_16833__$1;
(statearr_16861_16932[(2)] = null);

(statearr_16861_16932[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (40))){
var inst_16801 = (state_16833[(23)]);
var inst_16805 = done(null);
var inst_16806 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16801);
var state_16833__$1 = (function (){var statearr_16862 = state_16833;
(statearr_16862[(24)] = inst_16805);

return statearr_16862;
})();
var statearr_16863_16933 = state_16833__$1;
(statearr_16863_16933[(2)] = inst_16806);

(statearr_16863_16933[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (33))){
var inst_16792 = (state_16833[(25)]);
var inst_16794 = cljs.core.chunked_seq_QMARK_(inst_16792);
var state_16833__$1 = state_16833;
if(inst_16794){
var statearr_16864_16934 = state_16833__$1;
(statearr_16864_16934[(1)] = (36));

} else {
var statearr_16865_16935 = state_16833__$1;
(statearr_16865_16935[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (13))){
var inst_16722 = (state_16833[(26)]);
var inst_16725 = cljs.core.async.close_BANG_(inst_16722);
var state_16833__$1 = state_16833;
var statearr_16866_16936 = state_16833__$1;
(statearr_16866_16936[(2)] = inst_16725);

(statearr_16866_16936[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (22))){
var inst_16745 = (state_16833[(8)]);
var inst_16748 = cljs.core.async.close_BANG_(inst_16745);
var state_16833__$1 = state_16833;
var statearr_16867_16937 = state_16833__$1;
(statearr_16867_16937[(2)] = inst_16748);

(statearr_16867_16937[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (36))){
var inst_16792 = (state_16833[(25)]);
var inst_16796 = cljs.core.chunk_first(inst_16792);
var inst_16797 = cljs.core.chunk_rest(inst_16792);
var inst_16798 = cljs.core.count(inst_16796);
var inst_16773 = inst_16797;
var inst_16774 = inst_16796;
var inst_16775 = inst_16798;
var inst_16776 = (0);
var state_16833__$1 = (function (){var statearr_16868 = state_16833;
(statearr_16868[(20)] = inst_16773);

(statearr_16868[(10)] = inst_16774);

(statearr_16868[(21)] = inst_16775);

(statearr_16868[(12)] = inst_16776);

return statearr_16868;
})();
var statearr_16869_16938 = state_16833__$1;
(statearr_16869_16938[(2)] = null);

(statearr_16869_16938[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (41))){
var inst_16792 = (state_16833[(25)]);
var inst_16808 = (state_16833[(2)]);
var inst_16809 = cljs.core.next(inst_16792);
var inst_16773 = inst_16809;
var inst_16774 = null;
var inst_16775 = (0);
var inst_16776 = (0);
var state_16833__$1 = (function (){var statearr_16870 = state_16833;
(statearr_16870[(20)] = inst_16773);

(statearr_16870[(10)] = inst_16774);

(statearr_16870[(27)] = inst_16808);

(statearr_16870[(21)] = inst_16775);

(statearr_16870[(12)] = inst_16776);

return statearr_16870;
})();
var statearr_16871_16939 = state_16833__$1;
(statearr_16871_16939[(2)] = null);

(statearr_16871_16939[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (43))){
var state_16833__$1 = state_16833;
var statearr_16872_16940 = state_16833__$1;
(statearr_16872_16940[(2)] = null);

(statearr_16872_16940[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (29))){
var inst_16817 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16873_16941 = state_16833__$1;
(statearr_16873_16941[(2)] = inst_16817);

(statearr_16873_16941[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (44))){
var inst_16826 = (state_16833[(2)]);
var state_16833__$1 = (function (){var statearr_16874 = state_16833;
(statearr_16874[(28)] = inst_16826);

return statearr_16874;
})();
var statearr_16875_16942 = state_16833__$1;
(statearr_16875_16942[(2)] = null);

(statearr_16875_16942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (6))){
var inst_16765 = (state_16833[(29)]);
var inst_16764 = cljs.core.deref(cs);
var inst_16765__$1 = cljs.core.keys(inst_16764);
var inst_16766 = cljs.core.count(inst_16765__$1);
var inst_16767 = cljs.core.reset_BANG_(dctr,inst_16766);
var inst_16772 = cljs.core.seq(inst_16765__$1);
var inst_16773 = inst_16772;
var inst_16774 = null;
var inst_16775 = (0);
var inst_16776 = (0);
var state_16833__$1 = (function (){var statearr_16876 = state_16833;
(statearr_16876[(20)] = inst_16773);

(statearr_16876[(29)] = inst_16765__$1);

(statearr_16876[(30)] = inst_16767);

(statearr_16876[(10)] = inst_16774);

(statearr_16876[(21)] = inst_16775);

(statearr_16876[(12)] = inst_16776);

return statearr_16876;
})();
var statearr_16877_16943 = state_16833__$1;
(statearr_16877_16943[(2)] = null);

(statearr_16877_16943[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (28))){
var inst_16773 = (state_16833[(20)]);
var inst_16792 = (state_16833[(25)]);
var inst_16792__$1 = cljs.core.seq(inst_16773);
var state_16833__$1 = (function (){var statearr_16878 = state_16833;
(statearr_16878[(25)] = inst_16792__$1);

return statearr_16878;
})();
if(inst_16792__$1){
var statearr_16879_16944 = state_16833__$1;
(statearr_16879_16944[(1)] = (33));

} else {
var statearr_16880_16945 = state_16833__$1;
(statearr_16880_16945[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (25))){
var inst_16775 = (state_16833[(21)]);
var inst_16776 = (state_16833[(12)]);
var inst_16778 = (inst_16776 < inst_16775);
var inst_16779 = inst_16778;
var state_16833__$1 = state_16833;
if(cljs.core.truth_(inst_16779)){
var statearr_16881_16946 = state_16833__$1;
(statearr_16881_16946[(1)] = (27));

} else {
var statearr_16882_16947 = state_16833__$1;
(statearr_16882_16947[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (34))){
var state_16833__$1 = state_16833;
var statearr_16883_16948 = state_16833__$1;
(statearr_16883_16948[(2)] = null);

(statearr_16883_16948[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (17))){
var state_16833__$1 = state_16833;
var statearr_16884_16949 = state_16833__$1;
(statearr_16884_16949[(2)] = null);

(statearr_16884_16949[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (3))){
var inst_16831 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16833__$1,inst_16831);
} else {
if((state_val_16834 === (12))){
var inst_16760 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16885_16950 = state_16833__$1;
(statearr_16885_16950[(2)] = inst_16760);

(statearr_16885_16950[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (2))){
var state_16833__$1 = state_16833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16833__$1,(4),ch);
} else {
if((state_val_16834 === (23))){
var state_16833__$1 = state_16833;
var statearr_16886_16951 = state_16833__$1;
(statearr_16886_16951[(2)] = null);

(statearr_16886_16951[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (35))){
var inst_16815 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16887_16952 = state_16833__$1;
(statearr_16887_16952[(2)] = inst_16815);

(statearr_16887_16952[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (19))){
var inst_16732 = (state_16833[(7)]);
var inst_16736 = cljs.core.chunk_first(inst_16732);
var inst_16737 = cljs.core.chunk_rest(inst_16732);
var inst_16738 = cljs.core.count(inst_16736);
var inst_16710 = inst_16737;
var inst_16711 = inst_16736;
var inst_16712 = inst_16738;
var inst_16713 = (0);
var state_16833__$1 = (function (){var statearr_16888 = state_16833;
(statearr_16888[(13)] = inst_16712);

(statearr_16888[(15)] = inst_16713);

(statearr_16888[(16)] = inst_16710);

(statearr_16888[(17)] = inst_16711);

return statearr_16888;
})();
var statearr_16889_16953 = state_16833__$1;
(statearr_16889_16953[(2)] = null);

(statearr_16889_16953[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (11))){
var inst_16710 = (state_16833[(16)]);
var inst_16732 = (state_16833[(7)]);
var inst_16732__$1 = cljs.core.seq(inst_16710);
var state_16833__$1 = (function (){var statearr_16890 = state_16833;
(statearr_16890[(7)] = inst_16732__$1);

return statearr_16890;
})();
if(inst_16732__$1){
var statearr_16891_16954 = state_16833__$1;
(statearr_16891_16954[(1)] = (16));

} else {
var statearr_16892_16955 = state_16833__$1;
(statearr_16892_16955[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (9))){
var inst_16762 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16893_16956 = state_16833__$1;
(statearr_16893_16956[(2)] = inst_16762);

(statearr_16893_16956[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (5))){
var inst_16708 = cljs.core.deref(cs);
var inst_16709 = cljs.core.seq(inst_16708);
var inst_16710 = inst_16709;
var inst_16711 = null;
var inst_16712 = (0);
var inst_16713 = (0);
var state_16833__$1 = (function (){var statearr_16894 = state_16833;
(statearr_16894[(13)] = inst_16712);

(statearr_16894[(15)] = inst_16713);

(statearr_16894[(16)] = inst_16710);

(statearr_16894[(17)] = inst_16711);

return statearr_16894;
})();
var statearr_16895_16957 = state_16833__$1;
(statearr_16895_16957[(2)] = null);

(statearr_16895_16957[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (14))){
var state_16833__$1 = state_16833;
var statearr_16896_16958 = state_16833__$1;
(statearr_16896_16958[(2)] = null);

(statearr_16896_16958[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (45))){
var inst_16823 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16897_16959 = state_16833__$1;
(statearr_16897_16959[(2)] = inst_16823);

(statearr_16897_16959[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (26))){
var inst_16765 = (state_16833[(29)]);
var inst_16819 = (state_16833[(2)]);
var inst_16820 = cljs.core.seq(inst_16765);
var state_16833__$1 = (function (){var statearr_16898 = state_16833;
(statearr_16898[(31)] = inst_16819);

return statearr_16898;
})();
if(inst_16820){
var statearr_16899_16960 = state_16833__$1;
(statearr_16899_16960[(1)] = (42));

} else {
var statearr_16900_16961 = state_16833__$1;
(statearr_16900_16961[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (16))){
var inst_16732 = (state_16833[(7)]);
var inst_16734 = cljs.core.chunked_seq_QMARK_(inst_16732);
var state_16833__$1 = state_16833;
if(inst_16734){
var statearr_16901_16962 = state_16833__$1;
(statearr_16901_16962[(1)] = (19));

} else {
var statearr_16902_16963 = state_16833__$1;
(statearr_16902_16963[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (38))){
var inst_16812 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16903_16964 = state_16833__$1;
(statearr_16903_16964[(2)] = inst_16812);

(statearr_16903_16964[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (30))){
var state_16833__$1 = state_16833;
var statearr_16904_16965 = state_16833__$1;
(statearr_16904_16965[(2)] = null);

(statearr_16904_16965[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (10))){
var inst_16713 = (state_16833[(15)]);
var inst_16711 = (state_16833[(17)]);
var inst_16721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16711,inst_16713);
var inst_16722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16721,(0),null);
var inst_16723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16721,(1),null);
var state_16833__$1 = (function (){var statearr_16905 = state_16833;
(statearr_16905[(26)] = inst_16722);

return statearr_16905;
})();
if(cljs.core.truth_(inst_16723)){
var statearr_16906_16966 = state_16833__$1;
(statearr_16906_16966[(1)] = (13));

} else {
var statearr_16907_16967 = state_16833__$1;
(statearr_16907_16967[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (18))){
var inst_16758 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16908_16968 = state_16833__$1;
(statearr_16908_16968[(2)] = inst_16758);

(statearr_16908_16968[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (42))){
var state_16833__$1 = state_16833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16833__$1,(45),dchan);
} else {
if((state_val_16834 === (37))){
var inst_16701 = (state_16833[(9)]);
var inst_16792 = (state_16833[(25)]);
var inst_16801 = (state_16833[(23)]);
var inst_16801__$1 = cljs.core.first(inst_16792);
var inst_16802 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16801__$1,inst_16701,done);
var state_16833__$1 = (function (){var statearr_16909 = state_16833;
(statearr_16909[(23)] = inst_16801__$1);

return statearr_16909;
})();
if(cljs.core.truth_(inst_16802)){
var statearr_16910_16969 = state_16833__$1;
(statearr_16910_16969[(1)] = (39));

} else {
var statearr_16911_16970 = state_16833__$1;
(statearr_16911_16970[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16834 === (8))){
var inst_16712 = (state_16833[(13)]);
var inst_16713 = (state_16833[(15)]);
var inst_16715 = (inst_16713 < inst_16712);
var inst_16716 = inst_16715;
var state_16833__$1 = state_16833;
if(cljs.core.truth_(inst_16716)){
var statearr_16912_16971 = state_16833__$1;
(statearr_16912_16971[(1)] = (10));

} else {
var statearr_16913_16972 = state_16833__$1;
(statearr_16913_16972[(1)] = (11));

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
});})(c__14229__auto___16918,cs,m,dchan,dctr,done))
;
return ((function (switch__14048__auto__,c__14229__auto___16918,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14049__auto__ = null;
var cljs$core$async$mult_$_state_machine__14049__auto____0 = (function (){
var statearr_16914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16914[(0)] = cljs$core$async$mult_$_state_machine__14049__auto__);

(statearr_16914[(1)] = (1));

return statearr_16914;
});
var cljs$core$async$mult_$_state_machine__14049__auto____1 = (function (state_16833){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_16833);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e16915){if((e16915 instanceof Object)){
var ex__14052__auto__ = e16915;
var statearr_16916_16973 = state_16833;
(statearr_16916_16973[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16833);

return cljs.core.cst$kw$recur;
} else {
throw e16915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__16974 = state_16833;
state_16833 = G__16974;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14049__auto__ = function(state_16833){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14049__auto____1.call(this,state_16833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14049__auto____0;
cljs$core$async$mult_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14049__auto____1;
return cljs$core$async$mult_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___16918,cs,m,dchan,dctr,done))
})();
var state__14231__auto__ = (function (){var statearr_16917 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_16917[(6)] = c__14229__auto___16918);

return statearr_16917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___16918,cs,m,dchan,dctr,done))
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
var G__16976 = arguments.length;
switch (G__16976) {
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
var len__4497__auto___16988 = arguments.length;
var i__4498__auto___16989 = (0);
while(true){
if((i__4498__auto___16989 < len__4497__auto___16988)){
args__4500__auto__.push((arguments[i__4498__auto___16989]));

var G__16990 = (i__4498__auto___16989 + (1));
i__4498__auto___16989 = G__16990;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16982){
var map__16983 = p__16982;
var map__16983__$1 = ((((!((map__16983 == null)))?(((((map__16983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16983):map__16983);
var opts = map__16983__$1;
var statearr_16985_16991 = state;
(statearr_16985_16991[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__16983,map__16983__$1,opts){
return (function (val){
var statearr_16986_16992 = state;
(statearr_16986_16992[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16983,map__16983__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_16987_16993 = state;
(statearr_16987_16993[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16978){
var G__16979 = cljs.core.first(seq16978);
var seq16978__$1 = cljs.core.next(seq16978);
var G__16980 = cljs.core.first(seq16978__$1);
var seq16978__$2 = cljs.core.next(seq16978__$1);
var G__16981 = cljs.core.first(seq16978__$2);
var seq16978__$3 = cljs.core.next(seq16978__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16979,G__16980,G__16981,seq16978__$3);
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
if(typeof cljs.core.async.t_cljs$core$async16994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16994 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16995){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16995 = meta16995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16996,meta16995__$1){
var self__ = this;
var _16996__$1 = this;
return (new cljs.core.async.t_cljs$core$async16994(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16995__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16996){
var self__ = this;
var _16996__$1 = this;
return self__.meta16995;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16994.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16995], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16994";

cljs.core.async.t_cljs$core$async16994.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16994");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16994.
 */
cljs.core.async.__GT_t_cljs$core$async16994 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16994(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16995){
return (new cljs.core.async.t_cljs$core$async16994(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16995));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16994(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14229__auto___17158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___17158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___17158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17098){
var state_val_17099 = (state_17098[(1)]);
if((state_val_17099 === (7))){
var inst_17013 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
var statearr_17100_17159 = state_17098__$1;
(statearr_17100_17159[(2)] = inst_17013);

(statearr_17100_17159[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (20))){
var inst_17025 = (state_17098[(7)]);
var state_17098__$1 = state_17098;
var statearr_17101_17160 = state_17098__$1;
(statearr_17101_17160[(2)] = inst_17025);

(statearr_17101_17160[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (27))){
var state_17098__$1 = state_17098;
var statearr_17102_17161 = state_17098__$1;
(statearr_17102_17161[(2)] = null);

(statearr_17102_17161[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (1))){
var inst_17000 = (state_17098[(8)]);
var inst_17000__$1 = calc_state();
var inst_17002 = (inst_17000__$1 == null);
var inst_17003 = cljs.core.not(inst_17002);
var state_17098__$1 = (function (){var statearr_17103 = state_17098;
(statearr_17103[(8)] = inst_17000__$1);

return statearr_17103;
})();
if(inst_17003){
var statearr_17104_17162 = state_17098__$1;
(statearr_17104_17162[(1)] = (2));

} else {
var statearr_17105_17163 = state_17098__$1;
(statearr_17105_17163[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (24))){
var inst_17049 = (state_17098[(9)]);
var inst_17058 = (state_17098[(10)]);
var inst_17072 = (state_17098[(11)]);
var inst_17072__$1 = (inst_17049.cljs$core$IFn$_invoke$arity$1 ? inst_17049.cljs$core$IFn$_invoke$arity$1(inst_17058) : inst_17049.call(null,inst_17058));
var state_17098__$1 = (function (){var statearr_17106 = state_17098;
(statearr_17106[(11)] = inst_17072__$1);

return statearr_17106;
})();
if(cljs.core.truth_(inst_17072__$1)){
var statearr_17107_17164 = state_17098__$1;
(statearr_17107_17164[(1)] = (29));

} else {
var statearr_17108_17165 = state_17098__$1;
(statearr_17108_17165[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (4))){
var inst_17016 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
if(cljs.core.truth_(inst_17016)){
var statearr_17109_17166 = state_17098__$1;
(statearr_17109_17166[(1)] = (8));

} else {
var statearr_17110_17167 = state_17098__$1;
(statearr_17110_17167[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (15))){
var inst_17043 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
if(cljs.core.truth_(inst_17043)){
var statearr_17111_17168 = state_17098__$1;
(statearr_17111_17168[(1)] = (19));

} else {
var statearr_17112_17169 = state_17098__$1;
(statearr_17112_17169[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (21))){
var inst_17048 = (state_17098[(12)]);
var inst_17048__$1 = (state_17098[(2)]);
var inst_17049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17048__$1,cljs.core.cst$kw$solos);
var inst_17050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17048__$1,cljs.core.cst$kw$mutes);
var inst_17051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17048__$1,cljs.core.cst$kw$reads);
var state_17098__$1 = (function (){var statearr_17113 = state_17098;
(statearr_17113[(9)] = inst_17049);

(statearr_17113[(13)] = inst_17050);

(statearr_17113[(12)] = inst_17048__$1);

return statearr_17113;
})();
return cljs.core.async.ioc_alts_BANG_(state_17098__$1,(22),inst_17051);
} else {
if((state_val_17099 === (31))){
var inst_17080 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
if(cljs.core.truth_(inst_17080)){
var statearr_17114_17170 = state_17098__$1;
(statearr_17114_17170[(1)] = (32));

} else {
var statearr_17115_17171 = state_17098__$1;
(statearr_17115_17171[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (32))){
var inst_17057 = (state_17098[(14)]);
var state_17098__$1 = state_17098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17098__$1,(35),out,inst_17057);
} else {
if((state_val_17099 === (33))){
var inst_17048 = (state_17098[(12)]);
var inst_17025 = inst_17048;
var state_17098__$1 = (function (){var statearr_17116 = state_17098;
(statearr_17116[(7)] = inst_17025);

return statearr_17116;
})();
var statearr_17117_17172 = state_17098__$1;
(statearr_17117_17172[(2)] = null);

(statearr_17117_17172[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (13))){
var inst_17025 = (state_17098[(7)]);
var inst_17032 = inst_17025.cljs$lang$protocol_mask$partition0$;
var inst_17033 = (inst_17032 & (64));
var inst_17034 = inst_17025.cljs$core$ISeq$;
var inst_17035 = (cljs.core.PROTOCOL_SENTINEL === inst_17034);
var inst_17036 = ((inst_17033) || (inst_17035));
var state_17098__$1 = state_17098;
if(cljs.core.truth_(inst_17036)){
var statearr_17118_17173 = state_17098__$1;
(statearr_17118_17173[(1)] = (16));

} else {
var statearr_17119_17174 = state_17098__$1;
(statearr_17119_17174[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (22))){
var inst_17058 = (state_17098[(10)]);
var inst_17057 = (state_17098[(14)]);
var inst_17056 = (state_17098[(2)]);
var inst_17057__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17056,(0),null);
var inst_17058__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17056,(1),null);
var inst_17059 = (inst_17057__$1 == null);
var inst_17060 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17058__$1,change);
var inst_17061 = ((inst_17059) || (inst_17060));
var state_17098__$1 = (function (){var statearr_17120 = state_17098;
(statearr_17120[(10)] = inst_17058__$1);

(statearr_17120[(14)] = inst_17057__$1);

return statearr_17120;
})();
if(cljs.core.truth_(inst_17061)){
var statearr_17121_17175 = state_17098__$1;
(statearr_17121_17175[(1)] = (23));

} else {
var statearr_17122_17176 = state_17098__$1;
(statearr_17122_17176[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (36))){
var inst_17048 = (state_17098[(12)]);
var inst_17025 = inst_17048;
var state_17098__$1 = (function (){var statearr_17123 = state_17098;
(statearr_17123[(7)] = inst_17025);

return statearr_17123;
})();
var statearr_17124_17177 = state_17098__$1;
(statearr_17124_17177[(2)] = null);

(statearr_17124_17177[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (29))){
var inst_17072 = (state_17098[(11)]);
var state_17098__$1 = state_17098;
var statearr_17125_17178 = state_17098__$1;
(statearr_17125_17178[(2)] = inst_17072);

(statearr_17125_17178[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (6))){
var state_17098__$1 = state_17098;
var statearr_17126_17179 = state_17098__$1;
(statearr_17126_17179[(2)] = false);

(statearr_17126_17179[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (28))){
var inst_17068 = (state_17098[(2)]);
var inst_17069 = calc_state();
var inst_17025 = inst_17069;
var state_17098__$1 = (function (){var statearr_17127 = state_17098;
(statearr_17127[(15)] = inst_17068);

(statearr_17127[(7)] = inst_17025);

return statearr_17127;
})();
var statearr_17128_17180 = state_17098__$1;
(statearr_17128_17180[(2)] = null);

(statearr_17128_17180[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (25))){
var inst_17094 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
var statearr_17129_17181 = state_17098__$1;
(statearr_17129_17181[(2)] = inst_17094);

(statearr_17129_17181[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (34))){
var inst_17092 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
var statearr_17130_17182 = state_17098__$1;
(statearr_17130_17182[(2)] = inst_17092);

(statearr_17130_17182[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (17))){
var state_17098__$1 = state_17098;
var statearr_17131_17183 = state_17098__$1;
(statearr_17131_17183[(2)] = false);

(statearr_17131_17183[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (3))){
var state_17098__$1 = state_17098;
var statearr_17132_17184 = state_17098__$1;
(statearr_17132_17184[(2)] = false);

(statearr_17132_17184[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (12))){
var inst_17096 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17098__$1,inst_17096);
} else {
if((state_val_17099 === (2))){
var inst_17000 = (state_17098[(8)]);
var inst_17005 = inst_17000.cljs$lang$protocol_mask$partition0$;
var inst_17006 = (inst_17005 & (64));
var inst_17007 = inst_17000.cljs$core$ISeq$;
var inst_17008 = (cljs.core.PROTOCOL_SENTINEL === inst_17007);
var inst_17009 = ((inst_17006) || (inst_17008));
var state_17098__$1 = state_17098;
if(cljs.core.truth_(inst_17009)){
var statearr_17133_17185 = state_17098__$1;
(statearr_17133_17185[(1)] = (5));

} else {
var statearr_17134_17186 = state_17098__$1;
(statearr_17134_17186[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (23))){
var inst_17057 = (state_17098[(14)]);
var inst_17063 = (inst_17057 == null);
var state_17098__$1 = state_17098;
if(cljs.core.truth_(inst_17063)){
var statearr_17135_17187 = state_17098__$1;
(statearr_17135_17187[(1)] = (26));

} else {
var statearr_17136_17188 = state_17098__$1;
(statearr_17136_17188[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (35))){
var inst_17083 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
if(cljs.core.truth_(inst_17083)){
var statearr_17137_17189 = state_17098__$1;
(statearr_17137_17189[(1)] = (36));

} else {
var statearr_17138_17190 = state_17098__$1;
(statearr_17138_17190[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (19))){
var inst_17025 = (state_17098[(7)]);
var inst_17045 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17025);
var state_17098__$1 = state_17098;
var statearr_17139_17191 = state_17098__$1;
(statearr_17139_17191[(2)] = inst_17045);

(statearr_17139_17191[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (11))){
var inst_17025 = (state_17098[(7)]);
var inst_17029 = (inst_17025 == null);
var inst_17030 = cljs.core.not(inst_17029);
var state_17098__$1 = state_17098;
if(inst_17030){
var statearr_17140_17192 = state_17098__$1;
(statearr_17140_17192[(1)] = (13));

} else {
var statearr_17141_17193 = state_17098__$1;
(statearr_17141_17193[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (9))){
var inst_17000 = (state_17098[(8)]);
var state_17098__$1 = state_17098;
var statearr_17142_17194 = state_17098__$1;
(statearr_17142_17194[(2)] = inst_17000);

(statearr_17142_17194[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (5))){
var state_17098__$1 = state_17098;
var statearr_17143_17195 = state_17098__$1;
(statearr_17143_17195[(2)] = true);

(statearr_17143_17195[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (14))){
var state_17098__$1 = state_17098;
var statearr_17144_17196 = state_17098__$1;
(statearr_17144_17196[(2)] = false);

(statearr_17144_17196[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (26))){
var inst_17058 = (state_17098[(10)]);
var inst_17065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17058);
var state_17098__$1 = state_17098;
var statearr_17145_17197 = state_17098__$1;
(statearr_17145_17197[(2)] = inst_17065);

(statearr_17145_17197[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (16))){
var state_17098__$1 = state_17098;
var statearr_17146_17198 = state_17098__$1;
(statearr_17146_17198[(2)] = true);

(statearr_17146_17198[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (38))){
var inst_17088 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
var statearr_17147_17199 = state_17098__$1;
(statearr_17147_17199[(2)] = inst_17088);

(statearr_17147_17199[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (30))){
var inst_17049 = (state_17098[(9)]);
var inst_17058 = (state_17098[(10)]);
var inst_17050 = (state_17098[(13)]);
var inst_17075 = cljs.core.empty_QMARK_(inst_17049);
var inst_17076 = (inst_17050.cljs$core$IFn$_invoke$arity$1 ? inst_17050.cljs$core$IFn$_invoke$arity$1(inst_17058) : inst_17050.call(null,inst_17058));
var inst_17077 = cljs.core.not(inst_17076);
var inst_17078 = ((inst_17075) && (inst_17077));
var state_17098__$1 = state_17098;
var statearr_17148_17200 = state_17098__$1;
(statearr_17148_17200[(2)] = inst_17078);

(statearr_17148_17200[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (10))){
var inst_17000 = (state_17098[(8)]);
var inst_17021 = (state_17098[(2)]);
var inst_17022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17021,cljs.core.cst$kw$solos);
var inst_17023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17021,cljs.core.cst$kw$mutes);
var inst_17024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17021,cljs.core.cst$kw$reads);
var inst_17025 = inst_17000;
var state_17098__$1 = (function (){var statearr_17149 = state_17098;
(statearr_17149[(16)] = inst_17022);

(statearr_17149[(17)] = inst_17023);

(statearr_17149[(7)] = inst_17025);

(statearr_17149[(18)] = inst_17024);

return statearr_17149;
})();
var statearr_17150_17201 = state_17098__$1;
(statearr_17150_17201[(2)] = null);

(statearr_17150_17201[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (18))){
var inst_17040 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
var statearr_17151_17202 = state_17098__$1;
(statearr_17151_17202[(2)] = inst_17040);

(statearr_17151_17202[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (37))){
var state_17098__$1 = state_17098;
var statearr_17152_17203 = state_17098__$1;
(statearr_17152_17203[(2)] = null);

(statearr_17152_17203[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (8))){
var inst_17000 = (state_17098[(8)]);
var inst_17018 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17000);
var state_17098__$1 = state_17098;
var statearr_17153_17204 = state_17098__$1;
(statearr_17153_17204[(2)] = inst_17018);

(statearr_17153_17204[(1)] = (10));


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
});})(c__14229__auto___17158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14048__auto__,c__14229__auto___17158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14049__auto__ = null;
var cljs$core$async$mix_$_state_machine__14049__auto____0 = (function (){
var statearr_17154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17154[(0)] = cljs$core$async$mix_$_state_machine__14049__auto__);

(statearr_17154[(1)] = (1));

return statearr_17154;
});
var cljs$core$async$mix_$_state_machine__14049__auto____1 = (function (state_17098){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17098);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e17155){if((e17155 instanceof Object)){
var ex__14052__auto__ = e17155;
var statearr_17156_17205 = state_17098;
(statearr_17156_17205[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17098);

return cljs.core.cst$kw$recur;
} else {
throw e17155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__17206 = state_17098;
state_17098 = G__17206;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14049__auto__ = function(state_17098){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14049__auto____1.call(this,state_17098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14049__auto____0;
cljs$core$async$mix_$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14049__auto____1;
return cljs$core$async$mix_$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___17158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14231__auto__ = (function (){var statearr_17157 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_17157[(6)] = c__14229__auto___17158);

return statearr_17157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___17158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__17208 = arguments.length;
switch (G__17208) {
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
var G__17212 = arguments.length;
switch (G__17212) {
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
return (function (p1__17210_SHARP_){
if(cljs.core.truth_((p1__17210_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17210_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17210_SHARP_.call(null,topic)))){
return p1__17210_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17210_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17213 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17214){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17214 = meta17214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17215,meta17214__$1){
var self__ = this;
var _17215__$1 = this;
return (new cljs.core.async.t_cljs$core$async17213(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17214__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17215){
var self__ = this;
var _17215__$1 = this;
return self__.meta17214;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17213.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17214], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17213";

cljs.core.async.t_cljs$core$async17213.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17213");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17213.
 */
cljs.core.async.__GT_t_cljs$core$async17213 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17213(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17214){
return (new cljs.core.async.t_cljs$core$async17213(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17214));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17213(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14229__auto___17333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___17333,mults,ensure_mult,p){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___17333,mults,ensure_mult,p){
return (function (state_17287){
var state_val_17288 = (state_17287[(1)]);
if((state_val_17288 === (7))){
var inst_17283 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17289_17334 = state_17287__$1;
(statearr_17289_17334[(2)] = inst_17283);

(statearr_17289_17334[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (20))){
var state_17287__$1 = state_17287;
var statearr_17290_17335 = state_17287__$1;
(statearr_17290_17335[(2)] = null);

(statearr_17290_17335[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (1))){
var state_17287__$1 = state_17287;
var statearr_17291_17336 = state_17287__$1;
(statearr_17291_17336[(2)] = null);

(statearr_17291_17336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (24))){
var inst_17266 = (state_17287[(7)]);
var inst_17275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17266);
var state_17287__$1 = state_17287;
var statearr_17292_17337 = state_17287__$1;
(statearr_17292_17337[(2)] = inst_17275);

(statearr_17292_17337[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (4))){
var inst_17218 = (state_17287[(8)]);
var inst_17218__$1 = (state_17287[(2)]);
var inst_17219 = (inst_17218__$1 == null);
var state_17287__$1 = (function (){var statearr_17293 = state_17287;
(statearr_17293[(8)] = inst_17218__$1);

return statearr_17293;
})();
if(cljs.core.truth_(inst_17219)){
var statearr_17294_17338 = state_17287__$1;
(statearr_17294_17338[(1)] = (5));

} else {
var statearr_17295_17339 = state_17287__$1;
(statearr_17295_17339[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (15))){
var inst_17260 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17296_17340 = state_17287__$1;
(statearr_17296_17340[(2)] = inst_17260);

(statearr_17296_17340[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (21))){
var inst_17280 = (state_17287[(2)]);
var state_17287__$1 = (function (){var statearr_17297 = state_17287;
(statearr_17297[(9)] = inst_17280);

return statearr_17297;
})();
var statearr_17298_17341 = state_17287__$1;
(statearr_17298_17341[(2)] = null);

(statearr_17298_17341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (13))){
var inst_17242 = (state_17287[(10)]);
var inst_17244 = cljs.core.chunked_seq_QMARK_(inst_17242);
var state_17287__$1 = state_17287;
if(inst_17244){
var statearr_17299_17342 = state_17287__$1;
(statearr_17299_17342[(1)] = (16));

} else {
var statearr_17300_17343 = state_17287__$1;
(statearr_17300_17343[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (22))){
var inst_17272 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
if(cljs.core.truth_(inst_17272)){
var statearr_17301_17344 = state_17287__$1;
(statearr_17301_17344[(1)] = (23));

} else {
var statearr_17302_17345 = state_17287__$1;
(statearr_17302_17345[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (6))){
var inst_17266 = (state_17287[(7)]);
var inst_17218 = (state_17287[(8)]);
var inst_17268 = (state_17287[(11)]);
var inst_17266__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17218) : topic_fn.call(null,inst_17218));
var inst_17267 = cljs.core.deref(mults);
var inst_17268__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17267,inst_17266__$1);
var state_17287__$1 = (function (){var statearr_17303 = state_17287;
(statearr_17303[(7)] = inst_17266__$1);

(statearr_17303[(11)] = inst_17268__$1);

return statearr_17303;
})();
if(cljs.core.truth_(inst_17268__$1)){
var statearr_17304_17346 = state_17287__$1;
(statearr_17304_17346[(1)] = (19));

} else {
var statearr_17305_17347 = state_17287__$1;
(statearr_17305_17347[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (25))){
var inst_17277 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17306_17348 = state_17287__$1;
(statearr_17306_17348[(2)] = inst_17277);

(statearr_17306_17348[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (17))){
var inst_17242 = (state_17287[(10)]);
var inst_17251 = cljs.core.first(inst_17242);
var inst_17252 = cljs.core.async.muxch_STAR_(inst_17251);
var inst_17253 = cljs.core.async.close_BANG_(inst_17252);
var inst_17254 = cljs.core.next(inst_17242);
var inst_17228 = inst_17254;
var inst_17229 = null;
var inst_17230 = (0);
var inst_17231 = (0);
var state_17287__$1 = (function (){var statearr_17307 = state_17287;
(statearr_17307[(12)] = inst_17231);

(statearr_17307[(13)] = inst_17229);

(statearr_17307[(14)] = inst_17228);

(statearr_17307[(15)] = inst_17253);

(statearr_17307[(16)] = inst_17230);

return statearr_17307;
})();
var statearr_17308_17349 = state_17287__$1;
(statearr_17308_17349[(2)] = null);

(statearr_17308_17349[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (3))){
var inst_17285 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17287__$1,inst_17285);
} else {
if((state_val_17288 === (12))){
var inst_17262 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17309_17350 = state_17287__$1;
(statearr_17309_17350[(2)] = inst_17262);

(statearr_17309_17350[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (2))){
var state_17287__$1 = state_17287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17287__$1,(4),ch);
} else {
if((state_val_17288 === (23))){
var state_17287__$1 = state_17287;
var statearr_17310_17351 = state_17287__$1;
(statearr_17310_17351[(2)] = null);

(statearr_17310_17351[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (19))){
var inst_17218 = (state_17287[(8)]);
var inst_17268 = (state_17287[(11)]);
var inst_17270 = cljs.core.async.muxch_STAR_(inst_17268);
var state_17287__$1 = state_17287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17287__$1,(22),inst_17270,inst_17218);
} else {
if((state_val_17288 === (11))){
var inst_17228 = (state_17287[(14)]);
var inst_17242 = (state_17287[(10)]);
var inst_17242__$1 = cljs.core.seq(inst_17228);
var state_17287__$1 = (function (){var statearr_17311 = state_17287;
(statearr_17311[(10)] = inst_17242__$1);

return statearr_17311;
})();
if(inst_17242__$1){
var statearr_17312_17352 = state_17287__$1;
(statearr_17312_17352[(1)] = (13));

} else {
var statearr_17313_17353 = state_17287__$1;
(statearr_17313_17353[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (9))){
var inst_17264 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17314_17354 = state_17287__$1;
(statearr_17314_17354[(2)] = inst_17264);

(statearr_17314_17354[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (5))){
var inst_17225 = cljs.core.deref(mults);
var inst_17226 = cljs.core.vals(inst_17225);
var inst_17227 = cljs.core.seq(inst_17226);
var inst_17228 = inst_17227;
var inst_17229 = null;
var inst_17230 = (0);
var inst_17231 = (0);
var state_17287__$1 = (function (){var statearr_17315 = state_17287;
(statearr_17315[(12)] = inst_17231);

(statearr_17315[(13)] = inst_17229);

(statearr_17315[(14)] = inst_17228);

(statearr_17315[(16)] = inst_17230);

return statearr_17315;
})();
var statearr_17316_17355 = state_17287__$1;
(statearr_17316_17355[(2)] = null);

(statearr_17316_17355[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (14))){
var state_17287__$1 = state_17287;
var statearr_17320_17356 = state_17287__$1;
(statearr_17320_17356[(2)] = null);

(statearr_17320_17356[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (16))){
var inst_17242 = (state_17287[(10)]);
var inst_17246 = cljs.core.chunk_first(inst_17242);
var inst_17247 = cljs.core.chunk_rest(inst_17242);
var inst_17248 = cljs.core.count(inst_17246);
var inst_17228 = inst_17247;
var inst_17229 = inst_17246;
var inst_17230 = inst_17248;
var inst_17231 = (0);
var state_17287__$1 = (function (){var statearr_17321 = state_17287;
(statearr_17321[(12)] = inst_17231);

(statearr_17321[(13)] = inst_17229);

(statearr_17321[(14)] = inst_17228);

(statearr_17321[(16)] = inst_17230);

return statearr_17321;
})();
var statearr_17322_17357 = state_17287__$1;
(statearr_17322_17357[(2)] = null);

(statearr_17322_17357[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (10))){
var inst_17231 = (state_17287[(12)]);
var inst_17229 = (state_17287[(13)]);
var inst_17228 = (state_17287[(14)]);
var inst_17230 = (state_17287[(16)]);
var inst_17236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17229,inst_17231);
var inst_17237 = cljs.core.async.muxch_STAR_(inst_17236);
var inst_17238 = cljs.core.async.close_BANG_(inst_17237);
var inst_17239 = (inst_17231 + (1));
var tmp17317 = inst_17229;
var tmp17318 = inst_17228;
var tmp17319 = inst_17230;
var inst_17228__$1 = tmp17318;
var inst_17229__$1 = tmp17317;
var inst_17230__$1 = tmp17319;
var inst_17231__$1 = inst_17239;
var state_17287__$1 = (function (){var statearr_17323 = state_17287;
(statearr_17323[(12)] = inst_17231__$1);

(statearr_17323[(13)] = inst_17229__$1);

(statearr_17323[(14)] = inst_17228__$1);

(statearr_17323[(17)] = inst_17238);

(statearr_17323[(16)] = inst_17230__$1);

return statearr_17323;
})();
var statearr_17324_17358 = state_17287__$1;
(statearr_17324_17358[(2)] = null);

(statearr_17324_17358[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (18))){
var inst_17257 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17325_17359 = state_17287__$1;
(statearr_17325_17359[(2)] = inst_17257);

(statearr_17325_17359[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17288 === (8))){
var inst_17231 = (state_17287[(12)]);
var inst_17230 = (state_17287[(16)]);
var inst_17233 = (inst_17231 < inst_17230);
var inst_17234 = inst_17233;
var state_17287__$1 = state_17287;
if(cljs.core.truth_(inst_17234)){
var statearr_17326_17360 = state_17287__$1;
(statearr_17326_17360[(1)] = (10));

} else {
var statearr_17327_17361 = state_17287__$1;
(statearr_17327_17361[(1)] = (11));

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
});})(c__14229__auto___17333,mults,ensure_mult,p))
;
return ((function (switch__14048__auto__,c__14229__auto___17333,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_17328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17328[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_17328[(1)] = (1));

return statearr_17328;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_17287){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17287);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e17329){if((e17329 instanceof Object)){
var ex__14052__auto__ = e17329;
var statearr_17330_17362 = state_17287;
(statearr_17330_17362[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17287);

return cljs.core.cst$kw$recur;
} else {
throw e17329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__17363 = state_17287;
state_17287 = G__17363;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_17287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_17287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___17333,mults,ensure_mult,p))
})();
var state__14231__auto__ = (function (){var statearr_17331 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_17331[(6)] = c__14229__auto___17333);

return statearr_17331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___17333,mults,ensure_mult,p))
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
var G__17365 = arguments.length;
switch (G__17365) {
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
var G__17368 = arguments.length;
switch (G__17368) {
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
var G__17371 = arguments.length;
switch (G__17371) {
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
var c__14229__auto___17438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___17438,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___17438,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17410){
var state_val_17411 = (state_17410[(1)]);
if((state_val_17411 === (7))){
var state_17410__$1 = state_17410;
var statearr_17412_17439 = state_17410__$1;
(statearr_17412_17439[(2)] = null);

(statearr_17412_17439[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (1))){
var state_17410__$1 = state_17410;
var statearr_17413_17440 = state_17410__$1;
(statearr_17413_17440[(2)] = null);

(statearr_17413_17440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (4))){
var inst_17374 = (state_17410[(7)]);
var inst_17376 = (inst_17374 < cnt);
var state_17410__$1 = state_17410;
if(cljs.core.truth_(inst_17376)){
var statearr_17414_17441 = state_17410__$1;
(statearr_17414_17441[(1)] = (6));

} else {
var statearr_17415_17442 = state_17410__$1;
(statearr_17415_17442[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (15))){
var inst_17406 = (state_17410[(2)]);
var state_17410__$1 = state_17410;
var statearr_17416_17443 = state_17410__$1;
(statearr_17416_17443[(2)] = inst_17406);

(statearr_17416_17443[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (13))){
var inst_17399 = cljs.core.async.close_BANG_(out);
var state_17410__$1 = state_17410;
var statearr_17417_17444 = state_17410__$1;
(statearr_17417_17444[(2)] = inst_17399);

(statearr_17417_17444[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (6))){
var state_17410__$1 = state_17410;
var statearr_17418_17445 = state_17410__$1;
(statearr_17418_17445[(2)] = null);

(statearr_17418_17445[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (3))){
var inst_17408 = (state_17410[(2)]);
var state_17410__$1 = state_17410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17410__$1,inst_17408);
} else {
if((state_val_17411 === (12))){
var inst_17396 = (state_17410[(8)]);
var inst_17396__$1 = (state_17410[(2)]);
var inst_17397 = cljs.core.some(cljs.core.nil_QMARK_,inst_17396__$1);
var state_17410__$1 = (function (){var statearr_17419 = state_17410;
(statearr_17419[(8)] = inst_17396__$1);

return statearr_17419;
})();
if(cljs.core.truth_(inst_17397)){
var statearr_17420_17446 = state_17410__$1;
(statearr_17420_17446[(1)] = (13));

} else {
var statearr_17421_17447 = state_17410__$1;
(statearr_17421_17447[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (2))){
var inst_17373 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17374 = (0);
var state_17410__$1 = (function (){var statearr_17422 = state_17410;
(statearr_17422[(7)] = inst_17374);

(statearr_17422[(9)] = inst_17373);

return statearr_17422;
})();
var statearr_17423_17448 = state_17410__$1;
(statearr_17423_17448[(2)] = null);

(statearr_17423_17448[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (11))){
var inst_17374 = (state_17410[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17410,(10),Object,null,(9));
var inst_17383 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17374) : chs__$1.call(null,inst_17374));
var inst_17384 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17374) : done.call(null,inst_17374));
var inst_17385 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17383,inst_17384);
var state_17410__$1 = state_17410;
var statearr_17424_17449 = state_17410__$1;
(statearr_17424_17449[(2)] = inst_17385);


cljs.core.async.impl.ioc_helpers.process_exception(state_17410__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (9))){
var inst_17374 = (state_17410[(7)]);
var inst_17387 = (state_17410[(2)]);
var inst_17388 = (inst_17374 + (1));
var inst_17374__$1 = inst_17388;
var state_17410__$1 = (function (){var statearr_17425 = state_17410;
(statearr_17425[(7)] = inst_17374__$1);

(statearr_17425[(10)] = inst_17387);

return statearr_17425;
})();
var statearr_17426_17450 = state_17410__$1;
(statearr_17426_17450[(2)] = null);

(statearr_17426_17450[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (5))){
var inst_17394 = (state_17410[(2)]);
var state_17410__$1 = (function (){var statearr_17427 = state_17410;
(statearr_17427[(11)] = inst_17394);

return statearr_17427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17410__$1,(12),dchan);
} else {
if((state_val_17411 === (14))){
var inst_17396 = (state_17410[(8)]);
var inst_17401 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17396);
var state_17410__$1 = state_17410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17410__$1,(16),out,inst_17401);
} else {
if((state_val_17411 === (16))){
var inst_17403 = (state_17410[(2)]);
var state_17410__$1 = (function (){var statearr_17428 = state_17410;
(statearr_17428[(12)] = inst_17403);

return statearr_17428;
})();
var statearr_17429_17451 = state_17410__$1;
(statearr_17429_17451[(2)] = null);

(statearr_17429_17451[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (10))){
var inst_17378 = (state_17410[(2)]);
var inst_17379 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17410__$1 = (function (){var statearr_17430 = state_17410;
(statearr_17430[(13)] = inst_17378);

return statearr_17430;
})();
var statearr_17431_17452 = state_17410__$1;
(statearr_17431_17452[(2)] = inst_17379);


cljs.core.async.impl.ioc_helpers.process_exception(state_17410__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17411 === (8))){
var inst_17392 = (state_17410[(2)]);
var state_17410__$1 = state_17410;
var statearr_17432_17453 = state_17410__$1;
(statearr_17432_17453[(2)] = inst_17392);

(statearr_17432_17453[(1)] = (5));


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
});})(c__14229__auto___17438,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14048__auto__,c__14229__auto___17438,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_17433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17433[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_17433[(1)] = (1));

return statearr_17433;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_17410){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17410);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e17434){if((e17434 instanceof Object)){
var ex__14052__auto__ = e17434;
var statearr_17435_17454 = state_17410;
(statearr_17435_17454[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17410);

return cljs.core.cst$kw$recur;
} else {
throw e17434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__17455 = state_17410;
state_17410 = G__17455;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_17410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_17410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___17438,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14231__auto__ = (function (){var statearr_17436 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_17436[(6)] = c__14229__auto___17438);

return statearr_17436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___17438,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17458 = arguments.length;
switch (G__17458) {
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
var c__14229__auto___17512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___17512,out){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___17512,out){
return (function (state_17490){
var state_val_17491 = (state_17490[(1)]);
if((state_val_17491 === (7))){
var inst_17470 = (state_17490[(7)]);
var inst_17469 = (state_17490[(8)]);
var inst_17469__$1 = (state_17490[(2)]);
var inst_17470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17469__$1,(0),null);
var inst_17471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17469__$1,(1),null);
var inst_17472 = (inst_17470__$1 == null);
var state_17490__$1 = (function (){var statearr_17492 = state_17490;
(statearr_17492[(7)] = inst_17470__$1);

(statearr_17492[(8)] = inst_17469__$1);

(statearr_17492[(9)] = inst_17471);

return statearr_17492;
})();
if(cljs.core.truth_(inst_17472)){
var statearr_17493_17513 = state_17490__$1;
(statearr_17493_17513[(1)] = (8));

} else {
var statearr_17494_17514 = state_17490__$1;
(statearr_17494_17514[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17491 === (1))){
var inst_17459 = cljs.core.vec(chs);
var inst_17460 = inst_17459;
var state_17490__$1 = (function (){var statearr_17495 = state_17490;
(statearr_17495[(10)] = inst_17460);

return statearr_17495;
})();
var statearr_17496_17515 = state_17490__$1;
(statearr_17496_17515[(2)] = null);

(statearr_17496_17515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17491 === (4))){
var inst_17460 = (state_17490[(10)]);
var state_17490__$1 = state_17490;
return cljs.core.async.ioc_alts_BANG_(state_17490__$1,(7),inst_17460);
} else {
if((state_val_17491 === (6))){
var inst_17486 = (state_17490[(2)]);
var state_17490__$1 = state_17490;
var statearr_17497_17516 = state_17490__$1;
(statearr_17497_17516[(2)] = inst_17486);

(statearr_17497_17516[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17491 === (3))){
var inst_17488 = (state_17490[(2)]);
var state_17490__$1 = state_17490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17490__$1,inst_17488);
} else {
if((state_val_17491 === (2))){
var inst_17460 = (state_17490[(10)]);
var inst_17462 = cljs.core.count(inst_17460);
var inst_17463 = (inst_17462 > (0));
var state_17490__$1 = state_17490;
if(cljs.core.truth_(inst_17463)){
var statearr_17499_17517 = state_17490__$1;
(statearr_17499_17517[(1)] = (4));

} else {
var statearr_17500_17518 = state_17490__$1;
(statearr_17500_17518[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17491 === (11))){
var inst_17460 = (state_17490[(10)]);
var inst_17479 = (state_17490[(2)]);
var tmp17498 = inst_17460;
var inst_17460__$1 = tmp17498;
var state_17490__$1 = (function (){var statearr_17501 = state_17490;
(statearr_17501[(10)] = inst_17460__$1);

(statearr_17501[(11)] = inst_17479);

return statearr_17501;
})();
var statearr_17502_17519 = state_17490__$1;
(statearr_17502_17519[(2)] = null);

(statearr_17502_17519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17491 === (9))){
var inst_17470 = (state_17490[(7)]);
var state_17490__$1 = state_17490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17490__$1,(11),out,inst_17470);
} else {
if((state_val_17491 === (5))){
var inst_17484 = cljs.core.async.close_BANG_(out);
var state_17490__$1 = state_17490;
var statearr_17503_17520 = state_17490__$1;
(statearr_17503_17520[(2)] = inst_17484);

(statearr_17503_17520[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17491 === (10))){
var inst_17482 = (state_17490[(2)]);
var state_17490__$1 = state_17490;
var statearr_17504_17521 = state_17490__$1;
(statearr_17504_17521[(2)] = inst_17482);

(statearr_17504_17521[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17491 === (8))){
var inst_17470 = (state_17490[(7)]);
var inst_17469 = (state_17490[(8)]);
var inst_17471 = (state_17490[(9)]);
var inst_17460 = (state_17490[(10)]);
var inst_17474 = (function (){var cs = inst_17460;
var vec__17465 = inst_17469;
var v = inst_17470;
var c = inst_17471;
return ((function (cs,vec__17465,v,c,inst_17470,inst_17469,inst_17471,inst_17460,state_val_17491,c__14229__auto___17512,out){
return (function (p1__17456_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17456_SHARP_);
});
;})(cs,vec__17465,v,c,inst_17470,inst_17469,inst_17471,inst_17460,state_val_17491,c__14229__auto___17512,out))
})();
var inst_17475 = cljs.core.filterv(inst_17474,inst_17460);
var inst_17460__$1 = inst_17475;
var state_17490__$1 = (function (){var statearr_17505 = state_17490;
(statearr_17505[(10)] = inst_17460__$1);

return statearr_17505;
})();
var statearr_17506_17522 = state_17490__$1;
(statearr_17506_17522[(2)] = null);

(statearr_17506_17522[(1)] = (2));


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
});})(c__14229__auto___17512,out))
;
return ((function (switch__14048__auto__,c__14229__auto___17512,out){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_17507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17507[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_17507[(1)] = (1));

return statearr_17507;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_17490){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17490);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e17508){if((e17508 instanceof Object)){
var ex__14052__auto__ = e17508;
var statearr_17509_17523 = state_17490;
(statearr_17509_17523[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17490);

return cljs.core.cst$kw$recur;
} else {
throw e17508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__17524 = state_17490;
state_17490 = G__17524;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_17490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_17490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___17512,out))
})();
var state__14231__auto__ = (function (){var statearr_17510 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_17510[(6)] = c__14229__auto___17512);

return statearr_17510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___17512,out))
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
var G__17526 = arguments.length;
switch (G__17526) {
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
var c__14229__auto___17571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___17571,out){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___17571,out){
return (function (state_17550){
var state_val_17551 = (state_17550[(1)]);
if((state_val_17551 === (7))){
var inst_17532 = (state_17550[(7)]);
var inst_17532__$1 = (state_17550[(2)]);
var inst_17533 = (inst_17532__$1 == null);
var inst_17534 = cljs.core.not(inst_17533);
var state_17550__$1 = (function (){var statearr_17552 = state_17550;
(statearr_17552[(7)] = inst_17532__$1);

return statearr_17552;
})();
if(inst_17534){
var statearr_17553_17572 = state_17550__$1;
(statearr_17553_17572[(1)] = (8));

} else {
var statearr_17554_17573 = state_17550__$1;
(statearr_17554_17573[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17551 === (1))){
var inst_17527 = (0);
var state_17550__$1 = (function (){var statearr_17555 = state_17550;
(statearr_17555[(8)] = inst_17527);

return statearr_17555;
})();
var statearr_17556_17574 = state_17550__$1;
(statearr_17556_17574[(2)] = null);

(statearr_17556_17574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17551 === (4))){
var state_17550__$1 = state_17550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17550__$1,(7),ch);
} else {
if((state_val_17551 === (6))){
var inst_17545 = (state_17550[(2)]);
var state_17550__$1 = state_17550;
var statearr_17557_17575 = state_17550__$1;
(statearr_17557_17575[(2)] = inst_17545);

(statearr_17557_17575[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17551 === (3))){
var inst_17547 = (state_17550[(2)]);
var inst_17548 = cljs.core.async.close_BANG_(out);
var state_17550__$1 = (function (){var statearr_17558 = state_17550;
(statearr_17558[(9)] = inst_17547);

return statearr_17558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17550__$1,inst_17548);
} else {
if((state_val_17551 === (2))){
var inst_17527 = (state_17550[(8)]);
var inst_17529 = (inst_17527 < n);
var state_17550__$1 = state_17550;
if(cljs.core.truth_(inst_17529)){
var statearr_17559_17576 = state_17550__$1;
(statearr_17559_17576[(1)] = (4));

} else {
var statearr_17560_17577 = state_17550__$1;
(statearr_17560_17577[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17551 === (11))){
var inst_17527 = (state_17550[(8)]);
var inst_17537 = (state_17550[(2)]);
var inst_17538 = (inst_17527 + (1));
var inst_17527__$1 = inst_17538;
var state_17550__$1 = (function (){var statearr_17561 = state_17550;
(statearr_17561[(8)] = inst_17527__$1);

(statearr_17561[(10)] = inst_17537);

return statearr_17561;
})();
var statearr_17562_17578 = state_17550__$1;
(statearr_17562_17578[(2)] = null);

(statearr_17562_17578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17551 === (9))){
var state_17550__$1 = state_17550;
var statearr_17563_17579 = state_17550__$1;
(statearr_17563_17579[(2)] = null);

(statearr_17563_17579[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17551 === (5))){
var state_17550__$1 = state_17550;
var statearr_17564_17580 = state_17550__$1;
(statearr_17564_17580[(2)] = null);

(statearr_17564_17580[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17551 === (10))){
var inst_17542 = (state_17550[(2)]);
var state_17550__$1 = state_17550;
var statearr_17565_17581 = state_17550__$1;
(statearr_17565_17581[(2)] = inst_17542);

(statearr_17565_17581[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17551 === (8))){
var inst_17532 = (state_17550[(7)]);
var state_17550__$1 = state_17550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17550__$1,(11),out,inst_17532);
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
});})(c__14229__auto___17571,out))
;
return ((function (switch__14048__auto__,c__14229__auto___17571,out){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_17566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17566[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_17566[(1)] = (1));

return statearr_17566;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_17550){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17550);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e17567){if((e17567 instanceof Object)){
var ex__14052__auto__ = e17567;
var statearr_17568_17582 = state_17550;
(statearr_17568_17582[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17550);

return cljs.core.cst$kw$recur;
} else {
throw e17567;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__17583 = state_17550;
state_17550 = G__17583;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_17550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_17550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___17571,out))
})();
var state__14231__auto__ = (function (){var statearr_17569 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_17569[(6)] = c__14229__auto___17571);

return statearr_17569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___17571,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17585 = (function (f,ch,meta17586){
this.f = f;
this.ch = ch;
this.meta17586 = meta17586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17587,meta17586__$1){
var self__ = this;
var _17587__$1 = this;
return (new cljs.core.async.t_cljs$core$async17585(self__.f,self__.ch,meta17586__$1));
});

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17587){
var self__ = this;
var _17587__$1 = this;
return self__.meta17586;
});

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17588 = (function (f,ch,meta17586,_,fn1,meta17589){
this.f = f;
this.ch = ch;
this.meta17586 = meta17586;
this._ = _;
this.fn1 = fn1;
this.meta17589 = meta17589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17590,meta17589__$1){
var self__ = this;
var _17590__$1 = this;
return (new cljs.core.async.t_cljs$core$async17588(self__.f,self__.ch,self__.meta17586,self__._,self__.fn1,meta17589__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17590){
var self__ = this;
var _17590__$1 = this;
return self__.meta17589;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17584_SHARP_){
var G__17591 = (((p1__17584_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17584_SHARP_) : self__.f.call(null,p1__17584_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17591) : f1.call(null,G__17591));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17588.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17586,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17585], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17589], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17588";

cljs.core.async.t_cljs$core$async17588.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17588");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17588.
 */
cljs.core.async.__GT_t_cljs$core$async17588 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17588(f__$1,ch__$1,meta17586__$1,___$2,fn1__$1,meta17589){
return (new cljs.core.async.t_cljs$core$async17588(f__$1,ch__$1,meta17586__$1,___$2,fn1__$1,meta17589));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17588(self__.f,self__.ch,self__.meta17586,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17592 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17592) : self__.f.call(null,G__17592));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17586], null);
});

cljs.core.async.t_cljs$core$async17585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17585";

cljs.core.async.t_cljs$core$async17585.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17585");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17585.
 */
cljs.core.async.__GT_t_cljs$core$async17585 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17585(f__$1,ch__$1,meta17586){
return (new cljs.core.async.t_cljs$core$async17585(f__$1,ch__$1,meta17586));
});

}

return (new cljs.core.async.t_cljs$core$async17585(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17593 = (function (f,ch,meta17594){
this.f = f;
this.ch = ch;
this.meta17594 = meta17594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17595,meta17594__$1){
var self__ = this;
var _17595__$1 = this;
return (new cljs.core.async.t_cljs$core$async17593(self__.f,self__.ch,meta17594__$1));
});

cljs.core.async.t_cljs$core$async17593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17595){
var self__ = this;
var _17595__$1 = this;
return self__.meta17594;
});

cljs.core.async.t_cljs$core$async17593.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17593.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17593.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17594], null);
});

cljs.core.async.t_cljs$core$async17593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17593";

cljs.core.async.t_cljs$core$async17593.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17593");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17593.
 */
cljs.core.async.__GT_t_cljs$core$async17593 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17593(f__$1,ch__$1,meta17594){
return (new cljs.core.async.t_cljs$core$async17593(f__$1,ch__$1,meta17594));
});

}

return (new cljs.core.async.t_cljs$core$async17593(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17596 = (function (p,ch,meta17597){
this.p = p;
this.ch = ch;
this.meta17597 = meta17597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17598,meta17597__$1){
var self__ = this;
var _17598__$1 = this;
return (new cljs.core.async.t_cljs$core$async17596(self__.p,self__.ch,meta17597__$1));
});

cljs.core.async.t_cljs$core$async17596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17598){
var self__ = this;
var _17598__$1 = this;
return self__.meta17597;
});

cljs.core.async.t_cljs$core$async17596.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17596.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17596.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17596.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17597], null);
});

cljs.core.async.t_cljs$core$async17596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17596";

cljs.core.async.t_cljs$core$async17596.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17596");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17596.
 */
cljs.core.async.__GT_t_cljs$core$async17596 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17596(p__$1,ch__$1,meta17597){
return (new cljs.core.async.t_cljs$core$async17596(p__$1,ch__$1,meta17597));
});

}

return (new cljs.core.async.t_cljs$core$async17596(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17600 = arguments.length;
switch (G__17600) {
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
var c__14229__auto___17640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___17640,out){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___17640,out){
return (function (state_17621){
var state_val_17622 = (state_17621[(1)]);
if((state_val_17622 === (7))){
var inst_17617 = (state_17621[(2)]);
var state_17621__$1 = state_17621;
var statearr_17623_17641 = state_17621__$1;
(statearr_17623_17641[(2)] = inst_17617);

(statearr_17623_17641[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17622 === (1))){
var state_17621__$1 = state_17621;
var statearr_17624_17642 = state_17621__$1;
(statearr_17624_17642[(2)] = null);

(statearr_17624_17642[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17622 === (4))){
var inst_17603 = (state_17621[(7)]);
var inst_17603__$1 = (state_17621[(2)]);
var inst_17604 = (inst_17603__$1 == null);
var state_17621__$1 = (function (){var statearr_17625 = state_17621;
(statearr_17625[(7)] = inst_17603__$1);

return statearr_17625;
})();
if(cljs.core.truth_(inst_17604)){
var statearr_17626_17643 = state_17621__$1;
(statearr_17626_17643[(1)] = (5));

} else {
var statearr_17627_17644 = state_17621__$1;
(statearr_17627_17644[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17622 === (6))){
var inst_17603 = (state_17621[(7)]);
var inst_17608 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17603) : p.call(null,inst_17603));
var state_17621__$1 = state_17621;
if(cljs.core.truth_(inst_17608)){
var statearr_17628_17645 = state_17621__$1;
(statearr_17628_17645[(1)] = (8));

} else {
var statearr_17629_17646 = state_17621__$1;
(statearr_17629_17646[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17622 === (3))){
var inst_17619 = (state_17621[(2)]);
var state_17621__$1 = state_17621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17621__$1,inst_17619);
} else {
if((state_val_17622 === (2))){
var state_17621__$1 = state_17621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17621__$1,(4),ch);
} else {
if((state_val_17622 === (11))){
var inst_17611 = (state_17621[(2)]);
var state_17621__$1 = state_17621;
var statearr_17630_17647 = state_17621__$1;
(statearr_17630_17647[(2)] = inst_17611);

(statearr_17630_17647[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17622 === (9))){
var state_17621__$1 = state_17621;
var statearr_17631_17648 = state_17621__$1;
(statearr_17631_17648[(2)] = null);

(statearr_17631_17648[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17622 === (5))){
var inst_17606 = cljs.core.async.close_BANG_(out);
var state_17621__$1 = state_17621;
var statearr_17632_17649 = state_17621__$1;
(statearr_17632_17649[(2)] = inst_17606);

(statearr_17632_17649[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17622 === (10))){
var inst_17614 = (state_17621[(2)]);
var state_17621__$1 = (function (){var statearr_17633 = state_17621;
(statearr_17633[(8)] = inst_17614);

return statearr_17633;
})();
var statearr_17634_17650 = state_17621__$1;
(statearr_17634_17650[(2)] = null);

(statearr_17634_17650[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17622 === (8))){
var inst_17603 = (state_17621[(7)]);
var state_17621__$1 = state_17621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17621__$1,(11),out,inst_17603);
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
});})(c__14229__auto___17640,out))
;
return ((function (switch__14048__auto__,c__14229__auto___17640,out){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_17635 = [null,null,null,null,null,null,null,null,null];
(statearr_17635[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_17635[(1)] = (1));

return statearr_17635;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_17621){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17621);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e17636){if((e17636 instanceof Object)){
var ex__14052__auto__ = e17636;
var statearr_17637_17651 = state_17621;
(statearr_17637_17651[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17621);

return cljs.core.cst$kw$recur;
} else {
throw e17636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__17652 = state_17621;
state_17621 = G__17652;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_17621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_17621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___17640,out))
})();
var state__14231__auto__ = (function (){var statearr_17638 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_17638[(6)] = c__14229__auto___17640);

return statearr_17638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___17640,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17654 = arguments.length;
switch (G__17654) {
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
var c__14229__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto__){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto__){
return (function (state_17717){
var state_val_17718 = (state_17717[(1)]);
if((state_val_17718 === (7))){
var inst_17713 = (state_17717[(2)]);
var state_17717__$1 = state_17717;
var statearr_17719_17757 = state_17717__$1;
(statearr_17719_17757[(2)] = inst_17713);

(statearr_17719_17757[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (20))){
var inst_17683 = (state_17717[(7)]);
var inst_17694 = (state_17717[(2)]);
var inst_17695 = cljs.core.next(inst_17683);
var inst_17669 = inst_17695;
var inst_17670 = null;
var inst_17671 = (0);
var inst_17672 = (0);
var state_17717__$1 = (function (){var statearr_17720 = state_17717;
(statearr_17720[(8)] = inst_17670);

(statearr_17720[(9)] = inst_17671);

(statearr_17720[(10)] = inst_17694);

(statearr_17720[(11)] = inst_17669);

(statearr_17720[(12)] = inst_17672);

return statearr_17720;
})();
var statearr_17721_17758 = state_17717__$1;
(statearr_17721_17758[(2)] = null);

(statearr_17721_17758[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (1))){
var state_17717__$1 = state_17717;
var statearr_17722_17759 = state_17717__$1;
(statearr_17722_17759[(2)] = null);

(statearr_17722_17759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (4))){
var inst_17658 = (state_17717[(13)]);
var inst_17658__$1 = (state_17717[(2)]);
var inst_17659 = (inst_17658__$1 == null);
var state_17717__$1 = (function (){var statearr_17723 = state_17717;
(statearr_17723[(13)] = inst_17658__$1);

return statearr_17723;
})();
if(cljs.core.truth_(inst_17659)){
var statearr_17724_17760 = state_17717__$1;
(statearr_17724_17760[(1)] = (5));

} else {
var statearr_17725_17761 = state_17717__$1;
(statearr_17725_17761[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (15))){
var state_17717__$1 = state_17717;
var statearr_17729_17762 = state_17717__$1;
(statearr_17729_17762[(2)] = null);

(statearr_17729_17762[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (21))){
var state_17717__$1 = state_17717;
var statearr_17730_17763 = state_17717__$1;
(statearr_17730_17763[(2)] = null);

(statearr_17730_17763[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (13))){
var inst_17670 = (state_17717[(8)]);
var inst_17671 = (state_17717[(9)]);
var inst_17669 = (state_17717[(11)]);
var inst_17672 = (state_17717[(12)]);
var inst_17679 = (state_17717[(2)]);
var inst_17680 = (inst_17672 + (1));
var tmp17726 = inst_17670;
var tmp17727 = inst_17671;
var tmp17728 = inst_17669;
var inst_17669__$1 = tmp17728;
var inst_17670__$1 = tmp17726;
var inst_17671__$1 = tmp17727;
var inst_17672__$1 = inst_17680;
var state_17717__$1 = (function (){var statearr_17731 = state_17717;
(statearr_17731[(8)] = inst_17670__$1);

(statearr_17731[(9)] = inst_17671__$1);

(statearr_17731[(14)] = inst_17679);

(statearr_17731[(11)] = inst_17669__$1);

(statearr_17731[(12)] = inst_17672__$1);

return statearr_17731;
})();
var statearr_17732_17764 = state_17717__$1;
(statearr_17732_17764[(2)] = null);

(statearr_17732_17764[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (22))){
var state_17717__$1 = state_17717;
var statearr_17733_17765 = state_17717__$1;
(statearr_17733_17765[(2)] = null);

(statearr_17733_17765[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (6))){
var inst_17658 = (state_17717[(13)]);
var inst_17667 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17658) : f.call(null,inst_17658));
var inst_17668 = cljs.core.seq(inst_17667);
var inst_17669 = inst_17668;
var inst_17670 = null;
var inst_17671 = (0);
var inst_17672 = (0);
var state_17717__$1 = (function (){var statearr_17734 = state_17717;
(statearr_17734[(8)] = inst_17670);

(statearr_17734[(9)] = inst_17671);

(statearr_17734[(11)] = inst_17669);

(statearr_17734[(12)] = inst_17672);

return statearr_17734;
})();
var statearr_17735_17766 = state_17717__$1;
(statearr_17735_17766[(2)] = null);

(statearr_17735_17766[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (17))){
var inst_17683 = (state_17717[(7)]);
var inst_17687 = cljs.core.chunk_first(inst_17683);
var inst_17688 = cljs.core.chunk_rest(inst_17683);
var inst_17689 = cljs.core.count(inst_17687);
var inst_17669 = inst_17688;
var inst_17670 = inst_17687;
var inst_17671 = inst_17689;
var inst_17672 = (0);
var state_17717__$1 = (function (){var statearr_17736 = state_17717;
(statearr_17736[(8)] = inst_17670);

(statearr_17736[(9)] = inst_17671);

(statearr_17736[(11)] = inst_17669);

(statearr_17736[(12)] = inst_17672);

return statearr_17736;
})();
var statearr_17737_17767 = state_17717__$1;
(statearr_17737_17767[(2)] = null);

(statearr_17737_17767[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (3))){
var inst_17715 = (state_17717[(2)]);
var state_17717__$1 = state_17717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17717__$1,inst_17715);
} else {
if((state_val_17718 === (12))){
var inst_17703 = (state_17717[(2)]);
var state_17717__$1 = state_17717;
var statearr_17738_17768 = state_17717__$1;
(statearr_17738_17768[(2)] = inst_17703);

(statearr_17738_17768[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (2))){
var state_17717__$1 = state_17717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17717__$1,(4),in$);
} else {
if((state_val_17718 === (23))){
var inst_17711 = (state_17717[(2)]);
var state_17717__$1 = state_17717;
var statearr_17739_17769 = state_17717__$1;
(statearr_17739_17769[(2)] = inst_17711);

(statearr_17739_17769[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (19))){
var inst_17698 = (state_17717[(2)]);
var state_17717__$1 = state_17717;
var statearr_17740_17770 = state_17717__$1;
(statearr_17740_17770[(2)] = inst_17698);

(statearr_17740_17770[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (11))){
var inst_17683 = (state_17717[(7)]);
var inst_17669 = (state_17717[(11)]);
var inst_17683__$1 = cljs.core.seq(inst_17669);
var state_17717__$1 = (function (){var statearr_17741 = state_17717;
(statearr_17741[(7)] = inst_17683__$1);

return statearr_17741;
})();
if(inst_17683__$1){
var statearr_17742_17771 = state_17717__$1;
(statearr_17742_17771[(1)] = (14));

} else {
var statearr_17743_17772 = state_17717__$1;
(statearr_17743_17772[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (9))){
var inst_17705 = (state_17717[(2)]);
var inst_17706 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17717__$1 = (function (){var statearr_17744 = state_17717;
(statearr_17744[(15)] = inst_17705);

return statearr_17744;
})();
if(cljs.core.truth_(inst_17706)){
var statearr_17745_17773 = state_17717__$1;
(statearr_17745_17773[(1)] = (21));

} else {
var statearr_17746_17774 = state_17717__$1;
(statearr_17746_17774[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (5))){
var inst_17661 = cljs.core.async.close_BANG_(out);
var state_17717__$1 = state_17717;
var statearr_17747_17775 = state_17717__$1;
(statearr_17747_17775[(2)] = inst_17661);

(statearr_17747_17775[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (14))){
var inst_17683 = (state_17717[(7)]);
var inst_17685 = cljs.core.chunked_seq_QMARK_(inst_17683);
var state_17717__$1 = state_17717;
if(inst_17685){
var statearr_17748_17776 = state_17717__$1;
(statearr_17748_17776[(1)] = (17));

} else {
var statearr_17749_17777 = state_17717__$1;
(statearr_17749_17777[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (16))){
var inst_17701 = (state_17717[(2)]);
var state_17717__$1 = state_17717;
var statearr_17750_17778 = state_17717__$1;
(statearr_17750_17778[(2)] = inst_17701);

(statearr_17750_17778[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17718 === (10))){
var inst_17670 = (state_17717[(8)]);
var inst_17672 = (state_17717[(12)]);
var inst_17677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17670,inst_17672);
var state_17717__$1 = state_17717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17717__$1,(13),out,inst_17677);
} else {
if((state_val_17718 === (18))){
var inst_17683 = (state_17717[(7)]);
var inst_17692 = cljs.core.first(inst_17683);
var state_17717__$1 = state_17717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17717__$1,(20),out,inst_17692);
} else {
if((state_val_17718 === (8))){
var inst_17671 = (state_17717[(9)]);
var inst_17672 = (state_17717[(12)]);
var inst_17674 = (inst_17672 < inst_17671);
var inst_17675 = inst_17674;
var state_17717__$1 = state_17717;
if(cljs.core.truth_(inst_17675)){
var statearr_17751_17779 = state_17717__$1;
(statearr_17751_17779[(1)] = (10));

} else {
var statearr_17752_17780 = state_17717__$1;
(statearr_17752_17780[(1)] = (11));

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
});})(c__14229__auto__))
;
return ((function (switch__14048__auto__,c__14229__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14049__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14049__auto____0 = (function (){
var statearr_17753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17753[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14049__auto__);

(statearr_17753[(1)] = (1));

return statearr_17753;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14049__auto____1 = (function (state_17717){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17717);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e17754){if((e17754 instanceof Object)){
var ex__14052__auto__ = e17754;
var statearr_17755_17781 = state_17717;
(statearr_17755_17781[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17717);

return cljs.core.cst$kw$recur;
} else {
throw e17754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__17782 = state_17717;
state_17717 = G__17782;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14049__auto__ = function(state_17717){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14049__auto____1.call(this,state_17717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14049__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14049__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto__))
})();
var state__14231__auto__ = (function (){var statearr_17756 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_17756[(6)] = c__14229__auto__);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto__))
);

return c__14229__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17784 = arguments.length;
switch (G__17784) {
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
var G__17787 = arguments.length;
switch (G__17787) {
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
var G__17790 = arguments.length;
switch (G__17790) {
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
var c__14229__auto___17837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___17837,out){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___17837,out){
return (function (state_17814){
var state_val_17815 = (state_17814[(1)]);
if((state_val_17815 === (7))){
var inst_17809 = (state_17814[(2)]);
var state_17814__$1 = state_17814;
var statearr_17816_17838 = state_17814__$1;
(statearr_17816_17838[(2)] = inst_17809);

(statearr_17816_17838[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17815 === (1))){
var inst_17791 = null;
var state_17814__$1 = (function (){var statearr_17817 = state_17814;
(statearr_17817[(7)] = inst_17791);

return statearr_17817;
})();
var statearr_17818_17839 = state_17814__$1;
(statearr_17818_17839[(2)] = null);

(statearr_17818_17839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17815 === (4))){
var inst_17794 = (state_17814[(8)]);
var inst_17794__$1 = (state_17814[(2)]);
var inst_17795 = (inst_17794__$1 == null);
var inst_17796 = cljs.core.not(inst_17795);
var state_17814__$1 = (function (){var statearr_17819 = state_17814;
(statearr_17819[(8)] = inst_17794__$1);

return statearr_17819;
})();
if(inst_17796){
var statearr_17820_17840 = state_17814__$1;
(statearr_17820_17840[(1)] = (5));

} else {
var statearr_17821_17841 = state_17814__$1;
(statearr_17821_17841[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17815 === (6))){
var state_17814__$1 = state_17814;
var statearr_17822_17842 = state_17814__$1;
(statearr_17822_17842[(2)] = null);

(statearr_17822_17842[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17815 === (3))){
var inst_17811 = (state_17814[(2)]);
var inst_17812 = cljs.core.async.close_BANG_(out);
var state_17814__$1 = (function (){var statearr_17823 = state_17814;
(statearr_17823[(9)] = inst_17811);

return statearr_17823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17814__$1,inst_17812);
} else {
if((state_val_17815 === (2))){
var state_17814__$1 = state_17814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17814__$1,(4),ch);
} else {
if((state_val_17815 === (11))){
var inst_17794 = (state_17814[(8)]);
var inst_17803 = (state_17814[(2)]);
var inst_17791 = inst_17794;
var state_17814__$1 = (function (){var statearr_17824 = state_17814;
(statearr_17824[(10)] = inst_17803);

(statearr_17824[(7)] = inst_17791);

return statearr_17824;
})();
var statearr_17825_17843 = state_17814__$1;
(statearr_17825_17843[(2)] = null);

(statearr_17825_17843[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17815 === (9))){
var inst_17794 = (state_17814[(8)]);
var state_17814__$1 = state_17814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17814__$1,(11),out,inst_17794);
} else {
if((state_val_17815 === (5))){
var inst_17794 = (state_17814[(8)]);
var inst_17791 = (state_17814[(7)]);
var inst_17798 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17794,inst_17791);
var state_17814__$1 = state_17814;
if(inst_17798){
var statearr_17827_17844 = state_17814__$1;
(statearr_17827_17844[(1)] = (8));

} else {
var statearr_17828_17845 = state_17814__$1;
(statearr_17828_17845[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17815 === (10))){
var inst_17806 = (state_17814[(2)]);
var state_17814__$1 = state_17814;
var statearr_17829_17846 = state_17814__$1;
(statearr_17829_17846[(2)] = inst_17806);

(statearr_17829_17846[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17815 === (8))){
var inst_17791 = (state_17814[(7)]);
var tmp17826 = inst_17791;
var inst_17791__$1 = tmp17826;
var state_17814__$1 = (function (){var statearr_17830 = state_17814;
(statearr_17830[(7)] = inst_17791__$1);

return statearr_17830;
})();
var statearr_17831_17847 = state_17814__$1;
(statearr_17831_17847[(2)] = null);

(statearr_17831_17847[(1)] = (2));


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
});})(c__14229__auto___17837,out))
;
return ((function (switch__14048__auto__,c__14229__auto___17837,out){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_17832 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17832[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_17832[(1)] = (1));

return statearr_17832;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_17814){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17814);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e17833){if((e17833 instanceof Object)){
var ex__14052__auto__ = e17833;
var statearr_17834_17848 = state_17814;
(statearr_17834_17848[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17814);

return cljs.core.cst$kw$recur;
} else {
throw e17833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__17849 = state_17814;
state_17814 = G__17849;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_17814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_17814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___17837,out))
})();
var state__14231__auto__ = (function (){var statearr_17835 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_17835[(6)] = c__14229__auto___17837);

return statearr_17835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___17837,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17851 = arguments.length;
switch (G__17851) {
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
var c__14229__auto___17917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___17917,out){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___17917,out){
return (function (state_17889){
var state_val_17890 = (state_17889[(1)]);
if((state_val_17890 === (7))){
var inst_17885 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17891_17918 = state_17889__$1;
(statearr_17891_17918[(2)] = inst_17885);

(statearr_17891_17918[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (1))){
var inst_17852 = (new Array(n));
var inst_17853 = inst_17852;
var inst_17854 = (0);
var state_17889__$1 = (function (){var statearr_17892 = state_17889;
(statearr_17892[(7)] = inst_17853);

(statearr_17892[(8)] = inst_17854);

return statearr_17892;
})();
var statearr_17893_17919 = state_17889__$1;
(statearr_17893_17919[(2)] = null);

(statearr_17893_17919[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (4))){
var inst_17857 = (state_17889[(9)]);
var inst_17857__$1 = (state_17889[(2)]);
var inst_17858 = (inst_17857__$1 == null);
var inst_17859 = cljs.core.not(inst_17858);
var state_17889__$1 = (function (){var statearr_17894 = state_17889;
(statearr_17894[(9)] = inst_17857__$1);

return statearr_17894;
})();
if(inst_17859){
var statearr_17895_17920 = state_17889__$1;
(statearr_17895_17920[(1)] = (5));

} else {
var statearr_17896_17921 = state_17889__$1;
(statearr_17896_17921[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (15))){
var inst_17879 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17897_17922 = state_17889__$1;
(statearr_17897_17922[(2)] = inst_17879);

(statearr_17897_17922[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (13))){
var state_17889__$1 = state_17889;
var statearr_17898_17923 = state_17889__$1;
(statearr_17898_17923[(2)] = null);

(statearr_17898_17923[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (6))){
var inst_17854 = (state_17889[(8)]);
var inst_17875 = (inst_17854 > (0));
var state_17889__$1 = state_17889;
if(cljs.core.truth_(inst_17875)){
var statearr_17899_17924 = state_17889__$1;
(statearr_17899_17924[(1)] = (12));

} else {
var statearr_17900_17925 = state_17889__$1;
(statearr_17900_17925[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (3))){
var inst_17887 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17889__$1,inst_17887);
} else {
if((state_val_17890 === (12))){
var inst_17853 = (state_17889[(7)]);
var inst_17877 = cljs.core.vec(inst_17853);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17889__$1,(15),out,inst_17877);
} else {
if((state_val_17890 === (2))){
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17889__$1,(4),ch);
} else {
if((state_val_17890 === (11))){
var inst_17869 = (state_17889[(2)]);
var inst_17870 = (new Array(n));
var inst_17853 = inst_17870;
var inst_17854 = (0);
var state_17889__$1 = (function (){var statearr_17901 = state_17889;
(statearr_17901[(7)] = inst_17853);

(statearr_17901[(10)] = inst_17869);

(statearr_17901[(8)] = inst_17854);

return statearr_17901;
})();
var statearr_17902_17926 = state_17889__$1;
(statearr_17902_17926[(2)] = null);

(statearr_17902_17926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (9))){
var inst_17853 = (state_17889[(7)]);
var inst_17867 = cljs.core.vec(inst_17853);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17889__$1,(11),out,inst_17867);
} else {
if((state_val_17890 === (5))){
var inst_17853 = (state_17889[(7)]);
var inst_17862 = (state_17889[(11)]);
var inst_17857 = (state_17889[(9)]);
var inst_17854 = (state_17889[(8)]);
var inst_17861 = (inst_17853[inst_17854] = inst_17857);
var inst_17862__$1 = (inst_17854 + (1));
var inst_17863 = (inst_17862__$1 < n);
var state_17889__$1 = (function (){var statearr_17903 = state_17889;
(statearr_17903[(11)] = inst_17862__$1);

(statearr_17903[(12)] = inst_17861);

return statearr_17903;
})();
if(cljs.core.truth_(inst_17863)){
var statearr_17904_17927 = state_17889__$1;
(statearr_17904_17927[(1)] = (8));

} else {
var statearr_17905_17928 = state_17889__$1;
(statearr_17905_17928[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (14))){
var inst_17882 = (state_17889[(2)]);
var inst_17883 = cljs.core.async.close_BANG_(out);
var state_17889__$1 = (function (){var statearr_17907 = state_17889;
(statearr_17907[(13)] = inst_17882);

return statearr_17907;
})();
var statearr_17908_17929 = state_17889__$1;
(statearr_17908_17929[(2)] = inst_17883);

(statearr_17908_17929[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (10))){
var inst_17873 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17909_17930 = state_17889__$1;
(statearr_17909_17930[(2)] = inst_17873);

(statearr_17909_17930[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17890 === (8))){
var inst_17853 = (state_17889[(7)]);
var inst_17862 = (state_17889[(11)]);
var tmp17906 = inst_17853;
var inst_17853__$1 = tmp17906;
var inst_17854 = inst_17862;
var state_17889__$1 = (function (){var statearr_17910 = state_17889;
(statearr_17910[(7)] = inst_17853__$1);

(statearr_17910[(8)] = inst_17854);

return statearr_17910;
})();
var statearr_17911_17931 = state_17889__$1;
(statearr_17911_17931[(2)] = null);

(statearr_17911_17931[(1)] = (2));


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
});})(c__14229__auto___17917,out))
;
return ((function (switch__14048__auto__,c__14229__auto___17917,out){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_17912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17912[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_17912[(1)] = (1));

return statearr_17912;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_17889){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17889);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e17913){if((e17913 instanceof Object)){
var ex__14052__auto__ = e17913;
var statearr_17914_17932 = state_17889;
(statearr_17914_17932[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17889);

return cljs.core.cst$kw$recur;
} else {
throw e17913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__17933 = state_17889;
state_17889 = G__17933;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_17889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_17889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___17917,out))
})();
var state__14231__auto__ = (function (){var statearr_17915 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_17915[(6)] = c__14229__auto___17917);

return statearr_17915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___17917,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17935 = arguments.length;
switch (G__17935) {
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
var c__14229__auto___18005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14229__auto___18005,out){
return (function (){
var f__14230__auto__ = (function (){var switch__14048__auto__ = ((function (c__14229__auto___18005,out){
return (function (state_17977){
var state_val_17978 = (state_17977[(1)]);
if((state_val_17978 === (7))){
var inst_17973 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17979_18006 = state_17977__$1;
(statearr_17979_18006[(2)] = inst_17973);

(statearr_17979_18006[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (1))){
var inst_17936 = [];
var inst_17937 = inst_17936;
var inst_17938 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17977__$1 = (function (){var statearr_17980 = state_17977;
(statearr_17980[(7)] = inst_17937);

(statearr_17980[(8)] = inst_17938);

return statearr_17980;
})();
var statearr_17981_18007 = state_17977__$1;
(statearr_17981_18007[(2)] = null);

(statearr_17981_18007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (4))){
var inst_17941 = (state_17977[(9)]);
var inst_17941__$1 = (state_17977[(2)]);
var inst_17942 = (inst_17941__$1 == null);
var inst_17943 = cljs.core.not(inst_17942);
var state_17977__$1 = (function (){var statearr_17982 = state_17977;
(statearr_17982[(9)] = inst_17941__$1);

return statearr_17982;
})();
if(inst_17943){
var statearr_17983_18008 = state_17977__$1;
(statearr_17983_18008[(1)] = (5));

} else {
var statearr_17984_18009 = state_17977__$1;
(statearr_17984_18009[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (15))){
var inst_17967 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17985_18010 = state_17977__$1;
(statearr_17985_18010[(2)] = inst_17967);

(statearr_17985_18010[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (13))){
var state_17977__$1 = state_17977;
var statearr_17986_18011 = state_17977__$1;
(statearr_17986_18011[(2)] = null);

(statearr_17986_18011[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (6))){
var inst_17937 = (state_17977[(7)]);
var inst_17962 = inst_17937.length;
var inst_17963 = (inst_17962 > (0));
var state_17977__$1 = state_17977;
if(cljs.core.truth_(inst_17963)){
var statearr_17987_18012 = state_17977__$1;
(statearr_17987_18012[(1)] = (12));

} else {
var statearr_17988_18013 = state_17977__$1;
(statearr_17988_18013[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (3))){
var inst_17975 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17977__$1,inst_17975);
} else {
if((state_val_17978 === (12))){
var inst_17937 = (state_17977[(7)]);
var inst_17965 = cljs.core.vec(inst_17937);
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17977__$1,(15),out,inst_17965);
} else {
if((state_val_17978 === (2))){
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17977__$1,(4),ch);
} else {
if((state_val_17978 === (11))){
var inst_17941 = (state_17977[(9)]);
var inst_17945 = (state_17977[(10)]);
var inst_17955 = (state_17977[(2)]);
var inst_17956 = [];
var inst_17957 = inst_17956.push(inst_17941);
var inst_17937 = inst_17956;
var inst_17938 = inst_17945;
var state_17977__$1 = (function (){var statearr_17989 = state_17977;
(statearr_17989[(7)] = inst_17937);

(statearr_17989[(8)] = inst_17938);

(statearr_17989[(11)] = inst_17957);

(statearr_17989[(12)] = inst_17955);

return statearr_17989;
})();
var statearr_17990_18014 = state_17977__$1;
(statearr_17990_18014[(2)] = null);

(statearr_17990_18014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (9))){
var inst_17937 = (state_17977[(7)]);
var inst_17953 = cljs.core.vec(inst_17937);
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17977__$1,(11),out,inst_17953);
} else {
if((state_val_17978 === (5))){
var inst_17941 = (state_17977[(9)]);
var inst_17945 = (state_17977[(10)]);
var inst_17938 = (state_17977[(8)]);
var inst_17945__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17941) : f.call(null,inst_17941));
var inst_17946 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17945__$1,inst_17938);
var inst_17947 = cljs.core.keyword_identical_QMARK_(inst_17938,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17948 = ((inst_17946) || (inst_17947));
var state_17977__$1 = (function (){var statearr_17991 = state_17977;
(statearr_17991[(10)] = inst_17945__$1);

return statearr_17991;
})();
if(cljs.core.truth_(inst_17948)){
var statearr_17992_18015 = state_17977__$1;
(statearr_17992_18015[(1)] = (8));

} else {
var statearr_17993_18016 = state_17977__$1;
(statearr_17993_18016[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (14))){
var inst_17970 = (state_17977[(2)]);
var inst_17971 = cljs.core.async.close_BANG_(out);
var state_17977__$1 = (function (){var statearr_17995 = state_17977;
(statearr_17995[(13)] = inst_17970);

return statearr_17995;
})();
var statearr_17996_18017 = state_17977__$1;
(statearr_17996_18017[(2)] = inst_17971);

(statearr_17996_18017[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (10))){
var inst_17960 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17997_18018 = state_17977__$1;
(statearr_17997_18018[(2)] = inst_17960);

(statearr_17997_18018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (8))){
var inst_17941 = (state_17977[(9)]);
var inst_17937 = (state_17977[(7)]);
var inst_17945 = (state_17977[(10)]);
var inst_17950 = inst_17937.push(inst_17941);
var tmp17994 = inst_17937;
var inst_17937__$1 = tmp17994;
var inst_17938 = inst_17945;
var state_17977__$1 = (function (){var statearr_17998 = state_17977;
(statearr_17998[(14)] = inst_17950);

(statearr_17998[(7)] = inst_17937__$1);

(statearr_17998[(8)] = inst_17938);

return statearr_17998;
})();
var statearr_17999_18019 = state_17977__$1;
(statearr_17999_18019[(2)] = null);

(statearr_17999_18019[(1)] = (2));


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
});})(c__14229__auto___18005,out))
;
return ((function (switch__14048__auto__,c__14229__auto___18005,out){
return (function() {
var cljs$core$async$state_machine__14049__auto__ = null;
var cljs$core$async$state_machine__14049__auto____0 = (function (){
var statearr_18000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18000[(0)] = cljs$core$async$state_machine__14049__auto__);

(statearr_18000[(1)] = (1));

return statearr_18000;
});
var cljs$core$async$state_machine__14049__auto____1 = (function (state_17977){
while(true){
var ret_value__14050__auto__ = (function (){try{while(true){
var result__14051__auto__ = switch__14048__auto__(state_17977);
if(cljs.core.keyword_identical_QMARK_(result__14051__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14051__auto__;
}
break;
}
}catch (e18001){if((e18001 instanceof Object)){
var ex__14052__auto__ = e18001;
var statearr_18002_18020 = state_17977;
(statearr_18002_18020[(5)] = ex__14052__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17977);

return cljs.core.cst$kw$recur;
} else {
throw e18001;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14050__auto__,cljs.core.cst$kw$recur)){
var G__18021 = state_17977;
state_17977 = G__18021;
continue;
} else {
return ret_value__14050__auto__;
}
break;
}
});
cljs$core$async$state_machine__14049__auto__ = function(state_17977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14049__auto____1.call(this,state_17977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14049__auto____0;
cljs$core$async$state_machine__14049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14049__auto____1;
return cljs$core$async$state_machine__14049__auto__;
})()
;})(switch__14048__auto__,c__14229__auto___18005,out))
})();
var state__14231__auto__ = (function (){var statearr_18003 = (f__14230__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14230__auto__.cljs$core$IFn$_invoke$arity$0() : f__14230__auto__.call(null));
(statearr_18003[(6)] = c__14229__auto___18005);

return statearr_18003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14231__auto__);
});})(c__14229__auto___18005,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

