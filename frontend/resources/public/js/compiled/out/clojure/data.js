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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__11910){
var vec__11911 = p__11910;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11911,(1),null);
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
var vec__11914 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11914,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11914,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11914,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__11918 = arguments.length;
switch (G__11918) {
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

var G__11920_11944 = clojure.data.equality_partition;
var G__11921_11945 = "null";
var G__11922_11946 = ((function (G__11920_11944,G__11921_11945){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11920_11944,G__11921_11945))
;
goog.object.set(G__11920_11944,G__11921_11945,G__11922_11946);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__11923_11947 = clojure.data.equality_partition;
var G__11924_11948 = "string";
var G__11925_11949 = ((function (G__11923_11947,G__11924_11948){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11923_11947,G__11924_11948))
;
goog.object.set(G__11923_11947,G__11924_11948,G__11925_11949);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__11926_11950 = clojure.data.equality_partition;
var G__11927_11951 = "number";
var G__11928_11952 = ((function (G__11926_11950,G__11927_11951){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11926_11950,G__11927_11951))
;
goog.object.set(G__11926_11950,G__11927_11951,G__11928_11952);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__11929_11953 = clojure.data.equality_partition;
var G__11930_11954 = "array";
var G__11931_11955 = ((function (G__11929_11953,G__11930_11954){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__11929_11953,G__11930_11954))
;
goog.object.set(G__11929_11953,G__11930_11954,G__11931_11955);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__11932_11956 = clojure.data.equality_partition;
var G__11933_11957 = "function";
var G__11934_11958 = ((function (G__11932_11956,G__11933_11957){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11932_11956,G__11933_11957))
;
goog.object.set(G__11932_11956,G__11933_11957,G__11934_11958);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__11935_11959 = clojure.data.equality_partition;
var G__11936_11960 = "boolean";
var G__11937_11961 = ((function (G__11935_11959,G__11936_11960){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__11935_11959,G__11936_11960))
;
goog.object.set(G__11935_11959,G__11936_11960,G__11937_11961);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__11938_11962 = clojure.data.equality_partition;
var G__11939_11963 = "_";
var G__11940_11964 = ((function (G__11938_11962,G__11939_11963){
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
});})(G__11938_11962,G__11939_11963))
;
goog.object.set(G__11938_11962,G__11939_11963,G__11940_11964);
goog.object.set(clojure.data.Diff,"null",true);

var G__11965_11989 = clojure.data.diff_similar;
var G__11966_11990 = "null";
var G__11967_11991 = ((function (G__11965_11989,G__11966_11990){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11965_11989,G__11966_11990))
;
goog.object.set(G__11965_11989,G__11966_11990,G__11967_11991);

goog.object.set(clojure.data.Diff,"string",true);

var G__11968_11992 = clojure.data.diff_similar;
var G__11969_11993 = "string";
var G__11970_11994 = ((function (G__11968_11992,G__11969_11993){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11968_11992,G__11969_11993))
;
goog.object.set(G__11968_11992,G__11969_11993,G__11970_11994);

goog.object.set(clojure.data.Diff,"number",true);

var G__11971_11995 = clojure.data.diff_similar;
var G__11972_11996 = "number";
var G__11973_11997 = ((function (G__11971_11995,G__11972_11996){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11971_11995,G__11972_11996))
;
goog.object.set(G__11971_11995,G__11972_11996,G__11973_11997);

goog.object.set(clojure.data.Diff,"array",true);

var G__11974_11998 = clojure.data.diff_similar;
var G__11975_11999 = "array";
var G__11976_12000 = ((function (G__11974_11998,G__11975_11999){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__11974_11998,G__11975_11999))
;
goog.object.set(G__11974_11998,G__11975_11999,G__11976_12000);

goog.object.set(clojure.data.Diff,"function",true);

var G__11977_12001 = clojure.data.diff_similar;
var G__11978_12002 = "function";
var G__11979_12003 = ((function (G__11977_12001,G__11978_12002){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11977_12001,G__11978_12002))
;
goog.object.set(G__11977_12001,G__11978_12002,G__11979_12003);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__11980_12004 = clojure.data.diff_similar;
var G__11981_12005 = "boolean";
var G__11982_12006 = ((function (G__11980_12004,G__11981_12005){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11980_12004,G__11981_12005))
;
goog.object.set(G__11980_12004,G__11981_12005,G__11982_12006);

goog.object.set(clojure.data.Diff,"_",true);

var G__11983_12007 = clojure.data.diff_similar;
var G__11984_12008 = "_";
var G__11985_12009 = ((function (G__11983_12007,G__11984_12008){
return (function (a,b){
var fexpr__11987 = (function (){var G__11988 = clojure.data.equality_partition(a);
var G__11988__$1 = (((G__11988 instanceof cljs.core.Keyword))?G__11988.fqn:null);
switch (G__11988__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11988__$1)].join('')));

}
})();
return (fexpr__11987.cljs$core$IFn$_invoke$arity$2 ? fexpr__11987.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__11987.call(null,a,b));
});})(G__11983_12007,G__11984_12008))
;
goog.object.set(G__11983_12007,G__11984_12008,G__11985_12009);
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
