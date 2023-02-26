import { validator } from '../../helpers';

const register = async (req, res, next) => {
  const validationRule = {
    firstname: 'required|string',
    lastname: 'required|string',
    username: 'required|string|unique:User,username',
    password: 'required|string',
  };

  await validator.validate(req.body, validationRule, {}, (errors, status) => {
    if (!status) {
      res.status(400)
        .send(errors);
    } else {
      next();
    }
  });// .then().catch(error=>console.log(error))
};

const login = async (req, res, next) => {
  const validationRule = {
    password: 'required|string',
    username: 'required|string',
  };

  await validator.validate(req.body, validationRule, {}, (errors, status) => {
    if (!status) {
      res.status(400)
        .send(errors);
    } else {
      next();
    }
  });
};

export default {
  register,
  login,
};
