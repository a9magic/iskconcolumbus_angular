'use strict';
/**
 * @ngdoc overview
 * @name iskconApp
 * @description
 * # iskconApp
 *
 * Main module of the application.
 */
angular
    .module('iskconApp', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'angular-loading-bar'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });

        $urlRouterProvider.otherwise('/dashboard/home');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'partials/dashboard/main.html',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'iskconApp',
                                files: [
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js',
                                    'scripts/directives/dashboard/schedule/schedule.js',
                                    'scripts/directives/footer/footer.js'
                                ]
                            }),
                            $ocLazyLoad.load(
                                {
                                    name: 'toggle-switch',
                                    files: ["../bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                        "../bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                    ]
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngAnimate',
                                    files: ['../bower_components/angular-animate/angular-animate.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngCookies',
                                    files: ['../bower_components/angular-cookies/angular-cookies.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngResource',
                                    files: ['../bower_components/angular-resource/angular-resource.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngSanitize',
                                    files: ['../bower_components/angular-sanitize/angular-sanitize.js']
                                })
                    }
                }
            })
            .state('dashboard.home', {
                url: '/home',
                controller: 'MainCtrl',
                templateUrl: 'partials/dashboard/home.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'iskconApp',
                            files: [
                                'scripts/controllers/main.js',
                                'scripts/directives/timeline/timeline.js',
                                'scripts/directives/notifications/notifications.js',
                                'scripts/directives/chat/chat.js',
                                'scripts/directives/dashboard/stats/stats.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.form', {
                templateUrl: 'partials/form.html',
                url: '/form'
            })
            .state('dashboard.blank', {
                templateUrl: 'partials/pages/blank.html',
                url: '/blank'
            })
            .state('login', {
                templateUrl: 'partials/pages/login.html',
                url: '/login'
            })
            //   .state('dashboard.sp1',{
            //     templateUrl:'partials/srila-prabhupada/founder-.html',
            //     url:'/srila-prabhupada',
            //     controller:'ChartCtrl',
            //     resolve: {
            //       loadMyFile:function($ocLazyLoad) {
            //         return $ocLazyLoad.load({
            //           name:'chart.js',
            //           files:[
            //             '../bower_components/angular-chart.js/dist/angular-chart.min.js',
            //             '../bower_components/angular-chart.js/dist/angular-chart.css'
            //           ]
            //         }),
            //         $ocLazyLoad.load({
            //             name:'iskconApp',
            //             files:['scripts/controllers/chartContoller.js']
            //         })
            //       }
            //     }
            // })
            .state('dashboard.table', {
                templateUrl: 'partials/table.html',
                url: '/table'
            })
            .state('dashboard.panels-wells', {
                templateUrl: 'partials/ui-elements/panels-wells.html',
                url: '/panels-wells'
            })
            .state('dashboard.buttons', {
                templateUrl: 'partials/ui-elements/buttons.html',
                url: '/buttons'
            })
            .state('dashboard.notifications', {
                templateUrl: 'partials/ui-elements/notifications.html',
                url: '/notifications'
            })
            .state('dashboard.typography', {
                templateUrl: 'partials/ui-elements/typography.html',
                url: '/typography'
            })
            .state('dashboard.icons', {
                templateUrl: 'partials/ui-elements/icons.html',
                url: '/icons'
            })
            .state('dashboard.grid', {
                templateUrl: 'partials/ui-elements/grid.html',
                url: '/grid'
            })

            .state('dashboard.founderAcharya', {
                templateUrl: 'partials/srila-prabhupada/founder-acharya.html',
                url: '/srila-prabhupada',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'iskconApp',
                            files: [
                                'scripts/controllers/main.js',
                                'scripts/directives/timeline/timeline.js',
                                'scripts/directives/notifications/notifications.js',
                                'scripts/directives/chat/chat.js',
                                'scripts/directives/dashboard/stats/stats.js',
                                'scripts/directives/dashboard/bubbles/bubble1.js'                            ]
                        })
                    }
                }
            })

            .state('dashboard.tithe', {
                templateUrl: 'partials/donate/tithe.html',
                url: '/tithe'
            })
            .state('dashboard.donate-new-temple', {
                templateUrl: 'partials/donate/donate-new-temple.html',
                url: '/donate-new-temple'
            })
            .state('dashboard.sponsor-sunday-feast', {
                templateUrl: 'partials/donate/sponsor-sunday-feast.html',
                url: '/sponsor-sunday-feast'
            })
            .state('dashboard.sponsor-book-distribution', {
                templateUrl: 'partials/donate/sponsor-book-distribution.html',
                url: '/sponsor-book-distribution'
            })

    }]);