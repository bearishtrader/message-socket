package com.miniproject.messagewebsocket.controllers;

import com.miniproject.messagewebsocket.jsonmodel.MessageBody;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class MessageController {
    /**
     * For demo purposes reflect and publish the message back to all subscribed clients
     * @param message   Our chat message including any included base64 encoded image (into a string)
     * @return  MessageBody is essentially the same message sent to us reflected back but do processing on the text
     * @throws Exception
     */
    @MessageMapping("/send/message")
    @SendTo("/subscription/message")
    public MessageBody getMessage(MessageBody message) throws Exception {
        //Thread.sleep(1000); // simulated delay
        return new MessageBody(HtmlUtils.htmlEscape(message.getAuthor()), HtmlUtils.htmlEscape(message.getMessage()),
                message.getBase64ImageStr());
    }
}
