// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.form');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.subs');
goog.require('imatic.re_frame.form.events');
/**
 * Reagent component constructing form field.
 * 
 *   `props` is a map with keys:
 *  - :component Component to render
 *  - :path Path of the field in the form.
 *  - :field-props Props passed to the element in :component
 *  - :form-id Id of the form
 */
warehouse.form.field = (function warehouse$form$field(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12570 = arguments.length;
var i__4532__auto___12571 = (0);
while(true){
if((i__4532__auto___12571 < len__4531__auto___12570)){
args__4534__auto__.push((arguments[i__4532__auto___12571]));

var G__12572 = (i__4532__auto___12571 + (1));
i__4532__auto___12571 = G__12572;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return warehouse.form.field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

warehouse.form.field.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(props);
var error = cljs.core.deref((function (){var G__12567 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_error,cljs.core.cst$kw$form_DASH_id.cljs$core$IFn$_invoke$arity$1(props),path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12567) : re_frame.core.subscribe.call(null,G__12567));
})());
var field_value = cljs.core.deref((function (){var G__12568 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_value,cljs.core.cst$kw$form_DASH_id.cljs$core$IFn$_invoke$arity$1(props),path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12568) : re_frame.core.subscribe.call(null,G__12568));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"inline-block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(props),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,field_value,cljs.core.cst$kw$on_DASH_change,((function (path,error,field_value){
return (function (e){
var G__12569 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_update_DASH_field,cljs.core.cst$kw$form_DASH_id.cljs$core$IFn$_invoke$arity$1(props),path,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12569) : re_frame.core.dispatch.call(null,G__12569));
});})(path,error,field_value))
], null),cljs.core.cst$kw$field_DASH_props.cljs$core$IFn$_invoke$arity$1(props)], 0))], null),((!((error == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$error,error], null)], null):null)], null);
});

warehouse.form.field.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
warehouse.form.field.cljs$lang$applyTo = (function (seq12565){
var G__12566 = cljs.core.first(seq12565);
var seq12565__$1 = cljs.core.next(seq12565);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12566,seq12565__$1);
});

/**
 * Reagent component which wraps the form fields.
 * 
 *   `props` is a map with keys:
 *  - `:id` Id of the form
 *  - `:initial-data`
 *   `form-ui` is a reagent component which will be passed following props:
 *  - `:field-props` Function constructing field props
 *  - `:form-id` Id of the form
 */
warehouse.form.form_fields = (function warehouse$form$form_fields(props,form_ui){
var with_let12573 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let12573);
var temp__5461__auto___12577 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto___12577 == null)){
} else {
var c__5630__auto___12578 = temp__5461__auto___12577;
if((with_let12573.generation === c__5630__auto___12578.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let12573.generation = c__5630__auto___12578.ratomGeneration;
}


var init12574 = (with_let12573.length === (0));
var _ = ((init12574)?(with_let12573[(0)] = (function (){var G__12575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_init_DASH_form,cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$initial_DASH_data], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12575) : re_frame.core.dispatch.call(null,G__12575));
})()):(with_let12573[(0)]));
var initialized_QMARK_ = ((init12574)?(with_let12573[(1)] = (function (){var G__12576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_initialized_QMARK_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12576) : re_frame.core.subscribe.call(null,G__12576));
})()):(with_let12573[(1)]));
var res__5631__auto__ = (cljs.core.truth_(cljs.core.deref(initialized_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_ui,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field_DASH_props,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null)),cljs.core.cst$kw$form_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null)], null):null);

return res__5631__auto__;
});