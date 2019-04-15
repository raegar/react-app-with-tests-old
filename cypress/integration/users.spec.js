describe("Users App", () => {
    it("can see a list of people" , () => {
        cy.visit("/");
        cy.contains("Jamie Myland");
    });
 });