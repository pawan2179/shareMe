import { jwtDecode } from "jwt-decode"
export const fetchUser = () => {
    const userInfo = jwtDecode(localStorage.getItem('user'));
    return userInfo;
}