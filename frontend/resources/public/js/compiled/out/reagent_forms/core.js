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
var vec__19075 = (cljs.core.truth_(item_elem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_elem.scrollHeight,item_elem.offsetTop], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var item_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(0),null);
var offset_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(1),null);
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
return (function (p1__19079_SHARP_,p2__19078_SHARP_){
var or__3922__auto__ = (p2__19078_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__19078_SHARP_.cljs$core$IFn$_invoke$arity$3(path,value,p1__19079_SHARP_) : p2__19078_SHARP_.call(null,path,value,p1__19079_SHARP_));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return p1__19079_SHARP_;
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
var G__19080 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__19080) : wrapper.call(null,G__19080));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__19081 = id;
var G__19082 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19081,G__19082) : save_BANG_.call(null,G__19081,G__19082));
});
});
reagent_forms.core.wrap_update_fn = (function reagent_forms$core$wrap_update_fn(update_BANG_,wrapper){
return (function (id,update_fn,value){
var G__19083 = id;
var G__19084 = update_fn;
var G__19085 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__19083,G__19084,G__19085) : update_BANG_.call(null,G__19083,G__19084,G__19085));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(p__19086,node){
var map__19087 = p__19086;
var map__19087__$1 = ((((!((map__19087 == null)))?(((((map__19087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19087):map__19087);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19087__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19087__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19087__$1,cljs.core.cst$kw$save_BANG_);
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19087__$1,cljs.core.cst$kw$update_BANG_);
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
if(cljs.core.truth_((function (){var fexpr__19089 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$numeric,null,cljs.core.cst$kw$range,null], null), null);
return (fexpr__19089.cljs$core$IFn$_invoke$arity$1 ? fexpr__19089.cljs$core$IFn$_invoke$arity$1(field_type) : fexpr__19089.call(null,field_type));
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
return (function (p__19090,_){
var map__19091 = p__19090;
var map__19091__$1 = ((((!((map__19091 == null)))?(((((map__19091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19091):map__19091);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19091__$1,cljs.core.cst$kw$field);
if(cljs.core.truth_((function (){var fexpr__19093 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$email,null,cljs.core.cst$kw$numeric,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$tel,null,cljs.core.cst$kw$textarea,null,cljs.core.cst$kw$range,null,cljs.core.cst$kw$text,null], null), null);
return (fexpr__19093.cljs$core$IFn$_invoke$arity$1 ? fexpr__19093.cljs$core$IFn$_invoke$arity$1(field) : fexpr__19093.call(null,field));
})())){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field;
}
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__19095,p__19096){
var map__19097 = p__19095;
var map__19097__$1 = ((((!((map__19097 == null)))?(((((map__19097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19097):map__19097);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,cljs.core.cst$kw$fmt);
var map__19098 = p__19096;
var map__19098__$1 = ((((!((map__19098 == null)))?(((((map__19098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19098):map__19098);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19098__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19098__$1,cljs.core.cst$kw$save_BANG_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(function (){var value = (function (){var or__3922__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.cst$kw$on_DASH_change,((function (map__19097,map__19097__$1,field,id,fmt,map__19098,map__19098__$1,get,save_BANG_){
return (function (p1__19094_SHARP_){
var G__19101 = id;
var G__19102 = (function (){var G__19103 = field;
var G__19104 = reagent_forms.core.value_of(p1__19094_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__19103,G__19104) : reagent_forms.core.format_type.call(null,G__19103,G__19104));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19101,G__19102) : save_BANG_.call(null,G__19101,G__19102));
});})(map__19097,map__19097__$1,field,id,fmt,map__19098,map__19098__$1,get,save_BANG_))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__19105,p__19106){
var map__19107 = p__19105;
var map__19107__$1 = ((((!((map__19107 == null)))?(((((map__19107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19107):map__19107);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19107__$1,cljs.core.cst$kw$id);
var map__19108 = p__19106;
var map__19108__$1 = ((((!((map__19108 == null)))?(((((map__19108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19108):map__19108);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19108__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19108__$1,cljs.core.cst$kw$save_BANG_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,cljs.core.boolean$((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id))),cljs.core.cst$kw$on_DASH_change,((function (map__19107,map__19107__$1,id,map__19108,map__19108__$1,get,save_BANG_){
return (function (){
var G__19111 = id;
var G__19112 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19111,G__19112) : save_BANG_.call(null,G__19111,G__19112));
});})(map__19107,map__19107__$1,id,map__19108,map__19108__$1,get,save_BANG_))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4500__auto__ = [];
var len__4497__auto___19124 = arguments.length;
var i__4498__auto___19125 = (0);
while(true){
if((i__4498__auto___19125 < len__4497__auto___19124)){
args__4500__auto__.push((arguments[i__4498__auto___19125]));

var G__19126 = (i__4498__auto___19125 + (1));
i__4498__auto___19125 = G__19126;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__19116,opts,p__19117){
var vec__19118 = p__19116;
var seq__19119 = cljs.core.seq(vec__19118);
var first__19120 = cljs.core.first(seq__19119);
var seq__19119__$1 = cljs.core.next(seq__19119);
var type = first__19120;
var first__19120__$1 = cljs.core.first(seq__19119__$1);
var seq__19119__$2 = cljs.core.next(seq__19119__$1);
var attrs = first__19120__$1;
var body = seq__19119__$2;
var vec__19121 = p__19117;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19121,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0))], 0)))], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq19113){
var G__19114 = cljs.core.first(seq19113);
var seq19113__$1 = cljs.core.next(seq19113);
var G__19115 = cljs.core.first(seq19113__$1);
var seq19113__$2 = cljs.core.next(seq19113__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__19114,G__19115,seq19113__$2);
});

if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p__19127,_){
var vec__19128 = p__19127;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19128,(0),null);
var map__19131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19128,(1),null);
var map__19131__$1 = ((((!((map__19131 == null)))?(((((map__19131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19131):map__19131);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19131__$1,cljs.core.cst$kw$field);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_((function (){var fexpr__19133 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$email,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$tel,null,cljs.core.cst$kw$textarea,null,cljs.core.cst$kw$range,null,cljs.core.cst$kw$text,null], null), null);
return (fexpr__19133.cljs$core$IFn$_invoke$arity$1 ? fexpr__19133.cljs$core$IFn$_invoke$arity$1(field__$1) : fexpr__19133.call(null,field__$1));
})())){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field__$1;
}
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$container,(function (p__19135,p__19136){
var vec__19137 = p__19135;
var seq__19138 = cljs.core.seq(vec__19137);
var first__19139 = cljs.core.first(seq__19138);
var seq__19138__$1 = cljs.core.next(seq__19138);
var type = first__19139;
var first__19139__$1 = cljs.core.first(seq__19138__$1);
var seq__19138__$2 = cljs.core.next(seq__19138__$1);
var map__19140 = first__19139__$1;
var map__19140__$1 = ((((!((map__19140 == null)))?(((((map__19140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19140):map__19140);
var attrs = map__19140__$1;
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19140__$1,cljs.core.cst$kw$valid_QMARK_);
var body = seq__19138__$2;
var map__19141 = p__19136;
var map__19141__$1 = ((((!((map__19141 == null)))?(((((map__19141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19141):map__19141);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$doc);
return ((function (vec__19137,seq__19138,first__19139,seq__19138__$1,type,first__19139__$1,seq__19138__$2,map__19140,map__19140__$1,attrs,valid_QMARK_,body,map__19141,map__19141__$1,doc){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19137,seq__19138,first__19139,seq__19138__$1,type,first__19139__$1,seq__19138__$2,map__19140,map__19140__$1,attrs,valid_QMARK_,body,map__19141,map__19141__$1,doc){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19137,seq__19138,first__19139,seq__19138__$1,type,first__19139__$1,seq__19138__$2,map__19140,map__19140__$1,attrs,valid_QMARK_,body,map__19141,map__19141__$1,doc){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19137,seq__19138,first__19139,seq__19138__$1,type,first__19139__$1,seq__19138__$2,map__19140,map__19140__$1,attrs,valid_QMARK_,body,map__19141,map__19141__$1,doc))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19137,seq__19138,first__19139,seq__19138__$1,type,first__19139__$1,seq__19138__$2,map__19140,map__19140__$1,attrs,valid_QMARK_,body,map__19141,map__19141__$1,doc))
,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs((function (){var temp__5455__auto__ = (cljs.core.truth_(valid_QMARK_)?(function (){var G__19144 = cljs.core.deref(doc);
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19144) : valid_QMARK_.call(null,G__19144));
})():null);
if(cljs.core.truth_(temp__5455__auto__)){
var valid_class = temp__5455__auto__;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__5455__auto__,update_disabled_QMARK___18755__auto__,vec__19137,seq__19138,first__19139,seq__19138__$1,type,first__19139__$1,seq__19138__$2,map__19140,map__19140__$1,attrs,valid_QMARK_,body,map__19141,map__19141__$1,doc){
return (function (p1__19134_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__19134_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19134_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__5455__auto__,update_disabled_QMARK___18755__auto__,vec__19137,seq__19138,first__19139,seq__19138__$1,type,first__19139__$1,seq__19138__$2,map__19140,map__19140__$1,attrs,valid_QMARK_,body,map__19141,map__19141__$1,doc))
);
} else {
return attrs;
}
})())], null),body));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19145 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19145) : visible__18759__auto__.call(null,G__19145));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19137,seq__19138,first__19139,seq__19138__$1,type,first__19139__$1,seq__19138__$2,map__19140,map__19140__$1,attrs,valid_QMARK_,body,map__19141,map__19141__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__19146,p__19147){
var vec__19148 = p__19146;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19148,(0),null);
var map__19151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19148,(1),null);
var map__19151__$1 = ((((!((map__19151 == null)))?(((((map__19151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19151):map__19151);
var attrs = map__19151__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19151__$1,cljs.core.cst$kw$field);
var component = vec__19148;
var map__19152 = p__19147;
var map__19152__$1 = ((((!((map__19152 == null)))?(((((map__19152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19152):map__19152);
var opts = map__19152__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19152__$1,cljs.core.cst$kw$doc);
return ((function (vec__19148,_,map__19151,map__19151__$1,attrs,field,component,map__19152,map__19152__$1,opts,doc){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19148,_,map__19151,map__19151__$1,attrs,field,component,map__19152,map__19152__$1,opts,doc){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19148,_,map__19151,map__19151__$1,attrs,field,component,map__19152,map__19152__$1,opts,doc){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19148,_,map__19151,map__19151__$1,attrs,field,component,map__19152,map__19152__$1,opts,doc))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19148,_,map__19151,map__19151__$1,attrs,field,component,map__19152,map__19152__$1,opts,doc))
,reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0)));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19155 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19155) : visible__18759__auto__.call(null,G__19155));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19148,_,map__19151,map__19151__$1,attrs,field,component,map__19152,map__19152__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (p__19158,p__19159){
var vec__19160 = p__19158;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160,(0),null);
var map__19163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160,(1),null);
var map__19163__$1 = ((((!((map__19163 == null)))?(((((map__19163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19163):map__19163);
var attrs = map__19163__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163__$1,cljs.core.cst$kw$fmt);
var map__19164 = p__19159;
var map__19164__$1 = ((((!((map__19164 == null)))?(((((map__19164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19164):map__19164);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19164__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19164__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19164__$1,cljs.core.cst$kw$save_BANG_);
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var or__3922__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___18755__auto__,input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_){
return (function (p1__19156_SHARP_){
return cljs.core.reset_BANG_(input_value,reagent_forms.core.value_of(p1__19156_SHARP_));
});})(update_disabled_QMARK___18755__auto__,input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (update_disabled_QMARK___18755__auto__,input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_){
return (function (p1__19157_SHARP_){
cljs.core.reset_BANG_(input_value,null);

var G__19167 = id;
var G__19168 = (function (){var G__19169 = cljs.core.cst$kw$numeric;
var G__19170 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__19157_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__19169,G__19170) : reagent_forms.core.format_type.call(null,G__19169,G__19170));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19167,G__19168) : save_BANG_.call(null,G__19167,G__19168));
});})(update_disabled_QMARK___18755__auto__,input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_))
], null),reagent_forms.core.clean_attrs(attrs)], 0))], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19171 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19171) : visible__18759__auto__.call(null,G__19171));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(input_value,vec__19160,type,map__19163,map__19163__$1,attrs,id,fmt,map__19164,map__19164__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$datepicker,(function (p__19175,p__19176){
var vec__19177 = p__19175;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19177,(0),null);
var map__19180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19177,(1),null);
var map__19180__$1 = ((((!((map__19180 == null)))?(((((map__19180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19180):map__19180);
var attrs = map__19180__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19180__$1,cljs.core.cst$kw$id);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19180__$1,cljs.core.cst$kw$date_DASH_format);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19180__$1,cljs.core.cst$kw$inline);
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19180__$1,cljs.core.cst$kw$auto_DASH_close_QMARK_);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19180__$1,cljs.core.cst$kw$disabled);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19180__$1,cljs.core.cst$kw$lang,cljs.core.cst$kw$en_DASH_US);
var save_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19180__$1,cljs.core.cst$kw$save_DASH_fn);
var map__19181 = p__19176;
var map__19181__$1 = ((((!((map__19181 == null)))?(((((map__19181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19181):map__19181);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19181__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19181__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19181__$1,cljs.core.cst$kw$save_BANG_);
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19181__$1,cljs.core.cst$kw$update_BANG_);
var fmt = ((cljs.core.fn_QMARK_(date_format))?date_format:((function (vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__19172_SHARP_){
return reagent_forms.datepicker.format_date(p1__19172_SHARP_,reagent_forms.datepicker.parse_format(date_format));
});})(vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
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
var save_value = (cljs.core.truth_(save_fn)?((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__19173_SHARP_){
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(id,save_fn,p1__19173_SHARP_) : update_BANG_.call(null,id,save_fn,p1__19173_SHARP_));
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
:((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__19174_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__19174_SHARP_) : save_BANG_.call(null,id,p1__19174_SHARP_));
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
,cljs.core.cst$kw$render,((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$on_DASH_blur,((function (update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_(expanded_QMARK_,false);
}
});})(update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
}
});})(update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__5455__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__5455__auto__)){
var date = temp__5455__auto__;
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(date) : fmt.call(null,date));
} else {
return "";
}
})()], null),reagent_forms.core.clean_attrs(attrs)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);

return cljs.core.deref(dom_node).focus();
}
});})(update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,dom_node,mouse_on_list_QMARK_,expanded_QMARK_,auto_close_QMARK_,((function (update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(update_disabled_QMARK___18755__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
,save_value,inline,lang], null)], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19184 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19184) : visible__18759__auto__.call(null,G__19184));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__19177,_,map__19180,map__19180__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__19181,map__19181__$1,doc,get,save_BANG_,update_BANG_))
], null));
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__19185,p__19186){
var vec__19187 = p__19185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187,(0),null);
var map__19190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187,(1),null);
var map__19190__$1 = ((((!((map__19190 == null)))?(((((map__19190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19190):map__19190);
var attrs = map__19190__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190__$1,cljs.core.cst$kw$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190__$1,cljs.core.cst$kw$field);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190__$1,cljs.core.cst$kw$default_DASH_checked);
var component = vec__19187;
var map__19191 = p__19186;
var map__19191__$1 = ((((!((map__19191 == null)))?(((((map__19191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19191):map__19191);
var opts = map__19191__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19191__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19191__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19191__$1,cljs.core.cst$kw$save_BANG_);
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

return ((function (vec__19187,_,map__19190,map__19190__$1,attrs,id,field,checked,default_checked,component,map__19191,map__19191__$1,opts,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0)))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19187,_,map__19190,map__19190__$1,attrs,id,field,checked,default_checked,component,map__19191,map__19191__$1,opts,doc,get,save_BANG_){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19187,_,map__19190,map__19190__$1,attrs,id,field,checked,default_checked,component,map__19191,map__19191__$1,opts,doc,get,save_BANG_){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19187,_,map__19190,map__19190__$1,attrs,id,field,checked,default_checked,component,map__19191,map__19191__$1,opts,doc,get,save_BANG_))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19187,_,map__19190,map__19190__$1,attrs,id,field,checked,default_checked,component,map__19191,map__19191__$1,opts,doc,get,save_BANG_))
,reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0)));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0)));
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19194 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19194) : visible__18759__auto__.call(null,G__19194));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19187,_,map__19190,map__19190__$1,attrs,id,field,checked,default_checked,component,map__19191,map__19191__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$label,(function (p__19195,p__19196){
var vec__19197 = p__19195;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19197,(0),null);
var map__19200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19197,(1),null);
var map__19200__$1 = ((((!((map__19200 == null)))?(((((map__19200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19200):map__19200);
var attrs = map__19200__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,cljs.core.cst$kw$id);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,cljs.core.cst$kw$preamble);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,cljs.core.cst$kw$postamble);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,cljs.core.cst$kw$placeholder);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,cljs.core.cst$kw$fmt);
var map__19201 = p__19196;
var map__19201__$1 = ((((!((map__19201 == null)))?(((((map__19201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19201):map__19201);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19201__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19201__$1,cljs.core.cst$kw$get);
return ((function (vec__19197,type,map__19200,map__19200__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19201,map__19201__$1,doc,get){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19197,type,map__19200,map__19200__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19201,map__19201__$1,doc,get){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19197,type,map__19200,map__19200__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19201,map__19201__$1,doc,get){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19197,type,map__19200,map__19200__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19201,map__19201__$1,doc,get))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19197,type,map__19200,map__19200__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19201,map__19201__$1,doc,get))
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
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19204 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19204) : visible__18759__auto__.call(null,G__19204));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19197,type,map__19200,map__19200__$1,attrs,id,preamble,postamble,placeholder,fmt,map__19201,map__19201__$1,doc,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$alert,(function (p__19205,p__19206){
var vec__19207 = p__19205;
var seq__19208 = cljs.core.seq(vec__19207);
var first__19209 = cljs.core.first(seq__19208);
var seq__19208__$1 = cljs.core.next(seq__19208);
var type = first__19209;
var first__19209__$1 = cljs.core.first(seq__19208__$1);
var seq__19208__$2 = cljs.core.next(seq__19208__$1);
var map__19210 = first__19209__$1;
var map__19210__$1 = ((((!((map__19210 == null)))?(((((map__19210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19210):map__19210);
var attrs = map__19210__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,cljs.core.cst$kw$id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,cljs.core.cst$kw$event);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,cljs.core.cst$kw$touch_DASH_event);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19210__$1,cljs.core.cst$kw$closeable_QMARK_,true);
var body = seq__19208__$2;
var map__19211 = p__19206;
var map__19211__$1 = ((((!((map__19211 == null)))?(((((map__19211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19211):map__19211);
var opts = map__19211__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19211__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19211__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19211__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__19207,seq__19208,first__19209,seq__19208__$1,type,first__19209__$1,seq__19208__$2,map__19210,map__19210__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19211,map__19211__$1,opts,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19207,seq__19208,first__19209,seq__19208__$1,type,first__19209__$1,seq__19208__$2,map__19210,map__19210__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19211,map__19211__$1,opts,doc,get,save_BANG_){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19207,seq__19208,first__19209,seq__19208__$1,type,first__19209__$1,seq__19208__$2,map__19210,map__19210__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19211,map__19211__$1,opts,doc,get,save_BANG_){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19207,seq__19208,first__19209,seq__19208__$1,type,first__19209__$1,seq__19208__$2,map__19210,map__19210__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19211,map__19211__$1,opts,doc,get,save_BANG_))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19207,seq__19208,first__19209,seq__19208__$1,type,first__19209__$1,seq__19208__$2,map__19210,map__19210__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19211,map__19211__$1,opts,doc,get,save_BANG_))
,(cljs.core.truth_(event)?(cljs.core.truth_((function (){var G__19214 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__19214) : event.call(null,G__19214));
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs)], null),body):null):(function (){var temp__5455__auto__ = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__5455__auto__)){
var message = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs),(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__3922__auto__ = touch_event;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__5455__auto__,update_disabled_QMARK___18755__auto__,vec__19207,seq__19208,first__19209,seq__19208__$1,type,first__19209__$1,seq__19208__$2,map__19210,map__19210__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19211,map__19211__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__5455__auto__,update_disabled_QMARK___18755__auto__,vec__19207,seq__19208,first__19209,seq__19208__$1,type,first__19209__$1,seq__19208__$2,map__19210,map__19210__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19211,map__19211__$1,opts,doc,get,save_BANG_))
]),"X"], null):null),message], null);
} else {
return null;
}
})()));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19215 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19215) : visible__18759__auto__.call(null,G__19215));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19207,seq__19208,first__19209,seq__19208__$1,type,first__19209__$1,seq__19208__$2,map__19210,map__19210__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__19211,map__19211__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$radio,(function (p__19216,p__19217){
var vec__19218 = p__19216;
var seq__19219 = cljs.core.seq(vec__19218);
var first__19220 = cljs.core.first(seq__19219);
var seq__19219__$1 = cljs.core.next(seq__19219);
var type = first__19220;
var first__19220__$1 = cljs.core.first(seq__19219__$1);
var seq__19219__$2 = cljs.core.next(seq__19219__$1);
var map__19221 = first__19220__$1;
var map__19221__$1 = ((((!((map__19221 == null)))?(((((map__19221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19221):map__19221);
var attrs = map__19221__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$field);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$name);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$value);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$default_DASH_checked);
var body = seq__19219__$2;
var map__19222 = p__19217;
var map__19222__$1 = ((((!((map__19222 == null)))?(((((map__19222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19222):map__19222);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19222__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19222__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19222__$1,cljs.core.cst$kw$save_BANG_);
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

return ((function (vec__19218,seq__19219,first__19220,seq__19219__$1,type,first__19220__$1,seq__19219__$2,map__19221,map__19221__$1,attrs,field,name,value,checked,default_checked,body,map__19222,map__19222__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19218,seq__19219,first__19220,seq__19219__$1,type,first__19220__$1,seq__19219__$2,map__19221,map__19221__$1,attrs,field,name,value,checked,default_checked,body,map__19222,map__19222__$1,doc,get,save_BANG_){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19218,seq__19219,first__19220,seq__19219__$1,type,first__19220__$1,seq__19219__$2,map__19221,map__19221__$1,attrs,field,name,value,checked,default_checked,body,map__19222,map__19222__$1,doc,get,save_BANG_){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19218,seq__19219,first__19220,seq__19219__$1,type,first__19220__$1,seq__19219__$2,map__19221,map__19221__$1,attrs,field,name,value,checked,default_checked,body,map__19222,map__19222__$1,doc,get,save_BANG_))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19218,seq__19219,first__19220,seq__19219__$1,type,first__19220__$1,seq__19219__$2,map__19221,map__19221__$1,attrs,field,name,value,checked,default_checked,body,map__19222,map__19222__$1,doc,get,save_BANG_))
,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(reagent_forms.core.clean_attrs(attrs),cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___18755__auto__,vec__19218,seq__19219,first__19220,seq__19219__$1,type,first__19220__$1,seq__19219__$2,map__19221,map__19221__$1,attrs,field,name,value,checked,default_checked,body,map__19222,map__19222__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(update_disabled_QMARK___18755__auto__,vec__19218,seq__19219,first__19220,seq__19219__$1,type,first__19220__$1,seq__19219__$2,map__19221,map__19221__$1,attrs,field,name,value,checked,default_checked,body,map__19222,map__19222__$1,doc,get,save_BANG_))
], null)], 0))], null),body));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19225 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19225) : visible__18759__auto__.call(null,G__19225));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19218,seq__19219,first__19220,seq__19219__$1,type,first__19220__$1,seq__19219__$2,map__19221,map__19221__$1,attrs,field,name,value,checked,default_checked,body,map__19222,map__19222__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$typeahead,(function (p__19230,p__19231){
var vec__19232 = p__19230;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19232,(0),null);
var map__19235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19232,(1),null);
var map__19235__$1 = ((((!((map__19235 == null)))?(((((map__19235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19235):map__19235);
var attrs = map__19235__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19235__$1,cljs.core.cst$kw$result_DASH_fn,cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,cljs.core.cst$kw$item_DASH_class);
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,cljs.core.cst$kw$input_DASH_placeholder);
var selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,cljs.core.cst$kw$selections);
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,cljs.core.cst$kw$highlight_DASH_class);
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,cljs.core.cst$kw$list_DASH_class);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,cljs.core.cst$kw$data_DASH_source);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,cljs.core.cst$kw$input_DASH_class);
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19235__$1,cljs.core.cst$kw$clear_DASH_on_DASH_focus_QMARK_,true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,cljs.core.cst$kw$id);
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19235__$1,cljs.core.cst$kw$choice_DASH_fn,cljs.core.identity);
var get_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,cljs.core.cst$kw$get_DASH_index);
var map__19236 = p__19231;
var map__19236__$1 = ((((!((map__19236 == null)))?(((((map__19236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19236):map__19236);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19236__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19236__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19236__$1,cljs.core.cst$kw$save_BANG_);
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
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
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
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$placeholder,cljs.core.cst$kw$disabled,cljs.core.cst$kw$on_DASH_focus,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$on_DASH_key_DASH_down],[input_placeholder,cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(attrs),((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
,(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(!(cljs.core.iterable_QMARK_(v))){
return v;
} else {
return cljs.core.first(v);
}
})(),((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));
}
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$text,input_class,((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (p1__19226_SHARP_){
var temp__5457__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__19226_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var value = temp__5457__auto__;
cljs.core.reset_BANG_(selections__$1,(function (){var G__19239 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__19239) : data_source.call(null,G__19239));
})());

var G__19240_19249 = id;
var G__19241_19250 = reagent_forms.core.value_of(p1__19226_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19240_19249,G__19241_19250) : save_BANG_.call(null,G__19240_19249,G__19241_19250));

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_(selected_index,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.deref(selections__$1))))?(0):(-1)));
} else {
return null;
}
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
,((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (p1__19227_SHARP_){
var G__19242 = p1__19227_SHARP_.which;
switch (G__19242) {
case (38):
p1__19227_SHARP_.preventDefault();

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

return reagent_forms.core.scroll_to(p1__19227_SHARP_,cljs.core.deref(selected_index));
}

break;
case (40):
p1__19227_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref(typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_(selections__$1,(function (){var G__19243 = cljs.core.cst$kw$all;
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__19243) : data_source.call(null,G__19243));
})());

cljs.core.reset_BANG_(selected_index,(function (){var G__19244 = clojure.string.trim(reagent_forms.core.value_of(p1__19227_SHARP_));
var G__19245 = cljs.core.deref(selections__$1);
return (get_index__$1.cljs$core$IFn$_invoke$arity$2 ? get_index__$1.cljs$core$IFn$_invoke$arity$2(G__19244,G__19245) : get_index__$1.call(null,G__19244,G__19245));
})());

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return reagent_forms.core.scroll_to(p1__19227_SHARP_,cljs.core.deref(selected_index));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),(cljs.core.count(cljs.core.deref(selections__$1)) - (1)))){
return null;
} else {
var G__19246_19252 = id;
var G__19247_19253 = reagent_forms.core.value_of(p1__19227_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19246_19252,G__19247_19253) : save_BANG_.call(null,G__19246_19252,G__19247_19253));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);

return reagent_forms.core.scroll_to(p1__19227_SHARP_,cljs.core.deref(selected_index));
}
}

break;
case (9):
return choose_selected();

break;
case (13):
p1__19227_SHARP_.preventDefault();

return choose_selected();

break;
case (27):
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));

break;
default:
return "default";

}
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.empty_QMARK_(cljs.core.deref(selections__$1));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.deref(typeahead_hidden_QMARK_);
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,true);
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,false);
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (p1__19228_SHARP_){
return cljs.core.reset_BANG_(selected_index,parseInt(p1__19228_SHARP_.target.getAttribute("tabIndex")));
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_){
return (function (p1__19229_SHARP_){
p1__19229_SHARP_.preventDefault();

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(update_disabled_QMARK___18755__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
,cljs.core.deref(selections__$1)))], null)], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19248 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19248) : visible__18759__auto__.call(null,G__19248));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__19232,type,map__19235,map__19235__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__19236,map__19236__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$file,(function (p__19255,p__19256){
var vec__19257 = p__19255;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(0),null);
var map__19260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(1),null);
var map__19260__$1 = ((((!((map__19260 == null)))?(((((map__19260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19260):map__19260);
var attrs = map__19260__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19260__$1,cljs.core.cst$kw$id);
var map__19261 = p__19256;
var map__19261__$1 = ((((!((map__19261 == null)))?(((((map__19261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19261):map__19261);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,cljs.core.cst$kw$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__19257,type,map__19260,map__19260__$1,attrs,id,map__19261,map__19261__$1,doc,save_BANG_){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19257,type,map__19260,map__19260__$1,attrs,id,map__19261,map__19261__$1,doc,save_BANG_){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19257,type,map__19260,map__19260__$1,attrs,id,map__19261,map__19261__$1,doc,save_BANG_){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19257,type,map__19260,map__19260__$1,attrs,id,map__19261,map__19261__$1,doc,save_BANG_))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19257,type,map__19260,map__19260__$1,attrs,id,map__19261,map__19261__$1,doc,save_BANG_))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___18755__auto__,vec__19257,type,map__19260,map__19260__$1,attrs,id,map__19261,map__19261__$1,doc,save_BANG_){
return (function (p1__19254_SHARP_){
var G__19264 = id;
var G__19265 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(p1__19254_SHARP_.target.files));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19264,G__19265) : save_BANG_.call(null,G__19264,G__19265));
});})(update_disabled_QMARK___18755__auto__,vec__19257,type,map__19260,map__19260__$1,attrs,id,map__19261,map__19261__$1,doc,save_BANG_))
], null),reagent_forms.core.clean_attrs(attrs)], 0))], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19266 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19266) : visible__18759__auto__.call(null,G__19266));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19257,type,map__19260,map__19260__$1,attrs,id,map__19261,map__19261__$1,doc,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$files,(function (p__19268,p__19269){
var vec__19270 = p__19268;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19270,(0),null);
var map__19273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19270,(1),null);
var map__19273__$1 = ((((!((map__19273 == null)))?(((((map__19273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19273):map__19273);
var attrs = map__19273__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$id);
var map__19274 = p__19269;
var map__19274__$1 = ((((!((map__19274 == null)))?(((((map__19274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19274):map__19274);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19274__$1,cljs.core.cst$kw$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19274__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__19270,type,map__19273,map__19273__$1,attrs,id,map__19274,map__19274__$1,doc,save_BANG_){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19270,type,map__19273,map__19273__$1,attrs,id,map__19274,map__19274__$1,doc,save_BANG_){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19270,type,map__19273,map__19273__$1,attrs,id,map__19274,map__19274__$1,doc,save_BANG_){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19270,type,map__19273,map__19273__$1,attrs,id,map__19274,map__19274__$1,doc,save_BANG_))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19270,type,map__19273,map__19273__$1,attrs,id,map__19274,map__19274__$1,doc,save_BANG_))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$multiple,true,cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___18755__auto__,vec__19270,type,map__19273,map__19273__$1,attrs,id,map__19274,map__19274__$1,doc,save_BANG_){
return (function (p1__19267_SHARP_){
var G__19277 = id;
var G__19278 = p1__19267_SHARP_.target.files;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19277,G__19278) : save_BANG_.call(null,G__19277,G__19278));
});})(update_disabled_QMARK___18755__auto__,vec__19270,type,map__19273,map__19273__$1,attrs,id,map__19274,map__19274__$1,doc,save_BANG_))
], null),reagent_forms.core.clean_attrs(attrs)], 0))], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19279 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19279) : visible__18759__auto__.call(null,G__19279));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19270,type,map__19273,map__19273__$1,attrs,id,map__19274,map__19274__$1,doc,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__19280,p__19281,selections,field,id){
var vec__19282 = p__19280;
var seq__19283 = cljs.core.seq(vec__19282);
var first__19284 = cljs.core.first(seq__19283);
var seq__19283__$1 = cljs.core.next(seq__19283);
var type = first__19284;
var first__19284__$1 = cljs.core.first(seq__19283__$1);
var seq__19283__$2 = cljs.core.next(seq__19283__$1);
var map__19285 = first__19284__$1;
var map__19285__$1 = ((((!((map__19285 == null)))?(((((map__19285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19285):map__19285);
var attrs = map__19285__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19285__$1,cljs.core.cst$kw$key);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19285__$1,cljs.core.cst$kw$touch_DASH_event);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19285__$1,cljs.core.cst$kw$disabled);
var body = seq__19283__$2;
var map__19286 = p__19281;
var map__19286__$1 = ((((!((map__19286 == null)))?(((((map__19286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19286):map__19286);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19286__$1,cljs.core.cst$kw$save_BANG_);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19286__$1,cljs.core.cst$kw$multi_DASH_select);
var handle_click_BANG_ = ((function (vec__19282,seq__19283,first__19284,seq__19283__$1,type,first__19284__$1,seq__19283__$2,map__19285,map__19285__$1,attrs,key,touch_event,disabled,body,map__19286,map__19286__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__19293 = id;
var G__19294 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.deref(selections)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19293,G__19294) : save_BANG_.call(null,G__19293,G__19294));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
cljs.core.reset_BANG_(selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not(value)]));

var G__19295 = id;
var G__19296 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19295,G__19296) : save_BANG_.call(null,G__19295,G__19296));
}
});})(vec__19282,seq__19283,first__19284,seq__19283__$1,type,first__19284__$1,seq__19283__$2,map__19285,map__19285__$1,attrs,key,touch_event,disabled,body,map__19286,map__19286__$1,save_BANG_,multi_select))
;
return ((function (vec__19282,seq__19283,first__19284,seq__19283__$1,type,first__19284__$1,seq__19283__$2,map__19285,map__19285__$1,attrs,key,touch_event,disabled,body,map__19286,map__19286__$1,save_BANG_,multi_select){
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
;})(vec__19282,seq__19283,first__19284,seq__19283__$1,type,first__19284__$1,seq__19283__$2,map__19285,map__19285__$1,attrs,key,touch_event,disabled,body,map__19286,map__19286__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__19297){
var map__19298 = p__19297;
var map__19298__$1 = ((((!((map__19298 == null)))?(((((map__19298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19298):map__19298);
var ks = map__19298__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,cljs.core.cst$kw$get);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,cljs.core.cst$kw$multi_DASH_select);
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__19298,map__19298__$1,ks,get,multi_select){
return (function (m,p__19300){
var vec__19301 = p__19300;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(0),null);
var map__19304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(1),null);
var map__19304__$1 = ((((!((map__19304 == null)))?(((((map__19304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19304):map__19304);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19304__$1,cljs.core.cst$kw$key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__19298,map__19298__$1,ks,get,multi_select))
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
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__19308,p__19309){
var vec__19310 = p__19308;
var seq__19311 = cljs.core.seq(vec__19310);
var first__19312 = cljs.core.first(seq__19311);
var seq__19311__$1 = cljs.core.next(seq__19311);
var type = first__19312;
var first__19312__$1 = cljs.core.first(seq__19311__$1);
var seq__19311__$2 = cljs.core.next(seq__19311__$1);
var map__19313 = first__19312__$1;
var map__19313__$1 = ((((!((map__19313 == null)))?(((((map__19313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19313):map__19313);
var attrs = map__19313__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19313__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19313__$1,cljs.core.cst$kw$id);
var selection_items = seq__19311__$2;
var map__19314 = p__19309;
var map__19314__$1 = ((((!((map__19314 == null)))?(((((map__19314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19314):map__19314);
var opts = map__19314__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19314__$1,cljs.core.cst$kw$get);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get){
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get){
return (function (p1__19306_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get){
return (function (p__19317){
var vec__19318 = p__19317;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19318,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get))
,p1__19306_SHARP_));
});})(selection_items__$1,selections,selectors,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get))
);
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get){
return (function (p1__19307_SHARP_){
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__19307_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var visible_QMARK_ = temp__5455__auto__;
var G__19321 = cljs.core.deref(cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(opts));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19321) : visible_QMARK_.call(null,G__19321));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__19310,seq__19311,first__19312,seq__19311__$1,type,first__19312__$1,seq__19311__$2,map__19313,map__19313__$1,attrs,field,id,selection_items,map__19314,map__19314__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_select,(function (p__19322,p__19323){
var vec__19324 = p__19322;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324,(1),null);
var field = vec__19324;
var map__19327 = p__19323;
var map__19327__$1 = ((((!((map__19327 == null)))?(((((map__19327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19327):map__19327);
var opts = map__19327__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19327__$1,cljs.core.cst$kw$doc);
return ((function (vec__19324,_,attrs,field,map__19327,map__19327__$1,opts,doc){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19324,_,attrs,field,map__19327,map__19327__$1,opts,doc){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19324,_,attrs,field,map__19327,map__19327__$1,opts,doc){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19324,_,attrs,field,map__19327,map__19327__$1,opts,doc))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19324,_,attrs,field,map__19327,map__19327__$1,opts,doc))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19329 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19329) : visible__18759__auto__.call(null,G__19329));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19324,_,attrs,field,map__19327,map__19327__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multi_DASH_select,(function (p__19330,p__19331){
var vec__19332 = p__19330;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19332,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19332,(1),null);
var field = vec__19332;
var map__19335 = p__19331;
var map__19335__$1 = ((((!((map__19335 == null)))?(((((map__19335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19335):map__19335);
var opts = map__19335__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19335__$1,cljs.core.cst$kw$doc);
return ((function (vec__19332,_,attrs,field,map__19335,map__19335__$1,opts,doc){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,vec__19332,_,attrs,field,map__19335,map__19335__$1,opts,doc){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,vec__19332,_,attrs,field,map__19335,map__19335__$1,opts,doc){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19332,_,attrs,field,map__19335,map__19335__$1,opts,doc))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,vec__19332,_,attrs,field,map__19335,map__19335__$1,opts,doc))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19337 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19337) : visible__18759__auto__.call(null,G__19337));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(vec__19332,_,attrs,field,map__19335,map__19335__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function reagent_forms$core$map_options_$_iter__19338(s__19339){
return (new cljs.core.LazySeq(null,(function (){
var s__19339__$1 = s__19339;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19339__$1);
if(temp__5457__auto__){
var s__19339__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19339__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__19339__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__19341 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__19340 = (0);
while(true){
if((i__19340 < size__4291__auto__)){
var vec__19342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__19340);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(0),null);
var map__19345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(1),null);
var map__19345__$1 = ((((!((map__19345 == null)))?(((((map__19345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19345):map__19345);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19345__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(2),null);
cljs.core.chunk_append(b__19341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null));

var G__19352 = (i__19340 + (1));
i__19340 = G__19352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19341),reagent_forms$core$map_options_$_iter__19338(cljs.core.chunk_rest(s__19339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19341),null);
}
} else {
var vec__19347 = cljs.core.first(s__19339__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19347,(0),null);
var map__19350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19347,(1),null);
var map__19350__$1 = ((((!((map__19350 == null)))?(((((map__19350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19350):map__19350);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19350__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19347,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__19338(cljs.core.rest(s__19339__$2)));
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
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19353_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__19353_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__19356,p__19357){
var vec__19358 = p__19356;
var seq__19359 = cljs.core.seq(vec__19358);
var first__19360 = cljs.core.first(seq__19359);
var seq__19359__$1 = cljs.core.next(seq__19359);
var type = first__19360;
var first__19360__$1 = cljs.core.first(seq__19359__$1);
var seq__19359__$2 = cljs.core.next(seq__19359__$1);
var map__19361 = first__19360__$1;
var map__19361__$1 = ((((!((map__19361 == null)))?(((((map__19361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19361):map__19361);
var attrs = map__19361__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19361__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19361__$1,cljs.core.cst$kw$id);
var options = seq__19359__$2;
var map__19362 = p__19357;
var map__19362__$1 = ((((!((map__19362 == null)))?(((((map__19362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19362):map__19362);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19362__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19362__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19362__$1,cljs.core.cst$kw$save_BANG_);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null));
}
})());
var G__19365_19371 = id;
var G__19366_19372 = cljs.core.deref(selection);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19365_19371,G__19366_19372) : save_BANG_.call(null,G__19365_19371,G__19366_19372));

return ((function (options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___18755__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__18756__auto__ = clojure.walk.postwalk(((function (update_disabled_QMARK___18755__auto__,options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_){
return (function (c__18757__auto__){
if(((cljs.core.map_QMARK_(c__18757__auto__)) && (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(c__18757__auto__) == null))) && (update_disabled_QMARK___18755__auto__))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c__18757__auto__,cljs.core.cst$kw$disabled,((function (update_disabled_QMARK___18755__auto__,options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_){
return (function (p1__18754__18758__auto__){
if(cljs.core.fn_QMARK_(p1__18754__18758__auto__)){
return (p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0 ? p1__18754__18758__auto__.cljs$core$IFn$_invoke$arity$0() : p1__18754__18758__auto__.call(null));
} else {
return p1__18754__18758__auto__;
}
});})(update_disabled_QMARK___18755__auto__,options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_))
);
} else {
return c__18757__auto__;
}
});})(update_disabled_QMARK___18755__auto__,options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent_forms.core.clean_attrs(attrs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,cljs.core.deref(selection)),cljs.core.cst$kw$on_DASH_change,((function (update_disabled_QMARK___18755__auto__,options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_){
return (function (p1__19354_SHARP_){
var G__19367 = id;
var G__19368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__19354_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19367,G__19368) : save_BANG_.call(null,G__19367,G__19368));
});})(update_disabled_QMARK___18755__auto__,options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (update_disabled_QMARK___18755__auto__,options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_){
return (function (p1__19355_SHARP_){
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19355_SHARP_));
if(cljs.core.truth_(temp__5455__auto__)){
var visible_QMARK_ = temp__5455__auto__;
var G__19369 = cljs.core.deref(doc);
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19369) : visible_QMARK_.call(null,G__19369));
} else {
return true;
}
});})(update_disabled_QMARK___18755__auto__,options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_))
,options__$1))], null));
var temp__5455__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__18759__auto__ = temp__5455__auto__;
var pred__18760__auto__ = ((cljs.core.fn_QMARK_(visible__18759__auto__))?(function (){var G__19370 = cljs.core.deref(doc);
return (visible__18759__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18759__auto__.cljs$core$IFn$_invoke$arity$1(G__19370) : visible__18759__auto__.call(null,G__19370));
})():(doc.cljs$core$IFn$_invoke$arity$1 ? doc.cljs$core$IFn$_invoke$arity$1(visible__18759__auto__) : doc.call(null,visible__18759__auto__)));
if(cljs.core.truth_(pred__18760__auto__)){
return body__18756__auto__;
} else {
return null;
}
} else {
return body__18756__auto__;
}
});
;})(options__$1,options_lookup,selection,vec__19358,seq__19359,first__19360,seq__19359__$1,type,first__19360__$1,seq__19359__$2,map__19361,map__19361__$1,attrs,field,id,options,map__19362,map__19362__$1,doc,get,save_BANG_))
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
var G__19373__delegate = function (_,doc,___$1){
return cljs.core.type(doc);
};
var G__19373 = function (_,doc,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__19374__i = 0, G__19374__a = new Array(arguments.length -  2);
while (G__19374__i < G__19374__a.length) {G__19374__a[G__19374__i] = arguments[G__19374__i + 2]; ++G__19374__i;}
  ___$1 = new cljs.core.IndexedSeq(G__19374__a,0,null);
} 
return G__19373__delegate.call(this,_,doc,___$1);};
G__19373.cljs$lang$maxFixedArity = 2;
G__19373.cljs$lang$applyTo = (function (arglist__19375){
var _ = cljs.core.first(arglist__19375);
arglist__19375 = cljs.core.next(arglist__19375);
var doc = cljs.core.first(arglist__19375);
var ___$1 = cljs.core.rest(arglist__19375);
return G__19373__delegate(_,doc,___$1);
});
G__19373.cljs$core$IFn$_invoke$arity$variadic = G__19373__delegate;
return G__19373;
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
var G__19377__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$get,(function (p1__19376_SHARP_){
return cljs.core.deref((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,p1__19376_SHARP_) : reagent_forms.core.cursor_for_id.call(null,doc,p1__19376_SHARP_)));
}),cljs.core.cst$kw$save_BANG_,reagent_forms.core.mk_save_fn(doc,events),cljs.core.cst$kw$update_BANG_,reagent_forms.core.mk_update_fn(doc,events)], null);
var form__$1 = reagent_forms.core.make_form(form,opts,true);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
};
var G__19377 = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__19378__i = 0, G__19378__a = new Array(arguments.length -  2);
while (G__19378__i < G__19378__a.length) {G__19378__a[G__19378__i] = arguments[G__19378__i + 2]; ++G__19378__i;}
  events = new cljs.core.IndexedSeq(G__19378__a,0,null);
} 
return G__19377__delegate.call(this,form,doc,events);};
G__19377.cljs$lang$maxFixedArity = 2;
G__19377.cljs$lang$applyTo = (function (arglist__19379){
var form = cljs.core.first(arglist__19379);
arglist__19379 = cljs.core.next(arglist__19379);
var doc = cljs.core.first(arglist__19379);
var events = cljs.core.rest(arglist__19379);
return G__19377__delegate(form,doc,events);
});
G__19377.cljs$core$IFn$_invoke$arity$variadic = G__19377__delegate;
return G__19377;
})()
);
