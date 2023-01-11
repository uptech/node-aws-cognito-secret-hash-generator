#!/usr/bin/env zx

import { question } from "zx/.";
import { getSecretHash } from "./helpers.mjs";

const username = question("Username: ");
const clientSecret = question("Client Secret: ");
const clientId = question("Client ID: ");
const secretHash = getSecretHash(username, clientSecret, clientId);

console.log(`Secret Hash: ${secretHash}`)