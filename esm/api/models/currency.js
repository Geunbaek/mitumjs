import axios from "axios";
import { IP } from "../../types";
import { CurrencyID } from "../../common";
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getCurrencies(api, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/currency`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getCurrency(api, currency, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/currency/${CurrencyID.from(currency).toString()}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
export default {
    getCurrencies,
    getCurrency,
};
//# sourceMappingURL=currency.js.map