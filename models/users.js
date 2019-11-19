const connection = require("../db/connection");

exports.selectUserByUsername = (username) => {
 
  return connection("users").where("username", username).then(user => {
    
    if (user.length === 0) {
      return Promise.reject({
      status: 404,
      msg: 'Error status 404'
    })} else {return user}
  });

};
