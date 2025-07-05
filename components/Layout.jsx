import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Manogna Cheekoti | Portfolio</title>
        <meta
          name="description"
          content="Manogna Cheekoti is a Full-stack web developer with 4+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Manogna Cheekoti" />
        <meta name="theme-color" content="#f13024" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-netlify-app.netlify.app/" />
        <meta property="og:title" content="Manogna Cheekoti | Portfolio" />
        <meta property="og:description" content="Manogna Cheekoti is a Full-stack web developer with 4+ years of experience." />
        <meta property="og:image" content="https://your-netlify-app.netlify.app/avatar.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-netlify-app.netlify.app/" />
        <meta property="twitter:title" content="Manogna Cheekoti | Portfolio" />
        <meta property="twitter:description" content="Manogna Cheekoti is a Full-stack web developer with 4+ years of experience." />
        <meta property="twitter:image" content="https://your-netlify-app.netlify.app/avatar.png" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
