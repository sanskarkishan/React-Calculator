# Calculator (React + Vite)

A clean, modern calculator built with React and Vite, featuring a glassmorphism UI and smooth interactions.

## Features

- Modern gradient background with a glass card
- Clear, responsive layout using a grid
- Smooth hover/active button states
- Keyboard-safe display (read-only input)

## Tech Stack

- React (Vite)
- Tailwind CSS (via `@import "tailwindcss"` in `src/App.css`)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

- `dev`: Start local dev server
- `build`: Production build
- `preview`: Preview the production build

## Project Structure

```
src/
  components/
    CalculatorBtn.jsx     # Button component with hover/active styles
  pages/
    Home.jsx              # Calculator UI and logic
  App.jsx                 # App entry
  App.css                 # Tailwind import
```

## Usage

- Click number and operator buttons to compose an expression.
- Use `Clear` to reset the display.
- Press `=` to evaluate the expression.

Note: Expressions are evaluated directly; avoid entering unsafe code. In production, consider a safe math parser.

## Customization

- Colors and styles are controlled with Tailwind utility classes in `Home.jsx` and `CalculatorBtn.jsx`.
- To switch accent colors, adjust classes like `bg-emerald-500`, `bg-rose-500`, and the page gradient in `Home.jsx`.

## Acknowledgements

Made by Sanskar Kishan ❤️
