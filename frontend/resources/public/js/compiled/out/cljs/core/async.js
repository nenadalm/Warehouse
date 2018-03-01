// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
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
var args17682 = [];
var len__8139__auto___17688 = arguments.length;
var i__8140__auto___17689 = (0);
while(true){
if((i__8140__auto___17689 < len__8139__auto___17688)){
args17682.push((arguments[i__8140__auto___17689]));

var G__17690 = (i__8140__auto___17689 + (1));
i__8140__auto___17689 = G__17690;
continue;
} else {
}
break;
}

var G__17684 = args17682.length;
switch (G__17684) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17682.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17685 = (function (f,blockable,meta17686){
this.f = f;
this.blockable = blockable;
this.meta17686 = meta17686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17687,meta17686__$1){
var self__ = this;
var _17687__$1 = this;
return (new cljs.core.async.t_cljs$core$async17685(self__.f,self__.blockable,meta17686__$1));
});

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17687){
var self__ = this;
var _17687__$1 = this;
return self__.meta17686;
});

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17686], null);
});

cljs.core.async.t_cljs$core$async17685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17685";

cljs.core.async.t_cljs$core$async17685.cljs$lang$ctorPrWriter = (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async17685");
});

cljs.core.async.__GT_t_cljs$core$async17685 = (function cljs$core$async$__GT_t_cljs$core$async17685(f__$1,blockable__$1,meta17686){
return (new cljs.core.async.t_cljs$core$async17685(f__$1,blockable__$1,meta17686));
});

}

return (new cljs.core.async.t_cljs$core$async17685(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args17694 = [];
var len__8139__auto___17697 = arguments.length;
var i__8140__auto___17698 = (0);
while(true){
if((i__8140__auto___17698 < len__8139__auto___17697)){
args17694.push((arguments[i__8140__auto___17698]));

var G__17699 = (i__8140__auto___17698 + (1));
i__8140__auto___17698 = G__17699;
continue;
} else {
}
break;
}

var G__17696 = args17694.length;
switch (G__17696) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17694.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var args17701 = [];
var len__8139__auto___17704 = arguments.length;
var i__8140__auto___17705 = (0);
while(true){
if((i__8140__auto___17705 < len__8139__auto___17704)){
args17701.push((arguments[i__8140__auto___17705]));

var G__17706 = (i__8140__auto___17705 + (1));
i__8140__auto___17705 = G__17706;
continue;
} else {
}
break;
}

var G__17703 = args17701.length;
switch (G__17703) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17701.length)].join('')));

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
var args17708 = [];
var len__8139__auto___17711 = arguments.length;
var i__8140__auto___17712 = (0);
while(true){
if((i__8140__auto___17712 < len__8139__auto___17711)){
args17708.push((arguments[i__8140__auto___17712]));

var G__17713 = (i__8140__auto___17712 + (1));
i__8140__auto___17712 = G__17713;
continue;
} else {
}
break;
}

var G__17710 = args17708.length;
switch (G__17710) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17708.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17715 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17715) : fn1.call(null,val_17715));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17715,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17715) : fn1.call(null,val_17715));
});})(val_17715,ret))
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
var args17716 = [];
var len__8139__auto___17719 = arguments.length;
var i__8140__auto___17720 = (0);
while(true){
if((i__8140__auto___17720 < len__8139__auto___17719)){
args17716.push((arguments[i__8140__auto___17720]));

var G__17721 = (i__8140__auto___17720 + (1));
i__8140__auto___17720 = G__17721;
continue;
} else {
}
break;
}

var G__17718 = args17716.length;
switch (G__17718) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17716.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
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
var n__7949__auto___17723 = n;
var x_17724 = (0);
while(true){
if((x_17724 < n__7949__auto___17723)){
(a[x_17724] = (0));

var G__17725 = (x_17724 + (1));
x_17724 = G__17725;
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

var G__17726 = (i + (1));
i = G__17726;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async17730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17730 = (function (flag,meta17731){
this.flag = flag;
this.meta17731 = meta17731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17732,meta17731__$1){
var self__ = this;
var _17732__$1 = this;
return (new cljs.core.async.t_cljs$core$async17730(self__.flag,meta17731__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17732){
var self__ = this;
var _17732__$1 = this;
return self__.meta17731;
});})(flag))
;

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17730.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17731], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17730";

cljs.core.async.t_cljs$core$async17730.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async17730");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17730 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17730(flag__$1,meta17731){
return (new cljs.core.async.t_cljs$core$async17730(flag__$1,meta17731));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17730(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17736 = (function (flag,cb,meta17737){
this.flag = flag;
this.cb = cb;
this.meta17737 = meta17737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17738,meta17737__$1){
var self__ = this;
var _17738__$1 = this;
return (new cljs.core.async.t_cljs$core$async17736(self__.flag,self__.cb,meta17737__$1));
});

cljs.core.async.t_cljs$core$async17736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17738){
var self__ = this;
var _17738__$1 = this;
return self__.meta17737;
});

cljs.core.async.t_cljs$core$async17736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17737], null);
});

cljs.core.async.t_cljs$core$async17736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17736";

cljs.core.async.t_cljs$core$async17736.cljs$lang$ctorPrWriter = (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async17736");
});

cljs.core.async.__GT_t_cljs$core$async17736 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17736(flag__$1,cb__$1,meta17737){
return (new cljs.core.async.t_cljs$core$async17736(flag__$1,cb__$1,meta17737));
});

}

return (new cljs.core.async.t_cljs$core$async17736(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17739_SHARP_){
var G__17743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17739_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17743) : fret.call(null,G__17743));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17740_SHARP_){
var G__17744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17740_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17744) : fret.call(null,G__17744));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__7026__auto__ = wport;
if(cljs.core.truth_(or__7026__auto__)){
return or__7026__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17745 = (i + (1));
i = G__17745;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7026__auto__ = ret;
if(cljs.core.truth_(or__7026__auto__)){
return or__7026__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__7014__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7014__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7014__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__8146__auto__ = [];
var len__8139__auto___17751 = arguments.length;
var i__8140__auto___17752 = (0);
while(true){
if((i__8140__auto___17752 < len__8139__auto___17751)){
args__8146__auto__.push((arguments[i__8140__auto___17752]));

var G__17753 = (i__8140__auto___17752 + (1));
i__8140__auto___17752 = G__17753;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((1) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8147__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17748){
var map__17749 = p__17748;
var map__17749__$1 = ((((!((map__17749 == null)))?((((map__17749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17749):map__17749);
var opts = map__17749__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17746){
var G__17747 = cljs.core.first(seq17746);
var seq17746__$1 = cljs.core.next(seq17746);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17747,seq17746__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args17754 = [];
var len__8139__auto___17804 = arguments.length;
var i__8140__auto___17805 = (0);
while(true){
if((i__8140__auto___17805 < len__8139__auto___17804)){
args17754.push((arguments[i__8140__auto___17805]));

var G__17806 = (i__8140__auto___17805 + (1));
i__8140__auto___17805 = G__17806;
continue;
} else {
}
break;
}

var G__17756 = args17754.length;
switch (G__17756) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17754.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17637__auto___17808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___17808){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___17808){
return (function (state_17780){
var state_val_17781 = (state_17780[(1)]);
if((state_val_17781 === (7))){
var inst_17776 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
var statearr_17782_17809 = state_17780__$1;
(statearr_17782_17809[(2)] = inst_17776);

(statearr_17782_17809[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (1))){
var state_17780__$1 = state_17780;
var statearr_17783_17810 = state_17780__$1;
(statearr_17783_17810[(2)] = null);

(statearr_17783_17810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (4))){
var inst_17759 = (state_17780[(7)]);
var inst_17759__$1 = (state_17780[(2)]);
var inst_17760 = (inst_17759__$1 == null);
var state_17780__$1 = (function (){var statearr_17784 = state_17780;
(statearr_17784[(7)] = inst_17759__$1);

return statearr_17784;
})();
if(cljs.core.truth_(inst_17760)){
var statearr_17785_17811 = state_17780__$1;
(statearr_17785_17811[(1)] = (5));

} else {
var statearr_17786_17812 = state_17780__$1;
(statearr_17786_17812[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (13))){
var state_17780__$1 = state_17780;
var statearr_17787_17813 = state_17780__$1;
(statearr_17787_17813[(2)] = null);

(statearr_17787_17813[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (6))){
var inst_17759 = (state_17780[(7)]);
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17780__$1,(11),to,inst_17759);
} else {
if((state_val_17781 === (3))){
var inst_17778 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17780__$1,inst_17778);
} else {
if((state_val_17781 === (12))){
var state_17780__$1 = state_17780;
var statearr_17788_17814 = state_17780__$1;
(statearr_17788_17814[(2)] = null);

(statearr_17788_17814[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (2))){
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17780__$1,(4),from);
} else {
if((state_val_17781 === (11))){
var inst_17769 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
if(cljs.core.truth_(inst_17769)){
var statearr_17789_17815 = state_17780__$1;
(statearr_17789_17815[(1)] = (12));

} else {
var statearr_17790_17816 = state_17780__$1;
(statearr_17790_17816[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (9))){
var state_17780__$1 = state_17780;
var statearr_17791_17817 = state_17780__$1;
(statearr_17791_17817[(2)] = null);

(statearr_17791_17817[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (5))){
var state_17780__$1 = state_17780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17792_17818 = state_17780__$1;
(statearr_17792_17818[(1)] = (8));

} else {
var statearr_17793_17819 = state_17780__$1;
(statearr_17793_17819[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (14))){
var inst_17774 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
var statearr_17794_17820 = state_17780__$1;
(statearr_17794_17820[(2)] = inst_17774);

(statearr_17794_17820[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (10))){
var inst_17766 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
var statearr_17795_17821 = state_17780__$1;
(statearr_17795_17821[(2)] = inst_17766);

(statearr_17795_17821[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (8))){
var inst_17763 = cljs.core.async.close_BANG_(to);
var state_17780__$1 = state_17780;
var statearr_17796_17822 = state_17780__$1;
(statearr_17796_17822[(2)] = inst_17763);

(statearr_17796_17822[(1)] = (10));


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
});})(c__17637__auto___17808))
;
return ((function (switch__17513__auto__,c__17637__auto___17808){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_17800 = [null,null,null,null,null,null,null,null];
(statearr_17800[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_17800[(1)] = (1));

return statearr_17800;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_17780){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_17780);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e17801){if((e17801 instanceof Object)){
var ex__17517__auto__ = e17801;
var statearr_17802_17823 = state_17780;
(statearr_17802_17823[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17780);

return cljs.core.cst$kw$recur;
} else {
throw e17801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__17824 = state_17780;
state_17780 = G__17824;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_17780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_17780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___17808))
})();
var state__17639__auto__ = (function (){var statearr_17803 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_17803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___17808);

return statearr_17803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___17808))
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
return (function (p__18012){
var vec__18013 = p__18012;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18013,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18013,(1),null);
var job = vec__18013;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17637__auto___18199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___18199,res,vec__18013,v,p,job,jobs,results){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___18199,res,vec__18013,v,p,job,jobs,results){
return (function (state_18020){
var state_val_18021 = (state_18020[(1)]);
if((state_val_18021 === (1))){
var state_18020__$1 = state_18020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18020__$1,(2),res,v);
} else {
if((state_val_18021 === (2))){
var inst_18017 = (state_18020[(2)]);
var inst_18018 = cljs.core.async.close_BANG_(res);
var state_18020__$1 = (function (){var statearr_18022 = state_18020;
(statearr_18022[(7)] = inst_18017);

return statearr_18022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18020__$1,inst_18018);
} else {
return null;
}
}
});})(c__17637__auto___18199,res,vec__18013,v,p,job,jobs,results))
;
return ((function (switch__17513__auto__,c__17637__auto___18199,res,vec__18013,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0 = (function (){
var statearr_18026 = [null,null,null,null,null,null,null,null];
(statearr_18026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__);

(statearr_18026[(1)] = (1));

return statearr_18026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1 = (function (state_18020){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18020);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18027){if((e18027 instanceof Object)){
var ex__17517__auto__ = e18027;
var statearr_18028_18200 = state_18020;
(statearr_18028_18200[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18020);

return cljs.core.cst$kw$recur;
} else {
throw e18027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__18201 = state_18020;
state_18020 = G__18201;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = function(state_18020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1.call(this,state_18020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___18199,res,vec__18013,v,p,job,jobs,results))
})();
var state__17639__auto__ = (function (){var statearr_18029 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___18199);

return statearr_18029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___18199,res,vec__18013,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18030){
var vec__18031 = p__18030;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18031,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18031,(1),null);
var job = vec__18031;
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
var n__7949__auto___18202 = n;
var __18203 = (0);
while(true){
if((__18203 < n__7949__auto___18202)){
var G__18034_18204 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18034_18204) {
case "compute":
var c__17637__auto___18206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18203,c__17637__auto___18206,G__18034_18204,n__7949__auto___18202,jobs,results,process,async){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (__18203,c__17637__auto___18206,G__18034_18204,n__7949__auto___18202,jobs,results,process,async){
return (function (state_18047){
var state_val_18048 = (state_18047[(1)]);
if((state_val_18048 === (1))){
var state_18047__$1 = state_18047;
var statearr_18049_18207 = state_18047__$1;
(statearr_18049_18207[(2)] = null);

(statearr_18049_18207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18048 === (2))){
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18047__$1,(4),jobs);
} else {
if((state_val_18048 === (3))){
var inst_18045 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18047__$1,inst_18045);
} else {
if((state_val_18048 === (4))){
var inst_18037 = (state_18047[(2)]);
var inst_18038 = process(inst_18037);
var state_18047__$1 = state_18047;
if(cljs.core.truth_(inst_18038)){
var statearr_18050_18208 = state_18047__$1;
(statearr_18050_18208[(1)] = (5));

} else {
var statearr_18051_18209 = state_18047__$1;
(statearr_18051_18209[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18048 === (5))){
var state_18047__$1 = state_18047;
var statearr_18052_18210 = state_18047__$1;
(statearr_18052_18210[(2)] = null);

(statearr_18052_18210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18048 === (6))){
var state_18047__$1 = state_18047;
var statearr_18053_18211 = state_18047__$1;
(statearr_18053_18211[(2)] = null);

(statearr_18053_18211[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18048 === (7))){
var inst_18043 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18054_18212 = state_18047__$1;
(statearr_18054_18212[(2)] = inst_18043);

(statearr_18054_18212[(1)] = (3));


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
});})(__18203,c__17637__auto___18206,G__18034_18204,n__7949__auto___18202,jobs,results,process,async))
;
return ((function (__18203,switch__17513__auto__,c__17637__auto___18206,G__18034_18204,n__7949__auto___18202,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0 = (function (){
var statearr_18058 = [null,null,null,null,null,null,null];
(statearr_18058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__);

(statearr_18058[(1)] = (1));

return statearr_18058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1 = (function (state_18047){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18047);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18059){if((e18059 instanceof Object)){
var ex__17517__auto__ = e18059;
var statearr_18060_18213 = state_18047;
(statearr_18060_18213[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18047);

return cljs.core.cst$kw$recur;
} else {
throw e18059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__18214 = state_18047;
state_18047 = G__18214;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = function(state_18047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1.call(this,state_18047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__;
})()
;})(__18203,switch__17513__auto__,c__17637__auto___18206,G__18034_18204,n__7949__auto___18202,jobs,results,process,async))
})();
var state__17639__auto__ = (function (){var statearr_18061 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___18206);

return statearr_18061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(__18203,c__17637__auto___18206,G__18034_18204,n__7949__auto___18202,jobs,results,process,async))
);


break;
case "async":
var c__17637__auto___18215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18203,c__17637__auto___18215,G__18034_18204,n__7949__auto___18202,jobs,results,process,async){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (__18203,c__17637__auto___18215,G__18034_18204,n__7949__auto___18202,jobs,results,process,async){
return (function (state_18074){
var state_val_18075 = (state_18074[(1)]);
if((state_val_18075 === (1))){
var state_18074__$1 = state_18074;
var statearr_18076_18216 = state_18074__$1;
(statearr_18076_18216[(2)] = null);

(statearr_18076_18216[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (2))){
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18074__$1,(4),jobs);
} else {
if((state_val_18075 === (3))){
var inst_18072 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18074__$1,inst_18072);
} else {
if((state_val_18075 === (4))){
var inst_18064 = (state_18074[(2)]);
var inst_18065 = async(inst_18064);
var state_18074__$1 = state_18074;
if(cljs.core.truth_(inst_18065)){
var statearr_18077_18217 = state_18074__$1;
(statearr_18077_18217[(1)] = (5));

} else {
var statearr_18078_18218 = state_18074__$1;
(statearr_18078_18218[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (5))){
var state_18074__$1 = state_18074;
var statearr_18079_18219 = state_18074__$1;
(statearr_18079_18219[(2)] = null);

(statearr_18079_18219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (6))){
var state_18074__$1 = state_18074;
var statearr_18080_18220 = state_18074__$1;
(statearr_18080_18220[(2)] = null);

(statearr_18080_18220[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18075 === (7))){
var inst_18070 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
var statearr_18081_18221 = state_18074__$1;
(statearr_18081_18221[(2)] = inst_18070);

(statearr_18081_18221[(1)] = (3));


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
});})(__18203,c__17637__auto___18215,G__18034_18204,n__7949__auto___18202,jobs,results,process,async))
;
return ((function (__18203,switch__17513__auto__,c__17637__auto___18215,G__18034_18204,n__7949__auto___18202,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0 = (function (){
var statearr_18085 = [null,null,null,null,null,null,null];
(statearr_18085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__);

(statearr_18085[(1)] = (1));

return statearr_18085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1 = (function (state_18074){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18074);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18086){if((e18086 instanceof Object)){
var ex__17517__auto__ = e18086;
var statearr_18087_18222 = state_18074;
(statearr_18087_18222[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18074);

return cljs.core.cst$kw$recur;
} else {
throw e18086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__18223 = state_18074;
state_18074 = G__18223;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = function(state_18074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1.call(this,state_18074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__;
})()
;})(__18203,switch__17513__auto__,c__17637__auto___18215,G__18034_18204,n__7949__auto___18202,jobs,results,process,async))
})();
var state__17639__auto__ = (function (){var statearr_18088 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___18215);

return statearr_18088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(__18203,c__17637__auto___18215,G__18034_18204,n__7949__auto___18202,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__18224 = (__18203 + (1));
__18203 = G__18224;
continue;
} else {
}
break;
}

var c__17637__auto___18225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___18225,jobs,results,process,async){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___18225,jobs,results,process,async){
return (function (state_18110){
var state_val_18111 = (state_18110[(1)]);
if((state_val_18111 === (1))){
var state_18110__$1 = state_18110;
var statearr_18112_18226 = state_18110__$1;
(statearr_18112_18226[(2)] = null);

(statearr_18112_18226[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18111 === (2))){
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18110__$1,(4),from);
} else {
if((state_val_18111 === (3))){
var inst_18108 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18110__$1,inst_18108);
} else {
if((state_val_18111 === (4))){
var inst_18091 = (state_18110[(7)]);
var inst_18091__$1 = (state_18110[(2)]);
var inst_18092 = (inst_18091__$1 == null);
var state_18110__$1 = (function (){var statearr_18113 = state_18110;
(statearr_18113[(7)] = inst_18091__$1);

return statearr_18113;
})();
if(cljs.core.truth_(inst_18092)){
var statearr_18114_18227 = state_18110__$1;
(statearr_18114_18227[(1)] = (5));

} else {
var statearr_18115_18228 = state_18110__$1;
(statearr_18115_18228[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18111 === (5))){
var inst_18094 = cljs.core.async.close_BANG_(jobs);
var state_18110__$1 = state_18110;
var statearr_18116_18229 = state_18110__$1;
(statearr_18116_18229[(2)] = inst_18094);

(statearr_18116_18229[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18111 === (6))){
var inst_18091 = (state_18110[(7)]);
var inst_18096 = (state_18110[(8)]);
var inst_18096__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18098 = [inst_18091,inst_18096__$1];
var inst_18099 = (new cljs.core.PersistentVector(null,2,(5),inst_18097,inst_18098,null));
var state_18110__$1 = (function (){var statearr_18117 = state_18110;
(statearr_18117[(8)] = inst_18096__$1);

return statearr_18117;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18110__$1,(8),jobs,inst_18099);
} else {
if((state_val_18111 === (7))){
var inst_18106 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18118_18230 = state_18110__$1;
(statearr_18118_18230[(2)] = inst_18106);

(statearr_18118_18230[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18111 === (8))){
var inst_18096 = (state_18110[(8)]);
var inst_18101 = (state_18110[(2)]);
var state_18110__$1 = (function (){var statearr_18119 = state_18110;
(statearr_18119[(9)] = inst_18101);

return statearr_18119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18110__$1,(9),results,inst_18096);
} else {
if((state_val_18111 === (9))){
var inst_18103 = (state_18110[(2)]);
var state_18110__$1 = (function (){var statearr_18120 = state_18110;
(statearr_18120[(10)] = inst_18103);

return statearr_18120;
})();
var statearr_18121_18231 = state_18110__$1;
(statearr_18121_18231[(2)] = null);

(statearr_18121_18231[(1)] = (2));


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
});})(c__17637__auto___18225,jobs,results,process,async))
;
return ((function (switch__17513__auto__,c__17637__auto___18225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0 = (function (){
var statearr_18125 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__);

(statearr_18125[(1)] = (1));

return statearr_18125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1 = (function (state_18110){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18110);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18126){if((e18126 instanceof Object)){
var ex__17517__auto__ = e18126;
var statearr_18127_18232 = state_18110;
(statearr_18127_18232[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18110);

return cljs.core.cst$kw$recur;
} else {
throw e18126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__18233 = state_18110;
state_18110 = G__18233;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = function(state_18110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1.call(this,state_18110);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___18225,jobs,results,process,async))
})();
var state__17639__auto__ = (function (){var statearr_18128 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___18225);

return statearr_18128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___18225,jobs,results,process,async))
);


var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,jobs,results,process,async){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,jobs,results,process,async){
return (function (state_18166){
var state_val_18167 = (state_18166[(1)]);
if((state_val_18167 === (7))){
var inst_18162 = (state_18166[(2)]);
var state_18166__$1 = state_18166;
var statearr_18168_18234 = state_18166__$1;
(statearr_18168_18234[(2)] = inst_18162);

(statearr_18168_18234[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (20))){
var state_18166__$1 = state_18166;
var statearr_18169_18235 = state_18166__$1;
(statearr_18169_18235[(2)] = null);

(statearr_18169_18235[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (1))){
var state_18166__$1 = state_18166;
var statearr_18170_18236 = state_18166__$1;
(statearr_18170_18236[(2)] = null);

(statearr_18170_18236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (4))){
var inst_18131 = (state_18166[(7)]);
var inst_18131__$1 = (state_18166[(2)]);
var inst_18132 = (inst_18131__$1 == null);
var state_18166__$1 = (function (){var statearr_18171 = state_18166;
(statearr_18171[(7)] = inst_18131__$1);

return statearr_18171;
})();
if(cljs.core.truth_(inst_18132)){
var statearr_18172_18237 = state_18166__$1;
(statearr_18172_18237[(1)] = (5));

} else {
var statearr_18173_18238 = state_18166__$1;
(statearr_18173_18238[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (15))){
var inst_18144 = (state_18166[(8)]);
var state_18166__$1 = state_18166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18166__$1,(18),to,inst_18144);
} else {
if((state_val_18167 === (21))){
var inst_18157 = (state_18166[(2)]);
var state_18166__$1 = state_18166;
var statearr_18174_18239 = state_18166__$1;
(statearr_18174_18239[(2)] = inst_18157);

(statearr_18174_18239[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (13))){
var inst_18159 = (state_18166[(2)]);
var state_18166__$1 = (function (){var statearr_18175 = state_18166;
(statearr_18175[(9)] = inst_18159);

return statearr_18175;
})();
var statearr_18176_18240 = state_18166__$1;
(statearr_18176_18240[(2)] = null);

(statearr_18176_18240[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (6))){
var inst_18131 = (state_18166[(7)]);
var state_18166__$1 = state_18166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18166__$1,(11),inst_18131);
} else {
if((state_val_18167 === (17))){
var inst_18152 = (state_18166[(2)]);
var state_18166__$1 = state_18166;
if(cljs.core.truth_(inst_18152)){
var statearr_18177_18241 = state_18166__$1;
(statearr_18177_18241[(1)] = (19));

} else {
var statearr_18178_18242 = state_18166__$1;
(statearr_18178_18242[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (3))){
var inst_18164 = (state_18166[(2)]);
var state_18166__$1 = state_18166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18166__$1,inst_18164);
} else {
if((state_val_18167 === (12))){
var inst_18141 = (state_18166[(10)]);
var state_18166__$1 = state_18166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18166__$1,(14),inst_18141);
} else {
if((state_val_18167 === (2))){
var state_18166__$1 = state_18166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18166__$1,(4),results);
} else {
if((state_val_18167 === (19))){
var state_18166__$1 = state_18166;
var statearr_18179_18243 = state_18166__$1;
(statearr_18179_18243[(2)] = null);

(statearr_18179_18243[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (11))){
var inst_18141 = (state_18166[(2)]);
var state_18166__$1 = (function (){var statearr_18180 = state_18166;
(statearr_18180[(10)] = inst_18141);

return statearr_18180;
})();
var statearr_18181_18244 = state_18166__$1;
(statearr_18181_18244[(2)] = null);

(statearr_18181_18244[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (9))){
var state_18166__$1 = state_18166;
var statearr_18182_18245 = state_18166__$1;
(statearr_18182_18245[(2)] = null);

(statearr_18182_18245[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (5))){
var state_18166__$1 = state_18166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18183_18246 = state_18166__$1;
(statearr_18183_18246[(1)] = (8));

} else {
var statearr_18184_18247 = state_18166__$1;
(statearr_18184_18247[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (14))){
var inst_18144 = (state_18166[(8)]);
var inst_18146 = (state_18166[(11)]);
var inst_18144__$1 = (state_18166[(2)]);
var inst_18145 = (inst_18144__$1 == null);
var inst_18146__$1 = cljs.core.not(inst_18145);
var state_18166__$1 = (function (){var statearr_18185 = state_18166;
(statearr_18185[(8)] = inst_18144__$1);

(statearr_18185[(11)] = inst_18146__$1);

return statearr_18185;
})();
if(inst_18146__$1){
var statearr_18186_18248 = state_18166__$1;
(statearr_18186_18248[(1)] = (15));

} else {
var statearr_18187_18249 = state_18166__$1;
(statearr_18187_18249[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (16))){
var inst_18146 = (state_18166[(11)]);
var state_18166__$1 = state_18166;
var statearr_18188_18250 = state_18166__$1;
(statearr_18188_18250[(2)] = inst_18146);

(statearr_18188_18250[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (10))){
var inst_18138 = (state_18166[(2)]);
var state_18166__$1 = state_18166;
var statearr_18189_18251 = state_18166__$1;
(statearr_18189_18251[(2)] = inst_18138);

(statearr_18189_18251[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (18))){
var inst_18149 = (state_18166[(2)]);
var state_18166__$1 = state_18166;
var statearr_18190_18252 = state_18166__$1;
(statearr_18190_18252[(2)] = inst_18149);

(statearr_18190_18252[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18167 === (8))){
var inst_18135 = cljs.core.async.close_BANG_(to);
var state_18166__$1 = state_18166;
var statearr_18191_18253 = state_18166__$1;
(statearr_18191_18253[(2)] = inst_18135);

(statearr_18191_18253[(1)] = (10));


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
});})(c__17637__auto__,jobs,results,process,async))
;
return ((function (switch__17513__auto__,c__17637__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0 = (function (){
var statearr_18195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__);

(statearr_18195[(1)] = (1));

return statearr_18195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1 = (function (state_18166){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18166);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18196){if((e18196 instanceof Object)){
var ex__17517__auto__ = e18196;
var statearr_18197_18254 = state_18166;
(statearr_18197_18254[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18166);

return cljs.core.cst$kw$recur;
} else {
throw e18196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__18255 = state_18166;
state_18166 = G__18255;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__ = function(state_18166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1.call(this,state_18166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,jobs,results,process,async))
})();
var state__17639__auto__ = (function (){var statearr_18198 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_18198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,jobs,results,process,async))
);

return c__17637__auto__;
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
var args18256 = [];
var len__8139__auto___18259 = arguments.length;
var i__8140__auto___18260 = (0);
while(true){
if((i__8140__auto___18260 < len__8139__auto___18259)){
args18256.push((arguments[i__8140__auto___18260]));

var G__18261 = (i__8140__auto___18260 + (1));
i__8140__auto___18260 = G__18261;
continue;
} else {
}
break;
}

var G__18258 = args18256.length;
switch (G__18258) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18256.length)].join('')));

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
var args18263 = [];
var len__8139__auto___18266 = arguments.length;
var i__8140__auto___18267 = (0);
while(true){
if((i__8140__auto___18267 < len__8139__auto___18266)){
args18263.push((arguments[i__8140__auto___18267]));

var G__18268 = (i__8140__auto___18267 + (1));
i__8140__auto___18267 = G__18268;
continue;
} else {
}
break;
}

var G__18265 = args18263.length;
switch (G__18265) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18263.length)].join('')));

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
var args18270 = [];
var len__8139__auto___18323 = arguments.length;
var i__8140__auto___18324 = (0);
while(true){
if((i__8140__auto___18324 < len__8139__auto___18323)){
args18270.push((arguments[i__8140__auto___18324]));

var G__18325 = (i__8140__auto___18324 + (1));
i__8140__auto___18324 = G__18325;
continue;
} else {
}
break;
}

var G__18272 = args18270.length;
switch (G__18272) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18270.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17637__auto___18327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___18327,tc,fc){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___18327,tc,fc){
return (function (state_18298){
var state_val_18299 = (state_18298[(1)]);
if((state_val_18299 === (7))){
var inst_18294 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
var statearr_18300_18328 = state_18298__$1;
(statearr_18300_18328[(2)] = inst_18294);

(statearr_18300_18328[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (1))){
var state_18298__$1 = state_18298;
var statearr_18301_18329 = state_18298__$1;
(statearr_18301_18329[(2)] = null);

(statearr_18301_18329[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (4))){
var inst_18275 = (state_18298[(7)]);
var inst_18275__$1 = (state_18298[(2)]);
var inst_18276 = (inst_18275__$1 == null);
var state_18298__$1 = (function (){var statearr_18302 = state_18298;
(statearr_18302[(7)] = inst_18275__$1);

return statearr_18302;
})();
if(cljs.core.truth_(inst_18276)){
var statearr_18303_18330 = state_18298__$1;
(statearr_18303_18330[(1)] = (5));

} else {
var statearr_18304_18331 = state_18298__$1;
(statearr_18304_18331[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (13))){
var state_18298__$1 = state_18298;
var statearr_18305_18332 = state_18298__$1;
(statearr_18305_18332[(2)] = null);

(statearr_18305_18332[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (6))){
var inst_18275 = (state_18298[(7)]);
var inst_18281 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18275) : p.call(null,inst_18275));
var state_18298__$1 = state_18298;
if(cljs.core.truth_(inst_18281)){
var statearr_18306_18333 = state_18298__$1;
(statearr_18306_18333[(1)] = (9));

} else {
var statearr_18307_18334 = state_18298__$1;
(statearr_18307_18334[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (3))){
var inst_18296 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18298__$1,inst_18296);
} else {
if((state_val_18299 === (12))){
var state_18298__$1 = state_18298;
var statearr_18308_18335 = state_18298__$1;
(statearr_18308_18335[(2)] = null);

(statearr_18308_18335[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (2))){
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18298__$1,(4),ch);
} else {
if((state_val_18299 === (11))){
var inst_18275 = (state_18298[(7)]);
var inst_18285 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18298__$1,(8),inst_18285,inst_18275);
} else {
if((state_val_18299 === (9))){
var state_18298__$1 = state_18298;
var statearr_18309_18336 = state_18298__$1;
(statearr_18309_18336[(2)] = tc);

(statearr_18309_18336[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (5))){
var inst_18278 = cljs.core.async.close_BANG_(tc);
var inst_18279 = cljs.core.async.close_BANG_(fc);
var state_18298__$1 = (function (){var statearr_18310 = state_18298;
(statearr_18310[(8)] = inst_18278);

return statearr_18310;
})();
var statearr_18311_18337 = state_18298__$1;
(statearr_18311_18337[(2)] = inst_18279);

(statearr_18311_18337[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (14))){
var inst_18292 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
var statearr_18312_18338 = state_18298__$1;
(statearr_18312_18338[(2)] = inst_18292);

(statearr_18312_18338[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (10))){
var state_18298__$1 = state_18298;
var statearr_18313_18339 = state_18298__$1;
(statearr_18313_18339[(2)] = fc);

(statearr_18313_18339[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18299 === (8))){
var inst_18287 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
if(cljs.core.truth_(inst_18287)){
var statearr_18314_18340 = state_18298__$1;
(statearr_18314_18340[(1)] = (12));

} else {
var statearr_18315_18341 = state_18298__$1;
(statearr_18315_18341[(1)] = (13));

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
});})(c__17637__auto___18327,tc,fc))
;
return ((function (switch__17513__auto__,c__17637__auto___18327,tc,fc){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_18319 = [null,null,null,null,null,null,null,null,null];
(statearr_18319[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_18319[(1)] = (1));

return statearr_18319;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_18298){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18298);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18320){if((e18320 instanceof Object)){
var ex__17517__auto__ = e18320;
var statearr_18321_18342 = state_18298;
(statearr_18321_18342[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18298);

return cljs.core.cst$kw$recur;
} else {
throw e18320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__18343 = state_18298;
state_18298 = G__18343;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_18298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_18298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___18327,tc,fc))
})();
var state__17639__auto__ = (function (){var statearr_18322 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___18327);

return statearr_18322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___18327,tc,fc))
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
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__){
return (function (state_18407){
var state_val_18408 = (state_18407[(1)]);
if((state_val_18408 === (7))){
var inst_18403 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
var statearr_18409_18430 = state_18407__$1;
(statearr_18409_18430[(2)] = inst_18403);

(statearr_18409_18430[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18408 === (1))){
var inst_18387 = init;
var state_18407__$1 = (function (){var statearr_18410 = state_18407;
(statearr_18410[(7)] = inst_18387);

return statearr_18410;
})();
var statearr_18411_18431 = state_18407__$1;
(statearr_18411_18431[(2)] = null);

(statearr_18411_18431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18408 === (4))){
var inst_18390 = (state_18407[(8)]);
var inst_18390__$1 = (state_18407[(2)]);
var inst_18391 = (inst_18390__$1 == null);
var state_18407__$1 = (function (){var statearr_18412 = state_18407;
(statearr_18412[(8)] = inst_18390__$1);

return statearr_18412;
})();
if(cljs.core.truth_(inst_18391)){
var statearr_18413_18432 = state_18407__$1;
(statearr_18413_18432[(1)] = (5));

} else {
var statearr_18414_18433 = state_18407__$1;
(statearr_18414_18433[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18408 === (6))){
var inst_18387 = (state_18407[(7)]);
var inst_18390 = (state_18407[(8)]);
var inst_18394 = (state_18407[(9)]);
var inst_18394__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18387,inst_18390) : f.call(null,inst_18387,inst_18390));
var inst_18395 = cljs.core.reduced_QMARK_(inst_18394__$1);
var state_18407__$1 = (function (){var statearr_18415 = state_18407;
(statearr_18415[(9)] = inst_18394__$1);

return statearr_18415;
})();
if(inst_18395){
var statearr_18416_18434 = state_18407__$1;
(statearr_18416_18434[(1)] = (8));

} else {
var statearr_18417_18435 = state_18407__$1;
(statearr_18417_18435[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18408 === (3))){
var inst_18405 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18407__$1,inst_18405);
} else {
if((state_val_18408 === (2))){
var state_18407__$1 = state_18407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18407__$1,(4),ch);
} else {
if((state_val_18408 === (9))){
var inst_18394 = (state_18407[(9)]);
var inst_18387 = inst_18394;
var state_18407__$1 = (function (){var statearr_18418 = state_18407;
(statearr_18418[(7)] = inst_18387);

return statearr_18418;
})();
var statearr_18419_18436 = state_18407__$1;
(statearr_18419_18436[(2)] = null);

(statearr_18419_18436[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18408 === (5))){
var inst_18387 = (state_18407[(7)]);
var state_18407__$1 = state_18407;
var statearr_18420_18437 = state_18407__$1;
(statearr_18420_18437[(2)] = inst_18387);

(statearr_18420_18437[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18408 === (10))){
var inst_18401 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
var statearr_18421_18438 = state_18407__$1;
(statearr_18421_18438[(2)] = inst_18401);

(statearr_18421_18438[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18408 === (8))){
var inst_18394 = (state_18407[(9)]);
var inst_18397 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_18394) : cljs.core.deref.call(null,inst_18394));
var state_18407__$1 = state_18407;
var statearr_18422_18439 = state_18407__$1;
(statearr_18422_18439[(2)] = inst_18397);

(statearr_18422_18439[(1)] = (10));


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
});})(c__17637__auto__))
;
return ((function (switch__17513__auto__,c__17637__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17514__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17514__auto____0 = (function (){
var statearr_18426 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18426[(0)] = cljs$core$async$reduce_$_state_machine__17514__auto__);

(statearr_18426[(1)] = (1));

return statearr_18426;
});
var cljs$core$async$reduce_$_state_machine__17514__auto____1 = (function (state_18407){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18407);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18427){if((e18427 instanceof Object)){
var ex__17517__auto__ = e18427;
var statearr_18428_18440 = state_18407;
(statearr_18428_18440[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18407);

return cljs.core.cst$kw$recur;
} else {
throw e18427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__18441 = state_18407;
state_18407 = G__18441;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17514__auto__ = function(state_18407){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17514__auto____1.call(this,state_18407);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17514__auto____0;
cljs$core$async$reduce_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17514__auto____1;
return cljs$core$async$reduce_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__))
})();
var state__17639__auto__ = (function (){var statearr_18429 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_18429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__))
);

return c__17637__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__,f__$1){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__,f__$1){
return (function (state_18461){
var state_val_18462 = (state_18461[(1)]);
if((state_val_18462 === (1))){
var inst_18456 = cljs.core.async.reduce(f__$1,init,ch);
var state_18461__$1 = state_18461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18461__$1,(2),inst_18456);
} else {
if((state_val_18462 === (2))){
var inst_18458 = (state_18461[(2)]);
var inst_18459 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18458) : f__$1.call(null,inst_18458));
var state_18461__$1 = state_18461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18461__$1,inst_18459);
} else {
return null;
}
}
});})(c__17637__auto__,f__$1))
;
return ((function (switch__17513__auto__,c__17637__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17514__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17514__auto____0 = (function (){
var statearr_18466 = [null,null,null,null,null,null,null];
(statearr_18466[(0)] = cljs$core$async$transduce_$_state_machine__17514__auto__);

(statearr_18466[(1)] = (1));

return statearr_18466;
});
var cljs$core$async$transduce_$_state_machine__17514__auto____1 = (function (state_18461){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18461);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18467){if((e18467 instanceof Object)){
var ex__17517__auto__ = e18467;
var statearr_18468_18470 = state_18461;
(statearr_18468_18470[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18461);

return cljs.core.cst$kw$recur;
} else {
throw e18467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__18471 = state_18461;
state_18461 = G__18471;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17514__auto__ = function(state_18461){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17514__auto____1.call(this,state_18461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17514__auto____0;
cljs$core$async$transduce_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17514__auto____1;
return cljs$core$async$transduce_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__,f__$1))
})();
var state__17639__auto__ = (function (){var statearr_18469 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_18469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__,f__$1))
);

return c__17637__auto__;
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
var args18472 = [];
var len__8139__auto___18524 = arguments.length;
var i__8140__auto___18525 = (0);
while(true){
if((i__8140__auto___18525 < len__8139__auto___18524)){
args18472.push((arguments[i__8140__auto___18525]));

var G__18526 = (i__8140__auto___18525 + (1));
i__8140__auto___18525 = G__18526;
continue;
} else {
}
break;
}

var G__18474 = args18472.length;
switch (G__18474) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18472.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__){
return (function (state_18499){
var state_val_18500 = (state_18499[(1)]);
if((state_val_18500 === (7))){
var inst_18481 = (state_18499[(2)]);
var state_18499__$1 = state_18499;
var statearr_18501_18528 = state_18499__$1;
(statearr_18501_18528[(2)] = inst_18481);

(statearr_18501_18528[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (1))){
var inst_18475 = cljs.core.seq(coll);
var inst_18476 = inst_18475;
var state_18499__$1 = (function (){var statearr_18502 = state_18499;
(statearr_18502[(7)] = inst_18476);

return statearr_18502;
})();
var statearr_18503_18529 = state_18499__$1;
(statearr_18503_18529[(2)] = null);

(statearr_18503_18529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (4))){
var inst_18476 = (state_18499[(7)]);
var inst_18479 = cljs.core.first(inst_18476);
var state_18499__$1 = state_18499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18499__$1,(7),ch,inst_18479);
} else {
if((state_val_18500 === (13))){
var inst_18493 = (state_18499[(2)]);
var state_18499__$1 = state_18499;
var statearr_18504_18530 = state_18499__$1;
(statearr_18504_18530[(2)] = inst_18493);

(statearr_18504_18530[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (6))){
var inst_18484 = (state_18499[(2)]);
var state_18499__$1 = state_18499;
if(cljs.core.truth_(inst_18484)){
var statearr_18505_18531 = state_18499__$1;
(statearr_18505_18531[(1)] = (8));

} else {
var statearr_18506_18532 = state_18499__$1;
(statearr_18506_18532[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (3))){
var inst_18497 = (state_18499[(2)]);
var state_18499__$1 = state_18499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18499__$1,inst_18497);
} else {
if((state_val_18500 === (12))){
var state_18499__$1 = state_18499;
var statearr_18507_18533 = state_18499__$1;
(statearr_18507_18533[(2)] = null);

(statearr_18507_18533[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (2))){
var inst_18476 = (state_18499[(7)]);
var state_18499__$1 = state_18499;
if(cljs.core.truth_(inst_18476)){
var statearr_18508_18534 = state_18499__$1;
(statearr_18508_18534[(1)] = (4));

} else {
var statearr_18509_18535 = state_18499__$1;
(statearr_18509_18535[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (11))){
var inst_18490 = cljs.core.async.close_BANG_(ch);
var state_18499__$1 = state_18499;
var statearr_18510_18536 = state_18499__$1;
(statearr_18510_18536[(2)] = inst_18490);

(statearr_18510_18536[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (9))){
var state_18499__$1 = state_18499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18511_18537 = state_18499__$1;
(statearr_18511_18537[(1)] = (11));

} else {
var statearr_18512_18538 = state_18499__$1;
(statearr_18512_18538[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (5))){
var inst_18476 = (state_18499[(7)]);
var state_18499__$1 = state_18499;
var statearr_18513_18539 = state_18499__$1;
(statearr_18513_18539[(2)] = inst_18476);

(statearr_18513_18539[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (10))){
var inst_18495 = (state_18499[(2)]);
var state_18499__$1 = state_18499;
var statearr_18514_18540 = state_18499__$1;
(statearr_18514_18540[(2)] = inst_18495);

(statearr_18514_18540[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18500 === (8))){
var inst_18476 = (state_18499[(7)]);
var inst_18486 = cljs.core.next(inst_18476);
var inst_18476__$1 = inst_18486;
var state_18499__$1 = (function (){var statearr_18515 = state_18499;
(statearr_18515[(7)] = inst_18476__$1);

return statearr_18515;
})();
var statearr_18516_18541 = state_18499__$1;
(statearr_18516_18541[(2)] = null);

(statearr_18516_18541[(1)] = (2));


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
});})(c__17637__auto__))
;
return ((function (switch__17513__auto__,c__17637__auto__){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_18520 = [null,null,null,null,null,null,null,null];
(statearr_18520[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_18520[(1)] = (1));

return statearr_18520;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_18499){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18499);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18521){if((e18521 instanceof Object)){
var ex__17517__auto__ = e18521;
var statearr_18522_18542 = state_18499;
(statearr_18522_18542[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18499);

return cljs.core.cst$kw$recur;
} else {
throw e18521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__18543 = state_18499;
state_18499 = G__18543;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_18499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_18499);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__))
})();
var state__17639__auto__ = (function (){var statearr_18523 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_18523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__))
);

return c__17637__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7694__auto__ = (((_ == null))?null:_);
var m__7695__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7695__auto__.call(null,_));
} else {
var m__7695__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7695__auto____$1.call(null,_));
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7694__auto__ = (((m == null))?null:m);
var m__7695__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7695__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7695__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7695__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7694__auto__ = (((m == null))?null:m);
var m__7695__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7695__auto__.call(null,m,ch));
} else {
var m__7695__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7695__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7694__auto__ = (((m == null))?null:m);
var m__7695__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7695__auto__.call(null,m));
} else {
var m__7695__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7695__auto____$1.call(null,m));
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
var cs = (function (){var G__18772 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18772) : cljs.core.atom.call(null,G__18772));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18773 = (function (ch,cs,meta18774){
this.ch = ch;
this.cs = cs;
this.meta18774 = meta18774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18775,meta18774__$1){
var self__ = this;
var _18775__$1 = this;
return (new cljs.core.async.t_cljs$core$async18773(self__.ch,self__.cs,meta18774__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18775){
var self__ = this;
var _18775__$1 = this;
return self__.meta18774;
});})(cs))
;

cljs.core.async.t_cljs$core$async18773.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18773.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18773.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18773.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18773.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18776_19000 = self__.cs;
var G__18777_19001 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18776_19000,G__18777_19001) : cljs.core.reset_BANG_.call(null,G__18776_19000,G__18777_19001));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18773.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18774], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18773";

cljs.core.async.t_cljs$core$async18773.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async18773");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18773 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18773(ch__$1,cs__$1,meta18774){
return (new cljs.core.async.t_cljs$core$async18773(ch__$1,cs__$1,meta18774));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18773(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17637__auto___19002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___19002,cs,m,dchan,dctr,done){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___19002,cs,m,dchan,dctr,done){
return (function (state_18912){
var state_val_18913 = (state_18912[(1)]);
if((state_val_18913 === (7))){
var inst_18908 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18914_19003 = state_18912__$1;
(statearr_18914_19003[(2)] = inst_18908);

(statearr_18914_19003[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (20))){
var inst_18811 = (state_18912[(7)]);
var inst_18823 = cljs.core.first(inst_18811);
var inst_18824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18823,(0),null);
var inst_18825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18823,(1),null);
var state_18912__$1 = (function (){var statearr_18915 = state_18912;
(statearr_18915[(8)] = inst_18824);

return statearr_18915;
})();
if(cljs.core.truth_(inst_18825)){
var statearr_18916_19004 = state_18912__$1;
(statearr_18916_19004[(1)] = (22));

} else {
var statearr_18917_19005 = state_18912__$1;
(statearr_18917_19005[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (27))){
var inst_18853 = (state_18912[(9)]);
var inst_18860 = (state_18912[(10)]);
var inst_18780 = (state_18912[(11)]);
var inst_18855 = (state_18912[(12)]);
var inst_18860__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18853,inst_18855);
var inst_18861 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18860__$1,inst_18780,done);
var state_18912__$1 = (function (){var statearr_18918 = state_18912;
(statearr_18918[(10)] = inst_18860__$1);

return statearr_18918;
})();
if(cljs.core.truth_(inst_18861)){
var statearr_18919_19006 = state_18912__$1;
(statearr_18919_19006[(1)] = (30));

} else {
var statearr_18920_19007 = state_18912__$1;
(statearr_18920_19007[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (1))){
var state_18912__$1 = state_18912;
var statearr_18921_19008 = state_18912__$1;
(statearr_18921_19008[(2)] = null);

(statearr_18921_19008[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (24))){
var inst_18811 = (state_18912[(7)]);
var inst_18830 = (state_18912[(2)]);
var inst_18831 = cljs.core.next(inst_18811);
var inst_18789 = inst_18831;
var inst_18790 = null;
var inst_18791 = (0);
var inst_18792 = (0);
var state_18912__$1 = (function (){var statearr_18922 = state_18912;
(statearr_18922[(13)] = inst_18789);

(statearr_18922[(14)] = inst_18830);

(statearr_18922[(15)] = inst_18790);

(statearr_18922[(16)] = inst_18792);

(statearr_18922[(17)] = inst_18791);

return statearr_18922;
})();
var statearr_18923_19009 = state_18912__$1;
(statearr_18923_19009[(2)] = null);

(statearr_18923_19009[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (39))){
var state_18912__$1 = state_18912;
var statearr_18927_19010 = state_18912__$1;
(statearr_18927_19010[(2)] = null);

(statearr_18927_19010[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (4))){
var inst_18780 = (state_18912[(11)]);
var inst_18780__$1 = (state_18912[(2)]);
var inst_18781 = (inst_18780__$1 == null);
var state_18912__$1 = (function (){var statearr_18928 = state_18912;
(statearr_18928[(11)] = inst_18780__$1);

return statearr_18928;
})();
if(cljs.core.truth_(inst_18781)){
var statearr_18929_19011 = state_18912__$1;
(statearr_18929_19011[(1)] = (5));

} else {
var statearr_18930_19012 = state_18912__$1;
(statearr_18930_19012[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (15))){
var inst_18789 = (state_18912[(13)]);
var inst_18790 = (state_18912[(15)]);
var inst_18792 = (state_18912[(16)]);
var inst_18791 = (state_18912[(17)]);
var inst_18807 = (state_18912[(2)]);
var inst_18808 = (inst_18792 + (1));
var tmp18924 = inst_18789;
var tmp18925 = inst_18790;
var tmp18926 = inst_18791;
var inst_18789__$1 = tmp18924;
var inst_18790__$1 = tmp18925;
var inst_18791__$1 = tmp18926;
var inst_18792__$1 = inst_18808;
var state_18912__$1 = (function (){var statearr_18931 = state_18912;
(statearr_18931[(13)] = inst_18789__$1);

(statearr_18931[(15)] = inst_18790__$1);

(statearr_18931[(16)] = inst_18792__$1);

(statearr_18931[(18)] = inst_18807);

(statearr_18931[(17)] = inst_18791__$1);

return statearr_18931;
})();
var statearr_18932_19013 = state_18912__$1;
(statearr_18932_19013[(2)] = null);

(statearr_18932_19013[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (21))){
var inst_18834 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18936_19014 = state_18912__$1;
(statearr_18936_19014[(2)] = inst_18834);

(statearr_18936_19014[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (31))){
var inst_18860 = (state_18912[(10)]);
var inst_18864 = done(null);
var inst_18865 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18860);
var state_18912__$1 = (function (){var statearr_18937 = state_18912;
(statearr_18937[(19)] = inst_18864);

return statearr_18937;
})();
var statearr_18938_19015 = state_18912__$1;
(statearr_18938_19015[(2)] = inst_18865);

(statearr_18938_19015[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (32))){
var inst_18853 = (state_18912[(9)]);
var inst_18852 = (state_18912[(20)]);
var inst_18854 = (state_18912[(21)]);
var inst_18855 = (state_18912[(12)]);
var inst_18867 = (state_18912[(2)]);
var inst_18868 = (inst_18855 + (1));
var tmp18933 = inst_18853;
var tmp18934 = inst_18852;
var tmp18935 = inst_18854;
var inst_18852__$1 = tmp18934;
var inst_18853__$1 = tmp18933;
var inst_18854__$1 = tmp18935;
var inst_18855__$1 = inst_18868;
var state_18912__$1 = (function (){var statearr_18939 = state_18912;
(statearr_18939[(9)] = inst_18853__$1);

(statearr_18939[(20)] = inst_18852__$1);

(statearr_18939[(21)] = inst_18854__$1);

(statearr_18939[(12)] = inst_18855__$1);

(statearr_18939[(22)] = inst_18867);

return statearr_18939;
})();
var statearr_18940_19016 = state_18912__$1;
(statearr_18940_19016[(2)] = null);

(statearr_18940_19016[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (40))){
var inst_18880 = (state_18912[(23)]);
var inst_18884 = done(null);
var inst_18885 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18880);
var state_18912__$1 = (function (){var statearr_18941 = state_18912;
(statearr_18941[(24)] = inst_18884);

return statearr_18941;
})();
var statearr_18942_19017 = state_18912__$1;
(statearr_18942_19017[(2)] = inst_18885);

(statearr_18942_19017[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (33))){
var inst_18871 = (state_18912[(25)]);
var inst_18873 = cljs.core.chunked_seq_QMARK_(inst_18871);
var state_18912__$1 = state_18912;
if(inst_18873){
var statearr_18943_19018 = state_18912__$1;
(statearr_18943_19018[(1)] = (36));

} else {
var statearr_18944_19019 = state_18912__$1;
(statearr_18944_19019[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (13))){
var inst_18801 = (state_18912[(26)]);
var inst_18804 = cljs.core.async.close_BANG_(inst_18801);
var state_18912__$1 = state_18912;
var statearr_18945_19020 = state_18912__$1;
(statearr_18945_19020[(2)] = inst_18804);

(statearr_18945_19020[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (22))){
var inst_18824 = (state_18912[(8)]);
var inst_18827 = cljs.core.async.close_BANG_(inst_18824);
var state_18912__$1 = state_18912;
var statearr_18946_19021 = state_18912__$1;
(statearr_18946_19021[(2)] = inst_18827);

(statearr_18946_19021[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (36))){
var inst_18871 = (state_18912[(25)]);
var inst_18875 = cljs.core.chunk_first(inst_18871);
var inst_18876 = cljs.core.chunk_rest(inst_18871);
var inst_18877 = cljs.core.count(inst_18875);
var inst_18852 = inst_18876;
var inst_18853 = inst_18875;
var inst_18854 = inst_18877;
var inst_18855 = (0);
var state_18912__$1 = (function (){var statearr_18947 = state_18912;
(statearr_18947[(9)] = inst_18853);

(statearr_18947[(20)] = inst_18852);

(statearr_18947[(21)] = inst_18854);

(statearr_18947[(12)] = inst_18855);

return statearr_18947;
})();
var statearr_18948_19022 = state_18912__$1;
(statearr_18948_19022[(2)] = null);

(statearr_18948_19022[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (41))){
var inst_18871 = (state_18912[(25)]);
var inst_18887 = (state_18912[(2)]);
var inst_18888 = cljs.core.next(inst_18871);
var inst_18852 = inst_18888;
var inst_18853 = null;
var inst_18854 = (0);
var inst_18855 = (0);
var state_18912__$1 = (function (){var statearr_18949 = state_18912;
(statearr_18949[(9)] = inst_18853);

(statearr_18949[(20)] = inst_18852);

(statearr_18949[(21)] = inst_18854);

(statearr_18949[(12)] = inst_18855);

(statearr_18949[(27)] = inst_18887);

return statearr_18949;
})();
var statearr_18950_19023 = state_18912__$1;
(statearr_18950_19023[(2)] = null);

(statearr_18950_19023[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (43))){
var state_18912__$1 = state_18912;
var statearr_18951_19024 = state_18912__$1;
(statearr_18951_19024[(2)] = null);

(statearr_18951_19024[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (29))){
var inst_18896 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18952_19025 = state_18912__$1;
(statearr_18952_19025[(2)] = inst_18896);

(statearr_18952_19025[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (44))){
var inst_18905 = (state_18912[(2)]);
var state_18912__$1 = (function (){var statearr_18953 = state_18912;
(statearr_18953[(28)] = inst_18905);

return statearr_18953;
})();
var statearr_18954_19026 = state_18912__$1;
(statearr_18954_19026[(2)] = null);

(statearr_18954_19026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (6))){
var inst_18844 = (state_18912[(29)]);
var inst_18843 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18844__$1 = cljs.core.keys(inst_18843);
var inst_18845 = cljs.core.count(inst_18844__$1);
var inst_18846 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_18845) : cljs.core.reset_BANG_.call(null,dctr,inst_18845));
var inst_18851 = cljs.core.seq(inst_18844__$1);
var inst_18852 = inst_18851;
var inst_18853 = null;
var inst_18854 = (0);
var inst_18855 = (0);
var state_18912__$1 = (function (){var statearr_18955 = state_18912;
(statearr_18955[(9)] = inst_18853);

(statearr_18955[(30)] = inst_18846);

(statearr_18955[(20)] = inst_18852);

(statearr_18955[(21)] = inst_18854);

(statearr_18955[(29)] = inst_18844__$1);

(statearr_18955[(12)] = inst_18855);

return statearr_18955;
})();
var statearr_18956_19027 = state_18912__$1;
(statearr_18956_19027[(2)] = null);

(statearr_18956_19027[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (28))){
var inst_18852 = (state_18912[(20)]);
var inst_18871 = (state_18912[(25)]);
var inst_18871__$1 = cljs.core.seq(inst_18852);
var state_18912__$1 = (function (){var statearr_18957 = state_18912;
(statearr_18957[(25)] = inst_18871__$1);

return statearr_18957;
})();
if(inst_18871__$1){
var statearr_18958_19028 = state_18912__$1;
(statearr_18958_19028[(1)] = (33));

} else {
var statearr_18959_19029 = state_18912__$1;
(statearr_18959_19029[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (25))){
var inst_18854 = (state_18912[(21)]);
var inst_18855 = (state_18912[(12)]);
var inst_18857 = (inst_18855 < inst_18854);
var inst_18858 = inst_18857;
var state_18912__$1 = state_18912;
if(cljs.core.truth_(inst_18858)){
var statearr_18960_19030 = state_18912__$1;
(statearr_18960_19030[(1)] = (27));

} else {
var statearr_18961_19031 = state_18912__$1;
(statearr_18961_19031[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (34))){
var state_18912__$1 = state_18912;
var statearr_18962_19032 = state_18912__$1;
(statearr_18962_19032[(2)] = null);

(statearr_18962_19032[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (17))){
var state_18912__$1 = state_18912;
var statearr_18963_19033 = state_18912__$1;
(statearr_18963_19033[(2)] = null);

(statearr_18963_19033[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (3))){
var inst_18910 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18912__$1,inst_18910);
} else {
if((state_val_18913 === (12))){
var inst_18839 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18964_19034 = state_18912__$1;
(statearr_18964_19034[(2)] = inst_18839);

(statearr_18964_19034[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (2))){
var state_18912__$1 = state_18912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18912__$1,(4),ch);
} else {
if((state_val_18913 === (23))){
var state_18912__$1 = state_18912;
var statearr_18965_19035 = state_18912__$1;
(statearr_18965_19035[(2)] = null);

(statearr_18965_19035[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (35))){
var inst_18894 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18966_19036 = state_18912__$1;
(statearr_18966_19036[(2)] = inst_18894);

(statearr_18966_19036[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (19))){
var inst_18811 = (state_18912[(7)]);
var inst_18815 = cljs.core.chunk_first(inst_18811);
var inst_18816 = cljs.core.chunk_rest(inst_18811);
var inst_18817 = cljs.core.count(inst_18815);
var inst_18789 = inst_18816;
var inst_18790 = inst_18815;
var inst_18791 = inst_18817;
var inst_18792 = (0);
var state_18912__$1 = (function (){var statearr_18967 = state_18912;
(statearr_18967[(13)] = inst_18789);

(statearr_18967[(15)] = inst_18790);

(statearr_18967[(16)] = inst_18792);

(statearr_18967[(17)] = inst_18791);

return statearr_18967;
})();
var statearr_18968_19037 = state_18912__$1;
(statearr_18968_19037[(2)] = null);

(statearr_18968_19037[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (11))){
var inst_18789 = (state_18912[(13)]);
var inst_18811 = (state_18912[(7)]);
var inst_18811__$1 = cljs.core.seq(inst_18789);
var state_18912__$1 = (function (){var statearr_18969 = state_18912;
(statearr_18969[(7)] = inst_18811__$1);

return statearr_18969;
})();
if(inst_18811__$1){
var statearr_18970_19038 = state_18912__$1;
(statearr_18970_19038[(1)] = (16));

} else {
var statearr_18971_19039 = state_18912__$1;
(statearr_18971_19039[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (9))){
var inst_18841 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18972_19040 = state_18912__$1;
(statearr_18972_19040[(2)] = inst_18841);

(statearr_18972_19040[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (5))){
var inst_18787 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18788 = cljs.core.seq(inst_18787);
var inst_18789 = inst_18788;
var inst_18790 = null;
var inst_18791 = (0);
var inst_18792 = (0);
var state_18912__$1 = (function (){var statearr_18973 = state_18912;
(statearr_18973[(13)] = inst_18789);

(statearr_18973[(15)] = inst_18790);

(statearr_18973[(16)] = inst_18792);

(statearr_18973[(17)] = inst_18791);

return statearr_18973;
})();
var statearr_18974_19041 = state_18912__$1;
(statearr_18974_19041[(2)] = null);

(statearr_18974_19041[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (14))){
var state_18912__$1 = state_18912;
var statearr_18975_19042 = state_18912__$1;
(statearr_18975_19042[(2)] = null);

(statearr_18975_19042[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (45))){
var inst_18902 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18976_19043 = state_18912__$1;
(statearr_18976_19043[(2)] = inst_18902);

(statearr_18976_19043[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (26))){
var inst_18844 = (state_18912[(29)]);
var inst_18898 = (state_18912[(2)]);
var inst_18899 = cljs.core.seq(inst_18844);
var state_18912__$1 = (function (){var statearr_18977 = state_18912;
(statearr_18977[(31)] = inst_18898);

return statearr_18977;
})();
if(inst_18899){
var statearr_18978_19044 = state_18912__$1;
(statearr_18978_19044[(1)] = (42));

} else {
var statearr_18979_19045 = state_18912__$1;
(statearr_18979_19045[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (16))){
var inst_18811 = (state_18912[(7)]);
var inst_18813 = cljs.core.chunked_seq_QMARK_(inst_18811);
var state_18912__$1 = state_18912;
if(inst_18813){
var statearr_18980_19046 = state_18912__$1;
(statearr_18980_19046[(1)] = (19));

} else {
var statearr_18981_19047 = state_18912__$1;
(statearr_18981_19047[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (38))){
var inst_18891 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18982_19048 = state_18912__$1;
(statearr_18982_19048[(2)] = inst_18891);

(statearr_18982_19048[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (30))){
var state_18912__$1 = state_18912;
var statearr_18983_19049 = state_18912__$1;
(statearr_18983_19049[(2)] = null);

(statearr_18983_19049[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (10))){
var inst_18790 = (state_18912[(15)]);
var inst_18792 = (state_18912[(16)]);
var inst_18800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18790,inst_18792);
var inst_18801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18800,(0),null);
var inst_18802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18800,(1),null);
var state_18912__$1 = (function (){var statearr_18984 = state_18912;
(statearr_18984[(26)] = inst_18801);

return statearr_18984;
})();
if(cljs.core.truth_(inst_18802)){
var statearr_18985_19050 = state_18912__$1;
(statearr_18985_19050[(1)] = (13));

} else {
var statearr_18986_19051 = state_18912__$1;
(statearr_18986_19051[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (18))){
var inst_18837 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18987_19052 = state_18912__$1;
(statearr_18987_19052[(2)] = inst_18837);

(statearr_18987_19052[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (42))){
var state_18912__$1 = state_18912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18912__$1,(45),dchan);
} else {
if((state_val_18913 === (37))){
var inst_18780 = (state_18912[(11)]);
var inst_18871 = (state_18912[(25)]);
var inst_18880 = (state_18912[(23)]);
var inst_18880__$1 = cljs.core.first(inst_18871);
var inst_18881 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18880__$1,inst_18780,done);
var state_18912__$1 = (function (){var statearr_18988 = state_18912;
(statearr_18988[(23)] = inst_18880__$1);

return statearr_18988;
})();
if(cljs.core.truth_(inst_18881)){
var statearr_18989_19053 = state_18912__$1;
(statearr_18989_19053[(1)] = (39));

} else {
var statearr_18990_19054 = state_18912__$1;
(statearr_18990_19054[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18913 === (8))){
var inst_18792 = (state_18912[(16)]);
var inst_18791 = (state_18912[(17)]);
var inst_18794 = (inst_18792 < inst_18791);
var inst_18795 = inst_18794;
var state_18912__$1 = state_18912;
if(cljs.core.truth_(inst_18795)){
var statearr_18991_19055 = state_18912__$1;
(statearr_18991_19055[(1)] = (10));

} else {
var statearr_18992_19056 = state_18912__$1;
(statearr_18992_19056[(1)] = (11));

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
});})(c__17637__auto___19002,cs,m,dchan,dctr,done))
;
return ((function (switch__17513__auto__,c__17637__auto___19002,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17514__auto__ = null;
var cljs$core$async$mult_$_state_machine__17514__auto____0 = (function (){
var statearr_18996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18996[(0)] = cljs$core$async$mult_$_state_machine__17514__auto__);

(statearr_18996[(1)] = (1));

return statearr_18996;
});
var cljs$core$async$mult_$_state_machine__17514__auto____1 = (function (state_18912){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_18912);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e18997){if((e18997 instanceof Object)){
var ex__17517__auto__ = e18997;
var statearr_18998_19057 = state_18912;
(statearr_18998_19057[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18912);

return cljs.core.cst$kw$recur;
} else {
throw e18997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__19058 = state_18912;
state_18912 = G__19058;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17514__auto__ = function(state_18912){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17514__auto____1.call(this,state_18912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17514__auto____0;
cljs$core$async$mult_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17514__auto____1;
return cljs$core$async$mult_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___19002,cs,m,dchan,dctr,done))
})();
var state__17639__auto__ = (function (){var statearr_18999 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_18999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___19002);

return statearr_18999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___19002,cs,m,dchan,dctr,done))
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
var args19059 = [];
var len__8139__auto___19062 = arguments.length;
var i__8140__auto___19063 = (0);
while(true){
if((i__8140__auto___19063 < len__8139__auto___19062)){
args19059.push((arguments[i__8140__auto___19063]));

var G__19064 = (i__8140__auto___19063 + (1));
i__8140__auto___19063 = G__19064;
continue;
} else {
}
break;
}

var G__19061 = args19059.length;
switch (G__19061) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19059.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7694__auto__ = (((m == null))?null:m);
var m__7695__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7695__auto__.call(null,m,ch));
} else {
var m__7695__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7695__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7694__auto__ = (((m == null))?null:m);
var m__7695__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7695__auto__.call(null,m,ch));
} else {
var m__7695__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7695__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7694__auto__ = (((m == null))?null:m);
var m__7695__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7695__auto__.call(null,m));
} else {
var m__7695__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7695__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7694__auto__ = (((m == null))?null:m);
var m__7695__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7695__auto__.call(null,m,state_map));
} else {
var m__7695__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7695__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7694__auto__ = (((m == null))?null:m);
var m__7695__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7695__auto__.call(null,m,mode));
} else {
var m__7695__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7695__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8146__auto__ = [];
var len__8139__auto___19076 = arguments.length;
var i__8140__auto___19077 = (0);
while(true){
if((i__8140__auto___19077 < len__8139__auto___19076)){
args__8146__auto__.push((arguments[i__8140__auto___19077]));

var G__19078 = (i__8140__auto___19077 + (1));
i__8140__auto___19077 = G__19078;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((3) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8147__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19070){
var map__19071 = p__19070;
var map__19071__$1 = ((((!((map__19071 == null)))?((((map__19071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19071):map__19071);
var opts = map__19071__$1;
var statearr_19073_19079 = state;
(statearr_19073_19079[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__19071,map__19071__$1,opts){
return (function (val){
var statearr_19074_19080 = state;
(statearr_19074_19080[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19071,map__19071__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_19075_19081 = state;
(statearr_19075_19081[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19066){
var G__19067 = cljs.core.first(seq19066);
var seq19066__$1 = cljs.core.next(seq19066);
var G__19068 = cljs.core.first(seq19066__$1);
var seq19066__$2 = cljs.core.next(seq19066__$1);
var G__19069 = cljs.core.first(seq19066__$2);
var seq19066__$3 = cljs.core.next(seq19066__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19067,G__19068,G__19069,seq19066__$3);
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
var cs = (function (){var G__19253 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19253) : cljs.core.atom.call(null,G__19253));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__19254 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19254) : cljs.core.atom.call(null,G__19254));
})();
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
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19255 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19256){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19256 = meta19256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19257,meta19256__$1){
var self__ = this;
var _19257__$1 = this;
return (new cljs.core.async.t_cljs$core$async19255(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19256__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19257){
var self__ = this;
var _19257__$1 = this;
return self__.meta19256;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19258_19424 = self__.cs;
var G__19259_19425 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19258_19424,G__19259_19425) : cljs.core.reset_BANG_.call(null,G__19258_19424,G__19259_19425));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19255.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19255.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta19256], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19255";

cljs.core.async.t_cljs$core$async19255.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async19255");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19255 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19255(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19256){
return (new cljs.core.async.t_cljs$core$async19255(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19256));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19255(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17637__auto___19426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___19426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___19426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19361){
var state_val_19362 = (state_19361[(1)]);
if((state_val_19362 === (7))){
var inst_19276 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
var statearr_19363_19427 = state_19361__$1;
(statearr_19363_19427[(2)] = inst_19276);

(statearr_19363_19427[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (20))){
var inst_19288 = (state_19361[(7)]);
var state_19361__$1 = state_19361;
var statearr_19364_19428 = state_19361__$1;
(statearr_19364_19428[(2)] = inst_19288);

(statearr_19364_19428[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (27))){
var state_19361__$1 = state_19361;
var statearr_19365_19429 = state_19361__$1;
(statearr_19365_19429[(2)] = null);

(statearr_19365_19429[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (1))){
var inst_19263 = (state_19361[(8)]);
var inst_19263__$1 = calc_state();
var inst_19265 = (inst_19263__$1 == null);
var inst_19266 = cljs.core.not(inst_19265);
var state_19361__$1 = (function (){var statearr_19366 = state_19361;
(statearr_19366[(8)] = inst_19263__$1);

return statearr_19366;
})();
if(inst_19266){
var statearr_19367_19430 = state_19361__$1;
(statearr_19367_19430[(1)] = (2));

} else {
var statearr_19368_19431 = state_19361__$1;
(statearr_19368_19431[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (24))){
var inst_19321 = (state_19361[(9)]);
var inst_19312 = (state_19361[(10)]);
var inst_19335 = (state_19361[(11)]);
var inst_19335__$1 = (inst_19312.cljs$core$IFn$_invoke$arity$1 ? inst_19312.cljs$core$IFn$_invoke$arity$1(inst_19321) : inst_19312.call(null,inst_19321));
var state_19361__$1 = (function (){var statearr_19369 = state_19361;
(statearr_19369[(11)] = inst_19335__$1);

return statearr_19369;
})();
if(cljs.core.truth_(inst_19335__$1)){
var statearr_19370_19432 = state_19361__$1;
(statearr_19370_19432[(1)] = (29));

} else {
var statearr_19371_19433 = state_19361__$1;
(statearr_19371_19433[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (4))){
var inst_19279 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
if(cljs.core.truth_(inst_19279)){
var statearr_19372_19434 = state_19361__$1;
(statearr_19372_19434[(1)] = (8));

} else {
var statearr_19373_19435 = state_19361__$1;
(statearr_19373_19435[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (15))){
var inst_19306 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
if(cljs.core.truth_(inst_19306)){
var statearr_19374_19436 = state_19361__$1;
(statearr_19374_19436[(1)] = (19));

} else {
var statearr_19375_19437 = state_19361__$1;
(statearr_19375_19437[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (21))){
var inst_19311 = (state_19361[(12)]);
var inst_19311__$1 = (state_19361[(2)]);
var inst_19312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19311__$1,cljs.core.cst$kw$solos);
var inst_19313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19311__$1,cljs.core.cst$kw$mutes);
var inst_19314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19311__$1,cljs.core.cst$kw$reads);
var state_19361__$1 = (function (){var statearr_19376 = state_19361;
(statearr_19376[(12)] = inst_19311__$1);

(statearr_19376[(13)] = inst_19313);

(statearr_19376[(10)] = inst_19312);

return statearr_19376;
})();
return cljs.core.async.ioc_alts_BANG_(state_19361__$1,(22),inst_19314);
} else {
if((state_val_19362 === (31))){
var inst_19343 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
if(cljs.core.truth_(inst_19343)){
var statearr_19377_19438 = state_19361__$1;
(statearr_19377_19438[(1)] = (32));

} else {
var statearr_19378_19439 = state_19361__$1;
(statearr_19378_19439[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (32))){
var inst_19320 = (state_19361[(14)]);
var state_19361__$1 = state_19361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19361__$1,(35),out,inst_19320);
} else {
if((state_val_19362 === (33))){
var inst_19311 = (state_19361[(12)]);
var inst_19288 = inst_19311;
var state_19361__$1 = (function (){var statearr_19379 = state_19361;
(statearr_19379[(7)] = inst_19288);

return statearr_19379;
})();
var statearr_19380_19440 = state_19361__$1;
(statearr_19380_19440[(2)] = null);

(statearr_19380_19440[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (13))){
var inst_19288 = (state_19361[(7)]);
var inst_19295 = inst_19288.cljs$lang$protocol_mask$partition0$;
var inst_19296 = (inst_19295 & (64));
var inst_19297 = inst_19288.cljs$core$ISeq$;
var inst_19298 = (cljs.core.PROTOCOL_SENTINEL === inst_19297);
var inst_19299 = (inst_19296) || (inst_19298);
var state_19361__$1 = state_19361;
if(cljs.core.truth_(inst_19299)){
var statearr_19381_19441 = state_19361__$1;
(statearr_19381_19441[(1)] = (16));

} else {
var statearr_19382_19442 = state_19361__$1;
(statearr_19382_19442[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (22))){
var inst_19321 = (state_19361[(9)]);
var inst_19320 = (state_19361[(14)]);
var inst_19319 = (state_19361[(2)]);
var inst_19320__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19319,(0),null);
var inst_19321__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19319,(1),null);
var inst_19322 = (inst_19320__$1 == null);
var inst_19323 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19321__$1,change);
var inst_19324 = (inst_19322) || (inst_19323);
var state_19361__$1 = (function (){var statearr_19383 = state_19361;
(statearr_19383[(9)] = inst_19321__$1);

(statearr_19383[(14)] = inst_19320__$1);

return statearr_19383;
})();
if(cljs.core.truth_(inst_19324)){
var statearr_19384_19443 = state_19361__$1;
(statearr_19384_19443[(1)] = (23));

} else {
var statearr_19385_19444 = state_19361__$1;
(statearr_19385_19444[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (36))){
var inst_19311 = (state_19361[(12)]);
var inst_19288 = inst_19311;
var state_19361__$1 = (function (){var statearr_19386 = state_19361;
(statearr_19386[(7)] = inst_19288);

return statearr_19386;
})();
var statearr_19387_19445 = state_19361__$1;
(statearr_19387_19445[(2)] = null);

(statearr_19387_19445[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (29))){
var inst_19335 = (state_19361[(11)]);
var state_19361__$1 = state_19361;
var statearr_19388_19446 = state_19361__$1;
(statearr_19388_19446[(2)] = inst_19335);

(statearr_19388_19446[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (6))){
var state_19361__$1 = state_19361;
var statearr_19389_19447 = state_19361__$1;
(statearr_19389_19447[(2)] = false);

(statearr_19389_19447[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (28))){
var inst_19331 = (state_19361[(2)]);
var inst_19332 = calc_state();
var inst_19288 = inst_19332;
var state_19361__$1 = (function (){var statearr_19390 = state_19361;
(statearr_19390[(15)] = inst_19331);

(statearr_19390[(7)] = inst_19288);

return statearr_19390;
})();
var statearr_19391_19448 = state_19361__$1;
(statearr_19391_19448[(2)] = null);

(statearr_19391_19448[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (25))){
var inst_19357 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
var statearr_19392_19449 = state_19361__$1;
(statearr_19392_19449[(2)] = inst_19357);

(statearr_19392_19449[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (34))){
var inst_19355 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
var statearr_19393_19450 = state_19361__$1;
(statearr_19393_19450[(2)] = inst_19355);

(statearr_19393_19450[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (17))){
var state_19361__$1 = state_19361;
var statearr_19394_19451 = state_19361__$1;
(statearr_19394_19451[(2)] = false);

(statearr_19394_19451[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (3))){
var state_19361__$1 = state_19361;
var statearr_19395_19452 = state_19361__$1;
(statearr_19395_19452[(2)] = false);

(statearr_19395_19452[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (12))){
var inst_19359 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19361__$1,inst_19359);
} else {
if((state_val_19362 === (2))){
var inst_19263 = (state_19361[(8)]);
var inst_19268 = inst_19263.cljs$lang$protocol_mask$partition0$;
var inst_19269 = (inst_19268 & (64));
var inst_19270 = inst_19263.cljs$core$ISeq$;
var inst_19271 = (cljs.core.PROTOCOL_SENTINEL === inst_19270);
var inst_19272 = (inst_19269) || (inst_19271);
var state_19361__$1 = state_19361;
if(cljs.core.truth_(inst_19272)){
var statearr_19396_19453 = state_19361__$1;
(statearr_19396_19453[(1)] = (5));

} else {
var statearr_19397_19454 = state_19361__$1;
(statearr_19397_19454[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (23))){
var inst_19320 = (state_19361[(14)]);
var inst_19326 = (inst_19320 == null);
var state_19361__$1 = state_19361;
if(cljs.core.truth_(inst_19326)){
var statearr_19398_19455 = state_19361__$1;
(statearr_19398_19455[(1)] = (26));

} else {
var statearr_19399_19456 = state_19361__$1;
(statearr_19399_19456[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (35))){
var inst_19346 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
if(cljs.core.truth_(inst_19346)){
var statearr_19400_19457 = state_19361__$1;
(statearr_19400_19457[(1)] = (36));

} else {
var statearr_19401_19458 = state_19361__$1;
(statearr_19401_19458[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (19))){
var inst_19288 = (state_19361[(7)]);
var inst_19308 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19288);
var state_19361__$1 = state_19361;
var statearr_19402_19459 = state_19361__$1;
(statearr_19402_19459[(2)] = inst_19308);

(statearr_19402_19459[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (11))){
var inst_19288 = (state_19361[(7)]);
var inst_19292 = (inst_19288 == null);
var inst_19293 = cljs.core.not(inst_19292);
var state_19361__$1 = state_19361;
if(inst_19293){
var statearr_19403_19460 = state_19361__$1;
(statearr_19403_19460[(1)] = (13));

} else {
var statearr_19404_19461 = state_19361__$1;
(statearr_19404_19461[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (9))){
var inst_19263 = (state_19361[(8)]);
var state_19361__$1 = state_19361;
var statearr_19405_19462 = state_19361__$1;
(statearr_19405_19462[(2)] = inst_19263);

(statearr_19405_19462[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (5))){
var state_19361__$1 = state_19361;
var statearr_19406_19463 = state_19361__$1;
(statearr_19406_19463[(2)] = true);

(statearr_19406_19463[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (14))){
var state_19361__$1 = state_19361;
var statearr_19407_19464 = state_19361__$1;
(statearr_19407_19464[(2)] = false);

(statearr_19407_19464[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (26))){
var inst_19321 = (state_19361[(9)]);
var inst_19328 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19321);
var state_19361__$1 = state_19361;
var statearr_19408_19465 = state_19361__$1;
(statearr_19408_19465[(2)] = inst_19328);

(statearr_19408_19465[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (16))){
var state_19361__$1 = state_19361;
var statearr_19409_19466 = state_19361__$1;
(statearr_19409_19466[(2)] = true);

(statearr_19409_19466[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (38))){
var inst_19351 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
var statearr_19410_19467 = state_19361__$1;
(statearr_19410_19467[(2)] = inst_19351);

(statearr_19410_19467[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (30))){
var inst_19321 = (state_19361[(9)]);
var inst_19313 = (state_19361[(13)]);
var inst_19312 = (state_19361[(10)]);
var inst_19338 = cljs.core.empty_QMARK_(inst_19312);
var inst_19339 = (inst_19313.cljs$core$IFn$_invoke$arity$1 ? inst_19313.cljs$core$IFn$_invoke$arity$1(inst_19321) : inst_19313.call(null,inst_19321));
var inst_19340 = cljs.core.not(inst_19339);
var inst_19341 = (inst_19338) && (inst_19340);
var state_19361__$1 = state_19361;
var statearr_19411_19468 = state_19361__$1;
(statearr_19411_19468[(2)] = inst_19341);

(statearr_19411_19468[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (10))){
var inst_19263 = (state_19361[(8)]);
var inst_19284 = (state_19361[(2)]);
var inst_19285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19284,cljs.core.cst$kw$solos);
var inst_19286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19284,cljs.core.cst$kw$mutes);
var inst_19287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19284,cljs.core.cst$kw$reads);
var inst_19288 = inst_19263;
var state_19361__$1 = (function (){var statearr_19412 = state_19361;
(statearr_19412[(16)] = inst_19285);

(statearr_19412[(17)] = inst_19287);

(statearr_19412[(7)] = inst_19288);

(statearr_19412[(18)] = inst_19286);

return statearr_19412;
})();
var statearr_19413_19469 = state_19361__$1;
(statearr_19413_19469[(2)] = null);

(statearr_19413_19469[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (18))){
var inst_19303 = (state_19361[(2)]);
var state_19361__$1 = state_19361;
var statearr_19414_19470 = state_19361__$1;
(statearr_19414_19470[(2)] = inst_19303);

(statearr_19414_19470[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (37))){
var state_19361__$1 = state_19361;
var statearr_19415_19471 = state_19361__$1;
(statearr_19415_19471[(2)] = null);

(statearr_19415_19471[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19362 === (8))){
var inst_19263 = (state_19361[(8)]);
var inst_19281 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19263);
var state_19361__$1 = state_19361;
var statearr_19416_19472 = state_19361__$1;
(statearr_19416_19472[(2)] = inst_19281);

(statearr_19416_19472[(1)] = (10));


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
});})(c__17637__auto___19426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17513__auto__,c__17637__auto___19426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17514__auto__ = null;
var cljs$core$async$mix_$_state_machine__17514__auto____0 = (function (){
var statearr_19420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19420[(0)] = cljs$core$async$mix_$_state_machine__17514__auto__);

(statearr_19420[(1)] = (1));

return statearr_19420;
});
var cljs$core$async$mix_$_state_machine__17514__auto____1 = (function (state_19361){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_19361);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e19421){if((e19421 instanceof Object)){
var ex__17517__auto__ = e19421;
var statearr_19422_19473 = state_19361;
(statearr_19422_19473[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19361);

return cljs.core.cst$kw$recur;
} else {
throw e19421;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__19474 = state_19361;
state_19361 = G__19474;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17514__auto__ = function(state_19361){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17514__auto____1.call(this,state_19361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17514__auto____0;
cljs$core$async$mix_$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17514__auto____1;
return cljs$core$async$mix_$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___19426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17639__auto__ = (function (){var statearr_19423 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_19423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___19426);

return statearr_19423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___19426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7694__auto__ = (((p == null))?null:p);
var m__7695__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7695__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7695__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7695__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7694__auto__ = (((p == null))?null:p);
var m__7695__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7695__auto__.call(null,p,v,ch));
} else {
var m__7695__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7695__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19475 = [];
var len__8139__auto___19478 = arguments.length;
var i__8140__auto___19479 = (0);
while(true){
if((i__8140__auto___19479 < len__8139__auto___19478)){
args19475.push((arguments[i__8140__auto___19479]));

var G__19480 = (i__8140__auto___19479 + (1));
i__8140__auto___19479 = G__19480;
continue;
} else {
}
break;
}

var G__19477 = args19475.length;
switch (G__19477) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19475.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7694__auto__ = (((p == null))?null:p);
var m__7695__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7695__auto__.call(null,p));
} else {
var m__7695__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7695__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7694__auto__ = (((p == null))?null:p);
var m__7695__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7694__auto__)]);
if(!((m__7695__auto__ == null))){
return (m__7695__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7695__auto__.call(null,p,v));
} else {
var m__7695__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7695__auto____$1 == null))){
return (m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7695__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7695__auto____$1.call(null,p,v));
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
var args19483 = [];
var len__8139__auto___19611 = arguments.length;
var i__8140__auto___19612 = (0);
while(true){
if((i__8140__auto___19612 < len__8139__auto___19611)){
args19483.push((arguments[i__8140__auto___19612]));

var G__19613 = (i__8140__auto___19612 + (1));
i__8140__auto___19612 = G__19613;
continue;
} else {
}
break;
}

var G__19485 = args19483.length;
switch (G__19485) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19483.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__19486 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19486) : cljs.core.atom.call(null,G__19486));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7026__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7026__auto__)){
return or__7026__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7026__auto__,mults){
return (function (p1__19482_SHARP_){
if(cljs.core.truth_((p1__19482_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19482_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19482_SHARP_.call(null,topic)))){
return p1__19482_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19482_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7026__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19487 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19488){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19488 = meta19488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19489,meta19488__$1){
var self__ = this;
var _19489__$1 = this;
return (new cljs.core.async.t_cljs$core$async19487(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19488__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19489){
var self__ = this;
var _19489__$1 = this;
return self__.meta19488;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19487.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19487.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19487.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19487.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19490 = self__.mults;
var G__19491 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19490,G__19491) : cljs.core.reset_BANG_.call(null,G__19490,G__19491));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19487.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19487.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19488], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19487";

cljs.core.async.t_cljs$core$async19487.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async19487");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19487 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19487(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19488){
return (new cljs.core.async.t_cljs$core$async19487(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19488));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19487(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17637__auto___19615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___19615,mults,ensure_mult,p){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___19615,mults,ensure_mult,p){
return (function (state_19563){
var state_val_19564 = (state_19563[(1)]);
if((state_val_19564 === (7))){
var inst_19559 = (state_19563[(2)]);
var state_19563__$1 = state_19563;
var statearr_19565_19616 = state_19563__$1;
(statearr_19565_19616[(2)] = inst_19559);

(statearr_19565_19616[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (20))){
var state_19563__$1 = state_19563;
var statearr_19566_19617 = state_19563__$1;
(statearr_19566_19617[(2)] = null);

(statearr_19566_19617[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (1))){
var state_19563__$1 = state_19563;
var statearr_19567_19618 = state_19563__$1;
(statearr_19567_19618[(2)] = null);

(statearr_19567_19618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (24))){
var inst_19542 = (state_19563[(7)]);
var inst_19551 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19542);
var state_19563__$1 = state_19563;
var statearr_19568_19619 = state_19563__$1;
(statearr_19568_19619[(2)] = inst_19551);

(statearr_19568_19619[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (4))){
var inst_19494 = (state_19563[(8)]);
var inst_19494__$1 = (state_19563[(2)]);
var inst_19495 = (inst_19494__$1 == null);
var state_19563__$1 = (function (){var statearr_19569 = state_19563;
(statearr_19569[(8)] = inst_19494__$1);

return statearr_19569;
})();
if(cljs.core.truth_(inst_19495)){
var statearr_19570_19620 = state_19563__$1;
(statearr_19570_19620[(1)] = (5));

} else {
var statearr_19571_19621 = state_19563__$1;
(statearr_19571_19621[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (15))){
var inst_19536 = (state_19563[(2)]);
var state_19563__$1 = state_19563;
var statearr_19572_19622 = state_19563__$1;
(statearr_19572_19622[(2)] = inst_19536);

(statearr_19572_19622[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (21))){
var inst_19556 = (state_19563[(2)]);
var state_19563__$1 = (function (){var statearr_19573 = state_19563;
(statearr_19573[(9)] = inst_19556);

return statearr_19573;
})();
var statearr_19574_19623 = state_19563__$1;
(statearr_19574_19623[(2)] = null);

(statearr_19574_19623[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (13))){
var inst_19518 = (state_19563[(10)]);
var inst_19520 = cljs.core.chunked_seq_QMARK_(inst_19518);
var state_19563__$1 = state_19563;
if(inst_19520){
var statearr_19575_19624 = state_19563__$1;
(statearr_19575_19624[(1)] = (16));

} else {
var statearr_19576_19625 = state_19563__$1;
(statearr_19576_19625[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (22))){
var inst_19548 = (state_19563[(2)]);
var state_19563__$1 = state_19563;
if(cljs.core.truth_(inst_19548)){
var statearr_19577_19626 = state_19563__$1;
(statearr_19577_19626[(1)] = (23));

} else {
var statearr_19578_19627 = state_19563__$1;
(statearr_19578_19627[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (6))){
var inst_19542 = (state_19563[(7)]);
var inst_19544 = (state_19563[(11)]);
var inst_19494 = (state_19563[(8)]);
var inst_19542__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19494) : topic_fn.call(null,inst_19494));
var inst_19543 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_19544__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19543,inst_19542__$1);
var state_19563__$1 = (function (){var statearr_19579 = state_19563;
(statearr_19579[(7)] = inst_19542__$1);

(statearr_19579[(11)] = inst_19544__$1);

return statearr_19579;
})();
if(cljs.core.truth_(inst_19544__$1)){
var statearr_19580_19628 = state_19563__$1;
(statearr_19580_19628[(1)] = (19));

} else {
var statearr_19581_19629 = state_19563__$1;
(statearr_19581_19629[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (25))){
var inst_19553 = (state_19563[(2)]);
var state_19563__$1 = state_19563;
var statearr_19582_19630 = state_19563__$1;
(statearr_19582_19630[(2)] = inst_19553);

(statearr_19582_19630[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (17))){
var inst_19518 = (state_19563[(10)]);
var inst_19527 = cljs.core.first(inst_19518);
var inst_19528 = cljs.core.async.muxch_STAR_(inst_19527);
var inst_19529 = cljs.core.async.close_BANG_(inst_19528);
var inst_19530 = cljs.core.next(inst_19518);
var inst_19504 = inst_19530;
var inst_19505 = null;
var inst_19506 = (0);
var inst_19507 = (0);
var state_19563__$1 = (function (){var statearr_19583 = state_19563;
(statearr_19583[(12)] = inst_19504);

(statearr_19583[(13)] = inst_19529);

(statearr_19583[(14)] = inst_19505);

(statearr_19583[(15)] = inst_19506);

(statearr_19583[(16)] = inst_19507);

return statearr_19583;
})();
var statearr_19584_19631 = state_19563__$1;
(statearr_19584_19631[(2)] = null);

(statearr_19584_19631[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (3))){
var inst_19561 = (state_19563[(2)]);
var state_19563__$1 = state_19563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19563__$1,inst_19561);
} else {
if((state_val_19564 === (12))){
var inst_19538 = (state_19563[(2)]);
var state_19563__$1 = state_19563;
var statearr_19585_19632 = state_19563__$1;
(statearr_19585_19632[(2)] = inst_19538);

(statearr_19585_19632[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (2))){
var state_19563__$1 = state_19563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19563__$1,(4),ch);
} else {
if((state_val_19564 === (23))){
var state_19563__$1 = state_19563;
var statearr_19586_19633 = state_19563__$1;
(statearr_19586_19633[(2)] = null);

(statearr_19586_19633[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (19))){
var inst_19544 = (state_19563[(11)]);
var inst_19494 = (state_19563[(8)]);
var inst_19546 = cljs.core.async.muxch_STAR_(inst_19544);
var state_19563__$1 = state_19563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19563__$1,(22),inst_19546,inst_19494);
} else {
if((state_val_19564 === (11))){
var inst_19504 = (state_19563[(12)]);
var inst_19518 = (state_19563[(10)]);
var inst_19518__$1 = cljs.core.seq(inst_19504);
var state_19563__$1 = (function (){var statearr_19587 = state_19563;
(statearr_19587[(10)] = inst_19518__$1);

return statearr_19587;
})();
if(inst_19518__$1){
var statearr_19588_19634 = state_19563__$1;
(statearr_19588_19634[(1)] = (13));

} else {
var statearr_19589_19635 = state_19563__$1;
(statearr_19589_19635[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (9))){
var inst_19540 = (state_19563[(2)]);
var state_19563__$1 = state_19563;
var statearr_19590_19636 = state_19563__$1;
(statearr_19590_19636[(2)] = inst_19540);

(statearr_19590_19636[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (5))){
var inst_19501 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_19502 = cljs.core.vals(inst_19501);
var inst_19503 = cljs.core.seq(inst_19502);
var inst_19504 = inst_19503;
var inst_19505 = null;
var inst_19506 = (0);
var inst_19507 = (0);
var state_19563__$1 = (function (){var statearr_19591 = state_19563;
(statearr_19591[(12)] = inst_19504);

(statearr_19591[(14)] = inst_19505);

(statearr_19591[(15)] = inst_19506);

(statearr_19591[(16)] = inst_19507);

return statearr_19591;
})();
var statearr_19592_19637 = state_19563__$1;
(statearr_19592_19637[(2)] = null);

(statearr_19592_19637[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (14))){
var state_19563__$1 = state_19563;
var statearr_19596_19638 = state_19563__$1;
(statearr_19596_19638[(2)] = null);

(statearr_19596_19638[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (16))){
var inst_19518 = (state_19563[(10)]);
var inst_19522 = cljs.core.chunk_first(inst_19518);
var inst_19523 = cljs.core.chunk_rest(inst_19518);
var inst_19524 = cljs.core.count(inst_19522);
var inst_19504 = inst_19523;
var inst_19505 = inst_19522;
var inst_19506 = inst_19524;
var inst_19507 = (0);
var state_19563__$1 = (function (){var statearr_19597 = state_19563;
(statearr_19597[(12)] = inst_19504);

(statearr_19597[(14)] = inst_19505);

(statearr_19597[(15)] = inst_19506);

(statearr_19597[(16)] = inst_19507);

return statearr_19597;
})();
var statearr_19598_19639 = state_19563__$1;
(statearr_19598_19639[(2)] = null);

(statearr_19598_19639[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (10))){
var inst_19504 = (state_19563[(12)]);
var inst_19505 = (state_19563[(14)]);
var inst_19506 = (state_19563[(15)]);
var inst_19507 = (state_19563[(16)]);
var inst_19512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19505,inst_19507);
var inst_19513 = cljs.core.async.muxch_STAR_(inst_19512);
var inst_19514 = cljs.core.async.close_BANG_(inst_19513);
var inst_19515 = (inst_19507 + (1));
var tmp19593 = inst_19504;
var tmp19594 = inst_19505;
var tmp19595 = inst_19506;
var inst_19504__$1 = tmp19593;
var inst_19505__$1 = tmp19594;
var inst_19506__$1 = tmp19595;
var inst_19507__$1 = inst_19515;
var state_19563__$1 = (function (){var statearr_19599 = state_19563;
(statearr_19599[(12)] = inst_19504__$1);

(statearr_19599[(14)] = inst_19505__$1);

(statearr_19599[(15)] = inst_19506__$1);

(statearr_19599[(17)] = inst_19514);

(statearr_19599[(16)] = inst_19507__$1);

return statearr_19599;
})();
var statearr_19600_19640 = state_19563__$1;
(statearr_19600_19640[(2)] = null);

(statearr_19600_19640[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (18))){
var inst_19533 = (state_19563[(2)]);
var state_19563__$1 = state_19563;
var statearr_19601_19641 = state_19563__$1;
(statearr_19601_19641[(2)] = inst_19533);

(statearr_19601_19641[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19564 === (8))){
var inst_19506 = (state_19563[(15)]);
var inst_19507 = (state_19563[(16)]);
var inst_19509 = (inst_19507 < inst_19506);
var inst_19510 = inst_19509;
var state_19563__$1 = state_19563;
if(cljs.core.truth_(inst_19510)){
var statearr_19602_19642 = state_19563__$1;
(statearr_19602_19642[(1)] = (10));

} else {
var statearr_19603_19643 = state_19563__$1;
(statearr_19603_19643[(1)] = (11));

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
});})(c__17637__auto___19615,mults,ensure_mult,p))
;
return ((function (switch__17513__auto__,c__17637__auto___19615,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_19607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19607[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_19607[(1)] = (1));

return statearr_19607;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_19563){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_19563);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e19608){if((e19608 instanceof Object)){
var ex__17517__auto__ = e19608;
var statearr_19609_19644 = state_19563;
(statearr_19609_19644[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19563);

return cljs.core.cst$kw$recur;
} else {
throw e19608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__19645 = state_19563;
state_19563 = G__19645;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_19563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_19563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___19615,mults,ensure_mult,p))
})();
var state__17639__auto__ = (function (){var statearr_19610 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_19610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___19615);

return statearr_19610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___19615,mults,ensure_mult,p))
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
var args19646 = [];
var len__8139__auto___19649 = arguments.length;
var i__8140__auto___19650 = (0);
while(true){
if((i__8140__auto___19650 < len__8139__auto___19649)){
args19646.push((arguments[i__8140__auto___19650]));

var G__19651 = (i__8140__auto___19650 + (1));
i__8140__auto___19650 = G__19651;
continue;
} else {
}
break;
}

var G__19648 = args19646.length;
switch (G__19648) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19646.length)].join('')));

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
var args19653 = [];
var len__8139__auto___19656 = arguments.length;
var i__8140__auto___19657 = (0);
while(true){
if((i__8140__auto___19657 < len__8139__auto___19656)){
args19653.push((arguments[i__8140__auto___19657]));

var G__19658 = (i__8140__auto___19657 + (1));
i__8140__auto___19657 = G__19658;
continue;
} else {
}
break;
}

var G__19655 = args19653.length;
switch (G__19655) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19653.length)].join('')));

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
var args19660 = [];
var len__8139__auto___19731 = arguments.length;
var i__8140__auto___19732 = (0);
while(true){
if((i__8140__auto___19732 < len__8139__auto___19731)){
args19660.push((arguments[i__8140__auto___19732]));

var G__19733 = (i__8140__auto___19732 + (1));
i__8140__auto___19732 = G__19733;
continue;
} else {
}
break;
}

var G__19662 = args19660.length;
switch (G__19662) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19660.length)].join('')));

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
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
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
var c__17637__auto___19735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___19735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___19735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19701){
var state_val_19702 = (state_19701[(1)]);
if((state_val_19702 === (7))){
var state_19701__$1 = state_19701;
var statearr_19703_19736 = state_19701__$1;
(statearr_19703_19736[(2)] = null);

(statearr_19703_19736[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (1))){
var state_19701__$1 = state_19701;
var statearr_19704_19737 = state_19701__$1;
(statearr_19704_19737[(2)] = null);

(statearr_19704_19737[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (4))){
var inst_19665 = (state_19701[(7)]);
var inst_19667 = (inst_19665 < cnt);
var state_19701__$1 = state_19701;
if(cljs.core.truth_(inst_19667)){
var statearr_19705_19738 = state_19701__$1;
(statearr_19705_19738[(1)] = (6));

} else {
var statearr_19706_19739 = state_19701__$1;
(statearr_19706_19739[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (15))){
var inst_19697 = (state_19701[(2)]);
var state_19701__$1 = state_19701;
var statearr_19707_19740 = state_19701__$1;
(statearr_19707_19740[(2)] = inst_19697);

(statearr_19707_19740[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (13))){
var inst_19690 = cljs.core.async.close_BANG_(out);
var state_19701__$1 = state_19701;
var statearr_19708_19741 = state_19701__$1;
(statearr_19708_19741[(2)] = inst_19690);

(statearr_19708_19741[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (6))){
var state_19701__$1 = state_19701;
var statearr_19709_19742 = state_19701__$1;
(statearr_19709_19742[(2)] = null);

(statearr_19709_19742[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (3))){
var inst_19699 = (state_19701[(2)]);
var state_19701__$1 = state_19701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19701__$1,inst_19699);
} else {
if((state_val_19702 === (12))){
var inst_19687 = (state_19701[(8)]);
var inst_19687__$1 = (state_19701[(2)]);
var inst_19688 = cljs.core.some(cljs.core.nil_QMARK_,inst_19687__$1);
var state_19701__$1 = (function (){var statearr_19710 = state_19701;
(statearr_19710[(8)] = inst_19687__$1);

return statearr_19710;
})();
if(cljs.core.truth_(inst_19688)){
var statearr_19711_19743 = state_19701__$1;
(statearr_19711_19743[(1)] = (13));

} else {
var statearr_19712_19744 = state_19701__$1;
(statearr_19712_19744[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (2))){
var inst_19664 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_19665 = (0);
var state_19701__$1 = (function (){var statearr_19713 = state_19701;
(statearr_19713[(7)] = inst_19665);

(statearr_19713[(9)] = inst_19664);

return statearr_19713;
})();
var statearr_19714_19745 = state_19701__$1;
(statearr_19714_19745[(2)] = null);

(statearr_19714_19745[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (11))){
var inst_19665 = (state_19701[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19701,(10),Object,null,(9));
var inst_19674 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19665) : chs__$1.call(null,inst_19665));
var inst_19675 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19665) : done.call(null,inst_19665));
var inst_19676 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19674,inst_19675);
var state_19701__$1 = state_19701;
var statearr_19715_19746 = state_19701__$1;
(statearr_19715_19746[(2)] = inst_19676);


cljs.core.async.impl.ioc_helpers.process_exception(state_19701__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (9))){
var inst_19665 = (state_19701[(7)]);
var inst_19678 = (state_19701[(2)]);
var inst_19679 = (inst_19665 + (1));
var inst_19665__$1 = inst_19679;
var state_19701__$1 = (function (){var statearr_19716 = state_19701;
(statearr_19716[(10)] = inst_19678);

(statearr_19716[(7)] = inst_19665__$1);

return statearr_19716;
})();
var statearr_19717_19747 = state_19701__$1;
(statearr_19717_19747[(2)] = null);

(statearr_19717_19747[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (5))){
var inst_19685 = (state_19701[(2)]);
var state_19701__$1 = (function (){var statearr_19718 = state_19701;
(statearr_19718[(11)] = inst_19685);

return statearr_19718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19701__$1,(12),dchan);
} else {
if((state_val_19702 === (14))){
var inst_19687 = (state_19701[(8)]);
var inst_19692 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19687);
var state_19701__$1 = state_19701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19701__$1,(16),out,inst_19692);
} else {
if((state_val_19702 === (16))){
var inst_19694 = (state_19701[(2)]);
var state_19701__$1 = (function (){var statearr_19719 = state_19701;
(statearr_19719[(12)] = inst_19694);

return statearr_19719;
})();
var statearr_19720_19748 = state_19701__$1;
(statearr_19720_19748[(2)] = null);

(statearr_19720_19748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (10))){
var inst_19669 = (state_19701[(2)]);
var inst_19670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19701__$1 = (function (){var statearr_19721 = state_19701;
(statearr_19721[(13)] = inst_19669);

return statearr_19721;
})();
var statearr_19722_19749 = state_19701__$1;
(statearr_19722_19749[(2)] = inst_19670);


cljs.core.async.impl.ioc_helpers.process_exception(state_19701__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19702 === (8))){
var inst_19683 = (state_19701[(2)]);
var state_19701__$1 = state_19701;
var statearr_19723_19750 = state_19701__$1;
(statearr_19723_19750[(2)] = inst_19683);

(statearr_19723_19750[(1)] = (5));


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
});})(c__17637__auto___19735,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17513__auto__,c__17637__auto___19735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_19727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19727[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_19727[(1)] = (1));

return statearr_19727;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_19701){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_19701);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e19728){if((e19728 instanceof Object)){
var ex__17517__auto__ = e19728;
var statearr_19729_19751 = state_19701;
(statearr_19729_19751[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19701);

return cljs.core.cst$kw$recur;
} else {
throw e19728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__19752 = state_19701;
state_19701 = G__19752;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_19701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_19701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___19735,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17639__auto__ = (function (){var statearr_19730 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_19730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___19735);

return statearr_19730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___19735,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19754 = [];
var len__8139__auto___19812 = arguments.length;
var i__8140__auto___19813 = (0);
while(true){
if((i__8140__auto___19813 < len__8139__auto___19812)){
args19754.push((arguments[i__8140__auto___19813]));

var G__19814 = (i__8140__auto___19813 + (1));
i__8140__auto___19813 = G__19814;
continue;
} else {
}
break;
}

var G__19756 = args19754.length;
switch (G__19756) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19754.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17637__auto___19816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___19816,out){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___19816,out){
return (function (state_19788){
var state_val_19789 = (state_19788[(1)]);
if((state_val_19789 === (7))){
var inst_19768 = (state_19788[(7)]);
var inst_19767 = (state_19788[(8)]);
var inst_19767__$1 = (state_19788[(2)]);
var inst_19768__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19767__$1,(0),null);
var inst_19769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19767__$1,(1),null);
var inst_19770 = (inst_19768__$1 == null);
var state_19788__$1 = (function (){var statearr_19790 = state_19788;
(statearr_19790[(7)] = inst_19768__$1);

(statearr_19790[(9)] = inst_19769);

(statearr_19790[(8)] = inst_19767__$1);

return statearr_19790;
})();
if(cljs.core.truth_(inst_19770)){
var statearr_19791_19817 = state_19788__$1;
(statearr_19791_19817[(1)] = (8));

} else {
var statearr_19792_19818 = state_19788__$1;
(statearr_19792_19818[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19789 === (1))){
var inst_19757 = cljs.core.vec(chs);
var inst_19758 = inst_19757;
var state_19788__$1 = (function (){var statearr_19793 = state_19788;
(statearr_19793[(10)] = inst_19758);

return statearr_19793;
})();
var statearr_19794_19819 = state_19788__$1;
(statearr_19794_19819[(2)] = null);

(statearr_19794_19819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19789 === (4))){
var inst_19758 = (state_19788[(10)]);
var state_19788__$1 = state_19788;
return cljs.core.async.ioc_alts_BANG_(state_19788__$1,(7),inst_19758);
} else {
if((state_val_19789 === (6))){
var inst_19784 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
var statearr_19795_19820 = state_19788__$1;
(statearr_19795_19820[(2)] = inst_19784);

(statearr_19795_19820[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19789 === (3))){
var inst_19786 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19788__$1,inst_19786);
} else {
if((state_val_19789 === (2))){
var inst_19758 = (state_19788[(10)]);
var inst_19760 = cljs.core.count(inst_19758);
var inst_19761 = (inst_19760 > (0));
var state_19788__$1 = state_19788;
if(cljs.core.truth_(inst_19761)){
var statearr_19797_19821 = state_19788__$1;
(statearr_19797_19821[(1)] = (4));

} else {
var statearr_19798_19822 = state_19788__$1;
(statearr_19798_19822[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19789 === (11))){
var inst_19758 = (state_19788[(10)]);
var inst_19777 = (state_19788[(2)]);
var tmp19796 = inst_19758;
var inst_19758__$1 = tmp19796;
var state_19788__$1 = (function (){var statearr_19799 = state_19788;
(statearr_19799[(10)] = inst_19758__$1);

(statearr_19799[(11)] = inst_19777);

return statearr_19799;
})();
var statearr_19800_19823 = state_19788__$1;
(statearr_19800_19823[(2)] = null);

(statearr_19800_19823[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19789 === (9))){
var inst_19768 = (state_19788[(7)]);
var state_19788__$1 = state_19788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19788__$1,(11),out,inst_19768);
} else {
if((state_val_19789 === (5))){
var inst_19782 = cljs.core.async.close_BANG_(out);
var state_19788__$1 = state_19788;
var statearr_19801_19824 = state_19788__$1;
(statearr_19801_19824[(2)] = inst_19782);

(statearr_19801_19824[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19789 === (10))){
var inst_19780 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
var statearr_19802_19825 = state_19788__$1;
(statearr_19802_19825[(2)] = inst_19780);

(statearr_19802_19825[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19789 === (8))){
var inst_19768 = (state_19788[(7)]);
var inst_19758 = (state_19788[(10)]);
var inst_19769 = (state_19788[(9)]);
var inst_19767 = (state_19788[(8)]);
var inst_19772 = (function (){var cs = inst_19758;
var vec__19763 = inst_19767;
var v = inst_19768;
var c = inst_19769;
return ((function (cs,vec__19763,v,c,inst_19768,inst_19758,inst_19769,inst_19767,state_val_19789,c__17637__auto___19816,out){
return (function (p1__19753_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19753_SHARP_);
});
;})(cs,vec__19763,v,c,inst_19768,inst_19758,inst_19769,inst_19767,state_val_19789,c__17637__auto___19816,out))
})();
var inst_19773 = cljs.core.filterv(inst_19772,inst_19758);
var inst_19758__$1 = inst_19773;
var state_19788__$1 = (function (){var statearr_19803 = state_19788;
(statearr_19803[(10)] = inst_19758__$1);

return statearr_19803;
})();
var statearr_19804_19826 = state_19788__$1;
(statearr_19804_19826[(2)] = null);

(statearr_19804_19826[(1)] = (2));


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
});})(c__17637__auto___19816,out))
;
return ((function (switch__17513__auto__,c__17637__auto___19816,out){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_19808 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19808[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_19808[(1)] = (1));

return statearr_19808;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_19788){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_19788);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e19809){if((e19809 instanceof Object)){
var ex__17517__auto__ = e19809;
var statearr_19810_19827 = state_19788;
(statearr_19810_19827[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19788);

return cljs.core.cst$kw$recur;
} else {
throw e19809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__19828 = state_19788;
state_19788 = G__19828;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_19788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_19788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___19816,out))
})();
var state__17639__auto__ = (function (){var statearr_19811 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_19811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___19816);

return statearr_19811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___19816,out))
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
var args19829 = [];
var len__8139__auto___19878 = arguments.length;
var i__8140__auto___19879 = (0);
while(true){
if((i__8140__auto___19879 < len__8139__auto___19878)){
args19829.push((arguments[i__8140__auto___19879]));

var G__19880 = (i__8140__auto___19879 + (1));
i__8140__auto___19879 = G__19880;
continue;
} else {
}
break;
}

var G__19831 = args19829.length;
switch (G__19831) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19829.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17637__auto___19882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___19882,out){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___19882,out){
return (function (state_19855){
var state_val_19856 = (state_19855[(1)]);
if((state_val_19856 === (7))){
var inst_19837 = (state_19855[(7)]);
var inst_19837__$1 = (state_19855[(2)]);
var inst_19838 = (inst_19837__$1 == null);
var inst_19839 = cljs.core.not(inst_19838);
var state_19855__$1 = (function (){var statearr_19857 = state_19855;
(statearr_19857[(7)] = inst_19837__$1);

return statearr_19857;
})();
if(inst_19839){
var statearr_19858_19883 = state_19855__$1;
(statearr_19858_19883[(1)] = (8));

} else {
var statearr_19859_19884 = state_19855__$1;
(statearr_19859_19884[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19856 === (1))){
var inst_19832 = (0);
var state_19855__$1 = (function (){var statearr_19860 = state_19855;
(statearr_19860[(8)] = inst_19832);

return statearr_19860;
})();
var statearr_19861_19885 = state_19855__$1;
(statearr_19861_19885[(2)] = null);

(statearr_19861_19885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19856 === (4))){
var state_19855__$1 = state_19855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19855__$1,(7),ch);
} else {
if((state_val_19856 === (6))){
var inst_19850 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
var statearr_19862_19886 = state_19855__$1;
(statearr_19862_19886[(2)] = inst_19850);

(statearr_19862_19886[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19856 === (3))){
var inst_19852 = (state_19855[(2)]);
var inst_19853 = cljs.core.async.close_BANG_(out);
var state_19855__$1 = (function (){var statearr_19863 = state_19855;
(statearr_19863[(9)] = inst_19852);

return statearr_19863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19855__$1,inst_19853);
} else {
if((state_val_19856 === (2))){
var inst_19832 = (state_19855[(8)]);
var inst_19834 = (inst_19832 < n);
var state_19855__$1 = state_19855;
if(cljs.core.truth_(inst_19834)){
var statearr_19864_19887 = state_19855__$1;
(statearr_19864_19887[(1)] = (4));

} else {
var statearr_19865_19888 = state_19855__$1;
(statearr_19865_19888[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19856 === (11))){
var inst_19832 = (state_19855[(8)]);
var inst_19842 = (state_19855[(2)]);
var inst_19843 = (inst_19832 + (1));
var inst_19832__$1 = inst_19843;
var state_19855__$1 = (function (){var statearr_19866 = state_19855;
(statearr_19866[(10)] = inst_19842);

(statearr_19866[(8)] = inst_19832__$1);

return statearr_19866;
})();
var statearr_19867_19889 = state_19855__$1;
(statearr_19867_19889[(2)] = null);

(statearr_19867_19889[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19856 === (9))){
var state_19855__$1 = state_19855;
var statearr_19868_19890 = state_19855__$1;
(statearr_19868_19890[(2)] = null);

(statearr_19868_19890[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19856 === (5))){
var state_19855__$1 = state_19855;
var statearr_19869_19891 = state_19855__$1;
(statearr_19869_19891[(2)] = null);

(statearr_19869_19891[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19856 === (10))){
var inst_19847 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
var statearr_19870_19892 = state_19855__$1;
(statearr_19870_19892[(2)] = inst_19847);

(statearr_19870_19892[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19856 === (8))){
var inst_19837 = (state_19855[(7)]);
var state_19855__$1 = state_19855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19855__$1,(11),out,inst_19837);
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
});})(c__17637__auto___19882,out))
;
return ((function (switch__17513__auto__,c__17637__auto___19882,out){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_19874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19874[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_19874[(1)] = (1));

return statearr_19874;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_19855){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_19855);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e19875){if((e19875 instanceof Object)){
var ex__17517__auto__ = e19875;
var statearr_19876_19893 = state_19855;
(statearr_19876_19893[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19855);

return cljs.core.cst$kw$recur;
} else {
throw e19875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__19894 = state_19855;
state_19855 = G__19894;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_19855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_19855);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___19882,out))
})();
var state__17639__auto__ = (function (){var statearr_19877 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_19877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___19882);

return statearr_19877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___19882,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19904 = (function (f,ch,meta19905){
this.f = f;
this.ch = ch;
this.meta19905 = meta19905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19906,meta19905__$1){
var self__ = this;
var _19906__$1 = this;
return (new cljs.core.async.t_cljs$core$async19904(self__.f,self__.ch,meta19905__$1));
});

cljs.core.async.t_cljs$core$async19904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19906){
var self__ = this;
var _19906__$1 = this;
return self__.meta19905;
});

cljs.core.async.t_cljs$core$async19904.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19904.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19904.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19907 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19907 = (function (f,ch,meta19905,_,fn1,meta19908){
this.f = f;
this.ch = ch;
this.meta19905 = meta19905;
this._ = _;
this.fn1 = fn1;
this.meta19908 = meta19908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19909,meta19908__$1){
var self__ = this;
var _19909__$1 = this;
return (new cljs.core.async.t_cljs$core$async19907(self__.f,self__.ch,self__.meta19905,self__._,self__.fn1,meta19908__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19909){
var self__ = this;
var _19909__$1 = this;
return self__.meta19908;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19895_SHARP_){
var G__19910 = (((p1__19895_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19895_SHARP_) : self__.f.call(null,p1__19895_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19910) : f1.call(null,G__19910));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19907.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19905,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19904], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19908], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19907";

cljs.core.async.t_cljs$core$async19907.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async19907");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19907 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19907(f__$1,ch__$1,meta19905__$1,___$2,fn1__$1,meta19908){
return (new cljs.core.async.t_cljs$core$async19907(f__$1,ch__$1,meta19905__$1,___$2,fn1__$1,meta19908));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19907(self__.f,self__.ch,self__.meta19905,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7014__auto__ = ret;
if(cljs.core.truth_(and__7014__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7014__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19911 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19911) : self__.f.call(null,G__19911));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19904.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19905], null);
});

cljs.core.async.t_cljs$core$async19904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19904";

cljs.core.async.t_cljs$core$async19904.cljs$lang$ctorPrWriter = (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async19904");
});

cljs.core.async.__GT_t_cljs$core$async19904 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19904(f__$1,ch__$1,meta19905){
return (new cljs.core.async.t_cljs$core$async19904(f__$1,ch__$1,meta19905));
});

}

return (new cljs.core.async.t_cljs$core$async19904(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19915 = (function (f,ch,meta19916){
this.f = f;
this.ch = ch;
this.meta19916 = meta19916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19917,meta19916__$1){
var self__ = this;
var _19917__$1 = this;
return (new cljs.core.async.t_cljs$core$async19915(self__.f,self__.ch,meta19916__$1));
});

cljs.core.async.t_cljs$core$async19915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19917){
var self__ = this;
var _19917__$1 = this;
return self__.meta19916;
});

cljs.core.async.t_cljs$core$async19915.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19915.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19915.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19916], null);
});

cljs.core.async.t_cljs$core$async19915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19915";

cljs.core.async.t_cljs$core$async19915.cljs$lang$ctorPrWriter = (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async19915");
});

cljs.core.async.__GT_t_cljs$core$async19915 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19915(f__$1,ch__$1,meta19916){
return (new cljs.core.async.t_cljs$core$async19915(f__$1,ch__$1,meta19916));
});

}

return (new cljs.core.async.t_cljs$core$async19915(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19921 = (function (p,ch,meta19922){
this.p = p;
this.ch = ch;
this.meta19922 = meta19922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19923,meta19922__$1){
var self__ = this;
var _19923__$1 = this;
return (new cljs.core.async.t_cljs$core$async19921(self__.p,self__.ch,meta19922__$1));
});

cljs.core.async.t_cljs$core$async19921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19923){
var self__ = this;
var _19923__$1 = this;
return self__.meta19922;
});

cljs.core.async.t_cljs$core$async19921.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19921.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19921.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19921.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19921.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19921.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19921.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19922], null);
});

cljs.core.async.t_cljs$core$async19921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19921";

cljs.core.async.t_cljs$core$async19921.cljs$lang$ctorPrWriter = (function (this__7637__auto__,writer__7638__auto__,opt__7639__auto__){
return cljs.core._write(writer__7638__auto__,"cljs.core.async/t_cljs$core$async19921");
});

cljs.core.async.__GT_t_cljs$core$async19921 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19921(p__$1,ch__$1,meta19922){
return (new cljs.core.async.t_cljs$core$async19921(p__$1,ch__$1,meta19922));
});

}

return (new cljs.core.async.t_cljs$core$async19921(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19924 = [];
var len__8139__auto___19968 = arguments.length;
var i__8140__auto___19969 = (0);
while(true){
if((i__8140__auto___19969 < len__8139__auto___19968)){
args19924.push((arguments[i__8140__auto___19969]));

var G__19970 = (i__8140__auto___19969 + (1));
i__8140__auto___19969 = G__19970;
continue;
} else {
}
break;
}

var G__19926 = args19924.length;
switch (G__19926) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19924.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17637__auto___19972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___19972,out){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___19972,out){
return (function (state_19947){
var state_val_19948 = (state_19947[(1)]);
if((state_val_19948 === (7))){
var inst_19943 = (state_19947[(2)]);
var state_19947__$1 = state_19947;
var statearr_19949_19973 = state_19947__$1;
(statearr_19949_19973[(2)] = inst_19943);

(statearr_19949_19973[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19948 === (1))){
var state_19947__$1 = state_19947;
var statearr_19950_19974 = state_19947__$1;
(statearr_19950_19974[(2)] = null);

(statearr_19950_19974[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19948 === (4))){
var inst_19929 = (state_19947[(7)]);
var inst_19929__$1 = (state_19947[(2)]);
var inst_19930 = (inst_19929__$1 == null);
var state_19947__$1 = (function (){var statearr_19951 = state_19947;
(statearr_19951[(7)] = inst_19929__$1);

return statearr_19951;
})();
if(cljs.core.truth_(inst_19930)){
var statearr_19952_19975 = state_19947__$1;
(statearr_19952_19975[(1)] = (5));

} else {
var statearr_19953_19976 = state_19947__$1;
(statearr_19953_19976[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19948 === (6))){
var inst_19929 = (state_19947[(7)]);
var inst_19934 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19929) : p.call(null,inst_19929));
var state_19947__$1 = state_19947;
if(cljs.core.truth_(inst_19934)){
var statearr_19954_19977 = state_19947__$1;
(statearr_19954_19977[(1)] = (8));

} else {
var statearr_19955_19978 = state_19947__$1;
(statearr_19955_19978[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19948 === (3))){
var inst_19945 = (state_19947[(2)]);
var state_19947__$1 = state_19947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19947__$1,inst_19945);
} else {
if((state_val_19948 === (2))){
var state_19947__$1 = state_19947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19947__$1,(4),ch);
} else {
if((state_val_19948 === (11))){
var inst_19937 = (state_19947[(2)]);
var state_19947__$1 = state_19947;
var statearr_19956_19979 = state_19947__$1;
(statearr_19956_19979[(2)] = inst_19937);

(statearr_19956_19979[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19948 === (9))){
var state_19947__$1 = state_19947;
var statearr_19957_19980 = state_19947__$1;
(statearr_19957_19980[(2)] = null);

(statearr_19957_19980[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19948 === (5))){
var inst_19932 = cljs.core.async.close_BANG_(out);
var state_19947__$1 = state_19947;
var statearr_19958_19981 = state_19947__$1;
(statearr_19958_19981[(2)] = inst_19932);

(statearr_19958_19981[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19948 === (10))){
var inst_19940 = (state_19947[(2)]);
var state_19947__$1 = (function (){var statearr_19959 = state_19947;
(statearr_19959[(8)] = inst_19940);

return statearr_19959;
})();
var statearr_19960_19982 = state_19947__$1;
(statearr_19960_19982[(2)] = null);

(statearr_19960_19982[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19948 === (8))){
var inst_19929 = (state_19947[(7)]);
var state_19947__$1 = state_19947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19947__$1,(11),out,inst_19929);
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
});})(c__17637__auto___19972,out))
;
return ((function (switch__17513__auto__,c__17637__auto___19972,out){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_19964 = [null,null,null,null,null,null,null,null,null];
(statearr_19964[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_19964[(1)] = (1));

return statearr_19964;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_19947){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_19947);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e19965){if((e19965 instanceof Object)){
var ex__17517__auto__ = e19965;
var statearr_19966_19983 = state_19947;
(statearr_19966_19983[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19947);

return cljs.core.cst$kw$recur;
} else {
throw e19965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__19984 = state_19947;
state_19947 = G__19984;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_19947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_19947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___19972,out))
})();
var state__17639__auto__ = (function (){var statearr_19967 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_19967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___19972);

return statearr_19967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___19972,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19985 = [];
var len__8139__auto___19988 = arguments.length;
var i__8140__auto___19989 = (0);
while(true){
if((i__8140__auto___19989 < len__8139__auto___19988)){
args19985.push((arguments[i__8140__auto___19989]));

var G__19990 = (i__8140__auto___19989 + (1));
i__8140__auto___19989 = G__19990;
continue;
} else {
}
break;
}

var G__19987 = args19985.length;
switch (G__19987) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19985.length)].join('')));

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
var c__17637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto__){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto__){
return (function (state_20157){
var state_val_20158 = (state_20157[(1)]);
if((state_val_20158 === (7))){
var inst_20153 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20159_20200 = state_20157__$1;
(statearr_20159_20200[(2)] = inst_20153);

(statearr_20159_20200[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (20))){
var inst_20123 = (state_20157[(7)]);
var inst_20134 = (state_20157[(2)]);
var inst_20135 = cljs.core.next(inst_20123);
var inst_20109 = inst_20135;
var inst_20110 = null;
var inst_20111 = (0);
var inst_20112 = (0);
var state_20157__$1 = (function (){var statearr_20160 = state_20157;
(statearr_20160[(8)] = inst_20111);

(statearr_20160[(9)] = inst_20112);

(statearr_20160[(10)] = inst_20134);

(statearr_20160[(11)] = inst_20110);

(statearr_20160[(12)] = inst_20109);

return statearr_20160;
})();
var statearr_20161_20201 = state_20157__$1;
(statearr_20161_20201[(2)] = null);

(statearr_20161_20201[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (1))){
var state_20157__$1 = state_20157;
var statearr_20162_20202 = state_20157__$1;
(statearr_20162_20202[(2)] = null);

(statearr_20162_20202[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (4))){
var inst_20098 = (state_20157[(13)]);
var inst_20098__$1 = (state_20157[(2)]);
var inst_20099 = (inst_20098__$1 == null);
var state_20157__$1 = (function (){var statearr_20163 = state_20157;
(statearr_20163[(13)] = inst_20098__$1);

return statearr_20163;
})();
if(cljs.core.truth_(inst_20099)){
var statearr_20164_20203 = state_20157__$1;
(statearr_20164_20203[(1)] = (5));

} else {
var statearr_20165_20204 = state_20157__$1;
(statearr_20165_20204[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (15))){
var state_20157__$1 = state_20157;
var statearr_20169_20205 = state_20157__$1;
(statearr_20169_20205[(2)] = null);

(statearr_20169_20205[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (21))){
var state_20157__$1 = state_20157;
var statearr_20170_20206 = state_20157__$1;
(statearr_20170_20206[(2)] = null);

(statearr_20170_20206[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (13))){
var inst_20111 = (state_20157[(8)]);
var inst_20112 = (state_20157[(9)]);
var inst_20110 = (state_20157[(11)]);
var inst_20109 = (state_20157[(12)]);
var inst_20119 = (state_20157[(2)]);
var inst_20120 = (inst_20112 + (1));
var tmp20166 = inst_20111;
var tmp20167 = inst_20110;
var tmp20168 = inst_20109;
var inst_20109__$1 = tmp20168;
var inst_20110__$1 = tmp20167;
var inst_20111__$1 = tmp20166;
var inst_20112__$1 = inst_20120;
var state_20157__$1 = (function (){var statearr_20171 = state_20157;
(statearr_20171[(8)] = inst_20111__$1);

(statearr_20171[(9)] = inst_20112__$1);

(statearr_20171[(11)] = inst_20110__$1);

(statearr_20171[(14)] = inst_20119);

(statearr_20171[(12)] = inst_20109__$1);

return statearr_20171;
})();
var statearr_20172_20207 = state_20157__$1;
(statearr_20172_20207[(2)] = null);

(statearr_20172_20207[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (22))){
var state_20157__$1 = state_20157;
var statearr_20173_20208 = state_20157__$1;
(statearr_20173_20208[(2)] = null);

(statearr_20173_20208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (6))){
var inst_20098 = (state_20157[(13)]);
var inst_20107 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20098) : f.call(null,inst_20098));
var inst_20108 = cljs.core.seq(inst_20107);
var inst_20109 = inst_20108;
var inst_20110 = null;
var inst_20111 = (0);
var inst_20112 = (0);
var state_20157__$1 = (function (){var statearr_20174 = state_20157;
(statearr_20174[(8)] = inst_20111);

(statearr_20174[(9)] = inst_20112);

(statearr_20174[(11)] = inst_20110);

(statearr_20174[(12)] = inst_20109);

return statearr_20174;
})();
var statearr_20175_20209 = state_20157__$1;
(statearr_20175_20209[(2)] = null);

(statearr_20175_20209[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (17))){
var inst_20123 = (state_20157[(7)]);
var inst_20127 = cljs.core.chunk_first(inst_20123);
var inst_20128 = cljs.core.chunk_rest(inst_20123);
var inst_20129 = cljs.core.count(inst_20127);
var inst_20109 = inst_20128;
var inst_20110 = inst_20127;
var inst_20111 = inst_20129;
var inst_20112 = (0);
var state_20157__$1 = (function (){var statearr_20176 = state_20157;
(statearr_20176[(8)] = inst_20111);

(statearr_20176[(9)] = inst_20112);

(statearr_20176[(11)] = inst_20110);

(statearr_20176[(12)] = inst_20109);

return statearr_20176;
})();
var statearr_20177_20210 = state_20157__$1;
(statearr_20177_20210[(2)] = null);

(statearr_20177_20210[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (3))){
var inst_20155 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20157__$1,inst_20155);
} else {
if((state_val_20158 === (12))){
var inst_20143 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20178_20211 = state_20157__$1;
(statearr_20178_20211[(2)] = inst_20143);

(statearr_20178_20211[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (2))){
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20157__$1,(4),in$);
} else {
if((state_val_20158 === (23))){
var inst_20151 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20179_20212 = state_20157__$1;
(statearr_20179_20212[(2)] = inst_20151);

(statearr_20179_20212[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (19))){
var inst_20138 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20180_20213 = state_20157__$1;
(statearr_20180_20213[(2)] = inst_20138);

(statearr_20180_20213[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (11))){
var inst_20123 = (state_20157[(7)]);
var inst_20109 = (state_20157[(12)]);
var inst_20123__$1 = cljs.core.seq(inst_20109);
var state_20157__$1 = (function (){var statearr_20181 = state_20157;
(statearr_20181[(7)] = inst_20123__$1);

return statearr_20181;
})();
if(inst_20123__$1){
var statearr_20182_20214 = state_20157__$1;
(statearr_20182_20214[(1)] = (14));

} else {
var statearr_20183_20215 = state_20157__$1;
(statearr_20183_20215[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (9))){
var inst_20145 = (state_20157[(2)]);
var inst_20146 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20157__$1 = (function (){var statearr_20184 = state_20157;
(statearr_20184[(15)] = inst_20145);

return statearr_20184;
})();
if(cljs.core.truth_(inst_20146)){
var statearr_20185_20216 = state_20157__$1;
(statearr_20185_20216[(1)] = (21));

} else {
var statearr_20186_20217 = state_20157__$1;
(statearr_20186_20217[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (5))){
var inst_20101 = cljs.core.async.close_BANG_(out);
var state_20157__$1 = state_20157;
var statearr_20187_20218 = state_20157__$1;
(statearr_20187_20218[(2)] = inst_20101);

(statearr_20187_20218[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (14))){
var inst_20123 = (state_20157[(7)]);
var inst_20125 = cljs.core.chunked_seq_QMARK_(inst_20123);
var state_20157__$1 = state_20157;
if(inst_20125){
var statearr_20188_20219 = state_20157__$1;
(statearr_20188_20219[(1)] = (17));

} else {
var statearr_20189_20220 = state_20157__$1;
(statearr_20189_20220[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (16))){
var inst_20141 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20190_20221 = state_20157__$1;
(statearr_20190_20221[(2)] = inst_20141);

(statearr_20190_20221[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (10))){
var inst_20112 = (state_20157[(9)]);
var inst_20110 = (state_20157[(11)]);
var inst_20117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20110,inst_20112);
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20157__$1,(13),out,inst_20117);
} else {
if((state_val_20158 === (18))){
var inst_20123 = (state_20157[(7)]);
var inst_20132 = cljs.core.first(inst_20123);
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20157__$1,(20),out,inst_20132);
} else {
if((state_val_20158 === (8))){
var inst_20111 = (state_20157[(8)]);
var inst_20112 = (state_20157[(9)]);
var inst_20114 = (inst_20112 < inst_20111);
var inst_20115 = inst_20114;
var state_20157__$1 = state_20157;
if(cljs.core.truth_(inst_20115)){
var statearr_20191_20222 = state_20157__$1;
(statearr_20191_20222[(1)] = (10));

} else {
var statearr_20192_20223 = state_20157__$1;
(statearr_20192_20223[(1)] = (11));

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
});})(c__17637__auto__))
;
return ((function (switch__17513__auto__,c__17637__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17514__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17514__auto____0 = (function (){
var statearr_20196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20196[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17514__auto__);

(statearr_20196[(1)] = (1));

return statearr_20196;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17514__auto____1 = (function (state_20157){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20157);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20197){if((e20197 instanceof Object)){
var ex__17517__auto__ = e20197;
var statearr_20198_20224 = state_20157;
(statearr_20198_20224[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20157);

return cljs.core.cst$kw$recur;
} else {
throw e20197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20225 = state_20157;
state_20157 = G__20225;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17514__auto__ = function(state_20157){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17514__auto____1.call(this,state_20157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17514__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17514__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto__))
})();
var state__17639__auto__ = (function (){var statearr_20199 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto__);

return statearr_20199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto__))
);

return c__17637__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20226 = [];
var len__8139__auto___20229 = arguments.length;
var i__8140__auto___20230 = (0);
while(true){
if((i__8140__auto___20230 < len__8139__auto___20229)){
args20226.push((arguments[i__8140__auto___20230]));

var G__20231 = (i__8140__auto___20230 + (1));
i__8140__auto___20230 = G__20231;
continue;
} else {
}
break;
}

var G__20228 = args20226.length;
switch (G__20228) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20226.length)].join('')));

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
var args20233 = [];
var len__8139__auto___20236 = arguments.length;
var i__8140__auto___20237 = (0);
while(true){
if((i__8140__auto___20237 < len__8139__auto___20236)){
args20233.push((arguments[i__8140__auto___20237]));

var G__20238 = (i__8140__auto___20237 + (1));
i__8140__auto___20237 = G__20238;
continue;
} else {
}
break;
}

var G__20235 = args20233.length;
switch (G__20235) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20233.length)].join('')));

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
var args20240 = [];
var len__8139__auto___20291 = arguments.length;
var i__8140__auto___20292 = (0);
while(true){
if((i__8140__auto___20292 < len__8139__auto___20291)){
args20240.push((arguments[i__8140__auto___20292]));

var G__20293 = (i__8140__auto___20292 + (1));
i__8140__auto___20292 = G__20293;
continue;
} else {
}
break;
}

var G__20242 = args20240.length;
switch (G__20242) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20240.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17637__auto___20295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___20295,out){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___20295,out){
return (function (state_20266){
var state_val_20267 = (state_20266[(1)]);
if((state_val_20267 === (7))){
var inst_20261 = (state_20266[(2)]);
var state_20266__$1 = state_20266;
var statearr_20268_20296 = state_20266__$1;
(statearr_20268_20296[(2)] = inst_20261);

(statearr_20268_20296[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20267 === (1))){
var inst_20243 = null;
var state_20266__$1 = (function (){var statearr_20269 = state_20266;
(statearr_20269[(7)] = inst_20243);

return statearr_20269;
})();
var statearr_20270_20297 = state_20266__$1;
(statearr_20270_20297[(2)] = null);

(statearr_20270_20297[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20267 === (4))){
var inst_20246 = (state_20266[(8)]);
var inst_20246__$1 = (state_20266[(2)]);
var inst_20247 = (inst_20246__$1 == null);
var inst_20248 = cljs.core.not(inst_20247);
var state_20266__$1 = (function (){var statearr_20271 = state_20266;
(statearr_20271[(8)] = inst_20246__$1);

return statearr_20271;
})();
if(inst_20248){
var statearr_20272_20298 = state_20266__$1;
(statearr_20272_20298[(1)] = (5));

} else {
var statearr_20273_20299 = state_20266__$1;
(statearr_20273_20299[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20267 === (6))){
var state_20266__$1 = state_20266;
var statearr_20274_20300 = state_20266__$1;
(statearr_20274_20300[(2)] = null);

(statearr_20274_20300[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20267 === (3))){
var inst_20263 = (state_20266[(2)]);
var inst_20264 = cljs.core.async.close_BANG_(out);
var state_20266__$1 = (function (){var statearr_20275 = state_20266;
(statearr_20275[(9)] = inst_20263);

return statearr_20275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20266__$1,inst_20264);
} else {
if((state_val_20267 === (2))){
var state_20266__$1 = state_20266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20266__$1,(4),ch);
} else {
if((state_val_20267 === (11))){
var inst_20246 = (state_20266[(8)]);
var inst_20255 = (state_20266[(2)]);
var inst_20243 = inst_20246;
var state_20266__$1 = (function (){var statearr_20276 = state_20266;
(statearr_20276[(10)] = inst_20255);

(statearr_20276[(7)] = inst_20243);

return statearr_20276;
})();
var statearr_20277_20301 = state_20266__$1;
(statearr_20277_20301[(2)] = null);

(statearr_20277_20301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20267 === (9))){
var inst_20246 = (state_20266[(8)]);
var state_20266__$1 = state_20266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20266__$1,(11),out,inst_20246);
} else {
if((state_val_20267 === (5))){
var inst_20246 = (state_20266[(8)]);
var inst_20243 = (state_20266[(7)]);
var inst_20250 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20246,inst_20243);
var state_20266__$1 = state_20266;
if(inst_20250){
var statearr_20279_20302 = state_20266__$1;
(statearr_20279_20302[(1)] = (8));

} else {
var statearr_20280_20303 = state_20266__$1;
(statearr_20280_20303[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20267 === (10))){
var inst_20258 = (state_20266[(2)]);
var state_20266__$1 = state_20266;
var statearr_20281_20304 = state_20266__$1;
(statearr_20281_20304[(2)] = inst_20258);

(statearr_20281_20304[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20267 === (8))){
var inst_20243 = (state_20266[(7)]);
var tmp20278 = inst_20243;
var inst_20243__$1 = tmp20278;
var state_20266__$1 = (function (){var statearr_20282 = state_20266;
(statearr_20282[(7)] = inst_20243__$1);

return statearr_20282;
})();
var statearr_20283_20305 = state_20266__$1;
(statearr_20283_20305[(2)] = null);

(statearr_20283_20305[(1)] = (2));


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
});})(c__17637__auto___20295,out))
;
return ((function (switch__17513__auto__,c__17637__auto___20295,out){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_20287 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20287[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_20287[(1)] = (1));

return statearr_20287;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_20266){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20266);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20288){if((e20288 instanceof Object)){
var ex__17517__auto__ = e20288;
var statearr_20289_20306 = state_20266;
(statearr_20289_20306[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20266);

return cljs.core.cst$kw$recur;
} else {
throw e20288;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20307 = state_20266;
state_20266 = G__20307;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_20266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_20266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___20295,out))
})();
var state__17639__auto__ = (function (){var statearr_20290 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___20295);

return statearr_20290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___20295,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20308 = [];
var len__8139__auto___20378 = arguments.length;
var i__8140__auto___20379 = (0);
while(true){
if((i__8140__auto___20379 < len__8139__auto___20378)){
args20308.push((arguments[i__8140__auto___20379]));

var G__20380 = (i__8140__auto___20379 + (1));
i__8140__auto___20379 = G__20380;
continue;
} else {
}
break;
}

var G__20310 = args20308.length;
switch (G__20310) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20308.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17637__auto___20382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___20382,out){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___20382,out){
return (function (state_20348){
var state_val_20349 = (state_20348[(1)]);
if((state_val_20349 === (7))){
var inst_20344 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
var statearr_20350_20383 = state_20348__$1;
(statearr_20350_20383[(2)] = inst_20344);

(statearr_20350_20383[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (1))){
var inst_20311 = (new Array(n));
var inst_20312 = inst_20311;
var inst_20313 = (0);
var state_20348__$1 = (function (){var statearr_20351 = state_20348;
(statearr_20351[(7)] = inst_20312);

(statearr_20351[(8)] = inst_20313);

return statearr_20351;
})();
var statearr_20352_20384 = state_20348__$1;
(statearr_20352_20384[(2)] = null);

(statearr_20352_20384[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (4))){
var inst_20316 = (state_20348[(9)]);
var inst_20316__$1 = (state_20348[(2)]);
var inst_20317 = (inst_20316__$1 == null);
var inst_20318 = cljs.core.not(inst_20317);
var state_20348__$1 = (function (){var statearr_20353 = state_20348;
(statearr_20353[(9)] = inst_20316__$1);

return statearr_20353;
})();
if(inst_20318){
var statearr_20354_20385 = state_20348__$1;
(statearr_20354_20385[(1)] = (5));

} else {
var statearr_20355_20386 = state_20348__$1;
(statearr_20355_20386[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (15))){
var inst_20338 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
var statearr_20356_20387 = state_20348__$1;
(statearr_20356_20387[(2)] = inst_20338);

(statearr_20356_20387[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (13))){
var state_20348__$1 = state_20348;
var statearr_20357_20388 = state_20348__$1;
(statearr_20357_20388[(2)] = null);

(statearr_20357_20388[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (6))){
var inst_20313 = (state_20348[(8)]);
var inst_20334 = (inst_20313 > (0));
var state_20348__$1 = state_20348;
if(cljs.core.truth_(inst_20334)){
var statearr_20358_20389 = state_20348__$1;
(statearr_20358_20389[(1)] = (12));

} else {
var statearr_20359_20390 = state_20348__$1;
(statearr_20359_20390[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (3))){
var inst_20346 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20348__$1,inst_20346);
} else {
if((state_val_20349 === (12))){
var inst_20312 = (state_20348[(7)]);
var inst_20336 = cljs.core.vec(inst_20312);
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20348__$1,(15),out,inst_20336);
} else {
if((state_val_20349 === (2))){
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20348__$1,(4),ch);
} else {
if((state_val_20349 === (11))){
var inst_20328 = (state_20348[(2)]);
var inst_20329 = (new Array(n));
var inst_20312 = inst_20329;
var inst_20313 = (0);
var state_20348__$1 = (function (){var statearr_20360 = state_20348;
(statearr_20360[(7)] = inst_20312);

(statearr_20360[(10)] = inst_20328);

(statearr_20360[(8)] = inst_20313);

return statearr_20360;
})();
var statearr_20361_20391 = state_20348__$1;
(statearr_20361_20391[(2)] = null);

(statearr_20361_20391[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (9))){
var inst_20312 = (state_20348[(7)]);
var inst_20326 = cljs.core.vec(inst_20312);
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20348__$1,(11),out,inst_20326);
} else {
if((state_val_20349 === (5))){
var inst_20321 = (state_20348[(11)]);
var inst_20312 = (state_20348[(7)]);
var inst_20313 = (state_20348[(8)]);
var inst_20316 = (state_20348[(9)]);
var inst_20320 = (inst_20312[inst_20313] = inst_20316);
var inst_20321__$1 = (inst_20313 + (1));
var inst_20322 = (inst_20321__$1 < n);
var state_20348__$1 = (function (){var statearr_20362 = state_20348;
(statearr_20362[(11)] = inst_20321__$1);

(statearr_20362[(12)] = inst_20320);

return statearr_20362;
})();
if(cljs.core.truth_(inst_20322)){
var statearr_20363_20392 = state_20348__$1;
(statearr_20363_20392[(1)] = (8));

} else {
var statearr_20364_20393 = state_20348__$1;
(statearr_20364_20393[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (14))){
var inst_20341 = (state_20348[(2)]);
var inst_20342 = cljs.core.async.close_BANG_(out);
var state_20348__$1 = (function (){var statearr_20366 = state_20348;
(statearr_20366[(13)] = inst_20341);

return statearr_20366;
})();
var statearr_20367_20394 = state_20348__$1;
(statearr_20367_20394[(2)] = inst_20342);

(statearr_20367_20394[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (10))){
var inst_20332 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
var statearr_20368_20395 = state_20348__$1;
(statearr_20368_20395[(2)] = inst_20332);

(statearr_20368_20395[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20349 === (8))){
var inst_20321 = (state_20348[(11)]);
var inst_20312 = (state_20348[(7)]);
var tmp20365 = inst_20312;
var inst_20312__$1 = tmp20365;
var inst_20313 = inst_20321;
var state_20348__$1 = (function (){var statearr_20369 = state_20348;
(statearr_20369[(7)] = inst_20312__$1);

(statearr_20369[(8)] = inst_20313);

return statearr_20369;
})();
var statearr_20370_20396 = state_20348__$1;
(statearr_20370_20396[(2)] = null);

(statearr_20370_20396[(1)] = (2));


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
});})(c__17637__auto___20382,out))
;
return ((function (switch__17513__auto__,c__17637__auto___20382,out){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_20374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20374[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_20374[(1)] = (1));

return statearr_20374;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_20348){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20348);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20375){if((e20375 instanceof Object)){
var ex__17517__auto__ = e20375;
var statearr_20376_20397 = state_20348;
(statearr_20376_20397[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20348);

return cljs.core.cst$kw$recur;
} else {
throw e20375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20398 = state_20348;
state_20348 = G__20398;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_20348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_20348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___20382,out))
})();
var state__17639__auto__ = (function (){var statearr_20377 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___20382);

return statearr_20377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___20382,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20399 = [];
var len__8139__auto___20473 = arguments.length;
var i__8140__auto___20474 = (0);
while(true){
if((i__8140__auto___20474 < len__8139__auto___20473)){
args20399.push((arguments[i__8140__auto___20474]));

var G__20475 = (i__8140__auto___20474 + (1));
i__8140__auto___20474 = G__20475;
continue;
} else {
}
break;
}

var G__20401 = args20399.length;
switch (G__20401) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20399.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17637__auto___20477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17637__auto___20477,out){
return (function (){
var f__17638__auto__ = (function (){var switch__17513__auto__ = ((function (c__17637__auto___20477,out){
return (function (state_20443){
var state_val_20444 = (state_20443[(1)]);
if((state_val_20444 === (7))){
var inst_20439 = (state_20443[(2)]);
var state_20443__$1 = state_20443;
var statearr_20445_20478 = state_20443__$1;
(statearr_20445_20478[(2)] = inst_20439);

(statearr_20445_20478[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (1))){
var inst_20402 = [];
var inst_20403 = inst_20402;
var inst_20404 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_20443__$1 = (function (){var statearr_20446 = state_20443;
(statearr_20446[(7)] = inst_20404);

(statearr_20446[(8)] = inst_20403);

return statearr_20446;
})();
var statearr_20447_20479 = state_20443__$1;
(statearr_20447_20479[(2)] = null);

(statearr_20447_20479[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (4))){
var inst_20407 = (state_20443[(9)]);
var inst_20407__$1 = (state_20443[(2)]);
var inst_20408 = (inst_20407__$1 == null);
var inst_20409 = cljs.core.not(inst_20408);
var state_20443__$1 = (function (){var statearr_20448 = state_20443;
(statearr_20448[(9)] = inst_20407__$1);

return statearr_20448;
})();
if(inst_20409){
var statearr_20449_20480 = state_20443__$1;
(statearr_20449_20480[(1)] = (5));

} else {
var statearr_20450_20481 = state_20443__$1;
(statearr_20450_20481[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (15))){
var inst_20433 = (state_20443[(2)]);
var state_20443__$1 = state_20443;
var statearr_20451_20482 = state_20443__$1;
(statearr_20451_20482[(2)] = inst_20433);

(statearr_20451_20482[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (13))){
var state_20443__$1 = state_20443;
var statearr_20452_20483 = state_20443__$1;
(statearr_20452_20483[(2)] = null);

(statearr_20452_20483[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (6))){
var inst_20403 = (state_20443[(8)]);
var inst_20428 = inst_20403.length;
var inst_20429 = (inst_20428 > (0));
var state_20443__$1 = state_20443;
if(cljs.core.truth_(inst_20429)){
var statearr_20453_20484 = state_20443__$1;
(statearr_20453_20484[(1)] = (12));

} else {
var statearr_20454_20485 = state_20443__$1;
(statearr_20454_20485[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (3))){
var inst_20441 = (state_20443[(2)]);
var state_20443__$1 = state_20443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20443__$1,inst_20441);
} else {
if((state_val_20444 === (12))){
var inst_20403 = (state_20443[(8)]);
var inst_20431 = cljs.core.vec(inst_20403);
var state_20443__$1 = state_20443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20443__$1,(15),out,inst_20431);
} else {
if((state_val_20444 === (2))){
var state_20443__$1 = state_20443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20443__$1,(4),ch);
} else {
if((state_val_20444 === (11))){
var inst_20407 = (state_20443[(9)]);
var inst_20411 = (state_20443[(10)]);
var inst_20421 = (state_20443[(2)]);
var inst_20422 = [];
var inst_20423 = inst_20422.push(inst_20407);
var inst_20403 = inst_20422;
var inst_20404 = inst_20411;
var state_20443__$1 = (function (){var statearr_20455 = state_20443;
(statearr_20455[(7)] = inst_20404);

(statearr_20455[(11)] = inst_20423);

(statearr_20455[(8)] = inst_20403);

(statearr_20455[(12)] = inst_20421);

return statearr_20455;
})();
var statearr_20456_20486 = state_20443__$1;
(statearr_20456_20486[(2)] = null);

(statearr_20456_20486[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (9))){
var inst_20403 = (state_20443[(8)]);
var inst_20419 = cljs.core.vec(inst_20403);
var state_20443__$1 = state_20443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20443__$1,(11),out,inst_20419);
} else {
if((state_val_20444 === (5))){
var inst_20404 = (state_20443[(7)]);
var inst_20407 = (state_20443[(9)]);
var inst_20411 = (state_20443[(10)]);
var inst_20411__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20407) : f.call(null,inst_20407));
var inst_20412 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20411__$1,inst_20404);
var inst_20413 = cljs.core.keyword_identical_QMARK_(inst_20404,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_20414 = (inst_20412) || (inst_20413);
var state_20443__$1 = (function (){var statearr_20457 = state_20443;
(statearr_20457[(10)] = inst_20411__$1);

return statearr_20457;
})();
if(cljs.core.truth_(inst_20414)){
var statearr_20458_20487 = state_20443__$1;
(statearr_20458_20487[(1)] = (8));

} else {
var statearr_20459_20488 = state_20443__$1;
(statearr_20459_20488[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (14))){
var inst_20436 = (state_20443[(2)]);
var inst_20437 = cljs.core.async.close_BANG_(out);
var state_20443__$1 = (function (){var statearr_20461 = state_20443;
(statearr_20461[(13)] = inst_20436);

return statearr_20461;
})();
var statearr_20462_20489 = state_20443__$1;
(statearr_20462_20489[(2)] = inst_20437);

(statearr_20462_20489[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (10))){
var inst_20426 = (state_20443[(2)]);
var state_20443__$1 = state_20443;
var statearr_20463_20490 = state_20443__$1;
(statearr_20463_20490[(2)] = inst_20426);

(statearr_20463_20490[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20444 === (8))){
var inst_20407 = (state_20443[(9)]);
var inst_20403 = (state_20443[(8)]);
var inst_20411 = (state_20443[(10)]);
var inst_20416 = inst_20403.push(inst_20407);
var tmp20460 = inst_20403;
var inst_20403__$1 = tmp20460;
var inst_20404 = inst_20411;
var state_20443__$1 = (function (){var statearr_20464 = state_20443;
(statearr_20464[(7)] = inst_20404);

(statearr_20464[(8)] = inst_20403__$1);

(statearr_20464[(14)] = inst_20416);

return statearr_20464;
})();
var statearr_20465_20491 = state_20443__$1;
(statearr_20465_20491[(2)] = null);

(statearr_20465_20491[(1)] = (2));


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
});})(c__17637__auto___20477,out))
;
return ((function (switch__17513__auto__,c__17637__auto___20477,out){
return (function() {
var cljs$core$async$state_machine__17514__auto__ = null;
var cljs$core$async$state_machine__17514__auto____0 = (function (){
var statearr_20469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20469[(0)] = cljs$core$async$state_machine__17514__auto__);

(statearr_20469[(1)] = (1));

return statearr_20469;
});
var cljs$core$async$state_machine__17514__auto____1 = (function (state_20443){
while(true){
var ret_value__17515__auto__ = (function (){try{while(true){
var result__17516__auto__ = switch__17513__auto__(state_20443);
if(cljs.core.keyword_identical_QMARK_(result__17516__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17516__auto__;
}
break;
}
}catch (e20470){if((e20470 instanceof Object)){
var ex__17517__auto__ = e20470;
var statearr_20471_20492 = state_20443;
(statearr_20471_20492[(5)] = ex__17517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20443);

return cljs.core.cst$kw$recur;
} else {
throw e20470;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17515__auto__,cljs.core.cst$kw$recur)){
var G__20493 = state_20443;
state_20443 = G__20493;
continue;
} else {
return ret_value__17515__auto__;
}
break;
}
});
cljs$core$async$state_machine__17514__auto__ = function(state_20443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17514__auto____1.call(this,state_20443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17514__auto____0;
cljs$core$async$state_machine__17514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17514__auto____1;
return cljs$core$async$state_machine__17514__auto__;
})()
;})(switch__17513__auto__,c__17637__auto___20477,out))
})();
var state__17639__auto__ = (function (){var statearr_20472 = (f__17638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17638__auto__.cljs$core$IFn$_invoke$arity$0() : f__17638__auto__.call(null));
(statearr_20472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17637__auto___20477);

return statearr_20472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17639__auto__);
});})(c__17637__auto___20477,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

