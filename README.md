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

## Refactoring TODOs
- Rename `view-common` to `state-manager.ts`.
    - Move `set/getIpexState` to `state-manager.ts`.
    - Move the type definitions for the list of states to `state-manager.ts`.
- Implement `NotificationHandler`.
    - Refactor the current implementation where `if` statements are used per state when displaying the List page.
    - Prepare a `NotificationHandler` for each state and eliminate the `if` statements.
- Merge `oobiIpexLabelMap` and `oobiIpexHandlerMap` into a single object.
    - Add `"nextAction"` and `"nextActionHandler"` properties to the value object.

## Refactoring TODOs(Japanese)
- view-commonをstate-manager.tsに名前変更する。
    - set/getIpexStateをstate-manager.tsに移行する。
    - state一覧のtypeもstate-manager.tsに移行する。
- NotificationHandlerの実装
    - 現在、Listページ表示時にStateごとにIF文を使っておこなっているところのリファクタリング
    - StateごとにNotificationHandlerを用意し、IF文を排除する。
- oobiIpexLabelMapとoobiIpexHandlerMapを1つにまとめる。
    - valueのオブジェクトのプロパティに"nextAction"と"nextActionHanlder"を作る。