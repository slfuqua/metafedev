const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

// Destructure the author, title, and timePosted properties from the review object
// const author = review.author;
// const title = review.title;
// const timePosted = review.timePosted;
const {title, author, timePosted} = review;

console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);
