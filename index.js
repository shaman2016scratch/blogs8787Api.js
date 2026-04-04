import { accounts } from './src/components/accounts/main'
import { blogs } from './src/components/blogs/main'
import { info } from './src/components/info/main'

const blogs8787api = {
    genAuth: async function() {
        const reqAuthCode = await fetch('https://api-shaman2016.vercel.app/blogs/genCode')
        const resAuthCode = await reqAuthCode.json()
        return resAuthCode.result
    },
    accounts,
    blogs,
    info
}
