// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.notifications.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
warehouse.notifications.db.add_notification = (function warehouse$notifications$db$add_notification(db,notification){
var k = warehouse.util.next_key(cljs.core.cst$kw$notifications.cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notifications,k], null),notification);
});
warehouse.notifications.db.remove_notification = (function warehouse$notifications$db$remove_notification(db,notification_key){
var temp__5455__auto__ = cljs.core.cst$kw$notifications.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__5455__auto__)){
var notifications = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notifications,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$notifications.cljs$core$IFn$_invoke$arity$1(db),notification_key));
} else {
return db;
}
});
