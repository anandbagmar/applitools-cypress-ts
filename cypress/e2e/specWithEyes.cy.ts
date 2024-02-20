import {DeviceName} from "@applitools/eyes-cypress/types/expose";
import {batchify} from "@applitools/utils/types/general";

describe('Applitools-Cypress-TS', () => {
    beforeEach(() => {
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            testName: Cypress.currentTest.title,
            properties: [ {name: "Cypress", value: "12.0.1"} ]
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
