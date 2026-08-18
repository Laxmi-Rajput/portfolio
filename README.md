hey!
aap se baat karna tha kuchh its jenuine 
so ager lge ki baat karna chahiye to shivank19.20 ye meri instagram id hai so aap msg kar sakti ho.









# Vijay Laxmi Singh — Portfolio

Personal portfolio website for **Vijay Laxmi Singh** — Computer Science student, developer, and Co-Founder & Executive Director at ArKTest.

---

## Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Structure  | HTML5 (semantic)     |
| Styling    | CSS3 (Vanilla)       |
| Logic      | Vanilla JavaScript   |
| Fonts      | Google Fonts CDN     |
| Icons      | Font Awesome 6 CDN   |

No build tools. No npm. No Node.js. No frameworks. Works as a plain static website.

---

## Features

- ✅ Premium dark chocolate / warm beige / gold design theme
- ✅ Fully responsive (320px → 1920px)
- ✅ Mobile hamburger navigation
- ✅ Sticky transparent navbar with backdrop blur
- ✅ Smooth scrolling
- ✅ Scroll-reveal animations via IntersectionObserver
- ✅ Staggered skill card reveals
- ✅ Count-up animation on achievement score
- ✅ Active navigation highlighting
- ✅ `prefers-reduced-motion` support (accessibility)
- ✅ Semantic HTML5 with ARIA labels
- ✅ Keyboard-accessible navigation
- ✅ Profile image fallback if image is missing
- ✅ SEO meta tags + Open Graph tags
- ✅ SVG text favicon (no external file needed)

---

## Sections

| Section       | Description                                 |
|---------------|---------------------------------------------|
| Hero          | Intro, heading, profile photo, CTAs         |
| About         | Bio + Quick Profile card                    |
| Skills        | HTML, CSS, Bootstrap, Python, C, Django, .NET |
| Experience    | .NET Intern at Techpile Technology          |
| ArKTest       | Co-Founder & Executive Director feature     |
| Education     | Diploma + Class 10 timeline                 |
| Achievements  | 3 milestone cards                           |
| Projects      | Coming Soon placeholder                     |
| GitHub        | Link to github.com/Laxmi-Rajput            |
| Contact       | Location + GitHub                           |
| Footer        | Brand + GitHub + copyright                  |

---

## File Structure

```
/
├── index.html        ← Main HTML file
├── style.css         ← All CSS styling
├── script.js         ← All JavaScript
├── README.md         ← This file
└── assets/
    └── profile.jpg   ← Add your profile photo here
```

---

## Adding Your Profile Photo

1. Take any photo named **`profile.jpg`**
2. Place it inside the **`assets/`** folder
3. The website will display it automatically in the Hero section

If `profile.jpg` is missing, a placeholder message is shown automatically.

---

## Deploying to GitHub Pages (Manual Upload)

Follow these steps to deploy your portfolio for free using GitHub Pages:

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **New Repository**
3. Name it: `vijay-laxmi-singh-portfolio` (or any name you like)
4. Set visibility: **Public**
5. Do **not** initialize with a README (you will upload your own)
6. Click **Create Repository**

---

### Step 2 — Upload Your Files

In your new repository, click **Add file → Upload files** and upload:

```
index.html
style.css
script.js
README.md
```

Then create the `assets` folder and upload your photo:

1. Click **Add file → Create new file**
2. In the filename box, type: `assets/profile.jpg`
3. Or use **Upload files** and drag `profile.jpg`, making sure the path is `assets/profile.jpg`

> **Tip:** You can also upload everything at once by dragging all files and the `assets` folder into the upload window.

---

### Step 3 — Enable GitHub Pages

1. Go to your repository
2. Click **Settings** (top navigation)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

---

### Step 4 — Access Your Website

After a few minutes, your website will be live at:

```
https://<your-github-username>.github.io/<repository-name>/
```

Example:
```
https://Laxmi-Rajput.github.io/vijay-laxmi-singh-portfolio/
```

GitHub will show the Pages URL in **Settings → Pages** once it is ready.

---

## Customizing Content

All content is in `index.html`. Open it in any text editor and update:

- Text content directly in the HTML
- Links (e.g., GitHub URL)
- Section descriptions

All styling is in `style.css`. Key color variables are at the top of the file:

```css
:root {
  --bg-primary:  #1C1410;
  --gold:        #C99A52;
  --cream:       #F5EBDD;
  --beige:       #E8D8C3;
  /* ... */
}
```

---

## License

This portfolio is personal and not open-sourced for redistribution.  
© 2026 Vijay Laxmi Singh. All rights reserved.
