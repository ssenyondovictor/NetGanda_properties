const content = document.getElementById('content');

const routes = {
    '/': '<h2>Home Page</h2><p>Welcome to our tech website!</p>',
    '/tutorials': '<h2>Tutorials</h2><div class="grid" id="tutorials-grid"></div>',
    '/reviews': '<h2>Reviews</h2><div class="grid" id="reviews-grid"></div>',
    '/comparisons': '<h2>Comparisons</h2><div class="grid" id="comparisons-grid"></div>',
};

const articles = {
    tutorials: [
        { id: 1, title: "How to Set Up a VPN", content: "Detailed guide on setting up a VPN..." },
        { id: 2, title: "Fix a Slow PC", content: "Tips and tricks to improve your PC's performance..." },
    ],
    reviews: [
        { id: 1, title: "Best Laptops 2025", content: "An in-depth review of the top laptops of 2025..." },
        { id: 2, title: "iPhone 16 Review", content: "A comprehensive look at the new iPhone 16..." },
    ],
    comparisons: [
        { id: 1, title: "iPhone 16 vs Galaxy S25", content: "A side-by-side comparison..." },
    ],
};

function createArticleCard(article, category) {
    return `
        <div class="card">
            <img src="https://source.unsplash.com/featured/?${category},tech,${article.id}" alt="${article.title}">
            <div class="card-content">
                <h3>${article.title}</h3>
                <a href="#/article/${category}/${article.id}">Read More</a>
            </div>
        </div>
    `;
}

function router() {
    const path = window.location.hash.slice(1) || '/';
    const [page, category, id] = path.split('/').slice(1);

    if (page === 'article' && category && id) {
        const article = articles[category]?.find(a => a.id == id);
        if (article) {
            content.innerHTML = `
                <h2>${article.title}</h2>
                <img src="https://source.unsplash.com/featured/?${category},tech,${id}" alt="${article.title}" style="width:100%; height:auto; max-height:400px; object-fit:cover;">
                <p>${article.content}</p>
            `;
        } else {
            content.innerHTML = '<h2>Article not found</h2>';
        }
    } else {
        const route = `/${page || ''}`;
        content.innerHTML = routes[route] || '<h2>Page not found</h2>';
        if (page === 'tutorials') {
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
