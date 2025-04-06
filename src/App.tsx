// App.js
import React from 'react';
import Tweet from './Tweet';
import { tweetsData } from './data';

/* Do not write your tweet component here, write it in the tweet.tsx file */

function App() {

  let data = tweetsData

  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <div className="feed">
        {/* Here you will use the data from the 'tweetsData' variable and populate every tweet
          that you received from the 'backend' (data.ts).
         */}
        {
          data.map((x)=> <Tweet user={x.username} message={x.content} timestamp={x.timestamp} initLikes={x.likes}></Tweet>)
        }

      </div>
    </div>
  );
}

export default App;
