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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__11793){
var vec__11794 = p__11793;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11794,(1),null);
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
var vec__11797 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11797,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11797,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11797,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__11801 = arguments.length;
switch (G__11801) {
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

var G__11803_11827 = clojure.data.equality_partition;
var G__11804_11828 = "null";
var G__11805_11829 = ((function (G__11803_11827,G__11804_11828){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11803_11827,G__11804_11828))
;
goog.object.set(G__11803_11827,G__11804_11828,G__11805_11829);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__11806_11830 = clojure.data.equality_partition;
var G__11807_11831 = "string";
var G__11808_11832 = ((function (G__11806_11830,G__11807_11831){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11806_11830,G__11807_11831))
;
goog.object.set(G__11806_11830,G__11807_11831,G__11808_11832);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__11809_11833 = clojure.data.equality_partition;
var G__11810_11834 = "number";
var G__11811_11835 = ((function (G__11809_11833,G__11810_11834){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11809_11833,G__11810_11834))
;
goog.object.set(G__11809_11833,G__11810_11834,G__11811_11835);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__11812_11836 = clojure.data.equality_partition;
var G__11813_11837 = "array";
var G__11814_11838 = ((function (G__11812_11836,G__11813_11837){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__11812_11836,G__11813_11837))
;
goog.object.set(G__11812_11836,G__11813_11837,G__11814_11838);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__11815_11839 = clojure.data.equality_partition;
var G__11816_11840 = "function";
var G__11817_11841 = ((function (G__11815_11839,G__11816_11840){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11815_11839,G__11816_11840))
;
goog.object.set(G__11815_11839,G__11816_11840,G__11817_11841);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__11818_11842 = clojure.data.equality_partition;
var G__11819_11843 = "boolean";
var G__11820_11844 = ((function (G__11818_11842,G__11819_11843){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11818_11842,G__11819_11843))
;
goog.object.set(G__11818_11842,G__11819_11843,G__11820_11844);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__11821_11845 = clojure.data.equality_partition;
var G__11822_11846 = "_";
var G__11823_11847 = ((function (G__11821_11845,G__11822_11846){
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
});})(G__11821_11845,G__11822_11846))
;
goog.object.set(G__11821_11845,G__11822_11846,G__11823_11847);
goog.object.set(clojure.data.Diff,"null",true);

var G__11848_11872 = clojure.data.diff_similar;
var G__11849_11873 = "null";
var G__11850_11874 = ((function (G__11848_11872,G__11849_11873){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11848_11872,G__11849_11873))
;
goog.object.set(G__11848_11872,G__11849_11873,G__11850_11874);

goog.object.set(clojure.data.Diff,"string",true);

var G__11851_11875 = clojure.data.diff_similar;
var G__11852_11876 = "string";
var G__11853_11877 = ((function (G__11851_11875,G__11852_11876){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11851_11875,G__11852_11876))
;
goog.object.set(G__11851_11875,G__11852_11876,G__11853_11877);

goog.object.set(clojure.data.Diff,"number",true);

var G__11854_11878 = clojure.data.diff_similar;
var G__11855_11879 = "number";
var G__11856_11880 = ((function (G__11854_11878,G__11855_11879){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11854_11878,G__11855_11879))
;
goog.object.set(G__11854_11878,G__11855_11879,G__11856_11880);

goog.object.set(clojure.data.Diff,"array",true);

var G__11857_11881 = clojure.data.diff_similar;
var G__11858_11882 = "array";
var G__11859_11883 = ((function (G__11857_11881,G__11858_11882){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__11857_11881,G__11858_11882))
;
goog.object.set(G__11857_11881,G__11858_11882,G__11859_11883);

goog.object.set(clojure.data.Diff,"function",true);

var G__11860_11884 = clojure.data.diff_similar;
var G__11861_11885 = "function";
var G__11862_11886 = ((function (G__11860_11884,G__11861_11885){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11860_11884,G__11861_11885))
;
goog.object.set(G__11860_11884,G__11861_11885,G__11862_11886);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__11863_11887 = clojure.data.diff_similar;
var G__11864_11888 = "boolean";
var G__11865_11889 = ((function (G__11863_11887,G__11864_11888){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11863_11887,G__11864_11888))
;
goog.object.set(G__11863_11887,G__11864_11888,G__11865_11889);

goog.object.set(clojure.data.Diff,"_",true);

var G__11866_11890 = clojure.data.diff_similar;
var G__11867_11891 = "_";
var G__11868_11892 = ((function (G__11866_11890,G__11867_11891){
return (function (a,b){
var fexpr__11870 = (function (){var G__11871 = clojure.data.equality_partition(a);
var G__11871__$1 = (((G__11871 instanceof cljs.core.Keyword))?G__11871.fqn:null);
switch (G__11871__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11871__$1)].join('')));

}
})();
return (fexpr__11870.cljs$core$IFn$_invoke$arity$2 ? fexpr__11870.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__11870.call(null,a,b));
});})(G__11866_11890,G__11867_11891))
;
goog.object.set(G__11866_11890,G__11867_11891,G__11868_11892);
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
