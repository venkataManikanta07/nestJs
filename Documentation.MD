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
- constructor(private userService: UserService) {}
. Nest is creating an instance of UserService and passing it into this class automatically.  

- if this was plane js 
const userService = new UserService();
const controller = new UsersController(userService);

- but in nest: 
constructor(private userService: UserService) {}

Nest does:

. Creates UserService
. Stores it in its internal container
. Injects it wherever required
. This is Dependency Injection.

NestJs Building blocks: 
Module

Controller
Service
Provider
Decorators

🧩 What Is a Module?
UsersModule
ProductsModule
AuthModule

# CONTROLLER: 
Handles HTTP requests:

- @Controller('products')
export class ProductsController {

  @Get()
  findAll() {
    return "All products";
  }
}

. @Controller() - defines route prefix 
. @Get() - handles GET request


# What is Service? 

. @Injectable()
export class ProductsService {
  findAll() {
    return [];
  }
}

- Why @Injectable()?
Because Nest needs to inject it somewhere.

# Provider? 
Anything that can be injected. 
- services 
- repositories
- custom classes 

Provider = Injectable Class. 

HOW NEST BOOTS: 
. main.ts creates app
. appModule loads
. AppModule loads other modules 
. Nest builds dependency graph
. App starts listening

In Nest:
Service itself is a Provider

Controller
   ↓
Service (business logic)
   ↓
Repository (database logic)


# DATABASE LAYER - TYPE ORM VS PRISMA 

- TYPE ORM 
    . Entity based 
    . Decorator based 
    . Active redord / daa mapper 

Example: 

# @Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}


# PRISMA is different 
- Instead of decorators, you define schema in. 
    . schema.prisma 

- model Product {
  id    Int     @id @default(autoincrement())
  name  String
}

🧠 ORM Concept (Critical)
ORM = Object Relational Mapper 

Database Table → TypeScript Class
Row → Object


- instead of writing SQL: we do repository.find(); 

