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
var G__15699 = arguments.length;
switch (G__15699) {
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
if(typeof cljs.core.async.t_cljs$core$async15700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15700 = (function (f,blockable,meta15701){
this.f = f;
this.blockable = blockable;
this.meta15701 = meta15701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15702,meta15701__$1){
var self__ = this;
var _15702__$1 = this;
return (new cljs.core.async.t_cljs$core$async15700(self__.f,self__.blockable,meta15701__$1));
});

cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15702){
var self__ = this;
var _15702__$1 = this;
return self__.meta15701;
});

cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15701], null);
});

cljs.core.async.t_cljs$core$async15700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15700";

cljs.core.async.t_cljs$core$async15700.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async15700");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15700.
 */
cljs.core.async.__GT_t_cljs$core$async15700 = (function cljs$core$async$__GT_t_cljs$core$async15700(f__$1,blockable__$1,meta15701){
return (new cljs.core.async.t_cljs$core$async15700(f__$1,blockable__$1,meta15701));
});

}

return (new cljs.core.async.t_cljs$core$async15700(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15706 = arguments.length;
switch (G__15706) {
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
var G__15709 = arguments.length;
switch (G__15709) {
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
var G__15712 = arguments.length;
switch (G__15712) {
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
var val_15714 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15714) : fn1.call(null,val_15714));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15714,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15714) : fn1.call(null,val_15714));
});})(val_15714,ret))
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
var G__15716 = arguments.length;
switch (G__15716) {
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
var n__4376__auto___15718 = n;
var x_15719 = (0);
while(true){
if((x_15719 < n__4376__auto___15718)){
(a[x_15719] = (0));

var G__15720 = (x_15719 + (1));
x_15719 = G__15720;
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

var G__15721 = (i + (1));
i = G__15721;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async15722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15722 = (function (flag,meta15723){
this.flag = flag;
this.meta15723 = meta15723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15724,meta15723__$1){
var self__ = this;
var _15724__$1 = this;
return (new cljs.core.async.t_cljs$core$async15722(self__.flag,meta15723__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15724){
var self__ = this;
var _15724__$1 = this;
return self__.meta15723;
});})(flag))
;

cljs.core.async.t_cljs$core$async15722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15722.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15723], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15722";

cljs.core.async.t_cljs$core$async15722.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async15722");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15722.
 */
cljs.core.async.__GT_t_cljs$core$async15722 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15722(flag__$1,meta15723){
return (new cljs.core.async.t_cljs$core$async15722(flag__$1,meta15723));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15722(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15725 = (function (flag,cb,meta15726){
this.flag = flag;
this.cb = cb;
this.meta15726 = meta15726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15727,meta15726__$1){
var self__ = this;
var _15727__$1 = this;
return (new cljs.core.async.t_cljs$core$async15725(self__.flag,self__.cb,meta15726__$1));
});

cljs.core.async.t_cljs$core$async15725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15727){
var self__ = this;
var _15727__$1 = this;
return self__.meta15726;
});

cljs.core.async.t_cljs$core$async15725.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15725.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15726], null);
});

cljs.core.async.t_cljs$core$async15725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15725";

cljs.core.async.t_cljs$core$async15725.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async15725");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15725.
 */
cljs.core.async.__GT_t_cljs$core$async15725 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15725(flag__$1,cb__$1,meta15726){
return (new cljs.core.async.t_cljs$core$async15725(flag__$1,cb__$1,meta15726));
});

}

return (new cljs.core.async.t_cljs$core$async15725(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15728_SHARP_){
var G__15730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15728_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15730) : fret.call(null,G__15730));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15729_SHARP_){
var G__15731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15729_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15731) : fret.call(null,G__15731));
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
var G__15732 = (i + (1));
i = G__15732;
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
var len__4497__auto___15738 = arguments.length;
var i__4498__auto___15739 = (0);
while(true){
if((i__4498__auto___15739 < len__4497__auto___15738)){
args__4500__auto__.push((arguments[i__4498__auto___15739]));

var G__15740 = (i__4498__auto___15739 + (1));
i__4498__auto___15739 = G__15740;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15735){
var map__15736 = p__15735;
var map__15736__$1 = ((((!((map__15736 == null)))?(((((map__15736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15736):map__15736);
var opts = map__15736__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15733){
var G__15734 = cljs.core.first(seq15733);
var seq15733__$1 = cljs.core.next(seq15733);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15734,seq15733__$1);
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
var G__15742 = arguments.length;
switch (G__15742) {
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
var c__13771__auto___15788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___15788){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___15788){
return (function (state_15766){
var state_val_15767 = (state_15766[(1)]);
if((state_val_15767 === (7))){
var inst_15762 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15768_15789 = state_15766__$1;
(statearr_15768_15789[(2)] = inst_15762);

(statearr_15768_15789[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (1))){
var state_15766__$1 = state_15766;
var statearr_15769_15790 = state_15766__$1;
(statearr_15769_15790[(2)] = null);

(statearr_15769_15790[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (4))){
var inst_15745 = (state_15766[(7)]);
var inst_15745__$1 = (state_15766[(2)]);
var inst_15746 = (inst_15745__$1 == null);
var state_15766__$1 = (function (){var statearr_15770 = state_15766;
(statearr_15770[(7)] = inst_15745__$1);

return statearr_15770;
})();
if(cljs.core.truth_(inst_15746)){
var statearr_15771_15791 = state_15766__$1;
(statearr_15771_15791[(1)] = (5));

} else {
var statearr_15772_15792 = state_15766__$1;
(statearr_15772_15792[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (13))){
var state_15766__$1 = state_15766;
var statearr_15773_15793 = state_15766__$1;
(statearr_15773_15793[(2)] = null);

(statearr_15773_15793[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (6))){
var inst_15745 = (state_15766[(7)]);
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15766__$1,(11),to,inst_15745);
} else {
if((state_val_15767 === (3))){
var inst_15764 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15766__$1,inst_15764);
} else {
if((state_val_15767 === (12))){
var state_15766__$1 = state_15766;
var statearr_15774_15794 = state_15766__$1;
(statearr_15774_15794[(2)] = null);

(statearr_15774_15794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (2))){
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15766__$1,(4),from);
} else {
if((state_val_15767 === (11))){
var inst_15755 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
if(cljs.core.truth_(inst_15755)){
var statearr_15775_15795 = state_15766__$1;
(statearr_15775_15795[(1)] = (12));

} else {
var statearr_15776_15796 = state_15766__$1;
(statearr_15776_15796[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (9))){
var state_15766__$1 = state_15766;
var statearr_15777_15797 = state_15766__$1;
(statearr_15777_15797[(2)] = null);

(statearr_15777_15797[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (5))){
var state_15766__$1 = state_15766;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15778_15798 = state_15766__$1;
(statearr_15778_15798[(1)] = (8));

} else {
var statearr_15779_15799 = state_15766__$1;
(statearr_15779_15799[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (14))){
var inst_15760 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15780_15800 = state_15766__$1;
(statearr_15780_15800[(2)] = inst_15760);

(statearr_15780_15800[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (10))){
var inst_15752 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15781_15801 = state_15766__$1;
(statearr_15781_15801[(2)] = inst_15752);

(statearr_15781_15801[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15767 === (8))){
var inst_15749 = cljs.core.async.close_BANG_(to);
var state_15766__$1 = state_15766;
var statearr_15782_15802 = state_15766__$1;
(statearr_15782_15802[(2)] = inst_15749);

(statearr_15782_15802[(1)] = (10));


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
});})(c__13771__auto___15788))
;
return ((function (switch__13590__auto__,c__13771__auto___15788){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_15783 = [null,null,null,null,null,null,null,null];
(statearr_15783[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_15783[(1)] = (1));

return statearr_15783;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_15766){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_15766);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e15784){if((e15784 instanceof Object)){
var ex__13594__auto__ = e15784;
var statearr_15785_15803 = state_15766;
(statearr_15785_15803[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15766);

return cljs.core.cst$kw$recur;
} else {
throw e15784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__15804 = state_15766;
state_15766 = G__15804;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_15766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_15766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___15788))
})();
var state__13773__auto__ = (function (){var statearr_15786 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_15786[(6)] = c__13771__auto___15788);

return statearr_15786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___15788))
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
return (function (p__15805){
var vec__15806 = p__15805;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15806,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15806,(1),null);
var job = vec__15806;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13771__auto___15977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___15977,res,vec__15806,v,p,job,jobs,results){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___15977,res,vec__15806,v,p,job,jobs,results){
return (function (state_15813){
var state_val_15814 = (state_15813[(1)]);
if((state_val_15814 === (1))){
var state_15813__$1 = state_15813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15813__$1,(2),res,v);
} else {
if((state_val_15814 === (2))){
var inst_15810 = (state_15813[(2)]);
var inst_15811 = cljs.core.async.close_BANG_(res);
var state_15813__$1 = (function (){var statearr_15815 = state_15813;
(statearr_15815[(7)] = inst_15810);

return statearr_15815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15813__$1,inst_15811);
} else {
return null;
}
}
});})(c__13771__auto___15977,res,vec__15806,v,p,job,jobs,results))
;
return ((function (switch__13590__auto__,c__13771__auto___15977,res,vec__15806,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0 = (function (){
var statearr_15816 = [null,null,null,null,null,null,null,null];
(statearr_15816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__);

(statearr_15816[(1)] = (1));

return statearr_15816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1 = (function (state_15813){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_15813);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e15817){if((e15817 instanceof Object)){
var ex__13594__auto__ = e15817;
var statearr_15818_15978 = state_15813;
(statearr_15818_15978[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15813);

return cljs.core.cst$kw$recur;
} else {
throw e15817;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__15979 = state_15813;
state_15813 = G__15979;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = function(state_15813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1.call(this,state_15813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___15977,res,vec__15806,v,p,job,jobs,results))
})();
var state__13773__auto__ = (function (){var statearr_15819 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_15819[(6)] = c__13771__auto___15977);

return statearr_15819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___15977,res,vec__15806,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15820){
var vec__15821 = p__15820;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15821,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15821,(1),null);
var job = vec__15821;
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
var n__4376__auto___15980 = n;
var __15981 = (0);
while(true){
if((__15981 < n__4376__auto___15980)){
var G__15824_15982 = type;
var G__15824_15983__$1 = (((G__15824_15982 instanceof cljs.core.Keyword))?G__15824_15982.fqn:null);
switch (G__15824_15983__$1) {
case "compute":
var c__13771__auto___15985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15981,c__13771__auto___15985,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (__15981,c__13771__auto___15985,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async){
return (function (state_15837){
var state_val_15838 = (state_15837[(1)]);
if((state_val_15838 === (1))){
var state_15837__$1 = state_15837;
var statearr_15839_15986 = state_15837__$1;
(statearr_15839_15986[(2)] = null);

(statearr_15839_15986[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (2))){
var state_15837__$1 = state_15837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15837__$1,(4),jobs);
} else {
if((state_val_15838 === (3))){
var inst_15835 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15837__$1,inst_15835);
} else {
if((state_val_15838 === (4))){
var inst_15827 = (state_15837[(2)]);
var inst_15828 = process(inst_15827);
var state_15837__$1 = state_15837;
if(cljs.core.truth_(inst_15828)){
var statearr_15840_15987 = state_15837__$1;
(statearr_15840_15987[(1)] = (5));

} else {
var statearr_15841_15988 = state_15837__$1;
(statearr_15841_15988[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (5))){
var state_15837__$1 = state_15837;
var statearr_15842_15989 = state_15837__$1;
(statearr_15842_15989[(2)] = null);

(statearr_15842_15989[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (6))){
var state_15837__$1 = state_15837;
var statearr_15843_15990 = state_15837__$1;
(statearr_15843_15990[(2)] = null);

(statearr_15843_15990[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (7))){
var inst_15833 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
var statearr_15844_15991 = state_15837__$1;
(statearr_15844_15991[(2)] = inst_15833);

(statearr_15844_15991[(1)] = (3));


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
});})(__15981,c__13771__auto___15985,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async))
;
return ((function (__15981,switch__13590__auto__,c__13771__auto___15985,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0 = (function (){
var statearr_15845 = [null,null,null,null,null,null,null];
(statearr_15845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__);

(statearr_15845[(1)] = (1));

return statearr_15845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1 = (function (state_15837){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_15837);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e15846){if((e15846 instanceof Object)){
var ex__13594__auto__ = e15846;
var statearr_15847_15992 = state_15837;
(statearr_15847_15992[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15837);

return cljs.core.cst$kw$recur;
} else {
throw e15846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__15993 = state_15837;
state_15837 = G__15993;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = function(state_15837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1.call(this,state_15837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__;
})()
;})(__15981,switch__13590__auto__,c__13771__auto___15985,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async))
})();
var state__13773__auto__ = (function (){var statearr_15848 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_15848[(6)] = c__13771__auto___15985);

return statearr_15848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(__15981,c__13771__auto___15985,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async))
);


break;
case "async":
var c__13771__auto___15994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15981,c__13771__auto___15994,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (__15981,c__13771__auto___15994,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async){
return (function (state_15861){
var state_val_15862 = (state_15861[(1)]);
if((state_val_15862 === (1))){
var state_15861__$1 = state_15861;
var statearr_15863_15995 = state_15861__$1;
(statearr_15863_15995[(2)] = null);

(statearr_15863_15995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15862 === (2))){
var state_15861__$1 = state_15861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15861__$1,(4),jobs);
} else {
if((state_val_15862 === (3))){
var inst_15859 = (state_15861[(2)]);
var state_15861__$1 = state_15861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15861__$1,inst_15859);
} else {
if((state_val_15862 === (4))){
var inst_15851 = (state_15861[(2)]);
var inst_15852 = async(inst_15851);
var state_15861__$1 = state_15861;
if(cljs.core.truth_(inst_15852)){
var statearr_15864_15996 = state_15861__$1;
(statearr_15864_15996[(1)] = (5));

} else {
var statearr_15865_15997 = state_15861__$1;
(statearr_15865_15997[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15862 === (5))){
var state_15861__$1 = state_15861;
var statearr_15866_15998 = state_15861__$1;
(statearr_15866_15998[(2)] = null);

(statearr_15866_15998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15862 === (6))){
var state_15861__$1 = state_15861;
var statearr_15867_15999 = state_15861__$1;
(statearr_15867_15999[(2)] = null);

(statearr_15867_15999[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15862 === (7))){
var inst_15857 = (state_15861[(2)]);
var state_15861__$1 = state_15861;
var statearr_15868_16000 = state_15861__$1;
(statearr_15868_16000[(2)] = inst_15857);

(statearr_15868_16000[(1)] = (3));


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
});})(__15981,c__13771__auto___15994,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async))
;
return ((function (__15981,switch__13590__auto__,c__13771__auto___15994,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0 = (function (){
var statearr_15869 = [null,null,null,null,null,null,null];
(statearr_15869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__);

(statearr_15869[(1)] = (1));

return statearr_15869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1 = (function (state_15861){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_15861);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e15870){if((e15870 instanceof Object)){
var ex__13594__auto__ = e15870;
var statearr_15871_16001 = state_15861;
(statearr_15871_16001[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15861);

return cljs.core.cst$kw$recur;
} else {
throw e15870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16002 = state_15861;
state_15861 = G__16002;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = function(state_15861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1.call(this,state_15861);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__;
})()
;})(__15981,switch__13590__auto__,c__13771__auto___15994,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async))
})();
var state__13773__auto__ = (function (){var statearr_15872 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_15872[(6)] = c__13771__auto___15994);

return statearr_15872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(__15981,c__13771__auto___15994,G__15824_15982,G__15824_15983__$1,n__4376__auto___15980,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15824_15983__$1)].join('')));

}

var G__16003 = (__15981 + (1));
__15981 = G__16003;
continue;
} else {
}
break;
}

var c__13771__auto___16004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___16004,jobs,results,process,async){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___16004,jobs,results,process,async){
return (function (state_15894){
var state_val_15895 = (state_15894[(1)]);
if((state_val_15895 === (1))){
var state_15894__$1 = state_15894;
var statearr_15896_16005 = state_15894__$1;
(statearr_15896_16005[(2)] = null);

(statearr_15896_16005[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15895 === (2))){
var state_15894__$1 = state_15894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15894__$1,(4),from);
} else {
if((state_val_15895 === (3))){
var inst_15892 = (state_15894[(2)]);
var state_15894__$1 = state_15894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15894__$1,inst_15892);
} else {
if((state_val_15895 === (4))){
var inst_15875 = (state_15894[(7)]);
var inst_15875__$1 = (state_15894[(2)]);
var inst_15876 = (inst_15875__$1 == null);
var state_15894__$1 = (function (){var statearr_15897 = state_15894;
(statearr_15897[(7)] = inst_15875__$1);

return statearr_15897;
})();
if(cljs.core.truth_(inst_15876)){
var statearr_15898_16006 = state_15894__$1;
(statearr_15898_16006[(1)] = (5));

} else {
var statearr_15899_16007 = state_15894__$1;
(statearr_15899_16007[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15895 === (5))){
var inst_15878 = cljs.core.async.close_BANG_(jobs);
var state_15894__$1 = state_15894;
var statearr_15900_16008 = state_15894__$1;
(statearr_15900_16008[(2)] = inst_15878);

(statearr_15900_16008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15895 === (6))){
var inst_15875 = (state_15894[(7)]);
var inst_15880 = (state_15894[(8)]);
var inst_15880__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15882 = [inst_15875,inst_15880__$1];
var inst_15883 = (new cljs.core.PersistentVector(null,2,(5),inst_15881,inst_15882,null));
var state_15894__$1 = (function (){var statearr_15901 = state_15894;
(statearr_15901[(8)] = inst_15880__$1);

return statearr_15901;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15894__$1,(8),jobs,inst_15883);
} else {
if((state_val_15895 === (7))){
var inst_15890 = (state_15894[(2)]);
var state_15894__$1 = state_15894;
var statearr_15902_16009 = state_15894__$1;
(statearr_15902_16009[(2)] = inst_15890);

(statearr_15902_16009[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15895 === (8))){
var inst_15880 = (state_15894[(8)]);
var inst_15885 = (state_15894[(2)]);
var state_15894__$1 = (function (){var statearr_15903 = state_15894;
(statearr_15903[(9)] = inst_15885);

return statearr_15903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15894__$1,(9),results,inst_15880);
} else {
if((state_val_15895 === (9))){
var inst_15887 = (state_15894[(2)]);
var state_15894__$1 = (function (){var statearr_15904 = state_15894;
(statearr_15904[(10)] = inst_15887);

return statearr_15904;
})();
var statearr_15905_16010 = state_15894__$1;
(statearr_15905_16010[(2)] = null);

(statearr_15905_16010[(1)] = (2));


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
});})(c__13771__auto___16004,jobs,results,process,async))
;
return ((function (switch__13590__auto__,c__13771__auto___16004,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0 = (function (){
var statearr_15906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__);

(statearr_15906[(1)] = (1));

return statearr_15906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1 = (function (state_15894){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_15894);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e15907){if((e15907 instanceof Object)){
var ex__13594__auto__ = e15907;
var statearr_15908_16011 = state_15894;
(statearr_15908_16011[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15894);

return cljs.core.cst$kw$recur;
} else {
throw e15907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16012 = state_15894;
state_15894 = G__16012;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = function(state_15894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1.call(this,state_15894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___16004,jobs,results,process,async))
})();
var state__13773__auto__ = (function (){var statearr_15909 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_15909[(6)] = c__13771__auto___16004);

return statearr_15909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___16004,jobs,results,process,async))
);


var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,jobs,results,process,async){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,jobs,results,process,async){
return (function (state_15947){
var state_val_15948 = (state_15947[(1)]);
if((state_val_15948 === (7))){
var inst_15943 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
var statearr_15949_16013 = state_15947__$1;
(statearr_15949_16013[(2)] = inst_15943);

(statearr_15949_16013[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (20))){
var state_15947__$1 = state_15947;
var statearr_15950_16014 = state_15947__$1;
(statearr_15950_16014[(2)] = null);

(statearr_15950_16014[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (1))){
var state_15947__$1 = state_15947;
var statearr_15951_16015 = state_15947__$1;
(statearr_15951_16015[(2)] = null);

(statearr_15951_16015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (4))){
var inst_15912 = (state_15947[(7)]);
var inst_15912__$1 = (state_15947[(2)]);
var inst_15913 = (inst_15912__$1 == null);
var state_15947__$1 = (function (){var statearr_15952 = state_15947;
(statearr_15952[(7)] = inst_15912__$1);

return statearr_15952;
})();
if(cljs.core.truth_(inst_15913)){
var statearr_15953_16016 = state_15947__$1;
(statearr_15953_16016[(1)] = (5));

} else {
var statearr_15954_16017 = state_15947__$1;
(statearr_15954_16017[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (15))){
var inst_15925 = (state_15947[(8)]);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15947__$1,(18),to,inst_15925);
} else {
if((state_val_15948 === (21))){
var inst_15938 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
var statearr_15955_16018 = state_15947__$1;
(statearr_15955_16018[(2)] = inst_15938);

(statearr_15955_16018[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (13))){
var inst_15940 = (state_15947[(2)]);
var state_15947__$1 = (function (){var statearr_15956 = state_15947;
(statearr_15956[(9)] = inst_15940);

return statearr_15956;
})();
var statearr_15957_16019 = state_15947__$1;
(statearr_15957_16019[(2)] = null);

(statearr_15957_16019[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (6))){
var inst_15912 = (state_15947[(7)]);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15947__$1,(11),inst_15912);
} else {
if((state_val_15948 === (17))){
var inst_15933 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
if(cljs.core.truth_(inst_15933)){
var statearr_15958_16020 = state_15947__$1;
(statearr_15958_16020[(1)] = (19));

} else {
var statearr_15959_16021 = state_15947__$1;
(statearr_15959_16021[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (3))){
var inst_15945 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15947__$1,inst_15945);
} else {
if((state_val_15948 === (12))){
var inst_15922 = (state_15947[(10)]);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15947__$1,(14),inst_15922);
} else {
if((state_val_15948 === (2))){
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15947__$1,(4),results);
} else {
if((state_val_15948 === (19))){
var state_15947__$1 = state_15947;
var statearr_15960_16022 = state_15947__$1;
(statearr_15960_16022[(2)] = null);

(statearr_15960_16022[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (11))){
var inst_15922 = (state_15947[(2)]);
var state_15947__$1 = (function (){var statearr_15961 = state_15947;
(statearr_15961[(10)] = inst_15922);

return statearr_15961;
})();
var statearr_15962_16023 = state_15947__$1;
(statearr_15962_16023[(2)] = null);

(statearr_15962_16023[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (9))){
var state_15947__$1 = state_15947;
var statearr_15963_16024 = state_15947__$1;
(statearr_15963_16024[(2)] = null);

(statearr_15963_16024[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (5))){
var state_15947__$1 = state_15947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15964_16025 = state_15947__$1;
(statearr_15964_16025[(1)] = (8));

} else {
var statearr_15965_16026 = state_15947__$1;
(statearr_15965_16026[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (14))){
var inst_15927 = (state_15947[(11)]);
var inst_15925 = (state_15947[(8)]);
var inst_15925__$1 = (state_15947[(2)]);
var inst_15926 = (inst_15925__$1 == null);
var inst_15927__$1 = cljs.core.not(inst_15926);
var state_15947__$1 = (function (){var statearr_15966 = state_15947;
(statearr_15966[(11)] = inst_15927__$1);

(statearr_15966[(8)] = inst_15925__$1);

return statearr_15966;
})();
if(inst_15927__$1){
var statearr_15967_16027 = state_15947__$1;
(statearr_15967_16027[(1)] = (15));

} else {
var statearr_15968_16028 = state_15947__$1;
(statearr_15968_16028[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (16))){
var inst_15927 = (state_15947[(11)]);
var state_15947__$1 = state_15947;
var statearr_15969_16029 = state_15947__$1;
(statearr_15969_16029[(2)] = inst_15927);

(statearr_15969_16029[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (10))){
var inst_15919 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
var statearr_15970_16030 = state_15947__$1;
(statearr_15970_16030[(2)] = inst_15919);

(statearr_15970_16030[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (18))){
var inst_15930 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
var statearr_15971_16031 = state_15947__$1;
(statearr_15971_16031[(2)] = inst_15930);

(statearr_15971_16031[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15948 === (8))){
var inst_15916 = cljs.core.async.close_BANG_(to);
var state_15947__$1 = state_15947;
var statearr_15972_16032 = state_15947__$1;
(statearr_15972_16032[(2)] = inst_15916);

(statearr_15972_16032[(1)] = (10));


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
});})(c__13771__auto__,jobs,results,process,async))
;
return ((function (switch__13590__auto__,c__13771__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0 = (function (){
var statearr_15973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__);

(statearr_15973[(1)] = (1));

return statearr_15973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1 = (function (state_15947){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_15947);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e15974){if((e15974 instanceof Object)){
var ex__13594__auto__ = e15974;
var statearr_15975_16033 = state_15947;
(statearr_15975_16033[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15947);

return cljs.core.cst$kw$recur;
} else {
throw e15974;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16034 = state_15947;
state_15947 = G__16034;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__ = function(state_15947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1.call(this,state_15947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,jobs,results,process,async))
})();
var state__13773__auto__ = (function (){var statearr_15976 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_15976[(6)] = c__13771__auto__);

return statearr_15976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,jobs,results,process,async))
);

return c__13771__auto__;
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
var G__16036 = arguments.length;
switch (G__16036) {
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
var G__16039 = arguments.length;
switch (G__16039) {
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
var G__16042 = arguments.length;
switch (G__16042) {
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
var c__13771__auto___16091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___16091,tc,fc){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___16091,tc,fc){
return (function (state_16068){
var state_val_16069 = (state_16068[(1)]);
if((state_val_16069 === (7))){
var inst_16064 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16070_16092 = state_16068__$1;
(statearr_16070_16092[(2)] = inst_16064);

(statearr_16070_16092[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (1))){
var state_16068__$1 = state_16068;
var statearr_16071_16093 = state_16068__$1;
(statearr_16071_16093[(2)] = null);

(statearr_16071_16093[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (4))){
var inst_16045 = (state_16068[(7)]);
var inst_16045__$1 = (state_16068[(2)]);
var inst_16046 = (inst_16045__$1 == null);
var state_16068__$1 = (function (){var statearr_16072 = state_16068;
(statearr_16072[(7)] = inst_16045__$1);

return statearr_16072;
})();
if(cljs.core.truth_(inst_16046)){
var statearr_16073_16094 = state_16068__$1;
(statearr_16073_16094[(1)] = (5));

} else {
var statearr_16074_16095 = state_16068__$1;
(statearr_16074_16095[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (13))){
var state_16068__$1 = state_16068;
var statearr_16075_16096 = state_16068__$1;
(statearr_16075_16096[(2)] = null);

(statearr_16075_16096[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (6))){
var inst_16045 = (state_16068[(7)]);
var inst_16051 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16045) : p.call(null,inst_16045));
var state_16068__$1 = state_16068;
if(cljs.core.truth_(inst_16051)){
var statearr_16076_16097 = state_16068__$1;
(statearr_16076_16097[(1)] = (9));

} else {
var statearr_16077_16098 = state_16068__$1;
(statearr_16077_16098[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (3))){
var inst_16066 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16068__$1,inst_16066);
} else {
if((state_val_16069 === (12))){
var state_16068__$1 = state_16068;
var statearr_16078_16099 = state_16068__$1;
(statearr_16078_16099[(2)] = null);

(statearr_16078_16099[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (2))){
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16068__$1,(4),ch);
} else {
if((state_val_16069 === (11))){
var inst_16045 = (state_16068[(7)]);
var inst_16055 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16068__$1,(8),inst_16055,inst_16045);
} else {
if((state_val_16069 === (9))){
var state_16068__$1 = state_16068;
var statearr_16079_16100 = state_16068__$1;
(statearr_16079_16100[(2)] = tc);

(statearr_16079_16100[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (5))){
var inst_16048 = cljs.core.async.close_BANG_(tc);
var inst_16049 = cljs.core.async.close_BANG_(fc);
var state_16068__$1 = (function (){var statearr_16080 = state_16068;
(statearr_16080[(8)] = inst_16048);

return statearr_16080;
})();
var statearr_16081_16101 = state_16068__$1;
(statearr_16081_16101[(2)] = inst_16049);

(statearr_16081_16101[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (14))){
var inst_16062 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16082_16102 = state_16068__$1;
(statearr_16082_16102[(2)] = inst_16062);

(statearr_16082_16102[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (10))){
var state_16068__$1 = state_16068;
var statearr_16083_16103 = state_16068__$1;
(statearr_16083_16103[(2)] = fc);

(statearr_16083_16103[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16069 === (8))){
var inst_16057 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
if(cljs.core.truth_(inst_16057)){
var statearr_16084_16104 = state_16068__$1;
(statearr_16084_16104[(1)] = (12));

} else {
var statearr_16085_16105 = state_16068__$1;
(statearr_16085_16105[(1)] = (13));

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
});})(c__13771__auto___16091,tc,fc))
;
return ((function (switch__13590__auto__,c__13771__auto___16091,tc,fc){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_16086 = [null,null,null,null,null,null,null,null,null];
(statearr_16086[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_16086[(1)] = (1));

return statearr_16086;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_16068){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_16068);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e16087){if((e16087 instanceof Object)){
var ex__13594__auto__ = e16087;
var statearr_16088_16106 = state_16068;
(statearr_16088_16106[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16068);

return cljs.core.cst$kw$recur;
} else {
throw e16087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16107 = state_16068;
state_16068 = G__16107;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_16068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_16068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___16091,tc,fc))
})();
var state__13773__auto__ = (function (){var statearr_16089 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_16089[(6)] = c__13771__auto___16091);

return statearr_16089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___16091,tc,fc))
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
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__){
return (function (state_16128){
var state_val_16129 = (state_16128[(1)]);
if((state_val_16129 === (7))){
var inst_16124 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
var statearr_16130_16148 = state_16128__$1;
(statearr_16130_16148[(2)] = inst_16124);

(statearr_16130_16148[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16129 === (1))){
var inst_16108 = init;
var state_16128__$1 = (function (){var statearr_16131 = state_16128;
(statearr_16131[(7)] = inst_16108);

return statearr_16131;
})();
var statearr_16132_16149 = state_16128__$1;
(statearr_16132_16149[(2)] = null);

(statearr_16132_16149[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16129 === (4))){
var inst_16111 = (state_16128[(8)]);
var inst_16111__$1 = (state_16128[(2)]);
var inst_16112 = (inst_16111__$1 == null);
var state_16128__$1 = (function (){var statearr_16133 = state_16128;
(statearr_16133[(8)] = inst_16111__$1);

return statearr_16133;
})();
if(cljs.core.truth_(inst_16112)){
var statearr_16134_16150 = state_16128__$1;
(statearr_16134_16150[(1)] = (5));

} else {
var statearr_16135_16151 = state_16128__$1;
(statearr_16135_16151[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16129 === (6))){
var inst_16111 = (state_16128[(8)]);
var inst_16115 = (state_16128[(9)]);
var inst_16108 = (state_16128[(7)]);
var inst_16115__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16108,inst_16111) : f.call(null,inst_16108,inst_16111));
var inst_16116 = cljs.core.reduced_QMARK_(inst_16115__$1);
var state_16128__$1 = (function (){var statearr_16136 = state_16128;
(statearr_16136[(9)] = inst_16115__$1);

return statearr_16136;
})();
if(inst_16116){
var statearr_16137_16152 = state_16128__$1;
(statearr_16137_16152[(1)] = (8));

} else {
var statearr_16138_16153 = state_16128__$1;
(statearr_16138_16153[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16129 === (3))){
var inst_16126 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16128__$1,inst_16126);
} else {
if((state_val_16129 === (2))){
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16128__$1,(4),ch);
} else {
if((state_val_16129 === (9))){
var inst_16115 = (state_16128[(9)]);
var inst_16108 = inst_16115;
var state_16128__$1 = (function (){var statearr_16139 = state_16128;
(statearr_16139[(7)] = inst_16108);

return statearr_16139;
})();
var statearr_16140_16154 = state_16128__$1;
(statearr_16140_16154[(2)] = null);

(statearr_16140_16154[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16129 === (5))){
var inst_16108 = (state_16128[(7)]);
var state_16128__$1 = state_16128;
var statearr_16141_16155 = state_16128__$1;
(statearr_16141_16155[(2)] = inst_16108);

(statearr_16141_16155[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16129 === (10))){
var inst_16122 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
var statearr_16142_16156 = state_16128__$1;
(statearr_16142_16156[(2)] = inst_16122);

(statearr_16142_16156[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16129 === (8))){
var inst_16115 = (state_16128[(9)]);
var inst_16118 = cljs.core.deref(inst_16115);
var state_16128__$1 = state_16128;
var statearr_16143_16157 = state_16128__$1;
(statearr_16143_16157[(2)] = inst_16118);

(statearr_16143_16157[(1)] = (10));


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
});})(c__13771__auto__))
;
return ((function (switch__13590__auto__,c__13771__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13591__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13591__auto____0 = (function (){
var statearr_16144 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16144[(0)] = cljs$core$async$reduce_$_state_machine__13591__auto__);

(statearr_16144[(1)] = (1));

return statearr_16144;
});
var cljs$core$async$reduce_$_state_machine__13591__auto____1 = (function (state_16128){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_16128);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e16145){if((e16145 instanceof Object)){
var ex__13594__auto__ = e16145;
var statearr_16146_16158 = state_16128;
(statearr_16146_16158[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16128);

return cljs.core.cst$kw$recur;
} else {
throw e16145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16159 = state_16128;
state_16128 = G__16159;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13591__auto__ = function(state_16128){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13591__auto____1.call(this,state_16128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13591__auto____0;
cljs$core$async$reduce_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13591__auto____1;
return cljs$core$async$reduce_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_16147 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_16147[(6)] = c__13771__auto__);

return statearr_16147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__,f__$1){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__,f__$1){
return (function (state_16165){
var state_val_16166 = (state_16165[(1)]);
if((state_val_16166 === (1))){
var inst_16160 = cljs.core.async.reduce(f__$1,init,ch);
var state_16165__$1 = state_16165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16165__$1,(2),inst_16160);
} else {
if((state_val_16166 === (2))){
var inst_16162 = (state_16165[(2)]);
var inst_16163 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16162) : f__$1.call(null,inst_16162));
var state_16165__$1 = state_16165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16165__$1,inst_16163);
} else {
return null;
}
}
});})(c__13771__auto__,f__$1))
;
return ((function (switch__13590__auto__,c__13771__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13591__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13591__auto____0 = (function (){
var statearr_16167 = [null,null,null,null,null,null,null];
(statearr_16167[(0)] = cljs$core$async$transduce_$_state_machine__13591__auto__);

(statearr_16167[(1)] = (1));

return statearr_16167;
});
var cljs$core$async$transduce_$_state_machine__13591__auto____1 = (function (state_16165){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_16165);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e16168){if((e16168 instanceof Object)){
var ex__13594__auto__ = e16168;
var statearr_16169_16171 = state_16165;
(statearr_16169_16171[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16165);

return cljs.core.cst$kw$recur;
} else {
throw e16168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16172 = state_16165;
state_16165 = G__16172;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13591__auto__ = function(state_16165){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13591__auto____1.call(this,state_16165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13591__auto____0;
cljs$core$async$transduce_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13591__auto____1;
return cljs$core$async$transduce_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__,f__$1))
})();
var state__13773__auto__ = (function (){var statearr_16170 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_16170[(6)] = c__13771__auto__);

return statearr_16170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__,f__$1))
);

return c__13771__auto__;
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
var G__16174 = arguments.length;
switch (G__16174) {
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
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__){
return (function (state_16199){
var state_val_16200 = (state_16199[(1)]);
if((state_val_16200 === (7))){
var inst_16181 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16201_16222 = state_16199__$1;
(statearr_16201_16222[(2)] = inst_16181);

(statearr_16201_16222[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (1))){
var inst_16175 = cljs.core.seq(coll);
var inst_16176 = inst_16175;
var state_16199__$1 = (function (){var statearr_16202 = state_16199;
(statearr_16202[(7)] = inst_16176);

return statearr_16202;
})();
var statearr_16203_16223 = state_16199__$1;
(statearr_16203_16223[(2)] = null);

(statearr_16203_16223[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (4))){
var inst_16176 = (state_16199[(7)]);
var inst_16179 = cljs.core.first(inst_16176);
var state_16199__$1 = state_16199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16199__$1,(7),ch,inst_16179);
} else {
if((state_val_16200 === (13))){
var inst_16193 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16204_16224 = state_16199__$1;
(statearr_16204_16224[(2)] = inst_16193);

(statearr_16204_16224[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (6))){
var inst_16184 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
if(cljs.core.truth_(inst_16184)){
var statearr_16205_16225 = state_16199__$1;
(statearr_16205_16225[(1)] = (8));

} else {
var statearr_16206_16226 = state_16199__$1;
(statearr_16206_16226[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (3))){
var inst_16197 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16199__$1,inst_16197);
} else {
if((state_val_16200 === (12))){
var state_16199__$1 = state_16199;
var statearr_16207_16227 = state_16199__$1;
(statearr_16207_16227[(2)] = null);

(statearr_16207_16227[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (2))){
var inst_16176 = (state_16199[(7)]);
var state_16199__$1 = state_16199;
if(cljs.core.truth_(inst_16176)){
var statearr_16208_16228 = state_16199__$1;
(statearr_16208_16228[(1)] = (4));

} else {
var statearr_16209_16229 = state_16199__$1;
(statearr_16209_16229[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (11))){
var inst_16190 = cljs.core.async.close_BANG_(ch);
var state_16199__$1 = state_16199;
var statearr_16210_16230 = state_16199__$1;
(statearr_16210_16230[(2)] = inst_16190);

(statearr_16210_16230[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (9))){
var state_16199__$1 = state_16199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16211_16231 = state_16199__$1;
(statearr_16211_16231[(1)] = (11));

} else {
var statearr_16212_16232 = state_16199__$1;
(statearr_16212_16232[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (5))){
var inst_16176 = (state_16199[(7)]);
var state_16199__$1 = state_16199;
var statearr_16213_16233 = state_16199__$1;
(statearr_16213_16233[(2)] = inst_16176);

(statearr_16213_16233[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (10))){
var inst_16195 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16214_16234 = state_16199__$1;
(statearr_16214_16234[(2)] = inst_16195);

(statearr_16214_16234[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (8))){
var inst_16176 = (state_16199[(7)]);
var inst_16186 = cljs.core.next(inst_16176);
var inst_16176__$1 = inst_16186;
var state_16199__$1 = (function (){var statearr_16215 = state_16199;
(statearr_16215[(7)] = inst_16176__$1);

return statearr_16215;
})();
var statearr_16216_16235 = state_16199__$1;
(statearr_16216_16235[(2)] = null);

(statearr_16216_16235[(1)] = (2));


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
});})(c__13771__auto__))
;
return ((function (switch__13590__auto__,c__13771__auto__){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_16217 = [null,null,null,null,null,null,null,null];
(statearr_16217[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_16217[(1)] = (1));

return statearr_16217;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_16199){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_16199);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e16218){if((e16218 instanceof Object)){
var ex__13594__auto__ = e16218;
var statearr_16219_16236 = state_16199;
(statearr_16219_16236[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16199);

return cljs.core.cst$kw$recur;
} else {
throw e16218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16237 = state_16199;
state_16199 = G__16237;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_16199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_16199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_16220 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_16220[(6)] = c__13771__auto__);

return statearr_16220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async16238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16238 = (function (ch,cs,meta16239){
this.ch = ch;
this.cs = cs;
this.meta16239 = meta16239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16240,meta16239__$1){
var self__ = this;
var _16240__$1 = this;
return (new cljs.core.async.t_cljs$core$async16238(self__.ch,self__.cs,meta16239__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16240){
var self__ = this;
var _16240__$1 = this;
return self__.meta16239;
});})(cs))
;

cljs.core.async.t_cljs$core$async16238.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16238.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16238.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16238.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16238.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16238.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16239], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16238";

cljs.core.async.t_cljs$core$async16238.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16238");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16238.
 */
cljs.core.async.__GT_t_cljs$core$async16238 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16238(ch__$1,cs__$1,meta16239){
return (new cljs.core.async.t_cljs$core$async16238(ch__$1,cs__$1,meta16239));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16238(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13771__auto___16460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___16460,cs,m,dchan,dctr,done){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___16460,cs,m,dchan,dctr,done){
return (function (state_16375){
var state_val_16376 = (state_16375[(1)]);
if((state_val_16376 === (7))){
var inst_16371 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16377_16461 = state_16375__$1;
(statearr_16377_16461[(2)] = inst_16371);

(statearr_16377_16461[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (20))){
var inst_16274 = (state_16375[(7)]);
var inst_16286 = cljs.core.first(inst_16274);
var inst_16287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16286,(0),null);
var inst_16288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16286,(1),null);
var state_16375__$1 = (function (){var statearr_16378 = state_16375;
(statearr_16378[(8)] = inst_16287);

return statearr_16378;
})();
if(cljs.core.truth_(inst_16288)){
var statearr_16379_16462 = state_16375__$1;
(statearr_16379_16462[(1)] = (22));

} else {
var statearr_16380_16463 = state_16375__$1;
(statearr_16380_16463[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (27))){
var inst_16316 = (state_16375[(9)]);
var inst_16243 = (state_16375[(10)]);
var inst_16318 = (state_16375[(11)]);
var inst_16323 = (state_16375[(12)]);
var inst_16323__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16316,inst_16318);
var inst_16324 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16323__$1,inst_16243,done);
var state_16375__$1 = (function (){var statearr_16381 = state_16375;
(statearr_16381[(12)] = inst_16323__$1);

return statearr_16381;
})();
if(cljs.core.truth_(inst_16324)){
var statearr_16382_16464 = state_16375__$1;
(statearr_16382_16464[(1)] = (30));

} else {
var statearr_16383_16465 = state_16375__$1;
(statearr_16383_16465[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (1))){
var state_16375__$1 = state_16375;
var statearr_16384_16466 = state_16375__$1;
(statearr_16384_16466[(2)] = null);

(statearr_16384_16466[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (24))){
var inst_16274 = (state_16375[(7)]);
var inst_16293 = (state_16375[(2)]);
var inst_16294 = cljs.core.next(inst_16274);
var inst_16252 = inst_16294;
var inst_16253 = null;
var inst_16254 = (0);
var inst_16255 = (0);
var state_16375__$1 = (function (){var statearr_16385 = state_16375;
(statearr_16385[(13)] = inst_16254);

(statearr_16385[(14)] = inst_16253);

(statearr_16385[(15)] = inst_16252);

(statearr_16385[(16)] = inst_16255);

(statearr_16385[(17)] = inst_16293);

return statearr_16385;
})();
var statearr_16386_16467 = state_16375__$1;
(statearr_16386_16467[(2)] = null);

(statearr_16386_16467[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (39))){
var state_16375__$1 = state_16375;
var statearr_16390_16468 = state_16375__$1;
(statearr_16390_16468[(2)] = null);

(statearr_16390_16468[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (4))){
var inst_16243 = (state_16375[(10)]);
var inst_16243__$1 = (state_16375[(2)]);
var inst_16244 = (inst_16243__$1 == null);
var state_16375__$1 = (function (){var statearr_16391 = state_16375;
(statearr_16391[(10)] = inst_16243__$1);

return statearr_16391;
})();
if(cljs.core.truth_(inst_16244)){
var statearr_16392_16469 = state_16375__$1;
(statearr_16392_16469[(1)] = (5));

} else {
var statearr_16393_16470 = state_16375__$1;
(statearr_16393_16470[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (15))){
var inst_16254 = (state_16375[(13)]);
var inst_16253 = (state_16375[(14)]);
var inst_16252 = (state_16375[(15)]);
var inst_16255 = (state_16375[(16)]);
var inst_16270 = (state_16375[(2)]);
var inst_16271 = (inst_16255 + (1));
var tmp16387 = inst_16254;
var tmp16388 = inst_16253;
var tmp16389 = inst_16252;
var inst_16252__$1 = tmp16389;
var inst_16253__$1 = tmp16388;
var inst_16254__$1 = tmp16387;
var inst_16255__$1 = inst_16271;
var state_16375__$1 = (function (){var statearr_16394 = state_16375;
(statearr_16394[(13)] = inst_16254__$1);

(statearr_16394[(14)] = inst_16253__$1);

(statearr_16394[(15)] = inst_16252__$1);

(statearr_16394[(16)] = inst_16255__$1);

(statearr_16394[(18)] = inst_16270);

return statearr_16394;
})();
var statearr_16395_16471 = state_16375__$1;
(statearr_16395_16471[(2)] = null);

(statearr_16395_16471[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (21))){
var inst_16297 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16399_16472 = state_16375__$1;
(statearr_16399_16472[(2)] = inst_16297);

(statearr_16399_16472[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (31))){
var inst_16323 = (state_16375[(12)]);
var inst_16327 = done(null);
var inst_16328 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16323);
var state_16375__$1 = (function (){var statearr_16400 = state_16375;
(statearr_16400[(19)] = inst_16327);

return statearr_16400;
})();
var statearr_16401_16473 = state_16375__$1;
(statearr_16401_16473[(2)] = inst_16328);

(statearr_16401_16473[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (32))){
var inst_16315 = (state_16375[(20)]);
var inst_16317 = (state_16375[(21)]);
var inst_16316 = (state_16375[(9)]);
var inst_16318 = (state_16375[(11)]);
var inst_16330 = (state_16375[(2)]);
var inst_16331 = (inst_16318 + (1));
var tmp16396 = inst_16315;
var tmp16397 = inst_16317;
var tmp16398 = inst_16316;
var inst_16315__$1 = tmp16396;
var inst_16316__$1 = tmp16398;
var inst_16317__$1 = tmp16397;
var inst_16318__$1 = inst_16331;
var state_16375__$1 = (function (){var statearr_16402 = state_16375;
(statearr_16402[(22)] = inst_16330);

(statearr_16402[(20)] = inst_16315__$1);

(statearr_16402[(21)] = inst_16317__$1);

(statearr_16402[(9)] = inst_16316__$1);

(statearr_16402[(11)] = inst_16318__$1);

return statearr_16402;
})();
var statearr_16403_16474 = state_16375__$1;
(statearr_16403_16474[(2)] = null);

(statearr_16403_16474[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (40))){
var inst_16343 = (state_16375[(23)]);
var inst_16347 = done(null);
var inst_16348 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16343);
var state_16375__$1 = (function (){var statearr_16404 = state_16375;
(statearr_16404[(24)] = inst_16347);

return statearr_16404;
})();
var statearr_16405_16475 = state_16375__$1;
(statearr_16405_16475[(2)] = inst_16348);

(statearr_16405_16475[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (33))){
var inst_16334 = (state_16375[(25)]);
var inst_16336 = cljs.core.chunked_seq_QMARK_(inst_16334);
var state_16375__$1 = state_16375;
if(inst_16336){
var statearr_16406_16476 = state_16375__$1;
(statearr_16406_16476[(1)] = (36));

} else {
var statearr_16407_16477 = state_16375__$1;
(statearr_16407_16477[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (13))){
var inst_16264 = (state_16375[(26)]);
var inst_16267 = cljs.core.async.close_BANG_(inst_16264);
var state_16375__$1 = state_16375;
var statearr_16408_16478 = state_16375__$1;
(statearr_16408_16478[(2)] = inst_16267);

(statearr_16408_16478[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (22))){
var inst_16287 = (state_16375[(8)]);
var inst_16290 = cljs.core.async.close_BANG_(inst_16287);
var state_16375__$1 = state_16375;
var statearr_16409_16479 = state_16375__$1;
(statearr_16409_16479[(2)] = inst_16290);

(statearr_16409_16479[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (36))){
var inst_16334 = (state_16375[(25)]);
var inst_16338 = cljs.core.chunk_first(inst_16334);
var inst_16339 = cljs.core.chunk_rest(inst_16334);
var inst_16340 = cljs.core.count(inst_16338);
var inst_16315 = inst_16339;
var inst_16316 = inst_16338;
var inst_16317 = inst_16340;
var inst_16318 = (0);
var state_16375__$1 = (function (){var statearr_16410 = state_16375;
(statearr_16410[(20)] = inst_16315);

(statearr_16410[(21)] = inst_16317);

(statearr_16410[(9)] = inst_16316);

(statearr_16410[(11)] = inst_16318);

return statearr_16410;
})();
var statearr_16411_16480 = state_16375__$1;
(statearr_16411_16480[(2)] = null);

(statearr_16411_16480[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (41))){
var inst_16334 = (state_16375[(25)]);
var inst_16350 = (state_16375[(2)]);
var inst_16351 = cljs.core.next(inst_16334);
var inst_16315 = inst_16351;
var inst_16316 = null;
var inst_16317 = (0);
var inst_16318 = (0);
var state_16375__$1 = (function (){var statearr_16412 = state_16375;
(statearr_16412[(20)] = inst_16315);

(statearr_16412[(21)] = inst_16317);

(statearr_16412[(9)] = inst_16316);

(statearr_16412[(11)] = inst_16318);

(statearr_16412[(27)] = inst_16350);

return statearr_16412;
})();
var statearr_16413_16481 = state_16375__$1;
(statearr_16413_16481[(2)] = null);

(statearr_16413_16481[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (43))){
var state_16375__$1 = state_16375;
var statearr_16414_16482 = state_16375__$1;
(statearr_16414_16482[(2)] = null);

(statearr_16414_16482[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (29))){
var inst_16359 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16415_16483 = state_16375__$1;
(statearr_16415_16483[(2)] = inst_16359);

(statearr_16415_16483[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (44))){
var inst_16368 = (state_16375[(2)]);
var state_16375__$1 = (function (){var statearr_16416 = state_16375;
(statearr_16416[(28)] = inst_16368);

return statearr_16416;
})();
var statearr_16417_16484 = state_16375__$1;
(statearr_16417_16484[(2)] = null);

(statearr_16417_16484[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (6))){
var inst_16307 = (state_16375[(29)]);
var inst_16306 = cljs.core.deref(cs);
var inst_16307__$1 = cljs.core.keys(inst_16306);
var inst_16308 = cljs.core.count(inst_16307__$1);
var inst_16309 = cljs.core.reset_BANG_(dctr,inst_16308);
var inst_16314 = cljs.core.seq(inst_16307__$1);
var inst_16315 = inst_16314;
var inst_16316 = null;
var inst_16317 = (0);
var inst_16318 = (0);
var state_16375__$1 = (function (){var statearr_16418 = state_16375;
(statearr_16418[(30)] = inst_16309);

(statearr_16418[(20)] = inst_16315);

(statearr_16418[(21)] = inst_16317);

(statearr_16418[(9)] = inst_16316);

(statearr_16418[(11)] = inst_16318);

(statearr_16418[(29)] = inst_16307__$1);

return statearr_16418;
})();
var statearr_16419_16485 = state_16375__$1;
(statearr_16419_16485[(2)] = null);

(statearr_16419_16485[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (28))){
var inst_16315 = (state_16375[(20)]);
var inst_16334 = (state_16375[(25)]);
var inst_16334__$1 = cljs.core.seq(inst_16315);
var state_16375__$1 = (function (){var statearr_16420 = state_16375;
(statearr_16420[(25)] = inst_16334__$1);

return statearr_16420;
})();
if(inst_16334__$1){
var statearr_16421_16486 = state_16375__$1;
(statearr_16421_16486[(1)] = (33));

} else {
var statearr_16422_16487 = state_16375__$1;
(statearr_16422_16487[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (25))){
var inst_16317 = (state_16375[(21)]);
var inst_16318 = (state_16375[(11)]);
var inst_16320 = (inst_16318 < inst_16317);
var inst_16321 = inst_16320;
var state_16375__$1 = state_16375;
if(cljs.core.truth_(inst_16321)){
var statearr_16423_16488 = state_16375__$1;
(statearr_16423_16488[(1)] = (27));

} else {
var statearr_16424_16489 = state_16375__$1;
(statearr_16424_16489[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (34))){
var state_16375__$1 = state_16375;
var statearr_16425_16490 = state_16375__$1;
(statearr_16425_16490[(2)] = null);

(statearr_16425_16490[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (17))){
var state_16375__$1 = state_16375;
var statearr_16426_16491 = state_16375__$1;
(statearr_16426_16491[(2)] = null);

(statearr_16426_16491[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (3))){
var inst_16373 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16375__$1,inst_16373);
} else {
if((state_val_16376 === (12))){
var inst_16302 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16427_16492 = state_16375__$1;
(statearr_16427_16492[(2)] = inst_16302);

(statearr_16427_16492[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (2))){
var state_16375__$1 = state_16375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16375__$1,(4),ch);
} else {
if((state_val_16376 === (23))){
var state_16375__$1 = state_16375;
var statearr_16428_16493 = state_16375__$1;
(statearr_16428_16493[(2)] = null);

(statearr_16428_16493[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (35))){
var inst_16357 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16429_16494 = state_16375__$1;
(statearr_16429_16494[(2)] = inst_16357);

(statearr_16429_16494[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (19))){
var inst_16274 = (state_16375[(7)]);
var inst_16278 = cljs.core.chunk_first(inst_16274);
var inst_16279 = cljs.core.chunk_rest(inst_16274);
var inst_16280 = cljs.core.count(inst_16278);
var inst_16252 = inst_16279;
var inst_16253 = inst_16278;
var inst_16254 = inst_16280;
var inst_16255 = (0);
var state_16375__$1 = (function (){var statearr_16430 = state_16375;
(statearr_16430[(13)] = inst_16254);

(statearr_16430[(14)] = inst_16253);

(statearr_16430[(15)] = inst_16252);

(statearr_16430[(16)] = inst_16255);

return statearr_16430;
})();
var statearr_16431_16495 = state_16375__$1;
(statearr_16431_16495[(2)] = null);

(statearr_16431_16495[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (11))){
var inst_16274 = (state_16375[(7)]);
var inst_16252 = (state_16375[(15)]);
var inst_16274__$1 = cljs.core.seq(inst_16252);
var state_16375__$1 = (function (){var statearr_16432 = state_16375;
(statearr_16432[(7)] = inst_16274__$1);

return statearr_16432;
})();
if(inst_16274__$1){
var statearr_16433_16496 = state_16375__$1;
(statearr_16433_16496[(1)] = (16));

} else {
var statearr_16434_16497 = state_16375__$1;
(statearr_16434_16497[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (9))){
var inst_16304 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16435_16498 = state_16375__$1;
(statearr_16435_16498[(2)] = inst_16304);

(statearr_16435_16498[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (5))){
var inst_16250 = cljs.core.deref(cs);
var inst_16251 = cljs.core.seq(inst_16250);
var inst_16252 = inst_16251;
var inst_16253 = null;
var inst_16254 = (0);
var inst_16255 = (0);
var state_16375__$1 = (function (){var statearr_16436 = state_16375;
(statearr_16436[(13)] = inst_16254);

(statearr_16436[(14)] = inst_16253);

(statearr_16436[(15)] = inst_16252);

(statearr_16436[(16)] = inst_16255);

return statearr_16436;
})();
var statearr_16437_16499 = state_16375__$1;
(statearr_16437_16499[(2)] = null);

(statearr_16437_16499[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (14))){
var state_16375__$1 = state_16375;
var statearr_16438_16500 = state_16375__$1;
(statearr_16438_16500[(2)] = null);

(statearr_16438_16500[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (45))){
var inst_16365 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16439_16501 = state_16375__$1;
(statearr_16439_16501[(2)] = inst_16365);

(statearr_16439_16501[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (26))){
var inst_16307 = (state_16375[(29)]);
var inst_16361 = (state_16375[(2)]);
var inst_16362 = cljs.core.seq(inst_16307);
var state_16375__$1 = (function (){var statearr_16440 = state_16375;
(statearr_16440[(31)] = inst_16361);

return statearr_16440;
})();
if(inst_16362){
var statearr_16441_16502 = state_16375__$1;
(statearr_16441_16502[(1)] = (42));

} else {
var statearr_16442_16503 = state_16375__$1;
(statearr_16442_16503[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (16))){
var inst_16274 = (state_16375[(7)]);
var inst_16276 = cljs.core.chunked_seq_QMARK_(inst_16274);
var state_16375__$1 = state_16375;
if(inst_16276){
var statearr_16443_16504 = state_16375__$1;
(statearr_16443_16504[(1)] = (19));

} else {
var statearr_16444_16505 = state_16375__$1;
(statearr_16444_16505[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (38))){
var inst_16354 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16445_16506 = state_16375__$1;
(statearr_16445_16506[(2)] = inst_16354);

(statearr_16445_16506[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (30))){
var state_16375__$1 = state_16375;
var statearr_16446_16507 = state_16375__$1;
(statearr_16446_16507[(2)] = null);

(statearr_16446_16507[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (10))){
var inst_16253 = (state_16375[(14)]);
var inst_16255 = (state_16375[(16)]);
var inst_16263 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16253,inst_16255);
var inst_16264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16263,(0),null);
var inst_16265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16263,(1),null);
var state_16375__$1 = (function (){var statearr_16447 = state_16375;
(statearr_16447[(26)] = inst_16264);

return statearr_16447;
})();
if(cljs.core.truth_(inst_16265)){
var statearr_16448_16508 = state_16375__$1;
(statearr_16448_16508[(1)] = (13));

} else {
var statearr_16449_16509 = state_16375__$1;
(statearr_16449_16509[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (18))){
var inst_16300 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16450_16510 = state_16375__$1;
(statearr_16450_16510[(2)] = inst_16300);

(statearr_16450_16510[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (42))){
var state_16375__$1 = state_16375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16375__$1,(45),dchan);
} else {
if((state_val_16376 === (37))){
var inst_16343 = (state_16375[(23)]);
var inst_16243 = (state_16375[(10)]);
var inst_16334 = (state_16375[(25)]);
var inst_16343__$1 = cljs.core.first(inst_16334);
var inst_16344 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16343__$1,inst_16243,done);
var state_16375__$1 = (function (){var statearr_16451 = state_16375;
(statearr_16451[(23)] = inst_16343__$1);

return statearr_16451;
})();
if(cljs.core.truth_(inst_16344)){
var statearr_16452_16511 = state_16375__$1;
(statearr_16452_16511[(1)] = (39));

} else {
var statearr_16453_16512 = state_16375__$1;
(statearr_16453_16512[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16376 === (8))){
var inst_16254 = (state_16375[(13)]);
var inst_16255 = (state_16375[(16)]);
var inst_16257 = (inst_16255 < inst_16254);
var inst_16258 = inst_16257;
var state_16375__$1 = state_16375;
if(cljs.core.truth_(inst_16258)){
var statearr_16454_16513 = state_16375__$1;
(statearr_16454_16513[(1)] = (10));

} else {
var statearr_16455_16514 = state_16375__$1;
(statearr_16455_16514[(1)] = (11));

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
});})(c__13771__auto___16460,cs,m,dchan,dctr,done))
;
return ((function (switch__13590__auto__,c__13771__auto___16460,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13591__auto__ = null;
var cljs$core$async$mult_$_state_machine__13591__auto____0 = (function (){
var statearr_16456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16456[(0)] = cljs$core$async$mult_$_state_machine__13591__auto__);

(statearr_16456[(1)] = (1));

return statearr_16456;
});
var cljs$core$async$mult_$_state_machine__13591__auto____1 = (function (state_16375){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_16375);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e16457){if((e16457 instanceof Object)){
var ex__13594__auto__ = e16457;
var statearr_16458_16515 = state_16375;
(statearr_16458_16515[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16375);

return cljs.core.cst$kw$recur;
} else {
throw e16457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16516 = state_16375;
state_16375 = G__16516;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13591__auto__ = function(state_16375){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13591__auto____1.call(this,state_16375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13591__auto____0;
cljs$core$async$mult_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13591__auto____1;
return cljs$core$async$mult_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___16460,cs,m,dchan,dctr,done))
})();
var state__13773__auto__ = (function (){var statearr_16459 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_16459[(6)] = c__13771__auto___16460);

return statearr_16459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___16460,cs,m,dchan,dctr,done))
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
var G__16518 = arguments.length;
switch (G__16518) {
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
var len__4497__auto___16530 = arguments.length;
var i__4498__auto___16531 = (0);
while(true){
if((i__4498__auto___16531 < len__4497__auto___16530)){
args__4500__auto__.push((arguments[i__4498__auto___16531]));

var G__16532 = (i__4498__auto___16531 + (1));
i__4498__auto___16531 = G__16532;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16524){
var map__16525 = p__16524;
var map__16525__$1 = ((((!((map__16525 == null)))?(((((map__16525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16525):map__16525);
var opts = map__16525__$1;
var statearr_16527_16533 = state;
(statearr_16527_16533[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__16525,map__16525__$1,opts){
return (function (val){
var statearr_16528_16534 = state;
(statearr_16528_16534[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16525,map__16525__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_16529_16535 = state;
(statearr_16529_16535[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16520){
var G__16521 = cljs.core.first(seq16520);
var seq16520__$1 = cljs.core.next(seq16520);
var G__16522 = cljs.core.first(seq16520__$1);
var seq16520__$2 = cljs.core.next(seq16520__$1);
var G__16523 = cljs.core.first(seq16520__$2);
var seq16520__$3 = cljs.core.next(seq16520__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16521,G__16522,G__16523,seq16520__$3);
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
if(typeof cljs.core.async.t_cljs$core$async16536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16536 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16537){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16537 = meta16537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16538,meta16537__$1){
var self__ = this;
var _16538__$1 = this;
return (new cljs.core.async.t_cljs$core$async16536(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16537__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16538){
var self__ = this;
var _16538__$1 = this;
return self__.meta16537;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16536.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16536.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16537], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16536";

cljs.core.async.t_cljs$core$async16536.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16536");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16536.
 */
cljs.core.async.__GT_t_cljs$core$async16536 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16536(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16537){
return (new cljs.core.async.t_cljs$core$async16536(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16537));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16536(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13771__auto___16700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___16700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___16700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16640){
var state_val_16641 = (state_16640[(1)]);
if((state_val_16641 === (7))){
var inst_16555 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
var statearr_16642_16701 = state_16640__$1;
(statearr_16642_16701[(2)] = inst_16555);

(statearr_16642_16701[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (20))){
var inst_16567 = (state_16640[(7)]);
var state_16640__$1 = state_16640;
var statearr_16643_16702 = state_16640__$1;
(statearr_16643_16702[(2)] = inst_16567);

(statearr_16643_16702[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (27))){
var state_16640__$1 = state_16640;
var statearr_16644_16703 = state_16640__$1;
(statearr_16644_16703[(2)] = null);

(statearr_16644_16703[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (1))){
var inst_16542 = (state_16640[(8)]);
var inst_16542__$1 = calc_state();
var inst_16544 = (inst_16542__$1 == null);
var inst_16545 = cljs.core.not(inst_16544);
var state_16640__$1 = (function (){var statearr_16645 = state_16640;
(statearr_16645[(8)] = inst_16542__$1);

return statearr_16645;
})();
if(inst_16545){
var statearr_16646_16704 = state_16640__$1;
(statearr_16646_16704[(1)] = (2));

} else {
var statearr_16647_16705 = state_16640__$1;
(statearr_16647_16705[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (24))){
var inst_16614 = (state_16640[(9)]);
var inst_16600 = (state_16640[(10)]);
var inst_16591 = (state_16640[(11)]);
var inst_16614__$1 = (inst_16591.cljs$core$IFn$_invoke$arity$1 ? inst_16591.cljs$core$IFn$_invoke$arity$1(inst_16600) : inst_16591.call(null,inst_16600));
var state_16640__$1 = (function (){var statearr_16648 = state_16640;
(statearr_16648[(9)] = inst_16614__$1);

return statearr_16648;
})();
if(cljs.core.truth_(inst_16614__$1)){
var statearr_16649_16706 = state_16640__$1;
(statearr_16649_16706[(1)] = (29));

} else {
var statearr_16650_16707 = state_16640__$1;
(statearr_16650_16707[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (4))){
var inst_16558 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
if(cljs.core.truth_(inst_16558)){
var statearr_16651_16708 = state_16640__$1;
(statearr_16651_16708[(1)] = (8));

} else {
var statearr_16652_16709 = state_16640__$1;
(statearr_16652_16709[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (15))){
var inst_16585 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
if(cljs.core.truth_(inst_16585)){
var statearr_16653_16710 = state_16640__$1;
(statearr_16653_16710[(1)] = (19));

} else {
var statearr_16654_16711 = state_16640__$1;
(statearr_16654_16711[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (21))){
var inst_16590 = (state_16640[(12)]);
var inst_16590__$1 = (state_16640[(2)]);
var inst_16591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16590__$1,cljs.core.cst$kw$solos);
var inst_16592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16590__$1,cljs.core.cst$kw$mutes);
var inst_16593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16590__$1,cljs.core.cst$kw$reads);
var state_16640__$1 = (function (){var statearr_16655 = state_16640;
(statearr_16655[(13)] = inst_16592);

(statearr_16655[(12)] = inst_16590__$1);

(statearr_16655[(11)] = inst_16591);

return statearr_16655;
})();
return cljs.core.async.ioc_alts_BANG_(state_16640__$1,(22),inst_16593);
} else {
if((state_val_16641 === (31))){
var inst_16622 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
if(cljs.core.truth_(inst_16622)){
var statearr_16656_16712 = state_16640__$1;
(statearr_16656_16712[(1)] = (32));

} else {
var statearr_16657_16713 = state_16640__$1;
(statearr_16657_16713[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (32))){
var inst_16599 = (state_16640[(14)]);
var state_16640__$1 = state_16640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16640__$1,(35),out,inst_16599);
} else {
if((state_val_16641 === (33))){
var inst_16590 = (state_16640[(12)]);
var inst_16567 = inst_16590;
var state_16640__$1 = (function (){var statearr_16658 = state_16640;
(statearr_16658[(7)] = inst_16567);

return statearr_16658;
})();
var statearr_16659_16714 = state_16640__$1;
(statearr_16659_16714[(2)] = null);

(statearr_16659_16714[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (13))){
var inst_16567 = (state_16640[(7)]);
var inst_16574 = inst_16567.cljs$lang$protocol_mask$partition0$;
var inst_16575 = (inst_16574 & (64));
var inst_16576 = inst_16567.cljs$core$ISeq$;
var inst_16577 = (cljs.core.PROTOCOL_SENTINEL === inst_16576);
var inst_16578 = ((inst_16575) || (inst_16577));
var state_16640__$1 = state_16640;
if(cljs.core.truth_(inst_16578)){
var statearr_16660_16715 = state_16640__$1;
(statearr_16660_16715[(1)] = (16));

} else {
var statearr_16661_16716 = state_16640__$1;
(statearr_16661_16716[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (22))){
var inst_16600 = (state_16640[(10)]);
var inst_16599 = (state_16640[(14)]);
var inst_16598 = (state_16640[(2)]);
var inst_16599__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16598,(0),null);
var inst_16600__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16598,(1),null);
var inst_16601 = (inst_16599__$1 == null);
var inst_16602 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16600__$1,change);
var inst_16603 = ((inst_16601) || (inst_16602));
var state_16640__$1 = (function (){var statearr_16662 = state_16640;
(statearr_16662[(10)] = inst_16600__$1);

(statearr_16662[(14)] = inst_16599__$1);

return statearr_16662;
})();
if(cljs.core.truth_(inst_16603)){
var statearr_16663_16717 = state_16640__$1;
(statearr_16663_16717[(1)] = (23));

} else {
var statearr_16664_16718 = state_16640__$1;
(statearr_16664_16718[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (36))){
var inst_16590 = (state_16640[(12)]);
var inst_16567 = inst_16590;
var state_16640__$1 = (function (){var statearr_16665 = state_16640;
(statearr_16665[(7)] = inst_16567);

return statearr_16665;
})();
var statearr_16666_16719 = state_16640__$1;
(statearr_16666_16719[(2)] = null);

(statearr_16666_16719[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (29))){
var inst_16614 = (state_16640[(9)]);
var state_16640__$1 = state_16640;
var statearr_16667_16720 = state_16640__$1;
(statearr_16667_16720[(2)] = inst_16614);

(statearr_16667_16720[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (6))){
var state_16640__$1 = state_16640;
var statearr_16668_16721 = state_16640__$1;
(statearr_16668_16721[(2)] = false);

(statearr_16668_16721[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (28))){
var inst_16610 = (state_16640[(2)]);
var inst_16611 = calc_state();
var inst_16567 = inst_16611;
var state_16640__$1 = (function (){var statearr_16669 = state_16640;
(statearr_16669[(15)] = inst_16610);

(statearr_16669[(7)] = inst_16567);

return statearr_16669;
})();
var statearr_16670_16722 = state_16640__$1;
(statearr_16670_16722[(2)] = null);

(statearr_16670_16722[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (25))){
var inst_16636 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
var statearr_16671_16723 = state_16640__$1;
(statearr_16671_16723[(2)] = inst_16636);

(statearr_16671_16723[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (34))){
var inst_16634 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
var statearr_16672_16724 = state_16640__$1;
(statearr_16672_16724[(2)] = inst_16634);

(statearr_16672_16724[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (17))){
var state_16640__$1 = state_16640;
var statearr_16673_16725 = state_16640__$1;
(statearr_16673_16725[(2)] = false);

(statearr_16673_16725[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (3))){
var state_16640__$1 = state_16640;
var statearr_16674_16726 = state_16640__$1;
(statearr_16674_16726[(2)] = false);

(statearr_16674_16726[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (12))){
var inst_16638 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16640__$1,inst_16638);
} else {
if((state_val_16641 === (2))){
var inst_16542 = (state_16640[(8)]);
var inst_16547 = inst_16542.cljs$lang$protocol_mask$partition0$;
var inst_16548 = (inst_16547 & (64));
var inst_16549 = inst_16542.cljs$core$ISeq$;
var inst_16550 = (cljs.core.PROTOCOL_SENTINEL === inst_16549);
var inst_16551 = ((inst_16548) || (inst_16550));
var state_16640__$1 = state_16640;
if(cljs.core.truth_(inst_16551)){
var statearr_16675_16727 = state_16640__$1;
(statearr_16675_16727[(1)] = (5));

} else {
var statearr_16676_16728 = state_16640__$1;
(statearr_16676_16728[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (23))){
var inst_16599 = (state_16640[(14)]);
var inst_16605 = (inst_16599 == null);
var state_16640__$1 = state_16640;
if(cljs.core.truth_(inst_16605)){
var statearr_16677_16729 = state_16640__$1;
(statearr_16677_16729[(1)] = (26));

} else {
var statearr_16678_16730 = state_16640__$1;
(statearr_16678_16730[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (35))){
var inst_16625 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
if(cljs.core.truth_(inst_16625)){
var statearr_16679_16731 = state_16640__$1;
(statearr_16679_16731[(1)] = (36));

} else {
var statearr_16680_16732 = state_16640__$1;
(statearr_16680_16732[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (19))){
var inst_16567 = (state_16640[(7)]);
var inst_16587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16567);
var state_16640__$1 = state_16640;
var statearr_16681_16733 = state_16640__$1;
(statearr_16681_16733[(2)] = inst_16587);

(statearr_16681_16733[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (11))){
var inst_16567 = (state_16640[(7)]);
var inst_16571 = (inst_16567 == null);
var inst_16572 = cljs.core.not(inst_16571);
var state_16640__$1 = state_16640;
if(inst_16572){
var statearr_16682_16734 = state_16640__$1;
(statearr_16682_16734[(1)] = (13));

} else {
var statearr_16683_16735 = state_16640__$1;
(statearr_16683_16735[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (9))){
var inst_16542 = (state_16640[(8)]);
var state_16640__$1 = state_16640;
var statearr_16684_16736 = state_16640__$1;
(statearr_16684_16736[(2)] = inst_16542);

(statearr_16684_16736[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (5))){
var state_16640__$1 = state_16640;
var statearr_16685_16737 = state_16640__$1;
(statearr_16685_16737[(2)] = true);

(statearr_16685_16737[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (14))){
var state_16640__$1 = state_16640;
var statearr_16686_16738 = state_16640__$1;
(statearr_16686_16738[(2)] = false);

(statearr_16686_16738[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (26))){
var inst_16600 = (state_16640[(10)]);
var inst_16607 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16600);
var state_16640__$1 = state_16640;
var statearr_16687_16739 = state_16640__$1;
(statearr_16687_16739[(2)] = inst_16607);

(statearr_16687_16739[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (16))){
var state_16640__$1 = state_16640;
var statearr_16688_16740 = state_16640__$1;
(statearr_16688_16740[(2)] = true);

(statearr_16688_16740[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (38))){
var inst_16630 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
var statearr_16689_16741 = state_16640__$1;
(statearr_16689_16741[(2)] = inst_16630);

(statearr_16689_16741[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (30))){
var inst_16600 = (state_16640[(10)]);
var inst_16592 = (state_16640[(13)]);
var inst_16591 = (state_16640[(11)]);
var inst_16617 = cljs.core.empty_QMARK_(inst_16591);
var inst_16618 = (inst_16592.cljs$core$IFn$_invoke$arity$1 ? inst_16592.cljs$core$IFn$_invoke$arity$1(inst_16600) : inst_16592.call(null,inst_16600));
var inst_16619 = cljs.core.not(inst_16618);
var inst_16620 = ((inst_16617) && (inst_16619));
var state_16640__$1 = state_16640;
var statearr_16690_16742 = state_16640__$1;
(statearr_16690_16742[(2)] = inst_16620);

(statearr_16690_16742[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (10))){
var inst_16542 = (state_16640[(8)]);
var inst_16563 = (state_16640[(2)]);
var inst_16564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16563,cljs.core.cst$kw$solos);
var inst_16565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16563,cljs.core.cst$kw$mutes);
var inst_16566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16563,cljs.core.cst$kw$reads);
var inst_16567 = inst_16542;
var state_16640__$1 = (function (){var statearr_16691 = state_16640;
(statearr_16691[(16)] = inst_16564);

(statearr_16691[(17)] = inst_16566);

(statearr_16691[(7)] = inst_16567);

(statearr_16691[(18)] = inst_16565);

return statearr_16691;
})();
var statearr_16692_16743 = state_16640__$1;
(statearr_16692_16743[(2)] = null);

(statearr_16692_16743[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (18))){
var inst_16582 = (state_16640[(2)]);
var state_16640__$1 = state_16640;
var statearr_16693_16744 = state_16640__$1;
(statearr_16693_16744[(2)] = inst_16582);

(statearr_16693_16744[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (37))){
var state_16640__$1 = state_16640;
var statearr_16694_16745 = state_16640__$1;
(statearr_16694_16745[(2)] = null);

(statearr_16694_16745[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16641 === (8))){
var inst_16542 = (state_16640[(8)]);
var inst_16560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16542);
var state_16640__$1 = state_16640;
var statearr_16695_16746 = state_16640__$1;
(statearr_16695_16746[(2)] = inst_16560);

(statearr_16695_16746[(1)] = (10));


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
});})(c__13771__auto___16700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13590__auto__,c__13771__auto___16700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13591__auto__ = null;
var cljs$core$async$mix_$_state_machine__13591__auto____0 = (function (){
var statearr_16696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16696[(0)] = cljs$core$async$mix_$_state_machine__13591__auto__);

(statearr_16696[(1)] = (1));

return statearr_16696;
});
var cljs$core$async$mix_$_state_machine__13591__auto____1 = (function (state_16640){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_16640);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e16697){if((e16697 instanceof Object)){
var ex__13594__auto__ = e16697;
var statearr_16698_16747 = state_16640;
(statearr_16698_16747[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16640);

return cljs.core.cst$kw$recur;
} else {
throw e16697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16748 = state_16640;
state_16640 = G__16748;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13591__auto__ = function(state_16640){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13591__auto____1.call(this,state_16640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13591__auto____0;
cljs$core$async$mix_$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13591__auto____1;
return cljs$core$async$mix_$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___16700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13773__auto__ = (function (){var statearr_16699 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_16699[(6)] = c__13771__auto___16700);

return statearr_16699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___16700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__16750 = arguments.length;
switch (G__16750) {
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
var G__16754 = arguments.length;
switch (G__16754) {
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
return (function (p1__16752_SHARP_){
if(cljs.core.truth_((p1__16752_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16752_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16752_SHARP_.call(null,topic)))){
return p1__16752_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16752_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16755 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16756){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16756 = meta16756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16757,meta16756__$1){
var self__ = this;
var _16757__$1 = this;
return (new cljs.core.async.t_cljs$core$async16755(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16756__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16757){
var self__ = this;
var _16757__$1 = this;
return self__.meta16756;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16755.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16755.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16755.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16755.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16756], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16755";

cljs.core.async.t_cljs$core$async16755.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async16755");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16755.
 */
cljs.core.async.__GT_t_cljs$core$async16755 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16756){
return (new cljs.core.async.t_cljs$core$async16755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16756));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16755(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13771__auto___16875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___16875,mults,ensure_mult,p){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___16875,mults,ensure_mult,p){
return (function (state_16829){
var state_val_16830 = (state_16829[(1)]);
if((state_val_16830 === (7))){
var inst_16825 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16831_16876 = state_16829__$1;
(statearr_16831_16876[(2)] = inst_16825);

(statearr_16831_16876[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (20))){
var state_16829__$1 = state_16829;
var statearr_16832_16877 = state_16829__$1;
(statearr_16832_16877[(2)] = null);

(statearr_16832_16877[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (1))){
var state_16829__$1 = state_16829;
var statearr_16833_16878 = state_16829__$1;
(statearr_16833_16878[(2)] = null);

(statearr_16833_16878[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (24))){
var inst_16808 = (state_16829[(7)]);
var inst_16817 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16808);
var state_16829__$1 = state_16829;
var statearr_16834_16879 = state_16829__$1;
(statearr_16834_16879[(2)] = inst_16817);

(statearr_16834_16879[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (4))){
var inst_16760 = (state_16829[(8)]);
var inst_16760__$1 = (state_16829[(2)]);
var inst_16761 = (inst_16760__$1 == null);
var state_16829__$1 = (function (){var statearr_16835 = state_16829;
(statearr_16835[(8)] = inst_16760__$1);

return statearr_16835;
})();
if(cljs.core.truth_(inst_16761)){
var statearr_16836_16880 = state_16829__$1;
(statearr_16836_16880[(1)] = (5));

} else {
var statearr_16837_16881 = state_16829__$1;
(statearr_16837_16881[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (15))){
var inst_16802 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16838_16882 = state_16829__$1;
(statearr_16838_16882[(2)] = inst_16802);

(statearr_16838_16882[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (21))){
var inst_16822 = (state_16829[(2)]);
var state_16829__$1 = (function (){var statearr_16839 = state_16829;
(statearr_16839[(9)] = inst_16822);

return statearr_16839;
})();
var statearr_16840_16883 = state_16829__$1;
(statearr_16840_16883[(2)] = null);

(statearr_16840_16883[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (13))){
var inst_16784 = (state_16829[(10)]);
var inst_16786 = cljs.core.chunked_seq_QMARK_(inst_16784);
var state_16829__$1 = state_16829;
if(inst_16786){
var statearr_16841_16884 = state_16829__$1;
(statearr_16841_16884[(1)] = (16));

} else {
var statearr_16842_16885 = state_16829__$1;
(statearr_16842_16885[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (22))){
var inst_16814 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16814)){
var statearr_16843_16886 = state_16829__$1;
(statearr_16843_16886[(1)] = (23));

} else {
var statearr_16844_16887 = state_16829__$1;
(statearr_16844_16887[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (6))){
var inst_16760 = (state_16829[(8)]);
var inst_16808 = (state_16829[(7)]);
var inst_16810 = (state_16829[(11)]);
var inst_16808__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16760) : topic_fn.call(null,inst_16760));
var inst_16809 = cljs.core.deref(mults);
var inst_16810__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16809,inst_16808__$1);
var state_16829__$1 = (function (){var statearr_16845 = state_16829;
(statearr_16845[(7)] = inst_16808__$1);

(statearr_16845[(11)] = inst_16810__$1);

return statearr_16845;
})();
if(cljs.core.truth_(inst_16810__$1)){
var statearr_16846_16888 = state_16829__$1;
(statearr_16846_16888[(1)] = (19));

} else {
var statearr_16847_16889 = state_16829__$1;
(statearr_16847_16889[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (25))){
var inst_16819 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16848_16890 = state_16829__$1;
(statearr_16848_16890[(2)] = inst_16819);

(statearr_16848_16890[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (17))){
var inst_16784 = (state_16829[(10)]);
var inst_16793 = cljs.core.first(inst_16784);
var inst_16794 = cljs.core.async.muxch_STAR_(inst_16793);
var inst_16795 = cljs.core.async.close_BANG_(inst_16794);
var inst_16796 = cljs.core.next(inst_16784);
var inst_16770 = inst_16796;
var inst_16771 = null;
var inst_16772 = (0);
var inst_16773 = (0);
var state_16829__$1 = (function (){var statearr_16849 = state_16829;
(statearr_16849[(12)] = inst_16773);

(statearr_16849[(13)] = inst_16772);

(statearr_16849[(14)] = inst_16771);

(statearr_16849[(15)] = inst_16795);

(statearr_16849[(16)] = inst_16770);

return statearr_16849;
})();
var statearr_16850_16891 = state_16829__$1;
(statearr_16850_16891[(2)] = null);

(statearr_16850_16891[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (3))){
var inst_16827 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16829__$1,inst_16827);
} else {
if((state_val_16830 === (12))){
var inst_16804 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16851_16892 = state_16829__$1;
(statearr_16851_16892[(2)] = inst_16804);

(statearr_16851_16892[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (2))){
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16829__$1,(4),ch);
} else {
if((state_val_16830 === (23))){
var state_16829__$1 = state_16829;
var statearr_16852_16893 = state_16829__$1;
(statearr_16852_16893[(2)] = null);

(statearr_16852_16893[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (19))){
var inst_16760 = (state_16829[(8)]);
var inst_16810 = (state_16829[(11)]);
var inst_16812 = cljs.core.async.muxch_STAR_(inst_16810);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16829__$1,(22),inst_16812,inst_16760);
} else {
if((state_val_16830 === (11))){
var inst_16770 = (state_16829[(16)]);
var inst_16784 = (state_16829[(10)]);
var inst_16784__$1 = cljs.core.seq(inst_16770);
var state_16829__$1 = (function (){var statearr_16853 = state_16829;
(statearr_16853[(10)] = inst_16784__$1);

return statearr_16853;
})();
if(inst_16784__$1){
var statearr_16854_16894 = state_16829__$1;
(statearr_16854_16894[(1)] = (13));

} else {
var statearr_16855_16895 = state_16829__$1;
(statearr_16855_16895[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (9))){
var inst_16806 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16856_16896 = state_16829__$1;
(statearr_16856_16896[(2)] = inst_16806);

(statearr_16856_16896[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (5))){
var inst_16767 = cljs.core.deref(mults);
var inst_16768 = cljs.core.vals(inst_16767);
var inst_16769 = cljs.core.seq(inst_16768);
var inst_16770 = inst_16769;
var inst_16771 = null;
var inst_16772 = (0);
var inst_16773 = (0);
var state_16829__$1 = (function (){var statearr_16857 = state_16829;
(statearr_16857[(12)] = inst_16773);

(statearr_16857[(13)] = inst_16772);

(statearr_16857[(14)] = inst_16771);

(statearr_16857[(16)] = inst_16770);

return statearr_16857;
})();
var statearr_16858_16897 = state_16829__$1;
(statearr_16858_16897[(2)] = null);

(statearr_16858_16897[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (14))){
var state_16829__$1 = state_16829;
var statearr_16862_16898 = state_16829__$1;
(statearr_16862_16898[(2)] = null);

(statearr_16862_16898[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (16))){
var inst_16784 = (state_16829[(10)]);
var inst_16788 = cljs.core.chunk_first(inst_16784);
var inst_16789 = cljs.core.chunk_rest(inst_16784);
var inst_16790 = cljs.core.count(inst_16788);
var inst_16770 = inst_16789;
var inst_16771 = inst_16788;
var inst_16772 = inst_16790;
var inst_16773 = (0);
var state_16829__$1 = (function (){var statearr_16863 = state_16829;
(statearr_16863[(12)] = inst_16773);

(statearr_16863[(13)] = inst_16772);

(statearr_16863[(14)] = inst_16771);

(statearr_16863[(16)] = inst_16770);

return statearr_16863;
})();
var statearr_16864_16899 = state_16829__$1;
(statearr_16864_16899[(2)] = null);

(statearr_16864_16899[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (10))){
var inst_16773 = (state_16829[(12)]);
var inst_16772 = (state_16829[(13)]);
var inst_16771 = (state_16829[(14)]);
var inst_16770 = (state_16829[(16)]);
var inst_16778 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16771,inst_16773);
var inst_16779 = cljs.core.async.muxch_STAR_(inst_16778);
var inst_16780 = cljs.core.async.close_BANG_(inst_16779);
var inst_16781 = (inst_16773 + (1));
var tmp16859 = inst_16772;
var tmp16860 = inst_16771;
var tmp16861 = inst_16770;
var inst_16770__$1 = tmp16861;
var inst_16771__$1 = tmp16860;
var inst_16772__$1 = tmp16859;
var inst_16773__$1 = inst_16781;
var state_16829__$1 = (function (){var statearr_16865 = state_16829;
(statearr_16865[(12)] = inst_16773__$1);

(statearr_16865[(13)] = inst_16772__$1);

(statearr_16865[(14)] = inst_16771__$1);

(statearr_16865[(16)] = inst_16770__$1);

(statearr_16865[(17)] = inst_16780);

return statearr_16865;
})();
var statearr_16866_16900 = state_16829__$1;
(statearr_16866_16900[(2)] = null);

(statearr_16866_16900[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (18))){
var inst_16799 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16867_16901 = state_16829__$1;
(statearr_16867_16901[(2)] = inst_16799);

(statearr_16867_16901[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16830 === (8))){
var inst_16773 = (state_16829[(12)]);
var inst_16772 = (state_16829[(13)]);
var inst_16775 = (inst_16773 < inst_16772);
var inst_16776 = inst_16775;
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16776)){
var statearr_16868_16902 = state_16829__$1;
(statearr_16868_16902[(1)] = (10));

} else {
var statearr_16869_16903 = state_16829__$1;
(statearr_16869_16903[(1)] = (11));

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
});})(c__13771__auto___16875,mults,ensure_mult,p))
;
return ((function (switch__13590__auto__,c__13771__auto___16875,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_16870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16870[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_16870[(1)] = (1));

return statearr_16870;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_16829){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_16829);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e16871){if((e16871 instanceof Object)){
var ex__13594__auto__ = e16871;
var statearr_16872_16904 = state_16829;
(statearr_16872_16904[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16829);

return cljs.core.cst$kw$recur;
} else {
throw e16871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16905 = state_16829;
state_16829 = G__16905;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_16829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_16829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___16875,mults,ensure_mult,p))
})();
var state__13773__auto__ = (function (){var statearr_16873 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_16873[(6)] = c__13771__auto___16875);

return statearr_16873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___16875,mults,ensure_mult,p))
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
var G__16907 = arguments.length;
switch (G__16907) {
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
var G__16910 = arguments.length;
switch (G__16910) {
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
var G__16913 = arguments.length;
switch (G__16913) {
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
var c__13771__auto___16980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___16980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___16980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16952){
var state_val_16953 = (state_16952[(1)]);
if((state_val_16953 === (7))){
var state_16952__$1 = state_16952;
var statearr_16954_16981 = state_16952__$1;
(statearr_16954_16981[(2)] = null);

(statearr_16954_16981[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (1))){
var state_16952__$1 = state_16952;
var statearr_16955_16982 = state_16952__$1;
(statearr_16955_16982[(2)] = null);

(statearr_16955_16982[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (4))){
var inst_16916 = (state_16952[(7)]);
var inst_16918 = (inst_16916 < cnt);
var state_16952__$1 = state_16952;
if(cljs.core.truth_(inst_16918)){
var statearr_16956_16983 = state_16952__$1;
(statearr_16956_16983[(1)] = (6));

} else {
var statearr_16957_16984 = state_16952__$1;
(statearr_16957_16984[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (15))){
var inst_16948 = (state_16952[(2)]);
var state_16952__$1 = state_16952;
var statearr_16958_16985 = state_16952__$1;
(statearr_16958_16985[(2)] = inst_16948);

(statearr_16958_16985[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (13))){
var inst_16941 = cljs.core.async.close_BANG_(out);
var state_16952__$1 = state_16952;
var statearr_16959_16986 = state_16952__$1;
(statearr_16959_16986[(2)] = inst_16941);

(statearr_16959_16986[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (6))){
var state_16952__$1 = state_16952;
var statearr_16960_16987 = state_16952__$1;
(statearr_16960_16987[(2)] = null);

(statearr_16960_16987[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (3))){
var inst_16950 = (state_16952[(2)]);
var state_16952__$1 = state_16952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16952__$1,inst_16950);
} else {
if((state_val_16953 === (12))){
var inst_16938 = (state_16952[(8)]);
var inst_16938__$1 = (state_16952[(2)]);
var inst_16939 = cljs.core.some(cljs.core.nil_QMARK_,inst_16938__$1);
var state_16952__$1 = (function (){var statearr_16961 = state_16952;
(statearr_16961[(8)] = inst_16938__$1);

return statearr_16961;
})();
if(cljs.core.truth_(inst_16939)){
var statearr_16962_16988 = state_16952__$1;
(statearr_16962_16988[(1)] = (13));

} else {
var statearr_16963_16989 = state_16952__$1;
(statearr_16963_16989[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (2))){
var inst_16915 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16916 = (0);
var state_16952__$1 = (function (){var statearr_16964 = state_16952;
(statearr_16964[(7)] = inst_16916);

(statearr_16964[(9)] = inst_16915);

return statearr_16964;
})();
var statearr_16965_16990 = state_16952__$1;
(statearr_16965_16990[(2)] = null);

(statearr_16965_16990[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (11))){
var inst_16916 = (state_16952[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16952,(10),Object,null,(9));
var inst_16925 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16916) : chs__$1.call(null,inst_16916));
var inst_16926 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16916) : done.call(null,inst_16916));
var inst_16927 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16925,inst_16926);
var state_16952__$1 = state_16952;
var statearr_16966_16991 = state_16952__$1;
(statearr_16966_16991[(2)] = inst_16927);


cljs.core.async.impl.ioc_helpers.process_exception(state_16952__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (9))){
var inst_16916 = (state_16952[(7)]);
var inst_16929 = (state_16952[(2)]);
var inst_16930 = (inst_16916 + (1));
var inst_16916__$1 = inst_16930;
var state_16952__$1 = (function (){var statearr_16967 = state_16952;
(statearr_16967[(7)] = inst_16916__$1);

(statearr_16967[(10)] = inst_16929);

return statearr_16967;
})();
var statearr_16968_16992 = state_16952__$1;
(statearr_16968_16992[(2)] = null);

(statearr_16968_16992[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (5))){
var inst_16936 = (state_16952[(2)]);
var state_16952__$1 = (function (){var statearr_16969 = state_16952;
(statearr_16969[(11)] = inst_16936);

return statearr_16969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16952__$1,(12),dchan);
} else {
if((state_val_16953 === (14))){
var inst_16938 = (state_16952[(8)]);
var inst_16943 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16938);
var state_16952__$1 = state_16952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16952__$1,(16),out,inst_16943);
} else {
if((state_val_16953 === (16))){
var inst_16945 = (state_16952[(2)]);
var state_16952__$1 = (function (){var statearr_16970 = state_16952;
(statearr_16970[(12)] = inst_16945);

return statearr_16970;
})();
var statearr_16971_16993 = state_16952__$1;
(statearr_16971_16993[(2)] = null);

(statearr_16971_16993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (10))){
var inst_16920 = (state_16952[(2)]);
var inst_16921 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16952__$1 = (function (){var statearr_16972 = state_16952;
(statearr_16972[(13)] = inst_16920);

return statearr_16972;
})();
var statearr_16973_16994 = state_16952__$1;
(statearr_16973_16994[(2)] = inst_16921);


cljs.core.async.impl.ioc_helpers.process_exception(state_16952__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16953 === (8))){
var inst_16934 = (state_16952[(2)]);
var state_16952__$1 = state_16952;
var statearr_16974_16995 = state_16952__$1;
(statearr_16974_16995[(2)] = inst_16934);

(statearr_16974_16995[(1)] = (5));


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
});})(c__13771__auto___16980,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13590__auto__,c__13771__auto___16980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_16975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16975[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_16975[(1)] = (1));

return statearr_16975;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_16952){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_16952);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e16976){if((e16976 instanceof Object)){
var ex__13594__auto__ = e16976;
var statearr_16977_16996 = state_16952;
(statearr_16977_16996[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16952);

return cljs.core.cst$kw$recur;
} else {
throw e16976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__16997 = state_16952;
state_16952 = G__16997;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_16952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_16952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___16980,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13773__auto__ = (function (){var statearr_16978 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_16978[(6)] = c__13771__auto___16980);

return statearr_16978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___16980,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17000 = arguments.length;
switch (G__17000) {
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
var c__13771__auto___17054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___17054,out){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___17054,out){
return (function (state_17032){
var state_val_17033 = (state_17032[(1)]);
if((state_val_17033 === (7))){
var inst_17011 = (state_17032[(7)]);
var inst_17012 = (state_17032[(8)]);
var inst_17011__$1 = (state_17032[(2)]);
var inst_17012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17011__$1,(0),null);
var inst_17013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17011__$1,(1),null);
var inst_17014 = (inst_17012__$1 == null);
var state_17032__$1 = (function (){var statearr_17034 = state_17032;
(statearr_17034[(7)] = inst_17011__$1);

(statearr_17034[(8)] = inst_17012__$1);

(statearr_17034[(9)] = inst_17013);

return statearr_17034;
})();
if(cljs.core.truth_(inst_17014)){
var statearr_17035_17055 = state_17032__$1;
(statearr_17035_17055[(1)] = (8));

} else {
var statearr_17036_17056 = state_17032__$1;
(statearr_17036_17056[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17033 === (1))){
var inst_17001 = cljs.core.vec(chs);
var inst_17002 = inst_17001;
var state_17032__$1 = (function (){var statearr_17037 = state_17032;
(statearr_17037[(10)] = inst_17002);

return statearr_17037;
})();
var statearr_17038_17057 = state_17032__$1;
(statearr_17038_17057[(2)] = null);

(statearr_17038_17057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17033 === (4))){
var inst_17002 = (state_17032[(10)]);
var state_17032__$1 = state_17032;
return cljs.core.async.ioc_alts_BANG_(state_17032__$1,(7),inst_17002);
} else {
if((state_val_17033 === (6))){
var inst_17028 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17039_17058 = state_17032__$1;
(statearr_17039_17058[(2)] = inst_17028);

(statearr_17039_17058[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17033 === (3))){
var inst_17030 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17032__$1,inst_17030);
} else {
if((state_val_17033 === (2))){
var inst_17002 = (state_17032[(10)]);
var inst_17004 = cljs.core.count(inst_17002);
var inst_17005 = (inst_17004 > (0));
var state_17032__$1 = state_17032;
if(cljs.core.truth_(inst_17005)){
var statearr_17041_17059 = state_17032__$1;
(statearr_17041_17059[(1)] = (4));

} else {
var statearr_17042_17060 = state_17032__$1;
(statearr_17042_17060[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17033 === (11))){
var inst_17002 = (state_17032[(10)]);
var inst_17021 = (state_17032[(2)]);
var tmp17040 = inst_17002;
var inst_17002__$1 = tmp17040;
var state_17032__$1 = (function (){var statearr_17043 = state_17032;
(statearr_17043[(11)] = inst_17021);

(statearr_17043[(10)] = inst_17002__$1);

return statearr_17043;
})();
var statearr_17044_17061 = state_17032__$1;
(statearr_17044_17061[(2)] = null);

(statearr_17044_17061[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17033 === (9))){
var inst_17012 = (state_17032[(8)]);
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17032__$1,(11),out,inst_17012);
} else {
if((state_val_17033 === (5))){
var inst_17026 = cljs.core.async.close_BANG_(out);
var state_17032__$1 = state_17032;
var statearr_17045_17062 = state_17032__$1;
(statearr_17045_17062[(2)] = inst_17026);

(statearr_17045_17062[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17033 === (10))){
var inst_17024 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17046_17063 = state_17032__$1;
(statearr_17046_17063[(2)] = inst_17024);

(statearr_17046_17063[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17033 === (8))){
var inst_17011 = (state_17032[(7)]);
var inst_17002 = (state_17032[(10)]);
var inst_17012 = (state_17032[(8)]);
var inst_17013 = (state_17032[(9)]);
var inst_17016 = (function (){var cs = inst_17002;
var vec__17007 = inst_17011;
var v = inst_17012;
var c = inst_17013;
return ((function (cs,vec__17007,v,c,inst_17011,inst_17002,inst_17012,inst_17013,state_val_17033,c__13771__auto___17054,out){
return (function (p1__16998_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16998_SHARP_);
});
;})(cs,vec__17007,v,c,inst_17011,inst_17002,inst_17012,inst_17013,state_val_17033,c__13771__auto___17054,out))
})();
var inst_17017 = cljs.core.filterv(inst_17016,inst_17002);
var inst_17002__$1 = inst_17017;
var state_17032__$1 = (function (){var statearr_17047 = state_17032;
(statearr_17047[(10)] = inst_17002__$1);

return statearr_17047;
})();
var statearr_17048_17064 = state_17032__$1;
(statearr_17048_17064[(2)] = null);

(statearr_17048_17064[(1)] = (2));


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
});})(c__13771__auto___17054,out))
;
return ((function (switch__13590__auto__,c__13771__auto___17054,out){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_17049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17049[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_17049[(1)] = (1));

return statearr_17049;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_17032){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_17032);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e17050){if((e17050 instanceof Object)){
var ex__13594__auto__ = e17050;
var statearr_17051_17065 = state_17032;
(statearr_17051_17065[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17032);

return cljs.core.cst$kw$recur;
} else {
throw e17050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__17066 = state_17032;
state_17032 = G__17066;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_17032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_17032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___17054,out))
})();
var state__13773__auto__ = (function (){var statearr_17052 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_17052[(6)] = c__13771__auto___17054);

return statearr_17052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___17054,out))
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
var G__17068 = arguments.length;
switch (G__17068) {
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
var c__13771__auto___17113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___17113,out){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___17113,out){
return (function (state_17092){
var state_val_17093 = (state_17092[(1)]);
if((state_val_17093 === (7))){
var inst_17074 = (state_17092[(7)]);
var inst_17074__$1 = (state_17092[(2)]);
var inst_17075 = (inst_17074__$1 == null);
var inst_17076 = cljs.core.not(inst_17075);
var state_17092__$1 = (function (){var statearr_17094 = state_17092;
(statearr_17094[(7)] = inst_17074__$1);

return statearr_17094;
})();
if(inst_17076){
var statearr_17095_17114 = state_17092__$1;
(statearr_17095_17114[(1)] = (8));

} else {
var statearr_17096_17115 = state_17092__$1;
(statearr_17096_17115[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (1))){
var inst_17069 = (0);
var state_17092__$1 = (function (){var statearr_17097 = state_17092;
(statearr_17097[(8)] = inst_17069);

return statearr_17097;
})();
var statearr_17098_17116 = state_17092__$1;
(statearr_17098_17116[(2)] = null);

(statearr_17098_17116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (4))){
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17092__$1,(7),ch);
} else {
if((state_val_17093 === (6))){
var inst_17087 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
var statearr_17099_17117 = state_17092__$1;
(statearr_17099_17117[(2)] = inst_17087);

(statearr_17099_17117[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (3))){
var inst_17089 = (state_17092[(2)]);
var inst_17090 = cljs.core.async.close_BANG_(out);
var state_17092__$1 = (function (){var statearr_17100 = state_17092;
(statearr_17100[(9)] = inst_17089);

return statearr_17100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17092__$1,inst_17090);
} else {
if((state_val_17093 === (2))){
var inst_17069 = (state_17092[(8)]);
var inst_17071 = (inst_17069 < n);
var state_17092__$1 = state_17092;
if(cljs.core.truth_(inst_17071)){
var statearr_17101_17118 = state_17092__$1;
(statearr_17101_17118[(1)] = (4));

} else {
var statearr_17102_17119 = state_17092__$1;
(statearr_17102_17119[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (11))){
var inst_17069 = (state_17092[(8)]);
var inst_17079 = (state_17092[(2)]);
var inst_17080 = (inst_17069 + (1));
var inst_17069__$1 = inst_17080;
var state_17092__$1 = (function (){var statearr_17103 = state_17092;
(statearr_17103[(8)] = inst_17069__$1);

(statearr_17103[(10)] = inst_17079);

return statearr_17103;
})();
var statearr_17104_17120 = state_17092__$1;
(statearr_17104_17120[(2)] = null);

(statearr_17104_17120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (9))){
var state_17092__$1 = state_17092;
var statearr_17105_17121 = state_17092__$1;
(statearr_17105_17121[(2)] = null);

(statearr_17105_17121[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (5))){
var state_17092__$1 = state_17092;
var statearr_17106_17122 = state_17092__$1;
(statearr_17106_17122[(2)] = null);

(statearr_17106_17122[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (10))){
var inst_17084 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
var statearr_17107_17123 = state_17092__$1;
(statearr_17107_17123[(2)] = inst_17084);

(statearr_17107_17123[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (8))){
var inst_17074 = (state_17092[(7)]);
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17092__$1,(11),out,inst_17074);
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
});})(c__13771__auto___17113,out))
;
return ((function (switch__13590__auto__,c__13771__auto___17113,out){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_17108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17108[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_17108[(1)] = (1));

return statearr_17108;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_17092){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_17092);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e17109){if((e17109 instanceof Object)){
var ex__13594__auto__ = e17109;
var statearr_17110_17124 = state_17092;
(statearr_17110_17124[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17092);

return cljs.core.cst$kw$recur;
} else {
throw e17109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__17125 = state_17092;
state_17092 = G__17125;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_17092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_17092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___17113,out))
})();
var state__13773__auto__ = (function (){var statearr_17111 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_17111[(6)] = c__13771__auto___17113);

return statearr_17111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___17113,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17127 = (function (f,ch,meta17128){
this.f = f;
this.ch = ch;
this.meta17128 = meta17128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17129,meta17128__$1){
var self__ = this;
var _17129__$1 = this;
return (new cljs.core.async.t_cljs$core$async17127(self__.f,self__.ch,meta17128__$1));
});

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17129){
var self__ = this;
var _17129__$1 = this;
return self__.meta17128;
});

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17130 = (function (f,ch,meta17128,_,fn1,meta17131){
this.f = f;
this.ch = ch;
this.meta17128 = meta17128;
this._ = _;
this.fn1 = fn1;
this.meta17131 = meta17131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17132,meta17131__$1){
var self__ = this;
var _17132__$1 = this;
return (new cljs.core.async.t_cljs$core$async17130(self__.f,self__.ch,self__.meta17128,self__._,self__.fn1,meta17131__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17132){
var self__ = this;
var _17132__$1 = this;
return self__.meta17131;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17126_SHARP_){
var G__17133 = (((p1__17126_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17126_SHARP_) : self__.f.call(null,p1__17126_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17133) : f1.call(null,G__17133));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17130.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17128,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17127], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17131], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17130";

cljs.core.async.t_cljs$core$async17130.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17130");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17130.
 */
cljs.core.async.__GT_t_cljs$core$async17130 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17130(f__$1,ch__$1,meta17128__$1,___$2,fn1__$1,meta17131){
return (new cljs.core.async.t_cljs$core$async17130(f__$1,ch__$1,meta17128__$1,___$2,fn1__$1,meta17131));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17130(self__.f,self__.ch,self__.meta17128,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17134 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17134) : self__.f.call(null,G__17134));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17128], null);
});

cljs.core.async.t_cljs$core$async17127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17127";

cljs.core.async.t_cljs$core$async17127.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17127");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17127.
 */
cljs.core.async.__GT_t_cljs$core$async17127 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17127(f__$1,ch__$1,meta17128){
return (new cljs.core.async.t_cljs$core$async17127(f__$1,ch__$1,meta17128));
});

}

return (new cljs.core.async.t_cljs$core$async17127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17135 = (function (f,ch,meta17136){
this.f = f;
this.ch = ch;
this.meta17136 = meta17136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17137,meta17136__$1){
var self__ = this;
var _17137__$1 = this;
return (new cljs.core.async.t_cljs$core$async17135(self__.f,self__.ch,meta17136__$1));
});

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17137){
var self__ = this;
var _17137__$1 = this;
return self__.meta17136;
});

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17136], null);
});

cljs.core.async.t_cljs$core$async17135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17135";

cljs.core.async.t_cljs$core$async17135.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17135");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17135.
 */
cljs.core.async.__GT_t_cljs$core$async17135 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17135(f__$1,ch__$1,meta17136){
return (new cljs.core.async.t_cljs$core$async17135(f__$1,ch__$1,meta17136));
});

}

return (new cljs.core.async.t_cljs$core$async17135(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17138 = (function (p,ch,meta17139){
this.p = p;
this.ch = ch;
this.meta17139 = meta17139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17140,meta17139__$1){
var self__ = this;
var _17140__$1 = this;
return (new cljs.core.async.t_cljs$core$async17138(self__.p,self__.ch,meta17139__$1));
});

cljs.core.async.t_cljs$core$async17138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17140){
var self__ = this;
var _17140__$1 = this;
return self__.meta17139;
});

cljs.core.async.t_cljs$core$async17138.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17138.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17138.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17139], null);
});

cljs.core.async.t_cljs$core$async17138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17138";

cljs.core.async.t_cljs$core$async17138.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async17138");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17138.
 */
cljs.core.async.__GT_t_cljs$core$async17138 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17138(p__$1,ch__$1,meta17139){
return (new cljs.core.async.t_cljs$core$async17138(p__$1,ch__$1,meta17139));
});

}

return (new cljs.core.async.t_cljs$core$async17138(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17142 = arguments.length;
switch (G__17142) {
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
var c__13771__auto___17182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___17182,out){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___17182,out){
return (function (state_17163){
var state_val_17164 = (state_17163[(1)]);
if((state_val_17164 === (7))){
var inst_17159 = (state_17163[(2)]);
var state_17163__$1 = state_17163;
var statearr_17165_17183 = state_17163__$1;
(statearr_17165_17183[(2)] = inst_17159);

(statearr_17165_17183[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17164 === (1))){
var state_17163__$1 = state_17163;
var statearr_17166_17184 = state_17163__$1;
(statearr_17166_17184[(2)] = null);

(statearr_17166_17184[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17164 === (4))){
var inst_17145 = (state_17163[(7)]);
var inst_17145__$1 = (state_17163[(2)]);
var inst_17146 = (inst_17145__$1 == null);
var state_17163__$1 = (function (){var statearr_17167 = state_17163;
(statearr_17167[(7)] = inst_17145__$1);

return statearr_17167;
})();
if(cljs.core.truth_(inst_17146)){
var statearr_17168_17185 = state_17163__$1;
(statearr_17168_17185[(1)] = (5));

} else {
var statearr_17169_17186 = state_17163__$1;
(statearr_17169_17186[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17164 === (6))){
var inst_17145 = (state_17163[(7)]);
var inst_17150 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17145) : p.call(null,inst_17145));
var state_17163__$1 = state_17163;
if(cljs.core.truth_(inst_17150)){
var statearr_17170_17187 = state_17163__$1;
(statearr_17170_17187[(1)] = (8));

} else {
var statearr_17171_17188 = state_17163__$1;
(statearr_17171_17188[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17164 === (3))){
var inst_17161 = (state_17163[(2)]);
var state_17163__$1 = state_17163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17163__$1,inst_17161);
} else {
if((state_val_17164 === (2))){
var state_17163__$1 = state_17163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17163__$1,(4),ch);
} else {
if((state_val_17164 === (11))){
var inst_17153 = (state_17163[(2)]);
var state_17163__$1 = state_17163;
var statearr_17172_17189 = state_17163__$1;
(statearr_17172_17189[(2)] = inst_17153);

(statearr_17172_17189[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17164 === (9))){
var state_17163__$1 = state_17163;
var statearr_17173_17190 = state_17163__$1;
(statearr_17173_17190[(2)] = null);

(statearr_17173_17190[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17164 === (5))){
var inst_17148 = cljs.core.async.close_BANG_(out);
var state_17163__$1 = state_17163;
var statearr_17174_17191 = state_17163__$1;
(statearr_17174_17191[(2)] = inst_17148);

(statearr_17174_17191[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17164 === (10))){
var inst_17156 = (state_17163[(2)]);
var state_17163__$1 = (function (){var statearr_17175 = state_17163;
(statearr_17175[(8)] = inst_17156);

return statearr_17175;
})();
var statearr_17176_17192 = state_17163__$1;
(statearr_17176_17192[(2)] = null);

(statearr_17176_17192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17164 === (8))){
var inst_17145 = (state_17163[(7)]);
var state_17163__$1 = state_17163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17163__$1,(11),out,inst_17145);
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
});})(c__13771__auto___17182,out))
;
return ((function (switch__13590__auto__,c__13771__auto___17182,out){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_17177 = [null,null,null,null,null,null,null,null,null];
(statearr_17177[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_17177[(1)] = (1));

return statearr_17177;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_17163){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_17163);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e17178){if((e17178 instanceof Object)){
var ex__13594__auto__ = e17178;
var statearr_17179_17193 = state_17163;
(statearr_17179_17193[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17163);

return cljs.core.cst$kw$recur;
} else {
throw e17178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__17194 = state_17163;
state_17163 = G__17194;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_17163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_17163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___17182,out))
})();
var state__13773__auto__ = (function (){var statearr_17180 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_17180[(6)] = c__13771__auto___17182);

return statearr_17180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___17182,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17196 = arguments.length;
switch (G__17196) {
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
var c__13771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto__){
return (function (state_17259){
var state_val_17260 = (state_17259[(1)]);
if((state_val_17260 === (7))){
var inst_17255 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17261_17299 = state_17259__$1;
(statearr_17261_17299[(2)] = inst_17255);

(statearr_17261_17299[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (20))){
var inst_17225 = (state_17259[(7)]);
var inst_17236 = (state_17259[(2)]);
var inst_17237 = cljs.core.next(inst_17225);
var inst_17211 = inst_17237;
var inst_17212 = null;
var inst_17213 = (0);
var inst_17214 = (0);
var state_17259__$1 = (function (){var statearr_17262 = state_17259;
(statearr_17262[(8)] = inst_17214);

(statearr_17262[(9)] = inst_17213);

(statearr_17262[(10)] = inst_17211);

(statearr_17262[(11)] = inst_17212);

(statearr_17262[(12)] = inst_17236);

return statearr_17262;
})();
var statearr_17263_17300 = state_17259__$1;
(statearr_17263_17300[(2)] = null);

(statearr_17263_17300[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (1))){
var state_17259__$1 = state_17259;
var statearr_17264_17301 = state_17259__$1;
(statearr_17264_17301[(2)] = null);

(statearr_17264_17301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (4))){
var inst_17200 = (state_17259[(13)]);
var inst_17200__$1 = (state_17259[(2)]);
var inst_17201 = (inst_17200__$1 == null);
var state_17259__$1 = (function (){var statearr_17265 = state_17259;
(statearr_17265[(13)] = inst_17200__$1);

return statearr_17265;
})();
if(cljs.core.truth_(inst_17201)){
var statearr_17266_17302 = state_17259__$1;
(statearr_17266_17302[(1)] = (5));

} else {
var statearr_17267_17303 = state_17259__$1;
(statearr_17267_17303[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (15))){
var state_17259__$1 = state_17259;
var statearr_17271_17304 = state_17259__$1;
(statearr_17271_17304[(2)] = null);

(statearr_17271_17304[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (21))){
var state_17259__$1 = state_17259;
var statearr_17272_17305 = state_17259__$1;
(statearr_17272_17305[(2)] = null);

(statearr_17272_17305[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (13))){
var inst_17214 = (state_17259[(8)]);
var inst_17213 = (state_17259[(9)]);
var inst_17211 = (state_17259[(10)]);
var inst_17212 = (state_17259[(11)]);
var inst_17221 = (state_17259[(2)]);
var inst_17222 = (inst_17214 + (1));
var tmp17268 = inst_17213;
var tmp17269 = inst_17211;
var tmp17270 = inst_17212;
var inst_17211__$1 = tmp17269;
var inst_17212__$1 = tmp17270;
var inst_17213__$1 = tmp17268;
var inst_17214__$1 = inst_17222;
var state_17259__$1 = (function (){var statearr_17273 = state_17259;
(statearr_17273[(8)] = inst_17214__$1);

(statearr_17273[(9)] = inst_17213__$1);

(statearr_17273[(14)] = inst_17221);

(statearr_17273[(10)] = inst_17211__$1);

(statearr_17273[(11)] = inst_17212__$1);

return statearr_17273;
})();
var statearr_17274_17306 = state_17259__$1;
(statearr_17274_17306[(2)] = null);

(statearr_17274_17306[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (22))){
var state_17259__$1 = state_17259;
var statearr_17275_17307 = state_17259__$1;
(statearr_17275_17307[(2)] = null);

(statearr_17275_17307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (6))){
var inst_17200 = (state_17259[(13)]);
var inst_17209 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17200) : f.call(null,inst_17200));
var inst_17210 = cljs.core.seq(inst_17209);
var inst_17211 = inst_17210;
var inst_17212 = null;
var inst_17213 = (0);
var inst_17214 = (0);
var state_17259__$1 = (function (){var statearr_17276 = state_17259;
(statearr_17276[(8)] = inst_17214);

(statearr_17276[(9)] = inst_17213);

(statearr_17276[(10)] = inst_17211);

(statearr_17276[(11)] = inst_17212);

return statearr_17276;
})();
var statearr_17277_17308 = state_17259__$1;
(statearr_17277_17308[(2)] = null);

(statearr_17277_17308[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (17))){
var inst_17225 = (state_17259[(7)]);
var inst_17229 = cljs.core.chunk_first(inst_17225);
var inst_17230 = cljs.core.chunk_rest(inst_17225);
var inst_17231 = cljs.core.count(inst_17229);
var inst_17211 = inst_17230;
var inst_17212 = inst_17229;
var inst_17213 = inst_17231;
var inst_17214 = (0);
var state_17259__$1 = (function (){var statearr_17278 = state_17259;
(statearr_17278[(8)] = inst_17214);

(statearr_17278[(9)] = inst_17213);

(statearr_17278[(10)] = inst_17211);

(statearr_17278[(11)] = inst_17212);

return statearr_17278;
})();
var statearr_17279_17309 = state_17259__$1;
(statearr_17279_17309[(2)] = null);

(statearr_17279_17309[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (3))){
var inst_17257 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17259__$1,inst_17257);
} else {
if((state_val_17260 === (12))){
var inst_17245 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17280_17310 = state_17259__$1;
(statearr_17280_17310[(2)] = inst_17245);

(statearr_17280_17310[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (2))){
var state_17259__$1 = state_17259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17259__$1,(4),in$);
} else {
if((state_val_17260 === (23))){
var inst_17253 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17281_17311 = state_17259__$1;
(statearr_17281_17311[(2)] = inst_17253);

(statearr_17281_17311[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (19))){
var inst_17240 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17282_17312 = state_17259__$1;
(statearr_17282_17312[(2)] = inst_17240);

(statearr_17282_17312[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (11))){
var inst_17225 = (state_17259[(7)]);
var inst_17211 = (state_17259[(10)]);
var inst_17225__$1 = cljs.core.seq(inst_17211);
var state_17259__$1 = (function (){var statearr_17283 = state_17259;
(statearr_17283[(7)] = inst_17225__$1);

return statearr_17283;
})();
if(inst_17225__$1){
var statearr_17284_17313 = state_17259__$1;
(statearr_17284_17313[(1)] = (14));

} else {
var statearr_17285_17314 = state_17259__$1;
(statearr_17285_17314[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (9))){
var inst_17247 = (state_17259[(2)]);
var inst_17248 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17259__$1 = (function (){var statearr_17286 = state_17259;
(statearr_17286[(15)] = inst_17247);

return statearr_17286;
})();
if(cljs.core.truth_(inst_17248)){
var statearr_17287_17315 = state_17259__$1;
(statearr_17287_17315[(1)] = (21));

} else {
var statearr_17288_17316 = state_17259__$1;
(statearr_17288_17316[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (5))){
var inst_17203 = cljs.core.async.close_BANG_(out);
var state_17259__$1 = state_17259;
var statearr_17289_17317 = state_17259__$1;
(statearr_17289_17317[(2)] = inst_17203);

(statearr_17289_17317[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (14))){
var inst_17225 = (state_17259[(7)]);
var inst_17227 = cljs.core.chunked_seq_QMARK_(inst_17225);
var state_17259__$1 = state_17259;
if(inst_17227){
var statearr_17290_17318 = state_17259__$1;
(statearr_17290_17318[(1)] = (17));

} else {
var statearr_17291_17319 = state_17259__$1;
(statearr_17291_17319[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (16))){
var inst_17243 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17292_17320 = state_17259__$1;
(statearr_17292_17320[(2)] = inst_17243);

(statearr_17292_17320[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (10))){
var inst_17214 = (state_17259[(8)]);
var inst_17212 = (state_17259[(11)]);
var inst_17219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17212,inst_17214);
var state_17259__$1 = state_17259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17259__$1,(13),out,inst_17219);
} else {
if((state_val_17260 === (18))){
var inst_17225 = (state_17259[(7)]);
var inst_17234 = cljs.core.first(inst_17225);
var state_17259__$1 = state_17259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17259__$1,(20),out,inst_17234);
} else {
if((state_val_17260 === (8))){
var inst_17214 = (state_17259[(8)]);
var inst_17213 = (state_17259[(9)]);
var inst_17216 = (inst_17214 < inst_17213);
var inst_17217 = inst_17216;
var state_17259__$1 = state_17259;
if(cljs.core.truth_(inst_17217)){
var statearr_17293_17321 = state_17259__$1;
(statearr_17293_17321[(1)] = (10));

} else {
var statearr_17294_17322 = state_17259__$1;
(statearr_17294_17322[(1)] = (11));

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
});})(c__13771__auto__))
;
return ((function (switch__13590__auto__,c__13771__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13591__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13591__auto____0 = (function (){
var statearr_17295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17295[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13591__auto__);

(statearr_17295[(1)] = (1));

return statearr_17295;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13591__auto____1 = (function (state_17259){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_17259);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e17296){if((e17296 instanceof Object)){
var ex__13594__auto__ = e17296;
var statearr_17297_17323 = state_17259;
(statearr_17297_17323[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17259);

return cljs.core.cst$kw$recur;
} else {
throw e17296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__17324 = state_17259;
state_17259 = G__17324;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13591__auto__ = function(state_17259){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13591__auto____1.call(this,state_17259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13591__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13591__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_17298 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_17298[(6)] = c__13771__auto__);

return statearr_17298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17326 = arguments.length;
switch (G__17326) {
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
var G__17329 = arguments.length;
switch (G__17329) {
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
var G__17332 = arguments.length;
switch (G__17332) {
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
var c__13771__auto___17379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___17379,out){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___17379,out){
return (function (state_17356){
var state_val_17357 = (state_17356[(1)]);
if((state_val_17357 === (7))){
var inst_17351 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
var statearr_17358_17380 = state_17356__$1;
(statearr_17358_17380[(2)] = inst_17351);

(statearr_17358_17380[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17357 === (1))){
var inst_17333 = null;
var state_17356__$1 = (function (){var statearr_17359 = state_17356;
(statearr_17359[(7)] = inst_17333);

return statearr_17359;
})();
var statearr_17360_17381 = state_17356__$1;
(statearr_17360_17381[(2)] = null);

(statearr_17360_17381[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17357 === (4))){
var inst_17336 = (state_17356[(8)]);
var inst_17336__$1 = (state_17356[(2)]);
var inst_17337 = (inst_17336__$1 == null);
var inst_17338 = cljs.core.not(inst_17337);
var state_17356__$1 = (function (){var statearr_17361 = state_17356;
(statearr_17361[(8)] = inst_17336__$1);

return statearr_17361;
})();
if(inst_17338){
var statearr_17362_17382 = state_17356__$1;
(statearr_17362_17382[(1)] = (5));

} else {
var statearr_17363_17383 = state_17356__$1;
(statearr_17363_17383[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17357 === (6))){
var state_17356__$1 = state_17356;
var statearr_17364_17384 = state_17356__$1;
(statearr_17364_17384[(2)] = null);

(statearr_17364_17384[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17357 === (3))){
var inst_17353 = (state_17356[(2)]);
var inst_17354 = cljs.core.async.close_BANG_(out);
var state_17356__$1 = (function (){var statearr_17365 = state_17356;
(statearr_17365[(9)] = inst_17353);

return statearr_17365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17356__$1,inst_17354);
} else {
if((state_val_17357 === (2))){
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17356__$1,(4),ch);
} else {
if((state_val_17357 === (11))){
var inst_17336 = (state_17356[(8)]);
var inst_17345 = (state_17356[(2)]);
var inst_17333 = inst_17336;
var state_17356__$1 = (function (){var statearr_17366 = state_17356;
(statearr_17366[(10)] = inst_17345);

(statearr_17366[(7)] = inst_17333);

return statearr_17366;
})();
var statearr_17367_17385 = state_17356__$1;
(statearr_17367_17385[(2)] = null);

(statearr_17367_17385[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17357 === (9))){
var inst_17336 = (state_17356[(8)]);
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17356__$1,(11),out,inst_17336);
} else {
if((state_val_17357 === (5))){
var inst_17336 = (state_17356[(8)]);
var inst_17333 = (state_17356[(7)]);
var inst_17340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17336,inst_17333);
var state_17356__$1 = state_17356;
if(inst_17340){
var statearr_17369_17386 = state_17356__$1;
(statearr_17369_17386[(1)] = (8));

} else {
var statearr_17370_17387 = state_17356__$1;
(statearr_17370_17387[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17357 === (10))){
var inst_17348 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
var statearr_17371_17388 = state_17356__$1;
(statearr_17371_17388[(2)] = inst_17348);

(statearr_17371_17388[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17357 === (8))){
var inst_17333 = (state_17356[(7)]);
var tmp17368 = inst_17333;
var inst_17333__$1 = tmp17368;
var state_17356__$1 = (function (){var statearr_17372 = state_17356;
(statearr_17372[(7)] = inst_17333__$1);

return statearr_17372;
})();
var statearr_17373_17389 = state_17356__$1;
(statearr_17373_17389[(2)] = null);

(statearr_17373_17389[(1)] = (2));


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
});})(c__13771__auto___17379,out))
;
return ((function (switch__13590__auto__,c__13771__auto___17379,out){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_17374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17374[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_17374[(1)] = (1));

return statearr_17374;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_17356){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_17356);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e17375){if((e17375 instanceof Object)){
var ex__13594__auto__ = e17375;
var statearr_17376_17390 = state_17356;
(statearr_17376_17390[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17356);

return cljs.core.cst$kw$recur;
} else {
throw e17375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__17391 = state_17356;
state_17356 = G__17391;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_17356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_17356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___17379,out))
})();
var state__13773__auto__ = (function (){var statearr_17377 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_17377[(6)] = c__13771__auto___17379);

return statearr_17377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___17379,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17393 = arguments.length;
switch (G__17393) {
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
var c__13771__auto___17459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___17459,out){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___17459,out){
return (function (state_17431){
var state_val_17432 = (state_17431[(1)]);
if((state_val_17432 === (7))){
var inst_17427 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
var statearr_17433_17460 = state_17431__$1;
(statearr_17433_17460[(2)] = inst_17427);

(statearr_17433_17460[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (1))){
var inst_17394 = (new Array(n));
var inst_17395 = inst_17394;
var inst_17396 = (0);
var state_17431__$1 = (function (){var statearr_17434 = state_17431;
(statearr_17434[(7)] = inst_17395);

(statearr_17434[(8)] = inst_17396);

return statearr_17434;
})();
var statearr_17435_17461 = state_17431__$1;
(statearr_17435_17461[(2)] = null);

(statearr_17435_17461[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (4))){
var inst_17399 = (state_17431[(9)]);
var inst_17399__$1 = (state_17431[(2)]);
var inst_17400 = (inst_17399__$1 == null);
var inst_17401 = cljs.core.not(inst_17400);
var state_17431__$1 = (function (){var statearr_17436 = state_17431;
(statearr_17436[(9)] = inst_17399__$1);

return statearr_17436;
})();
if(inst_17401){
var statearr_17437_17462 = state_17431__$1;
(statearr_17437_17462[(1)] = (5));

} else {
var statearr_17438_17463 = state_17431__$1;
(statearr_17438_17463[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (15))){
var inst_17421 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
var statearr_17439_17464 = state_17431__$1;
(statearr_17439_17464[(2)] = inst_17421);

(statearr_17439_17464[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (13))){
var state_17431__$1 = state_17431;
var statearr_17440_17465 = state_17431__$1;
(statearr_17440_17465[(2)] = null);

(statearr_17440_17465[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (6))){
var inst_17396 = (state_17431[(8)]);
var inst_17417 = (inst_17396 > (0));
var state_17431__$1 = state_17431;
if(cljs.core.truth_(inst_17417)){
var statearr_17441_17466 = state_17431__$1;
(statearr_17441_17466[(1)] = (12));

} else {
var statearr_17442_17467 = state_17431__$1;
(statearr_17442_17467[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (3))){
var inst_17429 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17431__$1,inst_17429);
} else {
if((state_val_17432 === (12))){
var inst_17395 = (state_17431[(7)]);
var inst_17419 = cljs.core.vec(inst_17395);
var state_17431__$1 = state_17431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17431__$1,(15),out,inst_17419);
} else {
if((state_val_17432 === (2))){
var state_17431__$1 = state_17431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17431__$1,(4),ch);
} else {
if((state_val_17432 === (11))){
var inst_17411 = (state_17431[(2)]);
var inst_17412 = (new Array(n));
var inst_17395 = inst_17412;
var inst_17396 = (0);
var state_17431__$1 = (function (){var statearr_17443 = state_17431;
(statearr_17443[(7)] = inst_17395);

(statearr_17443[(8)] = inst_17396);

(statearr_17443[(10)] = inst_17411);

return statearr_17443;
})();
var statearr_17444_17468 = state_17431__$1;
(statearr_17444_17468[(2)] = null);

(statearr_17444_17468[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (9))){
var inst_17395 = (state_17431[(7)]);
var inst_17409 = cljs.core.vec(inst_17395);
var state_17431__$1 = state_17431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17431__$1,(11),out,inst_17409);
} else {
if((state_val_17432 === (5))){
var inst_17404 = (state_17431[(11)]);
var inst_17395 = (state_17431[(7)]);
var inst_17396 = (state_17431[(8)]);
var inst_17399 = (state_17431[(9)]);
var inst_17403 = (inst_17395[inst_17396] = inst_17399);
var inst_17404__$1 = (inst_17396 + (1));
var inst_17405 = (inst_17404__$1 < n);
var state_17431__$1 = (function (){var statearr_17445 = state_17431;
(statearr_17445[(11)] = inst_17404__$1);

(statearr_17445[(12)] = inst_17403);

return statearr_17445;
})();
if(cljs.core.truth_(inst_17405)){
var statearr_17446_17469 = state_17431__$1;
(statearr_17446_17469[(1)] = (8));

} else {
var statearr_17447_17470 = state_17431__$1;
(statearr_17447_17470[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (14))){
var inst_17424 = (state_17431[(2)]);
var inst_17425 = cljs.core.async.close_BANG_(out);
var state_17431__$1 = (function (){var statearr_17449 = state_17431;
(statearr_17449[(13)] = inst_17424);

return statearr_17449;
})();
var statearr_17450_17471 = state_17431__$1;
(statearr_17450_17471[(2)] = inst_17425);

(statearr_17450_17471[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (10))){
var inst_17415 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
var statearr_17451_17472 = state_17431__$1;
(statearr_17451_17472[(2)] = inst_17415);

(statearr_17451_17472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17432 === (8))){
var inst_17404 = (state_17431[(11)]);
var inst_17395 = (state_17431[(7)]);
var tmp17448 = inst_17395;
var inst_17395__$1 = tmp17448;
var inst_17396 = inst_17404;
var state_17431__$1 = (function (){var statearr_17452 = state_17431;
(statearr_17452[(7)] = inst_17395__$1);

(statearr_17452[(8)] = inst_17396);

return statearr_17452;
})();
var statearr_17453_17473 = state_17431__$1;
(statearr_17453_17473[(2)] = null);

(statearr_17453_17473[(1)] = (2));


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
});})(c__13771__auto___17459,out))
;
return ((function (switch__13590__auto__,c__13771__auto___17459,out){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_17454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17454[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_17454[(1)] = (1));

return statearr_17454;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_17431){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_17431);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e17455){if((e17455 instanceof Object)){
var ex__13594__auto__ = e17455;
var statearr_17456_17474 = state_17431;
(statearr_17456_17474[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17431);

return cljs.core.cst$kw$recur;
} else {
throw e17455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__17475 = state_17431;
state_17431 = G__17475;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_17431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_17431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___17459,out))
})();
var state__13773__auto__ = (function (){var statearr_17457 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_17457[(6)] = c__13771__auto___17459);

return statearr_17457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___17459,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17477 = arguments.length;
switch (G__17477) {
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
var c__13771__auto___17547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13771__auto___17547,out){
return (function (){
var f__13772__auto__ = (function (){var switch__13590__auto__ = ((function (c__13771__auto___17547,out){
return (function (state_17519){
var state_val_17520 = (state_17519[(1)]);
if((state_val_17520 === (7))){
var inst_17515 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17521_17548 = state_17519__$1;
(statearr_17521_17548[(2)] = inst_17515);

(statearr_17521_17548[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (1))){
var inst_17478 = [];
var inst_17479 = inst_17478;
var inst_17480 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17519__$1 = (function (){var statearr_17522 = state_17519;
(statearr_17522[(7)] = inst_17480);

(statearr_17522[(8)] = inst_17479);

return statearr_17522;
})();
var statearr_17523_17549 = state_17519__$1;
(statearr_17523_17549[(2)] = null);

(statearr_17523_17549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (4))){
var inst_17483 = (state_17519[(9)]);
var inst_17483__$1 = (state_17519[(2)]);
var inst_17484 = (inst_17483__$1 == null);
var inst_17485 = cljs.core.not(inst_17484);
var state_17519__$1 = (function (){var statearr_17524 = state_17519;
(statearr_17524[(9)] = inst_17483__$1);

return statearr_17524;
})();
if(inst_17485){
var statearr_17525_17550 = state_17519__$1;
(statearr_17525_17550[(1)] = (5));

} else {
var statearr_17526_17551 = state_17519__$1;
(statearr_17526_17551[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (15))){
var inst_17509 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17527_17552 = state_17519__$1;
(statearr_17527_17552[(2)] = inst_17509);

(statearr_17527_17552[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (13))){
var state_17519__$1 = state_17519;
var statearr_17528_17553 = state_17519__$1;
(statearr_17528_17553[(2)] = null);

(statearr_17528_17553[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (6))){
var inst_17479 = (state_17519[(8)]);
var inst_17504 = inst_17479.length;
var inst_17505 = (inst_17504 > (0));
var state_17519__$1 = state_17519;
if(cljs.core.truth_(inst_17505)){
var statearr_17529_17554 = state_17519__$1;
(statearr_17529_17554[(1)] = (12));

} else {
var statearr_17530_17555 = state_17519__$1;
(statearr_17530_17555[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (3))){
var inst_17517 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17519__$1,inst_17517);
} else {
if((state_val_17520 === (12))){
var inst_17479 = (state_17519[(8)]);
var inst_17507 = cljs.core.vec(inst_17479);
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17519__$1,(15),out,inst_17507);
} else {
if((state_val_17520 === (2))){
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17519__$1,(4),ch);
} else {
if((state_val_17520 === (11))){
var inst_17487 = (state_17519[(10)]);
var inst_17483 = (state_17519[(9)]);
var inst_17497 = (state_17519[(2)]);
var inst_17498 = [];
var inst_17499 = inst_17498.push(inst_17483);
var inst_17479 = inst_17498;
var inst_17480 = inst_17487;
var state_17519__$1 = (function (){var statearr_17531 = state_17519;
(statearr_17531[(11)] = inst_17499);

(statearr_17531[(7)] = inst_17480);

(statearr_17531[(12)] = inst_17497);

(statearr_17531[(8)] = inst_17479);

return statearr_17531;
})();
var statearr_17532_17556 = state_17519__$1;
(statearr_17532_17556[(2)] = null);

(statearr_17532_17556[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (9))){
var inst_17479 = (state_17519[(8)]);
var inst_17495 = cljs.core.vec(inst_17479);
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17519__$1,(11),out,inst_17495);
} else {
if((state_val_17520 === (5))){
var inst_17487 = (state_17519[(10)]);
var inst_17480 = (state_17519[(7)]);
var inst_17483 = (state_17519[(9)]);
var inst_17487__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17483) : f.call(null,inst_17483));
var inst_17488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17487__$1,inst_17480);
var inst_17489 = cljs.core.keyword_identical_QMARK_(inst_17480,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17490 = ((inst_17488) || (inst_17489));
var state_17519__$1 = (function (){var statearr_17533 = state_17519;
(statearr_17533[(10)] = inst_17487__$1);

return statearr_17533;
})();
if(cljs.core.truth_(inst_17490)){
var statearr_17534_17557 = state_17519__$1;
(statearr_17534_17557[(1)] = (8));

} else {
var statearr_17535_17558 = state_17519__$1;
(statearr_17535_17558[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (14))){
var inst_17512 = (state_17519[(2)]);
var inst_17513 = cljs.core.async.close_BANG_(out);
var state_17519__$1 = (function (){var statearr_17537 = state_17519;
(statearr_17537[(13)] = inst_17512);

return statearr_17537;
})();
var statearr_17538_17559 = state_17519__$1;
(statearr_17538_17559[(2)] = inst_17513);

(statearr_17538_17559[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (10))){
var inst_17502 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17539_17560 = state_17519__$1;
(statearr_17539_17560[(2)] = inst_17502);

(statearr_17539_17560[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17520 === (8))){
var inst_17487 = (state_17519[(10)]);
var inst_17483 = (state_17519[(9)]);
var inst_17479 = (state_17519[(8)]);
var inst_17492 = inst_17479.push(inst_17483);
var tmp17536 = inst_17479;
var inst_17479__$1 = tmp17536;
var inst_17480 = inst_17487;
var state_17519__$1 = (function (){var statearr_17540 = state_17519;
(statearr_17540[(14)] = inst_17492);

(statearr_17540[(7)] = inst_17480);

(statearr_17540[(8)] = inst_17479__$1);

return statearr_17540;
})();
var statearr_17541_17561 = state_17519__$1;
(statearr_17541_17561[(2)] = null);

(statearr_17541_17561[(1)] = (2));


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
});})(c__13771__auto___17547,out))
;
return ((function (switch__13590__auto__,c__13771__auto___17547,out){
return (function() {
var cljs$core$async$state_machine__13591__auto__ = null;
var cljs$core$async$state_machine__13591__auto____0 = (function (){
var statearr_17542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17542[(0)] = cljs$core$async$state_machine__13591__auto__);

(statearr_17542[(1)] = (1));

return statearr_17542;
});
var cljs$core$async$state_machine__13591__auto____1 = (function (state_17519){
while(true){
var ret_value__13592__auto__ = (function (){try{while(true){
var result__13593__auto__ = switch__13590__auto__(state_17519);
if(cljs.core.keyword_identical_QMARK_(result__13593__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13593__auto__;
}
break;
}
}catch (e17543){if((e17543 instanceof Object)){
var ex__13594__auto__ = e17543;
var statearr_17544_17562 = state_17519;
(statearr_17544_17562[(5)] = ex__13594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17519);

return cljs.core.cst$kw$recur;
} else {
throw e17543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13592__auto__,cljs.core.cst$kw$recur)){
var G__17563 = state_17519;
state_17519 = G__17563;
continue;
} else {
return ret_value__13592__auto__;
}
break;
}
});
cljs$core$async$state_machine__13591__auto__ = function(state_17519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13591__auto____1.call(this,state_17519);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13591__auto____0;
cljs$core$async$state_machine__13591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13591__auto____1;
return cljs$core$async$state_machine__13591__auto__;
})()
;})(switch__13590__auto__,c__13771__auto___17547,out))
})();
var state__13773__auto__ = (function (){var statearr_17545 = (f__13772__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13772__auto__.cljs$core$IFn$_invoke$arity$0() : f__13772__auto__.call(null));
(statearr_17545[(6)] = c__13771__auto___17547);

return statearr_17545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13773__auto__);
});})(c__13771__auto___17547,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

