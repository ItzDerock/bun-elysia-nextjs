# Bun + ElysiaJS + NextJS

<!-- demo video -->
https://github.com/ItzDerock/bun-elysia-nextjs/assets/14848722/5f1c9e70-f2fd-4e21-ae03-4bdbad8215db

[Demo Deployment](https://bun-elysia-nextjs-production.up.railway.app/)

A sample project showing ElysiaJS running as the Next.JS custom server with full end-to-end typesafety similar to tRPC and ts-rest. You get to define the route paths (unlike with tRPC) and no extra boilerplate is needed (unlike with ts-rest contracts). All running on the fast bun runtime.

You can access Bun globals in React Server Components (for example, Bun.password, Bun.file). Hot Module Reloading is also supported.

Tested with bun v1.0.4

## Production Deployment
Simply run `bun build` and wait for NextJS to build the pages. Then you can start the server in production mode with `bun start` or run the entrypoint with `NODE_ENV` set to `production`. This will serve the built NextJS pages from the .next folder in the process's cwd.

Based on my measurements, this basic app uses 0% CPU on idle and ~280MB of RAM on start. This is compared to normal Node.JS which uses ~400MB for a similar sized app.

### On Railway (nixpacks)
[Railway](https://railway.app?referralCode=ESBdK3) is a simple cloud deployment platform and with their Nixpacks builder, you can deploy this project with a single click.
On their dashboard, just connect your GitHub repo and sit back and relax. 

### With Docker
soon™️