/* ============================================================
HIIII QUINN HIIIII WELCOME TO YOUR WEBSITE CONFIG

the way this website works and you have total control 
   
   HOW TO ADD A NEW ARTWORK:
   1. Drop the image file into the "images/" folder
   2. Add a new entry to the drawings or paintings array below
   3. Save the file — that's it.
   
   IMAGE FILE NAMING: use lowercase, no spaces.
   Good: "red-vase-study.jpg"  Bad: "Red Vase Study.jpg"
   ============================================================ */

const SITE_CONFIG = {

  /* ---------- ARTIST INFO ---------- */
  artistName:  "Quinn Antle",
  birthYear:   "b. 2003",
  instagramUrl: "https://www.instagram.com/yourhandle", // or "" to hide the link

  /* ---------- CTA BUTTON ---------- */
  ctaText: "Request Pricing & Availability",
  ctaEmail: "quinn@example.com", // clicking the button opens an email to this address

  /* ---------- TEXT PAGES ---------- */
  cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. cv text
  
  2021-2025: BA in Goat Studies, Wheaton College`,

  bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. bio text. Quantle was born to a legendary goat named Kantle
  
  yeah u look like it`,

  contact: `boom #Ya
  
  vertical money spread`,

  /* ---------- DRAWINGS ----------
     title: shown below the image
     size:  shown below the title (e.g. "23 x 12")
     file:  filename inside the images/drawings/ folder  */
  drawings: [
    { title: "Lorem Ipsum",             size: "23 x 12", file: "quinn-drawing-1.jpeg" },
    { title: "Lorem Ipsum Sit",         size: "23 x 12", file: "quinn-drawing-2.jpeg" },
    { title: "Lorem Ipsum Dolor",       size: "23 x 12", file: "quinn-drawing-3.jpeg" },
    { title: "CRANK IT!",        size: "23 x 12", file: "quinn-drawing-4.jpeg" },
    { title: "Lorem Ipsum Consectetur", size: "23 x 12", file: "quinn-drawing-5.jpeg" },
    { title: "Lorem Ipsum Adipiscing",  size: "23 x 12", file: "quinn-drawing-6.jpeg" },
  ],

  /* ---------- PAINTINGS ----------
     Same structure as drawings above. */
  paintings: [
    { title: "Lorem Ipsum Sit Dolor Amet Consequitur", size: "23 x 12", file: "quinn-painting-1.jpeg" },
    { title: "Lorem Ipsum Sit Dolor Amet Consequitur", size: "23 x 12", file: "quinn-painting-2.jpeg" },
    { title: "Lorem Ipsum Sit Dolor",                  size: "23 x 12", file: "quinn-painting-3.jpeg" },
    { title: "Lorem Ipsum",                            size: "23 x 12", file: "quinn-painting-4.jpeg" },
    { title: "Lorem Ipsum Dolor Amet",                 size: "23 x 12", file: "quinn-painting-5.jpeg" },
  ],
};
