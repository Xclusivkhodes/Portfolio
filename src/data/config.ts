const config = {
  title: "Gbewonyo Felix | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Felix, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Felix, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Felix",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Gbewonyo Felix Elikplim",
  email: "xclusivkhoder@gmail.com",
  site: "https://xclusivs.vercel.app",

  // for github stars button
  githubUsername: "xclusivkhodes",
  githubRepo: "*",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/xclusivkhoder",
    linkedin: "https://www.linkedin.com/in/xclusivkhodes/",
    instagram: "https://www.instagram.com/xclusiv_khoder",
    github: "https://github.com/xclusivkhodes",
  },
};
export { config };
