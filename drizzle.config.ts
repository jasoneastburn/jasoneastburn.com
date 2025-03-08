import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'
import './envConfig'

config({ path: '.env' })

export default defineConfig({
  schema: './database/schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
