import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
    url: 'https://demo.ghost.io',
    key: '22444f78447824223cefc48062',
    version: 'v3',
})

export async function getPosts() {
    api.posts.read({ id: '5f5d2c6b5f3f3d001f2e3b3b' })
    return await api.posts.browse({ limit: 'all' })
}

export async function getSinglePost(postId: string) {
    return await api.posts.read({ id: postId })
}
