describe("Search Friend Profile", () => {
  it("Search without being Logged in", () => {
    cy.visit("https://lolify.vercel.app/friend/prezes");

    cy.contains("You are not logged in :(").should("exist");
  });

  it("User not found", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("Dominik@gmail.com");
    cy.get("#password").type("Dominik6812");

    cy.get("button").contains("Log in").click();

    cy.url().should("eq", "https://lolify.vercel.app/");
    cy.getCookie("token").should("exist");

    cy.visit("https://lolify.vercel.app/friend/prezesssssss");
    cy.contains("User not found :(").should("exist");
  });

  it("successfully logs in with correct credentials and visits friend profile page", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("Dominik@gmail.com");
    cy.get("#password").type("Dominik6812");

    cy.get("button").contains("Log in").click();

    cy.url().should("eq", "https://lolify.vercel.app/");
    cy.getCookie("token").should("exist");

    cy.visit("https://lolify.vercel.app/friend/prezes");
  });
});
