const log = require("electron-log");
const { autoUpdater } = require("electron-updater");

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";
log.info("App starting...");

function sendStatusToWindow(text) {
  log.info(text);
}

autoUpdater.on("checking-for-update", () => {
  sendStatusToWindow("Checking for update...");
});
autoUpdater.on("update-available", (ev, info) => {
  sendStatusToWindow("Update available.");
});
autoUpdater.on("update-not-available", (ev, info) => {
  sendStatusToWindow("Update not available.");
});
autoUpdater.on("error", (ev, err) => {
  sendStatusToWindow("Error in auto-updater.");
});
autoUpdater.on("download-progress", (ev, progressObj) => {
  sendStatusToWindow("Download progress...");
});
autoUpdater.on("update-downloaded", (ev, info) => {
  sendStatusToWindow("Update downloaded; will install in 5 seconds");
});

function checkForUpdates() {
  autoUpdater.checkForUpdates();
}
module.exports.checkForUpdates = checkForUpdates;
