{
    "id": "com.rushi.sap.chatgptwidget",
    "version": "1.0.3",
    "name": "ChatGPT Widget",
    "description": "ChatGPT Custom Widget for SAP Analytics Cloud, making applications more useful and effective.",
    "newInstancePrefix": "ChatGptWidget",
    "vendor": "Rushi",
    "eula": "",
    "license": "MIT",
    "icon": "raw.githubusercontent.com/Rushi8877/my-first-repo/refs/heads/featured/lesson/icon (1).png",
    "webcomponents": [
        {
            "kind": "main",
            "tag": "com-rushi-sap-chatgptwidget",
            "url": "raw.githubusercontent.com/Rushi8877/my-first-repo/refs/heads/featured/lesson/ChatGptWidget.js",
            "integrity": "",
            "ignoreIntegrity": true
        },
        {
            "kind": "builder",
            "tag": "com-rushi-sap-chatgptwidget-builder",
            "url": "raw.githubusercontent.com/Rushi8877/my-first-repo/refs/heads/featured/lesson/ChatGptWidget_Builder.js",
            "integrity": "",
            "ignoreIntegrity": true
        }
    ],
    "properties": {
        "apiKey": {
            "description": "API Key for ChatGPT",
            "type": "string",
            "default": "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"
        },
        "model": {
            "description": "OpenAI model to use",
            "type": "string",
            "default": "gpt-3.5-turbo"
        },
        "max_tokens": {
            "description": "Maximum Token Length for Response",
            "type": "integer",
            "default": 1024
        }
    },
    "methods": {
        "setApiKey": {
            "description": "Set API Key for ChatGPT",
            "parameters": [
                {
                    "name": "apiKey",
                    "type": "string",
                    "description": "API Key for ChatGPT"
                }
            ],
            "body": "this.apiKey = apiKey;"
        },
        "getApiKey": {
            "returnType": "string",
            "description": "Return API Key for ChatGPT",
            "body": "return this.apiKey;"
        },
        "setMax_tokens": {
            "description": "Set Maximum Token Length",
            "parameters": [
                {
                    "name": "max_tokens",
                    "type": "integer",
                    "description": "Maximum Token Length"
                }
            ],
            "body": "this.max_tokens = max_tokens;"
        },
        "getMax_tokens": {
            "returnType": "integer",
            "description": "Return Maximum Token Length",
            "body": "return this.max_tokens;"
        }
    },
    "events": {
        "onClick": {
            "description": "User Clicked."
        }
    }
}
