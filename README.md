# Vercipe
Version control based recipe for Spring 18 ITWS 4500 course. 


## Getting Started
Before you started, make sure you have docker installed and can run the hello-world demo.

1. Clone the repo

```
$ git clone https://github.com/bobmayuze/Vercipe
```

2. Build images. You will see db not connected this time, don't worry about it.
```
$ ./scripts/init.sh
```


3. Rebuild containers
```
$ ./scripts/init.sh 
```

4. Vola, you are all set!

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
	instructions: String,
	created_at: Unix Timestamp,
	version: Int,
	previous_version: Int
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
	newRecipe.title: string
    newRecipe.creator: string
    newRecipe.materials: array of string
    newRecipe.version: number
    newRecipe.previous_version: ObjectId
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
    newRecipe.title: String
    newRecipe.materials: [String]
    newRecipe.creator: String
}
Response: 200, if success
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

#### [3] Log in as a user
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



