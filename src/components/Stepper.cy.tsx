import Stepper from "./Stepper";

describe("<Stepper />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />);
  });

  it("stepper should default to 0", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=counter]").should("have.text", "0");
  });

  it("When the increment button is clicked, the counter is incremented", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=increment]").click();
    cy.get("[data-cy=counter]").should("have.text", "1");
  });

  it("When the decrement button is clicked, the counter is decremented", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=decrement]").click();
    cy.get("[data-cy=counter]").should("have.text", "-1");
  });
});
