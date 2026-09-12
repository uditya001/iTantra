<div align="center">

<details>
<summary><b>📋 Table of Contents</b></summary>

- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Where This Stands](#-where-this-stands)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [License](#license)

</details>

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

## The Problem

> When a cyclone, flood, or earthquake knocks out cell towers, the internet goes with it — but that's exactly when people most need to reach each other. Text messages don't work either: a lot of the affected population can't read or write, and typing under panic isn't realistic. Voice is the only format that reaches everyone, but raw audio is too data-heavy to move over the kind of low-bitrate, ad-hoc links you're left with once the towers are down. Most existing solutions also lean on cloud-hosted STT/TTS APIs, which is a non-starter the moment the internet itself is the thing that's gone.

## The Solution

> iTantra doesn't try to send audio at all. It converts speech to text on the sending phone, using models that run entirely on-device, sends that text — a few hundred bytes, not megabytes — directly to a second phone over WiFi or Bluetooth, and converts it back into spoken audio there. No towers, no router, no data plan, and no server anywhere in the loop. Push-to-talk turns it into a walkie-talkie; toggled off, the phone behaves normally. The same pipeline works across 10 Indian languages, so the person speaking and the person listening don't even need to share one.
