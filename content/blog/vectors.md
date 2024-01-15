---
title: I'm learning about vectors now?
date: 12th January, 2024
_draft: false
---

I can't say I've ever been that interested in the whole rise of AI and the whole tech behind it so far (I've used ChatGPT though). With that said, I'm probably one of the most clueless people when it comes to how AI works.

Today, as I was browsing Hacker News, I came across a blog post on the Netflix tech blog talking about how Netflix paid $1 million for a [recommendation algorithm they didn't use](https://netflixtechblog.com/netflix-recommendations-beyond-the-5-stars-part-1-55838468f429). Despite my lack of interest in AI, I have a key interest in recommendation algorithms. The post reminded me of the Spotify engineering blog, so I decided to check what new stuff they have added. It's been about a year since I last read anything on their blog.

You're probably wondering why I'm interested in recommendation algorithms. Here's why: 2 years ago, I started working on a music player called [Swing Music](https://github.com/swing-opensource/swingmusic) that should allow me play my local music and get personalized mixes and recommendations based on my listening activity. Kind of what you get on Spotify, but with my local files. I've been [building the foundation](https://github.com/swing-opensource/swingmusic) for the last 2 years, and it's almost time I figured out how to implement the whole recommendation thing on Swing Music.

On Spotify engineering, I came across a post that talks about [Voyager](https://spotify.github.io/voyager/), which is the nearest neighbor search [library powering Spotify recommendations](https://engineering.atspotify.com/2023/10/introducing-voyager-spotifys-new-nearest-neighbor-search-library/). I tried reading it and I got through all of it, but I really didn't understand jack! The only insight I got was that there exists something called vector search and it's fast and somehow it powers their machine learning algorithm.

I've been running from ML for as long as I can remember, but it looks like I'll be running to ML. I went halfway through the 5 minute demo video on the Voyager website and the gist of it looks something like this:

- You load vectors (whatever those are)
- Then create an index
- Finally, you query

Words like "embeddings" were also coming up here and there, so I got of reading to do. From how I understood vector search from the "explain to me like i'm 5" Copilot prompt, vectors are used to represent properties of an item in numbers. Vectors search is used to for similar items efficiently. I'll do proper research on vectors, vector search and vector databases to understand what recommendations are all about.

I always knew that ML is used in recommendation, I have read enough "The Internet is not what it used to be" posts on Hacker News to have a clue; but I never saw myself ever coming into contact with it. I had a rough idea how the whole recommendation would work without ML, just normal database queries layered together with Github Actions, Cron Jobs and other things, like an orchestra. LOL!

Right now, the orchestra sounds a little bit impractical. I'll have to rethink it.

![Vectors Vs My Orchesra](/blog/vectors.webp)

Looks like I have a lot to learn!
