// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__14960__auto___15162 = (function (params__14961__auto__){
if(cljs.core.map_QMARK_(params__14961__auto__)){
var map__15154 = params__14961__auto__;
var map__15154__$1 = ((((!((map__15154 == null)))?((((map__15154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15154):map__15154);
var G__15156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15156) : re_frame.core.dispatch.call(null,G__15156));
} else {
if(cljs.core.vector_QMARK_(params__14961__auto__)){
var vec__15157 = params__14961__auto__;
var G__15160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15160) : re_frame.core.dispatch.call(null,G__15160));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__14960__auto___15162);

warehouse.routes.homepage = ((function (action__14960__auto___15162){
return (function warehouse$routes$homepage(var_args){
var args__7792__auto__ = [];
var len__7785__auto___15163 = arguments.length;
var i__7786__auto___15164 = (0);
while(true){
if((i__7786__auto___15164 < len__7785__auto___15163)){
args__7792__auto__.push((arguments[i__7786__auto___15164]));

var G__15165 = (i__7786__auto___15164 + (1));
i__7786__auto___15164 = G__15165;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((0) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__7793__auto__);
});})(action__14960__auto___15162))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14960__auto___15162){
return (function (args__14959__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__14959__auto__);
});})(action__14960__auto___15162))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__14960__auto___15162){
return (function (seq15161){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15161));
});})(action__14960__auto___15162))
;

var action__14960__auto___15174 = (function (params__14961__auto__){
if(cljs.core.map_QMARK_(params__14961__auto__)){
var map__15166 = params__14961__auto__;
var map__15166__$1 = ((((!((map__15166 == null)))?((((map__15166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15166):map__15166);
var G__15168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15168) : re_frame.core.dispatch.call(null,G__15168));
} else {
if(cljs.core.vector_QMARK_(params__14961__auto__)){
var vec__15169 = params__14961__auto__;
var G__15172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15172) : re_frame.core.dispatch.call(null,G__15172));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__14960__auto___15174);

warehouse.routes.processes = ((function (action__14960__auto___15174){
return (function warehouse$routes$processes(var_args){
var args__7792__auto__ = [];
var len__7785__auto___15175 = arguments.length;
var i__7786__auto___15176 = (0);
while(true){
if((i__7786__auto___15176 < len__7785__auto___15175)){
args__7792__auto__.push((arguments[i__7786__auto___15176]));

var G__15177 = (i__7786__auto___15176 + (1));
i__7786__auto___15176 = G__15177;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((0) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__7793__auto__);
});})(action__14960__auto___15174))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14960__auto___15174){
return (function (args__14959__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__14959__auto__);
});})(action__14960__auto___15174))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__14960__auto___15174){
return (function (seq15173){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15173));
});})(action__14960__auto___15174))
;

