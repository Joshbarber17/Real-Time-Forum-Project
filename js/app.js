angular.module('rtfmApp', ['ui.router', 'firebase'])
.constant("fb", {url: 'https://jbrtfmapp.firebaseio.com/'})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('threads', {
    url: '/threads',
    templateUrl: '/views/threads.html',
    controller: 'threadsCtrl',
    resolve: {
      threadsRef: function(threadsService) {
        return threadsService.getThreads();
      }
    }
  })
  .state('thread', {
    url: '/thread/:threadId',
    templateUrl: '/views/thread.html',
    controller: 'threadCtrl',
    resolve: {
      threadRef: function(threadsService, $stateParams) {
        return threadsService.getThread($stateParams.threadId)
      },
      commentsRef: function(threadsService, $stateParams) {
        return threadsService.getComments($stateParams.threadId)
      }
    }
  })
  $urlRouterProvider.otherwise('/threads');
})
