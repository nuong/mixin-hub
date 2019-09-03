$.wait = function (callback, seconds) {
    return window.setTimeout(callback, seconds * 1000);
}
function do_form_paging(f, e) {
    $("#" + f + " #paging").val(e);
    $("#" + f).submit();
}

function commaSeparateNumber(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
$(function () {
    $(".number").focusout(function () {
        var input_val_now = $(this).val();
      //  now = $.number(input_val_now, 9, '.', '');
        $(this).val(Big(input_val_now).toFixed(8));
    });

    // $('.scroll').mCustomScrollbar({scrollInertia:800,autoHideScrollbar:true});
    new ClipboardJS('.cb');



});

function notify(content, type, pos) {

    if (type === undefined)
        type = '';
    if (pos === undefined)
        pos = 'top-right';
    UIkit.notification(content, {
        status: type,
        pos: pos,
        group: true
    })

}

function init_upload(id, upload_url, old) {

    var control = $("#" + id);
    var temp = control.html();
    var percent = $('#' + id + "_percent");
    var thumb = $('#' + id + "_thumb");
    var label = control.find('label');

    var pid = $('#' + id + "_id");


    if (old) {

        percent.addClass("uk-hidden");
        thumb.css("background-image", "url(" + old + ")");
        thumb.removeClass("uk-hidden");
        init_upload(id, upload_url);
        return;
    }
    var settings = {
        type: 'json',
        action: upload_url, // upload url
        param: 'file',
        allow: '*.(jpg|jpeg|gif|png)', // allow only images

        loadstart: function () {
            percent.html("0%");
            percent.removeClass("uk-hidden");
            label.addClass("uk-hidden");
        },

        progress: function (per) {
            p = Math.ceil(per);
            percent.html(p + "%");
        },

        allcomplete: function (response) {
            if (response.status == 1) {
                percent.addClass("uk-hidden");
                thumb.css("background-image", "url(" + response.full + ")");
                pid.val(response.id);

                thumb.removeClass("uk-hidden");

                percent.html("100%");
                label.removeClass("uk-hidden");
            } else {
                control.html("");
                control.html(temp);
                init_upload(id, upload_url);
            }




        }
    };

    var select = UIkit.uploadSelect(control.find('input'), settings);

}