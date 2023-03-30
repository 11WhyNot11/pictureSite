module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	// 'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'linebreak-style': [
			'error',
			'windows'
		],
		'semi': [
			'warn',
			'always'
		],
		'no-unused-vars': [
			'warn'
		]
	}
};
