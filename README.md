# ⚡️ Node Killer

[![Electron](https://img.shields.io/badge/Electron-%5E38-blue?logo=electron)](https://www.electronjs.org/)
[![macOS](https://img.shields.io/badge/platform-macOS-lightgrey?logo=apple)](https://developer.apple.com/macos/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

⚡️ **Node Killer** — a sleek macOS menubar app that keeps an eye on your **Node.js** processes and lets you kill them with a click.

> 🖥️ Currently available only for Apple Silicon (arm64).

![Node Killer placeholder screenshot](assets/demo/node-killer-screenshot.png)

## ✨ Features
- 📊 **Live counter** in the status bar — instantly shows how many Node.js processes are listening (`node: 4`).  
- 🖱️ **Interactive tray menu** — lists every process by PID (and port when available).  
- 🔪 **One-click kill** — terminate individual processes with success/error notifications.  
- 💣 **Kill all** — wipe out every running Node process at once, with confirmation and summary.  
- 🔄 **Smart auto-refresh** — updates every 5 seconds plus a manual **Refresh** option.  
- 🧰 **Customizable preferences** — adjust refresh rate, process filter, auto-launch, and status-bar display mode.


## 🚀 Getting Started

For development:

```bash
npm install
npm run dev
```

Node Killer lives in the macOS menu bar near the clock. 


## 📥 Download

You can grab the latest pre-built binary from the [Releases page](https://github.com/adolfoflores/node-killer/releases).

👉 Direct download for Apple Silicon (M1/M2/M3/M4):  
[Node-Killer-0.1.0-arm64.dmg](https://github.com/adolfoflores/node-killer/releases/download/0.1.0/Node-Killer-0.1.0-arm64.dmg)

> 🖥️ Currently only Apple Silicon (arm64) builds are provided.  
> macOS will ask for confirmation the first time you run the app.  

## 🎥 Demo

![Node Killer demo](assets/demo/node-killer-demo.gif)

## 📦 Build

Create a `.app` and `.dmg` bundle with [electron-builder](https://www.electron.build/):

```bash
npm run build
```

Artifacts are written to `dist/`. 


## ⚠️ Limitations
- Processes are detected via `lsof -nP -iTCP -sTCP:LISTEN` parsing.
- Containers (Docker) usually appear as `docker-proxy`, so underlying Node processes may not be visible.

## 📸 Roadmap
- [ ] Alternate scan mode for Node processes that are not listening on sockets.
- [ ] Basic Linux support.


## 🧪 Manual Smoke Test
1. Start a dev server (`next dev`, `vite dev`, etc.).
2. Run `npm run dev` for Node Killer.
3. Confirm the menu shows the processes with PID/port information.
4. Terminate a single process, then try **Kill all** and review the notifications.


## 🤝 Contributing
Pull requests and feedback are welcome! Feel free to open an issue.

## 📝 License
[MIT](./LICENSE)

