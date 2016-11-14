const fs = require( 'fs' );
const sass = require( 'node-sass' );

sass.render({
    file: 'demo/demo.scss',
}, function( error, result ) {
    if ( !error ) {
        // No errors during the compilation, write this result on the disk
        fs.writeFile( 'demo/demo.css', result.css, function( err ) {
            if( err ){
                console.error( err );
            }
        });
    } else {
        console.error( error );
    }
 });
