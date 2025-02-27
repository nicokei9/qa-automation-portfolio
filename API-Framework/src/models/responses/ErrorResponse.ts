export interface ErrorResponse {
  status?: string;
  message?: string;
  errors?: string[];
  reason: string;
}
