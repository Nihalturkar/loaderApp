import RazorpayCheckout from 'react-native-razorpay';
import { COLORS } from '../constants';

export default rozarpay  = async (amount, successCallback, errorCallback) => {
  // console.log("razorpay key : ", "rzp_live_oBu0N26YqOcvCq") 
  // key_id,key_secret
  // rzp_live_oBu0N26YqOcvCq,G3x6GtUuyjcqqffirihZl2Vl

  var options = {
    description: 'Credits towards consultation',
    currency: 'INR',
    key: 'rzp_live_oBu0N26YqOcvCq',
    // key:"rzp_test_sHuXJaB9QnKnlO", //demo key
    amount: amount * 100,
    name: 'Loader',
    // prefill: {    
    //   contact: '9399329654j',
    // },
    theme: { color: COLORS.primary },
  };
  RazorpayCheckout?.open(options)
    .then(data => {
      successCallback && successCallback(data)
    })
    .catch(error => {
      errorCallback && errorCallback(error)
      // alert(`Error: ${error?.code} | ${error?.description}`);
    });
};