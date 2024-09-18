const projects = [
  {
    name: "Sipsaver-webApp",
    header: "App showing all happy hours in NYC",
    link: "www.sipsaver.nyc",
    image: "sipsaver_logo_small.png",
    imageLarge: "sipsaver_logo_large.png",
    technology: ["react", "google maps api"],
    description:
      "Living in NYC, we noticed it was difficult to get a clear overview of happy hours happening nearby in real-time. After work, for instance, it would be great to quickly find spots offering happy hours close by, possibly even tailored to a specific drink preference.This led us to start building a database and developing a web app to solve this problem. \n Initially, I created the app using Python and Flask, as it was the programming language I was most familiar with at the time. However, after gaining more experience with JavaScript and React, I decided to rebuild the app using React. This shift allowed for more efficient development and dynamic results, thanks to the seamless integration of HTML, CSS, JavaScript, and React's component and state-driven architecture. \n The core functionality of the app is now in place. The next step is to develop it into a native mobile app for iOS and Android using React Native.Feel free to check out the app in production, and don't forget to follow Sipsaver on Instagram! :)",
  },
  {
    name: "Sipsaver-API",
    header: "Details about happy hours in New York city.",
    link: "www.api.sipsaver.nyc",
    image: "sipsaver-api_logo_small.png",
    imageLarge: "sipsaver-api_logo_large.png",
    technology: ["node.js", "express", "mongodb", "aws s3"],
    description:
      "The backend of the Sipsaver React app fetches data from a MongoDB database, which currently contains over 1,500 happy hour locations in NYC. At the moment, all locations are manually entered through the admin console of the Sipsaver app. We're exploring options for periodically scraping the web to automate this process. If you're interested in collaborating on this, feel free to reach out!. We’ve made a basic public API endpoint available with API key access, which you can integrate into your own app. Documentation is available via the provided link.",
  },
  {
    name: "summarizer",
    header: "Translates audio files to summarized text",
    link: "summarizer-1rsl.onrender.com/",
    image: "summarizer_logo_small.png",
    imageLarge: "summarizer_logo_large.png",
    technology: ["react", "node.js", "openai api"],
    description:
      "The idea for the app came after attending some board discussions where I was noting down the key points. A more accurate and efficient way would be to record the sessions and translate to text. Many solutions on the internet are either very limited or behind high amount subscription model, so I decided to create one.",
  },
  {
    name: "AI search",
    header: "Schemantic search on your internal documents",
    link: "aisearch-7a9n.onrender.com/",
    image: "aisearch_logo_small.png",
    imageLarge: "aisearch_logo_large.png",
    imageDescription: "aisearch_flow_chart.svg",
    technology: ["python", "flask", "javascript", "pwa"],
    description:
      "This software allows you to upload internal documents and ask questions based on those uploads. After testing several solutions, including off-the-shelf options like OpenAI's assistant with file upload, I decided to develop a custom solution. \n The challenge was that my use case involved multiple detailed documents covering similar information for different machine models, and the responses weren't accurate enough. With this custom solution, I have full control over document indexing and the similarity scoring process. \n I also developed an indexing program that processes all documents, generates vector embeddings, and calculates the most relevant answer based on the user's query. \n For testing purposes, I’ve created a demo user account with some sample documents related to Miele coffee machines. In a real-world scenario, additional documents and multiple chatbots can be added as needed.\n\n Feel free to try it out: \n\n Username: testuser@aisearch.com \n Password: aisearchtest \n\n Sequence diagram",
  },
];

export default projects;
