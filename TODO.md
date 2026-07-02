# Portfolio Customization Checklist

To make this portfolio template your own, you'll primarily need to edit the `src/index.html` file, replace some assets, and optionally update `package.json`. 

The template creator has thoughtfully left comments starting with `<!-- Todo: ... -->` and placeholders in brackets like `[Your name here]`.

Here is a comprehensive list of all the places you need to change:

## 1. Head Section (SEO & Meta data) in `src/index.html`
- [ ] **Line 21:** Update the page title: `<title>[Your name here] | Developer</title>`
- [ ] **Line 23:** Add your keywords: `<meta name="keywords" content="[username], [name], skill" />`
- [ ] **Line 25:** Add a short description for SEO: `<meta name="description" content="[Your name here] | Developer" />`
- [ ] **Lines 37-38:** Delete the GitHub buttons script once you are done customizing: `<script async defer src="https://buttons.github.io/buttons.js"></script>`

## 2. Hero Section in `src/index.html`
- [ ] **Line 49:** Change the name: `<span class="text-color-main">Your Name</span>`
- [ ] **Line 51:** Change the subtitle/role: `I'm the Unknown Developer.`

## 3. About Section in `src/index.html`
- [ ] **Lines 81-87:** Replace the placeholder paragraphs ("This is where you can describe about yourself...") with your own bio and hobbies.
- [ ] **Line 93:** Update the resume link: `<a ... href="assets/resume.pdf">`. *Note: You'll need to replace the `src/assets/resume.pdf` file with your own resume.*
- [ ] **Lines 69-75:** *Note: You'll need to replace the `src/assets/profile.jpg` image with a photo of yourself.*

## 4. Projects Section in `src/index.html`
There are 3 placeholder projects provided. For each one, you will need to update:
- [ ] **Titles** (Lines 115, 167, 219): Change "Project Title 0", "Project Title 1", etc.
- [ ] **Descriptions** (Lines 117-121, 169-173, 221-224): Replace the placeholder text with details about your projects.
- [ ] **"See Live" Links** (Lines 123-128, 175-180, 226-231): Change `href="#!"` to the live URL of your project.
- [ ] **"Source Code" Links** (Lines 131-136, 183-188, 234-239): Change `href="#!"` to the GitHub repository URL of your project.
- [ ] **Images** (Lines 151-155, 203-207, 254-258): *Note: Replace the `src/assets/project.jpg` file with screenshots of your actual projects (or add new images to the assets folder and update the `src` attribute here).*

## 5. Contact Section in `src/index.html`
- [ ] **Line 275:** Change the text: `<p class="contact-wrapper__text">[Put your call to action here]</p>`
- [ ] **Line 280:** Update the email address: `href="mailto:example@email.com"`
- [ ] **Line 281:** Change the button text from "Call to Action" if desired.

## 6. Footer Section in `src/index.html`
- [ ] **Lines 294-304:** Update the `href="#!"` links for the Twitter, LinkedIn, and GitHub icons to point to your actual social profiles.
- [ ] **Lines 308-314:** You can optionally change the copyright / "Template developed by" text to your own information.
- [ ] **Lines 316-338:** Remove the "Fork" and "Star" GitHub buttons section once you finish the portfolio.

## 7. Assets to Replace in `src/assets/`
You will need to overwrite the following files in the `src/assets` folder with your own files:
- [ ] `profile.jpg` (Your photo)
- [ ] `project.jpg` (Your project screenshots - you can add multiple and reference them in HTML)
- [ ] `resume.pdf` (Your actual resume)
- [ ] `favicon.png` (Optional: The small icon that appears in the browser tab)

## 8. Project Details in `package.json` (Optional)
If you plan to publish this code on GitHub or NPM, you might want to open `package.json` and update the `name`, `description`, `author`, and `repository` fields to match your details instead of the template author's.
