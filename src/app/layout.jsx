import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

///Import Layout
import ScrollContainer from "@/utils/ScrollContainer";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";
import PageTransitionWrapper from "@/layout/PageTransitionWrapper";

export const metadata = {
  title: "Yunis Mikayilov — Sr. Product Designer",
  description: "Hello! I'm Yunis. A product designer based in Warsaw",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon/512x512.svg" />
        <link rel="stylesheet" href="manifest.webmanifest" />

        <meta name="rating" content="general" />
        <meta name="rating" content="5" />
        <meta name="revisit" content="3" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords"
          content="yunis, yunismikail, yunis mikail, mikayilov, yunis mikayilov, product, designer, design, product design, product designer, UX-UI, UX/UI" />
        <meta property="og:site_name" content="yunismikail.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yunis Mikayilov — Product Designer" />
        <meta property="og:image" content="https://yunismikail.com/favicon/256x256.svg" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta name="thumbnail" content="https://yunismikail.com/favicon/256x256.svg" />
        <meta property="og:url" content="https://yunismikail.com/" />
        <meta property="og:description"
          content="Hello! I'm Yunis. A product designer based in Warsaw" />
        <meta name="twitter:url" content="https://yunismikail.com/" />
        <meta name="twitter:title" content="Yunis Mikayilov — Product Designer" />
        <meta name="twitter:description"
          content="Hello! I'm Yunis. A product designer based in Warsaw" />
        <meta name="twitter:image" content="https://yunismikail.com/favicon/256x256.svg" />
        <meta name="apple-mobile-web-app-title" content="Yunis Mikayilov — Product Designer" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        <link rel="apple-touch-icon" sizes="512x512" href="favicon/512x512.svg" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

      </head>

      <body>
        <ScrollContainer>
          <PageAnimatePresence>
            {children}
            <PageTransitionWrapper />
          </PageAnimatePresence>
        </ScrollContainer>
      </body>
    </html>
  );
}