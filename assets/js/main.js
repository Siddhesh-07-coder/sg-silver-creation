// Small JS to wire up year, query param for contact product, and mobile nav
(function () {
    function byId(id) { return document.getElementById(id) }
    var now = new Date();
    var year = now.getFullYear();
    var startYearEls = document.querySelectorAll('#start-year');
    startYearEls.forEach && startYearEls.forEach(function (el) { el.textContent = '{{YEAR}}' }); // keep placeholder for manual edit
    var copyrightEls = document.querySelectorAll('[id^="copyright-year"]');
    copyrightEls.forEach && copyrightEls.forEach(function (el) { el.textContent = year });


    // Fill product in contact form if present in query string
    try {
        var params = new URLSearchParams(window.location.search);
        var product = params.get('product');
        if (product) {
            var input = document.getElementById('product-input');
            if (input) input.value = decodeURIComponent(product);
        }
    } catch (e) { console.warn(e) }


    // mobile nav toggle
    var toggle = document.querySelector('.nav-toggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            var nav = document.querySelector('.nav');
            if (nav.style.display === 'block') nav.style.display = ''; else nav.style.display = 'block';
        })
    }
})();