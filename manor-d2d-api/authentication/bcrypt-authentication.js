const bcrypt = require('bcrypt-nodejs');

const encrypt = password => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) throw reject(err);
            bcrypt.hash(password, salt, null, (err, hash) => {
                if (err) throw reject(err);
                return resolve(hash);;
            })
        })
    })
};

module.exports = {
    encrypt
}