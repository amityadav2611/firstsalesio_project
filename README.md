# FirstSales.io_nodejs

##  : Basic Todo APIs and Database Integration Assignment 

### Discription of developed Assignmnet

- Tech Stack
  1) Nodejs
  2) ExpressJs
  3) MongoDB

- Packages Used 
  1) Jest --> used for the API's Testing

- Database Collections
  1) Directory Colletion _ [reference to todo]
```yaml
    dName:{
        type: String,
        require: true,
        unique: true

    },
    directory:{
          type: [ObjectId],
          ref: "todo"
    },
    isDeleted:{
        type: Boolean,
        default: false
    }    
}, { timestamps: true })
```
  2) Todo-Item Collection _  [todo item will be there]
```yaml
 itemName: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    isMarkDone: {
        type: Boolean,
        default: false
    },
    moveToDirectory:{
        type: Boolean,
        default: false
    }
},{timestamps: true})
```

## Features 

- Type 
  1) There will two type of group one is directory and other is todo-item 
  2) The directory will be created and we referred the todoid in directory 
  3) The todo-item will be created after created of directory
  4) We can do CRUD operations for both [direcory and todo-item]
 
## Routes

### Directory Routes
-  POST '/directory/list'
   1) Used for fetching the directory

- POST '/directory/create'
  1) Used for creating the directory

- POST '/directory/remove'
  1) Used for remove the directory



### Todo-Item Routes
- POST '/todo-item/create'
  1) Used for creating of todo-item

- POST '/todo-item/mark-as-done'
  1) Used for creating of todo-item that the mark as done

- POST '/todo-item/mark-as-not-done'
  1) Used for creating of todo-item that the mark as not done

- POST '/todo-item/move-to-directory'
  1) Here we used to create todo-item to move to directory  

- POST '/todo-item/list'
  1) Used for fetching the todo list

