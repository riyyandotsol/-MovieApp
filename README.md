
=======
# -MovieApp
Modern React MovieApp


---

````markdown
# 🎬 MovieApp

MovieApp is a modern web application built with **React** and **Vite** that lets users search for movies using **The Movie Database (TMDb)** API and discover trending films based on what others are searching. It features real-time search, Appwrite integration, and a slick, responsive UI.

---

## 🚀 Features

- 🔍 **Search for Movies** via TMDb API with live results
- 🔥 **Trending Section** powered by Appwrite that ranks movies by how often they're searched
- 🧠 **Debounced Search Input** (prevents API spam)
- 🎨 **Responsive UI** styled with Tailwind CSS
- ⚡ **Loading Indicator** with a custom spinner
- 🛡️ **Environment-based API Key Handling**

---

## 🛠️ Tech Stack

- **React** — UI Library
- **Vite** — Fast build tool and dev server
- **Appwrite** — Backend-as-a-service (BaaS) for search stats
- **TMDb API** — Movie database
- **Tailwind CSS** — Utility-first CSS framework
- **React-use** — For debounce functionality

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/movieapp.git
cd movieapp
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root of your project and add:

```
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

> ⚠️ Be sure to keep `.env.local` in your `.gitignore`.

### 4. Start the development server

```bash
npm run dev
```

---

## 🧱 Project Structure

```
.
├── components/
│   ├── MovieCard.jsx       # Displays individual movie info
│   ├── Search.jsx          # Search bar component
│   └── Spinner.jsx         # Loader component
├── appwrite.js             # Appwrite integration
├── App.jsx                 # Main logic and layout
├── main.jsx                # Entry point
├── .env.local              # Environment secrets (ignored by Git)
└── .vscode/extensions.json # Recommended VS Code extensions
```

---

## 📈 How Trending Movies Work

Every time a user searches and selects a movie, it is logged in **Appwrite**. The "Trending Movies" section then displays films ranked by how frequently they've been searched across all users.

---

## 📸 Screenshot

![Screenshot of MovieApp](./Banner.svg)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Muhammad Riyyan**

---

```

Let me know if you'd like a `CONTRIBUTING.md` or sample deploy instructions (like for Netlify or Vercel)!
```

>>>>>>> 400b51ea589098e1e09310a943baced843ab81b9
