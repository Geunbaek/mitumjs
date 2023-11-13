"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSecurityTokenFact = exports.CreateSecurityTokenItem = void 0;
const item_1 = require("./item");
const partition_1 = require("./partition");
const base_1 = require("../base");
const alias_1 = require("../../alias");
const node_1 = require("../../node");
const key_1 = require("../../key");
const types_1 = require("../../types");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
class CreateSecurityTokenItem extends item_1.STOItem {
    constructor(contract, granularity, defaultPartition, controllers, currency) {
        super(alias_1.HINT.STO.CREATE_SECURITY_TOKEN.ITEM, contract, currency);
        this.granularity = types_1.Big.from(granularity);
        this.defaultPartition = partition_1.Partition.from(defaultPartition);
        this.controllers = controllers ? controllers.map(a => key_1.Address.from(a)) : [];
        error_1.Assert.check(!this.granularity.isZero(), error_1.MitumError.detail(error_1.ECODE.INVALID_ITEM, "zero granularity"));
        error_1.Assert.check(node_1.Config.STO.ADDRESS_IN_CONTROLLERS.satisfy(this.controllers.length), error_1.MitumError.detail(error_1.ECODE.INVALID_ITEM, "controllers length out of range"));
        error_1.Assert.check((0, utils_1.hasOverlappingAddress)(this.controllers), error_1.MitumError.detail(error_1.ECODE.INVALID_ITEM, "duplicate address found in controllers"));
        this.controllers.forEach(a => error_1.Assert.check(this.contract.toString() !== a.toString(), error_1.MitumError.detail(error_1.ECODE.INVALID_ITEM, "contract is same with controller address")));
    }
    toBuffer() {
        return Buffer.concat([
            this.contract.toBuffer(),
            this.granularity.toBuffer("fill"),
            this.defaultPartition.toBuffer(),
            Buffer.concat(this.controllers.sort(utils_1.SortFunc).map(a => a.toBuffer())),
            this.currency.toBuffer(),
        ]);
    }
    toHintedObject() {
        return {
            ...super.toHintedObject(),
            granularity: this.granularity.v,
            default_partition: this.defaultPartition.toString(),
            controllers: this.controllers.sort(utils_1.SortFunc).map(a => a.toString()),
        };
    }
}
exports.CreateSecurityTokenItem = CreateSecurityTokenItem;
class CreateSecurityTokenFact extends base_1.OperationFact {
    constructor(token, sender, items) {
        super(alias_1.HINT.STO.CREATE_SECURITY_TOKEN.FACT, token, sender, items);
        error_1.Assert.check(new Set(items.map(it => it.toString())).size === items.length, error_1.MitumError.detail(error_1.ECODE.INVALID_ITEMS, "duplicate contract found in items"));
    }
    get operationHint() {
        return alias_1.HINT.STO.CREATE_SECURITY_TOKEN.OPERATION;
    }
}
exports.CreateSecurityTokenFact = CreateSecurityTokenFact;
//# sourceMappingURL=create-security-token.js.map