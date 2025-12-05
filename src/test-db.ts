import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'admin-2@test.com', // Changed email to avoid "Unique constraint" error
      firstName: 'Test',
      lastName: 'Admin',
      role: 'ADMIN', 
    },
  })
  console.log('Created user:', user)
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => { 
      console.error(e); 
      await prisma.$disconnect(); 
      process.exit(1); 
  })