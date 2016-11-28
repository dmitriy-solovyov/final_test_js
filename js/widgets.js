$(function () {

    var col1 = JSON.parse(localStorage.getItem("col1"));
    var col2 = JSON.parse(localStorage.getItem("col2"));

    $(".column").sortable().disableSelection();

    if(col1){
        for(var i = 0; i < col1.length; i++){
            var currentEl = ".column #" + col1[i];
            console.log(currentEl);
            var nextEl = ".column #" + col1[i + 1];
                $(nextEl).insertAfter($(currentEl));
        }

    }

    if(col2){
        for(var i = 0; i < col2.length; i++){
            var currentEl = ".column #" + col2[i];
            var nextEl = ".column #" + col2[i + 1];
            $(nextEl).insertAfter($(currentEl));
        }

    }

});

$(function () {

    $(".column").sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all",
        update: function( event, ui ) {
            var children = $(this).children();
            var items = [];
            for(var i = 0; i < children.length; i++){
                var child = $(children[i]).attr("id");
                items.push(child);
            }
            console.log(items);
            localStorage.setItem($(this).attr("id"), JSON.stringify(items));
        }
    });

    $(".portlet")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")
        .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

    $(".portlet-toggle").on("click", function () {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });


});