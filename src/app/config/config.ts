import { environment } from "../environement/env";

let url = environment.basePath;
let urlV2 = environment.basePathV2;
if (environment.production) {
    url = `${window.location.protocol}//${window.location.hostname}/api/`
}
export const config = {
    login: `${url}user/login/`,
    register: `${url}user/login/register/`,
    forgetPassword: `${url}user/login/profile`,
    logout: `${url}user/logout`,
};
