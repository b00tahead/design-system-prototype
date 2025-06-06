import { p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-Bf7Vp8VI.js';
export { s as setNonce } from './index-Bf7Vp8VI.js';

/*
 Stencil Client Patch Browser v4.33.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([], options);
});
//# sourceMappingURL=design-system-prototype.js.map

//# sourceMappingURL=design-system-prototype.js.map