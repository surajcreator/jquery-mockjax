
var config = require('./grunt-config-options');
config.onlyPaths = true;
var urls = require('./test/build-version-urls')(config, 'latestInBranch', 'core');

module.exports = {
    "username": "jordankasper2",
    "key": process.env.BROWSERSTACK_KEY,
    "test_framework": "qunit",
    "test_path": urls,
    "test_server_port": 3000,
    "browsers": [
        // "chrome_previous",
        "chrome_latest",
        // "firefox_previous",
        "firefox_latest",
        // "ie_9",
        // "ie_10",
        "ie_11"
    ]
};
