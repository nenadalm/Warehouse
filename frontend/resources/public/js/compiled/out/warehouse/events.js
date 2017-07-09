// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.change_set');
goog.require('warehouse.storage.storage');
goog.require('warehouse.notifications.db');
goog.require('warehouse.search.db');
goog.require('warehouse.component_import.db');
goog.require('re_frame.core');
goog.require('warehouse.infinite_scroll.db');
warehouse.events.default_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$change_DASH_sets,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$backend_DASH_url,"https://warehouse-backend-warehouse-backend.1d35.starter-us-east-1.openshiftapps.com",cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,"",cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$processes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$page,"index",cljs.core.cst$kw$infinite_DASH_scroll,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,(1),cljs.core.cst$kw$pages_DASH_count,(0)], null)], null);
warehouse.events.debounce = (function warehouse$events$debounce(timeout,f){
var t = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
return ((function (t){
return (function() { 
var G__16755__delegate = function (args){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(t) : cljs.core.deref.call(null,t)))){
var G__16750_16756 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(t) : cljs.core.deref.call(null,t));
clearTimeout(G__16750_16756);
} else {
}

var G__16751 = t;
var G__16752 = (function (){var G__16753 = ((function (G__16751,t){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(t,null) : cljs.core.reset_BANG_.call(null,t,null));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(G__16751,t))
;
var G__16754 = (200);
return setTimeout(G__16753,G__16754);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16751,G__16752) : cljs.core.reset_BANG_.call(null,G__16751,G__16752));
};
var G__16755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16757__i = 0, G__16757__a = new Array(arguments.length -  0);
while (G__16757__i < G__16757__a.length) {G__16757__a[G__16757__i] = arguments[G__16757__i + 0]; ++G__16757__i;}
  args = new cljs.core.IndexedSeq(G__16757__a,0);
} 
return G__16755__delegate.call(this,args);};
G__16755.cljs$lang$maxFixedArity = 0;
G__16755.cljs$lang$applyTo = (function (arglist__16758){
var args = cljs.core.seq(arglist__16758);
return G__16755__delegate(args);
});
G__16755.cljs$core$IFn$_invoke$arity$variadic = G__16755__delegate;
return G__16755;
})()
;
;})(t))
});
warehouse.events.dispatch_infinite_scroll_bottom = warehouse.events.debounce((100),(function (){
var G__16759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16759) : re_frame.core.dispatch.call(null,G__16759));
}));
document.addEventListener("scroll",(function (){
return (warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0 ? warehouse.events.dispatch_infinite_scroll_bottom.cljs$core$IFn$_invoke$arity$0() : warehouse.events.dispatch_infinite_scroll_bottom.call(null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll,(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$infinite_DASH_scroll,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,(1),cljs.core.cst$kw$pages_DASH_count,(function (){var G__16760 = (cljs.core.count((cljs.core.truth_(warehouse.search.db.filter_active_QMARK_(db))?warehouse.search.db.filter_search(db):cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db))) / (100));
return Math.ceil(G__16760);
})()], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$infinite_DASH_scroll_DASH_bottom,(function (db,_){
var sd = cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_((function (){var and__7014__auto__ = (cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(sd) < cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(sd));
if(and__7014__auto__){
return warehouse.infinite_scroll.db.should_load_next_page();
} else {
return and__7014__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.update.cljs$core$IFn$_invoke$arity$3(sd,cljs.core.cst$kw$page,cljs.core.inc));
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,(function (db,p__16761){
var vec__16762 = p__16761;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16762,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16762,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,(function (db,p__16765){
var vec__16766 = p__16765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16766,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16766,(1),null);
return warehouse.notifications.db.add_notification(db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$message,message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_loaded,(function (db,p__16769){
var vec__16770 = p__16769;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16770,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16770,(1),null);
return warehouse.util.document__GT_state(response,db);
}));
var G__16773_16775 = cljs.core.cst$kw$state;
var G__16774_16776 = ((function (G__16773_16775){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$state,cljs.core.cst$kw$load_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null));
});})(G__16773_16775))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__16773_16775,G__16774_16776) : re_frame.core.reg_cofx.call(null,G__16773_16775,G__16774_16776));
var G__16777_16779 = cljs.core.cst$kw$change_DASH_sets;
var G__16778_16780 = ((function (G__16777_16779){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$change_DASH_sets,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(warehouse.change_set.change_sets) : cljs.core.deref.call(null,warehouse.change_set.change_sets)));
});})(G__16777_16779))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__16777_16779,G__16778_16780) : re_frame.core.reg_cofx.call(null,G__16777_16779,G__16778_16780));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16781 = cljs.core.cst$kw$state;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__16781) : re_frame.core.inject_cofx.call(null,G__16781));
})(),(function (){var G__16782 = cljs.core.cst$kw$change_DASH_sets;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__16782) : re_frame.core.inject_cofx.call(null,G__16782));
})()], null),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,warehouse.component_import.db.load_providers(warehouse.util.document__GT_state(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.default_state,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(cofx))))], null);
}));
var G__16783_16785 = cljs.core.cst$kw$change_DASH_sets;
var G__16784_16786 = ((function (G__16783_16785){
return (function (value){
if(cljs.core.empty_QMARK_(value)){
return null;
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.change_set.change_sets,value) : cljs.core.reset_BANG_.call(null,warehouse.change_set.change_sets,value));
}
});})(G__16783_16785))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__16783_16785,G__16784_16786) : re_frame.core.reg_fx.call(null,G__16783_16785,G__16784_16786));
var G__16787_16789 = cljs.core.cst$kw$state;
var G__16788_16790 = ((function (G__16787_16789){
return (function (value){
return cljs.core.cst$kw$store_DASH_state.cljs$core$IFn$_invoke$arity$1(warehouse.storage.storage.storage).call(null,value);
});})(G__16787_16789))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__16787_16789,G__16788_16790) : re_frame.core.reg_fx.call(null,G__16787_16789,G__16788_16790));
warehouse.events.normalize_item = (function warehouse$events$normalize_item(item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$tags,warehouse.util.string__GT_array(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(item)));
});
warehouse.events.add_change_set = (function warehouse$events$add_change_set(col,change_set){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,change_set));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components_DASH_change,(function (cofx,p__16791){
var vec__16792 = p__16791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16792,(0),null);
var old_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16792,(1),null);
var new_components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16792,(2),null);
var change_set = warehouse.util.get_change_set(old_components,new_components);
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$change_DASH_sets,warehouse.events.add_change_set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$change_DASH_sets], null)),change_set));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$change_DASH_sets,cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(new_db),cljs.core.cst$kw$state,warehouse.util.state__GT_document(new_db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_save,(function (cofx,p__16795){
var vec__16796 = p__16795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16796,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16796,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16796,(2),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,warehouse.events.normalize_item(item));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_DASH_create,(function (cofx,p__16799){
var vec__16800 = p__16799;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16800,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16800,(1),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var k = warehouse.util.next_key(old_components);
var new_components = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warehouse.events.normalize_item(item),cljs.core.cst$kw$id,k));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revert_DASH_change,(function (cofx,p__16803){
var vec__16804 = p__16803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16804,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16804,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16804,(2),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16804,(3),null);
var old_components = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$components], null));
var new_components = (function (){var G__16807 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16807) {
case "create":
return cljs.core.assoc_in(old_components,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.cst$kw$amount], null),(0));

break;
case "update":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata),warehouse.util.revert_changes(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_components,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metadata)),data));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}
})();
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$components,new_components);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_db,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components_DASH_change,old_components,new_components], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_change,(function (db,p__16809){
var vec__16810 = p__16809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16810,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16810,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
