<p align="center">
  <h1>SmartHire: An AI interview platform powered by Vapi AI Voice agents
  </h1>
  
</p>

<h2>📋 Table of Contents</h2>

🤖 Introduction

⚙️ Tech Stack

🔋 Features

🤸 Quick Start

🕸️ Snippets

🔗 Assets

🚀 More

<h2>🤖 Introduction</h2> <p> Built with <strong>Next.js</strong> for UI and backend logic, <strong>Firebase</strong> for authentication and database, styled with <strong>Tailwind CSS</strong>, and powered by <strong>Vapi AI voice agents</strong>, <strong>Prepwise</strong> is a modern AI-based interview preparation platform. It provides an immersive, voice-driven job interview experience to help users practice and receive feedback in real time. </p> <p> Join our community of 50k+ developers on Discord to ask questions, share ideas, and get support. </p>  <h2>⚙️ Tech Stack</h2> <ul> <li>⚛️ Next.js</li> <li>🔥 Firebase</li> <li>🎨 Tailwind CSS</li> <li>🎤 Vapi AI</li> <li>🧱 shadcn/ui</li> <li>🧠 Google Gemini</li> <li>🛡️ Zod</li> </ul>  <h2>🔋 Features</h2> <ul> <li>✅ Authentication via Firebase (email/password)</li> <li>🧠 AI-driven Interview Creation with Vapi & Gemini</li> <li>📢 Voice Interview Experience with Real-Time Feedback</li> <li>📄 Transcripts & AI Evaluation</li> <li>📊 Dashboard to manage all interviews</li> <li>🧑‍💼 Modern, responsive UI using shadcn and Tailwind</li> <li>💡 Clean architecture and reusable components</li> </ul>  <h2>🤸 Quick Start</h2> <h3>📦 Prerequisites</h3> <ul> <li>Git</li> <li>Node.js</li> <li>npm</li> </ul>  <h3>📦 Install Dependencies</h3> <pre><code>npm install</code></pre> <h3>🔐 Environment Setup</h3>
Create a file named <code>.env.local</code> in the root directory with the following:

<pre><code> NEXT_PUBLIC_VAPI_WEB_TOKEN= NEXT_PUBLIC_VAPI_WORKFLOW_ID= GOOGLE_GENERATIVE_AI_API_KEY= NEXT_PUBLIC_BASE_URL= NEXT_PUBLIC_FIREBASE_API_KEY= NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= NEXT_PUBLIC_FIREBASE_PROJECT_ID= NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID= NEXT_PUBLIC_FIREBASE_APP_ID= FIREBASE_PROJECT_ID= FIREBASE_CLIENT_EMAIL= FIREBASE_PRIVATE_KEY= </code></pre>
Replace the above placeholders with your actual credentials.

<h3>🚀 Start the Dev Server</h3> <pre><code>npm run dev</code></pre>
Visit http://localhost:3000 to view the application.

 <h2>🕸️ Snippets (Code to Copy)</h2> <ul> <li><code>globals.css</code></li> <li><code>lib/utils.ts</code></li> <li><code>/app/api/vapi/generate/route.tsx</code>: Generate questions prompt</li> <li><code>lib/actions/general.action.ts</code>: Generate feedback prompt</li> <li><code>app/(root)/interview/[id]/feedback/page.tsx</code>: Display feedback</li> </ul> <hr/>
