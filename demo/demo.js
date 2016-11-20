(function(){
    'use strict';

    var container;

    function getNumberOfColumns() {
        var tester = document.createElement( 'DIV' );
        tester.className = 'grid-preview-tester';

        document.body.appendChild( tester );

        var content = window.getComputedStyle( tester, null ).getPropertyValue( 'content' );
        content = content.replace( /"/g, '' );
        document.body.removeChild( tester );

        return +content;
    }

    function createPreview(columns) {
        var container = document.createElement( 'DIV' );
        container.className = 'grid-preview is-hidden';

        var row = document.createElement( 'DIV' );
        row.className = 'grid-preview__row';

        for (var i = 0; i < columns; i++) {
            var col = document.createElement( 'DIV' );
            col.className = 'grid-preview__col';
            row.appendChild( col );
        }

        container.appendChild( row );

        document.body.appendChild( container );

        return container;
    }

    function createPreviewToggle() {
        var showPreview = false;

        var toggle = document.createElement( 'DIV' );
        toggle.className = 'grid-preview-toggle';
        toggle.innerHTML = 'TOGGLE GRID PREVIEW';
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

    var columns = getNumberOfColumns();

    if ( columns ) {
        container = createPreview( columns );
        createPreviewToggle();
    } else {
        console.warn( 'Grid preview failed. Did you set the correct sass variable?' );
    }

})();
