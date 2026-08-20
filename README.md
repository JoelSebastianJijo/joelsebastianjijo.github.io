# Joel Sebastian Jijo - Personal Portfolio

## About

This is my personal portfolio website, developed in progressive phases.
Phase 1 (HTML5 & CSS3) has been extended in Phase 2 with JavaScript,
DOM manipulation, jQuery and external API integration.

The website presents my academic background, technical expertise, projects, activities and contact information.

## Website Structure

- Home
- Profile
- CV
- Education & Technical Expertise
- Projects
- Activities/Gallery
- Contact

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- jQuery
- Flexbox
- CSS Grid
- Responsive Media Queries
- Git
- GitHub
- GitHub Pages

## HTML5 Features

The website demonstrates:

- Semantic HTML elements
- Headings and paragraphs
- Navigation links
- Images
- Lists
- Tables
- Contact forms
- Radio buttons
- Checkboxes
- Textarea
- HTML5 iframe (embedded map)
- Responsive design

## CSS Features

The external stylesheet demonstrates:

- CSS selectors
- Box model
- Typography
- Spacing
- Borders
- Flexbox
- CSS Grid
- Media queries
- Responsive layouts

## Phase 2 — JavaScript Features

All JavaScript is written in external files under `js/`:

- **`js/greeting.js`** — shows a time-based greeting (Good Morning /
  Afternoon / Evening) on the homepage using `Date()` and DOM updates.
- **`js/validate.js`** — validates the Contact form's Name, Email and
  Message fields on submit, using `addEventListener("submit", ...)`,
  DOM queries and a regex email check. Errors are shown/cleared with
  `.textContent` next to each field.
- **`js/gallery.js`** — an interactive jQuery-powered gallery on the
  Activities/Gallery page. Clicking a thumbnail updates a main display
  area (image, title, description) using jQuery selectors and
  `.on("click", ...)`, without reloading the page.
- **`js/articles.js`** — uses `fetch()` to call the public
  [DEV Community API](https://developers.forem.com/api) and lists
  5 recent articles as clickable links on the homepage. Since I don't
  currently publish my own articles, this pulls a general JavaScript-tag
  feed as a technology-feed demonstration, per the assignment's
  allowance for this case.
- **`js/weather.js`** — a Live Weather widget on the homepage using the
  OpenWeatherMap Current Weather API. The visitor enters their own API
  key and a city, then clicks "Get Weather" (or presses Enter) to see
  the city name, temperature in °C, description and icon, updated
  dynamically via `fetch()` without a page reload. Invalid city names,
  invalid keys, and network/API errors are caught and shown to the user
  instead of failing silently.

### API Key Handling

The weather widget does **not** contain an API key in the source code.
Instead, the visitor enters their own OpenWeatherMap API key directly
into an input field on the page. This keeps any API key out of the
public GitHub repository entirely. For convenience, the key is saved in
the browser's `localStorage` so a returning visitor doesn't have to
retype it — it is never written to a file or sent anywhere except
directly to OpenWeatherMap's API.

To try the widget yourself, get a free key from
https://openweathermap.org/api and paste it into the "OpenWeatherMap API
key" field on the homepage (note: new keys can take up to an hour to
activate after signup).

## Running the Project Locally

1. Clone the repository:
   `git clone https://github.com/JoelSebastianJijo/<repo-name>.git`
2. Open the project folder.
3. Open `index.html` directly in a web browser, or serve it locally
   (for example, using the VS Code "Live Server" extension) and
   navigate to `index.html`.
4. To use the Live Weather widget, enter your own free OpenWeatherMap
   API key directly into the input field on the homepage (see above).
5. No build steps are required — this is a static HTML/CSS/JS site.
   jQuery is loaded via CDN.

## Deployment

The website is deployed using GitHub Pages.

Live website:

https://joelsebastianjijo.github.io/