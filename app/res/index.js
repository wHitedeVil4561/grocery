import httpStatus from "http-status";

export function success(req, res, result, code) {
  try {
    const response = { success: true, statusCode: code, message:  result.msgCode || httpStatus[code], result: result.data ? result.data : [], time: Date.now(), };
    console.log(response);
    return res.status(code).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: true, statusCode: 500, message: result.msgCode || httpStatus[code], result: [], time: Date.now(), });
  }
}

export function error(req, res, error, code) {
  try {
    const response = { success: false, statusCode: code, message:  error.msgCode || httpStatus[code], result: error.data || "", };
    console.log(response);
    return res.status(code).json(response);
  } catch (error) {
    console.error(error)
    return res.status(500).json({ success: true, statusCode: 500, message: error.msgCode || httpStatus[code], result: [], time: Date.now(), });
  }
}