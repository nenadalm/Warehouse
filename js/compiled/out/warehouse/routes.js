// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__16434__auto___16636 = (function (params__16435__auto__){
if(cljs.core.map_QMARK_(params__16435__auto__)){
var map__16628 = params__16435__auto__;
var map__16628__$1 = ((((!((map__16628 == null)))?((((map__16628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16628):map__16628);
var G__16630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16630) : re_frame.core.dispatch.call(null,G__16630));
} else {
if(cljs.core.vector_QMARK_(params__16435__auto__)){
var vec__16631 = params__16435__auto__;
var G__16634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16634) : re_frame.core.dispatch.call(null,G__16634));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16434__auto___16636);

warehouse.routes.homepage = ((function (action__16434__auto___16636){
return (function warehouse$routes$homepage(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16637 = arguments.length;
var i__8140__auto___16638 = (0);
while(true){
if((i__8140__auto___16638 < len__8139__auto___16637)){
args__8146__auto__.push((arguments[i__8140__auto___16638]));

var G__16639 = (i__8140__auto___16638 + (1));
i__8140__auto___16638 = G__16639;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16434__auto___16636))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16434__auto___16636){
return (function (args__16433__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__16433__auto__);
});})(action__16434__auto___16636))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__16434__auto___16636){
return (function (seq16635){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16635));
});})(action__16434__auto___16636))
;

var action__16434__auto___16648 = (function (params__16435__auto__){
if(cljs.core.map_QMARK_(params__16435__auto__)){
var map__16640 = params__16435__auto__;
var map__16640__$1 = ((((!((map__16640 == null)))?((((map__16640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16640):map__16640);
var G__16642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16642) : re_frame.core.dispatch.call(null,G__16642));
} else {
if(cljs.core.vector_QMARK_(params__16435__auto__)){
var vec__16643 = params__16435__auto__;
var G__16646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16646) : re_frame.core.dispatch.call(null,G__16646));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__16434__auto___16648);

warehouse.routes.processes = ((function (action__16434__auto___16648){
return (function warehouse$routes$processes(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16649 = arguments.length;
var i__8140__auto___16650 = (0);
while(true){
if((i__8140__auto___16650 < len__8139__auto___16649)){
args__8146__auto__.push((arguments[i__8140__auto___16650]));

var G__16651 = (i__8140__auto___16650 + (1));
i__8140__auto___16650 = G__16651;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16434__auto___16648))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16434__auto___16648){
return (function (args__16433__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__16433__auto__);
});})(action__16434__auto___16648))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__16434__auto___16648){
return (function (seq16647){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16647));
});})(action__16434__auto___16648))
;

