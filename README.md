## Overview
This repository is a frontend application acting as a Holder to receive and manage Legal Entity vLEI Credentials in ACDC format.

The main processes are found in `modules/repository.ts` and consist of the following two components:

- SignifyRepository Interface: The implementation instance encapsulates the Signify library and provides abstracted methods to each view.
- Signifies Class: A companion class to the SignifyRepository interface, equipped with factory methods and more.

The screen transitions start from `Init.vue`. For routing details, please refer to `router/index.ts`.

To run this, a KERIA Agent and a Witness are required.
Please follow the steps below.

## Running Locally
1. Install Node.js
2. Clone the repo and switch to the latest tag.
3. Set up the KERIA Agent, Witness, and vLEI Server by following the setup instructions in the corresponding [repository](https://github.com/GMO-GlobalSign-Holdings-K-K-CTO-office/keria-witness-vlei_schema).
4. Make sure the URLs in the `.env` file of this repo match the configurations set in step 2.
5. Run `yarn dev`

## Miscellaneous
Please add the following command in .husky/pre-commit if you want to enable huskey.

```bash
yarn run pre-commit
```
