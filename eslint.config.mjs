import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Extend base configurations
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:prettier/recommended'),
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];
