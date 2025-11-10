// ===============================================
// MaroGem - Persona Maro Generator
// Main JavaScript File
// ===============================================

// ===== Translation Data (i18n) =====
const translations = {
  ja: {
    // ヘッダー
    appTitle: "ペルソナマロジェネレーター",
    saveSettings: "💾 設定を保存",
    loadSettings: "📁 設定を読込",

    // API設定
    apiSettings: "API設定",
    model: "モデル",
    apiKey: "APIキー",
    apiKeyPlaceholder: "sk-...",
    showApiKey: "表示",
    hideApiKey: "非表示",

    // ペルソナ設定
    personaSettings: "ペルソナ設定",
    basicInfo: "基本情報",
    age: "年齢",
    gender: "性別",
    male: "男性",
    female: "女性",
    other: "その他",
    occupation: "職業",
    student: "学生",
    employee: "会社員",
    freelancer: "フリーランス",
    homemaker: "主婦・主夫",
    unemployed: "無職",
    otherOccupation: "その他",

    // 視聴設定
    viewingSettings: "配信視聴設定",
    viewerHistory: "視聴歴",
    enthusiasm: "熱量",

    // 視聴歴ラベル
    viewerHistoryLabels: ['新規', '数週間', '数ヶ月', '半年以上', '古参'],

    // 熱量ラベル
    enthusiasmLabels: ['ライト', 'たまに見る', '定期視聴', '熱心', 'ガチ勢'],

    // メッセージ傾向
    messageTendency: "メッセージ傾向",
    seriousness: "真面目度",
    joking: "ネタ寄り",
    serious: "真面目",
    distance: "距離感",
    reserved: "遠慮がち",
    friendly: "フレンドリー",
    length: "文章量",
    short: "短文",
    long: "長文",

    // 生成設定
    generateSettings: "生成設定",
    messageType: "メッセージタイプ",
    count: "生成件数",
    generateButton: "🎲 メッセージを生成",

    // メッセージタイプ
    messageType_random: "ランダム（ミックス）",
    messageType_support: "応援・感謝",
    messageType_question_private: "質問（プライベート）",
    messageType_question_stream: "質問（配信・活動）",
    messageType_question_advice: "悩み相談",
    messageType_request: "リクエスト・提案",
    messageType_reaction: "感想・反応",
    messageType_sympathy: "共感・同意",
    messageType_kusomaro: "クソマロ（ネタ）",
    messageType_chat: "雑談投げかけ",
    messageType_serious: "重め・告白系",

    // メッセージタイプの説明
    messageTypeDesc_random: "様々なタイプから自動選択。バリエーション豊かなメッセージが生成されます。",
    messageTypeDesc_support: "「いつも見てます」「ありがとう」などの応援・感謝メッセージ。",
    messageTypeDesc_question_private: "好きなもの、趣味、日常などプライベートな質問。",
    messageTypeDesc_question_stream: "使用機材、配信のきっかけなど活動に関する質問。",
    messageTypeDesc_question_advice: "人間関係や仕事の悩み、意見を求める相談メッセージ。",
    messageTypeDesc_request: "「○○やってほしい」などのリクエストや企画提案。",
    messageTypeDesc_reaction: "配信内容への感想やリアクション、フィードバック。",
    messageTypeDesc_sympathy: "「わかる」「私も同じ」などの共感・同意メッセージ。",
    messageTypeDesc_kusomaro: "ボケ、ツッコミ待ち、意味不明系のネタメッセージ。",
    messageTypeDesc_chat: "「今日何食べました？」などの軽い雑談の話題。",
    messageTypeDesc_serious: "ガチな告白や重い感謝、深刻な悩みなど真剣なメッセージ。",

    // UI設定
    uiSettings: "表示設定",
    uiTheme: "UIテーマ",
    uiThemeLight: "ライト",
    uiThemeDark: "ダーク",

    // 画像保存設定
    imageSettings: "画像保存設定",
    imageTheme: "画像のテーマ",
    imageThemeLight: "ライト",
    imageThemeDark: "ダーク",

    // メッセージカード
    copyMessage: "📋 コピー",
    saveAsImage: "📷 画像保存",
    deleteMessage: "🗑️ 削除",
    copied: "コピーしました！",

    // ウェルカム
    welcomeTitle: "ようこそ！",
    welcomeText: "右側のパネルでペルソナを設定して、メッセージを生成してみましょう。",

    // エラー・通知
    apiKeyRequired: "APIキーを設定してください",
    generationError: "生成中にエラーが発生しました",
    settingsSaved: "設定を保存しました",
    settingsLoaded: "設定を読み込みました",
    invalidSettingsFile: "無効な設定ファイルです",
    generating: "生成中...",

    // キーワード設定
    keywordSettings: "キーワード設定",
    includeKeywords: "含めるキーワード",
    excludeKeywords: "除外するキーワード",
    addKeyword: "追加",
    editKeyword: "編集",
    deleteKeyword: "削除",
    saveKeyword: "保存",
    cancelEdit: "キャンセル",
    toggleKeyword: "有効/無効",
    keywordPlaceholder: "キーワードを入力...",
    keywordExists: "このキーワードは既に存在します",
    keywordEmpty: "キーワードを入力してください",
    keywordTooLong: "キーワードは50文字以内で入力してください",
    noKeywordsYet: "キーワードを追加してください",

    // 年齢ラベル
    ageLabel: (age) => `${age}代`,
  },
  en: {
    // Header
    appTitle: "Persona Maro Generator",
    saveSettings: "💾 Save Settings",
    loadSettings: "📁 Load Settings",

    // API Settings
    apiSettings: "API Settings",
    model: "Model",
    apiKey: "API Key",
    apiKeyPlaceholder: "sk-...",
    showApiKey: "Show",
    hideApiKey: "Hide",

    // Persona Settings
    personaSettings: "Persona Settings",
    basicInfo: "Basic Information",
    age: "Age",
    gender: "Gender",
    male: "Male",
    female: "Female",
    other: "Other",
    occupation: "Occupation",
    student: "Student",
    employee: "Employee",
    freelancer: "Freelancer",
    homemaker: "Homemaker",
    unemployed: "Unemployed",
    otherOccupation: "Other",

    // Viewing Settings
    viewingSettings: "Viewing Settings",
    viewerHistory: "Viewer History",
    enthusiasm: "Enthusiasm",

    // Viewer History Labels
    viewerHistoryLabels: ['New viewer', 'Few weeks', 'Few months', '6+ months', 'Longtime fan'],

    // Enthusiasm Labels
    enthusiasmLabels: ['Casual', 'Occasional', 'Regular', 'Dedicated', 'Super fan'],

    // Message Tendency
    messageTendency: "Message Tendency",
    seriousness: "Seriousness",
    joking: "Joking",
    serious: "Serious",
    distance: "Distance",
    reserved: "Reserved",
    friendly: "Friendly",
    length: "Length",
    short: "Short",
    long: "Long",

    // Generation Settings
    generateSettings: "Generation Settings",
    messageType: "Message Type",
    count: "Count",
    generateButton: "🎲 Generate Messages",

    // Message Types
    messageType_random: "Random (Mixed)",
    messageType_support: "Support & Thanks",
    messageType_question_private: "Question (Personal)",
    messageType_question_stream: "Question (Streaming)",
    messageType_question_advice: "Ask for Advice",
    messageType_request: "Request & Suggestion",
    messageType_reaction: "Reaction & Feedback",
    messageType_sympathy: "Sympathy & Agreement",
    messageType_kusomaro: "Joke/Meme Message",
    messageType_chat: "Casual Chat Topic",
    messageType_serious: "Serious & Confession",

    // Message Type Descriptions
    messageTypeDesc_random: "Auto-select from various types. Generates diverse messages.",
    messageTypeDesc_support: "Supportive messages like 'Always watching' or 'Thank you'.",
    messageTypeDesc_question_private: "Personal questions about hobbies, preferences, daily life.",
    messageTypeDesc_question_stream: "Questions about streaming setup, equipment, motivation.",
    messageTypeDesc_question_advice: "Seeking advice about relationships, work, or life concerns.",
    messageTypeDesc_request: "Requests like 'Please play this' or content suggestions.",
    messageTypeDesc_reaction: "Feedback and reactions to stream content.",
    messageTypeDesc_sympathy: "Empathetic messages like 'I relate' or 'Same here'.",
    messageTypeDesc_kusomaro: "Playful jokes, memes, or absurd funny messages.",
    messageTypeDesc_chat: "Light casual chat topics like 'What did you eat today?'.",
    messageTypeDesc_serious: "Genuine confessions, deep gratitude, or serious concerns.",

    // UI Settings
    uiSettings: "Display Settings",
    uiTheme: "UI Theme",
    uiThemeLight: "Light",
    uiThemeDark: "Dark",

    // Image Settings
    imageSettings: "Image Export Settings",
    imageTheme: "Image Theme",
    imageThemeLight: "Light",
    imageThemeDark: "Dark",

    // Message Card
    copyMessage: "📋 Copy",
    saveAsImage: "📷 Save as Image",
    deleteMessage: "🗑️ Delete",
    copied: "Copied!",

    // Welcome
    welcomeTitle: "Welcome!",
    welcomeText: "Set up a persona in the right panel and generate messages.",

    // Errors & Notifications
    apiKeyRequired: "Please set your API key",
    generationError: "An error occurred during generation",
    settingsSaved: "Settings saved",
    settingsLoaded: "Settings loaded",
    invalidSettingsFile: "Invalid settings file",
    generating: "Generating...",

    // Keyword Settings
    keywordSettings: "Keyword Settings",
    includeKeywords: "Include Keywords",
    excludeKeywords: "Exclude Keywords",
    addKeyword: "Add",
    editKeyword: "Edit",
    deleteKeyword: "Delete",
    saveKeyword: "Save",
    cancelEdit: "Cancel",
    toggleKeyword: "Toggle",
    keywordPlaceholder: "Enter keyword...",
    keywordExists: "This keyword already exists",
    keywordEmpty: "Please enter a keyword",
    keywordTooLong: "Keyword must be 50 characters or less",
    noKeywordsYet: "Add keywords to get started",

    // Age Label
    ageLabel: (age) => `${age}s`,
  }
};

// ===== Global State =====
let currentLanguage = 'ja';
let currentTheme = 'light';
let imageTheme = 'light'; // 画像保存時のテーマ
let apiKey = '';
let modelName = 'gemini-2.0-flash-exp';

// Persona Settings
let personaSettings = {
  age: 20,
  gender: 'male',
  occupation: 'student',
  viewerHistory: 2,
  enthusiasm: 2,
};

// Message Tendency Settings
let messageTendency = {
  seriousness: 3,
  distance: 3,
  length: 3,
};

// Generation Settings
let generationCount = 3;
let messageType = 'random';

// Keyword Settings
let keywordData = {
  include: [],
  exclude: []
};

// Message Storage
let messages = [];

// ===== Utility Functions =====

/**
 * 翻訳関数
 * @param {string} key - 翻訳キー
 * @returns {string} 翻訳されたテキスト
 */
function t(key) {
  const translation = translations[currentLanguage][key];
  return translation || key;
}

/**
 * トースト通知を表示
 * @param {string} message - 表示するメッセージ
 * @param {number} duration - 表示時間（ミリ秒）
 */
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

/**
 * LocalStorageからデータを読み込み
 */
function loadFromLocalStorage() {
  // API設定
  const savedApiKey = localStorage.getItem('marogem_apiKey');
  const savedModel = localStorage.getItem('marogem_model');

  if (savedApiKey) {
    apiKey = savedApiKey;
    document.getElementById('apiKeyInput').value = apiKey;
  }

  if (savedModel) {
    modelName = savedModel;
    document.getElementById('modelSelect').value = modelName;
  }

  // 言語設定
  const savedLanguage = localStorage.getItem('marogem_language');
  if (savedLanguage) {
    currentLanguage = savedLanguage;
  }

  // テーマ設定
  const savedTheme = localStorage.getItem('marogem_theme');
  if (savedTheme) {
    currentTheme = savedTheme;
  }

  // UIテーマのラジオボタンを初期化
  const uiThemeRadio = document.querySelector(`input[name="uiTheme"][value="${currentTheme}"]`);
  if (uiThemeRadio) {
    uiThemeRadio.checked = true;
  }

  // 画像テーマ設定
  const savedImageTheme = localStorage.getItem('marogem_imageTheme');
  if (savedImageTheme) {
    imageTheme = savedImageTheme;
    // UIに反映
    const imageThemeRadio = document.querySelector(`input[name="imageTheme"][value="${imageTheme}"]`);
    if (imageThemeRadio) {
      imageThemeRadio.checked = true;
    }
  }
}

/**
 * LocalStorageにデータを保存
 */
function saveToLocalStorage() {
  localStorage.setItem('marogem_apiKey', apiKey);
  localStorage.setItem('marogem_model', modelName);
  localStorage.setItem('marogem_language', currentLanguage);
  localStorage.setItem('marogem_theme', currentTheme);
  localStorage.setItem('marogem_imageTheme', imageTheme);
}

// ===== Keyword Management Functions =====

/**
 * キーワードを追加
 * @param {string} type - 'include' or 'exclude'
 * @param {string} text - キーワードテキスト
 * @returns {boolean} 追加成功かどうか
 */
function addKeyword(type, text) {
  // バリデーション
  const trimmedText = text.trim();

  if (!trimmedText) {
    showToast(t('keywordEmpty'));
    return false;
  }

  if (trimmedText.length > 50) {
    showToast(t('keywordTooLong'));
    return false;
  }

  // 重複チェック（大文字小文字を区別しない）
  const exists = keywordData[type].some(
    kw => kw.text.toLowerCase() === trimmedText.toLowerCase()
  );

  if (exists) {
    showToast(t('keywordExists'));
    return false;
  }

  // キーワードを追加
  const keyword = {
    id: `${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    text: trimmedText,
    enabled: true,
    createdAt: Date.now()
  };

  keywordData[type].push(keyword);

  // UIを更新
  renderKeywords(type);

  // LocalStorageに保存
  saveKeywordsToLocalStorage();

  return true;
}

/**
 * キーワードを更新
 * @param {string} type - 'include' or 'exclude'
 * @param {string} id - キーワードID
 * @param {string} newText - 新しいテキスト
 * @returns {boolean} 更新成功かどうか
 */
function updateKeyword(type, id, newText) {
  const trimmedText = newText.trim();

  if (!trimmedText) {
    showToast(t('keywordEmpty'));
    return false;
  }

  if (trimmedText.length > 50) {
    showToast(t('keywordTooLong'));
    return false;
  }

  // 重複チェック（自分自身は除外）
  const exists = keywordData[type].some(
    kw => kw.id !== id && kw.text.toLowerCase() === trimmedText.toLowerCase()
  );

  if (exists) {
    showToast(t('keywordExists'));
    return false;
  }

  // キーワードを更新
  const keyword = keywordData[type].find(kw => kw.id === id);
  if (keyword) {
    keyword.text = trimmedText;
    renderKeywords(type);
    saveKeywordsToLocalStorage();
    return true;
  }

  return false;
}

/**
 * キーワードを削除
 * @param {string} type - 'include' or 'exclude'
 * @param {string} id - キーワードID
 */
function deleteKeyword(type, id) {
  keywordData[type] = keywordData[type].filter(kw => kw.id !== id);
  renderKeywords(type);
  saveKeywordsToLocalStorage();
}

/**
 * キーワードの有効/無効を切り替え
 * @param {string} type - 'include' or 'exclude'
 * @param {string} id - キーワードID
 */
function toggleKeyword(type, id) {
  const keyword = keywordData[type].find(kw => kw.id === id);
  if (keyword) {
    keyword.enabled = !keyword.enabled;
    renderKeywords(type);
    saveKeywordsToLocalStorage();
  }
}

/**
 * キーワードをレンダリング
 * @param {string} type - 'include' or 'exclude'
 */
function renderKeywords(type) {
  const containerId = type === 'include' ? 'includeKeywordsList' : 'excludeKeywordsList';
  const container = document.getElementById(containerId);

  if (!container) return;

  const keywords = keywordData[type];

  // キーワードが0個の場合、空メッセージを表示
  if (keywords.length === 0) {
    container.innerHTML = `<p class="empty-keywords-message" data-i18n="noKeywordsYet">${t('noKeywordsYet')}</p>`;
    return;
  }

  // キーワードタグを生成
  container.innerHTML = keywords.map(keyword => {
    const disabledClass = keyword.enabled ? '' : 'disabled';
    const checkedAttr = keyword.enabled ? 'checked' : '';

    return `
      <div class="keyword-tag ${disabledClass}" data-keyword-id="${keyword.id}" data-type="${type}">
        <span class="keyword-icon">🏷️</span>
        <span class="keyword-text">${escapeHtml(keyword.text)}</span>
        <div class="keyword-actions">
          <input
            type="checkbox"
            class="keyword-checkbox"
            ${checkedAttr}
            onclick="toggleKeyword('${type}', '${keyword.id}')"
            title="${t('toggleKeyword')}"
          >
          <button
            class="keyword-btn"
            onclick="startEditKeyword('${type}', '${keyword.id}')"
            title="${t('editKeyword')}"
          >
            ✏️
          </button>
          <button
            class="keyword-btn"
            onclick="confirmDeleteKeyword('${type}', '${keyword.id}')"
            title="${t('deleteKeyword')}"
          >
            🗑️
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * キーワードの編集を開始
 * @param {string} type - 'include' or 'exclude'
 * @param {string} id - キーワードID
 */
function startEditKeyword(type, id) {
  const keyword = keywordData[type].find(kw => kw.id === id);
  if (!keyword) return;

  const tag = document.querySelector(`[data-keyword-id="${id}"]`);
  if (!tag) return;

  // 編集モードに切り替え
  tag.classList.add('editing');

  // テキストを入力欄に置き換え
  const textSpan = tag.querySelector('.keyword-text');
  const actionsDiv = tag.querySelector('.keyword-actions');

  // チェックボックスと元のボタンを非表示
  actionsDiv.innerHTML = '';

  // 入力欄を追加
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'keyword-edit-input';
  input.value = keyword.text;
  input.maxLength = 50;

  // 保存・キャンセルボタンを追加
  const saveBtn = document.createElement('button');
  saveBtn.className = 'keyword-btn keyword-btn-save';
  saveBtn.innerHTML = '✓';
  saveBtn.title = t('saveKeyword');
  saveBtn.onclick = () => saveEditKeyword(type, id, input.value);

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'keyword-btn keyword-btn-cancel';
  cancelBtn.innerHTML = '✕';
  cancelBtn.title = t('cancelEdit');
  cancelBtn.onclick = () => cancelEditKeyword(type);

  // テキストの前に入力欄を追加
  textSpan.insertAdjacentElement('afterend', input);
  actionsDiv.appendChild(saveBtn);
  actionsDiv.appendChild(cancelBtn);

  // フォーカスして選択
  input.focus();
  input.select();

  // Enterキーで保存
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveEditKeyword(type, id, input.value);
    } else if (e.key === 'Escape') {
      cancelEditKeyword(type);
    }
  });
}

/**
 * キーワードの編集を保存
 * @param {string} type - 'include' or 'exclude'
 * @param {string} id - キーワードID
 * @param {string} newText - 新しいテキスト
 */
function saveEditKeyword(type, id, newText) {
  if (updateKeyword(type, id, newText)) {
    // 編集成功
  } else {
    // 編集失敗（バリデーションエラー）- UIは変更しない
    cancelEditKeyword(type);
  }
}

/**
 * キーワードの編集をキャンセル
 * @param {string} type - 'include' or 'exclude'
 */
function cancelEditKeyword(type) {
  renderKeywords(type);
}

/**
 * キーワードの削除を確認して実行
 * @param {string} type - 'include' or 'exclude'
 * @param {string} id - キーワードID
 */
function confirmDeleteKeyword(type, id) {
  const tag = document.querySelector(`[data-keyword-id="${id}"]`);
  if (!tag) return;

  // アニメーション付きで削除
  tag.classList.add('removing');

  setTimeout(() => {
    deleteKeyword(type, id);
  }, 300);
}

/**
 * キーワードをLocalStorageに保存
 */
function saveKeywordsToLocalStorage() {
  localStorage.setItem('marogem_keywords', JSON.stringify(keywordData));
}

/**
 * キーワードをLocalStorageから読み込み
 */
function loadKeywordsFromLocalStorage() {
  const saved = localStorage.getItem('marogem_keywords');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.include && parsed.exclude) {
        keywordData = parsed;
        renderKeywords('include');
        renderKeywords('exclude');
      }
    } catch (error) {
      console.error('Failed to load keywords from localStorage:', error);
    }
  }
}

/**
 * キーワードセクションの折りたたみを切り替え
 */
function toggleKeywordSection() {
  const title = document.getElementById('keywordSectionTitle');
  const content = document.getElementById('keywordSectionContent');

  if (!title || !content) return;

  const isCollapsed = title.classList.contains('collapsed');

  if (isCollapsed) {
    title.classList.remove('collapsed');
    content.classList.remove('collapsed');
  } else {
    title.classList.add('collapsed');
    content.classList.add('collapsed');
  }
}

/**
 * 有効なキーワードを取得
 * @param {string} type - 'include' or 'exclude'
 * @returns {Array<string>} 有効なキーワードのテキストの配列
 */
function getEnabledKeywords(type) {
  return keywordData[type]
    .filter(kw => kw.enabled)
    .map(kw => kw.text);
}

// ===== i18n Functions =====

/**
 * UI全体の言語を更新
 */
function updateUILanguage() {
  // data-i18n属性を持つ要素を更新
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = t(key);

    if (element.tagName === 'OPTION') {
      element.textContent = translation;
    } else {
      element.textContent = translation;
    }
  });

  // プレースホルダーの更新
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = t(key);
  });

  // 動的なラベルの更新
  updateAgeLabel();
  updateViewerHistoryLabel();
  updateEnthusiasmLabel();
  updateMessageTypeDescription();

  // キーワードを再レンダリング（翻訳を反映）
  renderKeywords('include');
  renderKeywords('exclude');

  // 言語表示の更新
  document.getElementById('currentLang').textContent = currentLanguage.toUpperCase();
}

/**
 * 言語を切り替え
 */
function toggleLanguage() {
  currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
  updateUILanguage();
  saveToLocalStorage();
}

// ===== Theme Functions =====

/**
 * テーマを適用
 */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeIcon = document.getElementById('themeIcon');
  themeIcon.textContent = currentTheme === 'light' ? '☀️' : '🌙';
}

/**
 * テーマを切り替え
 */
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme();
  saveToLocalStorage();
}

// ===== API Functions =====

/**
 * APIキーの表示/非表示を切り替え
 */
function toggleApiKeyVisibility() {
  const apiKeyInput = document.getElementById('apiKeyInput');
  apiKeyInput.type = apiKeyInput.type === 'password' ? 'text' : 'password';
}

/**
 * Gemini AIを初期化（APIキーの確認のみ）
 */
function initializeGeminiAI() {
  if (!apiKey) {
    showToast(t('apiKeyRequired'));
    return false;
  }
  return true;
}

/**
 * メッセージタイプに応じたプロンプト指示を取得
 * @param {string} type - メッセージタイプ
 * @param {string} language - 言語 ('ja' or 'en')
 * @returns {string} タイプ別のプロンプト指示
 */
function getMessageTypePrompt(type, language) {
  if (language === 'ja') {
    const typePrompts = {
      random: `
【メッセージタイプ】
メッセージのタイプはランダムに決めてください。
応援、質問、感想、ネタ、相談、雑談など、様々なバリエーションから自由に選んでください。`,

      support: `
【メッセージタイプ：応援・感謝】
配信者への感謝や応援を伝える内容にしてください。
- 「いつも見てます」「楽しみにしてます」「元気もらってます」のようなポジティブで温かいトーン
- 具体的なエピソードを交えても良い（「昨日の配信で〜」など）
- 励ましや応援の気持ちを込める`,

      question_private: `
【メッセージタイプ：質問（プライベート）】
配信者のプライベートに関する質問をしてください。
- 好きな食べ物、趣味、休日の過ごし方など
- 興味を持って聞く自然な質問
- プライバシーに踏み込みすぎない範囲で`,

      question_stream: `
【メッセージタイプ：質問（配信・活動）】
配信活動に関する質問をしてください。
- 使用機材、編集ソフト、配信のきっかけなど
- 配信スタイルや今後の予定について
- 技術的な質問や活動に関する興味`,

      question_advice: `
【メッセージタイプ：悩み相談】
配信者に意見や助言を求める相談メッセージにしてください。
- 人間関係、仕事、学業などの悩み
- 「どう思いますか？」「アドバイスください」のような問いかけ
- 深刻すぎず、配信で話せる程度の内容`,

      request: `
【メッセージタイプ：リクエスト・提案】
配信者への�クエストや企画提案をしてください。
- 「○○やってほしい」「○○の実況見たい」などのリクエスト
- 新しい企画や配信内容の提案
- 前向きで建設的なトーン`,

      reaction: `
【メッセージタイプ：感想・反応】
最近の配信内容への感想やリアクションにしてください。
- 「昨日の配信で〜」「前回の〜が面白かった」など
- 具体的なシーンやセリフへの反応
- 共感や楽しかった気持ちを表現`,

      sympathy: `
【メッセージタイプ：共感・同意】
配信者の発言や行動への共感メッセージにしてください。
- 「わかる」「私も同じ」「それな」のような共感
- 配信で話していた内容への同意
- 親近感を感じさせるトーン`,

      kusomaro: `
【メッセージタイプ：クソマロ（ネタ）】
ツッコミ待ちのボケや面白おかしいネタメッセージにしてください。
- 突拍子もない質問や意味不明系
- 「配信者さんは実は宇宙人ですか？」のようなシュール な内容
- 明らかにネタとわかる面白さ
- 悪意はなく笑いを取りに行く感じ
- ただし、真面目度の設定が高い場合は抑えめに`,

      chat: `
【メッセージタイプ：雑談投げかけ】
気軽な雑談の話題を投げかけてください。
- 「今日何食べました？」「最近どう？」のような軽い話題
- 日常的な会話のきっかけ
- フレンドリーで親しみやすいトーン`,

      serious: `
【メッセージタイプ：重め・告白系】
真剣で重めの内容にしてください。
- ガチな告白や深い感謝の気持ち
- 配信者に救われた経験や影響を受けた話
- 深刻な悩みや相談
- 真摯で誠実なトーン`,
    };

    return typePrompts[type] || typePrompts.random;
  } else {
    // English
    const typePrompts = {
      random: `
【Message Type】
Choose the message type randomly.
Feel free to select from various types: support, questions, feedback, jokes, advice requests, casual chat, etc.`,

      support: `
【Message Type: Support & Thanks】
Create a supportive or grateful message for the streamer.
- Positive and warm tone like "Always watching" "Looking forward to your streams" "You cheer me up"
- Can include specific episodes or moments
- Include encouragement and appreciation`,

      question_private: `
【Message Type: Question (Personal)】
Ask a personal question about the streamer's private life.
- Favorite foods, hobbies, how they spend their free time
- Show genuine interest
- Stay within respectful boundaries`,

      question_stream: `
【Message Type: Question (Streaming)】
Ask a question about their streaming activities.
- Equipment, editing software, what got them started
- Stream style or future plans
- Technical or activity-related curiosity`,

      question_advice: `
【Message Type: Ask for Advice】
Seek advice or opinions from the streamer.
- Concerns about relationships, work, studies
- "What do you think?" "Any advice?" type questions
- Keep it suitable for stream discussion`,

      request: `
【Message Type: Request & Suggestion】
Make a request or suggest content to the streamer.
- "Please play ○○" "Would love to see ○○"
- New ideas or content suggestions
- Positive and constructive tone`,

      reaction: `
【Message Type: Reaction & Feedback】
React to or comment on recent stream content.
- "Yesterday's stream..." "The last ○○ was great"
- React to specific scenes or moments
- Express enjoyment and engagement`,

      sympathy: `
【Message Type: Sympathy & Agreement】
Express sympathy or agreement with the streamer.
- "I relate" "Same here" "Totally agree"
- Agreement with something discussed on stream
- Create a sense of connection`,

      kusomaro: `
【Message Type: Joke/Meme Message】
Create a playful joke or absurd funny message.
- Random or surreal questions
- "Are you secretly an alien?" type humor
- Obviously joking, aiming for laughs
- No malice, just trying to be funny
- Tone down if seriousness setting is high`,

      chat: `
【Message Type: Casual Chat Topic】
Throw out a casual chat topic.
- "What did you eat today?" "How's it going?" type questions
- Everyday conversation starters
- Friendly and approachable tone`,

      serious: `
【Message Type: Serious & Confession】
Create a serious or heartfelt message.
- Genuine confession or deep gratitude
- How the stream has helped or influenced you
- Serious concerns or deep conversations
- Sincere and earnest tone`,
    };

    return typePrompts[type] || typePrompts.random;
  }
}

/**
 * プロンプトを生成
 * @param {Array<string>} existingTopics - 既に生成されたメッセージのトピックリスト
 * @param {number} messageNumber - 現在の生成番号（1から始まる）
 * @param {number} totalCount - 生成する総数
 * @returns {string} 生成されたプロンプト
 */
function generatePrompt(existingTopics = [], messageNumber = 1, totalCount = 1) {
  const persona = personaSettings;
  const settings = messageTendency;
  const language = currentLanguage;

  if (language === 'ja') {
    const ageLabel = `${persona.age}代`;
    const viewerHistoryLabels = t('viewerHistoryLabels');
    const enthusiasmLabels = t('enthusiasmLabels');

    // 既存トピックがある場合の追加指示
    let diversityInstruction = '';
    if (existingTopics.length > 0) {
      diversityInstruction = `
【重要：内容の多様性について】
既に以下のようなトピックでメッセージが生成されています：
${existingTopics.map((topic, i) => `${i + 1}. ${topic}`).join('\n')}

**必ず上記とは異なる話題・角度・トーンでメッセージを生成してください。**
同じような内容や表現の繰り返しは避けてください。
`;
    }

    // メッセージタイプの指示
    const messageTypeInstruction = getMessageTypePrompt(messageType, language);

    // キーワード指示
    let keywordInstruction = '';
    const includeKeywords = getEnabledKeywords('include');
    const excludeKeywords = getEnabledKeywords('exclude');

    if (includeKeywords.length > 0) {
      keywordInstruction += `
【含めるべき話題・要素】
以下のキーワードに関連する内容を含めてください：
${includeKeywords.map(kw => `- ${kw}`).join('\n')}

これらの話題について触れた質問や感想、リクエストなどを生成してください。
`;
    }

    if (excludeKeywords.length > 0) {
      keywordInstruction += `
【除外すべき話題・要素】
以下のキーワードに関連する内容は絶対に含めないでください：
${excludeKeywords.map(kw => `- ${kw}`).join('\n')}

これらの話題には一切触れないようにしてください。
`;
    }

    // 複数件生成時の多様性のヒント
    let varietyHint = '';
    if (totalCount > 1) {
      varietyHint = `
- 多様な話題を心がける（例：配信内容への感想、質問、応援、日常の共有、相談、ネタ、提案など）
- 異なる角度からアプローチする
`;
    }

    return `
あなたは配信の視聴者です。以下のペルソナ情報に基づいて、配信者に送るマシュマロ（匿名メッセージ）を1件だけ生成してください。

【🚨 最重要警告 🚨】
以下の記号を絶対に使用しないでください：
❌ ○ (まる)
❌ 〇 (全角ゼロ)
❌ ● (黒丸)
❌ □ (四角)
❌ ■ (黒四角)
❌ XX や [〜] などのプレースホルダー

これらの記号を含むメッセージは完全に無効です。検出された場合は即座に拒否されます。
${messageTypeInstruction}
${keywordInstruction}
【ペルソナ情報】
- 年齢：${ageLabel}
- 性別：${t(persona.gender)}
- 職業：${t(persona.occupation)}
- 視聴歴：${viewerHistoryLabels[persona.viewerHistory]}
- 熱量：${enthusiasmLabels[persona.enthusiasm]}
- 真面目度：${settings.seriousness}/5（1=ネタ寄り、5=真面目）
- 距離感：${settings.distance}/5（1=遠慮がち、5=フレンドリー）
- 文章量：${settings.length}/5（1=短文、5=長文）
${diversityInstruction}
【✅ 実際のマシュマロメッセージの良い例】
以下のような自然で具体的なメッセージを参考にしてください：

応援・感想系：
「いつも配信楽しみにしています！昨日のゲーム実況、めちゃくちゃ面白かったです」
「最近配信で話してた料理、今日作ってみました。美味しかったです！」
「雨の日の配信、落ち着いた雰囲気で良かったです。また聞きたいな」
「前回のホラーゲーム実況、リアクション最高でした！続きが気になります」

質問・相談系：
「配信で使ってるマイクって何ですか？音質すごく良いですよね」
「最近仕事で悩んでて…配信聞いてると元気もらえます」
「おすすめのホラーゲームあったら教えてほしいです」
「編集ソフトって何使ってますか？参考にしたくて」

日常共有・雑談系：
「今日電車で寝過ごしました。配信の話を思い出して笑ってしまった」
「コンビニで新作のお菓子見つけたんですけど、前に配信で言ってたやつでした」
「最近寒くなってきましたね。体調には気をつけてください」
「今朝カフェで配信のこと考えてニヤけてしまいました笑」

ネタ・軽め系：
「配信中の猫ちゃん、完全に寝てましたよねw」
「その髪型めっちゃ似合ってます！でも寝癖かと思いました（笑）」
「今日のサムネ、ちょっと盛りすぎじゃないですか？w」
「昨日の配信、終了時刻に気づかず延長してましたよね笑」

【❌ 絶対禁止の悪い例】
以下のようなプレースホルダー記号を含む文章は絶対に生成しないでください：
❌「○○さんの配信いつも見てます」→ 配信者を特定の名前で呼ばない
❌「○○が気になっていて質問したいです」→ 具体的な話題を明示する
❌「○○について教えてください」→ 何について聞きたいか具体的に書く
❌「最近○○にハマってます」→ 何にハマっているか具体的に書く
❌「○○のゲーム実況してほしいです」→ ゲーム名を具体的に書く
❌「〇〇さんみたいに上手くできなかった」→ 「そんなに上手くできなかった」等に言い換え

配信者への呼びかけは省略するか、「配信」「あなた」「そちら」等の一般的な表現を使用してください。

【生成条件】
- 日本語で生成してください
- マシュマロの匿名メッセージとして自然な文章
- ペルソナに合った言葉遣い・文体
- 真面目度が低い場合はネタやツッコミどころのある内容
- 真面目度が高い場合は質問や悩み相談
- 距離感に応じた敬語/タメ口の使い分け
- 文章量の設定に応じて50〜300文字程度で調整
- 絵文字は控えめに（0〜2個程度）
- メッセージ本文のみを出力（説明や前置きは不要）${varietyHint}
- 具体的な内容で、実際に送られそうな自然なメッセージにする
- 配信者の名前を特定せず、「配信」「あなた」などの一般的表現を使う
- 記号（○ 〇 ● □ ■）を一切使用しない - これは最優先ルールです

【最終確認】
生成したメッセージに ○ 〇 ● □ ■ XX などの記号が含まれていないことを必ず確認してください。
含まれている場合は、そのメッセージを破棄して別のメッセージを生成してください。

メッセージ:
`;
  } else {
    // English
    const ageLabel = `${persona.age}s`;
    const viewerHistoryLabels = t('viewerHistoryLabels');
    const enthusiasmLabels = t('enthusiasmLabels');

    // 性別と職業の英語変換
    const genderMap = { male: 'Male', female: 'Female', other: 'Other' };
    const occupationMap = {
      student: 'Student',
      employee: 'Employee',
      freelancer: 'Freelancer',
      homemaker: 'Homemaker',
      unemployed: 'Unemployed',
      other: 'Other'
    };

    // 既存トピックがある場合の追加指示
    let diversityInstruction = '';
    if (existingTopics.length > 0) {
      diversityInstruction = `
【IMPORTANT: Content Diversity】
The following topics have already been generated:
${existingTopics.map((topic, i) => `${i + 1}. ${topic}`).join('\n')}

**You MUST generate a message with a DIFFERENT topic, angle, or tone from the above.**
Avoid repeating similar content or expressions.
`;
    }

    // キーワード指示
    const messageTypeInstruction = getMessageTypePrompt(messageType, language);
    let keywordInstruction = '';
    const includeKeywords = getEnabledKeywords('include');
    const excludeKeywords = getEnabledKeywords('exclude');

    if (includeKeywords.length > 0) {
      keywordInstruction += `
【Topics/Elements to Include】
Please include content related to the following keywords:
${includeKeywords.map(kw => `- ${kw}`).join('\n')}

Generate questions, feedback, or requests that touch on these topics.
`;
    }

    if (excludeKeywords.length > 0) {
      keywordInstruction += `
【Topics/Elements to Exclude】
NEVER include content related to the following keywords:
${excludeKeywords.map(kw => `- ${kw}`).join('\n')}

Do not mention or refer to these topics at all.
`;
    }

    // 複数件生成時の多様性のヒント
    let varietyHint = '';
    if (totalCount > 1) {
      varietyHint = `
- Aim for diverse topics (e.g., stream feedback, questions, encouragement, sharing daily life, advice requests, jokes, suggestions, etc.)
- Approach from different angles
`;
    }

    return `
You are a viewer of a live stream. Based on the following persona information, generate ONE anonymous message (like Marshmallow) to send to the streamer.

【🚨 CRITICAL WARNING 🚨】
NEVER use the following placeholder symbols:
❌ ○ (circle)
❌ 〇 (full-width zero)
❌ ● (filled circle)
❌ □ (square)
❌ ■ (filled square)
❌ XX or [~] or any placeholder symbols

Messages containing these symbols are COMPLETELY INVALID. They will be immediately rejected if detected.
${messageTypeInstruction}
${keywordInstruction}
【Persona Information】
- Age: ${ageLabel}
- Gender: ${genderMap[persona.gender]}
- Occupation: ${occupationMap[persona.occupation]}
- Viewer History: ${viewerHistoryLabels[persona.viewerHistory]}
- Enthusiasm: ${enthusiasmLabels[persona.enthusiasm]}
- Seriousness: ${settings.seriousness}/5 (1=joking, 5=serious)
- Distance: ${settings.distance}/5 (1=reserved, 5=friendly)
- Length: ${settings.length}/5 (1=short, 5=long)
${diversityInstruction}
【✅ GOOD EXAMPLES of Real Marshmallow Messages】
Reference these natural and specific messages:

Support/Feedback:
"I always look forward to your streams! Yesterday's gameplay was hilarious"
"I tried that recipe you mentioned on stream. It turned out amazing!"
"The rainy day stream had such a cozy vibe. Would love more like that"
"That horror game playthrough was epic! Can't wait for the next part"

Questions/Advice:
"What microphone do you use? The audio quality is really good"
"I've been struggling with work lately... your streams always cheer me up"
"Any horror game recommendations? I trust your taste"
"What editing software do you use? Trying to learn"

Casual Sharing:
"I fell asleep on the train today and woke up thinking about your stream lol"
"Saw that new snack at the store you mentioned. Had to try it"
"It's getting cold here. Hope you're staying warm!"
"Was at a cafe this morning and caught myself smiling thinking about the stream"

Playful/Funny:
"Your cat was completely passed out during the stream lmao"
"That new hairstyle looks great! Though I thought it was bedhead at first haha"
"Today's thumbnail is a bit much, don't you think? 😂"
"You totally lost track of time and went over schedule yesterday lol"

【❌ FORBIDDEN BAD EXAMPLES】
NEVER generate placeholder-based messages like these:
❌ "I love watching XX stream" → Don't use specific names
❌ "I wanted to ask about XX" → Be specific about the topic
❌ "Please play XX game" → Specify the actual game name
❌ "I'm interested in XX topic" → State what topic specifically
❌ "Tell me about XX" → Ask about something concrete
❌ "You're better than XX at this" → Use "better than me" or similar

Refer to the streamer using general terms like "your stream", "you", "the channel", etc.

【Generation Requirements】
- Write in English
- Natural message as anonymous feedback
- Tone and style appropriate for the persona
- If seriousness is low: funny, quirky, or playful content
- If seriousness is high: genuine questions or concerns
- Adjust formality based on distance setting
- Adjust length based on length setting (50-300 characters approximately)
- Use emojis sparingly (0-2)
- Output only the message text (no explanations or preambles)${varietyHint}
- Be specific and concrete - write messages that sound real
- Don't specify the streamer's name - use general terms like "your stream" or "you"
- Do NOT use symbols (○ 〇 ● □ ■ XX) - this is the TOP PRIORITY rule

【FINAL CHECK】
Before outputting, verify your message does NOT contain: ○ 〇 ● □ ■ XX or any placeholder symbols.
If it does, discard it and generate a different message.

Message:
`;
  }
}

/**
 * メッセージにプレースホルダー記号が含まれているかチェック
 * @param {string} text - チェックするテキスト
 * @returns {boolean} プレースホルダーが含まれている場合はtrue
 */
function containsPlaceholders(text) {
  // 禁止記号: ○, 〇（全角ゼロ）, ●, □, ■, XX, xx
  const placeholderPatterns = [
    /[○〇●□■]/,  // 日本語の記号
    /\bXX\b/i,     // XX (大文字小文字問わず)
    /\[.*?\]/,     // [something] のような表記
  ];

  return placeholderPatterns.some(pattern => pattern.test(text));
}

/**
 * メッセージを生成（1件）- プレースホルダー検証付き
 * @param {Array<string>} existingTopics - 既存のトピックリスト
 * @param {number} messageNumber - メッセージ番号
 * @param {number} totalCount - 生成する総数
 * @returns {Promise<string>} 生成されたメッセージ
 */
async function generateSingleMessage(existingTopics = [], messageNumber = 1, totalCount = 1) {
  if (!initializeGeminiAI()) {
    throw new Error('API initialization failed');
  }

  const maxRetries = 3;
  let lastError = null;

  // 最大3回までリトライ
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const prompt = generatePrompt(existingTopics, messageNumber, totalCount);

      // Gemini API REST エンドポイント
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

      const requestBody = {
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.9,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      // レスポンスからテキストを抽出
      if (data.candidates && data.candidates.length > 0) {
        const candidate = data.candidates[0];
        if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
          const generatedText = candidate.content.parts[0].text.trim();

          // プレースホルダー検証
          if (containsPlaceholders(generatedText)) {
            console.warn(`Attempt ${attempt + 1}: Generated message contains placeholders. Retrying...`);
            console.warn(`Rejected message: ${generatedText.substring(0, 100)}...`);

            // リトライ前に少し待機
            await new Promise(resolve => setTimeout(resolve, 500));
            continue;
          }

          // 検証OK - メッセージを返す
          return generatedText;
        }
      }

      throw new Error('No content generated');
    } catch (error) {
      lastError = error;
      if (attempt < maxRetries - 1) {
        console.warn(`Attempt ${attempt + 1} failed:`, error.message);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  // 全てのリトライが失敗
  throw new Error(`Failed after ${maxRetries} attempts: ${lastError?.message || 'Unknown error'}`);
}

/**
 * 複数のメッセージを生成
 */
async function generateMessages() {
  const count = parseInt(document.getElementById('countInput').value);
  const generateBtn = document.getElementById('generateBtn');
  const messagesContainer = document.getElementById('messagesContainer');
  const welcomeMessage = document.getElementById('welcomeMessage');

  // ウェルカムメッセージを非表示
  if (welcomeMessage) {
    welcomeMessage.style.display = 'none';
  }

  // ボタンを無効化
  generateBtn.disabled = true;
  generateBtn.textContent = t('generating');

  // ローディング表示を追加
  const loadingCard = document.createElement('div');
  loadingCard.className = 'loading-card';
  loadingCard.id = 'loadingCard';
  loadingCard.innerHTML = `
    <div class="loading-spinner"></div>
    <div class="loading-text">${t('generating')}</div>
  `;
  messagesContainer.appendChild(loadingCard);

  // 既存トピックを追跡（このセッションで生成されたメッセージの要約）
  const generatedTopics = [];

  // メッセージを順次生成
  for (let i = 0; i < count; i++) {
    try {
      // 既存トピックと現在の番号、総数を渡して生成
      const messageText = await generateSingleMessage(generatedTopics, i + 1, count);

      // メッセージを保存
      const message = {
        id: Date.now() + i,
        text: messageText,
        persona: { ...personaSettings },
        timestamp: new Date().toISOString(),
      };
      messages.push(message);

      // 生成されたメッセージのトピック（簡易版）を記録
      // 最初の50文字または全文（短い場合）を使用
      const topicSummary = messageText.length > 50
        ? messageText.substring(0, 50) + '...'
        : messageText;
      generatedTopics.push(topicSummary);

      // メッセージカードを表示
      displayMessage(message);

      // 次のメッセージまで0.5秒待機
      if (i < count - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error('Error generating message:', error);
      showToast(t('generationError'));
      break;
    }
  }

  // ローディングを削除
  loadingCard.remove();

  // ボタンを再有効化
  generateBtn.disabled = false;
  generateBtn.innerHTML = `<span data-i18n="generateButton">${t('generateButton')}</span>`;

  // 最下部にスクロール
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ===== Message Display Functions =====

/**
 * メッセージカードを表示
 * @param {Object} message - メッセージオブジェクト
 */
function displayMessage(message) {
  const messagesContainer = document.getElementById('messagesContainer');

  const messageCard = document.createElement('div');
  messageCard.className = 'message-card';
  messageCard.dataset.messageId = message.id;

  // ペルソナ情報のラベル
  const ageLabel = currentLanguage === 'ja' ? `${message.persona.age}代` : `${message.persona.age}s`;
  const occupationLabel = t(message.persona.occupation);
  const viewerHistoryLabel = t('viewerHistoryLabels')[message.persona.viewerHistory];

  messageCard.innerHTML = `
    <div class="message-text">${escapeHtml(message.text)}</div>
    <div class="message-meta">
      <span class="meta-tag">${ageLabel}</span>
      <span class="meta-tag">${occupationLabel}</span>
      <span class="meta-tag">${viewerHistoryLabel}</span>
    </div>
    <div class="message-actions">
      <button class="btn-action" onclick="copyMessage(${message.id})">
        ${t('copyMessage')}
      </button>
      <button class="btn-action" onclick="saveAsImage(${message.id})">
        ${t('saveAsImage')}
      </button>
      <button class="btn-action" onclick="deleteMessage(${message.id})">
        ${t('deleteMessage')}
      </button>
    </div>
  `;

  messagesContainer.appendChild(messageCard);
}

/**
 * HTMLエスケープ
 * @param {string} text - エスケープするテキスト
 * @returns {string} エスケープされたテキスト
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * メッセージをコピー
 * @param {number} messageId - メッセージID
 */
async function copyMessage(messageId) {
  const message = messages.find(m => m.id === messageId);
  if (!message) return;

  try {
    await navigator.clipboard.writeText(message.text);
    showToast(t('copied'));
  } catch (error) {
    console.error('Failed to copy:', error);
  }
}

/**
 * メッセージを画像として保存
 * @param {number} messageId - メッセージID
 */
async function saveAsImage(messageId) {
  const messageCard = document.querySelector(`[data-message-id="${messageId}"]`);
  if (!messageCard) return;

  try {
    // ボタンを一時的に非表示にする
    const actionsDiv = messageCard.querySelector('.message-actions');
    const originalDisplay = actionsDiv.style.display;
    actionsDiv.style.display = 'none';

    // メッセージカードをクローンして、専用のコンテナに配置
    const clone = messageCard.cloneNode(true);

    // ペルソナ情報（message-meta）を削除
    const cloneMeta = clone.querySelector('.message-meta');
    if (cloneMeta) {
      cloneMeta.remove();
    }

    // ボタンを削除
    const cloneActions = clone.querySelector('.message-actions');
    if (cloneActions) {
      cloneActions.remove();
    }

    // 画像保存用のテーマ設定に基づいて背景色を決定
    const bgColor = imageTheme === 'light' ? '#FFF5F7' : '#1a1a2e';
    const cardBgColor = imageTheme === 'light' ? '#FFE4E1' : '#2d2d44';
    const textColor = imageTheme === 'light' ? '#333333' : '#eaeaea';

    const container = document.createElement('div');
    container.style.cssText = `
      position: fixed;
      left: -9999px;
      top: -9999px;
      padding: 40px;
      background: ${bgColor};
      width: 600px;
      box-sizing: border-box;
    `;

    // クローンのスタイルを調整
    clone.style.cssText = `
      margin: 0;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      background-color: ${cardBgColor};
      border-radius: 16px;
      padding: 24px;
    `;

    // メッセージテキストの色を調整
    const cloneText = clone.querySelector('.message-text');
    if (cloneText) {
      cloneText.style.color = textColor;
    }

    container.appendChild(clone);
    document.body.appendChild(container);

    // html2canvasで高品質にキャプチャ
    const canvas = await html2canvas(container, {
      backgroundColor: bgColor,
      scale: 3, // 高解像度
      logging: false,
      useCORS: true,
      allowTaint: true,
      windowWidth: 600,
      windowHeight: container.scrollHeight,
    });

    // コンテナを削除
    document.body.removeChild(container);

    // ボタンを再表示
    actionsDiv.style.display = originalDisplay;

    // 画像をダウンロード
    const link = document.createElement('a');
    link.download = `marogem-message-${messageId}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('Failed to save as image:', error);
    showToast('画像の保存に失敗しました');

    // エラー時もボタンを再表示
    const actionsDiv = messageCard.querySelector('.message-actions');
    if (actionsDiv) {
      actionsDiv.style.display = '';
    }
  }
}

/**
 * メッセージを削除
 * @param {number} messageId - メッセージID
 */
function deleteMessage(messageId) {
  const messageCard = document.querySelector(`[data-message-id="${messageId}"]`);
  if (!messageCard) return;

  // 配列から削除
  messages = messages.filter(m => m.id !== messageId);

  // DOMから削除
  messageCard.style.animation = 'slideOut 0.3s ease';
  setTimeout(() => {
    messageCard.remove();

    // メッセージが0件の場合、ウェルカムメッセージを表示
    if (messages.length === 0) {
      const welcomeMessage = document.getElementById('welcomeMessage');
      if (welcomeMessage) {
        welcomeMessage.style.display = 'flex';
      }
    }
  }, 300);
}

// ===== Settings Export/Import Functions =====

/**
 * 設定をエクスポート（JSONファイルとして保存）
 */
function exportSettings() {
  const settings = {
    version: "1.0",
    persona: { ...personaSettings },
    messageTendency: { ...messageTendency },
    generation: {
      count: generationCount,
      messageType: messageType,
    },
    keywords: {
      include: [...keywordData.include],
      exclude: [...keywordData.exclude],
    },
    language: currentLanguage,
    theme: currentTheme,
  };

  const blob = new Blob([JSON.stringify(settings, null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `persona-settings-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);

  showToast(t('settingsSaved'));
}

/**
 * 設定をインポート（JSONファイルから読み込み）
 * @param {File} file - 読み込むJSONファイル
 */
function importSettings(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const settings = JSON.parse(e.target.result);

      // バリデーション
      if (!settings.version || !settings.persona) {
        throw new Error('Invalid settings file');
      }

      // 設定を適用
      applySettings(settings);
      showToast(t('settingsLoaded'));
    } catch (error) {
      console.error('Failed to load settings:', error);
      showToast(t('invalidSettingsFile'));
    }
  };
  reader.readAsText(file);
}

/**
 * 設定を適用
 * @param {Object} settings - 設定オブジェクト
 */
function applySettings(settings) {
  // ペルソナ設定
  if (settings.persona) {
    personaSettings = { ...settings.persona };

    // UIに反映
    document.getElementById('ageSlider').value = personaSettings.age;
    updateAgeLabel();

    document.querySelector(`input[name="gender"][value="${personaSettings.gender}"]`).checked = true;
    document.getElementById('occupationSelect').value = personaSettings.occupation;

    document.getElementById('viewerHistorySlider').value = personaSettings.viewerHistory;
    updateViewerHistoryLabel();

    document.getElementById('enthusiasmSlider').value = personaSettings.enthusiasm;
    updateEnthusiasmLabel();
  }

  // メッセージ傾向
  if (settings.messageTendency) {
    messageTendency = { ...settings.messageTendency };

    document.getElementById('seriousnessSlider').value = messageTendency.seriousness;
    document.getElementById('seriousnessValue').textContent = messageTendency.seriousness;

    document.getElementById('distanceSlider').value = messageTendency.distance;
    document.getElementById('distanceValue').textContent = messageTendency.distance;

    document.getElementById('lengthSlider').value = messageTendency.length;
    document.getElementById('lengthValue').textContent = messageTendency.length;
  }

  // 生成設定
  if (settings.generation) {
    generationCount = settings.generation.count;
    document.getElementById('countInput').value = generationCount;

    // メッセージタイプ（存在しない場合はデフォルト値）
    if (settings.generation.messageType) {
      messageType = settings.generation.messageType;
      document.getElementById('messageTypeSelect').value = messageType;
      updateMessageTypeDescription();
    }
  }

  // 言語設定
  if (settings.language) {
    currentLanguage = settings.language;
    updateUILanguage();
    saveToLocalStorage();
  }

  // テーマ設定
  if (settings.theme) {
    currentTheme = settings.theme;
    applyTheme();
    saveToLocalStorage();
  }

  // キーワード設定
  if (settings.keywords) {
    if (settings.keywords.include) {
      keywordData.include = settings.keywords.include.map(kw => ({
        ...kw,
        id: kw.id || `include_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      }));
    }
    if (settings.keywords.exclude) {
      keywordData.exclude = settings.keywords.exclude.map(kw => ({
        ...kw,
        id: kw.id || `exclude_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      }));
    }
    renderKeywords('include');
    renderKeywords('exclude');
    saveKeywordsToLocalStorage();
  }
}

// ===== UI Update Functions =====

/**
 * メッセージタイプの説明文を更新
 */
function updateMessageTypeDescription() {
  const selectedType = document.getElementById('messageTypeSelect').value;
  const descriptionElement = document.getElementById('messageTypeDescription');
  const descKey = `messageTypeDesc_${selectedType}`;
  descriptionElement.textContent = t(descKey);
}

/**
 * 年齢ラベルを更新
 */
function updateAgeLabel() {
  const age = parseInt(document.getElementById('ageSlider').value);
  personaSettings.age = age;
  const ageLabel = currentLanguage === 'ja' ? `${age}代` : `${age}s`;
  document.getElementById('ageValue').textContent = ageLabel;
}

/**
 * 視聴歴ラベルを更新
 */
function updateViewerHistoryLabel() {
  const value = parseInt(document.getElementById('viewerHistorySlider').value);
  personaSettings.viewerHistory = value;
  const labels = t('viewerHistoryLabels');
  document.getElementById('viewerHistoryValue').textContent = labels[value];
}

/**
 * 熱量ラベルを更新
 */
function updateEnthusiasmLabel() {
  const value = parseInt(document.getElementById('enthusiasmSlider').value);
  personaSettings.enthusiasm = value;
  const labels = t('enthusiasmLabels');
  document.getElementById('enthusiasmValue').textContent = labels[value];
}

// ===== Event Listeners =====

/**
 * イベントリスナーを初期化
 */
function initializeEventListeners() {
  // 言語切り替え
  document.getElementById('languageToggle').addEventListener('click', toggleLanguage);

  // テーマ切り替え
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // APIキー表示/非表示
  document.getElementById('toggleApiKeyBtn').addEventListener('click', toggleApiKeyVisibility);

  // APIキー入力
  document.getElementById('apiKeyInput').addEventListener('input', (e) => {
    apiKey = e.target.value;
    saveToLocalStorage();
  });

  // モデル選択
  document.getElementById('modelSelect').addEventListener('change', (e) => {
    modelName = e.target.value;
    saveToLocalStorage();
  });

  // 年齢スライダー
  document.getElementById('ageSlider').addEventListener('input', updateAgeLabel);

  // 性別選択
  document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      personaSettings.gender = e.target.value;
    });
  });

  // 職業選択
  document.getElementById('occupationSelect').addEventListener('change', (e) => {
    personaSettings.occupation = e.target.value;
  });

  // 視聴歴スライダー
  document.getElementById('viewerHistorySlider').addEventListener('input', updateViewerHistoryLabel);

  // 熱量スライダー
  document.getElementById('enthusiasmSlider').addEventListener('input', updateEnthusiasmLabel);

  // 真面目度スライダー
  document.getElementById('seriousnessSlider').addEventListener('input', (e) => {
    messageTendency.seriousness = parseInt(e.target.value);
    document.getElementById('seriousnessValue').textContent = e.target.value;
  });

  // 距離感スライダー
  document.getElementById('distanceSlider').addEventListener('input', (e) => {
    messageTendency.distance = parseInt(e.target.value);
    document.getElementById('distanceValue').textContent = e.target.value;
  });

  // 文章量スライダー
  document.getElementById('lengthSlider').addEventListener('input', (e) => {
    messageTendency.length = parseInt(e.target.value);
    document.getElementById('lengthValue').textContent = e.target.value;
  });

  // メッセージタイプ選択
  document.getElementById('messageTypeSelect').addEventListener('change', (e) => {
    messageType = e.target.value;
    updateMessageTypeDescription();
  });

  // 生成件数入力
  document.getElementById('countInput').addEventListener('input', (e) => {
    generationCount = parseInt(e.target.value);
  });

  // UIテーマ選択
  document.querySelectorAll('input[name="uiTheme"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentTheme = e.target.value;
      applyTheme();
      saveToLocalStorage();
    });
  });

  // 画像テーマ選択
  document.querySelectorAll('input[name="imageTheme"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      imageTheme = e.target.value;
      saveToLocalStorage();
    });
  });

  // メッセージ生成ボタン
  document.getElementById('generateBtn').addEventListener('click', generateMessages);

  // 設定保存
  document.getElementById('saveSettingsBtn').addEventListener('click', exportSettings);

  // 設定読込
  document.getElementById('loadSettingsBtn').addEventListener('click', () => {
    document.getElementById('loadSettingsInput').click();
  });

  document.getElementById('loadSettingsInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      importSettings(file);
    }
    // ファイル選択をリセット（同じファイルを再度選択可能にする）
    e.target.value = '';
  });

  // キーワード管理
  // 折りたたみ機能
  const keywordSectionTitle = document.getElementById('keywordSectionTitle');
  if (keywordSectionTitle) {
    keywordSectionTitle.addEventListener('click', toggleKeywordSection);
  }

  // 含めるキーワードの追加
  const includeKeywordInput = document.getElementById('includeKeywordInput');
  const addIncludeKeywordBtn = document.getElementById('addIncludeKeywordBtn');

  if (addIncludeKeywordBtn) {
    addIncludeKeywordBtn.addEventListener('click', () => {
      if (addKeyword('include', includeKeywordInput.value)) {
        includeKeywordInput.value = '';
      }
    });
  }

  if (includeKeywordInput) {
    includeKeywordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (addKeyword('include', includeKeywordInput.value)) {
          includeKeywordInput.value = '';
        }
      }
    });
  }

  // 除外するキーワードの追加
  const excludeKeywordInput = document.getElementById('excludeKeywordInput');
  const addExcludeKeywordBtn = document.getElementById('addExcludeKeywordBtn');

  if (addExcludeKeywordBtn) {
    addExcludeKeywordBtn.addEventListener('click', () => {
      if (addKeyword('exclude', excludeKeywordInput.value)) {
        excludeKeywordInput.value = '';
      }
    });
  }

  if (excludeKeywordInput) {
    excludeKeywordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (addKeyword('exclude', excludeKeywordInput.value)) {
          excludeKeywordInput.value = '';
        }
      }
    });
  }
}

// ===== Initialization =====

/**
 * アプリケーションを初期化
 */
function initializeApp() {
  // LocalStorageから設定を読み込み
  loadFromLocalStorage();

  // キーワードをLocalStorageから読み込み
  loadKeywordsFromLocalStorage();

  // テーマを適用
  applyTheme();

  // UIの言語を更新
  updateUILanguage();

  // イベントリスナーを初期化
  initializeEventListeners();

  // 初期値のラベルを更新
  updateAgeLabel();
  updateViewerHistoryLabel();
  updateEnthusiasmLabel();
  updateMessageTypeDescription();

  console.log('MaroGem initialized successfully');
}

// DOMContentLoadedイベントでアプリケーションを初期化
document.addEventListener('DOMContentLoaded', initializeApp);
