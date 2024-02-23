describe("Visits admin", () => {
  it("Visits admin", () => {
    cy.visit("https://lolify.vercel.app/admin");
  });

  it("successfully logs in as CYPRESSTEST@gmail.com and visits admin", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("CYPRESS@gmail.com");
    cy.get("#password").type("CYPRESSCYPRESS");

    cy.get("button").contains("Log in").click();

    cy.url().should("eq", "https://lolify.vercel.app/");

    cy.getCookie("token").then((cookie) => {
      const token = cookie?.value;

      cy.visit("https://lolify.vercel.app/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
  });

  it("successfully logs in as Dominik@gmail.com and visits admin", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("Dominik@gmail.com");
    cy.get("#password").type("Dominik6812");

    cy.get("button").contains("Log in").click();

    cy.url().should("eq", "https://lolify.vercel.app/");

    cy.getCookie("token").then((cookie) => {
      const token = cookie?.value;

      cy.visit("https://lolify.vercel.app/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
  });
});
