# Google Apps Script Template for TypeScript
TypeScriptでGoogle Apps Scriptプロジェクトを作成するテンプレートです

## 必須ソフトウェア
- Nodejs
- npm
- eslint
- clasp

## 使い方
1. このリポジトリをクローンする
1. `npm run createPrj` を実行してプロジェクトを作成する
1. 開発する
1. `npm run build` でビルドする
1. `npm run deploy` でビルド済みファイルをpushする

main.tsに最初から含まれる
```ts
declare var global: { // eslint-disable-line
  [x: string]: any ;
}
```
は消さないようにし、GAS上で実行する関数は
```ts
function doGet(e : GoogleAppsScript.Events.DoGet){
  console.log(e.parameters)
}
global.doGet = doGet
```
のように必ず`global.<関数名> = <関数名>`をつけるようにしてください


## 注意
- webpackをversion 5以上にすると動作しません
- `npm run createPrj` 実行時にdistフォルダに生成される"appsscript.json"に設定されているタイムゾーンがニューヨークになることがあります。手動で修正してください

## License
MIT




