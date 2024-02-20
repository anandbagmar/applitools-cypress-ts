module.exports = {
    appName: 'TODO-TS',
    // Specify the number of visual checkpoints Applitools will perform in parallel.
    // Warning: If you have a free account, then concurrency will be limited to 1.
    testConcurrency: 5,

    // Uncomment the below line and paste in your API key as an alternative to using an environment variable
    // apiKey: '',

    batchName: "Applitools-Cypress-TS",
    batch: { properties: [ {name: "Cypress", value: "12.0.1"} ] },

    // Select the browsers and devices to run your tests on via the Ultrafast Grid
    browser: [
        { width: 800, height: 600, name: 'chrome' },
        { width: 1600, height: 1200, name: 'firefox' },
        { width: 1024, height: 768, name: 'safari' },
        { deviceName: 'Pixel 2', screenOrientation: 'portrait' },
        { deviceName: 'Nexus 10', screenOrientation: 'landscape' },
    ],

    // Set the concurrency that tests are rendered with on the UFG
    concurrentSessions: 5,
    dontCloseBatches: true,
    sendDom: true
}
