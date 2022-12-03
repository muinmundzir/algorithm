// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
let word = "EIGEN1456"

const reverseString = (string)=> {
  let numbers = []
  let strings = ""

  for(let i = string.length - 1; i >= 0; i--) {
    if(word[i] >= 0 || string[i] <= 9) {
      numbers = [string[i], ...numbers]
    } else {
      strings += string[i]
    }
  }

  return strings + numbers.join("")
}

reverseString(word)


