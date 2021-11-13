// ======================= Timing
// var timeBar = documet.querySelector("#time");
setInterval(function() {
    var time = new Date();
    document.querySelector("#time").innerHTML  = time.toLocaleString();
},1000)

// =============== Wow js
new WOW().init();



// ====================== Product filter 
var filtBtn = document.querySelectorAll(".button");
var filterItems = document.querySelectorAll(".filterBox");
for(var i =0; i<filtBtn.length; i++) {
    filtBtn[i].addEventListener("click", function() {
        for(let j = 0; j<filtBtn.length; j++) {
            filtBtn[j].classList.remove("active");
        }
        this.classList.add("active");


        var dataFilter = this.getAttribute("data-filter");
        for(var k = 0; k<filterItems.length; k++) {
            filterItems[k].classList.add("hide");
            filterItems[k].classList.remove("active");

            if(filterItems[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
                filterItems[k].classList.remove("hide"); 
                filterItems[k].classList.add("active"); 
            }

        }
        this.classList.remove("hide");
    });    
}





// ======================= DROPDOWN FOR MOBILE DEVICE

var toggle = document.querySelector("#toggle");
toggle.addEventListener("click", () => {
   document.querySelector("#dropDown-toggle").classList.toggle("active");
});
var dropDown = document.querySelector(".dropdown");
dropDown.addEventListener("click", () => {
    dropDown.classList.toggle("active");
    document.querySelector(".dropdown-menu").classList.toggle("active");
});

// ======================= NAVBAR TOGGLE

var navBar = document.querySelector(".navBar");
var closeBar = document.querySelector(".close-btn");
navBar.addEventListener("click", () => {
    document.querySelector("nav").classList.add("active");
});
closeBar.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("active");
});

// ====================== STICKY NAV

var navigation = document.querySelector(".header-navigation");
window.addEventListener("scroll", () => {
    navigation.classList.toggle("sticky", scrollY > 250);
});


// =================================== Carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items : 1,
        autoPlay:true,
        loop:true,
        dots:true,
        responsive: true,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false, 
        navigation : true,
        navigationText : ["<i class='fas fa-chevron-left'> "," <i class='fas fa-chevron-right'>"],
        rewindNav : true,
        scrollPerPage : true,
    });

    $('.main-carousel').owlCarousel({
        items : 4,
        autoPlay:true,
        loop:true,
        dots:true,
        responsive: true,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false, 
        navigation : true,
        navigationText : ["<i class='fas fa-chevron-left'> "," <i class='fas fa-chevron-right'>"],
        rewindNav : true,
        scrollPerPage : true,
    });
    // $('#sell-slider').owlCarousel({
    //     items:3,
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     autoplay:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:2
    //         },
    //         600:{
    //             items:3
    //         }
    //     }
    // });
   
});


// ============================= PRODUCT SELECTOR SLIDER
var mainImg = document.querySelector("#mainImg");
function myImg(current) {
    mainImg.src = current.src;
}

// ====================== PRODUCT ADD & SUB CART
var add = document.querySelector("#add");
var sub = document.querySelector("#sub");
var count = 0;

add.addEventListener("click", () => {
    count++;
    document.getElementById("cart-input").value = count;
});
sub.addEventListener("click", () => {
    if(count <= 0) {
        count = 0;
    }else {
        count--;
    }
    document.getElementById("cart-input").value = count;
});

// ========================== PRODUCT TABS
var tabOne = document.querySelector("#tabOne");
var tabTwo = document.querySelector("#tabTwo");
var tabThree = document.querySelector("#tabThree");
var tabContentOne = document.querySelector("#tabContentOne");
var tabContentTwo = document.querySelector("#tabContentTwo");
var tabContentThree = document.querySelector("#tabContentThree");
 
tabOne.addEventListener("click", () => {
    tabOne.classList.add("active");
    tabTwo.classList.remove("active");
    tabThree.classList.remove("active");

    tabContentOne.classList.add("active");
    tabContentTwo.classList.remove("active");
    tabContentThree.classList.remove("active");
});
tabTwo.addEventListener("click", () => {
    tabOne.classList.remove("active");
    tabTwo.classList.add("active");
    tabThree.classList.remove("active");
    
    tabContentOne.classList.remove("active");
    tabContentTwo.classList.add("active");
    tabContentThree.classList.remove("active");
});
tabThree.addEventListener("click", () => {
    tabOne.classList.remove("active");
    tabTwo.classList.remove("active");
    tabThree.classList.add("active");

    tabContentOne.classList.remove("active");
    tabContentTwo.classList.remove("active");
    tabContentThree.classList.add("active");
});



// ==================== Product filter
// var list = document.querySelectorAll(".filterBtn");
// var itemBox = document.querySelectorAll(".filterBox");

// for(var i = 0; i<list.length; i++) {
//     list[i].addEventListener("click", function() {
//         for(var j = 0; j< list.length; j++){
//             list.classList.remove("open");
//         }
//         this.classList.add("open")
//     })
// }


// ================== Filter Images




// for(let i=0; i<filterList.length; i++) {
//     filterList[i].addEventListener("click", function() {
//         for(let j = 0; j<filterList.length; j++) {
//             filterList[j].classList.remove("active");
//         }
//         this.classList.add("active");

//         let dataFilter = this.getAttribute("data-filter");
//         for(let k = 0; k<filterItems.length; k++) {
//             filterItems[k].classList.add(hide);
//             if(filterItems[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
//                 filterItems[k].classList.add("active"); 
//             }
//         }
//     })
// }
