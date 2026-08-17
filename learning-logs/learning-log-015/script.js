let data = [
  {
    name: "Roman Rouf Col.",
    role: "Gym Expert",
    isFriend: "Stranger",
    rating: 4.5,
    hours: 200,
    months: "06",
    status: "Online",
    profileImage:
      "https://i.pinimg.com/736x/ac/73/6d/ac736d1379e4b0ee390b35c0aea92419.jpg",
    coverImage:
      "https://i.pinimg.com/736x/96/c0/26/96c0262f8901320fded88cb085ed3f0c.jpg",
  },
  {
    name: "Alex Morgan",
    role: "Fitness Coach",
    isFriend: "Stranger",
    rating: 4.8,
    hours: 320,
    months: "08",
    status: "Offline",
    profileImage:
      "https://i.pinimg.com/736x/5d/d2/85/5dd28576b5af0971341811d2c8954b92.jpg",
    coverImage:
      "https://i.pinimg.com/736x/90/27/84/9027841c926b495bf6e8343170307189.jpg",
  },
  {
    name: "Daniel Smith",
    role: "Personal Trainer",
    isFriend: "Stranger",
    rating: 4.6,
    hours: 250,
    months: "07",
    status: "Online",
    profileImage:
      "https://i.pinimg.com/736x/28/9b/12/289b1254b2d51b27f4b0bad1b1cdda16.jpg",
    coverImage:
      "https://i.pinimg.com/1200x/2b/80/63/2b80632fc5c6d3ea1ef6469c8315e25d.jpg",
  },
  {
    name: "James Wilson",
    role: "Gym Expert",
    isFriend: "Stranger",
    rating: 4.9,
    hours: 410,
    months: "12",
    status: "Offline",
    profileImage:
      "https://i.pinimg.com/736x/c3/83/df/c383df6f147ac8b320f9061f5118294d.jpg",
    coverImage:
      "https://i.pinimg.com/736x/99/2f/de/992fdecdc07942fc770f2fd6f45cfc89.jpg",
  },
];

let main = document.querySelector("#main");

function render() {
  let sum = "";
  data.forEach((dct, idx) => {
    sum += `
  <div id="box">
      <div class="cover-img" style="background: url('${dct.coverImage}');" >
        <div class="profile-img">
            <img src=${dct.profileImage} alt="">
        </div>
      </div>
      <div class="details">
        <div class="hedder">
          <div class="name">
            <h1>${dct.name}</h1>
            <h4>${dct.role} | <span class="${dct.isFriend}">${dct.isFriend}</span> </h4>
          </div>
          <div class="stutas">
            <div class="dot  ${dct.status}" ></div>
            <h5>${dct.status}</h5>
          </div>
        </div>
        <div class="cal">
          <div class="info">
            <h2>${dct.rating}</h2>
            <h4>Rating</h4>
          </div>
          <div class="info">
            <h2>${dct.hours}</h2>
            <h4>Hours</h4>
          </div>
          <div class="info">
            <h2>${dct.months}</h2>
            <h4>Months</h4>
          </div>
        </div>
        <button id="${idx}">  ${dct.isFriend == "Friend" ? "Remove Friend" : "Add Friend"}</button>
      </div>
    </div>`;
  });

  main.innerHTML = sum;
}
render()

main.addEventListener("click", function (dets) {
  let user = data[dets.target.id];
  if (user.isFriend == "Stranger") {
    user.isFriend = "Friend";
  } else {
    user.isFriend = "Stranger";
  }
  render();
  console.log(user);
  console.dir(dets.target);
});