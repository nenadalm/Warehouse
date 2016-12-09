// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6584__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6584__auto__)){
return or__6584__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__28738 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28738) : cljs.core.atom.call(null,G__28738));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_28741 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_28741){
return (function (){
var _STAR_always_update_STAR_28742 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28742;
}});})(_STAR_always_update_STAR_28741))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28741;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args28743 = [];
var len__7692__auto___28746 = arguments.length;
var i__7693__auto___28747 = (0);
while(true){
if((i__7693__auto___28747 < len__7692__auto___28746)){
args28743.push((arguments[i__7693__auto___28747]));

var G__28748 = (i__7693__auto___28747 + (1));
i__7693__auto___28747 = G__28748;
continue;
} else {
}
break;
}

var G__28745 = args28743.length;
switch (G__28745) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28743.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__28754_28758 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__28755_28759 = null;
var count__28756_28760 = (0);
var i__28757_28761 = (0);
while(true){
if((i__28757_28761 < count__28756_28760)){
var v_28762 = chunk__28755_28759.cljs$core$IIndexed$_nth$arity$2(null,i__28757_28761);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_28762);

var G__28763 = seq__28754_28758;
var G__28764 = chunk__28755_28759;
var G__28765 = count__28756_28760;
var G__28766 = (i__28757_28761 + (1));
seq__28754_28758 = G__28763;
chunk__28755_28759 = G__28764;
count__28756_28760 = G__28765;
i__28757_28761 = G__28766;
continue;
} else {
var temp__4657__auto___28767 = cljs.core.seq(seq__28754_28758);
if(temp__4657__auto___28767){
var seq__28754_28768__$1 = temp__4657__auto___28767;
if(cljs.core.chunked_seq_QMARK_(seq__28754_28768__$1)){
var c__7398__auto___28769 = cljs.core.chunk_first(seq__28754_28768__$1);
var G__28770 = cljs.core.chunk_rest(seq__28754_28768__$1);
var G__28771 = c__7398__auto___28769;
var G__28772 = cljs.core.count(c__7398__auto___28769);
var G__28773 = (0);
seq__28754_28758 = G__28770;
chunk__28755_28759 = G__28771;
count__28756_28760 = G__28772;
i__28757_28761 = G__28773;
continue;
} else {
var v_28774 = cljs.core.first(seq__28754_28768__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_28774);

var G__28775 = cljs.core.next(seq__28754_28768__$1);
var G__28776 = null;
var G__28777 = (0);
var G__28778 = (0);
seq__28754_28758 = G__28775;
chunk__28755_28759 = G__28776;
count__28756_28760 = G__28777;
i__28757_28761 = G__28778;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
