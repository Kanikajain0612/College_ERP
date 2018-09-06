IIITK_ERP.controller('UserController', ['$scope','$rootScope','UserService','$window','UIUtilityService','DataFactory', function ($scope,$rootScope,UserService,$window,UIUtilityService,DataFactory) {
    $scope.userProfile = JSON.parse(DataFactory.getResult('userdata'));

    $scope.updateProfile = function(){
        


    };

    







}]);
