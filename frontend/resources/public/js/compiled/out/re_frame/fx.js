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
var seq__14591 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14592 = null;
var count__14593 = (0);
var i__14594 = (0);
while(true){
if((i__14594 < count__14593)){
var vec__14595 = chunk__14592.cljs$core$IIndexed$_nth$arity$2(null,i__14594);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14595,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14595,(1),null);
var temp__4655__auto___14601 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___14601)){
var effect_fn_14602 = temp__4655__auto___14601;
(effect_fn_14602.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14602.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_14602.call(null,value));
} else {
}

var G__14603 = seq__14591;
var G__14604 = chunk__14592;
var G__14605 = count__14593;
var G__14606 = (i__14594 + (1));
seq__14591 = G__14603;
chunk__14592 = G__14604;
count__14593 = G__14605;
i__14594 = G__14606;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14591);
if(temp__4657__auto__){
var seq__14591__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14591__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14591__$1);
var G__14607 = cljs.core.chunk_rest(seq__14591__$1);
var G__14608 = c__7845__auto__;
var G__14609 = cljs.core.count(c__7845__auto__);
var G__14610 = (0);
seq__14591 = G__14607;
chunk__14592 = G__14608;
count__14593 = G__14609;
i__14594 = G__14610;
continue;
} else {
var vec__14598 = cljs.core.first(seq__14591__$1);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14598,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14598,(1),null);
var temp__4655__auto___14611 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___14611)){
var effect_fn_14612 = temp__4655__auto___14611;
(effect_fn_14612.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14612.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_14612.call(null,value));
} else {
}

var G__14613 = cljs.core.next(seq__14591__$1);
var G__14614 = null;
var G__14615 = (0);
var G__14616 = (0);
seq__14591 = G__14613;
chunk__14592 = G__14614;
count__14593 = G__14615;
i__14594 = G__14616;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
var G__14617_14627 = cljs.core.cst$kw$dispatch_DASH_later;
var G__14618_14628 = ((function (G__14617_14627){
return (function (value){
var seq__14619 = cljs.core.seq(value);
var chunk__14620 = null;
var count__14621 = (0);
var i__14622 = (0);
while(true){
if((i__14622 < count__14621)){
var map__14623 = chunk__14620.cljs$core$IIndexed$_nth$arity$2(null,i__14622);
var map__14623__$1 = ((((!((map__14623 == null)))?((((map__14623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14623):map__14623);
var effect = map__14623__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14623__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14623__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14619,chunk__14620,count__14621,i__14622,map__14623,map__14623__$1,effect,ms,dispatch,G__14617_14627){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14619,chunk__14620,count__14621,i__14622,map__14623,map__14623__$1,effect,ms,dispatch,G__14617_14627))
,ms);
}

var G__14629 = seq__14619;
var G__14630 = chunk__14620;
var G__14631 = count__14621;
var G__14632 = (i__14622 + (1));
seq__14619 = G__14629;
chunk__14620 = G__14630;
count__14621 = G__14631;
i__14622 = G__14632;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14619);
if(temp__4657__auto__){
var seq__14619__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14619__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14619__$1);
var G__14633 = cljs.core.chunk_rest(seq__14619__$1);
var G__14634 = c__7845__auto__;
var G__14635 = cljs.core.count(c__7845__auto__);
var G__14636 = (0);
seq__14619 = G__14633;
chunk__14620 = G__14634;
count__14621 = G__14635;
i__14622 = G__14636;
continue;
} else {
var map__14625 = cljs.core.first(seq__14619__$1);
var map__14625__$1 = ((((!((map__14625 == null)))?((((map__14625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14625):map__14625);
var effect = map__14625__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14619,chunk__14620,count__14621,i__14622,map__14625,map__14625__$1,effect,ms,dispatch,seq__14619__$1,temp__4657__auto__,G__14617_14627){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14619,chunk__14620,count__14621,i__14622,map__14625,map__14625__$1,effect,ms,dispatch,seq__14619__$1,temp__4657__auto__,G__14617_14627))
,ms);
}

var G__14637 = cljs.core.next(seq__14619__$1);
var G__14638 = null;
var G__14639 = (0);
var G__14640 = (0);
seq__14619 = G__14637;
chunk__14620 = G__14638;
count__14621 = G__14639;
i__14622 = G__14640;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14617_14627))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14617_14627,G__14618_14628) : re_frame.fx.register.call(null,G__14617_14627,G__14618_14628));
var G__14641_14643 = cljs.core.cst$kw$dispatch;
var G__14642_14644 = ((function (G__14641_14643){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__14641_14643))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14641_14643,G__14642_14644) : re_frame.fx.register.call(null,G__14641_14643,G__14642_14644));
var G__14645_14651 = cljs.core.cst$kw$dispatch_DASH_n;
var G__14646_14652 = ((function (G__14645_14651){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
}

var seq__14647 = cljs.core.seq(value);
var chunk__14648 = null;
var count__14649 = (0);
var i__14650 = (0);
while(true){
if((i__14650 < count__14649)){
var event = chunk__14648.cljs$core$IIndexed$_nth$arity$2(null,i__14650);
re_frame.router.dispatch(event);

var G__14653 = seq__14647;
var G__14654 = chunk__14648;
var G__14655 = count__14649;
var G__14656 = (i__14650 + (1));
seq__14647 = G__14653;
chunk__14648 = G__14654;
count__14649 = G__14655;
i__14650 = G__14656;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14647);
if(temp__4657__auto__){
var seq__14647__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14647__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14647__$1);
var G__14657 = cljs.core.chunk_rest(seq__14647__$1);
var G__14658 = c__7845__auto__;
var G__14659 = cljs.core.count(c__7845__auto__);
var G__14660 = (0);
seq__14647 = G__14657;
chunk__14648 = G__14658;
count__14649 = G__14659;
i__14650 = G__14660;
continue;
} else {
var event = cljs.core.first(seq__14647__$1);
re_frame.router.dispatch(event);

var G__14661 = cljs.core.next(seq__14647__$1);
var G__14662 = null;
var G__14663 = (0);
var G__14664 = (0);
seq__14647 = G__14661;
chunk__14648 = G__14662;
count__14649 = G__14663;
i__14650 = G__14664;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14645_14651))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14645_14651,G__14646_14652) : re_frame.fx.register.call(null,G__14645_14651,G__14646_14652));
var G__14665_14671 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__14666_14672 = ((function (G__14665_14671){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14667 = cljs.core.seq(((cljs.core.sequential_QMARK_(value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__14668 = null;
var count__14669 = (0);
var i__14670 = (0);
while(true){
if((i__14670 < count__14669)){
var event = chunk__14668.cljs$core$IIndexed$_nth$arity$2(null,i__14670);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14673 = seq__14667;
var G__14674 = chunk__14668;
var G__14675 = count__14669;
var G__14676 = (i__14670 + (1));
seq__14667 = G__14673;
chunk__14668 = G__14674;
count__14669 = G__14675;
i__14670 = G__14676;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14667);
if(temp__4657__auto__){
var seq__14667__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14667__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14667__$1);
var G__14677 = cljs.core.chunk_rest(seq__14667__$1);
var G__14678 = c__7845__auto__;
var G__14679 = cljs.core.count(c__7845__auto__);
var G__14680 = (0);
seq__14667 = G__14677;
chunk__14668 = G__14678;
count__14669 = G__14679;
i__14670 = G__14680;
continue;
} else {
var event = cljs.core.first(seq__14667__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14681 = cljs.core.next(seq__14667__$1);
var G__14682 = null;
var G__14683 = (0);
var G__14684 = (0);
seq__14667 = G__14681;
chunk__14668 = G__14682;
count__14669 = G__14683;
i__14670 = G__14684;
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
});})(G__14665_14671))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14665_14671,G__14666_14672) : re_frame.fx.register.call(null,G__14665_14671,G__14666_14672));
var G__14685_14687 = cljs.core.cst$kw$db;
var G__14686_14688 = ((function (G__14685_14687){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__14685_14687))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14685_14687,G__14686_14688) : re_frame.fx.register.call(null,G__14685_14687,G__14686_14688));
