// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__16004__auto___16206 = (function (params__16005__auto__){
if(cljs.core.map_QMARK_(params__16005__auto__)){
var map__16198 = params__16005__auto__;
var map__16198__$1 = ((((!((map__16198 == null)))?((((map__16198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16198):map__16198);
var G__16200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16200) : re_frame.core.dispatch.call(null,G__16200));
} else {
if(cljs.core.vector_QMARK_(params__16005__auto__)){
var vec__16201 = params__16005__auto__;
var G__16204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16204) : re_frame.core.dispatch.call(null,G__16204));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16004__auto___16206);

warehouse.routes.homepage = ((function (action__16004__auto___16206){
return (function warehouse$routes$homepage(var_args){
var args__7699__auto__ = [];
var len__7692__auto___16207 = arguments.length;
var i__7693__auto___16208 = (0);
while(true){
if((i__7693__auto___16208 < len__7692__auto___16207)){
args__7699__auto__.push((arguments[i__7693__auto___16208]));

var G__16209 = (i__7693__auto___16208 + (1));
i__7693__auto___16208 = G__16209;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__16004__auto___16206))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16004__auto___16206){
return (function (args__16003__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__16003__auto__);
});})(action__16004__auto___16206))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__16004__auto___16206){
return (function (seq16205){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16205));
});})(action__16004__auto___16206))
;

var action__16004__auto___16218 = (function (params__16005__auto__){
if(cljs.core.map_QMARK_(params__16005__auto__)){
var map__16210 = params__16005__auto__;
var map__16210__$1 = ((((!((map__16210 == null)))?((((map__16210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16210):map__16210);
var G__16212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16212) : re_frame.core.dispatch.call(null,G__16212));
} else {
if(cljs.core.vector_QMARK_(params__16005__auto__)){
var vec__16213 = params__16005__auto__;
var G__16216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16216) : re_frame.core.dispatch.call(null,G__16216));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__16004__auto___16218);

warehouse.routes.processes = ((function (action__16004__auto___16218){
return (function warehouse$routes$processes(var_args){
var args__7699__auto__ = [];
var len__7692__auto___16219 = arguments.length;
var i__7693__auto___16220 = (0);
while(true){
if((i__7693__auto___16220 < len__7692__auto___16219)){
args__7699__auto__.push((arguments[i__7693__auto___16220]));

var G__16221 = (i__7693__auto___16220 + (1));
i__7693__auto___16220 = G__16221;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__16004__auto___16218))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16004__auto___16218){
return (function (args__16003__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__16003__auto__);
});})(action__16004__auto___16218))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__16004__auto___16218){
return (function (seq16217){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16217));
});})(action__16004__auto___16218))
;

