export class AjaxResult {
    code: string | number;
    data?: any;
    success: boolean;
    msg: string;
    extra?:any
    // unAuthorizedRequest: boolean;
}
