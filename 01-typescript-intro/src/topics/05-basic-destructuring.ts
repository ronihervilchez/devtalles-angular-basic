interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  songTitle: string;
  details: AudioDetails;
}

interface AudioDetails {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  songTitle: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const songTitle = "New Song";
/* const {
  songTitle: anotherSong,
  songDuration: duration,
  details: { author },
} = audioPlayer; */ //Mejor performance, menos entendible

/* const { songTitle: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

console.log("Song: ", anotherSong);
console.log("Duration: ", duration);
console.log("Author: ", author); */

const dbz: string[] = ["Goku", "Vegeta"/* , "Trunks" */];
/* const trunk = dbz[3] || "No existe";
console.error("Personaje 3: ", trunk); */
const [, , trunk = 'Not found']: string[] = dbz;
console.error("Personaje 3: ", trunk);
export {};