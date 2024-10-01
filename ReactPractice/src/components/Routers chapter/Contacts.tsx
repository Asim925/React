const Contacts = () => {
  const contacts = [
    {
      id: 1,
      name: "Support",
      phone: "+1234567890",
      email: "support@example.com",
    },
    { id: 2, name: "Sales", phone: "+9876543210", email: "sales@example.com" },
    { id: 3, name: "HR", phone: "+1122334455", email: "hr@example.com" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contacts Page</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>
            <br />
            Phone: {contact.phone}
            <br />
            Email: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
