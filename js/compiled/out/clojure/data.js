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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__17959){
var vec__17960 = p__17959;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17960,(1),null);
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
var vec__17963 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__17967 = arguments.length;
switch (G__17967) {
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

var G__17969_17993 = clojure.data.equality_partition;
var G__17970_17994 = "null";
var G__17971_17995 = ((function (G__17969_17993,G__17970_17994){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17969_17993,G__17970_17994))
;
goog.object.set(G__17969_17993,G__17970_17994,G__17971_17995);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__17972_17996 = clojure.data.equality_partition;
var G__17973_17997 = "string";
var G__17974_17998 = ((function (G__17972_17996,G__17973_17997){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17972_17996,G__17973_17997))
;
goog.object.set(G__17972_17996,G__17973_17997,G__17974_17998);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__17975_17999 = clojure.data.equality_partition;
var G__17976_18000 = "number";
var G__17977_18001 = ((function (G__17975_17999,G__17976_18000){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17975_17999,G__17976_18000))
;
goog.object.set(G__17975_17999,G__17976_18000,G__17977_18001);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__17978_18002 = clojure.data.equality_partition;
var G__17979_18003 = "array";
var G__17980_18004 = ((function (G__17978_18002,G__17979_18003){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__17978_18002,G__17979_18003))
;
goog.object.set(G__17978_18002,G__17979_18003,G__17980_18004);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__17981_18005 = clojure.data.equality_partition;
var G__17982_18006 = "function";
var G__17983_18007 = ((function (G__17981_18005,G__17982_18006){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17981_18005,G__17982_18006))
;
goog.object.set(G__17981_18005,G__17982_18006,G__17983_18007);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__17984_18008 = clojure.data.equality_partition;
var G__17985_18009 = "boolean";
var G__17986_18010 = ((function (G__17984_18008,G__17985_18009){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17984_18008,G__17985_18009))
;
goog.object.set(G__17984_18008,G__17985_18009,G__17986_18010);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__17987_18011 = clojure.data.equality_partition;
var G__17988_18012 = "_";
var G__17989_18013 = ((function (G__17987_18011,G__17988_18012){
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
});})(G__17987_18011,G__17988_18012))
;
goog.object.set(G__17987_18011,G__17988_18012,G__17989_18013);
goog.object.set(clojure.data.Diff,"null",true);

var G__18014_18038 = clojure.data.diff_similar;
var G__18015_18039 = "null";
var G__18016_18040 = ((function (G__18014_18038,G__18015_18039){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18014_18038,G__18015_18039))
;
goog.object.set(G__18014_18038,G__18015_18039,G__18016_18040);

goog.object.set(clojure.data.Diff,"string",true);

var G__18017_18041 = clojure.data.diff_similar;
var G__18018_18042 = "string";
var G__18019_18043 = ((function (G__18017_18041,G__18018_18042){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18017_18041,G__18018_18042))
;
goog.object.set(G__18017_18041,G__18018_18042,G__18019_18043);

goog.object.set(clojure.data.Diff,"number",true);

var G__18020_18044 = clojure.data.diff_similar;
var G__18021_18045 = "number";
var G__18022_18046 = ((function (G__18020_18044,G__18021_18045){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18020_18044,G__18021_18045))
;
goog.object.set(G__18020_18044,G__18021_18045,G__18022_18046);

goog.object.set(clojure.data.Diff,"array",true);

var G__18023_18047 = clojure.data.diff_similar;
var G__18024_18048 = "array";
var G__18025_18049 = ((function (G__18023_18047,G__18024_18048){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__18023_18047,G__18024_18048))
;
goog.object.set(G__18023_18047,G__18024_18048,G__18025_18049);

goog.object.set(clojure.data.Diff,"function",true);

var G__18026_18050 = clojure.data.diff_similar;
var G__18027_18051 = "function";
var G__18028_18052 = ((function (G__18026_18050,G__18027_18051){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18026_18050,G__18027_18051))
;
goog.object.set(G__18026_18050,G__18027_18051,G__18028_18052);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__18029_18053 = clojure.data.diff_similar;
var G__18030_18054 = "boolean";
var G__18031_18055 = ((function (G__18029_18053,G__18030_18054){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18029_18053,G__18030_18054))
;
goog.object.set(G__18029_18053,G__18030_18054,G__18031_18055);

goog.object.set(clojure.data.Diff,"_",true);

var G__18032_18056 = clojure.data.diff_similar;
var G__18033_18057 = "_";
var G__18034_18058 = ((function (G__18032_18056,G__18033_18057){
return (function (a,b){
var fexpr__18036 = (function (){var G__18037 = clojure.data.equality_partition(a);
var G__18037__$1 = (((G__18037 instanceof cljs.core.Keyword))?G__18037.fqn:null);
switch (G__18037__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18037__$1)].join('')));

}
})();
return (fexpr__18036.cljs$core$IFn$_invoke$arity$2 ? fexpr__18036.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__18036.call(null,a,b));
});})(G__18032_18056,G__18033_18057))
;
goog.object.set(G__18032_18056,G__18033_18057,G__18034_18058);
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
