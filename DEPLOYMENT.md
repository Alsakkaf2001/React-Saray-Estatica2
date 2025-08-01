# Deployment Guide for Saray Estetic Website

This guide will help you deploy your Saray Estetic website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository" or the "+" icon
3. Name your repository: `React-Saray-Estatica2` (important: use this exact name)
4. Make it public (required for free GitHub Pages)
5. Don't initialize with README, .gitignore, or license (we already have these files)
6. Click "Create repository"

### 2. Connect Your Local Project to GitHub

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Saray Estetic website"

# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/React-Saray-Estatica2.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment will start automatically

### 4. Configure Repository Permissions

1. In your repository, go to "Settings" → "Actions" → "General"
2. Under "Workflow permissions", select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"
4. Click "Save"

## Automatic Deployment

Once set up, your website will automatically deploy when you:

- Push changes to the `main` branch
- The GitHub Action will build and deploy your site

## Access Your Website

After deployment (takes 2-5 minutes), your website will be available at:

```
https://YOUR_USERNAME.github.io/React-Saray-Estatica2/
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the `cname` setting in `.github/workflows/deploy.yml`

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure the repository name matches exactly: `React-Saray-Estatica2`
2. **Build Fails**: Check the Actions tab for error details
3. **Images Not Loading**: Ensure all image URLs are relative or use the correct base path

### View Build Status:

1. Go to "Actions" tab in your repository
2. Click on the latest workflow run
3. Check for any errors in the build process

## Making Updates

To update your website:

1. Make changes to your code
2. Commit changes: `git add . && git commit -m "Update website"`
3. Push to GitHub: `git push`
4. GitHub Actions will automatically rebuild and redeploy

## Support

If you encounter issues:

1. Check the Actions tab for build errors
2. Ensure all file paths are correct
3. Verify the repository name matches the Vite config base path
