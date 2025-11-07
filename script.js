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
    count: "生成件数",
    generateButton: "🎲 メッセージを生成",

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
    count: "Count",
    generateButton: "🎲 Generate Messages",

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

    // Age Label
    ageLabel: (age) => `${age}s`,
  }
};

// ===== Global State =====
let currentLanguage = 'ja';
let currentTheme = 'light';
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
}

/**
 * LocalStorageにデータを保存
 */
function saveToLocalStorage() {
  localStorage.setItem('marogem_apiKey', apiKey);
  localStorage.setItem('marogem_model', modelName);
  localStorage.setItem('marogem_language', currentLanguage);
  localStorage.setItem('marogem_theme', currentTheme);
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
 * プロンプトを生成
 * @returns {string} 生成されたプロンプト
 */
function generatePrompt() {
  const persona = personaSettings;
  const settings = messageTendency;
  const language = currentLanguage;

  if (language === 'ja') {
    const ageLabel = `${persona.age}代`;
    const viewerHistoryLabels = t('viewerHistoryLabels');
    const enthusiasmLabels = t('enthusiasmLabels');

    return `
あなたは配信の視聴者です。以下のペルソナ情報に基づいて、配信者に送るマシュマロ（匿名メッセージ）を1件だけ生成してください。

【ペルソナ情報】
- 年齢：${ageLabel}
- 性別：${t(persona.gender)}
- 職業：${t(persona.occupation)}
- 視聴歴：${viewerHistoryLabels[persona.viewerHistory]}
- 熱量：${enthusiasmLabels[persona.enthusiasm]}
- 真面目度：${settings.seriousness}/5（1=ネタ寄り、5=真面目）
- 距離感：${settings.distance}/5（1=遠慮がち、5=フレンドリー）
- 文章量：${settings.length}/5（1=短文、5=長文）

【生成条件】
- 日本語で生成してください
- マシュマロの匿名メッセージとして自然な文章
- ペルソナに合った言葉遣い・文体
- 真面目度が低い場合はネタやツッコミどころのある内容
- 真面目度が高い場合は質問や悩み相談
- 距離感に応じた敬語/タメ口の使い分け
- 文章量の設定に応じて50〜300文字程度で調整
- 絵文字は控えめに（0〜2個程度）
- メッセージ本文のみを出力（説明や前置きは不要）

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

    return `
You are a viewer of a live stream. Based on the following persona information, generate ONE anonymous message (like Marshmallow) to send to the streamer.

【Persona Information】
- Age: ${ageLabel}
- Gender: ${genderMap[persona.gender]}
- Occupation: ${occupationMap[persona.occupation]}
- Viewer History: ${viewerHistoryLabels[persona.viewerHistory]}
- Enthusiasm: ${enthusiasmLabels[persona.enthusiasm]}
- Seriousness: ${settings.seriousness}/5 (1=joking, 5=serious)
- Distance: ${settings.distance}/5 (1=reserved, 5=friendly)
- Length: ${settings.length}/5 (1=short, 5=long)

【Generation Requirements】
- Write in English
- Natural message as anonymous feedback
- Tone and style appropriate for the persona
- If seriousness is low: funny, quirky, or playful content
- If seriousness is high: genuine questions or concerns
- Adjust formality based on distance setting
- Adjust length based on length setting (50-300 characters approximately)
- Use emojis sparingly (0-2)
- Output only the message text (no explanations or preambles)

Message:
`;
  }
}

/**
 * メッセージを生成（1件）
 * @returns {Promise<string>} 生成されたメッセージ
 */
async function generateSingleMessage() {
  if (!initializeGeminiAI()) {
    throw new Error('API initialization failed');
  }

  const prompt = generatePrompt();

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
      return candidate.content.parts[0].text.trim();
    }
  }

  throw new Error('No content generated');
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

  // メッセージを順次生成
  for (let i = 0; i < count; i++) {
    try {
      const messageText = await generateSingleMessage();

      // メッセージを保存
      const message = {
        id: Date.now() + i,
        text: messageText,
        persona: { ...personaSettings },
        timestamp: new Date().toISOString(),
      };
      messages.push(message);

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
    const canvas = await html2canvas(messageCard, {
      backgroundColor: currentTheme === 'light' ? '#FFE4E1' : '#2d2d44',
      scale: 2,
      logging: false,
    });

    const link = document.createElement('a');
    link.download = `maro-message-${messageId}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('Failed to save as image:', error);
    showToast('画像の保存に失敗しました');
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
}

// ===== UI Update Functions =====

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

  // 生成件数入力
  document.getElementById('countInput').addEventListener('input', (e) => {
    generationCount = parseInt(e.target.value);
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
}

// ===== Initialization =====

/**
 * アプリケーションを初期化
 */
function initializeApp() {
  // LocalStorageから設定を読み込み
  loadFromLocalStorage();

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

  console.log('MaroGem initialized successfully');
}

// DOMContentLoadedイベントでアプリケーションを初期化
document.addEventListener('DOMContentLoaded', initializeApp);
