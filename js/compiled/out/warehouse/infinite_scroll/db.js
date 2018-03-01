// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.infinite_scroll.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
warehouse.infinite_scroll.db.filter_by_data = (function warehouse$infinite_scroll$db$filter_by_data(items,isd){
return items;
});
warehouse.infinite_scroll.db.should_load_next_page = (function warehouse$infinite_scroll$db$should_load_next_page(){
return (((1.5 * window.innerHeight) + window.pageYOffset) >= document.body.offsetHeight);
});
