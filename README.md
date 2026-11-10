# AL-HAQQ — The Truth. Beyond the Headlines.

An independent investigative journalism publication, founded and edited by Abdi Fatah.

Built with **Next.js 16 (React 19)**, hosted on **Cloudflare Workers** (via OpenNext) with a **Cloudflare D1**
(SQLite) database. Live at https://al-haqq.news.

## Run it on your computer

Requires Node.js 22 or newer.

```bash
npm install
npm run db:migrate:local   # creates the local database with the launch articles
npm run dev
```

Open http://localhost:3000. The editor's area is at http://localhost:3000/admin.

The admin password and session secret are in `.env.local` (not shared, not committed). Change `ADMIN_PASSWORD`
to your own long passphrase before going live. See `.env.example` for every setting.

## What the editor can do without touching code (`/admin`)

- **Write and publish articles**: headline, subtitle, kicker, section, type (Investigation, Report, Analysis,
  Opinion, Explainer), topics, photograph with credit, licence, caption and alt text, the *Evidence Ledger*,
  article text (Markdown), and sources.
- **Drafts, scheduling and previews**: drafts are visible only to the signed-in editor, and a future publication
  date schedules an article.
- **Change the lead story**: tick "Lead story" on an article, or click **Make lead** in the article list.
- **Editor's Selection**: tick "Include in the Editor's Selection".
- **Corrections**: fill in the "Correction / update notice". It appears at the top of the article and in the
  public corrections log at `/corrections`.
- **Author profile, portrait, contact email and social links**: Admin → Settings. Social links you leave
  empty are hidden, so there are never dead buttons.
- **Messages** from the contact form (letters, corrections, tips): Admin → Messages.
- **Newsletter subscribers**: Admin → Subscribers, with a CSV download.

## What needs connecting before launch

| Feature | Status | What to do |
|---|---|---|
| Newsletter sending | Sign-ups are stored, but **no emails are sent** | Use an email service (Buttondown, Mailchimp, Brevo): import the CSV, or have a developer connect its API in `lib/public-actions.js`. |
| Contact form email alerts | Messages are stored in Admin → Messages; no email notification | Optional: connect an email-sending service (for example Resend or Postmark). |
| Social media links | Hidden until set | Add them in Admin → Settings. |
| Editor portrait and biography | Placeholder | Add them in Admin → Settings. |
| Domain and hosting | Not deployed | See below. |

## Deploying (Cloudflare)

The site runs on Cloudflare Workers, and its database is Cloudflare D1.

One-time setup:

```bash
npx wrangler login                          # sign in to Cloudflare in the browser
npx wrangler d1 create al-haqq-db           # put the database_id it prints into wrangler.jsonc
npm run db:migrate:remote                   # create the tables and launch articles in D1
npx wrangler secret put ADMIN_PASSWORD      # your admin password
npx wrangler secret put SESSION_SECRET      # 32+ random characters
```

Every deploy:

```bash
npm run deploy
```

Or connect the GitHub repository in the Cloudflare dashboard (Workers & Pages → al-haqq → Settings → Builds) with
build command `npx opennextjs-cloudflare build` and deploy command `npx opennextjs-cloudflare deploy`. Each push to
GitHub then deploys automatically.

**Custom domain:** add al-haqq.news to Cloudflare, change the nameservers at Hostinger to the two Cloudflare gives
you, then in the Worker's Settings → Domains & Routes add `al-haqq.news` and `www.al-haqq.news`.

**Backups:** D1 keeps 30 days of point-in-time recovery. To export a copy:
`npx wrangler d1 export al-haqq-db --remote --output backup.sql`.

**Adding launch content later:** normally, use the admin area. To ship content in code, edit `content/`, run
`npm run db:seed-sql`, and put the new insert lines in a new migration such as `migrations/0003_more.sql`.

## Content

- The seven launch articles are in `content/seed-articles.js`. They are loaded into the database **only the first
  time** the site runs. After that, edit them in the admin area.
- They were researched and drafted using sources verified on 10 November 2026. **The editor must review each one
  before publishing it under his name**, and re-check fast-moving figures.
- Photographs are real, credited editorial or archive images from Wikimedia Commons, under the licences shown in
  each caption (CC BY-SA, CC BY, CC0 and US-government public domain). Captions say when a photo is an archive image
  and does not show the event described.
- Editorial policy pages (About, Independence, Standards, Fact-Checking, Corrections, Privacy) are in
  `content/pages.js`.

## Project layout

```
app/(front)/          Front page (full masthead)
app/(site)/           Article, section, topic, search, author, contact and policy pages
app/admin/            The editor's area (password protected)
components/           Masthead, footer, cards, forms
content/              Seed articles, default settings, policy pages
lib/                  Database, queries, auth, Markdown, server actions
migrations/           Database schema and launch content (Cloudflare D1)
scripts/              Generates the launch-content migration
```
