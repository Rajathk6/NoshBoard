# NoshBoard

NoshBoard is a full-stack web application built as part of the Euphotic Labs Pvt. Ltd. technical assessment. The application provides a dashboard for managing dishes, allowing users to publish or unpublish dishes while synchronizing updates across all connected clients in real time using Socket.IO.

## Features

* Display all available dishes
* Publish or unpublish dishes
* Real-time synchronization across multiple browser sessions
* RESTful API architecture
* PostgreSQL database integration using Prisma ORM
* Responsive React-based user interface

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Axios
* Socket.IO Client

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL
* Socket.IO

## Project Structure

```
NoshBoard/
│
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── routes/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   └── prisma.ts
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── component/
│   │   ├── pages/
│   │   ├── socket/
│   │   ├── types/
│   │   └── App.tsx
│   └── package.json
│
└── README.md
```

## Application Architecture

```
React Frontend
       │
       ▼
Axios HTTP Requests
       │
       ▼
Express REST API
       │
       ▼
Prisma ORM
       │
       ▼
PostgreSQL Database
```

### Real-Time Communication

```
React Client
      │
      ▼
Socket.IO Client
      │
      ▼
Socket.IO Server
      │
      ▼
Database Update
      │
      ▼
Broadcast Event
      │
      ▼
All Connected Clients
```

## REST API Endpoints

| Method | Endpoint              | Description               |
| ------ | --------------------- | ------------------------- |
| GET    | `/api/dishes`         | Retrieve all dishes       |
| GET    | `/api/dishes/:dishId` | Retrieve a dish by ID     |
| POST   | `/api/dishes`         | Create a new dish         |
| PATCH  | `/api/dishes/:dishId` | Update the publish status |
| DELETE | `/api/dishes/:dishId` | Delete a dish             |

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Rajathk6/NoshBoard
cd NoshBoard
```

## Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
DATABASE_URL="postgresql://postgres:<password>@localhost:5432/nosh_db?schema=public"
```

Run Prisma migrations.

```bash
npx prisma migrate dev
```

Start the backend server.

```bash
npm run dev
```

The backend will be available at:

```
http://localhost:5000
```

---

## Frontend Setup

Navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

## Real-Time Updates

The application uses Socket.IO to synchronize publish status updates across all connected clients.

Workflow:

1. User updates a dish.
2. Backend updates PostgreSQL.
3. Socket.IO broadcasts a `dish-updated` event.
4. Every connected client updates its local state automatically.
5. The dashboard refreshes instantly without requiring a page reload.


## Author

**Rajath Kumar**
