import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bayu Pratama — Software Engineer",
    short_name: "BAYU.",
    description: "Software engineering portfolio of Bayu Pratama Agus Kurniawan.",
    start_url: "/",
    display: "standalone",
    background_color: "#090e17",
    theme_color: "#090e17",
  };
}
