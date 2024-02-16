import {DeviceName} from "@applitools/eyes-cypress/types/expose";

describe('Applitools-Cypress-TS', () => {
    beforeEach(() => {
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            testName: Cypress.currentTest.title
        });
    });
    it('Cypress commands with eyes', () => {
        // from your cypress/e2e/spec.cy.ts
        cy.visit('https://example.cypress.io/commands/actions');
        cy.eyesCheckWindow({
            tag: "Cypress commands",
            fully: true
        });
    });
    afterEach(() => {
        // End Applitools Visual AI Test
        cy.eyesClose();
        let eyesResults = cy.eyesGetAllTestResults();
        console.log(eyesResults);
    });
});
