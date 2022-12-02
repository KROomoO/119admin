$(document).on("click", ".history_detail_input", () => {
    blur2_toggle();
    $("#popUp2_container").load(
        "../admin/popup2_inspection.html #all_inspection"
    );
    uncheckedinput();
});

$(document).on("click", ".history_floor_input", () => {
    blur2_toggle();
    $("#popUp2_container").load(
        "../admin/popup2_inspection.html #floor_inspection"
    );
    uncheckedinput();
});

$(document).on("click", "#blur2", () => blur2_toggle());

const blur2_toggle = () => {
    $("#blur2").toggle();
    $("#popUp2_container").toggle();
};

$(document).on("click", ".Depth1", (e) => {
    toggleActive(e.target);
});

$(document).on("click", "#close_popUp2_btn", () => blur2_toggle());

$(document).on("click", "#floor_detail_close_btn", () => blur2_toggle());

const toggleActive = (item) => {
    $(item).toggleClass("active");
    $(item).children("ul").toggle();
};

$(document).on("click", ".floor_close_btn", () => blur2_toggle());

const uncheckedinput = () => {
    $("input:checkbox[class='history_detail_input']").prop("checked", false);
    $("input:checkbox[class='history_floor_input']").prop("checked", false);
};
