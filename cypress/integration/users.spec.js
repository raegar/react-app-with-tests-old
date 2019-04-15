describe("Users App", () => {
    it("can see a list of people" , () => {
        cy.visit("http://localhost:3000/");
        cy.contains("Jamie Myland");
    });
 });