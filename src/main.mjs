#!/usr/bin/env zx

import { question } from "zx";
import { getSecretHash } from "./helpers.mjs";

const username = await question("Username: ");
const clientId = await question("Client ID: ");
const clientSecret = await question("Client Secret: ");
const secretHash = getSecretHash(username, clientId, clientSecret);

console.log(`Secret Hash: ${secretHash}`)