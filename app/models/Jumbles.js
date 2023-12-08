import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"



export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get ListTemplate() {
    return `<div class="d-flex justify-content-between">
    <span>
      <button class=" btn btn-info">start</button>
    </span>
    <span>${this.name}</span>
    <span>${this.name}</span>
    <span>${this.name}</span>
  </div>`
  }

  // get ActiveJumbleTemplate() {
  //   return ``
  // }

}