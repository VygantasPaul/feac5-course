const express    = require( 'express' );
const mongoose   = require( 'mongoose' );
const bodyParser = require( 'body-parser' );

const app  = express();
const PORT = process.env.PORT || 3120;


mongoose.connect( 'mongodb+srv://vygantas01:vygantas01@cluster0.uk5gsno.mongodb.net/Home_services' ).then( () => console.log( 'Prisijungta prie MongoDB' ) ).catch( ( err ) => console.error( 'Klaida jungiantis prie MongoDB:', err ) );

app.use( bodyParser.json() );

// Maršrutų importavimas
// eslint-disable-next-line no-undef
const userRoutes    = require( './routes/userRoutes' );
// eslint-disable-next-line no-undef
const bookingRoutes = require( './routes/booksRoutes' );
// Naudoti maršrutus

app.use( '/users/', userRoutes );
app.use( '/books/', bookingRoutes ); // Pridėti knygos maršrutus

app.listen( PORT, () => {
    console.log( `Serveris paleistas ant porto ${ PORT }` );
} );
