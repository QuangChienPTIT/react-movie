export const THEMOVIEDB_API_KEY = "838ee94b4d4b50e41f33d7b1d6d3655d";
export const THEMOVIEDB_API_URL = "https://api.themoviedb.org/3";
export const THEMOVIEDB_GENRES = {
  action: {
    id: 28,
    name: "Phim Hành Động",
  },
  adventure: {
    id: 12,
    name: "Phim Phiêu Lưu",
  },
  comedy: {
    id: 35,
    name: "Phim Hài",
  },
  crime: {
    id: 80,
    name: "Phim Hình Sự",
  },
  drama: {
    id: 18,
    name: "Phim Chính Kịch",
  },
  fantasy: {
    id: 14,
    name: "Phim Giả Tưởng",
  },
  actionAdventure: {
    id: 10759,
    name: "Action & Adventure",
  },
  documentary: {
    id: 99,
    name: "Phim Tài Liệu",
  },
  family: {
    id: 10751,
    name: "Phim Gia Đình",
  },
  kids: {
    id: 10762,
    name: "Kids",
  },
  mystery: {
    id: 9648,
    name: "Phim Bí Ẩn",
  },
  news: {
    id: 10763,
    name: "News",
  },
  reality: {
    id: 10764,
    name: "Reality",
  },
  sciFiFantasy: {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  soap: {
    id: 10766,
    name: "Soap",
  },
  talk: {
    id: 10767,
    name: "Talk",
  },
  warPolitics: {
    id: 10768,
    name: "War & Politics",
  },
  western: {
    id: 37,
    name: "Phim Miền Tây",
  },
};

export const menuLinks = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Phim tài liệu",
    href: "/category/movie/documentary",
  },
  {
    title: "Phim Bí ẩn",
    href: "/category/movie/mystery",
  },
  {
    title: "Phim bộ",
    href: "/category/tv",
  },
  {
    title: "Hành động",
    href: "/category/movie/action",
  },
  {
    title: "Phim lẻ",
    href: "/category/movie",
  },
  {
    title: "Xem thêm",
    sub: [
      {
        title: "TV Show",
        href: "/category/tv",
      },
      {
        title: "Phim viễn tưởng",
        href: "/category/movie/mystery",
      },
      {
        title: "Gói đặc sắc",
        href: "/",
      },
      {
        title: "Thiếu nhi",
        href: "/",
      },
      {
        title: "Hài",
        href: "/category/movie/comedy",
      },
    ],
  },
];
