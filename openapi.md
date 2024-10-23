---
title: TaskRatchet API v2 v2.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="taskratchet-api-v2">TaskRatchet API v2 v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API and its associated documentation are likely to be incomplete and/or incorrect,
and may change without notice.

Base URLs:

* <a href="https://api.taskratchet.com/api2/">https://api.taskratchet.com/api2/</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **Authorization**, in: header. Provide your API v2 token as the value, prefixed with "ApiKey-v2 ". Note that your API v1 token will not work with API v2.

<h1 id="taskratchet-api-v2-default">Default</h1>

## Get account details

> Code samples

```shell
# You can also use wget
curl -X GET https://api.taskratchet.com/api2/me \
  -H 'Accept: application/json' \
  -H 'Authorization: ApiKey-v2 YOUR_API_KEY'

```

```http
GET https://api.taskratchet.com/api2/me HTTP/1.1
Host: api.taskratchet.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'ApiKey-v2 YOUR_API_KEY'
};

fetch('https://api.taskratchet.com/api2/me',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'ApiKey-v2 YOUR_API_KEY'
}

result = RestClient.get 'https://api.taskratchet.com/api2/me',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'ApiKey-v2 YOUR_API_KEY'
}

r = requests.get('https://api.taskratchet.com/api2/me', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'ApiKey-v2 YOUR_API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.taskratchet.com/api2/me', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.taskratchet.com/api2/me");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"ApiKey-v2 YOUR_API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.taskratchet.com/api2/me", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /me`

> Example responses

> 200 Response

```json
{
  "id": "Zu0qDVncIgSuUbQfr261",
  "name": "Jon Doe",
  "email": "jon@example.com",
  "timezone": "America/New_York",
  "integrations": {
    "beeminder": {
      "user": "string",
      "goal_new_tasks": "string"
    }
  },
  "has_stripe_customer": true
}
```

<h3 id="get-account-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get-account-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|false|none|The account's unique identifier|
|» name|string|false|none|User's full name|
|» email|string|false|none|User's email address|
|» timezone|string|false|none|User's current account timezone|
|» integrations|object|false|none|User's integration settings; currently only Beeminder|
|»» beeminder|object|false|none|none|
|»»» user|string|false|none|Beeminder username|
|»»» goal_new_tasks|string|false|none|Beeminder goal slug for new tasks|
|» has_stripe_customer|boolean|false|none|Whether the user has a Stripe customer account|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete account

> Code samples

```shell
# You can also use wget
curl -X DELETE https://api.taskratchet.com/api2/me \
  -H 'Authorization: ApiKey-v2 YOUR_API_KEY'

```

```http
DELETE https://api.taskratchet.com/api2/me HTTP/1.1
Host: api.taskratchet.com

```

```javascript

const headers = {
  'Authorization':'ApiKey-v2 YOUR_API_KEY'
};

fetch('https://api.taskratchet.com/api2/me',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'ApiKey-v2 YOUR_API_KEY'
}

result = RestClient.delete 'https://api.taskratchet.com/api2/me',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'ApiKey-v2 YOUR_API_KEY'
}

r = requests.delete('https://api.taskratchet.com/api2/me', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'ApiKey-v2 YOUR_API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://api.taskratchet.com/api2/me', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.taskratchet.com/api2/me");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"ApiKey-v2 YOUR_API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://api.taskratchet.com/api2/me", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /me`

Delete your account and all associated data. This action is irreversible.

<h3 id="delete-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Account deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns an array of tasks. This route is paginated.

> Code samples

```shell
# You can also use wget
curl -X GET https://api.taskratchet.com/api2/me/tasks \
  -H 'Accept: application/json' \
  -H 'Authorization: ApiKey-v2 YOUR_API_KEY'

```

```http
GET https://api.taskratchet.com/api2/me/tasks HTTP/1.1
Host: api.taskratchet.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'ApiKey-v2 YOUR_API_KEY'
};

fetch('https://api.taskratchet.com/api2/me/tasks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'ApiKey-v2 YOUR_API_KEY'
}

result = RestClient.get 'https://api.taskratchet.com/api2/me/tasks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'ApiKey-v2 YOUR_API_KEY'
}

r = requests.get('https://api.taskratchet.com/api2/me/tasks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'ApiKey-v2 YOUR_API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.taskratchet.com/api2/me/tasks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.taskratchet.com/api2/me/tasks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"ApiKey-v2 YOUR_API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.taskratchet.com/api2/me/tasks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /me/tasks`

> Example responses

> 200 Response

```json
[
  {
    "id": "tdDPzh1GpZHAGZURVBf6",
    "task": "Buy milk",
    "due": 1614556800,
    "cents": 0,
    "complete": false,
    "status": "pending"
  }
]
```

<h3 id="returns-an-array-of-tasks.-this-route-is-paginated.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="returns-an-array-of-tasks.-this-route-is-paginated.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|false|none|The task's unique identifier|
|» task|string|false|none|The task's description|
|» due|number|false|none|Unix timestamp of the task's due date|
|» cents|number|false|none|The task's stakes in cents|
|» complete|boolean|false|none|Whether the task has been completed|
|» status|string|false|none|The task's status (pending, complete, expired)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a new task

> Code samples

```shell
# You can also use wget
curl -X POST https://api.taskratchet.com/api2/me/tasks \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: ApiKey-v2 YOUR_API_KEY'

```

```http
POST https://api.taskratchet.com/api2/me/tasks HTTP/1.1
Host: api.taskratchet.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "task": "Buy milk",
  "due": 1614556800,
  "cents": 100
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'ApiKey-v2 YOUR_API_KEY'
};

fetch('https://api.taskratchet.com/api2/me/tasks',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'ApiKey-v2 YOUR_API_KEY'
}

result = RestClient.post 'https://api.taskratchet.com/api2/me/tasks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'ApiKey-v2 YOUR_API_KEY'
}

r = requests.post('https://api.taskratchet.com/api2/me/tasks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'ApiKey-v2 YOUR_API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://api.taskratchet.com/api2/me/tasks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.taskratchet.com/api2/me/tasks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"ApiKey-v2 YOUR_API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://api.taskratchet.com/api2/me/tasks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /me/tasks`

> Body parameter

```json
{
  "task": "Buy milk",
  "due": 1614556800,
  "cents": 100
}
```

<h3 id="create-a-new-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» task|body|string|false|The task's description|
|» due|body|number|false|Unix timestamp of the task's due date|
|» cents|body|number|false|The task's stakes in cents|

> Example responses

> 201 Response

```json
{
  "id": "tdDPzh1GpZHAGZURVBf6",
  "task": "Buy milk",
  "due": 1614556800,
  "cents": 0,
  "complete": false,
  "status": "pending"
}
```

<h3 id="create-a-new-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Task created|Inline|

<h3 id="create-a-new-task-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|false|none|The task's unique identifier|
|» task|string|false|none|The task's description|
|» due|number|false|none|Unix timestamp of the task's due date|
|» cents|number|false|none|The task's stakes in cents|
|» complete|boolean|false|none|Whether the task has been completed|
|» status|string|false|none|The task's status (pending, complete, expired)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

