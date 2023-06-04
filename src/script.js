const projectCards = document.getElementById("cardContainer");
const newCard = document.getElementById("newCard");

const projects = [
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "/stock/unsplash/qwtCeJ5cLYs/upload/e5d1719e76caa41a811a9dfea96678bd.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    profilePic:
      "/v1677501965288/4nf01qe3z.jpg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    minutes: "10",
    authorName: "Author Name",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, Egestas sed tempus urna et pharetra pharetra massa. Nec feugiat in fermentum posuere urna. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Enim eu turpis egestas pretium aenean pharetra magna ac placerat.",
    img: "upload/v1685521341689/37cfd0ee-6167-414e-992e-ad9680dc894c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    profilePic:
      "/v1685082265751/e6d27d28-567c-4a7c-b41d-78156a6f461f.png?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    minutes: "9",
    authorName: "Author Name",
  },
  {
    title: "Title",
    description:
      "Pulvinar sapien et ligula ullamcorper. Augue ut lectus arcu bibendum at varius. Velit laoreet id donec ultrices tincidunt arcu non sodales. Malesuada fames ac turpis egestas.",
    img: "upload/v1685482558666/3bde9d28-3b26-486b-abaf-378ef4c8d288.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    profilePic:
      "/v1685387929462/xoIf7Skg_.jpg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    minutes: "3",
    authorName: "Author Name",
  },
  {
    title: "Title",
    description:
      "Augue ut lectus arcu bibendum at varius. Velit laoreet id donec ultrices tincidunt arcu non sodales. Malesuada fames ac turpis egestas.",
    img: "upload/v1685368643613/c94d6a09-d066-4f4e-b2a5-1e86ff915461.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    profilePic:
      "/v1685368112557/3bsKm4Q-8.jpg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    minutes: "8",
    authorName: "Author Name",
  },
  {
    title: "Title",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "upload/v1641061048813/PfHe2RS2r.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    profilePic:
      "/v1678711892346/KVZ7H-tuh.jpg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    minutes: "5",
    authorName: "Author Name",
  },
  {
    title: "Title",
    description:
      "Eget dolor morbi non arcu risus quis varius quam quisque. Id diam vel quam elementum pulvinar etiam non quam lacus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus.",
    img: "/stock/unsplash/-TQUERQGUZ8/upload/ef93a822ab020803cad84b040a20ccdf.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    profilePic:
      "/v1685403658317/5ZEQ1EWmG.jpeg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    minutes: "11",
    authorName: "Author Name",
  },
];

projects.forEach((project) => {
  const cardClone = newCard.cloneNode(true);
  cardClone.removeAttribute("id");

  const cardImage = cardClone.querySelector(".card-img-top");
  cardImage.src += project.img;

  const cardTitle = cardClone.querySelector(".card-title");
  cardTitle.textContent = project.title;

  const cardDescription = cardClone.querySelector(".card-text");
  cardDescription.textContent = project.description;

  const authorImage = cardClone.querySelector(".profile");
  authorImage.src += project.profilePic;

  const authorName = cardClone.querySelector(".authorName");
  authorName.textContent = project.authorName;

  const minsRead = cardClone.querySelector(".timeForReading");
  minsRead.textContent = project.minutes + " mins read";

  projectCards.appendChild(cardClone);
});

newCard.remove();
