export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  coverUrl: string
  audioUrl: string
}

export interface Playlist {
  id: string
  title: string
  description: string
  coverUrl: string
  tracks: Track[]
}

export interface LebronImage {
  id: number
  url: string
  title: string
  description: string
  likes: number
}

export interface VideoEdit {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  likes: number
  views: number
  duration: number // in seconds
}

export interface VideoCategory {
  id: string
  title: string
  description: string
  videos: VideoEdit[]
}

export interface Lebron {
  id: number
  url: string
  title: string
  likes: number
}

// IMPORTANT: Replace all placeholder media URLs with your own hosted content before using
// See README.md for instructions on setting up your media assets
export const tracks: Track[] = [
  {
    id: "42",
    title: "Broncic Dreams",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 215,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_0685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/broncic-dreams.mp3",
  },
  {
    id: "43",
    title: "Cavs to the Lakers",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 198,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/cavs-to-the-lakers.mp3",
  },
  {
    id: "44",
    title: "BronFriend",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 205,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/IMG_P685.jpeg",
  },
  {
    id: "45",
    title: "Die For LeBron",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 187,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/die-for-lebron.mp3",
  },
  {
    id: "46",
    title: "DayBron",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 210,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/daybron.mp3",
  },
  {
    id: "47",
    title: "I Kissed LeBron",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 195,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/i-kissed-lebron.mp3",
  },
  {
    id: "48",
    title: "Don't Play with LeBron",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 210,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/dont-play-with-lebron.mp3",
  },
  {
    id: "49",
    title: "Glazin LeBron",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 187,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/glazin-lebron.mp3",
  },
  {
    id: "50",
    title: "Towards the Bron",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 203,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/towards-the-bron.mp3",
  },
  {
    id: "51",
    title: "LeNade",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 192,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/lenade.mp3",
  },
  {
    id: "52",
    title: "Superteams",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 215,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/superteams.mp3",
  },
  {
    id: "53",
    title: "Mary J Bron",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 198,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/mary-j-bron.mp3",
  },
  {
    id: "54",
    title: "Yabadabadoo Old Navy (cred. qpeeskin)",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 183,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/yabadabadoo-old-navy.mp3",
  },
  {
    id: "55",
    title: "Ring for my King",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 207,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/ring-for-my-king.mp3",
  },
  {
    id: "56",
    title: "Thinking Bout LeBron",
    artist: "LeBron James",
    album: "Bron and Jerry",
    duration: 190,
    coverUrl: "/assets/album-covers/bron-and-jerry/IMG_P685.jpeg",
    audioUrl: "/assets/audio/bron-and-jerry/thinking-bout-lebron.mp3",
  },
  {
    id: "57",
    title: "Bron to the Moon",
    artist: "LeBron James",
    album: "Bronfoolery",
    duration: 205,
    coverUrl: "/assets/album-covers/bron-to-the-moon.jpg",
    audioUrl: "/assets/audio/bron-to-the-moon.mp3",
  },
  {
    id: "58",
    title: "Evil LeBron",
    artist: "LeBron James",
    album: "Bronfoolery",
    duration: 198,
    coverUrl: "/assets/album-covers/evil-lebron.jpg",
    audioUrl: "/assets/audio/evil-lebron.mp3",
  },
  {
    id: "59",
    title: "Can't Stop the Glaze",
    artist: "LeBron James, heyitskrypt, ft. Lil ZEA",
    album: "Bronfoolery",
    duration: 210,
    coverUrl: "/assets/album-covers/cant-stop-the-glaze.jpg",
    audioUrl: "/assets/audio/cant-stop-the-glaze.mp3",
  },
  {
    id: "60",
    title: "LeBrightside",
    artist: "LeBron James",
    album: "Bronfoolery",
    duration: 195,
    coverUrl: "/assets/album-covers/lebrightside.jpg",
    audioUrl: "/assets/audio/lebrightside.mp3",
  },
  {
    id: "61",
    title: "LeRoon 5",
    artist: "LeBron James",
    album: "Bronfoolery",
    duration: 203,
    coverUrl: "/assets/album-covers/leroon-5.jpg",
    audioUrl: "/assets/audio/leroon-5.mp3",
  },
  {
    id: "0",
    title: "LeRnB",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 220,
    coverUrl: "/assets/album-covers/lernb.jpg",
    audioUrl: "/assets/audio/lernb.mp3",
  },
  {
    id: "1",
    title: "Dribble Up",
    artist: "LeBron James",
    album: "LBJ",
    duration: 183,
    coverUrl: "/assets/album-covers/dribble-up.jpg",
    audioUrl: "/assets/audio/dribble-up.mp3",
  },
  {
    id: "2",
    title: "First Day Out",
    artist: "LeBron James",
    album: "First Day Out",
    duration: 214,
    coverUrl: "/assets/album-covers/first-day-out.jpg",
    audioUrl: "/assets/audio/first-day-out.mp3",
  },
  {
    id: "3",
    title: "Hooper",
    artist: "LeBron James, Caitlin Clark",
    album: "LBJ",
    duration: 197,
    coverUrl: "/assets/album-covers/hooper-ft-caitlin-clark.jpg",
    audioUrl: "/assets/audio/hooper-ft-caitlin-clark.mp3",
  },
  {
    id: "4",
    title: "Like That",
    artist: "LeBron James, Kawhi Leonard",
    album: "We Don't Guard You",
    duration: 176,
    coverUrl: "/assets/album-covers/like-that-ft-kawhi-leonard.jpg",
    audioUrl: "/assets/audio/like-that-ft-kawhi-leonard.mp3",
  },
  {
    id: "5",
    title: "That's Our Ball Ain't It",
    artist: "LeBron James",
    album: "LBJ",
    duration: 224,
    coverUrl: "/assets/album-covers/thats-our-ball-aint-it.jpg",
    audioUrl: "/assets/audio/thats-our-ball-aint-it.mp3",
  },
  {
    id: "6",
    title: "Forever",
    artist: "LeBron James",
    album: "LBJ",
    duration: 189,
    coverUrl: "/assets/album-covers/forever.jpg",
    audioUrl: "/assets/audio/forever.mp3",
  },
  {
    id: "7",
    title: "tv off",
    artist: "LeBron James, James Harden",
    album: "LBJ",
    duration: 235,
    coverUrl: "/assets/album-covers/tv-off.jpg",
    audioUrl: "/assets/audio/tv-off.mp3",
  },
  {
    id: "19",
    title: "hey now",
    artist: "LeBron James, Anthony Davis",
    album: "LBJ",
    duration: 205,
    coverUrl: "/assets/album-covers/hey-now.jpg",
    audioUrl: "/assets/audio/hey-now.mp3",
  },
  {
    id: "20",
    title: "laker yellow",
    artist: "LeBron James, Justin Bieber, Jared McCain, Austin Reaves, Jeremy Lin, Nick Young",
    album: "LBJ",
    duration: 218,
    coverUrl: "/assets/album-covers/laker-yellow.jpg",
    audioUrl: "/assets/audio/laker-yellow.mp3",
  },
  {
    id: "21",
    title: "man at the garden",
    artist: "LeBron James",
    album: "LBJ",
    duration: 193,
    coverUrl: "/assets/album-covers/man-at-the-garden.jpg",
    audioUrl: "/assets/audio/man-at-the-garden.mp3",
  },
  {
    id: "22",
    title: "peekaboo",
    artist: "LeBron James, Anthony Edwards",
    album: "LBJ",
    duration: 210,
    coverUrl: "/assets/album-covers/peekaboo.jpg",
    audioUrl: "/assets/audio/peekaboo.mp3",
  },
  {
    id: "23",
    title: "ring pt. 6",
    artist: "LeBron James",
    album: "LBJ",
    duration: 187,
    coverUrl: "/assets/album-covers/ring-pt-6.jpg",
    audioUrl: "/assets/audio/ring-pt-6.mp3",
  },
  {
    id: "24",
    title: "wacced out murals",
    artist: "LeBron James",
    album: "LBJ",
    duration: 195,
    coverUrl: "/assets/album-covers/wacced-out-murals.jpg",
    audioUrl: "/assets/audio/wacced-out-murals.mp3",
  },
  {
    id: "25",
    title: "Like That (Remix)",
    artist: "Kyrie Irving, Kawhi Leonard",
    album: "Like That (Remix)",
    duration: 220,
    coverUrl: "/assets/album-covers/like-that-remix.jpg",
    audioUrl: "/assets/audio/like-that-remix.mp3",
  },
  {
    id: "26",
    title: "Please Stay LeBron",
    artist: "City of Cleveland",
    album: "Please Stay LeBron",
    duration: 198,
    coverUrl: "/assets/album-covers/please-stay-lebron.jpg",
    audioUrl: "/assets/audio/please-stay-lebron.mp3",
  },
  {
    id: "27",
    title: "NOKIA",
    artist: "SGA, Michael Jordan",
    album: "NOKIA",
    duration: 212,
    coverUrl: "/assets/album-covers/nokia.jpg",
    audioUrl: "/assets/audio/nokia.mp3",
  },
  {
    id: "28",
    title: "We Did It",
    artist: "Jayson Tatum, Deuce Tatum",
    album: "We Did It",
    duration: 203,
    coverUrl: "/assets/album-covers/we-did-it.jpg",
    audioUrl: "/assets/audio/we-did-it.mp3",
  },
  {
    id: "30",
    title: "4 Bar Friday",
    artist: "Podcast P",
    album: "Washed Anthem",
    duration: 198,
    coverUrl: "/assets/album-covers/4-bar-friday.jpg",
    audioUrl: "/assets/audio/4-bar-friday.mp3",
  },
  {
    id: "31",
    title: "Podcast Interlude",
    artist: "Podcast P",
    album: "Washed Anthem",
    duration: 175,
    coverUrl: "/assets/album-covers/podcast-interlude.jpg",
    audioUrl: "/assets/audio/podcast-interlude.mp3",
  },
  {
    id: "29",
    title: "Washed Anthem",
    artist: "Podcast P",
    album: "Washed Anthem",
    duration: 215,
    coverUrl: "/assets/album-covers/washed-anthem.jpg",
    audioUrl: "/assets/audio/washed-anthem.mp3",
  },
  {
    id: "8",
    title: "Hey There LeBronny",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 210,
    coverUrl: "/assets/album-covers/hey-there-lebronny.jpg",
    audioUrl: "/assets/audio/hey-there-lebronny.mp3",
  },
  {
    id: "9",
    title: "LeBron Hour",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 195,
    coverUrl: "/assets/album-covers/lebron-hour.jpg",
    audioUrl: "/assets/audio/lebron-hour.mp3",
  },
  {
    id: "10",
    title: "Am I LeBron",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 187,
    coverUrl: "/assets/album-covers/am-i-lebron.jpg",
    audioUrl: "/assets/audio/am-i-lebron.mp3",
  },
  {
    id: "11",
    title: "LeBron That I Used to Know",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 240,
    coverUrl: "/assets/album-covers/lebron-that-i-used-to-know.jpg",
    audioUrl: "/assets/audio/lebron-that-i-used-to-know.mp3",
  },
  {
    id: "12",
    title: "LeBron That I Used To Know - Jersey Club",
    artist: "LeBron James, DJ Bronny",
    album: "LeBronaissance",
    duration: 198,
    coverUrl: "/assets/album-covers/lebron-that-i-used-to-know-jersey-club.jpg",
    audioUrl: "/assets/audio/lebron-that-i-used-to-know-jersey-club.mp3",
  },
  {
    id: "13",
    title: "Let LeBron Know",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 205,
    coverUrl: "/assets/album-covers/let-lebron-know.jpg",
    audioUrl: "/assets/audio/let-lebron-know.mp3",
  },
  {
    id: "14",
    title: "Oh Mr LeBron",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 192,
    coverUrl: "/assets/album-covers/oh-mr-lebron.jpg",
    audioUrl: "/assets/audio/oh-mr-lebron.mp3",
  },
  {
    id: "15",
    title: "Soulful Bron",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 218,
    coverUrl: "/assets/album-covers/soulful-bron.jpg",
    audioUrl: "/assets/audio/soulful-bron.mp3",
  },
  {
    id: "16",
    title: "There's No We Without Bron and I",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 225,
    coverUrl: "/assets/album-covers/theres-no-we-without-bron-and-i.jpg",
    audioUrl: "/assets/audio/theres-no-we-without-bron-and-i.mp3",
  },
  {
    id: "17",
    title: "The Color LeBron",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 203,
    coverUrl: "/assets/album-covers/the-color-lebron.jpg",
    audioUrl: "/assets/audio/the-color-lebron.mp3",
  },
  {
    id: "18",
    title: "Who's Callin LeBron",
    artist: "LeBron James",
    album: "LeBronaissance",
    duration: 212,
    coverUrl: "/assets/album-covers/whos-callin-lebron.jpg",
    audioUrl: "/assets/audio/whos-callin-lebron.mp3",
  },
  {
    id: "62",
    title: "Like LeBron",
    artist: "LeBron James",
    album: "Raymone",
    duration: 205,
    coverUrl: "/assets/album-covers/raymone.jpg",
    audioUrl: "/assets/audio/like-lebron.mp3",
  },
  {
    id: "63",
    title: "Comeback King",
    artist: "LeBron James",
    album: "BRON",
    duration: 198,
    coverUrl: "/assets/album-covers/comeback-king.jpg",
    audioUrl: "/assets/audio/comeback-king.mp3",
  },
  {
    id: "64",
    title: "Dunk with a Smile",
    artist: "LeBron James",
    album: "BRON",
    duration: 210,
    coverUrl: "/assets/album-covers/dunk-with-a-smile.jpg",
    audioUrl: "/assets/audio/dunk-with-a-smile.mp3",
  },
  {
    id: "65",
    title: "That's Bron",
    artist: "LeBron James",
    album: "BRON",
    duration: 187,
    coverUrl: "/assets/album-covers/thats-bron.mp3",
    audioUrl: "/assets/audio/thats-bron.mp3",
  },
  {
    id: "66",
    title: "I Believe in LeBron",
    artist: "LeBron James",
    album: "BRON",
    duration: 195,
    coverUrl: "/assets/album-covers/i-believe-in-lebron.mp3",
    audioUrl: "/assets/audio/i-believe-in-lebron.mp3",
  },
  {
    id: "67",
    title: "Slow Dancing with LeBron",
    artist: "LeBron James",
    album: "Slow Dancing with LeBron",
    duration: 210,
    coverUrl: "/assets/album-covers/slow-dancing-with-lebron.jpg",
    audioUrl: "/assets/audio/slow-dancing-with-lebron.mp3",
  },
  {
    id: "68",
    title: "Don't Leave Us Bron",
    artist: "LeBron James, imakeparodyzz",
    album: "DragonBron Z",
    duration: 200,
    coverUrl: "/assets/album-covers/dont-leave-us-bron.jpg",
    audioUrl: "/assets/audio/dont-leave-us-bron.mp3",
  },
  {
    id: "69",
    title: "From LeStart",
    artist: "LeBron James, Amaree",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/from-lestart.jpg",
    audioUrl: "/assets/audio/from-lestart.mp3",
  },
  {
    id: "70",
    title: "LeSoda James",
    artist: "LeBron James, Amaree",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/lesoda-james.jpg",
    audioUrl: "/assets/audio/lesoda-james.mp3",
  },
  {
    id: "71",
    title: "LeBron Jean",
    artist: "LeBron James, LeBron Jean",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/lebron-jean.jpg",
    audioUrl: "/assets/audio/lebron-jean.mp3",
  },
  {
    id: "72",
    title: "LeRansom",
    artist: "LeBron James, FNB Gang",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/leransom.jpg",
    audioUrl: "/assets/audio/leransom.mp3",
  },
  {
    id: "73",
    title: "Empire of LeBron",
    artist: "LeBron James, jaylomboy",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/empire-of-lebron.jpg",
    audioUrl: "/assets/audio/empire-of-lebron.mp3",
  },
  {
    id: "74",
    title: "Save Your Bron",
    artist: "LeBron James, maynburneracc",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/save-your-bron.jpg",
    audioUrl: "/assets/audio/save-your-bron.mp3",
  },
  {
    id: "75",
    title: "Trap LeRoyalty",
    artist: "LeBron James, beezysims",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/trap-leroyalty.jpg",
    audioUrl: "/assets/audio/trap-leroyalty.mp3",
  },
  {
    id: "76",
    title: "LeTreasure",
    artist: "LeBron James, romeisnotheremain",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/letreasure.jpg",
    audioUrl: "/assets/audio/letreasure.mp3",
  },
  {
    id: "77",
    title: "In Love with Bron",
    artist: "LeBron James, bitchkys_",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/in-love-with-bron.jpg",
    audioUrl: "/assets/audio/in-love-with-bron.mp3",
  },
  {
    id: "78",
    title: "LeGoat Come Home",
    artist: "LeBron James, nacuri",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/legoat-come-home.jpg",
    audioUrl: "/assets/audio/legoat-come-home.mp3",
  },
  {
    id: "79",
    title: "Sweet Bron of Mine",
    artist: "LeBron James, brennyzee23",
    album: "DragonBron Z",
    duration: 180,
    coverUrl: "/assets/album-covers/sweet-bron-of-mine.jpg",
    audioUrl: "/assets/audio/sweet-bron-of-mine.mp3",
  },
  {
    id: "80",
    title: "Bron Belongs with Me",
    artist: "LeBron James",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/bron-belongs-with-me.jpg",
    audioUrl: "/assets/audio/bron-belongs-with-me.mp3",
  },
  {
    id: "81",
    title: "LeBron N Nightmares",
    artist: "LeBron James, ulovesozo",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/lebron-n-nightmares.jpg",
    audioUrl: "/assets/audio/lebron-n-nightmares.mp3",
  },
  {
    id: "82",
    title: "If It Ain't LeBron",
    artist: "LeBron James, ulovesozo",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/if-it-aint-lebron.jpg",
    audioUrl: "/assets/audio/if-it-aint-lebron.mp3",
  },
  {
    id: "83",
    title: "Bron Ballad",
    artist: "LeBron James, ayo cj",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/bron-ballad.jpg",
    audioUrl: "/assets/audio/bron-ballad.mp3",
  },
  {
    id: "84",
    title: "My Glorious King",
    artist: "LeBron James",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/my-glorious-king.jpg",
    audioUrl: "/assets/audio/my-glorious-king.mp3",
  },
  {
    id: "85",
    title: "Heartbreak Bronversity",
    artist: "LeBron James",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/heartbreak-bronversity.jpg",
    audioUrl: "/assets/audio/heartbreak-bronversity.mp3",
  },
  {
    id: "86",
    title: "I Want You Bron",
    artist: "LeBron James",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/i-want-you-bron.jpg",
    audioUrl: "/assets/audio/i-want-you-bron.mp3",
  },
  {
    id: "87",
    title: "Candy James",
    artist: "LeBron James",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/candy-james.jpg",
    audioUrl: "/assets/audio/candy-james.mp3",
  },
  {
    id: "88",
    title: "Gotta Win It All",
    artist: "LeBron James",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/gotta-win-it-all.jpg",
    audioUrl: "/assets/audio/gotta-win-it-all.mp3",
  },
  {
    id: "89",
    title: "End of LeBron",
    artist: "LeBron James, ulovesozo",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/end-of-lebron.jpg",
    audioUrl: "/assets/audio/end-of-lebron.mp3",
  },
  {
    id: "90",
    title: "LEBRON TOUR Llif3",
    artist: "LeBron James, tav13n",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/lebron-tour-llif3.jpg",
    audioUrl: "/assets/audio/lebron-tour-llif3.mp3",
  },
  {
    id: "91",
    title: "Pouring Honey on my Goat",
    artist: "LeBron James, mqrskiii",
    album: "Bron no Basket",
    duration: 180,
    coverUrl: "/assets/album-covers/pouring-honey-on-my-goat.jpg",
    audioUrl: "/assets/audio/pouring-honey-on-my-goat.mp3",
  },
]

export const playlists: Playlist[] = [
  {
    id: "angry-lebron",
    title: "Angry LeBron",
    description: "When LeBron is not happy with the refs",
    coverUrl: "/assets/album-covers/angry-lebron.jpg",
    tracks: tracks.slice(0, 3),
  },
  {
    id: "sports-lebron",
    title: "Sports LeBron",
    description: "LeBron doing what he does best",
    coverUrl: "/assets/album-covers/sports-lebron.jpg",
    tracks: tracks.slice(2, 5),
  },
  {
    id: "meme-lebron",
    title: "Meme LeBron",
    description: "The most memeable moments",
    coverUrl: "/assets/album-covers/meme-lebron.jpg",
    tracks: tracks.slice(4, 7),
  },
  {
    id: "goat-lebron",
    title: "GOAT LeBron",
    description: "The greatest of all time",
    coverUrl: "/assets/album-covers/goat-lebron.jpg",
    tracks: [tracks[0], tracks[2], tracks[4], tracks[6]],
  },
  {
    id: "fantasy-lebron",
    title: "Fantasy LeBron",
    description: "LeBron in fantasy worlds and games",
    coverUrl: "/assets/album-covers/fantasy-lebron.jpg",
    tracks: [tracks[1], tracks[3], tracks[5]],
  },
  {
    id: "superhero-lebron",
    title: "Superhero LeBron",
    description: "LeBron with superpowers",
    coverUrl: "/assets/album-covers/superhero-lebron.jpg",
    tracks: [tracks[0], tracks[2], tracks[6]],
  },
  {
    id: "musical-lebron",
    title: "Musical LeBron",
    description: "LeBron showing off his musical talents",
    coverUrl: "/assets/album-covers/musical-lebron.jpg",
    tracks: [tracks[1], tracks[3], tracks[5]],
  },
  {
    id: "seasonal-lebron",
    title: "Seasonal LeBron",
    description: "LeBron for all seasons and holidays",
    coverUrl: "/assets/album-covers/seasonal-lebron.jpg",
    tracks: [tracks[0], tracks[4], tracks[6]],
  },
  {
    id: "collab-lebron",
    title: "Collaboration Tracks",
    description: "LeBron featuring other NBA stars",
    coverUrl: "/assets/album-covers/collab-lebron.jpg",
    tracks: [tracks[2], tracks[3], tracks[6]],
  },
  {
    id: "el-bron",
    title: "El Bron",
    description: "LeBron's international hits",
    coverUrl: "/assets/album-covers/el-bron.jpg",
    tracks: [tracks[1], tracks[4], tracks[5]],
  },
  {
    id: "lebronaissance",
    title: "LeBronaissance",
    description: "LeBron's musical renaissance featuring his greatest parody hits",
    coverUrl: "/assets/album-covers/lebronaissance.jpg",
    tracks: [tracks[0], ...tracks.filter((track) => track.album === "LeBronaissance" && track.id !== "0")],
  },
  {
    id: "like-that-remix",
    title: "Like That (Remix)",
    description: "Kyrie and Kawhi's response to the original Like That",
    coverUrl: "/assets/album-covers/like-that-remix.jpg",
    tracks: [tracks.find((t) => t.id === "25")].filter(Boolean),
  },
  {
    id: "please-stay-lebron",
    title: "Please Stay LeBron",
    description: "Cleveland's heartfelt plea for LeBron to stay",
    coverUrl: "/assets/album-covers/please-stay-lebron.jpg",
    tracks: [tracks.find((t) => t.id === "26")].filter(Boolean),
  },
  {
    id: "nokia",
    title: "NOKIA",
    description: "SGA and Michael Jordan's collaboration",
    coverUrl: "/assets/album-covers/nokia.jpg",
    tracks: [tracks.find((t) => t.id === "27")].filter(Boolean),
  },
  {
    id: "we-did-it",
    title: "We Did It",
    description: "Jayson and Deuce Tatum's celebration track",
    coverUrl: "/assets/album-covers/we-did-it.jpg",
    tracks: [tracks.find((t) => t.id === "28")].filter(Boolean),
  },
  {
    id: "washed-anthem",
    title: "Washed Anthem",
    description: "Podcast P's anthem about his fall from grace",
    coverUrl: "/assets/album-covers/washed-anthem.jpg",
    tracks: [
      tracks.find((t) => t.id === "30"),
      tracks.find((t) => t.id === "31"),
      tracks.find((t) => t.id === "29"),
    ].filter(Boolean),
  },
  {
    id: "bron-and-jerry",
    title: "Bron and Jerry",
    description: "LeBron's latest album featuring his most personal and reflective tracks yet",
    coverUrl: "/assets/album-covers/bron-and-jerry.jpg",
    tracks: tracks.filter((track) => track.album === "Bron and Jerry"),
  },
  {
    id: "bronfoolery",
    title: "Bronfoolery",
    description: "LeBron's most playful and humorous tracks showcasing his lighter side",
    coverUrl: "/assets/album-covers/bronfoolery.jpg",
    tracks: tracks.filter((track) => track.album === "Bronfoolery"),
  },
  {
    id: "raymone",
    title: "Raymone",
    description: "LeBron's introspective solo single exploring his middle name and personal identity beyond basketball",
    coverUrl: "/assets/album-covers/raymone.jpg",
    tracks: [tracks.find((t) => t.album === "Raymone")].filter(Boolean),
  },
  {
    id: "bron",
    title: "BRON",
    description:
      "LeBron's raw and emotional album created after the historic 2016 NBA Finals comeback, inspired by Kendrick Lamar's DAMN. This deeply personal project captures the intensity of overcoming a 3-1 deficit against the 73-win Warriors and bringing Cleveland its first championship in 52 years.",
    coverUrl: "/assets/album-covers/bron.jpg",
    tracks: tracks.filter((track) => track.album === "BRON"),
  },
  {
    id: "slow-dancing-with-lebron",
    title: "Slow Dancing with LeBron",
    description:
      "A soulful ballad showcasing LeBron's softer side. This intimate single reveals the emotional depth behind the basketball legend, with smooth vocals and heartfelt lyrics that connect with listeners on a personal level.",
    coverUrl: "/assets/album-covers/slow-dancing-with-lebron.jpg",
    tracks: [tracks.find((t) => t.album === "Slow Dancing with LeBron")].filter(Boolean),
  },
  {
    id: "dragonbron-z",
    title: "DragonBron Z",
    description:
      "DragonBron Z is an explosive collection of high-energy tracks that capture LeBron's transformation into his most powerful form. Drawing inspiration from the legendary anime series, this album features intense beats and powerful vocals that showcase the King's ability to reach new levels when the pressure is highest. From 'Don't Leave Us Bron' to 'Sweet Bron of Mine,' each track represents a different power level in LeBron's basketball journey. Listen as he goes Super Saiyan on the court and in the booth!",
    coverUrl: "/assets/album-covers/dragonbron-z.jpg",
    tracks: tracks.filter((t) => t.album === "DragonBron Z"),
  },
  {
    id: "bron-no-basket",
    title: "Bron no Basket",
    description:
      "Bron no Basket ('The Basketball Which Bron Plays') delivers a melodic journey through LeBron's basketball philosophy, blending smooth R&B with anime-inspired production. This concept album tells the story of a basketball prodigy who discovers the true meaning of teamwork and perseverance. Featuring emotional ballads like 'Bron Belongs with Me' and hard-hitting anthems such as 'LEBRON TOUR Llif3,' this collection showcases LeBron's versatility as both an athlete and artist. The perfect soundtrack for those who understand that basketball isn't just a game—it's an art form.",
    coverUrl: "/assets/album-covers/bron-no-basket.jpg",
    tracks: tracks.filter((t) => t.album === "Bron no Basket"),
  },
]

export const videoEdits: VideoEdit[] = [
  {
    id: "1",
    title: "LeBron Career Highlights",
    description: "The best moments from LeBron's career.",
    videoUrl: "/assets/videos/lebron-career-highlights.mp4",
    thumbnailUrl: "/assets/thumbnails/lebron-career-highlights.jpg",
    likes: 2500,
    views: 50000,
    duration: 360,
  },
  {
    id: "2",
    title: "LeBron's Most Spectacular Dunks",
    description: "A compilation of LeBron's best dunks.",
    videoUrl: "/assets/videos/lebron-dunks.mp4",
    thumbnailUrl: "/assets/thumbnails/lebron-dunks.jpg",
    likes: 1800,
    views: 35000,
    duration: 240,
  },
]

export const videoCategories: VideoCategory[] = [
  {
    id: "1",
    title: "Career Highlights",
    description: "The best moments from LeBron's career.",
    videos: videoEdits.slice(0, 5),
  },
  {
    id: "2",
    title: "Game Winning Moments",
    description: "LeBron's clutch game-winning shots and plays.",
    videos: videoEdits.slice(5, 10),
  },
]

export const trendingVideos = videoEdits.filter((v) =>
  ["lebron-tiktok-1", "lebron-tiktok-2", "lebron-tiktok-3"].includes(v.id),
)

export const lebronImages: LebronImage[] = [
  {
    id: 1,
    url: "/assets/images/lebron-1.jpg",
    title: "LeBron Dunking",
    description: "LeBron James performing a powerful dunk.",
    likes: 1245,
  },
  {
    id: 2,
    url: "/assets/images/lebron-2.jpg",
    title: "Championship Celebration",
    description: "LeBron celebrating his NBA championship win.",
    likes: 983,
  },
]

export const recentlyViewed: LebronImage[] = [
  {
    id: 1,
    url: "/assets/images/lebron-1.jpg",
    title: "LeBron Dunking",
    description: "LeBron James performing a powerful dunk.",
    likes: 1245,
  },
  {
    id: 2,
    url: "/assets/images/lebron-2.jpg",
    title: "Championship Celebration",
    description: "LeBron celebrating his NBA championship win.",
    likes: 983,
  },
]

export const topLebrons: LebronImage[] = [
  {
    id: 14,
    url: "/assets/images/lethor.jpg",
    title: "LeThor",
    description: "The God of Thunder with LeBron's face and Mjolnir",
    likes: 1023,
  },
  {
    id: 16,
    url: "/assets/images/lethanos.jpg",
    title: "LeThanos",
    description: "LeBron as the Mad Titan, ready to snap away half the competition",
    likes: 1105,
  },
]

