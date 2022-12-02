const bld_btn = $("#bld_btn");
const manage_btn = $("#manage_btn");
const bottom = $(".bottom");

const bottom_container = {
    bld: {
        file_name: "../admin/bottom_bld.html",
        containerId: "#bottom_bld",
    },
    manage: {
        file_name: "../admin/bottom_manage.html",
        containerId: "#bottom_manage",
    },
};

bld_btn.click(() => {
    if ($("#bottom_manage").length > 0 && bottom.css("display", "block")) {
        bottom_load(
            bottom_container.bld.file_name,
            bottom_container.bld.containerId
        );
    } else {
        bottom_load(
            bottom_container.bld.file_name,
            bottom_container.bld.containerId,
            toggle_bottom
        );
    }
    return false;
});

manage_btn.click(() => {
    if ($("#bottom_bld").length > 0 && bottom.css("display", "block")) {
        bottom_load(
            bottom_container.manage.file_name,
            bottom_container.manage.containerId
        );
    } else {
        bottom_load(
            bottom_container.manage.file_name,
            bottom_container.manage.containerId,
            toggle_bottom
        );
    }
    return false;
});

$(document).on("click", "#fold_btn", () => {
    $("#content_box").toggle();
    document.querySelector(".bottom_btn").classList.toggle("active");
});

const bottom_load = (url, id, tg) => {
    bottom.load(url + " " + id, tg);
};

const toggle_bottom = () => {
    bottom.toggle();
};
