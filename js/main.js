const link = document.querySelector('.link');
const elForm = document.querySelector('#form');
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const ism = elForm['user-name'].value
    const elnumber = elForm['user-number'].value
    const random = Math.random()
    let resul = Math.trunc(random * 10 + 1)
    if (elnumber > 10 || elnumber < 1) {
        h1.textContent = `${ism}: Siz noto'g'ri raqam kiritingiz!!! siz kiritgan raqam 1 va 10 oralig'idegi sonlar emas boshqa son kiriting va yutuq yutib oling 🎁`
    } else if (+elnumber === +resul) {
        h1.textContent = `${ism}: Siz o'yinda g'olib bo'ldingiz siz iPhone 14 pro Max soxibi bo'ldingiz 📱`
        h2.textContent = `Men o'ylagan son: ${resul} siz g'olib bo'ldingiz 🎉🎉🎉`
    }
    else {
        h1.textContent = `Siz yutqazdingiz 😢 ya'na urinib ko'ring`
        h2.textContent = `Men o'ylagan son: ${resul} 👨‍💻 => boshqa urinib ko'ring 🔃`
    }
    // elForm.remove()
})