# Professional Portfolio Site 

Single-page portfolio website that displays basic professional information such as a bio, resume, contact info, and also showcases projects. 

Developed with Node.js

## Getting Started

### Dependencies

* Node.js (https://nodejs.org/en/download)
* Express (https://expressjs.com/en/starter/installing.html)
* Tailwind CSS
* Material UI

### Build

```bash
# Initialize a node project with default settings
npm init -y

# Allows edits to code without having to restart app completely. 
npm install nodemon

# CSS templates and resources
npm install tailwindcss

# Creates a tailwind.config.js file in the root of your project
npx tailwindcss init -p
```

**For Material UI components:**
```HTML
<!-- Add these lines to the <head> section of your HTML files -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

### Executing program

```bash
# Run in developer mode
# CTRL + C to exit
npm run dev
```

## Create Your Own Git Repository

```bash
# Initiate a git repository on your local
# -b main changes default branch to main
git init -b main

# Can also change this later if needed with:
# git branch -M different_name

# Adds the files in the local repository and stages them for commit.
# To unstage a file, use 'git reset HEAD YOUR-FILE'.
git add .

# Commits the tracked changes and prepares them to be pushed to a remote repository.
# To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
git commit -m "First Commit"

# Add remote url to git
git remote add origin git@github.com:SiddhaBasu/PortfolioSite-DEVPSU.git

# Make your commits and push to remote
git push -u origin main
```
