(function( document, window ){
    'use strict';

    var container;

    function createEl( classes, innerHTML ) {
        var el = document.createElement( 'DIV' );
        el.className = classes || '';
        el.innerHTML = innerHTML || '';
        return el;
    }

    function getNumberOfColumns() {
        var tester = createEl( 'grid-preview-tester' );

        document.body.appendChild( tester );

        var content = window.getComputedStyle( tester, null ).getPropertyValue( 'content' );
        content = content.replace( /"/g, '' );
        document.body.removeChild( tester );

        return +content;
    }

    function createPreview(columns) {
        var container = createEl( 'grid-preview is-hidden' );
        var row = createEl( 'grid-preview__row' );

        for (var i = 0; i < columns; i++) {
            var col = createEl( 'grid-preview__col' );
            row.appendChild( col );
        }

        container.appendChild( row );
        document.body.appendChild( container );

        return container;
    }

    function createPreviewToggle() {
        var showPreview = false;

        var toggle = createEl( 'grid-preview-toggle', 'TOGGLE GRID PREVIEW' );
        toggle.addEventListener( 'click', function(){
            if ( showPreview ) {
                container.classList.add( 'is-hidden' );
            } else {
                container.classList.remove( 'is-hidden' );
            }
            showPreview = !showPreview;
        });

        document.body.appendChild( toggle );
    }

    function init() {
        var columns = getNumberOfColumns();

        if ( columns ) {
            container = createPreview( columns );
            createPreviewToggle();
        } else {
            console.warn( 'Grid preview failed. Did you set the correct sass variable?' );
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        init();
    });
})( document, window );
