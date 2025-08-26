// بتعمل داتا وهمية للداتا بيز او بتسقي الداتا بيز
// import { faker } from '@faker-js/faker'
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// async function main() {
//   await prisma.todo.createMany({
//     data: Array.from({ length: 20 }, () => ({
//       title: faker.lorem.text(),
//       body: faker.lorem.paragraph(),
//       completed: true,
//       createdAt: faker.date.anytime(),
//     })),
//   })
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
