angular.module('rtfmApp').service('threadsService', function(fb){
  var firebaseRef = new Firebase('https://jbrtfmapp.firebaseio.com/');
  this.getThreads = function(){
    return new Firebase(fb.url + '/threads')
  };
  this.getThread = function(threadId) {
    return new Firebase(fb.url + '/threads/' + threadId)
  };
  this.getComments = function(threadId) {
    return new Firebase(fb.url + '/threads/' + threadId + '/comments')
  }
})
