# Developer Requirements Document (DRD)

## 1. Product
Al-Bidayah Quran Kareem is an online Quran academy. The public site and academy management platform should support students worldwide. Launch language: English only.

## 2. Brand and location
- Tagline: Learn the Quran. Build a Lifelong Connection.
- Palette: dark navy (#0D1B2B), navy panels (#162B42), white (#F7F9FC), gold (#D4AF37).
- India main office: Calicut, Kerala, India.
- Qatar: planned branch, display as Coming Soon only.
- WhatsApp: +91 62381 59862.
- Delivery model: online only.

## 3. Public pages
Home, About Us, Courses, nine individual course detail pages, Teachers, Pricing & Packages, Free Trial, Registration, Contact, FAQs, Blog, Login, Branches.

## 4. Course catalogue
1. Noorani Qaida
2. Quran Reading
3. Quran with Tajweed
4. Quran Memorisation (Hifz)
5. Quran Recitation and Fluency
6. Arabic Language
7. Islamic Studies for Children
8. Daily Duas and Salah
9. Quran Translation and Tafseer

Every production course record should support description, objectives, outcomes, level, age suitability where confirmed, duration, class frequency, teacher options, fee, trial booking and enrolment CTA. Do not invent duration, schedule, teacher availability or age rules.

## 5. Class formats
The requirements propose one-to-one, group, family, kids, adult and recorded learning. The initial launch recommendation is live one-to-one online classes; other formats should be enabled only when operations are ready.

## 6. Admissions and free trial
Registration fields: student name, parent/guardian for minors, email, WhatsApp with country code, country, age, course, preferred language (English launch), current level, teacher preference, preferred time, time zone and additional requirements.
Trial flow: choose course, request date/time, optional teacher preference, submit contact details, receive confirmation. Admin must approve, reject, reschedule or cancel. Convert time zones for display and storage.
Current static version only sends a WhatsApp enquiry; it does not book or reserve a slot.

## 7. Student portal
Profile, enrolled courses, assigned teacher, upcoming classes, join link, timetable, attendance, lesson completion, Hifz progress by Surah/Juz/Ayah, homework, feedback, assessments, payment history, certificates, support.

## 8. Parent portal
Parent account linked to one or more children, consent, child's timetable, attendance, progress reports, teacher feedback, payment and communications. Parent must only see linked child records.

## 9. Teacher portal
Verified profile, qualifications, assigned students, timetable, class join/start links, attendance, lesson reports, student progress, homework, availability, leave requests and teaching hours.

## 10. Admin portal
Dashboard KPIs; student and teacher CRUD; course and package management; scheduling; attendance; payment tracking; invoices; certificates; website content; enquiries; announcements; testimonials approval; settings; reports. Access must be permission controlled and audited.

## 11. Payments
Base prices retained for initial reference: Starter Group QAR 120/month, Individual Tutor QAR 220/month, Hifz Intensive QAR 290/month. Display currencies: QAR, INR, USD. INR/USD values on this static prototype are indicative only.
Production must select a gateway based on the legal merchant country, supported presentment and settlement currencies, refunds, recurring billing, fees and account eligibility. Do not claim multi-currency payment is live until a real gateway checkout and webhook reconciliation are tested. GBP/EUR from the supplied longer plan are not part of the currently approved currency display.

## 12. Video, notifications and certificates
Integrate Zoom, Google Meet or Jitsi after operational selection. Student join and teacher start actions must be role-protected. Email and WhatsApp notifications must use verified provider accounts. Certificates should be generated only after authorised completion approval.

## 13. Privacy and child protection
Use parent/guardian consent where required; separate parent-child relationships; least-privilege role access; secure password hashing through a trusted auth provider; server-side authorization; encrypted transport; audit logs; data retention and deletion procedures; secure backups; no public exposure of child profiles or payment details. Class recording must not be enabled by default and requires appropriate consent, legal review and access controls.

## 14. SEO and analytics
SEO-friendly URLs, metadata, sitemap, robots.txt, image optimisation, responsive design, performance monitoring, Search Console and privacy-aware analytics.

## 15. Acceptance criteria
- All public pages work on desktop and mobile.
- All course cards link to their own detail pages.
- No dead navigation links.
- Forms validate required fields and send the intended enquiry to the approved destination.
- Currency selector updates all displayed base prices consistently and labels estimates as indicative.
- Qatar is always labelled Coming Soon until officially opened.
- No unverified student/teacher counters or testimonials.
- Production authentication and data access tests prove users cannot access another role's or student's private data.
- Payment tests cover success, failure, duplicate webhook, refund and reconciliation before launch.
