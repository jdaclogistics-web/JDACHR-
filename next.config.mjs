/** Serves the designed pages (public/*.html) at clean URLs. */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/home.html" },
        { source: "/company", destination: "/company.html" },
        { source: "/register", destination: "/register.html" },
      ],
    };
  },
};
export default nextConfig;
