export const SALON_DATA = {
  name: "Lemes Cabeleireiros",
  location: "Cianorte-PR",
  positioning: "estilo e precisão para todos em Cianorte, Paraná",
  experience: 13,
  googleRating: 5.0,
  googleReviews: 11,
  address: "Av. América, 1274 - Cianorte, PR, 87205-130",
  whatsapp: "5544988490220",
  whatsappMessage: "Olá! Gostaria de tirar algumas dúvidas sobre os serviços.",
  instagram: "@lemes_cabeleireiros",

  businessHours: {
    monday: { open: "08:00", close: "19:00" },
    tuesday: { open: "08:00", close: "19:00" },
    wednesday: { open: "08:00", close: "19:00" },
    thursday: { open: "08:00", close: "19:00" },
    friday: { open: "08:00", close: "20:00" },
    saturday: { open: "08:00", close: "17:00" },
    sunday: { open: null, close: null },
  },

  services: {
    male: [
      { id: 'm1', name: "Corte social", price: 27, description: "Corte clássico e elegante" },
      { id: 'm2', name: "Corte degradê", price: 27, description: "Fade moderno e preciso" },
      { id: 'm3', name: "Corte navalhado", price: 30, description: "Acabamento detalhado na navalha" },
      { id: 'm4', name: "Barba completa", price: 27, description: "Desenho e alinhamento total" },
      { id: 'm5', name: "Barba simples", price: 10, description: "Apenas manutenção rápida" },
      { id: 'm6', name: "Depilação na cera", price: 10, description: "Remoção facial precisa" },
    ],
    female: [
      { id: 'f1', name: "Progressiva", price: null, description: "Alinhamento perfeito e brilho intenso" },
      { id: 'f2', name: "Botox Capilar", price: null, description: "Redução de volume e hidratação profunda" },
      { id: 'f3', name: "Selagem", price: null, description: "Selamento de cutículas e brilho" },
      { id: 'f4', name: "Tintura", price: null, description: "Cobertura total e cores vibrantes" },
      { id: 'f5', name: "Corte Feminino", price: null, description: "Design moderno e personalizado" },
      { id: 'f6', name: "Hidratação", price: null, description: "Nutrição e maciez para os fios" },
      { id: 'f7', name: "Escova", price: null, description: "Acabamento profissional e volumoso" },
      { id: 'f8', name: "Sobrancelha", price: null, description: "Design e definição do olhar" },
    ],
  },

  products: {
    brand: "FOX for Men",
    items: ["Shampoo Anticaspa", "Pasta Premium"],
    visible: true,
  },

  testimonials: [
    { id: 1, name: "Placeholder", text: "Excelente atendimento!", rating: 5 },
  ],

  faq: [
    { q: "Como funciona o atendimento?", a: "Trabalhamos exclusivamente por ordem de chegada. Não marcamos horário." },
    { q: "Onde o salão está localizado?", a: "Estamos na Av. América, 1274, em Cianorte-PR." },
  ],
};
