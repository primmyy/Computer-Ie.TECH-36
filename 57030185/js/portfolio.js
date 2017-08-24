/*
 Tooltip function
*/

$(function() {
    $('[data-tooltip="tooltip"]').tooltip({ trigger: 'hover' });
    $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });

})


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-id").style.display = "block";
    } else {
        document.getElementById("scroll-id").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrolltoTopFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}