import Elysia from "elysia";

export const countController = new Elysia().get("/count", (ctx) => {
  // read cookie and increment it
  const cookie = ctx.cookie["count"];
  const newCount = (parseInt(cookie.get() ?? "0") + 1).toString();
  cookie.set({ value: newCount });

  // return the count
  return {
    message: "Hello world! You have visited this page " + newCount + " times.",
  };
});
