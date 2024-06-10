<template>
    <div class="post">
        <h1>{{ post.title }}</h1>
        <div class="date headingfont">
            {{ formatDate(post.updated_at || '') }}
        </div>
        <div v-html="post.html"></div>
    </div>
</template>

<script setup lang="ts">
import { getSinglePost } from '~/data'

const post = await getSinglePost(useRoute().params.id as string)
</script>

<style lang="scss">
.post {
    margin-bottom: 4rem;
    img {
        max-width: 100%;
        height: auto;

        border: solid 1px #e2e2e2;
    }

    .date {
        color: gray;
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

    .kg-bookmark-card {
        border: solid 1px rgb(218, 217, 217);
        text-align: left;
        padding: 1rem;
        border-radius: 0.25rem;

        &:hover {
            outline: solid rgb(30, 88, 212);

            a {
                text-decoration: none;
            }
        }

        .kg-bookmark-container {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 1rem;

            @media (max-width: 768px) {
                grid-template-columns: 1fr;

                .kg-bookmark-thumbnail {
                    display: none !important;
                }
            }
        }

        .kg-bookmark-title {
            font-weight: bold;
        }

        .kg-bookmark-content {
            height: fit-content;
        }

        .kg-bookmark-thumbnail {
            height: 5rem;

            img {
                height: 5rem;
            }
        }

        .kg-bookmark-description {
            color: #666;

            // ellipsis on 2 lines
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .kg-bookmark-metadata {
            display: none !important;
        }
    }
}
</style>
