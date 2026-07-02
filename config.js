/* ============================================================
HIIII QUINN HIIIII WELCOME TO YOUR WEBSITE CONFIG

   how does this work?

   all of your images are stored in a folder and all of the text is stored here
   drawing & painting are two different sections, indicated by [] square brackets
   
   hOW TO ADD A NEW ARTWORK:
   1. drop the image file into the "images/" folder
   2. add a new entry to the drawings or paintings section
   
   { title: "Lorem Ipsum",             size: "23 x 12", file: "quinn-drawing-1.jpeg" },

   make sure 
      a. this is kept in between the square brackets of the specific section
      b. the file name matches the file name in the folder section
      c. keep all "" '' and , -- these are likely sources of error 

   saving changes
     1.  remember to keep a backup of all text u write in case it doesn't save
      2. hit commit changes in the big green button 
      3. wait 5 mins
      6. and if the changes don't persist text me IMMEDIATELY 
   
   how to name files: use lowercase and dashes
   good: "quantle-bing-bong.jpg"  bad: "Quantle Stepbrothers Dove Kick.jpg"
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

  contact: `boom #Ya swag
  
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
