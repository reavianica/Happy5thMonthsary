const songs = [
  {
    title: "Tingin by Cup of Joe & Janine",
    message: "the very first day i felt i was enchanted by you. totoong sa'yo lang ang tingin, at sa'yo lang magpapaangkin",
    image: "first.JPG",
    link: "https://open.spotify.com/track/7b89Ffklm3xh4GI37vlZDZ?si=edfb18290fa641f0"
  },
  {
    title: "Darl+ing by SEVENTEEN",
    message: "i used this song to finally post you during our first date. i just thought that this song suits you very well during that day",
    image: "second.JPG",
    link: "https://open.spotify.com/track/6vo0dV9t7PCQZKsLFwVwZ5?si=8d3e509d1e7c4779"
  },
  {
    title: "RomCom by Rob Deniel",
    message: "one of my new fav songs which describes what i feel, dahil labis-labis akong nasasabik sa'yo",
    image: "third.JPG",
    link: "https://open.spotify.com/track/67DEADzgSxkFWI3jVlQUL3?si=29e9439528474f73"
  },
  {
    title: "Best Part by Daniel Casear ft. H.E.R.",
    message: "aside from this is your fave song, i also want you to know that you're the only one i desire always",
    image: "fourth.JPG",
    link: "https://open.spotify.com/track/1RMJOxR6GRPsBHL8qeC2ux?si=8e58b9c3fa8540cb"
  },
  {
    title: "Perfect by Ed Sheeran",
    message: "will never forget the day i played the guitar for you. one of our most memorable moments, and something that i will cherish and even tell our kids about it. i am glad you are the woman i found who is much more stronger than before",
    image: "fifth.JPG",
    link: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=9a6037537fbc4555"
  },
  {
    title: "my kry.",
    message: "five songs for our fifth month. but five songs are not enough so here's the real playlist.",
    image: "last.JPG",
    link: "https://open.spotify.com/playlist/109aLpuuXwmfZiXE3fSlxp?si=05435878fe8e4fc3"
  },
  // Add more songs with respective details
];

let currentSongIndex = 0;

const songContainer = document.getElementById('songContainer');
const nextSongBtn = document.getElementById('nextSongBtn');

function displayCurrentSong() {
  const currentSong = songs[currentSongIndex];
  const songElement = document.createElement('div');
  songElement.innerHTML = `
    <h2>${currentSong.title}</h2>
    <p>${currentSong.message}</p>
    <img src="${currentSong.image}" alt="${currentSong.title}">
    <br>
    <a href="${currentSong.link}" target="_blank">Listen to ${currentSong.title}</a>
  `;
  songContainer.innerHTML = '';
  songContainer.appendChild(songElement);
}

nextSongBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  displayCurrentSong();
});

// Initial display of the first song
displayCurrentSong();
