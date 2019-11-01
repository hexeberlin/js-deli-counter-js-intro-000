function takeANumber(line, newPerson){
  line.push(newPerson)
  return "Welcome, "+newPerson+". You are number "+line.length+" in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0) return "There is nobody waiting to be served!"
  else {
    return katzDeliLine.unshift()
  }
}