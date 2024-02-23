describe("Visits admin", () => {
  it("successfully logs in as CYPRESSTEST@gmail.com and visits favorites", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("CYPRESS@gmail.com");
    cy.get("#password").type("CYPRESSCYPRESS");

    cy.get("button").contains("Log in").click();

    cy.url().should("eq", "https://lolify.vercel.app/");

    cy.getCookie("token").then((cookie) => {
      const token = cookie?.value;

      // Visit favorites page with the obtained token
      cy.visit("https://lolify.vercel.app/favorite", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if the page contains the expected content
      cy.contains("Favorites");
      cy.get(".grid-cols-5"); // Adjust this selector based on your actual DOM structure
    });
  });

  it("successfully logs in as Dominik@gmail.com and visits favorites", () => {
    cy.visit("https://lolify.vercel.app/login");

    cy.get("#email").type("Dominik@gmail.com");
    cy.get("#password").type("Dominik6812");

    cy.get("button").contains("Log in").click();

    cy.url().should("eq", "https://lolify.vercel.app/");

    cy.getCookie("token").then((cookie) => {
      const token = cookie?.value;

      // Visit favorites page with the obtained token
      cy.visit("https://lolify.vercel.app/favorite", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if the page contains the expected content
      cy.contains("Favorites");
      cy.get(".grid-cols-5"); // Adjust this selector based on your actual DOM structure
    });
  });
});
