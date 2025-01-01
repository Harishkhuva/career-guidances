// Select all menu items
const menuItems = document.querySelectorAll('.menu');

// Add click event listener to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            menuItems.forEach(menu => menu.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

//loading screen animation start
window.onload = function() {
    setTimeout(function() {
        var element = document.querySelector(".welcome-section");
        if (element) {
            element.style.display = "none";
        }
    }, 2900);
};

//loading screen animation over

//header sticky start

window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector(".main-navbar").classList.add("sticky");
    } else {  
        document.querySelector(".main-navbar").classList.remove("sticky");
    }
};

//header sticky over

//animated backgroudn start

window.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
        el: "#services-section",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x001f3f,
        backgroundColor: 0xffffff

    })
})

//animated background over

//tab section script start
function setActiveTab(clickedElement) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('activetabs'));
    clickedElement.classList.add('activetabs');
  }

function myfunction1(){
    document.getElementById("s-10th").style.display="flex";
    document.getElementById("s-12th").style.display="none";
    document.getElementById("s-bechlore").style.display="none";
    document.getElementById("s-master").style.display="None";
    const element = document.querySelector('.tab:nth-child(1)');
    setActiveTab(element);
}
function myfunction2(){
    document.getElementById("s-10th").style.display="none";
    document.getElementById("s-12th").style.display="flex";
    document.getElementById("s-bechlore").style.display="none";
    document.getElementById("s-master").style.display="None";
    const element = document.querySelector('.tab:nth-child(2)');
    setActiveTab(element);
}
function myfunction3(){
    document.getElementById("s-10th").style.display="none";
    document.getElementById("s-12th").style.display="none";
    document.getElementById("s-bechlore").style.display="flex";
    document.getElementById("s-master").style.display="None";
    const element = document.querySelector('.tab:nth-child(3)');
    setActiveTab(element);
}
function myfunction4(){
    document.getElementById("s-10th").style.display="none";
    document.getElementById("s-12th").style.display="none";
    document.getElementById("s-bechlore").style.display="none";
    document.getElementById("s-master").style.display="flex";
    const element = document.querySelector('.tab:nth-child(4)');
    setActiveTab(element);
}
function myfunctionclose(){
    document.getElementById("mobile-menu").style.display="none";
}

//tab section script end

//animation script start

const serviceElements = document.querySelectorAll('.service-1, .service-2, .service-3, .service-4, .service-5, .service-6, .service-7, .service-8, .service-9, .service-10, .service-11, .service-12');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });
  serviceElements.forEach(element => {
    observer.observe(element);
  });

  //animation script end
