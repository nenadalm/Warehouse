// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__15001__auto___15203 = (function (params__15002__auto__){
if(cljs.core.map_QMARK_(params__15002__auto__)){
var map__15195 = params__15002__auto__;
var map__15195__$1 = ((((!((map__15195 == null)))?((((map__15195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15195):map__15195);
var G__15197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15197) : re_frame.core.dispatch.call(null,G__15197));
} else {
if(cljs.core.vector_QMARK_(params__15002__auto__)){
var vec__15198 = params__15002__auto__;
var G__15201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15201) : re_frame.core.dispatch.call(null,G__15201));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15001__auto___15203);

warehouse.routes.homepage = ((function (action__15001__auto___15203){
return (function warehouse$routes$homepage(var_args){
var args__7792__auto__ = [];
var len__7785__auto___15204 = arguments.length;
var i__7786__auto___15205 = (0);
while(true){
if((i__7786__auto___15205 < len__7785__auto___15204)){
args__7792__auto__.push((arguments[i__7786__auto___15205]));

var G__15206 = (i__7786__auto___15205 + (1));
i__7786__auto___15205 = G__15206;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((0) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__7793__auto__);
});})(action__15001__auto___15203))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__15001__auto___15203){
return (function (args__15000__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__15000__auto__);
});})(action__15001__auto___15203))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__15001__auto___15203){
return (function (seq15202){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15202));
});})(action__15001__auto___15203))
;

var action__15001__auto___15215 = (function (params__15002__auto__){
if(cljs.core.map_QMARK_(params__15002__auto__)){
var map__15207 = params__15002__auto__;
var map__15207__$1 = ((((!((map__15207 == null)))?((((map__15207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15207):map__15207);
var G__15209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15209) : re_frame.core.dispatch.call(null,G__15209));
} else {
if(cljs.core.vector_QMARK_(params__15002__auto__)){
var vec__15210 = params__15002__auto__;
var G__15213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15213) : re_frame.core.dispatch.call(null,G__15213));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__15001__auto___15215);

warehouse.routes.processes = ((function (action__15001__auto___15215){
return (function warehouse$routes$processes(var_args){
var args__7792__auto__ = [];
var len__7785__auto___15216 = arguments.length;
var i__7786__auto___15217 = (0);
while(true){
if((i__7786__auto___15217 < len__7785__auto___15216)){
args__7792__auto__.push((arguments[i__7786__auto___15217]));

var G__15218 = (i__7786__auto___15217 + (1));
i__7786__auto___15217 = G__15218;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((0) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__7793__auto__);
});})(action__15001__auto___15215))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__15001__auto___15215){
return (function (args__15000__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__15000__auto__);
});})(action__15001__auto___15215))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__15001__auto___15215){
return (function (seq15214){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15214));
});})(action__15001__auto___15215))
;

