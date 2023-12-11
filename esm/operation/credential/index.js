import { CreateServiceFact } from "./create-service";
import { AddTemplateFact } from "./add-template";
import { AssignItem, AssignFact } from "./assign";
import { RevokeItem, RevokeFact } from "./revoke";
import { ContractGenerator, Operation } from "../base";
import { contract, getAPIData } from "../../api";
import { TimeStamp, URIString } from "../../types";
import { Assert, ECODE, MitumError } from "../../error";
export class Credential extends ContractGenerator {
    constructor(networkID, api) {
        super(networkID, api);
    }
    createService(contractAddr, sender, currency) {
        return new Operation(this.networkID, new CreateServiceFact(TimeStamp.new().UTC(), sender, contractAddr, currency));
    }
    addTemplate(contractAddr, sender, data, currency) {
        const keysToCheck = ['templateID', 'templateName', 'serviceDate', 'expirationDate', 'templateShare', 'multiAudit', 'displayName', 'subjectKey', 'description', 'creator'];
        keysToCheck.forEach((key) => {
            const s = data[key];
            Assert.check(s !== undefined, MitumError.detail(ECODE.INVALID_DATA_STRUCTURE, `${key} is undefined, check the templateData structure`));
            s === 'templateID' ? new URIString(s, 'templateID') : null;
        });
        return new Operation(this.networkID, new AddTemplateFact(TimeStamp.new().UTC(), sender, contractAddr, data.templateID, data.templateName, data.serviceDate, data.expirationDate, data.templateShare, data.multiAudit, data.displayName, data.subjectKey, data.description, data.creator, currency));
    }
    issue(contractAddr, sender, data, currency) {
        const keysToCheck = ['holder', 'templateID', 'id', 'value', 'validFrom', 'validUntil', 'did'];
        keysToCheck.forEach((key) => {
            const s = data[key];
            Assert.check(s !== undefined, MitumError.detail(ECODE.INVALID_DATA_STRUCTURE, `${key} is undefined, check the templateData structure`));
            s === 'id' ? new URIString(s, 'id') : null;
        });
        return new Operation(this.networkID, new AssignFact(TimeStamp.new().UTC(), sender, [
            new AssignItem(contractAddr, data.holder, data.templateID, data.id, data.value, data.validFrom, data.validUntil, data.did, currency)
        ]));
    }
    revoke(contractAddr, sender, holder, templateID, id, currency) {
        return new Operation(this.networkID, new RevokeFact(TimeStamp.new().UTC(), sender, [
            new RevokeItem(contractAddr, holder, templateID, id, currency)
        ]));
    }
    async getServiceInfo(contractAddr) {
        return await getAPIData(() => contract.credential.getIssuer(this.api, contractAddr));
    }
    async getCredentialInfo(contractAddr, templateID, credentialID) {
        return await getAPIData(() => contract.credential.getCredential(this.api, contractAddr, templateID, credentialID));
    }
    async getTemplate(contractAddr, templateID) {
        return await getAPIData(() => contract.credential.getTemplate(this.api, contractAddr, templateID));
    }
    async getAllCredentials(contractAddr, templateID) {
        return await getAPIData(() => contract.credential.getCredentials(this.api, contractAddr, templateID));
    }
    async claimCredential(contractAddr, holder) {
        return await getAPIData(() => contract.credential.getCredentialByHolder(this.api, contractAddr, holder));
    }
}
//# sourceMappingURL=index.js.map