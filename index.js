import { accounts } from './src/components/accounts/main'
import { blogs } from './src/components/blogs/main'
import { info } from './src/components/info/main'
import library from './src/lib/library'

const blogs8787api = {
    library,
    genAuth: async function() {
        const reqAuthCode = await fetch('https://api-shaman2016.vercel.app/blogs/genCode')
        const resAuthCode = await reqAuthCode.json()
        return resAuthCode.result
    },
    accounts,
    blogs,
    info,
    recomendations: async function() {
        const request = await (await fetch('https://api-shaman2016.vercel.app/blogs/recomendations')).json()
        return {
            list: request.list
        }
    }
}

export default blogs8787api
