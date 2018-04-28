# Vercipe
Version control based recipe for Spring 18 ITWS 4500 course. 
All project materials such as the Proposal and Presentation can be found in the MISC folder.
A server hosting our project can be found here: http://52.170.95.42/
Our slides and notes for the final presentation can be found here: https://docs.google.com/presentation/d/10IKhqsdQ-_AgRApVFVHrB_aBnAiZC4t5sGASLMGvUnw/edit?usp=sharing

## Getting Started
Before you started, make sure you have docker installed and can run the hello-world demo.

1. Clone the repo

```
$ git clone https://github.com/bobmayuze/Vercipe
```

2. Build images. You will not see the db connected this time, don't worry about it. 
```
$ ./scripts/init.sh
```

After you see MongoDB says
``` 
mongo              | MongoDB configured successfully. You may now connect to the DB.
mongo              | $cmd
```

Press crtl + c to stop all these containers.


3. Rebuild containers, and migrate mongo Database. Firstly restart all containers:
```
$ ./scripts/init.sh 
```

Then, run DB_Migration script:
```
$ ./scripts/DB_Migration.sh
```


4. Start a new terminal, and cd into vercipe_frontend/frontend folder

5. Install the dependencies 
```
$ npm install
```

6. Make sure you [ng-cli](https://cli.angular.io/) installed, then start the frontend dev mode
```
$ ng serve -o
```

Your browser should open a window at port 4200. If not, you can go to port 4200 to check it.



## Project proposals:

1. Proposal.pdf
2. Vercipe Project Timeline - Gantt Chart.pdf



Data Schema for a recipe
```
{
	_id : ObjectId,
	title: String,
    creator: String,
	creator_Email: String,
	materials: [String],
	instructions: [String],
	created_at: Unix Timestamp,
	version: Int,
	previous_version: String
}

```


## Endpoint List:

### Default Route :/

#### [1] Get default api to make sure backend is successfully set
```
Endpoint: GET /
Authorization: none
Request Body: none
Response: 200 JSON object, {"msg" : 'hello world'}
```

#### [2] Create a new recipe
```
Endpoint: POST /newRecipe
Authorization: none
Request Body: 
{
    title: string
    creator: string
    materials: array of string
    version: number
    previous_version: ObjectId
} 
Response: 200 JSON object, {"status" : 'success'}
```

#### [3] Get all Recipes as json array
```
Endpoint: GET /allRecipes
Authorization: none
Request Body: none
Response: 200, Ordered (by index) JSON Array of Recipe Objects
```

#### [4] Find recipe by ObjectId
```
Endpoint: POST /recipes
Authorization: none
Request Body: {"id":ObjectId}
Response: 200, one Recipe Object
```

#### [5] Find recipe by creator's email
```
Endpoint: POST /recipes/byMail
Authorization: none
Request Body: {"email":String}
Response: 200, Ordered (by index) JSON Array of Recipe Objects
```

#### [6] Find recipe by recipe's title
```
Endpoint: POST /recipes/byTitle
Authorization: none
Request Body: {"title":String}
Response: 200, Ordered (by index) JSON Array of Recipe Objects
```

#### [7] Delete recipe by recipe's ObjectId
```
Endpoint: DELETE /recipes
Authorization: none
Request Body: {"title":String}
Response: 200, Ordered (by index) JSON Array of Recipe Objects
```

#### [8] Clone a recipe ( Not Finished yet)
```
Endpoint: POST /recipes/forkById
Authorization: Log in as user
Request Body: 
{
    title: String
    materials: [String]
    creator: String
}
Response: 200, if success
```

#### [9] Get Previous Recipe Json Object of based on ID
```
Endpoin: POST /recipe/previous
Authorization: Null
Request Body:
{
    "id": string
}
Response: 200, if success
```

#### [10] Get IDs of all previous versions of a recipe in most recent to oldest order
```
Endpoin: POST /recipes/previous/all
Authorization: Null
Request Body:
{
    "id": string
}
Response: 200, if success
{
    "versions": [string]
}
```

#### [11] Get recipes by logged in user name (Creator)
```
Endpoint: POST /recipes/byUserName
Authorization: none
Request Body: {"creator":String}
Response: 200, 
{
    "result":[recipes]
}
```


### User Auth : /users

#### [1] Default, test encrypt function
```
Endpoint: GET /
Authorization: none
Request Body: none
Response: 200 JSON object, {"msg" : 'hello world'}
```

#### [2] Sign Up
```
Endpoint: POST /sign_up
Authorization: none
Request Body: 
{
	newUser.email : String
    newUser.username : String
    newUser.password : String
    newUser.passwordConf : String
}
Response: 200, if success
```

#### [3] Login as user
```
Endpoint: POST /sign_up
Authorization: none
Request Body: 
{
    newUser.username : String
    newUser.password : String
}
Response: 200, if success
```

#### [4] demo endpoint to test if user is logged in
```
Endpoint: GET /dashboard
Authorization: Log in as user
Request Body: None
Response: 200, if success
```

#### [5] Get all recipes created by a specific user
```
Endpoint: POST /allRecipes
Authorization: None
Request Body:
{
    "creater_email" : String
}
REsponse: { message : [Recipe]}
```



