/**
 * videos-data.js
 * ------------------------------------------------------------------
 * Videos hosted in a GitHub repo (e.g. via raw.githubusercontent.com
 * or a GitHub release asset), referenced by a thumbnail image only.
 * The card shows the thumbnail + title; clicking opens the video URL.
 *
 * To add a video: copy an object below and edit the fields.
 *
 *   id          unique string, no spaces
 *   title       video title
 *   description one short line
 *   platform    "YouTube" | "Instagram" | "Short" | "Article"
 *   date        "[Date]" until a real date is supplied
 *   thumbnail   path to a thumbnail image (local file or GitHub-hosted)
 *   videoUrl    the GitHub-hosted video URL (raw file or release asset)
 * ------------------------------------------------------------------
 * Example once real content is added:
 *   thumbnail: "https://raw.githubusercontent.com/USER/REPO/main/thumbs/01.jpg"
 *   videoUrl:  "https://raw.githubusercontent.com/USER/REPO/main/videos/01.mp4"
 * ------------------------------------------------------------------
 */

const GITHUB_VIDEOS = [
  {
    id: "video-01",
    title: "[Video title]",
    description: "[Short description of the video content.]",
    platform: "YouTube",
    date: "[Date]",
    thumbnail: "assets/video-thumb-placeholder.svg",
    videoUrl: "#", // [GitHub-hosted video URL]
  },
  {
    id: "video-02",
    title: "[Video title]",
    description: "[Short description of the video content.]",
    platform: "Instagram",
    date: "[Date]",
    thumbnail: "assets/video-thumb-placeholder.svg",
    videoUrl: "#",
  },
  {
    id: "video-03",
    title: "[Video title]",
    description: "[Short description of the video content.]",
    platform: "Short",
    date: "[Date]",
    thumbnail: "assets/video-thumb-placeholder.svg",
    videoUrl: "#",
  },
  {
    id: "video-04",
    title: "[Video title]",
    description: "[Short description of the video content.]",
    platform: "Article",
    date: "[Date]",
    thumbnail: "assets/video-thumb-placeholder.svg",
    videoUrl: "#",
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { GITHUB_VIDEOS };
}
