import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_KKqFjjkC.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"obra/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/obra","isIndex":false,"type":"page","pattern":"^\\/obra\\/?$","segments":[[{"content":"obra","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/obra.astro","pathname":"/obra","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"prensa/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/prensa","isIndex":false,"type":"page","pattern":"^\\/prensa\\/?$","segments":[[{"content":"prensa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/prensa.astro","pathname":"/prensa","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"sobremi/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobremi","isIndex":false,"type":"page","pattern":"^\\/sobremi\\/?$","segments":[[{"content":"sobremi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobremi.astro","pathname":"/sobremi","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"talleres/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/talleres","isIndex":false,"type":"page","pattern":"^\\/talleres\\/?$","segments":[[{"content":"talleres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/talleres.astro","pathname":"/talleres","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/_obra_.CEybQAvB.css"},{"type":"inline","content":".display-font[data-astro-cid-yfau6leq]{font-family:Playfair Display,Georgia,serif}\n"}],"routeData":{"route":"/[obra]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"obra","dynamic":true,"spread":false}]],"params":["obra"],"component":"src/pages/[obra].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/[obra].astro",{"propagation":"none","containsHead":true}],["C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/obra.astro",{"propagation":"none","containsHead":true}],["C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/prensa.astro",{"propagation":"none","containsHead":true}],["C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/sobremi.astro",{"propagation":"none","containsHead":true}],["C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/talleres.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CmgMKuEH.mjs","\u0000@astrojs-manifest":"manifest_DF7VtfeZ.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_HNMzFnoW.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_6wa50Hsa.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_NJpOUBm5.mjs","\u0000@astro-page:src/pages/obra@_@astro":"chunks/obra_B9kH_6Ui.mjs","\u0000@astro-page:src/pages/prensa@_@astro":"chunks/prensa_CPPIejuF.mjs","\u0000@astro-page:src/pages/sobremi@_@astro":"chunks/sobremi_By_neYez.mjs","\u0000@astro-page:src/pages/talleres@_@astro":"chunks/talleres_BRkh3Dc1.mjs","\u0000@astro-page:src/pages/[obra]@_@astro":"chunks/_obra__BqPBFZyY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DvscOX7p.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CaREk9lS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/abhaya-libre-latin-400-normal.Dd5jKrpB.woff2","/_astro/abhaya-libre-latin-ext-400-normal.BzuiGY9D.woff2","/_astro/abhaya-libre-sinhala-400-normal.UhLyP8vs.woff2","/_astro/abhaya-libre-latin-ext-400-normal.DcdB23kv.woff","/_astro/abhaya-libre-latin-400-normal.CbfI2SQ8.woff","/_astro/abhaya-libre-sinhala-400-normal.B7A4QZgd.woff","/_astro/_obra_.CEybQAvB.css","/preview.png","/obras/Cuadro1.jpg","/obras/Cuadro10.jpg","/obras/Cuadro11.jpg","/obras/Cuadro12.jpg","/obras/Cuadro13.jpg","/obras/Cuadro14.jpg","/obras/Cuadro15.jpg","/obras/Cuadro16.jpg","/obras/Cuadro17.jpg","/obras/Cuadro18.jpg","/obras/Cuadro19.jpg","/obras/Cuadro2.jpg","/obras/Cuadro20.jpg","/obras/Cuadro21.jpg","/obras/Cuadro22.jpg","/obras/Cuadro23.jpg","/obras/Cuadro24.jpg","/obras/Cuadro25.jpg","/obras/Cuadro26.jpg","/obras/Cuadro27.jpg","/obras/Cuadro28.jpg","/obras/Cuadro3.jpg","/obras/Cuadro4.jpg","/obras/Cuadro5.jpg","/obras/Cuadro6.jpg","/obras/Cuadro7.jpg","/obras/Cuadro8.jpg","/obras/Cuadro9.jpg","/img/DESEMBARCO EN EL `56.jpg","/img/foto-sobre-mi-1.jpg","/img/foto-talleres.jpg","/img/icon.png","/img/Imagen-principal-1.jpg","/img/logo.png","/_astro/hoisted.CaREk9lS.js","/404.html","/contacto/index.html","/obra/index.html","/prensa/index.html","/sobremi/index.html","/talleres/index.html","/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
