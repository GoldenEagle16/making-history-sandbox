// This is where to import the individual plugins, i.e. this is the list of plugins you wish to add to the app toolmenu
// For sake of consistency, it is recommended to save the plugin component files in src/plugins; but of course you can save it anywhere you like and import it to this js file
import LegendPlugin from './plugins/LegendPlugin.js'; // Naming the plugins with Component is not required, it could have well been just Legend, given the source plugin file is named as such, having Plugin in the name is just due to personal preferences

// All imported plugins above should then be listed below
export {
    LegendPlugin,
};