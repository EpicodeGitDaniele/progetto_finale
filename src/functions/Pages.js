import Page from "../models/Page";

export const getPages = ( pageId = undefined  ) => {
    console.log(pageId);
    //
    //"http://localhost/bedrock/web/index.php/wp-json/wp/v2/pages"
    return fetch(`http://localhost/bedrock/web/index.php/wp-json/wp/v2/${pageId ? `pages?search=${pageId}` : 'pages'} `)
    .then(res => res.json())
    //.then(res => console.log(res));
    .then(res => res.map(pages => new Page(
        pages.id,
        pages.title,
        pages.content
    )))
}