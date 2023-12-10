{
  files.map((file) => {
    return (
      <div className="admin-list">
        <div>id: {file._id}</div>
        <div>first name: {file.firstname}</div>
        <div>last name: {file.lastname}</div>
        <div>title: {file.title}</div>
        <div>city: {file.city}</div>
        <div>zip: {file.zip}</div>
        <div>email: {file.email}</div>
        <div>phone: {file.phone}</div>
        {/* <div>w9form: {file.w9form}</div> */}
        {/* <div>coi: {file.coi}</div> */}
        {/* <div>mc: {file.mc}</div> */}
        <br />
        <br />
      </div>
    );
  });
}
