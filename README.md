# Tech Tutorials and Product Reviews Website

This is a single-page application built with React and Tailwind CSS, served from a single `index.html` file. It uses `HashRouter` for client-side routing, making it compatible with static hosting platforms like GitHub Pages.

## How to Run Locally

1.  **Prerequisites**: You need a modern web browser and a local web server. The [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for Visual Studio Code is a great option.

2.  **Steps**:
    *   Clone or download this repository.
    *   If you're using Visual Studio Code with the Live Server extension, right-click on the `index.html` file and select "Open with Live Server".
    *   Otherwise, start your local web server and point it to the root directory of this project.
    *   Open your web browser and navigate to the local URL provided by your server (e.g., `http://127.0.0.1:5500`).

## How to Deploy to GitHub Pages

1.  **Create a new repository** on GitHub.
2.  **Push the code** to your new repository.
3.  **Enable GitHub Pages** in your repository's settings:
    *   Go to the "Pages" tab in your repository's settings.
    *   Under "Build and deployment", select "Deploy from a branch" as the source.
    *   Choose the `main` (or `master`) branch and the `/ (root)` folder, then click "Save".
4.  **Update `sitemap.xml`**:
    *   Open `sitemap.xml` and replace `https://your-username.github.io/your-repo-name/` with your actual GitHub Pages URL.
5.  **Access your site**: Your website will be available at `https://your-username.github.io/your-repo-name/`. It might take a few minutes for the site to become live.
