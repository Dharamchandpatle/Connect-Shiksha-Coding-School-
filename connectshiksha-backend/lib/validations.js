const { badRequest,success } = require('./response');
class Validation {
    
    checkMandatoryFields(res,body,fields) {
        let mandatoryFields = [...fields];
        let missingFields = [];
        let status = true;
        mandatoryFields.forEach(field => {
            if (!body[field]) {
                missingFields.push(field);
            }
        });
        if (missingFields.length > 0) {
            return badRequest(res, `Missing fields: ${missingFields.join(", ")}`);
        }
        return status;
    }
}

module.exports = new Validation();