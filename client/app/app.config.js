import Home from './components/home/home';

function AppConfig($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('peachInterceptorAPI');

  $routeProvider
    .when('/home', {
      name: Home.name,
      template: Home.template,
      controller: Home.controllerName,
      controllerAs: Home.controllerAs,
      is_welcome_page: true // Reference only.  Change in DevPortal
    })
    .otherwise({
      redirectTo: '/home'
    });
}

AppConfig.$inject = ['$routeProvider', '$httpProvider'];

export default AppConfig;
