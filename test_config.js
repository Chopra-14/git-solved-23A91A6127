const fs = require('fs');
const path = './config/app-config.yaml';

if (fs.existsSync(path)) {
  console.log('Config file exists.');
} else {
  console.error('Config file missing!');
  process.exit(1);
}
