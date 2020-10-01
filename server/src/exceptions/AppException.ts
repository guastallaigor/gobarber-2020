class AppException {
  constructor(public readonly message: string, public readonly status = 400) {}
}

export default AppException;
