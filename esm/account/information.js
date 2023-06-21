var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export default {
    getAddressInfo(provider, address) {
        return __awaiter(this, void 0, void 0, function* () {
            if (provider === "") {
                return Promise.reject(new Error("RPC-URL is not provided."));
            }
            try {
                const res = yield axios.get(`${provider}/account/${address}`);
                return res;
            }
            catch (error) {
                return Promise.reject(new Error(`Error getting node information: ${error.message}`));
            }
        });
    },
    getOperationsByAddress(provider, address) {
        return __awaiter(this, void 0, void 0, function* () {
            if (provider === "") {
                return Promise.reject(new Error("RPC-URL is not provided."));
            }
            try {
                const res = yield axios.get(`${provider}/account/${address}/operations`);
                return res;
            }
            catch (error) {
                return Promise.reject(new Error(`Error getting node information: ${error.message}`));
            }
        });
    },
    getAccountInfoByPublickey(provider, publickey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (provider === "") {
                return Promise.reject(new Error("RPC-URL is not provided."));
            }
            try {
                const res = yield axios.get(`${provider}/accounts?publickey=${publickey}`);
                return res;
            }
            catch (error) {
                return Promise.reject(new Error(`Error getting node information: ${error.message}`));
            }
        });
    },
};
//# sourceMappingURL=information.js.map