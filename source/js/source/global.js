(function($, window, document) {

    window.SassConf2014 = window.SassConf2014 || {};

    SassConf2014.init = function() {
        
    };

    SassConf2014.Utils = {

        addWindowResizeHandler: function(handler) {
            if (window.addEventListener)
                window.addEventListener("resize", handler, false);
            else
                window.attachEvent("onresize", handler, this);
        },

        removeWindowResizeHandler: function(handler) {
            if (window.removeEventListener)
                window.removeEventListener("resize", handler, false);
            else
                window.detachEvent("onresize", handler, this);
        }

    };

    $(document).ready(function() {
        SassConf2014.init();
    });

})(jQuery, window, document);