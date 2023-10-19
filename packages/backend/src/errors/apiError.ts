export class ApiError extends Error {
  status;

  errors;

  constructor(status: number, message: string, errors: string[]) {
    super(message);
    this.errors = errors;
    this.status = status;
  }

  static UnautorizeError(errors = []) {
    return new ApiError(401, 'User is unautorize', errors);
  }

  static BadRequest(message: string, errors = []) {
    return new ApiError(400, message, errors);
  }

  static NotFound(errors = []) {
    return new ApiError(404, 'User with this data not found', errors);
  }

  static ConflictResources(errors = []) {
    return new ApiError(409, 'User with this data is already exist', errors);
  }
}
