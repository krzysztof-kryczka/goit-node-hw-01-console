const fs = require("fs/promises");
const path = require("path");

/*
    Path to the contacts.json file
 */
const contactsPath = path.join(__dirname, "db", contacts.json);

/**
* This function reads the contents of the contacts.json file 
* and parses it into a JavaScript object. It then returns the parsed object, 
* which is a list of contacts. If an error occurs while reading the file 
* or parsing the JSON, the function will catch the error and log it to the console. 
* It will then return an empty array.
* @returns {Promise<Array>} - A promise that resolves to an array of contacts.
*/
const listContacts = async () => {
  try {
    return JSON.parse(await fs.readFile(contactsPath, "utf8"));
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

function getContactById(contactId) {
  // ...twój kod
}

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
}
