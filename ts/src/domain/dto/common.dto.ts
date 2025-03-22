
export interface IResponseDto<T> {
  message: string;
  data: T | null;
  success: boolean;
}

export interface IErrorResponseDto {
  message: string;
  data: null;
  success: false;
}