const Store = require('electron-store');

const DEFAULT_REFRESH_MS = 5000;
const REFRESH_CHOICES = [1000, 5000, 10000, 'paused'];
const DISPLAY_MODES = ['number', 'icon-plus-number', 'icon-only'];

const defaults = {
  autoLaunch: false,
  refreshMs: DEFAULT_REFRESH_MS,
  allUsers: false,
  displayMode: 'number',
};

function parseRefreshEnv(value) {
  if (!value) return undefined;
  if (value === 'paused') return 'paused';
  const num = Number(value);
  if (Number.isFinite(num) && num > 0) return num;
  return undefined;
}

function sanitizeRefresh(value) {
  if (value === 'paused') return 'paused';
  const num = Number(value);
  if (Number.isFinite(num) && num > 0) return num;
  return DEFAULT_REFRESH_MS;
}

const envRefresh = parseRefreshEnv(process.env.REFRESH_MS);
const envAllUsers = process.env.NODEKILLER_ALL_USERS === '1';

const store = new Store({
  name: 'preferences',
  defaults,
});

function initPrefsFromEnvIfEmpty() {
  try {
    if (!store.has('refreshMs') && envRefresh !== undefined) {
      store.set('refreshMs', envRefresh);
    }
    if (!store.has('allUsers') && envAllUsers) {
      store.set('allUsers', true);
    }
  } catch (e) {
    // ignore inability to initialize from env
  }
}

function getAutoLaunch() {
  return Boolean(store.get('autoLaunch'));
}

function setAutoLaunch(value) {
  const next = Boolean(value);
  store.set('autoLaunch', next);
  return next;
}

function getRefreshMs() {
  const value = store.get('refreshMs');
  if (value === 'paused') return 'paused';
  const num = Number(value);
  if (Number.isFinite(num) && num > 0) return num;
  const reset = DEFAULT_REFRESH_MS;
  store.set('refreshMs', reset);
  return reset;
}

function setRefreshMs(value) {
  const sanitized = sanitizeRefresh(value);
  store.set('refreshMs', sanitized);
  return sanitized;
}

function getAllUsers() {
  return Boolean(store.get('allUsers'));
}

function setAllUsers(value) {
  const next = Boolean(value);
  store.set('allUsers', next);
  return next;
}

function getDisplayMode() {
  const value = store.get('displayMode');
  if (DISPLAY_MODES.includes(value)) return value;
  store.set('displayMode', 'number');
  return 'number';
}

function setDisplayMode(value) {
  const allowed = DISPLAY_MODES.includes(value) ? value : 'number';
  store.set('displayMode', allowed);
  return allowed;
}

function getAllPreferences() {
  return {
    autoLaunch: getAutoLaunch(),
    refreshMs: getRefreshMs(),
    allUsers: getAllUsers(),
    displayMode: getDisplayMode(),
  };
}

module.exports = {
  DEFAULT_REFRESH_MS,
  REFRESH_CHOICES,
  DISPLAY_MODES,
  initPrefsFromEnvIfEmpty,
  getAutoLaunch,
  setAutoLaunch,
  getRefreshMs,
  setRefreshMs,
  getAllUsers,
  setAllUsers,
  getDisplayMode,
  setDisplayMode,
  getAllPreferences,
};
