package com.miniproject.messagewebsocket.jsonmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MessageBody {
    private String author;
    private String message;
    private String base64ImageStr;  // Images are encoded as a base64 string since SockJS doesn't support binary
}
