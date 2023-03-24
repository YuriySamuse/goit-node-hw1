const {
	listContacts,
	getContactById,
	addContact,
	removeContact,
	updateContactId,
} = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case "list":
			try {
				const allContacts = await listContacts();
				console.table(allContacts);
			} catch (error) {
				console.error(
					"\x1B[31m Error occurs while contacts list was obtained!"
				);
			}
			break;

		case "get":
			try {
				const contact = await getContactById(id);
				console.log(contact);
			} catch (error) {
				console.error("\x1B[31m Error while getting contact!");
			}
			break;

		case "add":
			try {
				const newContact = await addContact(name, email, phone);
				console.log(newContact);
			} catch (error) {
				console.error("\x1B[31m Error while adding contact!");
			}
			break;

		case "remove":
			try {
				const deleteContact = await removeContact(id);
				console.log(deleteContact);
			} catch (error) {
				console.error("\x1B[31m Error while deleting contact!");
			}
			break;

		case "update":
			try {
				const updateContact = await updateContactId(id, {
					name,
					email,
					phone,
				});
				console.log(updateContact);
			} catch (error) {
				console.error("\x1B[31m Error while updating contact!");
			}
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
};

invokeAction(argv);
