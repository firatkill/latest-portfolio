/** @type {import('next').NextConfig} */
const nextConfig = {
  // The old site had one page per section; keep those links working.
  async redirects() {
    return ["about", "projects", "stack", "contact"].map((page) => ({
      source: `/${page}`,
      destination: page === "about" ? "/#how" : page === "projects" ? "/#work" : `/#${page}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
