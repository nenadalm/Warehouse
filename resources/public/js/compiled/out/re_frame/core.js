// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.subs');
goog.require('re_frame.cofx');
goog.require('re_frame.interceptor');
goog.require('re_frame.fx');
goog.require('re_frame.events');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.std_interceptors');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
re_frame.core.reg_sub_raw = re_frame.subs.register_raw;
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.reg_fx = re_frame.fx.register;
re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.register;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.cofx.kind);
re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
/**
 * Register the given `id`, typically a keyword, with the combination of
 *   `db-handler` and an interceptor chain.
 *   `db-handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors, possibly nested (needs flattenting).
 *   `db-handler` is wrapped in an interceptor and added to the end of the chain, so in the end
 * there is only a chain.
 * The necessary effects and coeffects handler are added to the front of the
 * interceptor chain.  These interceptors ensure that app-db is available and updated.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var args15809 = [];
var len__7692__auto___15812 = arguments.length;
var i__7693__auto___15813 = (0);
while(true){
if((i__7693__auto___15813 < len__7692__auto___15812)){
args15809.push((arguments[i__7693__auto___15813]));

var G__15814 = (i__7693__auto___15813 + (1));
i__7693__auto___15813 = G__15814;
continue;
} else {
}
break;
}

var G__15811 = args15809.length;
switch (G__15811) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15809.length)].join('')));

}
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,db_handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,db_handler);
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,db_handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(db_handler)], null));
});

re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var args15816 = [];
var len__7692__auto___15819 = arguments.length;
var i__7693__auto___15820 = (0);
while(true){
if((i__7693__auto___15820 < len__7692__auto___15819)){
args15816.push((arguments[i__7693__auto___15820]));

var G__15821 = (i__7693__auto___15820 + (1));
i__7693__auto___15820 = G__15821;
continue;
} else {
}
break;
}

var G__15818 = args15816.length;
switch (G__15818) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15816.length)].join('')));

}
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,fx_handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,fx_handler);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,fx_handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(fx_handler)], null));
});

re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var args15823 = [];
var len__7692__auto___15826 = arguments.length;
var i__7693__auto___15827 = (0);
while(true){
if((i__7693__auto___15827 < len__7692__auto___15826)){
args15823.push((arguments[i__7693__auto___15827]));

var G__15828 = (i__7693__auto___15827 + (1));
i__7693__auto___15827 = G__15828;
continue;
} else {
}
break;
}

var G__15825 = args15823.length;
switch (G__15825) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15823.length)].join('')));

}
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
var app_db = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : cljs.core.deref.call(null,re_frame.db.app_db));
var subs_cache = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
return ((function (handlers,app_db,subs_cache){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction,subs_cache) : cljs.core.reset_BANG_.call(null,re_frame.subs.query__GT_reaction,subs_cache));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.kind__GT_id__GT_handler,handlers) : cljs.core.reset_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,handlers));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,app_db) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,app_db));

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is procecessed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var args15830 = [];
var len__7692__auto___15833 = arguments.length;
var i__7693__auto___15834 = (0);
while(true){
if((i__7693__auto___15834 < len__7692__auto___15833)){
args15830.push((arguments[i__7693__auto___15834]));

var G__15835 = (i__7693__auto___15834 + (1));
i__7693__auto___15834 = G__15835;
continue;
} else {
}
break;
}

var G__15832 = args15830.length;
switch (G__15832) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15830.length)].join('')));

}
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback(re_frame.router.event_queue,id,f);
});

re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback(re_frame.router.event_queue,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__7699__auto__ = [];
var len__7692__auto___15842 = arguments.length;
var i__7693__auto___15843 = (0);
while(true){
if((i__7693__auto___15843 < len__7692__auto___15842)){
args__7699__auto__.push((arguments[i__7693__auto___15843]));

var G__15844 = (i__7693__auto___15843 + (1));
i__7693__auto___15843 = G__15844;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__15838_15845 = cljs.core.cst$kw$warn;
var G__15839_15846 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ";
var G__15840_15847 = [cljs.core.str(cljs.core.first(args))].join('');
var G__15841_15848 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__15838_15845,G__15839_15846,G__15840_15847,G__15841_15848) : re_frame.core.console.call(null,G__15838_15845,G__15839_15846,G__15840_15847,G__15841_15848));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db,args);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

re_frame.core.register_handler.cljs$lang$applyTo = (function (seq15837){
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15837));
});

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__7699__auto__ = [];
var len__7692__auto___15854 = arguments.length;
var i__7693__auto___15855 = (0);
while(true){
if((i__7693__auto___15855 < len__7692__auto___15854)){
args__7699__auto__.push((arguments[i__7693__auto___15855]));

var G__15856 = (i__7693__auto___15855 + (1));
i__7693__auto___15855 = G__15856;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});

re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__15850_15857 = cljs.core.cst$kw$warn;
var G__15851_15858 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ";
var G__15852_15859 = [cljs.core.str(cljs.core.first(args))].join('');
var G__15853_15860 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__15850_15857,G__15851_15858,G__15852_15859,G__15853_15860) : re_frame.core.console.call(null,G__15850_15857,G__15851_15858,G__15852_15859,G__15853_15860));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw,args);
});

re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

re_frame.core.register_sub.cljs$lang$applyTo = (function (seq15849){
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15849));
});

