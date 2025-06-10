# 💼 Portfolio Website

This is a full-stack portfolio website built with Next.js, featuring a glassmorphism design, MongoDB integration, and an admin panel for managing contact messages.

## 🌐 Live Demo

<a href="https://portfolio-v2-topaz-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
    👉 View Live Application
</a>

---

## 📸 Screenshots

| Homepage | Projects | Contact |
|----------|----------|---------|
| ![Homepage](/public/screenshots/homepage.png) | ![Projects](/public/screenshots/projects.png) | ![Contact](/public/screenshots/contact.png) |
| *Hero section with glassmorphism design and animated background shapes* | *Showcase of all projects with hover effects and live demo links* | *Functional contact form with MongoDB integration* |

## ✨ Features

- **Glassmorphism Design**: Dark theme with glass-like effects and smooth animations
- **Responsive Layout**: Works perfectly on mobile, tablet, and desktop
- **Contact Form**: Functional form connected to MongoDB
- **Admin Panel**: Password-protected backend interface to manage messages
- **CV Download**: Downloadable resume functionality

## 🛠️ Tech Stack

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS  
**Backend:** MongoDB Atlas, Next.js API routes  
**Deployment:** Vercel

## 🚀 Quick Start

```bash
git clone https://github.com/rada-ii/portfolio-v2.git
cd portfolio-v2
npm install
```

Create `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
ADMIN_PASSWORD=your_admin_password
```

Run development server:

```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/     # Navbar, Footer
│   ├── contact/        # Contact page
│   ├── projects/       # Projects showcase
│   ├── admin/          # Admin panel (backend only)
│   └── api/           # Contact form & CV download
├── lib/mongodb.ts     # Database connection
└── types/             # TypeScript definitions
```

## 🎨 Design Features

- Dark glassmorphism theme with gradient backgrounds
- Floating animated shapes and smooth hover effects
- Mobile-first responsive design
- Professional typography and spacing

## 📬 Contact

**Author:** Rada Ivanković  
**GitHub:** [@rada-ii](https://github.com/rada-ii)  
**Email:** ra.da@live.com

---

⭐ **Star this repo if you found it helpful!**
