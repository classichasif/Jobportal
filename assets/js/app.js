
// sticky nav
var header = document.getElementsByClassName("main_header")[0];
var sticky = header.offsetTop;


window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
})

// active nav
const mobileNav = document.getElementById("mobile_nav")
const toggoleNav = document.getElementById("toggle_nav")
toggoleNav.addEventListener("click", function(){
    this.classList.toggle("activeToggle")
    mobileNav.classList.toggle("showMobileNav")
})

// mobile subnav

let subNavToggle = document.getElementById("jobCategory_item")
let MobilesubNav = document.getElementById("MobilesubNav")
subNavToggle.addEventListener("click", function(){
    MobilesubNav.classList.toggle("activeSub")
    this.classList.toggle("activeSingleMenu")
})

// counter

    let counter = document.getElementById("counter");
    if (counter != null) {
        var a = 0;
        $(window).scroll(function () {
        var oTop = $("#counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".count_textValue").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate(
                {
                countNum: countTo,
                },
                {
                duration: 2000,
                easing: "swing",
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                },
                }
            );
            });
            a = 1;
        }
        });
    }

    // slick slider

    $(document).ready(function () {
        $(".employer_slider").slick({
          dots: false,
          autoplay: false,
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          speed: 1000,
        });
      });

    $(document).ready(function () {
        $(".blog_slider").slick({
          dots: false,
          autoplay: false,
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          speed: 1000,
          responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      });

    $(document).ready(function () {
        $(".testimonial_slider").slick({
          dots: false,
          autoplay: true,
          arrows: false,
          infinite: true,
          slidesToShow: 3,
          speed: 1000,
          responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      });

    //   socket year
    let socketYear = document.getElementById("socket_year")
    let PresentYear = (year) =>{
      let date = new Date()
      let PreYear = date.getFullYear()
      year.innerHTML = PreYear
    }
    PresentYear(socketYear)

      // accordion js
  
      const faqHeader = document.getElementsByClassName("faq_header");
      
      [...faqHeader].forEach((headerInner,index) => {
        const faqItem = document.getElementsByClassName("faq_item")[index];
        headerInner.addEventListener("click", function(){
          let foundClass = document.querySelector(".activeFaq")
          if(!faqItem.classList.contains("activeFaq") && foundClass){
            foundClass.classList.remove("activeFaq")
          }
          faqItem.classList.toggle("activeFaq")
        })
      });

    // view_change btn
    const viewChange = document.getElementById("view_change")
    const gridBtn = document.getElementById("grid_btn")
    const listBtn = document.getElementById("list_btn")

    gridBtn.addEventListener("click", () => {
      viewChange.classList.add("grid_view")
      viewChange.classList.remove("list_view")
    })

    listBtn.addEventListener("click", () => {
      viewChange.classList.add("list_view")
      viewChange.classList.remove("grid_view")
    })

    // custom range

    const mySlider = document.getElementById("mySlider");

    const sliderValue = document.getElementById("slider-value");

    function slider(){
        valPercent = (mySlider.value / mySlider.max)*100;
        mySlider.style.background = `linear-gradient(to right, var(--mainColor) ${valPercent}%, #d5d5d5 ${valPercent}%)`;
        sliderValue.textContent = mySlider.value;
    }
    slider();
