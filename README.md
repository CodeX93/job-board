# CareerDNA Job Board

A modern job board web application built with **Next.js 15** and **Material-UI (MUI)**, designed for job seekers and employers in the Middle East. Easily browse jobs, view company profiles, and manage applications with a beautiful, responsive UI.

---

## 🚀 Features
- **Home Hero Section**: Eye-catching hero with real-time stats (jobs posted, applicants hired, applications made)
- **Job Listings**: Browse, filter, and sort jobs with MUI-powered UI
- **Job Detail Pages**: Dynamic routes for job details, with company info and application modal
- **Job Seekers**: Browse and filter job seekers, view detailed profiles
- **Companies**: Company directory and detail modals
- **Responsive Design**: Fully mobile-friendly
- **Modern Branding**: Custom CareerDNA logo and color scheme

---

## 🛠️ Tech Stack
- [Next.js 15.3.4](https://nextjs.org/) (App Router, SSR, Turbopack)
- [React 19](https://react.dev/)
- [Material-UI (MUI)](https://mui.com/) for UI components and icons
- [Vercel](https://vercel.com/) ready

---

## 📁 Folder Structure
```
app/
  home/components/         # Home page UI (hero, stats, job cards)
  jobs/                    # Job listings, filters, job detail pages
  jobseekers/              # Job seeker list and detail pages
  companies/               # Company list and detail pages
  component/               # Shared UI (Navbar, Footer)
  ThemeRegistry.jsx        # MUI theme provider
public/
  careerdna-logo.png       # Main logo
  job_data.json            # Job data
  job-seekers.json         # Job seeker data
  companies.json           # Company data
```

---

## ⚡ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

---

## 📝 Customization
- **Logo:** Replace `public/careerdna-logo.png` with your own logo if desired.
- **Data:** Update JSON files in `public/` for jobs, companies, and seekers.
- **Theme:** Edit `app/ThemeRegistry.jsx` for custom MUI theming.

---

## 📦 Deployment
Deploy easily to [Vercel](https://vercel.com/) or your preferred platform.

---

## 🙏 Credits
- Built with [Next.js](https://nextjs.org/) and [Material-UI](https://mui.com/)
- Logo and branding: CareerDNA

---

For questions or contributions, please open an issue or pull request!
