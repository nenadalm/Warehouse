// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
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
var args__4500__auto__ = [];
var len__4497__auto___19186 = arguments.length;
var i__4498__auto___19187 = (0);
while(true){
if((i__4498__auto___19187 < len__4497__auto___19186)){
args__4500__auto__.push((arguments[i__4498__auto___19187]));

var G__19188 = (i__4498__auto___19187 + (1));
i__4498__auto___19187 = G__19188;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return warehouse.form.field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

warehouse.form.field.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(props);
var error = cljs.core.deref((function (){var G__19183 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_error,cljs.core.cst$kw$form_DASH_id.cljs$core$IFn$_invoke$arity$1(props),path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19183) : re_frame.core.subscribe.call(null,G__19183));
})());
var field_value = cljs.core.deref((function (){var G__19184 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_value,cljs.core.cst$kw$form_DASH_id.cljs$core$IFn$_invoke$arity$1(props),path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19184) : re_frame.core.subscribe.call(null,G__19184));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"inline-block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(props),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,field_value,cljs.core.cst$kw$on_DASH_change,((function (path,error,field_value){
return (function (e){
var G__19185 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_update_DASH_field,cljs.core.cst$kw$form_DASH_id.cljs$core$IFn$_invoke$arity$1(props),path,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19185) : re_frame.core.dispatch.call(null,G__19185));
});})(path,error,field_value))
], null),cljs.core.cst$kw$field_DASH_props.cljs$core$IFn$_invoke$arity$1(props)], 0))], null),((!((error == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$error,error], null)], null):null)], null);
});

warehouse.form.field.cljs$lang$maxFixedArity = (1);

warehouse.form.field.cljs$lang$applyTo = (function (seq19181){
var G__19182 = cljs.core.first(seq19181);
var seq19181__$1 = cljs.core.next(seq19181);
return warehouse.form.field.cljs$core$IFn$_invoke$arity$variadic(G__19182,seq19181__$1);
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
var with_let19189 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let19189);
var temp__5461__auto___19193 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto___19193 == null)){
} else {
var c__8556__auto___19194 = temp__5461__auto___19193;
if((with_let19189.generation === c__8556__auto___19194.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let19189.generation = c__8556__auto___19194.ratomGeneration;
}


var init19190 = (with_let19189.length === (0));
var _ = ((init19190)?(with_let19189[(0)] = (function (){var G__19191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_init_DASH_form,cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$initial_DASH_data], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19191) : re_frame.core.dispatch.call(null,G__19191));
})()):(with_let19189[(0)]));
var initialized_QMARK_ = ((init19190)?(with_let19189[(1)] = (function (){var G__19192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_initialized_QMARK_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19192) : re_frame.core.subscribe.call(null,G__19192));
})()):(with_let19189[(1)]));
var res__8557__auto__ = (cljs.core.truth_(cljs.core.deref(initialized_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_ui,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field_DASH_props,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null)),cljs.core.cst$kw$form_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null)], null):null);

return res__8557__auto__;
});
