import yarnpkgShell from '@yarnpkg/shell';

let code = 0;
const scripts = ['npx eslint --ext=.js,.cjs,.mjs . --fix'];



scripts.forEach(async (v, i) => {
  code = await yarnpkgShell.execute(scripts[i]);
  process.exitCode = code > 0 ? code : 0;
});
