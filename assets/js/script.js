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
                console.log(rand)
                getImageData(url + rand + '.json').then(function (data) {
                    displayImages(data)
                })
            };

        });

    };

    const observer = new IntersectionObserver(IntersectionCallBack, options)
    observer.observe(targetElement);

}


function getVisibleColumns() {
    var columnsArr = document.querySelectorAll(".col-img"),
        visibleColumns = [];
    columnsArr.forEach(function (element) {
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
    columns.forEach(function (element) {
        var elementHeight = parseInt(window.getComputedStyle(element).height);
        columnHeigths.push(elementHeight);
    });
    minHeight = Math.min.apply(null, columnHeigths);
    return minHeight
}

function displayImages(data) {
    var columnArr = getVisibleColumns(),
        imgArr = data;
    imgArr.forEach(function (e, i) {
        var img = new Image();
        img.classList.add('img-fluid');
        img.src = e.url;
        img.onload = function () {
            colMinHeight = getColumnMinHeight();
            var smallestColumn = columnArr.find(function (e) {
                return colMinHeight === parseInt(window.getComputedStyle(e).height)
            });

            smallestColumn.appendChild(img);
            img.classList.add('visible-c');

        }

    })


}

function getImageData(url) {
    return fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            return data
        })
}

document.addEventListener("DOMContentLoaded", function () {
    // getImageData('assets/data/data-img-0.json').then(function (data) {
    //     displayImages(data);
    //  }).then(ImgInfiniteScrolling())

    ImgInfiniteScrolling();

});