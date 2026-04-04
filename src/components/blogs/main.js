const blogs = {
    'create': async function(name, auth) {},
    'join': async function(id, auth) {
        return {
            'setName': async function(name) {},
            'getName': async function() {},
            'setDescription': async function(value) {},
            'getDescription': async function() {},
            'getArticles': async function() {},
            'newArticle': async function(name) {}
        }
    }
}

export default blogs
