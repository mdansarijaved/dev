import "dotenv/config"; 

import { db } from "../server/db"; // Use your project's existing DB connection

async function main() {
  console.log("Creating Master Admin...");


  const user = await db.user.upsert({
    where: { email: "admin@crm.com" }, // Check if this email exists
    update: {}, // If yes, do nothing
    create: {   // If no, create this user
      id: "1", // Add a valid unique id value here
      email: "admin@crm.com",
      name: "Master Admin",
      role: "admin", 
      emailVerified: true,
    },
  });

  console.log("Admin User Created:", user);
  console.log("   Role:", user.role);
}

main()
  .catch((e) => {
    console.error(" Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    
  });