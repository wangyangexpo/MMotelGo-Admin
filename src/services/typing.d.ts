/* 发送异步请求，返回结果的类型 */
declare namespace API {
  enum ACTION {
    ADD,
    UPDATE,
  }

  interface Result<T = null> {
    success: boolean;
    errorCode: number;
    errorMessage: string;
    data: T;
  }

  interface Result_List_<T = null> {
    success: boolean;
    errorCode: number;
    errorMessage: string;
    data: {
      list?: T[];
      pageNum?: number;
      pageSize?: number;
      totalCount?: number;
    };
  }

  // 全局-菜单，枚举，用户信息
  type Result_String_ = Result<string>;
  type Result_Number_ = Result<number>;
  type Result_String_Array_ = Result<string[]>;
  type Result_Number_Array_ = Result<number[]>;
}
