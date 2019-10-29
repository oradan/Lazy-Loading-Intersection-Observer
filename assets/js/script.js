function ImgLazyLoading() {
    const lazyImgArr = document.querySelectorAll(".lazy-img");
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    function IntersectionCallBack(entries, observer) {
        entries.forEach(function(element) {
            if (element.isIntersecting) {
                let lazyImg = element.target,
                    lazyImgParent = lazyImg.parentElement;
                lazyImg.classList.add("no-visible-c");

                lazyImg.onload = function() {
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
    lazyImgArr.forEach(function(element) {
        observer.observe(element);
    })
}

document.addEventListener("DOMContentLoaded", function () {
   
    ImgLazyLoading();
  
});