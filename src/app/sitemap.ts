import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://xclusivs.vercel.app", lastModified: new Date() },
    { url: "https://xclusivs.vercel.app/about", lastModified: new Date() },
    { url: "https://xclusivs.vercel.app/projects", lastModified: new Date() },
    { url: "https://xclusivs.vercel.app/blogs", lastModified: new Date() },
    { url: "https://xclusivs.vercel.app/contact", lastModified: new Date() },
    { url: "https://xclusivs.vercel.app/blogs/achieving-milestone", lastModified: new Date() },
  ];
}
