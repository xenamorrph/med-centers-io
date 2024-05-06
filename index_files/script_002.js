"use strict";

document.addEventListener('DOMContentLoaded', function(){
	var menuToggle = document.querySelector('.n-header__toggle');

	if(menuToggle){
		menuToggle.addEventListener('click', function(){
			var menu = document.querySelector('.h-menu'),
				title = menuToggle.querySelector('div'),
				label = title.textContent;

			title.textContent = menuToggle.dataset.label;
			menuToggle.dataset.label = label;
			
			if(menuToggle.classList.contains('active')){
				menuToggle.classList.remove('active');
				menu.removeAttribute('style');
			} else {
				var h = menu.querySelector('.h-menu__box').offsetHeight;
				menuToggle.classList.add('active');
				menu.style.height = h+'px';
			}
		});
	}

	var header = document.querySelector('.js-header-stick');

	if(header){
		window.addEventListener("scroll", headerStick);
	}

	function headerStick(){
		var scrollTop = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;

		if(scrollTop > 100){
			header.classList.add('stick');
		} else {
			header.classList.remove('stick');
		}
	}

	var search = document.querySelector('.n-header__search');

	if(search){
		search.querySelector('.h-search__toggle').addEventListener('click', function(){
			if(search.classList.contains('active')){
				search.classList.remove('active');
			} else {
				search.classList.add('active');
			}
		});
	}


	// if($('#_header').hasClass('new')){
	// 	$('#_header .important-information-block').appendTo($('#_header .n-header-banner'));
	// 	$('#_header .top_banner').appendTo($('#_header .n-header-banner'));
	// }
	
	if(document.getElementById('alert-toolbar')!=null){document.body.classList.add('show-alert-toolbar');}

    // $('#header-search').autocomplete({
    //     //serviceUrl: "/ajax/search.php",
    //     serviceUrl: "http://localhost/ajax.php",
    //     paramName: 'searchString',
    //     dataType: "json",
    //     type: "POST",
    //     deferRequestBy: 200,
    //     triggerSelectOnValidInput: false,
    //     transformResult: function(response) {
    //         var ob = {
    //             suggestions: $.map(response.suggestions, function(dataItem) {
    //                 return { value: dataItem.title, data: { url: dataItem.url, type: dataItem.type, sort: dataItem.sort} };
    //             })
    //         };
    //         ob.suggestions.sort(function(a, b){
    //             if (a.data.sort > b.data.sort) return 1;
    //             if (a.data.sort == b.data.sort) return 0;
    //             if (a.data.sort < b.data.sort) return -1;
    //         });
    //         return ob;
    //     },
    //     onSelect: function(suggestion) {
    //         window.location = suggestion.data.url;
    //     },
    //     onSearchStart: function(){
    //         $('.h-search__loading').show();
    //     },
    //     onSearchComplete: function(){
    //         $('.h-search__loading').hide();
    //     },
    //     groupBy: 'type',
    //     appendTo: '.h-search__result'
    // });

});