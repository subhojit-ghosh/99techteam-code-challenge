# Problem 5: Task Management API
This project is a Task Management API built with Express, TypeScript, Prisma (SQLite) and Zod for validation.

## Postman Collection

You can find the Postman collection for this API [here](https://documenter.getpostman.com/view/7985255/2sAYJ7fyzz).

## Setup

To set up the project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>/src/problem5
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Environment Variables

Adjust the values in the existing `.env` file as needed for your environment:

```
PORT=3000
DATABASE_URL="file:./dev.db"  # SQLite database
```

## Running the Code

To run the code and start the server, use the following command:

```sh
npm run dev
```

This will start the server on `http://localhost:3000`.

## Example Output

```sh
Server is running on port http://localhost:3000
```

This output indicates that the server is up and running.

## API Endpoints

### Get All Tasks
- **URL**: `/api/tasks`
- **Method**: `GET`
- **Query Parameters**: Optional filters like `status`, `priority`, `dueDate`, `assignedTo`, `tags`, `page`, `limit`, `isCompleted`, `search`.

### Get Task by ID
- **URL**: `/api/tasks/:id`
- **Method**: `GET`

### Create Task
- **URL**: `/api/tasks`
- **Method**: `POST`
- **Body**: 
    ```json
    {
      "title": "Task Title",
      "description": "Task Description",
      "status": "PENDING",
      "priority": "MEDIUM",
      "dueDate": "2023-12-31",
      "assignedTo": "User",
      "tags": "tag1,tag2"
    }
    ```

### Update Task
- **URL**: `/api/tasks/:id`
- **Method**: `PUT`
- **Body**: 
    ```json
    {
      "title": "Updated Task Title",
      "description": "Updated Task Description",
      "status": "IN_PROGRESS",
      "priority": "HIGH",
      "dueDate": "2023-12-31",
      "assignedTo": "User",
      "tags": "tag1,tag2"
    }
    ```

### Complete Task
- **URL**: `/api/tasks/:id/complete`
- **Method**: `PATCH`

### Delete Task
- **URL**: `/api/tasks/:id`
- **Method**: `DELETE`

