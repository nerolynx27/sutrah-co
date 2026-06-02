# Sutrah.co — Client Delivery Workflow

> Say **"show my workflow"** to Claude to pull this up anytime.

---

## STEP 1 — Send Client the Intake Form
Open this file in your browser, print/save as PDF, send to client via WhatsApp:
`Sutrah-Client-Intake-Form.html` (in this folder)

---

## STEP 2 — Fill the Config File
Once client returns the form, open and update:
`app/templates/health-beauty/config.ts`

Fields to update:
- `name` — business name
- `tagline` — their slogan
- `description` — about their business
- `phone`, `whatsapp`, `email`, `address`
- `hours` — operating hours
- `mapEmbedUrl` — Google Maps → Share → Embed a map → copy the src URL
- `services[]` — list all services with price and description

---

## STEP 3 — Duplicate the Template
```bash
cd C:\Users\user\sutrah-co
cp -r app/templates/health-beauty app/templates/CLIENT-NAME
```

---

## STEP 4 — Preview Locally
```bash
npm run dev
```
Visit: `http://localhost:3000/templates/CLIENT-NAME`

---

## STEP 5 — Deploy
```bash
git add .
git commit -m "feat: add CLIENT-NAME website"
git push
npx vercel --prod
```

---

## STEP 6 — Connect Client's Domain
1. Vercel dashboard → sutrah-co → Settings → Domains → Add domain
2. Give client these DNS settings:
   ```
   Type: CNAME | Name: @ | Value: cname.vercel-dns.com
   ```
3. Wait 10–30 min → live ✅

---

## STEP 7 — Handover
- Send client their live URL
- Confirm WhatsApp booking button works
- Collect first month retainer payment

---

## Time Per Client: ~1.5 hours total
