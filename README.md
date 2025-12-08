# Full Stack Developer Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing full stack development skills and projects.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly menu
- **Portfolio Sections**:
  - Hero section with introduction
  - About section with stats
  - Skills showcase with progress bars
  - Projects gallery with descriptions
  - Work experience timeline
  - Contact form with social links
  - Professional footer

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Icons**: SVG icons
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/matttiepie/react-app.git
cd react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the content in each component:
   - `src/components/Hero.jsx` - Name and title
   - `src/components/About.jsx` - About text and stats
   - `src/components/Skills.jsx` - Your skills and proficiency levels
   - `src/components/Projects.jsx` - Your projects with links
   - `src/components/Experience.jsx` - Your work experience
   - `src/components/Contact.jsx` - Contact information

2. **Styling**: Modify the CSS files in each component to match your preferred color scheme

3. **Colors**: The app uses a purple gradient theme. Search for `#667eea` and `#764ba2` to change the primary colors

## Deployment

### Build for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

### Deploy to Netlify, Vercel, or GitHub Pages

The app can be easily deployed to any static hosting service:

- **Netlify**: Connect your repository and set build command to `npm run build`
- **Vercel**: Import project and it will auto-detect Vite settings
- **GitHub Pages**: Use `gh-pages` package to deploy the `dist` folder

## Project Structure

```
react-app/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Header.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Skills.jsx/css
│   │   ├── Projects.jsx/css
│   │   ├── Experience.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── App.jsx       # Main app component
│   ├── App.css       # App styles
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── package.json      # Dependencies
└── vite.config.js    # Vite configuration
```

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out if you have any questions or suggestions!
