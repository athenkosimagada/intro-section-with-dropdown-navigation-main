const close = document.querySelector('.close');
const open = document.querySelector('.open');
const menu = document.querySelector('.new_menu');
const feature = document.querySelector('.feature');
const featureItems = document.querySelectorAll('.feature-item');
const company = document.querySelector('.company');
const companyItems = document.querySelectorAll('.company-item');
const feature1 = document.querySelector('.feature1');
const company1 = document.querySelector('.company1');
const companyArrow = document.querySelector('.company-arrow');
const featureArrow = document.querySelector('.featute-arrow');
const companyArrow1 = document.querySelector('.company-arrow1');
const featureArrow1 = document.querySelector('.featute-arrow1');
const f = document.querySelector('.f');
const c = document.querySelector('.c');
const body = document.getElementById('body');

open.addEventListener('click', function() {
    menu.style.transform = `translateX(0)`;
    console.log(featureItems);
});

close.addEventListener('click', function() {
    menu.style.transform = `translateX(1000px)`;
});

feature.addEventListener('click', function() {
    featureItems.forEach(function(item) {
        if(!item.classList.contains('feature-open')){
            item.classList.add('feature-open');
            featureArrow.src = "./images/icon-arrow-up.svg";
        }
        else {
            item.classList.remove('feature-open');
            featureArrow.src = "./images/icon-arrow-down.svg";
        }
    });
});

company.addEventListener('click', function() {
    companyItems.forEach(function(item) {
        if(!item.classList.contains('company-open')){
            item.classList.add('company-open');
            companyArrow.src = "./images/icon-arrow-up.svg";
        }
        else {
            item.classList.remove('company-open');
            companyArrow.src = "./images/icon-arrow-down.svg";
        }
    });
});

feature1.addEventListener('click', function() {
    if(!feature1.classList.contains('feature-open1')){
        feature1.classList.add('feature-open1');
        featureArrow1.src = "./images/icon-arrow-up.svg";
        f.style.display = `block`;
    }
    else {
        feature1.classList.remove('feature-open1');
        featureArrow1.src = "./images/icon-arrow-down.svg";
        f.style.display = `none`;
    }
});

company1.addEventListener('click', function() {
    if(!company1.classList.contains('company-open1')){
        company1.classList.add('company-open1');
        companyArrow1.src = "./images/icon-arrow-up.svg";
        c.style.display = `block`;
    }
    else {
        company1.classList.remove('company-open1');
        companyArrow1.src = "./images/icon-arrow-down.svg";
        c.style.display = `none`;
    }
});

