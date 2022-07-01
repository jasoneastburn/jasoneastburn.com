// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'jason-eastburn',
    appId: '1:179707292893:web:4afa1103cf88d6b756bf34',
    databaseURL: 'https://jason-eastburn.firebaseio.com',
    storageBucket: 'jason-eastburn.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyA1S2gdSRtyeElvwARoUC4otpFQAg6XRys',
    authDomain: 'jason-eastburn.firebaseapp.com',
    messagingSenderId: '179707292893',
    measurementId: 'G-V815YKDS4L',
  },
  contentful: {
    space: '9dkvkqhriq3v',
    accessToken: 'drpq1t7qKuQq6gvwuTcWJ0EH0C3g7-LctDctcZmvyeY'
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
