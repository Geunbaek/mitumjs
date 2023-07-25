import { Address } from "../../account/address.js";
import { Boolean } from "../../types/boolean.js";
import { HintedObject, IBuffer, IHintedObject } from "../../types/interface.js";
import { Hint } from "../../types/property.js";
import { Assert, MitumError, ECODE } from "../../utils/error.js";
import { SortFunc } from "../../utils/math.js";

const WhitelistHint = "mitum-dao-whitelist";

export class Proposers implements IBuffer, IHintedObject {
  readonly hint: Hint;
  readonly active: Boolean;
  readonly accounts: Address[];

  constructor(active: boolean, accounts: string[]) {
    this.hint = new Hint(WhitelistHint);

    this.active = new Boolean(active);

    Assert.check(
      Array.isArray(accounts),
      MitumError.detail(
        ECODE.INVALID_PARAMETER,
        "The type of 'proposers' must be of type 'Array'."
      )
    );

    const proposersSet = new Set(accounts);
    Assert.check(
      proposersSet.size === accounts.length,
      MitumError.detail(
        ECODE.INVALID_PARAMETER,
        "A duplicate value exists in the proposers"
      )
    );

    this.accounts = accounts.map((p) => new Address(p));
  }

  toBuffer(): Buffer {
    return Buffer.concat([
      this.active.toBuffer(),
      Buffer.concat(this.accounts.sort(SortFunc).map((p) => p.toBuffer())),
    ]);
  }

  toHintedObject(): HintedObject {
    return {
      _hint: this.hint.toString(),
      active: this.active.v,
      accounts: this.accounts.sort(SortFunc).map((p) => p.toString()),
    };
  }
}
