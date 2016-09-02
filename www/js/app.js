(function () {
  angular.module('starter', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/homepage');
      $stateProvider
        .state('homepage', {
          url: '/homepage',
          templateUrl: 'templates/homepage.html'
        })
      /**
       * uncomment to add states
      .state('new-state', {
        url: '/new-state',
        templateUrl: 'templates/new-state.html'
      })
        */

    })

    // region main
    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          // Don't remove this line unless you know what you are doing. It stops the viewport
          // from snapping when text inputs are focused. Ionic handles this internally for
          // a much nicer keyboard experience.
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });
  // endregion
})()