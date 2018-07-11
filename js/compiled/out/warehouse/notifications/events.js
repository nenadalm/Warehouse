// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.notifications.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.notifications.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$notification_DASH_close,(function (db,p__12269){
var vec__12270 = p__12269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12270,(0),null);
var notification_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12270,(1),null);
return warehouse.notifications.db.remove_notification(db,notification_key);
}));
