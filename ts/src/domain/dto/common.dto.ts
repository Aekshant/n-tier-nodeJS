// Base class for all responses
export class BaseResponseDto<T> {
  message: string;
  data: T | null;
  success: boolean;

  constructor(message: string, data: T | null, success: boolean) {
    this.message = message;
    this.data = data;
    this.success = success;
  }
}

// Success response
export class SuccessResponseDto<T> extends BaseResponseDto<T> {
  constructor(message: string, data: T, success : boolean) {
    super(message, data, success);
  }
}

// Error response
export class ErrorResponseDto extends BaseResponseDto<null> {
  constructor(message: string) {
    super(message, null, false);
  }
}
