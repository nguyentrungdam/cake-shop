
module.exports = function(model, page) {
    const resPerPage = 12;
    const currentPage = Number(page) || 1;
    const skip = resPerPage * (currentPage - 1);

    model = model.limit(resPerPage).skip(skip);
    return model;
}