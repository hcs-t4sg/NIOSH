
# Introduction
This introduction will provide a list of technologies used as well as how these pieces fit together from a tech standpoint. To quickstart the U.I. and skip this introduction, navigate to the [Next.js](#nextjs) section.

This project is an extremely powerful and versatile starter project that will allow T4SG to develop quickly on a variety of projects. Like most web development projects, it is composed of a front-end and a backend, though these might be slightly different than the front-end and backend that you are used to.

The frontend uses a framework called Next.js. Next.js is essentially React, except you do not have to worry about programming routing (mapping url to rendering specific pages). There are a few other quality of life improvements over React, but if you know how to use React, you know how to use Next.js and vice versa.

The backend is as close as possible to being codeless. It is built using a technology called Hasura, which places a graphql layer on top of a Postgres database. Essentially, you use Hasura's UI to describe your data and who can access it, and then your frontend accesses its data as it usually would. This eliminates almost all need for backend programming!

# Next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the web app locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can edit any of the tsx files and have the page simultaneously update. 

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

