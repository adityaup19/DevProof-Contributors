# Task: Toast Notifications Component

**Difficulty:** Easy  
**Points:** 100  
**Category:** UI Component

### 🎯 Goal
Create a simple toast notification system with:
- A button that triggers a toast
- Toast appears at the bottom-right
- Toast fades out automatically after 3 seconds
- Multiple toasts stack on top of each other
- Clean and minimal UI

### ✔ Requirements
- Build toast UI inside `ToastDemo.tsx`
- Support 3 types: success, error, info
- Use simple CSS animations (fade in/out)
- Responsive placement

### 🧪 How to Run This Task Locally

You can test this component using the built-in DevProof sandbox.

1. Open the repo on your device (VS Code recommended)
2. Install dependencies:
npm install

3. Start the sandbox:
npm run dev

4. Open this task's preview:
http://localhost:5173/tasks/toast-notifications

5. Edit the index.tsx file inside this folder

Import and render your toast demo component:

import ToastDemo from "./ToastDemo";

export default function TaskPreview() {
  return <ToastDemo />;
}


Your toast notifications will now render live in the browser as you build them.

This loads the test environment defined in `mock-app.tsx`.

### 📁 Files You Should Modify
- `ToastDemo.tsx`

### 🚫 Files You Should NOT Modify
- `mock-app.tsx` (used only for helper examples)

### 📝 Submission
Submit a PR with:
- Working toast display
- Auto-dismiss
- Types supported
- Clean UI

This is a great beginner UI component — have fun!
