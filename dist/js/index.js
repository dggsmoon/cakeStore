"use strict";require(["./config"],function(){require(["jquery","swiper","goods","headfoot","masklayer","public"],function(e,n,i){new n(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!1},effect:"fade"});new i(3,e(".goods:eq(0)")),new i(3,e(".goods:eq(1)"))})});