// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__14882__auto___15084 = (function (params__14883__auto__){
if(cljs.core.map_QMARK_(params__14883__auto__)){
var map__15076 = params__14883__auto__;
var map__15076__$1 = ((((!((map__15076 == null)))?((((map__15076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15076):map__15076);
var G__15078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15078) : re_frame.core.dispatch.call(null,G__15078));
} else {
if(cljs.core.vector_QMARK_(params__14883__auto__)){
var vec__15079 = params__14883__auto__;
var G__15082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15082) : re_frame.core.dispatch.call(null,G__15082));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__14882__auto___15084);

warehouse.routes.homepage = ((function (action__14882__auto___15084){
return (function warehouse$routes$homepage(var_args){
var args__7792__auto__ = [];
var len__7785__auto___15085 = arguments.length;
var i__7786__auto___15086 = (0);
while(true){
if((i__7786__auto___15086 < len__7785__auto___15085)){
args__7792__auto__.push((arguments[i__7786__auto___15086]));

var G__15087 = (i__7786__auto___15086 + (1));
i__7786__auto___15086 = G__15087;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((0) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__7793__auto__);
});})(action__14882__auto___15084))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14882__auto___15084){
return (function (args__14881__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__14881__auto__);
});})(action__14882__auto___15084))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__14882__auto___15084){
return (function (seq15083){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15083));
});})(action__14882__auto___15084))
;

var action__14882__auto___15096 = (function (params__14883__auto__){
if(cljs.core.map_QMARK_(params__14883__auto__)){
var map__15088 = params__14883__auto__;
var map__15088__$1 = ((((!((map__15088 == null)))?((((map__15088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15088):map__15088);
var G__15090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15090) : re_frame.core.dispatch.call(null,G__15090));
} else {
if(cljs.core.vector_QMARK_(params__14883__auto__)){
var vec__15091 = params__14883__auto__;
var G__15094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15094) : re_frame.core.dispatch.call(null,G__15094));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__14882__auto___15096);

warehouse.routes.processes = ((function (action__14882__auto___15096){
return (function warehouse$routes$processes(var_args){
var args__7792__auto__ = [];
var len__7785__auto___15097 = arguments.length;
var i__7786__auto___15098 = (0);
while(true){
if((i__7786__auto___15098 < len__7785__auto___15097)){
args__7792__auto__.push((arguments[i__7786__auto___15098]));

var G__15099 = (i__7786__auto___15098 + (1));
i__7786__auto___15098 = G__15099;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((0) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__7793__auto__);
});})(action__14882__auto___15096))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14882__auto___15096){
return (function (args__14881__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__14881__auto__);
});})(action__14882__auto___15096))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__14882__auto___15096){
return (function (seq15095){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15095));
});})(action__14882__auto___15096))
;

