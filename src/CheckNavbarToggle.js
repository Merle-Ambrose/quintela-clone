import $ from 'jquery';

export function navbarToggle() {
    $('#nonToggledNavbarLogo').hide();
}

export function onLoadNav() {
    // Add event listener which toggles visibility of the image
    window.setInterval(checkIfSmallMenuHidden, 300);

    function checkIfSmallMenuHidden() {
        if($('.navbar-toggler').is(':hidden')) {
            $('#nonToggledNavbarLogo').fadeIn();
        }
        else {
            $('#nonToggledNavbarLogo').hide();
        }
    }
    
}
