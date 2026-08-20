// Pulls recent articles from the DEV Community public API and lists
// them as clickable links. This is a general "javascript" tag feed used
// as a technology-feed demonstration (not personally authored articles).
document.addEventListener("DOMContentLoaded", () => {

    const listEl = document.getElementById("articles-list");

    if (!listEl) {
        return;
    }

    const apiUrl = "https://dev.to/api/articles?tag=javascript&top=7&per_page=5";

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then((articles) => {

            listEl.innerHTML = "";

            if (!articles || articles.length === 0) {
                listEl.innerHTML = "<li>No articles found right now.</li>";
                return;
            }

            articles.slice(0, 5).forEach((article) => {
                const listItem = document.createElement("li");

                listItem.innerHTML = `
                    <a href="${article.url}" target="_blank" rel="noopener">
                        ${article.title}
                    </a>
                    <span class="article-author"> — ${article.user.name}</span>
                `;

                listEl.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Failed to load articles:", error);
            listEl.innerHTML =
                "<li>Could not load articles right now. Please try again later.</li>";
        });
});
