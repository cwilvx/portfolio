<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
$headingfont: 'Helvetica Neue', 'Segoe UI', Helvetica, Arial, sans-serif;
$textfont: 'Libre Baskerville', 'Times New Roman', Times, serif;

@font-face {
    font-family: 'Libre Baskerville';
    src: url('/libre-baskerville-v7-latin-regular.woff2') format('woff2');
}

.headingfont {
    font-family: $headingfont;
}

html {
    font-family: $textfont;
    font-size: 16px;
    padding: 0;
    line-height: 1.5;
}

body {
    margin: 0;
    color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: $headingfont;
    line-height: 1;
}

.kg-card {
    font-family: $headingfont;

    a {
        color: #333 !important;
    }
}

a {
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
    }
}

nav a {
    font-family: $headingfont;
}

a,
.nav-title {
    color: #107ac6;
}

hr {
    border: none;
    border-top: 1px solid #ebebeb;
}

.date {
    // font-size: 0.8rem;
    color: #949494;
    margin: 0.5rem 0;
}
</style>
