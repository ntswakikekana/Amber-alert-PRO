## Backend

### Installation

1. **Install the dependencies**  
   ```bash
   npm install
   ```

2. **Ensure MongoDB is installed and running**  
   Start MongoDB with the following command:
   ```bash
   sudo systemctl start mongod
   ```

   **If you don't want to install MongoDB on your machine, you can use remote MongoDB services like MongoDB Atlas.**

3. **Create a `.env` file**  
   Add the following content to configure your MongoDB connection:
   ```env
   MONGO_URL=mongodb://localhost:27017/amber_db
   ```

4. **Start the server**  
   Run the server with:
   ```bash
   npm run start
   ```

5. **Access the server**  
   The server will be running at [http://localhost:3000](http://localhost:3000).


6. **API documentation**  
   You can find the API documentation at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).
