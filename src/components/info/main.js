const info = {
  getUserDescription: async function(user) {
    try {
      const data = await (await fetch('https://api-shaman2016.vercel.app/blogs/users')).json()
      return data[user].desctription
    } catch (error) {
      return `ERROR: ${error}`
    }
  },
  getBlogDescription: async function(blog) {
    try {
      const data = await (await fetch('https://api-shaman2016.vercel.app/blogs/blogs')).json()
      return data[blog].desctription
    } catch (error) {
      return `ERROR: ${error}`
    }
  },
  getListBlogsByUser: async function(user) {},
  getName: {
    user: async function(user) {
      try {
        const data = await (await fetch('https://api-shaman2016.vercel.app/blogs/users')).json()
        return data[user].desctription
      } catch (error) {
        return `ERROR: ${error}`
      }
    },
    blog: async function(blog) {
      try {
        const data = await (await fetch('https://api-shaman2016.vercel.app/blogs/blogs')).json()
        return data[blog].desctription
      } catch (error) {
        return `ERROR: ${error}`
      }
    }
  }
}

export { info }
