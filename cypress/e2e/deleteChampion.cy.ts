describe("template spec", () => {
  it("deletes champion with name 'test'", () => {
    cy.visit("https://lolify.vercel.app/login");
    cy.get("#email").type("Dominik@gmail.com");
    cy.get("#password").type("Dominik6812");
    cy.get("button").contains("Log in").click();
    cy.url().should("eq", "https://lolify.vercel.app/");
    cy.getCookie("token").should("exist");
    cy.visit("https://lolify.vercel.app/admin/manage");

    // Find and delete the champion with the name "test"
    cy.contains(".MuiDataGrid-cell", "test")
      .parent()
      .find("button")
      .should("exist")
      .click();

    cy.wait(2000);
    cy.get(".MuiDataGrid-cell").contains("test").should("not.exist");
  });
});
