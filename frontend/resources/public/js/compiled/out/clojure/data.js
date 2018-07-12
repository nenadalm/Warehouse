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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__11855){
var vec__11856 = p__11855;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11856,(1),null);
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
var vec__11859 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__11863 = arguments.length;
switch (G__11863) {
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

var G__11865_11889 = clojure.data.equality_partition;
var G__11866_11890 = "null";
var G__11867_11891 = ((function (G__11865_11889,G__11866_11890){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11865_11889,G__11866_11890))
;
goog.object.set(G__11865_11889,G__11866_11890,G__11867_11891);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__11868_11892 = clojure.data.equality_partition;
var G__11869_11893 = "string";
var G__11870_11894 = ((function (G__11868_11892,G__11869_11893){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11868_11892,G__11869_11893))
;
goog.object.set(G__11868_11892,G__11869_11893,G__11870_11894);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__11871_11895 = clojure.data.equality_partition;
var G__11872_11896 = "number";
var G__11873_11897 = ((function (G__11871_11895,G__11872_11896){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11871_11895,G__11872_11896))
;
goog.object.set(G__11871_11895,G__11872_11896,G__11873_11897);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__11874_11898 = clojure.data.equality_partition;
var G__11875_11899 = "array";
var G__11876_11900 = ((function (G__11874_11898,G__11875_11899){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__11874_11898,G__11875_11899))
;
goog.object.set(G__11874_11898,G__11875_11899,G__11876_11900);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__11877_11901 = clojure.data.equality_partition;
var G__11878_11902 = "function";
var G__11879_11903 = ((function (G__11877_11901,G__11878_11902){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11877_11901,G__11878_11902))
;
goog.object.set(G__11877_11901,G__11878_11902,G__11879_11903);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__11880_11904 = clojure.data.equality_partition;
var G__11881_11905 = "boolean";
var G__11882_11906 = ((function (G__11880_11904,G__11881_11905){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11880_11904,G__11881_11905))
;
goog.object.set(G__11880_11904,G__11881_11905,G__11882_11906);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__11883_11907 = clojure.data.equality_partition;
var G__11884_11908 = "_";
var G__11885_11909 = ((function (G__11883_11907,G__11884_11908){
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
});})(G__11883_11907,G__11884_11908))
;
goog.object.set(G__11883_11907,G__11884_11908,G__11885_11909);
goog.object.set(clojure.data.Diff,"null",true);

var G__11910_11934 = clojure.data.diff_similar;
var G__11911_11935 = "null";
var G__11912_11936 = ((function (G__11910_11934,G__11911_11935){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11910_11934,G__11911_11935))
;
goog.object.set(G__11910_11934,G__11911_11935,G__11912_11936);

goog.object.set(clojure.data.Diff,"string",true);

var G__11913_11937 = clojure.data.diff_similar;
var G__11914_11938 = "string";
var G__11915_11939 = ((function (G__11913_11937,G__11914_11938){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11913_11937,G__11914_11938))
;
goog.object.set(G__11913_11937,G__11914_11938,G__11915_11939);

goog.object.set(clojure.data.Diff,"number",true);

var G__11916_11940 = clojure.data.diff_similar;
var G__11917_11941 = "number";
var G__11918_11942 = ((function (G__11916_11940,G__11917_11941){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11916_11940,G__11917_11941))
;
goog.object.set(G__11916_11940,G__11917_11941,G__11918_11942);

goog.object.set(clojure.data.Diff,"array",true);

var G__11919_11943 = clojure.data.diff_similar;
var G__11920_11944 = "array";
var G__11921_11945 = ((function (G__11919_11943,G__11920_11944){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__11919_11943,G__11920_11944))
;
goog.object.set(G__11919_11943,G__11920_11944,G__11921_11945);

goog.object.set(clojure.data.Diff,"function",true);

var G__11922_11946 = clojure.data.diff_similar;
var G__11923_11947 = "function";
var G__11924_11948 = ((function (G__11922_11946,G__11923_11947){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11922_11946,G__11923_11947))
;
goog.object.set(G__11922_11946,G__11923_11947,G__11924_11948);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__11925_11949 = clojure.data.diff_similar;
var G__11926_11950 = "boolean";
var G__11927_11951 = ((function (G__11925_11949,G__11926_11950){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11925_11949,G__11926_11950))
;
goog.object.set(G__11925_11949,G__11926_11950,G__11927_11951);

goog.object.set(clojure.data.Diff,"_",true);

var G__11928_11952 = clojure.data.diff_similar;
var G__11929_11953 = "_";
var G__11930_11954 = ((function (G__11928_11952,G__11929_11953){
return (function (a,b){
var fexpr__11932 = (function (){var G__11933 = clojure.data.equality_partition(a);
var G__11933__$1 = (((G__11933 instanceof cljs.core.Keyword))?G__11933.fqn:null);
switch (G__11933__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11933__$1)].join('')));

}
})();
return (fexpr__11932.cljs$core$IFn$_invoke$arity$2 ? fexpr__11932.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__11932.call(null,a,b));
});})(G__11928_11952,G__11929_11953))
;
goog.object.set(G__11928_11952,G__11929_11953,G__11930_11954);
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
