import { createPinia } from "pinia";
import { mount } from "cypress/vue";
import { h } from "vue";

Cypress.Commands.add("mount", (component, ...args) => {
  args.global = args.global || {};
  args.global.plugins = args.global.plugins || [];
  args.global.plugins.push(createPinia());

  return mount(() => {
    return h(VApp, {}, component);
  }, ...args);
});
