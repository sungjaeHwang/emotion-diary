module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    parser: '@babel/eslint-parser',
    plugins: ['react', 'prettier'],
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            "presets": ["@babel/preset-react"]
        },
    },
    ecmaFeatures: {
        jsx: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'prettier/prettier': 0,
        'import/extensions': 0,
        'no-use-before-define': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'no-shadow': 0,
        "react/react-in-jsx-scope": 0,
        'react/prop-types': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'react/display-name': 0
    }
};