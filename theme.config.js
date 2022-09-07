export default {
  github: '',
  docsRepositoryBase: '',
  titleSuffix: ' – 免费番茄',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">免费番茄</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        基于SSRSUB免费服务器
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="zh" />
      <meta name="description" content="基于SSRSUB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="" />      
      <meta name="og:description" content="" />
      <meta name="og:image" content="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/55addb7f-0de7-422a-81c9-b326db23c6a4/391907100_HEART_400.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220907T093647Z&X-Amz-Expires=86400&X-Amz-Signature=7f80f0a5dd0635e95e8a5d8c1e1bd9715d85ed273ba3f636da4f896fc6373410&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22391907100_HEART_400.png%22&x-id=GetObject" />
      <meta name="apple-mobile-web-app-title" content="免费番茄" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: false,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Nextra.</>,
  unstable_faviconGlyph: '❤️',
}
