module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		// ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'error',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
	},
};
