# Francisco Beltran-Silva academic website

This is a static website prepared for GitHub Pages. It uses only HTML, CSS, JavaScript, and SVG assets, so it does not need Node, Ruby, Jekyll, or a build step.

## Files

- `index.html` - homepage
- `research.html` - publications, working papers, search filter
- `teaching.html` - teaching profile, courses, awards, training
- `cv.html` - web CV with print/save-as-PDF button
- `contact.html` - contact page
- `404.html` - custom not-found page
- `assets/css/styles.css` - site styling
- `assets/js/main.js` - mobile menu, search filter, email copy, current year
- `assets/img/` - SVG placeholders and favicon
- `.nojekyll` - tells GitHub Pages to serve files directly
- `CNAME.example` - optional custom-domain file

## Edit checklist

1. Replace `assets/img/headshot-placeholder.svg` with a real photo, such as `assets/img/headshot.jpg`.
2. Update the image path in `index.html` from `assets/img/headshot-placeholder.svg` to your real photo.
3. Add paper links by replacing the `#` URLs in `research.html`.
4. Replace `YOUR-GITHUB-USERNAME` in `sitemap.xml` with your GitHub username or custom domain.
5. If you want `www.fbeltransilva.com` to point to GitHub Pages, rename `CNAME.example` to `CNAME` after you configure DNS.
6. Add a PDF CV later by placing it in `assets/docs/` and linking to it from `cv.html`.

## Deploy through GitHub.com

1. Create a GitHub account or sign in.
2. Create a new repository named `YOUR-GITHUB-USERNAME.github.io` using your exact GitHub username in lowercase.
3. Upload all files in this folder to the repository root.
4. Go to the repository's **Settings** tab.
5. Click **Pages** in the left sidebar.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Set the branch to `main` and the folder to `/root`, then click **Save**.
8. After GitHub finishes publishing, open `https://YOUR-GITHUB-USERNAME.github.io`.

## Deploy with Git on your computer

```bash
git init
git add .
git commit -m "Initial academic website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-GITHUB-USERNAME.github.io.git
git push -u origin main
```

Then enable Pages in repository Settings as described above.
