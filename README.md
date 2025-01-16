# Posts App

This is a TypeScript-based project that includes a frontend built with **Vite + React + TailwindCSS**. The project allows users to display, view, search, add posts, and view details along with comments.

---

## Frontend Directory
The **frontend** directory contains a React + Vite application styled with TailwindCSS.

### Components
1. **PostsPage (Main Page)**
   - Fetches and displays a list of posts.
   - Each post displays the **Title** and **Body** in a card format.

2. **PostCard**
   - Displays individual post details (Title and Body) in a card layout.

2. **PageDetailsPage**
   - Displays detailed information of a selected post, including:
     - **Title**
     - **Body**
     - **Comments** (Fetched from: `https://jsonplaceholder.typicode.com/comments?postId={postId}`)

4. **SearchBar**
   - Provides search functionality to filter posts by title on the main page.

5. **CreatePostPage**
   - Allows users to add new posts with fields for **Title** and **Body**.

6. **LoadingSpinner**
   - A loading spinner component that appears when data is being fetched. It includes a customizable message (default is "Loading...").

7. **Pagination**
   - Allows users to navigate through multiple pages of posts.

---

## Getting Started

### Prerequisites
- Node.js v22.11.0 later
- npm v10.9.0 or later

### Steps

#### 1. Clone the repository
```bash
https://github.com/hilaitzhak/Posts-App.git
cd posts-app
```

#### 2. Setup Frontend
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```
   > **Frontend runs on `http://localhost:5173` by default.**

---


## Directory Structure

```
posts-app/
├── frontend/
|   ├── assets/
│   │   ├── post.png
│   ├── src/
│   │   ├── components/
│   │   ├── interfaces/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── tailwind.config.js
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
└── README.md
```

---

## Dependencies

### Frontend
```json
"react": "^18.3.0",
"vite": "^6.0.5",
"tailwindcss": "^3.4.17",
"axios": "^1.7.9",
"lucide-react": "^0.471.1",
"typescript": "^5.6.2"
```