const blogs = {
    'create': async function(name, auth) {},
    'join': async function(id, auth) {
        return {
            'setName': async function(name) {},
            'getName': async function() {},
            'setDescription': async function(value) {},
            'getDescription': async function() {},
            'getArticles': new Function(`
                return async function() {
                    let blogsMeta = await fetch('https://api-shaman2016.vercel.app/blogs/blogs')
                    blogsMeta = await blogs.json()
                    return blogsMeta[${id}].articles
                }
            `),
            'newArticle': async function(name) {}
        }
    }
}

export default blogs
