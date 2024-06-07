<template>
    <div>
        <h1>All posts</h1>
        <div class="allposts">
            <div
                v-for="post in posts"
                :key="post.id"
                class="postitem"
            >
                <RouterLink :to="`/post/${post.id}`">{{
                    post.title
                }}</RouterLink>
                <div class="excerpt">{{ post.excerpt }}</div>
                <div class="date">{{ formatDate(post.updated_at || '') }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getPosts } from '~/data'

const posts = await getPosts()
</script>

<style lang="scss">
.postitem {
    margin: 2rem 0;
    // padding: 1rem;
    // border: solid 1px #0000007a;
    // border-radius: 0.5rem;

    .excerpt {
        margin: 0.85rem 0;
    }

    a {
        font-weight: 700;
    }

}

.date {
    font-size: 0.8rem;
    color: #666;
    margin: 0.5rem 0;
}
</style>
