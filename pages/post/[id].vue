<template>
    <div class="post">
        <h1>{{ post.title }}</h1>
        <div class="date">{{ formatDate(post.updated_at || "") }}</div>
        <div v-html="post.html"></div>
    </div>
</template>

<script setup lang="ts">
import { getSinglePost } from '~/data'

const post = await getSinglePost(useRoute().params.id as string)
</script>

<style lang="scss">
.post {
    img {
        max-width: 100%;
        height: auto;

        border: solid 1px #000;
    }

    .excerpt {
    }

    figure {
        margin: 0;
        text-align: center;

        figcaption {
            font-size: 0.8rem;
            color: #666;
        }
    }

    p {
        margin: 1.5rem 0;
    }
}
</style>
