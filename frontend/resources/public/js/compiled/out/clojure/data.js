// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__11926){
var vec__11927 = p__11926;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11927,(1),null);
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
var vec__11930 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11930,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11930,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11930,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__11934 = arguments.length;
switch (G__11934) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
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
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
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
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__11936_11960 = clojure.data.equality_partition;
var G__11937_11961 = "null";
var G__11938_11962 = ((function (G__11936_11960,G__11937_11961){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11936_11960,G__11937_11961))
;
goog.object.set(G__11936_11960,G__11937_11961,G__11938_11962);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__11939_11963 = clojure.data.equality_partition;
var G__11940_11964 = "string";
var G__11941_11965 = ((function (G__11939_11963,G__11940_11964){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11939_11963,G__11940_11964))
;
goog.object.set(G__11939_11963,G__11940_11964,G__11941_11965);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__11942_11966 = clojure.data.equality_partition;
var G__11943_11967 = "number";
var G__11944_11968 = ((function (G__11942_11966,G__11943_11967){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11942_11966,G__11943_11967))
;
goog.object.set(G__11942_11966,G__11943_11967,G__11944_11968);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__11945_11969 = clojure.data.equality_partition;
var G__11946_11970 = "array";
var G__11947_11971 = ((function (G__11945_11969,G__11946_11970){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__11945_11969,G__11946_11970))
;
goog.object.set(G__11945_11969,G__11946_11970,G__11947_11971);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__11948_11972 = clojure.data.equality_partition;
var G__11949_11973 = "function";
var G__11950_11974 = ((function (G__11948_11972,G__11949_11973){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11948_11972,G__11949_11973))
;
goog.object.set(G__11948_11972,G__11949_11973,G__11950_11974);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__11951_11975 = clojure.data.equality_partition;
var G__11952_11976 = "boolean";
var G__11953_11977 = ((function (G__11951_11975,G__11952_11976){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11951_11975,G__11952_11976))
;
goog.object.set(G__11951_11975,G__11952_11976,G__11953_11977);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__11954_11978 = clojure.data.equality_partition;
var G__11955_11979 = "_";
var G__11956_11980 = ((function (G__11954_11978,G__11955_11979){
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
});})(G__11954_11978,G__11955_11979))
;
goog.object.set(G__11954_11978,G__11955_11979,G__11956_11980);
goog.object.set(clojure.data.Diff,"null",true);

var G__11981_12005 = clojure.data.diff_similar;
var G__11982_12006 = "null";
var G__11983_12007 = ((function (G__11981_12005,G__11982_12006){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11981_12005,G__11982_12006))
;
goog.object.set(G__11981_12005,G__11982_12006,G__11983_12007);

goog.object.set(clojure.data.Diff,"string",true);

var G__11984_12008 = clojure.data.diff_similar;
var G__11985_12009 = "string";
var G__11986_12010 = ((function (G__11984_12008,G__11985_12009){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11984_12008,G__11985_12009))
;
goog.object.set(G__11984_12008,G__11985_12009,G__11986_12010);

goog.object.set(clojure.data.Diff,"number",true);

var G__11987_12011 = clojure.data.diff_similar;
var G__11988_12012 = "number";
var G__11989_12013 = ((function (G__11987_12011,G__11988_12012){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11987_12011,G__11988_12012))
;
goog.object.set(G__11987_12011,G__11988_12012,G__11989_12013);

goog.object.set(clojure.data.Diff,"array",true);

var G__11990_12014 = clojure.data.diff_similar;
var G__11991_12015 = "array";
var G__11992_12016 = ((function (G__11990_12014,G__11991_12015){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__11990_12014,G__11991_12015))
;
goog.object.set(G__11990_12014,G__11991_12015,G__11992_12016);

goog.object.set(clojure.data.Diff,"function",true);

var G__11993_12017 = clojure.data.diff_similar;
var G__11994_12018 = "function";
var G__11995_12019 = ((function (G__11993_12017,G__11994_12018){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11993_12017,G__11994_12018))
;
goog.object.set(G__11993_12017,G__11994_12018,G__11995_12019);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__11996_12020 = clojure.data.diff_similar;
var G__11997_12021 = "boolean";
var G__11998_12022 = ((function (G__11996_12020,G__11997_12021){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11996_12020,G__11997_12021))
;
goog.object.set(G__11996_12020,G__11997_12021,G__11998_12022);

goog.object.set(clojure.data.Diff,"_",true);

var G__11999_12023 = clojure.data.diff_similar;
var G__12000_12024 = "_";
var G__12001_12025 = ((function (G__11999_12023,G__12000_12024){
return (function (a,b){
var fexpr__12003 = (function (){var G__12004 = clojure.data.equality_partition(a);
var G__12004__$1 = (((G__12004 instanceof cljs.core.Keyword))?G__12004.fqn:null);
switch (G__12004__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12004__$1)].join('')));

}
})();
return (fexpr__12003.cljs$core$IFn$_invoke$arity$2 ? fexpr__12003.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__12003.call(null,a,b));
});})(G__11999_12023,G__12000_12024))
;
goog.object.set(G__11999_12023,G__12000_12024,G__12001_12025);
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
