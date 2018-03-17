// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.Uri');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__11688 = string;
var G__11688__$1 = (((G__11688 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11688)].join(''));
var G__11688__$2 = (((G__11688__$1 == null))?null:encodeURIComponent(G__11688__$1));
if((G__11688__$2 == null)){
return null;
} else {
return G__11688__$2.replace("+","%20");
}
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__11689 = string;
var G__11689__$1 = (((G__11689 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11689)].join(''));
if((G__11689__$1 == null)){
return null;
} else {
return decodeURIComponent(G__11689__$1);
}
});
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return (new cljs.core.UUID(s));
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if(((!((_ == null))) && (!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null))))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (bidi.bidi.encode_parameter["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ParameterEncoding.encode-parameter",_);
}
}
}
});

goog.object.set(bidi.bidi.ParameterEncoding,"string",true);

var G__11690_11696 = bidi.bidi.encode_parameter;
var G__11691_11697 = "string";
var G__11692_11698 = ((function (G__11690_11696,G__11691_11697){
return (function (s){
return s;
});})(G__11690_11696,G__11691_11697))
;
goog.object.set(G__11690_11696,G__11691_11697,G__11692_11698);

goog.object.set(bidi.bidi.ParameterEncoding,"number",true);

var G__11693_11699 = bidi.bidi.encode_parameter;
var G__11694_11700 = "number";
var G__11695_11701 = ((function (G__11693_11699,G__11694_11700){
return (function (s){
return s;
});})(G__11693_11699,G__11694_11700))
;
goog.object.set(G__11693_11699,G__11694_11700,G__11695_11701);

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)].join('');
});

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return bidi.bidi.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(k__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.namespace(k__$1))?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k__$1))].join(''));
});

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if(((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null))))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (bidi.bidi.segment_regex_group["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.segment-regex-group",_);
}
}
}
});

bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if(((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null))))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.param_key[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (bidi.bidi.param_key["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.param-key",_);
}
}
}
});

bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if(((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null))))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (bidi.bidi.transform_param["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.transform-param",_);
}
}
}
});

bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if(((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null))))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(_,params) : m__4212__auto__.call(null,_,params));
} else {
var m__4212__auto____$1 = (bidi.bidi.unmatch_segment["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(_,params) : m__4212__auto____$1.call(null,_,params));
} else {
throw cljs.core.missing_protocol("PatternSegment.unmatch-segment",_);
}
}
}
});

bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if(((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null))))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4212__auto__.call(null,_,s));
} else {
var m__4212__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__4212__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PatternSegment.matches?",_);
}
}
}
});

goog.object.set(bidi.bidi.PatternSegment,"string",true);

var G__11705_11737 = bidi.bidi.segment_regex_group;
var G__11706_11738 = "string";
var G__11707_11739 = ((function (G__11705_11737,G__11706_11738){
return (function (this$){
return this$;
});})(G__11705_11737,G__11706_11738))
;
goog.object.set(G__11705_11737,G__11706_11738,G__11707_11739);

var G__11708_11740 = bidi.bidi.param_key;
var G__11709_11741 = "string";
var G__11710_11742 = ((function (G__11708_11740,G__11709_11741){
return (function (_){
return null;
});})(G__11708_11740,G__11709_11741))
;
goog.object.set(G__11708_11740,G__11709_11741,G__11710_11742);

var G__11711_11743 = bidi.bidi.transform_param;
var G__11712_11744 = "string";
var G__11713_11745 = ((function (G__11711_11743,G__11712_11744){
return (function (_){
return cljs.core.identity;
});})(G__11711_11743,G__11712_11744))
;
goog.object.set(G__11711_11743,G__11712_11744,G__11713_11745);

var G__11714_11746 = bidi.bidi.unmatch_segment;
var G__11715_11747 = "string";
var G__11716_11748 = ((function (G__11714_11746,G__11715_11747){
return (function (this$,_){
return this$;
});})(G__11714_11746,G__11715_11747))
;
goog.object.set(G__11714_11746,G__11715_11747,G__11716_11748);

RegExp.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
});

RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
});

RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches(this$__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group(cljs.core.first(this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param(cljs.core.first(this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if(!((k instanceof cljs.core.Keyword))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_(cljs.core.first(this$__$1),v))){
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Parameter value of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," (key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),") ","is not compatible with the route pattern ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No parameter found in params for key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__5455__auto__ = (this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1(params) : this$__$1.call(null,params));
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot form URI without a value given for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," parameter"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

goog.object.set(bidi.bidi.PatternSegment,"function",true);

var G__11717_11749 = bidi.bidi.segment_regex_group;
var G__11718_11750 = "function";
var G__11719_11751 = ((function (G__11717_11749,G__11718_11750){
return (function (this$){
var pred__11720 = cljs.core._EQ_;
var expr__11721 = this$;
if(cljs.core.truth_((pred__11720.cljs$core$IFn$_invoke$arity$2 ? pred__11720.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__11721) : pred__11720.call(null,cljs.core.keyword,expr__11721)))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_((pred__11720.cljs$core$IFn$_invoke$arity$2 ? pred__11720.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__11721) : pred__11720.call(null,cljs.core.long$,expr__11721)))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_((pred__11720.cljs$core$IFn$_invoke$arity$2 ? pred__11720.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__11721) : pred__11720.call(null,bidi.bidi.uuid,expr__11721)))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_((function (){var G__11723 = cljs.core.cst$kw$otherwise;
var G__11724 = expr__11721;
return (pred__11720.cljs$core$IFn$_invoke$arity$2 ? pred__11720.cljs$core$IFn$_invoke$arity$2(G__11723,G__11724) : pred__11720.call(null,G__11723,G__11724));
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unidentified function qualifier to pattern segment: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11721)].join('')));
}
}
}
}
});})(G__11717_11749,G__11718_11750))
;
goog.object.set(G__11717_11749,G__11718_11750,G__11719_11751);

var G__11725_11752 = bidi.bidi.transform_param;
var G__11726_11753 = "function";
var G__11727_11754 = ((function (G__11725_11752,G__11726_11753){
return (function (this$){
var pred__11728 = cljs.core._EQ_;
var expr__11729 = this$;
if(cljs.core.truth_((pred__11728.cljs$core$IFn$_invoke$arity$2 ? pred__11728.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__11729) : pred__11728.call(null,cljs.core.keyword,expr__11729)))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_((pred__11728.cljs$core$IFn$_invoke$arity$2 ? pred__11728.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__11729) : pred__11728.call(null,cljs.core.long$,expr__11729)))){
return ((function (pred__11728,expr__11729,G__11725_11752,G__11726_11753){
return (function (p1__11703_SHARP_){
return Number(p1__11703_SHARP_);
});
;})(pred__11728,expr__11729,G__11725_11752,G__11726_11753))
} else {
if(cljs.core.truth_((pred__11728.cljs$core$IFn$_invoke$arity$2 ? pred__11728.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__11729) : pred__11728.call(null,bidi.bidi.uuid,expr__11729)))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unrecognized function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
});})(G__11725_11752,G__11726_11753))
;
goog.object.set(G__11725_11752,G__11726_11753,G__11727_11754);

var G__11731_11755 = bidi.bidi.matches_QMARK_;
var G__11732_11756 = "function";
var G__11733_11757 = ((function (G__11731_11755,G__11732_11756){
return (function (this$,s){
var pred__11734 = cljs.core._EQ_;
var expr__11735 = this$;
if(cljs.core.truth_((pred__11734.cljs$core$IFn$_invoke$arity$2 ? pred__11734.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__11735) : pred__11734.call(null,cljs.core.keyword,expr__11735)))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_((pred__11734.cljs$core$IFn$_invoke$arity$2 ? pred__11734.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__11735) : pred__11734.call(null,cljs.core.long$,expr__11735)))){
return cljs.core.not(isNaN(s));
} else {
if(cljs.core.truth_((pred__11734.cljs$core$IFn$_invoke$arity$2 ? pred__11734.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__11735) : pred__11734.call(null,bidi.bidi.uuid,expr__11735)))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11735)].join('')));
}
}
}
});})(G__11731_11755,G__11732_11756))
;
goog.object.set(G__11731_11755,G__11732_11756,G__11733_11757);

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

/**
 * Return a new state if this pattern matches the given state, or
 *  falsy otherwise. If a new state is returned it will usually have the
 *  rest of the path to match in the :remainder entry.
 */
bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,env){
if(((!((_ == null))) && (!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null))))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,env);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(_,env) : m__4212__auto__.call(null,_,env));
} else {
var m__4212__auto____$1 = (bidi.bidi.match_pattern["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(_,env) : m__4212__auto____$1.call(null,_,env));
} else {
throw cljs.core.missing_protocol("Pattern.match-pattern",_);
}
}
}
});

bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if(((!((_ == null))) && (!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null))))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__4212__auto__.call(null,_,m));
} else {
var m__4212__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__4212__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Pattern.unmatch-pattern",_);
}
}
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if(((!((_ == null))) && (!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null))))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__4212__auto__.call(null,_,m));
} else {
var m__4212__auto____$1 = (bidi.bidi.resolve_handler["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__4212__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.resolve-handler",_);
}
}
}
});

bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if(((!((_ == null))) && (!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null))))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__4212__auto__.call(null,_,m));
} else {
var m__4212__auto____$1 = (bidi.bidi.unresolve_handler["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__4212__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.unresolve-handler",_);
}
}
}
});

bidi.bidi.just_path = (function bidi$bidi$just_path(path){
var uri_string = ["http://bidi.bidi/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2((new goog.Uri(uri_string)).getPath(),(1));
});
/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__11758,orig_env){
var vec__11759 = p__11758;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11759,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11759,(1),null);
var env = cljs.core.update.cljs$core$IFn$_invoke$arity$3(orig_env,cljs.core.cst$kw$remainder,bidi.bidi.just_path);
var temp__5457__auto__ = bidi.bidi.match_pattern(pattern,env);
if(cljs.core.truth_(temp__5457__auto__)){
var match_result = temp__5457__auto__;
return bidi.bidi.resolve_handler(matched,match_result);
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__5457__auto__ = cljs.core.last(cljs.core.re_matches(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_pattern),"(.*)"].join('')),cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__5457__auto__)){
var path = temp__5457__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$remainder,path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$remainder),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null)], 0));
} else {
return null;
}
});
goog.object.set(bidi.bidi.Pattern,"string",true);

var G__11765_11787 = bidi.bidi.match_pattern;
var G__11766_11788 = "string";
var G__11767_11789 = ((function (G__11765_11787,G__11766_11788){
return (function (this$,env){
return bidi.bidi.match_beginning(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group(this$)),")"].join(''),env);
});})(G__11765_11787,G__11766_11788))
;
goog.object.set(G__11765_11787,G__11766_11788,G__11767_11789);

var G__11768_11790 = bidi.bidi.unmatch_pattern;
var G__11769_11791 = "string";
var G__11770_11792 = ((function (G__11768_11790,G__11769_11791){
return (function (this$,_){
return this$;
});})(G__11768_11790,G__11769_11791))
;
goog.object.set(G__11768_11790,G__11769_11791,G__11770_11792);

RegExp.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group(this$__$1)),")"].join(''),env);
});

RegExp.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
var p = this$__$1.pattern();
return bidi.bidi.unmatch_pattern(clojure.string.replace(p,/\\\\/,""),m);
});

goog.object.set(bidi.bidi.Pattern,"boolean",true);

var G__11771_11793 = bidi.bidi.match_pattern;
var G__11772_11794 = "boolean";
var G__11773_11795 = ((function (G__11771_11793,G__11772_11794){
return (function (this$,env){
if(this$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$remainder,"");
} else {
return null;
}
});})(G__11771_11793,G__11772_11794))
;
goog.object.set(G__11771_11793,G__11772_11794,G__11773_11795);

var G__11774_11796 = bidi.bidi.unmatch_pattern;
var G__11775_11797 = "boolean";
var G__11776_11798 = ((function (G__11774_11796,G__11775_11797){
return (function (this$,_){
if(this$){
return "";
} else {
return null;
}
});})(G__11774_11796,G__11775_11797))
;
goog.object.set(G__11774_11796,G__11775_11797,G__11776_11798);

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__5457__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_PERCENT___$3),"(.*)"].join('');
var _PERCENT___$5 = cljs.core.re_pattern(_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches(_PERCENT___$5,cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.next(_PERCENT___$6);
})();
if(temp__5457__auto__){
var groups = temp__5457__auto__;
var params = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.param_key,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.transform_param,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.butlast(groups))))));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remainder], null),cljs.core.last(groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_params], null),cljs.core.merge,params);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__11762_SHARP_){
return bidi.bidi.unmatch_segment(p1__11762_SHARP_,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_(((function (this$__$1){
return (function (p__11777){
var vec__11778 = p__11777;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11778,(1),null);
if(((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
var G__11781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__11781) : v.call(null,G__11781));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
});})(this$__$1))
,cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_(((function (this$__$1){
return (function (p__11782){
var vec__11783 = p__11782;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11783,(1),null);
if(((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
var G__11786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__11786) : v.call(null,G__11786));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
});})(this$__$1))
,cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11763_SHARP_){
return bidi.bidi.match_pattern(p1__11763_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11764_SHARP_){
return bidi.bidi.match_pattern(p1__11764_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
});
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__5457__auto__ = bidi.bidi.unresolve_handler(cljs.core.second(v),m);
if(cljs.core.truth_(temp__5457__auto__)){
var r = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.unmatch_pattern(cljs.core.first(v),m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return null;
}
});
goog.object.set(bidi.bidi.Matched,"null",true);

var G__11809_11824 = bidi.bidi.resolve_handler;
var G__11810_11825 = "null";
var G__11811_11826 = ((function (G__11809_11824,G__11810_11825){
return (function (this$,m){
return null;
});})(G__11809_11824,G__11810_11825))
;
goog.object.set(G__11809_11824,G__11810_11825,G__11811_11826);

var G__11812_11827 = bidi.bidi.unresolve_handler;
var G__11813_11828 = "null";
var G__11814_11829 = ((function (G__11812_11827,G__11813_11828){
return (function (this$,m){
return null;
});})(G__11812_11827,G__11813_11828))
;
goog.object.set(G__11812_11827,G__11813_11828,G__11814_11829);

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11799_SHARP_){
return bidi.bidi.match_pair(p1__11799_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11800_SHARP_){
return bidi.bidi.unmatch_pair(p1__11800_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Var.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Var.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Var.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.unresolve_handler(cljs.core.deref(this$__$1),m);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11803_SHARP_){
return bidi.bidi.match_pair(p1__11803_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11804_SHARP_){
return bidi.bidi.unmatch_pair(p1__11804_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11801_SHARP_){
return bidi.bidi.match_pair(p1__11801_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11802_SHARP_){
return bidi.bidi.unmatch_pair(p1__11802_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

goog.object.set(bidi.bidi.Matched,"string",true);

var G__11815_11830 = bidi.bidi.unresolve_handler;
var G__11816_11831 = "string";
var G__11817_11832 = ((function (G__11815_11830,G__11816_11831){
return (function (_,___$1){
return null;
});})(G__11815_11830,G__11816_11831))
;
goog.object.set(G__11815_11830,G__11816_11831,G__11817_11832);

cljs.core.Symbol.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

goog.object.set(bidi.bidi.Matched,"function",true);

var G__11818_11833 = bidi.bidi.resolve_handler;
var G__11819_11834 = "function";
var G__11820_11835 = ((function (G__11818_11833,G__11819_11834){
return (function (this$,m){
return bidi.bidi.succeed(this$,m);
});})(G__11818_11833,G__11819_11834))
;
goog.object.set(G__11818_11833,G__11819_11834,G__11820_11835);

var G__11821_11836 = bidi.bidi.unresolve_handler;
var G__11822_11837 = "function";
var G__11823_11838 = ((function (G__11821_11836,G__11822_11837){
return (function (this$,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});})(G__11821_11836,G__11822_11837))
;
goog.object.set(G__11821_11836,G__11822_11837,G__11823_11838);

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11805_SHARP_){
return bidi.bidi.match_pair(p1__11805_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11806_SHARP_){
return bidi.bidi.unmatch_pair(p1__11806_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11807_SHARP_){
return bidi.bidi.match_pair(p1__11807_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11808_SHARP_){
return bidi.bidi.unmatch_pair(p1__11808_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});
bidi.bidi.match_route_STAR_ = (function bidi$bidi$match_route_STAR_(route,path,options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bidi.bidi.match_pair(route,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$remainder,path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route,route], 0))),cljs.core.cst$kw$route);
});
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__4500__auto__ = [];
var len__4497__auto___11845 = arguments.length;
var i__4498__auto___11846 = (0);
while(true){
if((i__4498__auto___11846 < len__4497__auto___11845)){
args__4500__auto__.push((arguments[i__4498__auto___11846]));

var G__11847 = (i__4498__auto___11846 + (1));
i__4498__auto___11846 = G__11847;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__11842){
var map__11843 = p__11842;
var map__11843__$1 = ((((!((map__11843 == null)))?(((((map__11843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11843):map__11843);
var options = map__11843__$1;
return bidi.bidi.match_route_STAR_(route,path,options);
});

bidi.bidi.match_route.cljs$lang$maxFixedArity = (2);

bidi.bidi.match_route.cljs$lang$applyTo = (function (seq11839){
var G__11840 = cljs.core.first(seq11839);
var seq11839__$1 = cljs.core.next(seq11839);
var G__11841 = cljs.core.first(seq11839__$1);
var seq11839__$2 = cljs.core.next(seq11839__$1);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic(G__11840,G__11841,seq11839__$2);
});

/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__4500__auto__ = [];
var len__4497__auto___11854 = arguments.length;
var i__4498__auto___11855 = (0);
while(true){
if((i__4498__auto___11855 < len__4497__auto___11854)){
args__4500__auto__.push((arguments[i__4498__auto___11855]));

var G__11856 = (i__4498__auto___11855 + (1));
i__4498__auto___11855 = G__11856;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__11851){
var map__11852 = p__11851;
var map__11852__$1 = ((((!((map__11852 == null)))?(((((map__11852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11852):map__11852);
var params = map__11852__$1;
if((handler == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair(route,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$params,params], null));
});

bidi.bidi.path_for.cljs$lang$maxFixedArity = (2);

bidi.bidi.path_for.cljs$lang$applyTo = (function (seq11848){
var G__11849 = cljs.core.first(seq11848);
var seq11848__$1 = cljs.core.next(seq11848);
var G__11850 = cljs.core.first(seq11848__$1);
var seq11848__$2 = cljs.core.next(seq11848__$1);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic(G__11849,G__11850,seq11848__$2);
});


/**
 * @interface
 */
bidi.bidi.Matches = function(){};

/**
 * A protocol used in the expansion of possible matches that the pattern can match. This is used to gather all possible routes using route-seq below.
 */
bidi.bidi.matches = (function bidi$bidi$matches(_){
if(((!((_ == null))) && (!((_.bidi$bidi$Matches$matches$arity$1 == null))))){
return _.bidi$bidi$Matches$matches$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.matches[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (bidi.bidi.matches["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Matches.matches",_);
}
}
}
});

goog.object.set(bidi.bidi.Matches,"_",true);

var G__11857_11860 = bidi.bidi.matches;
var G__11858_11861 = "_";
var G__11859_11862 = ((function (G__11857_11860,G__11858_11861){
return (function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null);
});})(G__11857_11860,G__11858_11861))
;
goog.object.set(G__11857_11860,G__11858_11861,G__11859_11862);

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Route = (function (handler,path,__meta,__extmap,__hash){
this.handler = handler;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k11864,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__11868 = k11864;
var G__11868__$1 = (((G__11868 instanceof cljs.core.Keyword))?G__11868.fqn:null);
switch (G__11868__$1) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11864,else__4175__auto__);

}
});

bidi.bidi.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#bidi.bidi.Route{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11863){
var self__ = this;
var G__11863__$1 = this;
return (new cljs.core.RecordIter((0),G__11863__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__11869 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-350230779 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__11869(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11865,other11866){
var self__ = this;
var this11865__$1 = this;
return ((!((other11866 == null))) && ((this11865__$1.constructor === other11866.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11865__$1.handler,other11866.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11865__$1.path,other11866.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11865__$1.__extmap,other11866.__extmap)));
});

bidi.bidi.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$handler,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__11863){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__11870 = cljs.core.keyword_identical_QMARK_;
var expr__11871 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__11873 = cljs.core.cst$kw$handler;
var G__11874 = expr__11871;
return (pred__11870.cljs$core$IFn$_invoke$arity$2 ? pred__11870.cljs$core$IFn$_invoke$arity$2(G__11873,G__11874) : pred__11870.call(null,G__11873,G__11874));
})())){
return (new bidi.bidi.Route(G__11863,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__11875 = cljs.core.cst$kw$path;
var G__11876 = expr__11871;
return (pred__11870.cljs$core$IFn$_invoke$arity$2 ? pred__11870.cljs$core$IFn$_invoke$arity$2(G__11875,G__11876) : pred__11870.call(null,G__11875,G__11876));
})())){
return (new bidi.bidi.Route(self__.handler,G__11863,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__11863),null));
}
}
});

bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$handler,self__.handler,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__11863){
var self__ = this;
var this__4171__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__11863,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

bidi.bidi.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$path], null);
});

bidi.bidi.Route.cljs$lang$type = true;

bidi.bidi.Route.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"bidi.bidi/Route",null,(1),null));
});

bidi.bidi.Route.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"bidi.bidi/Route");
});

/**
 * Positional factory function for bidi.bidi/Route.
 */
bidi.bidi.__GT_Route = (function bidi$bidi$__GT_Route(handler,path){
return (new bidi.bidi.Route(handler,path,null,null,null));
});

/**
 * Factory function for bidi.bidi/Route, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__11867){
return (new bidi.bidi.Route(cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__11867),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__11867),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11867,cljs.core.cst$kw$handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path], 0))),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

/**
 * Return a sequence of leaves
 */
bidi.bidi.gather = (function bidi$bidi$gather(_,context){
if(((!((_ == null))) && (!((_.bidi$bidi$RouteSeq$gather$arity$2 == null))))){
return _.bidi$bidi$RouteSeq$gather$arity$2(_,context);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.gather[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(_,context) : m__4212__auto__.call(null,_,context));
} else {
var m__4212__auto____$1 = (bidi.bidi.gather["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(_,context) : m__4212__auto____$1.call(null,_,context));
} else {
throw cljs.core.missing_protocol("RouteSeq.gather",_);
}
}
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var G__11879 = arguments.length;
switch (G__11879) {
case 2:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__11880,ctx){
var vec__11881 = p__11880;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11881,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11881,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4292__auto__ = ((function (vec__11881,pattern,matched){
return (function bidi$bidi$iter__11884(s__11885){
return (new cljs.core.LazySeq(null,((function (vec__11881,pattern,matched){
return (function (){
var s__11885__$1 = s__11885;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11885__$1);
if(temp__5457__auto__){
var s__11885__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11885__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__11885__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__11887 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__11886 = (0);
while(true){
if((i__11886 < size__4291__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__11886);
cljs.core.chunk_append(b__11887,bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)));

var G__11889 = (i__11886 + (1));
i__11886 = G__11889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11887),bidi$bidi$iter__11884(cljs.core.chunk_rest(s__11885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11887),null);
}
} else {
var p = cljs.core.first(s__11885__$2);
return cljs.core.cons(bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)),bidi$bidi$iter__11884(cljs.core.rest(s__11885__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11881,pattern,matched))
,null,null));
});})(vec__11881,pattern,matched))
;
return iter__4292__auto__(bidi.bidi.matches(pattern));
})()], 0));
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

bidi.bidi.route_seq.cljs$lang$maxFixedArity = 2;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__11890_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__11890_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.List.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__11891_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__11891_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__11892_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__11892_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__11893_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__11893_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__11894_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__11894_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

goog.object.set(bidi.bidi.RouteSeq,"_",true);

var G__11895_11898 = bidi.bidi.gather;
var G__11896_11899 = "_";
var G__11897_11900 = ((function (G__11895_11898,G__11896_11899){
return (function (this$,context){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$handler,this$))], null);
});})(G__11895_11898,G__11896_11899))
;
goog.object.set(G__11895_11898,G__11896_11899,G__11897_11900);

/**
 * @interface
 */
bidi.bidi.RouteProvider = function(){};

/**
 * Provide a bidi route structure. Returns a vector pair,
 *   the first element is the pattern, the second element is the matched
 *   route or routes.
 */
bidi.bidi.routes = (function bidi$bidi$routes(_){
if(((!((_ == null))) && (!((_.bidi$bidi$RouteProvider$routes$arity$1 == null))))){
return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (bidi.bidi.routes[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (bidi.bidi.routes["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("RouteProvider.routes",_);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {bidi.bidi.Matches}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Alternates = (function (alts,__meta,__extmap,__hash){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k11903,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__11907 = k11903;
var G__11907__$1 = (((G__11907 instanceof cljs.core.Keyword))?G__11907.fqn:null);
switch (G__11907__$1) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11903,else__4175__auto__);

}
});

bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#bidi.bidi.Alternates{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alts,self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11902){
var self__ = this;
var G__11902__$1 = this;
return (new cljs.core.RecordIter((0),G__11902__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$alts], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__11908 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1584309265 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__11908(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11904,other11905){
var self__ = this;
var this11904__$1 = this;
return ((!((other11905 == null))) && ((this11904__$1.constructor === other11905.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11904__$1.alts,other11905.alts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11904__$1.__extmap,other11905.__extmap)));
});

bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alts,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__11902){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__11909 = cljs.core.keyword_identical_QMARK_;
var expr__11910 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__11912 = cljs.core.cst$kw$alts;
var G__11913 = expr__11910;
return (pred__11909.cljs$core$IFn$_invoke$arity$2 ? pred__11909.cljs$core$IFn$_invoke$arity$2(G__11912,G__11913) : pred__11909.call(null,G__11912,G__11913));
})())){
return (new bidi.bidi.Alternates(G__11902,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__11902),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$alts,self__.alts,null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__11902){
var self__ = this;
var this__4171__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__11902,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$matches$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.alts;
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__11901_SHARP_){
return bidi.bidi.match_pattern(p1__11901_SHARP_,m);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,self__.alts));
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(self__.alts),m);
});

bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$alts], null);
});

bidi.bidi.Alternates.cljs$lang$type = true;

bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"bidi.bidi/Alternates",null,(1),null));
});

bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"bidi.bidi/Alternates");
});

/**
 * Positional factory function for bidi.bidi/Alternates.
 */
bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(alts){
return (new bidi.bidi.Alternates(alts,null,null,null));
});

/**
 * Factory function for bidi.bidi/Alternates, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__11906){
return (new bidi.bidi.Alternates(cljs.core.cst$kw$alts.cljs$core$IFn$_invoke$arity$1(G__11906),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__11906,cljs.core.cst$kw$alts)),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__4500__auto__ = [];
var len__4497__auto___11916 = arguments.length;
var i__4498__auto___11917 = (0);
while(true){
if((i__4498__auto___11917 < len__4497__auto___11916)){
args__4500__auto__.push((arguments[i__4498__auto___11917]));

var G__11918 = (i__4498__auto___11917 + (1));
i__4498__auto___11917 = G__11918;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic = (function (alts){
return bidi.bidi.__GT_Alternates(alts);
});

bidi.bidi.alts.cljs$lang$maxFixedArity = (0);

bidi.bidi.alts.cljs$lang$applyTo = (function (seq11915){
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11915));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (matched,tag,__meta,__extmap,__hash){
this.matched = matched;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k11920,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__11924 = k11920;
var G__11924__$1 = (((G__11924 instanceof cljs.core.Keyword))?G__11924.fqn:null);
switch (G__11924__$1) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11920,else__4175__auto__);

}
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context,cljs.core.cst$kw$handler,self__.matched,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag,self__.tag], 0)))], null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$matched,self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tag,self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11919){
var self__ = this;
var G__11919__$1 = this;
return (new cljs.core.RecordIter((0),G__11919__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$matched,cljs.core.cst$kw$tag], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.matched,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$tag,self__.tag));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if((((cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tag,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))))){
return "";
} else {
return bidi.bidi.unresolve_handler(self__.matched,m);
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__11925 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1322093519 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__11925(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11921,other11922){
var self__ = this;
var this11921__$1 = this;
return ((!((other11922 == null))) && ((this11921__$1.constructor === other11922.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11921__$1.matched,other11922.matched)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11921__$1.tag,other11922.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11921__$1.__extmap,other11922.__extmap)));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$matched,null,cljs.core.cst$kw$tag,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__11919){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__11926 = cljs.core.keyword_identical_QMARK_;
var expr__11927 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__11929 = cljs.core.cst$kw$matched;
var G__11930 = expr__11927;
return (pred__11926.cljs$core$IFn$_invoke$arity$2 ? pred__11926.cljs$core$IFn$_invoke$arity$2(G__11929,G__11930) : pred__11926.call(null,G__11929,G__11930));
})())){
return (new bidi.bidi.TaggedMatch(G__11919,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__11931 = cljs.core.cst$kw$tag;
var G__11932 = expr__11927;
return (pred__11926.cljs$core$IFn$_invoke$arity$2 ? pred__11926.cljs$core$IFn$_invoke$arity$2(G__11931,G__11932) : pred__11926.call(null,G__11931,G__11932));
})())){
return (new bidi.bidi.TaggedMatch(self__.matched,G__11919,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__11919),null));
}
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$matched,self__.matched,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$tag,self__.tag,null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__11919){
var self__ = this;
var this__4171__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__11919,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matched,cljs.core.cst$sym$tag], null);
});

bidi.bidi.TaggedMatch.cljs$lang$type = true;

bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"bidi.bidi/TaggedMatch",null,(1),null));
});

bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"bidi.bidi/TaggedMatch");
});

/**
 * Positional factory function for bidi.bidi/TaggedMatch.
 */
bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(matched,tag){
return (new bidi.bidi.TaggedMatch(matched,tag,null,null,null));
});

/**
 * Factory function for bidi.bidi/TaggedMatch, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__11923){
return (new bidi.bidi.TaggedMatch(cljs.core.cst$kw$matched.cljs$core$IFn$_invoke$arity$1(G__11923),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(G__11923),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11923,cljs.core.cst$kw$matched,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag], 0))),null));
});

bidi.bidi.tag = (function bidi$bidi$tag(matched,tag){
return bidi.bidi.__GT_TaggedMatch(matched,tag);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap,__hash){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k11935,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__11939 = k11935;
var G__11939__$1 = (((G__11939 instanceof cljs.core.Keyword))?G__11939.fqn:null);
switch (G__11939__$1) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11935,else__4175__auto__);

}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11934){
var self__ = this;
var G__11934__$1 = this;
return (new cljs.core.RecordIter((0),G__11934__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$handler], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.handler,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$id,self__.id));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return bidi.bidi.unresolve_handler(self__.handler,m);
}
} else {
return null;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__11940 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1607629977 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__11940(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11936,other11937){
var self__ = this;
var this11936__$1 = this;
return ((!((other11937 == null))) && ((this11936__$1.constructor === other11937.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11936__$1.id,other11937.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11936__$1.handler,other11937.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11936__$1.__extmap,other11937.__extmap)));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,null,cljs.core.cst$kw$handler,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__11934){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__11941 = cljs.core.keyword_identical_QMARK_;
var expr__11942 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__11944 = cljs.core.cst$kw$id;
var G__11945 = expr__11942;
return (pred__11941.cljs$core$IFn$_invoke$arity$2 ? pred__11941.cljs$core$IFn$_invoke$arity$2(G__11944,G__11945) : pred__11941.call(null,G__11944,G__11945));
})())){
return (new bidi.bidi.IdentifiableHandler(G__11934,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__11946 = cljs.core.cst$kw$handler;
var G__11947 = expr__11942;
return (pred__11941.cljs$core$IFn$_invoke$arity$2 ? pred__11941.cljs$core$IFn$_invoke$arity$2(G__11946,G__11947) : pred__11941.call(null,G__11946,G__11947));
})())){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__11934,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__11934),null));
}
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$id,self__.id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$handler,self__.handler,null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__11934){
var self__ = this;
var this__4171__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__11934,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

bidi.bidi.IdentifiableHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id,cljs.core.cst$sym$handler], null);
});

bidi.bidi.IdentifiableHandler.cljs$lang$type = true;

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"bidi.bidi/IdentifiableHandler",null,(1),null));
});

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"bidi.bidi/IdentifiableHandler");
});

/**
 * Positional factory function for bidi.bidi/IdentifiableHandler.
 */
bidi.bidi.__GT_IdentifiableHandler = (function bidi$bidi$__GT_IdentifiableHandler(id,handler){
return (new bidi.bidi.IdentifiableHandler(id,handler,null,null,null));
});

/**
 * Factory function for bidi.bidi/IdentifiableHandler, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__11938){
return (new bidi.bidi.IdentifiableHandler(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__11938),cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__11938),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11938,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler], 0))),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var G__11950 = arguments.length;
switch (G__11950) {
case 2:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2 = (function (k,handler){
return bidi.bidi.__GT_IdentifiableHandler(k,handler);
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return bidi.bidi.__GT_IdentifiableHandler(null,handler);
});

bidi.bidi.handler.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.RoutesContext = (function (routes,context,__meta,__extmap,__hash){
this.routes = routes;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k11953,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__11957 = k11953;
var G__11957__$1 = (((G__11957 instanceof cljs.core.Keyword))?G__11957.fqn:null);
switch (G__11957__$1) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11953,else__4175__auto__);

}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (_,context__$1){
var self__ = this;
var ___$1 = this;
return bidi.bidi.gather(self__.routes,context__$1);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#bidi.bidi.RoutesContext{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11952){
var self__ = this;
var G__11952__$1 = this;
return (new cljs.core.RecordIter((0),G__11952__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes,cljs.core.cst$kw$context], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var temp__5457__auto__ = bidi.bidi.resolve_handler(self__.routes,m);
if(cljs.core.truth_(temp__5457__auto__)){
var m__$1 = temp__5457__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.context,m__$1], 0));
} else {
return null;
}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return bidi.bidi.unresolve_handler(self__.routes,m);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__11958 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-736389484 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__11958(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11954,other11955){
var self__ = this;
var this11954__$1 = this;
return ((!((other11955 == null))) && ((this11954__$1.constructor === other11955.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11954__$1.routes,other11955.routes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11954__$1.context,other11955.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11954__$1.__extmap,other11955.__extmap)));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$routes,null,cljs.core.cst$kw$context,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__11952){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__11959 = cljs.core.keyword_identical_QMARK_;
var expr__11960 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__11962 = cljs.core.cst$kw$routes;
var G__11963 = expr__11960;
return (pred__11959.cljs$core$IFn$_invoke$arity$2 ? pred__11959.cljs$core$IFn$_invoke$arity$2(G__11962,G__11963) : pred__11959.call(null,G__11962,G__11963));
})())){
return (new bidi.bidi.RoutesContext(G__11952,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__11964 = cljs.core.cst$kw$context;
var G__11965 = expr__11960;
return (pred__11959.cljs$core$IFn$_invoke$arity$2 ? pred__11959.cljs$core$IFn$_invoke$arity$2(G__11964,G__11965) : pred__11959.call(null,G__11964,G__11965));
})())){
return (new bidi.bidi.RoutesContext(self__.routes,G__11952,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__11952),null));
}
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$routes,self__.routes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$context,self__.context,null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__11952){
var self__ = this;
var this__4171__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__11952,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

bidi.bidi.RoutesContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes,cljs.core.cst$sym$context], null);
});

bidi.bidi.RoutesContext.cljs$lang$type = true;

bidi.bidi.RoutesContext.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"bidi.bidi/RoutesContext",null,(1),null));
});

bidi.bidi.RoutesContext.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"bidi.bidi/RoutesContext");
});

/**
 * Positional factory function for bidi.bidi/RoutesContext.
 */
bidi.bidi.__GT_RoutesContext = (function bidi$bidi$__GT_RoutesContext(routes,context){
return (new bidi.bidi.RoutesContext(routes,context,null,null,null));
});

/**
 * Factory function for bidi.bidi/RoutesContext, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__11956){
return (new bidi.bidi.RoutesContext(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(G__11956),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(G__11956),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11956,cljs.core.cst$kw$routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$context], 0))),null));
});

/**
 * Wrap a Matched such that a successful match will merge the given
 *   context with the match-context. The merge is such that where there
 *   is a conflict, the inner sub-tree overrides the outer container.
 */
bidi.bidi.routes_context = (function bidi$bidi$routes_context(routes,context){
return bidi.bidi.__GT_RoutesContext(routes,context);
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return route;
});
