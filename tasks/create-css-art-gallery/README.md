**Task: Create a CSS Art Gallery**

**Difficulty: Medium
Points: 150
Category: Experimental Project / Visual Creativity**

🎯 Goal

Build a visually engaging gallery that displays CSS-only artwork submitted by contributors.
Each artwork will appear as an interactive card in a responsive grid layout.

✔ Requirements

-Build a grid-based gallery page (ArtGallery.tsx)

-Each card must show:
-Title
-Creator name
-CSS-only preview (from mock-art-data.ts)
-Add hover effects (scale, glow, rotate, etc.)
-Include transitions or animations
-Must be responsive (desktop + mobile)
-Use data from mock-art-data.ts
-No images or canvas allowed — CSS only

🧪 How to Test This Task

This repo provides a sandbox preview environment.

1. Start the sandbox
npm install
npm run dev

2. Preview this task

Open in your browser:

http://localhost:5173/tasks/create-css-art-gallery

3. Set up the preview

Edit the index.tsx file inside this folder:

import ArtGallery from "./ArtGallery";

export default function TaskPreview() {
  return <ArtGallery />;
}

The sandbox will render your gallery component.

📁 Files to Modify
- ArtGallery.tsx

🚫 Files NOT to Modify

- mock-art-data.ts

(optional) any provided mock helpers

📝 Submission

Submit a PR including:

-Completed gallery component
-Responsive layout
-CSS-only art previews
-Hover & animation effects
-Clean and readable code

Have fun and be creative!
