// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__7340__auto__ = (((this$ == null))?null:this$);
var m__7341__auto__ = (secretary.core.route_matches[goog.typeOf(x__7340__auto__)]);
if(!((m__7341__auto__ == null))){
return (m__7341__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7341__auto__.cljs$core$IFn$_invoke$arity$2(this$,route) : m__7341__auto__.call(null,this$,route));
} else {
var m__7341__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__7341__auto____$1 == null))){
return (m__7341__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7341__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,route) : m__7341__auto____$1.call(null,this$,route));
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__7340__auto__ = (((this$ == null))?null:this$);
var m__7341__auto__ = (secretary.core.route_value[goog.typeOf(x__7340__auto__)]);
if(!((m__7341__auto__ == null))){
return (m__7341__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7341__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7341__auto__.call(null,this$));
} else {
var m__7341__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__7341__auto____$1 == null))){
return (m__7341__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7341__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7341__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var args14892 = [];
var len__7785__auto___14895 = arguments.length;
var i__7786__auto___14896 = (0);
while(true){
if((i__7786__auto___14896 < len__7785__auto___14895)){
args14892.push((arguments[i__7786__auto___14896]));

var G__14897 = (i__7786__auto___14896 + (1));
i__7786__auto___14896 = G__14897;
continue;
} else {
}
break;
}

var G__14894 = args14892.length;
switch (G__14894) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14892.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__7340__auto__ = (((this$ == null))?null:this$);
var m__7341__auto__ = (secretary.core.render_route[goog.typeOf(x__7340__auto__)]);
if(!((m__7341__auto__ == null))){
return (m__7341__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7341__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7341__auto__.call(null,this$));
} else {
var m__7341__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__7341__auto____$1 == null))){
return (m__7341__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7341__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7341__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__7340__auto__ = (((this$ == null))?null:this$);
var m__7341__auto__ = (secretary.core.render_route[goog.typeOf(x__7340__auto__)]);
if(!((m__7341__auto__ == null))){
return (m__7341__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7341__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__7341__auto__.call(null,this$,params));
} else {
var m__7341__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__7341__auto____$1 == null))){
return (m__7341__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7341__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__7341__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;


secretary.core._STAR_config_STAR_ = (function (){var G__14899 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prefix,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14899) : cljs.core.atom.call(null,G__14899));
})();
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(secretary.core._STAR_config_STAR_) : cljs.core.deref.call(null,secretary.core._STAR_config_STAR_)),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__7605__auto__ = (function (){var G__14900 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14900) : cljs.core.atom.call(null,G__14900));
})();
var prefer_table__7606__auto__ = (function (){var G__14901 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14901) : cljs.core.atom.call(null,G__14901));
})();
var method_cache__7607__auto__ = (function (){var G__14902 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14902) : cljs.core.atom.call(null,G__14902));
})();
var cached_hierarchy__7608__auto__ = (function (){var G__14903 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14903) : cljs.core.atom.call(null,G__14903));
})();
var hierarchy__7609__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__,hierarchy__7609__auto__){
return (function (p__14904){
var vec__14905 = p__14904;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,(1),null);
if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
return cljs.core.cst$kw$secretary$core_SLASH_sequential;
} else {
if((function (){var or__6677__auto__ = cljs.core.map_QMARK_(v);
if(or__6677__auto__){
return or__6677__auto__;
} else {
if(!((v == null))){
if(((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IRecord$))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
}
}
})()){
return cljs.core.cst$kw$secretary$core_SLASH_map;
} else {
return null;
}
}
});})(method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__,hierarchy__7609__auto__))
,cljs.core.cst$kw$default,hierarchy__7609__auto__,method_table__7605__auto__,prefer_table__7606__auto__,method_cache__7607__auto__,cached_hierarchy__7608__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var args14910 = [];
var len__7785__auto___14913 = arguments.length;
var i__7786__auto___14914 = (0);
while(true){
if((i__7786__auto___14914 < len__7785__auto___14913)){
args14910.push((arguments[i__7786__auto___14914]));

var G__14915 = (i__7786__auto___14914 + (1));
i__7786__auto___14914 = G__14915;
continue;
} else {
}
break;
}

var G__14912 = args14910.length;
switch (G__14912) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14910.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;

secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$secretary$core_SLASH_sequential,(function (p__14917){
var vec__14918 = p__14917;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(1),null);
var encoded = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__14918,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(pair) : secretary.core.encode_pair.call(null,pair));
});})(vec__14918,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$secretary$core_SLASH_map,(function (p__14921){
var vec__14922 = p__14921;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14922,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14922,k,v){
return (function (p__14925){
var vec__14926 = p__14925;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14926,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14926,(1),null);
var G__14929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__14929) : secretary.core.encode_pair.call(null,G__14929));
});})(vec__14922,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__14930){
var vec__14931 = p__14930;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14931,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((function (){var G__14934 = [cljs.core.str(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__14934) : secretary.core.encode.call(null,G__14934));
})())].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq(index_re,path);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__14939){
var vec__14940 = p__14939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__14946 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14946,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14946,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14946,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);
return cljs.core.cons(key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});
var hs = heads(path);
var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h)))))){
return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last(path) === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){
var vec__14952 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14952,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(v) : secretary.core.decode.call(null,v)));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys(params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches(re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_(ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){
if(cljs.core.truth_((secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(c) : secretary.core.re_escape_chars.call(null,c)))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some((function (p__14962){
var vec__14963 = p__14962;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14963,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14963,(1),null);
var temp__4657__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__14966 = temp__4657__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(c) : action.call(null,c))], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(s__$1)){
var vec__14975 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14975,(0),null);
var vec__14978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14975,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978,(1),null);
var G__14981 = s__$2;
var G__14982 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__14983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__14981;
pattern = G__14982;
params = G__14983;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):cljs.core.cst$kw$_STAR_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape(v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__14993 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14993,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14993,(1),null);
if(typeof secretary.core.t_secretary$core14996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core14996 = (function (orig_route,clauses,vec__14993,re,params,meta14997){
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__14993 = vec__14993;
this.re = re;
this.params = params;
this.meta14997 = meta14997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t_secretary$core14996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__14993,re,params){
return (function (_14998,meta14997__$1){
var self__ = this;
var _14998__$1 = this;
return (new secretary.core.t_secretary$core14996(self__.orig_route,self__.clauses,self__.vec__14993,self__.re,self__.params,meta14997__$1));
});})(clauses,vec__14993,re,params))
;

secretary.core.t_secretary$core14996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__14993,re,params){
return (function (_14998){
var self__ = this;
var _14998__$1 = this;
return self__.meta14997;
});})(clauses,vec__14993,re,params))
;

secretary.core.t_secretary$core14996.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core14996.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__14993,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__14993,re,params))
;

secretary.core.t_secretary$core14996.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core14996.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__14993,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__14999 = temp__4657__auto__;
var seq__15000 = cljs.core.seq(vec__14999);
var first__15001 = cljs.core.first(seq__15000);
var seq__15000__$1 = cljs.core.next(seq__15000);
var ___$2 = first__15001;
var ms = seq__15000__$1;
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__14993,re,params))
;

secretary.core.t_secretary$core14996.getBasis = ((function (clauses,vec__14993,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$orig_DASH_route,cljs.core.cst$sym$clauses,cljs.core.cst$sym$vec__14993,cljs.core.cst$sym$re,cljs.core.cst$sym$params,cljs.core.cst$sym$meta14997], null);
});})(clauses,vec__14993,re,params))
;

secretary.core.t_secretary$core14996.cljs$lang$type = true;

secretary.core.t_secretary$core14996.cljs$lang$ctorStr = "secretary.core/t_secretary$core14996";

secretary.core.t_secretary$core14996.cljs$lang$ctorPrWriter = ((function (clauses,vec__14993,re,params){
return (function (this__7283__auto__,writer__7284__auto__,opt__7285__auto__){
return cljs.core._write(writer__7284__auto__,"secretary.core/t_secretary$core14996");
});})(clauses,vec__14993,re,params))
;

secretary.core.__GT_t_secretary$core14996 = ((function (clauses,vec__14993,re,params){
return (function secretary$core$compile_route_$___GT_t_secretary$core14996(orig_route__$1,clauses__$1,vec__14993__$1,re__$1,params__$1,meta14997){
return (new secretary.core.t_secretary$core14996(orig_route__$1,clauses__$1,vec__14993__$1,re__$1,params__$1,meta14997));
});})(clauses,vec__14993,re,params))
;

}

return (new secretary.core.t_secretary$core14996(orig_route,clauses,vec__14993,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__7792__auto__ = [];
var len__7785__auto___15005 = arguments.length;
var i__7786__auto___15006 = (0);
while(true){
if((i__7786__auto___15006 < len__7785__auto___15005)){
args__7792__auto__.push((arguments[i__7786__auto___15006]));

var G__15007 = (i__7786__auto___15006 + (1));
i__7786__auto___15006 = G__15007;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.secretary$core$IRenderRoute$)))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq15002){
var G__15003 = cljs.core.first(seq15002);
var seq15002__$1 = cljs.core.next(seq15002);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__15003,seq15002__$1);
});

secretary.core._STAR_routes_STAR_ = (function (){var G__15008 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15008) : cljs.core.atom.call(null,G__15008));
})();
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__15013){
var vec__15014 = p__15013;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15014,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15014,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
var G__15019 = secretary.core._STAR_routes_STAR_;
var G__15020 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15019,G__15020) : cljs.core.reset_BANG_.call(null,G__15019,G__15020));
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some((function (p__15025){
var vec__15026 = p__15025;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15026,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15026,(1),null);
var temp__4657__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__4657__auto__)){
var params = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$action,action,cljs.core.cst$kw$params,params,cljs.core.cst$kw$route,compiled_route], null);
} else {
return null;
}
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(secretary.core._STAR_routes_STAR_) : cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_)));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value(cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prefix], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace(uri,cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(secretary.core.prefix())].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__15034 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15034,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15034,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_params,secretary.core.decode_query_params(query_string)], null):null);
var map__15037 = secretary.core.locate_route(uri_path__$1);
var map__15037__$1 = ((((!((map__15037 == null)))?((((map__15037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15037):map__15037);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15037__$1,cljs.core.cst$kw$action);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15037__$1,cljs.core.cst$kw$params);
var action__$1 = (function (){var or__6677__auto__ = action;
if(cljs.core.truth_(or__6677__auto__)){
return or__6677__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(params__$1) : action__$1.call(null,params__$1));
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__15043){
var vec__15044 = p__15043;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15044,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15044,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);
if(cljs.core.truth_(cljs.core.re_matches(validation,value))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches(secretary.core.compile_route(this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__15047 = temp__4657__auto__;
var seq__15048 = cljs.core.seq(vec__15047);
var first__15049 = cljs.core.first(seq__15048);
var seq__15048__$1 = cljs.core.next(seq__15048);
var _ = first__15049;
var ms = seq__15048__$1;
return cljs.core.vec(ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__15050,route){
var vec__15051 = p__15050;
var seq__15052 = cljs.core.seq(vec__15051);
var first__15053 = cljs.core.first(seq__15052);
var seq__15052__$1 = cljs.core.next(seq__15052);
var route_string = first__15053;
var validations = seq__15052__$1;
var vec__15054 = this;
var seq__15055 = cljs.core.seq(vec__15054);
var first__15056 = cljs.core.first(seq__15055);
var seq__15055__$1 = cljs.core.next(seq__15055);
var route_string__$1 = first__15056;
var validations__$1 = seq__15055__$1;
var params = secretary.core.route_matches(secretary.core.compile_route(route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_(params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value(secretary.core.compile_route(this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__15057){
var vec__15058 = p__15057;
var seq__15059 = cljs.core.seq(vec__15058);
var first__15060 = cljs.core.first(seq__15059);
var seq__15059__$1 = cljs.core.next(seq__15059);
var route_string = first__15060;
var validations = seq__15059__$1;
var vec__15061 = this;
var seq__15062 = cljs.core.seq(vec__15061);
var first__15063 = cljs.core.first(seq__15062);
var seq__15062__$1 = cljs.core.next(seq__15062);
var route_string__$1 = first__15063;
var validations__$1 = seq__15062__$1;
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__15073 = null;
var G__15073__1 = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__15073__2 = (function (this$,params){
var map__15064 = params;
var map__15064__$1 = ((((!((map__15064 == null)))?((((map__15064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15064):map__15064);
var m = map__15064__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15064__$1,cljs.core.cst$kw$query_DASH_params);
var a = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(m) : cljs.core.atom.call(null,m));
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__15064,map__15064__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a)),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__15064,map__15064__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prefix], null))),cljs.core.str(path)].join('');
var temp__4655__auto__ = (function (){var and__6665__auto__ = query_params;
if(cljs.core.truth_(and__6665__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__6665__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var query_string = temp__4655__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__15073 = function(this$,params){
switch(arguments.length){
case 1:
return G__15073__1.call(this,this$);
case 2:
return G__15073__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15073.cljs$core$IFn$_invoke$arity$1 = G__15073__1;
G__15073.cljs$core$IFn$_invoke$arity$2 = G__15073__2;
return G__15073;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__15066,params){
var vec__15067 = p__15066;
var seq__15068 = cljs.core.seq(vec__15067);
var first__15069 = cljs.core.first(seq__15068);
var seq__15068__$1 = cljs.core.next(seq__15068);
var route_string = first__15069;
var validations = seq__15068__$1;
var vec__15070 = this;
var seq__15071 = cljs.core.seq(vec__15070);
var first__15072 = cljs.core.first(seq__15071);
var seq__15071__$1 = cljs.core.next(seq__15071);
var route_string__$1 = first__15072;
var validations__$1 = seq__15071__$1;
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});
