// describe("Test cases for the Landing page", ()=>{
//     it("Verify that there is successful login and assertion is displayed accordingly", ()=> {
//         cy.visit("https://www.saucedemo.com/v1/")
//         cy.get("#user-name").click().type("standard_user")
//         cy.should("have.value", "standard_user")
//         cy.get("#password").click().type("secret_sauce")
//         cy.should("have.value", "secret_sauce")
//         cy.get("#login-button").click()
//         cy.url().should("include", "/inventory.html")
//     })
//     it("Verify that while clicking on the login button without entering details an error message is thrown", () => {
//         cy.visit("https://www.saucedemo.com/v1/")
    
//         cy.get("#login-button").click()
//         cy.get("[data-test='error']").should("be.visible").and("contain.text", "Epic sadface: Username is required")
//         cy.url().should("not.include", "/inventory.html")
//     })
//     it("Verify that when only username is entered an error message is displayed", () =>{
//         cy.visit("https://www.saucedemo.com/v1/")
//         cy.get("#user-name").click().type("standard_user")
//         cy.get("#login-button").click()
//         cy.get("[data-test='error']").should("be.visible").and("contain.text", "Epic sadface: Password is required")
//         cy.url().should("not.include", "/inventory.html")
//     })
//     it("Verify that when only password is entered an error message is displayed", () =>{
//         cy.visit("https://www.saucedemo.com/v1/")
//         cy.get("#password").click().type("secret_sauce")
//         cy.get("#login-button").click()
//         cy.get("[data-test='error']").should("be.visible").and("contain.text", "Epic sadface: Username is required")
//         cy.url().should("not.include", "/inventory.html")
//     })
//     it("Verify that when invalid credentials are entered an error message is displayed", () =>{
//         cy.visit("https://www.saucedemo.com/v1/")
//         cy.get("#user-name").click().type("stand_user") 
//         cy.get("#password").click().type("secret_saue")
//         cy.get("#login-button").click()
//         cy.get("[data-test='error']").should("be.visible").and("contain.text", "Epic sadface: Username and password do not match any user in this service")
//         cy.url().should("not.include", "/inventory.html")
//     })
    
// })

describe("visit page", () =>{
    it("visit", ()=> {
        cy.visit("https://www.keka.com/")
    })
})