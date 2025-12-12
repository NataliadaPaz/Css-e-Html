// ========================================
// DOM ELEMENTS
// ========================================
const header = document.getElementById("header")
const menuToggle = document.getElementById("menu-toggle")
const navMobile = document.getElementById("nav-mobile")
const menuIcon = menuToggle.querySelector(".menu-icon")
const closeIcon = menuToggle.querySelector(".close-icon")

// Carousel
const carousel = document.getElementById("projects-carousel")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const projectCards = document.querySelectorAll(".project-card")

// Modal
const modal = document.getElementById("project-modal")
const modalClose = document.getElementById("modal-close")
const modalBackdrop = modal.querySelector(".modal-backdrop")

// Donate Form
const donateForm = document.getElementById("donate-form")
const donateSuccess = document.getElementById("donate-success")
const amountOptions = document.querySelectorAll('input[name="amount"]')
const donateAmountDisplay = document.getElementById("donate-amount")

// ========================================
// PROJECTS DATA
// ========================================
const projectsData = {
  1: {
    name: "Programa de Formação Ecológica",
    audience: "Jovens periféricos de 14–20 anos",
    year: "2025",
    status: "Ativo",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80",
    description:
      "Um programa intensivo de formação que conecta jovens da periferia com práticas de educação ambiental, permacultura urbana e protagonismo comunitário.",
    location: "São Paulo, SP",
    duration: "6 meses",
    vacancies: 25,
    activities: ["Oficinas de permacultura", "Visitas técnicas", "Projeto final comunitário", "Mentoria individual"],
  },
  2: {
    name: "Trilha Urbana de Leitura do Território",
    audience: "Comunidades urbanas e escolas públicas",
    year: "2025",
    status: "Ativo",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    description:
      "Expedições educativas que revelam a biodiversidade escondida nas cidades. Mapeamos espécies nativas e criamos roteiros de ecoturismo urbano.",
    location: "Região Metropolitana de SP",
    duration: "3 meses",
    vacancies: 40,
    activities: ["Caminhadas guiadas", "Mapeamento participativo", "Identificação de espécies", "Criação de roteiros"],
  },
  3: {
    name: "Reflorestamento de Microáreas",
    audience: "Moradores e coletivos comunitários",
    year: "2024",
    status: "Concluído",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    description:
      "Iniciativa de recuperação ambiental em pequenas áreas urbanas degradadas. Plantamos mais de 500 mudas nativas.",
    location: "Zona Leste de SP",
    duration: "Concluído",
    vacancies: 0,
    activities: ["Plantio de mudas nativas", "Mutirões comunitários", "Monitoramento ambiental", "Educação ambiental"],
  },
  4: {
    name: "Hortas Comunitárias Periféricas",
    audience: "Famílias e associações de bairro",
    year: "2025",
    status: "Ativo",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    description:
      "Implantação de hortas comunitárias em terrenos ociosos. Promovemos segurança alimentar e fortalecimento comunitário.",
    location: "Diversas regiões de SP",
    duration: "Contínuo",
    vacancies: 60,
    activities: ["Implantação de hortas", "Capacitação em cultivo orgânico", "Feiras de troca", "Banco de sementes"],
  },
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// ========================================
// MOBILE MENU TOGGLE
// ========================================
menuToggle.addEventListener("click", () => {
  const isOpen = !navMobile.classList.contains("hidden")

  if (isOpen) {
    navMobile.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  } else {
    navMobile.classList.remove("hidden")
    menuIcon.classList.add("hidden")
    closeIcon.classList.remove("hidden")
  }
})

// Close mobile menu when clicking a link
navMobile.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMobile.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  })
})

// ========================================
// CAROUSEL
// ========================================
let scrollPosition = 0

prevBtn.addEventListener("click", () => {
  scrollPosition = Math.max(0, scrollPosition - 320)
  carousel.scrollTo({ left: scrollPosition, behavior: "smooth" })
})

nextBtn.addEventListener("click", () => {
  scrollPosition = scrollPosition + 320
  carousel.scrollTo({ left: scrollPosition, behavior: "smooth" })
})

carousel.addEventListener("scroll", () => {
  scrollPosition = carousel.scrollLeft
})

// ========================================
// PROJECT MODAL
// ========================================
let currentProject = null
let inscriptionType = null

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.dataset.project
    currentProject = projectsData[projectId]
    openModal()
  })
})

function openModal() {
  if (!currentProject) return

  // Reset form state
  inscriptionType = null
  document.getElementById("type-selection").classList.remove("hidden")
  document.getElementById("form-fields").classList.add("hidden")
  document.getElementById("form-success").classList.add("hidden")
  document.getElementById("completed-msg").classList.add("hidden")

  // Populate modal content
  document.getElementById("modal-img").src = currentProject.image
  document.getElementById("modal-img").alt = currentProject.name

  const statusEl = document.getElementById("modal-status")
  statusEl.textContent = currentProject.status
  statusEl.className = `project-status ${currentProject.status === "Ativo" ? "active" : "completed"}`

  document.getElementById("modal-year").textContent = currentProject.year
  document.getElementById("modal-title").textContent = currentProject.name
  document.getElementById("modal-audience").textContent = currentProject.audience
  document.getElementById("modal-location").textContent = currentProject.location
  document.getElementById("modal-duration").textContent = currentProject.duration
  document.getElementById("modal-vacancies").textContent =
    currentProject.vacancies > 0 ? `${currentProject.vacancies} disponíveis` : "Encerrado"
  document.getElementById("modal-description").textContent = currentProject.description

  // Activities
  const activitiesEl = document.getElementById("modal-activities")
  activitiesEl.innerHTML = ""
  currentProject.activities.forEach((activity) => {
    const span = document.createElement("span")
    span.textContent = activity
    activitiesEl.appendChild(span)
  })

  // Show/hide inscription form based on project status
  const inscriptionForm = document.getElementById("inscription-form")
  const completedMsg = document.getElementById("completed-msg")

  if (currentProject.status === "Ativo") {
    inscriptionForm.classList.remove("hidden")
    completedMsg.classList.add("hidden")
  } else {
    inscriptionForm.classList.add("hidden")
    completedMsg.classList.remove("hidden")
  }

  // Show modal
  modal.classList.remove("hidden")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modal.classList.add("hidden")
  document.body.style.overflow = ""
  currentProject = null
  inscriptionType = null
}

modalClose.addEventListener("click", closeModal)
modalBackdrop.addEventListener("click", closeModal)

// Inscription type selection
document.querySelectorAll(".type-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    inscriptionType = btn.dataset.type
    document.getElementById("type-selection").classList.add("hidden")
    document.getElementById("form-fields").classList.remove("hidden")

    const typeLabel = document.getElementById("form-type-label")
    typeLabel.textContent = inscriptionType === "voluntario" ? "Voluntário" : "Participante"

    const messageLabel = document.getElementById("form-message-label")
    messageLabel.textContent =
      inscriptionType === "voluntario" ? "Por que você quer ser voluntário?" : "Por que você quer participar?"
  })
})

// Change type button
document.getElementById("change-type").addEventListener("click", () => {
  document.getElementById("type-selection").classList.remove("hidden")
  document.getElementById("form-fields").classList.add("hidden")
  inscriptionType = null
})

// Form submission
document.getElementById("form-fields").addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("form-name").value
  const email = document.getElementById("form-email").value

  // Show success message
  document.getElementById("form-fields").classList.add("hidden")
  document.getElementById("form-success").classList.remove("hidden")
  document.getElementById("success-message").textContent =
    `Obrigado, ${name}! Entraremos em contato pelo e-mail ${email} em breve.`

  // Reset form
  document.getElementById("form-name").value = ""
  document.getElementById("form-email").value = ""
  document.getElementById("form-phone").value = ""
  document.getElementById("form-message").value = ""
})

// ========================================
// DONATE FORM
// ========================================
// Update donate amount display
amountOptions.forEach((option) => {
  option.addEventListener("change", () => {
    donateAmountDisplay.textContent = option.value
  })
})

// Donate form submission
donateForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("donor-name").value
  const amount = document.querySelector('input[name="amount"]:checked').value

  // Show success message
  donateForm.classList.add("hidden")
  donateSuccess.classList.remove("hidden")
  document.getElementById("donor-name-success").textContent = name
  document.getElementById("donor-amount-success").textContent = amount

  // Reset form after delay
  setTimeout(() => {
    donateForm.classList.remove("hidden")
    donateSuccess.classList.add("hidden")
    donateForm.reset()
    donateAmountDisplay.textContent = "100"
  }, 3000)
})

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = header.offsetHeight
      const targetPosition = target.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// ========================================
// KEYBOARD ACCESSIBILITY
// ========================================
document.addEventListener("keydown", (e) => {
  // Close modal on Escape
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal()
  }
})
