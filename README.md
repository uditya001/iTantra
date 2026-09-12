<div align="center">

# iTantra

**Offline speech relay for low-bitrate & no-network scenarios — in 10 Indian languages.**

No internet. No cloud APIs. Speak in your language on one phone, it's heard aloud on the other — relayed over WiFi Direct or Bluetooth.

<!-- Static tech badges -->
![Kotlin](https://img.shields.io/badge/Kotlin-2.0-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![Compose](https://img.shields.io/badge/UI-Jetpack%20Compose-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white)
![Android](https://img.shields.io/badge/Android-API%2024+-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Offline](https://img.shields.io/badge/Speech-100%25%20Offline-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

<!-- Live GitHub badges — auto-update once pushed, replace YOUR_USERNAME/iTantra -->
![Stars](https://img.shields.io/github/stars/YOUR_USERNAME/iTantra?style=social)
![Last commit](https://img.shields.io/github/last-commit/YOUR_USERNAME/iTantra?color=blue)
![Repo size](https://img.shields.io/github/repo-size/YOUR_USERNAME/iTantra?color=orange)
![Issues](https://img.shields.io/github/issues/YOUR_USERNAME/iTantra?color=red)

<br>

| 10 | 1 | 0 | SIH 2026 |
|:---:|:---:|:---:|:---:|
| **Indian languages targeted** | **Language wired up today** | **Cloud API calls for speech** | **PS #26173, ISRO** |

</div>

---

## Table of contents
- [Why](#why)
- [Problem statement](#problem-statement)
- [Status](#status)
- [Architecture](#architecture)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Credits](#credits)
- [License](#license)

## Why

In a disaster or distress scenario, cell towers and internet often go down first — but voice is still the most inclusive way to communicate, reaching people regardless of literacy. iTantra moves **text, not audio**, between two phones: speech is converted to text on-device, sent over a direct local link, and converted back to speech on the receiving end — so the "voice message" travels over connections far too thin to carry real audio.

## Problem statement

Built for **Smart India Hackathon 2026**, PS **#26173** — *"iTantra: Indian Multilingual TTS & STT Aided Neural Transceiver Radio Access for low bitrate links"* (ISRO, Dept. of Space).

**Requirements:** on-device STT + TTS across 10 Indian languages, fully offline, open-source models only, running on low/mid-range phones, in a dual push-to-talk-walkie-talkie / normal-phone Android app connected over WiFi or Bluetooth.

## Status

| Component | State |
|---|---|
| App scaffold (Kotlin + Compose) | ✅ Done |
| Offline STT (Vosk, English) | ✅ Working |
| Local transport (Nearby Connections) | ✅ Working |
| Offline TTS | 🟡 Interim (Android system TTS) — swapping for open-source model |
| Push-to-talk / mode toggle UI | 🟡 In progress |
| Remaining 9 languages | ⬜ Planned |

See [open issues](../../issues) for the live task list.

## Architecture

```
Phone A (talk mode)                          Phone B (listen mode)
┌────────────────────────┐                   ┌────────────────────────┐
│ Mic → VAD/pause detect  │                   │                        │
│  → STT engine           │                   │                        │
│  → sentence text        │                   │                        │
│         │               │    WiFi / BT      │           ▲            │
│         ▼               │ ────────────────► │           │            │
│  Nearby Connections     │   (text payload)   │  Nearby Connections    │
└────────────────────────┘                   │           ▼            │
                                              │  TTS engine → speaker  │
                                              └────────────────────────┘
```

## Tech stack

| Layer | Choice |
|---|---|
| Language | Kotlin |
| UI | Jetpack Compose (Material 3) |
| Speech-to-Text | Vosk (offline, open-source) |
| Text-to-Speech | Android TextToSpeech (offline pack) — interim |
| Transport | Google Nearby Connections (WiFi + Bluetooth) |
| Min SDK | 24 (Android 7.0) |

## Getting started

```bash
git clone https://github.com/YOUR_USERNAME/iTantra.git
cd iTantra
```

1. Open in Android Studio, let Gradle sync.
2. Download the Vosk small English model from [alphacephei.com/vosk/models](https://alphacephei.com/vosk/models), unzip into `app/src/main/assets/model/`.
3. Run on two devices with WiFi + Bluetooth on, grant mic/nearby-device permissions.
4. Push-to-talk on device A → transcribed text arrives and plays as speech on device B.

## Project structure

```
app/src/main/java/com/example/itantra/
├── stt/            # Vosk speech-to-text wrapper
├── tts/            # Text-to-speech playback
├── transport/      # Nearby Connections send/receive
├── ui/             # Compose screens (PTT button, mode toggle)
└── MainActivity.kt
```

## Credits

| Component | Source | License |
|---|---|---|
| Speech-to-Text | [Vosk](https://alphacephei.com/vosk/) (Alpha Cephei) | Apache-2.0 |
| Transport | Google Nearby Connections | Google Play Services |

## License

MIT — see [LICENSE](LICENSE).

<div align="center">

If you find iTantra useful, consider starring the repo ⭐

</div>
