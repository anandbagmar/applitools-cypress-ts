import {defineConfig} from "cypress";
import eyesPlugin from '@applitools/eyes-cypress'

interface E2EConfig {
}

const e2eConfig: E2EConfig = {};

export default eyesPlugin(defineConfig({
    e2e: e2eConfig,
    "reporter": "mochawesome",
    "reporterOptions": {
        "reportDir": "results/cypress/specs",
        "overwrite": false,
        "html": true,
        "json": true,
        "timestamp": "longDate",
        "reportFilename": "[datetime]-[name]-report_[status]",
    }
}));
