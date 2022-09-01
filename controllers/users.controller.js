const getUsers = (req, res) => {
  res.status(200).send("Get User");
};


const createUser = (req, res) => {
  res.status(201).send("User created");
};

const updateUser = (req, res) => {
  res.status(200).send("User has been Updated");
};

const deleteUser = (req, res) => {
  res.status(200).send("User has been deleted");
};


module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}



