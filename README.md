# Francisco Beltran-Silva academic website

This is a static GitHub Pages website using only HTML, CSS, and JavaScript.

## Upload to GitHub

1. Unzip the website folder.
2. Upload the contents of the folder to the repository root of your GitHub Pages repository.
3. In GitHub, go to Settings > Pages.
4. Choose Source: Deploy from a branch.
5. Choose Branch: main and Folder: / (root).
6. Save.

## Replace the profile picture

The website currently uses:

assets/img/profile.jpg

To replace it, upload your preferred picture with exactly this name:

profile.jpg

Place it inside:

assets/img/

Recommended: square image, at least 800 x 800 pixels.

## Replace the CV PDF

The website links to:

assets/docs/cv.pdf

To update the CV, upload your preferred PDF with exactly this name:

cv.pdf

Place it inside:

assets/docs/

Keeping the same filename means you do not need to edit the HTML.

## Add real hyperlinks

All optional public links are controlled in:

assets/js/links.js

Put the full URL between the quotation marks. For example:

```javascript
make_it_stick_interview: "https://example.com/interview",
```

Empty links are hidden automatically, so visitors will not see unfinished links.

Useful keys include:

- google_scholar
- orcid
- csun_profile
- make_it_stick_interview
- make_it_stick_book
- make_it_stick_summary
- stephen_chew_how_to_study
- this_is_water_audio_transcript
- economics_major_resource
- music_link
- podcast_link

Research paper links also live in this file. Add journal, DOI, SSRN, or PDF links there.

## Custom domain later

If you want to use www.fbeltransilva.com on GitHub Pages, rename:

CNAME.example

to:

CNAME

Only do this after the DNS settings for the domain are ready.

## Sitemap

The sitemap currently uses fbeltransilva1.github.io. If you changed your GitHub username or use your custom domain, edit sitemap.xml and robots.txt.
