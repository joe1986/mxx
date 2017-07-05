package com.hr.mxx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 将Application放在最外层，也就是要包含所有子包 com.hr.mxx,否则无法扫描到所有注解的类
 *
 */
@SpringBootApplication
@EnableEurekaClient
public class CloudServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CloudServiceApplication.class, args);
	}

}
