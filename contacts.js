const { error } = require("console");
const fs = require("fs/promises");
const path = require("path");

/*
    Path to the contacts.json file
 */
const contactsPath = path.join(__dirname, "db", "contacts.json");

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

/**
 * The getContactById function takes an id parameter and returns a promise that
 * resolves to the contact object with the specified ID. It first calls the
 * listContacts function to get the list of contacts, then uses the
 * Array.find method to find the contact with the specified ID.
 * If no contact is found, it return null. Otherwise, it returns the
 * contact object.
 * @param {number} id - The ID of the contact to retrieve.
 * @returns {Promise<Object|null>} - A promise that resolves to the contact
 *                                   object with the specified ID, or null
 *                                   if no contact is found.
 */
const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((item) => item.id === contactId);
    if (!contact) {
      console.log(`No contact found with ID ${contactId}`);
      return null;
    }
    return contact;
  } catch (err) {
    console.error(err.message);
  }
};

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
}
