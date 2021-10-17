//░█████╗░███╗░░░███╗███████╗░██████╗░░█████╗░███████╗███████╗░█████╗░███████╗██████╗░
//██╔══██╗████╗░████║██╔════╝██╔════╝░██╔══██╗╚════██║╚════██║██╔══██╗╚════██║╚════██╗
//██║░░██║██╔████╔██║█████╗░░██║░░██╗░███████║░░░░██╔╝░░░░██╔╝██║░░██║░░░░██╔╝░█████╔╝
//██║░░██║██║╚██╔╝██║██╔══╝░░██║░░╚██╗██╔══██║░░░██╔╝░░░░██╔╝░██║░░██║░░░██╔╝░░╚═══██╗
//╚█████╔╝██║░╚═╝░██║███████╗╚██████╔╝██║░░██║░░██╔╝░░░░██╔╝░░╚█████╔╝░░██╔╝░░██████╔╝
//░╚════╝░╚═╝░░░░░╚═╝╚══════╝░╚═════╝░╚═╝░░╚═╝░░╚═╝░░░░░╚═╝░░░░╚════╝░░░╚═╝░░░╚═════╝░

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------


/**
 * The Omega's library custom formulas
 * @return {Object} The customFormulas Object.
 */
function customFunctions() {
  /**
   *Get a user status from id
   * @param {any} input Id user.
   * @return status..
   * @customfunction
   */
  function STATUS(ids) {
       ids =  String(ids).split(",")
    if (ids[0] == null) {
      ids = [ids];
    }
    i = 0;
    ra = [];
    ids.forEach((user) => {
      var options = {
        method: "get",
      };
      url = "https://api.roblox.com/users/" + user + "/onlinestatus/";
      data = UrlFetchApp.fetch(url, options);
      var pdata2 = JSON.parse(data.getContentText());
      status = pdata2.IsOnline;
      ra[i] = status;
      i = i + 1;
    });
    return ra;
  }

  //------------------------------------------------
  /**
   *Show credits for this Library.
   *
   * @return Credits..
   * @customfunction
   */
  function CREDITS() {
    return "Library made by Omega77073";
  }
  //------------------------------------------------

  

  /**
   * Get roblox avatar.
   * @param {any} input Id user.
   * @return The image of the user's avatar.
   * @customfunction
   */
  function AVATAR(ids) {
   ids =  String(ids).split(",")
    if (ids[0] == null) {
      ids = [ids];
    }
    i = 0;
    ra = [];
    ids.forEach((user) => {
      url =
        "https://www.roblox.com/headshot-thumbnail/image?userId=" +
        user +
        "&width=420&height=420&format=png";
      ra[i] = url;
      i = i + 1;
    });
    return ra;
  }
  //------------------------------------------------
  /**
   * Get roblox group rank.
   * @param {any} input Id of the user
   * @param {string} input Group id
   * @return The rank in group.
   * @customfunction
   */
  function RANKINGROUP(ids, group_id) {
       ids =  String(ids).split(",")
    if (ids[0] == null) {
      ids = [ids];
    }
    i = 0;
    ra = [];
    ids.forEach((user) => {
      let options = {
        method: "get",
      };
      url = "https://groups.roblox.com/v2/users/" + user + "/groups/roles";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      pdata.data.forEach((group) => {
        if (group.group.id == group_id) {
          ra[i] = group.role.name;
        } else {
          ra[i] = "Guest";
        }
      });
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get the average fill of a game's 100 first servers.
   * @param {any} The place id
   * @return The average fill.
   * @customfunction
   */
  function AVGSFILL(placeids) {
       placeids =  String(placeids).split(",")
    if (placeids[0] == null) {
      placeids = [placeids];
    }
    i = 0;
    ra = [];
    placeids.forEach((place) => {
      let options = {
        method: "get",
      };
      url =
        "https://games.roblox.com/v1/games/" +
        place +
        "/servers/Public?limit=100&sortOrder=Asc";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      let total = 0;
      let sum = 0;
      pdata.data.forEach((server) => {
        sum = sum + server.playing;
        total = total + 1;
      });
      let moy = sum / total;
      ra[i] = moy;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get the average ping of a game's 100 first servers.
   * @param {any} The place id
   * @return The average ping.
   * @customfunction
   */
  function AVGSPING(placeids) {
    placeids =  String(placeids).split(",")
    if (placeids[0] == null) {
      placeids = [placeids];
    }
    i = 0;
    ra = [];
    placeids.forEach((place) => {
      let options = {
        method: "get",
      };
      url =
        "https://games.roblox.com/v1/games/" +
        place +
        "/servers/Public?limit=100&sortOrder=Asc";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      let total = 0;
      let sum = 0;
      pdata.data.forEach((server) => {
        sum = sum + server.ping;
        total = total + 1;
      });
      let moy = sum / total;
      ra[i] = moy;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get the average fps of a game's 100 first servers.
   * @param {any} The place id
   * @return The average fps.
   * @customfunction
   */
  function AVGSFPS(placeids) {
    placeids =  String(placeids).split(",")
    if (placeids[0] == null) {
      placeids = [placeids];
    }
    i = 0;
    ra = [];
    placeids.forEach((place) => {
      let options = {
        method: "get",
      };
      url =
        "https://games.roblox.com/v1/games/" +
        place +
        "/servers/Public?limit=100&sortOrder=Asc";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      let total = 0;
      let sum = 0;
      pdata.data.forEach((server) => {
        sum = sum + server.fps;
        total = total + 1;
      });
      let moy = sum / total;
      ra[i] = moy;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get the UniverseId from a PlaceId
   * @param {any} The place id
   * @return The universe id.
   * @customfunction
   */
  function UNIVERSEID(placeids) {
    placeids =  String(placeids).split(",")
    if (placeids[0] == null) {
      placeids = [placeids];
    }
    i = 0;
    ra = [];
    placeids.forEach((place) => {
      let options = {
        method: "get",
      };
      url =
        "https://api.roblox.com/universes/get-universe-containing-place?placeid=" +
        place;
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      ra[i] = pdata.UniverseId;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get the number of favorites from a universe id
   * @param {any} The universe id
   * @return The number of favourites.
   * @customfunction
   */
  function FAVORITES(universeids) {
    universeids =  String(universeids).split(",")
    if (universeids[0] == null) {
      universeids = [universeids];
    }
    i = 0;
    ra = [];
    universeids.forEach((universe) => {
      let options = {
        method: "get",
      };
      url =
        "https://games.roblox.com/v1/games/" + universe + "/favorites/count";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      result = pdata.favoritesCount;
      ra[i] = result;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get the number of upvotes from a universe id
   * @param {any} The universe id
   * @return The number of upvotes.
   * @customfunction
   */
  function UPVOTES(universeids) {
     universeids =  String(universeids).split(",")
    if (universeids[0] == null) {
      universeids = [universeids];
    }
    i = 0;
    ra = [];
    universeids.forEach((universe) => {
      let options = {
        method: "get",
      };
      url = "https://games.roblox.com/v1/games/" + universe + "/votes";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      result = pdata.upVotes;
      ra[i] = result;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get the number of downvotes from a universe id
   * @param {any} The universe id
   * @return The number of downvotes.
   * @customfunction
   */
  function DOWNVOTES(universeids) {
     universeids =  String(universeids).split(",")
    if (universeids[0] == null) {
      universeids = [universeids];
    }
    i = 0;
    ra = [];
    universeids.forEach((universe) => {
      let options = {
        method: "get",
      };
      url = "https://games.roblox.com/v1/games/" + universe + "/votes";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      result = pdata.downVotes;
      ra[i] = result;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get the group owner from a group id
   * @param {any} The group id
   * @return The group owner.
   * @customfunction
   */
  function GROUPOWNER(groupids) {
     groupids =  String(groupids).split(",")
    if (groupids[0] == null) {
      groupids = [groupids];
    }
    i = 0;
    ra = [];
    groupids.forEach((group) => {
      let options = {
        method: "get",
      };
      url = "https://groups.roblox.com/v1/groups/" + group;
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      ra[i] = pdata.owner.userId;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get a group's member count from a group id
   * @param {any} The group id
   * @return The group's membercount.
   * @customfunction
   */
  function MEMBERCOUNT(groupids) {
    groupids =  String(groupids).split(",")
    if (groupids[0] == null) {
      groupids = [groupids];
    }
    i = 0;
    ra = [];
    groupids.forEach((group) => {
      let options = {
        method: "get",
      };
      url = "https://groups.roblox.com/v1/groups/" + group;
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      ra[i] = pdata.memberCount;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get if a group is open from a group id
   * @param {any} The group id
   * @return The group join status.
   * @customfunction
   */
  function ISOPEN(groupids) {
    groupids =  String(groupids).split(",")
    if (groupids[0] == null) {
      groupids = [groupids];
    }
    i = 0;
    ra = [];
    groupids.forEach((group) => {
      let options = {
        method: "get",
      };
      url = "https://groups.roblox.com/v1/groups/" + group;
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      ra[i] = pdata.publicEntryAllowed;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get a user's status
   * @param {any} The user id
   * @return The user status.
   * @customfunction
   */
  function USERSTATUS(userids) {
    userids =  String(userids).split(",")
    if (userids[0] == null) {
      userids = [userids];
    }
    i = 0;
    ra = [];
    userids.forEach((user) => {
      let options = {
        method: "get",
      };
      url = "https://users.roblox.com/v1/users/" + user + "/status";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      ra[i] = pdata.status;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get a user's pas usernames
   * @param {any} The user id
   * @return The user pas usernames.
   * @customfunction
   */
  function PASTUSERNAMES(userids) {
    userids =  String(userids).split(",")
    if (userids[0] == null) {
      userids = [userids];
    }
    i = 0;
    ra = [];
    userids.forEach((user) => {
      let options = {
        method: "get",
      };
      url =
        "https://users.roblox.com/v1/users/" +
        user +
        "/username-history?limit=100&sortOrder=Asc";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      let str = "";
      pdata.data.forEach((username) => {
        str = str + username.name + ",";
      });
      ra[i] = str;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get a user's first 100 costumes
   * @param {any} The user id
   * @return The first 100 costumes
   * @customfunction
   */
  function USERCOSTUMES(userids) {
    userids =  String(userids).split(",")
    if (userids[0] == null) {
      userids = [userids];
    }
    i = 0;
    ra = [];
    userids.forEach((user) => {
      let options = {
        method: "get",
      };
      url =
        "https://avatar.roblox.com/v1/users/" +
        user +
        "/outfits?itemsPerPage=100&page=1";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      let str = "";
      pdata.data.forEach((costumes) => {
        str = str + costumes.name + ",";
      });
      ra[i] = str;
      i = i + 1;
    });
    return ra;
  }

  /**
   * Get the asset ids from a user avatar
   * @param {any} The user id
   * @return The assets ids
   * @customfunction
   */
  function USERAVATAR(userids) {
    userids =  String(userids).split(",")
    if (userids[0] == null) {
      userids = [userids];
    }
    i = 0;
    ra = [];
    userids.forEach((user) => {
      let options = {
        method: "get",
      };
      url = "https://avatar.roblox.com/v1/users/" + user + "/currently-wearing";
      data = UrlFetchApp.fetch(url, options);
      var pdata = JSON.parse(data.getContentText());
      let str = "";
      pdata.assetIds.forEach((asset) => {
        str = str + asset + ",";
      });
      ra[i] = str;
      i = i = 1;
    });
    return ra;
  }

  function HELP(){
    return [
      ["Tag","Description","Arguments"],
      ["","",""],
      ["avatar","Get the image link to a user's avatar","=Omega(\"avatar\";UserId{CELL/RANGE/STRING/NUMBER})"],
      ["credits","Displays credits for the library","=Omega(\"credits\")"],
      ["online","Get if a user is online or not","=Omega(\"online\";UserId{CELL/RANGE/STRING/NUMBER})"],
      ["server_average_ping","Get the average ping of the first 100 servers of a game","=Omega(\"server_average_ping\";PlaceId{CELL/RANGE/STRING/NUMBER}"],
      ["server_average_fill","Get the average number of players of the first 100 servers of a game","=Omega(\"server_average_fill\";PlaceId{CELL/RANGE/STRING/NUMBER}"],
      ["server_average_fps","Get the average fps of the first 100 servers of a game","=Omega(\"server_average_fps\";PlaceId{CELL/RANGE/STRING/NUMBER}"],
       ["universeid","Get the universe id of a place","=Omega(\"universeid\";PlaceId{CELL/RANGE/STRING/NUMBER})"],
       ["favourites","Get the number of favourites of an universe","=Omega(\"favourites\";UniverseId{CELL/RANGE/STRING/NUMBER})"],
       ["upvotes","Get the number of up votes of an universe","=Omega(\"upvotes\";UniverseId{CELL/RANGE/STRING/NUMBER})"],
       ["downvotes","Get the number of down votes of an universe","=Omega(\"downvotes\";UniverseId{CELL/RANGE/STRING/NUMBER})"],
       ["rank_in_group","Get the rank of an user in a specified group","=Omega(\"rank_in_group\";UserId{CELL/RANGE/STRING/NUMBER};GroupId{CELL/STRING/NUMBER})"],
       ["group_owner","Get the group owner id for a group","=Omega(\"group_owner\";GroupId{CELL/RANGE/STRING/NUMBER})"],
       ["group_membercount","Get the member count of a group","=Omega(\"group_membercount\";GroupId{CELL/RANGE/STRING/NUMBER})"],
       ["group_isopen","Get if a group is open to public","=Omega(\"group_isopen\";GroupId{CELL/RANGE/STRING/NUMBER})"],
       ["user_status","Get a user status","=Omega(\"user_status\";UserId{CELL/RANGE/STRING/NUMBER})"],
       ["user_costumes","Get a list of costumes for a player","=Omega(\"user_costumes\";UserId{CELL/RANGE/STRING/NUMBER})"],
       ["user_avatar","Get a list assets for a player current avatar","=Omega(\"user_avatar\";UserId{CELL/RANGE/STRING/NUMBER})"],
       ["past_usernames","Get a list of past usernames for a player","=Omega(\"past_usernames\";UserId{CELL/RANGE/STRING/NUMBER})"],
      ["help","Shows the help table for the library","=Omega(\"help\")"],
    ]
  }

  let allFunctions = {
    avatar: AVATAR,
    credits: CREDITS,
    online: STATUS,
    server_average_ping: AVGSPING,
    server_average_fill: AVGSFILL,
    server_average_fps: AVGSFPS,
    universeid: UNIVERSEID,
    favourites: FAVORITES,
    upvotes: UPVOTES,
    downvotes: DOWNVOTES,
    rank_in_group: RANKINGROUP,
    group_owner: GROUPOWNER,
    group_membercount: MEMBERCOUNT,
    group_isopen: ISOPEN,
    user_status: USERSTATUS,
    user_costumes: USERCOSTUMES,
    user_avatar: USERAVATAR,
    past_usernames: PASTUSERNAMES,
    help:HELP,

  };

  /**
   * @param {string} functionName
   * @param {any[]} params
   */
  let getFunction = (functionName, params) => {
    // Check if the function name exists, if not return some help information
    if (!allFunctions[functionName]) {
      let list = "";
      Object.keys(allFunctions).forEach((f) => {
        list = list + f + ", ";
      });
      if (functionName != "") {
        return `Function not found, the list of functions for this version is: \n ${list}`;
      } else {
        return `The list of functions for this version is: \n ${list}`;
      }
    }
    return allFunctions[functionName](params);
  };

  return Object.freeze({
    getFunction: getFunction,
  });
}
