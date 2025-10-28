const fs = require('fs');
const configPath = './config/app-config.yaml';

function testConfigExists() {
if (fs.existsSync(configPath)) {
console.log('PASS: app-config.yaml exists');
} else {
console.error('FAIL: app-config.yaml missing');
}
}

testConfigExists();