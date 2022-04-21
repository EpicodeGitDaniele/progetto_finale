import Category from '../models/Category';

export const getCategory = () => { 
    return fetch(`http://localhost/bedrock/web/index.php/wp-json/wp/v2/categories?_fields=id,name`)
    .then(res => res.json())
    .then(categories => categories.map(category => new Category(
        category.id,
        category.name,
    )))
}