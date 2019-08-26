# BE
Back End Repo for Party Planner App - LS


https://bw-party-planner.herokuapp.com

//Login endoint -- POST

https://bw-party-planner.herokuapp.com/api/auth/login
>{
>email:'',
>password:''
>}
//Register endpoint -- POST
https://bw-party-planner.herokuapp.com/api/auth/register
>{
>email:'',
>password:''
>}

//Party endpoint -- CRUD

https://bw-party-planner.herokuapp.com/api/party
>{
>guests: integer,
>theme: string,
>date: string,
>budget: integer,
>user_id(logged in user): >integer
>}

//Lists out all the lists in this specific party -- GET

https://bw-party-planner.herokuapp.com/api/party/list/todo

https://bw-party-planner.herokuapp.com/api/party/list/entertainment

https://bw-party-planner.herokuapp.com/api/party/list/items

CRUD -- GET/POST/PUT/DELETE
//Is a list of all the accessible components of the lists

https://bw-party-planner.herokuapp.com/api/shoppinglist
>{party_id: integer}

https://bw-party-planner.herokuapp.com/api/todolist
>{
>party_id: integer
>}

https://bw-party-planner.herokuapp.com/api/items
>{
>name: string,
>purchased: false(toggle when purchased done on FE),
>shopping_list_id: integer,
>price: integer
>}

https://bw-party-planner.herokuapp.com/api/todo
>{
>name: string,
>completed: false(toggle when completed),
>todo_list_id: integer
>}

https://bw-party-planner.herokuapp.com/api/entertainment

>{
>name: string,
>completed: false(toggle when completed),
>todo_list_id: integer,
>price: integer
>}