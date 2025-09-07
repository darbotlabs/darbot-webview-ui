/* eslint-env node */
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';

// ----- Rollup Config -----

export default [
	{
		context: 'this',
		input: 'src/index-rollup.ts',
		output: [
			{
				file: 'dist/toolkit.js',
				format: 'esm',
			},
			{
				file: 'dist/toolkit.min.js',
				format: 'esm',
				plugins: [terser()],
			},
		],
		plugins: [
			del({targets: 'dist/*'}),
			nodeResolve(),
			commonjs(),
			typescript(),
			filesize({
				showMinifiedSize: false,
				showBrotliSize: true,
			}),
		],
	},
];
