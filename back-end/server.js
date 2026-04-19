import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
import http from 'http'
import { connect } from 'http2'
import { connectDB } from './config/db.js'
import dns from "node:dns/promises";

dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express()
const PORT = process.env.PORT || 5000
// Connect to MongoDB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})