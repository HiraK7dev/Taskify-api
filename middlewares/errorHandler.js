function errorHandler(req, res, next) {
    const body = req.body;
    switch (req.method) {
        case 'POST':
            if (!body || !body.task) {
                res.status(400).json({ message: "Bad Request" });
            } else {
                next();
            }
            break;
        case 'PATCH':
            if (!body || !body.task || !body.isCompleted) {
                res.status(400).json({ message: "Bad Request" });
            } else {
                next();
            }
            break;
        default:
            next();
            break;
    }
}

export default errorHandler