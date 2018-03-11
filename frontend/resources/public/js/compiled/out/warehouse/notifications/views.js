// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.notifications.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.notifications.subs');
goog.require('warehouse.notifications.events');
goog.require('re_frame.core');
warehouse.notifications.views.notification = (function warehouse$notifications$views$notification(n,k){
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(n);
var message = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(n);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["notification notification-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(type))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"message"], null),message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"close",cljs.core.cst$kw$on_DASH_click,((function (type,message){
return (function (e){
var G__18335_18336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notification_DASH_close,k], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18335_18336) : re_frame.core.dispatch.call(null,G__18335_18336));

return null;
});})(type,message))
], null),"X"], null)], null);
});
warehouse.notifications.views.notifications = (function warehouse$notifications$views$notifications(){
var notifications = (function (){var G__18337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notifications], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18337) : re_frame.core.subscribe.call(null,G__18337));
})();
return ((function (notifications){
return (function (){
if(!(cljs.core.empty_QMARK_(cljs.core.deref(notifications)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"notifications"], null),(function (){var iter__4292__auto__ = ((function (notifications){
return (function warehouse$notifications$views$notifications_$_iter__18338(s__18339){
return (new cljs.core.LazySeq(null,((function (notifications){
return (function (){
var s__18339__$1 = s__18339;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18339__$1);
if(temp__5457__auto__){
var s__18339__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18339__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__18339__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__18341 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__18340 = (0);
while(true){
if((i__18340 < size__4291__auto__)){
var vec__18342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__18340);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18342,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18342,(1),null);
cljs.core.chunk_append(b__18341,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.notifications.views.notification,n,k], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__18348 = (i__18340 + (1));
i__18340 = G__18348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18341),warehouse$notifications$views$notifications_$_iter__18338(cljs.core.chunk_rest(s__18339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18341),null);
}
} else {
var vec__18345 = cljs.core.first(s__18339__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18345,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18345,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.notifications.views.notification,n,k], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),warehouse$notifications$views$notifications_$_iter__18338(cljs.core.rest(s__18339__$2)));
}
} else {
return null;
}
break;
}
});})(notifications))
,null,null));
});})(notifications))
;
return iter__4292__auto__(cljs.core.deref(notifications));
})()], null);
} else {
return null;
}
});
;})(notifications))
});
