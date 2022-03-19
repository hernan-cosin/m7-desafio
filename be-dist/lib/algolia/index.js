"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const algoliasearch_1 = require("algoliasearch");
const client = algoliasearch_1.default("XKXU80RKHF", process.env.algolia_api_key);
exports.index = client.initIndex("pets");
