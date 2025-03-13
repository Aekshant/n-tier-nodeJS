

class ResponseDto {
    constructor(res) {
      this.message = res.message;
      this.data = res.data;
      this.success = res.success;
    }
}

class ErrorResponseDto {
  constructor(error) {
    this.message = ("Error " + error);
    this.data = null
    this.success = false;
  }
}

module.exports = { ResponseDto, ErrorResponseDto }