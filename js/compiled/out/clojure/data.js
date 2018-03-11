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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__11838){
var vec__11839 = p__11838;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11839,(1),null);
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
var vec__11842 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11842,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11842,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11842,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__11846 = arguments.length;
switch (G__11846) {
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

var G__11848_11872 = clojure.data.equality_partition;
var G__11849_11873 = "null";
var G__11850_11874 = ((function (G__11848_11872,G__11849_11873){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11848_11872,G__11849_11873))
;
goog.object.set(G__11848_11872,G__11849_11873,G__11850_11874);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__11851_11875 = clojure.data.equality_partition;
var G__11852_11876 = "string";
var G__11853_11877 = ((function (G__11851_11875,G__11852_11876){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11851_11875,G__11852_11876))
;
goog.object.set(G__11851_11875,G__11852_11876,G__11853_11877);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__11854_11878 = clojure.data.equality_partition;
var G__11855_11879 = "number";
var G__11856_11880 = ((function (G__11854_11878,G__11855_11879){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11854_11878,G__11855_11879))
;
goog.object.set(G__11854_11878,G__11855_11879,G__11856_11880);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__11857_11881 = clojure.data.equality_partition;
var G__11858_11882 = "array";
var G__11859_11883 = ((function (G__11857_11881,G__11858_11882){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__11857_11881,G__11858_11882))
;
goog.object.set(G__11857_11881,G__11858_11882,G__11859_11883);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__11860_11884 = clojure.data.equality_partition;
var G__11861_11885 = "function";
var G__11862_11886 = ((function (G__11860_11884,G__11861_11885){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11860_11884,G__11861_11885))
;
goog.object.set(G__11860_11884,G__11861_11885,G__11862_11886);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__11863_11887 = clojure.data.equality_partition;
var G__11864_11888 = "boolean";
var G__11865_11889 = ((function (G__11863_11887,G__11864_11888){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11863_11887,G__11864_11888))
;
goog.object.set(G__11863_11887,G__11864_11888,G__11865_11889);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__11866_11890 = clojure.data.equality_partition;
var G__11867_11891 = "_";
var G__11868_11892 = ((function (G__11866_11890,G__11867_11891){
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
});})(G__11866_11890,G__11867_11891))
;
goog.object.set(G__11866_11890,G__11867_11891,G__11868_11892);
goog.object.set(clojure.data.Diff,"null",true);

var G__11893_11917 = clojure.data.diff_similar;
var G__11894_11918 = "null";
var G__11895_11919 = ((function (G__11893_11917,G__11894_11918){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11893_11917,G__11894_11918))
;
goog.object.set(G__11893_11917,G__11894_11918,G__11895_11919);

goog.object.set(clojure.data.Diff,"string",true);

var G__11896_11920 = clojure.data.diff_similar;
var G__11897_11921 = "string";
var G__11898_11922 = ((function (G__11896_11920,G__11897_11921){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11896_11920,G__11897_11921))
;
goog.object.set(G__11896_11920,G__11897_11921,G__11898_11922);

goog.object.set(clojure.data.Diff,"number",true);

var G__11899_11923 = clojure.data.diff_similar;
var G__11900_11924 = "number";
var G__11901_11925 = ((function (G__11899_11923,G__11900_11924){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11899_11923,G__11900_11924))
;
goog.object.set(G__11899_11923,G__11900_11924,G__11901_11925);

goog.object.set(clojure.data.Diff,"array",true);

var G__11902_11926 = clojure.data.diff_similar;
var G__11903_11927 = "array";
var G__11904_11928 = ((function (G__11902_11926,G__11903_11927){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__11902_11926,G__11903_11927))
;
goog.object.set(G__11902_11926,G__11903_11927,G__11904_11928);

goog.object.set(clojure.data.Diff,"function",true);

var G__11905_11929 = clojure.data.diff_similar;
var G__11906_11930 = "function";
var G__11907_11931 = ((function (G__11905_11929,G__11906_11930){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11905_11929,G__11906_11930))
;
goog.object.set(G__11905_11929,G__11906_11930,G__11907_11931);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__11908_11932 = clojure.data.diff_similar;
var G__11909_11933 = "boolean";
var G__11910_11934 = ((function (G__11908_11932,G__11909_11933){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11908_11932,G__11909_11933))
;
goog.object.set(G__11908_11932,G__11909_11933,G__11910_11934);

goog.object.set(clojure.data.Diff,"_",true);

var G__11911_11935 = clojure.data.diff_similar;
var G__11912_11936 = "_";
var G__11913_11937 = ((function (G__11911_11935,G__11912_11936){
return (function (a,b){
var fexpr__11915 = (function (){var G__11916 = clojure.data.equality_partition(a);
var G__11916__$1 = (((G__11916 instanceof cljs.core.Keyword))?G__11916.fqn:null);
switch (G__11916__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11916__$1)].join('')));

}
})();
return (fexpr__11915.cljs$core$IFn$_invoke$arity$2 ? fexpr__11915.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__11915.call(null,a,b));
});})(G__11911_11935,G__11912_11936))
;
goog.object.set(G__11911_11935,G__11912_11936,G__11913_11937);
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
