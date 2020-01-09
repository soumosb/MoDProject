//package com.cognizant.authentication;
//
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
////import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
////import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
////import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//
//import com.cognizant.authentication.controller.UserController;
//import com.cognizant.authentication.model.User;
//import com.fasterxml.jackson.databind.ObjectMapper;
//
//@AutoConfigureMockMvc
//@SpringBootTest
//public class AuthenticationServiceApplicationTests {
//	@Autowired
//	private UserController userController;
//
//	@Autowired
//	private MockMvc mvc;
//
//	@Test
//	public void contextLoads() {
//		assertNotNull(userController);
//	}
//
//	@Test
//	public void testSignUpPositive() throws Exception {
//		User user = new User();
//		user.setUserName("debasmita");
//		user.setPassword("password");
//		user.setEmail("user@gmail.com");
//		user.setMobileNumber("8420617037");
//		mvc.perform(MockMvcRequestBuilders.post("/users").content(asJsonString(user))
//				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
//				.andExpect(MockMvcResultMatchers.status().isOk());
//
//	}
//
//	@Test
//	public void testSignUpNegative() throws Exception {
//		User user = new User();
//		user.setUserName("debasmita");
//		user.setPassword("password");
//		user.setEmail("user@gmail.com");
//		user.setMobileNumber("8420617037");
//		mvc.perform(MockMvcRequestBuilders.post("/users").content(asJsonString(user))
//				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
//				.andExpect(MockMvcResultMatchers.status().isBadRequest());
//
//	}
//
//	private static String asJsonString(final Object obj) {
//		try {
//			return new ObjectMapper().writeValueAsString(obj);
//		} catch (Exception e) {
//			throw new RuntimeException(e);
//		}
//	}
//
//}
