# Zey Brow & Wax - Professional Esthetics Website

A beautiful, modern Jekyll website for your esthetics and cosmetology business. This website features a sleek, professional design inspired by premium beauty salon templates, with full parametric configuration for easy customization.

## Features

- **Modern, Sleek Design**: Professional aesthetic perfect for beauty and grooming services
- **Fully Responsive**: Beautiful on all devices - desktop, tablet, and mobile
- **Parametric Configuration**: Easily customize all business details in `_config.yml`
- **Service Showcase**: Comprehensive services display with categories, descriptions, and pricing
- **Vagaro Integration**: Ready for Vagaro booking system integration
- **SEO Optimized**: Built-in SEO support with Jekyll SEO tag
- **Fast Loading**: Optimized CSS and JavaScript for quick page loads
- **GitHub Pages Ready**: Deploy for free on GitHub Pages

## Services Featured

- Eyebrow Threading & Shaping
- Eyebrow Tinting & Lamination
- Eyelash Lifting & Tinting
- Full Face Threading
- Comprehensive Waxing Services (Brazilian, Bikini, Legs, Arms, etc.)
- Specialized Hair Removal

## Quick Start

### Prerequisites

- Ruby (version 2.7 or higher)
- RubyGems
- Jekyll
- Bundler

### Installation

1. **Clone or navigate to your website directory**
   ```bash
   cd /Users/jackalhan/Development/zeybrowandwax
   ```

2. **Create a Gemfile** (if not exists)
   ```bash
   echo 'source "https://rubygems.org"
   gem "jekyll", "~> 4.3"
   gem "webrick"

   group :jekyll_plugins do
     gem "jekyll-feed"
     gem "jekyll-seo-tag"
   end' > Gemfile
   ```

3. **Install dependencies**
   ```bash
   bundle install
   ```

4. **Serve the site locally**
   ```bash
   bundle exec jekyll serve
   ```

5. **Open your browser**
   Navigate to `http://localhost:4000`

## Customization Guide

### 1. Business Information

Edit `_config.yml` to customize your business details:

```yaml
business:
  name: "Your Business Name"
  phone: "(555) 123-4567"
  email: "your@email.com"

  address:
    street: "Your Street Address"
    city: "Your City"
    state: "TX"
    zip: "75206"
```

### 2. Hours of Operation

Update your business hours in `_config.yml`:

```yaml
business:
  hours:
    monday: "9:00 AM - 7:00 PM"
    tuesday: "9:00 AM - 7:00 PM"
    # ... etc
```

### 3. Services

Customize your services in `_data/services.yml`. Each service category includes:
- Category name
- Icon (emoji)
- Service items with name, description, duration, and price

Example:
```yaml
- category: "Eyebrow Services"
  icon: "✨"
  items:
    - name: "Eyebrow Threading"
      description: "Precise hair removal technique"
      duration: "15-20 min"
      price: "Starting at $15"
```

### 4. Color Scheme

Customize colors in `_config.yml`:

```yaml
design:
  primary_color: "#2c2c2c"      # Main dark color
  secondary_color: "#d4af37"     # Gold accent
  accent_color: "#8b7355"        # Warm brown
```

### 5. Hero Section

Update the hero section text in `_config.yml`:

```yaml
design:
  hero:
    title: "Your Custom Title"
    subtitle: "Your custom subtitle"
    cta_text: "Your CTA Button Text"
```

### 6. Images

Add your images to `assets/images/`:
- `hero-bg.jpg` - Hero section background (recommended: 1920x1080px)
- `about.jpg` - About section image (recommended: 800x600px)

### 7. Vagaro Booking Integration

To integrate Vagaro booking:

1. Get your Vagaro widget code from your Vagaro account
2. Update `_config.yml`:

```yaml
business:
  vagaro:
    enabled: true
    widget_url: "YOUR_VAGARO_WIDGET_SCRIPT_URL"
    merchant_id: "YOUR_MERCHANT_ID"
```

3. The booking widget will automatically appear in the "Book Your Appointment" section

### 8. Social Media

Add your social media links in `_config.yml`:

```yaml
business:
  social:
    instagram: "your_handle"
    facebook: "your_facebook_page_url"
    yelp: "your_yelp_page_url"
```

## Deployment to GitHub Pages

### Method 1: GitHub Pages (Free Hosting)

1. **Create a GitHub repository** named `username.github.io` (replace `username` with your GitHub username)

2. **Initialize git and push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Zey Brow & Wax website"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "main" branch as source
   - Click "Save"

4. **Your site will be live at** `https://username.github.io`

### Method 2: Custom Domain with GitHub Pages

1. **Purchase a domain** (e.g., from Namecheap, GoDaddy, etc.)

2. **Add CNAME file** to your repository root:
   ```bash
   echo "www.yourdomain.com" > CNAME
   ```

3. **Configure DNS** at your domain registrar:
   - Add CNAME record: `www` pointing to `username.github.io`
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

4. **Update baseurl** in `_config.yml`:
   ```yaml
   url: "https://www.yourdomain.com"
   ```

## File Structure

```
zeybrowandwax/
├── _config.yml              # Main configuration file
├── _data/
│   └── services.yml         # Services data
├── _includes/
│   ├── navigation.html      # Navigation component
│   └── footer.html          # Footer component
├── _layouts/
│   └── default.html         # Main layout template
├── assets/
│   ├── css/
│   │   └── style.css        # Main stylesheet
│   ├── js/
│   │   └── main.js          # JavaScript functionality
│   └── images/              # Image files
├── index.html               # Homepage
├── Gemfile                  # Ruby dependencies
└── README.md               # This file
```

## Troubleshooting

### Site not building?
- Check Ruby and Jekyll versions: `ruby -v` and `jekyll -v`
- Ensure all dependencies are installed: `bundle install`
- Check for errors: `bundle exec jekyll build --verbose`

### Images not showing?
- Ensure images are in `assets/images/` directory
- Check file names match references in `_config.yml` and `index.html`
- Use relative paths: `/assets/images/filename.jpg`

### Vagaro widget not appearing?
- Verify `vagaro.enabled` is set to `true` in `_config.yml`
- Ensure you've added the correct `widget_url` from Vagaro
- Check browser console for JavaScript errors

### Mobile menu not working?
- Clear browser cache
- Check JavaScript console for errors
- Ensure `main.js` is loading correctly

## Customization Tips

1. **Fonts**: Change fonts in `_config.yml` under `design` section
2. **Spacing**: Adjust section padding in `assets/css/style.css`
3. **Animations**: Modify animation timing in CSS
4. **Layout**: Edit section order in `index.html`

## Support

For issues or questions:
- Check Jekyll documentation: https://jekyllrb.com/docs/
- GitHub Pages docs: https://docs.github.com/en/pages
- Vagaro support: https://www.vagaro.com/support

## License

This website template is created for Zey Brow & Wax. Feel free to modify and use for your business.

---

**Built with Jekyll | Designed for Beauty Professionals | Optimized for GitHub Pages**
