# Wrestling Landing Page

## Overview
This project is a landing page for a wrestling website. It showcases the latest news, events, and features related to wrestling.

## Project Structure
```
wrestling-landing-page
├── src
│   ├── index.html        # Main HTML document for the landing page
│   ├── styles
│   │   └── main.css      # CSS styles for the landing page
│   └── scripts
│       └── main.js       # JavaScript code for interactivity
├── package.json          # npm configuration file
├── .gitignore            # Files and directories to ignore by Git
└── README.md             # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd wrestling-landing-page
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Features
- Responsive design for various devices
- Interactive search and filtering of superstars by name and group
- Clickable superstar cards to navigate to `superstar.html?id=<starId>` for details
- Custom styles for a unique look and feel

## Usage
To start the project, open `src/index.html` in your web browser. For development, use a local server (for example `npx serve` or `python -m http.server`) to view changes in real-time and preserve dynamic URL behavior for detail pages.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.