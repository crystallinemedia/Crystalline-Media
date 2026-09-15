const stories = [
  {
    cat: "COMMUNITY",
    title: "Crystalline Media is ready to tell stories that matter",
    text: "A digital newsroom focused on people, community and public-interest reporting."
  },
  {
    cat: "NEWS",
    title: "Your trusted space for local and national news",
    text: "Timely reporting, interviews, updates and important stories."
  },
  {
    cat: "SPORTS",
    title: "Giving community sports a bigger voice",
    text: "Follow youth teams, schools, academies and emerging talent."
  },
  {
    cat: "ENTERTAINMENT",
    title: "Culture, entertainment and community life",
    text: "Stories about music, culture, events and people."
  },
  {
    cat: "VIDEO",
    title: "Watch Crystalline Media",
    text: "Video reports, interviews and community conversations."
  },
  {
    cat: "OPINION",
    title: "A platform for constructive conversations",
    text: "Create space for informed discussion and public-interest ideas."
  }
];

function renderStories() {
  const box = document.getElementById("stories");
  if (!box) return;

  box.innerHTML = stories.map(story => `
    <article class="story">
      <div class="story-img">CM</div>
      <div class="story-body">
        <b>${story.cat}</b>
        <h3>${story.title}</h3>
        <p>${story.text}</p>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");

  if (menu && nav) {
    menu.onclick = function () {
      nav.classList.toggle("open");
    };
  }

  renderStories();
});
