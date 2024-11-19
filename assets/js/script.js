document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const dropdownList = document.getElementById('dropdown-list');

    const recipes = [
        { name: 'Strawberry Cream Cheesecake', link: 'recipe.html' },
        { name: 'Blackforest Cake', link: 'ingredients.html' },
        { name: 'Greek Ratatouille', link: 'ratatouille.html' },
        { name: 'Lasagna', link: 'lasagna.html' }
    ];

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        dropdownList.innerHTML = '';
        if (query) {
            const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
            filteredRecipes.forEach(recipe => {
                const a = document.createElement('a');
                a.href = recipe.link;
                a.textContent = recipe.name;
                dropdownList.appendChild(a);
            });
            dropdownList.style.display = 'block';
        } else {
            dropdownList.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !dropdownList.contains(event.target)) {
            dropdownList.style.display = 'none';
        }
    });
});
