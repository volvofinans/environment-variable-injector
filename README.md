# Environment-variable-injector plugin for release-it

This [release-it plugin](https://github.com/release-it/release-it/blob/master/docs/plugins.md) injects environment variables in the release-it process by prompting the user to enter environment variables.

```
npm install --save-dev environment-variable-injector
```

In [release-it](https://github.com/release-it/release-it) config:

```json
"plugins": {
    "environment-variable-injector": {
        "variables": {
            "USERNAME": {
                "type": "input",
                "message": "Enter username: "
            },
            "PASSWORD": {
                "type": "password",
                "message": "Enter password: "
            }
        }
    }
}
```

## Options

| option         | default value  | description |
| -------------- | -------------- | ----------- |
| type       | `'input'` | Type of the prompt. See https://github.com/enquirer/enquirer#-prompts. Please note that only a subset of prompts and configuration have been implemented. |
| mask   | `true` | Customize how the input is masked. Only applicable for type `'password'` |
| message   | `<variable name>` | The message to display when the prompt is rendered. |

