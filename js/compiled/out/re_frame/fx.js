// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var seq__14583 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14584 = null;
var count__14585 = (0);
var i__14586 = (0);
while(true){
if((i__14586 < count__14585)){
var vec__14587 = chunk__14584.cljs$core$IIndexed$_nth$arity$2(null,i__14586);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14587,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14587,(1),null);
var temp__4655__auto___14593 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___14593)){
var effect_fn_14594 = temp__4655__auto___14593;
(effect_fn_14594.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14594.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_14594.call(null,value));
} else {
}

var G__14595 = seq__14583;
var G__14596 = chunk__14584;
var G__14597 = count__14585;
var G__14598 = (i__14586 + (1));
seq__14583 = G__14595;
chunk__14584 = G__14596;
count__14585 = G__14597;
i__14586 = G__14598;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14583);
if(temp__4657__auto__){
var seq__14583__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14583__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14583__$1);
var G__14599 = cljs.core.chunk_rest(seq__14583__$1);
var G__14600 = c__7845__auto__;
var G__14601 = cljs.core.count(c__7845__auto__);
var G__14602 = (0);
seq__14583 = G__14599;
chunk__14584 = G__14600;
count__14585 = G__14601;
i__14586 = G__14602;
continue;
} else {
var vec__14590 = cljs.core.first(seq__14583__$1);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14590,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14590,(1),null);
var temp__4655__auto___14603 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___14603)){
var effect_fn_14604 = temp__4655__auto___14603;
(effect_fn_14604.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14604.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_14604.call(null,value));
} else {
}

var G__14605 = cljs.core.next(seq__14583__$1);
var G__14606 = null;
var G__14607 = (0);
var G__14608 = (0);
seq__14583 = G__14605;
chunk__14584 = G__14606;
count__14585 = G__14607;
i__14586 = G__14608;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
var G__14609_14619 = cljs.core.cst$kw$dispatch_DASH_later;
var G__14610_14620 = ((function (G__14609_14619){
return (function (value){
var seq__14611 = cljs.core.seq(value);
var chunk__14612 = null;
var count__14613 = (0);
var i__14614 = (0);
while(true){
if((i__14614 < count__14613)){
var map__14615 = chunk__14612.cljs$core$IIndexed$_nth$arity$2(null,i__14614);
var map__14615__$1 = ((((!((map__14615 == null)))?((((map__14615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14615):map__14615);
var effect = map__14615__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14615__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14615__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14611,chunk__14612,count__14613,i__14614,map__14615,map__14615__$1,effect,ms,dispatch,G__14609_14619){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14611,chunk__14612,count__14613,i__14614,map__14615,map__14615__$1,effect,ms,dispatch,G__14609_14619))
,ms);
}

var G__14621 = seq__14611;
var G__14622 = chunk__14612;
var G__14623 = count__14613;
var G__14624 = (i__14614 + (1));
seq__14611 = G__14621;
chunk__14612 = G__14622;
count__14613 = G__14623;
i__14614 = G__14624;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14611);
if(temp__4657__auto__){
var seq__14611__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14611__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14611__$1);
var G__14625 = cljs.core.chunk_rest(seq__14611__$1);
var G__14626 = c__7845__auto__;
var G__14627 = cljs.core.count(c__7845__auto__);
var G__14628 = (0);
seq__14611 = G__14625;
chunk__14612 = G__14626;
count__14613 = G__14627;
i__14614 = G__14628;
continue;
} else {
var map__14617 = cljs.core.first(seq__14611__$1);
var map__14617__$1 = ((((!((map__14617 == null)))?((((map__14617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14617):map__14617);
var effect = map__14617__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14617__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14617__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14611,chunk__14612,count__14613,i__14614,map__14617,map__14617__$1,effect,ms,dispatch,seq__14611__$1,temp__4657__auto__,G__14609_14619){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14611,chunk__14612,count__14613,i__14614,map__14617,map__14617__$1,effect,ms,dispatch,seq__14611__$1,temp__4657__auto__,G__14609_14619))
,ms);
}

var G__14629 = cljs.core.next(seq__14611__$1);
var G__14630 = null;
var G__14631 = (0);
var G__14632 = (0);
seq__14611 = G__14629;
chunk__14612 = G__14630;
count__14613 = G__14631;
i__14614 = G__14632;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14609_14619))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14609_14619,G__14610_14620) : re_frame.fx.register.call(null,G__14609_14619,G__14610_14620));
var G__14633_14635 = cljs.core.cst$kw$dispatch;
var G__14634_14636 = ((function (G__14633_14635){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__14633_14635))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14633_14635,G__14634_14636) : re_frame.fx.register.call(null,G__14633_14635,G__14634_14636));
var G__14637_14643 = cljs.core.cst$kw$dispatch_DASH_n;
var G__14638_14644 = ((function (G__14637_14643){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
}

var seq__14639 = cljs.core.seq(value);
var chunk__14640 = null;
var count__14641 = (0);
var i__14642 = (0);
while(true){
if((i__14642 < count__14641)){
var event = chunk__14640.cljs$core$IIndexed$_nth$arity$2(null,i__14642);
re_frame.router.dispatch(event);

var G__14645 = seq__14639;
var G__14646 = chunk__14640;
var G__14647 = count__14641;
var G__14648 = (i__14642 + (1));
seq__14639 = G__14645;
chunk__14640 = G__14646;
count__14641 = G__14647;
i__14642 = G__14648;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14639);
if(temp__4657__auto__){
var seq__14639__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14639__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14639__$1);
var G__14649 = cljs.core.chunk_rest(seq__14639__$1);
var G__14650 = c__7845__auto__;
var G__14651 = cljs.core.count(c__7845__auto__);
var G__14652 = (0);
seq__14639 = G__14649;
chunk__14640 = G__14650;
count__14641 = G__14651;
i__14642 = G__14652;
continue;
} else {
var event = cljs.core.first(seq__14639__$1);
re_frame.router.dispatch(event);

var G__14653 = cljs.core.next(seq__14639__$1);
var G__14654 = null;
var G__14655 = (0);
var G__14656 = (0);
seq__14639 = G__14653;
chunk__14640 = G__14654;
count__14641 = G__14655;
i__14642 = G__14656;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14637_14643))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14637_14643,G__14638_14644) : re_frame.fx.register.call(null,G__14637_14643,G__14638_14644));
var G__14657_14663 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__14658_14664 = ((function (G__14657_14663){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14659 = cljs.core.seq(((cljs.core.sequential_QMARK_(value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__14660 = null;
var count__14661 = (0);
var i__14662 = (0);
while(true){
if((i__14662 < count__14661)){
var event = chunk__14660.cljs$core$IIndexed$_nth$arity$2(null,i__14662);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14665 = seq__14659;
var G__14666 = chunk__14660;
var G__14667 = count__14661;
var G__14668 = (i__14662 + (1));
seq__14659 = G__14665;
chunk__14660 = G__14666;
count__14661 = G__14667;
i__14662 = G__14668;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14659);
if(temp__4657__auto__){
var seq__14659__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14659__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14659__$1);
var G__14669 = cljs.core.chunk_rest(seq__14659__$1);
var G__14670 = c__7845__auto__;
var G__14671 = cljs.core.count(c__7845__auto__);
var G__14672 = (0);
seq__14659 = G__14669;
chunk__14660 = G__14670;
count__14661 = G__14671;
i__14662 = G__14672;
continue;
} else {
var event = cljs.core.first(seq__14659__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14673 = cljs.core.next(seq__14659__$1);
var G__14674 = null;
var G__14675 = (0);
var G__14676 = (0);
seq__14659 = G__14673;
chunk__14660 = G__14674;
count__14661 = G__14675;
i__14662 = G__14676;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(G__14657_14663))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14657_14663,G__14658_14664) : re_frame.fx.register.call(null,G__14657_14663,G__14658_14664));
var G__14677_14679 = cljs.core.cst$kw$db;
var G__14678_14680 = ((function (G__14677_14679){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__14677_14679))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14677_14679,G__14678_14680) : re_frame.fx.register.call(null,G__14677_14679,G__14678_14680));
