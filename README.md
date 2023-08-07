# Analysis Unlocker (v0.2.4)

This is a locally installed (unpacked) Google Chrome extension, built on Manifest V3, that allows you to access subscription-based Game Review analysis in Chess.com—all without having to pay.

## Installation

Download all files in the repo and store them in a folder. It doesn't really matter where, just make sure you are able to locate the folder and that all the files are together.

Now, type the following into your Chrome search bar:
```bash
chrome://extensions/
```
This will open you on the site with all of your installed Chrome extensions.

On the site, go to the top right corner and toggle `developer mode` on. Then, in the top left hand side of the banner, under the big "Extensions" text, there should be a `load unpacked` button. Press it, and upload the folder with the extension. 

Pin the extension to your Extensions bar if you want—it will automatically adjust your Chess.com UI to include an `unlock analysis` button.


## Where to 'unlock' analysis

You will be able to unlock analysis from two pages: 

```python
# your home page
  chess.com/home

# your public-facing profile 
  chess.com/member/your-username
```
In both locations, the extension will install `unlock analysis` buttons, each corresponding to one game that you played, and displayed adjacent to where your games are traditionally displayed (on both pages).


## How to 'unlock' analysis (read: *proper* usage)

Press the `unlock analysis` button next to **<ins>one game</ins>** in either of the aforementioned pages.
 
**<ins>Only press it ONCE</ins>**, or else you may overload the server. 

The backend server will take 10-20 seconds to unlock your analysis. In the meantime, you can navigate away from the page, or do whatever you like. After 20-30 seconds (depending on your internet speed), refresh your page, and click into the analysis of the game whose button you had pressed. 

The review should be unlocked. If in your profile page/homepage your game has accuracy percentages (as opposed to the text that says `review`), it means the game has been unlocked. If not, click into the game and see if you can access analysis. If it still is locked, wait 30 more seconds and refresh. If still not unlocked, try the "unlock analysis" button.

## Known limitations and errors

The amount of time it takes for the extension to add the `unlock analysis` buttons and for the server to unlock your game is largely a function of your internet speed and region, as well as the number of requests the server is handling.

The extension is configured to strike a balance between efficiency and redundancy: enough time for the supermajority of requests to complete without fail, but not too slow as to take laborious amounts of time to unlock.

This is to say, there are multiple cases where you may be more likely to—and/or more reliably able to—produce errors, depending on improper usage of the extension:

### 'Unlock Analysis' buttons missing

If your internet connection is not as strong, your game log on Chess.com may take too long to load, and, consequently, the button-injection from the extension (1 second after page load) will miss the targeted log. 

This is particularly common the further down on a page you are scrolled, as Chess.com renders elements top-to-bottom and, for some reason, is far slower to render the bottom elements (i.e. your game log). So, if you refresh your page from an existing position that is near the bottom, the buttons may not render.

This is to say, when you refresh your page to see if the analysis has cleared, first scroll to the *top* of the page and then refresh, which should avoid this problem.

### Analysis not unlocking

If you have clicked on a button once, **do NOT click it again**! The server will already be completing your first request, and doing it again will slow down both the completion of your first request and your second. DO NOT do this!

