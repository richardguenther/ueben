import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import intersect from "@alpinejs/intersect";
import smoothscroll from "smoothscroll-polyfill";
import { createPopper } from "@popperjs/core";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

// Alpine.plugin(smoothscroll);
Alpine.plugin(intersect);

Alpine.plugin(collapse);

Alpine.plugin(focus);

window.Alpine = Alpine;

Alpine.start();
