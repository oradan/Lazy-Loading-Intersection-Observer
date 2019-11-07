function ImgInfiniteScrolling() {
    const targetElement = document.getElementById('target-element'),
        options = {
            root: null,
            rootMargin: '200px',
            threshold: 0
        };

    function IntersectionCallBack(entries, observer) {
        entries.forEach(function (element) {
            if (element.isIntersecting) {
                var url = 'assets/data/data-img-',
                    rendomNumbers = [0, 10, 20, 30, 40, 50, 60],
                    rand = rendomNumbers[Math.floor(Math.random() * rendomNumbers.length)];
                getImageData(url + rand + '.json').then(function (data) {
                    displayImages(data);
                });
            };
        });
    };
    const observer = new IntersectionObserver(IntersectionCallBack, options);
    observer.observe(targetElement);

}

function getVisibleColumns() {
    var columnsArr = Array.prototype.slice.call(document.querySelectorAll(".col-img")),
        visibleColumns = columnsArr.filter(function (element) {
            return window.getComputedStyle(element).display !== "none"
        });
    return visibleColumns;
};

function getColumnMinHeight() {
    var minHeight = parseInt(window.getComputedStyle(getVisibleColumns()[0]).height);
    getVisibleColumns().forEach(function (element) {
        var elementHeight = parseInt(window.getComputedStyle(element).height);
        minHeight = (minHeight <= elementHeight) ? minHeight : elementHeight;
    });
    return minHeight;
};

function displayImages(data) {
    var imgArr = data;
    imgArr.forEach(function (e, i) {
        var img = new Image();
        img.classList.add('img-fluid');
        img.src = e.url;
        img.onload = function () {
            var smallestColumn = getVisibleColumns().find(function (e) {
                return getColumnMinHeight() === parseInt(window.getComputedStyle(e).height)
            });
            smallestColumn.appendChild(img);
            img.classList.add('visible-c');
        };
    });
};

function getImageData(url) {
    return fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            return data
        })
};

document.addEventListener("DOMContentLoaded", function () {
    // getImageData('assets/data/data-img-0.json').then(function (data) {
    //     displayImages(data);
    //  }).then(ImgInfiniteScrolling())
    // getColumnMinHeight()
    ImgInfiniteScrolling();
});