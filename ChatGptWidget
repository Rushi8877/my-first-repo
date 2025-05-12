{
    "id": "com.rohitchouhan.sap.chatgptwidget",
    "version": "1.0.3",
    "name": "ChatGPT Widget",
    "description": "ChatGPT Custom Widget for SAP Analytics Cloud, making applications more useful and effective.",
    "newInstancePrefix": "ChatGptWidget",
    "vendor": "Rohit Chouhan",
    "eula": "",
    "license": "MIT",
    "icon": "https://raw.githubusercontent.com/SAP-Custom-Widget/ChatGptWidget/main/icon.png",
    "webcomponents": [
        {
            "kind": "main",
            "tag": "com-rohitchouhan-sap-chatgptwidget",
            "url": "https://cdn.jsdelivr.net/gh/SAP-Custom-Widget/ChatGptWidget@1.0.3/ChatGptWidget.js",
            "integrity": "",
            "ignoreIntegrity": true
        },
        {
            "kind": "builder",
            "tag": "com-rohitchouhan-sap-chatgptwidget-builder",
            "url": "https://cdn.jsdelivr.net/gh/SAP-Custom-Widget/ChatGptWidget@1.0.3/ChatGptWidget_Builder.js",
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
            "default": "gpt-4"
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
