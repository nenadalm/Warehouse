// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.db');
goog.require('cljs.core');
goog.require('lunr');
warehouse.search.db.index = window.lunr((function (){
return null;
}));
warehouse.search.db.initialize = (function warehouse$search$db$initialize(properties){
var seq__29718 = cljs.core.seq(properties);
var chunk__29719 = null;
var count__29720 = (0);
var i__29721 = (0);
while(true){
if((i__29721 < count__29720)){
var property = chunk__29719.cljs$core$IIndexed$_nth$arity$2(null,i__29721);
warehouse.search.db.index.field(property);

var G__29722 = seq__29718;
var G__29723 = chunk__29719;
var G__29724 = count__29720;
var G__29725 = (i__29721 + (1));
seq__29718 = G__29722;
chunk__29719 = G__29723;
count__29720 = G__29724;
i__29721 = G__29725;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__29718);
if(temp__4657__auto__){
var seq__29718__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29718__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__29718__$1);
var G__29726 = cljs.core.chunk_rest(seq__29718__$1);
var G__29727 = c__7398__auto__;
var G__29728 = cljs.core.count(c__7398__auto__);
var G__29729 = (0);
seq__29718 = G__29726;
chunk__29719 = G__29727;
count__29720 = G__29728;
i__29721 = G__29729;
continue;
} else {
var property = cljs.core.first(seq__29718__$1);
warehouse.search.db.index.field(property);

var G__29730 = cljs.core.next(seq__29718__$1);
var G__29731 = null;
var G__29732 = (0);
var G__29733 = (0);
seq__29718 = G__29730;
chunk__29719 = G__29731;
count__29720 = G__29732;
i__29721 = G__29733;
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
var seq__29738 = cljs.core.seq(documents);
var chunk__29739 = null;
var count__29740 = (0);
var i__29741 = (0);
while(true){
if((i__29741 < count__29740)){
var document = chunk__29739.cljs$core$IIndexed$_nth$arity$2(null,i__29741);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__29742 = seq__29738;
var G__29743 = chunk__29739;
var G__29744 = count__29740;
var G__29745 = (i__29741 + (1));
seq__29738 = G__29742;
chunk__29739 = G__29743;
count__29740 = G__29744;
i__29741 = G__29745;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__29738);
if(temp__4657__auto__){
var seq__29738__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29738__$1)){
var c__7398__auto__ = cljs.core.chunk_first(seq__29738__$1);
var G__29746 = cljs.core.chunk_rest(seq__29738__$1);
var G__29747 = c__7398__auto__;
var G__29748 = cljs.core.count(c__7398__auto__);
var G__29749 = (0);
seq__29738 = G__29746;
chunk__29739 = G__29747;
count__29740 = G__29748;
i__29741 = G__29749;
continue;
} else {
var document = cljs.core.first(seq__29738__$1);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__29750 = cljs.core.next(seq__29738__$1);
var G__29751 = null;
var G__29752 = (0);
var G__29753 = (0);
seq__29738 = G__29750;
chunk__29739 = G__29751;
count__29740 = G__29752;
i__29741 = G__29753;
continue;
}
} else {
return null;
}
}
break;
}
});
