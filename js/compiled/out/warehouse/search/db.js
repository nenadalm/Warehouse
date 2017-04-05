// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.db');
goog.require('cljs.core');
goog.require('lunr');
warehouse.search.db.index = window.lunr((function (){
return null;
}));
warehouse.search.db.initialize = (function warehouse$search$db$initialize(properties){
var seq__14770 = cljs.core.seq(properties);
var chunk__14771 = null;
var count__14772 = (0);
var i__14773 = (0);
while(true){
if((i__14773 < count__14772)){
var property = chunk__14771.cljs$core$IIndexed$_nth$arity$2(null,i__14773);
warehouse.search.db.index.field(property);

var G__14774 = seq__14770;
var G__14775 = chunk__14771;
var G__14776 = count__14772;
var G__14777 = (i__14773 + (1));
seq__14770 = G__14774;
chunk__14771 = G__14775;
count__14772 = G__14776;
i__14773 = G__14777;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14770);
if(temp__4657__auto__){
var seq__14770__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14770__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14770__$1);
var G__14778 = cljs.core.chunk_rest(seq__14770__$1);
var G__14779 = c__7491__auto__;
var G__14780 = cljs.core.count(c__7491__auto__);
var G__14781 = (0);
seq__14770 = G__14778;
chunk__14771 = G__14779;
count__14772 = G__14780;
i__14773 = G__14781;
continue;
} else {
var property = cljs.core.first(seq__14770__$1);
warehouse.search.db.index.field(property);

var G__14782 = cljs.core.next(seq__14770__$1);
var G__14783 = null;
var G__14784 = (0);
var G__14785 = (0);
seq__14770 = G__14782;
chunk__14771 = G__14783;
count__14772 = G__14784;
i__14773 = G__14785;
continue;
}
} else {
return null;
}
}
break;
}
});
warehouse.search.db.update_index = (function warehouse$search$db$update_index(documents){
var seq__14790 = cljs.core.seq(documents);
var chunk__14791 = null;
var count__14792 = (0);
var i__14793 = (0);
while(true){
if((i__14793 < count__14792)){
var document = chunk__14791.cljs$core$IIndexed$_nth$arity$2(null,i__14793);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__14794 = seq__14790;
var G__14795 = chunk__14791;
var G__14796 = count__14792;
var G__14797 = (i__14793 + (1));
seq__14790 = G__14794;
chunk__14791 = G__14795;
count__14792 = G__14796;
i__14793 = G__14797;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14790);
if(temp__4657__auto__){
var seq__14790__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14790__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14790__$1);
var G__14798 = cljs.core.chunk_rest(seq__14790__$1);
var G__14799 = c__7491__auto__;
var G__14800 = cljs.core.count(c__7491__auto__);
var G__14801 = (0);
seq__14790 = G__14798;
chunk__14791 = G__14799;
count__14792 = G__14800;
i__14793 = G__14801;
continue;
} else {
var document = cljs.core.first(seq__14790__$1);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__14802 = cljs.core.next(seq__14790__$1);
var G__14803 = null;
var G__14804 = (0);
var G__14805 = (0);
seq__14790 = G__14802;
chunk__14791 = G__14803;
count__14792 = G__14804;
i__14793 = G__14805;
continue;
}
} else {
return null;
}
}
break;
}
});
