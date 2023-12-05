// // Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"
// import "./controllers"
// import "@popperjs/core"
// import "bootstrap"

// import { initNavbar } from "./controllers/navbar_scroll_fixed";
// document.addEventListener("turbo:load", function() {
//   console.log('connection navbar')
//   initNavbar();
// });


// import { initCarousel } from "./controllers/carousel";
// document.addEventListener("turbo:load", function() {
//   console.log('connection carousel')
//   initCarousel();
// });

// import { initJetTimeline } from "./controllers/jet_timeline";
// document.addEventListener("turbo:load", function() {
//   console.log('connection timeline')
//   initJetTimeline();
// });

// document.addEventListener("turbo:before-cache", cleanupCarouselBeforeCache);
import "@hotwired/turbo-rails"
// import "./controllers"
import "controllers"
import "@popperjs/core"
import "bootstrap"

import { initNavbar } from "./controllers/navbar_scroll_fixed";
import { initCarousel, cleanupCarouselBeforeCache } from "./controllers/carousel";
import { initJetTimeline } from "./controllers/jet_timeline";

document.addEventListener("turbo:load", function() {
  initNavbar();
  initCarousel();
  initJetTimeline();
  console.log('nav + carousel + timeline connection')
});
