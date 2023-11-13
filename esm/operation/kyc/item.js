"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KYCItem = void 0;
const base_1 = require("../base");
const key_1 = require("../../key");
const common_1 = require("../../common");
class KYCItem extends base_1.Item {
    constructor(hint, contract, currency) {
        super(hint);
        this.contract = key_1.Address.from(contract);
        this.currency = common_1.CurrencyID.from(currency);
    }
    toBuffer() {
        return this.contract.toBuffer();
    }
    toHintedObject() {
        return {
            ...super.toHintedObject(),
            contract: this.contract.toString(),
            currency: this.currency.toString(),
        };
    }
    toString() {
        return this.contract.toString();
    }
}
exports.KYCItem = KYCItem;
//# sourceMappingURL=item.js.map