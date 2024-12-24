const successResponse = (res, data, message = 'Request successful') => {
    res.status(200).json({
      success: true,
      message,
      data,
    });
  };
  
  const errorResponse = (res, error, message = 'Request failed') => {
    res.status(500).json({
      success: false,
      message,
      error: error.message || error,
    });
  };
  
  module.exports = { successResponse, errorResponse };
  