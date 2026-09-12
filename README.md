<div align="center">
  
# iTantra

**Offline speech relay for low-bitrate & no-network scenarios — in 10 Indian languages.**

No internet. No cloud APIs. Speak in your language on one phone, it's heard aloud on the other — works like a walkie-talkie, relayed over WiFi Direct or Bluetooth.

![Kotlin](https://img.shields.io/badge/KOTLIN-2.0-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![UI](https://img.shields.io/badge/UI-JETPACK%20COMPOSE-4285F4?style=for-the-badge)
![Android](https://img.shields.io/badge/ANDROID-API%2024+-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Speech](https://img.shields.io/badge/SPEECH-100%25%20OFFLINE-blue?style=for-the-badge)
![License](https://img.shields.io/badge/LICENSE-MIT-yellow?style=for-the-badge)

<br>

<table>
<tr>
<td align="center" width="180"><h3>10</h3>Indian languages targeted</td>
<td align="center" width="180"><h3>No</h3>Need Internet?</td>
<td align="center" width="180"><h3>0</h3>Cloud API calls for speech</td>
<td align="center" width="180"><h3>SIH 2026</h3>PS #26173, ISRO</td>
</tr>
</table>
</div>



## Contents

- [Demo](#demo)
- [Why iTantra?](#why-itantra)
- [What iTantra Does](#what-itantra-does)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [System Architecture](#system-architecture)
- [Technology Stack](#technology-stack)
- [Language Support](#language-support)
- [Project Status](#project-status)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [SIH 2026](#smart-india-hackathon-2026)
- [Team](#team--debug-or-die)
- [Contributing](#contributing)
- [License](#license)

## Why iTantra?

Disasters break communication at the exact moment people need it most — and they break it in a specific, predictable order.

- **The towers fall first.** A cyclone, flood, or earthquake typically knocks out cell infrastructure within hours, and once it's down, calls, SMS, and mobile data all go with it — there's no network left to route any of them.
- **Text was never going to fill the gap.** Even where a message could somehow get through, a meaningful share of the affected population can't read or write, and composing a coherent text message while panicked, injured, or in the dark isn't realistic for anyone.
- **Voice is the one format everyone can use** — but it's also the heaviest. A few seconds of raw audio is several megabytes, and the only connection two stranded phones can form with each other post-disaster is a short-range, low-bitrate WiFi or Bluetooth link that was never built to carry that much data.
- **"Offline" isn't always offline.** Plenty of voice-assistant apps market themselves as offline-capable but still quietly rely on a cloud-hosted STT or TTS API for the actual speech processing — which collapses the instant the one thing that's actually gone is the internet connection itself.

iTantra starts from the opposite assumption: no cell network, no internet, no server anywhere in the loop — just two phones and whatever direct link they can form with each other. Every part of the speech pipeline, from recognition to synthesis, is built to run entirely on-device inside that constraint, in whichever of ten Indian languages the two people involved actually speak.
