var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );

var header = $('#overlay').html();
if ( window.location.search.match( /print-pdf/gi ) ) {
    setTimeout(function() {
        $('.pdf-page div.slide-background').prepend(header);
    }, 5000);
} else {
    $('.reveal').prepend(header);
}