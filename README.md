# Amazing Navigation

A modern animated bottom navigation bar built with HTML, CSS, and JavaScript.

## Features

- Animated active indicator
- Icon-based navigation items (Ionicons)
- Smooth transitions on active state
- Minimal and clean layout

## Project Structure

- `index.html` - Markup for the navigation component
- `style.css` - Styling, layout, and animations
- `script.js` - Active item interaction logic

## How to Run

1. Open the project folder.
2. Open `index.html` in your browser.

No build tools or package installation are required.

## How It Works

- Each navigation item uses the class `.list`.
- On click, JavaScript removes `.active` from all items and applies it to the clicked one.
- CSS sibling selectors move the `.indicator` based on which item is active.

## Customization

- Change background theme color in `:root`:
  - `--clr`
- Change active accent color:
  - `#29fd` (icon glow/active state)
- Replace icons by changing Ionicon names in `index.html`.

## Dependencies

- [Ionicons](https://ionic.io/ionicons) (loaded via CDN)
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)

## Notes

- This is a static front-end component project.
- You can integrate this navigation bar into larger layouts or single-page apps.
