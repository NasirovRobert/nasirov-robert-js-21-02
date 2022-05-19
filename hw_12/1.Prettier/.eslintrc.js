module.exports = {
    "env": { //указывает среды, в которых будет работать eslint
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [ // Правила, которые будет использовать eslint
        "airbnb",
        "plugin:@typescript-eslint/eslint-recommended", // Правила для проверки ts
        "plugin:@typescript-eslint/recommended"  // Правила для проверки ts
    ],
    // ignorePatterns: ['**/src/index.js'], // Игнорируемые пути

    "plugins": [ // Плагины, с которыми будет работать eslint
        "prettier",
        "@typescript-eslint" // Плагин для проверки ts
    ],
    "rules": {
        // "consistent-return": "error",
        'max-classes-per-file': ["error", 10], //устанавливаем предел обявление макс 10 классов в файле
        'no-useless-constructor': 'off',//отключаю правила только чтобы закоммитить для проверки
        'no-use-before-define': 'off', //отключаю правила только чтобы закоммитить для проверки
        'consistent-return': 'off', //отключаю правила только чтобы закоммитить для проверки
        'import/no-unresolved': 'off', //отключаю правила только чтобы закоммитить для проверки
        'import/extensions': 'off', //отключаю правила только чтобы закоммитить для проверки
        'no-return-assign': 'off', //отключаю правила только чтобы закоммитить для проверки
        'import/prefer-default-export': 'off', //отключаю правила только чтобы закоммитить для проверки
        //после отключения всех правил, остались тольео warnings(errors игнорируются)

    }
}
