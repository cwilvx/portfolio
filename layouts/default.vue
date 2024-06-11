<template>
    <nav>
        <div class="content">
            <div class="left">
                <a
                    href="/"
                    class="nav-title"
                >
                    <img
                        src="https://github.com/cwilvx.png"
                        height="30"
                        width="30"
                        alt=""
                    />
                    <h2>Mungai Njoroge</h2></a
                >
            </div>
            <ul class="right">
                <!-- <li>
                    <RouterLink to="/">Archive</RouterLink>
                </li> -->
                <!-- <li>
                    <a href="https://github.com/cwilvx">Github</a>
                </li> -->
                <li>
                    <RouterLink to="/">About Me</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
    <main>
        <slot />
    </main>
    <footer>
        <hr />
        <p
            class="headingfont"
            style="text-align: center; font-size: 12px; color: gray"
        >
            &copy; 2021 Mungai Njoroge.
        </p>
    </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss">
main,
.content {
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 1rem;
}

nav {
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        list-style-type: none;
    }

    border-bottom: solid 1px #ebebeb;

    img {
        border-radius: 50%;
    }

    .nav-title {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    h2 {
        height: 17px;
    }

    .right {
        display: flex;
        gap: 1rem;
    }
}
</style>
