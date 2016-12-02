// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.cofx');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.cofx.kind = cljs.core.cst$kw$cofx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.cofx.kind) : re_frame.registrar.kinds.call(null,re_frame.cofx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.cofx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.cofx.kind);
/**
 * Returns an interceptor which adds to a `context's` `:coeffects`.
 * 
 *   `coeffects` are the input resources required by an event handler
 * to perform its job. The two most obvious ones are `db` and `event`.
 * But sometimes a handler might need other resources.
 * 
 * Perhaps a handler needs a random number or a GUID or the current datetime.
 * Perhaps it needs access to the connection to a DataScript database.
 * 
 * If the handler directly access these resources, it stops being as
 * pure. It immedaitely becomes harder to test, etc.
 * 
 * So the necessary resources are "injected" into the `coeffect` (map)
 * given the handler.
 * 
 * Given an `id`, and an optional value, lookup the registered coeffect
 * handler (previously registered via `reg-cofx`) and it with two arguments:
 * the current value of `:coeffect` and, optionally, the value. The registered handler
 * is expected to return a modified coeffect.
 * 
 */
re_frame.cofx.inject_cofx = (function re_frame$cofx$inject_cofx(var_args){
var args15796 = [];
var len__7692__auto___15799 = arguments.length;
var i__7693__auto___15800 = (0);
while(true){
if((i__7693__auto___15800 < len__7692__auto___15799)){
args15796.push((arguments[i__7693__auto___15800]));

var G__15801 = (i__7693__auto___15800 + (1));
i__7693__auto___15800 = G__15801;
continue;
} else {
}
break;
}

var G__15798 = args15796.length;
switch (G__15798) {
case 1:
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15796.length)].join('')));

}
});

re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$coeffects,cljs.core.cst$kw$before,(function re_frame$cofx$coeffects_before(context){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$coeffects,re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind,id));
})], 0));
});

re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$coeffects,cljs.core.cst$kw$before,(function re_frame$cofx$coeffects_before(context){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$coeffects,re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind,id),value);
})], 0));
});

re_frame.cofx.inject_cofx.cljs$lang$maxFixedArity = 2;

var G__15803_15805 = cljs.core.cst$kw$db;
var G__15804_15806 = ((function (G__15803_15805){
return (function re_frame$cofx$db_coeffects_handler(coeffects){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$db,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : cljs.core.deref.call(null,re_frame.db.app_db)));
});})(G__15803_15805))
;
(re_frame.cofx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.cofx.register.cljs$core$IFn$_invoke$arity$2(G__15803_15805,G__15804_15806) : re_frame.cofx.register.call(null,G__15803_15805,G__15804_15806));
re_frame.cofx.inject_db = re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$db);
