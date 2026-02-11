# What is backend. 
Client -> Controller -> Services -> Repository -> Database. 

# What NestJs Actually is? 

- Opinionated backend framework. 
- Built on top of Express. 
- Uses Typescript heavilty. 
- Uses Dependency Injection system. 
- Modular Architecture. 

# Mostly we should understand 
. Modules 
. Controllers 
. Services
. Providers 
. DI 
(They cover 70% of the Nest)

# PHASE 1. 
When Front end calls fetch("/api/products")
FLOW : Browser → HTTP Request → Backend Server → Database → Response → Browser

- BACKEND RESPONSIBILITIES 
. Accept Request 
. Validate input 
. Apply business logic 
. Talk to database 
. Return response 
. Handle errors 
. Handle authentication 


2️⃣ What is REST? 
It's jsut rules for API structure. 

3️⃣ Backend Layering (VERY IMPORTANT)
Controller - Service - Repository - Database 

Controller 
. Handles HTTP Request 
. Extracts Pramas/body
. Calls Service 

Service
. Contains business logic 
. Talks to database layer. 

Repository 
. Talks directly to DB.

🔥 Most Important Concept – Dependency Injection (DI)
In frontend, we manually import and create objects. 

In Nest: 
We don't create dependencies. 
- Nest creates them for us. 

Example: 
constructor(private userService: UserService) {}

NestJs Building blocks: 
Module

Controller
Service
Provider
Decorators

