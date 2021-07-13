function makeBookmarksArray() {
    return [
        {
            id: 1,
            title: "Google",
            url: "https://www.google.com",
            description: "Description of bookmark",
            rating: 3,
        },
        {
            id: 2,
            title: "Twitter",
            url: "https://www.twitter.com",
            description: "Description of bookmark",
            rating: 4,
        },
        {
            id: 3,
            title: "Instagram",
            url: "https://www.instagram.com",
            description: "Description of bookmark",
            rating: 5,
        },
        {
            id: 4,
            title: "Youtube",
            url: "https://www.youtube.com",
            description: "Description of bookmark",
            rating: 2,
        }
    ];
  }
  
  module.exports = {
    makeBookmarksArray,
  }