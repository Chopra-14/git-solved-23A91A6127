# Troubleshooting Guide

## Common Issues and Resolutions

### 1. Deployment Script Fails
- **Symptom:** Running `deploy.sh` gives permission denied.
- **Resolution:** Run `chmod +x scripts/deploy.sh` to make the script executable.

### 2. Missing Environment Variables
- **Symptom:** Error: "Database credentials not found".
- **Resolution:** Add your database credentials to `config/database-config.json` and restart the server.

### 3. Configuration File Errors
- **Symptom:** Server crashes on startup.
- **Resolution:** Double-check your config files (e.g., `app-config.yaml`). Ensure formatting and required keys are present.

### 4. API Not Responding
- **Symptom:** Curl/test fails to reach API endpoints.
- **Resolution:** Make sure the server is running (`node server.js`) and check firewall rules.

## Tips
- Always pull the latest code before running.
- Clear node_modules and reinstall dependencies if you get npm errors:  
