var Router = Backbone.Router.extend({
    routes: {
        "": "index"
    },

    initialize: function() {},

    index: function() {
        console.log("*** App working ***");
    }
});

$(function(){
    Resell.Router = new Router();
    Backbone.history.start({pushState: true});
});