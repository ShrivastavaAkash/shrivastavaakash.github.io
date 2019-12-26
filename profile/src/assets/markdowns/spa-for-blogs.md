<font size="5">Ignorance</font> was a bliss for me with my Github-pages blog until I hit this snag **"PRE-RENDRING / SERVER SIDE RENDERING"**. I completely overlooked this part, and now again I face the same question that was making me skeptical about starting a blog at the first place. Where do I host it?

#### What's wrong with Github-pages?

Well, anyone who writes a blog would probably want to share them everywhere they can &#128515;.

Usually when you share a web page, there's some meta information in `<head>` section of that page that dictates how the little preview card is going to look when you share that page. But in case of these static sigle page applications (SPA), where everything is being rendered on client you don't have the option to change this meta information without executing the JavaScript. Each time you request a route the same `html` is returned (being `index.html`) and then it's transformed with scripts on client's browser.
Now, that's where the problem is, most crawlers that fetch this meta info rely only on what's in that HTML page and do not execute JavaScript.

So, everytime you share a blog post it always shows up the same preview card.

Now, you could avoid this if you have the option to use **Server-side rendering** for your SPA, which is basically having a server do all the hardowrk that client does (i.e. executing all the scripts) and return the final pre-rendered content to HTTP requests. This is usually done with a node setup and any library that supports this functionality out of the box e.g. [**Nuxt.js**](https://nuxtjs.org/) for Vue, [**Next.js**](https://nextjs.org/) for React, or for Angular apps [**Angular Universal**](https://angular.io/guide/universal) would be the popular option.

Apart from setting up your own app to do the server side rendering, some hosting providers (e.g. [Netlify](https://www.netlify.com/)) also give you the option to use their pre-rendering services where you don't have to do any changes to your SPA, but the server itself executes scripts and caches all possible routes for you app and then whenever a requests comes the chached results are served.

However, neither of these are possible for any SPA application you host on Github, as github doesn't provide pre-rendering with their servers and you cannot host any back end service (like Angular universal) to enable server side rendering on static sites. 

#### What's the alternate then?
Well, the best option would be to buy web hosting so you have the option to host back end services (e.g. Angular universal) that'll enable server side rendering for your SPA. But, if you want to set it all up for free like me, you might want to **either** change the technology you're using for your blog as Github pages recommends use of Jekyll for blogging purposes and there are some alternative newer technologies for it as well, **or** you might want to leave gh-pages and look for an alternative host altogether. There are plenty of hosts that'll provide free server-side rendering (I've only explored Netlify so far). So the choice is yours, as for me I like the `github.io` domain name so I'll stick around with it for a bit more. And for the preview cards, I'll probably mask the links with some JPEGs that'll look like the preview cards &#128540;.