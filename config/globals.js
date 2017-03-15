/**
 * Created by Harshit Sharma on 08-Feb-2017.
 */

// array of global variables
module.exports = {
    //db: 'mongodb://localhost/comp2068'};  // local mongodb
    db: 'mongodb://HarryKural:003334287HS@ds145649.mlab.com:45649/comp2068',
    facebook: {
        clientID: '1800952463562177',
        clientSecret: '87b5ae28226631f2a955f32b5a70b38f',
        callbackURL: 'http://localhost:3000/facebook/callback'
    },
    google: {
        clientID: '88822045338-ueelmta7rk2uhntkqqqrophqpud7i36e.apps.googleusercontent.com',
        clientSecret: '5hHo6yylZOv0VsUKIvEOdpKX',
        callbackURL: 'http://localhost:3000/google/callback'
    }};
