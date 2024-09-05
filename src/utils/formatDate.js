export function formatDate(data) {

  const initialDate = new Date(data)
  const day = String(initialDate.getDate()).padStart(2, '0')
  const month = String(initialDate.getMonth() + 1).padStart(2, '0')
  const year = String(initialDate.getFullYear()).slice(-2)
  const hours = String(initialDate.getHours()-3).padStart(2, '0')
  const min = String(initialDate.getMinutes()).padStart(2, '0')

  return `${day}/${month}/${year} às ${hours}:${min}`
}