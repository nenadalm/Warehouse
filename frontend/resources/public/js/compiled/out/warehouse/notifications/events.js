// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.notifications.events');
goog.require('cljs.core');
goog.require('warehouse.notifications.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$notification_DASH_close,(function (db,p__14837){
var vec__14838 = p__14837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(0),null);
var notification_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(1),null);
return warehouse.notifications.db.remove_notification(db,notification_key);
}));