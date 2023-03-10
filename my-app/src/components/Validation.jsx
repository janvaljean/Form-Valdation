import * as yup from 'yup';

const validations = yup.object().shape({
 
  email: yup.string().email("gecerli bir email gir ulan").required(),
  password: yup.string().min(5).required(),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null],"parola uyusmuyor").required()


  

});

export default validations