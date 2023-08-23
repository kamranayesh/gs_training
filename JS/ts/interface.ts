interface Validator {
  isValid(value: string | number);
}

interface ValidatorMessage {
  setMessage(message: string);
}

class EmailValidator implements Validator, ValidatorMessage {
  setMessage(message: string) {
    console.log("another interface implementation");
  }
  isValid(value: string | number) {
    console.log("some validator logic");
  }
}
