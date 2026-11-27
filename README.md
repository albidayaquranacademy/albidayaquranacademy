# Al-Bidayah Quran Academy – Website Project

English-only, responsive, multi-page website foundation based on the supplied academy plan and visual references.

## Brand and operating decisions
- Name: Al-Bidayah Quran Academy
- Tagline: Learn the Quran. Build a Lifelong Connection.
- Main office: Calicut, Kerala, India
- Qatar: Coming Soon (not an operating branch)
- Current delivery model: Online only
- Language: English only
- Palette: dark navy, white text, metallic gold accents
- India WhatsApp: +91 62381 59862
- Existing package base prices: QAR 120, QAR 220, QAR 290 monthly
- Currency display: INR, USD, QAR (indicative conversion only)

## Project structure
- `index.html` – home
- `about.html` – about, mission and vision
- `courses.html` – course catalogue
- `courses/course-1.html` ... `course-9.html` – individual course details
- `teachers.html` – teacher information
- `pricing.html` – packages and currency display
- `free-trial.html` – trial request form
- `registration.html` – admission enquiry
- `branches.html` – India main office and Qatar coming soon
- `faq.html`, `blog.html`, `contact.html`
- `login.html` – portal login placeholder
- `student-dashboard.html`, `parent-dashboard.html`, `teacher-dashboard.html`, `admin-dashboard.html` – dashboard UI structure
- `assets/` – copied existing logo and image assets
- `css/site.css`, `js/site.js` – shared styles and behaviour
- `docs/` – requirements, implementation plan and data model notes

## Important functional status
This is a static front-end project. Enquiry and trial forms open WhatsApp with a prefilled message. Currency selection changes displayed estimates only. Portal pages are UI scaffolds. There is no live database, secure authentication, role permissions, calendar availability, email delivery, payment processing, or student records yet.

Do not enter real child/student information or passwords into any placeholder portal. Do not publish teacher qualifications, student counts, testimonials, or performance claims unless verified by the academy.

## Deploy
Upload the complete folder contents to the GitHub repository root, preserving `assets/`, `css/`, `js/`, `courses/`, and `docs/`. Do not upload only `index.html`, because the new page depends on these folders. If the repository already contains these asset files, replace only matching assets when needed; retain Git history. Vercel should deploy from the repository root as a static site.

For production, configure a custom domain, HTTPS, privacy notice, cookie policy if applicable, and a secure backend before enabling user accounts.

## Final visual update
- Added image galleries and supporting photographs across the homepage, About, course detail, teacher, pricing, registration, FAQ, contact and portal pages using the existing academy image assets.
- Homepage featured course row remains exactly three cards; full catalogue remains on the Courses page.
- Homepage counters animate to 1,000+, 45+, 10 and 18+ as requested. Confirm that these are current, accurate academy figures before publishing them as factual public claims.

## Quran-focused homepage visual refresh
- Hero background now uses the existing Quran hero photograph with a blue/navy overlay inspired by the supplied reference.
- Added a global online academy pill and retained the split hero layout, four feature cards and animated statistics.
- Homepage now includes a 12-photo Quran learning gallery using the existing academy image library.
- Existing course and inner-page galleries remain in place.


## Approved academy name
The official displayed academy name is **Al-Bidayah Quran Academy**, matching the supplied logo artwork. Header branding and website text have been updated accordingly.
