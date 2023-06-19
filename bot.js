
import {PuppetIoscat} from 'wechaty-puppet-ioscat'
import {Wechaty}      from 'wechaty'

const puppet  = new PuppetIoscat()
const bot = new Wechaty({ puppet })

bot
  .on('scan', (qrcode) => {
    generate(qrcode, {
      small: true
    })
  })
  .on('message', msg => {
    console.log(`msg : ${msg}`)
  })
  .start()
