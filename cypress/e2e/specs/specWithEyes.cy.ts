import {DeviceName} from "@applitools/eyes-cypress/types/expose";

describe('Applitools-Cypress-TS', () => {
    beforeEach(() => {
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            testName: Cypress.currentTest.title,
            properties: [
                {name: "Cypress", value: "13.6.4"}
            ]
        });
    });
    it('Cypress commands with eyes', () => {
        // from your cypress/e2e/spec.cy.ts
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('h4#type a').invoke('text', "Cypress");

        cy.log("Check Window - region");
        cy.eyesCheckWindow({
            target: "region",
            selector: "#actions > div > div:nth-child(1) > pre",
            tag: "Check Window - region",
            fully: false,
            matchLevel: "Layout2",
            sendDom: false
        })
        cy.log("Check Window - viewport");
        cy.eyesCheckWindow({
            target: "window",
            tag: "Check Window - viewport",
            fully: false
        })
        cy.log("Check Window - lazyLoad");
        cy.eyesCheckWindow({
            lazyLoad: true,
            tag: "Check Window - lazyLoad",
            fully: true
        })
        cy.log("Check Window fully");
        cy.eyesCheckWindow({
            tag: "Check Window fully",
            fully: true
        });

        cy.eyesCheckWindow({
            tag: "ignore displacements",
            fully: true,
            ignoreDisplacements: true
        });
    });
    afterEach(() => {
        // End Applitools Visual AI Test
        cy.eyesClose();
        let eyesResults = cy.eyesGetAllTestResults();
        console.log(eyesResults);
    });
});
