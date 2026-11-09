# Dynamic Resume Full-Stack Application

A dynamic resume application built with:

- React.js
- Axios
- Node.js
- Express.js
- MongoDB (local)
- Mongoose

## Project Structure

```text
resume-fullstack/
├── backend/
│   ├── models/Resume.js
│   ├── routes/resumeRoutes.js
│   ├── .env.example
│   ├── package.json
│   ├── seed.js
│   └── server.js
└── frontend/
    ├── src/App.jsx
    ├── src/App.css
    ├── src/main.jsx
    ├── index.html
    └── package.json
```

## Requirements

- Node.js installed
- Local MongoDB installed and running

## Backend Setup

Open a terminal:

```powershell
cd backend
npm install
copy .env.example .env
npm run seed
npm start
```

The API will run at:

```text
http://localhost:5000
```

Resume API:

```text
http://localhost:5000/api/resume
```

## Frontend Setup

Open a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal, normally:

```text
http://localhost:5173
```

## Important

MongoDB must be running locally before running:

```powershell
npm run seed
```

The React frontend fetches resume data using Axios:

```js
axios.get("http://localhost:5000/api/resume")
```

React uses:

- `useState()` to store the resume data
- `useEffect()` to fetch the data
- `.map()` to dynamically render education, internship, skills, projects and leadership sections
