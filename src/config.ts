export const SITE = {
  website: "https://blog.skkutable.com/", // replace this with your deployed domain
  author: "skkutable",
  profile: "https://skkutable.com/",
  desc: "SKKU Table Tech Blog",
  title: "SKKU Table Tech Blog",
  ogImage: "skku-table-og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/skku-table/blog/edit/main/",
  },
  dynamicOgImage: true,
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
