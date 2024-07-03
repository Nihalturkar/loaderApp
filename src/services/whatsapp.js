import { Linking } from "react-native";

export const openWhatsApp = (mobileNo, message) => {
    let msg = message;
    let mobile = mobileNo;
    if (mobile) {
      if (msg) {
        let url =
          "whatsapp://send?text=" +
          message +
          "&phone=91" +
          mobileNo;
        Linking.openURL(url)
          .then(data => {
            console.log("WhatsApp Opened successfully " + data);
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please enter message to send");
      }
    } else {
      alert("Please enter mobile no");
    }
  };