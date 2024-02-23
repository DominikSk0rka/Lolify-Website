describe("Champions component", () => {
  beforeEach(() => {
    cy.visit("https://lolify.vercel.app/champions");
  });

  it("loads all champions on initial render", () => {
    cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
  });

  it("navigates to champion details page when a champion card is clicked", () => {
    cy.get(".grid .col-span-1").first().click();
    cy.url().should("include", "/champion/");
  });

  it("filters champions by role when 'TOP' button is clicked", () => {
    cy.get("[data-cy=topButton]").click();
    cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
  });

  it("filters champions by role when 'JUNGLE' button is clicked", () => {
    cy.get("[data-cy=jungleButton]").click();
    cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
  });

  it("filters champions by role when 'MID' button is clicked", () => {
    cy.get("[data-cy=midButton]").click();
    cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
  });

  it("filters champions by role when 'ADC' button is clicked", () => {
    cy.get("[data-cy=adcButton]").click();
    cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
  });

  it("filters champions by role when 'SUPPORT' button is clicked", () => {
    cy.get("[data-cy=supportButton]").click();
    cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
  });

  it("resets role filter when 'ALL' button is clicked", () => {
    cy.get("[data-cy=topButton]").click();
    cy.get("[data-cy=allButton]").click();
    cy.get(".grid .col-span-1").should("have.length.greaterThan", 0);
  });
});
