import {DeviceName} from "@applitools/eyes-cypress/types/expose";

describe('Applitools-Cypress-TS', () => {
    beforeEach(() => {
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            appName: 'TODO-TS',
            testName: Cypress.currentTest.title,
            browser: [
                {width: 1600, height: 1200, name: 'firefox'},
                {width: 1600, height: 1200, name: 'chrome'},
                {width: 1600, height: 1200, name: 'safari'},
                {width: 1600, height: 1200, name: 'edgechromium'},
                {deviceName: "iPhone_XR"}
            ],
            batchName: "Applitools-Cypress-TS",
            // Set the concurrency that tests are rendered with on the UFG
            concurrentSessions: 5
        });
    });
    it('Cypress commands', () => {
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
