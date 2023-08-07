# Analysis Unlocker

This is a locally installed extension that allows you to retain your silly little icons and aesthetic messages when you run Game Review analysis in Chess.com—all without paying for a subscription.

## Installation

Download all files in the repo and store them in a folder. It doesn't really matter where, just make sure you are able to locate the folder.

Now, type the following into your Chrome search bar:
```bash
chrome://extensions/
```
This will open you on the site with all of your installed Chrome extensions.
On the site, go to the top right corner and toggle "developer mode" on. Then, in the top left hand side of the banner, under the big "Extensions" text, there should be a "load unpacked" button. Press it, and upload the folder with the extension. 

Pin the extension to your Extensions bar if you want - it will automatically adjust your Chess.com UI to include an "unlock analysis" button.


## Where to 'unlock' analysis

You will be able to unlock analysis from two pages: 

```python
# your home page
  chess.com/home

# your public-facing profile 
  chess.com/member/your-username
```
In both locations, the extension will install `unlock analysis` buttons, which can be found next to where your game history is traditionally displayed on both pages.


## How to 'unlock' analysis (read: *proper* usage)

Press the `unlock analysis` button to ONE GAME in either of the aforementioned pages.
 
**Only press it ONCE**, or else you may overload the server. 

The backend server will take 10-20 seconds to unlock your analysis. In the meantime, you can navigate away from the page, or do whatever you like. After around 20-30 seconds (depending on your internet speed), refresh your page, and click into the analysis of the game whose button you had pressed. 

The review should be unlocked. If in your profile page/homepage your game has accuracy percentages (as opposed to the text that says "review"), it means the game has been unlocked. If not, click into the game and see if you can access analysis. If it still is locked, wait 30 more seconds and refresh. If still not unlocked, try the "unlock analysis" button.

