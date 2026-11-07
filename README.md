# Team App

A responsive directory interface for exploring user profiles. Built with **React, Vite, Apollo Client, and GraphQL**, backed by a separate API server that retrieves sample user data.

[Live demo](https://thunderous-sundae-a37e28.netlify.app/) · [API repository](https://github.com/aymenouer/team-app-server)

> **Project status:** Earlier personal project using React 17 and Vite 2. The hosted demo and server are historical and may no longer be available.

## Features

- Grid and list layouts
- Name search and ascending/descending sorting
- Loading, empty, and error states
- Lazy display of user cards
- Responsive mobile and desktop views

## Screenshots

| Desktop grid | Desktop list |
| --- | --- |
| ![Desktop grid view](https://user-images.githubusercontent.com/49178153/160249455-0f4e1e5a-768e-4236-ac96-490b65a4f547.png) | ![Desktop list view](https://user-images.githubusercontent.com/49178153/160249451-5ee067c0-a462-4e7e-9a33-4777f1fc5760.png) |

| Mobile grid | Mobile list |
| --- | --- |
| ![Mobile grid view](https://user-images.githubusercontent.com/49178153/160249457-e7492bdd-c824-452f-9ff3-d29e323c24b7.png) | ![Mobile list view](https://user-images.githubusercontent.com/49178153/160249460-dcfd1a52-da65-4a5a-9157-487991653561.png) |

## Tech stack

- React 17 and JavaScript
- Vite 2
- Apollo Client and GraphQL
- Framer Motion

The [server repository](https://github.com/aymenouer/team-app-server) uses Apollo Server and a REST data source.

## Getting started

```bash
git clone https://github.com/aymenouer/team-app-client.git
cd team-app-client
npm install
npm run dev
```

Vite will print the local URL. The client currently points to `https://team-app-server.herokuapp.com/` in `src/main.jsx`. If that service is unavailable, change the Apollo Client URI to a running instance of the separate server.

## Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Build the frontend |
| `npm run preview` | Preview the built frontend |
| `npm test` | Historical Create React App test command; test setup needs review |

## Potential improvements

- Move the GraphQL URL to an environment variable
- Modernize dependencies and the test runner configuration
- Add CI and repeatable automated tests
- Improve accessibility and keyboard interactions

## Author

[Aymen Ouerghui](https://github.com/aymenouer)
