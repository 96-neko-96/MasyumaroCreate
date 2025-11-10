# MaroGem - ペルソナマロジェネレーター

[English](#english) | [日本語](#japanese)

---

<a name="japanese"></a>
## 📝 プロジェクト概要

**MaroGem（マロジェム）** は、配信者が視聴者のペルソナを設定し、そのペルソナが送りそうなマシュマロ（匿名メッセージ）をAIで生成するWebアプリケーションです。

配信の練習やアイデア出し、視聴者とのコミュニケーションのシミュレーションに最適なツールです。

### ✨ 主な機能

- 🎭 **ペルソナ設定**: 年齢、性別、職業、視聴歴、熱量などを細かく設定
- 💬 **メッセージ生成**: Google Gemini APIを使用した自然なメッセージ生成
- 🌐 **多言語対応**: 日本語・英語の切り替え
- 🎨 **テーマ切り替え**: ライトモード・ダークモード
- 💾 **設定保存**: ペルソナ設定をJSONファイルとして保存・読み込み
- 📷 **画像保存**: 生成されたメッセージを画像として保存
- 📋 **コピー機能**: ワンクリックでメッセージをコピー

## 🚀 使い方

### 1. セットアップ

1. **ファイルをダウンロード**
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Google Gemini APIキーを取得**
   - [Google AI Studio](https://makersuite.google.com/app/apikey) にアクセス
   - APIキーを生成

3. **アプリケーションを起動**
   - `index.html` をWebブラウザで開く

### 2. API設定

1. 右サイドバーの「API設定」セクションに移動
2. **モデル**を選択（デフォルト: gemini-2.0-flash-exp）
3. **APIキー**を入力（自動的にLocalStorageに保存されます）

### 3. ペルソナ設定

#### 基本情報
- **年齢**: 10代〜60代をスライダーで選択
- **性別**: 男性/女性/その他から選択
- **職業**: 学生/会社員/フリーランス/主婦・主夫/無職/その他

#### 配信視聴設定
- **視聴歴**: 新規（1週間未満）〜古参（1年以上）
- **熱量**: ライト視聴者〜ガチ勢

#### メッセージ傾向
- **真面目度**: ネタ寄り ←→ 真面目
- **距離感**: 遠慮がち ←→ フレンドリー
- **文章量**: 短文 ←→ 長文

### 4. メッセージ生成

1. **生成件数**を入力（1〜10件）
2. **🎲 メッセージを生成** ボタンをクリック
3. 生成されたメッセージがチャット形式で表示されます

### 5. メッセージの操作

各メッセージカードには以下のボタンがあります：

- **📋 コピー**: メッセージをクリップボードにコピー
- **📷 画像保存**: メッセージを画像（PNG）として保存
- **🗑️ 削除**: メッセージを削除

### 6. 設定の保存・読み込み

#### 保存
1. ヘッダーの **💾 設定を保存** ボタンをクリック
2. JSONファイルがダウンロードされます

#### 読み込み
1. ヘッダーの **📁 設定を読込** ボタンをクリック
2. 保存したJSONファイルを選択

**注意**: APIキーとモデル名は保存されません（セキュリティのため）

### 7. その他の機能

- **🌐 言語切り替え**: ヘッダーの言語ボタンで日本語/英語を切り替え
- **☀️/🌙 テーマ切り替え**: ヘッダーのテーマボタンでライト/ダークモードを切り替え

## 🛠️ 技術スタック

- **HTML5**: セマンティックマークアップ
- **CSS3**: CSS Variables、Flexbox、Grid
- **Vanilla JavaScript**: フレームワーク不使用
- **Google Gemini API**: AI文章生成（REST API直接呼び出し）
- **html2canvas**: 画像保存機能

## 📦 依存ライブラリ（CDN）

- [html2canvas](https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js)
- [Noto Sans JP](https://fonts.googleapis.com/css2?family=Noto+Sans+JP)

## 🔒 プライバシー

- APIキーはブラウザのLocalStorageに保存されます（暗号化なし）
- 設定ファイルにはAPIキーは含まれません
- すべてクライアントサイドで動作し、サーバーには何も送信されません

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

---

<a name="english"></a>
## 📝 Project Overview

**MaroGem** is a web application that allows streamers to set up viewer personas and generate anonymous messages (like Marshmallow) that those personas might send, powered by AI.

Perfect for practicing streams, brainstorming ideas, and simulating viewer interactions.

### ✨ Key Features

- 🎭 **Persona Settings**: Configure age, gender, occupation, viewing history, enthusiasm, and more
- 💬 **Message Generation**: Natural message generation using Google Gemini API
- 🌐 **Multi-language Support**: Switch between Japanese and English
- 🎨 **Theme Switching**: Light and dark modes
- 💾 **Settings Management**: Save and load persona settings as JSON files
- 📷 **Image Export**: Save generated messages as images
- 📋 **Copy Function**: One-click message copying

## 🚀 How to Use

### 1. Setup

1. **Download Files**
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Get Google Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Generate an API key

3. **Launch Application**
   - Open `index.html` in your web browser

### 2. API Configuration

1. Go to the "API Settings" section in the right sidebar
2. Select a **Model** (default: gemini-2.0-flash-exp)
3. Enter your **API Key** (automatically saved to LocalStorage)

### 3. Persona Configuration

#### Basic Information
- **Age**: Select from teens to 60s using the slider
- **Gender**: Choose male/female/other
- **Occupation**: Student/Employee/Freelancer/Homemaker/Unemployed/Other

#### Viewing Settings
- **Viewer History**: New viewer (< 1 week) to Longtime fan (1+ year)
- **Enthusiasm**: Casual viewer to Super fan

#### Message Tendency
- **Seriousness**: Joking ←→ Serious
- **Distance**: Reserved ←→ Friendly
- **Length**: Short ←→ Long

### 4. Generate Messages

1. Enter **Count** (1-10 messages)
2. Click the **🎲 Generate Messages** button
3. Generated messages will appear in chat format

### 5. Message Operations

Each message card has the following buttons:

- **📋 Copy**: Copy message to clipboard
- **📷 Save as Image**: Save message as PNG image
- **🗑️ Delete**: Delete message

### 6. Save and Load Settings

#### Save
1. Click **💾 Save Settings** in the header
2. A JSON file will be downloaded

#### Load
1. Click **📁 Load Settings** in the header
2. Select a saved JSON file

**Note**: API key and model name are not saved (for security reasons)

### 7. Other Features

- **🌐 Language Switch**: Toggle between Japanese/English in the header
- **☀️/🌙 Theme Switch**: Toggle between light/dark mode in the header

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: CSS Variables, Flexbox, Grid
- **Vanilla JavaScript**: No frameworks
- **Google Gemini API**: AI text generation (direct REST API calls)
- **html2canvas**: Image export functionality

## 📦 Dependencies (CDN)

- [html2canvas](https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js)
- [Noto Sans JP](https://fonts.googleapis.com/css2?family=Noto+Sans+JP)

## 🔒 Privacy

- API key is stored in browser's LocalStorage (not encrypted)
- Settings files do not include API keys
- Everything runs client-side; nothing is sent to any server

## 📄 License

This project is released under the MIT License.

---

## 🙏 Acknowledgments

Built with ❤️ for streamers and content creators.
