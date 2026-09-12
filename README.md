<div align="center">

# iTantra

### Speak locally. Transmit lightly. Stay connected.

**An offline multilingual communication system designed for low-bandwidth environments,**
using local speech processing and lightweight text transmission.

<br>

<img src="https://img.shields.io/badge/Android-Application-3DDC84?style=for-the-badge&logo=android&logoColor=white"/>
<img src="https://img.shields.io/badge/Kotlin-Development-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white"/>
<img src="https://img.shields.io/badge/Offline-AI-111827?style=for-the-badge"/>
<img src="https://img.shields.io/badge/SIH-2026-FF6B35?style=for-the-badge"/>

<br><br>

**Voice → Speech-to-Text → Compact Text → Local Link → Text-to-Speech → Voice**

</div>

---

<div align="center">

### 🎬 Project Preview

<img src="docs/assets/demo.gif" width="720" alt="iTantra Demo"/>

<br>

*Offline voice communication through local device-to-device connectivity.*

</div>

---

## ⚡ The Idea

What if communication doesn't need the internet?

iTantra explores a different approach:

> **Instead of transmitting voice, convert speech into text locally, transmit the lightweight text, and reconstruct the voice on the receiving device.**

This makes communication more suitable for environments where bandwidth, connectivity, or conventional network infrastructure may be limited.

```text
       SENDER DEVICE
       
   🎙️ Voice Input
          │
          ▼
   🧠 Offline STT
          │
          ▼
      📝 Text
          │
          ▼
  ┌─────────────────┐
  │ Wi-Fi / Bluetooth│
  │  Local Transfer  │
  └────────┬────────┘
           │
           ▼
      RECEIVER DEVICE

       📝 Text
          │
          ▼
    🧠 Offline TTS
          │
          ▼
      🔊 Voice
