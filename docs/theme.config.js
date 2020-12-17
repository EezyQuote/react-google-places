// theme.config.js
export default {
  github: 'https://github.com/EezyQuote/react-auto-complete', // link of the project repo
  siteGithub: 'https://github.com/EezyQuote/react-auto-complete', // link of the docs repo path
  titleSuffix: ' – React Auto Complete',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `${new Date().getFullYear()} © EezyQuote`,
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <React.Fragment>
      <img src="/place.svg" className="mr-2 font-extrabold hidden md:inline" style={{height:"2em"}} />
      <span className="text-gray-600 font-normal hidden md:inline">React Auto Complete</span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Eezyquote - React Google Places" />
      <meta name="og:description" content="Eezyquote - React Google Places" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@eezyquote" />
      <meta name="og:title" content="Eezyquote - React Google Places" />
      <meta name="apple-mobile-web-app-title" content="EezyQuote" />
    </React.Fragment>
  ),
}
