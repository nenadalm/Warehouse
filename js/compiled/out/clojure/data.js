// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__17963){
var vec__17964 = p__17963;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__17967 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17967,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17967,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17967,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__17971 = arguments.length;
switch (G__17971) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__17973_17997 = clojure.data.equality_partition;
var G__17974_17998 = "null";
var G__17975_17999 = ((function (G__17973_17997,G__17974_17998){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17973_17997,G__17974_17998))
;
goog.object.set(G__17973_17997,G__17974_17998,G__17975_17999);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__17976_18000 = clojure.data.equality_partition;
var G__17977_18001 = "string";
var G__17978_18002 = ((function (G__17976_18000,G__17977_18001){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17976_18000,G__17977_18001))
;
goog.object.set(G__17976_18000,G__17977_18001,G__17978_18002);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__17979_18003 = clojure.data.equality_partition;
var G__17980_18004 = "number";
var G__17981_18005 = ((function (G__17979_18003,G__17980_18004){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17979_18003,G__17980_18004))
;
goog.object.set(G__17979_18003,G__17980_18004,G__17981_18005);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__17982_18006 = clojure.data.equality_partition;
var G__17983_18007 = "array";
var G__17984_18008 = ((function (G__17982_18006,G__17983_18007){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__17982_18006,G__17983_18007))
;
goog.object.set(G__17982_18006,G__17983_18007,G__17984_18008);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__17985_18009 = clojure.data.equality_partition;
var G__17986_18010 = "function";
var G__17987_18011 = ((function (G__17985_18009,G__17986_18010){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17985_18009,G__17986_18010))
;
goog.object.set(G__17985_18009,G__17986_18010,G__17987_18011);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__17988_18012 = clojure.data.equality_partition;
var G__17989_18013 = "boolean";
var G__17990_18014 = ((function (G__17988_18012,G__17989_18013){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17988_18012,G__17989_18013))
;
goog.object.set(G__17988_18012,G__17989_18013,G__17990_18014);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__17991_18015 = clojure.data.equality_partition;
var G__17992_18016 = "_";
var G__17993_18017 = ((function (G__17991_18015,G__17992_18016){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__17991_18015,G__17992_18016))
;
goog.object.set(G__17991_18015,G__17992_18016,G__17993_18017);
goog.object.set(clojure.data.Diff,"null",true);

var G__18018_18042 = clojure.data.diff_similar;
var G__18019_18043 = "null";
var G__18020_18044 = ((function (G__18018_18042,G__18019_18043){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18018_18042,G__18019_18043))
;
goog.object.set(G__18018_18042,G__18019_18043,G__18020_18044);

goog.object.set(clojure.data.Diff,"string",true);

var G__18021_18045 = clojure.data.diff_similar;
var G__18022_18046 = "string";
var G__18023_18047 = ((function (G__18021_18045,G__18022_18046){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18021_18045,G__18022_18046))
;
goog.object.set(G__18021_18045,G__18022_18046,G__18023_18047);

goog.object.set(clojure.data.Diff,"number",true);

var G__18024_18048 = clojure.data.diff_similar;
var G__18025_18049 = "number";
var G__18026_18050 = ((function (G__18024_18048,G__18025_18049){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18024_18048,G__18025_18049))
;
goog.object.set(G__18024_18048,G__18025_18049,G__18026_18050);

goog.object.set(clojure.data.Diff,"array",true);

var G__18027_18051 = clojure.data.diff_similar;
var G__18028_18052 = "array";
var G__18029_18053 = ((function (G__18027_18051,G__18028_18052){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__18027_18051,G__18028_18052))
;
goog.object.set(G__18027_18051,G__18028_18052,G__18029_18053);

goog.object.set(clojure.data.Diff,"function",true);

var G__18030_18054 = clojure.data.diff_similar;
var G__18031_18055 = "function";
var G__18032_18056 = ((function (G__18030_18054,G__18031_18055){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18030_18054,G__18031_18055))
;
goog.object.set(G__18030_18054,G__18031_18055,G__18032_18056);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__18033_18057 = clojure.data.diff_similar;
var G__18034_18058 = "boolean";
var G__18035_18059 = ((function (G__18033_18057,G__18034_18058){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18033_18057,G__18034_18058))
;
goog.object.set(G__18033_18057,G__18034_18058,G__18035_18059);

goog.object.set(clojure.data.Diff,"_",true);

var G__18036_18060 = clojure.data.diff_similar;
var G__18037_18061 = "_";
var G__18038_18062 = ((function (G__18036_18060,G__18037_18061){
return (function (a,b){
var fexpr__18040 = (function (){var G__18041 = clojure.data.equality_partition(a);
var G__18041__$1 = (((G__18041 instanceof cljs.core.Keyword))?G__18041.fqn:null);
switch (G__18041__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18041__$1)].join('')));

}
})();
return (fexpr__18040.cljs$core$IFn$_invoke$arity$2 ? fexpr__18040.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__18040.call(null,a,b));
});})(G__18036_18060,G__18037_18061))
;
goog.object.set(G__18036_18060,G__18037_18061,G__18038_18062);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
