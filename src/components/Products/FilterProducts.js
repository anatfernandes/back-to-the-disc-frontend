
function FilterProducts ({ products, search }) {
    const productsFiltered = products.filter(({ name, status, musics, tags }) => {
        const lowerSearch = search.toLowerCase();

        const musicsFiltered = musics.filter(music => music.toLowerCase().includes(lowerSearch));
        const tagsFiltered = tags.filter(tag => tag.toLowerCase().includes(lowerSearch));

        return (
            name.toLowerCase().includes(lowerSearch) ||
            status.toLowerCase().includes(lowerSearch) ||
            musicsFiltered.length > 0 ||
            tagsFiltered.length > 0
        );
    });

    return productsFiltered;
}

export default FilterProducts;