# 🚀 Android Developer Portfolio Website

A sleek, responsive, modern portfolio website tailored specifically for Android Engineers. Built with pure HTML5, CSS3, and JavaScript—zero build step needed, and 100% ready to host on **GitHub Pages**.

![Portfolio Preview](assets/images/preview.png) *(Optional preview image)*

---

## ✨ Features

- 🟢 **Android Developer Aesthetics**: Sleek dark mode with Neon Android Green (`#3DDC84`) & Kotlin Purple (`#7F52FF`) accents, subtle glassmorphism, and smooth animations.
- ⚡ **Dynamic Tagline & Typewriter**: Animated headline cycling through your specializations.
- 📱 **Interactive Projects Showcase**: Categorized filter tabs (*All*, *Jetpack Compose*, *Play Store*, *Open Source*, *Kotlin Multiplatform*).
- 🔍 **Architecture & Deep-Dive Modals**: Click "Architecture & Details" on any project to reveal tech stack breakdown, highlights, and system design.
- 🛠️ **Customizable Data**: All your bio, statistics, skills, projects, and work history live in [`js/projects-data.js`](js/projects-data.js) for effortless 1-minute updates.
- 📋 **1-Click Copy**: Quick-copy buttons for email and phone with animated toast notifications.
- 📱 **Fully Responsive**: Optimized for ultra-wide desktops, laptops, tablets, and smartphones.

---

## 🛠️ How to Host on GitHub Pages (Step-by-Step)

Hosting your website on GitHub Pages is **100% free** and takes less than 2 minutes:

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and log into your account.
2. Click **New Repository** (or visit [github.com/new](https://github.com/new)).
3. Name your repository:
   - For a user site: `malikmuneeb981.github.io`
   - Or any repository name: `portfolio`
4. Set the repository to **Public**.
5. Do **not** initialize with a README (you already have this one).
6. Click **Create repository**.

### Step 2: Push your Files to GitHub
Open your terminal in this directory (`portfolio website`) and run:

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "feat: initial commit of Android developer portfolio"

# 4. Set main branch
git branch -M main

# 5. Link your remote repository
git remote add origin https://github.com/malikmuneeb981/<your-repo-name>.git

# 6. Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. On GitHub, go to your repository's **Settings** tab.
2. In the left sidebar, click **Pages** (under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/(root)`.
4. Click **Save**.
5. Wait 30-60 seconds. Your live website URL will be displayed at the top:
   `https://<your-username>.github.io/<your-repo-name>/` (or `https://<your-username>.github.io/`).

---

## ✏️ How to Customize Your Info

All personal content and projects are centralized in [`js/projects-data.js`](js/projects-data.js):

- **Personal Info**: Update name, bio, email, phone, location, and social links.
- **Stats**: Change years of experience, apps published, downloads, and crash-free rates.
- **Skills**: Add or remove categories, skills, and proficiency levels.
- **Projects**: Add your own apps, screenshots, Play Store links, and architecture descriptions.
- **Experience**: Edit your past roles and companies.

---

## 🎨 Technologies Used

- **HTML5**: Semantic tags, accessibility attributes, OpenGraph metadata.
- **CSS3**: Custom properties (variables), Grid, Flexbox, Glassmorphism backdrop-filters, custom keyframe animations.
- **JavaScript (ES6+)**: Unidirectional data binding, interactive project filtering, modal state machine, clipboard API.
- **Google Fonts**: Inter, Outfit, and JetBrains Mono.

---

Designed & Built with ❤️ for Android Developers.
