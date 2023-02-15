module.export = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-typescript/base',
		'prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	plugins: [
		'prettier',
		'@typescript-eslint/eslint-plugin',
		'@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.eslint.json',
		ecmaVersion: 'latest',
		ecmaFeatures: {
			modules: true,
		},
		sourceType: 'module',
	},
	rules: {
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/extensions': 'off',
	},
};
