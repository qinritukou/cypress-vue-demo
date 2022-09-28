import Modal from "./Modal.vue";

describe("<Modal>", () => {
  const modalSelector = "[data-cy=modal]";
  const closeButtonSelector = "[data-cy=closeButton]";
  const footerText = "My Custom Footer";
  const headerText = "My Custom Header";

  const slots = {
    default: () => "Content",
    footer: () => footerText,
    header: () => headerText,
  };

  it("renders the default modal content", () => {
    cy.mount(Modal, { slots })
      .get(modalSelector)
      .should("contain.text", "Content");
  });

  it("renders a custom footer", () => {
    const footerText = "My Custom Footer";
    cy.mount(Modal, { slots })
      .get(modalSelector)
      .should("contain.text", "Content")
      .and("contain.text", footerText);
  });

  it("renders a custom header", () => {
    const headerText = "My Custom Header";
    cy.mount(Modal, { slots })
      .get(modalSelector)
      .should("contain.text", "Content")
      .and("contain.text", headerText);
  });

  it('renders the fallback "Close" button when no footer is provided', () => {
    const thisSlots = {
      default: () => "Content",
      header: () => headerText,
    };
    cy.mount(Modal, { thisSlots })
      .get(closeButtonSelector)
      .should("contain.text", "Close")
      .click()
      .get(modalSelector)
      .should("not.contain.text", "Content");
  });
});
