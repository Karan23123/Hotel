//Navbar Js Start
window.onscroll = function () {
  scrollFunction();
  scrollFunction1();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar-pading").style.padding = "14px 0px";
    document.getElementById("navbar-top").style.boxShadow =
      "0 0 25px 9px #00000029";
  } else {
    document.getElementById("navbar-pading").style.padding = "24px 0px";
    document.getElementById("navbar-top").style.boxShadow = "";
  }
}

function scrollFunction1() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.querySelector(".scroll-to-top").style.visibility = "visible";
    document.querySelector(".scroll-to-top").style.transform =
      "translateY(-20px)";
  } else {
    document.querySelector(".scroll-to-top").style.visibility = "hidden";
    document.querySelector(".scroll-to-top").style.transform =
      "translateY(0px)";
  }
}

//Navbar Js Start

//First Slider Js Start
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//First Slider Js Start

//Second Slider Js Start
var swiper = new Swiper(".reviewswiper", {
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

//Second Slider Js Start

//Navbar Dropdown Js Start
$(function () {
  $(".dropdown-toggle").hover(
    function () {
      $(this).addClass("show"), $(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show");
      $(".dropdown-menu").removeClass("show");
    }
  );
});
//Navbar Dropdown Js Start

//Counter Js Start
$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 2000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});
//Counter Js Start

const slider = new Swiper(".slider", {
  loop: true,
  speed: 500,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    prevEl: ".button-prev",
    nextEl: ".button-next",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  on: {
    slideChangeTransitionStart: function () {
      setBeforePrevAfterNext(this);
    },
  },
});

function setBeforePrevAfterNext($swiper) {
  let prev = $swiper.el.querySelector(".swiper-slide-prev");
  let next = $swiper.el.querySelector(".swiper-slide-next");
  let duplicate_prev = $swiper.el.querySelector(".swiper-slide-duplicate-prev");
  let duplicate_next = $swiper.el.querySelector(".swiper-slide-duplicate-next");
  let before_prev = prev.previousElementSibling;
  let after_next = next.nextElementSibling;

  $swiper.el
    .querySelectorAll(".swiper-slide-before-prev")
    .forEach((element) => {
      element.classList.remove("swiper-slide-before-prev");
    });
  $swiper.el.querySelectorAll(".swiper-slide-after-next").forEach((element) => {
    element.classList.remove("swiper-slide-after-next");
  });

  before_prev.classList.add("swiper-slide-before-prev");
  after_next.classList.add("swiper-slide-after-next");

  if (duplicate_prev && duplicate_prev.previousElementSibling) {
    duplicate_prev.previousElementSibling.classList.add(
      "swiper-slide-before-prev"
    );
  }

  if (duplicate_next && duplicate_next.nextElementSibling) {
    duplicate_next.nextElementSibling.classList.add("swiper-slide-after-next");
  }
}

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});

$(document).ready(function () {
  $(window).scroll(function () {
    triggerSlideIns($(this), [$("div.itm"), $("div.ant-itm")]);
  });
});

$.getDocHeight = function () {
  return Math.max(
    $(document).height(),
    $(window).height(),
    document.documentElement.clientHeight
  );
};

$.getScrollPercentage = function () {
  return (
    100 *
    Math.min(
      ($(window).height() + $(window).scrollTop()) / $.getDocHeight(),
      $(window).scrollTop()
    )
  );
};

var triggerSlideIns = function (t, items) {
  for (var i = 0; i < items.length; i++) {
    if (
      $.getDocHeight() -
        $(window).height() -
        ($.getDocHeight() - items[i].offset().top) <=
      t.scrollTop()
    ) {
      if (!items[i].hasClass("transitionSlideIn")) {
        items[i].addClass("transitionSlideIn");
      }
    } else {
      items[i].removeClass("transitionSlideIn");
    }
  }
};
