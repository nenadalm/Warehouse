// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.scroll_to = (function reagent_forms$core$scroll_to(element,idx){
var list_elem = element.target.parentNode.getElementsByTagName("ul").item((0));
var idx__$1 = (((idx < (0)))?(0):idx);
var item_elem = list_elem.children.item(idx__$1);
var vec__19566 = (cljs.core.truth_(item_elem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_elem.scrollHeight,item_elem.offsetTop], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var item_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19566,(0),null);
var offset_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19566,(1),null);
return list_elem.scrollTop = (offset_top - ((2) * item_height));
});
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
if(cljs.core.sequential_QMARK_(id)){
return id;
} else {
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),(1)),/\./);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,segments);
}
}));
reagent_forms.core.cursor_for_id = cljs.core.memoize((function (doc,id){
return reagent.core.cursor(doc,(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id)));
}));
reagent_forms.core.run_events = (function reagent_forms$core$run_events(doc,id,value,events){
var path = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (p1__19570_SHARP_,p2__19569_SHARP_){
var or__3922__auto__ = (p2__19569_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__19569_SHARP_.cljs$core$IFn$_invoke$arity$3(path,value,p1__19570_SHARP_) : p2__19569_SHARP_.call(null,path,value,p1__19570_SHARP_));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return p1__19570_SHARP_;
}
});})(path))
,doc,events);
});
reagent_forms.core.mk_update_fn = (function reagent_forms$core$mk_update_fn(doc,events){
return (function (id,update_fn,value){
var result = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,id) : reagent_forms.core.cursor_for_id.call(null,doc,id)),update_fn,value);
if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
cljs.core.reset_BANG_((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,id) : reagent_forms.core.cursor_for_id.call(null,doc,id)),value);

if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
var G__19571 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__19571) : wrapper.call(null,G__19571));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__19572 = id;
var G__19573 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19572,G__19573) : save_BANG_.call(null,G__19572,G__19573));
});
});
reagent_forms.core.wrap_update_fn = (function reagent_forms$core$wrap_update_fn(update_BANG_,wrapper){
return (function (id,update_fn,value){
var G__19574 = id;
var G__19575 = update_fn;
var G__19576 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__19574,G__19575,G__19576) : update_BANG_.call(null,G__19574,G__19575,G__19576));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(p__19577,node){
var map__19578 = p__19577;
var map__19578__$1 = ((((!((map__19578 == null)))?(((((map__19578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19578):map__19578);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19578__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19578__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19578__$1,cljs.core.cst$kw$save_BANG_);
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19578__$1,cljs.core.cst$kw$update_BANG_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$get,(function (){var temp__5455__auto__ = cljs.core.cst$kw$in_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5455__auto__)){
var in_fn = temp__5455__auto__;
return reagent_forms.core.wrap_get_fn(get,in_fn);
} else {
return get;
}
})(),cljs.core.cst$kw$save_BANG_,(function (){var temp__5455__auto__ = cljs.core.cst$kw$out_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5455__auto__)){
var out_fn = temp__5455__auto__;
return reagent_forms.core.wrap_save_fn(save_BANG_,out_fn);
} else {
return save_BANG_;
}
})(),cljs.core.cst$kw$update_BANG_,(function (){var temp__5455__auto__ = cljs.core.cst$kw$out_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5455__auto__)){
var out_fn = temp__5455__auto__;
return reagent_forms.core.wrap_update_fn(update_BANG_,out_fn);
} else {
return update_BANG_;
}
})()], null);
});
reagent_forms.core.clean_attrs = (function reagent_forms$core$clean_attrs(attrs){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$fmt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$event,cljs.core.cst$kw$field,cljs.core.cst$kw$inline,cljs.core.cst$kw$save_DASH_fn,cljs.core.cst$kw$preamble,cljs.core.cst$kw$postamble,cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$kw$date_DASH_format,cljs.core.cst$kw$auto_DASH_close_QMARK_], 0));
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (field_type,_){
if(cljs.core.truth_((function (){var fexpr__19580 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$numeric,null,cljs.core.cst$kw$range,null], null), null);
return (fexpr__19580.cljs$core$IFn$_invoke$arity$1 ? fexpr__19580.cljs$core$IFn$_invoke$arity$1(field_type) : fexpr__19580.call(null,field_type));
})())){
return cljs.core.cst$kw$numeric;
} else {
return field_type;
}
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(isNaN(parseFloat(value)));
if(and__3911__auto__){
return fmt;
} else {
return and__3911__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p__19581,_){
var map__19582 = p__19581;
var map__19582__$1 = ((((!((map__19582 == null)))?(((((map__19582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19582):map__19582);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19582__$1,cljs.core.cst$kw$field);
if(cljs.core.truth_((function (){var fexpr__19584 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$email,null,cljs.core.cst$kw$numeric,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$tel,null,cljs.core.cst$kw$textarea,null,cljs.core.cst$kw$range,null,cljs.core.cst$kw$text,null], null), null);
return (fexpr__19584.cljs$core$IFn$_invoke$arity$1 ? fexpr__19584.cljs$core$IFn$_invoke$arity$1(field) : fexpr__19584.call(null,field));
})())){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field;
}
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__19586,p__19587){
var map__19588 = p__19586;
var map__19588__$1 = ((((!((map__19588 == null)))?(((((map__19588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19588):map__19588);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19588__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19588__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19588__$1,cljs.core.cst$kw$fmt);
var map__19589 = p__19587;
var map__19589__$1 = ((((!((map__19589 == null)))?(((((map__19589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19589):map__19589);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19589__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19589__$1,cljs.core.cst$kw$save_BANG_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(function (){var value = (function (){var or__3922__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.cst$kw$on_DASH_change,((function (map__19588,map__19588__$1,field,id,fmt,map__19589,map__19589__$1,get,save_BANG_){
return (function (p1__19585_SHARP_){
var G__19592 = id;
var G__19593 = (function (){var G__19594 = field;
var G__19595 = reagent_forms.core.value_of(p1__19585_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__19594,G__19595) : reagent_forms.core.format_type.call(null,G__19594,G__19595));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19592,G__19593) : save_BANG_.call(null,G__19592,G__19593));
});})(map__19588,map__19588__$1,field,id,fmt,map__19589,map__19589__$1,get,save_BANG_))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__19596,p__19597){
var map__19598 = p__19596;
var map__19598__$1 = ((((!((map__19598 == null)))?(((((map__19598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19598):map__19598);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19598__$1,cljs.core.cst$kw$id);
var map__19599 = p__19597;
var map__19599__$1 = ((((!((map__19599 == null)))?(((((map__19599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19599):map__19599);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19599__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19599__$1,cljs.core.cst$kw$save_BANG_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,cljs.core.boolean$((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id))),cljs.core.cst$kw$on_DASH_change,((function (map__19598,map__19598__$1,id,map__19599,map__19599__$1,get,save_BANG_){
return (function (){
var G__19602 = id;
var G__19603 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19602,G__19603) : save_BANG_.call(null,G__19602,G__19603));
});})(map__19598,map__19598__$1,id,map__19599,map__19599__$1,get,save_BANG_))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4500__auto__ = [];
var len__4497__auto___19615 = arguments.length;
var i__4498__auto___19616 = (0);
while(true){
if((i__4498__auto___19616 < len__4497__auto___19615)){
args__4500__auto__.push((arguments[i__4498__auto___19616]));

var G__19617 = (i__4498__auto___19616 + (1));
i__4498__auto___19616 = G__19617;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__19607,opts,p__19608){
var vec__19609 = p__19607;
var seq__19610 = cljs.core.seq(vec__19609);
var first__19611 = cljs.core.first(seq__19610);
var seq__19610__$1 = cljs.core.next(seq__19610);
var type = first__19611;
var first__19611__$1 = cljs.core.first(seq__19610__$1);
var seq__19610__$2 = cljs.core.next(seq__19610__$1);
var attrs = first__19611__$1;
var body = seq__19610__$2;
var vec__19612 = p__19608;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19612,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0))], 0)))], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq19604){
var G__19605 = cljs.core.first(seq19604);
var seq19604__$1 = cljs.core.next(seq19604);
var G__19606 = cljs.core.first(seq19604__$1);
var seq19604__$2 = cljs.core.next(seq19604__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__19605,G__19606,seq19604__$2);
});

if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p__19618,_){
var vec__19619 = p__19618;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19619,(0),null);
var map__19622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19619,(1),null);
var map__19622__$1 = ((((!((map__19622 == null)))?(((((map__19622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19622):map__19622);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19622__$1,cljs.core.cst$kw$field);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_((function (){var fexpr__19624 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$email,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$tel,null,cljs.core.cst$kw$textarea,null,cljs.core.cst$kw$range,null,cljs.core.cst$kw$text,null], null), null);
return (fexpr__19624.cljs$core$IFn$_invoke$arity$1 ? fexpr__19624.cljs$core$IFn$_invoke$arity$1(field__$1) : fexpr__19624.call(null,field__$1));
})())){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field__$1;
}
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$container,(function (p__19626,p__19627){
var vec__19628 = p__19626;
var seq__19629 = cljs.core.seq(vec__19628);
var first__19630 = cljs.core.first(seq__19629);
var seq__19629__$1 = cljs.core.next(seq__19629);
var type = first__19630;
var first__19630__$1 = cljs.core.first(seq__19629__$1);
var seq__19629__$2 = cljs.core.next(seq__19629__$1);
var map__19631 = first__19630__$1;
var map__19631__$1 = ((((!((map__19631 == null)))?(((((map__19631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19631):map__19631);
var attrs = map__19631__$1;
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19631__$1,cljs.core.cst$kw$valid_QMARK_);
var body = seq__19629__$2;
var map__19632 = p__19627;
var map__19632__$1 = ((((!((map__19632 == null)))?(((((map__19632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19632):map__19632);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19632__$1,cljs.core.cst$kw$doc);
return ((function (vec__19628,seq__19629,first__19630,seq__19629__$1,type,first__19630__$1,seq__19629__$2,map__19631,map__19631__$1,attrs,valid_QMARK_,body,map__19632,map__19632__$1,doc){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19628,seq__19629,first__19630,seq__19629__$1,type,first__19630__$1,seq__19629__$2,map__19631,map__19631__$1,attrs,valid_QMARK_,body,map__19632,map__19632__$1,doc){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19628,seq__19629,first__19630,seq__19629__$1,type,first__19630__$1,seq__19629__$2,map__19631,map__19631__$1,attrs,valid_QMARK_,body,map__19632,map__19632__$1,doc){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19628,seq__19629,first__19630,seq__19629__$1,type,first__19630__$1,seq__19629__$2,map__19631,map__19631__$1,attrs,valid_QMARK_,body,map__19632,map__19632__$1,doc))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19628,seq__19629,first__19630,seq__19629__$1,type,first__19630__$1,seq__19629__$2,map__19631,map__19631__$1,attrs,valid_QMARK_,body,map__19632,map__19632__$1,doc))
,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs((function (){var temp__5455__auto__ = (cljs.core.truth_(valid_QMARK_)?(function (){var G__19635 = cljs.core.deref(doc);
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19635) : valid_QMARK_.call(null,G__19635));
})():null);
if(cljs.core.truth_(temp__5455__auto__)){
var valid_class = temp__5455__auto__;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__5455__auto__,update_disabled_QMARK___19246__auto__,vec__19628,seq__19629,first__19630,seq__19629__$1,type,first__19630__$1,seq__19629__$2,map__19631,map__19631__$1,attrs,valid_QMARK_,body,map__19632,map__19632__$1,doc){
return (function (p1__19625_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__19625_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19625_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__5455__auto__,update_disabled_QMARK___19246__auto__,vec__19628,seq__19629,first__19630,seq__19629__$1,type,first__19630__$1,seq__19629__$2,map__19631,map__19631__$1,attrs,valid_QMARK_,body,map__19632,map__19632__$1,doc))
);
} else {
return attrs;
}
})())], null),body));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19636 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19636) : visible__19250__auto__.call(null,G__19636));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19628,seq__19629,first__19630,seq__19629__$1,type,first__19630__$1,seq__19629__$2,map__19631,map__19631__$1,attrs,valid_QMARK_,body,map__19632,map__19632__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__19637,p__19638){
var vec__19639 = p__19637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(0),null);
var map__19642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(1),null);
var map__19642__$1 = ((((!((map__19642 == null)))?(((((map__19642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19642):map__19642);
var attrs = map__19642__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19642__$1,cljs.core.cst$kw$field);
var component = vec__19639;
var map__19643 = p__19638;
var map__19643__$1 = ((((!((map__19643 == null)))?(((((map__19643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19643):map__19643);
var opts = map__19643__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19643__$1,cljs.core.cst$kw$doc);
return ((function (vec__19639,_,map__19642,map__19642__$1,attrs,field,component,map__19643,map__19643__$1,opts,doc){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19639,_,map__19642,map__19642__$1,attrs,field,component,map__19643,map__19643__$1,opts,doc){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19639,_,map__19642,map__19642__$1,attrs,field,component,map__19643,map__19643__$1,opts,doc){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19639,_,map__19642,map__19642__$1,attrs,field,component,map__19643,map__19643__$1,opts,doc))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19639,_,map__19642,map__19642__$1,attrs,field,component,map__19643,map__19643__$1,opts,doc))
,reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0)));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19646 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19646) : visible__19250__auto__.call(null,G__19646));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19639,_,map__19642,map__19642__$1,attrs,field,component,map__19643,map__19643__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (p__19649,p__19650){
var vec__19651 = p__19649;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19651,(0),null);
var map__19654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19651,(1),null);
var map__19654__$1 = ((((!((map__19654 == null)))?(((((map__19654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19654):map__19654);
var attrs = map__19654__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19654__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19654__$1,cljs.core.cst$kw$fmt);
var map__19655 = p__19650;
var map__19655__$1 = ((((!((map__19655 == null)))?(((((map__19655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19655):map__19655);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19655__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19655__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19655__$1,cljs.core.cst$kw$save_BANG_);
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var or__3922__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___19246__auto__,input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_){
return (function (p1__19647_SHARP_){
return cljs.core.reset_BANG_(input_value,reagent_forms.core.value_of(p1__19647_SHARP_));
});})(update_disabled_QMARK___19246__auto__,input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (update_disabled_QMARK___19246__auto__,input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_){
return (function (p1__19648_SHARP_){
cljs.core.reset_BANG_(input_value,null);

var G__19658 = id;
var G__19659 = (function (){var G__19660 = cljs.core.cst$kw$numeric;
var G__19661 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__19648_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__19660,G__19661) : reagent_forms.core.format_type.call(null,G__19660,G__19661));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19658,G__19659) : save_BANG_.call(null,G__19658,G__19659));
});})(update_disabled_QMARK___19246__auto__,input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_))
], null),reagent_forms.core.clean_attrs(attrs)], 0))], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19662 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19662) : visible__19250__auto__.call(null,G__19662));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(input_value,vec__19651,type,map__19654,map__19654__$1,attrs,id,fmt,map__19655,map__19655__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$datepicker,(function (p__19666,p__19667){
var vec__19668 = p__19666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19668,(0),null);
var map__19671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19668,(1),null);
var map__19671__$1 = ((((!((map__19671 == null)))?(((((map__19671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19671):map__19671);
var attrs = map__19671__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19671__$1,cljs.core.cst$kw$id);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19671__$1,cljs.core.cst$kw$date_DASH_format);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19671__$1,cljs.core.cst$kw$inline);
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19671__$1,cljs.core.cst$kw$auto_DASH_close_QMARK_);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19671__$1,cljs.core.cst$kw$disabled);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19671__$1,cljs.core.cst$kw$lang,cljs.core.cst$kw$en_DASH_US);
var save_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19671__$1,cljs.core.cst$kw$save_DASH_fn);
var map__19672 = p__19667;
var map__19672__$1 = ((((!((map__19672 == null)))?(((((map__19672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19672):map__19672);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19672__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19672__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19672__$1,cljs.core.cst$kw$save_BANG_);
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19672__$1,cljs.core.cst$kw$update_BANG_);
var fmt = ((cljs.core.fn_QMARK_(date_format))?date_format:((function (vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__19663_SHARP_){
return reagent_forms.datepicker.format_date(p1__19663_SHARP_,reagent_forms.datepicker.parse_format(date_format));
});})(vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
);
var selected_date = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
var selected_month = (((cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__3922__auto__ = cljs.core.cst$kw$year.cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__3922__auto__ = selected_month;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__3922__auto__ = cljs.core.cst$kw$day.cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var save_value = (cljs.core.truth_(save_fn)?((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__19664_SHARP_){
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(id,save_fn,p1__19664_SHARP_) : update_BANG_.call(null,id,save_fn,p1__19664_SHARP_));
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
:((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__19665_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__19665_SHARP_) : save_BANG_.call(null,id,p1__19665_SHARP_));
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
,cljs.core.cst$kw$render,((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$on_DASH_blur,((function (update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_(expanded_QMARK_,false);
}
});})(update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
}
});})(update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__5455__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__5455__auto__)){
var date = temp__5455__auto__;
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(date) : fmt.call(null,date));
} else {
return "";
}
})()], null),reagent_forms.core.clean_attrs(attrs)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);

return cljs.core.deref(dom_node).focus();
}
});})(update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,dom_node,mouse_on_list_QMARK_,expanded_QMARK_,auto_close_QMARK_,((function (update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(update_disabled_QMARK___19246__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
,save_value,inline,lang], null)], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19675 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19675) : visible__19250__auto__.call(null,G__19675));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19668,_,map__19671,map__19671__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19672,map__19672__$1,doc,get,save_BANG_,update_BANG_))
], null));
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__19676,p__19677){
var vec__19678 = p__19676;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19678,(0),null);
var map__19681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19678,(1),null);
var map__19681__$1 = ((((!((map__19681 == null)))?(((((map__19681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19681):map__19681);
var attrs = map__19681__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19681__$1,cljs.core.cst$kw$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19681__$1,cljs.core.cst$kw$field);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19681__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19681__$1,cljs.core.cst$kw$default_DASH_checked);
var component = vec__19678;
var map__19682 = p__19677;
var map__19682__$1 = ((((!((map__19682 == null)))?(((((map__19682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19682):map__19682);
var opts = map__19682__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19682__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19682__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19682__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__3922__auto__ = checked;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,true) : save_BANG_.call(null,id,true));
} else {
}

return ((function (vec__19678,_,map__19681,map__19681__$1,attrs,id,field,checked,default_checked,component,map__19682,map__19682__$1,opts,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0)))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19678,_,map__19681,map__19681__$1,attrs,id,field,checked,default_checked,component,map__19682,map__19682__$1,opts,doc,get,save_BANG_){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19678,_,map__19681,map__19681__$1,attrs,id,field,checked,default_checked,component,map__19682,map__19682__$1,opts,doc,get,save_BANG_){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19678,_,map__19681,map__19681__$1,attrs,id,field,checked,default_checked,component,map__19682,map__19682__$1,opts,doc,get,save_BANG_))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19678,_,map__19681,map__19681__$1,attrs,id,field,checked,default_checked,component,map__19682,map__19682__$1,opts,doc,get,save_BANG_))
,reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0)));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0)));
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19685 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19685) : visible__19250__auto__.call(null,G__19685));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19678,_,map__19681,map__19681__$1,attrs,id,field,checked,default_checked,component,map__19682,map__19682__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$label,(function (p__19686,p__19687){
var vec__19688 = p__19686;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(0),null);
var map__19691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(1),null);
var map__19691__$1 = ((((!((map__19691 == null)))?(((((map__19691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19691):map__19691);
var attrs = map__19691__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19691__$1,cljs.core.cst$kw$id);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19691__$1,cljs.core.cst$kw$preamble);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19691__$1,cljs.core.cst$kw$postamble);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19691__$1,cljs.core.cst$kw$placeholder);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19691__$1,cljs.core.cst$kw$fmt);
var map__19692 = p__19687;
var map__19692__$1 = ((((!((map__19692 == null)))?(((((map__19692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19692):map__19692);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19692__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19692__$1,cljs.core.cst$kw$get);
return ((function (vec__19688,type,map__19691,map__19691__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19692,map__19692__$1,doc,get){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19688,type,map__19691,map__19691__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19692,map__19692__$1,doc,get){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19688,type,map__19691,map__19691__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19692,map__19692__$1,doc,get){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19688,type,map__19691,map__19691__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19692,map__19692__$1,doc,get))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19688,type,map__19691,map__19691__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19692,map__19692__$1,doc,get))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs),preamble,(function (){var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(value) : fmt.call(null,value));
} else {
if(cljs.core.truth_(value)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
}
})()], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19695 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19695) : visible__19250__auto__.call(null,G__19695));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19688,type,map__19691,map__19691__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19692,map__19692__$1,doc,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$alert,(function (p__19696,p__19697){
var vec__19698 = p__19696;
var seq__19699 = cljs.core.seq(vec__19698);
var first__19700 = cljs.core.first(seq__19699);
var seq__19699__$1 = cljs.core.next(seq__19699);
var type = first__19700;
var first__19700__$1 = cljs.core.first(seq__19699__$1);
var seq__19699__$2 = cljs.core.next(seq__19699__$1);
var map__19701 = first__19700__$1;
var map__19701__$1 = ((((!((map__19701 == null)))?(((((map__19701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19701):map__19701);
var attrs = map__19701__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19701__$1,cljs.core.cst$kw$id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19701__$1,cljs.core.cst$kw$event);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19701__$1,cljs.core.cst$kw$touch_DASH_event);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19701__$1,cljs.core.cst$kw$closeable_QMARK_,true);
var body = seq__19699__$2;
var map__19702 = p__19697;
var map__19702__$1 = ((((!((map__19702 == null)))?(((((map__19702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19702):map__19702);
var opts = map__19702__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19702__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19702__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19702__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__19698,seq__19699,first__19700,seq__19699__$1,type,first__19700__$1,seq__19699__$2,map__19701,map__19701__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19702,map__19702__$1,opts,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19698,seq__19699,first__19700,seq__19699__$1,type,first__19700__$1,seq__19699__$2,map__19701,map__19701__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19702,map__19702__$1,opts,doc,get,save_BANG_){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19698,seq__19699,first__19700,seq__19699__$1,type,first__19700__$1,seq__19699__$2,map__19701,map__19701__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19702,map__19702__$1,opts,doc,get,save_BANG_){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19698,seq__19699,first__19700,seq__19699__$1,type,first__19700__$1,seq__19699__$2,map__19701,map__19701__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19702,map__19702__$1,opts,doc,get,save_BANG_))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19698,seq__19699,first__19700,seq__19699__$1,type,first__19700__$1,seq__19699__$2,map__19701,map__19701__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19702,map__19702__$1,opts,doc,get,save_BANG_))
,(cljs.core.truth_(event)?(cljs.core.truth_((function (){var G__19705 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__19705) : event.call(null,G__19705));
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs)], null),body):null):(function (){var temp__5455__auto__ = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__5455__auto__)){
var message = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs),(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__3922__auto__ = touch_event;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__5455__auto__,update_disabled_QMARK___19246__auto__,vec__19698,seq__19699,first__19700,seq__19699__$1,type,first__19700__$1,seq__19699__$2,map__19701,map__19701__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19702,map__19702__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__5455__auto__,update_disabled_QMARK___19246__auto__,vec__19698,seq__19699,first__19700,seq__19699__$1,type,first__19700__$1,seq__19699__$2,map__19701,map__19701__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19702,map__19702__$1,opts,doc,get,save_BANG_))
]),"X"], null):null),message], null);
} else {
return null;
}
})()));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19706 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19706) : visible__19250__auto__.call(null,G__19706));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19698,seq__19699,first__19700,seq__19699__$1,type,first__19700__$1,seq__19699__$2,map__19701,map__19701__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19702,map__19702__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$radio,(function (p__19707,p__19708){
var vec__19709 = p__19707;
var seq__19710 = cljs.core.seq(vec__19709);
var first__19711 = cljs.core.first(seq__19710);
var seq__19710__$1 = cljs.core.next(seq__19710);
var type = first__19711;
var first__19711__$1 = cljs.core.first(seq__19710__$1);
var seq__19710__$2 = cljs.core.next(seq__19710__$1);
var map__19712 = first__19711__$1;
var map__19712__$1 = ((((!((map__19712 == null)))?(((((map__19712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19712):map__19712);
var attrs = map__19712__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19712__$1,cljs.core.cst$kw$field);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19712__$1,cljs.core.cst$kw$name);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19712__$1,cljs.core.cst$kw$value);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19712__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19712__$1,cljs.core.cst$kw$default_DASH_checked);
var body = seq__19710__$2;
var map__19713 = p__19708;
var map__19713__$1 = ((((!((map__19713 == null)))?(((((map__19713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19713):map__19713);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19713__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19713__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19713__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__3922__auto__ = checked;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
} else {
}

return ((function (vec__19709,seq__19710,first__19711,seq__19710__$1,type,first__19711__$1,seq__19710__$2,map__19712,map__19712__$1,attrs,field,name,value,checked,default_checked,body,map__19713,map__19713__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19709,seq__19710,first__19711,seq__19710__$1,type,first__19711__$1,seq__19710__$2,map__19712,map__19712__$1,attrs,field,name,value,checked,default_checked,body,map__19713,map__19713__$1,doc,get,save_BANG_){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19709,seq__19710,first__19711,seq__19710__$1,type,first__19711__$1,seq__19710__$2,map__19712,map__19712__$1,attrs,field,name,value,checked,default_checked,body,map__19713,map__19713__$1,doc,get,save_BANG_){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19709,seq__19710,first__19711,seq__19710__$1,type,first__19711__$1,seq__19710__$2,map__19712,map__19712__$1,attrs,field,name,value,checked,default_checked,body,map__19713,map__19713__$1,doc,get,save_BANG_))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19709,seq__19710,first__19711,seq__19710__$1,type,first__19711__$1,seq__19710__$2,map__19712,map__19712__$1,attrs,field,name,value,checked,default_checked,body,map__19713,map__19713__$1,doc,get,save_BANG_))
,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(reagent_forms.core.clean_attrs(attrs),cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___19246__auto__,vec__19709,seq__19710,first__19711,seq__19710__$1,type,first__19711__$1,seq__19710__$2,map__19712,map__19712__$1,attrs,field,name,value,checked,default_checked,body,map__19713,map__19713__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(update_disabled_QMARK___19246__auto__,vec__19709,seq__19710,first__19711,seq__19710__$1,type,first__19711__$1,seq__19710__$2,map__19712,map__19712__$1,attrs,field,name,value,checked,default_checked,body,map__19713,map__19713__$1,doc,get,save_BANG_))
], null)], 0))], null),body));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19716 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19716) : visible__19250__auto__.call(null,G__19716));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19709,seq__19710,first__19711,seq__19710__$1,type,first__19711__$1,seq__19710__$2,map__19712,map__19712__$1,attrs,field,name,value,checked,default_checked,body,map__19713,map__19713__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$typeahead,(function (p__19721,p__19722){
var vec__19723 = p__19721;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19723,(0),null);
var map__19726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19723,(1),null);
var map__19726__$1 = ((((!((map__19726 == null)))?(((((map__19726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19726):map__19726);
var attrs = map__19726__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19726__$1,cljs.core.cst$kw$result_DASH_fn,cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.cst$kw$item_DASH_class);
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.cst$kw$input_DASH_placeholder);
var selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.cst$kw$selections);
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.cst$kw$highlight_DASH_class);
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.cst$kw$list_DASH_class);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.cst$kw$data_DASH_source);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.cst$kw$input_DASH_class);
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19726__$1,cljs.core.cst$kw$clear_DASH_on_DASH_focus_QMARK_,true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.cst$kw$id);
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19726__$1,cljs.core.cst$kw$choice_DASH_fn,cljs.core.identity);
var get_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.cst$kw$get_DASH_index);
var map__19727 = p__19722;
var map__19727__$1 = ((((!((map__19727 == null)))?(((((map__19727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19727):map__19727);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19727__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19727__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19727__$1,cljs.core.cst$kw$save_BANG_);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var selections__$1 = (function (){var or__3922__auto__ = selections;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
})();
var get_index__$1 = (function (){var or__3922__auto__ = get_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.constantly((-1));
}
})();
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not_empty(cljs.core.deref(selections__$1));
if(cljs.core.truth_(and__3911__auto__)){
return (cljs.core.deref(selected_index) > (-1));
} else {
return and__3911__auto__;
}
})())){
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections__$1),cljs.core.deref(selected_index));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,choice) : save_BANG_.call(null,id,choice));

(choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(choice) : choice_fn.call(null,choice));

return cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$placeholder,cljs.core.cst$kw$disabled,cljs.core.cst$kw$on_DASH_focus,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$on_DASH_key_DASH_down],[input_placeholder,cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(attrs),((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
,(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(!(cljs.core.iterable_QMARK_(v))){
return v;
} else {
return cljs.core.first(v);
}
})(),((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));
}
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$text,input_class,((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (p1__19717_SHARP_){
var temp__5457__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__19717_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var value = temp__5457__auto__;
cljs.core.reset_BANG_(selections__$1,(function (){var G__19730 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__19730) : data_source.call(null,G__19730));
})());

var G__19731_19740 = id;
var G__19732_19741 = reagent_forms.core.value_of(p1__19717_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19731_19740,G__19732_19741) : save_BANG_.call(null,G__19731_19740,G__19732_19741));

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_(selected_index,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.deref(selections__$1))))?(0):(-1)));
} else {
return null;
}
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
,((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (p1__19718_SHARP_){
var G__19733 = p1__19718_SHARP_.which;
switch (G__19733) {
case (38):
p1__19718_SHARP_.preventDefault();

if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.deref(typeahead_hidden_QMARK_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (cljs.core.deref(selected_index) <= (0));
}
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);

return reagent_forms.core.scroll_to(p1__19718_SHARP_,cljs.core.deref(selected_index));
}

break;
case (40):
p1__19718_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref(typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_(selections__$1,(function (){var G__19734 = cljs.core.cst$kw$all;
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__19734) : data_source.call(null,G__19734));
})());

cljs.core.reset_BANG_(selected_index,(function (){var G__19735 = clojure.string.trim(reagent_forms.core.value_of(p1__19718_SHARP_));
var G__19736 = cljs.core.deref(selections__$1);
return (get_index__$1.cljs$core$IFn$_invoke$arity$2 ? get_index__$1.cljs$core$IFn$_invoke$arity$2(G__19735,G__19736) : get_index__$1.call(null,G__19735,G__19736));
})());

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return reagent_forms.core.scroll_to(p1__19718_SHARP_,cljs.core.deref(selected_index));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),(cljs.core.count(cljs.core.deref(selections__$1)) - (1)))){
return null;
} else {
var G__19737_19743 = id;
var G__19738_19744 = reagent_forms.core.value_of(p1__19718_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19737_19743,G__19738_19744) : save_BANG_.call(null,G__19737_19743,G__19738_19744));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);

return reagent_forms.core.scroll_to(p1__19718_SHARP_,cljs.core.deref(selected_index));
}
}

break;
case (9):
return choose_selected();

break;
case (13):
p1__19718_SHARP_.preventDefault();

return choose_selected();

break;
case (27):
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));

break;
default:
return "default";

}
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.empty_QMARK_(cljs.core.deref(selections__$1));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.deref(typeahead_hidden_QMARK_);
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,true);
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,false);
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (p1__19719_SHARP_){
return cljs.core.reset_BANG_(selected_index,parseInt(p1__19719_SHARP_.target.getAttribute("tabIndex")));
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_){
return (function (p1__19720_SHARP_){
p1__19720_SHARP_.preventDefault();

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(update_disabled_QMARK___19246__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
,cljs.core.deref(selections__$1)))], null)], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19739 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19739) : visible__19250__auto__.call(null,G__19739));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19723,type,map__19726,map__19726__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19727,map__19727__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$file,(function (p__19746,p__19747){
var vec__19748 = p__19746;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19748,(0),null);
var map__19751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19748,(1),null);
var map__19751__$1 = ((((!((map__19751 == null)))?(((((map__19751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19751):map__19751);
var attrs = map__19751__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19751__$1,cljs.core.cst$kw$id);
var map__19752 = p__19747;
var map__19752__$1 = ((((!((map__19752 == null)))?(((((map__19752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19752):map__19752);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,cljs.core.cst$kw$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__19748,type,map__19751,map__19751__$1,attrs,id,map__19752,map__19752__$1,doc,save_BANG_){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19748,type,map__19751,map__19751__$1,attrs,id,map__19752,map__19752__$1,doc,save_BANG_){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19748,type,map__19751,map__19751__$1,attrs,id,map__19752,map__19752__$1,doc,save_BANG_){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19748,type,map__19751,map__19751__$1,attrs,id,map__19752,map__19752__$1,doc,save_BANG_))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19748,type,map__19751,map__19751__$1,attrs,id,map__19752,map__19752__$1,doc,save_BANG_))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___19246__auto__,vec__19748,type,map__19751,map__19751__$1,attrs,id,map__19752,map__19752__$1,doc,save_BANG_){
return (function (p1__19745_SHARP_){
var G__19755 = id;
var G__19756 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(p1__19745_SHARP_.target.files));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19755,G__19756) : save_BANG_.call(null,G__19755,G__19756));
});})(update_disabled_QMARK___19246__auto__,vec__19748,type,map__19751,map__19751__$1,attrs,id,map__19752,map__19752__$1,doc,save_BANG_))
], null),reagent_forms.core.clean_attrs(attrs)], 0))], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19757 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19757) : visible__19250__auto__.call(null,G__19757));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19748,type,map__19751,map__19751__$1,attrs,id,map__19752,map__19752__$1,doc,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$files,(function (p__19759,p__19760){
var vec__19761 = p__19759;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19761,(0),null);
var map__19764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19761,(1),null);
var map__19764__$1 = ((((!((map__19764 == null)))?(((((map__19764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19764):map__19764);
var attrs = map__19764__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19764__$1,cljs.core.cst$kw$id);
var map__19765 = p__19760;
var map__19765__$1 = ((((!((map__19765 == null)))?(((((map__19765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19765):map__19765);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19765__$1,cljs.core.cst$kw$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19765__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__19761,type,map__19764,map__19764__$1,attrs,id,map__19765,map__19765__$1,doc,save_BANG_){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19761,type,map__19764,map__19764__$1,attrs,id,map__19765,map__19765__$1,doc,save_BANG_){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19761,type,map__19764,map__19764__$1,attrs,id,map__19765,map__19765__$1,doc,save_BANG_){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19761,type,map__19764,map__19764__$1,attrs,id,map__19765,map__19765__$1,doc,save_BANG_))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19761,type,map__19764,map__19764__$1,attrs,id,map__19765,map__19765__$1,doc,save_BANG_))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$multiple,true,cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___19246__auto__,vec__19761,type,map__19764,map__19764__$1,attrs,id,map__19765,map__19765__$1,doc,save_BANG_){
return (function (p1__19758_SHARP_){
var G__19768 = id;
var G__19769 = p1__19758_SHARP_.target.files;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19768,G__19769) : save_BANG_.call(null,G__19768,G__19769));
});})(update_disabled_QMARK___19246__auto__,vec__19761,type,map__19764,map__19764__$1,attrs,id,map__19765,map__19765__$1,doc,save_BANG_))
], null),reagent_forms.core.clean_attrs(attrs)], 0))], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19770 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19770) : visible__19250__auto__.call(null,G__19770));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19761,type,map__19764,map__19764__$1,attrs,id,map__19765,map__19765__$1,doc,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__19771,p__19772,selections,field,id){
var vec__19773 = p__19771;
var seq__19774 = cljs.core.seq(vec__19773);
var first__19775 = cljs.core.first(seq__19774);
var seq__19774__$1 = cljs.core.next(seq__19774);
var type = first__19775;
var first__19775__$1 = cljs.core.first(seq__19774__$1);
var seq__19774__$2 = cljs.core.next(seq__19774__$1);
var map__19776 = first__19775__$1;
var map__19776__$1 = ((((!((map__19776 == null)))?(((((map__19776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19776):map__19776);
var attrs = map__19776__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19776__$1,cljs.core.cst$kw$key);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19776__$1,cljs.core.cst$kw$touch_DASH_event);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19776__$1,cljs.core.cst$kw$disabled);
var body = seq__19774__$2;
var map__19777 = p__19772;
var map__19777__$1 = ((((!((map__19777 == null)))?(((((map__19777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19777):map__19777);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19777__$1,cljs.core.cst$kw$save_BANG_);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19777__$1,cljs.core.cst$kw$multi_DASH_select);
var handle_click_BANG_ = ((function (vec__19773,seq__19774,first__19775,seq__19774__$1,type,first__19775__$1,seq__19774__$2,map__19776,map__19776__$1,attrs,key,touch_event,disabled,body,map__19777,map__19777__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__19784 = id;
var G__19785 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.deref(selections)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19784,G__19785) : save_BANG_.call(null,G__19784,G__19785));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
cljs.core.reset_BANG_(selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not(value)]));

var G__19786 = id;
var G__19787 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19786,G__19787) : save_BANG_.call(null,G__19786,G__19787));
}
});})(vec__19773,seq__19774,first__19775,seq__19774__$1,type,first__19775__$1,seq__19774__$2,map__19776,map__19776__$1,attrs,key,touch_event,disabled,body,map__19777,map__19777__$1,save_BANG_,multi_select))
;
return ((function (vec__19773,seq__19774,first__19775,seq__19774__$1,type,first__19775__$1,seq__19774__$2,map__19776,map__19776__$1,attrs,key,touch_event,disabled,body,map__19777,map__19777__$1,save_BANG_,multi_select){
return (function (){
var disabled_QMARK_ = ((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
var button_or_input_QMARK_ = (function (){var t = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(type),(0),(5));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"butto")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"input")));
})();
var class$ = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(active_QMARK_)?"active":null),(cljs.core.truth_((function (){var and__3911__auto__ = disabled_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return !(button_or_input_QMARK_);
} else {
return and__3911__auto__;
}
})())?"disabled":null)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$class,class$,(function (){var or__3922__auto__ = touch_event;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),(cljs.core.truth_(disabled_QMARK_)?null:handle_click_BANG_)]),reagent_forms.core.clean_attrs(attrs),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$disabled,disabled_QMARK_], null)], 0)),((button_or_input_QMARK_)?null:cljs.core.cst$kw$disabled)),body], null);
});
;})(vec__19773,seq__19774,first__19775,seq__19774__$1,type,first__19775__$1,seq__19774__$2,map__19776,map__19776__$1,attrs,key,touch_event,disabled,body,map__19777,map__19777__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__19788){
var map__19789 = p__19788;
var map__19789__$1 = ((((!((map__19789 == null)))?(((((map__19789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19789):map__19789);
var ks = map__19789__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19789__$1,cljs.core.cst$kw$get);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19789__$1,cljs.core.cst$kw$multi_DASH_select);
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__19789,map__19789__$1,ks,get,multi_select){
return (function (m,p__19791){
var vec__19792 = p__19791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19792,(0),null);
var map__19795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19792,(1),null);
var map__19795__$1 = ((((!((map__19795 == null)))?(((((map__19795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19795):map__19795);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19795__$1,cljs.core.cst$kw$key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__19789,map__19789__$1,ks,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__19799,p__19800){
var vec__19801 = p__19799;
var seq__19802 = cljs.core.seq(vec__19801);
var first__19803 = cljs.core.first(seq__19802);
var seq__19802__$1 = cljs.core.next(seq__19802);
var type = first__19803;
var first__19803__$1 = cljs.core.first(seq__19802__$1);
var seq__19802__$2 = cljs.core.next(seq__19802__$1);
var map__19804 = first__19803__$1;
var map__19804__$1 = ((((!((map__19804 == null)))?(((((map__19804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19804):map__19804);
var attrs = map__19804__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19804__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19804__$1,cljs.core.cst$kw$id);
var selection_items = seq__19802__$2;
var map__19805 = p__19800;
var map__19805__$1 = ((((!((map__19805 == null)))?(((((map__19805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19805):map__19805);
var opts = map__19805__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19805__$1,cljs.core.cst$kw$get);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get){
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get){
return (function (p1__19797_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get){
return (function (p__19808){
var vec__19809 = p__19808;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19809,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get))
,p1__19797_SHARP_));
});})(selection_items__$1,selections,selectors,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get))
);
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get){
return (function (p1__19798_SHARP_){
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__19798_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var visible_QMARK_ = temp__5455__auto__;
var G__19812 = cljs.core.deref(cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(opts));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19812) : visible_QMARK_.call(null,G__19812));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__19801,seq__19802,first__19803,seq__19802__$1,type,first__19803__$1,seq__19802__$2,map__19804,map__19804__$1,attrs,field,id,selection_items,map__19805,map__19805__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_select,(function (p__19813,p__19814){
var vec__19815 = p__19813;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19815,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19815,(1),null);
var field = vec__19815;
var map__19818 = p__19814;
var map__19818__$1 = ((((!((map__19818 == null)))?(((((map__19818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19818):map__19818);
var opts = map__19818__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19818__$1,cljs.core.cst$kw$doc);
return ((function (vec__19815,_,attrs,field,map__19818,map__19818__$1,opts,doc){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19815,_,attrs,field,map__19818,map__19818__$1,opts,doc){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19815,_,attrs,field,map__19818,map__19818__$1,opts,doc){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19815,_,attrs,field,map__19818,map__19818__$1,opts,doc))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19815,_,attrs,field,map__19818,map__19818__$1,opts,doc))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19820 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19820) : visible__19250__auto__.call(null,G__19820));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19815,_,attrs,field,map__19818,map__19818__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multi_DASH_select,(function (p__19821,p__19822){
var vec__19823 = p__19821;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19823,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19823,(1),null);
var field = vec__19823;
var map__19826 = p__19822;
var map__19826__$1 = ((((!((map__19826 == null)))?(((((map__19826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19826):map__19826);
var opts = map__19826__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19826__$1,cljs.core.cst$kw$doc);
return ((function (vec__19823,_,attrs,field,map__19826,map__19826__$1,opts,doc){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,vec__19823,_,attrs,field,map__19826,map__19826__$1,opts,doc){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,vec__19823,_,attrs,field,map__19826,map__19826__$1,opts,doc){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19823,_,attrs,field,map__19826,map__19826__$1,opts,doc))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,vec__19823,_,attrs,field,map__19826,map__19826__$1,opts,doc))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19828 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19828) : visible__19250__auto__.call(null,G__19828));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(vec__19823,_,attrs,field,map__19826,map__19826__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function reagent_forms$core$map_options_$_iter__19829(s__19830){
return (new cljs.core.LazySeq(null,(function (){
var s__19830__$1 = s__19830;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19830__$1);
if(temp__5457__auto__){
var s__19830__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19830__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__19830__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__19832 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__19831 = (0);
while(true){
if((i__19831 < size__4291__auto__)){
var vec__19833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__19831);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19833,(0),null);
var map__19836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19833,(1),null);
var map__19836__$1 = ((((!((map__19836 == null)))?(((((map__19836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19836):map__19836);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19836__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19833,(2),null);
cljs.core.chunk_append(b__19832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null));

var G__19843 = (i__19831 + (1));
i__19831 = G__19843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19832),reagent_forms$core$map_options_$_iter__19829(cljs.core.chunk_rest(s__19830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19832),null);
}
} else {
var vec__19838 = cljs.core.first(s__19830__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19838,(0),null);
var map__19841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19838,(1),null);
var map__19841__$1 = ((((!((map__19841 == null)))?(((((map__19841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19841):map__19841);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19841__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19838,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__19829(cljs.core.rest(s__19830__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19844_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__19844_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__19847,p__19848){
var vec__19849 = p__19847;
var seq__19850 = cljs.core.seq(vec__19849);
var first__19851 = cljs.core.first(seq__19850);
var seq__19850__$1 = cljs.core.next(seq__19850);
var type = first__19851;
var first__19851__$1 = cljs.core.first(seq__19850__$1);
var seq__19850__$2 = cljs.core.next(seq__19850__$1);
var map__19852 = first__19851__$1;
var map__19852__$1 = ((((!((map__19852 == null)))?(((((map__19852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19852):map__19852);
var attrs = map__19852__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19852__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19852__$1,cljs.core.cst$kw$id);
var options = seq__19850__$2;
var map__19853 = p__19848;
var map__19853__$1 = ((((!((map__19853 == null)))?(((((map__19853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19853):map__19853);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,cljs.core.cst$kw$save_BANG_);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null));
}
})());
var G__19856_19862 = id;
var G__19857_19863 = cljs.core.deref(selection);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19856_19862,G__19857_19863) : save_BANG_.call(null,G__19856_19862,G__19857_19863));

return ((function (options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___19246__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__19247__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___19246__auto__,options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_){
return (function (c__19248__auto__){
if(((cljs.core.map_QMARK_(c__19248__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__19248__auto__) == null))) && (update_disabled_QMARK___19246__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__19248__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___19246__auto__,options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_){
return (function (p1__19245__19249__auto__){
if(cljs.core.fn_QMARK_(p1__19245__19249__auto__)){
return (p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__19245__19249__auto__.cljs$core$IFn$_invoke$arity$0() : p1__19245__19249__auto__.call(null));
} else {
return p1__19245__19249__auto__;
}
});})(update_disabled_QMARK___19246__auto__,options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_))
);
} else {
return c__19248__auto__;
}
});})(update_disabled_QMARK___19246__auto__,options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent_forms.core.clean_attrs(attrs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,cljs.core.deref(selection)),cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___19246__auto__,options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_){
return (function (p1__19845_SHARP_){
var G__19858 = id;
var G__19859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__19845_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19858,G__19859) : save_BANG_.call(null,G__19858,G__19859));
});})(update_disabled_QMARK___19246__auto__,options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (update_disabled_QMARK___19246__auto__,options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_){
return (function (p1__19846_SHARP_){
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19846_SHARP_));
if(cljs.core.truth_(temp__5455__auto__)){
var visible_QMARK_ = temp__5455__auto__;
var G__19860 = cljs.core.deref(doc);
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19860) : visible_QMARK_.call(null,G__19860));
} else {
return true;
}
});})(update_disabled_QMARK___19246__auto__,options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_))
,options__$1))], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__19250__auto__ = temp__5455__auto__;
var pred__19251__auto__ = ((cljs.core.fn_QMARK_(visible__19250__auto__))?(function (){var G__19861 = cljs.core.deref(doc);
return (visible__19250__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__19250__auto__.cljs$core$IFn$_invoke$arity$1(G__19861) : visible__19250__auto__.call(null,G__19861));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__19250__auto__) : doc.call(null,visible__19250__auto__)));
if(cljs.core.truth_(pred__19251__auto__)){
return body__19247__auto__;
} else {
return null;
}
} else {
return body__19247__auto__;
}
});
;})(options__$1,options_lookup,selection,vec__19849,seq__19850,first__19851,seq__19850__$1,type,first__19851__$1,seq__19850__$2,map__19852,map__19852__$1,attrs,field,id,options,map__19853,map__19853__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.cst$kw$field)));
});
reagent_forms.core.make_form = (function reagent_forms$core$make_form(form,opts,wrap_fns_QMARK_){
return clojure.walk.postwalk((function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_(node))){
var opts__$1 = (cljs.core.truth_(wrap_fns_QMARK_)?reagent_forms.core.wrap_fns(opts,node):opts);
var field = (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(node,opts__$1) : reagent_forms.core.init_field.call(null,node,opts__$1));
if(cljs.core.fn_QMARK_(field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
}),form);
});
if(typeof reagent_forms.core.bind_fields !== 'undefined'){
} else {
/**
 * Creates data bindings between the form fields and the supplied atom or calls
 * the supplied functions (when `doc` is a map) on events triggered by fields.
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind-fields"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function() { 
var G__19864__delegate = function (_,doc,___$1){
return cljs.core.type(doc);
};
var G__19864 = function (_,doc,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__19865__i = 0, G__19865__a = new Array(arguments.length -  2);
while (G__19865__i < G__19865__a.length) {G__19865__a[G__19865__i] = arguments[G__19865__i + 2]; ++G__19865__i;}
  ___$1 = new cljs.core.IndexedSeq(G__19865__a,0,null);
} 
return G__19864__delegate.call(this,_,doc,___$1);};
G__19864.cljs$lang$maxFixedArity = 2;
G__19864.cljs$lang$applyTo = (function (arglist__19866){
var _ = cljs.core.first(arglist__19866);
arglist__19866 = cljs.core.next(arglist__19866);
var doc = cljs.core.first(arglist__19866);
var ___$1 = cljs.core.rest(arglist__19866);
return G__19864__delegate(_,doc,___$1);
});
G__19864.cljs$core$IFn$_invoke$arity$variadic = G__19864__delegate;
return G__19864;
})()
;})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.PersistentArrayMap,(function (form,doc){
var form__$1 = reagent_forms.core.make_form(form,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,cljs.core.cst$kw$doc,cljs.core.cst$kw$get.cljs$core$IFn$_invoke$arity$1(doc)),false);
return ((function (form__$1){
return (function (){
return form__$1;
});
;})(form__$1))
}));
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__19868__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$get,(function (p1__19867_SHARP_){
return cljs.core.deref((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,p1__19867_SHARP_) : reagent_forms.core.cursor_for_id.call(null,doc,p1__19867_SHARP_)));
}),cljs.core.cst$kw$save_BANG_,reagent_forms.core.mk_save_fn(doc,events),cljs.core.cst$kw$update_BANG_,reagent_forms.core.mk_update_fn(doc,events)], null);
var form__$1 = reagent_forms.core.make_form(form,opts,true);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
};
var G__19868 = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__19869__i = 0, G__19869__a = new Array(arguments.length -  2);
while (G__19869__i < G__19869__a.length) {G__19869__a[G__19869__i] = arguments[G__19869__i + 2]; ++G__19869__i;}
  events = new cljs.core.IndexedSeq(G__19869__a,0,null);
} 
return G__19868__delegate.call(this,form,doc,events);};
G__19868.cljs$lang$maxFixedArity = 2;
G__19868.cljs$lang$applyTo = (function (arglist__19870){
var form = cljs.core.first(arglist__19870);
arglist__19870 = cljs.core.next(arglist__19870);
var doc = cljs.core.first(arglist__19870);
var events = cljs.core.rest(arglist__19870);
return G__19868__delegate(form,doc,events);
});
G__19868.cljs$core$IFn$_invoke$arity$variadic = G__19868__delegate;
return G__19868;
})()
);
