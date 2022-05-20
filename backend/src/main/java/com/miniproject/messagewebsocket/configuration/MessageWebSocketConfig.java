package com.miniproject.messagewebsocket.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketTransportRegistration;

@Configuration
@EnableWebSocketMessageBroker
public class MessageWebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/subscription"); // all clients are subscribed
        config.setApplicationDestinationPrefixes("/app");   // root URI where clients will send message requests
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/message-socket")
                .setAllowedOrigins("http://localhost:4200", "http://34.221.46.159:4200", "http://localhost:80", "http://34.221.46.159:80",
                        "http://localhost", "http://34.221.46.159")
                .withSockJS();
    }

    @Override
    public void configureWebSocketTransport(WebSocketTransportRegistration registry) {
        registry.setMessageSizeLimit(6242880); // default : 64 * 1024
        registry.setSendTimeLimit(30 * 10000); // default : 10 * 10000
        registry.setSendBufferSizeLimit(5 * 512 * 1024); // default : 512 * 1024
    }
}
