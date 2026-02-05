# Netlify Deployment Guide

## আপনার Portfolio Netlify তে Deploy করার পদ্ধতি:

### Step 1: GitHub Repo চেক করুন
✓ আপনার code ইতিমধ্যে GitHub এ আছে (origin/main branch)

### Step 2: Netlify Account তৈরি করুন
1. https://netlify.com এ যান
2. **Sign up** → GitHub দিয়ে login করুন
3. Authorize করুন

### Step 3: New Site তৈরি করুন
1. Netlify Dashboard এ **Add new site** → **Import an existing project**
2. **GitHub** select করুন
3. আপনার `Portfolio` repo select করুন

### Step 4: Build Settings
Deploy settings এ এটি দেখাবে:
- **Build command:** `npm run build` ✓
- **Publish directory:** `.next` ✓
- **Node version:** 18 বা 20 (automatic হবে)

এই সেটিংস আমরা `netlify.toml` এ সেট করেছি। Default accept করুন।

### Step 5: Environment Variables (Optional)
Deploy settings → Environment:
```
NEXT_PUBLIC_SITE_URL = https://yourdomain.netlify.app
```

### Step 6: Deploy করুন
**Deploy site** button এ click করুন।

---

## Deploy হওয়ার পর:

### Custom Domain সেট করুন (Optional)
1. Dashboard → Site settings → Domain management
2. Custom domain add করুন (যদি আপনার domain থাকে)

### Builds Monitor করুন
- Netlify Dashboard → Deploys এ সব build logs দেখতে পারবেন
- Build fail হলে error message থাকবে

### Form Submission (Contact form)
আপনার contact form Netlify Forms এর জন্য enable করতে, `components/Contact.tsx` এ:
```tsx
<form name="contact" method="POST" netlify>
  ...
</form>
```

---

## Deployment করার আগে:

1. Local build test করুন:
   ```bash
   npm run build
   npm run start
   ```

2. Git push করুন (যদি নতুন পরিবর্তন থাকে):
   ```bash
   git add .
   git commit -m "deployment ready"
   git push origin main
   ```

---

## Important Files:
- `netlify.toml` - Build configuration
- `.gitignore` - এ .next, node_modules আছে নিশ্চিত করুন

**Ready to deploy!** 🚀
