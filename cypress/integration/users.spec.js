describe("Users App", () => {
    it("can see a list of people" , () => {
        cy.server();
        cy.route({
          method: "GET",
          url: "**/users",
          response: [{ name: "Jamie Myland" }]
        });
        cy.visit("http://localhost:3000/");
        cy.contains("Jamie Myland");
    });
 });