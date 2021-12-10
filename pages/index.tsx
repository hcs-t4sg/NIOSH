import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Feature from '../components/Feature/Feature';
import About from '../components/About/About';
import Compare from "../components/Compare/Compare";
import LabDataView from "../components/LabDataView/LabDataView";
import HomePage from "./home-page"
import Button from '@mui/material/Button';

//"aws-amplify": "^4.3.8",

// import Amplify from 'aws-amplify'
// import awsconfig from '../src/aws-exports';

// Amplify.configure(awsconfig);

// const Index = () => {
//   return (
//     
//   )
// }
// export default Index;

import { Amplify } from "aws-amplify";
import { Auth } from 'aws-amplify'
import awsExports from "../src/aws-exports";
import config from '../src/aws-exports'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// Amplify.configure(config)
Amplify.configure({ ...awsExports, ssr: true });

// const App = () => (
//   <div>
//     {/* <Authentication /> */}
//     <AmplifySignOut />
//     <Layout />
//     <HomePage />
//   </div>
// );

// export default withAuthenticator(App);

// const App = () => (
//   <div>
//     <Authentication />
//     {/* <AmplifySignOut />
//     <Layout />
//     <HomePage /> */}
//   </div>
// );

// export default withAuthenticator(App);




// import Link from 'next/link'
// import * as React from "react";
// // import { Redirect } from 'react-router-dom';
// import { Auth } from 'aws-amplify';
// import { Form, Input, Button, notification, Popover, Spin, Col, Row} from 'antd';
// import FormWrapper from '../components/Form/FormWrapper';

// type Props = {
//   form: any;
// };

// type State = {
//   confirmDirty: boolean;
//   redirect: boolean;
//   loading: boolean;
//   email: string;
// };

// type UserFormData = {
//   password: string;
//   email: string;
// };

// const passwordValidator = require('password-validator');

// // create a password schema
// const schema = new passwordValidator();

// const colors = {
//   black: '#000000',
//   white: '#ffffff',
//   grey: '#ebedf0',
//   transparentBlack: 'rgba(0,0,0,.25)'
// };

// schema
//   .is()
//   .min(8)
//   .has()
//   .uppercase()
//   .has()
//   .lowercase()
//   .has()
//   .digits()
//   .has()
//   .symbols();

// class SignUpContainer extends React.Component<Props, State> {
//   state = {
//     confirmDirty: false,
//     redirect: false,
//     loading: false,
//     email: ''
//   };

//   handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     this.props.form.validateFieldsAndScroll((err: Error, values: UserFormData) => {
//       if (!err) {
//         let { password, email } = values;

//         // show loader
//         this.setState({ loading: true });

//         Auth.signUp({
//           username: email,
//           password,
//           attributes: {
//             email,
//           }
//         })
//           .then(() => {
//             notification.success({
//               message: 'Succesfully signed up user!',
//               description: 'Account created successfully, Redirecting you in a few!',
//               placement: 'topRight',
//               duration: 1.5,
//               onClose: () => {
//                 this.setState({ redirect: true });
//               }
//             });

//             this.setState({ email });
//           })
//           .catch(err => {
//             notification.error({
//               message: 'Error',
//               description: 'Error signing up user',
//               placement: 'topRight',
//               duration: 1.5
//             });

//             this.setState({
//               loading: false
//             });
//           });
//       }
//     });
//   };

//   handleConfirmBlur = (event: React.FormEvent<HTMLInputElement>) => {
//     const { value } = event.currentTarget;

//     this.setState({ confirmDirty: this.state.confirmDirty || !!value });
//   };

//   compareToFirstPassword = (rule: object, value: string, callback: (message?: string) => void) => {
//     const { form } = this.props;

//     if (value && value !== form.getFieldValue('password')) {
//       callback('Two passwords that you enter is inconsistent!');
//     } else {
//       callback();
//     }
//   };

//   validateToNextPassword = (rule: object, value: string, callback: (message?: string) => void) => {
//     const form = this.props.form;
//     const validationRulesErrors = schema.validate(value, { list: true });

//     if (value && this.state.confirmDirty) {
//       form.validateFields(['confirm'], { force: true });
//     }
//     if (validationRulesErrors.length > 0) {
//       callback(this.formatPasswordValidateError(validationRulesErrors));
//     }
//     callback();
//   };

//   formatPasswordValidateError = (errors: Array<string>) => {
//     for (let i = 0; i < errors.length; i++) {
//       if (errors[i] === 'min') {
//         return 'password length should be a at least 8 characters';
//       } else if (errors[i] === 'lowercase') {
//         return 'password should contain lowercase letters';
//       } else if (errors[i] === 'uppercase') {
//         return 'password should contain uppercase letters';
//       } else if (errors[i] === 'digits') {
//         return 'password should contain digits';
//       } else if (errors[i] === 'symbols') {
//         return 'password should contain symbols';
//       }
//     }
//   };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const { redirect, loading } = this.state;

//     const title = 'Password Policy';
//     const passwordPolicyContent = (
//       <React.Fragment>
//         <h4>Your password should contain: </h4>
//         <ul>
//           <li>Minimum length of 8 characters</li>
//           <li>Numerical characters (0-9)</li>
//           <li>Special characters</li>
//           <li>Uppercase letter</li>
//           <li>Lowercase letter</li>
//         </ul>
//       </React.Fragment>
//     );

//     return (
//       <React.Fragment>
//         <FormWrapper onSubmit={this.handleSubmit}>
//           {/* <Form.Item>
//             {getFieldDecorator('fname', {
//               rules: [
//                 {
//                   required: true,
//                   message: 'Please input your first name!'
//                 }
//               ]
//             })(
//               <Input
//                 prefix={<Icon type="user" style={{ color: colors.transparentBlack }} />}
//                 placeholder="First Name"
//               />
//             )}
//           </Form.Item>
//           <Form.Item>
//             {getFieldDecorator('lname', {
//               rules: [
//                 {
//                   required: true,
//                   message: 'Please input your last name!'
//                 }
//               ]
//             })(
//               <Input prefix={<Icon type="user" style={{ color: colors.transparentBlack }} />} placeholder="Last Name" />
//             )}
//           </Form.Item> */}
//           <Form.Item>
//             {getFieldDecorator('email', {
//               rules: [{ required: true, message: 'Please input your email!' }]
//             })(<Input placeholder="Email" />)}
//           </Form.Item>
//           <Form.Item>
//             <Popover placement="right" title={title} content={passwordPolicyContent} trigger="focus">
//               {getFieldDecorator('password', {
//                 rules: [
//                   { required: true, message: 'Please input your Password!' },
//                   {
//                     validator: this.validateToNextPassword
//                   }
//                 ]
//               })(
//                 <Input
//                   type="password"
//                   placeholder="Password"
//                 />
//               )}
//             </Popover>
//           </Form.Item>
//           <Form.Item>
//             {getFieldDecorator('confirm', {
//               rules: [
//                 {
//                   required: true,
//                   message: 'Please confirm your password!'
//                 },
//                 {
//                   validator: this.compareToFirstPassword
//                 }
//               ]
//             })(
//               <Input
//                 type="password"
//                 placeholder="Confirm Password"
//                 onBlur={this.handleConfirmBlur}
//               />
//             )}
//           </Form.Item>

//           <Form.Item className="text-center">
//             <Row>
//               <Col lg={24}>
//                 <Button style={{ width: '100%' }} type="primary" disabled={loading} htmlType="submit">
//                   {loading ? <Spin /> : 'Register'}
//                 </Button>
//               </Col>
//               <Col lg={24}>
//                 Or <Link href="/login">login to your account!</Link>
//               </Col>
//             </Row>
//           </Form.Item>
//         </FormWrapper>
//         {/* {redirect && (
//           <Redirect
//             to={{
//               pathname: '/verify-code',
//               search: ?email={this.state.email}
//             }}
//           />
//         )} */}
//       </React.Fragment>
//     );
//   }
// }

// export default SignUpContainer;
