"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurnFact = void 0;
const fact_1 = require("./fact");
const types_1 = require("../../types");
const alias_1 = require("../../alias");
const key_1 = require("../../key");
const error_1 = require("../../error");
class BurnFact extends fact_1.TokenFact {
    constructor(token, sender, contract, currency, target, amount) {
        super(alias_1.HINT.TOKEN.BURN.FACT, token, sender, contract, currency);
        this.target = key_1.Address.from(target);
        this.amount = types_1.Big.from(amount);
        error_1.Assert.check(key_1.Address.from(contract).toString() !== this.target.toString(), error_1.MitumError.detail(error_1.ECODE.INVALID_FACT, "contract is same with target address"));
        error_1.Assert.check(this.amount.compare(0) > 0, error_1.MitumError.detail(error_1.ECODE.INVALID_FACT, "zero amount"));
        this._hash = this.hashing();
    }
    toBuffer() {
        return Buffer.concat([
            super.toBuffer(),
            this.target.toBuffer(),
            this.amount.toBuffer(),
        ]);
    }
    toHintedObject() {
        return {
            ...super.toHintedObject(),
            target: this.target.toString(),
            amount: this.amount.toString(),
        };
    }
    get operationHint() {
        return alias_1.HINT.TOKEN.BURN.OPERATION;
    }
}
exports.BurnFact = BurnFact;
//# sourceMappingURL=burn.js.map