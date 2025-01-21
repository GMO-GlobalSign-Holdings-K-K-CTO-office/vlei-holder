## Overview
This repository is a frontend application for issuing ACDC.  
The main processes are found in `modules/repository.ts` and consist of the following two components:

- **SignifyRepository Interface**  
    - The implementation instance encapsulates the Signify library and provides abstracted methods to each view.

- **Signifies Class**  
    - A companion class to the SignifyRepository interface, equipped with factory methods and more.

The screen transitions start from `Init.vue`. For routing details, please refer to `router/index.ts`.

To run this, a KERIA Agent and a Witness are required.
Please follow the steps below.

## Demo on Local
1. Setup KERIA Agent, Witness, and vLEI Server 
2. Make sure the URLs in `.env` matche these.
3. Run `yarn dev`

## Miscellaneous
Please add the following command in .husky/pre-commit if you want to enable huskey.

```bash
yarn run pre-commit
```