// Definit um tipo para cada informação, principalmente em parâmetros de funções
interface User {
  birthYear: number 
  // birthYear?: number -> Torna o parâmetro obrigatório
}

function calculateAgeOfUser(user: User) {
  return new Date().getFullYear() - user.birthYear;
}

calculateAgeOfUser({
  birthYear: 2001
})
