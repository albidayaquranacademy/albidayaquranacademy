# Backend Architecture & Implementation Plan

The supplied project is a static HTML/CSS/JS frontend. A production learning management platform requires a backend and cannot be made secure by adding browser-only login forms.

## Suggested architecture
- Frontend: keep the static public site initially; migrate to Next.js/React only if the developer needs richer app routing and authenticated experiences.
- Authentication: managed provider (Supabase Auth or Firebase Auth) with email verification, password reset, MFA for administrators and server-enforced role claims.
- Database: PostgreSQL (e.g. Supabase) with row-level security. Never trust a role value submitted by the browser.
- File storage: private buckets for student documents and certificates; signed URLs and retention controls.
- Payments: gateway selected after merchant-country eligibility review. Server-created checkout sessions, signed webhooks, idempotency and reconciliation.
- Scheduling: server-side availability, timezone-aware storage (UTC) and local display. Admin approval required.
- Email: verified transactional email provider.
- Video: Zoom/Google Meet/Jitsi links stored with restricted access.

## Suggested implementation phases
1. Confirm business/legal entity, merchant country, data controller, privacy policy and child safeguarding process.
2. Create database schema, authentication and role-based access tests.
3. Implement admissions and trial booking with admin approval.
4. Implement teacher/student/parent relationships and scheduling.
5. Add attendance, lesson reports, Hifz progress, homework and feedback.
6. Add payment checkout, webhook reconciliation, invoices and refunds.
7. Add certificates, reports, content management, email notifications and backups.
8. Security review, privacy review, penetration testing, UAT and production deployment.

## Minimum roles
- super_admin
- admin
- teacher
- parent
- student

## Security gates
- Parent may access only explicitly linked child records.
- Teacher may access only assigned students and classes.
- Student may access only their own profile, lessons and records.
- Admin permissions must be scoped and audited.
- Payment card details must never be stored by this academy database; use hosted/tokenised gateway checkout.
- Never place service-role keys or payment secrets in frontend JavaScript or GitHub.
