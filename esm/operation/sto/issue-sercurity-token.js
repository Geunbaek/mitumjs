import { STOItem } from "./item";
import { Partition } from "./partition";
import { OperationFact } from "../base";
import { HINT } from "../../alias";
import { Address } from "../../key";
import { Big } from "../../types";
import { Assert, ECODE, MitumError } from "../../error";
export class IssueSecurityTokenItem extends STOItem {
    receiver;
    amount;
    partition;
    constructor(contract, receiver, amount, partition, currency) {
        super(HINT.STO.ISSUE_SECURITY_TOKEN.ITEM, contract, currency);
        this.receiver = Address.from(receiver);
        this.amount = Big.from(amount);
        this.partition = Partition.from(partition);
        Assert.check(this.contract.toString() !== this.receiver.toString(), MitumError.detail(ECODE.INVALID_ITEM, "contract is same with receiver address"));
        Assert.check(!this.amount.isZero(), MitumError.detail(ECODE.INVALID_ITEM, "zero amount"));
    }
    toBuffer() {
        return Buffer.concat([
            super.toBuffer(),
            this.amount.toBuffer(),
            this.partition.toBuffer(),
            this.currency.toBuffer(),
        ]);
    }
    toHintedObject() {
        return {
            ...super.toHintedObject(),
            receiver: this.receiver.toString(),
            amount: this.amount.toString(),
            partition: this.partition.toString(),
        };
    }
}
export class IssueSecurityTokenFact extends OperationFact {
    constructor(token, sender, items) {
        super(HINT.STO.ISSUE_SECURITY_TOKEN.FACT, token, sender, items);
        Assert.check(new Set(items.map(it => it.toString())).size === items.length, MitumError.detail(ECODE.INVALID_ITEMS, "duplicate contract found in items"));
    }
    get operationHint() {
        return HINT.STO.ISSUE_SECURITY_TOKEN.OPERATION;
    }
}
//# sourceMappingURL=issue-sercurity-token.js.map