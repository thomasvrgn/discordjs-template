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

    init () {
        FS.exists(PATH.resolve(PATH.join(__dirname, this.options.commands)), bool => {  // Commands loading
            if (!bool) return
            FS.readdir(PATH.resolve(PATH.join(__dirname, this.options.commands)), (error, content) => {
                if (error) throw error
                content = content.filter(x => x.endsWith('.js'))
                                 .map(x => x = PATH.resolve(PATH.join(__dirname, this.options.commands, x)))

                for (const file of content) {
                    
                    console.log(file)

                }

            })
        })

        FS.exists(PATH.resolve(PATH.join(__dirname, this.options.events)), bool => {    // Events loading
            if (!bool) return
            FS.readdir(PATH.resolve(PATH.join(__dirname, this.options.events)), (error, content) => {
                if (error) throw error
                content = content.filter(x => x.endsWith('.js'))
                                 .map(x => x = PATH.resolve(PATH.join(__dirname, this.options.events, x)))

                for (const file of content) {
                    
                    console.log(file)

                }

            })
        })
        
        FS.exists(PATH.resolve(PATH.join(__dirname, this.options.listeners)), bool => { // Listeners loading
            if (!bool) return
            FS.readdir(PATH.resolve(PATH.join(__dirname, this.options.listeners)), (error, content) => {
                if (error) throw error
                content = content.filter(x => x.endsWith('.js'))
                                 .map(x => x = PATH.resolve(PATH.join(__dirname, this.options.listeners, x)))

                for (const file of content) {
                    
                    console.log(file)

                }

            })
        })

    }

}

new Bot().init()