describe("Champions component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/champions");
  });

  it("loads all champions on initial render", () => {
    cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
  });

  it("navigates to champion details page when a champion card is clicked", () => {
    cy.get(".grid .col-span-1").first().click();
    cy.url().should("include", "/champion/");
  });

  it("resets role filter when 'ALL' button is clicked", () => {
    cy.get("[data-cy=topButton]").click();
    cy.get("[data-cy=allButton]").click();
    cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
  });

  const roleButtons = [
    { role: "Top", dataCy: "topButton", apiEndpoint: "/role/1" },
    { role: "Jungle", dataCy: "jungleButton", apiEndpoint: "/role/2" },
    { role: "Mid", dataCy: "midButton", apiEndpoint: "/role/3" },
    { role: "ADC", dataCy: "adcButton", apiEndpoint: "/role/4" },
    { role: "Support", dataCy: "supportButton", apiEndpoint: "/role/5" },
  ];

  roleButtons.forEach(({ role, dataCy, apiEndpoint }) => {
    it(`displays champions for '${role}' role when '${role.toUpperCase()}' button is clicked`, () => {
      cy.intercept(`https://lolify.fly.dev/api/champion${apiEndpoint}`, {
        fixture: "champions.json",
      }).as("getChampions");

      cy.get(`[data-cy=${dataCy}]`).click();
      cy.wait("@getChampions");
      cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
    });
  });
});
