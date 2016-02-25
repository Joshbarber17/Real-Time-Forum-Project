angular.module('rtfmApp').controller('threadCtrl', function($scope, threadRef, $firebaseObject, commentsRef, $firebaseArray){
  var thread = $firebaseObject(threadRef);
  thread.$bindTo($scope, 'thread');
  $scope.comments = $firebaseArray(commentsRef);
  console.log($scope.comments)

  $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });
    };
});
