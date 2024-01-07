# Manage a list of contacts by adding, displaying, removing, and fetching contact information. (app console)

## List Contacts:
![App look](./assets/1.png)
## Find Contacts by Id:
![App look](./assets/2.png)
## Add Contacts:
![App look](./assets/3.png)
## Remove Contacts:
![App look](./assets/4.png)
## Remove Contacts if not exist:
![App look](./assets/5.png)

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Change to the project directory:
   ```bash
   cd [repository-name]
   ```

3. Install and start dependencies:
   ```js
   npm install

   # Get and display the entire list of contacts
   node index.js --action list
   
   # Get contact by id
   node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

   # Add the contact
   node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

   # Delete the contact
   node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
   
   ```