var use_ajax_form =1;
function wait  (callback, seconds) {
    return window.setTimeout(callback, seconds * 1000);
}

function common_paging(page) {
    $("#paging").val(page);
    $("#form_search").submit();
}


function do_form_paging(f, e) {
    $("#" + f + " #paging").val(e);
    $("#" + f).submit();
}

function google_autocomplete(input, output, restrict, bound, onchange) {
    var autocomplete = new google.maps.places.Autocomplete($("#" + input)[0], restrict);

    autocomplete.setOptions({
        strictBounds: true,
        types: ['geocode']
    })
    if (bound != null)
        autocomplete.setBounds(bound.getBounds());
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        $("#" + output).val(place.place_id);
        if (onchange != null)
            onchange();

    });
}

function google_map_marker(canvas, address, lat, lng, z) {
    var map;
    var geocoder = new google.maps.Geocoder();
    var marker;
    initialize();

    function updateMarkerPosition(latLng) {
        document.getElementById(lat).value = latLng.lat();
        document.getElementById(lng).value = latLng.lng();
        document.getElementById(z).value = map.getZoom();
    }

    function initialize() {
        $('#' + address).keypress(function() {
            if ($('#' + address).val().length > 4)
                codeAddress();
        });
        lat_temp = 0;
        if (document.getElementById(lat).value > 0)
            lat_temp = document.getElementById(lat).value;
        lng_temp = 0;
        if (document.getElementById(lng).value > 0)
            lng_temp = document.getElementById(lng).value;
        var latLng = new google.maps.LatLng(lat_temp, lng_temp);
        var zoom_ = 16;
        if (document.getElementById(z).value > 0)
            zoom_ = document.getElementById(z).value;
        //alert(zoom_);
        zoom_ = parseInt(zoom_);
        map = new google.maps.Map(document.getElementById(canvas), {
            zoom: zoom_,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        });
        marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: true,
        });
        updateMarkerPosition(latLng);
        google.maps.event.addListener(map, 'zoom_changed', function() {
            updateMarkerPosition(marker.getPosition());
        });
        google.maps.event.addListener(marker, 'dragend', function() {
            updateMarkerPosition(marker.getPosition());
        });
        google.maps.event.addListener(marker, 'click', function() {});
    }

    function codeAddress() {
        var add = document.getElementById(address).value;
        geocoder.geocode({
            'address': add
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                updateMarkerPosition(results[0].geometry.location);
            } else {}
        });
    }
}

function google_map(canvas, address, lat, lng, zoom) {
    var map;
    var geocoder = new google.maps.Geocoder();
    var latLng = new google.maps.LatLng(lat, lng);
    var zoom_ = zoom;
    map = new google.maps.Map(document.getElementById(canvas), {
        zoom: zoom_,
        center: latLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
    });
    if (address) {
        infowindow = new google.maps.InfoWindow({
            content: address
        });
        infowindow.open(map, marker);
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else
        var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function ajax_form(id, clear_form, confirm_msg, check) {
    if (!use_ajax_form)
        return;
    $("#" + id).validate({
        meta: "validate",
        errorElement: 'span',
        errorPlacement: function(error, element) {
            offset = element.position();
            element_to_insert = element;
            nexte = element.next();
            if (nexte.is("img") || nexte.is("span") || nexte.is("a")) {
                nexte = element.next();
                nextep = nexte.position();
                real_left = nexte.outerWidth(true) + nexte.position().left;
                //element_to_insert = element.next();
            } else
                real_left = element.outerWidth(true) + offset.left;
            offset = element.position();
            error.insertBefore(element_to_insert)
            error.addClass("error_msg");
            error.css('position', 'absolute');
            error.css('left', offset.left+3);
            error.css('top', offset.top+3);
        }
    });
    $('#' + id).attr("autocomplete", "off");
    $('#' + id).submit(

        function() {


            if (typeof tinyMCE !== 'undefined')
                tinyMCE.triggerSave();
            if (clear_form == "undefined")
                clear_form = false;
            var options = {
                clearForm: clear_form,
                dataType: 'json',
                success: showResponse,
                beforeSubmit: function() {




                    if ($("#" + id).validate({
                            meta: "validate"
                        }).form()) {
                      

                        if (typeof check === "function") {
                            if (!check()) return false;
                        }
                        if (confirm_msg)
                        if (!confirm(confirm_msg))
                            return false;
                        $("#" + id).find(".button").each(function(e) {
                            $(this).attr('old_value', $(this).val())
                            $(this).attr('old_value1', $(this).html())
                        });
                        $("#" + id).find(".button").attr('value', (txt_please_wait));
                        $("#" + id).find(".button").html(txt_please_wait);

                        $("#" + id + " :input").attr("disabled", true);
                        $("#" + id).find(':submit').attr("disabled", true);
                        return true;
                    }
                    return false;
                },
            }
            $(this).ajaxSubmit(options);
            return false;
        });

    function enable_control(c) {
        $(c).find('input').attr("disabled", false);
        $(c).find('textarea').attr("disabled", false);
        $(c).find('select').attr("disabled", false);
        $(c).find(':submit').attr("disabled", false);
    }

    function showResponse(responseText, statusText, b, c) {

        $("#" + id).find(".button").each(function(e) {
            $(this).attr('value', $(this).attr('old_value'));
            $(this).html($(this).attr('old_value1'))
        });

        if (responseText == null) {
            notify('SYSTEM ERORR, PLEASE TRY AGAIN');
            $(c).find(".captcha").attr("src",
                siteUrl + "/captcha/" + (new Date()).getTime());
            enable_control(c);
            return;
        }
        $(c).find("#captcha").val("");
        $(c).find(".captcha").val("");
        if (responseText.status == "redirect") {
            if (responseText.msg)
                notify(responseText.msg);
            document.location = responseText.url;
            return;
        }
        if (responseText.status == "refresh") {
            if (responseText.msg)
                notify(responseText.msg);
            document.location = document.location;
            return;
        }
        if (responseText.status == "javascript") {
            $(c).find(".captcha").attr("src",
                siteUrl + "/captcha/" + (new Date()).getTime());
            enable_control(c);
            if (responseText.msg)
                notify(responseText.msg);
            window.eval(responseText.code);

            return;
        }
        if (responseText.status == "ok") {
            alert(responseText.msg);
            document.location = responseText.url;
            return;
        }
        if (responseText.status == "error") {
            $(c).find(".captcha").attr("src",
                siteUrl + "/captcha/" + (new Date()).getTime());
            enable_control(c);
            notify(responseText.msg);
            if (responseText.focus)
                $(c).find("#" + responseText.focus).focus();
            return;
        }
        if (responseText.status == "error_box") {
            $(c).find(".captcha").attr("src",
                siteUrl + "/captcha/" + (new Date()).getTime());
            enable_control(c);
            $("#" + responseText.box_id)
                .html(
                    "<div id='error' class='uk-alert uk-alert-danger' data-uk-alert><a href='' class='uk-alert-close uk-close'></a><span>" +
                    responseText.msg + "</span></div>");
            return;
        }
        if (responseText.status == "html") {
            $(c).find(".captcha").attr("src",
                siteUrl + "/captcha/" + (new Date()).getTime());
            enable_control(c);
            $("#" + responseText.id).html(responseText.html);
            return;
        }
    }
}


function notify(msg,type){
    alert(msg);
}

function IsNumeric(sText) {
    var ValidChars = "0123456789.";
    var IsNumber = true;
    var Char;
    for (i = 0; i < sText.length && IsNumber == true; i++) {
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            IsNumber = false;
        }
    }
    return IsNumber;
}

function getid(id) {
    return document.getElementById(id);
}

function checkEmail(email) {
    patern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (!email.match(patern)) {
        return false;
    }
    return true;
}