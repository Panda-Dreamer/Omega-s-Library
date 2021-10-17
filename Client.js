 
//The custom formulas in order to use the library

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
