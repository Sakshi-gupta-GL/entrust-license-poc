import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: {
    name: "Company ABC",
  },
  product: {
    name: "KMS Key Manager Site License",
    salesOrderNo: "12345",
    lineItemNo: "1.1",
    productItemNo: "654123879",
  },
  feature: {
    edition: "Professional",
  },
  limitation: {
    siteLicense: "false",
    limitCount: 1,
    expiration: "",
    select: "No expiry Date",
  },
  licenseServer: {
    licenseServerId: "32224-32224-32224-32224-32224-32224"
  },
  miscellaneous: {
  },
  optionalComment: "",
  keyAmount: "1",
  error: "",
};

export const generateLicenseSlice = createSlice({
  name: "generateLicense",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    updateCustomer: (state, action) => {
      state.customer = action.payload;
    },
    updateProduct: (state, action) => {
      state.product = action.payload;
    },
    updateFeature: (state, action) => {
      state.feature = action.payload;
    },
    updateLimitation: (state, action) => {
      state.limitation = action.payload;
    },
    updateOptionalDetails: (state, action) => {
      state.keyAmount = action.payload.keyAmount;
      state.optionalComment = action.payload.optionalComment;
      state.error = action.payload.error;
    },
    updateLicenseServer: (state, action) => {
      state.licenseServer = action.payload;
    },
    updateMiscellaneous: (state, action) => {
      state.miscellaneous = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateCustomer,
  updateProduct,
  updateFeature,
  updateLimitation,
  updateOptionalDetails,
  updateLicenseServer,
  updateMiscellaneous,
} = generateLicenseSlice.actions;

export default generateLicenseSlice.reducer;
