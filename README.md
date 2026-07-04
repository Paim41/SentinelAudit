<div align="center">

# Sentinel Audit

**Authorised, educational web security auditing — in one clean dashboard.**
Submit a URL. Get a non-destructive scan of HTTPS/TLS, headers, cookies, and CSRF gaps — scored, explained, and exportable.

[![Live Demo](https://img.shields.io/badge/RUN%20A%20SCAN-Live%20Demo-b7ff3c?style=for-the-badge&logo=vercel&logoColor=0f1113)](https://www.sentinelaudit.my/)
[![Type](https://img.shields.io/badge/Type-Security%20Auditing-22272b?style=for-the-badge&logoColor=b7ff3c)](https://www.sentinelaudit.my/)
[![Scans](https://img.shields.io/badge/Scans-Non--Destructive-22272b?style=for-the-badge)](https://www.sentinelaudit.my/)
[![Stack](https://img.shields.io/badge/Built%20With-Flask%20%2F%20Python-22272b?style=for-the-badge&logo=python&logoColor=b7ff3c)](https://www.sentinelaudit.my/)
</div>

---

## About

Sentinel Audit is a Python/Flask web app for running **authorised, educational** security configuration checks against a single URL — no exploitation, no payloads, no brute force. Just a clear, transparent read on how a site is configured.

> ⚠️ This performs limited, non-destructive configuration checks only. It is **not** a replacement for a professional penetration test, compliance audit, or manual security assessment.

---

## Scan Flow

```
Submit URL
    ↓
Safety Checks    →  SSRF guard, redirect revalidation, size/time limits
    ↓
Scanning         →  HTTPS/TLS, headers, cookies, forms, CSRF, disclosure
    ↓
Scoring          →  0–100 educational score + risk level
    ↓
Dashboard        →  Findings, history, comparison, charts
    ↓
Export           →  Printable HTML report or PDF
```

---

## Features

- **Auth** — registration, login/logout, password hashing, CSRF protection, protected routes
- **Safe Scanning** — SSRF protections, redirect revalidation, request timeouts, response-size limits, optional domain allowlist
- **Checks** — HTTPS usage, HTTP→HTTPS redirects, TLS cert validity/expiry, security headers, cookie attributes, forms, missing CSRF tokens, information disclosure, mixed content, misconfigurations
- **Storage** — SQLite for scans, findings, and metrics
- **Reporting** — 0–100 score, risk level, scan-to-scan comparison, printable HTML reports, PDF export
- **Dashboard** — recent-scan and risk-distribution charts, history filters, responsive mobile layout

---

## Built For

```
Purpose  → Authorised security education & self-auditing
Users    → Developers, students, small site owners
Type     → Web Security Auditing Tool
Form     → Self-hosted Flask Web App
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3.11+, Flask, Flask-SQLAlchemy, Flask-Login, Flask-WTF, WTForms |
| Scanning | Requests, BeautifulSoup4, `ssl`, `socket`, `ipaddress`, `urllib.parse` |
| Reporting | ReportLab (PDF export) |
| Frontend | HTML5, CSS3, Vanilla JS, Jinja2, Chart.js |
| Database | SQLite |

---

## Project Structure

```
sentinel-audit/
├── run.py
├── config.py
├── requirements.txt
├── .env.example
├── app/
│   ├── auth/
│   ├── dashboard/
│   ├── reports/
│   ├── scans/
│   ├── scanners/
│   ├── static/
│   └── templates/
├── instance/
├── reports/
└── tests/
```

---

## Getting Started

### Windows
```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
python run.py
```

### macOS / Linux
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python run.py
```

Then open **http://127.0.0.1:5000**

Seed demo data:
```bash
flask --app run.py seed-demo
```

Demo login:
```
Email:    demo@sentinel.local
Password: ChangeMe12345
```

---

## Configuration

Copy `.env.example` to `.env` and set a real `SECRET_KEY`.

| Variable | Description |
|---|---|
| `ALLOW_LOCAL_TARGETS` | `true` allows localhost/private IP targets (lab use); `false` blocks localhost, private, link-local, multicast, reserved, and metadata addresses |
| `ALLOWED_DOMAINS` | Comma-separated allowlist — when set, only these domains (and subdomains) may be scanned |
| `MAX_REDIRECTS` | Redirect-following limit; every hop revalidated. Default `3` |
| `MAX_RESPONSE_BYTES` | Caps response size. Default `2097152` |

---

## Safe Testing Targets

Only scan:
- Websites you own
- Local development sites
- Deliberately vulnerable training apps
- Isolated lab systems
- Systems you have written permission to test

---

## Security Limitations

Sentinel Audit does **not** perform exploitation, payload injection, auth bypass, credential/brute-force attacks, port scanning, network discovery, directory brute-forcing, data exfiltration, command execution, or denial-of-service activity. The score is an educational assessment, not a certification or proof of compliance.

---

## Tests

```bash
pytest
```

---

## Troubleshooting

| Issue | Fix |
|---|---|
| Local target blocked | Set `ALLOW_LOCAL_TARGETS=true` in `.env` (lab use only) |
| DNS errors during scan | Confirm the hostname resolves from your machine |
| PDF download fails | Confirm the `reports/` directory is writable |
| Charts don't load | Confirm the machine can reach `cdn.jsdelivr.net` |
| Registration/email validation fails | Reinstall dependencies with `pip install -r requirements.txt` |

---

## Roadmap / Ideas

- [ ] Scheduled recurring scans
- [ ] Multi-URL / bulk scanning
- [ ] Exportable JSON API for findings
- [ ] Team/organisation accounts
- [ ] Additional checks (CSP analysis, subresource integrity, DNS/email security records)

---

<div align="center">

*Scan responsibly.*

[sentinelaudit.my](https://www.sentinelaudit.my/)

</div>
