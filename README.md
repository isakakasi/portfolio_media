# プロジェクト名
架空のHP制作

## URL
URLより実際の挙動を確認できます。https://portfoliomedia-d440c.web.app/

## PON DESIGN

## 使用技術
このプロジェクトでは以下の技術を使用しています

- 使用言語
  - HTML
  - SCSS
- フレームワーク
  - jQuery
- デザインツール
  - figma
- エディタ
  - VisualStudio Code
- ホスティング
  - Firebase Hosting

## SCSS ファイル構成
    .
    |
    scss/
    |
    |-- foundation/ # サイト全体で使用する変数や mixin など
    |   |-- _color.scss # color 変数
    |   |-- _mixins.scss # @mixin 変数
    |   |-- _font.scss # フォント変数
    |   |-- _base.scss # 共通設定
    |   |-- _reset.scss # リセット css
    |
    |-- components/ # 再利用可能な UI コンポーネント
    |   |-- _buttons.scss # ボタン
    |   |-- _title.scss # タイトル
    |   |-- _...
    |
    |-- layout/ # 大枠のレイアウト定義
    |   |-- _header.scss # ヘッダー
    |   |-- _footer.scss # フッター
    |   |-- _main.scss # ページ内の body,main 部分等
    |   |-- _...
    |
    |-- project/ # ページ固有のスタイル
    |   |-- _index.scss # トップページ
    |   |-- _...
    |
    `-- style.scss # 上記のパーツをインポートするメインファイル

## テスト
- 手動テスト
- 互換性テスト
テスト仕様書 

## 引用
- デザイン 
