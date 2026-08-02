# Color Clock

A dynamic digital clock widget built with React and Vite, using the `date-fns` library to format the current date and time. The clock updates automatically every second.

## Features

- Displays the current time (`h:mm a`) and full date (`EEEE - MMMM do, yyyy`)
- Updates live every second using React state and effects
- Styled clock card with custom colors, fonts, and layout

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool and dev server
- [date-fns](https://date-fns.org/) — date formatting

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes bundled with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd color-clock
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal (typically `http://localhost:5173/`) in your browser to view the clock.

## Project Structure

- `src/App.jsx` — main component that renders the clock and manages the live-updating time state
- `src/App.css` — styling for the clock card
- `package.json` — project dependencies and scripts

## Notes

This project was built as part of a Software Engineering lab exercise focused on React, JSX, and npm package management.