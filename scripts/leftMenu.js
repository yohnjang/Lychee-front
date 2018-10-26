/**
 * @description This module is used for the context menu.
 */

leftMenu = {

    _dom: $('.leftMenu')

};

leftMenu.dom = function(selector) {

    if (selector==null || selector==='') return leftMenu._dom;
    return leftMenu._dom.find(selector)

};

leftMenu.build = function () {
    let html = '';
    html += '<a id="button_settings_close" class="closebtn" >&times;</a>';
    html += '<a class="linkMenu" id="button_settings">'+ '<svg class="iconic"><use xlink:href="#cog"></use></svg>' + lychee.locale['SETTINGS'] + '</a>';
    html += '<a class="linkMenu" id="button_logs">' + build.iconic('align-left') + lychee.locale['LOGS'] + '</a>';
    html += '<a class="linkMenu" id="button_diagnostics">' + build.iconic('wrench') + lychee.locale['DIAGNOSTICS'] + '</a>';
    html += '<a class="linkMenu" id="button_about">' + build.iconic('info') + lychee.locale['ABOUT_LYCHEE'] + '</a>';
    html += '<a class="linkMenu" id="button_signout">' + build.iconic('account-logout') + lychee.locale['SIGN_OUT'] + '</a>';
    leftMenu._dom.html(html)
};

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
leftMenu.open = function () {
    leftMenu._dom.addClass('leftMenu__visible');
    $('.content').addClass('leftMenu__open');
};

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
leftMenu.close = function () {
    leftMenu._dom.removeClass('leftMenu__visible');
    $('.content').removeClass('leftMenu__open');
    multiselect.bind();
    albums.load();
};

leftMenu.bind = function() {

    // Event Name
    let eventName = lychee.getEventName();

    leftMenu.dom('#button_settings_close')    .on(eventName, leftMenu.close);
    leftMenu.dom('#button_settings')          .on(eventName, settings.open);
    leftMenu.dom('#button_signout')           .on(eventName, lychee.logout);
    leftMenu.dom('#button_logs')              .on(eventName, leftMenu.Logs);
    leftMenu.dom('#button_diagnostics')       .on(eventName, leftMenu.Diagnostics);
    leftMenu.dom('#button_about')             .on(eventName, () => window.open(lychee.website));

    return true

};

leftMenu.Logs = function() {
    if(lychee.api_V2)
    {
        // do nothing... for now
    }
    else
    {
        window.open(lychee.logs())
    }
};

leftMenu.Diagnostics = function() {
    if(lychee.api_V2)
    {
        // do nothing... for now
    }
    else
    {
        window.open(lychee.diagnostics())
    }
};