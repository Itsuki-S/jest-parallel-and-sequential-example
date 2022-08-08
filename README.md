# 概要
このrepositoryはjestで並列実行するテスト群と逐次実行するテスト群を分ける場合の具体例について記述したものです

## インストール

```bash
$ npm ci
```

## テストの実行

```bash
# 全並列実行
npm run test:all

# コンフィグファイル方式
## 全実行
$ npm run test:config
## 並列実行のみ
$ npm run test:config-parallel
## 逐次実行のみ
$ npm run test:config-sequential

# プロジェクト方式
## 全実行
$ npm run test:projects
## 並列実行のみ
$ npm run test:projects-parallel
## 逐次実行のみ
$ npm run test:projects-sequential
```
