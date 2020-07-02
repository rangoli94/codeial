module.exports.profile = function(req,res) {
   return res.render('users',{
       title: "Users Profile"
   });
}

module.exports.details = function(req,res) {
    return res.end('<h1>User Details</h1>')
}