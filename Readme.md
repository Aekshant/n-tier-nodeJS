

Folder Structure
src/
│── app/
│   ├── usecases/          # Business logic layer (Service Layer)
│── config/                # Configuration files
│── dependencyinjector/    # Dependency injection container
│── domain/
│   ├── dao/               # Data Access Objects (Interfaces)
│── httpServer/
│   ├── handler/           # Controllers
│   ├── routers/           # Routes
│── infra/
│   ├── mysqlRepo/         # Concrete repository implementation
│── index.js               # Application entry point
│── server.js              # Express server



ENV Example
NODE_ENV=dev
#DB
MONGO_URI=mongodb://localhost:27017/demo