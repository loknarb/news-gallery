# News Gallery
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Last Commit](https://img.shields.io/github/last-commit/loknarb/news-gallery)
### check out the website - [Website URL](http://news-gallery.vercel.app/)
![news-gallery](https://user-images.githubusercontent.com/66973931/172474413-84d26dc5-b8c8-4e8c-9f18-644e59e3c167.png)

## Inspirations
This was originally an idea created by [daily.dev](https://app.daily.dev/), \
I decided it would be interesting to see how far I could get in the span of a **week time limit**.
## Project Goals
Going into this project I really wanted to apply, all my learned skills - React, Typescript, Zustand. \
I decided then that this would be a perfect challenge. I
managed to achieve the overall \
component functionalities, albeit not as polished. 
## Pitfalls/Work in Progress
This was a major project that required more than I originally thought.
- Users authentication and capability to create a populated article according to different users preferences.
- free news API from [thenewsapi](thenewsapi.com/)
  - This could have been improved, they have a nice free API, \
   but with my own web crawler I could possible fetch richer content and improve my articles
- DB required to store fetched articles
  - MongoDB was used, and I have no complaints, other than their npm package is over 700kb unzipped \
  (not sure if tree-shaking in package)
  \
  ![image](https://user-images.githubusercontent.com/66973931/172470761-af329452-35bd-4797-8964-254d093e0779.png)

- A lot of my code can be refactored, and or turned into flexible Components.
