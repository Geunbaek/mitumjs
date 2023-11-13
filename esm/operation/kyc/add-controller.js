"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddControllerFact = exports.AddControllerItem = void 0;
const item_1 = require("./item");
const base_1 = require("../base");
const alias_1 = require("../../alias");
const key_1 = require("../../key");
const error_1 = require("../../error");
class AddControllerItem extends item_1.KYCItem {
    constructor(contract, controller, currency) {
        super(alias_1.HINT.KYC.ADD_CONTROLLER.ITEM, contract, currency);
        this.controller = key_1.Address.from(controller);
        error_1.Assert.check(this.contract.toString() !== this.controller.toString(), error_1.MitumError.detail(error_1.ECODE.INVALID_ITEM, "contract is same with controller address"));
    }
    toBuffer() {
        return Buffer.concat([
            super.toBuffer(),
            this.controller.toBuffer(),
            this.currency.toBuffer(),
        ]);
    }
    toHintedObject() {
        return {
            ...super.toHintedObject(),
            controller: this.controller.toString(),
        };
    }
    toString() {
        return `${super.toString()}-${this.controller.toString()}`;
    }
}
exports.AddControllerItem = AddControllerItem;
class AddControllerFact extends base_1.OperationFact {
    constructor(token, sender, items) {
        super(alias_1.HINT.KYC.ADD_CONTROLLER.FACT, token, sender, items);
        error_1.Assert.check(new Set(items.map(it => it.toString())).size === items.length, error_1.MitumError.detail(error_1.ECODE.INVALID_ITEMS, "duplicate controller found in items"));
    }
    get operationHint() {
        return alias_1.HINT.KYC.ADD_CONTROLLER.OPERATION;
    }
}
exports.AddControllerFact = AddControllerFact;
//# sourceMappingURL=add-controller.js.map