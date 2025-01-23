describe("API Testing", () => {
    it("Get call for whole page", () => {
        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
            // Assert the status
            expect(response.status).to.eq(200)

            // Log the response body
            cy.log(JSON.stringify(response.body))

            // Optionally, assert specific parts of the response body
            expect(response.body).to.have.property("page", 2)
            expect(response.body.data).to.be.an("array") // Check if 'data' is an array
        })
    })
    it("GET call for a single user", () => {
        cy.request("GET", "https://reqres.in/api/users/2").then((response) => {
          // Assert the status code
          expect(response.status).to.eq(200)
      
          // Log the response body
          cy.log(JSON.stringify(response.body))
      
          // Validate the structure and properties of the response
          expect(response.body).to.have.property("data")
          expect(response.body.data).to.have.property("id", 2) // Check the `id` property within `data`
          expect(response.body.data).to.be.an("object") // Validate `data` is an object
        })
      })
      it("GET call for invalid user", () => {
        cy.request({
          method: "GET",
          url: "https://reqres.in/api/users/23",
          failOnStatusCode: false, // Prevent Cypress from failing on 404 responses
        }).then((response) => {
          // Assert the status code
          expect(response.status).to.eq(404)
      
          // Log the response body
          cy.log(JSON.stringify(response.body))
          // Validate that the response body is empty
          expect(response.body).to.be.empty
        })
      })
      it("Get single user from list resource", () =>{
        cy.request("GET", "https://reqres.in/api/unknown/2").then((response) =>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
            expect(response.body).to.have.property("data")
            expect(response.body.data).to.have.property("id", 2) 
            expect(response.body.data).to.be.an("object")
        })
    })
    it("Get call for invalid single user from list resource", () =>{
        
    })
})
