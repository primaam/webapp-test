let books = [
    {
        id: 1,
        author: "bambang",
        title: "Cemara",
    },
    {
        id: 2,
        author: "ikhsan",
        title: "air terjun dikala senja",
    },
];

const getBooks = (req, res) => {
    res.status(200).json({
        data: books,
    });
};

const addBooks = (req, res) => {
    const { author, title } = req.body;

    if (!author || !title) {
        return res.status(400).json({
            errorMessage: "author and title required",
        });
    }

    const newBooks = {
        id: books.length + 1,
        author,
        title,
    };

    books.push(newBooks);
    res.status(201).json({
        message: "Books created successfully",
    });
};

module.exports = { getBooks, addBooks };
