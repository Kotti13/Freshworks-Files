// Example data to search through
const data = [
    { title: "JavaScript Basics", description: "Learn the basics of JavaScript." },
    { title: "HTML Introduction", description: "An introduction to HTML." },
    { title: "CSS Styling", description: "How to style your web pages with CSS." },
    { title: "Advanced JavaScript", description: "Dive deeper into JavaScript concepts." },
    // Add more items as needed
];

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = data.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );
    
    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'result-item';
        resultElement.innerHTML = `<strong>${result.title}</strong><p>${result.description}</p>`;
        resultsContainer.appendChild(resultElement);
    });
}
