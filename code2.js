function toggleBookStatus(book) {
    if (book.isRead === true) {
        book.isRead = false;
    } else if (book.isRead === false) {
        book.isRead = true;
    } else {
        book.isRead = true;
    }
    return book;
}
