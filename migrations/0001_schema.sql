-- AL-HAQQ database schema (Cloudflare D1 / SQLite)
CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  dek TEXT NOT NULL DEFAULT '',
  kicker TEXT NOT NULL DEFAULT '',
  section TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'Report',
  tags TEXT NOT NULL DEFAULT '[]',
  author TEXT NOT NULL DEFAULT 'Abdi Fatah',
  body TEXT NOT NULL DEFAULT '',
  ledger TEXT NOT NULL DEFAULT '[]',
  sources TEXT NOT NULL DEFAULT '[]',
  hero TEXT NOT NULL DEFAULT '{}',
  featured INTEGER NOT NULL DEFAULT 0,
  editors_pick INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'draft',
  published_at TEXT,
  updated_at TEXT,
  last_verified TEXT,
  update_note TEXT NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_articles_pub ON articles (status, published_at);
CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  kind TEXT NOT NULL,
  subject TEXT NOT NULL DEFAULT '',
  body TEXT NOT NULL,
  created_at TEXT NOT NULL,
  read INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
