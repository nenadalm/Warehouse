// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__14992__auto___15194 = (function (params__14993__auto__){
if(cljs.core.map_QMARK_(params__14993__auto__)){
var map__15186 = params__14993__auto__;
var map__15186__$1 = ((((!((map__15186 == null)))?((((map__15186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15186):map__15186);
var G__15188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15188) : re_frame.core.dispatch.call(null,G__15188));
} else {
if(cljs.core.vector_QMARK_(params__14993__auto__)){
var vec__15189 = params__14993__auto__;
var G__15192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15192) : re_frame.core.dispatch.call(null,G__15192));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__14992__auto___15194);

warehouse.routes.homepage = ((function (action__14992__auto___15194){
return (function warehouse$routes$homepage(var_args){
var args__7792__auto__ = [];
var len__7785__auto___15195 = arguments.length;
var i__7786__auto___15196 = (0);
while(true){
if((i__7786__auto___15196 < len__7785__auto___15195)){
args__7792__auto__.push((arguments[i__7786__auto___15196]));

var G__15197 = (i__7786__auto___15196 + (1));
i__7786__auto___15196 = G__15197;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((0) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__7793__auto__);
});})(action__14992__auto___15194))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14992__auto___15194){
return (function (args__14991__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__14991__auto__);
});})(action__14992__auto___15194))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__14992__auto___15194){
return (function (seq15193){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15193));
});})(action__14992__auto___15194))
;

var action__14992__auto___15206 = (function (params__14993__auto__){
if(cljs.core.map_QMARK_(params__14993__auto__)){
var map__15198 = params__14993__auto__;
var map__15198__$1 = ((((!((map__15198 == null)))?((((map__15198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15198):map__15198);
var G__15200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15200) : re_frame.core.dispatch.call(null,G__15200));
} else {
if(cljs.core.vector_QMARK_(params__14993__auto__)){
var vec__15201 = params__14993__auto__;
var G__15204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15204) : re_frame.core.dispatch.call(null,G__15204));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__14992__auto___15206);

warehouse.routes.processes = ((function (action__14992__auto___15206){
return (function warehouse$routes$processes(var_args){
var args__7792__auto__ = [];
var len__7785__auto___15207 = arguments.length;
var i__7786__auto___15208 = (0);
while(true){
if((i__7786__auto___15208 < len__7785__auto___15207)){
args__7792__auto__.push((arguments[i__7786__auto___15208]));

var G__15209 = (i__7786__auto___15208 + (1));
i__7786__auto___15208 = G__15209;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((0) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__7793__auto__);
});})(action__14992__auto___15206))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14992__auto___15206){
return (function (args__14991__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__14991__auto__);
});})(action__14992__auto___15206))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__14992__auto___15206){
return (function (seq15205){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15205));
});})(action__14992__auto___15206))
;

