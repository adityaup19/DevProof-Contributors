# Task: Implement Dark Mode Toggle

**Difficulty:** Easy  
**Points:** 100  
**Category:** UI / Frontend Feature  

### 🎯 Goal
Build a Dark Mode toggle component that switches the application between light and dark themes and remembers the user's preference using localStorage.

### ✔ Requirements
- Update `DarkModeToggle.tsx` to create a functional theme toggle button.
- Use the `useTheme()` hook from `mock-theme-context.tsx`.
- Style the button (Tailwind or plain CSS—your choice).
- Store preference using `localStorage`.
- UI should update instantly when toggled.

### 🧪 How to Test Locally
1. Open the repo on your device (VS Code recommended)
2. Install dependencies:
npm install

3. Start the sandbox:
bash

npm run dev
4. Open this task's preview:
http://localhost:5173/tasks/implement-dark-mode

5. Edit the index.tsx file inside this folder

Import your component and render it:
import DarkModeToggle from "./DarkModeToggle";

export default function TaskPreview() {
  return <DarkModeToggle />;
}

### 📁 Files You Should Modify
- `DarkModeToggle.tsx`

### 🚫 Files You SHOULD NOT Modify
- `mock-theme-context.tsx`
- `mock-app.tsx`

### 📝 Submission
Submit a Pull Request with:
- Your completed toggle button UI
- Working on/off
- Clean and readable code
-Local Storage Persistance

Good luck and happy building 🚀

