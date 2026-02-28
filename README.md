# Bmovie

Bmovie is a full-stack movie rating and review application

## Tech Stack

The project architecture is divided into a REST API and a responsive web client

### Frontend
* **React.js with TypeScript**
* **React Router Dom** for frontend routing, separating the main catalog from individual movie rating pages
* **Axios** HTTP client used to consume the backend API
* **Bootstrap** CSS framework to ensure a responsive interface across different devices

### Backend
* **Java 21 & Spring Boot (3.3.4)** framework for rapid API setup and configuration
* **Spring Data JPA** used for ORM, streamlining complex queries and data persistence
* **Spring Security** for CORS configuration and route protection
* **Lombok** to reduce boilerplate (getters, setters, constructors)

### Databases
* **H2 Database** to optimize testing
* **PostgreSQL:** DB for prod data

## Endpoints

* `GET /movies`
  * Returns a paginated list of all available movies in the catalog.
* `GET /movies/{id}`
  * Returns specific details for a movie based on its identifier.
* `PUT /scores`
  * Registers or updates a user's rating (identified by email) for a specific movie.

## How to Run Locally

### Prerequisites
* Node.js and npm/yarn installed
* Java 21 (JDK) installed
* Maven

### Backend
1. Install dependencies and start app: `./mvnw spring-boot:run`
2. API available at `http://localhost:8080`

### Frontend
1. Install project dependencies: `npm install`
2. `npm start`
3. APP at `http://localhost:3000`

## Screenshots

<details>
  <summary><b>UI Images</b></summary><br>

  **Landing Page (Catalog)**
  ![Landing Page](https://github.com/03lucas/Bmovie/blob/main/showcases/LP.png?raw=true)

  **Rating Page**
  ![Rating Page](https://github.com/03lucas/Bmovie/blob/main/showcases/SP.png?raw=true)

</details>
