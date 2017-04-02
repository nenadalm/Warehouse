// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.db');
goog.require('cljs.core');
goog.require('lunr');
warehouse.search.db.index = window.lunr((function (){
return null;
}));
warehouse.search.db.initialize = (function warehouse$search$db$initialize(properties){
var seq__14761 = cljs.core.seq(properties);
var chunk__14762 = null;
var count__14763 = (0);
var i__14764 = (0);
while(true){
if((i__14764 < count__14763)){
var property = chunk__14762.cljs$core$IIndexed$_nth$arity$2(null,i__14764);
warehouse.search.db.index.field(property);

var G__14765 = seq__14761;
var G__14766 = chunk__14762;
var G__14767 = count__14763;
var G__14768 = (i__14764 + (1));
seq__14761 = G__14765;
chunk__14762 = G__14766;
count__14763 = G__14767;
i__14764 = G__14768;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14761);
if(temp__4657__auto__){
var seq__14761__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14761__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14761__$1);
var G__14769 = cljs.core.chunk_rest(seq__14761__$1);
var G__14770 = c__7491__auto__;
var G__14771 = cljs.core.count(c__7491__auto__);
var G__14772 = (0);
seq__14761 = G__14769;
chunk__14762 = G__14770;
count__14763 = G__14771;
i__14764 = G__14772;
continue;
} else {
var property = cljs.core.first(seq__14761__$1);
warehouse.search.db.index.field(property);

var G__14773 = cljs.core.next(seq__14761__$1);
var G__14774 = null;
var G__14775 = (0);
var G__14776 = (0);
seq__14761 = G__14773;
chunk__14762 = G__14774;
count__14763 = G__14775;
i__14764 = G__14776;
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
var seq__14781 = cljs.core.seq(documents);
var chunk__14782 = null;
var count__14783 = (0);
var i__14784 = (0);
while(true){
if((i__14784 < count__14783)){
var document = chunk__14782.cljs$core$IIndexed$_nth$arity$2(null,i__14784);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__14785 = seq__14781;
var G__14786 = chunk__14782;
var G__14787 = count__14783;
var G__14788 = (i__14784 + (1));
seq__14781 = G__14785;
chunk__14782 = G__14786;
count__14783 = G__14787;
i__14784 = G__14788;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14781);
if(temp__4657__auto__){
var seq__14781__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14781__$1)){
var c__7491__auto__ = cljs.core.chunk_first(seq__14781__$1);
var G__14789 = cljs.core.chunk_rest(seq__14781__$1);
var G__14790 = c__7491__auto__;
var G__14791 = cljs.core.count(c__7491__auto__);
var G__14792 = (0);
seq__14781 = G__14789;
chunk__14782 = G__14790;
count__14783 = G__14791;
i__14784 = G__14792;
continue;
} else {
var document = cljs.core.first(seq__14781__$1);
warehouse.search.db.index.update(cljs.core.clj__GT_js(document));

var G__14793 = cljs.core.next(seq__14781__$1);
var G__14794 = null;
var G__14795 = (0);
var G__14796 = (0);
seq__14781 = G__14793;
chunk__14782 = G__14794;
count__14783 = G__14795;
i__14784 = G__14796;
continue;
}
} else {
return null;
}
}
break;
}
});
