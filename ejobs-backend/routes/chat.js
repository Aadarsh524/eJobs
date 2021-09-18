import Message from '../models/message.js'
import Chat from '../models/chat.js'
import express from 'express';
import auth from './auth.js';



const ChatRouter = express.Router();



// Get chat from "fromPerson" to "otherPerson", or create one
ChatRouter.post("/makeChat",auth, async(req, res) => {
  try {
   const fromPerson = req.user.id;
   const otherPerson = req.body.otherPerson;
    const chat = await Chat.findOne({ fromPerson, otherPerson });
    if (chat) {
      res.json(chat);
    } else {
      // Chat from "fromPerson" to "otherPerson"
      const newChat = new Chat({
        fromPerson,
        otherPerson,
        messages: [],
      });
      newChat.save((err) => {
        if (err) {
          res
            .send({
              err,
            })
            .status(500);
        } else {
          const revChat = new Chat({
            fromPerson: otherPerson,
            otherPerson: fromPerson,
            messages: [],
          });
          revChat.save((err) => {
            if (err) {
              res
                .send({
                  err,
                })
                .status(500);
            } else {
              res.json(revChat);
            }
          });
        }
      });
    }
  } catch (error) {
    res.status(500).send(" Server Error");
  }
});


// Send message from "fromPerson" to "otherPerson"
ChatRouter.post("/sendMessage",auth, async (req, res) => {

  const fromPerson = req.user.id;
  const otherPerson = req.body.otherPerson;
  const text  = req.body.text;

  console.log(req.body);
  try {
    const newMessage = new Message({
      text,
      fromPerson,
      otherPerson,
      timestamp: new Date().toUTCString(),
    });
  
    newMessage.save();
    let chat = await Chat.findOne({ otherPerson, fromPerson });
    if (!chat) {
      chat = new Chat({
        fromPerson,
        otherPerson,
        messages: [],
      });
      await chat.save();
    }
    let revChat = await Chat.findOne({
      otherPerson: fromPerson,
      fromPerson: otherPerson,
    });

    if (!revChat) {
      revChat = new Chat({
        fromPerson: otherPerson,
        otherPerson: fromPerson,
        messages: [],
      });
      await revChat.save();
    }
    revChat.messages.push(newMessage);
    chat.messages.push(newMessage);
    chat.save();
    await revChat.save();
   
    const allMessages = await Message.find();
    if (allMessages) {
      res.json(allMessages);
    } else {
     res.json({msg:"No Message"});
    }
 


  } catch (err) {
    res.send(err).status(500);
  }


});


// Get all messages of a chat
ChatRouter.get("/getAllMessages", auth ,async (req, res) => {
  try {
     const allMessages = await Message.find();
    if (allMessages) {
      res.json(allMessages);
    } else {
     res.json({msg:"No Message"});
    }
  } catch (err) {
    res.send(err).status(500);
  }
});

ChatRouter.get("/getUserRooms", auth ,async (req, res) => {
  try {
    const fromPerson  = req.user.id;
    const fromPersonContacts = await Chat.find({
      fromPerson
    });
    if (fromPersonContacts) {
      res.json(fromPersonContacts);
    } else {
     res.json({msg:"No Rooms yet"});
    }
  } catch (err) {
    res.send(err).status(500);
  }
});
export default ChatRouter;