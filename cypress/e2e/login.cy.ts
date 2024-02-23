describe("Login Form", () => {
  it("handles login failure with incorrect credentials", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("invalid_user@example.com");
    cy.get("#password").type("incorrect_password");

    cy.get("button").contains("Log in").click();

    cy.contains("These credentials don't match our records").should("exist");

    cy.url().should("not.eq", "https://lolify.vercel.app/");

    cy.getCookie("token").should("not.exist");
  });

  it("handles login failure with incorrect email", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("tostemail@gmail.com");
    cy.get("#password").type("incorrect_password");

    cy.get("button").contains("Log in").click();

    cy.contains("These credentials don't match our records").should("exist");

    cy.url().should("not.eq", "https://lolify.vercel.app/");

    cy.getCookie("token").should("not.exist");
  });
  it("handles login failure with incorrect password", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("invalid_user@example.com");
    cy.get("#password").type("password123");

    cy.get("button").contains("Log in").click();

    cy.contains("These credentials don't match our records").should("exist");

    cy.url().should("not.eq", "https://lolify.vercel.app/");

    cy.getCookie("token").should("not.exist");
  });

  it("successfully logs in with correct credentials", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("tostemail@gmail.com");
    cy.get("#password").type("password123");

    cy.get("button").contains("Log in").click();

    cy.url().should("eq", "https://lolify.vercel.app/");

    cy.getCookie("token").should("exist");
  });
});
