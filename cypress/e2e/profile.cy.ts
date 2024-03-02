describe("Visits admin", () => {
  it("successfully logs in as CYPRESSTEST@gmail.com and visits profile", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("CYPRESS@gmail.com");
    cy.get("#password").type("CYPRESSCYPRESS");

    cy.get("button").contains("Log in").click();

    cy.url().should("eq", "https://lolify.vercel.app/");

    cy.getCookie("token").then((cookie) => {
      const token = cookie?.value;

      cy.visit("https://lolify.vercel.app/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      cy.contains("Favorites");
      cy.get(".grid-cols-5");
    });
  });

  it("successfully logs in as Dominik@gmail.com and visits profile", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("Dominik@gmail.com");
    cy.get("#password").type("Dominik6812");

    cy.get("button").contains("Log in").click();

    cy.url().should("eq", "https://lolify.vercel.app/");

    cy.getCookie("token").then((cookie) => {
      const token = cookie?.value;

      cy.visit("https://lolify.vercel.app/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      cy.contains("Favorites");
      cy.get(".grid-cols-5");
    });
  });
});
