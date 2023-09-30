const data = [
  {
    name: "Mary Johnson",
    designation: "Chief Executive Officer",
    location: "TV Lounge - Home",
    otherDesignation: "Chief Entertainment Officer",
    button1: "Netflix Again",
    img: "watching television.png",
  },
  {
    name: "Kevin George",
    designation: "Chief Financial Officer",
    location: "Spare Room - Home",
    otherDesignation: "Cat Feeding Officer",
    button1: "Give Cat Food",
    img: "feeding-cat.png",
  },
  {
    name: "Amy Adems",
    designation: "Chief Marketing Officer",
    location: "Lobby - Home",
    otherDesignation: "Chief Mopping Officer",
    button1: "Empathise",
    img: "mopping.png",
  },
  {
    name: "Susan Martin",
    designation: "Chief Operating Officer",
    location: "Coffee Machine - Home",
    otherDesignation: "Coffee Organizing Officer",
    button1: "Ask Coffee",
    img: "coffee maker.png",
  },
  {
    name: "Eric Rivera",
    designation: "Managing Director",
    location: "Kitchen Sink - Home",
    otherDesignation: "Managing Dishwasher",
    button1: "Get Insight",
    img: "dishwasher.png",
  },
  {
    name: "Ruth Nelson",
    designation: "Sr. Vice President",
    location: "Kids Bedroom - Home",
    otherDesignation: "Senior Vaccuming President",
    button1: "Request How-To",
    img: "vacuuming.png",
  },
  {
    name: "Amanda Lee",
    designation: "Vice President",
    location: "Refrigerator - Home",
    otherDesignation: "Vegetable Procurer",
    button1: "Ask Broccoli",
    img: "vegetables.png",
  },
  {
    name: "Richard Lee",
    designation: "Chartered Accountant",
    location: "Gas Area - Home",
    otherDesignation: "Cooking Accountant",
    button1: "Have Food",
    img: "cooking.png",
  },
  {
    name: "Betty Robinson",
    designation: "Human resources",
    location: "Store - Home",
    otherDesignation: "Household Resources",
    button1: "Supplies",
    img: "resources.png",
  },
  {
    name: "James Smith",
    designation: "Learning & Development",
    location: "Laundry Area - Home",
    otherDesignation: "Laundry Doer",
    button1: "Pile Clothes",
    img: "laundry.png",
  },
];

const ceoText = document.getElementById("ceo");
const cfoText = document.getElementById("cfo");
const cmoText = document.getElementById("cmo");
const cooText = document.getElementById("coo");
const mdText = document.getElementById("md");
const svpText = document.getElementById("svp");
const vpText = document.getElementById("vp");
const caText = document.getElementById("ca");
const hrText = document.getElementById("hr");
const ldText = document.getElementById("ld");

const profileName = document.getElementById("profileName");
const profileDesignation = document.getElementById("profileDesignation");

hideElements();

ceoText.addEventListener("click", () => {
  showElements();
  showProfile(0);

  hideImages();
  document.getElementById("tv").style.display = "block";

  hideButtonText();
  document.getElementById("ceoButtonText").style.display = "block";
});

cfoText.addEventListener("click", () => {
  showProfile(1);

  hideImages();
  document.getElementById("cat").style.display = "block";

  hideButtonText();
  document.getElementById("cfoButtonText").style.display = "block";

  showElements();
});

cmoText.addEventListener("click", () => {
  showProfile(2);

  hideImages();
  document.getElementById("mopping").style.display = "block";

  hideButtonText();
  document.getElementById("cmoButtonText").style.display = "block";

  showElements();
});

cooText.addEventListener("click", () => {
  showProfile(3);

  hideImages();
  document.getElementById("coffee").style.display = "block";

  hideButtonText();
  document.getElementById("cooButtonText").style.display = "block";

  showElements();
});

mdText.addEventListener("click", () => {
  showProfile(4);

  hideImages();
  document.getElementById("dishwasher").style.display = "block";

  hideButtonText();
  document.getElementById("mdButtonText").style.display = "block";

  showElements();
});

svpText.addEventListener("click", () => {
  showProfile(5);

  hideImages();
  document.getElementById("vaccum").style.display = "block";

  hideButtonText();
  document.getElementById("svpButtonText").style.display = "block";

  showElements();
});

vpText.addEventListener("click", () => {
  showProfile(6);

  hideImages();
  document.getElementById("vegetables").style.display = "block";

  hideButtonText();
  document.getElementById("vpButtonText").style.display = "block";

  showElements();
});

caText.addEventListener("click", () => {
  showProfile(7);

  hideImages();
  document.getElementById("cooking").style.display = "block";

  hideButtonText();
  document.getElementById("caButtonText").style.display = "block";

  showElements();
});

hrText.addEventListener("click", () => {
  showProfile(8);

  hideImages();
  document.getElementById("resources").style.display = "block";

  hideButtonText();
  document.getElementById("hrButtonText").style.display = "block";

  showElements();
});

ldText.addEventListener("click", () => {
  showProfile(9);

  hideImages();
  document.getElementById("laundry").style.display = "block";

  hideButtonText();
  document.getElementById("ldButtonText").style.display = "block";

  showElements();
});

function hideElements() {
  document.getElementById("bottomRect").style.display = "none";
  document.getElementById("topRect").style.display = "none";
  document.getElementById("imgCircle").style.display = "none";
  document.getElementById("defaultButton").style.display = "none";
  document.getElementById("ceoButtonText").style.display = "none";
  document.getElementById("cfoButtonText").style.display = "none";
  document.getElementById("cooButtonText").style.display = "none";
  document.getElementById("mdButtonText").style.display = "none";
  document.getElementById("svpButtonText").style.display = "none";
  document.getElementById("vpButtonText").style.display = "none";
  document.getElementById("caButtonText").style.display = "none";
  document.getElementById("hrButtonText").style.display = "none";
  document.getElementById("ldButtonText").style.display = "none";
  document.getElementById("moreButton").style.display = "none";
  document.getElementById("moreButtonText").style.display = "none";
}

function hideImages() {
  document.getElementById("tv").style.display = "none";
  document.getElementById("cat").style.display = "none";
  document.getElementById("mopping").style.display = "none";
  document.getElementById("coffee").style.display = "none";
  document.getElementById("dishwasher").style.display = "none";
  document.getElementById("vaccum").style.display = "none";
  document.getElementById("vegetables").style.display = "none";
  document.getElementById("cooking").style.display = "none";
  document.getElementById("resources").style.display = "none";
  document.getElementById("laundry").style.display = "none";
}

function hideButtonText() {
  document.getElementById("cfoButtonText").style.display = "none";
  document.getElementById("ceoButtonText").style.display = "none";
  document.getElementById("cmoButtonText").style.display = "none";
  document.getElementById("cooButtonText").style.display = "none";
  document.getElementById("mdButtonText").style.display = "none";
  document.getElementById("svpButtonText").style.display = "none";
  document.getElementById("vpButtonText").style.display = "none";
  document.getElementById("caButtonText").style.display = "none";
  document.getElementById("hrButtonText").style.display = "none";
  document.getElementById("ldButtonText").style.display = "none";
}

function showElements() {
  document.getElementById("bottomRect").style.display = "block";
  document.getElementById("topRect").style.display = "block";
  document.getElementById("imgCircle").style.display = "block";
  document.getElementById("defaultButton").style.display = "block";
  document.getElementById("moreButton").style.display = "block";
  document.getElementById("moreButtonText").style.display = "block";
}

function showProfile(i) {
  profileName.textContent = data[i].name;
  profileDesignation.textContent = data[i].otherDesignation;
  profileLocation.textContent = data[i].location;
}
