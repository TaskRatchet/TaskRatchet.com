# API v2

::: warning
This version of the API is unstable and undergoing active development. The
API and its associated documentation are likely to be incomplete and/or incorrect,
and may change without notice.
:::

## Authentication

The API uses the Authorization header for authentication. Provide your API v2 token as the value.

```bash
curl -X GET "https://api.taskratchet.com/api2/me" \
  -H "Authorization: ApiKey-v2 YOUR_API_TOKEN"
```

Please note that your existing v1 API token will not work with the v2 API. Currently you'll
need to email us at <support@taskratchet.com> to receive your v2 API token.

## Endpoints

Base URL: <https://api.taskratchet.com/api2/>

### `GET me`

| Response Field      | Type    | Description                                           |
| ------------------- | ------- | ----------------------------------------------------- |
| id                  | string  | The account's unique identifier                       |
| name                | string  | User's full name                                      |
| email               | string  | User's email address                                  |
| timezone            | string  | User's current account timezone                       |
| integrations        | object  | User's integration settings; currently only Beeminder |
| has_stripe_customer | boolean | Whether the user has a Stripe customer account        |

Example response:

```json
{
  "id": "Zu0qDVncIgSuUbQfr261",
  "name": "Jon Doe",
  "email": "jon@doe.com",
  "timezone": "America/New_York",
  "integrations": {
    "beeminder": {
      "user": "jondoe",
      "goal_new_tasks": "tr_tasks"
    }
  },
  "has_stripe_customer": true
}
```

### `DEL me`

Deletes the user's account. This action is irreversible.

### `GET me/tasks`

Returns an array of tasks. This route is paginated.

| Response Field | Type    | Description                                    |
| -------------- | ------- | ---------------------------------------------- |
| id             | string  | The task's unique identifier                   |
| task           | string  | The task description                           |
| due            | number  | Unix timestamp of the task's due date          |
| cents          | number  | The task's stakes in cents                     |
| complete       | boolean | Whether the task is complete                   |
| status         | string  | The task's status (pending, complete, expired) |

Example response:

```json
[
  {
    "id": "tdDPzh1GpZHAGZURVBf6",
    "task": "Take out the trash",
    "due": 1614556800,
    "cents": 100,
    "complete": false,
    "status": "pending"
  }
]
```

### `POST me/tasks`

Creates a new task. The request body should be a JSON object with the following fields:\

| Field           | Type   | Required | Description                           |
| --------------- | ------ | -------- | ------------------------------------- |
| task            | string | true     | The task description                  |
| due             | number | true     | Unix timestamp of the task's due date |
| cents           | number | true     | The task's stakes in cents            |
| recurrence      | object | false    | The task's recurrence settings        |
| recurrence.days | number | true     | Number of days between recurrences    |

On success, the response will be the created task object.

Example response:

```json
{
  "id": "tdDPzh1GpZHAGZURVBf6",
  "task": "Take out the trash",
  "due": 1614556800,
  "cents": 100,
  "complete": false,
  "status": "pending"
}
```
