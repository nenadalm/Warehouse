// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.db');
goog.require('cljs.core');
goog.require('lunr');
warehouse.search.db.index = window.lunr((function (){
return null;
}));
warehouse.search.db.initialize = (function warehouse$search$db$initialize(properties){
var seq__14725 = cljs.core.seq(properties);
var chunk__14726 = null;
var count__14727 = (0);
var i__14728 = (0);
while(true){
if((i__14728 < count__14727)){
var property = chunk__14726.cljs$core$IIndexed$_nth$arity$2(null,i__14728);
warehouse.search.db.index.field(property);

var G__14729 = seq__14725;
var G__14730 = chunk__14726;
var G__14731 = count__14727;
var G__14732 = (i__14728 + (1));
seq__14725 = G__14729;
chunk__14726 = G__14730;
count__14727 = G__14731;
i__14728 = G__14732;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14725);
if(temp__4657__auto__){
var seq__14725__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14725__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14725__$1);
var G__14733 = cljs.core.chunk_rest(seq__14725__$1);
var G__14734 = c__7491__auto__;
var G__14735 = cljs.core.count(c__7491__auto__);
var G__14736 = (0);
seq__14725 = G__14733;
chunk__14726 = G__14734;
count__14727 = G__14735;
i__14728 = G__14736;
continue;
} else {
var property = cljs.core.first(seq__14725__$1);
warehouse.search.db.index.field(property);

var G__14737 = cljs.core.next(seq__14725__$1);
var G__14738 = null;
var G__14739 = (0);
var G__14740 = (0);
seq__14725 = G__14737;
chunk__14726 = G__14738;
count__14727 = G__14739;
i__14728 = G__14740;
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
var seq__14745 = cljs.core.seq(documents);
var chunk__14746 = null;
var count__14747 = (0);
var i__14748 = (0);
while(true){
if((i__14748 < count__14747)){
var document = chunk__14746.cljs$core$IIndexed$_nth$arity$2(null,i__14748);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__14749 = seq__14745;
var G__14750 = chunk__14746;
var G__14751 = count__14747;
var G__14752 = (i__14748 + (1));
seq__14745 = G__14749;
chunk__14746 = G__14750;
count__14747 = G__14751;
i__14748 = G__14752;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14745);
if(temp__4657__auto__){
var seq__14745__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14745__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14745__$1);
var G__14753 = cljs.core.chunk_rest(seq__14745__$1);
var G__14754 = c__7491__auto__;
var G__14755 = cljs.core.count(c__7491__auto__);
var G__14756 = (0);
seq__14745 = G__14753;
chunk__14746 = G__14754;
count__14747 = G__14755;
i__14748 = G__14756;
continue;
} else {
var document = cljs.core.first(seq__14745__$1);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__14757 = cljs.core.next(seq__14745__$1);
var G__14758 = null;
var G__14759 = (0);
var G__14760 = (0);
seq__14745 = G__14757;
chunk__14746 = G__14758;
count__14747 = G__14759;
i__14748 = G__14760;
continue;
}
} else {
return null;
}
}
break;
}
});
