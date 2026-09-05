import js from '@eslint/js'
import {defineConfig,globalIgnores} from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import quality from './eslint-rules/index.cjs'
export default defineConfig([{languageOptions:{globals:globals.browser}},js.configs.recommended,...tseslint.configs.strict,reactHooks.configs.flat.recommended,{files:['src/**/*.{ts,tsx}'],plugins:{quality,'react-refresh':reactRefresh},rules:{'@typescript-eslint/no-unused-vars':['error',{argsIgnorePattern:'^_',varsIgnorePattern:'^_'}],'react-refresh/only-export-components':['warn',{allowConstantExport:true}],'quality/max-lines':['error',{max:350}],'quality/no-direct-console':['error',{logger:'an application logging helper'}]}},{files:['src/store/Store.tsx'],rules:{'react-refresh/only-export-components':'off'}},{files:['eslint-rules/**/*.cjs'],languageOptions:{sourceType:'commonjs',globals:{module:'readonly',require:'readonly'}},rules:{'@typescript-eslint/no-require-imports':'off'}},globalIgnores(['node_modules/**','dist/**','coverage/**','**/*.tsbuildinfo'])])
