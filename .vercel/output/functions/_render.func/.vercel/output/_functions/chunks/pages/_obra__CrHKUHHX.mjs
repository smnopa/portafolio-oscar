/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_KKqFjjkC.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const links = [
    { href: "/sobremi", label: "Sobre m\xED" },
    { href: "/obra", label: "Obras" },
    { href: "/talleres", label: "Talleres" },
    { href: "/prensa", label: "Prensa" },
    { href: "/contacto", label: "Contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="h-1 bg-[#1A3A6E] w-full" data-astro-cid-3ef6ksr2></div> <nav class="lg:px-16 px-6 bg-white/95 backdrop-blur-sm shadow-sm flex flex-wrap items-center lg:py-0 py-3 sticky top-0 z-50" data-astro-cid-3ef6ksr2> <div class="flex-1 flex justify-between items-center" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center" data-astro-cid-3ef6ksr2> <img src="/img/logo.png" width="130" alt="Oscar Bautista — Pintor" data-astro-cid-3ef6ksr2> </a> </div> <label for="menu-toggle" class="cursor-pointer lg:hidden block p-1" data-astro-cid-3ef6ksr2> <svg class="fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" data-astro-cid-3ef6ksr2> <title>Menú</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" data-astro-cid-3ef6ksr2></path> </svg> </label> <input class="hidden" type="checkbox" id="menu-toggle" data-astro-cid-3ef6ksr2> <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu" data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <ul class="text-center items-center gap-x-8 pt-4 lg:gap-x-6 lg:flex lg:pt-0" data-astro-cid-3ef6ksr2> ${links.map(({ href, label }) => {
    const isActive = pathname === href || href !== "/" && pathname.startsWith(href);
    return renderTemplate`<li class="py-3 lg:py-0" data-astro-cid-3ef6ksr2> <a${addAttribute(href, "href")}${addAttribute([
      "nav-link relative text-sm uppercase tracking-widest font-semibold transition-colors pb-1",
      isActive ? "text-[#1A3A6E] active" : "text-gray-700 hover:text-[#1A3A6E]"
    ], "class:list")} data-astro-cid-3ef6ksr2> ${label} </a> </li>`;
  })} </ul> </nav> </div> </nav>`;
}, "C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#1C1C1C] text-white mt-16"> <div class="max-w-6xl mx-auto px-6 pt-14 pb-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"> <div> <img src="/img/logo.png" width="120" alt="Oscar Bautista" class="brightness-0 invert mb-5 opacity-90"> <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
Arte figurativo que refleja la identidad, el entorno y el alma de Colombia.
</p> </div> <div> <h4 class="text-xs uppercase tracking-[0.3em] text-[#1A3A6E] mb-5">Navegación</h4> <ul class="space-y-3"> <li><a href="/sobremi" class="text-gray-400 hover:text-white text-sm transition-colors">Sobre mí</a></li> <li><a href="/obra" class="text-gray-400 hover:text-white text-sm transition-colors">Obras</a></li> <li><a href="/talleres" class="text-gray-400 hover:text-white text-sm transition-colors">Talleres</a></li> <li><a href="/prensa" class="text-gray-400 hover:text-white text-sm transition-colors">Prensa</a></li> <li><a href="/contacto" class="text-gray-400 hover:text-white text-sm transition-colors">Contacto</a></li> </ul> </div> <div> <h4 class="text-xs uppercase tracking-[0.3em] text-[#1A3A6E] mb-5">Contacto</h4> <p class="text-gray-400 text-sm mb-4 leading-relaxed">
¿Interesado en una obra o en los talleres? Escríbele directamente.
</p> <a href="/contacto" class="inline-flex items-center gap-2 border border-[#1A3A6E] text-[#1A3A6E] px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-[#1A3A6E] hover:text-white transition-all duration-300">
Enviar mensaje
</a> </div> </div> <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"> <span class="text-gray-500 text-xs">© 2024 Oscar Bautista. Todos los derechos reservados.</span> <span class="text-gray-500 text-xs">
Diseño web por <a href="https://github.com/smnopa" class="text-gray-400 hover:text-white transition-colors">Samuel B.</a> </span> </div> </div> </footer>`;
}, "C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Portafolio de Oscar Bautista, pintor figurativo colombiano originario de Barrancabermeja. Explora su obra en óleo sobre lienzo, exposiciones y talleres."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/img/icon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/layouts/Layout.astro", void 0);

const obras = [
	//----------------------Complexiones heredadas----------------------------
	{
		id: 'Complexiones-heredadas-1',
		img: '/obras/Cuadro1.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '80x70 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-2',
		img: '/obras/Cuadro2.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '100x70 cm',
		serie: 'Complexiones heredadas',
		año: '2021',
	},
	{
		id: 'Complexiones-heredadas-3',
		img: '/obras/Cuadro3.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '120x80 cm',
		serie: 'Complexiones heredadas',
		año: '2021',
	},
	{
		id: 'Complexiones-heredadas-4',
		img: '/obras/Cuadro4.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '120x80 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-5',
		img: '/obras/Cuadro5.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '80x70 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-6',
		img: '/obras/Cuadro6.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '70x60 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-7',
		img: '/obras/Cuadro8.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '140x100 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-8',
		img: '/obras/Cuadro9.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Complexiones heredadas',
		año: '',
	},
	{
		id: 'Complexiones-heredadas-9',
		img: '/obras/Cuadro10.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '70x60 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-10',
		img: '/obras/Cuadro11.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '70x60 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-11',
		img: '/obras/Cuadro12.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '70x60 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-12',
		img: '/obras/Cuadro13.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '80x70cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-13',
		img: '/obras/Cuadro21.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '40x30 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-14',
		img: '/obras/Cuadro22.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '70x60 cm',
		serie: 'Complexiones heredadas',
		año: '2022',
	},
	{
		id: 'Complexiones-heredadas-15',
		img: '/obras/Cuadro23.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Complexiones heredadas',
		año: '',
	},
	{
		id: 'Complexiones-heredadas-16',
		img: '/obras/Cuadro24.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Complexiones heredadas',
		año: '',
	},
	{
		id: 'Complexiones-heredadas-17',
		img: '/obras/Cuadro25.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Complexiones heredadas',
		año: '',
	},
	//----------------------Confinados----------------------------
	{
		id: 'Confinados-1',
		img: '/obras/Cuadro15.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Confinados',
		año: '',
	},
	{
		id: 'Confinados-2',
		img: '/obras/Cuadro16.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Confinados',
		año: '',
	},
	{
		id: 'Confinados-3',
		img: '/obras/Cuadro17.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Confinados',
		año: '',
	},
	{
		id: 'Confinados-4',
		img: '/obras/Cuadro18.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Confinados',
		año: '',
	},
	{
		id: 'Confinados-5',
		img: '/obras/Cuadro19.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Confinados',
		año: '',
	},
	{
		id: 'Confinados-6',
		img: '/obras/Cuadro20.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Confinados',
		año: '',
	},
	{
		id: 'Confinados-7',
		img: '/obras/Cuadro26.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Confinados',
		año: '',
	},
	//----------------------Cargas----------------------------
	{
		id: 'Cargas-1',
		img: '/obras/Cuadro27.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Cargas',
		año: '',
	},
	{
		id: 'Cargas-2',
		img: '/obras/Cuadro28.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '',
		serie: 'Cargas',
		año: '',
	},
	//----------------------Obras premiadas----------------------------
	{
		id: 'Obras-premiadas-1',
		img: '/obras/Cuadro7.jpg',
		tecnica: 'Oleo sobre lienzo',
		formato: '120x80 cm',
		serie: 'Obras premiadas',
		año: '2010',
	},
	{
		id: 'Obras-premiadas-2',
		img: '/obras/Cuadro14.jpg',
		tecnica: 'Oleo sobre papel',
		formato: '21x29.7 cm',
		serie: 'Obras premiadas',
		año: '2021',
	},
];

const $$Astro = createAstro();
const prerender = false;
const $$obra = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$obra;
  const { obra } = Astro2.params;
  const info = obras.find((o) => o.id === obra);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${info.serie} \u2014 Oscar Bautista`, "data-astro-cid-yfau6leq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="m-auto max-w-5xl px-5 py-16" data-astro-cid-yfau6leq> <div class="mb-10" data-astro-cid-yfau6leq> <a href="/obra" class="inline-flex items-center gap-2 text-gray-400 hover:text-[#1A3A6E] text-xs uppercase tracking-widest transition-colors" data-astro-cid-yfau6leq> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yfau6leq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" data-astro-cid-yfau6leq></path> </svg>
Volver a obras
</a> </div> <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-start" data-astro-cid-yfau6leq> <div class="md:col-span-3" data-astro-cid-yfau6leq> <picture class="block" data-astro-cid-yfau6leq> <img class="w-full rounded shadow-2xl"${addAttribute(info.img, "src")}${addAttribute(`${info.serie} \u2014 Oscar Bautista`, "alt")}${addAttribute(`view-transition-name: obra-${info.id}`, "style")} data-astro-cid-yfau6leq> </picture> </div> <aside class="md:col-span-2 md:sticky md:top-24" data-astro-cid-yfau6leq> <span class="text-[#1A3A6E] uppercase tracking-[0.4em] text-xs block mb-4" data-astro-cid-yfau6leq>Serie</span> <h1 class="display-font text-3xl md:text-4xl font-bold mb-2 leading-tight" data-astro-cid-yfau6leq>${info.serie}</h1> <div class="w-12 h-px bg-[#1A3A6E] mb-8" data-astro-cid-yfau6leq></div> <dl class="space-y-5" data-astro-cid-yfau6leq> ${info.tecnica && renderTemplate`<div data-astro-cid-yfau6leq> <dt class="text-xs uppercase tracking-widest text-gray-400 mb-1" data-astro-cid-yfau6leq>Técnica</dt> <dd class="text-gray-800 font-medium" data-astro-cid-yfau6leq>${info.tecnica}</dd> </div>`} ${info.formato && renderTemplate`<div data-astro-cid-yfau6leq> <dt class="text-xs uppercase tracking-widest text-gray-400 mb-1" data-astro-cid-yfau6leq>Formato</dt> <dd class="text-gray-800 font-medium" data-astro-cid-yfau6leq>${info.formato}</dd> </div>`} ${info.a\u00F1o && renderTemplate`<div data-astro-cid-yfau6leq> <dt class="text-xs uppercase tracking-widest text-gray-400 mb-1" data-astro-cid-yfau6leq>Año</dt> <dd class="text-gray-800 font-medium" data-astro-cid-yfau6leq>${info.a\u00F1o}</dd> </div>`} </dl> <div class="mt-10 pt-8 border-t border-gray-200" data-astro-cid-yfau6leq> <p class="text-sm text-gray-500 mb-4" data-astro-cid-yfau6leq>¿Te interesa esta obra?</p> <a href="/contacto" class="inline-flex items-center gap-2 bg-[#1A3A6E] text-white px-7 py-3 text-xs uppercase tracking-widest hover:bg-[#1C1C1C] transition-colors duration-300" data-astro-cid-yfau6leq>
Contactar al artista
</a> </div> </aside> </div> </main> ` })} `;
}, "C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/[obra].astro", void 0);

const $$file = "C:/Users/samyb/OneDrive/Documentos/portafolio-oscar/src/pages/[obra].astro";
const $$url = "/[obra]";

const _obra_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$obra,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _obra_ as _, obras as o };
