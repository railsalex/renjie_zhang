'use strict';


//这个文件里的全部postsservice全都换成了post。
    angular.module('assignmentApp')
      .controller('PostsCtrl', ['$scope','Post', 
           function($scope,Post) {
    Post.getPosts()
        .success(function(posts) {
             $scope.posts = posts;
        });

    $scope.incrementUpvotes = function(post) {
       Post.upvotePost(post._id, post.upvotes + 1 )
          .success(function(updated_post) {
              post.upvotes = updated_post.upvotes
          })
    }
    $scope.addPost = function(){
        var post = {
            title: $scope.newPost.title,
            link: $scope.newPost.link,
            username : $scope.newPost.username,
            }
       Post.addPost(post)
          .success(function(added_post) {
             $scope.posts.push(added_post);
             $scope.newPost = { }
          });
    }
}]) 


// 'use strict';

// angular.module('assignmentApp')
//   .controller('PostsCtrl', function ($scope) {
//     $scope.message = 'Hello';
//   });
