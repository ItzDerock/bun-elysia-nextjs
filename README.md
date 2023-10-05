# Bun + ElysiaJS + NextJS

<!-- demo video -->
[![Demo Video](https://derock.media/r/oUEf6r.mp4)]

A sample project showing ElysiaJS running as the Next.JS custom server with full end-to-end typesaftey similar to tRPC and ts-rest. You get to define the route paths (unlike with tRPC) and no extra boilerplate is needed (unlike with ts-rest contracts). All running on the fast bun runtime.

You can access Bun globals in React Server Components (for example, Bun.password, Bun.file). Hot Module Reloading is also supported.

All next features *should* work, but largely untested. Tested with bun v1.0.4