import { createHmac } from 'crypto';

export function getSecretHash(username, clientId, clientSecret) {
  const encoder = createHmac('sha256', clientSecret);
  encoder.update(`${username}${clientId}`);
  const secretHash = encoder.digest('base64');
  return secretHash;
}