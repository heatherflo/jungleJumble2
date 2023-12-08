import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumbles.js"
import { jumbleService } from "../services/JumblesService.js"


function _drawJumbles() {
  console.log('drawing Jumbles')
  const jumbles = AppState.jumbles
  let content = ""
  jumbles.forEach(jumble => content += jumble.ListTemplate)
  console.log(content)
  const elm = document.getElementById('jumbles-list')
  console.log(elm)
  elm.innerHTML = content
}

function _drawActiveJumble() {
  const activeJumble = AppState.activeJumble
  const content = activeJumble.ActiveJumbleTemplate
  // console.log(content)

  document.getElementById("active-jumble").innerHTML = content
}

export class JumblesController {
  constructor() {
    console.log("let's do this!")
    _drawJumbles()

  }


}



