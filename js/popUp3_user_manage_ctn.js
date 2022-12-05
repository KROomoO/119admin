$(document).on("click", "#user_create_btn", () => {
    $("#popUp3_container").load(
        "../html/popUp3_user_manage.html #create_user"
    );
    blur1_toggle();
    $("#popUp3_container").show();
});

$(document).on("click", "#user_popUp_close_btn", () => {
    blur1_toggle();
    $("#popUp3_container").hide();
});

$(document).on("click", ".user_manage_input", (e) => {
    $("#popUp3_container").load("../html/popUp3_user_manage.html #edit_user");
    blur1_toggle();
    uncheckuserinput();
    $("#popUp3_container").show();
});

$(document).on("click", "#blur", () => {
    $("#popUp3_container").hide();
});

const blur1_toggle = () => {
    $("#blur").toggle();
};

const uncheckuserinput = () => {
    $("input:checkbox[class='user_manage_input']").prop("checked", false);
};
