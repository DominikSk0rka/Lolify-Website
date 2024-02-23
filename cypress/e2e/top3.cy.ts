describe("Championstop component", () => {
  it("displays 3 champion cards", () => {
    cy.visit("https://lolify.vercel.app/");
    cy.get(".grid-cols-3").should("exist");
    cy.get(".col-span-1").should("have.length", 3);
  });

  it("can click on the first champion card", () => {
    cy.visit("https://lolify.vercel.app/");
    cy.get(".col-span-1").first().click();
    cy.url().should("include", "/champion/");
  });

  it("can click on the second champion card", () => {
    cy.visit("https://lolify.vercel.app/");
    cy.get(".col-span-1").eq(1).click();
    cy.url().should("include", "/champion/");
  });

  it("can click on the third champion card", () => {
    cy.visit("https://lolify.vercel.app/");
    cy.get(".col-span-1").eq(2).click();
    cy.url().should("include", "/champion/");
  });
});
