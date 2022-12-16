# Node AWS Cognito Secret Hash Generator

This generates the secret hash for AWS Cognito so that you can authenticate against AWS Cognito via the Auth Flow: `USER_PASSWORD_AUTH` and obtain an Authentication Result back with bearer access, id, and refresh tokens.

## Requirements

All you need is a modern version of node on your system with `npx` available.

## Running

Run the following in your terminal and the script will prompt you for inputs. The prompting helps prevent storing secrets in the command history.

```shell
npx github:uptech/node-aws-cognito-secret-hash-generator
```

## Using

Once you get your secret hash, you can get auth tokens from AWS Cognito like so: 

### Notes

- Replace the `xxx` sections below to your information.
- The secret has will not change as long as your inputs do not change.

### Curl Example to Fetch Tokens

This uses the Auth Flow: User Password Auth to obtain authorization tokens from AWS Cognito.

```shell
curl -X "POST" "https://cognito-idp.us-west-2.amazonaws.com/" \
     -H 'X-Amz-Target: AWSCognitoIdentityProviderService.InitiateAuth' \
     -H 'Content-Type: application/x-amz-json-1.1' \
     -d $'{
  "AuthFlow": "USER_PASSWORD_AUTH",
  "AuthParameters": {
    "USERNAME": "xxx"
    "PASSWORD": "xxx",
    "SECRET_HASH": "xxx",
  },
  "ClientId": "xxx"
}'
```

## Credits

Inspired by:

- <https://github.com/uptech/cognito_secret_hash_generator>
- <https://dev.to/shamsup/creating-the-secret-hash-for-aws-cognito-in-nodejs-50f7>
