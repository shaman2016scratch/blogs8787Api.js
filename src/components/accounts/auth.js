const auth = {
    login: async function(scratch, id) {
        try {
            const request = await (await fetch('https://api-shaman2016.vercel.app/blogs/login', {
                method: 'POST',
                body: JSON.stringify({
                    scratch,
                    id
                })
            })).json()
            if (!request.ok) throw new Error({
                request
            })
            return request
        } catch (error) {
            return error.message
        }
    }
}

export default auth
