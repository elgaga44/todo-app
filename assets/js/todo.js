// $(".list").on("click", function () {
//     $("span", this).fadeIn();
// })

// Ajouter todo en appuyant sur "Entrée"
$("input").keypress(function (event) {
    var key = event.which;
    if (key === 13) {
        var newItem = $("input").val();
        $("ul").append("<div class=" + "'list'" + "><li><i class=" + "'far fa-circle'" + "></i>" + "<span class=" + "'tobestriked'" + ">" + newItem + "</span></li><span class=" + "'delete'" + "><i class=" + "'far fa-trash-alt'" + " aria-hidden=" + "'true'" + "></i></span></div>");
        $("input").attr("placeholder", "A faire...");
        $("input").val("");
    }
});

// Ajouter todo en cliquant sur "Plus"
$(".plus").on("click", function () {
    var newItem = $("input").val();
        $("ul").append("<div class=" + "'list'" + "><li><i class=" + "'far fa-circle'" + "></i>" + "<span class=" + "'tobestriked'" + ">" + newItem + "</span></li><span class=" + "'delete'" + "><i class=" + "'far fa-trash-alt'" + " aria-hidden=" + "'true'" + "></i></span></div>");
        $("input").attr("placeholder", "A faire...");
        $("input").val("");
});

// Barrer todo et cocher checkbox
$(".container").on("click", ".far.fa-circle", function () {
    $(this).siblings("span.tobestriked").toggleClass("highlight");
    $(this).attr("class","fas fa-check-circle");
});

// Débarrer todo et décocher checkbox
$(".container").on("click", ".fas.fa-check-circle", function () {
    $(this).siblings("span.tobestriked").toggleClass("highlight");
    $(this).attr("class","far fa-circle");
});

// Supprimer todo en cliquant sur "Supprimer" 
$(".container").on("click", "span", function () {
    $(this).closest('.list').fadeOut( 500, function () {
        $(this).remove();
    });
});
// (Solution : il faut partir du container, qui n'est pas dynamique, puis faire un selector sur le ".list span" qui lui est dynamique car rajouté à chaque todo)
















