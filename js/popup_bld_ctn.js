$(document).on("click", "#sample_bld_btn", () => {
    blur_popUp_toggle();
    $("#popUp_container").load("popup_bld.html #popUp_bld_detail");
    $("#detail_content_container").load("popup_bld.html #popUp_bld1");
    $("#popUp_container").show();
});

$(document).on("click", "#bld_detail_btn", () => {
    $("#detail_content_container").load("popup_bld.html #popUp_bld1");
    toggle_btn_bg($("#bld_detail_btn"), $("#bld_history_btn"));
});

$(document).on("click", "#bld_history_btn", () => {
    $("#detail_content_container").load("popup_bld.html #popUp_bld2");
    $("#bld_photo").hide();
    toggle_btn_bg($("#bld_history_btn"), $("#bld_detail_btn"));
});

$(document).on("click", "#blur", () => {
    blur_popUp_toggle();
    $("#popUp_container").hide();
});

$(document).on("click", "#bld_photo", () => {
    $("#popUp_photo").show();
    $("#preview_photo").attr("src", $("#photo_list_item1").attr("src"));
});

$(document).on("click", "#popUp_photo_close_btn", () => {
    $("#popUp_photo").hide();
});

$(document).on("click", ".photo_list_item", (e) => {
    $("#preview_photo").attr("src", e.target.src);
});

$(document).on("click", "#close_popUp1", () => {
    $("#blur").toggle();
    $("#popUp_container").hide();
});

const blur_popUp_toggle = () => {
    $("#blur").toggle();
    $("popUp_photo").hide();
};

const toggle_btn_bg = (able, disable) => {
    able.addClass("active");
    disable.removeClass("active");
};
