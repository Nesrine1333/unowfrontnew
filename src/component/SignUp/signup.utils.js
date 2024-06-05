import axios from "axios";
import { API_ENDPOINTS } from "../../core/constants/api.constants";

export const verifyEmail = async (email) => {
  try {
    const { data } = await axios.post(API_ENDPOINTS.VERIFY_EMAIL, {
      email: email,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
