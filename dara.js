$(document).ready(function() {
    let contacts = [];
    let editingIndex = -1;

    // Handle form submission
    $('#contactform').on('submit', function(event) {
        event.preventDefault();
        const name = $('#name').val();
        const phone = $('#phone').val();
        const email = $('#Email').val();
        
        const contact = { name, phone, email };

        if (editingIndex === -1) {
            contacts.push(contact);
        } else {
            contacts[editingIndex] = contact;
            editingIndex = -1;
        }

        $('#contactform')[0].reset();
        displayContacts();
    });

    // Display contacts
    function displayContacts() {
        $('#contactList').empty();
        contacts.forEach((contact, index) => {
            const contactItem = `
                <li class="list-group-item">
                    ${contact.name} - ${contact.phone} - ${contact.email}
                    <button class="btn btn-warning btn-sm float-right ml-2" onclick="editContact(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm float-right" onclick="deleteContact(${index})">Delete</button>
                </li>
            `;
            $('#contactList').append(contactItem);
        });
    }

    // Edit contact
    window.editContact = function(index) {
        const contact = contacts[index];
        $('#name').val(contact.name);
        $('#phone').val(contact.phone);
        $('#Email').val(contact.email);
        editingIndex = index;
    }

    // Delete contact
    window.deleteContact = function(index) {
        contacts.splice(index, 1);
        displayContacts();
    }
});
