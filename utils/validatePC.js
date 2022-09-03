const { Draft07 } = require('json-schema-library');
const pcSchema = require('../schemas/pcSchema.json');

const jsonSchema = new Draft07(pcSchema);


const isValidPC = (pc) => {
    const errors = jsonSchema.validate(pc);
    // console.error(errors)
    return errors.length === 0;
}

module.exports = isValidPC;