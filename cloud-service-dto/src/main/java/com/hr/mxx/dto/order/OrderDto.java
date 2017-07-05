package com.hr.mxx.dto.order;

import com.hr.mxx.dto.BaseDto;

import java.util.Date;

/**
 * Created by Joe on 2017/6/29 0029.
 */
public class OrderDto extends BaseDto {
    private String orderNum;
    private String price;
    private String status;
    private Date beginTime;

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getBeginTime() {
        return beginTime;
    }

    public void setBeginTime(Date beginTime) {
        this.beginTime = beginTime;
    }
}
