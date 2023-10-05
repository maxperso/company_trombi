import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from "./pages/Onboarding";
import Content from "./pages/Content";
import {Button, extendTheme, NativeBaseProvider} from "native-base";
import Login from "./pages/Login";
import * as SecureStore from "expo-secure-store";
import { GROUP_AUTHORIZATION } from '@env';

// ChatClient.js

class ChatClient {
    constructor(serverAddress, onMessage, onError, onClose, onOpen) {
      this.ws = new WebSocket(serverAddress);
  
      this.ws.onopen = onOpen;
  
      this.ws.onmessage = onMessage;
  
      this.ws.onerror = onError;
  
      this.ws.onclose = onClose;
    }
  
    sendMessage(message) {
      if (this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(message);
      } else {
        console.warn("WebSocket is not open. Can't send message.");
      }
    }
  }
  
  export default ChatClient;
  


