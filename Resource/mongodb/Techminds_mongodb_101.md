A beginner's handbook for MongoDB should focus on the fundamental concepts of the database, such as collections, documents, CRUD operations, and querying. It should also introduce students to how MongoDB fits into the development stack.

---

## **MongoDB Handbook for Beginners**

### **1. Introduction to MongoDB**
- What is MongoDB?  
  - Overview of NoSQL databases vs relational databases
  - Benefits of using MongoDB
  - Use cases for MongoDB

### **2. Setting Up MongoDB**
- Installing MongoDB locally (Windows, Mac, Linux)
- Using MongoDB Atlas (cloud version)
- Introduction to MongoDB Compass (GUI tool)

### **3. Basic Concepts**
- **Databases**: What is a database in MongoDB?
- **Collections**: Understanding collections in MongoDB (equivalent to tables in relational DBs)
- **Documents**: What are documents? MongoDB's format is BSON (Binary JSON)
- **Fields**: What are fields in MongoDB?

### **4. MongoDB CRUD Operations**  
Basic operations to interact with MongoDB.

#### **Create**:
- Inserting a single document:
  ```js
  db.collection('users').insertOne({ name: 'John', age: 30 });
  ```
- Inserting multiple documents:
  ```js
  db.collection('users').insertMany([{ name: 'Jane', age: 25 }, { name: 'Steve', age: 35 }]);
  ```

#### **Read**:
- Finding a document:
  ```js
  db.collection('users').findOne({ name: 'John' });
  ```
- Querying multiple documents:
  ```js
  db.collection('users').find({ age: { $gt: 30 } });
  ```

#### **Update**:
- Updating a single document:
  ```js
  db.collection('users').updateOne({ name: 'John' }, { $set: { age: 31 } });
  ```

#### **Delete**:
- Deleting a single document:
  ```js
  db.collection('users').deleteOne({ name: 'Steve' });
  ```

### **5. Querying Data in MongoDB**
- Using comparison operators (`$gt`, `$lt`, `$eq`, `$in`)
- Sorting results
- Limiting and skipping results
- Using regular expressions for pattern matching

#### **Example**:
```js
db.collection('users').find({ age: { $gte: 18 } }).sort({ age: 1 }).limit(5);
```

### **6. Indexing in MongoDB**
- What is an index?
- Creating indexes:
  ```js
  db.collection('users').createIndex({ name: 1 });
  ```
- Why indexing is important for performance

### **7. Aggregation Framework**
- Understanding MongoDB’s aggregation pipeline
- `$match`, `$group`, `$sort`, `$project` operators
- Example: Grouping and counting documents by field

#### **Example**:
```js
db.collection('users').aggregate([
  { $group: { _id: "$age", count: { $sum: 1 } } }
]);
```

### **8. Data Modeling in MongoDB**
- Embedding vs. Referencing data
- One-to-many and many-to-many relationships
- Handling large datasets

### **9. MongoDB Transactions**
- Atomicity in MongoDB
- Using transactions to handle multiple operations
  ```js
  const session = client.startSession();
  session.startTransaction();
  try {
    db.collection('users').updateOne({ name: 'John' }, { $set: { age: 32 } }, { session });
    db.collection('orders').insertOne({ user: 'John', product: 'Laptop' }, { session });
    session.commitTransaction();
  } catch (error) {
    session.abortTransaction();
  } finally {
    session.endSession();
  }
  ```

### **10. Simple MongoDB Projects for Practice**

1. **User Authentication System**  
   - Users can register and log in with email and password.
   - Use hashed passwords and JWT for authentication.
  
2. **Task Manager**  
   - A to-do list where users can add, update, and delete tasks.
   - Store tasks with due dates and priorities.

3. **Blog Platform**  
   - Users can write blog posts and comment on others' posts.
   - Store posts and comments in a nested structure.

4. **Simple E-Commerce Store**  
   - Users can view products and add them to their shopping cart.
   - Store product details, categories, and user carts.

### **11. Advanced MongoDB Features (Optional)**
- Replica sets for high availability
- Sharding for horizontal scaling
- Backup and restore strategies

---

### **Project Examples**:

#### **Project 1: User Authentication System**
- Implement user registration with hashed passwords using bcrypt.
- Enable users to log in using JWT for authentication.
- Use MongoDB to store user credentials and session data.

#### **Project 2: To-Do List Application**
- A simple to-do app where tasks can be added, updated, and deleted.
- Tasks are stored in MongoDB with fields like task name, due date, and status.

#### **Project 3: Blogging Platform**
- A platform where users can create blog posts.
- Implement a commenting system using embedded documents.
---

### **4. MongoDB CRUD Operations (Advanced)**

CRUD (Create, Read, Update, Delete) are the fundamental operations when interacting with any database. In MongoDB, these operations are very straightforward to use. 

#### **Create Operations**
- **Insert One Document**:
  Use `insertOne()` to insert a single document into a collection.
  ```js
  db.collection('users').insertOne({ name: 'Alice', age: 25, email: 'alice@example.com' });
  ```
- **Insert Many Documents**:
  Use `insertMany()` to insert multiple documents at once.
  ```js
  db.collection('users').insertMany([
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  ]);
  ```

#### **Read Operations**
- **Find One Document**:
  Use `findOne()` to retrieve a single document that matches a query.
  ```js
  db.collection('users').findOne({ name: 'Alice' });
  ```
- **Find Multiple Documents**:
  Use `find()` to query multiple documents.
  ```js
  db.collection('users').find({ age: { $gt: 30 } }).toArray();
  ```
  - `toArray()` is used to convert the result to an array.
  - The query retrieves users older than 30.

#### **Update Operations**
- **Update One Document**:
  Use `updateOne()` to modify a single document.
  ```js
  db.collection('users').updateOne({ name: 'Alice' }, { $set: { age: 26 } });
  ```
  - This updates Alice’s age to 26.

- **Update Many Documents**:
  Use `updateMany()` to modify multiple documents that match a query.
  ```js
  db.collection('users').updateMany({ age: { $lt: 30 } }, { $set: { active: true } });
  ```
  - This will mark all users under 30 as active.

#### **Delete Operations**
- **Delete One Document**:
  Use `deleteOne()` to delete a single document that matches a query.
  ```js
  db.collection('users').deleteOne({ name: 'Charlie' });
  ```
  - This deletes Charlie's document from the collection.

- **Delete Many Documents**:
  Use `deleteMany()` to delete multiple documents.
  ```js
  db.collection('users').deleteMany({ age: { $lt: 25 } });
  ```
  - This deletes all users who are younger than 25.

---

### **5. MongoDB Lookup Operations**

Lookups in MongoDB refer to the ability to combine or join documents from different collections, similar to SQL joins. The `$lookup` stage is part of the **aggregation pipeline**.

#### **Basic Lookup Example**

Let’s assume we have two collections:
- **Users Collection**: Contains user information like name and age.
- **Orders Collection**: Contains order information for each user.

##### **Users Collection:**
```json
{ "_id": 1, "name": "Alice", "age": 25 }
{ "_id": 2, "name": "Bob", "age": 30 }
```

##### **Orders Collection:**
```json
{ "_id": 1, "userId": 1, "product": "Laptop" }
{ "_id": 2, "userId": 2, "product": "Phone" }
```

To get each user with their corresponding orders, we can use `$lookup`.

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",            // The collection to join
      localField: "_id",         // The field from the users collection
      foreignField: "userId",    // The field from the orders collection
      as: "userOrders"           // Alias for the resulting array of orders
    }
  }
]);
```

#### **Result:**
```json
[
  {
    "_id": 1,
    "name": "Alice",
    "age": 25,
    "userOrders": [
      { "_id": 1, "userId": 1, "product": "Laptop" }
    ]
  },
  {
    "_id": 2,
    "name": "Bob",
    "age": 30,
    "userOrders": [
      { "_id": 2, "userId": 2, "product": "Phone" }
    ]
  }
]
```
In this example, the `$lookup` stage combines the data from the **Users** collection and the **Orders** collection. Each user now has an array of their respective orders under the `userOrders` field.

#### **Using `$unwind` to Flatten the Results**

If we want each order as a separate document (flattening the array), we can use the `$unwind` stage:

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders"
    }
  },
  { $unwind: "$userOrders" }
]);
```

#### **Result:**
```json
[
  { "_id": 1, "name": "Alice", "age": 25, "userOrders": { "_id": 1, "userId": 1, "product": "Laptop" } },
  { "_id": 2, "name": "Bob", "age": 30, "userOrders": { "_id": 2, "userId": 2, "product": "Phone" } }
]
```

---

### **6. More Complex Lookups and Aggregation Pipeline**

The `$lookup` stage can be combined with other aggregation pipeline stages for more complex queries. Below is an example of filtering users who have a specific product in their orders.

#### **Example: Find Users Who Ordered "Laptop"**
```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders"
    }
  },
  { $unwind: "$userOrders" },
  { $match: { "userOrders.product": "Laptop" } }
]);
```

#### **Result:**
```json
[
  { "_id": 1, "name": "Alice", "age": 25, "userOrders": { "_id": 1, "userId": 1, "product": "Laptop" } }
]
```

### **7. Other Useful Lookup Features**
- **Multiple Lookups**: You can perform multiple lookups within a single aggregation pipeline to join data from more than one collection.
- **Projecting Fields**: You can use `$project` to include or exclude specific fields after performing the lookup.
- **Using `$group` and `$match`**: After a lookup, you can group or filter the results using `$group` and `$match`.

#### **Example: Total Number of Orders by User**
```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders"
    }
  },
  {
    $project: {
      name: 1,
      totalOrders: { $size: "$userOrders" }
    }
  }
]);
```

#### **Result:**
```json
[
  { "_id": 1, "name": "Alice", "totalOrders": 1 },
  { "_id": 2, "name": "Bob", "totalOrders": 1 }
]
```

This aggregates the number of orders each user has and returns it under `totalOrders`.

---

### **8. MongoDB Aggregation Framework Operators**
- `$match`: Filters the data to only pass documents that match the condition.
- `$group`: Groups documents by a specified identifier (like SQL GROUP BY).
- `$sort`: Sorts the results by a field (ascending or descending).
- `$limit`: Limits the number of documents returned.
- `$project`: Specifies which fields to include or exclude from the result.

---

### **9. Conclusion**
By mastering MongoDB’s CRUD operations, lookups, and aggregation pipeline, you will be able to work with data efficiently. MongoDB’s flexibility and performance make it an excellent choice for modern applications, especially when dealing with large datasets or schema-less data.

---
