function takeANumber(line, newPerson){
  line.push(newPerson)
  return "Welcome, "+newPerson+". You are number "+line.length+" in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0) return "There is nobody waiting to be served!"
  else {
    return "Currently serving "+katzDeliLine.shift()+"."
  }
}

function currentLine(line){
  if (line.length === 0) return ""
  let result = "The line is currently: "
  for 
}