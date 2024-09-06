import "./style.css"

const openBtn = document.querySelector('#open-btn')
const modal = document.querySelector('#modal') as HTMLDialogElement
const modalForm = document.querySelector('#modal-form')

if (modal && openBtn) {
  openBtn.addEventListener('click', () => {
    modal.showModal()
  })
}

if (modal) {
  modal.addEventListener('close', () => {
    modal.classList.add('modal-closing')
    
    setTimeout(()=> {
      modal.classList.remove('modal-closing')
    }, 500)
  })
}

if (modal && modalForm) {
  modal.addEventListener('click', () => {
    modal.close()
  })

  modalForm.addEventListener('click', (event) => {
    event.stopPropagation()
  })
}