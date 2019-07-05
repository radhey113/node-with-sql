# Express with SQL (Sequelize)

##Pre-requisition 

- Install Sequilize-cli 
   ```
        npm install -g sequelize-cli
   ```
- Node 8+
- Sequilize 5.9+
   ```
        npm install --save sequelize
   ```

##Run Locally
- Start SQL Server with phpmyadmin
- Create your database and replace the name from the config.json file inside config folder
- Migrate your tables from migrations folder to database by using command:
  ```
    sequelize db:migrate
  ```
- If you want to create any new table then use command: 
```
  sequelize model:create --name Company --attributes name:string

```  
- Now run the server by using command: 
```
  node index.js or npm start  
```

###### Thank you
