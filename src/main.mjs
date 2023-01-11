#!/usr/bin/env zx

import { question } from "zx";
import { getSecretHash } from "./helpers.mjs";

const username = await question("Username: ");
const clientSecret = await question("Client Secret: ");
const clientId = await question("Client ID: ");
const secretHash = getSecretHash(username, clientSecret, clientId);

console.log(`Secret Hash: ${secretHash}`)