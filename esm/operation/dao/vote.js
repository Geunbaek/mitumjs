"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteFact = void 0;
const fact_1 = require("./fact");
const types_1 = require("../../types");
const alias_1 = require("../../alias");
class VoteFact extends fact_1.DAOFact {
    constructor(token, sender, contract, proposalID, vote, currency) {
        super(alias_1.HINT.DAO.VOTE.FACT, token, sender, contract, proposalID, currency);
        this.vote = types_1.Big.from(vote);
        this._hash = this.hashing();
    }
    toBuffer() {
        return Buffer.concat([
            super.toBuffer(),
            this.vote.toBuffer(),
            this.currency.toBuffer(),
        ]);
    }
    toHintedObject() {
        return {
            ...super.toHintedObject(),
            vote: this.vote.v,
        };
    }
    get operationHint() {
        return alias_1.HINT.DAO.VOTE.OPERATION;
    }
}
exports.VoteFact = VoteFact;
//# sourceMappingURL=vote.js.map