IIITK_ERP.controller('RegistrationController', ['$scope','$rootScope','UserService','$window','UIUtilityService','DataFactory','RegistrationService', function ($scope,$rootScope,UserService,$window,UIUtilityService,DataFactory,RegistrationService) {
    $scope.userProfile = JSON.parse(DataFactory.getResult('userdata'));
    $scope.user = {};

    $scope.step1_enable=true;
    $scope.step2_enable = false;
    $scope.step3_enable = false;
    $scope.step4_enable = false;
    $scope.step5_enable = false;

    $scope.validateParameters = function(){



    };
    $scope.step_one_Registration = function(){
            $scope.step1_enable = false;
            $scope.step2_enable = true;

            /*First step registration information */
            $scope.user.firstname = $scope.firstname;
            $scope.user.lastname = $scope.lastname;
            $scope.user.middlename = $scope.middlename;
            $scope.user.name = $scope.firstname + " " + $scope.middlename + " " +  $scope.lastname;
            $scope.user.branch = $scope.branch;
            $scope.user.category = $scope.category;
            $scope.user.phone = $scope.mobileno;
            $scope.user.dob = $scope.dob;
            $scope.user.email = $scope.email;
            $scope.user.gender = $scope.gender;

            console.log($scope.user);

    };

    $scope.step_two_Registration = function(){
					$scope.step2_enable = false;
					$scope.step3_enable = true;

					$scope.user.fathername = $scope.fathername;
					$scope.user.mothername = $scope.mothername;
					$scope.user.father_mobileno = $scope.father_mobileno;
					$scope.user.mother_mobileno = $scope.mother_mobileno;
					$scope.user.parent_email = $scope.parent_email;
			console.log($scope.user);

		};


    $scope.step_three_Registration= function(){
    	$scope.step3_enable = false;
    	$scope.step4_enable = true;


    	$scope.user.permanent_address = $scope.permanent_address;
    	$scope.user.hosteller = $scope.hosteller;
    	$scope.user.local_address = $scope.local_address
			console.log($scope.user);



    };


    $scope.step_four_Registration = function(){
					$scope.step4_enable = false;
					$scope.step5_enable = true;

					$scope.user.guardian_name = $scope.guardian_name;
					$scope.user.guardian_phone = $scope.guardian_phone;
					$scope.user.guardian_email = $scope.guardian_email;
					$scope.user.guardian_address = $scope.guardian_address;
					$scope.user.role = "Student";

				//$scope.registerStudent();

		};

    $scope.step_five_Registration = function(){


		}

    $scope.registerStudent = function(){
			RegistrationService.registerStudent($scope.user).then(function(data){
					if(data.length > 0){
						console.log("Registration successful");

					}


			})



    };






}]);
