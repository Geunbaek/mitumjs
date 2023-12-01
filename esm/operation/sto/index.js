import { CreateSecurityTokenItem, CreateSecurityTokenFact } from "./create-security-token";
import { IssueSecurityTokenItem, IssueSecurityTokenFact } from "./issue-sercurity-token";
import { AuthorizeOperatorItem, AuthorizeOperatorFact } from "./authorize-operator";
import { RevokeOperatorItem, RevokeOperatorFact } from "./revoke-operator";
import { RedeemTokenItem, RedeemTokenFact } from "./redeem-token";
import { SetDocumentFact } from "./set-document";
import { TransferSecurityTokenPartitionItem, TransferSecurityTokenPartitionFact } from "./transfer-security-token-partition";
import { ContractGenerator, Operation } from "../base";
import { TimeStamp } from "../../types";
import { Assert, ECODE, MitumError } from "../../error";
export class STO extends ContractGenerator {
    constructor(networkID, api) {
        super(networkID, api);
    }
    authorizeOperator(contractAddr, sender, operator, partition, currency) {
        return new Operation(this.networkID, new AuthorizeOperatorFact(TimeStamp.new().UTC(), sender, [
            new AuthorizeOperatorItem(contractAddr, operator, partition, currency)
        ]));
    }
    createService(contractAddr, sender, data, currency) {
        const keysToCheck = ['granularity', 'defaultPartition', 'controllers'];
        keysToCheck.forEach((key) => {
            Assert.check(data[key] !== undefined, MitumError.detail(ECODE.INVALID_DATA_STRUCTURE, `${key} is undefined, check the createServiceData structure`));
        });
        return new Operation(this.networkID, new CreateSecurityTokenFact(TimeStamp.new().UTC(), sender, [
            new CreateSecurityTokenItem(contractAddr, data.granularity, data.defaultPartition, data.controllers, currency)
        ]));
    }
    issue(contractAddr, sender, receiver, partition, amount, currency) {
        return new Operation(this.networkID, new IssueSecurityTokenFact(TimeStamp.new().UTC(), sender, [
            new IssueSecurityTokenItem(contractAddr, receiver, amount, partition, currency)
        ]));
    }
    redeem(contractAddr, sender, tokenHolder, partition, amount, currency) {
        return new Operation(this.networkID, new RedeemTokenFact(TimeStamp.new().UTC(), sender, [
            new RedeemTokenItem(contractAddr, tokenHolder, amount, partition, currency)
        ]));
    }
    revokeOperator(contractAddr, sender, operator, partition, currency) {
        return new Operation(this.networkID, new RevokeOperatorFact(TimeStamp.new().UTC(), sender, [
            new RevokeOperatorItem(contractAddr, operator, partition, currency)
        ]));
    }
    setDocument(contractAddr, sender, title, uri, documentHash, currency) {
        return new Operation(this.networkID, new SetDocumentFact(TimeStamp.new().UTC(), sender, contractAddr, title, uri, documentHash, currency));
    }
    transferByPartition(contractAddr, sender, holder, receiver, partition, amount, currency) {
        return new Operation(this.networkID, new TransferSecurityTokenPartitionFact(TimeStamp.new().UTC(), sender, [
            new TransferSecurityTokenPartitionItem(contractAddr, holder, receiver, partition, amount, currency)
        ]));
    }
}
//# sourceMappingURL=index.js.map