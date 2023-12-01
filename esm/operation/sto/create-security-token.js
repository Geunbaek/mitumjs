import { STOItem } from "./item";
import { Partition } from "./partition";
import { OperationFact } from "../base";
import { HINT } from "../../alias";
import { Config } from "../../node";
import { Address } from "../../key";
import { Big } from "../../types";
import { Assert, ECODE, MitumError } from "../../error";
import { SortFunc, hasOverlappingAddress } from "../../utils";
export class CreateSecurityTokenItem extends STOItem {
    granularity;
    defaultPartition;
    controllers;
    constructor(contract, granularity, defaultPartition, controllers, currency) {
        super(HINT.STO.CREATE_SECURITY_TOKEN.ITEM, contract, currency);
        this.granularity = Big.from(granularity);
        this.defaultPartition = Partition.from(defaultPartition);
        this.controllers = controllers ? controllers.map(a => Address.from(a)) : [];
        Assert.check(!this.granularity.isZero(), MitumError.detail(ECODE.INVALID_ITEM, "zero granularity"));
        Assert.check(Config.STO.ADDRESS_IN_CONTROLLERS.satisfy(this.controllers.length), MitumError.detail(ECODE.INVALID_ITEM, "controllers length out of range"));
        Assert.check(hasOverlappingAddress(this.controllers), MitumError.detail(ECODE.INVALID_ITEM, "duplicate address found in controllers"));
        this.controllers.forEach(a => Assert.check(this.contract.toString() !== a.toString(), MitumError.detail(ECODE.INVALID_ITEM, "contract is same with controller address")));
    }
    toBuffer() {
        return Buffer.concat([
            this.contract.toBuffer(),
            this.granularity.toBuffer("fill"),
            this.defaultPartition.toBuffer(),
            Buffer.concat(this.controllers.sort(SortFunc).map(a => a.toBuffer())),
            this.currency.toBuffer(),
        ]);
    }
    toHintedObject() {
        return {
            ...super.toHintedObject(),
            granularity: this.granularity.v,
            default_partition: this.defaultPartition.toString(),
            controllers: this.controllers.sort(SortFunc).map(a => a.toString()),
        };
    }
}
export class CreateSecurityTokenFact extends OperationFact {
    constructor(token, sender, items) {
        super(HINT.STO.CREATE_SECURITY_TOKEN.FACT, token, sender, items);
        Assert.check(new Set(items.map(it => it.toString())).size === items.length, MitumError.detail(ECODE.INVALID_ITEMS, "duplicate contract found in items"));
    }
    get operationHint() {
        return HINT.STO.CREATE_SECURITY_TOKEN.OPERATION;
    }
}
//# sourceMappingURL=create-security-token.js.map