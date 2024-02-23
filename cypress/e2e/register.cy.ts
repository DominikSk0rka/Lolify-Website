describe("Registration Form", () => {
  it("handles registration failure with invalid data", () => {
    cy.visit("https://lolify.vercel.app/register");

    cy.get("#name").type("invalid_name");
    cy.get("#email").type("invalid_email");
    cy.get("#password").type("password12");
    cy.get("#password_confirmation").type("password123");

    cy.get("button").contains("Register").click();

    cy.contains("Registration successful").should("exist");
    cy.contains("Registration failed: Invalid email address").should("exist");
    cy.url().should("eq", "https://lolify.vercel.app/");

    cy.getCookie("token").should("exist");
  });

  it("successfully registers a new user", () => {
    cy.visit("https://lolify.vercel.app/register");

    cy.get("#name").type("John Doee");
    cy.get("#email").type("tostemailil@gmail.com");
    cy.get("#password").type("password123");
    cy.get("#password_confirmation").type("password123");

    cy.get("button").contains("Register").click();
    cy.contains("Registration successful").should("exist");

    cy.url().should("not.eq", "https://lolify.vercel.app/");
    cy.getCookie("token").should("not.exist");
  });
});
