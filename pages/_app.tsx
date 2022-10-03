import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="André V. | Designer &amp; Frontend Developer"
        titleTemplate="André V. | Designer &amp; Frontend Developer"
        defaultTitle="André V. | Designer &amp; Frontend Developer"
        description="Aloha! I'm André Viana and i'm a designer/front-end developer."
        openGraph={{
          url: "https://www.alfv.com.br/",
          title: "André V. | Designer &amp; Frontend Developer",
          description:
            "Aloha! I'm André Viana and i'm a designer/front-end developer.",
          images: [
            {
              url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
              width: 800,
              height: 420,
              alt: "André V. | Designer &amp; Frontend Developer",
            },
          ],
        }}
        twitter={{
          handle: "@monomonio",
          site: "@monomonio",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, andre viana, dehviana, Web Developer, web development, web developer, blogger, tech enthusiast, open source, crypto, nfts, tezos nft artist, ethereum",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
