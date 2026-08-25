// projects-data.js
// Centralized portfolio data for Malik Muneeb

const portfolioData = {
  personal: {
    name: "Malik Muneeb",
    title: "Senior Android Engineer",
    tagline: "Specialized in Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP) & Compose Multiplatform (CMP) with 5+ years of mobile engineering experience.",
    location: "Islamabad, Pakistan",
    email: "malikmuneeb981@gmail.com",
    phone: "+92 347 3366889",
    github: "https://github.com/malikmuneeb981",
    linkedin: "https://linkedin.com/in/malikmuneeb981",
    playStore: "https://play.google.com",
    resume: "assets/Malik_Muneeb_Resume.pdf",
    bio: "Senior Android Developer with 5+ years of experience and a BS in Software Engineering. Proven expertise in building enterprise fintech systems and high-scale consumer applications from scratch. Deeply skilled in Kotlin, Jetpack Compose, KMP/CMP, Ktor, WebSockets, and modern reactive architecture, with foundational knowledge of iOS and SwiftUI."
  },

  stats: [
    { number: "5+", label: "Years Experience", icon: "code" },
    { number: "12+", label: "Apps Built from Scratch", icon: "mobile" },
    { number: "KMP / CMP", label: "Multiplatform Specialist", icon: "globe" },
    { number: "99.9%", label: "Reliability & Uptime", icon: "shield" }
  ],

  skillCategories: [
    {
      category: "Core Languages & Multiplatform",
      skills: [
        { name: "Kotlin", level: "Expert" },
        { name: "Kotlin Multiplatform (KMP)", level: "Advanced" },
        { name: "Compose Multiplatform (CMP)", level: "Advanced" },
        { name: "Java", level: "Advanced" },
        { name: "iOS / SwiftUI", level: "Foundational" },
        { name: "Coroutines & Flow", level: "Expert" }
      ]
    },
    {
      category: "Android UI & Frameworks",
      skills: [
        { name: "Jetpack Compose", level: "Expert" },
        { name: "Material Design 3", level: "Expert" },
        { name: "Accessibility Services", level: "Advanced" },
        { name: "Custom Keyboards (IME)", level: "Expert" },
        { name: "App Localization", level: "Expert" },
        { name: "XML & Custom Views", level: "Advanced" }
      ]
    },
    {
      category: "Networking, Real-time & Backend",
      skills: [
        { name: "Ktor Client & Server", level: "Advanced" },
        { name: "WebSockets (Live Chat/Sync)", level: "Expert" },
        { name: "REST APIs & Retrofit", level: "Expert" },
        { name: "Google Maps & Location APIs", level: "Expert" },
        { name: "WorkManager", level: "Expert" },
        { name: "RoomDb & Persistence", level: "Expert" }
      ]
    },
    {
      category: "Fintech, Monetization & Tools",
      skills: [
        { name: "JazzCash / Payment Gateways", level: "Expert" },
        { name: "C2C Payments & BNPL Systems", level: "Expert" },
        { name: "Google AdMob", level: "Advanced" },
        { name: "GitHub & Version Control", level: "Expert" },
        { name: "Clean Architecture & MVVM/MVI", level: "Expert" },
        { name: "Code Review & Team Mentorship", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "fintech-jazzcash-bnpl",
      title: "JazzCash App",
      category: "fintech",
      featured: true,
      tagline: "Enterprise mobile payment suite with JazzCash integration, C2C bulk payments, and Buy-Now-Pay-Later (BNPL) engine.",
      bannerGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      tags: ["Kotlin", "Fintech Security", "JazzCash SDK", "BNPL Engine", "App Localization", "Clean Architecture"],
      playStoreUrl: "https://play.google.com/store/search?q=jazzcash&c=apps&hl=en",
      githubUrl: "",
      highlights: [
        "Architected and integrated JazzCash payment system for secure instant transactions.",
        "Engineered high-throughput C2C Bulk Payment processing module.",
        "Built Buy Now Pay Later (BNPL) multi-tier credit installment flows.",
        "Implemented end-to-end multi-language App Localization across platforms.",
        "Led code reviews, architecture governance, and cross-platform feature integrations at AKSA-SDS."
      ],
      architecture: "Clean Modular Architecture with high-security transaction encryption, reactive StateFlow streams, and strict error-resilient payment flows."
    },
    {
      id: "ai-photo-editor",
      title: "AI Photo Editor (KMP / CMP)",
      category: "kmp",
      featured: true,
      tagline: "Cross-platform AI-powered image editing and manipulation app built from scratch with Kotlin & Compose Multiplatform.",
      bannerGradient: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
      tags: ["KMP", "Compose Multiplatform", "AI APIs", "Kotlin", "Coroutines"],
      playStoreUrl: "",
      githubUrl: "https://github.com/malikmuneeb981",
      highlights: [
        "Built shared business and UI logic targeting multiple platforms using KMP & CMP.",
        "Integrated high-speed neural AI image processing and enhancement REST APIs.",
        "Created custom gesture-driven image transformation canvas in Compose.",
        "Optimized memory usage for high-resolution photo filters and export rendering."
      ],
      architecture: "Shared Kotlin Multiplatform core with declarative Compose Multiplatform UI layer and reactive state management."
    },
    {
      id: "family-locator-realtime",
      title: "Family Locator & Live Tracking",
      category: "realtime",
      featured: true,
      tagline: "Real-time location sharing and safety monitoring app using Google Maps, Android Location Services, and Ktor WebSockets.",
      bannerGradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
      tags: ["Google Maps", "Location Service", "Ktor Backend", "WebSockets", "WorkManager", "RoomDb"],
      playStoreUrl: "",
      githubUrl: "https://github.com/malikmuneeb981",
      highlights: [
        "Low-latency real-time GPS coordinate streaming powered by WebSockets and Ktor backend.",
        "Battery-efficient background tracking utilizing Android Location Service and WorkManager.",
        "Custom interactive Google Maps markers, safe-zone geofencing, and arrival alerts.",
        "Offline-first trajectory storage with automatic sync via Room Database."
      ],
      architecture: "Event-driven WebSocket architecture with background foreground service integration and MVVM data binding."
    },
    {
      id: "handshake-social",
      title: "Handshake - Location Social Discovery",
      category: "realtime",
      featured: false,
      tagline: "Nearby social discovery, instant messaging, and interactive map platform built with Compose, Ktor backend, and WebSockets.",
      bannerGradient: "linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)",
      tags: ["Jetpack Compose", "Ktor Backend", "WebSockets", "Maps Integration", "Real-time Chat"],
      playStoreUrl: "",
      githubUrl: "https://github.com/malikmuneeb981",
      highlights: [
        "Proximity-based member discovery with live distance radius filtering.",
        "Real-time one-to-one and group messaging system backed by WebSockets.",
        "Fully declarative custom UI designed in Jetpack Compose.",
        "Optimized WebSocket heartbeat connection management for intermittent network connectivity."
      ],
      architecture: "Unidirectional MVI architecture with Ktor WebSocket backend and Room message caching."
    },
    {
      id: "ai-voice-translator",
      title: "AI Voice Translator & Screen Reader",
      category: "compose",
      featured: false,
      tagline: "Real-time on-screen translation and live voice interpretation powered by Android Accessibility Service and AI APIs.",
      bannerGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      tags: ["Accessibility Service", "Voice AI", "Jetpack Compose", "REST APIs", "Floating Overlay"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.lingolive.chat.translator&hl=en",
      githubUrl: "https://github.com/malikmuneeb981",
      highlights: [
        "Implemented Android Accessibility Service for instant on-screen text extraction & live translation overlay.",
        "High-accuracy voice-to-voice translation with speech recognition APIs.",
        "Floating HUD bubble with quick toggle translation controls.",
        "Multi-language dictionary with pronunciation audio playback."
      ],
      architecture: "Android System Service architecture integrated with background translation dispatchers and floating Compose UI."
    },
    {
      id: "voice-typing-keyboards",
      title: "Voice Typing & Urdu Keyboard Suite",
      category: "compose",
      featured: false,
      tagline: "Custom Android Input Method (IME) keyboards featuring high-accuracy voice-to-text, Urdu script, and stylish font engines.",
      bannerGradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
      tags: ["Android IME Service", "Voice-to-Text", "Custom Keyboard", "AdMob", "Typography Engine"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.voicetyping.keyboard.translator.scarletstudio&hl=en",
      githubUrl: "https://github.com/malikmuneeb981",
      highlights: [
        "Custom InputMethodService architecture providing ultra-responsive key tap latencies.",
        "Integrated seamless speech-to-text dictation engine for Urdu and English.",
        "Dynamic custom font styling engine transforming keystrokes into stylized typography.",
        "Monetized with Google AdMob banners and interstitials."
      ],
      architecture: "Low-level Android IME engine with custom view rendering and high-frequency touch event processing."
    },
    {
      id: "ai-sticker-generator",
      title: "AI Sticker Generator (KMP / CMP)",
      category: "kmp",
      featured: false,
      tagline: "AI-driven sticker and avatar creation platform with KMP/CMP shared codebase and WhatsApp sticker pack exporter.",
      bannerGradient: "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",
      tags: ["KMP", "Compose Multiplatform", "Jetpack Compose", "AI APIs", "AdMob"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.ai.photo.avatar.sticker&hl=en",
      githubUrl: "https://github.com/malikmuneeb981",
      highlights: [
        "Prompt-to-sticker generation using advanced generative AI APIs.",
        "WhatsApp / Telegram sticker pack integration and direct export pipeline.",
        "Shared business logic across multiplatform targets via Kotlin Multiplatform."
      ],
      architecture: "KMP Clean Architecture with Compose Multiplatform UI."
    },
    {
      id: "video-downloader-player",
      title: "Video Downloader & Media Player",
      category: "compose",
      featured: false,
      tagline: "High-speed multi-threaded video downloader and media playback engine built with REST APIs and Jetpack Compose.",
      bannerGradient: "linear-gradient(135deg, #84CC16 0%, #65A30D 100%)",
      tags: ["Jetpack Compose", "Media Engine", "REST APIs", "Foreground Service", "RoomDb"],
      playStoreUrl: "",
      githubUrl: "https://github.com/malikmuneeb981",
      highlights: [
        "Multi-threaded background downloading with pause, resume, and segment assembly.",
        "Hardware-accelerated media player with subtitle and audio track switching.",
        "Foreground notification service with progress tracking."
      ],
      architecture: "Repository pattern with WorkManager background scheduling and Room DB download status tracking."
    },
    {
      id: "prayer-quran-qibla",
      title: "Prayer Times, Quran & Qibla Finder",
      category: "compose",
      featured: false,
      tagline: "Astronomical calculation engine for accurate global prayer timings, digital Quran with audio recitation, and compass Qibla finder.",
      bannerGradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
      tags: ["Sensors & Compass", "Astronomical Algorithms", "Audio Player", "RoomDb", "AdMob"],
      playStoreUrl: "",
      githubUrl: "https://github.com/malikmuneeb981",
      highlights: [
        "Magnetic sensor and accelerometer integration for precise 3D Qibla direction compass.",
        "Accurate local calculation methods (MWL, ISNA, Umm al-Qura, Karachi) without internet dependency.",
        "Digital Quran reader with audio verse streaming and bookmarks."
      ],
      architecture: "Offline-first architecture with sensor fusion calculation and Room database."
    }
  ],

  experience: [
    {
      role: "Senior Android Engineer",
      company: "AKSA-SDS",
      location: "Islamabad, Pakistan",
      period: "06/2025 - Present",
      description: "Leading the integration of core features across multiple mobile platforms. Implemented JazzCash mobile payment gateway and C2C Bulk Payment processing systems. Collaborated across engineering teams to enhance Jazz Communities ecosystem. Engineered Buy Now Pay Later (BNPL) credit installment workflows, managed full App Localization for multi-language support, and conducted architectural code reviews and mentorship."
    },
    {
      role: "Android Developer",
      company: "Funprime Technology",
      location: "Islamabad, Pakistan",
      period: "03/2023 - 03/2025",
      description: "Spearheaded end-to-end development of 7+ production applications from scratch. Built cross-platform AI Photo Editor and AI Sticker Generator using KMP/CMP. Developed real-time AI Voice Translator using Android Accessibility Service, created custom Voice Typing Keyboards, and engineered live GPS tracking & messaging apps (Family Locator, Handshake) using Google Maps, Location Services, and Ktor WebSockets backend."
    },
    {
      role: "Android Developer",
      company: "Solution of Technologies",
      location: "Rawalpindi, Pakistan",
      period: "08/2022 - 03/2023",
      description: "Developed custom Urdu Keyboard with Voice Typing integration and stylish font customization. Created full-featured Islamic utility application (Prayer Timing, Quran & Qibla Finder) with sensor-based compass and accurate prayer timings. Integrated Google AdMob monetization and delivered highly engaging, responsive mobile interfaces."
    },
    {
      role: "Junior Android Developer",
      company: "Techinn Technologies",
      location: "Rawalpindi, Pakistan",
      period: "10/2021 - 08/2022",
      description: "Engineered on-device image processing and transformation features (Gender Swap) using native algorithms without external paid API dependencies. Gained extensive hands-on experience in Android lifecycle, view rendering, and performance optimization."
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "BUITEMS",
      location: "Quetta, Pakistan",
      period: "Graduated: 03/2021",
      details: "Comprehensive curriculum focusing on Mobile Computing, Software Architecture, Distributed Systems, Data Structures, and Algorithms."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
