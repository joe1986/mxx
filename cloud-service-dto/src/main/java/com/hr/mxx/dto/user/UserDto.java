package com.hr.mxx.dto.user;

import com.hr.mxx.dto.BaseDto;

/**
 * Created by Joe on 2017/6/28 0028.
 */
public class UserDto extends BaseDto {

    private String id;
    private String userName;
    private String password;
    private String msg;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
