module.exports = async(err, req, res, next) => {
    console.log(err.stack);
    res.json({
        success: false,
        error: err.message
    })
  }