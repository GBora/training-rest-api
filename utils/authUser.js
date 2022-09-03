

const isValidUser = async (token) => {
    const tokenList = ['af202098-c6a1-4924-9187-1eddd07e0338', 'abd1685b-c4d5-406d-993e-7c4f9b35daf7', 'c5f8780d-dcaa-45e4-a565-439ae79a6ef7'];
    const isValid = tokenList.includes(token);
    console.log(tokenList[0]);
    console.error(`token ${token} is valid ${isValid}`);
    return isValid;
}

module.exports = isValidUser;