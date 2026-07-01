# Rutvik Dhanorkar — Portfolio

A personal portfolio built with **React**, **Vite**, and **Tailwind CSS**. The contact form
uses **Formik** + **Yup** for validation and **EmailJS** to send messages directly from the
browser, with keys stored in a `.env` file.

## 1. Install dependencies

```bash
npm install
```

## 2. Set up EmailJS (for the contact form to actually send emails)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an **Email Service** (e.g. connect your Gmail) → copy the **Service ID**.
3. Create an **Email Template** with these variables in the template body:
   `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` → copy the **Template ID**.
4. Go to **Account → General** → copy your **Public Key**.

## 3. Configure environment variables

Copy the example file and fill in your real keys:

```bash
cp .env.example .env
```

Then edit `.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

`.env` is already listed in `.gitignore` so your keys won't be committed.

## 4. Run locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 5. Build for production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder — deploy this to Vercel, Netlify,
GitHub Pages, or any static host.

## Routing

This site uses `react-router-dom` with `BrowserRouter` and real URL paths:

| Path        | Page                          |
|-------------|--------------------------------|
| `/`         | Home (hero + quick links)     |
| `/about`    | About + build log / journey   |
| `/projects` | Projects                      |
| `/skills`   | Skills                        |
| `/contact`  | Contact form                  |
| any other   | 404 page                      |

Because these are real paths (not `#hash` links), a static host needs to be told to serve
`index.html` for every route so refreshing `/projects` doesn't 404:

- **Netlify** → already handled by `public/_redirects` (included in this project).
- **Vercel** → already handled by `vercel.json` (included in this project).
- **GitHub Pages** → doesn't support this out of the box; either use `HashRouter` instead of
  `BrowserRouter` in `src/main.jsx`, or add a `404.html` that redirects to `index.html`.

## Editing your content

- **Hero / About / Journey text** → `src/components/Hero.jsx`, `About.jsx`, `Experience.jsx`
- **Projects** → `src/components/Projects.jsx` (edit the `projects` array)
- **Skills** → `src/components/Skills.jsx` (edit the `groups` array)
- **Colors / fonts** → `tailwind.config.js`
- **Social links** → `src/components/Footer.jsx` (replace the `#` hrefs with your real GitHub/LinkedIn)

## Tech stack

- React 18 + Vite
- Tailwind CSS
- Formik + Yup (form + validation)
- EmailJS (`@emailjs/browser`)
- lucide-react (icons)
