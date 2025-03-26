import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser1 extends Document {
  name: string;
  email: string;
 

 
  phone:string,
  address:string,
  pincode: string,
  quantity: string,
  shoptype:string,
  shopname: string,
  adharcard: string,
//   adharcardimage: string,
  pancard: string,
//   pancardimage: string,
  accountno: string,
  ifsc: string,
  holdername: string,
  message: string,
  potatoName:string,
  id: string;


}

const UserSchema1: Schema<IUser1> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },pincode: {
    type: String,
    required: false,
  },quantity: {
    type: String,
    required: false,
},
shoptype: {
    type: String,
    required: false,
  },
shopname: {
    type: String,
    required: false,
  },adharcard: {
    type: String,
    required: false,
  },
//   adharcardimage: {
//     type: String,
//     required: false,c
//   },
  pancard: {
    type: String,
    required: false,
  },
//   pancardimage: {
//     type: String,
//     required: false,
//   },
  accountno: {
    type: String,
    required: false,
  },ifsc: {
    type: String,
    required: false,
  },holdername: {
    type: String,
    required: false,
  },message: {
    type: String,
    required: false,
  },
  potatoName: {
    type: String,
    required: false,
  },
});


  const User1: Model<IUser1> =
  mongoose.models.userSellInfo || mongoose.model<IUser1>("userSellInfo", UserSchema1);

  
export default User1;
