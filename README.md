![DevSuite](https://devsuite.s3.us-east-1.amazonaws.com/screenshot.webp)

<p align="center"></p>

<p align="center">
  Find the Perfect Developer Tools for Your Next Project
  <br>
  <a href="https://devsuite.co"><strong>Learn more »</strong></a>
  <br />
  <br />
  <a href="https://devsuite.co">Website</a>
  ·
  <a href="https://github.com/piotrkulpinski/devsuite/issues">Issues</a>
</p>

<p align="center">
   <a href="https://github.com/piotrkulpinski/devsuite/stargazers"><img src="https://img.shields.io/github/stars/piotrkulpinski/devsuite" alt="Github Stars"></a>
   <a href="https://github.com/piotrkulpinski/devsuite/blob/main/LICENSE"><img src="https://img.shields.io/github/license/piotrkulpinski/devsuite" alt="License"></a>
   <a href="https://github.com/piotrkulpinski/devsuite/pulse"><img src="https://img.shields.io/github/commit-activity/m/piotrkulpinski/devsuite" alt="Commits-per-month"></a>
   <a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/piotrkulpinski/devsuite">
   <img alt="open in devcontainer" src="https://img.shields.io/static/v1?label=Dev%20Containers&message=Enabled&color=blue&logo=visualstudiocode" />
   </a>
</p>

<p align="center">
  <a href="https://www.producthunt.com/posts/devsuite?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-devsuite" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=579017&theme=light" alt="DevSuite - Find the Perfect Developer Tools for Your Next Project | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
</p>

## About this project

DevSuite is a **free, curated collection of the best developer tools** designed to improve your productivity when building your next project.

In today's fast-paced tech world, keeping up with the **constant stream of new software development tools** can be challenging. That's where DevSuite comes in. The mission is simple: to help developers like you find the perfect tools to improve your workflow and bring your ideas to life more efficiently.

DevSuite is more than just a directory; it's **a community-driven resource**. Feel free to explore, discover, and contribute by submitting your favorite tools to the site. Your input is invaluable in helping to grow and maintain a comprehensive, up-to-date collection.

## Development

This project uses [Bun](https://bun.sh/) as the package manager and runtime. Make sure you have Bun installed before proceeding.

To set up the project for development:

1. Clone the repository
2. Run `bun install` in the root directory to install all dependencies
3. Set up the required environment variables (see below)
4. Run `bun run db:push` to push the Prisma schema to the database
5. Create symlinks for the .env file (see Environment Variables section)
6. Run `bun run dev` to start the web application in development mode

### Environment Variables

Refer to the `.env.example` file for a complete list of required variables.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action
| :---------------- | :-------------------------------------------------------- 
| `bun install`     | Installs dependencies
| `bun run dev`     | Starts web app in development mode at `localhost:5175`
| `bun run build`   | Build both apps for production
| `bun run start`   | Preview production build locally
| `bun run lint`    | Run linter
| `bun run format`  | Format code
| `bun run typecheck` | Run TypeScript type checking
| `bun run db:generate` | Generate Prisma client
| `bun run db:studio` | Start Prisma Studio
| `bun run db:push` | Push Prisma schema to database
| `bun run db:pull` | Pull Prisma schema from database
| `bun run db:reset` | Reset Prisma schema

## Third-Party Services

DevSuite uses the following third-party services:

- Database: [Neon](https://neon.tech)
- Analytics: [Plausible](https://plausible.io), [PostHog](https://posthog.com)
- Newsletter: [Beehiiv](https://go.devsuite.co/beehiiv)
- Background Jobs: [Inngest](https://inngest.com)
- File Storage: [AWS S3](https://aws.amazon.com/s3)
- Payments: [Stripe](https://stripe.com)
- Screenshots: [ScreenshotOne](https://go.devsuite.co/screenshotone)

Make sure to set up accounts with these services and add the necessary environment variables to your `.env` file.

## Deployment

The project is set up for deployment on Vercel.

To deploy manually:

1. Build the project: `bun run build`
2. Start the production server: `bun run start`

Ensure all environment variables are properly set in your production environment.

## License

DevSuite is licensed under the [GPL-3.0 License](LICENSE).
