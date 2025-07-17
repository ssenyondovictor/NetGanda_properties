const content = document.getElementById('content');

const routes = {
    '/': `
        <div class="hero">
            <h1>Your Go-To Source for Tech Tutorials & Reviews</h1>
            <p>Unbiased, in-depth, and up-to-date.</p>
            <a href="#/reviews" class="cta-button">Explore Now</a>
        </div>
        <h2>Featured Articles</h2>
        <div class="grid" id="featured-grid"></div>
        <div class="ad-placeholder">[Ad Placeholder - In-content]</div>
    `,
    '/tutorials': '<h2>Tutorials</h2><div class="ad-placeholder">[Ad Placeholder - Top Banner]</div><div class="grid" id="tutorials-grid"></div>',
    '/reviews': '<h2>Reviews</h2><div class="grid" id="reviews-grid"></div>',
    '/comparisons': '<h2>Comparisons</h2><div class="grid" id="comparisons-grid"></div>',
    '/about': `
        <h2>About Us</h2>
        <p>Welcome to TechSite, your number one source for all things tech. We're dedicated to giving you the very best of tutorials, reviews, and comparisons, with a focus on dependability, customer service and uniqueness.</p>
    `,
    '/contact': `
        <h2>Contact Us</h2>
        <p>If you have any questions or comments, please don't hesitate to contact us.</p>
        <form>
            <input type="text" placeholder="Name" required><br><br>
            <input type="email" placeholder="Email" required><br><br>
            <textarea placeholder="Message" required></textarea><br><br>
            <button type="submit">Submit</button>
        </form>
    `,
    '/privacy': `
        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us. It is TechSite's policy to respect your privacy regarding any information we may collect from you across our website.</p>
    `,
};

const articles = {
    tutorials: [
        { id: 1, title: "How to Set Up a VPN", content: "A comprehensive guide on how to set up a Virtual Private Network (VPN) to protect your online privacy and security. We cover the basics of what a VPN is, why you need one, and step-by-step instructions for various devices." },
        { id: 2, title: "Fix a Slow PC", content: "Is your computer running slow? This tutorial provides a list of effective methods to boost your PC's performance. From cleaning up junk files to upgrading your hardware, we've got you covered." },
        { id: 3, title: "Getting Started with Python", content: "A beginner-friendly introduction to the Python programming language. This tutorial covers the fundamental concepts, including variables, data types, and functions, to help you start your coding journey." },
    ],
    reviews: [
        { id: 1, title: "Best Laptops 2025", content: "We've tested and reviewed the top laptops of 2025 to help you find the perfect device for your needs. Our in-depth analysis covers performance, design, battery life, and value for money." },
        { id: 2, title: "iPhone 16 Review", content: "The iPhone 16 is here, and we've put it through its paces. Find out everything you need to know about its new features, camera improvements, and overall performance in our comprehensive review." },
        { id: 3, title: "Samsung Galaxy Tab S9 Review", content: "The Samsung Galaxy Tab S9 is a powerful and versatile tablet. In this review, we take a closer look at its stunning display, S Pen functionality, and productivity features." },
    ],
    comparisons: [
        { id: 1, title: "iPhone 16 vs Galaxy S25", content: "The ultimate showdown between two of the most popular smartphones on the market. We compare the iPhone 16 and Samsung Galaxy S25 in terms of design, camera, performance, and features to help you decide which one is right for you." },
        { id: 2, title: "MacBook Air vs Dell XPS 13", content: "Choosing between the MacBook Air and Dell XPS 13 can be a tough decision. In this comparison, we break down the key differences in performance, design, and usability to make your choice easier." },
        { id: 3, title: "Sony WH-1000XM5 vs Bose QuietComfort Ultra", content: "In the world of noise-cancelling headphones, Sony and Bose are top contenders. We compare the WH-1000XM5 and QuietComfort Ultra to see which pair offers the best sound quality, comfort, and noise cancellation." },
    ],
};

function createArticleCard(article, category) {
    return `
        <div class="card">
            <img src="images/${category}-${article.id}.jpg" alt="${article.title}">
            <div class="card-content">
                <h3>${article.title}</h3>
                <a href="#/article/${category}/${article.id}">Read More</a>
            </div>
        </div>
    `;
}

function router() {
    const path = window.location.hash.slice(1) || '/';
    let [page, category, id] = path.split('/').slice(1);
    page = page || '/';


    if (page === 'article' && category && id) {
        const article = articles[category]?.find(a => a.id == id);
        if (article) {
            content.innerHTML = `
                <h2>${article.title}</h2>
                <img src="images/${category}-${id}.jpg" alt="${article.title}" style="width:100%; height:auto; max-height:400px; object-fit:cover;">
                <p>${article.content}</p>
            `;
        } else {
            content.innerHTML = '<h2>Article not found</h2>';
        }
    } else {
        const route = page === '/' ? '/' : `/${page}`;
        content.innerHTML = routes[route] || '<h2>Page not found</h2>';

        if (page === '/') {
            const featuredGrid = document.getElementById('featured-grid');
            const featuredArticles = [articles.reviews[0], articles.tutorials[0], articles.comparisons[0]];
            featuredGrid.innerHTML = featuredArticles.map(article => {
                const category = Object.keys(articles).find(key => articles[key].includes(article));
                return createArticleCard(article, category);
            }).join('');
        } else if (page === 'tutorials') {
            const grid = document.getElementById('tutorials-grid');
            grid.innerHTML = articles.tutorials.map(article => createArticleCard(article, 'tutorials')).join('');
        } else if (page === 'reviews') {
            const grid = document.getElementById('reviews-grid');
            grid.innerHTML = articles.reviews.map(article => createArticleCard(article, 'reviews')).join('');
        } else if (page === 'comparisons') {
            const grid = document.getElementById('comparisons-grid');
            grid.innerHTML = articles.comparisons.map(article => createArticleCard(article, 'comparisons')).join('');
        }
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
