var userOperations = require(__BASE__+"modules/database/accessors/user_operations");

var getUsers = function(parameters){
    return userOperations.getUsers({email: parameters.useremail, password: parameters.userpass}, {_id:1,firstname:1, lastname:1, email: 1,phone:1 ,profile_pic:1})
        .then(function(data){
            if(data){
                return data;
            }else{
                throw new Error('No User exists with given useremail');
            }
        }).catch(function(error){
           console.log("Error in get Users: ",error);
        });

};
var getLoggedInUser = function(parameters){
    return userOperations.getUsers({email: parameters.useremail})
        .then(function(data){
            if(data){
                return data;
            }else{
                throw new Error('No User exists with given useremail');
            }
        }).catch(function(error){
            console.log("Error in get Users: ",error);
        });

};

var registerUser = function(parameters){
    console.log(parameters);
    return userOperations.createUser(parameters)
        .then(function(data){
            if(data){
                return data;
            }else{
                throw new Error('Cant create user with the given credentials');
            }
        }).catch(function(error){
            console.log("Error in createUser",error);
        })
};

var updateProfilePic = function(parameters){
    console.log(parameters);

    return userOperations.updateProfilePic(parameters)
        .then(function(data){
            if(data){
                return data;
            }
        }).catch(function(err){
            console.log(err);

        })
}







module.exports = {
  getUsers:getUsers,
  getLoggedInUser:getLoggedInUser,
  registerUser:registerUser,
  updateProfilePic:updateProfilePic
};