// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.routes');
goog.require('warehouse.notifications.views');
goog.require('warehouse.pages.process.views');
goog.require('warehouse.pages.list.views');
goog.require('warehouse.events');
goog.require('re_frame.core');
warehouse.views.nav_items = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"List",cljs.core.cst$kw$url,warehouse.routes.path_for(cljs.core.cst$kw$index)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Processes",cljs.core.cst$kw$url,warehouse.routes.path_for(cljs.core.cst$kw$processes)], null)], null);
warehouse.views.nav = (function warehouse$views$nav(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$menu,(function (){var iter__4324__auto__ = (function warehouse$views$nav_$_iter__12745(s__12746){
return (new cljs.core.LazySeq(null,(function (){
var s__12746__$1 = s__12746;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12746__$1);
if(temp__5457__auto__){
var s__12746__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12746__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12746__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12748 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12747 = (0);
while(true){
if((i__12747 < size__4323__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12747);
cljs.core.chunk_append(b__12748,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,((function (i__12747,item,c__4322__auto__,size__4323__auto__,b__12748,s__12746__$2,temp__5457__auto__){
return (function (){
var G__12749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warehouse$events_SLASH_navigate,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12749) : re_frame.core.dispatch.call(null,G__12749));
});})(i__12747,item,c__4322__auto__,size__4323__auto__,b__12748,s__12746__$2,temp__5457__auto__))
], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__12751 = (i__12747 + (1));
i__12747 = G__12751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12748),warehouse$views$nav_$_iter__12745(cljs.core.chunk_rest(s__12746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12748),null);
}
} else {
var item = cljs.core.first(s__12746__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,((function (item,s__12746__$2,temp__5457__auto__){
return (function (){
var G__12750 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warehouse$events_SLASH_navigate,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12750) : re_frame.core.dispatch.call(null,G__12750));
});})(item,s__12746__$2,temp__5457__auto__))
], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(item)], null)),warehouse$views$nav_$_iter__12745(cljs.core.rest(s__12746__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(warehouse.views.nav_items);
})()], null);
});
warehouse.views.page = (function warehouse$views$page(){
var active_tab = (function (){var G__12752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_tab], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12752) : re_frame.core.subscribe.call(null,G__12752));
})();
return ((function (active_tab){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.notifications.views.notifications], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.nav], null),(function (){var G__12753 = cljs.core.deref(active_tab);
var G__12753__$1 = (((G__12753 instanceof cljs.core.Keyword))?G__12753.fqn:null);
switch (G__12753__$1) {
case "index":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.list.views.component_list], null);

break;
case "processes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.process.views.processes], null);

break;
case "not-found":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"404 Page not found"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12753__$1)].join('')));

}
})()], null);
});
;})(active_tab))
});
