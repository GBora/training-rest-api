const { Draft07 } = require('json-schema-library');
const userSchema = require('../schemas/userSchema.json');

const jsonSchema = new Draft07(userSchema);


const isValidUser = (user) => {
    const errors = jsonSchema.validate(user);
    // console.error(errors)
    return errors.length === 0;
}

module.exports = isValidUser;