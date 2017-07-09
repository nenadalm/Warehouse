// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.infinite_scroll.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
warehouse.infinite_scroll.db.filter_by_data = (function warehouse$infinite_scroll$db$filter_by_data(items,isd){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(isd) * cljs.core.cst$kw$records_DASH_per_DASH_page.cljs$core$IFn$_invoke$arity$1(isd)),items);
});
warehouse.infinite_scroll.db.should_load_next_page = (function warehouse$infinite_scroll$db$should_load_next_page(){
return (((1.5 * window.innerHeight) + window.pageYOffset) >= document.body.offsetHeight);
});
