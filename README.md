# Omega Library
A google sheets library in order to use the roblox api with formulas


# Setup

Firstly, you need to install the library in your google sheet document: 

• Head to the app script section (Tools> Script Editor)

• Add the library by clicking the **+** symbol (Add Libraries) next to the Libraries Tab

• Paste this Library ID: ```1ZyLAdMULWdmXo2_jXcg-t9uLR1fnL75iIEEe9kMfFOC1uu6CgfZNgTwj```, select the latest version and press "Add"

• In Code.gs Paste this code and save:
```java
  /**
 * @OnlyCurrentDoc
 */

// create the customFunctions object
let customFunctions = OmegasLibrary.customFunctions();

/**
 * Use a fonction from Omega's Library
  * @param {string} function_name
  * @param {any} parameters
 * @return The function used
 * @customfunction
 */
let Omega = (function_name,...parameters) => {
  return customFunctions.getFunction(function_name,parameters);
}
```
You can now head back to the sheet and try to use ```=Omega("help")``` (might require a reload)


PS:
You may need to give permissions to the library, if you encounter an internal error while using ```=Omega("help")```, head back to the code editor, Press run and wait for the allow permissions screen to display.
The library is asking for "Connect to an external service" permissions as it needs it to contact the roblox API

# Methods
| Tag | Description |
| --- | --- |
| help | Shows the help table for the library|
| avatar | Get the image link to a user's avatar |
| credits | Displays credits for the library |
| online | Get if a user is online or not |
| server_average_ping | Get the average ping of the first 100 servers of a game |
| server_average_fill | Get the average number of players of the first 100 servers of a game |
| server_average_fps | Get the average fps of the first 100 servers of a game |
| universeid | Get the universe id of a place |
| favourites | Get the number of favourites of an universe |
| upvotes | Get the number of up votes of an universe |
| downvotes | Get the number of down votes of an universe |
| rank_in_group | Get the rank of an user in a specified group |
| group_owner | Get the group owner id for a group |
| group_membercount | Get the member count of a group |
| group_isopen | Get if a group is open to public |
| user_status | Get a user status |
| user_costumes | Get a list of costumes for a player|
| user_avatar | Get a list assets for a player current avatar |
| past_usernames | Get a list of past usernames for a player |
| userinfo | Get data on a roblox user |
| confifgure | Get a link to a universe configuration webpage |
| group_creations | Get a link to the specified group creation webpage |
| gamelink | Get a link to a game using the Id |
