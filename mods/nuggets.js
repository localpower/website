/*jslint maxerr: 1000, white: true, browser: true, devel: true, rhino: true, onevar: false, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, sub: true */
/*global $: false, FB: false, WebFont: false, jQuery: false, window: false, google: false, require: false, define: false */
define(["libs/jquery.qtip", "mods/messages"], function (qtip, messages) {
    return {
        setup: function () {
            $("ul.nugget_3c li").live("click", function () {
                window.location = $(this).children("a").first().attr("href");
            });
        }
    };
});

