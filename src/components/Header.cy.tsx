import Header from "./Header";

describe("<Header />", () => {
  beforeEach("renders", () => {
    cy.mount(<Header />);
  });

  it("logo is shown in the top left corner", () => {
    cy.get("[data-cy=header-logo]")
      .should("have.class", "header__logo")
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);
  });
});
