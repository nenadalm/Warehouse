// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.notifications.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.notifications.subs');
goog.require('warehouse.notifications.events');
goog.require('re_frame.core');
warehouse.notifications.views.notification = (function warehouse$notifications$views$notification(n,k){
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(n);
var message = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(n);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("notification notification-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(type))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"message"], null),message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"close",cljs.core.cst$kw$on_DASH_click,((function (type,message){
return (function (e){
var G__20997_20998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notification_DASH_close,k], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20997_20998) : re_frame.core.dispatch.call(null,G__20997_20998));

return null;
});})(type,message))
], null),"X"], null)], null);
});
warehouse.notifications.views.notifications = (function warehouse$notifications$views$notifications(){
var notifications = (function (){var G__21018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notifications], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21018) : re_frame.core.subscribe.call(null,G__21018));
})();
return ((function (notifications){
return (function (){
if(!(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(notifications) : cljs.core.deref.call(null,notifications))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"notifications"], null),(function (){var iter__7814__auto__ = ((function (notifications){
return (function warehouse$notifications$views$notifications_$_iter__21019(s__21020){
return (new cljs.core.LazySeq(null,((function (notifications){
return (function (){
var s__21020__$1 = s__21020;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21020__$1);
if(temp__4657__auto__){
var s__21020__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21020__$2)){
var c__7812__auto__ = cljs.core.chunk_first(s__21020__$2);
var size__7813__auto__ = cljs.core.count(c__7812__auto__);
var b__21022 = cljs.core.chunk_buffer(size__7813__auto__);
if((function (){var i__21021 = (0);
while(true){
if((i__21021 < size__7813__auto__)){
var vec__21031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7812__auto__,i__21021);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21031,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21031,(1),null);
cljs.core.chunk_append(b__21022,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.notifications.views.notification,n,k], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__21037 = (i__21021 + (1));
i__21021 = G__21037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21022),warehouse$notifications$views$notifications_$_iter__21019(cljs.core.chunk_rest(s__21020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21022),null);
}
} else {
var vec__21034 = cljs.core.first(s__21020__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21034,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21034,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.notifications.views.notification,n,k], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),warehouse$notifications$views$notifications_$_iter__21019(cljs.core.rest(s__21020__$2)));
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
return iter__7814__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(notifications) : cljs.core.deref.call(null,notifications)));
})()], null);
} else {
return null;
}
});
;})(notifications))
});
