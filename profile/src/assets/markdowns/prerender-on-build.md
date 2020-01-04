If you read my [last blog post](https://shrivastavaakash.github.io/blog/spa-for-blogs/), then you know that I've been having trouble managing the SEO aspect of this blog. Not having a back-end on Github-Pages did demotivate me for a while, but finally I came along with a solution that required least efforts and works perfectly.

### Inspiration

So, before I start with the details on how I overcame the SEO problem, I would like to mention that there are some projects that did something similar and ultimately inspired me for the approach I ended up using, one such project is [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin), however, in my opinion most of these projects took an approach that was much more complex to implement. What these projects did was to integrate pre-rendering engines like [Puppeteer](https://github.com/puppeteer/puppeteer) and rendred all possible routes of their static website with it and then hosted these pre-rendered pages on the web host instead of the actual single-page application. 

This approach works great with SEO and reduces load times as well for you website, however you lose that fluid experience of single-page apps that I personally admire. The pre-rendered pages lose the no-refresh navigation among different pages on your sites and you lose the route-navigation animations that work so well on SPA.

Another inspiration I got from a project on github [rafrex/spa-github-pages](https://github.com/rafrex/spa-github-pages) and took it to a level further. So since SPA URLs (if not hashed) give you a `404: Page not found` erorr on Github, _rafrex_ added a `404.html` page that converts the URL that user gave and converts that URL into a local SPA friendly URL and then redirects the user there. This approach takes care of having a SPA project that does not hash there URLs and still serve all the routes just fine, however it doesn't do much for the SEO.

But, I did like the redirection logic that _rafrex_ wrote, and combined that logic with the inspiration I got from [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin). 

### Overcoming SEO problem

From the very beginning, I keep all the metadata for my blog posts in a [shared Map object](https://github.com/ShrivastavaAkash/shrivastavaakash.github.io/blob/master/profile/src/app/data/blog-meta.ts), and later I combined them with their respective markdown files to render the Blog component. Having all the meta data at one place in a shared file helped me a lot to implement my solution. I started with a simple [node script](https://github.com/ShrivastavaAkash/shrivastavaakash.github.io/blob/master/profile/src/util/helmet-maker.js) that runs post-build for this angular based blog. What that [node script](https://github.com/ShrivastavaAkash/shrivastavaakash.github.io/blob/master/profile/src/util/helmet-maker.js) does is read the [metadata file](https://github.com/ShrivastavaAkash/shrivastavaakash.github.io/blob/master/profile/src/app/data/blog-meta.ts), and create simple HTML files that only have a `head` section and these head sections have 2 parts:
1. The meta tags and title for the blog
2. A redirection script that redirects users to actual app

I call these HTML files **Helmets** (yes, the name is inspired by the famous [React-Helmet](https://github.com/nfl/react-helmet)), so when a user jumps to a URL like **&lt;domain&gt;/blog/XYZ**, the [node script](https://github.com/ShrivastavaAkash/shrivastavaakash.github.io/blob/master/profile/src/util/helmet-maker.js) creates and puts a helmet file at path **&lt;domain&gt;/blog/XYZ/index.html**, so the user actually goes to the helmet file path but is redirected to angular router path from the redirect script written in the helmet file. This way if a crawler is scanning the path **&lt;domain&gt;/blog/XYZ**, it only gets the meta tags, and if a user is navigating to this path they land (via redirection) on the angular SPA. Such a simple trick does the job.

For example this is how a helmet file looks for current URL:

```html
<html>
    <head>
        <meta charset="utf-8">
        <meta property="og:type" content="website" />

        <!-- Meta tags generated from metadata.json -->
		<meta name="image" content="https://i.pinimg.com/originals/40/2d/21/402d214da8f227acffadda2e09e9097b.jpg" />
		<meta property="og:image" content="https://i.pinimg.com/originals/40/2d/21/402d214da8f227acffadda2e09e9097b.jpg" />
		<meta name="description" content="How to prerender your static single-page application without implenting server-side-rendering or needing any back-end infrastructure at all." />
		<meta property="og:description" content="How to prerender your static single-page application without implenting server-side-rendering or needing any back-end infrastructure at all." />
		<title>Pre-render static SPA without a live back-end</title>
		<meta name="title" content="Pre-render static SPA without a live back-end" />
		<meta property="og:title" content="Pre-render static SPA without a live back-end" />
		<meta name="author" content="Akash Shrivastava" />
		<meta property="og:author" content="Akash Shrivastava" />

        <!-- Redirection Script -->
        <script type="text/javascript">
            var botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
            var re = new RegExp(botPattern, 'i');
            var userAgent = navigator.userAgent; 
            if (!re.test(userAgent)) {
                var segmentCount = 0;
                var l = window.location;
                l.replace(
                l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
                l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
                l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
                (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
                l.hash
                );
            }
          </script>
    </head>
<body></body>
</html>
```

The redirection script detects whether it's a crawler requesting the page, if so, then redirection does not happen, since crawler only need meta tags, no need to redirect.

Here you see the hierarchy with which all the helmet files for `blog/` subroutes are created by the [node script](https://github.com/ShrivastavaAkash/shrivastavaakash.github.io/blob/master/profile/src/util/helmet-maker.js).

![helmet-files](https://i.pinimg.com/originals/70/51/d8/7051d8090029f2e3db2427a3672f65c4.png "helmet files generated for blog subroutes")

### Links you should check out for more info
* [rafrex/spa-github-pages](https://github.com/rafrex/spa-github-pages)
* [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)
* [Puppeteer](https://github.com/puppeteer/puppeteer)
* [Detect search crawlers via JavaScript](https://stackoverflow.com/questions/20084513/detect-search-crawlers-via-javascript)

**PS:** I finally got around to implement [Facebook Comments](https://developers.facebook.com/docs/plugins/comments/) as I mentioned in my [earlier blog post](https://shrivastavaakash.github.io/blog/my-first-blog). Please feel free to leave a comment if you like &#128540;.