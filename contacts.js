const { error } = require("console");
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

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
 * @param {number} contactId - The ID of the contact to retrieve.
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

/**
 * This function reads the contents of a file named `contacts.json` and parses it into a JavaScript object.
 * It then uses the `findIndex` method to find the index of the contact with the specified ID.
 * If the contact is found, the `splice` method is used to remove the contact from the array.
 * The updated list of contacts is then written back to the file.
 * If an error occurs while reading or writing the file, the function will catch the error and log it to the console.
 * The function returns the result of the operation.
 *
 * @param {string} contactId - The ID of the contact to be removed.
 * @returns {object} - An object containing the success status and message.
 */
const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return {
        success: false,
        message: `Contact ID ${contactId} not found.`,
        result: null,
      };
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return {
      success: true,
      message: `Contact ID ${contactId} was successfully deleted.`,
      result: result,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: `An error occurred while removing the contact.`,
      result: null,
    };
  }
};

/**
 * This function adds a new contact to the contacts list.
 *
 * @param {string} name - The name of the contact.
 * @param {string} email - The email address of the contact.
 * @param {string} phone - The phone number of the contact.
 * @returns {object} - An object containing the success status, message, and result.
 */
const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return {
      success: true,
      message: `The new contact has been successfully added.`,
      result: newContact,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: `An error occurred while adding the new contact.`,
      result: null,
    };
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
