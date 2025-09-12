import type { Photo } from "./interfaces";

export const photos: Photo[] = [
  {
    id: 1,
    albumId: 1,
    title: "Chappy dog",
    url: "/dog1.jpg",
  },
  {
    id: 2,
    albumId: 1,
    title: "Tim dog",
    url: "/dog2.jpg",
  },
  {
    id: 3,
    albumId: 2,
    title: "Lord cat",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cfmnwqqPlHQeJgu71ug7pSqg6UKNnKlBdQ&s",
  },
  {
    id: 4,
    albumId: 3,
    title: " My family",
    url: "/family.jpeg",
  },
  {
    id: 5,
    albumId: 4,
    title: "Party",
    url: "https://images.gastronom.ru/7JMtK16IRVXV1aFAcsdj1ImTReOaMv18lRd_-2c9Llg/pr:article-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzAzZDJmYjRkLWMzMDAtNDNkMC04ZmU2LTY2YjVmZGVlNTU4MC5qcGc",
  },
  {
    id: 6,
    albumId: 2,
    title: "Semilord cat",
    url: "https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2015/10/15/151015073843_cat_eyes_640x360_felinestccby2.0_nocredit.jpg.webp",
  },
];
