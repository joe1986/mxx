/**
 * @(#)UserController.java, 十月 28, 2016.
 * <p>
 * Copyright 2016 fenbi.com. All rights reserved.
 * FENBI.COM PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.hr.mxx.order.rest;

import com.google.common.collect.Lists;
import com.hr.mxx.order.OrderService;
import com.hr.mxx.dto.order.OrderDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Joe
 *         create at 20170629003300001
 */
@RestController
@RequestMapping(value = "order")
public class OrderController {

    private static final Logger LOG = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    OrderService orderService;

    @RequestMapping("/list")
    public List<OrderDto> findList() {
        LOG.info("request come to here!");
        List<OrderDto> orderDtos = orderService.findList();
        OrderDto orderDto = new OrderDto();
        orderDto.setOrderNum("20170629003300001");
        orderDto.setPrice("100000.00");
        orderDto.setStatus("10001");
        orderDtos.add(orderDto);

        return orderDtos;
    }
}