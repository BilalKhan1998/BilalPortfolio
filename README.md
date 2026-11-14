# Bilal Raza Khan — Full Stack .NET Developer Portfolio

A responsive ASP.NET Core MVC portfolio built with .NET 10, Razor, HTML, CSS and vanilla JavaScript.

## Included
- CV-based professional summary and Quality Clix experience (October 2020–Present)
- Professional profile photo in the animated hero section
- Projects: Send It by Text (SIBT), Card Shield, Shield Services and Surplus2Serve
- Surplus2Serve is explicitly marked **In Progress**
- Downloadable copy of the supplied CV
- Scroll reveal animations, subtle profile motion and reduced-motion accessibility
- Responsive navigation and light/dark theme toggle
- No Bootstrap, jQuery or icon package required by the portfolio itself

## Requirements
- .NET 10 SDK
- Visual Studio 2026 or Visual Studio Code

Check the installed SDK:
```bash
dotnet --version
```

## Run locally
Open a terminal in this folder and run:
```bash
dotnet restore
dotnet run
```
Open the local URL shown in the terminal.

## Personal details used
- Name: Bilal Raza Khan
- Location: Lahore, Pakistan
- Email: bilalbaloch4748@gmail.com
- LinkedIn: https://www.linkedin.com/in/bilal-khan-80b35b370
- GitHub: https://github.com/BilalKhan1998

Review these links before publishing in case you want to use different profile URLs.

## Update your photo and CV
- Profile photo: `wwwroot/images/bilal-profile.jpeg`
- Downloadable CV: `wwwroot/files/Bilal-Raza-Khan-CV.pdf`

Replace either file while keeping the same filename to update the website assets.

## Project notes
- The three professional project descriptions are based on the uploaded CV. Confirm you are permitted to publicly describe each client project before deploying.
- Surplus2Serve is listed as a personal project in progress.
- External project links point to the public URLs listed in the CV or the known Surplus2Serve GitHub repository.
- The contact action uses `mailto:` and does not send messages through the server.
- The CV PDF is publicly downloadable from the website. Remove it from `wwwroot/files` if you do not want the CV to be public.
- Hosting is not configured yet. We can choose a .NET-compatible host separately.

## GitHub
Create an empty repository, then run:
```bash
git init
git add .
git commit -m "Create developer portfolio"
git branch -M main
git remote add origin https://github.com/BilalKhan1998/portfolio.git
git push -u origin main
```
Replace the remote URL with the repository you create.

## Structure
```text
BilalPortfolio/
├── Controllers/
├── Models/
├── Views/
│   ├── Home/
│   └── Shared/
└── wwwroot/
    ├── css/site.css
    ├── files/Bilal-Raza-Khan-CV.pdf
    ├── images/bilal-profile.jpeg
    └── js/site.js
```
