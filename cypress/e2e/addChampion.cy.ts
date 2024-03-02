describe("Add Champion From", () => {
  it("add champion without admin account", () => {
    cy.visit("https://lolify.vercel.app/admin/add-champion");
    cy.contains("No Admin Account!").should("not.exist");
  });

  it("successfully add champion with admin account", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("Dominik@gmail.com");
    cy.get("#password").type("Dominik6812");
    cy.get("button").contains("Log in").click();
    cy.url().should("eq", "https://lolify.vercel.app/");
    cy.getCookie("token").should("exist");
    cy.visit("https://lolify.vercel.app/admin/add-champion");

    cy.get("#name").type("Champion Name");
    cy.get("#title").type("Champion Title");
    cy.get("#description").type("Champion description");
    cy.get('input[id="role1"]').check();
    cy.get("#q_name").type("Champion q_name");
    cy.get("#w_name").type("Champion w_name");
    cy.get("#e_name").type("Champion e_name");
    cy.get("#r_name").type("Champion r_name");
    cy.get("#passive_name").type("Champion passive_name");

    cy.get('button[type="submit"]').click();
    cy.contains("Champion added successfully!").should("not.exist");
  });
});
