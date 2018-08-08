// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('imatic.re_frame.form.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.model');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_init_DASH_form,(function (db,p__12331){
var vec__12332 = p__12331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12332,(0),null);
var map__12335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12332,(1),null);
var map__12335__$1 = ((((!((map__12335 == null)))?(((((map__12335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12335):map__12335);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12335__$1,cljs.core.cst$kw$id);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12335__$1,cljs.core.cst$kw$initial_DASH_data);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,id,cljs.core.cst$kw$data], null)))){
return db;
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,id,cljs.core.cst$kw$data], null),initial_data);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_clear_DASH_form,(function (db,p__12337){
var vec__12338 = p__12337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12338,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12338,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,cljs.core.dissoc,id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_clear_DASH_field,(function (db,p__12341){
var vec__12342 = p__12341;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12342,(0),null);
var form_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12342,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12342,(2),null);
var normalized_path = cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var field_parent = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,form_id,cljs.core.cst$kw$data], null),cljs.core.rest(normalized_path));
var field_name = cljs.core.last(normalized_path);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,field_parent,cljs.core.dissoc,field_name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_update_DASH_field,(function (db,p__12345){
var vec__12346 = p__12345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12346,(0),null);
var form_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12346,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12346,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12346,(3),null);
return cljs.core.assoc_in(db,cljs.core.flatten(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,form_id,cljs.core.cst$kw$data,path], null)),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$imatic$re_DASH_frame$form$events_SLASH_update_DASH_errors,(function (db,p__12349){
var vec__12350 = p__12349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12350,(0),null);
var form_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12350,(1),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12350,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$model_SLASH_form,form_id,cljs.core.cst$kw$errors], null),errors);
}));
