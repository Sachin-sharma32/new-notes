//? TODO
// configuring 
// deploying 
// upgrading 

//? CONFIGURATION 
//? TYPESCRIPT
// nextjs includes typescript plugin 
// command pallet -> select typescript version -> use workspace version 
// checks using use-client properly and correct use of hooks 
// provide types in for next/links to prevent typos -> experimental.typedRoutes (next.config.js, .next/types will be created containing types of routes)
// we don't need to serialize data when passing from server to client component
// if typescript errors then "next build" fails 
// ignoreBuildErrors: true (next.config.js)

//? ESLINT
// out of the box 
// add -> "next lint" (package.json)
// eslint errors will fail "next build"
// can lint custom directories 
// can disable rules
// eslint-config-prettier -> disable conflicts between prettier and eslint 
// .lintstagedrc.js -> run eslint with lint staged 

//? ENVIRONMENT VARIABLES
// .env.local
// NEXT_PUBLIC  (prefix for environment variable for browser, client component)
// also support multiline env variables 
// reference other env variables ($)
// file -> .env (for all), .env.development (next dev), .env.production (next build)
// .env.local -> overrides defaults
// .env.test -> from other files env variables are not available in jest or cypress 
// use "loadEnvConfig" to access test env variables in jest file 

//? Forms and Mutations 
// powerful way using "server actions"
// server actions can be defined in server components and called from client components
// enable server actions in next.config.js
// revalidation cached data 
// browser don't refresh on form submission 
// revalidatePath and revalidateTag methods for revalidation 
// use redirect to redirect after completion of server action 
// use "zod" for server side validation 
// use "useFormStatus" hook when the form is submitting 
// use try/catch to catch error in server actions 
// use "useOptimistic" hook for //* optimize updates with server actions 
// use "cookie" method to set/get/delete cookies in server actions 

//? DATA FETCHING PATTERNS (NEXTJS)
// do data fetching on server 
//   -> keeps data safe
//   -> reduce client server communication 
//   -> perform multiple data fetches in single round-trip 
//  fetch data whenever needed with "fetch", even if there are multiple same data fetches thought the app (caches)
// streaming using suspense 
// sequential data fetching 
//   -> when fetching data in nested component pattern causes request waterfall, which can be useful if one request depends on response of preview fetch, if child component is passed prop which returned from fetching data in parent 
// parallel data fetching
//   -> to avoid sequential data fetching fetch data outside components and use the result in the components
// preloading 
//   -> to further optimize parallel data fetching use "preload function"
// use cache, server-only and preload  function to fetch data throughout the app 
