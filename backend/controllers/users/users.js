let users = [
    {
        id: 1,
        name: "bambang",
        number: 4,
    },
    {
        id: 2,
        name: "ikhsan",
        number: 203,
    },
];

const getUsers = (req, res) => {
    res.status(200).json({
        data: users,
    });
};

const addUsers = (req, res) => {
    const { name, number } = req.body;

    if (!name || !number) {
        return res.status(400).json({
            errorMessage: "name and number required",
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        number,
    };

    users.push(newUser);
    res.status(201).json({
        message: "User created successfully",
    });
};

module.exports = { getUsers, addUsers };
