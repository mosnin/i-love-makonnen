# iLoveMakonnen - Official Arcade Website

A retro arcade-themed website for the musician iLoveMakonnen, featuring a pink and black aesthetic inspired by early arcade games and high-fashion minimalism.

## 🎮 Features

- **Retro Arcade Design**: Pink and black color scheme with pixel-inspired UI elements
- **CRT Effects**: Authentic scanline and glow effects for a nostalgic arcade feel
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: Framer Motion-powered transitions and interactions
- **Multiple Pages**:
  - Home: Game console-style landing screen
  - About: Artist profile with stats and achievements
  - Albums: Filterable discography grid
  - New Releases: Latest drops styled as game updates

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Orbitron)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

Alternatively, you can deploy using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.ts`:

- `retro-pink`: Primary brand color
- `retro-pink-light`: Lighter pink variant
- `retro-pink-dark`: Darker pink variant
- `neon-pink`, `neon-blue`, `neon-green`: Accent colors
- `arcade-black`, `arcade-gray`: Background colors

### Content

Update the following files to customize content:

- **Albums**: `app/albums/page.tsx` - Edit the `albums` array
- **About**: `app/about/page.tsx` - Update bio, stats, and achievements
- **New Releases**: `app/new-releases/page.tsx` - Modify releases and events
- **Social Links**: `app/about/page.tsx` - Update URLs in the social links section

### Components

Reusable components are located in the `components/` directory:

- `RetroButton`: Styled button with variants
- `RetroCard`: Card component with hover effects
- `AlbumCard`: Album display card
- `ArcadeFrame`: Decorative frame wrapper
- `PixelBorder`: Border component
- `SocialLink`: Social media link item
- `Navigation`: Responsive navbar

## 📱 Mobile Optimization

The site is fully responsive with:

- Mobile-first CSS approach
- Hamburger menu for small screens
- Touch-friendly buttons and interactions
- Optimized font sizes and spacing

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

All Rights Reserved - iLoveMakonnen

## 🤝 Credits

Built with ❤️ using Next.js and modern web technologies.
