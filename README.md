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
