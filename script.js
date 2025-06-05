const locations = [
  {
    title: "S'Illot Beach",
    desc: "A serene beach with white sands and calm turquoise waters—perfect for relaxing or snorkeling.",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/S%27Illot_Mallorca_beach.jpg"
  },
  {
    title: "Punta de n'Amer",
    desc: "This nature reserve features coastal views, historic watchtowers, and scenic walking paths.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sa_Punta_de_n%27Amer.JPG"
  },
  {
    title: "Sa Foradada",
    desc: "An iconic cliff with a hole, offering one of the best sunset views in Mallorca.",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Sa_Foradada.jpg"
  },
  {
    title: "Cuevas del Drach",
    desc: "Explore stunning underground caves and enjoy a classical concert on Lake Martel.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cuevas_del_Drach_Mallorca_Spain.jpg"
  },
  {
    title: "Cap de Formentor",
    desc: "A dramatic cape with breathtaking cliffs and endless views of the Mediterranean Sea.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Cap_Formentor.jpg"
  }
];

let current = 0;

const imgEl = document.getElementById("location-img");
const titleEl = document.getElementById("location-title");
const descEl = document.getElementById("location-desc");
const btn = document.getElementById("next-btn");

function showLocation(index) {
  const loc = locations[index];
  imgEl.src = loc.img;
  titleEl.textContent = loc.title;
  descEl.textContent = loc.desc;
}

btn.addEventListener("click", () => {
  current++;
  if (current < locations.length) {
    showLocation(current);
  } else {
    titleEl.textContent = "🎉 You've explored Mallorca!";
    descEl.textContent = "From stunning beaches to epic mountain views, we hope you had a great journey!";
    imgEl.src = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Majorca.svg";
    btn.textContent = "Start Over";
    current = -1; // Reset for restart
  }
});

showLocation(current);
