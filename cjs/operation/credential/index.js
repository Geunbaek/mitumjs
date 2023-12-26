"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credential = void 0;
const create_service_1 = require("./create-service");
const add_template_1 = require("./add-template");
const assign_1 = require("./assign");
const revoke_1 = require("./revoke");
const base_1 = require("../base");
const api_1 = require("../../api");
const types_1 = require("../../types");
const error_1 = require("../../error");
class Credential extends base_1.ContractGenerator {
    constructor(networkID, api, delegateIP) {
        super(networkID, api, delegateIP);
    }
    createService(contractAddr, sender, currency) {
        return new base_1.Operation(this.networkID, new create_service_1.CreateServiceFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, currency));
    }
    addTemplate(contractAddr, sender, data, currency) {
        const keysToCheck = ['templateID', 'templateName', 'serviceDate', 'expirationDate', 'templateShare', 'multiAudit', 'displayName', 'subjectKey', 'description', 'creator'];
        keysToCheck.forEach((key) => {
            const s = data[key];
            error_1.Assert.check(s !== undefined, error_1.MitumError.detail(error_1.ECODE.INVALID_DATA_STRUCTURE, `${key} is undefined, check the templateData structure`));
            s === 'templateID' ? new types_1.URIString(s, 'templateID') : null;
        });
        return new base_1.Operation(this.networkID, new add_template_1.AddTemplateFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, data.templateID, data.templateName, data.serviceDate, data.expirationDate, data.templateShare, data.multiAudit, data.displayName, data.subjectKey, data.description, data.creator, currency));
    }
    issue(contractAddr, sender, data, currency) {
        const keysToCheck = ['holder', 'templateID', 'id', 'value', 'validFrom', 'validUntil', 'did'];
        keysToCheck.forEach((key) => {
            const s = data[key];
            error_1.Assert.check(s !== undefined, error_1.MitumError.detail(error_1.ECODE.INVALID_DATA_STRUCTURE, `${key} is undefined, check the templateData structure`));
            s === 'id' ? new types_1.URIString(s, 'id') : null;
        });
        return new base_1.Operation(this.networkID, new assign_1.AssignFact(types_1.TimeStamp.new().UTC(), sender, [
            new assign_1.AssignItem(contractAddr, data.holder, data.templateID, data.id, data.value, data.validFrom, data.validUntil, data.did, currency)
        ]));
    }
    revoke(contractAddr, sender, holder, templateID, id, currency) {
        return new base_1.Operation(this.networkID, new revoke_1.RevokeFact(types_1.TimeStamp.new().UTC(), sender, [
            new revoke_1.RevokeItem(contractAddr, holder, templateID, id, currency)
        ]));
    }
    getServiceInfo(contractAddr) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, api_1.getAPIData)(() => api_1.contract.credential.getIssuer(this.api, contractAddr, this.delegateIP));
        });
    }
    getCredentialInfo(contractAddr, templateID, credentialID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, api_1.getAPIData)(() => api_1.contract.credential.getCredential(this.api, contractAddr, templateID, credentialID, this.delegateIP));
        });
    }
    getTemplate(contractAddr, templateID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, api_1.getAPIData)(() => api_1.contract.credential.getTemplate(this.api, contractAddr, templateID, this.delegateIP));
        });
    }
    getAllCredentials(contractAddr, templateID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, api_1.getAPIData)(() => api_1.contract.credential.getCredentials(this.api, contractAddr, templateID, this.delegateIP));
        });
    }
    claimCredential(contractAddr, holder) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, api_1.getAPIData)(() => api_1.contract.credential.getCredentialByHolder(this.api, contractAddr, holder, this.delegateIP));
        });
    }
}
exports.Credential = Credential;
//# sourceMappingURL=index.js.map