export function createStars(nota) {
  let stars = []
  for (let i = 0; i < 5; i++) {
    if (i + 1 <= nota) {
      stars = [...stars, true]
    } else {
      stars = [...stars, false]
    }
  }

  return stars
}