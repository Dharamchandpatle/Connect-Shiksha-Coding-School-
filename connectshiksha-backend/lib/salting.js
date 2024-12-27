
const bcrypt = require('bcryptjs');

class CompareHash {
    constructor() {
       
    }
    async generateHash(data) {
        return await bcrypt.hash(data, 10);
    }

    async compareHash(data, hash) {
        return await bcrypt.compare(data, hash);
    }
}

module.exports = new CompareHash();