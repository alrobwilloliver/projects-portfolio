$(function () {
    if (Modernizr.history) {
        // if history is supported do this

        // select nav element on click for a tag
        $("nav").delegate("a", "click", function () {

            _href = $(this).attr("href");

            // change the page url without page refresh

            history.pushState(null, null, _href);

            loadContent(_href);

        })

        var $mainContent = $("#main"),
            $pageWrap = $("#page-wrap"),
            baseHeight = 0,
            $el;

        //avoiding jumping when loading content
        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $pageWrap.height();

        function loadContent(href) {
            $mainContent.find("#guts").fadeOut(200, function () {
                $mainContent.hide().load(href + " #guts", function () {
                    $pageWrap.animate({
                        height: baseHeight + $mainContent.height() + "px"
                    })

                    $("nav a").removeClass("active");

                    $("nav a[href$='" + href + "']").addClass("active");

                })
            })
        }

        $(window).bind("popstate", function () {
            link = location.pathname.replace(/^.*[\\/]/, "");
            loadContent(link);
        });

    } else {
        // otherwise do this
    }
});