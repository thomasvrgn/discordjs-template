/*//////////////////////////////////////
          DISCORD BOT TEMPLATE
                  Main
//////////////////////////////////////*/

import Discord from 'discord.js'                                                        // Importing Discord.js package
import FS      from 'fs'                                                                // Importing FS package
import PATH    from 'path'                                                              // Importing PATH package

class Bot {

    constructor (options = {
        commands  : 'commands'  ,
        events    : 'events'    ,
        listeners : 'listeners' ,
    }) {

        this.options = options

    }

    static init () {

        FS.exists(PATH.resolve(PATH.join(__dirname, this.options.commands)), bool => {  // Commands loading
            if (!bool) return
        })

        FS.exists(PATH.resolve(PATH.join(__dirname, this.options.events)), bool => {    // Events loading
            if (!bool) return
        })
        
        FS.exists(PATH.resolve(PATH.join(__dirname, this.options.listeners)), bool => { // Listeners loading
            if (!bool) return
        })

    }

}