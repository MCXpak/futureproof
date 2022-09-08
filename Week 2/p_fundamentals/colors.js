const c = require("ansi-colors")

cList = [c.red, c.green, c.blue, c.magenta]
cBgList = [c.bgBlueBright, c.bgGreenBright, c.bgMagentaBright, c.bgRedBright]

const s = `According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different. - Hi, Barry. - Artie, growing a mustache? Looks good. - Hear about Frankie? - Yeah. - You going to the funeral? - No, I'm not going. Everybody knows, sting someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That's why we don't need vacations. Boy, quite a bit of pomp... under the circumstances. - Well, Adam, today we are men. - We are! - Bee-men. - Amen! Hallelujah! Students, faculty, distinguished bees, please welcome Dean Buzzwell. Welcome, New Hive Oity graduating class of... ...9:15. `


//console.log(c.bgBlueBright(c.red.bold.underline(`According to all known laws of aviation, there is no way a bee should be able to fly.`)))

// console.log(cList[3]("Hello"))

strLength = s.length

const seqText = () =>{
  for(let i = 0; i < strLength; i++){
    let j = i%4;
    process.stdout.write(cList[j](s.charAt(i)))
  }
}

const randText = () => {
  let count = 0;
  while(count < strLength){
    let num = Math.floor(Math.random() * 4)
    process.stdout.write(cList[num](cBgList[num](s.charAt(count))))
    count++
  }
}

seqText()

// randText()

// process.stdout.write(cList[3]("Hello"));

