angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/index',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.minhaCesta', {
    url: '/minha-cesta',
    views: {
      'tab2': {
        templateUrl: 'templates/minhaCesta.html',
        controller: 'minhaCestaCtrl'
      }
    }
  })

  .state('tabsController.minhaConta', {
    url: '/miha-conta',
    views: {
      'tab3': {
        templateUrl: 'templates/minhaConta.html',
        controller: 'minhaContaCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.pesquisar', {
    url: '/pesquisar',
    views: {
      'tab5': {
        templateUrl: 'templates/pesquisar.html',
        controller: 'pesquisarCtrl'
      }
    }
  })

  .state('tabsController.cadastro', {
    url: '/cadastro-usuario',
    views: {
      'tab1': {
        templateUrl: 'templates/cadastro.html',
        controller: 'cadastroCtrl'
      }
    }
  })

  .state('tabsController.esqueciMinhaSenha', {
    url: '/esqueci-minha-senha',
    views: {
      'tab1': {
        templateUrl: 'templates/esqueciMinhaSenha.html',
        controller: 'esqueciMinhaSenhaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/index')

  

});