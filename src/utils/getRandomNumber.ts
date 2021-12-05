export default function getRandomNumber(max = 0) {
  return max > 0 ? Math.floor(Math.random() * max) : max
}