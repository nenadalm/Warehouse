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
var seq__14597 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14598 = null;
var count__14599 = (0);
var i__14600 = (0);
while(true){
if((i__14600 < count__14599)){
var vec__14601 = chunk__14598.cljs$core$IIndexed$_nth$arity$2(null,i__14600);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14601,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14601,(1),null);
var temp__4655__auto___14607 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___14607)){
var effect_fn_14608 = temp__4655__auto___14607;
(effect_fn_14608.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14608.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_14608.call(null,value));
} else {
}

var G__14609 = seq__14597;
var G__14610 = chunk__14598;
var G__14611 = count__14599;
var G__14612 = (i__14600 + (1));
seq__14597 = G__14609;
chunk__14598 = G__14610;
count__14599 = G__14611;
i__14600 = G__14612;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14597);
if(temp__4657__auto__){
var seq__14597__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14597__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14597__$1);
var G__14613 = cljs.core.chunk_rest(seq__14597__$1);
var G__14614 = c__7845__auto__;
var G__14615 = cljs.core.count(c__7845__auto__);
var G__14616 = (0);
seq__14597 = G__14613;
chunk__14598 = G__14614;
count__14599 = G__14615;
i__14600 = G__14616;
continue;
} else {
var vec__14604 = cljs.core.first(seq__14597__$1);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14604,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14604,(1),null);
var temp__4655__auto___14617 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___14617)){
var effect_fn_14618 = temp__4655__auto___14617;
(effect_fn_14618.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14618.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_14618.call(null,value));
} else {
}

var G__14619 = cljs.core.next(seq__14597__$1);
var G__14620 = null;
var G__14621 = (0);
var G__14622 = (0);
seq__14597 = G__14619;
chunk__14598 = G__14620;
count__14599 = G__14621;
i__14600 = G__14622;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
var G__14623_14633 = cljs.core.cst$kw$dispatch_DASH_later;
var G__14624_14634 = ((function (G__14623_14633){
return (function (value){
var seq__14625 = cljs.core.seq(value);
var chunk__14626 = null;
var count__14627 = (0);
var i__14628 = (0);
while(true){
if((i__14628 < count__14627)){
var map__14629 = chunk__14626.cljs$core$IIndexed$_nth$arity$2(null,i__14628);
var map__14629__$1 = ((((!((map__14629 == null)))?((((map__14629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14629):map__14629);
var effect = map__14629__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14629__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14629__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14625,chunk__14626,count__14627,i__14628,map__14629,map__14629__$1,effect,ms,dispatch,G__14623_14633){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14625,chunk__14626,count__14627,i__14628,map__14629,map__14629__$1,effect,ms,dispatch,G__14623_14633))
,ms);
}

var G__14635 = seq__14625;
var G__14636 = chunk__14626;
var G__14637 = count__14627;
var G__14638 = (i__14628 + (1));
seq__14625 = G__14635;
chunk__14626 = G__14636;
count__14627 = G__14637;
i__14628 = G__14638;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14625);
if(temp__4657__auto__){
var seq__14625__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14625__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14625__$1);
var G__14639 = cljs.core.chunk_rest(seq__14625__$1);
var G__14640 = c__7845__auto__;
var G__14641 = cljs.core.count(c__7845__auto__);
var G__14642 = (0);
seq__14625 = G__14639;
chunk__14626 = G__14640;
count__14627 = G__14641;
i__14628 = G__14642;
continue;
} else {
var map__14631 = cljs.core.first(seq__14625__$1);
var map__14631__$1 = ((((!((map__14631 == null)))?((((map__14631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14631):map__14631);
var effect = map__14631__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14631__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14631__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14625,chunk__14626,count__14627,i__14628,map__14631,map__14631__$1,effect,ms,dispatch,seq__14625__$1,temp__4657__auto__,G__14623_14633){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14625,chunk__14626,count__14627,i__14628,map__14631,map__14631__$1,effect,ms,dispatch,seq__14625__$1,temp__4657__auto__,G__14623_14633))
,ms);
}

var G__14643 = cljs.core.next(seq__14625__$1);
var G__14644 = null;
var G__14645 = (0);
var G__14646 = (0);
seq__14625 = G__14643;
chunk__14626 = G__14644;
count__14627 = G__14645;
i__14628 = G__14646;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14623_14633))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14623_14633,G__14624_14634) : re_frame.fx.register.call(null,G__14623_14633,G__14624_14634));
var G__14647_14649 = cljs.core.cst$kw$dispatch;
var G__14648_14650 = ((function (G__14647_14649){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__14647_14649))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14647_14649,G__14648_14650) : re_frame.fx.register.call(null,G__14647_14649,G__14648_14650));
var G__14651_14657 = cljs.core.cst$kw$dispatch_DASH_n;
var G__14652_14658 = ((function (G__14651_14657){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
}

var seq__14653 = cljs.core.seq(value);
var chunk__14654 = null;
var count__14655 = (0);
var i__14656 = (0);
while(true){
if((i__14656 < count__14655)){
var event = chunk__14654.cljs$core$IIndexed$_nth$arity$2(null,i__14656);
re_frame.router.dispatch(event);

var G__14659 = seq__14653;
var G__14660 = chunk__14654;
var G__14661 = count__14655;
var G__14662 = (i__14656 + (1));
seq__14653 = G__14659;
chunk__14654 = G__14660;
count__14655 = G__14661;
i__14656 = G__14662;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14653);
if(temp__4657__auto__){
var seq__14653__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14653__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14653__$1);
var G__14663 = cljs.core.chunk_rest(seq__14653__$1);
var G__14664 = c__7845__auto__;
var G__14665 = cljs.core.count(c__7845__auto__);
var G__14666 = (0);
seq__14653 = G__14663;
chunk__14654 = G__14664;
count__14655 = G__14665;
i__14656 = G__14666;
continue;
} else {
var event = cljs.core.first(seq__14653__$1);
re_frame.router.dispatch(event);

var G__14667 = cljs.core.next(seq__14653__$1);
var G__14668 = null;
var G__14669 = (0);
var G__14670 = (0);
seq__14653 = G__14667;
chunk__14654 = G__14668;
count__14655 = G__14669;
i__14656 = G__14670;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14651_14657))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14651_14657,G__14652_14658) : re_frame.fx.register.call(null,G__14651_14657,G__14652_14658));
var G__14671_14677 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__14672_14678 = ((function (G__14671_14677){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14673 = cljs.core.seq(((cljs.core.sequential_QMARK_(value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__14674 = null;
var count__14675 = (0);
var i__14676 = (0);
while(true){
if((i__14676 < count__14675)){
var event = chunk__14674.cljs$core$IIndexed$_nth$arity$2(null,i__14676);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14679 = seq__14673;
var G__14680 = chunk__14674;
var G__14681 = count__14675;
var G__14682 = (i__14676 + (1));
seq__14673 = G__14679;
chunk__14674 = G__14680;
count__14675 = G__14681;
i__14676 = G__14682;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14673);
if(temp__4657__auto__){
var seq__14673__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14673__$1)){
var c__7845__auto__ = cljs.core.chunk_first(seq__14673__$1);
var G__14683 = cljs.core.chunk_rest(seq__14673__$1);
var G__14684 = c__7845__auto__;
var G__14685 = cljs.core.count(c__7845__auto__);
var G__14686 = (0);
seq__14673 = G__14683;
chunk__14674 = G__14684;
count__14675 = G__14685;
i__14676 = G__14686;
continue;
} else {
var event = cljs.core.first(seq__14673__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14687 = cljs.core.next(seq__14673__$1);
var G__14688 = null;
var G__14689 = (0);
var G__14690 = (0);
seq__14673 = G__14687;
chunk__14674 = G__14688;
count__14675 = G__14689;
i__14676 = G__14690;
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
});})(G__14671_14677))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14671_14677,G__14672_14678) : re_frame.fx.register.call(null,G__14671_14677,G__14672_14678));
var G__14691_14693 = cljs.core.cst$kw$db;
var G__14692_14694 = ((function (G__14691_14693){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__14691_14693))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14691_14693,G__14692_14694) : re_frame.fx.register.call(null,G__14691_14693,G__14692_14694));
