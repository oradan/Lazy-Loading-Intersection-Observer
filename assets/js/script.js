function ImgLazyLoading() {
    const lazyImgArr = document.querySelectorAll(".lazy-img");
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    function IntersectionCallBack(entries, observer) {
        entries.forEach(function (element) {
            if (element.isIntersecting) {
                let lazyImg = element.target,
                    lazyImgParent = lazyImg.parentElement;
                lazyImg.classList.add("no-visible-c");

                lazyImg.onload = function () {
                    lazyImgParent.style.height = lazyImg.height + 20 + "px";
                    lazyImg.classList.add("visible-c");
                    lazyImg.classList.remove("no-visible-c");
                }
                lazyImg.src = lazyImg.dataset.src;
                lazyImg.classList.remove("lazy-img");
                observer.unobserve(lazyImg);
            };

        });

    };

    const observer = new IntersectionObserver(IntersectionCallBack, options)
    lazyImgArr.forEach(function (element) {
        observer.observe(element);
    })
}

function getVisibleColumns() {
    var columnsArr = document.querySelectorAll(".col-img"),
        visibleColumns = [];
    columnsArr.forEach((element) => {
        var elementDisplayValue = window.getComputedStyle(element).display
        if (elementDisplayValue != "none") {
            visibleColumns.push(element);
        };
    });
    return visibleColumns
}

function getColumnMinHeight() {
    var columns = getVisibleColumns(),
        columnHeigths = [],
        minHeight = null;
    columns.forEach((element) => {
        var elementHeight = parseInt(window.getComputedStyle(element).height);
        columnHeigths.push(elementHeight);
    });
    minHeight = Math.min.apply(null, columnHeigths);
    return minHeight
}

function displayImages() {
    var columnArr = getVisibleColumns();

    imgArr.forEach((e, i) => {

        var imgCardHtml = document.createElement('div'),
            colMinHeight = getColumnMinHeight();
        imgCardHtml.innerHTML = '<div class="img-card"><img src="' + e.url + '" class="img-fluid"></div>';

        if (colMinHeight === 0) {
            columnArr[i].appendChild(imgCardHtml)  
        } else {
            columnArr.forEach((item)=>{
                var currElementHeight = parseInt(window.getComputedStyle(item).height),
                colMinHeight = getColumnMinHeight();
                if(currElementHeight===colMinHeight){
                    item.appendChild(imgCardHtml)
                }
    
    
            })
        }

 
    })




}

document.addEventListener("DOMContentLoaded", function () {
    ImgLazyLoading();
    displayImages()
});

const imgArr = [{
    id: 0,
    alt: "amsterda",
    title: "amsterda",
    url: "./assets/img/amsterda.jpg"
}, {
    id: 0,
    alt: "anemone",
    title: "anemone",
    url: "./assets/img/anemone.jpg"
}, {
    id: 0,
    alt: "apples",
    title: "apples",
    url: "./assets/img/apples.jpg"
}, {
    id: 0,
    alt: "asparagus",
    title: "asparagus",
    url: "./assets/img/asparagus.jpg"
}, {
    id: 0,
    alt: "vegetables-avocado",
    title: "vegetables-avocado",
    url: "./assets/img/vegetables-avocado.jpg"
}, {
    id: 0,
    alt: "baby-cat",
    title: "baby-cat",
    url: "./assets/img/baby-cat.jpg"
}, {
    id: 0,
    alt: "baby-ducks",
    title: "baby-ducks",
    url: "./assets/img/baby-ducks.jpg"
}, {
    id: 0,
    alt: "beetroot",
    title: "beetroot",
    url: "./assets/img/beetroot.jpg"
}, {
    id: 0,
    alt: "berries",
    title: "berries",
    url: "./assets/img/berries.jpg"
}, {
    id: 0,
    alt: "bing-cherries",
    title: "bing-cherries",
    url: "./assets/img/bing-cherries.jpg"
}, {
    id: 0,
    alt: "",
    title: "",
    url: "./assets/img/bird.jpg"
}, {
    id: 0,
    alt: "blueberries",
    title: "blueberries",
    url: "./assets/img/blueberries.jpg"
}, {
    id: 0,
    alt: "brothers",
    title: "brothers",
    url: "./assets/img/brothers.jpg"
}, {
    id: 0,
    alt: "brown-hors",
    title: "brown-hors",
    url: "./assets/img/brown-hors.jpg"
}, {
    id: 0,
    alt: "cherries-in-bascket",
    title: "cherries-in-bascket",
    url: "./assets/img/cherries-in-bascket.jpg"
}, {
    id: 0,
    alt: "cat-gray",
    title: "cat-gray",
    url: "./assets/img/cat-gray.jpg"
}, {
    id: 0,
    alt: "children-lauthing",
    title: "children-lauthing",
    url: "./assets/img/children-lauthing.jpg"
}, {
    id: 0,
    alt: "coconut-big",
    title: "coconut-big",
    url: "./assets/img/coconut-big.jpg"
}, {
    id: 0,
    alt: "coconut",
    title: "coconut",
    url: "./assets/img/coconut.jpg"
}, {
    id: 0,
    alt: "eating",
    title: "eating",
    url: "./assets/img/eating.jpg"
}, {
    id: 0,
    alt: "equine",
    title: "equine",
    url: "./assets/img/equine.jpg"
}, {
    id: 0,
    alt: "flower-orange",
    title: "flower-orange",
    url: "./assets/img/flower-orange.jpg"
}, {
    id: 0,
    alt: "flower-tultip",
    title: "flower-tultip",
    url: "./assets/img/flower-tultip.jpg"
}, {
    id: 0,
    alt: "giraffe-baby",
    title: "giraffe-baby",
    url: "./assets/img/giraffe-baby.jpg"
}, {
    id: 0,
    alt: "horse-in-the-nature",
    title: "horse-in-the-nature",
    url: "./assets/img/horse-in-the-nature.jpg"
}, {
    id: 0,
    alt: "horse-white",
    title: "horse-white",
    url: "./assets/img/horse-white.jpg"
}, {
    id: 0,
    alt: "horse-with-bride",
    title: "horse-with-bride",
    url: "./assets/img/horse-with-bride.jpg"
}, {
    id: 0,
    alt: "hyacinth",
    title: "hyacinth",
    url: "./assets/img/hyacinth.jpg"
}, {
    id: 0,
    alt: "insects",
    title: "insects",
    url: "./assets/img/insects.jpg"
}, {
    id: 0,
    alt: "jam-peach",
    title: "jam-peach",
    url: "./assets/img/jam-peach.jpg"
}, {
    id: 0,
    alt: "kid-model",
    title: "kid-model",
    url: "/assets/img/kid-model.jpg"
}, {
    id: 0,
    alt: "lilac-flower",
    title: "lilac-flower",
    url: "./assets/img/lilac-flower.jpg"
}, {
    id: 0,
    alt: "macarons",
    title: "macarons",
    url: "./assets/img/macarons.jpg"
}, {
    id: 0,
    alt: "orange",
    title: "orange",
    url: "./assets/img/orange.jpg"
}, {
    id: 0,
    alt: "pea-green",
    title: "pea-green",
    url: "./assets/img/pea-green.jpg"
}, {
    id: 0,
    alt: "piza-marrgeritta",
    title: "piza-marrgeritta",
    url: "./assets/img/piza-marrgeritta.jpg"
}, {
    id: 0,
    alt: "poppy-in-white",
    title: "poppy-in-white",
    url: "./assets/img/poppy-in-white.jpg"
}, {
    id: 0,
    alt: "potatoes-row",
    title: "potatoes-row",
    url: "./assets/img/potatoes-row.jpg"
}, {
    id: 0,
    alt: "pumpkin-in-backet",
    title: "pumpkin-in-backet",
    url: "./assets/img/pumpkin-in-backet.jpg"
}, {
    id: 0,
    alt: "rabbit-in-forest",
    title: "rabbit-in-forest",
    url: "./assets/img/rabbit-in-forest.jpg"
}, {
    id: 0,
    alt: "ranunculus-white",
    title: "ranunculus-white",
    url: "./assets/img/ranunculus-white.jpg"
}, {
    id: 0,
    alt: "ranunculus",
    title: "ranunculus",
    url: "./assets/img/ranunculus.jpg"
}, {
    id: 0,
    alt: "roses-in-vase",
    title: "roses-in-vase",
    url: "./assets/img/roses-in-vase.jpg"
}, {
    id: 0,
    alt: "roses-pinck",
    title: "roses-pinck",
    url: "./assets/img/roses-pinck.jpg"
}, {
    id: 0,
    alt: "roses",
    title: "roses",
    url: "./assets/img/roses.jpg"
}, {
    id: 0,
    alt: "round-leaved-bellflower",
    title: "round-leaved-bellflower",
    url: "./assets/img/round-leaved-bellflower.jpg"
}, {
    id: 0,
    alt: "schrecksee",
    title: "schrecksee",
    url: "./assets/img/schrecksee.jpg"
}, {
    id: 0,
    alt: "single-tomato",
    title: "single-tomato",
    url: "./assets/img/single-tomato.jpg"
}, {
    id: 0,
    alt: "sisters-babys",
    title: "sisters-babys",
    url: "./assets/img/sisters-babys.jpg"
}, {
    id: 0,
    alt: "smoothie-berry",
    title: "smoothie-berry",
    url: "./assets/img/smoothie-berry.jpg"
}, {
    id: 0,
    alt: "still-life",
    title: "still-life",
    url: "./assets/img/still-life.jpg"
}, {
    id: 0,
    alt: "strawberries",
    title: "strawberries",
    url: "./assets/img/strawberries.jpg"
}, {
    id: 0,
    alt: "suculentus-plant",
    title: "suculentus-plant",
    url: "./assets/img/suculentus-plant.jpg"
}, {
    id: 0,
    alt: "tangerines",
    title: "tangerines",
    url: "./assets/img/tangerines.jpg"
}, {
    id: 0,
    alt: "thiry-horses",
    title: "thiry-horses",
    url: "./assets/img/thiry-horses.jpg"
}, {
    id: 0,
    alt: "tomato-red",
    title: "tomato-red",
    url: "./assets/img/tomato-red.jpg"
}, {
    id: 0,
    alt: "tomatoes",
    title: "tomatoes",
    url: "./assets/img/tomatoes.jpg"
}, {
    id: 0,
    alt: "tulips-pinck",
    title: "tulips-pinck",
    url: "./assets/img/tulips-pinck.jpg"
}, {
    id: 0,
    alt: "vegetables-in-bascket",
    title: "vegetables-in-bascket",
    url: "./assets/img/vegetables-in-bascket.jpg"
}, {
    id: 0,
    alt: "water-lily",
    title: "water-lily",
    url: "./assets/img/water-lily.jpg"
}, {
    id: 0,
    alt: "white-horse-in-winter",
    title: "white-horse-in-winter",
    url: "./assets/img/white-horse-in-winter.jpg"
}, {
    id: 0,
    alt: "wild-flower",
    title: "wild-flower",
    url: "./assets/img/wild-flower.jpg"
}, {
    id: 0,
    alt: "wild-flowers",
    title: "wild-flowers",
    url: "./assets/img/wild-flowers.jpg"
}]