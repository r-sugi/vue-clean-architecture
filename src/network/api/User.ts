import { AxiosResponse } from "axios";
import { APIRequest } from "@/network/APIRequest";
import { HTTPMethod } from "@/network/APIClient";
import { IUser } from "@/entities/User";

export namespace UserAPI {
  export class GetUser implements APIRequest<IUser> {
    response: IUser;
    path: string;
    method = HTTPMethod.GET;
    parse = (data: AxiosResponse) => data.data;
    constructor(id: number) {
      this.path = `/api/Users/${id}`;
    }
  }
}
