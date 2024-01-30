import Sidebar from "./Sidebar";

describe("<Sidebar />", () => {
  beforeEach("renders", () => {
    cy.mount(<Sidebar />);
  });

  it("sidebar contains all neccessary li items", () => {
    cy.get("[data-cy=sidebar]").should("have.class", "sidebar");
  });
});
