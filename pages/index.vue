<template>
    <div>
        <div class="about">
            <p>Hi there 👋</p>

            <p></p>
        </div>
        <h1>All posts</h1>
        <div class="allposts">
            <div
                v-for="post in posts"
                :key="post.id"
                class="postitem"
            >
                <div class="title">
                    <RouterLink :to="`/post/${post.id}`"
                        ><h2>
                            {{ post.title }}
                        </h2>

                        {{
                    }}</RouterLink>
                    <div class="date headingfont">
                        {{ formatDate(post.updated_at || '') }}
                    </div>
                </div>
                <div class="excerpt">{{ post.excerpt }}</div>
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
    .excerpt {
        margin: 0.85rem 0;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        .date {
            width: 9rem;
            text-align: right;
        }

        h2 {
            margin: 0;
        }
    }
}
</style>
