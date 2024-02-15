import {defineConfig, NodeEvents} from "cypress";
import eyesPlugin from '@applitools/eyes-cypress'

interface E2EConfig {
    setupNodeEvents(on: NodeEvents, config: any): void;
}

const e2eConfig: E2EConfig = {
    setupNodeEvents(on, config) {
        // implement node event listeners here
    },
};

export default eyesPlugin(defineConfig({
    e2e: e2eConfig,
}));

