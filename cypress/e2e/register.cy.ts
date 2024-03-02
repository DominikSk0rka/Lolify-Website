describe("Registration Form", () => {
  it("handles registration failure with invalid data", () => {
    cy.visit("https://lolify.vercel.app/register");

    cy.get("#name").type("invalid_name");
    cy.get("#email").type("invalid_email");
    cy.get("#password").type("password12");
    cy.get("#password_confirmation").type("password123");

    cy.get("button").contains("Register").click();

    cy.contains("Registration successful").should("not.exist");
    cy.contains("Registration failed").should("exist");
  });

  it("successfully registers a new user", () => {
    cy.visit("https://lolify.vercel.app/register");

    cy.get("#name").type("John Doeses");
    cy.get("#email").type("tostemaililsss@gmail.com");
    cy.get("#password").type("password1234");
    cy.get("#password_confirmation").type("password12s34");

    cy.get("button").contains("Register").click();
    cy.contains("Registration successful").should("exist");

    cy.url().should("not.eq", "https://lolify.vercel.app/");
    cy.getCookie("token").should("not.exist");
  });
});
