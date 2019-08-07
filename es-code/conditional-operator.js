const myAge = 23
const showPage = () => {
  return 'Showing the page'
}
const showErrorPage = () => {
  return 'Showing the error page'
}
const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

// Challenge
const team = ['Tyler', 'Ben']
const teamSize = () => `Team size: ${team.length}`
const teamOverSize = () => 'Too many people on your team'
const teamMessage = team.length <= 4 ? teamSize() : teamOverSize()
console.log(teamMessage)