# 📦 React To-Do App (Version 1)

A clean, responsive single-page To-Do application built with React, Vite, and containerized with Docker and Nginx.

## 🚀 Features
* **Add Task**: Quick task creation with input validation.
* **Display Tasks**: Clear view of active and completed tasks.
* **Toggle Complete**: Mark tasks done with visual strike-through styling.
* **Delete Task**: Remove individual items.
* **Local Persistence**: Saves state using browser `localStorage`.
* **Containerized**: Production-ready static build using Docker + Nginx.

## 🛠️ Tech Stack
* **Frontend**: React.js + JavaScript
* **Build Tool**: Vite
* **Styling**: CSS3
* **Containerization**: Docker & Docker Compose
* **Server**: Nginx (alpine)

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone git@github.com:Mohal/cf-todo-app-1.git
   cd cf-todo-app-1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
   
## 🐳 Running with Docker

Build and run the production container locally:
```bash
docker compose up --build -d
```
Access the app at http://localhost:3000.

To stop the container:
```bash
docker compose down
```

## 🗺️ Roadmap
* [x] V1: Basic CRUD + LocalStorage + Docker
* [ ] V2: Task Filtering (All/Active/Completed) & Inline Editing
* [ ] V3: Migration to TypeScript
* [ ] V4: Node.js / Express REST API integration
