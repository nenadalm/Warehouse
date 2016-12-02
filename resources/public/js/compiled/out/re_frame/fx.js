// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19263){
var vec__19264 = p__19263;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19264,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19264,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__19267_19277 = cljs.core.cst$kw$dispatch_DASH_later;
var G__19268_19278 = ((function (G__19267_19277){
return (function (value){
var seq__19269 = cljs.core.seq(value);
var chunk__19270 = null;
var count__19271 = (0);
var i__19272 = (0);
while(true){
if((i__19272 < count__19271)){
var map__19273 = chunk__19270.cljs$core$IIndexed$_nth$arity$2(null,i__19272);
var map__19273__$1 = ((((!((map__19273 == null)))?((((map__19273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19273):map__19273);
var effect = map__19273__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19269,chunk__19270,count__19271,i__19272,map__19273,map__19273__$1,effect,ms,dispatch,G__19267_19277){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19269,chunk__19270,count__19271,i__19272,map__19273,map__19273__$1,effect,ms,dispatch,G__19267_19277))
,ms);
}

var G__19279 = seq__19269;
var G__19280 = chunk__19270;
var G__19281 = count__19271;
var G__19282 = (i__19272 + (1));
seq__19269 = G__19279;
chunk__19270 = G__19280;
count__19271 = G__19281;
i__19272 = G__19282;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19269);
if(temp__4657__auto__){
var seq__19269__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19269__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__19269__$1);
var G__19283 = cljs.core.chunk_rest(seq__19269__$1);
var G__19284 = c__7398__auto__;
var G__19285 = cljs.core.count(c__7398__auto__);
var G__19286 = (0);
seq__19269 = G__19283;
chunk__19270 = G__19284;
count__19271 = G__19285;
i__19272 = G__19286;
continue;
} else {
var map__19275 = cljs.core.first(seq__19269__$1);
var map__19275__$1 = ((((!((map__19275 == null)))?((((map__19275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19275):map__19275);
var effect = map__19275__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19269,chunk__19270,count__19271,i__19272,map__19275,map__19275__$1,effect,ms,dispatch,seq__19269__$1,temp__4657__auto__,G__19267_19277){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19269,chunk__19270,count__19271,i__19272,map__19275,map__19275__$1,effect,ms,dispatch,seq__19269__$1,temp__4657__auto__,G__19267_19277))
,ms);
}

var G__19287 = cljs.core.next(seq__19269__$1);
var G__19288 = null;
var G__19289 = (0);
var G__19290 = (0);
seq__19269 = G__19287;
chunk__19270 = G__19288;
count__19271 = G__19289;
i__19272 = G__19290;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__19267_19277))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19267_19277,G__19268_19278) : re_frame.fx.register.call(null,G__19267_19277,G__19268_19278));
var G__19291_19293 = cljs.core.cst$kw$dispatch;
var G__19292_19294 = ((function (G__19291_19293){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__19291_19293))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19291_19293,G__19292_19294) : re_frame.fx.register.call(null,G__19291_19293,G__19292_19294));
var G__19295_19301 = cljs.core.cst$kw$dispatch_DASH_n;
var G__19296_19302 = ((function (G__19295_19301){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__19297 = cljs.core.seq(value);
var chunk__19298 = null;
var count__19299 = (0);
var i__19300 = (0);
while(true){
if((i__19300 < count__19299)){
var event = chunk__19298.cljs$core$IIndexed$_nth$arity$2(null,i__19300);
re_frame.router.dispatch(event);

var G__19303 = seq__19297;
var G__19304 = chunk__19298;
var G__19305 = count__19299;
var G__19306 = (i__19300 + (1));
seq__19297 = G__19303;
chunk__19298 = G__19304;
count__19299 = G__19305;
i__19300 = G__19306;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19297);
if(temp__4657__auto__){
var seq__19297__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19297__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__19297__$1);
var G__19307 = cljs.core.chunk_rest(seq__19297__$1);
var G__19308 = c__7398__auto__;
var G__19309 = cljs.core.count(c__7398__auto__);
var G__19310 = (0);
seq__19297 = G__19307;
chunk__19298 = G__19308;
count__19299 = G__19309;
i__19300 = G__19310;
continue;
} else {
var event = cljs.core.first(seq__19297__$1);
re_frame.router.dispatch(event);

var G__19311 = cljs.core.next(seq__19297__$1);
var G__19312 = null;
var G__19313 = (0);
var G__19314 = (0);
seq__19297 = G__19311;
chunk__19298 = G__19312;
count__19299 = G__19313;
i__19300 = G__19314;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__19295_19301))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19295_19301,G__19296_19302) : re_frame.fx.register.call(null,G__19295_19301,G__19296_19302));
var G__19315_19317 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__19316_19318 = ((function (G__19315_19317){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__19315_19317))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19315_19317,G__19316_19318) : re_frame.fx.register.call(null,G__19315_19317,G__19316_19318));
var G__19319_19321 = cljs.core.cst$kw$db;
var G__19320_19322 = ((function (G__19319_19321){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__19319_19321))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19319_19321,G__19320_19322) : re_frame.fx.register.call(null,G__19319_19321,G__19320_19322));
