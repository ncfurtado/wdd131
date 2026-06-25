const hikes1 = ["Tetons", "Goldbug Hotsprings", "Ririe", "Yellowstone"]
// Remember: The sort function sorts by alphabetical
console.log(hikes1)
console.log(hikes1.sort())

const Yellowstone = ["Yellowstone", "YELLOWSTONE", "yellowstone", "YeLlOwStOnE"]
console.log(Yellowstone)
console.log(Yellowstone.sort())
// but as it's actually sorting by Unicode order!

const ages = [33, 20, 7, 121];
console.log(ages);
console.log(ages.sort());
// And numbers are sorted by the first character - because they are treated as strings!
// You must convert them into numbers

const people = [{ name: "James" }, { name: "Bob" }, { name: "Josh" }, {name: "ricky"}]
console.log("Before")
console.log(people.sort());
// With objects, sorting is not done unless you specify your own way to do it.
// Make sure to pass it the function - like this 
const people2 = [{ name: "James" }, { name: "Bob" }, { name: "Josh" }, {name: "ricky"}]

console.log("After")
console.log(people2.sort(sortPeople));


// Here's a custom function to sort them. 
// The comparison operators in this case also uses Unicode

function sortPeople(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;}
    else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;}
    else {return 0;}
};

const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description: "Beautiful hike to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  }
];

// DOM references
const hikeContainer = document.querySelector("#hike-container");
const input = document.querySelector("#search");
const searchButton = document.querySelector("#searchButton");

// ---- templates ----
function tagTemplate(tags) {
  return tags.map(tag => `<button type="button">${tag}</button>`).join(" ");
}

function difficultyTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5"
  >  Difficulty: `;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-boot"> 🥾</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-empty">▫️</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function hikesTemplate(hike) {
  return `<div class="hike-card">
  <div class="hike-content">
    <h2>${hike.name}</h2>
    <div class="hike-tags">
      ${tagTemplate(hike.tags)}
    </div>
    <p>${hike.description}</p>
    <p>${difficultyTemplate(hike.difficulty)}</p>
  </div>
</div>`;
}

function renderHike(hike) {
  let html = hikesTemplate(hike);
  hikeContainer.innerHTML += html;
}

// ---- sorting helper ----
function sortDifficulty(a, b) {
  if (a.difficulty > b.difficulty) {
    return -1;
  } else if (a.difficulty < b.difficulty) {
    return 1;
  } else {
    return 0;
  }
}

// ---- main search/filter/sort/render logic ----
function search() {
  const userInput = input.value.toLowerCase();

  const filteredHikes = hikes.filter(hike => {
    return (
      hike.name.toLowerCase().includes(userInput) ||
      hike.description.toLowerCase().includes(userInput) ||
      hike.tags.find(tag => tag.toLowerCase().includes(userInput))
    );
  });

  // sort the filtered results by difficulty
  filteredHikes.sort(sortDifficulty);

  // clear out any previous content
  hikeContainer.innerHTML = "";

  // output onto screen
  filteredHikes.forEach(function (hike) {
    renderHike(hike);
  });
}

function handleEnter(event) {
  if (event.key === "Enter") {
    search();
  }
}

searchButton.addEventListener("click", search);
// for the enter key to work on search - not just clicking the search button
input.addEventListener("keypress", handleEnter);

// ---- show a random hike on page load ----
function init() {
  // clear out the static placeholder card from the HTML
  hikeContainer.innerHTML = "";

  const randomNum = Math.floor(Math.random() * hikes.length);
  renderHike(hikes[randomNum]);
}

init();